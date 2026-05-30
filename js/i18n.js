/* ============================================================
   i18n — 客户语言文案（不是直译，各语言按本国 B2B 习惯再创作）
   en: 母语美式 B2B · ja: 自然 です・ます · ko: 자연스러운 합니다体
   强调词用 <span class='accent'>…</span>，只标客户最关心的收益词。
   案例文案见 projects.js
   ============================================================ */
window.I18N = {

  /* ---------------- ENGLISH (native US B2B) ---------------- */
  en: {
    meta_desc:"We turn the repetitive, time-eating work your team does by hand into a system that runs itself. Fewer errors, faster turnaround, fixed price.",
    nav_work:"Work", nav_capabilities:"What We Build", nav_approach:"How It Works", nav_contact:"Talk to Us", nav_cta:"Start a Project", brand_cn:"",
    hero_eyebrow:"AI Automation · Built for Your Business",
    hero_title:"Hand off the busywork that's <span class='accent'>eating your team's time</span> to a system that runs itself.",
    hero_sub:"Support, follow-ups, quotes, reconciliation, digging for data: the stuff that should be automatic gets automated, so you <span class='accent'>get those hours back</span> for the work that actually makes money. Once it's live, it <span class='accent'>runs without you</span>.",
    hero_cta1:"See if my work can be automated", hero_cta2:"See what we've built →",
    stat1_n:"10+", stat1_l:"systems live and running today",
    stat2_n:"2–4 wks", stat2_l:"to a first version you can actually use",
    stat3_n:"Hands-off", stat3_l:"runs on its own after launch, no babysitting",
    cap_title:"The work we can take off your plate",
    cap_lead:"Six kinds of repetitive work that eat the most team time, handed to a system once and for good.",
    work_title:"Selected Work",
    work_lead:"Real systems, running in production. Client and employer names are kept private on request.",
    work_more:"More systems", flagship:"Flagship project", redact:"Image shown with sample data, not a real screenshot.",
    appr_title:"How we work together",
    appr_lead:"Senior-led, with one person on point: someone who knows the work, talks to you directly, and builds every project to run reliably, day after day.",
    proc_label:"How a project runs",
    contact_title:"Got a process that's <span class='accent'>eating your team's time</span>?",
    contact_sub:"Tell me which part is manual, repetitive, and burning money. I'll tell you straight whether it can be built into a system, and roughly what it costs and how long it takes.",
    contact_email:"Email me", contact_wechat:"WeChat", contact_telegram:"Telegram",
    contact_meta:"Usually replies within a day · 中文 / English / 日本語 / 한국어",
    footer_tag:"We turn time-eating busywork into systems that run themselves.",
    wechat_scan:"Scan to add me on WeChat", telegram_scan:"Scan with Telegram to connect",
    caps:[
      {t:"Instant answers <span class='accent'>straight from your playbook</span>",d:"Scripts, pricing, policies: your team has the answer the moment they need it, every one backed by a source, with no more digging through docs or pinging each other."},
      {t:"Routine workflows that <span class='accent'>run themselves</span>",d:"Assigning, following up, data entry, reconciliation: the system handles it around the clock, so nothing slips and nothing drops."},
      {t:"Calls and paperwork <span class='accent'>turned into usable data</span>",d:"Calls get scored for quality automatically, scans become searchable in seconds, and the key details lift right off your contracts."},
      {t:"Scattered data, <span class='accent'>pulled into one daily view</span>",d:"Every source syncs into a single source of truth on its own, even when there's no ready-made connection to plug into."},
      {t:"Content <span class='accent'>produced at scale</span>, automatically",d:"Copy and images made in volume, on-brand, with a safety net when something doesn't come out right."},
      {t:"AI that <span class='accent'>won't make things up</span>",d:"Every number is checked by code, with guardrails in place, so it holds up against the realities of your business."}
    ],
    appr:[
      {k:"01 / SENIOR",t:"Senior hands, start to finish",d:"From design to launch, built by senior hands. No subcontracting, no corners cut. You always talk directly to the person doing the work."},
      {k:"02 / STEADY",t:"Built to run every day, not demo once",d:"Tested, monitored, and safeguarded, made to keep running on its own, not to look good once and fall over."},
      {k:"03 / RELIABLE",t:"Numbers solid enough to act on",d:"The figures and reports it gives you are really calculated and double-checked, never made up. You can take them straight to pricing, payroll, and decisions, without second-guessing."},
      {k:"04 / FAST",t:"Prototype in days, live in weeks",d:"Small and fast. You see something real early, while there's still time to adjust before you've spent big."}
    ],
    process:[
      {t:"Diagnose",d:"One short call to find the single process most worth automating, and to gut-check whether the need is real."},
      {t:"Prototype",d:"Within days, a working version running on your real data, so we knock down the risk before you commit."},
      {t:"Deliver",d:"Goes live fully integrated, tested, monitored, and documented, so it keeps running without me."},
      {t:"Iterate",d:"Measure, tune, and extend, or hand it off clean. It's your system, your call."}
    ],
    marquee:["Workflows on autopilot","Hours back","Faster responses","Fewer errors","Runs 24/7","Instant answers","Automatic follow-ups","Daily dashboards","Live in weeks"],
    trust:[
      {k:"Your data",t:"Your data <span class='accent'>stays with you</span>",d:"It runs inside your own environment, keeps none of your customer information, and comes with a mutual NDA."},
      {k:"Fixed price",t:"<span class='accent'>A fixed quote up front</span>, no open-ended hourly",d:"You get one fixed price before any work starts, so you know where you stand before we begin."},
      {k:"Live in weeks",t:"Live in <span class='accent'>weeks</span>, then <span class='accent'>off your hands</span>",d:"A usable version takes just weeks, and once it's live it runs on its own and you can take it over anytime."},
      {k:"Validate first",t:"<span class='accent'>Prototype first</span>, prove it's worth it",d:"We start small with the one piece most worth automating, build it, and then you decide whether to expand."}
    ]
  },

  /* ---------------- 中文（母本） ---------------- */
  zh: {
    meta_desc:"为企业把吃时间的重复活儿变成自己会跑的系统——客服、跟进、报价、对账、找数据，自动化、能上线、稳得住真实业务。",
    nav_work:"案例", nav_capabilities:"能做什么", nav_approach:"怎么合作", nav_contact:"聊聊", nav_cta:"开始项目", brand_cn:"融贯科技",
    hero_eyebrow:"AI 自动化 · 批发 / 门店 / 诊所 / 团队都适用",
    hero_title:"把<span class='accent'>正在吃掉团队时间</span>的重复活儿，交给会自己跑的系统。",
    hero_sub:"员工天天重复的那些活——回客户、跟进、报价、找资料、整理数据——该自动的自动掉，<span class='accent'>把人和时间省下来</span>做真正赚钱的事；上线后<span class='accent'>基本不用你盯</span>。",
    hero_cta1:"聊聊我的活儿能不能自动化", hero_cta2:"看做过什么 →",
    stat1_n:"10+", stat1_l:"套系统已上线在跑",
    stat2_n:"2–4 周", stat2_l:"做出第一个能用的版本",
    stat3_n:"免盯守", stat3_l:"上线后自动跑，不用你天天管",
    cap_title:"能帮你省下哪些活儿",
    cap_lead:"六类最常吃掉团队时间的重复活儿，一次性交给系统。",
    work_title:"精选案例",
    work_lead:"真实、在线运行的系统。应要求，客户与雇主名称做保密处理。",
    work_more:"更多系统", flagship:"旗舰案例", redact:"下图做了保密处理，是示意，不是真实数据。",
    appr_title:"怎么和我合作",
    appr_lead:"资深的人亲自带、从头到尾就一个人对接你，不踢皮球：懂行、有事直接找他，每个项目都做成能长期稳定、天天在用的系统。",
    proc_label:"一个项目怎么走",
    contact_title:"有没有一个流程，<span class='accent'>正在吃掉团队的时间</span>？",
    contact_sub:"告诉我哪一块是手工的、重复的、烧钱的。能不能做成系统，我直说；大概多少钱、多久，也直说。",
    contact_email:"发邮件", contact_wechat:"微信", contact_telegram:"Telegram",
    contact_meta:"通常一天内回复 · 中文 / English / 日本語 / 한국어",
    footer_tag:"把吃时间的重复活，变成自己会跑的系统。",
    wechat_scan:"扫码加我微信", telegram_scan:"用 Telegram 扫码加我",
    caps:[
      {t:"<span class='accent'>话术、报价随问随答</span>",d:"员工想用的话术、报价、政策，张口一问就有，还告诉你答案是从哪份文件来的，不用再翻资料、来回问人。"},
      {t:"<span class='accent'>重复的活儿自动干</span>",d:"分客户、跟进、录入、核对账目这些天天重复的活，系统全天候自己干，不漏单、不掉链子。"},
      {t:"<span class='accent'>录音、单据自动变成能用的信息</span>",d:"员工接客户的电话自动帮你听、帮你点评，谁没说好一目了然；扫描件、合同里的关键信息自动找出来，还能搜。"},
      {t:"<span class='accent'>各处的数，每天自动并成一张表</span>",d:"几家店、几个表的数据自动凑成一张准账，不用你天天催人报；哪怕平时导不出来的，也能取到。"},
      {t:"<span class='accent'>文案、图片成批自动出</span>",d:"文案、图片成规模生产，风格统一可控，出错了还有兜底。"},
      {t:"<span class='accent'>它出的活儿靠谱</span>，能放心用",d:"给你的数字都反复核对过、不会乱编，你能直接拿去定价、做决定。"}
    ],
    appr:[
      {k:"01 / 资深",t:"资深亲自做，从头到尾",d:"从设计到上线都由资深的人亲手完成，不转包、不打折扣。你始终直接对接真正动手的人，沟通零损耗。"},
      {k:"02 / 稳",t:"做出来就能天天稳定用",d:"带测试、监控和安全保障，为长期自动运行而造，不是演示一次就散架。"},
      {k:"03 / 靠谱",t:"出的活儿靠谱，能放心拿去用",d:"它给的数字、报表都是真算出来、反复核对过的，不会乱编一个坑你。你能直接拿去定价、发工资、做决定，不用提心吊胆。"},
      {k:"04 / 快",t:"几天出原型，几周能上线",d:"小步快跑，先做个能用的给你看。你早早看到真东西，在花大钱之前就能调整方向。"}
    ],
    process:[
      {t:"诊断",d:"一次简短通话，找出最值得自动化的那一个流程，并判断需求是不是真的。"},
      {t:"先做小样",d:"几天内用你的真实数据做个能用的小样给你试，先把风险压下来，再决定要不要大投入。"},
      {t:"交付",d:"集成、测试、监控、文档齐全地上线，没有我它也能跑。"},
      {t:"迭代",d:"度量、调优、扩展，或干净交接。你的系统，你说了算。"}
    ],
    marquee:["自动干活","省回工时","响应更快","出错更少","全天不打烊","随问随答","自动跟进","每天一张明白账","几周上线"],
    trust:[
      {k:"数据安全",t:"你的数据，<span class='accent'>留在你这边</span>",d:"在你自己的环境里跑，不留存你的客户信息，签双向保密。"},
      {k:"明码报价",t:"<span class='accent'>先给定额报价</span>，不按小时无底洞",d:"动工前先报一个固定价，心里有数再开始。"},
      {k:"几周上线",t:"<span class='accent'>几周</span>上线，之后<span class='accent'>不用你盯</span>",d:"做出能用的版本只要几周，上线后自动跑、可随时接手。"},
      {k:"先验证",t:"<span class='accent'>先做原型</span>，值不值得做先验证",d:"从一个最值得自动化的环节小步起，做出来再决定要不要扩。"}
    ]
  },

  /* ---------------- 日本語（ネイティブ B2B） ---------------- */
  ja: {
    meta_desc:"時間ばかり奪う繰り返し作業を、ひとりでに回る仕組みへ。中小企業のための、AI自動化と受託システム開発。",
    nav_work:"実績", nav_capabilities:"できること", nav_approach:"進め方", nav_contact:"相談する", nav_cta:"依頼する", brand_cn:"",
    hero_eyebrow:"AI自動化 · あなたの業務に合わせて構築",
    hero_title:"<span class='accent'>チームの時間を奪い続ける</span>繰り返し作業は、ひとりでに回る仕組みへ。",
    hero_sub:"問い合わせ対応、追客、見積、突合、データ探し——任せられるものは任せて、<span class='accent'>人と時間を本来の仕事に</span>。稼働後は<span class='accent'>つきっきりの管理も不要</span>です。",
    hero_cta1:"うちの業務、自動化できるか聞いてみる", hero_cta2:"これまでの実績を見る →",
    stat1_n:"10件超", stat1_l:"稼働中の仕組みを構築・運用",
    stat2_n:"2〜4週間", stat2_l:"使える最初のかたちをお届け",
    stat3_n:"管理いらず", stat3_l:"稼働後はひとりでに回り、日々の手間なし",
    cap_title:"こんな作業、肩代わりします",
    cap_lead:"チームの時間を最も奪いがちな6つの繰り返し作業を、まるごと仕組みへ。",
    work_title:"選りすぐりの実績",
    work_lead:"実際に稼働している仕組みです。ご要望により、お客様および企業名は伏せて掲載しています。",
    work_more:"ほかの仕組みを見る", flagship:"代表事例", redact:"図は内容を伏せたイメージで、実データの画面ではありません。",
    appr_title:"わたしとの進め方",
    appr_lead:"経験者が自ら主導し、窓口は一本。仕事を分かっている人間が直接対話し、どの案件も毎日きちんと動き続ける形でお届けします。",
    proc_label:"案件の流れ",
    contact_title:"<span class='accent'>チームの時間を奪っている</span>業務は、ありませんか?",
    contact_sub:"手作業で、繰り返しで、コストばかりかさむ——そんな業務をお聞かせください。仕組みにできるかどうか、率直にお答えします。費用や期間の目安も、はっきりお伝えします。",
    contact_email:"メールする", contact_wechat:"WeChat", contact_telegram:"Telegram",
    contact_meta:"通常1日以内に返信 · 中文 / English / 日本語 / 한국어",
    footer_tag:"時間を奪う繰り返し作業を、ひとりでに回る仕組みへ。",
    wechat_scan:"WeChat で読み取って追加", telegram_scan:"Telegram で読み取って追加",
    caps:[
      {t:"<span class='accent'>標準回答を即座に</span>、しかも作り話なし",d:"トーク、見積、社内ルールが、聞けばすぐ手元に。答えには必ず出どころが付くので、資料を探して何度も確認する手間がなくなります。"},
      {t:"<span class='accent'>決まった手順は、まるごと自動で</span>",d:"割り振り、追客、入力、突合を、仕組みが24時間365日こなします。抜けも漏れも、流れが途切れることもありません。"},
      {t:"<span class='accent'>通話や書類を、使えるデータに</span>",d:"通話を自動で品質チェックして採点し、スキャン画像はそのまま検索可能に。契約書の要点も自動で抜き出します。"},
      {t:"<span class='accent'>散らばったデータを、毎日ひとつの表に</span>",d:"あちこちの情報を自動で集約し、頼れる一枚へ。既存の連携口がなくても、必要なデータを取り出します。"},
      {t:"コンテンツを、<span class='accent'>まとめて自動生成</span>",d:"文章も画像も、量産しながらブランドの統一感を保ち、失敗時の備えも用意します。"},
      {t:"AIに、<span class='accent'>間違いも作り話もさせない</span>",d:"すべての数字はプログラムが検算し、安全の歯止めも内蔵。実際の業務にも、しっかり耐えます。"}
    ],
    appr:[
      {k:"01 / SENIOR",t:"経験者が、最初から最後まで自ら",d:"設計から稼働まで、経験者が自分の手で。下請けへの丸投げも、品質の妥協もありません。実際に手を動かす本人と、いつでも直接話せます。"},
      {k:"02 / STEADY",t:"一度きりのデモではなく、毎日動くものを",d:"テスト・監視・安全対策を備え、ひとりでに動き続けるように作ります。見栄えだけで崩れることはありません。"},
      {k:"03 / 信頼",t:"出てくる数字は、そのまま使える",d:"お渡しする数字やレポートは、きちんと計算し直して二重に確認したもの。でたらめな数字でお客様に迷惑をかけません。価格決定も、支払いも、経営判断も、安心してそのまま使えます。"},
      {k:"04 / FAST",t:"数日で試作、数週間で稼働",d:"小さく速く。費用がかさむ前に、早い段階で実物を見て調整できます。"}
    ],
    process:[
      {t:"見極め",d:"短いお打ち合わせで、自動化する価値が最も高い業務を見つけ、そもそもやる意味があるかを見極めます。"},
      {t:"試作",d:"数日のうちに、御社の実データで使えるかたちを動かします。本格投入の前に、まずリスクを抑えます。"},
      {t:"お届け",d:"連携、テスト、監視、ドキュメントまで整えて稼働へ。わたしがいなくても回ります。"},
      {t:"磨き込み",d:"効果を測り、調整し、広げていく。あるいは、きれいに引き継ぎます。"}
    ],
    marquee:["手順を自動で","やり直しの工数を削減","対応がもっと速く","ミスがもっと少なく","24時間365日 休まず","聞けばすぐ答える","追客を自動で","毎日ひと目で分かる表","数週間で稼働"],
    trust:[
      {k:"データ安全",t:"御社のデータは、<span class='accent'>御社の手元に</span>",d:"御社自身の環境で動かし、お客様情報を当方に残すことはありません。双方向の秘密保持契約も結びます。"},
      {k:"明朗な料金",t:"<span class='accent'>先に定額で見積</span>。時間課金の青天井にはしません",d:"着手の前に、固定の金額をお出しします。"},
      {k:"数週間で稼働",t:"<span class='accent'>数週間</span>で稼働、その後は<span class='accent'>管理いらず</span>",d:"使えるかたちは数週間で。稼働後はひとりでに回り、いつでも引き継げます。"},
      {k:"まず検証",t:"<span class='accent'>まず試作</span>、やる価値があるかを先に確かめる",d:"自動化する価値が最も高いところから小さく始め、形にしてから広げるか決めます。"}
    ]
  },

  /* ---------------- 한국어（네이티브 B2B） ---------------- */
  ko: {
    meta_desc:"팀의 시간을 잡아먹는 반복 업무를, 알아서 돌아가는 시스템으로 바꿔 드립니다. 보험·채용·이커머스·클리닉 등 중소기업을 위한 AI 자동화·맞춤 시스템 개발.",
    nav_work:"사례", nav_capabilities:"할 수 있는 일", nav_approach:"협업 방식", nav_contact:"상담", nav_cta:"프로젝트 시작", brand_cn:"",
    hero_eyebrow:"AI 자동화 · 비즈니스 맞춤 제작",
    hero_title:"<span class='accent'>팀의 시간을 잡아먹는</span> 반복 업무, 알아서 돌아가는 시스템에 맡기세요.",
    hero_sub:"문의 응대, 고객 관리, 견적, 정산, 자료 찾기 — 자동화할 일은 자동으로 넘기고, <span class='accent'>사람과 시간을 정말 돈 되는 일에 되돌려 드립니다</span>. 도입 후에는 <span class='accent'>따로 들여다볼 필요도 없습니다</span>.",
    hero_cta1:"우리 업무도 자동화될까, 먼저 상담", hero_cta2:"작업 사례 보기 →",
    stat1_n:"10+", stat1_l:"현재 가동 중인 시스템",
    stat2_n:"2~4주", stat2_l:"바로 쓸 수 있는 첫 버전까지",
    stat3_n:"무인 운영", stat3_l:"도입 후 알아서 돌아가, 매일 챙길 필요 없음",
    cap_title:"어떤 업무를 덜어 드릴까요",
    cap_lead:"팀의 시간을 가장 많이 잡아먹는 여섯 가지 반복 업무, 한 번에 시스템으로 넘기세요.",
    work_title:"엄선한 사례",
    work_lead:"실제로, 지금도 돌아가고 있는 시스템입니다. 요청에 따라 고객사와 소속사 이름은 비공개 처리했습니다.",
    work_more:"더 많은 시스템", flagship:"대표 사례", redact:"실제 데이터가 아닌, 비식별 예시 화면입니다.",
    appr_title:"이렇게 함께합니다",
    appr_lead:"시니어가 직접 주도하고, 한 명의 책임자가 끝까지 소통합니다. 일을 아는 사람이 직접 대화하며, 모든 프로젝트를 매일 안정적으로 돌아가도록 만듭니다.",
    proc_label:"프로젝트는 이렇게 진행됩니다",
    contact_title:"혹시 <span class='accent'>팀의 시간을 잡아먹고 있는</span> 업무가 있나요?",
    contact_sub:"어떤 일이 손으로, 반복적으로, 돈을 태우고 있는지 알려 주세요. 시스템으로 만들 수 있는지 솔직하게 말씀드리고, 비용과 기간도 에둘러대지 않고 바로 알려드립니다.",
    contact_email:"이메일 보내기", contact_wechat:"위챗", contact_telegram:"Telegram",
    contact_meta:"보통 하루 안에 회신 · 中文 / English / 日本語 / 한국어",
    footer_tag:"시간을 잡아먹는 반복 업무를, 알아서 돌아가는 시스템으로.",
    wechat_scan:"위챗으로 스캔해 추가", telegram_scan:"Telegram으로 스캔해 추가",
    caps:[
      {t:"<span class='accent'>표준 답변을 즉시</span>, 지어내지 않고",d:"응대 멘트, 견적, 정책까지 팀이 바로 꺼내 씁니다. 답변마다 출처가 붙어, 문서를 뒤지며 되묻는 일이 사라집니다."},
      {t:"<span class='accent'>반복 프로세스는 알아서 돌아갑니다</span>",d:"배정, 고객 관리, 입력, 정산을 시스템이 24시간 직접 처리합니다. 빠뜨리거나 끊기는 법이 없습니다."},
      {t:"<span class='accent'>녹취와 서류가 쓸 수 있는 데이터로</span>",d:"통화는 자동으로 품질 평가, 스캔본은 바로 검색 가능하게, 계약서 핵심 정보는 자동으로 뽑아냅니다."},
      {t:"<span class='accent'>흩어진 데이터가 매일 한 장의 표로</span>",d:"여러 곳의 데이터를 자동으로 모아 하나의 정확한 기준으로 만듭니다. 연동 창구가 없는 곳의 데이터도 가져옵니다."},
      {t:"콘텐츠를 <span class='accent'>대량으로 자동 생산</span>",d:"카피와 이미지를 규모 있게 찍어냅니다. 브랜드 기준은 지키고, 실패한 건은 알아서 보완합니다."},
      {t:"AI가 <span class='accent'>틀리지도, 지어내지도 않게</span>",d:"모든 숫자는 코드로 검증하고 안전장치를 둡니다. 실제 업무에서도 흔들리지 않습니다."}
    ],
    appr:[
      {k:"01 / SENIOR",t:"시니어가 처음부터 끝까지 직접",d:"설계부터 가동까지 시니어가 직접 손으로. 하청도, 품질 타협도 없습니다. 늘 실제로 만드는 사람과 바로 이야기합니다."},
      {k:"02 / STEADY",t:"한 번 데모가 아니라, 매일 돌아가게",d:"테스트·모니터링·안전장치를 갖춰, 알아서 계속 돌아가도록 만듭니다. 보여주기만 하고 무너지지 않습니다."},
      {k:"03 / 신뢰",t:"나온 숫자, 그대로 믿고 써도 됩니다",d:"드리는 숫자와 보고서는 실제로 계산하고 두 번 확인한 것입니다. 엉터리 숫자로 곤란하게 만들지 않습니다. 가격 책정도, 급여도, 의사결정도 안심하고 그대로 쓰세요."},
      {k:"04 / FAST",t:"며칠이면 시제품, 몇 주면 가동",d:"작고 빠르게. 비용이 커지기 전에 실물을 일찍 보고 방향을 조정할 수 있습니다."}
    ],
    process:[
      {t:"진단",d:"짧은 통화 한 번으로 가장 자동화할 가치가 높은 업무를 찾고, 정말 필요한 일인지부터 가립니다."},
      {t:"시제품",d:"며칠 안에 실제 데이터로 쓸 수 있는 버전을 돌려, 본격 투입 전에 위험을 먼저 낮춥니다."},
      {t:"전달",d:"연동, 테스트, 모니터링, 문서까지 갖춰 가동합니다. 제가 없어도 돌아갑니다."},
      {t:"고도화",d:"측정하고 다듬고 확장하거나, 깔끔하게 인수인계합니다."}
    ],
    marquee:["프로세스 자동화","업무 시간 절감","더 빠른 응대","오류 감소","24시간 무중단","스마트 문의 응대","자동 고객 관리","매일 한눈에 보는 대시보드","몇 주 만에 가동"],
    trust:[
      {k:"데이터 보안",t:"당신의 데이터는 <span class='accent'>당신 쪽에 그대로</span>",d:"고객님 환경 안에서 돌아가며, 고객 정보를 따로 보관하지 않습니다. 양방향 비밀유지 계약도 체결합니다."},
      {k:"정액 견적",t:"<span class='accent'>먼저 정액으로 견적</span>, 시간당 무한정 청구 없음",d:"착수 전에 고정 금액을 먼저 제시합니다."},
      {k:"몇 주 가동",t:"<span class='accent'>몇 주</span> 만에 가동, 그 후엔 <span class='accent'>신경 쓸 필요 없이</span>",d:"쓸 수 있는 버전까지 몇 주면 충분합니다. 가동 후에는 알아서 돌아가고, 언제든 직접 넘겨받을 수 있습니다."},
      {k:"선검증",t:"<span class='accent'>먼저 시제품</span>으로, 할 가치가 있는지부터 확인",d:"가장 자동화할 가치가 높은 부분부터 작게 시작해, 만들어 본 뒤 확장을 결정합니다."}
    ]
  }
};
