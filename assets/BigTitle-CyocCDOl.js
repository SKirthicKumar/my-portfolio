import { j as e, d as i } from "./index-C4HZ7ZZL.js";
const o = i.h1`
  position: fixed;
  top: ${(t) => t.top};
  left: ${(t) => t.left};
  right: ${(t) => t.right};
  color: ${(t) => `rgba(${t.theme.textRgba}, 0.2)`};
  font-size: calc(5rem + 5vw);
  z-index: 0;
`,
  l = (t) =>
    e.jsx(o, { top: t.top, left: t.left, right: t.right, children: t.text });
export { l as default };
