import { j as r, N as e, P as t, m as o, d as i } from "./index-C4HZ7ZZL.js";
const n = i.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid black;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
  cursor: pointer;
  &:hover {
    background-color: rgb(218 218 218 / 40%);
    box-shadow: 0 0 8px 6px rgb(0 0 0 / 20%);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }

  ${o(40)`
   width: 2rem;
  height: 2rem;
      svg{
        width:20px;
        height:20px;
      }
  `};
`,
  d = () =>
    r.jsx(n, {
      children: r.jsx(e, {
        to: "/",
        children: r.jsx(t, { width: 30, height: 30, fill: "currentColor" }),
      }),
    });
export { d as default };
