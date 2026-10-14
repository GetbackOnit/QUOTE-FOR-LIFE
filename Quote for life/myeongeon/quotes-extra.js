/*
 * 오늘의 한 줄 — 추가 명언 74개 (q34~q107)
 * 필드 설명과 원칙은 quotes.js 맨 위 주석과 같습니다.
 *
 * chk: 1 = 개발 중 온라인 자료에서 구절 번호까지 대조함
 * chk: 2 = 개발 중 온라인 원문에서 글자와 편명까지 대조함 (장·절 번호는 미대조라 편명만 표기)
 * chk 표시가 없는 항목은 대조하지 못했습니다. 다른 곳에 인용할 때는 원전을 확인해 주세요.
 */
window.QUOTES = window.QUOTES.concat([
  // ───────── 논어 ─────────
  {
    id: 'q34', ko: '날씨가 추워진 뒤에야 소나무와 잣나무가 늦게 시든다는 것을 안다.',
    orig: '歲寒然後知松柏之後凋也。', who: '공자', src: '『논어』 자한', conf: 'A',
    tones: ['comfort', 'trust'], states: ['reject', 'rest', 'wait'],
    note: '어려운 때가 와서야 무엇이 오래 버티는지 보인다는 말이에요. 지금의 시기를 시험이라기보다 내 뿌리를 확인하는 때로 읽을 수 있어요.',
    action: '지금까지 놓지 않고 이어 온 것 하나 떠올려 보기'
  },
  {
    id: 'q35', ko: '서두르지 말고, 작은 이익을 보지 마라. 서두르면 이르지 못하고, 작은 이익을 보면 큰일을 이루지 못한다.',
    orig: '無欲速, 無見小利。欲速則不達, 見小利則大事不成。', who: '공자', src: '『논어』 자로 17', conf: 'A',
    tones: ['calm', 'steady'], states: ['interview', 'apply'],
    note: '마감이나 면접이 코앞일수록 속도보다 순서를 먼저 점검하게 해 줘요.',
    action: '남은 일 중 가장 중요한 한 가지만 먼저 하기'
  },
  {
    id: 'q36', ko: '거친 밥을 먹고 물을 마시며 팔을 베고 누워도, 즐거움은 그 가운데 있다.',
    orig: '飯疏食飲水, 曲肱而枕之, 樂亦在其中矣。', who: '공자', src: '『논어』 술이', conf: 'A', chk: 2,
    tones: ['comfort', 'calm'], states: ['rest', 'wait', 'reject'],
    note: '형편이 넉넉하지 않은 시기에도 일상 안의 기쁨은 사라지지 않는다는 말이에요. 지금의 어려움이 가볍다는 뜻은 아니에요.',
    action: '오늘 사소하지만 괜찮았던 순간 하나 적기'
  },
  {
    id: 'q37', ko: '어진 사람을 보면 그와 같아지기를 생각하고, 어질지 못한 사람을 보면 안으로 나 자신을 돌아본다.',
    orig: '見賢思齊焉, 見不賢而內自省也。', who: '공자', src: '『논어』 이인 17', conf: 'A',
    tones: ['calm', 'trust'], states: ['wait', 'apply'],
    note: '비교가 올라올 때, 남의 합격 소식을 질투 대신 배울 점으로 돌려 볼 수 있는 구절이에요.',
    action: '잘된 지인에게서 배울 점 하나 적어 보기'
  },
  {
    id: 'q38', ko: '군자는 마음이 평탄하고 넓으며, 소인은 늘 근심에 매여 있다.',
    orig: '君子坦蕩蕩, 小人長戚戚。', who: '공자', src: '『논어』 술이', conf: 'A', chk: 2,
    tones: ['calm', 'trust'], states: ['interview', 'wait'],
    note: '근심이 큰 날 "평탄한 마음"을 목표로 삼는 말이에요. 걱정하는 사람이 못났다는 뜻으로 읽지 않아도 돼요.',
    action: ''
  },
  {
    id: 'q39', ko: '힘이 부족한 사람은 도중에 멈추지만, 너는 지금 스스로 선을 긋고 있다.',
    orig: '力不足者, 中道而廢。今女畫。', who: '공자', src: '『논어』 옹야 10', conf: 'A',
    tones: ['push', 'trust'], states: ['apply', 'rest'],
    note: '제자 염구가 "힘이 부족하다"고 하자 공자가 한 대답이에요. 못하는 게 아니라 미리 선을 긋고 있지 않은지 돌아보게 해요. 지쳐 있을 땐 넘겨도 좋아요.',
    action: '"나는 이건 안 돼"라고 정해 둔 일 하나를 가볍게 시도해 보기'
  },
  {
    id: 'q40', ko: '발분하면 먹는 것도 잊고, 즐거우면 근심도 잊어, 늙음이 다가오는 것도 알지 못한다.',
    orig: '發憤忘食, 樂以忘憂, 不知老之將至云爾。', who: '공자', src: '『논어』 술이', conf: 'A', chk: 2,
    tones: ['encourage', 'steady'], states: ['rest', 'apply'],
    note: '공자가 자신을 이렇게 소개하라고 한 말이에요. 몰입하는 순간이 걱정을 잠시 잊게 해 준다는 뜻으로 읽을 수 있어요.',
    action: ''
  },

  // ───────── 맹자 ─────────
  {
    id: 'q41', ko: '학문하는 길은 다른 것이 없다. 달아난 마음을 찾는 것일 뿐이다.',
    orig: '學問之道無他, 求其放心而已矣。', who: '맹자', src: '『맹자』 고자 상 11', conf: 'A',
    tones: ['calm'], states: ['wait', 'rest', 'any'],
    note: '정신이 산만하고 불안으로 흩어질 때, 마음을 다시 불러 모으는 것부터 시작하라는 말이에요.',
    action: '휴대폰을 내려놓고 3분간 한 가지에만 집중하기'
  },
  {
    id: 'q42', ko: '싹이 자라는 것을 돕겠다고 하는 것은, 싹을 뽑아 올리는 일이다.',
    orig: '助之長者, 揠苗者也。', who: '맹자', src: '『맹자』 공손추 상 2', conf: 'A',
    tones: ['calm', 'steady'], states: ['wait', 'apply'],
    note: '조급함에 무리하게 당기면 오히려 해친다는 말이에요. 결과를 기다리는 시간에 스스로를 너무 몰아붙이지 않게 도와줘요.',
    action: ''
  },
  {
    id: 'q43', ko: '부귀도 그의 마음을 어지럽히지 못하고, 빈천도 그의 뜻을 바꾸지 못하며, 위세와 무력도 그를 꺾지 못한다. 이런 사람을 대장부라 한다.',
    orig: '富貴不能淫, 貧賤不能移, 威武不能屈, 此之謂大丈夫。', who: '맹자', src: '『맹자』 등문공 하 2', conf: 'A',
    tones: ['trust', 'push'], states: ['reject', 'rest', 'interview'],
    note: '"대장부"라는 말이 낯설더라도, 형편이 어려워도 내 기준을 지킨다는 뜻으로 읽을 수 있어요.',
    action: ''
  },

  // ───────── 대학·중용·순자·예기·사기·주역·서경 ─────────
  {
    id: 'q44', ko: '진실로 하루가 새로워지려면, 날마다 새롭게 하고 또 날마다 새롭게 하라.',
    orig: '苟日新, 日日新, 又日新。', who: '『대학』(탕왕의 반명)', src: '『대학』 전 2장', conf: 'A',
    tones: ['encourage', 'steady'], states: ['apply', 'rest'],
    note: '탕임금이 세숫대야에 새겼다는 글귀로 전해져요. 어제의 결과와 상관없이 오늘 하루를 새로 시작하게 해 줘요.',
    action: '오늘 어제와 다르게 해 볼 한 가지 정하기'
  },
  {
    id: 'q45', ko: '먼 곳을 가려면 반드시 가까운 곳에서 시작하고, 높은 곳에 오르려면 반드시 낮은 곳에서 시작한다.',
    orig: '行遠必自邇, 登高必自卑。', who: '『중용』', src: '『중용』 15장', conf: 'A',
    tones: ['steady', 'calm'], states: ['apply', 'rest', 'any'],
    note: '큰 목표 앞에서 막막할 때, 지금 서 있는 자리에서 할 수 있는 일로 눈을 돌리게 해요.',
    action: ''
  },
  {
    id: 'q46', ko: '준마가 한 번 뛰어서는 열 걸음에 이르지 못하지만, 둔한 말도 열흘 동안 수레를 끌면 거기에 이른다. 성과는 멈추지 않는 데 있다.',
    orig: '騏驥一躍, 不能十步; 駑馬十駕, 功在不舍。', who: '순자', src: '『순자』 권학', conf: 'A', chk: 2,
    tones: ['comfort', 'steady'], states: ['reject', 'apply', 'rest'],
    note: '남보다 느리다고 느낄 때, 속도보다 지속이 결과를 만든다는 말이에요.',
    action: ''
  },
  {
    id: 'q47', ko: '새기다가 그만두면 썩은 나무도 부러뜨리지 못하고, 새기기를 그치지 않으면 쇠와 돌에도 새길 수 있다.',
    orig: '鍥而舍之, 朽木不折; 鍥而不舍, 金石可鏤。', who: '순자', src: '『순자』 권학', conf: 'A', chk: 2,
    tones: ['steady', 'push'], states: ['apply', 'reject'],
    note: '어느 순간 효과가 없어 보여도 반복이 쌓이면 달라진다는 말이에요. 지칠 땐 하루 쉬어 가도 괜찮아요.',
    action: ''
  },
  {
    id: 'q48', ko: '무릇 일은 미리 준비하면 서고, 준비하지 않으면 무너진다.',
    orig: '凡事豫則立, 不豫則廢。', who: '『중용』', src: '『중용』 20장', conf: 'A',
    tones: ['steady', 'trust'], states: ['interview', 'apply'],
    note: '면접이 가까운 날, 불안을 준비로 바꾸는 쪽으로 등을 밀어 줘요.',
    action: '면접 예상 질문 하나에 소리 내어 답해 보기'
  },
  {
    id: 'q49', ko: '멈출 곳을 안 뒤에 뜻이 정해지고, 뜻이 정해진 뒤에 고요해질 수 있으며, 고요해진 뒤에 편안해질 수 있다.',
    orig: '知止而后有定, 定而后能靜, 靜而后能安。', who: '『대학』', src: '『대학』 경 1장', conf: 'A',
    tones: ['calm'], states: ['wait', 'interview', 'apply'],
    note: '할 일의 범위를 정하는 것이 불안을 줄이는 출발점이라는 말로 읽을 수 있어요.',
    action: '오늘 할 일을 세 가지로 줄여 적기'
  },
  {
    id: 'q50', ko: '옥은 다듬지 않으면 그릇이 되지 못하고, 사람은 배우지 않으면 도를 알지 못한다.',
    orig: '玉不琢, 不成器; 人不學, 不知道。', who: '『예기』', src: '『예기』 학기', conf: 'A',
    tones: ['steady', 'encourage'], states: ['apply', 'rest'],
    note: '지금의 준비 과정이 다듬는 시간이라는 쪽으로 읽을 수 있어요.',
    action: ''
  },
  {
    id: 'q51', ko: '복숭아와 자두나무는 말하지 않아도, 그 아래에 저절로 길이 난다.',
    orig: '桃李不言, 下自成蹊。', who: '사마천(속담 인용)', src: '『사기』 이장군열전', conf: 'A',
    tones: ['trust', 'steady'], states: ['interview', 'rest', 'apply'],
    note: '사마천이 이광 장군을 평하며 인용한 속담이에요. 스스로를 부풀리려 애쓰지 않아도 진실한 사람에게는 사람이 모인다는 뜻으로 읽을 수 있어요.',
    action: ''
  },
  {
    id: 'q52', ko: '하늘의 운행이 굳건하니, 군자는 이를 본받아 스스로 힘써 쉬지 않는다.',
    orig: '天行健, 君子以自強不息。', who: '『주역』', src: '『주역』 건괘 상전', conf: 'A',
    tones: ['push', 'steady'], states: ['apply'],
    note: '"쉬지 않는다"는 말은 몰아붙이라는 뜻보다 꾸준히 이어 간다는 뜻으로 읽는 게 좋아요.',
    action: ''
  },
  {
    id: 'q53', ko: '궁하면 변하고, 변하면 통하고, 통하면 오래간다.',
    orig: '窮則變, 變則通, 通則久。', who: '『주역』', src: '『주역』 계사전 하', conf: 'A',
    tones: ['encourage', 'steady'], states: ['reject', 'rest', 'apply'],
    note: '막혔다는 느낌이 들 때, 방식을 바꿔 보라는 신호로 읽을 수 있어요.',
    action: '지금 방식에서 하나만 바꿔 보기 (지원 분야, 문장 순서, 준비 방법 등)'
  },
  {
    id: 'q54', ko: '가득 차면 덜어냄을 부르고, 겸손하면 이로움을 받는다.',
    orig: '滿招損, 謙受益。', who: '『서경』', src: '『서경』 대우모', conf: 'A',
    tones: ['calm', 'steady'], states: ['interview'],
    note: '면접장에서의 태도를 점검하게 하는 말이기도 해요.',
    action: ''
  },

  // ───────── 도덕경·장자 ─────────
  {
    id: 'q55', ko: '비움을 지극히 하고, 고요함을 두텁게 지켜라.',
    orig: '致虛極, 守靜篤。', who: '노자', src: '『도덕경』 16장', conf: 'A',
    tones: ['calm'], states: ['wait', 'interview', 'rest'],
    note: '머릿속이 시끄러운 날, 더하기보다 비우는 쪽으로 방향을 바꿔 주는 말이에요.',
    action: '눈을 감고 1분간 숨만 세어 보기'
  },
  {
    id: 'q56', ko: '천하의 어려운 일은 반드시 쉬운 데서 시작되고, 천하의 큰일은 반드시 작은 데서 이루어진다.',
    orig: '天下難事, 必作於易; 天下大事, 必作於細。', who: '노자', src: '『도덕경』 63장', conf: 'A',
    tones: ['steady', 'encourage'], states: ['apply', 'rest'],
    note: '큰 일이 부담스러울 때, 가장 쉬운 부분부터 시작해도 된다는 허락처럼 읽을 수 있어요.',
    action: '가장 쉬운 일 하나부터 끝내기'
  },
  {
    id: 'q57', ko: '크게 이루는 것은 모자란 듯하다.',
    orig: '大成若缺。', who: '노자', src: '『도덕경』 45장', conf: 'A',
    tones: ['comfort', 'trust'], states: ['reject', 'rest', 'interview'],
    note: '완벽해 보이지 않는 지금이 부족하다는 증거는 아니라는 쪽으로 읽을 수 있어요.',
    action: ''
  },
  {
    id: 'q58', ko: '만족할 줄 알면 욕되지 않고, 멈출 줄 알면 위태롭지 않다.',
    orig: '知足不辱, 知止不殆。', who: '노자', src: '『도덕경』 44장', conf: 'A',
    tones: ['calm', 'comfort'], states: ['rest', 'wait'],
    note: '쉬어야 할 때 쉬는 것이 뒤처지는 게 아니라는 쪽으로 읽을 수 있어요.',
    action: ''
  },
  {
    id: 'q59', ko: '사람들은 모두 쓸모 있음의 쓸모만 알고, 쓸모 없음의 쓸모는 알지 못한다.',
    orig: '人皆知有用之用, 而莫知無用之用也。', who: '장자', src: '『장자』 인간세', conf: 'A',
    tones: ['comfort', 'calm'], states: ['rest', 'reject'],
    note: '당장 쓸모가 보이지 않는 시간이나 경험도 나중에 쓸모가 될 수 있다는 말이에요. 공백기가 길어질 때 읽어 볼 만해요.',
    action: ''
  },
  {
    id: 'q60', ko: '우물 속 개구리에게 바다를 말해 줄 수 없는 것은, 사는 곳에 매여 있기 때문이다.',
    orig: '井蛙不可以語於海者, 拘於虛也。', who: '장자', src: '『장자』 추수', conf: 'A',
    tones: ['encourage', 'push'], states: ['apply', 'rest'],
    note: '한 가지 기준으로만 나를 재고 있지 않은지 시야를 넓혀 보게 해요.',
    action: '내 경험을 다른 분야 사람이 본다면 어떻게 볼지 상상해 보기'
  },

  // ───────── 법구경·숫타니파타·선·화엄 ─────────
  {
    id: 'q61', ko: '맑은 마음으로 말하거나 행동하면, 즐거움이 떠나지 않는 그림자처럼 그를 따른다.',
    orig: 'Manasā ce pasannena bhāsati vā karoti vā, tato naṃ sukhamanveti chāyāva anapāyinī.', who: '『법구경』(담마파다)', src: '『법구경』 2', conf: 'A', chk: 1,
    tones: ['calm', 'encourage'], states: ['interview', 'any'],
    note: '면접 같은 자리에서 잘 보이려는 마음 대신 맑고 정직한 상태에 머무는 쪽으로 이끌어 줘요.',
    action: ''
  },
  {
    id: 'q62', ko: '노력과 방심하지 않음, 절제와 다스림으로, 지혜로운 이는 어떤 홍수도 휩쓸지 못하는 섬을 만든다.',
    orig: 'Uṭṭhānenappamādena saṃyamena damena ca, dīpaṃ kayirātha medhāvī yaṃ ogho nābhikīrati.', who: '『법구경』(담마파다)', src: '『법구경』 25', conf: 'A', chk: 1,
    tones: ['trust', 'steady'], states: ['rest', 'apply', 'wait'],
    note: '결과가 흔들려도 무너지지 않는 나만의 기반(습관, 실력)을 만들라는 말로 읽을 수 있어요.',
    action: '흔들려도 지킬 하루 루틴 하나 정하기 (기상 시간, 운동 등)'
  },
  {
    id: 'q63', ko: '다잡기 어렵고 빠르며 욕심나는 대로 달라붙는 마음을 길들이는 것은 훌륭한 일이다. 길들인 마음은 행복을 가져온다.',
    orig: 'Dunniggahassa lahuno yatthakāmanipātino, cittassa damatho sādhu, cittaṃ dantaṃ sukhāvahaṃ.', who: '『법구경』(담마파다)', src: '『법구경』 35', conf: 'A', chk: 1,
    tones: ['calm'], states: ['wait', 'interview', 'any'],
    note: '불안과 잡생각이 빠르게 오가는 날에 읽는 말이에요. 길들이는 일은 하루아침에 되지 않아도 괜찮아요.',
    action: ''
  },
  {
    id: 'q64', ko: '어머니도 아버지도 다른 어떤 친척도 해 줄 수 없는 더 큰 선을, 바르게 향한 자기 마음이 해 준다.',
    orig: 'Na taṃ mātā pitā kayirā, aññe vāpi ca ñātakā, sammāpaṇihitaṃ cittaṃ seyyaso naṃ tato kare.', who: '『법구경』(담마파다)', src: '『법구경』 43', conf: 'A', chk: 1,
    tones: ['trust', 'calm'], states: ['reject', 'wait', 'rest'],
    note: '가족의 도움이 소중하지 않다는 뜻이 아니라, 마음의 방향은 결국 내가 잡는다는 말로 읽을 수 있어요.',
    action: ''
  },
  {
    id: 'q65', ko: '가르침을 듣고 지혜로운 이들은, 깊고 맑고 고요한 호수처럼 마음이 맑아진다.',
    orig: 'Yathāpi rahado gambhīro vippasanno anāvilo, evaṃ dhammāni sutvāna vippasīdanti paṇḍitā.', who: '『법구경』(담마파다)', src: '『법구경』 82', conf: 'A', chk: 1,
    tones: ['calm', 'comfort'], states: ['wait', 'rest', 'any'],
    note: '기대와 걱정으로 흐려진 마음이 가라앉기를 기다리는 시간에 어울리는 말이에요.',
    action: ''
  },
  {
    id: 'q66', ko: '즐거움이 닿아도 괴로움이 닿아도, 지혜로운 이는 들뜨거나 가라앉는 모습을 보이지 않는다.',
    orig: 'Sukhena phuṭṭhā athavā dukhena, na uccāvacaṃ paṇḍitā dassayanti.', who: '『법구경』(담마파다)', src: '『법구경』 83', conf: 'A', chk: 1,
    tones: ['calm', 'trust'], states: ['wait', 'reject', 'interview'],
    note: '합격 소식에도 불합격 소식에도 하루 전체가 휘둘리지 않도록 돕는 말이에요. 기쁘거나 슬픈 감정을 누르라는 뜻은 아니에요.',
    action: ''
  },
  {
    id: 'q67', ko: '게으르고 정진하지 않으며 백 년을 사는 것보다, 굳건히 노력하며 하루를 사는 것이 낫다.',
    orig: 'Yo ca vassasataṃ jīve kusīto hīnavīriyo, ekāhaṃ jīvitaṃ seyyo viriyaṃ ārabhato daḷhaṃ.', who: '『법구경』(담마파다)', src: '『법구경』 112', conf: 'A', chk: 1,
    tones: ['push', 'steady'], states: ['apply'],
    note: '지칠 때는 "오늘 하루만 제대로"라는 정도의 기준으로만 읽어도 충분해요.',
    action: '오늘 하루의 중요한 일 한 가지를 미리 정하기'
  },
  {
    id: 'q68', ko: '지혜로운 이는 대장장이가 은의 찌꺼기를 털어 내듯, 차례차례 조금씩 순간순간 자기 안의 때를 털어 낸다.',
    orig: 'Anupubbena medhāvī thokaṃ thokaṃ khaṇe khaṇe, kammāro rajatasseva niddhame malamattano.', who: '『법구경』(담마파다)', src: '『법구경』 239', conf: 'A', chk: 1,
    tones: ['steady', 'calm'], states: ['apply', 'rest', 'reject'],
    note: '한 번에 바뀌지 않아도, 조금씩 고쳐 가는 방식이면 충분하다는 말로 읽을 수 있어요.',
    action: '자소서에서 마음에 걸리는 문장 하나만 고치기'
  },
  {
    id: 'q69', ko: '무소의 뿔처럼 혼자서 가라.',
    orig: 'Eko care khaggavisāṇakappo.', who: '『숫타니파타』', src: '『숫타니파타』 1.3 무소의 뿔', conf: 'A',
    tones: ['trust', 'comfort'], states: ['rest', 'wait', 'reject'],
    note: '고립을 권하는 말이 아니라, 남의 속도와 평가에서 한 발 떨어져 내 길을 걷겠다는 다짐으로 읽을 수 있어요. 힘든 날엔 주변에 연락하는 것도 좋아요.',
    action: ''
  },
  {
    id: 'q70', ko: '어느 곳에서든 주인이 되면, 서 있는 자리가 모두 진실하다.',
    orig: '隨處作主, 立處皆眞。', who: '임제 의현', src: '『임제록』', conf: 'A',
    tones: ['trust', 'push'], states: ['interview', 'apply'],
    note: '면접장에서도 평가받는 사람이 아니라 내 이야기를 하러 온 사람으로 서 보라는 말로 읽을 수 있어요.',
    action: '"나는 어떤 사람인가"를 한 문장으로 말해 보기'
  },
  {
    id: 'q71', ko: '지극한 도는 어렵지 않으니, 오직 가려 고르는 것을 꺼릴 뿐이다.',
    orig: '至道無難, 唯嫌揀擇。', who: '승찬', src: '『신심명』', conf: 'A',
    tones: ['calm'], states: ['apply', 'any'],
    note: '이 회사 저 회사를 비교하다 지쳤다면, 고르는 데 쓰는 에너지를 줄여 보라는 말로 읽을 수 있어요.',
    action: ''
  },
  {
    id: 'q72', ko: '삼세의 모든 부처를 알고자 한다면, 법계의 성품을 보아야 한다. 모든 것은 오직 마음이 짓는다.',
    orig: '若人欲了知, 三世一切佛, 應觀法界性, 一切唯心造。', who: '『화엄경』', src: '『화엄경』 야마궁중게찬품', conf: 'A',
    tones: ['calm', 'trust'], states: ['wait', 'any'],
    note: '원효가 해골물 일화에서 깨달았다고 전해지는 "일체유심조"가 이 구절에서 나왔어요. 상황보다 상황을 해석하는 마음을 먼저 보게 해요.',
    action: ''
  },
  {
    id: 'q73', ko: '땅에서 넘어진 사람은, 땅을 짚고 일어난다.',
    orig: '因地而倒者, 因地而起。', who: '지눌', src: '『수심결』', conf: 'B',
    tones: ['comfort', 'push'], states: ['reject', 'rest'],
    note: '고려의 승려 지눌이 마음 닦는 이치를 설명하며 한 말로 전해져요. 넘어진 바로 그 자리에서 다시 시작할 수 있다는 위로로 읽을 수 있어요. 인용할 때는 원문 확인이 필요해요.',
    action: ''
  },

  // ───────── 한국 고전 ─────────
  {
    id: 'q74', ko: '눈 덮인 들판을 걸어갈 때는 함부로 어지럽게 걷지 마라. 오늘 내가 남기는 발자국이 뒷사람의 길이 될 것이다.',
    orig: '踏雪野中去, 不須胡亂行。今日我行跡, 遂作後人程。', who: '이양연', src: '「야설(野雪)」', conf: 'B',
    tones: ['steady', 'trust'], states: ['apply', 'rest'],
    note: '서산대사의 시로 널리 알려졌지만 조선 후기 이양연의 시로 보는 견해가 널리 받아들여져요. 인용할 때는 출처를 확인해 주세요.',
    action: ''
  },
  {
    id: 'q75', ko: '처음 배우는 사람은 먼저 뜻을 세워야 한다.',
    orig: '初學先須立志。', who: '이이', src: '『격몽요결』 입지장', conf: 'A',
    tones: ['steady', 'trust'], states: ['apply', 'rest'],
    note: '무엇이 되고 싶은지 막막한 날에, 큰 목표 대신 "지금 세울 뜻 하나"에 집중하게 해 줘요.',
    action: '올해 안에 이루고 싶은 것 한 가지를 한 문장으로 적기'
  },

  // ───────── 서양 고전 ─────────
  {
    id: 'q76', ko: '사람을 어지럽히는 것은 사물 자체가 아니라, 그 사물에 대한 생각이다.',
    orig: 'Ταράσσει τοὺς ἀνθρώπους οὐ τὰ πράγματα, ἀλλὰ τὰ περὶ τῶν πραγμάτων δόγματα.', who: '에픽테토스', src: '『엥케이리디온』 5', conf: 'A',
    tones: ['calm', 'trust'], states: ['wait', 'interview', 'reject'],
    note: '면접이라는 사건 자체보다 "망치면 끝"이라는 해석이 나를 더 흔든다는 쪽으로 읽을 수 있어요.',
    action: '걱정되는 일에 붙인 "해석"을 한 줄로 적어 보기'
  },
  {
    id: 'q77', ko: '일이 네 바람대로 일어나기를 요구하지 말고, 일어나는 대로 일어나기를 바라라. 그러면 평온히 지낼 것이다.',
    orig: 'Μὴ ζήτει τὰ γινόμενα γίνεσθαι ὡς θέλεις, ἀλλὰ θέλε τὰ γινόμενα ὡς γίνεται, καὶ εὐροήσεις.', who: '에픽테토스', src: '『엥케이리디온』 8', conf: 'A',
    tones: ['calm'], states: ['wait', 'reject'],
    note: '이미 나온 결과와 싸우는 힘을 줄이라는 말이에요. 아직 속상할 시간이 필요하다면 그것도 괜찮아요.',
    action: ''
  },
  {
    id: 'q78', ko: '사람들은 시골집이나 해변, 산으로 물러날 곳을 찾는다. 그러나 너는 원하기만 하면 언제든 네 안으로 물러날 수 있다.',
    orig: '', who: '마르쿠스 아우렐리우스', src: '『명상록』 4.3', conf: 'A', chk: 1,
    tones: ['calm', 'comfort'], states: ['wait', 'interview', 'rest'],
    note: '어디로 떠날 수 없는 날에도 마음속 조용한 자리로 돌아올 수 있다는 말이에요.',
    action: '조용한 곳에서 5분간 아무것도 하지 않기'
  },
  {
    id: 'q79', ko: '새벽에 일어나기 힘들 때는 이렇게 생각하라. 나는 사람으로서 해야 할 일을 하러 일어난다.',
    orig: '', who: '마르쿠스 아우렐리우스', src: '『명상록』 5.1', conf: 'A', chk: 1,
    tones: ['steady', 'encourage'], states: ['apply', 'rest', 'any'],
    note: '의욕이 없는 아침에, 거창한 이유 대신 사람으로서 할 일 하나를 떠올리게 해요.',
    action: '일어나서 가장 먼저 할 일 한 가지만 정해 두기'
  },
  {
    id: 'q80', ko: '네 생각이 자주 향하는 곳에 따라 네 마음의 빛깔이 정해진다. 영혼은 생각의 빛깔로 물들기 때문이다.',
    orig: '', who: '마르쿠스 아우렐리우스', src: '『명상록』 5.16', conf: 'A', chk: 1,
    tones: ['trust', 'calm'], states: ['wait', 'any'],
    note: '번역판마다 표현이 달라요. 핵심은 반복해서 하는 생각이 마음의 색을 정한다는 거예요.',
    action: ''
  },
  {
    id: 'q81', ko: '우리에게 주어진 시간이 짧은 것이 아니라, 우리가 많이 허비하는 것이다.',
    orig: 'Non exiguum temporis habemus, sed multum perdidimus.', who: '세네카', src: '『인생의 짧음에 대하여』 1.3', conf: 'A',
    tones: ['push', 'steady'], states: ['apply', 'rest'],
    note: '공백기에 시간을 죄책감으로 흘려보내지 말고 쓸 곳을 정해 보라는 말로 읽을 수 있어요. 쉬는 것 자체를 탓하는 말은 아니에요.',
    action: '오늘 쓸 한 시간의 용도를 미리 정하기'
  },
  {
    id: 'q82', ko: '어느 항구로 가는지 모르는 사람에게는, 어떤 바람도 순풍이 아니다.',
    orig: 'Ignoranti quem portum petat nullus suus ventus est.', who: '세네카', src: '『루킬리우스에게 보내는 편지』 71.3', conf: 'A',
    tones: ['steady', 'trust'], states: ['rest', 'apply'],
    note: '방향이 막막한 시기에 완벽한 답 대신 "임시 목적지"를 정하라는 신호로 읽을 수 있어요.',
    action: '6개월 뒤의 임시 목적지를 한 줄로 적기'
  },
  {
    id: 'q83', ko: '숨이 붙어 있는 동안에는 희망이 있다고들 한다.',
    orig: 'Dum anima est, spes esse dicitur.', who: '키케로(속담 인용)', src: '『아티쿠스에게 보내는 편지』 9.10', conf: 'A',
    tones: ['comfort'], states: ['reject', 'rest', 'wait'],
    note: '키케로가 당시 속담을 인용한 문장이에요. 지금 기분이 어떻든 가능성이 닫힌 건 아니라는 쪽으로 위안이 돼요.',
    action: ''
  },
  {
    id: 'q84', ko: '언젠가는 이 일을 돌이켜 보는 것도 즐거울 것이다.',
    orig: 'Forsan et haec olim meminisse iuvabit.', who: '베르길리우스', src: '『아이네이스』 1.203', conf: 'A',
    tones: ['comfort', 'calm'], states: ['reject', 'wait', 'rest'],
    note: '폭풍에 지친 동료들을 아이네아스가 다독이며 한 말이에요. 지금의 힘든 시간을 먼 훗날의 이야기로 상상해 보게 해요.',
    action: ''
  },
  {
    id: 'q85', ko: '행운은 대담한 자를 돕는다.',
    orig: 'Audentes fortuna iuvat.', who: '베르길리우스', src: '『아이네이스』 10.284', conf: 'A',
    tones: ['push', 'encourage'], states: ['apply', 'interview'],
    note: '원문에서는 투르누스가 전투 중에 한 말이에요. 무모하라는 뜻보다 한 걸음 먼저 나서 보라는 정도로 읽어요.',
    action: ''
  },
  {
    id: 'q86', ko: '어려운 때에도 평정한 마음을 지킬 것을 기억하라.',
    orig: 'Aequam memento rebus in arduis servare mentem.', who: '호라티우스', src: '『송가』 2.3', conf: 'A',
    tones: ['calm', 'comfort'], states: ['wait', 'reject', 'interview'],
    note: '좋은 일에도 나쁜 일에도 중심을 잃지 않으려는 마음가짐을 떠올리게 해요.',
    action: ''
  },
  {
    id: 'q87', ko: '테우크로스가 이끌고 길조도 테우크로스에게 있으니, 절망할 것 없다.',
    orig: 'Nil desperandum Teucro duce et auspice Teucro.', who: '호라티우스', src: '『송가』 1.7', conf: 'A',
    tones: ['comfort', 'encourage'], states: ['reject', 'rest'],
    note: '고향을 떠나 새 출발을 하는 테우크로스가 동료들을 북돋는 대목이에요. 새로 시작하는 사람에게 자주 인용돼요.',
    action: ''
  },
  {
    id: 'q88', ko: '물방울은 힘이 아니라 자주 떨어짐으로 돌을 뚫는다.',
    orig: 'Gutta cavat lapidem, non vi, sed saepe cadendo.', who: '오비디우스', src: '『폰토스에서 온 편지』 4.10.5', conf: 'A',
    tones: ['steady', 'encourage'], states: ['apply', 'rest', 'reject'],
    note: '한 번의 큰 시도가 아니라 작은 반복이 결과를 만든다는 말이에요.',
    action: ''
  },
  {
    id: 'q89', ko: '우리의 의심은 배신자라서, 시도하기를 두려워하다가 곧잘 얻을 수 있었던 좋은 것을 잃게 만든다.',
    orig: 'Our doubts are traitors, And make us lose the good we oft might win, By fearing to attempt.', who: '셰익스피어', src: '『자에는 자로』 1막 4장', conf: 'A',
    tones: ['encourage', 'push'], states: ['apply', 'interview'],
    note: '망설임이 클 때, 시도하는 쪽의 비용이 생각보다 작을 수 있다는 걸 떠올리게 해요.',
    action: '망설이던 지원서 한 곳에 먼저 지원해 보기'
  },
  {
    id: 'q90', ko: '끊임없이 노력하며 애쓰는 사람은, 우리가 구원할 수 있다.',
    orig: 'Wer immer strebend sich bemüht, den können wir erlösen.', who: '괴테', src: '『파우스트』 2부', conf: 'A',
    tones: ['encourage', 'trust'], states: ['apply', 'rest', 'reject'],
    note: '천사들이 파우스트의 영혼을 데려가며 부르는 대목이에요. 결과보다 노력이 이어지고 있다는 사실에 의미를 두게 해요.',
    action: ''
  },
  {
    id: 'q91', ko: '살아야 할 이유를 가진 사람은 거의 모든 ‘어떻게’를 견딜 수 있다.',
    orig: '', who: '니체', src: '『우상의 황혼』 잠언과 화살 12', conf: 'B',
    tones: ['trust', 'push'], states: ['rest', 'apply', 'reject'],
    note: '흔히 인용되는 문장은 원문을 줄여 옮긴 형태라서, 인용할 때는 원문 표현을 확인해 주세요.',
    action: '무엇을 위해 이 일을 하는지 한 줄로 적어 보기'
  },
  {
    id: 'q92', ko: '너 자신을 믿어라. 모든 마음은 그 쇠줄 같은 믿음 앞에서 떨린다.',
    orig: 'Trust thyself: every heart vibrates to that iron string.', who: '에머슨', src: '「자기 신뢰」(1841)', conf: 'A',
    tones: ['trust'], states: ['interview', 'rest', 'reject'],
    note: '남의 평가가 크게 느껴지는 날, 내 안의 기준을 먼저 확인하게 해요.',
    action: ''
  },
  {
    id: 'q93', ko: '애쓰고, 찾고, 발견하고, 굴복하지 않는 것.',
    orig: 'To strive, to seek, to find, and not to yield.', who: '테니슨', src: '「율리시스」(1842)', conf: 'A',
    tones: ['push', 'trust'], states: ['apply', 'reject'],
    note: '결과가 어떻든 계속 걷겠다는 태도를 한 줄로 요약한 말이에요.',
    action: ''
  },
  {
    id: 'q94', ko: '승리와 재난을 만나더라도, 그 둘을 똑같은 사기꾼처럼 대할 수 있다면.',
    orig: 'If you can meet with Triumph and Disaster / And treat those two impostors just the same', who: '키플링', src: '「만약에」(If—, 1910)', conf: 'A',
    tones: ['calm', 'trust'], states: ['wait', 'interview'],
    note: '결과 발표를 앞두고, 어느 쪽 소식이 와도 나라는 사람의 값이 정해지지 않는다는 쪽으로 읽을 수 있어요.',
    action: ''
  },
  {
    id: 'q95', ko: '위대한 사람들이 이르고 지킨 높이는 갑작스러운 비약으로 얻은 것이 아니다. 동료들이 잠든 밤에도 그들은 위를 향해 애써 오르고 있었다.',
    orig: 'The heights by great men reached and kept / Were not attained by sudden flight, / But they, while their companions slept, / Were toiling upward in the night.', who: '롱펠로', src: '「성 아우구스티누스의 사다리」', conf: 'A',
    tones: ['steady', 'push'], states: ['apply', 'rest'],
    note: '남들이 쉬는 동안 무리하라는 뜻보다, 눈에 보이지 않는 시간의 꾸준함을 말하는 걸로 읽을 수 있어요.',
    action: ''
  },
  {
    id: 'q96', ko: '희망은 깃털 달린 것, 영혼 위에 내려앉아 가사 없는 노래를 부르며 결코 멈추지 않는다.',
    orig: 'Hope is the thing with feathers / That perches in the soul, / And sings the tune without the words, / And never stops at all', who: '에밀리 디킨슨', src: '시 254', conf: 'A',
    tones: ['comfort'], states: ['reject', 'wait', 'rest'],
    note: '크게 느껴지지 않아도 마음 한구석에서 계속되는 작은 희망을 떠올리게 해요.',
    action: ''
  },
  {
    id: 'q97', ko: '당신 마음속의 풀리지 않은 모든 것에 대해 인내심을 가지고, 질문 자체를 사랑해 보려 하세요.',
    orig: 'Geduld zu haben gegen alles Ungelöste in Ihrem Herzen und zu versuchen, die Fragen selbst liebzuhaben', who: '릴케', src: '『젊은 시인에게 보내는 편지』 제4신(1903)', conf: 'A', chk: 1,
    tones: ['comfort', 'calm'], states: ['wait', 'rest', 'reject'],
    note: '정답이 없는 시기에, 답을 서둘러 찾지 않아도 된다는 위로로 읽을 수 있어요.',
    action: ''
  },
  {
    id: 'q98', ko: '너의 고통은 네 깨달음을 감싸고 있던 껍질이 깨지는 것이다.',
    orig: 'Your pain is the breaking of the shell that encloses your understanding.', who: '칼릴 지브란', src: '『예언자』(1923) 「고통에 대하여」', conf: 'A',
    tones: ['comfort', 'calm'], states: ['reject', 'rest'],
    note: '고통에 의미가 있다고 단정하는 말은 아니에요. 지금 위로가 더 필요하다면 읽고 넘겨도 좋아요.',
    action: ''
  },
  {
    id: 'q99', ko: '자신의 꿈이 향하는 방향으로 자신 있게 나아가고 상상해 온 삶을 살려고 애쓰는 사람은, 평소에는 예상하지 못한 성공을 만날 것이다.',
    orig: 'If one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours.', who: '소로', src: '『월든』(1854) 맺음말', conf: 'A',
    tones: ['push', 'encourage'], states: ['apply', 'rest'],
    note: '기분이 좋은 날에 어울리는 말이에요. 성공을 보장하는 약속이 아니라 시도하는 사람의 몫을 말하는 거예요.',
    action: ''
  },
  {
    id: 'q100', ko: '겨울이 오면, 봄이 멀 수 있겠는가?',
    orig: 'If Winter comes, can Spring be far behind?', who: '셸리', src: '「서풍에 부치는 노래」(1820)', conf: 'A',
    tones: ['comfort', 'encourage'], states: ['reject', 'rest', 'wait'],
    note: '긴 겨울처럼 느껴지는 시기에, 계절이 바뀐다는 단순한 사실을 떠올리게 해요.',
    action: ''
  },

  // ───────── 속담 ─────────
  {
    id: 'q101', ko: '고생 끝에 낙이 온다.',
    orig: '', who: '속담', src: '속담', conf: 'P',
    tones: ['comfort'], states: ['reject', 'rest'],
    note: '언제 올지 약속하는 말은 아니에요. 지금의 고생이 끝이 아니라는 뜻으로만 가볍게 읽어도 돼요.',
    action: ''
  },
  {
    id: 'q102', ko: '아는 길도 물어 가라.',
    orig: '', who: '속담', src: '속담', conf: 'P',
    tones: ['calm', 'steady'], states: ['interview', 'apply'],
    note: '익숙한 일일수록 한 번 더 확인하라는 말이에요.',
    action: '제출 전에 아는 사람에게 한 번 더 봐 달라고 부탁해 보기'
  },
  {
    id: 'q103', ko: '낙숫물이 댓돌을 뚫는다.',
    orig: '', who: '속담', src: '속담', conf: 'P',
    tones: ['steady'], states: ['apply', 'rest', 'reject'],
    note: '작은 반복이 쌓이면 결과가 된다는 말이에요.',
    action: ''
  },
  {
    id: 'q104', ko: '하늘은 스스로 돕는 자를 돕는다.',
    orig: '', who: '속담', src: '속담', conf: 'P',
    tones: ['trust', 'push'], states: ['apply'],
    note: '서양에서 온 격언이 우리말 속담처럼 쓰이는 표현이에요. 도움을 구하지 말라는 뜻은 아니에요.',
    action: ''
  },
  {
    id: 'q105', ko: '지성이면 감천이다.',
    orig: '', who: '속담', src: '속담', conf: 'P',
    tones: ['push', 'steady'], states: ['apply'],
    note: '정성을 다하면 하늘도 감동한다는 뜻이에요. 정성이 곧 합격을 보장한다는 뜻은 아니에요.',
    action: ''
  },
  {
    id: 'q106', ko: '티끌 모아 태산.',
    orig: '', who: '속담', src: '속담', conf: 'P',
    tones: ['steady'], states: ['apply', 'rest'],
    note: '오늘 한 일이 작아 보여도 쌓이고 있다는 걸 떠올리게 해요.',
    action: '오늘 한 일 한 가지를 기록해 두기'
  },
  {
    id: 'q107', ko: '급히 먹는 밥이 체한다.',
    orig: '', who: '속담', src: '속담', conf: 'P',
    tones: ['calm'], states: ['interview', 'apply'],
    note: '마감이 급해도 순서를 건너뛰면 탈이 난다는 말이에요.',
    action: ''
  }
]);
