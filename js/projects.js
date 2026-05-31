/* ============================================================
   Case studies. Add / edit projects here.
   stack & year are language-neutral; text is per-language.
   Names of clients/employers are kept generic on purpose.
   ============================================================ */
/* ===== 旗舰案例（置顶）。脱敏安全版：客户不具名，只展示规模与能力。 ===== */
window.FEATURED = {
  stack:["Flask","SQLite","ChromaDB","DeepSeek","gunicorn","RAG"], year:"2025–26",
  images:[
    {src:{zh:"assets/cases/cap-qa-zh.webp",en:"assets/cases/cap-qa-en.webp",ja:"assets/cases/cap-qa-ja.webp",ko:"assets/cases/cap-qa-ko.webp"},cap:{en:"Knowledge-base Q&A — ask, get an answer, with the source document cited (real screen)",zh:"知识库智能问答：一问就答，并标注答案出自哪份资料（真实后台）",ja:"ナレッジQ&A：聞けば即答、出典資料も明示（実画面）",ko:"지식베이스 Q&A: 물으면 바로 답, 출처 자료까지 표시 (실제 화면)"}},
    {src:{zh:"assets/cases/cap-sim-zh.webp",en:"assets/cases/cap-sim-en.webp",ja:"assets/cases/cap-sim-ja.webp",ko:"assets/cases/cap-sim-ko.webp"},cap:{en:"AI plays different customer types so reps can practice, then auto-scores them (real screen)",zh:"AI 扮演不同类型客户陪销售练话术，结束自动打分（真实后台）",ja:"AIがさまざまな顧客役でロープレ、終了後に自動採点（実画面）",ko:"AI가 다양한 고객 유형으로 롤플레이, 종료 후 자동 채점 (실제 화면)"}},
    {src:{zh:"assets/cases/cap-leads-zh.webp",en:"assets/cases/cap-leads-en.webp",ja:"assets/cases/cap-leads-ja.webp",ko:"assets/cases/cap-leads-ko.webp"},cap:{en:"Leads auto-assigned to reps by rule — the busier the rep, the fewer they get (real screen; rep names masked)",zh:"线索按规则自动派给销售，谁手上线索多就少分（真实后台，销售姓名已脱敏）",ja:"リードはルールで自動割当 — 手一杯の人ほど少なめに（実画面、氏名は伏せ）",ko:"리드를 규칙에 따라 자동 배정 — 바쁜 사람일수록 적게 (실제 화면, 이름 가림)"}},
    {src:{zh:"assets/cases/cap-sales-zh.webp",en:"assets/cases/cap-sales-en.webp",ja:"assets/cases/cap-sales-ja.webp",ko:"assets/cases/cap-sales-ko.webp"},cap:{en:"Sales analytics board — leads, conversion and target attainment at a glance (real screen; revenue redacted)",zh:"销售经营分析看板：线索 · 转化 · 业绩达成一屏看全（真实后台，营收数字已隐去）",ja:"営業分析ボード：リード・転換・実績達成を一画面で（実画面、売上は非表示）",ko:"영업 분석 보드: 리드 · 전환 · 목표 달성을 한 화면에 (실제 화면, 매출 가림)"}},
    {src:{zh:"assets/cases/cap-fc-zh.webp",en:"assets/cases/cap-fc-en.webp",ja:"assets/cases/cap-fc-ja.webp",ko:"assets/cases/cap-fc-ko.webp"},cap:{en:"Forecast center — each team's forecast vs target (OP), gaps surfaced automatically (real screen; figures redacted)",zh:"业绩预测中心：各组预测对比目标（OP），差额一目了然（真实后台，金额已隐去）",ja:"業績予測センター：各チームの予測と目標（OP）の差を自動可視化（実画面、金額は非表示）",ko:"실적 예측 센터: 팀별 예측 대 목표(OP), 격차를 자동으로 표시 (실제 화면, 금액 가림)"}},
    {src:{zh:"assets/cases/cap-vq-zh.webp",en:"assets/cases/cap-vq-en.webp",ja:"assets/cases/cap-vq-ja.webp",ko:"assets/cases/cap-vq-ko.webp"},cap:{en:"Sales calls auto-scored on 6 dimensions — full coverage, not spot checks (real screen; customer info & phone masked)",zh:"销售通话自动 6 维度打分，从抽检变全覆盖（真实后台，客户信息与电话已脱敏）",ja:"営業通話を6軸で自動採点、抜き取りから全件へ（実画面、顧客情報・電話番号は伏せ）",ko:"영업 통화를 6개 지표로 자동 채점, 표본에서 전수로 (실제 화면, 고객 정보·전화 가림)"}}
  ],
  en:{sector:"K-12 EDUCATION · US-IPO-STAGE",title:"Sales Enablement & Operations Platform",
    tags:["Instant answers","AI practice calls","Auto-assign customers","One daily report","Forecasts","Call scoring"],
    summary:"A US-IPO-stage K-12 education company with a sales team of hundreds. They were assigning leads by hand, hunting through documents for the right script, and rebuilding the monthly numbers in spreadsheets. I turned all of it into one internal system that runs itself, and the team now uses it every day to run a business doing over ¥100M a year. <b>The same goes for your business:</b> run a clinic or a shop and it's appointment reminders, post-visit follow-ups, and sales rolled up across locations; run a wholesale operation and it's customer follow-up, reconciling the books, and tracking down stock. Same idea, whatever your trade.",
    impact:[{n:"¥100M+",l:"annual revenue it supports"},{n:"¥10M+",l:"net profit it underpins"},{n:"~30×",l:"faster lead routing · 8h → 16min"},{n:"daily",l:"used by the whole sales team"}],
    hl:["The team gets the right script, price or policy the moment they ask, every answer backed by a source.","AI plays the customer so reps can practice, then scores them, so new hires ramp up faster.","Every lead is auto-assigned to the right rep — a weighted engine runs every 5 minutes, cutting time-to-assignment from ~8 hours of manual hand-offs to 16 minutes.","Every sales call is reviewed and scored automatically, not just a random sample.","The monthly numbers build themselves into a daily dashboard, with forecasts, so no more spreadsheet nights."]},
  zh:{sector:"K12 教育 · 美股准上市公司",title:"给销售团队的自动化系统",
    tags:["话术秒查","AI 模拟练话术","客户自动派单","经营一张表","业绩预测","电话自动打分"],
    summary:"一家美股准上市 K12 教育公司，几百人的销售团队。原本靠人工分客户、翻文档找话术、月底手工拉表汇总经营数据；我把这些重活做成一套会自己跑的内部系统，团队每天在用，支撑着这家公司亿元级营收的业务。<b>换成你的生意也一样：</b>开门店就是预约提醒、到店回访、多店业绩自动汇总；做批发就是客户跟进、核对账目、找货——同一套思路。",
    impact:[{n:"亿元级",l:"所支撑业务的年营收"},{n:"千万级",l:"所支撑业务的净利润"},{n:"约 30×",l:"线索派单提速 · 8 小时→16 分钟"},{n:"每天",l:"整个销售团队都在用"}],
    hl:["团队张口就查到该用的话术、报价、政策，答案都带出处，不用再翻文档。","AI 扮演客户陪销售练话术，还自动打分，新人上手更快。","线索每 5 分钟自动按负载加权派给最合适的销售，从入库到派单由人工的约 8 小时压到 16 分钟，主管不再手动分。","每通销售电话自动复盘打分，从抽检变成全覆盖。","经营数据每天自动汇成看板、还能预测业绩，月底不用再手工拉表。"]},
  ja:{sector:"K-12 教育 · 米国上場準備",title:"営業支援・経営プラットフォーム",
    tags:["即答ナレッジ","AI模擬ロープレ","見込み客 自動割当","日次レポート","売上予測","通話 自動採点"],
    summary:"米国上場準備段階まで進んだ K-12 教育企業、数百人の営業チーム。以前はリードを手で割り振り、資料を探してトークを見つけ、月末は数字を手作業で集計していました。これらをまるごと、ひとりでに回る内製システムにしました。年商1億元超の事業を支え、チームが毎日使っています。<b>あなたの商売でも同じです：</b>お店をやっているなら予約のリマインド、来店後のフォロー、何店舗あっても売上は勝手に一つにまとまる；卸をやっているなら客先の追いかけ、帳簿の突き合わせ、在庫探し——どれも同じやり方です。",
    impact:[{n:"1億元超",l:"支える事業の年商"},{n:"千万元超",l:"支える事業の純利益"},{n:"約30×",l:"リード割当を高速化 · 8時間→16分"},{n:"毎日",l:"営業チーム全員が使用"}],
    hl:["トーク、見積、社内ルールが、聞けばその場で。答えには必ず出どころ付き。資料探しはもう不要。","AIが顧客役を務め、営業が練習でき、自動で採点。新人の立ち上がりが速くなります。","リードは5分ごとに負荷加重で最適な担当へ自動割当。入庫から割当までを人手の約8時間から16分に短縮し、上長の手作業は不要に。","すべての営業通話を自動でレビュー・採点。抜き取りではなく全件を。","月次の数字は毎日ひとりでにダッシュボードへ。予測まで付き、月末の集計作業から解放されます。"]},
  ko:{sector:"K-12 교육 · 미국 상장 준비",title:"영업 지원·경영 플랫폼",
    tags:["즉답 검색","AI 모의 연습","고객 자동 배정","일일 리포트","매출 예측","통화 자동 채점"],
    summary:"미국 상장 준비 단계까지 갔던 K-12 교육 기업, 수백 명 규모의 영업팀. 예전에는 리드를 손으로 배정하고, 자료를 뒤져 멘트를 찾고, 월말에 숫자를 수작업으로 집계했습니다. 이 모든 걸 알아서 돌아가는 사내 시스템으로 만들었습니다. 연 매출 1억 위안이 넘는 사업을 떠받치고, 팀이 매일 씁니다.<b>당신 사업도 똑같습니다:</b> 매장 하시면 예약 알림, 방문 후 후속 연락, 여러 매장 매출 자동 집계고요, 도매 하시면 거래처 관리, 장부 대조, 물건 찾기 — 결국 같은 방식입니다.",
    impact:[{n:"1억 위안+",l:"지원 사업 연매출"},{n:"천만 위안+",l:"지원 사업 순이익"},{n:"약 30×",l:"리드 배정 속도 · 8시간→16분"},{n:"매일",l:"영업팀 전체가 사용"}],
    hl:["멘트, 견적, 정책을 물으면 그 자리에서. 답변마다 출처가 붙어 자료를 뒤질 일이 없습니다.","AI가 고객 역할을 맡아 영업이 연습하고, 자동으로 채점합니다. 신입이 더 빨리 자리잡습니다.","리드는 5분마다 부하 가중으로 가장 알맞은 담당에게 자동 배정 — 입고부터 배정까지 수작업 약 8시간에서 16분으로 단축, 관리자가 손으로 나눌 필요가 없습니다.","모든 영업 통화를 자동으로 리뷰·채점. 표본이 아니라 전체를.","월별 숫자가 매일 알아서 대시보드로. 예측까지 더해, 월말 집계에서 해방됩니다."]}
};

