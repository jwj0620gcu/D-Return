# D-return

폐업 기업 데이터로 만드는 도메인 특화 AI 데이터 플랫폼 — 랜딩 페이지

---

## 프로젝트 소개

D-return은 폐업 기업에서 수집한 실제 업무 데이터(Slack, Notion, Gmail, Jira, Google Drive 등)를 비식별화하여 AI 학습 데이터로 제공하는 플랫폼입니다. 이 레포는 해당 서비스의 랜딩 페이지 소스코드입니다.

---

## 빠른 시작

별도 빌드 도구 없이 브라우저에서 바로 실행할 수 있습니다.

```bash
# 레포 클론
git clone https://github.com/jwj0620gcu/D-Return.git
cd D-Return

# 브라우저로 열기 (아무 브라우저나 가능)
open D-return.html
```

> 인터넷 연결이 필요합니다. Tailwind CSS, React, Babel을 CDN에서 로드합니다.

---

## 파일 구조

```
D-Return/
├── D-return.html          # 메인 랜딩 페이지 (단일 파일 앱)
├── image-slot.js          # 이미지 동적 주입 유틸리티
├── images/                # 제품 스크린샷 및 로고 이미지
│   ├── slack.png
│   ├── notion.png
│   ├── gmail.png
│   ├── jira.webp
│   ├── slack logo2.png
│   ├── notion-logo.png
│   ├── gmail-logo.png
│   ├── drive-logo.png
│   ├── jira-logo.png
│   ├── github-logo.png
│   ├── slack-chat.jpg
│   ├── ai-agent.jpg
│   ├── 법적 리스크.jpg
│   └── final-data.jpeg
├── dreturn/               # React 컴포넌트 소스 (모듈화 버전)
│   ├── App.jsx
│   ├── Sections.jsx
│   ├── CountUp.jsx
│   ├── Reveal.jsx
│   ├── Logo.jsx
│   └── SourceLogos.jsx
├── assets/                # 브랜드 SVG 에셋
├── colors_and_type.css    # 디자인 토큰 (컬러, 타이포그래피)
├── preview/               # 디자인 시스템 컴포넌트 프리뷰
└── ui_kits/               # UI 킷 참고 파일
```

---

## 페이지 구성

| 섹션 | 설명 |
|------|------|
| **Hero** | 메인 헤드라인 + 애니메이션 콜라주 카드 |
| **Data Sources** | Slack, Notion, Gmail, Jira, Drive, GitHub 수집 소스 |
| **Stats** | 총 토큰 수, 수집 기업 수, 커버 도메인, 비식별화 완료율 |
| **Why D-return** | 실제 업무 의사결정 / 법적 리스크 제로 / 도메인 특화 AI |
| **샘플 요청 폼** | 이메일 입력 + 데이터 유형 선택 + 상세 문의 |

---

## 커스터마이징

### 컬러 변경

[D-return.html](D-return.html) 상단 `tailwind.config` 블록에서 수정합니다.

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        signal: "#F37338",   // 주 강조색 (오렌지)
        ink:    "#141413",   // 기본 텍스트
        // ...
      }
    }
  }
}
```

### 통계 수치 변경

`STATS` 배열을 수정합니다 (약 290번째 줄).

```js
const STATS = [
  { value: 12, suffix: "억+", label: "총 토큰 수", sub: "Tokens" },
  { value: 30, suffix: "+",   label: "수집 완료 기업 수", sub: "Companies" },
  // ...
];
```

### 폼 제출 연동

`FormSection` 컴포넌트의 `submit` 함수에서 실제 API를 호출하도록 교체합니다.

```js
const submit = async (e) => {
  e.preventDefault();
  // 현재: setTimeout으로 성공 시뮬레이션
  // 교체: fetch("/api/request", { method: "POST", body: ... })
};
```

### 이미지 교체

`images/` 폴더의 파일을 같은 파일명으로 교체하거나, `SOURCES` 배열과 `VALUES` 배열의 경로를 수정합니다.

---

## 기술 스택

| 항목 | 내용 |
|------|------|
| 프레임워크 | React 18 (CDN, 빌드 도구 없음) |
| 스타일링 | Tailwind CSS v3 (CDN) |
| 트랜스파일러 | Babel Standalone |
| 폰트 | Noto Sans KR, JetBrains Mono (Google Fonts) |
| 배포 | 정적 HTML 단일 파일 — GitHub Pages, Netlify, Vercel 모두 가능 |

---

## 배포

### GitHub Pages

1. 레포 Settings → Pages → Branch: `main`, Folder: `/ (root)` 설정
2. `https://jwj0620gcu.github.io/D-Return/D-return.html` 로 접근

### Netlify / Vercel

루트 디렉토리를 연결하면 자동 배포됩니다. 빌드 커맨드는 필요 없습니다.

---

## 문의

- 이메일: jwj4181@gmail.com
- GitHub: [@jwj0620gcu](https://github.com/jwj0620gcu)
