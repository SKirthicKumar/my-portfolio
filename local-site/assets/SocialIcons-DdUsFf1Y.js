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
          transition: { type: "spring", duration: 1, delay: 1.2 },
          whileHover: { scale: 1.2 },
          children: e.jsx("a", {
            href: "https://twitter.com/hareesh_dev",
            target: "_blank",
            rel: "noopener noreferrer",
            style: { color: "inherit", display: "inline-block" },
            children: e.jsx(h, {
              width: 25,
              height: 25,
              fill: t.theme === "dark" ? `${i.text}` : `${i.body}`,
            }),
          }),
        }),
        e.jsx(r.div, {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { type: "spring", duration: 1, delay: 1.4 },
          whileHover: { scale: 1.2 },
          children: e.jsx("a", {
            href: "https://www.facebook.com/hareeshprogrammer",
            target: "_blank",
            rel: "noopener noreferrer",
            style: { color: "inherit", display: "inline-block" },
            children: e.jsx(d, {
              width: 25,
              height: 25,
              fill: t.theme === "dark" ? `${i.text}` : `${i.body}`,
            }),
          }),
        }),
        e.jsx(r.div, {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { type: "spring", duration: 1, delay: 1.6 },
          whileHover: { scale: 1.2 },
          children: e.jsx("a", {
            href: "https://www.youtube.com/channel/UCdFmcrrlvC6rSYEL9mZQ_4g",
            target: "_blank",
            rel: "noopener noreferrer",
            style: { color: "inherit", display: "inline-block" },
            children: e.jsx(c, {
              width: 25,
              height: 25,
              fill: t.theme === "dark" ? `${i.text}` : `${i.body}`,
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
