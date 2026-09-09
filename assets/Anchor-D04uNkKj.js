import {
  r as i,
  j as e,
  A as d,
  b as h,
  m as u,
  d as s,
} from "./index-C4HZ7ZZL.js";
const m = s.div`
  position: relative;
  ${u(40)`
    
    display:none;



  `};
`,
  p = s.div`
  position:absolute;
  top:0;
  right:2rem;

 


}
`,
  w = s.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);
  .chain {
    transform: rotate(135deg);
  }
`,
  y = (c) => {
    const o = i.useRef(null),
      t = i.useRef(null);
    return (
      i.useEffect(() => {
        const n = () => {
          let r = window.pageYOffset,
            l = window.innerHeight,
            a = document.body.offsetHeight,
            f = (Math.max(a - (r + l)) * 100) / (a - l);
          ((o.current.style.transform = `translateY(${-f}%)`),
            window.pageYOffset > 5
              ? (t.current.style.display = "none")
              : (t.current.style.display = "block"));
        };
        return (
          window.addEventListener("scroll", n),
          () => window.removeEventListener("scroll", n)
        );
      }, []),
      e.jsxs(m, {
        children: [
          e.jsx(p, {
            ref: t,
            className: "hidden",
            children: e.jsx(d, { width: 70, height: 70, fill: "currentColor" }),
          }),
          e.jsxs(w, {
            ref: o,
            children: [
              [...Array(c.number)].map((n, r) =>
                e.jsx(
                  h,
                  {
                    style: { padding: "0.1rem 0" },
                    width: 25,
                    height: 25,
                    fill: "currentColor",
                    className: "chain",
                  },
                  r,
                ),
              ),
              e.jsx(d, { width: 70, height: 70, fill: "currentColor" }),
            ],
          }),
        ],
      })
    );
  };
export { y as default };