window.PROJECTS = [
  {
    stack:["Python","Backtester","Alpaca","LLM","RiskGate"], year:"2026",
    en:{title:"Quant Research & Risk-Controlled Trading",sector:"FINTECH",role:"Lead architect & delivery",
      summary:"A dual-track system: LLM-assisted research that never touches the numbers, plus a deterministic, backtested engine with hard risk limits.",
      hl:["Anti-hallucination validator — every reported number is code-computed & verified","Event-driven backtester: point-in-time, next-bar fills, slippage modelled","Three-tier circuit breakers + pre-trade risk gate · 103-test suite"]},
    zh:{title:"量化研究与风控交易系统",sector:"金融科技",role:"主导架构与交付",
      summary:"双轨系统：LLM 只做研究、绝不碰数字；加上一套确定性、回测验证、带硬性风控限额的执行引擎。",
      hl:["防幻觉校验器——报告里每个数字都由代码计算并核验","事件驱动回测：point-in-time、次根成交、含滑点模型","三级熔断 + 下单前风控闸门 · 103 个测试用例"]},
    ja:{title:"クオンツ調査とリスク制御トレード",sector:"フィンテック",role:"アーキテクト・主導",
      summary:"二系統構成。数値には一切触れない LLM 調査と、確定的でバックテスト済み・厳格なリスク上限を持つ実行エンジン。",
      hl:["ハルシネーション検証器——レポートの数値は全てコード算出・検証済み","イベント駆動バックテスト：ポイントインタイム、次足約定、スリッページ考慮","三段階サーキットブレーカー＋発注前リスクゲート · 103 件のテスト"]},
    ko:{title:"퀀트 리서치 & 리스크 통제 트레이딩",sector:"핀테크",role:"리드 아키텍트 · 총괄",
      summary:"이원 구조: 숫자에 절대 손대지 않는 LLM 리서치와, 백테스트를 거친 결정론적 실행 엔진(엄격한 리스크 한도 포함).",
      hl:["환각 방지 검증기 — 보고서의 모든 숫자는 코드로 계산·검증","이벤트 기반 백테스터: 시점 고정, 다음 봉 체결, 슬리피지 반영","3단계 서킷브레이커 + 주문 전 리스크 게이트 · 테스트 103건"]}
  },
  {
    stack:["Python","Platform APIs","CDP","SQLite"], year:"2025",
    en:{title:"Multi-Platform Price Intelligence",sector:"E-COMMERCE",role:"Lead architect & delivery",
      summary:"Real-time cross-platform price comparison with all-time-low detection and drop alerts — including a browser channel for prices that APIs won't expose.",
      hl:["Spec-fingerprint matching compares “same-config, different-model” across platforms","CDP browser channel reads real page prices, bypassing API limits","Automated price-drop alerts pushed to the buyer instantly"]},
    zh:{title:"全网比价情报",sector:"电商 / 消费",role:"主导架构与交付",
      summary:"实时跨平台比价，含史低判断与降价提醒——还包括一条浏览器通道，读取 API 不开放的真实页面价格。",
      hl:["规格指纹匹配，跨平台比对「同配置不同型号」","CDP 浏览器通道读真实页面价，绕开 API 限制","降价自动提醒，第一时间推送给买家"]},
    ja:{title:"複数プラットフォーム価格インテリジェンス",sector:"EC / 消費",role:"アーキテクト・主導",
      summary:"リアルタイムの横断価格比較。最安値判定と値下げ通知つき——API が出さない実ページ価格を読むブラウザ経路も。",
      hl:["スペック指紋照合で「同一構成・別型番」を横断比較","CDP ブラウザ経路で実ページ価格を取得し API 制限を回避","値下げを自動検知し、買い手へ即時通知"]},
    ko:{title:"멀티플랫폼 가격 인텔리전스",sector:"이커머스 / 소비",role:"리드 아키텍트 · 총괄",
      summary:"실시간 플랫폼 간 가격 비교, 역대 최저가 판단과 인하 알림 — API가 공개하지 않는 실제 페이지 가격을 읽는 브라우저 채널 포함.",
      hl:["사양 지문 매칭으로 ‘같은 구성·다른 모델’을 플랫폼 간 비교","CDP 브라우저 채널로 실제 페이지 가격 수집, API 제한 우회","가격 인하를 자동 감지해 구매자에게 즉시 알림"]}
  },
  {
    stack:["Python","CDP","Feishu API","cron"], year:"2025",
    en:{title:"Automated BI Pipeline",sector:"INTERNAL OPS",role:"Lead architect & delivery",
      summary:"A daily pipeline that reads rendered BI dashboards and syncs them into collaborative tables — zero manual export, runs unattended.",
      hl:["Browser automation reads dashboards no API exposes","Runs every morning at 09:00, fully unattended","One source of truth, in the tool the team already lives in"]},
    zh:{title:"自动化 BI 数据管道",sector:"内部运营",role:"主导架构与交付",
      summary:"每天自动读取渲染后的 BI 看板，并同步进协作多维表——零手工导出，无人值守运行。",
      hl:["浏览器自动化读取没有 API 的看板数据","每天早上 9:00 自动跑，全程无人值守","团队本就在用的工具里，一个唯一真相"]},
    ja:{title:"BI 自動連携パイプライン",sector:"社内オペレーション",role:"アーキテクト・主導",
      summary:"描画後の BI ダッシュボードを毎日読み取り、共同編集テーブルへ同期。手動エクスポートゼロ、無人で稼働。",
      hl:["API のないダッシュボードをブラウザ自動化で読み取り","毎朝 9:00 に完全無人で実行","チームが既に使うツールの中に、唯一の正を"]},
    ko:{title:"자동화 BI 파이프라인",sector:"사내 운영",role:"리드 아키텍트 · 총괄",
      summary:"렌더링된 BI 대시보드를 매일 읽어 협업 테이블로 동기화 — 수동 내보내기 없이 무인 실행.",
      hl:["API 없는 대시보드를 브라우저 자동화로 읽기","매일 아침 9:00 완전 무인 실행","팀이 이미 쓰는 도구 안에 단일 진실"]}
  },
  {
    stack:["ASR","LLM","RAG","Scoring"], year:"2026",
    en:{title:"Conversation Intelligence (Call QA)",sector:"SALES",role:"Lead architect & delivery",
      summary:"Samples sales call recordings, scores them with AI, returns coaching to each rep, and promotes top calls into the knowledge base.",
      hl:["Turns raw calls into structured, per-rep coaching","Best calls automatically become training material","Closes the loop between QA and enablement"]},
    zh:{title:"对话智能（通话质检）",sector:"销售",role:"主导架构与交付",
      summary:"抽样销售通话录音，用 AI 打分，把教练式反馈回给每个销售，并把高分通话沉淀进知识库。",
      hl:["把原始通话变成结构化、对人的教练反馈","高分通话自动变成培训素材","把质检和赋能闭成一个环"]},
    ja:{title:"会話インテリジェンス（通話品質）",sector:"営業",role:"アーキテクト・主導",
      summary:"営業通話の録音を抽出して AI で採点し、担当者ごとにコーチングを返し、優良通話をナレッジベースへ昇格。",
      hl:["生の通話を、担当者別の構造化フィードバックに","優良通話が自動で研修教材に","品質チェックとイネーブルメントを一つの輪に"]},
    ko:{title:"대화 인텔리전스 (통화 품질)",sector:"영업",role:"리드 아키텍트 · 총괄",
      summary:"영업 통화 녹음을 샘플링해 AI로 채점하고, 담당자별 코칭을 돌려주며, 우수 통화를 지식베이스로 승격.",
      hl:["원본 통화를 담당자별 구조화 피드백으로","우수 통화가 자동으로 교육 자료가 됨","품질 검수와 인에이블먼트를 하나의 루프로"]}
  },
  {
    stack:["OCR","Full-text search","Flask"], year:"2025",
    en:{title:"Document Intelligence / Searchable KB",sector:"OPERATIONS",role:"Lead architect & delivery",
      summary:"An OCR-indexed, full-text-searchable knowledge base over hundreds of scanned documents across categories.",
      hl:["300+ scanned documents made instantly searchable","Six categories, one search box","Find any clause or record in seconds, not hours"]},
    zh:{title:"文档智能 / 可搜索知识库",sector:"运营",role:"主导架构与交付",
      summary:"对数百份扫描文档做 OCR 索引、全文可搜的知识库，跨多个分类。",
      hl:["300+ 份扫描文档变得即刻可搜","六大分类，一个搜索框","几秒内找到任意条款或记录，而非几小时"]},
    ja:{title:"文書インテリジェンス / 検索可能 KB",sector:"オペレーション",role:"アーキテクト・主導",
      summary:"数百件のスキャン文書を OCR 索引化し、全文検索できるナレッジベース。複数カテゴリ対応。",
      hl:["300 件超のスキャン文書を即座に検索可能に","6 カテゴリを 1 つの検索窓で","任意の条項・記録を数時間ではなく数秒で"]},
    ko:{title:"문서 인텔리전스 / 검색 가능 KB",sector:"운영",role:"리드 아키텍트 · 총괄",
      summary:"수백 건의 스캔 문서를 OCR 색인화하고 전문 검색이 가능한 지식베이스. 다중 카테고리 지원.",
      hl:["300건 이상 스캔 문서를 즉시 검색 가능","여섯 개 카테고리를 하나의 검색창으로","어떤 조항·기록이든 몇 시간이 아닌 몇 초 만에"]}
  },
  {
    stack:["Ollama","Image API","SSE"], year:"2024",
    en:{title:"Generative Content Pipeline",sector:"EDTECH / MEDIA",role:"Lead architect & delivery",
      summary:"Generates complete illustrated children's books — story plus matching images — with streaming progress and automatic fallbacks.",
      hl:["Text + image generation in one pipeline","Local LLM for cost control, hosted image model for quality","Streaming progress, graceful fallback when a model fails"]},
    zh:{title:"生成式内容流水线",sector:"教育 / 媒体",role:"主导架构与交付",
      summary:"生成完整的绘本——故事加配套插图——带流式进度与自动降级兜底。",
      hl:["文本 + 图像，一条流水线生成","本地 LLM 控成本，云端图像模型保质量","流式进度，模型失败时优雅降级"]},
    ja:{title:"生成コンテンツ・パイプライン",sector:"教育 / メディア",role:"アーキテクト・主導",
      summary:"物語と挿絵がそろった絵本を丸ごと生成。ストリーミング進捗と自動フォールバックつき。",
      hl:["テキスト＋画像を 1 つのパイプラインで生成","ローカル LLM でコスト管理、クラウド画像モデルで品質確保","進捗をストリーミング、失敗時は安全に縮退"]},
    ko:{title:"생성형 콘텐츠 파이프라인",sector:"에듀테크 / 미디어",role:"리드 아키텍트 · 총괄",
      summary:"이야기와 어울리는 삽화를 갖춘 그림책을 통째로 생성. 스트리밍 진행 표시와 자동 폴백 포함.",
      hl:["텍스트 + 이미지를 하나의 파이프라인에서 생성","로컬 LLM으로 비용 관리, 클라우드 이미지 모델로 품질 확보","진행 상황 스트리밍, 실패 시 우아한 폴백"]}
  },
  {
    stack:["Three.js","WebGL"], year:"2025",
    en:{title:"Interactive 3D Lab Simulator",sector:"EDTECH",role:"Lead architect & delivery",
      summary:"A browser-based 3D chemistry lab — interactive experiments, real-time rendering, zero install.",
      hl:["Real-time 3D simulation, entirely in the browser","No install, runs on any device with a browser","Built to make a hard subject genuinely fun to explore"]},
    zh:{title:"交互式 3D 实验室",sector:"教育科技",role:"主导架构与交付",
      summary:"基于浏览器的 3D 化学实验室——可交互实验、实时渲染、零安装。",
      hl:["实时 3D 模拟，完全跑在浏览器里","零安装，任何带浏览器的设备都能用","把一门难学的学科，做得真的好玩"]},
    ja:{title:"インタラクティブ 3D 実験室",sector:"エドテック",role:"アーキテクト・主導",
      summary:"ブラウザで動く 3D 化学実験室。対話的な実験、リアルタイム描画、インストール不要。",
      hl:["リアルタイム 3D シミュレーションを完全にブラウザ内で","インストール不要、ブラウザがあればどの端末でも","難しい科目を、本当に楽しく探求できるように"]},
    ko:{title:"인터랙티브 3D 실험실",sector:"에듀테크",role:"리드 아키텍트 · 총괄",
      summary:"브라우저에서 동작하는 3D 화학 실험실 — 상호작용 실험, 실시간 렌더링, 설치 불필요.",
      hl:["실시간 3D 시뮬레이션을 완전히 브라우저 안에서","설치 없이, 브라우저만 있으면 어떤 기기에서도","어려운 과목을 진짜로 재미있게 탐구하도록"]}
  }
];
