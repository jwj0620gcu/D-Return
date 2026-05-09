/* eslint-disable no-undef */
// D-return — Sections.jsx

// ---------- Buttons ----------
const PrimaryBtn = ({ children, size = "md", onClick, type = "button", className = "" }) => {
  const sizes = {
    md: "px-7 py-3 text-[15px] rounded-btn",
    lg: "px-9 py-4 text-[16px] rounded-hero",
  }[size];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-ink text-canvas font-medium tracking-link inline-flex items-center gap-2 transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap ${sizes} ${className}`}
    >
      {children}
    </button>
  );
};
const ArrowDown = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14"/><path d="m5 12 7 7 7-7"/>
  </svg>
);
const ArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
  </svg>
);

// ---------- Nav ----------
const Nav = () => (
  <nav className="sticky top-6 z-40 mx-auto mt-6 max-w-[920px] px-3">
    <div className="bg-white rounded-pill shadow-lift-1 px-6 py-3.5 flex items-center justify-between">
      <Logo size={22}/>
      <div className="hidden md:flex items-center gap-9 text-[14px] tracking-link">
        <a href="#stats"   className="hover:text-signal transition-colors">데이터 규모</a>
        <a href="#value"   className="hover:text-signal transition-colors">데이터 가치</a>
        <a href="#request" className="hover:text-signal transition-colors">샘플 요청</a>
      </div>
      <a href="#request" className="bg-ink text-canvas px-4 py-2 rounded-pill text-[13px] font-medium tracking-link hover:opacity-90 transition-opacity">
        시작하기
      </a>
    </div>
  </nav>
);

// ---------- Hero ----------
const Hero = () => (
  <section className="relative pt-20 md:pt-28 pb-24 md:pb-32 overflow-hidden">
    <div className="absolute inset-0 bg-grid pointer-events-none"/>
    <div className="absolute inset-0 bg-noise pointer-events-none opacity-50"/>
    <div className="relative max-w-[1080px] mx-auto px-6">
      <Reveal>
        <span className="eyebrow text-[12px] font-bold uppercase tracking-[0.14em] text-ink">
          AI 학습 데이터 플랫폼
        </span>
      </Reveal>
      <Reveal delay={120}>
        <h1 className="mt-7 text-[40px] leading-[1.12] md:text-[68px] md:leading-[1.05] tracking-display font-medium max-w-[920px]">
          실제 회사 업무 의사결정이 담긴 데이터를,<br className="hidden md:block"/>
          <span className="text-ink/55">AI 학습 데이터로 사용하세요.</span>
        </h1>
      </Reveal>
      <Reveal delay={240}>
        <p className="mt-8 max-w-[640px] text-[16px] md:text-[17px] leading-[1.65] text-ink/75 body-text">
          폐업 기업에서 수집한 Slack, Notion, Gmail, Jira, Google Drive 데이터를
          법적 리스크 해결, 비식별화 완료 상태로 제공합니다.
        </p>
      </Reveal>
      <Reveal delay={360}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <PrimaryBtn size="lg" onClick={() => document.getElementById("request")?.scrollIntoView({ behavior: "smooth", block: "start" })}>
            데이터 살펴보기
            <ArrowDown size={18}/>
          </PrimaryBtn>
          <a href="#value" className="text-[15px] tracking-link text-ink/70 hover:text-ink underline underline-offset-[6px] decoration-ink/30 px-2 py-2">
            데이터가 특별한 이유 →
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

// ---------- Sources ----------
const Sources = () => (
  <section id="sources" className="py-20 md:py-28 border-t border-ink/10">
    <div className="max-w-[1080px] mx-auto px-6">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <span className="eyebrow text-[12px] font-bold uppercase tracking-[0.14em]">Sources</span>
            <h2 className="mt-4 text-[28px] md:text-[36px] leading-[1.18] tracking-display font-medium">
              수집 데이터 소스
            </h2>
          </div>
          <p className="text-[14px] text-ink/65 body-text max-w-[400px]">
            업무가 실제로 흐르는 도구들에서 수집됩니다. 모두 동의 절차와 비식별화를 거쳤습니다.
          </p>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <SourceLogos/>
      </Reveal>
      <Reveal delay={240}>
        <p className="mt-14 text-center text-[13px] text-ink/55 body-text">
          모든 데이터는 개인정보 동의 완료 및 비식별화 처리를 거쳤습니다.
        </p>
      </Reveal>
    </div>
  </section>
);

// ---------- Stats ----------
const STATS = [
  { value: 12, suffix: "B+", label: "총 토큰 수",        sub: "Tokens" },
  { value: 150, suffix: "+", label: "수집 완료 기업 수", sub: "Companies" },
  { value: 5,   suffix: "",  label: "데이터 소스 유형",  sub: "Sources" },
  { value: 100, suffix: "%", label: "비식별화 완료율",  sub: "Anonymized" },
];
const Stats = () => (
  <section id="stats" className="py-20 md:py-28 bg-canvas-lifted border-y border-ink/10">
    <div className="max-w-[1080px] mx-auto px-6">
      <Reveal>
        <span className="eyebrow text-[12px] font-bold uppercase tracking-[0.14em]">Numbers</span>
        <h2 className="mt-4 text-[28px] md:text-[40px] leading-[1.15] tracking-display font-medium max-w-[600px]">
          숫자로 보는 데이터 규모.
        </h2>
      </Reveal>
      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <div className="border-l border-ink/15 pl-5 md:pl-7">
              <div className="text-[44px] md:text-[64px] leading-[1] font-medium tracking-display">
                <CountUp to={s.value} suffix={s.suffix} duration={1600}/>
              </div>
              <div className="mt-4 text-[14px] text-ink body-text">{s.label}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-ink/45 font-bold">{s.sub}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Value Props ----------
const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="9" cy="7" r="3"/><circle cx="17" cy="9" r="2.5"/>
        <path d="M3 20a6 6 0 0 1 12 0"/><path d="M14 20a5 5 0 0 1 7 0"/>
      </svg>
    ),
    title: "실제 업무 의사결정",
    body: "팀원들의 문제 해결과정, 엔지니어의 기술 토론, 경영진의 의사결정 등 팀 간 협업 과정이 고스란히 담긴 데이터입니다.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M12 2 4 5v6c0 5 3.4 9.5 8 11 4.6-1.5 8-6 8-11V5l-8-3z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    title: "법적 리스크 제로",
    body: "모든 데이터는 개인정보 동의 및 비식별화 처리가 완료되어 즉시 학습에 활용 가능합니다.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="3" y="6" width="18" height="13" rx="2"/>
        <path d="M8 10h8M8 14h5"/>
        <circle cx="18" cy="14.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: "도메인 특화 AI 구축",
    body: "범용 LLM을 넘어, 특정 산업에 전문화된 AI Agent를 만들기 위한 핵심 원료입니다.",
  },
];
const Value = () => (
  <section id="value" className="py-24 md:py-36">
    <div className="max-w-[1080px] mx-auto px-6">
      <Reveal>
        <div className="max-w-[720px]">
          <span className="eyebrow text-[12px] font-bold uppercase tracking-[0.14em]">Why D‑return</span>
          <h2 className="mt-4 text-[32px] md:text-[48px] leading-[1.1] tracking-display font-medium">
            왜 <span className="wordmark italic" style={{fontSize: "1.05em"}}>D‑return</span> 데이터인가.
          </h2>
          <p className="mt-6 text-[16px] body-text text-ink/70">
            범용 데이터로는 도달할 수 없는 업무의 결을 학습합니다. 우리는 그 결을 합법적으로,
            그리고 깊이 있게 제공합니다.
          </p>
        </div>
      </Reveal>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 rounded-hero overflow-hidden border border-ink/10">
        {VALUES.map((v, i) => (
          <Reveal key={v.title} delay={i * 110} className="bg-canvas">
            <div className="p-8 md:p-10 h-full flex flex-col">
              <div className="w-11 h-11 rounded-pill bg-ink text-canvas inline-flex items-center justify-center">
                {v.icon}
              </div>
              <h3 className="mt-7 text-[20px] md:text-[22px] tracking-display font-medium leading-[1.25]">
                {v.title}
              </h3>
              <p className="mt-4 text-[14.5px] body-text text-ink/72 leading-[1.65]">
                {v.body}
              </p>
              <div className="mt-auto pt-8 text-[11px] uppercase tracking-[0.16em] font-bold text-ink/35">
                0{i + 1} / 03
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Form ----------
const DATA_TYPES = [
  { id: "unstructured", label: "비정형 업무 데이터", sub: "Slack · Notion · Gmail · Drive · Jira · GitHub" },
  { id: "domain",       label: "도메인 특화 데이터",  sub: "도메인 선택 필요" },
];
const DOMAINS = ["교육", "법률", "의료", "금융", "물류"];

const Form = () => {
  const [email, setEmail] = React.useState("");
  const [types, setTypes] = React.useState(new Set());
  const [domain, setDomain] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const toggleType = (id) => {
    const n = new Set(types);
    n.has(id) ? n.delete(id) : n.add(id);
    setTypes(n);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="request" className="py-24 md:py-32 bg-ink text-canvas">
      <div className="max-w-[860px] mx-auto px-6">
        <Reveal>
          <span className="eyebrow text-[12px] font-bold uppercase tracking-[0.14em] text-canvas">Request</span>
          <h2 className="mt-4 text-[32px] md:text-[52px] leading-[1.1] tracking-display font-medium">
            데이터 샘플을 요청하세요.
          </h2>
          <p className="mt-6 text-[16px] body-text text-canvas/70 max-w-[500px]">
            업무용 이메일과 필요한 데이터 유형을 알려주시면, 영업일 기준 24시간 이내에
            샘플 데이터를 보내드립니다.
          </p>
        </Reveal>

        <Reveal delay={120}>
          {submitted ? (
            <div className="mt-12 rounded-hero border border-canvas/20 p-10">
              <div className="text-[14px] uppercase tracking-[0.16em] font-bold text-accent">접수 완료</div>
              <h3 className="mt-3 text-[24px] tracking-display font-medium">샘플 요청이 접수되었습니다.</h3>
              <p className="mt-3 text-[15px] body-text text-canvas/70">
                <span className="text-canvas">{email}</span> 으로 영업일 기준 24시간 이내에 안내 메일이 도착합니다.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-12 space-y-8">
              {/* email */}
              <div>
                <label className="block text-[12px] uppercase tracking-[0.14em] font-bold text-canvas/60 mb-3">
                  업무용 이메일
                </label>
                <input
                  type="email" required
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="업무용 이메일을 입력하세요"
                  className="w-full bg-transparent border-b border-canvas/30 focus:border-canvas py-3 text-[17px] body-text placeholder:text-canvas/35 outline-none transition-colors"
                />
              </div>

              {/* data types */}
              <div>
                <label className="block text-[12px] uppercase tracking-[0.14em] font-bold text-canvas/60 mb-4">
                  필요한 데이터 유형
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {DATA_TYPES.map(t => {
                    const on = types.has(t.id);
                    return (
                      <button key={t.id} type="button" onClick={() => toggleType(t.id)}
                        className={`text-left rounded-btn px-5 py-4 border transition-colors ${on ? "border-canvas bg-canvas/10" : "border-canvas/20 hover:border-canvas/50"}`}
                      >
                        <div className="flex items-start gap-3">
                          <span className={`mt-0.5 w-4 h-4 rounded-[4px] border ${on ? "bg-canvas border-canvas" : "border-canvas/40"} inline-flex items-center justify-center flex-shrink-0`}>
                            {on && (
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#141413" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-12"/></svg>
                            )}
                          </span>
                          <div>
                            <div className="text-[15px] font-medium tracking-link">{t.label}</div>
                            <div className="mt-1 text-[12px] text-canvas/55 body-text">{t.sub}</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* domain pills, shown when "domain" type chosen */}
                {types.has("domain") && (
                  <div className="mt-5">
                    <div className="text-[12px] uppercase tracking-[0.14em] font-bold text-canvas/60 mb-3">도메인 선택</div>
                    <div className="flex flex-wrap gap-2">
                      {DOMAINS.map(d => (
                        <button key={d} type="button" onClick={() => setDomain(d)}
                          className={`rounded-pill px-4 py-2 text-[13px] tracking-link border transition-colors ${domain === d ? "bg-canvas text-ink border-canvas" : "border-canvas/30 text-canvas/85 hover:border-canvas"}`}
                        >{d}</button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* submit */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button type="submit"
                  className="bg-canvas text-ink rounded-btn px-7 py-3.5 text-[15px] font-medium tracking-link inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform whitespace-nowrap">
                  샘플 요청하기 <ArrowRight size={16}/>
                </button>
                <span className="text-[12.5px] body-text text-canvas/55">
                  요청 후 영업일 기준 24시간 이내 샘플 데이터를 보내드립니다.
                </span>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};

// ---------- Footer ----------
const Footer = () => (
  <footer className="bg-canvas py-14 border-t border-ink/10">
    <div className="max-w-[1080px] mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <Logo size={22}/>
        <span className="hidden md:inline text-[12px] tracking-[0.16em] uppercase font-bold text-ink/40">
          폐업 기업 데이터 중개 플랫폼
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 text-[13px] text-ink/60 body-text">
        <a href="mailto:jwj4181@gmail.com" className="hover:text-ink transition-colors">jwj4181@gmail.com</a>
        <span>© 2065 D‑return. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

window.Nav = Nav;
window.Hero = Hero;
window.Sources = Sources;
window.Stats = Stats;
window.Value = Value;
window.Form = Form;
window.Footer = Footer;
