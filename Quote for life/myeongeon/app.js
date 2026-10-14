(() => {
'use strict';

/* ───────── 상수 ───────── */
const KEY = 'myeongeon.v1';
const MOODS = [
  { v: 1, e: '😞', l: '많이 힘들어' },
  { v: 2, e: '😕', l: '무거워' },
  { v: 3, e: '😐', l: '그저 그래' },
  { v: 4, e: '🙂', l: '괜찮아' },
  { v: 5, e: '😄', l: '좋아' }
];
const STATUS = [
  { k: 'apply', l: '지원 중' },
  { k: 'interview', l: '면접 준비' },
  { k: 'wait', l: '결과 대기' },
  { k: 'reject', l: '탈락 직후' },
  { k: 'rest', l: '쉬는 중' }
];
const EVENT_TYPES = [
  { k: 'deadline', l: '서류 마감' },
  { k: 'interview', l: '면접' },
  { k: 'result', l: '결과 발표' },
  { k: 'test', l: '시험·코테' },
  { k: 'etc', l: '기타' }
];
const SLOTS = [
  { k: 'morning', l: '아침', title: '아침의 한 줄' },
  { k: 'noon', l: '낮', title: '낮의 한 줄' },
  { k: 'evening', l: '저녁', title: '저녁의 한 줄' }
];
const TONES = [
  { k: 'comfort', l: '위로' }, { k: 'calm', l: '진정' }, { k: 'steady', l: '꾸준' },
  { k: 'encourage', l: '격려' }, { k: 'push', l: '도전' }, { k: 'trust', l: '자기신뢰' }
];
const STATE_LABEL = Object.fromEntries(STATUS.map((s) => [s.k, s.l]));
const CONF_TEXT = {
  A: '고전 원전의 장·절 표기 구절',
  B: '전승되는 인용 · 원전 표기가 판본마다 다를 수 있음',
  P: '속담 (출처 없음)',
  M: '내가 추가한 명언'
};

// 기분별 어떤 톤을 더 자주 보여줄지
const TONE_BY_MOOD = {
  1: { comfort: 3, calm: 2, trust: 1, steady: 1, encourage: .3, push: 0 },
  2: { comfort: 2.5, calm: 2, steady: 1.2, trust: 1, encourage: .6, push: .1 },
  3: { steady: 2, calm: 1.5, trust: 1.5, encourage: 1.5, comfort: 1, push: .8 },
  4: { encourage: 2, push: 1.5, steady: 1.5, trust: 1.3, calm: 1, comfort: .5 },
  5: { push: 2, encourage: 2, trust: 1.5, steady: 1.2, calm: .8, comfort: .3 }
};

/* ───────── 유틸 ───────── */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
const pad = (n) => String(n).padStart(2, '0');
const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parseYmd = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const daysBetween = (a, b) => Math.round((parseYmd(b) - parseYmd(a)) / 86400000);
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const todayStr = () => ymd(new Date());
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const WD = ['일', '월', '화', '수', '목', '금', '토'];
const dateLabel = (s) => { const d = parseYmd(s); return `${d.getMonth() + 1}월 ${d.getDate()}일 (${WD[d.getDay()]})`; };

function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function mulberry32(a) { return function () { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

function currentSlot() {
  const h = new Date().getHours();
  if (h >= 5 && h < 11) return 'morning';
  if (h >= 11 && h < 17) return 'noon';
  return 'evening';
}

let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ───────── 저장소 ───────── */
const DEFAULTS = () => ({
  v: 1,
  mood: {},                 // { '2026-10-14': 3 }
  status: 'apply',
  statusUntil: null,        // 탈락 직후 상태가 풀리는 날짜
  events: [],               // { id, type, title, date, time }
  saved: [],                // 명언 id
  shown: {},                // { '2026-10-14|morning': 'q01' }
  custom: [],               // 내가 추가한 명언
  settings: {
    slots: { morning: { on: true, time: '08:30' }, noon: { on: false, time: '13:00' }, evening: { on: true, time: '21:00' } },
    theme: 'auto'
  }
});

let S = load();
function load() {
  const d = DEFAULTS();
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (raw && typeof raw === 'object') {
      Object.assign(d, raw);
      d.settings = Object.assign(DEFAULTS().settings, raw.settings || {});
      d.settings.slots = Object.assign(DEFAULTS().settings.slots, (raw.settings || {}).slots || {});
    }
  } catch (e) { /* 저장소를 못 읽으면 기본값으로 시작 */ }
  return d;
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast('저장 공간을 쓸 수 없어요 (시크릿 모드인가요?)'); } }

/* ───────── 명언 풀 ───────── */
function allQuotes() {
  const mine = S.custom.map((c) => ({ ...c, custom: true, conf: 'M' }));
  return (window.QUOTES || []).concat(mine);
}
const byId = (id) => allQuotes().find((q) => q.id === id);

/* ───────── 상황 파악 & 선택 로직 ───────── */
function sortedEvents() {
  return S.events.slice().sort((a, b) => (a.date + (a.time || '')).localeCompare(b.date + (b.time || '')));
}
function nextEvent(onDate) {
  const ev = sortedEvents().find((e) => e.date >= onDate);
  return ev ? { ...ev, days: daysBetween(onDate, ev.date) } : null;
}
function effectiveStates(onDate) {
  const set = new Set();
  let st = S.status;
  if (st === 'reject' && S.statusUntil && onDate > S.statusUntil) st = 'apply';
  if (st) set.add(st);
  const ev = nextEvent(onDate);
  if (ev) {
    if (ev.type === 'interview' && ev.days <= 3) set.add('interview');
    if (ev.type === 'result' && ev.days <= 3) set.add('wait');
    if ((ev.type === 'deadline' || ev.type === 'test') && ev.days <= 2) set.add('apply');
  }
  return set;
}
function recentShownIds(limit = 30) {
  return Object.keys(S.shown).sort().slice(-limit).map((k) => S.shown[k]);
}

function scoreQuote(q, ctx) {
  const mw = TONE_BY_MOOD[ctx.mood || 3];
  let tone = 0;
  (q.tones || []).forEach((t) => { tone = Math.max(tone, mw[t] || 0); });
  let w = 0.2 + tone;                               // 기분 ↔ 톤
  const qs = q.states || ['any'];
  const hit = qs.some((s) => ctx.states.has(s));
  if (hit) w *= ctx.urgent ? 3.8 : 2.4;             // 지금 상황과 맞으면 가중 (면접·발표가 코앞이면 더 크게)
  else if (!qs.includes('any') && !qs.some((s) => s === 'any')) w *= 0.6;
  if (ctx.slot === 'evening' && (q.tones || []).some((t) => t === 'calm' || t === 'comfort')) w *= 1.4;
  if (ctx.slot === 'morning' && (q.tones || []).some((t) => t === 'steady' || t === 'encourage')) w *= 1.3;
  // 기분이 힘든 날에는 '도전' 위주의 말을 거의 내지 않음
  if (ctx.mood && ctx.mood <= 2 && !(q.tones || []).some((t) => t === 'comfort' || t === 'calm' || t === 'trust')) w *= 0.3;
  if (ctx.recent.includes(q.id)) w *= 0.15;
  if (ctx.exclude && ctx.exclude.has(q.id)) w *= 0.02;
  return w;
}

function pickQuote({ date, slot, mood, seed, exclude }) {
  const ev = nextEvent(date);
  const urgent = !!ev && ev.days <= 1 && (ev.type === 'interview' || ev.type === 'result');
  const ctx = { mood: mood || null, states: effectiveStates(date), slot, recent: recentShownIds(), exclude, urgent };
  const pool = allQuotes();
  if (!pool.length) return null;
  const rng = mulberry32(hashStr(`${date}|${slot}|${seed || ''}`));
  const ws = pool.map((q) => scoreQuote(q, ctx));
  const sum = ws.reduce((a, b) => a + b, 0);
  let r = rng() * sum;
  for (let i = 0; i < pool.length; i++) { r -= ws[i]; if (r <= 0) return pool[i]; }
  return pool[pool.length - 1];
}

/* ───────── 화면 상태 ───────── */
let tab = 'today';
let viewSlot = currentSlot();
let flash = '';

function quoteFor(date, slot) {
  const key = `${date}|${slot}`;
  let q = S.shown[key] && byId(S.shown[key]);
  if (!q) {
    q = pickQuote({ date, slot, mood: S.mood[date] });
    if (q) { S.shown[key] = q.id; save(); }
  }
  return q;
}
function rerollQuote(date, slot) {
  const key = `${date}|${slot}`;
  const exclude = new Set([S.shown[key]].filter(Boolean));
  const q = pickQuote({ date, slot, mood: S.mood[date], seed: uid(), exclude });
  if (q) { S.shown[key] = q.id; save(); }
}

/* ───────── 렌더 ───────── */
function render() {
  document.documentElement.dataset.theme = S.settings.theme === 'auto' ? '' : S.settings.theme;
  if (S.settings.theme === 'auto') document.documentElement.removeAttribute('data-theme');
  $$('#tabs button').forEach((b) => b.classList.toggle('on', b.dataset.tab === tab));
  const v = $('#view');
  v.innerHTML = ({ today: viewToday, plan: viewPlan, saved: viewSaved, settings: viewSettings }[tab])();
}

function viewToday() {
  const date = todayStr();
  const mood = S.mood[date];
  const ev = nextEvent(date);
  const q = quoteFor(date, viewSlot);
  const slotInfo = SLOTS.find((s) => s.k === viewSlot);
  const isSaved = q && S.saved.includes(q.id);

  const evChip = ev
    ? `<span class="chip static ${ev.days <= 2 ? 'warn' : ''}">${esc(EVENT_TYPES.find((t) => t.k === ev.type).l)} · ${ev.days === 0 ? '오늘' : 'D-' + ev.days}</span>`
    : '';
  const moodHtml = MOODS.map((m) =>
    `<button class="mood ${mood === m.v ? 'on' : ''}" data-act="mood" data-v="${m.v}" aria-label="${esc(m.l)}"><span class="e">${m.e}</span><span class="l">${esc(m.l)}</span></button>`
  ).join('');

  return `
    <h1>${esc(dateLabel(date))}</h1>
    <h2>${mood ? '오늘의 한 줄' : '오늘 기분은 어때요?'}</h2>
    <div class="moods">${moodHtml}</div>
    <div class="row">
      <span class="chip static">${esc(STATE_LABEL[effectiveStatus()])}</span>${evChip}
    </div>
    <div class="slotbar">${SLOTS.map((s) => `<button class="chip ${s.k === viewSlot ? 'on' : ''}" data-act="slot" data-k="${s.k}">${s.l}</button>`).join('')}</div>
    ${q ? quoteCard(q, slotInfo.title, isSaved) : '<p class="empty">명언이 없어요. 설정에서 추가해 보세요.</p>'}
    ${flash ? `<p class="hint">${esc(flash)}</p>` : ''}
  `;
}

function effectiveStatus() {
  if (S.status === 'reject' && S.statusUntil && todayStr() > S.statusUntil) return 'apply';
  return S.status;
}

function quoteCard(q, title, isSaved) {
  const long = q.ko.length > 48 ? 'long' : '';
  return `
    <article class="card">
      <div class="q-slot">${esc(title)}</div>
      <blockquote class="q ${long}">${esc(q.ko)}</blockquote>
      ${q.orig ? `<div class="orig">${esc(q.orig)}</div>` : ''}
      <div class="who">— ${esc(q.who || '작자 미상')}${q.src && q.src !== q.who ? ' · ' + esc(q.src) : ''}</div>
      ${q.note ? `<div class="note">${esc(q.note)}</div>` : ''}
      ${q.action ? `<div class="action"><b>작은 행동</b> · ${esc(q.action)}</div>` : ''}
      <div class="conf ${q.conf === 'B' ? 'b' : ''}">${esc(CONF_TEXT[q.conf] || '')}${q.chk === 1 ? ' · ✓ 구절 번호 대조함' : q.chk === 2 ? ' · ✓ 원문·편명 대조함' : ''}</div>
      <div class="tools">
        <button class="tool ${isSaved ? 'primary' : ''}" data-act="save" data-id="${esc(q.id)}">${isSaved ? '♥ 저장됨' : '♡ 저장'}</button>
        <button class="tool" data-act="reroll">↻ 다른 말</button>
        <button class="tool" data-act="card" data-id="${esc(q.id)}">🖼 카드</button>
      </div>
    </article>`;
}

function viewPlan() {
  const date = todayStr();
  const evs = sortedEvents();
  const upcoming = evs.filter((e) => e.date >= date);
  const past = evs.filter((e) => e.date < date).reverse().slice(0, 5);
  const statusChips = STATUS.map((s) => `<button class="chip ${effectiveStatus() === s.k ? 'on' : ''}" data-act="status" data-k="${s.k}">${s.l}</button>`).join('');
  const row = (e, isPast) => {
    const d = daysBetween(date, e.date);
    return `<div class="item row spread"><div>
      <div class="t">${esc(e.title || EVENT_TYPES.find((t) => t.k === e.type).l)}</div>
      <div class="m">${esc(EVENT_TYPES.find((t) => t.k === e.type).l)} · ${esc(dateLabel(e.date))}${e.time ? ' ' + esc(e.time) : ''}</div>
    </div><div class="row"><span class="dday ${!isPast && d <= 2 ? 'soon' : ''}">${isPast ? '지남' : d === 0 ? '오늘' : 'D-' + d}</span><button class="x" data-act="delev" data-id="${esc(e.id)}" aria-label="삭제">✕</button></div></div>`;
  };
  return `
    <h1>일정과 상태</h1>
    <h2>지금 내 상황</h2>
    <div class="row">${statusChips}</div>
    <p class="hint">상태에 따라 보여주는 명언이 달라져요. 면접·발표·마감이 가까워지면 자동으로 반영됩니다.</p>
    <div class="row" style="margin-top:12px"><button class="btn danger" data-act="rejected">탈락 소식을 받았어요</button></div>
    <p class="hint">누르면 3일간 위로 위주로 보여드려요. 그 뒤엔 자동으로 '지원 중'으로 돌아갑니다.</p>

    <h3>일정 추가</h3>
    <form class="panel" data-form="event">
      <label>종류</label>
      <select name="type">${EVENT_TYPES.map((t) => `<option value="${t.k}">${t.l}</option>`).join('')}</select>
      <label>이름 (선택)</label>
      <input type="text" name="title" placeholder="예: ○○기업 1차 면접" maxlength="40">
      <div class="row" style="gap:10px"><div style="flex:1"><label>날짜</label><input type="date" name="date" required value="${date}"></div><div style="flex:1"><label>시간 (선택)</label><input type="time" name="time"></div></div>
      <button class="btn block" type="submit">추가</button>
    </form>

    <h3>다가오는 일정</h3>
    <div class="list">${upcoming.length ? upcoming.map((e) => row(e, false)).join('') : '<div class="empty">등록된 일정이 없어요.</div>'}</div>
    ${past.length ? `<h3>지난 일정</h3><div class="list">${past.map((e) => row(e, true)).join('')}</div>` : ''}
  `;
}

function viewSaved() {
  const items = S.saved.map(byId).filter(Boolean);
  const days = Object.keys(S.shown).map((k) => k.split('|')[0]).filter((v, i, a) => a.indexOf(v) === i).sort().reverse().slice(0, 14);
  const hist = days.map((d) => {
    const q = byId(S.shown[`${d}|morning`] || S.shown[`${d}|noon`] || S.shown[`${d}|evening`]);
    const m = MOODS.find((x) => x.v === S.mood[d]);
    return `<div class="hist"><span class="d">${esc(d.slice(5).replace('-', '/'))}</span><span>${m ? m.e : '·'}</span><span class="k">${q ? esc(q.ko.length > 38 ? q.ko.slice(0, 38) + '…' : q.ko) : ''}</span></div>`;
  }).join('');
  return `
    <h1>모아보기</h1>
    <h2>저장한 말</h2>
    <div class="list">${items.length ? items.map((q) => `
      <div class="item"><div class="q" style="font-family:var(--serif);font-weight:600;word-break:keep-all">${esc(q.ko)}</div>
      <div class="m" style="margin-top:6px">— ${esc(q.who || '')}${q.src && q.src !== q.who ? ' · ' + esc(q.src) : ''}</div>
      <div class="row" style="margin-top:8px"><button class="chip" data-act="card" data-id="${esc(q.id)}">🖼 카드</button><button class="chip" data-act="unsave" data-id="${esc(q.id)}">저장 해제</button></div></div>`).join('') : '<div class="empty">마음에 드는 말을 ♡ 로 저장해 보세요.</div>'}</div>
    <h3>최근 기록 (기분 · 그날의 말)</h3>
    <div>${hist || '<div class="empty">아직 기록이 없어요.</div>'}</div>
  `;
}

function viewSettings() {
  const st = S.settings;
  const slotRows = SLOTS.map((s) => `
    <div class="row spread" style="padding:6px 0">
      <label style="margin:0;display:flex;gap:8px;align-items:center;font-size:15px;color:var(--ink)"><input type="checkbox" data-slotchk="${s.k}" ${st.slots[s.k].on ? 'checked' : ''}> ${s.l}</label>
      <input type="time" data-slottime="${s.k}" value="${esc(st.slots[s.k].time)}" style="width:130px">
    </div>`).join('');
  const mine = S.custom;
  return `
    <h1>설정</h1>
    <h2>알림 (캘린더 방식)</h2>
    <div class="panel">
      <p class="small">웹앱은 서버 없이 정해진 시간에 알림을 보낼 수 없어요. 대신 아래 시간에 맞춰 <b>알림이 울리는 캘린더 파일</b>을 만들 수 있어요. 파일을 열면 캘린더에 일정으로 추가되고, 시간이 되면 그 말이 알림으로 떠요.</p>
      ${slotRows}
      <label>만들 기간</label>
      <select id="icsDays"><option value="7">7일</option><option value="14" selected>14일</option><option value="30">30일</option></select>
      <button class="btn block" data-act="ics">알림용 캘린더 파일 만들기</button>
      <p class="hint">기분 체크는 반영되지 않고, 현재 상태와 등록한 일정만 반영돼요. 일정이 바뀌면 파일을 다시 만들어 주세요. 별도 캘린더로 추가하면 나중에 한 번에 지우기 쉬워요.</p>
    </div>

    <h3>내 명언 추가</h3>
    <form class="panel" data-form="custom">
      <label>명언 (한국어)</label>
      <textarea name="ko" required maxlength="300" placeholder="나에게 필요한 한 줄"></textarea>
      <label>누가 · 어디서</label>
      <input type="text" name="who" maxlength="60" placeholder="예: 친구 ○○ / 책 이름 / 내가 쓴 말">
      <label>어울리는 분위기</label>
      <div class="checks">${TONES.map((t) => `<label><input type="checkbox" name="tone" value="${t.k}"> ${t.l}</label>`).join('')}</div>
      <label>어울리는 상황</label>
      <div class="checks">${STATUS.map((t) => `<label><input type="checkbox" name="state" value="${t.k}"> ${t.l}</label>`).join('')}</div>
      <button class="btn block" type="submit">추가</button>
      <p class="hint">저작권이 있는 책이나 노래 가사를 그대로 옮기기보다, 내 말로 바꿔 적어 두면 안전해요.</p>
    </form>
    ${mine.length ? `<div class="list" style="margin-top:10px">${mine.map((c) => `<div class="item row spread"><div><div class="t" style="font-family:var(--serif)">${esc(c.ko)}</div><div class="m">${esc(c.who || '')}</div></div><button class="x" data-act="delcustom" data-id="${esc(c.id)}" aria-label="삭제">✕</button></div>`).join('')}</div>` : ''}

    <h3>화면</h3>
    <div class="row">${[['auto', '시스템'], ['light', '밝게'], ['dark', '어둡게']].map(([k, l]) => `<button class="chip ${st.theme === k ? 'on' : ''}" data-act="theme" data-k="${k}">${l}</button>`).join('')}</div>

    <h3>백업</h3>
    <div class="panel">
      <p class="small">데이터는 이 기기의 브라우저에만 저장돼요. 브라우저 데이터를 지우면 사라지니 가끔 백업해 두세요.</p>
      <div class="row"><button class="btn ghost" data-act="export">백업 파일 저장</button><button class="btn ghost" data-act="import">백업 불러오기</button><button class="btn ghost" data-act="notiftest">알림 테스트</button></div>
      <input type="file" id="importFile" accept="application/json" hidden>
    </div>

    <h3>출처 표기에 대해</h3>
    <p class="sub small">원문은 저작권 보호기간이 지난 고전이고 한국어는 직접 옮긴 번역이에요. 카드 아래의 출처 표기는 구절 번호까지만 적은 것이라, 다른 곳에 인용할 때는 원전과 한 번 대조해 주세요.</p>
    <p class="sub small">앱 버전 1.0 · 기본 명언 ${(window.QUOTES || []).length}개</p>
  `;
}

/* ───────── 동작 ───────── */
document.addEventListener('click', (e) => {
  const tabBtn = e.target.closest('#tabs button');
  if (tabBtn) { tab = tabBtn.dataset.tab; flash = ''; render(); window.scrollTo(0, 0); return; }
  const t = e.target.closest('[data-act]');
  if (!t) return;
  const a = t.dataset.act;
  const date = todayStr();

  switch (a) {
    case 'mood':
      S.mood[date] = Number(t.dataset.v);
      // 오늘 아직 다시 뽑지 않은 칸은 기분에 맞게 다시 고른다
      rerollQuote(date, viewSlot);
      save(); flash = ''; render(); break;
    case 'slot': viewSlot = t.dataset.k; render(); break;
    case 'reroll': rerollQuote(date, viewSlot); render(); break;
    case 'save': {
      const id = t.dataset.id;
      S.saved = S.saved.includes(id) ? S.saved.filter((x) => x !== id) : S.saved.concat(id);
      save(); render(); break;
    }
    case 'unsave': S.saved = S.saved.filter((x) => x !== t.dataset.id); save(); render(); break;
    case 'card': { const q = byId(t.dataset.id); if (q) shareCard(q); break; }
    case 'status':
      S.status = t.dataset.k; S.statusUntil = null; save(); render(); break;
    case 'rejected': {
      const d = new Date(); d.setDate(d.getDate() + 3);
      S.status = 'reject'; S.statusUntil = ymd(d); save();
      tab = 'today'; flash = '결과를 받느라 애썼어요. 3일간은 위로 위주로 보여드릴게요.';
      // 오늘 칸들을 새로 고른다
      SLOTS.forEach((s) => rerollQuote(date, s.k));
      render(); break;
    }
    case 'delev': S.events = S.events.filter((x) => x.id !== t.dataset.id); save(); render(); break;
    case 'delcustom': S.custom = S.custom.filter((x) => x.id !== t.dataset.id); S.saved = S.saved.filter((x) => x !== t.dataset.id); save(); render(); break;
    case 'theme': S.settings.theme = t.dataset.k; save(); render(); break;
    case 'ics': downloadICS(Number($('#icsDays').value)); break;
    case 'export': exportData(); break;
    case 'import': $('#importFile').click(); break;
    case 'notiftest': notifTest(); break;
  }
});

document.addEventListener('submit', (e) => {
  const f = e.target.closest('form[data-form]');
  if (!f) return;
  e.preventDefault();
  const fd = new FormData(f);
  if (f.dataset.form === 'event') {
    S.events.push({ id: uid(), type: fd.get('type'), title: String(fd.get('title') || '').trim(), date: fd.get('date'), time: fd.get('time') || '' });
    save(); toast('일정을 추가했어요'); render();
  } else if (f.dataset.form === 'custom') {
    const ko = String(fd.get('ko') || '').trim();
    if (!ko) return;
    const tones = fd.getAll('tone'); const states = fd.getAll('state');
    S.custom.push({
      id: 'm' + uid(), ko, orig: '', who: String(fd.get('who') || '').trim() || '나', src: '',
      tones: tones.length ? tones : ['steady'], states: states.length ? states : ['any'], note: '', action: ''
    });
    save(); toast('명언을 추가했어요'); render();
  }
});

document.addEventListener('change', (e) => {
  const t = e.target;
  if (t.dataset.slotchk) { S.settings.slots[t.dataset.slotchk].on = t.checked; save(); }
  else if (t.dataset.slottime) { if (t.value) { S.settings.slots[t.dataset.slottime].time = t.value; save(); } }
  else if (t.id === 'importFile') importData(t.files[0]);
});

/* ───────── 알림용 .ics ───────── */
function icsEscape(s) { return String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n'); }
function icsFold(line) {
  const enc = new TextEncoder();
  const out = []; let cur = ''; let bytes = 0;
  for (const ch of line) {
    const b = enc.encode(ch).length;
    if (bytes + b > 72) { out.push(cur); cur = ' ' + ch; bytes = 1 + b; } else { cur += ch; bytes += b; }
  }
  out.push(cur);
  return out.join('\r\n');
}
const icsLocal = (d) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
const icsUTC = (d) => `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;

function buildICS(days) {
  const now = new Date();
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//myeongeon//KO', 'CALSCALE:GREGORIAN', 'X-WR-CALNAME:오늘의 한 줄'];
  const used = new Set();
  const slots = SLOTS.filter((s) => S.settings.slots[s.k].on);
  let count = 0;
  for (let i = 0; i < days; i++) {
    const day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    const ds = ymd(day);
    for (const s of slots) {
      const [hh, mm] = S.settings.slots[s.k].time.split(':').map(Number);
      const when = new Date(day.getFullYear(), day.getMonth(), day.getDate(), hh, mm);
      if (when <= now) continue;
      const q = pickQuote({ date: ds, slot: s.k, mood: null, seed: 'ics', exclude: used });
      if (!q) continue;
      used.add(q.id);
      const head = q.ko.length > 26 ? q.ko.slice(0, 26) + '…' : q.ko;
      const body = `${q.ko}\n— ${q.who || ''}${q.src && q.src !== q.who ? ' · ' + q.src : ''}${q.action ? '\n\n작은 행동: ' + q.action : ''}`;
      lines.push(
        'BEGIN:VEVENT',
        `UID:${ds}-${s.k}-${q.id}@myeongeon`,
        `DTSTAMP:${icsUTC(now)}`,
        `DTSTART:${icsLocal(when)}`,
        'DURATION:PT10M',
        icsFold('SUMMARY:' + icsEscape('📖 ' + head)),
        icsFold('DESCRIPTION:' + icsEscape(body)),
        'BEGIN:VALARM', 'TRIGGER:PT0S', 'ACTION:DISPLAY', icsFold('DESCRIPTION:' + icsEscape(head)), 'END:VALARM',
        'END:VEVENT'
      );
      count++;
    }
  }
  lines.push('END:VCALENDAR');
  return { text: lines.join('\r\n') + '\r\n', count };
}

function downloadBlob(blob, name) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}
function downloadICS(days) {
  if (!SLOTS.some((s) => S.settings.slots[s.k].on)) { toast('알림 시간을 하나 이상 켜 주세요'); return; }
  const { text, count } = buildICS(days);
  if (!count) { toast('만들 알림이 없어요'); return; }
  downloadBlob(new Blob([text], { type: 'text/calendar;charset=utf-8' }), 'myeongeon.ics');
  toast(`알림 ${count}개를 담았어요`);
}

/* ───────── 백업 / 복원 ───────── */
function exportData() {
  downloadBlob(new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' }), `myeongeon-backup-${todayStr()}.json`);
}
function importData(file) {
  if (!file) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const d = JSON.parse(String(r.result));
      if (!d || typeof d !== 'object' || !('events' in d) || !('saved' in d)) throw new Error('형식이 달라요');
      localStorage.setItem(KEY, JSON.stringify(d)); S = load(); render(); toast('백업을 불러왔어요');
    } catch (err) { toast('불러오지 못했어요: ' + err.message); }
  };
  r.readAsText(file);
}

/* ───────── 알림 테스트 ───────── */
async function notifTest() {
  if (!('Notification' in window)) { toast('이 브라우저는 알림을 지원하지 않아요'); return; }
  try {
    const perm = await Notification.requestPermission();
    if (perm !== 'granted') { toast('알림 권한이 꺼져 있어요'); return; }
    const q = quoteFor(todayStr(), currentSlot());
    const reg = navigator.serviceWorker && (await navigator.serviceWorker.getRegistration());
    const title = '오늘의 한 줄'; const body = q ? q.ko : '알림 테스트';
    if (reg) reg.showNotification(title, { body, icon: 'icon-192.png' }); else new Notification(title, { body });
  } catch (e) { toast('알림을 띄우지 못했어요'); }
}

/* ───────── 이미지 카드 ───────── */
// 한국어는 띄어쓰기 단위로 줄을 바꾸고, 한 단어가 너무 길 때만 글자 단위로 자른다
function wrapLines(ctx, text, maxW) {
  const out = []; let line = '';
  const fits = (s) => ctx.measureText(s).width <= maxW;
  for (const word of text.split(/\s+/).filter(Boolean)) {
    const test = line ? line + ' ' + word : word;
    if (fits(test)) { line = test; continue; }
    if (line) { out.push(line); line = ''; }
    if (fits(word)) { line = word; continue; }
    for (const ch of word) {
      if (fits(line + ch)) line += ch; else { out.push(line); line = ch; }
    }
  }
  if (line) out.push(line);
  return out;
}
async function shareCard(q) {
  const W = 1080, H = 1350, M = 110;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  const dark = document.documentElement.dataset.theme === 'dark' ||
    (!document.documentElement.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
  const bg = dark ? '#14161a' : '#f4efe4', ink = dark ? '#ece7dc' : '#2a2622', sub = dark ? '#a29b8e' : '#6d655b', acc = dark ? '#8fb69d' : '#3d5a47';
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  const serif = '"Nanum Myeongjo","Noto Serif KR","Noto Serif CJK KR","AppleMyungjo","Batang",serif';
  const size = q.ko.length > 60 ? 50 : q.ko.length > 34 ? 58 : 68;
  g.textBaseline = 'top';
  g.font = `600 ${size}px ${serif}`;
  const lines = wrapLines(g, q.ko, W - M * 2);
  const lh = size * 1.75;
  g.font = `400 34px ${serif}`;
  const origLines = q.orig ? wrapLines(g, q.orig, W - M * 2).slice(0, 3) : [];
  const total = lines.length * lh + 30 + (origLines.length ? origLines.length * 50 + 20 : 0) + 44;
  // 글 덩어리를 세로 가운데 근처에 둔다
  let y = Math.max(280, Math.round((H - total) / 2));
  g.fillStyle = acc; g.fillRect(M, y - 84, 96, 8);
  g.font = `600 ${size}px ${serif}`; g.fillStyle = ink;
  lines.forEach((ln) => { g.fillText(ln, M, y); y += lh; });
  y += 30;
  if (origLines.length) {
    g.font = `400 34px ${serif}`; g.fillStyle = sub;
    origLines.forEach((ln) => { g.fillText(ln, M, y); y += 50; });
    y += 20;
  }
  g.font = `400 36px ${serif}`; g.fillStyle = ink;
  g.fillText('— ' + (q.who || '') + (q.src && q.src !== q.who ? ' · ' + q.src : ''), M, y);
  g.font = '400 28px sans-serif'; g.fillStyle = sub; g.textBaseline = 'bottom';
  g.fillText('오늘의 한 줄', M, H - 90);

  const blob = await new Promise((res) => c.toBlob(res, 'image/png'));
  const file = new File([blob], 'hanjul.png', { type: 'image/png' });
  try {
    if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file] }); return; }
  } catch (e) { if (e && e.name === 'AbortError') return; }
  downloadBlob(blob, 'hanjul.png'); toast('이미지로 저장했어요');
}

/* ───────── 시작 ───────── */
render();
// 날짜가 바뀐 채로 앱을 다시 열었을 때 화면을 갱신
document.addEventListener('visibilitychange', () => { if (!document.hidden) { viewSlot = currentSlot(); render(); } });
if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

// 테스트용 (브라우저 콘솔·자동 점검에서 사용)
window.__app = { pickQuote, effectiveStates, scoreQuote, buildICS, get S() { return S; }, set S(v) { S = v; } };
})();
