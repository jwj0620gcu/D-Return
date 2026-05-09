/* eslint-disable no-undef */
// D-return — SourceLogos.jsx
// Monochrome SVG marks for the 6 data-source services. Drawn in currentColor so
// the parent controls the tone (we use ink at ~55% opacity for the tone-down look).

const SlackMark = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M5 14.5A1.5 1.5 0 1 1 3.5 13H5v1.5zM5.75 14.5a1.5 1.5 0 1 1 3 0v3.75a1.5 1.5 0 1 1-3 0V14.5z"/>
    <path d="M9.5 5A1.5 1.5 0 1 1 11 3.5V5H9.5zM9.5 5.75a1.5 1.5 0 1 1 0 3H5.75a1.5 1.5 0 1 1 0-3H9.5z"/>
    <path d="M19 9.5A1.5 1.5 0 1 1 20.5 11H19V9.5zM18.25 9.5a1.5 1.5 0 1 1-3 0V5.75a1.5 1.5 0 0 1 3 0V9.5z"/>
    <path d="M14.5 19a1.5 1.5 0 1 1-1.5 1.5V19h1.5zM14.5 18.25a1.5 1.5 0 1 1 0-3h3.75a1.5 1.5 0 1 1 0 3H14.5z"/>
  </svg>
);
const NotionMark = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4.5 4.4c.6.5 1 .5 2 .4l9.7-.6c.2 0 0-.2-.1-.2L14.5 2.7c-.3-.2-.7-.5-1.5-.4L4 3c-.4 0-.4.2-.3.4l.8 1zM5.2 6.7v10c0 .6.3.8.9.8l11-.6c.7 0 .8-.4.8-.9V5.6c0-.5-.2-.7-.6-.7L5.7 5.5c-.5 0-.7.3-.7.7v.5h.2zm10.5.7c.1.4 0 .8-.4.8l-.5 0v8c0 .5-.3.8-.9.8l-1 .1c-.5 0-.7-.2-1-.6l-2.6-4v3.9c0 .5-.2.7-.6.8l-.8.1c-.4 0-.6-.2-.6-.7V8.4c0-.4.2-.6.6-.6l1.4-.1c.4 0 .6.1.8.5l3 4.6V8.5l-.8 0c-.4 0-.4-.4-.3-.7l1.5-.2 1.7-.1.2.0z"/>
  </svg>
);
const GmailMark = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
    <rect x="2.5" y="5" width="19" height="14" rx="2"/>
    <path d="m3 6 9 7 9-7"/>
  </svg>
);
const DriveMark = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M9.5 3 3 14.5l3 5 6.5-11.5L9.5 3zm5 0L21 14.5l-3 5h-7l3-5L14.5 3zM4 16l-1 3 3 0L13 16H4z" opacity=".95"/>
  </svg>
);
const JiraMark = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M11.5 2.2 12 1.7l.5.5 9.3 9.3a1 1 0 0 1 0 1.4l-9.3 9.3-.5.5-.5-.5L9.4 20l5.5-5.5a4 4 0 0 0 0-5.6L11.5 5.5l-.6-.6L11.5 4 9.4 2l2.1.2zM5.4 14a4 4 0 0 0 5.6 0L12.6 12.4 7.5 7.4 2.2 12.7a1 1 0 0 0 0 1.4L5.4 17l1-1L5.4 14.6a1 1 0 0 1 0-.6z"/>
  </svg>
);
const GithubMark = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.69-.22.69-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/>
  </svg>
);

const SOURCES = [
  { name: "Slack",        Mark: SlackMark },
  { name: "Notion",       Mark: NotionMark },
  { name: "Gmail",        Mark: GmailMark },
  { name: "Google Drive", Mark: DriveMark },
  { name: "Jira",         Mark: JiraMark },
  { name: "GitHub",       Mark: GithubMark },
];

const SourceLogos = () => (
  <div className="grid grid-cols-3 gap-y-12 gap-x-6 md:grid-cols-6 md:gap-x-12">
    {SOURCES.map(({ name, Mark }) => (
      <div key={name} className="flex flex-col items-center gap-3 text-ink/60 hover:text-ink transition-colors">
        <Mark width="32" height="32"/>
        <span className="text-[13px] body-text tracking-tight">{name}</span>
      </div>
    ))}
  </div>
);

window.SourceLogos = SourceLogos;
