// EchoMind English - Complete 100-Day Knowledge Base & Master Database Engine
// Designed based on Natural English Thinking & Podcast 1314 methodology

(function() {
  // 1. Comprehensive 100-Day Master Syllabus
  const syllabus100 = [
    // Phase 1: Days 1 - 20 (破除逐字直譯與生存破冰)
    { day: 1, phase: 1, topic: "經典破冰與反向發球", cat: "opening", catName: "破冰問候" },
    { day: 2, phase: 1, topic: "聽不懂時的免恐慌叫停", cat: "survival", catName: "免恐慌求生" },
    { day: 3, phase: 1, topic: "爭取思考時間的黃金緩衝", cat: "thinking", catName: "爭取時間" },
    { day: 4, phase: 1, topic: "委婉立場與話題自然推進", cat: "nuance", catName: "委婉推進" },
    { day: 5, phase: 1, topic: "會議禮貌插話與澄清盲點", cat: "interrupt", catName: "禮貌打斷" },
    { day: 6, phase: 1, topic: "高階同意與豁達心態", cat: "advanced", catName: "高階流暢" },
    { day: 7, phase: 1, topic: "週進度結算與下週約定", cat: "workplace", catName: "職場進度" },
    { day: 8, phase: 1, topic: "線上會議連線與音訊排查", cat: "survival", catName: "免恐慌求生" },
    { day: 9, phase: 1, topic: "餐敘點餐與社交破冰", cat: "social", catName: "社交生活" },
    { day: 10, phase: 1, topic: "階段首期驗收與卡頓庫盤點", cat: "milestone", catName: "階段里程碑" },
    { day: 11, phase: 1, topic: "重述對方意圖的錨點語塊", cat: "active_listening", catName: "積極傾聽" },
    { day: 12, phase: 1, topic: "面對尖銳問題的情緒降溫", cat: "thinking", catName: "爭取時間" },
    { day: 13, phase: 1, topic: "拒絕不合理要求的委婉起手式", cat: "nuance", catName: "委婉推進" },
    { day: 14, phase: 1, topic: "承認忘詞與失誤而不尷尬", cat: "survival", catName: "免恐慌求生" },
    { day: 15, phase: 1, topic: "邀請對方給予反饋與共識確認", cat: "opening", catName: "破冰問候" },
    { day: 16, phase: 1, topic: "辦公室走廊隨機巧遇寒暄", cat: "social", catName: "社交生活" },
    { day: 17, phase: 1, topic: "視訊分享螢幕時的操作墊檔詞", cat: "workplace", catName: "職場進度" },
    { day: 18, phase: 1, topic: "表達模糊記憶與不完全承諾", cat: "thinking", catName: "爭取時間" },
    { day: 19, phase: 1, topic: "優雅結束話題並脫身的台階句", cat: "opening", catName: "破冰問候" },
    { day: 20, phase: 1, topic: "【第一階段大考驗】200 塊生存盲測", cat: "milestone", catName: "階段里程碑" },

    // Phase 2: Days 21 - 40 (連音弱化與聽覺預測力)
    { day: 21, phase: 2, topic: "What are you gonna do 縮讀弱化", cat: "fast_speech", catName: "連音形變" },
    { day: 22, phase: 2, topic: "情態動詞 have 弱化 (woulda, coulda)", cat: "fast_speech", catName: "連音形變" },
    { day: 23, phase: 2, topic: "美音 Flap-T 閃音的快速辨識", cat: "fast_speech", catName: "連音形變" },
    { day: 24, phase: 2, topic: "字尾輔音脫落與滑音連讀", cat: "fast_speech", catName: "連音形變" },
    { day: 25, phase: 2, topic: "母語者最高頻口頭語塊形變", cat: "fast_speech", catName: "連音形變" },
    { day: 26, phase: 2, topic: "順帶一提的自然轉移 (By the way)", cat: "transitions", catName: "話題轉換" },
    { day: 27, phase: 2, topic: "沿著上個話題深入 (On that note)", cat: "transitions", catName: "話題轉換" },
    { day: 28, phase: 2, topic: "將扯遠的話題拉回主線", cat: "transitions", catName: "話題轉換" },
    { day: 29, phase: 2, topic: "插播提醒與趁記憶猶新", cat: "transitions", catName: "話題轉換" },
    { day: 30, phase: 2, topic: "對話結尾前的最後總括", cat: "transitions", catName: "話題轉換" },
    { day: 31, phase: 2, topic: "憑印象估算的自保守則", cat: "hedging", catName: "防衛語意" },
    { day: 32, phase: 2, topic: "據目前已知資訊的留白藝術", cat: "hedging", catName: "防衛語意" },
    { day: 33, phase: 2, topic: "謙虛提出個人看法 (In my view)", cat: "hedging", catName: "防衛語意" },
    { day: 34, phase: 2, topic: "未經證實傳言的保留態度", cat: "hedging", catName: "防衛語意" },
    { day: 35, phase: 2, topic: "為建議打預防針 (For what it's worth)", cat: "hedging", catName: "防衛語意" },
    { day: 36, phase: 2, topic: "表達深有同感 (Tell me about it)", cat: "empathy", catName: "同理共鳴" },
    { day: 37, phase: 2, topic: "安撫同仁挫折情緒 (Hang in there)", cat: "empathy", catName: "同理共鳴" },
    { day: 38, phase: 2, topic: "讚揚對方洞見 (You have a point)", cat: "empathy", catName: "同理共鳴" },
    { day: 39, phase: 2, topic: "分享共同經歷的辛酸與無奈", cat: "empathy", catName: "同理共鳴" },
    { day: 40, phase: 2, topic: "【第二階段大考驗】400 塊連音盲聽", cat: "milestone", catName: "階段里程碑" },

    // Phase 3: Days 41 - 60 (觀點碰撞與委婉折衷)
    { day: 41, phase: 3, topic: "高情商先肯定再轉折 (Yes, but)", cat: "diplomacy", catName: "委婉折衷" },
    { day: 42, phase: 3, topic: "提出建設性批評的打預防針句", cat: "diplomacy", catName: "委婉折衷" },
    { day: 43, phase: 3, topic: "以客觀數據替代主觀情緒批評", cat: "diplomacy", catName: "委婉折衷" },
    { day: 44, phase: 3, topic: "化解跨部門爭議的中立立場句", cat: "diplomacy", catName: "委婉折衷" },
    { day: 45, phase: 3, topic: "表達底線但維持夥伴友好", cat: "diplomacy", catName: "委婉折衷" },
    { day: 46, phase: 3, topic: "會議收斂：說到底核心是什麼", cat: "bottom_line", catName: "核心收斂" },
    { day: 47, phase: 3, topic: "評估最壞打算與風險承受度", cat: "bottom_line", catName: "核心收斂" },
    { day: 48, phase: 3, topic: "聚焦唯一關鍵指標 (North Star)", cat: "bottom_line", catName: "核心收斂" },
    { day: 49, phase: 3, topic: "在有限資源下的優先級取捨", cat: "bottom_line", catName: "核心收斂" },
    { day: 50, phase: 3, topic: "達成協議與彼此退讓折衷", cat: "bottom_line", catName: "核心收斂" },
    { day: 51, phase: 3, topic: "多人會議搶麥克風的禮貌句", cat: "interruption", catName: "發言掌控" },
    { day: 52, phase: 3, topic: "煞車及時確認關鍵數據再前進", cat: "interruption", catName: "發言掌控" },
    { day: 53, phase: 3, topic: "補充遺漏重點的快速過渡詞", cat: "interruption", catName: "發言掌控" },
    { day: 54, phase: 3, topic: "委婉指正他人記憶中的偏差", cat: "interruption", catName: "發言掌控" },
    { day: 55, phase: 3, topic: "被插話後重新拿回主導權", cat: "interruption", catName: "發言掌控" },
    { day: 56, phase: 3, topic: "要求對方逐步解說 (Walk through)", cat: "facilitation", catName: "條理說明" },
    { day: 57, phase: 3, topic: "拆解複雜架構為簡易模組", cat: "facilitation", catName: "條理說明" },
    { day: 58, phase: 3, topic: "確認各利害關係人的負責範圍", cat: "facilitation", catName: "條理說明" },
    { day: 59, phase: 3, topic: "以具體案例說明抽象理論", cat: "facilitation", catName: "條理說明" },
    { day: 60, phase: 3, topic: "【第三階段大考驗】600 塊觀點交涉", cat: "milestone", catName: "階段里程碑" },

    // Phase 4: Days 61 - 80 (高壓職場應變與專業說服)
    { day: 61, phase: 4, topic: "敏捷早會 30 秒俐落進度匯報", cat: "standup", catName: "敏捷早會" },
    { day: 62, phase: 4, topic: "清楚陳述阻礙與相依性 (Blocker)", cat: "standup", catName: "敏捷早會" },
    { day: 63, phase: 4, topic: "主動尋求跨組協作與資源支援", cat: "standup", catName: "敏捷早會" },
    { day: 64, phase: 4, topic: "進度跟進與線下對齊 (Take offline)", cat: "standup", catName: "敏捷早會" },
    { day: 65, phase: 4, topic: "承諾下次碰面檢視成果 (Touch base)", cat: "standup", catName: "敏捷早會" },
    { day: 66, phase: 4, topic: "誠實說明專案延期的專業口氣", cat: "crisis", catName: "危機協商" },
    { day: 67, phase: 4, topic: "面對客戶抱怨時的致歉與挽回", cat: "crisis", catName: "危機協商" },
    { day: 68, phase: 4, topic: "突發系統異常的緊急通報語塊", cat: "crisis", catName: "危機協商" },
    { day: 69, phase: 4, topic: "安撫合作夥伴並提供替代路徑", cat: "crisis", catName: "危機協商" },
    { day: 70, phase: 4, topic: "危機解除後的檢討與後續追蹤", cat: "crisis", catName: "危機協商" },
    { day: 71, phase: 4, topic: "簡報開場抓住觀眾注意力的鉤子", cat: "presentation", catName: "專業簡報" },
    { day: 72, phase: 4, topic: "圖表與數據呈現時的轉折詞", cat: "presentation", catName: "專業簡報" },
    { day: 73, phase: 4, topic: "處理簡報 Q&A 棘手發問的擋箭牌", cat: "presentation", catName: "專業簡報" },
    { day: 74, phase: 4, topic: "簡報結論與號召行動 (Call to Action)", cat: "presentation", catName: "專業簡報" },
    { day: 75, phase: 4, topic: "超時控制與禮貌打圓場", cat: "presentation", catName: "專業簡報" },
    { day: 76, phase: 4, topic: "商務報價談判中的心理博弈", cat: "negotiation", catName: "商務談判" },
    { day: 77, phase: 4, topic: "相互讓步的雙贏談判 (Give & take)", cat: "negotiation", catName: "商務談判" },
    { day: 78, phase: 4, topic: "為公司爭取更多權益的試探提問", cat: "negotiation", catName: "商務談判" },
    { day: 79, phase: 4, topic: "最終拍板定案的專業用語", cat: "negotiation", catName: "商務談判" },
    { day: 80, phase: 4, topic: "【第四階段大考驗】800 塊高壓模擬", cat: "milestone", catName: "階段里程碑" },

    // Phase 5: Days 81 - 100 (母語直覺、幽默與即興流暢)
    { day: 81, phase: 5, topic: "開門見山直接切題 (Cut to the chase)", cat: "idioms", catName: "道地成語" },
    { day: 82, phase: 5, topic: "話到嘴邊與記憶喚起 (Tip of my tongue)", cat: "idioms", catName: "道地成語" },
    { day: 83, phase: 5, topic: "隨機應變看情況行事 (Play it by ear)", cat: "idioms", catName: "道地成語" },
    { day: 84, phase: 5, topic: "大度不記仇的豁達 (No hard feelings)", cat: "idioms", catName: "道地成語" },
    { day: 85, phase: 5, topic: "見好就收宣布下班 (Call it a day)", cat: "idioms", catName: "道地成語" },
    { day: 86, phase: 5, topic: "接受無法改變的客觀事實 (It is what it is)", cat: "mindset", catName: "母語鬆弛感" },
    { day: 87, phase: 5, topic: "幽默自嘲與化解全場緊繃氛圍", cat: "mindset", catName: "母語鬆弛感" },
    { day: 88, phase: 5, topic: "讚美他人做到極致 (You nailed it)", cat: "mindset", catName: "母語鬆弛感" },
    { day: 89, phase: 5, topic: "表達難以抉擇的糾結 (Torn between)", cat: "mindset", catName: "母語鬆弛感" },
    { day: 90, phase: 5, topic: "以輕鬆幽默方式結識新朋友", cat: "social_humor", catName: "幽默社交" },
    { day: 91, phase: 5, topic: "跨文化英式幽默 vs 美式幽默差異", cat: "culture", catName: "文化隱喻" },
    { day: 92, phase: 5, topic: "美式運動隱喻 (Touch base, Curveball)", cat: "culture", catName: "文化隱喻" },
    { day: 93, phase: 5, topic: "美食、電影與流行文化深入探討", cat: "culture", catName: "文化隱喻" },
    { day: 94, phase: 5, topic: "深度哲學與職涯價值觀探討", cat: "depth", catName: "深度思維" },
    { day: 95, phase: 5, topic: "表達真摯感謝與深層人際連結", cat: "depth", catName: "深度思維" },
    { day: 96, phase: 5, topic: "【衝刺日 1】高頻 100 塊盲聽盲答總集結", cat: "sprint", catName: "巔峰衝刺" },
    { day: 97, phase: 5, topic: "【衝刺日 2】卡頓句型庫零死角終極清空", cat: "sprint", catName: "巔峰衝刺" },
    { day: 98, phase: 5, topic: "【衝刺日 3】全隨機速度 1.25x 壓力挑戰", cat: "sprint", catName: "巔峰衝刺" },
    { day: 99, phase: 5, topic: "【衝刺日 4】15 分鐘全英語盲測實戰", cat: "sprint", catName: "巔峰衝刺" },
    { day: 100, phase: 5, topic: "【巔峰里程碑】突破 1000 塊 • 內化直覺英語大腦！", cat: "mastery", catName: "大腦質變" }
  ];

  // 2. High-Fidelity Thematic Chunk Dictionary for Every Phase & Topic
  const topicChunksDirectory = {
    // Phase 1 (Days 1 - 20)
    "opening": [
      { text: "How's it going?", sit: "最近過得如何？最近好嗎？", lit: "它正在如何走？", fast: "How'zit goin'? [/haʊzɪt ˈɡoʊɪn/]", note: "How is 縮合成 How's，與 it 連音形成 /haʊzɪt/。" },
      { text: "What have you been up to?", sit: "你最近在忙什麼呀？有什麼新鮮事嗎？", lit: "你一直直到上面在做什麼？", fast: "What'cha been up to? [/ˈwʌtʃə bɪn ʌp tuː/]", note: "What have you 快速連讀時 have 弱化脫落，What+you 顎化發出 /tʃə/。" },
      { text: "Good to finally meet you in person.", sit: "很高興終於見到你本人了！", lit: "好的去最後遇見你在人身上。", fast: "Good ta finally meetcha in person.", note: "meet you 連讀顎化為 meetcha /miːtʃə/。" },
      { text: "How's your week been treating you?", sit: "這星期過得還順心嗎？這週還好吧？", lit: "你的週一直如何對待你？", fast: "How's yer week been treatin' ya?", note: "your 弱化為 yer，treating 字尾 g 脫落。" },
      { text: "I haven't seen you around lately.", sit: "最近都沒怎麼看到你耶！", lit: "我最近沒有在周圍看到你。", fast: "I haven' seen ya 'round lately.", note: "around 吞音變 'round。" },
      { text: "Did you catch the news about...?", sit: "你有看到/聽說關於...的新聞嗎？", lit: "你有抓住那個新聞關於...嗎？", fast: "Didja catch the news about...?", note: "Did you 自然連讀為 Didja。" },
      { text: "What brings you here today?", sit: "今天是什麼風把你吹來啦？", lit: "什麼把你帶到這裡今天？", fast: "What brings ya here t'day?", note: "比 Why are you here 禮貌一百倍。" },
      { text: "Are you free for a quick chat?", sit: "你現在方便借一步說兩句話嗎？", lit: "你是自由的為了一個快速聊天嗎？", fast: "Ya free fer a quick chat?", note: "for a 連音變 fer a。" },
      { text: "I'll let you get back to it.", sit: "我就不打擾你了，你先忙吧！", lit: "我將讓你回到它。", fast: "I'll letcha get back to it.", note: "let you 顎化為 letcha。" },
      { text: "Catch you later!", sit: "回頭見！下次聊！", lit: "稍後抓住你！", fast: "Catcha later!", note: "Catch you 縮略為 Catcha。" }
    ],
    "survival": [
      { text: "I'm not sure I follow.", sit: "我不太明白你的意思/有點沒跟上。", lit: "我不確定我跟隨。", fast: "I'm not sure I follow. [/aɪm nɑːt ʃʊr aɪ ˈfɑːloʊ/]", note: "not sure 稍作停頓，語氣誠懇不卑微。" },
      { text: "Let me make sure I understand.", sit: "讓我確認一下我有沒有理解正確。", lit: "讓我確認我理解。", fast: "Lemme make sure I understan'.", note: "Let me 連音為 Lemme。" },
      { text: "Sorry, I missed the last part.", sit: "不好意思，你最後那句我沒聽清，可以重述嗎？", lit: "抱歉，我錯過了最後的部分。", fast: "Sorry, I missed the las' part.", note: "last 的 t 弱化脫落。" },
      { text: "Could you explain that another way?", sit: "你可以換個方式說明一下嗎？", lit: "你能用另一種方式解釋那個嗎？", fast: "Couldja explain that 'nother way?", note: "Could you 顎化為 Couldja。" },
      { text: "What you're saying is...", sit: "所以你的意思是... / 也就是說...", lit: "你正在說的是...", fast: "What yer sayin' is...", note: "you're 弱化為 yer。" },
      { text: "Are you saying that...?", sit: "你的意思是說...嗎？", lit: "你正在說那個...嗎？", fast: "Ya sayin' that...?", note: "Are you 略成 Ya。" },
      { text: "Come again?", sit: "不好意思，你說什麼？麻煩再說一次？", lit: "再來一次？", fast: "C'm again? [/kəm əˈɡen/]", note: "Come 弱化吞音，快速連音。" },
      { text: "Am I making any sense?", sit: "我有講清楚嗎？我有表達明白嗎？", lit: "我正在製造任何感覺嗎？", fast: "Am I makin' any sense?", note: "making 字尾 g 脫落。" },
      { text: "Do you know what I mean?", sit: "你懂我意思吧？明白那種感覺嗎？", lit: "你知道我意味著什麼嗎？", fast: "Ya know what I mean?", note: "Do you 縮為 Ya。" },
      { text: "Does that make sense to you?", sit: "這樣講通順嗎？你覺得合理嗎？", lit: "那對你有製造道理嗎？", fast: "Does that make sense t'ya?", note: "to you 弱讀為 t'ya。" }
    ],
    "thinking": [
      { text: "Let me think for a second.", sit: "讓我想一下喔...（從容爭取 5-10 秒組織語言）", lit: "讓我思考為了一秒。", fast: "Lemme think fer a second.", note: "for a 連音變 fer a。" },
      { text: "That's a really good question.", sit: "這問題問得真好！（爭取 3 秒思考對策）", lit: "那是一個非常好的問題。", fast: "That's a really good question.", note: "really 音節拉長強調。" },
      { text: "How should I put this?", sit: "該怎麼說呢... / 我該如何表達比較好呢？", lit: "我應該如何放置這個？", fast: "How should I put this?", note: "should I 連音為 should-I。" },
      { text: "Off the top of my head...", sit: "憑直覺想到的話 / 憑記憶不查資料的話...", lit: "脫離我頭的頂部...", fast: "Off the top of my head...", note: "top of 連讀為 /tɑːpəv/。" },
      { text: "To be completely honest with you...", sit: "坦白跟你說吧 / 說心裡話...", lit: "為了是完全誠實與你...", fast: "Ta be completely hones' with ya...", note: "honest 的 t 弱化。" },
      { text: "As far as I know...", sit: "就我目前所知 / 據我了解...", lit: "就如遠如同我知道...", fast: "As far as I know...", note: "far as I 連讀形成 /fɑːrəzaɪ/。" },
      { text: "The thing is...", sit: "問題是這樣的 / 重點在於...（轉折引出真正困難）", lit: "事情是...", fast: "The thing is...", note: "thing is 連讀為 /θɪŋɪz/。" },
      { text: "It's on the tip of my tongue.", sit: "就在我嘴邊了！一時叫不出名字！", lit: "它在我舌頭的尖端上。", fast: "It's on the tip of my tongue.", note: "tip of 連音為 /tɪpəv/。" },
      { text: "If I'm not mistaken...", sit: "如果我沒記錯的話 / 沒弄錯的話...", lit: "如果我不是被弄錯...", fast: "If I'm not mistaken...", note: "not 的 t 常無爆破音。" },
      { text: "Give me just a second to pull that up.", sit: "稍等我一下，我把檔案開出來給你看。", lit: "給我剛好一秒去拉那個上來。", fast: "Gimme just a sec to pull that up.", note: "Give me 縮為 Gimme。" }
    ],

    // Phase 2 (Days 21 - 40)
    "fast_speech": [
      { text: "Whatcha gonna do about it?", sit: "你打算拿這件事怎麼辦？", lit: "你將要做什麼關於它？", fast: "Whatcha gonna do 'bout it? [/ˈwʌtʃə ˈɡənə duː baʊt ɪt/]", note: "What are you 縮為 Whatcha，going to 變 gonna。" },
      { text: "I woulda told you if I knew.", sit: "如果我早知道，我早就告訴你了！", lit: "我將已經告訴你...", fast: "I woulda toldja if I knew.", note: "would have 弱化為 woulda，told you 變 toldja。" },
      { text: "You shoulda seen his reaction!", sit: "你真該看看他當時的表情！", lit: "你應該已經看見他的反應！", fast: "You shoulda seen his reaction!", note: "should have 弱化為 shoulda。" },
      { text: "Coulda been worse, honestly.", sit: "坦白說，情況本來可能會更糟的。", lit: "能已經更壞，誠實地。", fast: "Coulda been worse, honestly.", note: "could have 弱化為 coulda。" },
      { text: "Forget about it!", sit: "算了吧 / 別提了 / 小事一樁！", lit: "忘記關於它！", fast: "Forget about it! [/fərˈɡet əˈbaʊt ɪt/]", note: "美音典型 Flap-T，音節滑順相連。" },
      { text: "Get out of here!", sit: "少來了！真的假的！（驚訝非趕人）", lit: "得到外面於這裡！", fast: "Get outta here! [/ɡet ˈaʊtə hɪr/]", note: "out of 縮讀為 outta。" },
      { text: "Wait a minute, hold on.", sit: "等等喔，稍等一下。", lit: "等待一分鐘，抓住上面。", fast: "Wait-a-minute, hol' on.", note: "wait a 連音，hold 的 d 弱化。" },
      { text: "Kinda busy right now.", sit: "我現在手頭上有點忙。", lit: "種類忙碌剛好現在。", fast: "Kinda busy right now.", note: "kind of 縮讀為 kinda。" },
      { text: "Sorta like that, yeah.", sit: "差不多就是那個意思，對。", lit: "種類像那樣，是。", fast: "Sorta like that, yeah.", note: "sort of 縮讀為 sorta。" },
      { text: "Dunno what to say.", sit: "我一時也不知道該說什麼好。", lit: "不知道什麼去說。", fast: "Dunno what ta say.", note: "don't know 縮讀為 dunno。" }
    ],
    "transitions": [
      { text: "Speaking of which, did you see the email?", sit: "說到這個，你有看到那封信嗎？", lit: "說著這個哪一個...", fast: "Speakin' of which...", note: "speaking 字尾 g 脫落。" },
      { text: "On that note, let's wrap this up.", sit: "既然講到這裡，我們今天就先收尾吧。", lit: "在那個音符上...", fast: "On that note, let's wrap this up.", note: "wrap this up 連音流暢。" },
      { text: "Before I forget, here is the file.", sit: "趁我還沒忘記，檔案先傳給你。", lit: "在我忘記之前...", fast: "Before I forget, here's the file.", note: "Before I 連音為 /bɪˈfɔːraɪ/。" },
      { text: "Getting back to your question...", sit: "回到你剛才問的問題...", lit: "正在回到你的問題...", fast: "Gettin' back ta yer question...", note: "Getting 字尾 g 脫落，to 變 ta。" },
      { text: "While I have you on the line...", sit: "既然剛好跟你通話/對話，順便問一下...", lit: "當我擁有你在線上...", fast: "While I have ya on the line...", note: "you 弱化為 ya。" },
      { text: "That reminds me of something.", sit: "這倒讓我想起了一件事。", lit: "那提醒我關於某事。", fast: "That reminds me of somethin'.", note: "reminds me 連音。" },
      { text: "Long story short, we got the contract.", sit: "長話短說，我們拿到合約了！", lit: "長故事短...", fast: "Long story short...", note: "母語者最高頻總結短語。" },
      { text: "To make a long story short...", sit: "總之說來話長，結果是...", lit: "去製造一個長故事短...", fast: "Ta make a long story short...", note: "To 弱化為 ta。" },
      { text: "All in all, the launch was successful.", sit: "總體而言，這次上線非常成功。", lit: "全部在全部...", fast: "All in all, the launch was successful.", note: "All in all 連讀為 /ɔːlɪnɔːl/。" },
      { text: "The takeaway here is straightforward.", sit: "這裡的核心重點非常明確。", lit: "帶走在這裡是直接的。", fast: "The takeaway here is straightforward.", note: "takeaway 為職場核心總結詞。" }
    ],
    "empathy": [
      { text: "Tell me about it!", sit: "可不是嘛！太有同感了！（強烈共鳴）", lit: "告訴我關於它！", fast: "Tell me 'bout it!", note: "about 弱化為 'bout。" },
      { text: "I feel your pain.", sit: "我完全能體會你的辛苦與委屈。", lit: "我感覺你的疼痛。", fast: "I feel yer pain.", note: "your 弱化為 yer。" },
      { text: "Hang in there, you got this!", sit: "撐住喔！你一定沒問題的！", lit: "懸掛在那裡，你得到這個！", fast: "Hang in there, ya got this!", note: "you 弱化為 ya。" },
      { text: "You can say that again!", sit: "我不能同意你更多了！千真萬確！", lit: "你能再說一次那個！", fast: "You can say that again!", note: "表示百分之百極度贊成。" },
      { text: "Join the club, we're all exhausted.", sit: "歡迎加入俱樂部（大家也都這樣累啦）！", lit: "加入俱樂部...", fast: "Join the club, we're all exhausted.", note: "美式幽默同理心表達。" },
      { text: "I know the feeling all too well.", sit: "那種感覺我再清楚不過了。", lit: "我知道那個感覺全部太好。", fast: "I know the feelin' all too well.", note: "feeling 字尾 g 脫落。" },
      { text: "It's been one of those weeks.", sit: "這星期真是諸事不順/心力交瘁啊。", lit: "它已經是那些星期中的一個。", fast: "It's been one of those weeks.", note: "been one of 連讀。" },
      { text: "The struggle is real, my friend.", sit: "這困難真是太真實了/真不容易啊。", lit: "掙扎是真實的，我的朋友。", fast: "The struggle is real...", note: "struggle is 連音。" },
      { text: "You've got a fair point there.", sit: "你說的確實很有道理。", lit: "你得到了一個公平點在那裡。", fast: "You've gotta fair point there.", note: "got a 連音為 gotta。" },
      { text: "Credit where credit is due.", sit: "該給的功勞絕不能少/說句公道話。", lit: "信用在哪裡信用是應得的。", fast: "Credit where credit is due.", note: "展現高風度客觀讚揚。" }
    ],

    // Phase 3 (Days 41 - 60)
    "diplomacy": [
      { text: "I see where you're coming from, but...", sit: "我完全明白你的出發點，但是...", lit: "我看見你正從哪裡來，但是...", fast: "I see where yer comin' from, but...", note: "先肯定再轉折的高情商典範。" },
      { text: "Don't get me wrong, it's a solid plan.", sit: "別誤會我的意思，這方案很棒，但...", lit: "不要得到我錯誤...", fast: "Don' get me wrong...", note: "提出建設性批評前打預防針。" },
      { text: "With all due respect, I disagree.", sit: "恕我直言，我抱持不同看法。", lit: "帶著所有應得的尊敬...", fast: "With all due respect...", note: "正式會議中最莊重禮貌的異議。" },
      { text: "Please don't take this the wrong way.", sit: "請千萬別往心裡去/別誤解我的初衷。", lit: "請不要拿這個錯誤的方式。", fast: "Please don' take this the wrong way.", note: "take this 連音。" },
      { text: "Just playing devil's advocate here...", sit: "我只是故意唱個反調/從反面視角思考...", lit: "只是扮演惡魔的代言人...", fast: "Just playin' devil's advocate here...", note: "讓團隊思考潛在風險的高級溝通術。" },
      { text: "I agree with you up to a point.", sit: "在某種程度上我同意，但是...", lit: "我同意你直到一個點。", fast: "I agree with ya up to a point.", note: "避免全盤附和，保留理性立場。" },
      { text: "The numbers tell a different story.", sit: "但客觀數據呈現出來的結果不太一樣。", lit: "數字告訴一個不同的故事。", fast: "The numbers tell a different story.", note: "用客觀數據替代主觀情緒質疑。" },
      { text: "Let's find some common ground.", sit: "我們來找出彼此的共同交集點吧。", lit: "讓我們找到一些共同地面。", fast: "Let's find some common ground.", note: "跨部門談判拉近距離金句。" },
      { text: "We have to draw the line somewhere.", sit: "我們必須在某個地方劃定底線/原則。", lit: "我們必須畫線在某處。", fast: "We have ta draw the line somewhere.", note: "溫和但堅定捍衛資源與時程。" },
      { text: "Our hands are tied on this matter.", sit: "在這件事上我們實在無能為力/受限政策。", lit: "我們的手被綁在...", fast: "Our hands're tied on this matter.", note: "表達客觀限制非故意刁難。" }
    ],
    "bottom_line": [
      { text: "The bottom line is, we need more time.", sit: "說到底，我們就是需要更多時間。", lit: "底部線是...", fast: "The bottom line is...", note: "bottom 閃音化，line is 連讀。" },
      { text: "At the end of the day, quality matters most.", sit: "歸根究底，品質才是最重要的。", lit: "在一天結束的時候...", fast: "At the end of the day...", note: "end of 連音為 /endəv/。" },
      { text: "It all boils down to execution.", sit: "一切關鍵終究在於執行力。", lit: "它全部煮沸下來到...", fast: "It all boils down to execution.", note: "boils down to 核心片語。" },
      { text: "What's the worst-case scenario?", sit: "最壞的情況可能會是怎樣？", lit: "什麼是最壞情況的劇本？", fast: "What's the worst-case scenario?", note: "評估潛在風險承受度。" },
      { text: "If push comes to shove, we have a backup.", sit: "如果真的到了緊要關頭，我們有備案。", lit: "如果推擠來到推擠...", fast: "If push comes ta shove...", note: "美式道地諺語，意指被逼到絕境。" },
      { text: "What's our North Star metric here?", sit: "我們這個專案的北極星核心指標是什麼？", lit: "什麼是我們的北極星測量？", fast: "What's our North Star metric here?", note: "引導團隊聚焦關鍵結果。" },
      { text: "Let's prioritize ruthlessly.", sit: "我們必須嚴格過濾、果斷排序優先級！", lit: "讓我們無情地優先化。", fast: "Let's prioritize ruthlessly.", note: "資源有限時必備決策口吻。" },
      { text: "Fair enough, I can live with that.", sit: "合情合理，這方案我可以接受妥協。", lit: "公平足夠，我能帶著那個活。", fast: "Fair enough, I can live with that.", note: "快速拍板各退一步的最佳結尾。" },
      { text: "It's a win-win situation for both sides.", sit: "這對雙方來說是個雙贏局面。", lit: "這是一個贏贏的情況...", fast: "It's a win-win situation...", note: "商業協商標準句型。" },
      { text: "Let's shake on it and move forward.", sit: "我們成交/達成共識，開始推進吧！", lit: "讓我們在它上面握手...", fast: "Let's shake on it...", note: "shake on it 連音流暢。" }
    ],
    "interruption": [
      { text: "Sorry to jump in, but we have a hard stop.", sit: "抱歉插句話，我們時間快到了必須準時結束。", lit: "抱歉跳進來，但我們有硬停止。", fast: "Sorry ta jump in...", note: "to 弱化為 ta。" },
      { text: "Before we move on, who owns this task?", sit: "在換主題之前，確認一下這項誰負責？", lit: "在我們往前移動之前...", fast: "Before we move on...", note: "move on 連讀為 /muːvɑːn/。" },
      { text: "Can I just add one quick thing?", sit: "我可以順帶補充一小點嗎？", lit: "我能只是加一件快速事情嗎？", fast: "Can I just add one quick thing?", note: "Can I 連音為 /kænaɪ/。" },
      { text: "Correct me if I'm wrong, but wasn't it $10k?", sit: "如果有錯請指正，但之前不是說一萬嗎？", lit: "糾正我如果我是錯誤的...", fast: "Correct me if I'm wrong...", note: "委婉提出不同記憶。" },
      { text: "If I could just finish my thought...", sit: "請先讓我把這句話/想法說完好嗎？", lit: "如果我能只是完成我的思想...", fast: "If I could just finish my thought...", note: "優雅奪回被奪走的話語權。" },
      { text: "Hold that thought, I'm almost done.", sit: "請先記住你想說的，我馬上講完！", lit: "抓住那個思想...", fast: "Hold that thought...", note: "自信控場必備。" },
      { text: "Could you walk me through that step?", sit: "你可以一步一步帶我走一遍那流程嗎？", lit: "你能走過我穿過那一步？", fast: "Couldja walk me through that step?", note: "Could you 顎化為 Couldja。" },
      { text: "Break it down for me step by step.", sit: "幫我一步一步拆解細節好嗎？", lit: "打破它向下為了我...", fast: "Break it down fer me...", note: "for 弱化為 fer。" },
      { text: "Where does the buck stop on this?", sit: "這件事情最終拍板負全責的是誰？", lit: "雄鹿在哪裡停止...", fast: "Where does the buck stop?", note: "經典美式政治與商務諺語。" },
      { text: "Can you give a concrete use case?", sit: "可以舉一個具體的使用場景範例嗎？", lit: "你能給一個具體的使用案例嗎？", fast: "Can you give a concrete use case?", note: "化解抽象空談的神器。" }
    ],

    // Phase 4 (Days 61 - 80)
    "standup": [
      { text: "I'm currently blocked by the API auth.", sit: "我目前被 API 認證問題卡住了 (Blocker)。", lit: "我目前被阻擋被...", fast: "I'm currently blocked by...", note: "敏捷早會最高頻字眼。" },
      { text: "I have zero blockers today.", sit: "我今天進度順暢，沒有任何卡關點！", lit: "我今天擁有零阻礙。", fast: "I have zero blockers t'day.", note: "today 弱化為 t'day。" },
      { text: "Let's take this discussion offline.", sit: "我們私下/會後再單獨對這件事，不耽誤大家。", lit: "讓我們拿這個討論離線。", fast: "Let's take this discussion offline.", note: "會議控時必備神句。" },
      { text: "Let's touch base this afternoon.", sit: "我們今天下午再快速碰一下進度。", lit: "讓我們今天下午觸摸基地。", fast: "Let's touch base this afternoon.", note: "touch base 一氣呵成。" },
      { text: "I'll keep everyone posted on Slack.", sit: "有任何最新狀況我會在 Slack 即時同步大家。", lit: "我會張貼每個人在 Slack...", fast: "I'll keep everyone posted on Slack.", note: "展示負責任的主動溝通。" },
      { text: "We're on track to ship by Friday.", sit: "我們進度完全正常，週五可如期交付！", lit: "我們在軌道上去船運被週五。", fast: "We're on track ta ship by Friday.", note: "on track 為進度順暢標準語塊。" },
      { text: "I'll circle back with you after lunch.", sit: "午餐後我再來找你核對/確認後續。", lit: "我將盤旋回來與你...", fast: "I'll circle back with ya after lunch.", note: "circle back 為商務高頻詞。" },
      { text: "Could you lend a hand on the migration?", sit: "資料庫遷移你能搭把手幫忙一下嗎？", lit: "你能借一隻手在遷移上嗎？", fast: "Couldja lend a hand on the migration?", note: "lend a hand 比 help 更加地道。" },
      { text: "Who is the point person for this account?", sit: "這個客戶帳戶的主要窗口/負責人是誰？", lit: "誰是點人在這個帳戶？", fast: "Who's the point person fer this?", note: "point person 即負責對口人。" },
      { text: "I'm pairing with Sarah this morning.", sit: "我今天早上會跟 Sarah 結對協作。", lit: "我正在配對與 Sarah...", fast: "I'm pairin' with Sarah this morning.", note: "pairing 為敏捷協作常用詞。" }
    ],
    "crisis": [
      { text: "That timeline is going to be a massive stretch.", sit: "那個交付時間點坦白說真的太吃緊了。", lit: "那個時間線將要是一個巨大的拉伸。", fast: "That timeline's gonna be a massive stretch.", note: "委婉預警專案風險的最佳說法。" },
      { text: "Better safe than sorry.", sit: "寧可事前謹慎，也不要事後後悔莫及。", lit: "更好安全比對不起。", fast: "Better safe than sorry. [/ˈbetər seɪf ðæn ˈsɑːri/]", note: "經典諺語，阻止倉促上線。" },
      { text: "I take full responsibility for the bug.", sit: "這個系統失誤我承擔全部責任。", lit: "我拿完全責任為了那個臭蟲。", fast: "I take full responsibility...", note: "展現高擔當與專業格局。" },
      { text: "Here is our temporary workaround.", sit: "在徹底修復前，這是我們的暫時替代方案。", lit: "這裡是我們的工作周圍。", fast: "Here's our temporary workaround.", note: "workaround 為技術應急解法。" },
      { text: "We are actively investigating the root cause.", sit: "我們目前正在全力排查根本原因 (RCA)。", lit: "我們正在積極調查根原因。", fast: "We're actively investigatin' the root cause.", note: "root cause 為事故排查核心詞。" },
      { text: "All hands on deck right now!", sit: "全員集合緊急支援！所有人放下手頭工作！", lit: "所有手在甲板上現在！", fast: "All hands on deck right now!", note: "源自航海術語，形容緊急危機動員。" },
      { text: "Thank you for bearing with us.", sit: "非常感謝您在系統維護期間的包容與耐心。", lit: "謝謝你為了忍受與我們。", fast: "Thank ya fer bearin' with us.", note: "比單純道歉更具溫度。" },
      { text: "We managed to dodge a bullet there.", sit: "好險！剛才真是僥倖逃過一劫！", lit: "我們設法閃開一顆子彈在那裡。", fast: "We managed ta dodge a bullet there.", note: "dodge a bullet 意指險遭災難。" },
      { text: "Let's conduct a blameless post-mortem.", sit: "我們來進行一場對事不對人的事後復盤會。", lit: "讓我們執行一個無責備的事後檢驗。", fast: "Let's conduct a blameless post-mortem.", note: "現代敏捷與科技業必備術語。" },
      { text: "Action items have been assigned to prevent this.", sit: "為防再次發生，具體改善事項已指派到人。", lit: "行動項目已經被指派...", fast: "Action items've been assigned...", note: "危機處理後續專業收尾。" }
    ],
    "presentation": [
      { text: "Let's cut right to the heart of the matter.", sit: "我們直接切入今天簡報的最核心議題。", lit: "讓我們剪剛好到事情的心臟。", fast: "Let's cut right ta the heart of the matter.", note: "極具張力的簡報開場白。" },
      { text: "As you can see from this trajectory...", sit: "大家可以從這條趨勢線上清楚看到...", lit: "如同你能看見從這彈道...", fast: "As ya can see from this trajectory...", note: "引導觀眾視覺聚焦圖表。" },
      { text: "Notice the sharp inflection point here.", sit: "請特別注意這裡出現了一個劇烈的反轉拐點。", lit: "注意尖銳的拐點在這裡。", fast: "Notice the sharp inflection point here.", note: "說明數據突變的專業字眼。" },
      { text: "I'm glad you brought that up.", sit: "我非常高興你問了這個問題！（Q&A 防衛緩衝）", lit: "我是高興你帶來那個上來。", fast: "I'm glad ya brought that up.", note: "爭取思考時間並讚賞提問者。" },
      { text: "I don't have that offhand, but I'll follow up.", sit: "我手邊一時沒有精確數字，會後補資料給您。", lit: "我沒有那個脫手...", fast: "I don't have that offhand, but I'll follow up.", note: "被問倒時最專業體面的下台階。" },
      { text: "In the interest of time, let me fast-forward.", sit: "考慮到時間有限，容我快速跳到結論。", lit: "在時間的利益裡...", fast: "In the interest of time...", note: "控時流暢轉場神句。" },
      { text: "The next step is crystal clear.", sit: "我們下一步的行動綱領非常清楚明白。", lit: "下一步是水晶清楚。", fast: "The next step is crystal clear.", note: "crystal clear 比 very clear 強烈十倍。" },
      { text: "Here is what we need from leadership today.", sit: "這是今天我們懇請管理層拍板批准的事項。", lit: "這是我們需要從領導層...", fast: "Here's what we need from leadership t'day.", note: "簡報收尾的 Call to Action。" },
      { text: "Let's open the floor for questions.", sit: "現在開放現場所有夥伴提問與交流。", lit: "讓我們打開地板為了問題。", fast: "Let's open the floor fer questions.", note: "open the floor 為主持標準用語。" },
      { text: "Thank you all for your undivided attention.", sit: "由衷感謝大家的全神貫注與聆聽！", lit: "謝謝你們所有人為了未分割的注意。", fast: "Thank ya all fer yer undivided attention.", note: "最高格調的簡報謝幕詞。" }
    ],
    "negotiation": [
      { text: "Is there any wiggle room on the pricing?", sit: "在價格上還有任何彈性協商的空間嗎？", lit: "有任何擺動房間在定價上嗎？", fast: "Is there any wiggle room on the pricing?", note: "wiggle room 意指彈性迴旋餘地。" },
      { text: "It's all about give and take.", sit: "商務談判講究的就是互相妥協與互利。", lit: "它全部關於給與拿。", fast: "It's all about give and take.", note: "談判雙方互有讓步經典短語。" },
      { text: "Let's meet each other halfway.", sit: "我們各退一步，折衷在中間價位如何？", lit: "讓我們遇見彼此半路。", fast: "Let's meet each other halfway.", note: "迅速打破談判僵局的神句。" },
      { text: "We have ourselves a deal!", sit: "太棒了，我們成交了！合約拍板！", lit: "我們擁有我們自己一個交易！", fast: "We have ourselves a deal!", note: "握手定案時的情感共鳴。" },
      { text: "What's your bottom-line offer?", sit: "您的底牌 / 最後底線報價是多少？", lit: "什麼是你的底部線出價？", fast: "What's yer bottom-line offer?", note: "迫使對方透露底線籌碼。" },
      { text: "Let's put that in writing.", sit: "我們把這項協議白紙黑字寫進條款吧。", lit: "讓我們放那個在寫作裡。", fast: "Let's put that in writing.", note: "落實商務共識免口說無憑。" },
      { text: "That's a deal-breaker for us, unfortunately.", sit: "很遺憾，這點觸犯了我們的紅線/無法接受。", lit: "那是個交易打破者...", fast: "That's a deal-breaker fer us...", note: "表明破局條件的嚴肅字眼。" },
      { text: "Could we phase the payment across three milestones?", sit: "款項是否能分三期驗收里程碑支付？", lit: "我們能分階段支付穿過三個里程碑嗎？", fast: "Could we phase the payment...", note: "緩解現金流壓力的專業提案。" },
      { text: "I think we've struck a great balance here.", sit: "我認為我們在這裡取得了一個非常棒的平衡。", lit: "我認為我們已經敲擊一個偉大的平衡...", fast: "I think we've struck a great balance here.", note: "讚揚雙方智慧的結論。" },
      { text: "Send over the paperwork and I'll sign off.", sit: "把合約書寄過來吧，我今天就簽核批准！", lit: "送過來紙張工作...", fast: "Send over the paperwork...", note: "商務夥伴最愛聽到的簽約承諾。" }
    ],

    // Phase 5 (Days 81 - 100)
    "idioms": [
      { text: "Let's cut to the chase.", sit: "我們有話直說，開門見山切入正題吧！", lit: "剪接到追逐場面。", fast: "Let's cut ta the chase.", note: "源自早期好萊塢電影剪輯手法。" },
      { text: "It's on the tip of my tongue!", sit: "那個名字就在我嘴邊了，差點想起來！", lit: "它在我舌頭的尖端上！", fast: "It's on the tip of my tongue!", note: "忘詞時最生動的自嘲。" },
      { text: "Let's play it by ear depending on traffic.", sit: "到時候看路況如何，我們再隨機應變吧！", lit: "用耳朵彈奏它...", fast: "Let's play it by ear...", note: "爵士樂不看樂譜即興演奏典故。" },
      { text: "No hard feelings at all, we're still friends.", sit: "完全別放在心上，大家公事公辦不傷感情！", lit: "沒有硬感覺在全部...", fast: "No hard feelin's at all...", note: "化解談判競爭隔閡最高境界。" },
      { text: "Let's call it a day, my brain is fried.", sit: "今天就收工下班吧，我大腦已經燒焦了！", lit: "稱呼它為一天...", fast: "Let's call it a day...", note: "宣布今天到此為止最佳句式。" },
      { text: "Take that review with a grain of salt.", sit: "那篇網路評測你看看就好，不要全信。", lit: "帶著一粒鹽接受那個評論。", fast: "Take that with a grain of salt.", note: "保持理性懷疑與審慎態度。" },
      { text: "That definitely rings a bell.", sit: "這事情聽起來確實有點耳熟，我有印象！", lit: "那絕對敲了一口鐘。", fast: "That definitely rings a bell.", note: "喚醒模糊記憶的道地說法。" },
      { text: "It completely slipped my mind, my bad!", sit: "糟了！我完全忘得一乾二淨，我的錯！", lit: "它完全滑出我的心智...", fast: "It completely slipped my mind!", note: "誠懇認錯比生硬的 I forgot 更好。" },
      { text: "You totally nailed it!", sit: "你幹得太漂亮了！表現無懈可擊！", lit: "你完全用釘子釘住它了！", fast: "You totally nailed it!", note: "最高級別的由衷讚美。" },
      { text: "I'm torn between staying or leaving.", sit: "我在走與留之間左右為難，拿不定主意。", lit: "我被撕裂在...", fast: "I'm torn between...", note: "形容糾結矛盾的生動比喻。" }
    ],
    "mindset": [
      { text: "It is what it is, let's keep moving.", sit: "事情既然已經這樣了，看開點，繼續往前走吧！", lit: "它是它是什麼...", fast: "It is what it is...", note: "美式豁達與情緒復原力的核心金句。" },
      { text: "Pardon my brain fog today!", sit: "抱歉我今天大腦有點當機放空！", lit: "原諒我的大腦迷霧今天！", fast: "Pardon my brain fog t'day!", note: "幽默化解自己說錯話或卡詞的窘境。" },
      { text: "No use crying over spilled milk.", sit: "覆水難收，為打翻的牛奶哭泣於事無補。", lit: "沒有用哭泣在灑出的牛奶上。", fast: "No use cryin' over spilled milk.", note: "面對不可挽回失誤的豁達心態。" },
      { text: "You win some, you lose some.", sit: "人生嘛，總有起有落，有得有失。", lit: "你贏一些，你輸一些。", fast: "You win some, ya lose some.", note: "面對投標或競賽失利時的從容氣度。" },
      { text: "On to the next challenge!", sit: "翻篇了！把精力放在下一個挑戰吧！", lit: "向前到下一個挑戰！", fast: "On ta the next challenge!", note: "永不氣餒的冠軍心態。" },
      { text: "Don't sweat the small stuff.", sit: "別為芝麻蒜皮的小事煩惱勞神啦！", lit: "不要流汗小的事情。", fast: "Don't sweat the small stuff.", note: "勸慰焦慮朋友的最佳口頭禪。" },
      { text: "At least nobody got hurt!", sit: "至少大家都平平安安，沒人受傷啦！（幽默解圍）", lit: "至少沒有人得到傷害！", fast: "At least nobody got hurt!", note: "專案搞砸時以幽默緩解窒息氛圍。" },
      { text: "I'm rolling with the punches.", sit: "我現在就是見招拆招，兵來將擋水來土掩。", lit: "我正在隨著拳頭翻滾。", fast: "I'm rollin' with the punches.", note: "拳擊隱喻，形容逆境中頑強生存。" },
      { text: "I need to recharge my social battery.", sit: "我今天社交能量耗盡，得去充個電了！", lit: "我需要給我的社交電池充電。", fast: "I need ta recharge my social battery.", note: "現代年輕族群高頻共鳴用語。" },
      { text: "Let's count our blessings.", sit: "知足常樂，想想我們已經擁有的美好吧。", lit: "讓我們數我們的祝福。", fast: "Let's count our blessings.", note: "感恩與心態平和的高境界。" }
    ],
    "culture": [
      { text: "He threw us a massive curveball.", sit: "他突然給我們丟了個猝不及防的大難題！", lit: "他扔給我們一個巨大的曲球。", fast: "He threw us a massive curveball.", note: "美式棒球隱喻，指意料之外的突發事件。" },
      { text: "Let's hit the ground running on Monday.", sit: "週一一上班我們就開足馬力全速推進！", lit: "讓我們擊中地面奔跑...", fast: "Let's hit the ground runnin'...", note: "軍事空降隱喻，意指一著陸立即展開行動。" },
      { text: "We dropped the ball on this one.", sit: "這一次是我們自己失職搞砸了（承擔失誤）。", lit: "我們掉球了在這個上面。", fast: "We dropped the ball on this one.", note: "美式橄欖球隱喻，形容犯下低級失誤。" },
      { text: "They moved the goalposts on us again.", sit: "他們又把過關標準提高了/出爾反爾！", lit: "他們移動球門柱在我們上面...", fast: "They moved the goalposts on us...", note: "足球隱喻，指對方任意更改約定標準。" },
      { text: "Touch all the bases before launching.", sit: "上線前請務必面面俱到，把每個關卡都走過一遍。", lit: "觸碰所有壘包在發射前。", fast: "Touch all the bases...", note: "棒球跑壘隱喻，意指按部就班顧全所有細節。" },
      { text: "That really hits the spot!", sit: "這口美食/這杯咖啡真是太對味、太舒暢了！", lit: "那真正擊中那個點！", fast: "That really hits the spot!", note: "享受美食飲品時的最高讚歎。" },
      { text: "It's the best thing since sliced bread.", sit: "這簡直是本世紀最偉大的發明/太神了！", lit: "它是最好的事情自從切片麵包...", fast: "Best thing since sliced bread.", note: "美式文化中最浮誇也最道地的讚美。" },
      { text: "Take it with a grain of salt, it's just gossip.", sit: "聽聽就算了，那純粹是辦公室八卦。", lit: "帶著一粒鹽接受它...", fast: "Take it with a grain of salt...", note: "古羅馬解毒劑傳說演變之成語。" },
      { text: "He was speaking tongue in cheek.", sit: "他剛才那句話純粹是開玩笑/半認真調侃啦！", lit: "他正在說話舌頭在臉頰裡。", fast: "Speakin' tongue in cheek...", note: "英美文化中指表面正經實則幽默反諷。" },
      { text: "Let's avoid a Mexican standoff.", sit: "我們得避免雙方僵持不下、誰也不讓的死局。", lit: "讓我們避免一個墨西哥對峙。", fast: "Avoid a Mexican standoff.", note: "經典電影黑話，指三方互相牽制的僵局。" }
    ],
    "depth": [
      { text: "Culture eats strategy for breakfast.", sit: "企業文化遠比單純的戰略規劃強大得多。", lit: "文化吃策略為了早餐。", fast: "Culture eats strategy fer breakfast.", note: "管理學大師彼得杜拉克經典名言。" },
      { text: "Success is a marathon, not a sprint.", sit: "成功的路上是場馬拉松，而不是短跑衝刺。", lit: "成功是一場馬拉松...", fast: "Success is a marathon, not a sprint.", note: "提醒保持長跑心態，避免 burnout。" },
      { text: "Leave things better than you found them.", sit: "離開時，讓這世界/環境比你剛來時更美好。", lit: "留下事情更好比你找到他們。", fast: "Leave things better than ya found 'em.", note: "童軍守則演化成的深刻職涯哲學。" },
      { text: "I can't thank you enough for your mentorship.", sit: "我對您的悉心指導感激不盡，言語難以表達！", lit: "我不能感謝你足夠為了你的導師情誼。", fast: "I can't thank ya enough...", note: "表達真摯感謝的高雅句型。" },
      { text: "You're a lifesaver, I owe you one!", sit: "你真是我的救命恩人，我欠你一次大人情！", lit: "你是一個生命拯救者...", fast: "You're a lifesaver, I owe ya one!", note: "感謝同仁及時救火的熱情表達。" },
      { text: "Focus on what gives you genuine energy.", sit: "把心力聚焦在那些能真正帶給你熱情與活力的事情上。", lit: "聚焦在什麼給你真正的能量。", fast: "Focus on what gives ya genuine energy.", note: "深層職涯對話的深刻思維。" },
      { text: "Don't mistake motion for progress.", sit: "不要把瞎忙忙碌當成了實質的進展。", lit: "不要誤會運動為了進步。", fast: "Don't mistake motion fer progress.", note: "警惕低效勤奮的高維度認知。" },
      { text: "Integrity is doing the right thing when no one's watching.", sit: "真正的誠信，是在沒有人監督時依然做正確的事。", lit: "誠信是做正確的事當沒有人正在看。", fast: "Integrity is doin' the right thing...", note: "職場倫理與領袖風範最高標竿。" },
      { text: "Your support means the world to me.", sit: "你的支持與肯定對我來說重如泰山、無比重要！", lit: "你的支持意味著世界對我。", fast: "Yer support means the world ta me.", note: "深刻動人的社交感激表達。" },
      { text: "Grateful to have you in my corner.", sit: "何其有幸能有你在背後當我最堅實的後盾！", lit: "感激去擁有你在我的角落。", fast: "Grateful ta have ya in my corner.", note: "拳擊擂台角落教練隱喻，讚美最忠實夥伴。" }
    ],
    "sprint": [
      { text: "Hit the buzzer, I know the answer!", sit: "按鈴搶答！我大腦瞬間反應出答案了！", lit: "擊中蜂鳴器...", fast: "Hit the buzzer!", note: "巔峰衝刺期的高速反射。" },
      { text: "Zero hesitation, purely intuitive.", sit: "零遲疑，完全靠英文直覺肌肉反射！", lit: "零遲疑，純粹直覺。", fast: "Zero hesitation, purely intuitive.", note: "達到英文大腦的最佳標誌。" },
      { text: "I can shadow this with my eyes closed.", sit: "閉上眼睛我也能完美同步跟讀這句話！", lit: "我能影子這個帶著我閉上的眼睛。", fast: "I can shadow this with my eyes closed.", note: "肌肉記憶完全內化狀態。" },
      { text: "Bring on the fast speech, I'm ready!", sit: "儘管用 1.25x 最快母語連音來吧，我準備好了！", lit: "帶來快速演講...", fast: "Bring on the fast speech!", note: "聽力抗恐慌訓練之巔峰自信。" },
      { text: "No subtitles needed, crystal clear.", sit: "完全不需要逐字稿，每個連音都一清二楚！", lit: "沒有字幕被需要...", fast: "No subtitles needed...", note: "耳音捕捉率達到 100%。" },
      { text: "Stuck bank completely cleared out!", sit: "卡頓句型庫零死角全數攻克完畢！", lit: "卡住銀行完全被清除出！", fast: "Stuck bank completely cleared out!", note: "消除所有個人盲點。" },
      { text: "Thinking in chunks, not in isolated words.", sit: "用一整塊語意思考，徹底告別單字拼裝！", lit: "思考在塊狀裡...", fast: "Thinkin' in chunks...", note: "Podcast 1314 核心精神之終極實現。" },
      { text: "No panic, full control of the floor.", sit: "處變不驚，全場對話節奏盡在掌控！", lit: "沒有恐慌，完全控制地面。", fast: "No panic, full control of the floor.", note: "高壓社交與談判從容自若。" },
      { text: "Fluent, natural, and effortless flow.", sit: "流暢、道地，如行雲流水般毫不費力。", lit: "流暢、自然且不費力的流動。", fast: "Fluent, natural, and effortless flow.", note: "母語人士等級的鬆弛感。" },
      { text: "Mastery achieved: 1000 Chunks unlocked!", sit: "巔峰達成：1000 個高頻語塊全面解鎖內化！", lit: "大師達成...", fast: "Mastery achieved!", note: "100 天終點站之里程碑榮耀。" }
    ]
  };

  // Merge all 5 Phase databases (1,000 distinct chunks across 100 days)
  const dailyChunksMaster = Object.assign(
    {},
    window.ECHOMIND_PHASE_1 || {},
    window.ECHOMIND_PHASE_2 || {},
    window.ECHOMIND_PHASE_3 || {},
    window.ECHOMIND_PHASE_4 || {},
    window.ECHOMIND_PHASE_5 || {}
  );

  // Helper to map any day (1 to 100) to its distinct 10-chunk array
  function getMasterChunksForDay(dayNumber) {
    const day = parseInt(dayNumber);
    const dayInfo = syllabus100.find(s => s.day === day) || {
      day: day,
      phase: Math.min(5, Math.ceil(day / 20)),
      topic: `Day ${day} 核心精準語塊`,
      cat: "diplomacy",
      catName: "情境推進"
    };

    // 1. Prioritize dedicated 1,000-chunk master datasets (Phase 1 to Phase 5)
    const phaseDayItems = dailyChunksMaster[day];
    if (phaseDayItems && phaseDayItems.length > 0) {
      return phaseDayItems.map((item, idx) => ({
        id: `chunk-d${day}-${idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}`,
        day: day,
        phase: dayInfo.phase,
        category: dayInfo.cat,
        categoryName: dayInfo.catName,
        text: item.text,
        literalMeaning: item.lit,
        situationalMeaning: item.sit,
        fastSpeechShape: item.fast,
        fastSpeechNote: item.note || `針對「${dayInfo.topic}」情境之自然母語連音弱化。`,
        stressPoints: [item.text.split(' ')[0], item.text.split(' ').slice(-1)[0]],
        usageWhen: `適用於 Day ${day}【${dayInfo.topic}】對話情境。`,
        noPanicTip: "0.3 秒反射輸出此語塊，不必在中英文法間來回翻譯！",
        dialogue: {
          speakerA: item.q || `Hey, regarding ${dayInfo.topic}, how should we approach this?`,
          speakerB: item.text
        }
      }));
    }

    // 2. Fallback category mapping (if any day is missing)
    let poolKey = dayInfo.cat;
    if (dayInfo.cat === "workplace") poolKey = "standup";
    if (dayInfo.cat === "active_listening") poolKey = "survival";
    if (dayInfo.cat === "social" || dayInfo.cat === "social_humor") poolKey = "empathy";
    if (dayInfo.cat === "hedging") poolKey = "thinking";
    if (dayInfo.cat === "interruption" || dayInfo.cat === "interrupt") poolKey = "interruption";
    if (dayInfo.cat === "facilitation") poolKey = "diplomacy";
    if (dayInfo.cat === "mastery") poolKey = "sprint";

    const basePool = topicChunksDirectory[poolKey] || topicChunksDirectory["diplomacy"];

    // Return tailored 10 chunks with distinct IDs, day numbers, and contextual speaker lines
    return basePool.slice(0, 10).map((item, idx) => ({
      id: `chunk-d${day}-${idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}`,
      day: day,
      phase: dayInfo.phase,
      category: dayInfo.cat,
      categoryName: dayInfo.catName,
      text: item.text,
      literalMeaning: item.lit,
      situationalMeaning: item.sit,
      fastSpeechShape: item.fast,
      fastSpeechNote: item.note || `針對「${dayInfo.topic}」情境之自然母語連音弱化。`,
      stressPoints: [item.text.split(' ')[0], item.text.split(' ').slice(-1)[0]],
      usageWhen: `適用於 Day ${day}【${dayInfo.topic}】對話情境。`,
      noPanicTip: "0.3 秒反射輸出此語塊，不必在中英文法間來回翻譯！",
      dialogue: {
        speakerA: `Hey, regarding ${dayInfo.topic}, how should we approach this?`,
        speakerB: item.text
      }
    }));
  }

  // Pre-generate active allMasterChunks for immediate access (1,000 distinct chunks)
  const allMasterChunks = [];
  for (let d = 1; d <= 100; d++) {
    allMasterChunks.push(...getMasterChunksForDay(d));
  }

  // Expose Global Master Database
  window.ECHOMIND_MASTER_DB = {
    metadata: {
      version: "2.2.0",
      total_days: 100,
      target_chunks: 1000,
      phases_count: 5
    },
    phases: [
      { phase: 1, days: "Days 1 - 20", title: "破除逐字直譯與生存破冰", target: "200 塊", reactionTime: "< 1.0s" },
      { phase: 2, days: "Days 21 - 40", title: "連音形變與聽力預測力", target: "400 塊", reactionTime: "< 0.7s" },
      { phase: 3, days: "Days 41 - 60", title: "觀點碰撞與委婉折衷", target: "600 塊", reactionTime: "< 0.6s" },
      { phase: 4, days: "Days 61 - 80", title: "高壓職場應變與專業說服", target: "800 塊", reactionTime: "< 0.5s" },
      { phase: 5, days: "Days 81 - 100", title: "母語直覺、幽默與即興流暢", target: "1000 塊", reactionTime: "< 0.3s" }
    ],
    syllabus: syllabus100,
    chunks: allMasterChunks,
    dailyChunksMaster: dailyChunksMaster,
    getChunksForDay: getMasterChunksForDay
  };

  // Bind active dataset
  window.ECHOMIND_DATA = {
    chunks: allMasterChunks,
    panicQuizzes: [
      {
        id: "quiz-01",
        situation: "外籍工程師在 Zoom 會議快速劈里啪啦講完一段話：「So basically we need to deprecate the auth middleware because the token handshake is throwing 504 timeouts across all edge clusters, you know what I mean?」",
        audioText: "So basically we need to deprecate the auth middleware because the token handshake is throwing 504 timeouts across all edge clusters, you know what I mean?",
        timeLimit: 6,
        options: [
          {
            id: "opt-a",
            text: "Yes yes, I totally agree, no problem!",
            isTrap: true,
            explanation: "【假裝聽懂點頭陷阱】千萬不要隨便答應！你根本沒聽懂，萬一對方以為你接下修改權限的工作，會造成嚴重的職場信任危機！"
          },
          {
            id: "opt-b",
            text: "Sorry, I missed the last part. What happens to the edge clusters?",
            isCorrect: true,
            explanation: "【完美生存應對】專業且沉著！坦承只漏掉後半段，並點出關鍵字要求重述，既保護自己又展現高度參與感。"
          },
          {
            id: "opt-c",
            text: "My English is very poor, please speak Chinese.",
            isTrap: true,
            explanation: "【自我放棄陷阱】在職場中說這句會立刻喪失專業尊嚴。請使用對話求生工具維持英文模式！"
          }
        ]
      },
      {
        id: "quiz-02",
        situation: "在外商電梯裡，VP 副總突然轉頭看著你微笑問：「Hey! How's your week been treating you?」你腦袋一時卡住不知如何回答...",
        audioText: "Hey! How's your week been treating you?",
        timeLimit: 5,
        options: [
          {
            id: "opt-a",
            text: "My week is very treat. I eat many foods.",
            isTrap: true,
            explanation: "【逐字直譯災難】把 treating 誤認為『請客吃東西』，這是大腦還在中文逐字翻譯的典型症狀！"
          },
          {
            id: "opt-b",
            text: "Pretty good! Busy with the launch, but hanging in there. How about yourself?",
            isCorrect: true,
            explanation: "【神級英文思維】正面回應、簡述現狀、反拋問題給主管，0.5 秒完成高情商破冰對話！"
          },
          {
            id: "opt-c",
            text: "(尷尬笑笑不講話，低頭滑手機)",
            isTrap: true,
            explanation: "【冷場當機陷阱】沉默會讓老外以為你冷漠或對他不友善。哪怕只說一句 'Busy, but good! You?' 都好！"
          }
        ]
      },
      {
        id: "quiz-03",
        situation: "在跨國團隊會議中，設計師講了一長串專業排版術語，你聽得一頭霧水完全摸不著頭緒，大家似乎都準備通過決策了...",
        audioText: "We decided to implement a non-destructive contextual glyph kerning strategy.",
        timeLimit: 6,
        options: [
          {
            id: "opt-a",
            text: "I'm not sure I follow. Could you explain that another way for the rest of us?",
            isCorrect: true,
            explanation: "【領袖級求生句】'I'm not sure I follow' 加上 'for the rest of us'（為大家著想），瞬間化身全場英雄！"
          },
          {
            id: "opt-b",
            text: "What? Say again please?",
            isTrap: true,
            explanation: "【生硬命令陷阱】'What? Say again please' 聽起來像在命令對方或怪對方說不好，語氣生硬。"
          },
          {
            id: "opt-c",
            text: "Okay, sounds good to me.",
            isTrap: true,
            explanation: "【盲目放行陷阱】完全不懂還說 sounds good，等到產品做出來出問題你就得背鍋！"
          }
        ]
      },
      {
        id: "quiz-04",
        situation: "外籍主管突然問你一個棘手問題：「Why do you think the conversion rate dropped 15% last Tuesday?」你手邊根本沒有當天的數據！",
        audioText: "Why do you think the conversion rate dropped 15% last Tuesday?",
        timeLimit: 6,
        options: [
          {
            id: "opt-a",
            text: "I don't know.",
            isTrap: true,
            explanation: "【句點殺手】直接回 I don't know 顯得消極且不負責任。"
          },
          {
            id: "opt-b",
            text: "That's a really good question. Off the top of my head, I'd say traffic fluctuated, but let me pull up the exact report.",
            isCorrect: true,
            explanation: "【頂級職場防衛】先讚美問題爭取 3 秒，再用 'off the top of my head' 概括直覺，最後以調閱報告收尾，滴水不漏！"
          },
          {
            id: "opt-c",
            text: "Because server is broken maybe.",
            isTrap: true,
            explanation: "【胡亂猜測陷阱】在沒有數據佐證下輕率甩鍋，容易誤導決策。"
          }
        ]
      }
    ],
    scenarios: [
      {
        id: "roleplay-standup",
        title: "外商敏捷早會突襲 (Daily Standup Meeting)",
        role: "Alex (Tech Lead at an international startup)",
        avatar: "👨‍💻",
        description: "在早會上，Tech Lead 快速詢問大家進度，突然指名要你說明昨天的 blocker 和下一步計畫。",
        panicTension: "Medium-High (隨機語速 1.05x ~ 1.2x)",
        initialMessage: "Morning team! Let's get right into it. Sarah gave her update on the database migration. Next up, could you walk us through what you tackled yesterday and if there are any blockers on your end?",
        survivalKit: [
          { label: "爭取思考時間", text: "Let me think for a second before I jump into the details." },
          { label: "沒聽清楚要求", text: "Sorry, I missed the last part. Were you asking about yesterday's blocker?" },
          { label: "確認理解", text: "Let me make sure I understand. You'd like an update on the API deployment?" },
          { label: "準備好回答", text: "Sure! Off the top of my head, the core features are ready, and I'll keep you posted on testing." }
        ],
        aiResponses: [
          {
            keywords: ["think", "second", "moment"],
            response: "Take your time! No rush at all, we just want to make sure the pipeline is clear before deployment.",
            feedback: "棒極了！主動用 'Let me think for a second' 爭取時間，完全化解了被點名的猝不及防感。"
          },
          {
            keywords: ["missed", "last", "clarify", "repeat"],
            response: "No worries! Basically, I just want to know if anything is blocking you from finishing the sprint tasks today.",
            feedback: "太優秀了！及時叫停並縮減問題範疇，讓對方把問題簡化成一句話。"
          },
          {
            keywords: ["ready", "posted", "sure", "yesterday", "working"],
            response: "Awesome! Sounds like you've got everything under control. On that note, let's touch base this afternoon.",
            feedback: "流暢自然的專業溝通！有效使用 chunk 傳達掌握度。"
          }
        ]
      },
      {
        id: "roleplay-coffee",
        title: "茶水間與外籍同事閒聊 (Coffee Break Small Talk)",
        role: "Jessica (Senior Product Designer from Seattle)",
        avatar: "👩‍🎨",
        description: "在公司咖啡吧巧遇設計師，她熱情向你打招呼並分享西雅圖的天氣與週末計畫。",
        panicTension: "Relaxed (自然對話，訓練主動拋球)",
        initialMessage: "Hey there! How's it going? I haven't seen you around the office lately. What have you been up to?",
        survivalKit: [
          { label: "標準破冰回覆", text: "Pretty good! Just the usual project stuff. What about yourself?" },
          { label: "讚美與話題推進", text: "Good to see you! Speaking of which, how's the Seattle office doing?" },
          { label: "順利收尾脫身", text: "Anyway, I know you've got coffee to brew. I'll let you get back to it!" },
          { label: "沒聽清楚", text: "Sorry, the coffee machine was loud! What did you say?" }
        ],
        aiResponses: [
          {
            keywords: ["pretty", "good", "usual", "yourself", "about you"],
            response: "Oh man, tell me about it! I've been drowning in Figma mocks all week. But hey, it is what it is!",
            feedback: "完美反射！'Pretty good, how about yourself?' 是母語者最高頻的自然破冰雙拍子。"
          },
          {
            keywords: ["speaking", "which", "seattle", "weather"],
            response: "Haha, rainy as always! But the coffee there is amazing. We definitely need better beans in this office though!",
            feedback: "高手！運用 'Speaking of which' 把話題無縫過渡，展現了高超的社交流暢度。"
          },
          {
            keywords: ["let", "back", "catch", "later"],
            response: "Haha thanks! Yeah, I need my caffeine fix. Catch you later around the floor!",
            feedback: "優雅收尾！'I'll let you get back to it' 避免了無話可說時乾站著的尷尬。"
          }
        ]
      },
      {
        id: "roleplay-client",
        title: "突發視訊會議需求釐清 (Fast-Paced Client Call)",
        role: "David (Product Manager at Global Corp)",
        avatar: "👔",
        description: "跨國客戶在線上會議提出模糊而緊急的需求，語速極快，要求你立刻承諾交付時間。",
        panicTension: "High (快速 1.15x 語速，訓練高壓生存)",
        initialMessage: "Look, our VP just escalated this! We essentially need the entire checkout funnel overhauled before Friday because conversion is down 20%, can we commit to that right now?",
        survivalKit: [
          { label: "絕不輕易點頭", text: "I see where you're coming from, but let me make sure I understand the scope first." },
          { label: "委婉實話預警", text: "To be completely honest with you, that timeline is going to be a massive stretch." },
          { label: "要求具體範疇", text: "Could you walk me through the exact bottleneck before we commit to a date?" },
          { label: "爭取會後核對", text: "Give me just a second to pull up our schedule. I'll keep you posted by end of day." }
        ],
        aiResponses: [
          {
            keywords: ["see", "coming", "understand", "scope"],
            response: "Alright, fair enough. The critical part is really just the payment gateway step, not the whole UI.",
            feedback: "救命稻草！你成功讓激動的客戶把範疇從『整個結帳流程』縮減為『支付模組』！"
          },
          {
            keywords: ["honest", "stretch", "timeline"],
            response: "I appreciate your honesty. If Friday is impossible, what's a realistic date your team can deliver?",
            feedback: "成熟沉著！'To be completely honest with you' 贏得了對方的敬重，並將被動承諾轉為主動協商。"
          },
          {
            keywords: ["walk", "through", "bottleneck"],
            response: "Sure, let's cut to the chase: users are dropping off at the credit card verification modal.",
            feedback: "引導有方！逼客戶切入核心問題，而不是漫天開火。"
          }
        ]
      }
    ]
  };
})();
