-- =========================================================================
-- EchoMind English - Master Relational Database Schema (SQLite / PostgreSQL)
-- 英文式思考與 Shadowing 影子跟讀訓練器 - 總資料庫架構
-- =========================================================================

-- 1. 核心語塊總庫 (Master Chunks Table)
CREATE TABLE IF NOT EXISTS chunks (
    id VARCHAR(50) PRIMARY KEY,
    day_number INTEGER NOT NULL,          -- 1 to 100
    phase_number INTEGER NOT NULL,        -- 1 to 5 (每個階段 20 天)
    category VARCHAR(50) NOT NULL,        -- opening, survival, thinking, nuance, etc.
    category_name VARCHAR(100) NOT NULL,  -- 破冰問候, 免恐慌求生, 爭取時間...
    text TEXT NOT NULL,                   -- 核心英文語塊
    situational_meaning TEXT NOT NULL,    -- 自然情境語意（母語思維）
    literal_meaning TEXT NOT NULL,        -- 死板逐字直譯（反面教材警示）
    fast_speech_shape TEXT NOT NULL,      -- 口語連音形變與弱化 IPA
    fast_speech_note TEXT,                -- 音變規則詳解 (如 have 弱化、Flap T、顎化)
    stress_points TEXT,                   -- 重音關鍵字 (JSON Array 或逗號分隔)
    usage_when TEXT,                      -- 使用時機與語境
    no_panic_tip TEXT,                    -- 免恐慌生存應對指南
    dialogue_speaker_a TEXT,              -- 情境對話 A 句
    dialogue_speaker_b TEXT,              -- 情境對話 B 句
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. 使用者全域學習進度 (User Progress Table)
CREATE TABLE IF NOT EXISTS user_progress (
    user_id VARCHAR(50) PRIMARY KEY DEFAULT 'local_user',
    streak_days INTEGER DEFAULT 1,
    last_active_date DATE,
    total_mastered_chunks INTEGER DEFAULT 0,
    total_shadowing_sessions INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. 智慧間隔重複複習卡片 (SRS Cards Table)
CREATE TABLE IF NOT EXISTS srs_cards (
    chunk_id VARCHAR(50) PRIMARY KEY,
    interval_days INTEGER DEFAULT 1,      -- 1, 3, 7, 15 天
    ease_factor REAL DEFAULT 2.5,         -- SM-2 難易度加權係數
    review_count INTEGER DEFAULT 0,
    last_quality INTEGER,                 -- 1(卡住), 2(普通), 3(熟練), 4(秒殺)
    next_review_date DATE NOT NULL,
    last_reviewed_at TIMESTAMP,
    FOREIGN KEY (chunk_id) REFERENCES chunks(id) ON DELETE CASCADE
);

-- 4. 卡頓句型專屬資料庫 (Stuck Sentence Bank)
CREATE TABLE IF NOT EXISTS stuck_sentence_bank (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chunk_id VARCHAR(50) NOT NULL,
    stuck_reason TEXT,                    -- 聽力盲點、連音不懂、發音卡頓
    fail_count INTEGER DEFAULT 1,
    is_cleared BOOLEAN DEFAULT 0,         -- 是否已在 Shadowing Studio 攻克
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cleared_at TIMESTAMP,
    FOREIGN KEY (chunk_id) REFERENCES chunks(id) ON DELETE CASCADE
);

-- 5. Shadowing 跟讀錄音歷程 (Shadowing Sessions & Audio Metrics)
CREATE TABLE IF NOT EXISTS shadowing_sessions (
    id VARCHAR(50) PRIMARY KEY,
    chunk_id VARCHAR(50) NOT NULL,
    stage_number INTEGER NOT NULL,        -- 1(聽音辨識), 2(同步跟讀), 3(盲朗讀)
    duration_seconds REAL,
    playback_rate REAL DEFAULT 1.0,       -- 0.8x, 1.0x, 1.25x
    recognized_transcript TEXT,           -- Web Speech API 即時辨識出的語音文字
    accuracy_score INTEGER,               -- 匹配準確度 % (0 - 100)
    audio_blob_path TEXT,                 -- 本地錄音暫存檔路徑
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (chunk_id) REFERENCES chunks(id) ON DELETE CASCADE
);

-- 6. 情境模擬測驗答題紀錄 (Panic Quiz Logs)
CREATE TABLE IF NOT EXISTS quiz_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    quiz_id VARCHAR(50) NOT NULL,
    user_choice_id VARCHAR(10) NOT NULL,
    is_correct BOOLEAN NOT NULL,
    is_trap BOOLEAN NOT NULL,
    reaction_time_ms INTEGER,             -- 反應時間 (ms)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 建立索引加速查詢
CREATE INDEX IF NOT EXISTS idx_chunks_day ON chunks(day_number);
CREATE INDEX IF NOT EXISTS idx_chunks_phase ON chunks(phase_number);
CREATE INDEX IF NOT EXISTS idx_chunks_category ON chunks(category);
CREATE INDEX IF NOT EXISTS idx_srs_next_review ON srs_cards(next_review_date);
