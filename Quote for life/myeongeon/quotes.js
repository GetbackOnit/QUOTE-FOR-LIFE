/*
 * 오늘의 한 줄 — 기본 명언 데이터
 *
 * 원칙
 *  - 원문은 저작권 보호기간이 지난 고전만 사용하고, 한국어는 직접 옮긴 번역입니다.
 *    (시중 번역본의 문장을 가져오지 않았습니다.)
 *  - conf(출처 확인 수준)
 *      A = 고전 원전에 표준 장·절 번호가 있는 구절 (출시 전 원전 대조 권장)
 *      B = 전승되는 인용 (원전 표기가 학자·판본마다 다를 수 있음)
 *      P = 속담 (저자·출처 없음)
 *  - chk: 1 = 개발 중 온라인 영어 번역본·원문과 구절 번호를 대조한 항목 (2026-10-14)
 *  - chk: 2 = 원문의 글자와 편명까지 대조한 항목 (quotes-extra.js)
 *  - 추가 명언은 quotes-extra.js 에 있습니다.
 *  - tones: comfort(위로) calm(진정) steady(꾸준) encourage(격려) push(도전) trust(자기신뢰)
 *  - states: reject(탈락 직후) wait(결과 대기) interview(면접 준비) apply(지원 중) rest(쉬는 중) any(공통)
 *  - note는 출처가 아니라 '해설'입니다. 작은 행동(action)은 선택 항목입니다.
 */
