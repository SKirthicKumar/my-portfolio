import {
  j as e,
  a as r,
  L as o,
  D as i,
  G as s,
  T as h,
  F as d,
  Y as c,
  m as a,
  d as n,
} from "./index-C4HZ7ZZL.js";
const m = n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.5rem 0;

    ${a(20)`
      margin: 0.3rem 0;
  `};
  }

  ${a(40)`
  left: 1rem;

      svg{
        width:20px;
        height:20px
      }

  `};
`,
  x = n(r.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(t) => (t.color === "dark" ? i.text : i.body)};
`,
  g = (t) => {
    const l = window.matchMedia("(max-width: 40em)").matches;
    return e.jsxs(m, {
      children: [
        e.jsx(r.div, {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { type: "spring", duration: 1, delay: 1 },
          whileHover: { scale: 1.2 },
          children: e.jsx("a", {
            href: "https://www.linkedin.com/in/kirthic-kumar-580a87271",
            target: "_blank",
            rel: "noopener noreferrer",
            style: { color: "inherit", display: "inline-block" },
            children: e.jsx(o, {
              width: 25,
              height: 25,
              fill: t.theme === "dark" ? `${i.text}` : `${i.body}`,
            }),
          }),
        }),
        e.jsx(r.div, {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { type: "spring", duration: 1, delay: 1 },
          whileHover: { scale: 1.2 },
          children: e.jsx("a", {
            href: "https://github.com/SKirthicKumar/",
            target: "_blank",
            rel: "noopener noreferrer",
            style: { color: "inherit", display: "inline-block" },
            children: e.jsx(s, {
              width: 25,
              height: 25,
              fill: t.theme === "dark" ? `${i.text}` : `${i.body}`,
            }),
          }),
        }),
        e.jsx(r.div, {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { type: "spring", duration: 1, delay: 1 },
          whileHover: { scale: 1.2 },
          children: e.jsx("a", {
            href: "https://wa.me/918838360031?text=Hi%20Hareesh%2C%20I%20saw%20your%20portfolio",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "WhatsApp",
            style: { color: "inherit", display: "inline-block" },
            children: e.jsx("svg", {
              viewBox: "0 0 24 24",
              width: 25,
              height: 25,
              fill: "#25D366",
              role: "img",
              "aria-hidden": "true",
              children: e.jsx("path", {
                d: "M20.52 3.48A11.86 11.86 0 0 0 12.09 0C5.52 0 .12 5.4.12 12.08c0 2.13.56 4.2 1.62 6.03L0 24l6.03-1.58a11.97 11.97 0 0 0 5.98 1.52h.01c6.6 0 12-5.4 12-12.07 0-3.2-1.24-6.22-3.48-8.39ZM12.1 22.1h-.01a9.84 9.84 0 0 1-5.04-1.38l-.36-.21-3.58.94.96-3.49-.23-.36A9.88 9.88 0 0 1 2.1 12.1c0-5.46 4.45-9.9 9.93-9.9a9.76 9.76 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.9 6.99c0 5.48-4.45 9.93-9.92 9.93Zm5.44-7.42c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.08-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.52-1.8-1.7-2.1-.18-.3-.02-.47.14-.62.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.94-2.24-.25-.58-.5-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.18-.57-.33Z",
              }),
            }),
          }),
        }),
        e.jsx(x, {
          initial: { height: 0 },
          animate: { height: l ? "5rem" : "8rem" },
          color: t.theme,
          transition: { type: "spring", duration: 1, delay: 0.8 },
        }),
      ],
    });
  };
export { g as default };