window.QUOTES = [
  // ───────── 논어 ─────────
  {
    id: 'q01', ko: '남이 나를 알아주지 않는 것을 걱정하지 말고, 내가 남을 알아보지 못하는 것을 걱정하라.',
    orig: '不患人之不己知, 患不知人也。', who: '공자', src: '『논어』 학이 16', conf: 'A',
    tones: ['comfort', 'steady'], states: ['reject', 'wait', 'apply'],
    note: '인정받지 못한다고 느끼는 날, 시선을 "평가받기"에서 "보는 눈 기르기"로 옮겨 보라는 말로 읽을 수 있어요.',
    action: '지원하려는 곳에서 배울 점 하나만 적어 보기'
  },
  {
    id: 'q02', ko: '자리가 없음을 걱정하지 말고, 그 자리에 설 만한 사람이 되었는지를 걱정하라.',
    orig: '不患無位, 患所以立。', who: '공자', src: '『논어』 이인 14', conf: 'A',
    tones: ['steady', 'push'], states: ['apply', 'rest', 'reject'],
    note: '결과는 내 손 밖에 있지만, 준비는 내 손 안에 있다는 쪽으로 무게를 옮겨 주는 구절이에요.',
    action: '자소서나 포트폴리오에서 한 줄만 고쳐 보기'
  },
  {
    id: 'q03', ko: '잘못을 하고도 고치지 않는 것, 그것이 진짜 잘못이다.',
    orig: '過而不改, 是謂過矣。', who: '공자', src: '『논어』 위령공 29', conf: 'A',
    tones: ['comfort', 'steady'], states: ['reject'],
    note: '탈락 자체를 잘못으로 보지 않고, 돌아보고 고치는 데서 쓸모가 생긴다는 관점으로 읽을 수 있어요.',
    action: '이번 결과에서 고칠 수 있는 것 한 가지만 메모하기'
  },
  {
    id: 'q04', ko: '아는 사람은 좋아하는 사람만 못하고, 좋아하는 사람은 즐기는 사람만 못하다.',
    orig: '知之者不如好之者, 好之者不如樂之者。', who: '공자', src: '『논어』 옹야 20', conf: 'A',
    tones: ['encourage', 'calm'], states: ['apply', 'rest', 'any'],
    note: '의무감으로만 하는 준비가 지칠 때, 내가 정말 재미를 느끼는 부분이 어디인지 떠올려 보게 해요.',
    action: '오늘 준비하면서 가장 덜 괴로웠던 일은 무엇이었는지 떠올려 보기'
  },
  {
    id: 'q05', ko: '산을 쌓다가 한 삼태기를 채우지 못해 이루지 못하는 것도 내가 멈췄기 때문이고, 평지에 겨우 한 삼태기를 부었더라도 나아가는 것은 내가 가는 것이다.',
    orig: '譬如爲山, 未成一簣, 止, 吾止也。譬如平地, 雖覆一簣, 進, 吾往也。', who: '공자', src: '『논어』 자한 19', conf: 'A',
    tones: ['steady', 'push'], states: ['apply', 'rest'],
    note: '멈출지 나아갈지는 결국 내가 고른다는 말이에요. 삼태기는 흙을 나르는 그릇입니다.',
    action: '아주 작은 일 하나(10분짜리)만 끝내기'
  },
  {
    id: 'q06', ko: '배우고 때때로 익히면, 또한 기쁘지 않은가.',
    orig: '學而時習之, 不亦說乎。', who: '공자', src: '『논어』 학이 1', conf: 'A',
    tones: ['calm', 'steady'], states: ['rest', 'apply', 'any'],
    note: '성과와 상관없이 배우는 일 자체에 기쁨이 있다는 말이에요. 조급한 날에 속도를 늦춰 줍니다.',
    action: ''
  },
  {
    id: 'q07', ko: '세 사람이 길을 가면, 그중에 반드시 내 스승이 있다.',
    orig: '三人行, 必有我師焉。', who: '공자', src: '『논어』 술이 21', conf: 'A',
    tones: ['calm', 'encourage'], states: ['interview', 'apply'],
    note: '면접장에서도 마찬가지예요. 평가받는 자리이면서 동시에 배울 수 있는 자리이기도 합니다.',
    action: '면접관에게 물어보고 싶은 질문 한 개 적어 두기'
  },

  // ───────── 맹자·순자·중용 ─────────
  {
    id: 'q08', ko: '하늘이 장차 큰 임무를 어떤 사람에게 내리려 할 때는, 반드시 먼저 그 마음과 뜻을 괴롭게 한다.',
    orig: '天將降大任於是人也, 必先苦其心志。', who: '맹자', src: '『맹자』 고자 하 15', conf: 'A',
    tones: ['push', 'encourage'], states: ['reject', 'rest'],
    note: '힘든 시기를 해석하는 하나의 관점일 뿐이에요. 고통이 곧 보상을 약속한다는 뜻은 아니니, 위로가 필요한 날엔 넘겨도 좋습니다.',
    action: ''
  },
  {
    id: 'q09', ko: '반걸음이 쌓이지 않으면, 천 리에 이를 수 없다.',
    orig: '不積跬步, 無以至千里。', who: '순자', src: '『순자』 권학', conf: 'A',
    tones: ['steady', 'encourage'], states: ['apply', 'rest', 'any'],
    note: '큰 목표가 막막할 때, 오늘 할 수 있는 반걸음의 크기로 줄여 보게 하는 말이에요. 판본에 따라 글자(跬/蹞)와 "至"의 유무가 조금 달라요.',
    action: '오늘의 반걸음: 지원서 한 항목만 채우기'
  },
  {
    id: 'q10', ko: '남이 한 번에 해내면 나는 백 번을 하고, 남이 열 번에 해내면 나는 천 번을 한다.',
    orig: '人一能之, 己百之; 人十能之, 己千之。', who: '『중용』', src: '『중용』 20장', conf: 'A',
    tones: ['push', 'steady'], states: ['apply'],
    note: '남과의 비교가 아니라 "나는 내 속도로 반복하겠다"는 다짐으로 읽을 때 힘이 돼요.',
    action: '어제 못한 연습 문제 한 개 다시 풀어 보기'
  },

  // ───────── 도덕경 ─────────
  {
    id: 'q11', ko: '천 리 길도 발밑에서 시작된다.',
    orig: '千里之行, 始於足下。', who: '노자', src: '『도덕경』 64장', conf: 'A',
    tones: ['steady', 'encourage'], states: ['apply', 'rest', 'any'],
    note: '막막함이 클수록 지금 서 있는 자리에서의 첫 동작만 보게 해 줘요.',
    action: '책상에 앉아 5분만 시작해 보기'
  },
  {
    id: 'q12', ko: '남을 아는 사람은 지혜롭고, 자신을 아는 사람은 밝다. 남을 이기는 사람은 힘이 있고, 자신을 이기는 사람은 강하다.',
    orig: '知人者智, 自知者明; 勝人者有力, 自勝者強。', who: '노자', src: '『도덕경』 33장', conf: 'A',
    tones: ['trust', 'steady'], states: ['interview', 'apply', 'any'],
    note: '경쟁자와의 비교보다 내 상태를 정확히 아는 쪽이 더 오래 간다는 뜻으로 읽을 수 있어요.',
    action: '내 강점 세 가지를 면접용 한 문장으로 적어 보기'
  },
  {
    id: 'q13', ko: '만족할 줄 아는 사람이 부유하다.',
    orig: '知足者富。', who: '노자', src: '『도덕경』 33장', conf: 'A',
    tones: ['calm', 'comfort'], states: ['wait', 'rest', 'any'],
    note: '"아직 없는 것"에 쏠린 시선을 "이미 있는 것"으로 잠깐 돌려놓는 말이에요.',
    action: '지금 내게 있는 것 세 가지 떠올려 보기'
  },
  {
    id: 'q14', ko: '가장 좋은 것은 물과 같다. 물은 만물을 이롭게 하면서도 다투지 않고, 사람들이 싫어하는 낮은 곳에 머문다.',
    orig: '上善若水。水善利萬物而不爭, 處衆人之所惡。', who: '노자', src: '『도덕경』 8장', conf: 'A',
    tones: ['calm', 'comfort'], states: ['wait', 'reject'],
    note: '기다림과 낮은 자리가 부끄러운 일이 아니라는 쪽으로 위안을 주는 구절이에요.',
    action: ''
  },
  {
    id: 'q15', ko: '큰 그릇은 늦게 이루어진다.',
    orig: '大器晩成。', who: '노자', src: '『도덕경』 41장', conf: 'A',
    tones: ['comfort', 'steady'], states: ['reject', 'rest', 'apply'],
    note: '남들보다 늦어 보여서 조급한 날에 읽는 말이에요. 늦다는 사실 자체가 평가는 아닙니다.',
    action: ''
  },

  // ───────── 법구경 ─────────
  {
    id: 'q16', ko: '마음이 모든 것에 앞서고, 마음이 주인이며, 모든 것은 마음에서 만들어진다.',
    orig: 'Manopubbaṅgamā dhammā manoseṭṭhā manomayā.', who: '『법구경』(담마파다)', src: '『법구경』 1', conf: 'A', chk: 1,
    tones: ['calm', 'trust'], states: ['wait', 'interview', 'any'],
    note: '상황 자체보다 그것을 바라보는 마음의 상태가 먼저 움직인다는 말이에요.',
    action: '숨을 크게 세 번 쉬고, 지금 마음 상태를 한 단어로 적기'
  },
  {
    id: 'q17', ko: '전쟁터에서 백만 명을 이기는 것보다, 자기 자신 하나를 이기는 사람이 가장 위대한 승리자이다.',
    orig: 'Yo sahassaṃ sahassena saṅgāme mānuse jine, ekañca jeyyamattānaṃ sa ve saṅgāmajuttamo.', who: '『법구경』(담마파다)', src: '『법구경』 103', conf: 'A', chk: 1,
    tones: ['trust', 'push'], states: ['interview', 'apply', 'any'],
    note: '이겨야 할 상대를 면접관이나 경쟁자가 아니라 내 긴장과 미루는 습관으로 돌려 주는 말이에요.',
    action: '미루고 있던 일 중 가장 작은 것 하나 끝내기'
  },
  {
    id: 'q18', ko: '자기 자신이야말로 자기의 의지처이다. 다른 누가 의지처가 되겠는가.',
    orig: 'Attā hi attano nātho, ko hi nātho paro siyā.', who: '『법구경』(담마파다)', src: '『법구경』 160', conf: 'A', chk: 1,
    tones: ['trust', 'comfort'], states: ['reject', 'wait'],
    note: '혼자라는 외로움의 말이 아니라, 내가 나를 챙기는 것부터 시작한다는 말로 읽을 수 있어요. 도움을 구하지 말라는 뜻은 아닙니다.',
    action: '오늘 나를 위해 할 일 하나 정하기 (산책, 식사, 샤워 등 무엇이든)'
  },
  {
    id: 'q19', ko: '건강이 가장 큰 이익이고, 만족이 가장 큰 재산이다.',
    orig: 'Ārogyaparamā lābhā, santuṭṭhiparamaṃ dhanaṃ.', who: '『법구경』(담마파다)', src: '『법구경』 204', conf: 'A', chk: 1,
    tones: ['calm', 'comfort'], states: ['rest', 'wait', 'any'],
    note: '준비에 몰두하다 잠과 식사를 놓친 날에 읽으면 좋은 말이에요.',
    action: '물 한 잔 마시고 스트레칭 1분'
  },
  {
    id: 'q20', ko: '너희가 스스로 애써야 한다. 여래들은 길을 가리킬 뿐이다.',
    orig: 'Tumhehi kiccamātappaṃ akkhātāro tathāgatā.', who: '『법구경』(담마파다)', src: '『법구경』 276', conf: 'A', chk: 1,
    tones: ['steady', 'trust'], states: ['apply', 'rest'],
    note: '조언과 정보는 많지만 걷는 것은 결국 내 발이라는 말이에요.',
    action: '정보 찾기를 멈추고, 이미 아는 것 하나를 실행하기'
  },
  {
    id: 'q21', ko: '원한은 원한으로는 결코 그치지 않는다. 원한을 놓을 때에야 그친다.',
    orig: 'Na hi verena verāni sammantīdha kudācanaṃ, averena ca sammanti, esa dhammo sanantano.', who: '『법구경』(담마파다)', src: '『법구경』 5', conf: 'A', chk: 1,
    tones: ['calm', 'comfort'], states: ['reject'],
    note: '불합격 통보에 화가 나거나 억울한 날, 그 감정을 곱씹는 데 쓰는 에너지를 줄이도록 돕는 말이에요.',
    action: ''
  },
  {
    id: 'q22', ko: '남의 허물이나, 남이 한 일과 하지 않은 일을 볼 것이 아니라, 자기가 한 일과 하지 않은 일을 살펴보라.',
    orig: 'Na paresaṃ vilomāni na paresaṃ katākataṃ, attano va avekkheyya katāni akatāni ca.', who: '『법구경』(담마파다)', src: '『법구경』 50', conf: 'A', chk: 1,
    tones: ['calm', 'trust'], states: ['wait', 'any'],
    note: '다른 지원자와 비교하며 불안해지는 날, 시선을 내 할 일 목록으로 돌려 주는 말이에요.',
    action: '오늘 내가 한 일 세 가지를 적어 보기'
  },

  // ───────── 스토아 ─────────
  {
    id: 'q23', ko: '어떤 것들은 우리에게 달려 있고, 어떤 것들은 달려 있지 않다. 달려 있는 것은 우리의 판단과 행동이고, 달려 있지 않은 것은 몸, 재산, 평판, 지위이다.',
    orig: 'τῶν ὄντων τὰ μέν ἐστιν ἐφ’ ἡμῖν, τὰ δὲ οὐκ ἐφ’ ἡμῖν.', who: '에픽테토스', src: '『엥케이리디온』 1', conf: 'A',
    tones: ['calm', 'trust'], states: ['wait', 'interview', 'reject'],
    note: '결과 발표를 기다리는 날, 통제할 수 있는 일과 없는 일을 나누는 가장 짧은 도구예요.',
    action: '오늘 내가 통제할 수 있는 일 한 가지만 하기'
  },
  {
    id: 'q24', ko: '좋은 사람이란 어떤 사람인지 논하는 데 더 이상 시간을 쓰지 말고, 그런 사람이 되어라.',
    orig: 'Μηκέθ’ ὅλως περὶ τοῦ οἷόν τινα εἶναι τὸν ἀγαθὸν ἄνδρα διαλέγεσθαι, ἀλλὰ εἶναι τοιοῦτον.', who: '마르쿠스 아우렐리우스', src: '『명상록』 10.16', conf: 'A', chk: 1,
    tones: ['trust', 'push'], states: ['apply', 'rest'],
    note: '준비만 계속하고 싶어질 때, 일단 한 번 해 보라는 쪽으로 등을 밀어 주는 말이에요.',
    action: '고민 중인 지원서를 한 곳만 제출해 보기'
  },
  {
    id: 'q25', ko: '행동을 가로막는 것이 오히려 행동을 나아가게 하고, 길을 막고 있는 것이 길이 된다.',
    orig: '', who: '마르쿠스 아우렐리우스', src: '『명상록』 5.20', conf: 'A',
    tones: ['push', 'encourage'], states: ['reject', 'apply'],
    note: '장애물을 피할 대상이 아니라 재료로 쓰라는 말이에요. 힘이 있을 때 읽으면 좋아요.',
    action: '막혔던 부분이 무엇이었는지 한 줄로 적어 보기'
  },
  {
    id: 'q26', ko: '우리를 짓누르는 것보다 두렵게 하는 것이 더 많고, 우리는 현실에서보다 생각 속에서 더 자주 괴로워한다.',
    orig: 'Plura sunt, Lucili, quae nos terrent quam quae premunt, et saepius opinione quam re laboramus.', who: '세네카', src: '『루킬리우스에게 보내는 편지』 13', conf: 'A',
    tones: ['calm', 'comfort'], states: ['wait', 'interview'],
    note: '면접 전날이나 결과 대기 중처럼 상상이 커지는 시간에 읽어 볼 만한 말이에요.',
    action: '걱정되는 장면을 종이에 적고, 실제로 일어난 일과 상상을 나눠 보기'
  },

  // ───────── 속담·전승 ─────────
  {
    id: 'q27', ko: '쥐구멍에도 볕 들 날이 있다.',
    orig: '', who: '속담', src: '속담', conf: 'P',
    tones: ['comfort', 'encourage'], states: ['reject', 'rest'],
    note: '아무리 어두운 구석에도 볕이 드는 날은 온다는 말이에요. 언제인지는 정해져 있지 않지만요.',
    action: ''
  },
  {
    id: 'q28', ko: '시작이 반이다.',
    orig: '', who: '속담', src: '속담', conf: 'P',
    tones: ['encourage', 'steady'], states: ['apply', 'rest'],
    note: '손이 안 가는 일 앞에서, 시작의 문턱을 낮춰 주는 말이에요.',
    action: '파일 하나 열어 두기. 그것만 해도 오늘은 시작한 거예요'
  },
  {
    id: 'q29', ko: '급할수록 돌아가라.',
    orig: '', who: '속담', src: '속담', conf: 'P',
    tones: ['calm', 'steady'], states: ['interview', 'apply'],
    note: '마감이나 면접이 가까울수록 허둥대기 쉬워요. 순서를 한 번 점검하라는 말로 읽을 수 있어요.',
    action: '남은 일을 순서대로 세 줄만 적어 보기'
  },
  {
    id: 'q30', ko: '호랑이에게 물려가도 정신만 차리면 산다.',
    orig: '', who: '속담', src: '속담', conf: 'P',
    tones: ['calm', 'trust'], states: ['wait', 'reject', 'interview'],
    note: '상황이 아무리 나빠 보여도 중심을 잡는 데서부터 시작한다는 말이에요.',
    action: ''
  },
  {
    id: 'q31', ko: '백지장도 맞들면 낫다.',
    orig: '', who: '속담', src: '속담', conf: 'P',
    tones: ['comfort', 'calm'], states: ['reject', 'wait', 'rest'],
    note: '혼자 끙끙 앓는 시간이 길어졌다면, 누군가에게 먼저 연락해 보라는 말로 읽을 수 있어요.',
    action: '지금 편한 사람 한 명에게 안부 보내기'
  },
  {
    id: 'q32', ko: '우물을 파도 한 우물을 파라.',
    orig: '', who: '속담', src: '속담', conf: 'P',
    tones: ['steady', 'push'], states: ['apply'],
    note: '이것저것 흔들릴 때 방향을 하나로 모으라는 말이에요. 당장 정하지 못해도 괜찮아요.',
    action: '이번 주에 집중할 지원 분야 하나만 정해 보기'
  },
  {
    id: 'q33', ko: '신에게는 아직 열두 척의 배가 남아 있습니다.',
    orig: '今臣戰船, 尙有十二。', who: '이순신', src: '장계(1597) 전승', conf: 'B',
    tones: ['comfort', 'push'], states: ['reject', 'rest'],
    note: '많이 잃은 뒤에도 "남은 것"에 시선을 두었다는 이야기로 전해져요. 원문 표기는 판본에 따라 다를 수 있어서 인용할 때는 확인이 필요해요.',
    action: '이번에 잃은 것 말고, 아직 남아 있는 것 세 가지 적어 보기'
  }
];
