function ty(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function ny(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ih = { exports: {} },
  Ms = {},
  Vh = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gi = Symbol.for("react.element"),
  ry = Symbol.for("react.portal"),
  iy = Symbol.for("react.fragment"),
  oy = Symbol.for("react.strict_mode"),
  sy = Symbol.for("react.profiler"),
  ay = Symbol.for("react.provider"),
  ly = Symbol.for("react.context"),
  uy = Symbol.for("react.forward_ref"),
  cy = Symbol.for("react.suspense"),
  fy = Symbol.for("react.memo"),
  dy = Symbol.for("react.lazy"),
  Hc = Symbol.iterator;
function hy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hc && e[Hc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $h = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Fh = Object.assign,
  zh = {};
function Fr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = zh),
    (this.updater = n || $h));
}
Fr.prototype.isReactComponent = {};
Fr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Nh() {}
Nh.prototype = Fr.prototype;
function xu(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = zh),
    (this.updater = n || $h));
}
var Su = (xu.prototype = new Nh());
Su.constructor = xu;
Fh(Su, Fr.prototype);
Su.isPureReactComponent = !0;
var Gc = Array.isArray,
  Oh = Object.prototype.hasOwnProperty,
  ku = { current: null },
  Bh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Uh(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Oh.call(t, r) && !Bh.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Gi,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: ku.current,
  };
}
function py(e, t) {
  return {
    $$typeof: Gi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Cu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gi;
}
function my(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Kc = /\/+/g;
function da(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? my("" + e.key)
    : t.toString(36);
}
function _o(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gi:
          case ry:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + da(s, 0) : r),
      Gc(i)
        ? ((n = ""),
          e != null && (n = e.replace(Kc, "$&/") + "/"),
          _o(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Cu(i) &&
            (i = py(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Kc, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Gc(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + da(o, a);
      s += _o(o, t, n, l, i);
    }
  else if (((l = hy(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done;)
      ((o = o.value), (l = r + da(o, a++)), (s += _o(o, t, n, l, i)));
  else if (o === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return s;
}
function ro(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    _o(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function gy(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var De = { current: null },
  bo = { transition: null },
  yy = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: bo,
    ReactCurrentOwner: ku,
  };
function Wh() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: ro,
  forEach: function (e, t, n) {
    ro(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ro(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ro(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Cu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
z.Component = Fr;
z.Fragment = iy;
z.Profiler = sy;
z.PureComponent = xu;
z.StrictMode = oy;
z.Suspense = cy;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yy;
z.act = Wh;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Fh({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = ku.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Oh.call(t, l) &&
        !Bh.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Gi, type: e.type, key: i, ref: o, props: r, _owner: s };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: ly,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ay, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = Uh;
z.createFactory = function (e) {
  var t = Uh.bind(null, e);
  return ((t.type = e), t);
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: uy, render: e };
};
z.isValidElement = Cu;
z.lazy = function (e) {
  return { $$typeof: dy, _payload: { _status: -1, _result: e }, _init: gy };
};
z.memo = function (e, t) {
  return { $$typeof: fy, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = bo.transition;
  bo.transition = {};
  try {
    e();
  } finally {
    bo.transition = t;
  }
};
z.unstable_act = Wh;
z.useCallback = function (e, t) {
  return De.current.useCallback(e, t);
};
z.useContext = function (e) {
  return De.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return De.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return De.current.useEffect(e, t);
};
z.useId = function () {
  return De.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return De.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return De.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return De.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return De.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return De.current.useRef(e);
};
z.useState = function (e) {
  return De.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return De.current.useTransition();
};
z.version = "18.3.1";
Vh.exports = z;
var S = Vh.exports;
const Ae = ny(S),
  vy = ty({ __proto__: null, default: Ae }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wy = S,
  xy = Symbol.for("react.element"),
  Sy = Symbol.for("react.fragment"),
  ky = Object.prototype.hasOwnProperty,
  Cy = wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Py = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hh(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  (n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) ky.call(t, r) && !Py.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: xy,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Cy.current,
  };
}
Ms.Fragment = Sy;
Ms.jsx = Hh;
Ms.jsxs = Hh;
Ih.exports = Ms;
var v = Ih.exports,
  Gh = { exports: {} },
  Ye = {},
  Kh = { exports: {} },
  Qh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(b, A) {
    var $ = b.length;
    b.push(A);
    e: for (; 0 < $;) {
      var I = ($ - 1) >>> 1,
        N = b[I];
      if (0 < i(N, A)) ((b[I] = A), (b[$] = N), ($ = I));
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var A = b[0],
      $ = b.pop();
    if ($ !== A) {
      b[0] = $;
      e: for (var I = 0, N = b.length, wt = N >>> 1; I < wt;) {
        var Ve = 2 * (I + 1) - 1,
          lt = b[Ve],
          he = Ve + 1,
          Je = b[he];
        if (0 > i(lt, $))
          he < N && 0 > i(Je, lt)
            ? ((b[I] = Je), (b[he] = $), (I = he))
            : ((b[I] = lt), (b[Ve] = $), (I = Ve));
        else if (he < N && 0 > i(Je, $)) ((b[I] = Je), (b[he] = $), (I = he));
        else break e;
      }
    }
    return A;
  }
  function i(b, A) {
    var $ = b.sortIndex - A.sortIndex;
    return $ !== 0 ? $ : b.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    f = 1,
    c = null,
    d = 3,
    m = !1,
    y = !1,
    w = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(b) {
    for (var A = n(u); A !== null;) {
      if (A.callback === null) r(u);
      else if (A.startTime <= b)
        (r(u), (A.sortIndex = A.expirationTime), t(l, A));
      else break;
      A = n(u);
    }
  }
  function x(b) {
    if (((w = !1), p(b), !y))
      if (n(l) !== null) ((y = !0), Z(C));
      else {
        var A = n(u);
        A !== null && Pe(x, A.startTime - b);
      }
  }
  function C(b, A) {
    ((y = !1), w && ((w = !1), g(T), (T = -1)), (m = !0));
    var $ = d;
    try {
      for (
        p(A), c = n(l);
        c !== null && (!(c.expirationTime > A) || (b && !re()));
      ) {
        var I = c.callback;
        if (typeof I == "function") {
          ((c.callback = null), (d = c.priorityLevel));
          var N = I(c.expirationTime <= A);
          ((A = e.unstable_now()),
            typeof N == "function" ? (c.callback = N) : c === n(l) && r(l),
            p(A));
        } else r(l);
        c = n(l);
      }
      if (c !== null) var wt = !0;
      else {
        var Ve = n(u);
        (Ve !== null && Pe(x, Ve.startTime - A), (wt = !1));
      }
      return wt;
    } finally {
      ((c = null), (d = $), (m = !1));
    }
  }
  var P = !1,
    E = null,
    T = -1,
    M = 5,
    D = -1;
  function re() {
    return !(e.unstable_now() - D < M);
  }
  function de() {
    if (E !== null) {
      var b = e.unstable_now();
      D = b;
      var A = !0;
      try {
        A = E(!0, b);
      } finally {
        A ? xe() : ((P = !1), (E = null));
      }
    } else P = !1;
  }
  var xe;
  if (typeof h == "function")
    xe = function () {
      h(de);
    };
  else if (typeof MessageChannel < "u") {
    var le = new MessageChannel(),
      vt = le.port2;
    ((le.port1.onmessage = de),
      (xe = function () {
        vt.postMessage(null);
      }));
  } else
    xe = function () {
      k(de, 0);
    };
  function Z(b) {
    ((E = b), P || ((P = !0), xe()));
  }
  function Pe(b, A) {
    T = k(function () {
      b(e.unstable_now());
    }, A);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || m || ((y = !0), Z(C));
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (M = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (b) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = d;
      }
      var $ = d;
      d = A;
      try {
        return b();
      } finally {
        d = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, A) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var $ = d;
      d = b;
      try {
        return A();
      } finally {
        d = $;
      }
    }),
    (e.unstable_scheduleCallback = function (b, A, $) {
      var I = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? I + $ : I))
          : ($ = I),
        b)
      ) {
        case 1:
          var N = -1;
          break;
        case 2:
          N = 250;
          break;
        case 5:
          N = 1073741823;
          break;
        case 4:
          N = 1e4;
          break;
        default:
          N = 5e3;
      }
      return (
        (N = $ + N),
        (b = {
          id: f++,
          callback: A,
          priorityLevel: b,
          startTime: $,
          expirationTime: N,
          sortIndex: -1,
        }),
        $ > I
          ? ((b.sortIndex = $),
            t(u, b),
            n(l) === null &&
              b === n(u) &&
              (w ? (g(T), (T = -1)) : (w = !0), Pe(x, $ - I)))
          : ((b.sortIndex = N), t(l, b), y || m || ((y = !0), Z(C))),
        b
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (b) {
      var A = d;
      return function () {
        var $ = d;
        d = A;
        try {
          return b.apply(this, arguments);
        } finally {
          d = $;
        }
      };
    }));
})(Qh);
Kh.exports = Qh;
var Ey = Kh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ty = S,
  Ke = Ey;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Yh = new Set(),
  ki = {};
function Gn(e, t) {
  (Cr(e, t), Cr(e + "Capture", t));
}
function Cr(e, t) {
  for (ki[e] = t, e = 0; e < t.length; e++) Yh.add(t[e]);
}
var $t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  nl = Object.prototype.hasOwnProperty,
  _y =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qc = {},
  Yc = {};
function by(e) {
  return nl.call(Yc, e)
    ? !0
    : nl.call(Qc, e)
      ? !1
      : _y.test(e)
        ? (Yc[e] = !0)
        : ((Qc[e] = !0), !1);
}
function Ry(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function jy(e, t, n, r) {
  if (t === null || typeof t > "u" || Ry(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ie(e, t, n, r, i, o, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s));
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Ie(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ce[t] = new Ie(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ce[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ce[e] = new Ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ce[e] = new Ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ce[e] = new Ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ce[e] = new Ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ce[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Pu = /[\-:]([a-z])/g;
function Eu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Pu, Eu);
    Ce[t] = new Ie(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Pu, Eu);
    Ce[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Pu, Eu);
  Ce[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ce[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new Ie(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ce[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Tu(e, t, n, r) {
  var i = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (jy(t, n, i, r) && (n = null),
    r || i === null
      ? by(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Bt = Ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  io = Symbol.for("react.element"),
  er = Symbol.for("react.portal"),
  tr = Symbol.for("react.fragment"),
  _u = Symbol.for("react.strict_mode"),
  rl = Symbol.for("react.profiler"),
  Xh = Symbol.for("react.provider"),
  Jh = Symbol.for("react.context"),
  bu = Symbol.for("react.forward_ref"),
  il = Symbol.for("react.suspense"),
  ol = Symbol.for("react.suspense_list"),
  Ru = Symbol.for("react.memo"),
  Kt = Symbol.for("react.lazy"),
  Zh = Symbol.for("react.offscreen"),
  Xc = Symbol.iterator;
function Gr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xc && e[Xc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ne = Object.assign,
  ha;
function ni(e) {
  if (ha === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ha = (t && t[1]) || "";
    }
  return (
    `
` +
    ha +
    e
  );
}
var pa = !1;
function ma(e, t) {
  if (!e || pa) return "";
  pa = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];
      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    ((pa = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? ni(e) : "";
}
function Ly(e) {
  switch (e.tag) {
    case 5:
      return ni(e.type);
    case 16:
      return ni("Lazy");
    case 13:
      return ni("Suspense");
    case 19:
      return ni("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = ma(e.type, !1)), e);
    case 11:
      return ((e = ma(e.type.render, !1)), e);
    case 1:
      return ((e = ma(e.type, !0)), e);
    default:
      return "";
  }
}
function sl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case tr:
      return "Fragment";
    case er:
      return "Portal";
    case rl:
      return "Profiler";
    case _u:
      return "StrictMode";
    case il:
      return "Suspense";
    case ol:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Jh:
        return (e.displayName || "Context") + ".Consumer";
      case Xh:
        return (e._context.displayName || "Context") + ".Provider";
      case bu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ru:
        return (
          (t = e.displayName || null),
          t !== null ? t : sl(e.type) || "Memo"
        );
      case Kt:
        ((t = e._payload), (e = e._init));
        try {
          return sl(e(t));
        } catch {}
    }
  return null;
}
function Ay(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return sl(t);
    case 8:
      return t === _u ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function hn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function qh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function My(e) {
  var t = qh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          ((r = "" + s), o.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function oo(e) {
  e._valueTracker || (e._valueTracker = My(e));
}
function ep(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = qh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Go(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function al(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Jc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = hn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function tp(e, t) {
  ((t = t.checked), t != null && Tu(e, "checked", t, !1));
}
function ll(e, t) {
  tp(e, t);
  var n = hn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? ul(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ul(e, t.type, hn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Zc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(
      (r !== "submit" && r !== "reset") ||
      (t.value !== void 0 && t.value !== null)
    ))
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function ul(e, t, n) {
  (t !== "number" || Go(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ri = Array.isArray;
function yr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + hn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function cl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function qc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (ri(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: hn(n) };
}
function np(e, t) {
  var n = hn(t.value),
    r = hn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function ef(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function rp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? rp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var so,
  ip = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        so = so || document.createElement("div"),
          so.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = so.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild;) e.appendChild(t.firstChild);
    }
  });
function Ci(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var li = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Dy = ["Webkit", "ms", "Moz", "O"];
Object.keys(li).forEach(function (e) {
  Dy.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (li[t] = li[e]));
  });
});
function op(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (li.hasOwnProperty(e) && li[e])
      ? ("" + t).trim()
      : t + "px";
}
function sp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = op(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var Iy = ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function dl(e, t) {
  if (t) {
    if (Iy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function hl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var pl = null;
function ju(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ml = null,
  vr = null,
  wr = null;
function tf(e) {
  if ((e = Yi(e))) {
    if (typeof ml != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Fs(t)), ml(e.stateNode, e.type, t));
  }
}
function ap(e) {
  vr ? (wr ? wr.push(e) : (wr = [e])) : (vr = e);
}
function lp() {
  if (vr) {
    var e = vr,
      t = wr;
    if (((wr = vr = null), tf(e), t)) for (e = 0; e < t.length; e++) tf(t[e]);
  }
}
function up(e, t) {
  return e(t);
}
function cp() {}
var ga = !1;
function fp(e, t, n) {
  if (ga) return e(t, n);
  ga = !0;
  try {
    return up(e, t, n);
  } finally {
    ((ga = !1), (vr !== null || wr !== null) && (cp(), lp()));
  }
}
function Pi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var gl = !1;
if ($t)
  try {
    var Kr = {};
    (Object.defineProperty(Kr, "passive", {
      get: function () {
        gl = !0;
      },
    }),
      window.addEventListener("test", Kr, Kr),
      window.removeEventListener("test", Kr, Kr));
  } catch {
    gl = !1;
  }
function Vy(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var ui = !1,
  Ko = null,
  Qo = !1,
  yl = null,
  $y = {
    onError: function (e) {
      ((ui = !0), (Ko = e));
    },
  };
function Fy(e, t, n, r, i, o, s, a, l) {
  ((ui = !1), (Ko = null), Vy.apply($y, arguments));
}
function zy(e, t, n, r, i, o, s, a, l) {
  if ((Fy.apply(this, arguments), ui)) {
    if (ui) {
      var u = Ko;
      ((ui = !1), (Ko = null));
    } else throw Error(_(198));
    Qo || ((Qo = !0), (yl = u));
  }
}
function Kn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return;) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function dp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function nf(e) {
  if (Kn(e) !== e) throw Error(_(188));
}
function Ny(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Kn(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ;) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o;) {
        if (o === n) return (nf(i), e);
        if (o === r) return (nf(i), t);
        o = o.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) ((n = i), (r = o));
    else {
      for (var s = !1, a = i.child; a;) {
        if (a === n) {
          ((s = !0), (n = i), (r = o));
          break;
        }
        if (a === r) {
          ((s = !0), (r = i), (n = o));
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a;) {
          if (a === n) {
            ((s = !0), (n = o), (r = i));
            break;
          }
          if (a === r) {
            ((s = !0), (r = o), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function hp(e) {
  return ((e = Ny(e)), e !== null ? pp(e) : null);
}
function pp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = pp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var mp = Ke.unstable_scheduleCallback,
  rf = Ke.unstable_cancelCallback,
  Oy = Ke.unstable_shouldYield,
  By = Ke.unstable_requestPaint,
  se = Ke.unstable_now,
  Uy = Ke.unstable_getCurrentPriorityLevel,
  Lu = Ke.unstable_ImmediatePriority,
  gp = Ke.unstable_UserBlockingPriority,
  Yo = Ke.unstable_NormalPriority,
  Wy = Ke.unstable_LowPriority,
  yp = Ke.unstable_IdlePriority,
  Ds = null,
  Pt = null;
function Hy(e) {
  if (Pt && typeof Pt.onCommitFiberRoot == "function")
    try {
      Pt.onCommitFiberRoot(Ds, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var pt = Math.clz32 ? Math.clz32 : Qy,
  Gy = Math.log,
  Ky = Math.LN2;
function Qy(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Gy(e) / Ky) | 0)) | 0);
}
var ao = 64,
  lo = 4194304;
function ii(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Xo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = ii(a)) : ((o &= s), o !== 0 && (r = ii(o)));
  } else ((s = n & ~i), s !== 0 ? (r = ii(s)) : o !== 0 && (r = ii(o)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t;)
      ((n = 31 - pt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function Yy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Xy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;
  ) {
    var s = 31 - pt(o),
      a = 1 << s,
      l = i[s];
    (l === -1
      ? (!(a & n) || a & r) && (i[s] = Yy(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a));
  }
}
function vl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function vp() {
  var e = ao;
  return ((ao <<= 1), !(ao & 4194240) && (ao = 64), e);
}
function ya(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ki(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - pt(t)),
    (e[t] = n));
}
function Jy(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var i = 31 - pt(n),
      o = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o));
  }
}
function Au(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n;) {
    var r = 31 - pt(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var U = 0;
function wp(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var xp,
  Mu,
  Sp,
  kp,
  Cp,
  wl = !1,
  uo = [],
  tn = null,
  nn = null,
  rn = null,
  Ei = new Map(),
  Ti = new Map(),
  Xt = [],
  Zy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function of(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      tn = null;
      break;
    case "dragenter":
    case "dragleave":
      nn = null;
      break;
    case "mouseover":
    case "mouseout":
      rn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ei.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ti.delete(t.pointerId);
  }
}
function Qr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Yi(t)), t !== null && Mu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function qy(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((tn = Qr(tn, e, t, n, r, i)), !0);
    case "dragenter":
      return ((nn = Qr(nn, e, t, n, r, i)), !0);
    case "mouseover":
      return ((rn = Qr(rn, e, t, n, r, i)), !0);
    case "pointerover":
      var o = i.pointerId;
      return (Ei.set(o, Qr(Ei.get(o) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (o = i.pointerId),
        Ti.set(o, Qr(Ti.get(o) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function Pp(e) {
  var t = jn(e.target);
  if (t !== null) {
    var n = Kn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = dp(n)), t !== null)) {
          ((e.blockedOn = t),
            Cp(e.priority, function () {
              Sp(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ro(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((pl = r), n.target.dispatchEvent(r), (pl = null));
    } else return ((t = Yi(n)), t !== null && Mu(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function sf(e, t, n) {
  Ro(e) && n.delete(t);
}
function ev() {
  ((wl = !1),
    tn !== null && Ro(tn) && (tn = null),
    nn !== null && Ro(nn) && (nn = null),
    rn !== null && Ro(rn) && (rn = null),
    Ei.forEach(sf),
    Ti.forEach(sf));
}
function Yr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    wl ||
      ((wl = !0),
      Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, ev)));
}
function _i(e) {
  function t(i) {
    return Yr(i, e);
  }
  if (0 < uo.length) {
    Yr(uo[0], e);
    for (var n = 1; n < uo.length; n++) {
      var r = uo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    tn !== null && Yr(tn, e),
      nn !== null && Yr(nn, e),
      rn !== null && Yr(rn, e),
      Ei.forEach(t),
      Ti.forEach(t),
      n = 0;
    n < Xt.length;
    n++
  )
    ((r = Xt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Xt.length && ((n = Xt[0]), n.blockedOn === null);)
    (Pp(n), n.blockedOn === null && Xt.shift());
}
var xr = Bt.ReactCurrentBatchConfig,
  Jo = !0;
function tv(e, t, n, r) {
  var i = U,
    o = xr.transition;
  xr.transition = null;
  try {
    ((U = 1), Du(e, t, n, r));
  } finally {
    ((U = i), (xr.transition = o));
  }
}
function nv(e, t, n, r) {
  var i = U,
    o = xr.transition;
  xr.transition = null;
  try {
    ((U = 4), Du(e, t, n, r));
  } finally {
    ((U = i), (xr.transition = o));
  }
}
function Du(e, t, n, r) {
  if (Jo) {
    var i = xl(e, t, n, r);
    if (i === null) (_a(e, t, r, Zo, n), of(e, r));
    else if (qy(i, e, t, n, r)) r.stopPropagation();
    else if ((of(e, r), t & 4 && -1 < Zy.indexOf(e))) {
      for (; i !== null;) {
        var o = Yi(i);
        if (
          (o !== null && xp(o),
          (o = xl(e, t, n, r)),
          o === null && _a(e, t, r, Zo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else _a(e, t, r, null, n);
  }
}
var Zo = null;
function xl(e, t, n, r) {
  if (((Zo = null), (e = ju(r)), (e = jn(e)), e !== null))
    if (((t = Kn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = dp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Zo = e), null);
}
function Ep(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Uy()) {
        case Lu:
          return 1;
        case gp:
          return 4;
        case Yo:
        case Wy:
          return 16;
        case yp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Zt = null,
  Iu = null,
  jo = null;
function Tp() {
  if (jo) return jo;
  var e,
    t = Iu,
    n = t.length,
    r,
    i = "value" in Zt ? Zt.value : Zt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (jo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Lo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function co() {
  return !0;
}
function af() {
  return !1;
}
function Xe(e) {
  function t(n, r, i, o, s) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? co
        : af),
      (this.isPropagationStopped = af),
      this
    );
  }
  return (
    ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = co));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = co));
      },
      persist: function () {},
      isPersistent: co,
    }),
    t
  );
}
var zr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Vu = Xe(zr),
  Qi = ne({}, zr, { view: 0, detail: 0 }),
  rv = Xe(Qi),
  va,
  wa,
  Xr,
  Is = ne({}, Qi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: $u,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Xr &&
            (Xr && e.type === "mousemove"
              ? ((va = e.screenX - Xr.screenX), (wa = e.screenY - Xr.screenY))
              : (wa = va = 0),
            (Xr = e)),
          va);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : wa;
    },
  }),
  lf = Xe(Is),
  iv = ne({}, Is, { dataTransfer: 0 }),
  ov = Xe(iv),
  sv = ne({}, Qi, { relatedTarget: 0 }),
  xa = Xe(sv),
  av = ne({}, zr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lv = Xe(av),
  uv = ne({}, zr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  cv = Xe(uv),
  fv = ne({}, zr, { data: 0 }),
  uf = Xe(fv),
  dv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  hv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  pv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function mv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pv[e]) ? !!t[e] : !1;
}
function $u() {
  return mv;
}
var gv = ne({}, Qi, {
    key: function (e) {
      if (e.key) {
        var t = dv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Lo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? hv[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $u,
    charCode: function (e) {
      return e.type === "keypress" ? Lo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Lo(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  yv = Xe(gv),
  vv = ne({}, Is, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  cf = Xe(vv),
  wv = ne({}, Qi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $u,
  }),
  xv = Xe(wv),
  Sv = ne({}, zr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kv = Xe(Sv),
  Cv = ne({}, Is, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Pv = Xe(Cv),
  Ev = [9, 13, 27, 32],
  Fu = $t && "CompositionEvent" in window,
  ci = null;
$t && "documentMode" in document && (ci = document.documentMode);
var Tv = $t && "TextEvent" in window && !ci,
  _p = $t && (!Fu || (ci && 8 < ci && 11 >= ci)),
  ff = " ",
  df = !1;
function bp(e, t) {
  switch (e) {
    case "keyup":
      return Ev.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Rp(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var nr = !1;
function _v(e, t) {
  switch (e) {
    case "compositionend":
      return Rp(t);
    case "keypress":
      return t.which !== 32 ? null : ((df = !0), ff);
    case "textInput":
      return ((e = t.data), e === ff && df ? null : e);
    default:
      return null;
  }
}
function bv(e, t) {
  if (nr)
    return e === "compositionend" || (!Fu && bp(e, t))
      ? ((e = Tp()), (jo = Iu = Zt = null), (nr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return _p && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Rv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function hf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Rv[e.type] : t === "textarea";
}
function jp(e, t, n, r) {
  (ap(r),
    (t = qo(t, "onChange")),
    0 < t.length &&
      ((n = new Vu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var fi = null,
  bi = null;
function jv(e) {
  Op(e, 0);
}
function Vs(e) {
  var t = or(e);
  if (ep(t)) return e;
}
function Lv(e, t) {
  if (e === "change") return t;
}
var Lp = !1;
if ($t) {
  var Sa;
  if ($t) {
    var ka = "oninput" in document;
    if (!ka) {
      var pf = document.createElement("div");
      (pf.setAttribute("oninput", "return;"),
        (ka = typeof pf.oninput == "function"));
    }
    Sa = ka;
  } else Sa = !1;
  Lp = Sa && (!document.documentMode || 9 < document.documentMode);
}
function mf() {
  fi && (fi.detachEvent("onpropertychange", Ap), (bi = fi = null));
}
function Ap(e) {
  if (e.propertyName === "value" && Vs(bi)) {
    var t = [];
    (jp(t, bi, e, ju(e)), fp(jv, t));
  }
}
function Av(e, t, n) {
  e === "focusin"
    ? (mf(), (fi = t), (bi = n), fi.attachEvent("onpropertychange", Ap))
    : e === "focusout" && mf();
}
function Mv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Vs(bi);
}
function Dv(e, t) {
  if (e === "click") return Vs(t);
}
function Iv(e, t) {
  if (e === "input" || e === "change") return Vs(t);
}
function Vv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var yt = typeof Object.is == "function" ? Object.is : Vv;
function Ri(e, t) {
  if (yt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!nl.call(t, i) || !yt(e[i], t[i])) return !1;
  }
  return !0;
}
function gf(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e;
}
function yf(e, t) {
  var n = gf(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = gf(n);
  }
}
function Mp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Mp(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Dp() {
  for (var e = window, t = Go(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Go(e.document);
  }
  return t;
}
function zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function $v(e) {
  var t = Dp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Mp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        ((r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = yf(n, o)));
        var s = yf(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode);)
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Fv = $t && "documentMode" in document && 11 >= document.documentMode,
  rr = null,
  Sl = null,
  di = null,
  kl = !1;
function vf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  kl ||
    rr == null ||
    rr !== Go(r) ||
    ((r = rr),
    "selectionStart" in r && zu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (di && Ri(di, r)) ||
      ((di = r),
      (r = qo(Sl, "onSelect")),
      0 < r.length &&
        ((t = new Vu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = rr))));
}
function fo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ir = {
    animationend: fo("Animation", "AnimationEnd"),
    animationiteration: fo("Animation", "AnimationIteration"),
    animationstart: fo("Animation", "AnimationStart"),
    transitionend: fo("Transition", "TransitionEnd"),
  },
  Ca = {},
  Ip = {};
$t &&
  ((Ip = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ir.animationend.animation,
    delete ir.animationiteration.animation,
    delete ir.animationstart.animation),
  "TransitionEvent" in window || delete ir.transitionend.transition);
function $s(e) {
  if (Ca[e]) return Ca[e];
  if (!ir[e]) return e;
  var t = ir[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ip) return (Ca[e] = t[n]);
  return e;
}
var Vp = $s("animationend"),
  $p = $s("animationiteration"),
  Fp = $s("animationstart"),
  zp = $s("transitionend"),
  Np = new Map(),
  wf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function yn(e, t) {
  (Np.set(e, t), Gn(t, [e]));
}
for (var Pa = 0; Pa < wf.length; Pa++) {
  var Ea = wf[Pa],
    zv = Ea.toLowerCase(),
    Nv = Ea[0].toUpperCase() + Ea.slice(1);
  yn(zv, "on" + Nv);
}
yn(Vp, "onAnimationEnd");
yn($p, "onAnimationIteration");
yn(Fp, "onAnimationStart");
yn("dblclick", "onDoubleClick");
yn("focusin", "onFocus");
yn("focusout", "onBlur");
yn(zp, "onTransitionEnd");
Cr("onMouseEnter", ["mouseout", "mouseover"]);
Cr("onMouseLeave", ["mouseout", "mouseover"]);
Cr("onPointerEnter", ["pointerout", "pointerover"]);
Cr("onPointerLeave", ["pointerout", "pointerover"]);
Gn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Gn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Gn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Gn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var oi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Ov = new Set("cancel close invalid load scroll toggle".split(" ").concat(oi));
function xf(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), zy(r, t, void 0, e), (e.currentTarget = null));
}
function Op(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          (xf(i, a, u), (o = l));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          (xf(i, a, u), (o = l));
        }
    }
  }
  if (Qo) throw ((e = yl), (Qo = !1), (yl = null), e);
}
function Q(e, t) {
  var n = t[_l];
  n === void 0 && (n = t[_l] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Bp(t, e, 2, !1), n.add(r));
}
function Ta(e, t, n) {
  var r = 0;
  (t && (r |= 4), Bp(n, e, r, t));
}
var ho = "_reactListening" + Math.random().toString(36).slice(2);
function ji(e) {
  if (!e[ho]) {
    ((e[ho] = !0),
      Yh.forEach(function (n) {
        n !== "selectionchange" && (Ov.has(n) || Ta(n, !1, e), Ta(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ho] || ((t[ho] = !0), Ta("selectionchange", !1, t));
  }
}
function Bp(e, t, n, r) {
  switch (Ep(t)) {
    case 1:
      var i = tv;
      break;
    case 4:
      i = nv;
      break;
    default:
      i = Du;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !gl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function _a(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null;) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null;) {
          if (((s = jn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  fp(function () {
    var u = o,
      f = ju(n),
      c = [];
    e: {
      var d = Np.get(e);
      if (d !== void 0) {
        var m = Vu,
          y = e;
        switch (e) {
          case "keypress":
            if (Lo(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = yv;
            break;
          case "focusin":
            ((y = "focus"), (m = xa));
            break;
          case "focusout":
            ((y = "blur"), (m = xa));
            break;
          case "beforeblur":
          case "afterblur":
            m = xa;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = lf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = ov;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = xv;
            break;
          case Vp:
          case $p:
          case Fp:
            m = lv;
            break;
          case zp:
            m = kv;
            break;
          case "scroll":
            m = rv;
            break;
          case "wheel":
            m = Pv;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = cv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = cf;
        }
        var w = (t & 4) !== 0,
          k = !w && e === "scroll",
          g = w ? (d !== null ? d + "Capture" : null) : d;
        w = [];
        for (var h = u, p; h !== null;) {
          p = h;
          var x = p.stateNode;
          if (
            (p.tag === 5 &&
              x !== null &&
              ((p = x),
              g !== null && ((x = Pi(h, g)), x != null && w.push(Li(h, x, p)))),
            k)
          )
            break;
          h = h.return;
        }
        0 < w.length &&
          ((d = new m(d, y, null, n, f)), c.push({ event: d, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          d &&
            n !== pl &&
            (y = n.relatedTarget || n.fromElement) &&
            (jn(y) || y[Ft]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = u),
              (y = y ? jn(y) : null),
              y !== null &&
                ((k = Kn(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((w = lf),
            (x = "onMouseLeave"),
            (g = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = cf),
              (x = "onPointerLeave"),
              (g = "onPointerEnter"),
              (h = "pointer")),
            (k = m == null ? d : or(m)),
            (p = y == null ? d : or(y)),
            (d = new w(x, h + "leave", m, n, f)),
            (d.target = k),
            (d.relatedTarget = p),
            (x = null),
            jn(f) === u &&
              ((w = new w(g, h + "enter", y, n, f)),
              (w.target = p),
              (w.relatedTarget = k),
              (x = w)),
            (k = x),
            m && y)
          )
            t: {
              for (w = m, g = y, h = 0, p = w; p; p = Jn(p)) h++;
              for (p = 0, x = g; x; x = Jn(x)) p++;
              for (; 0 < h - p;) ((w = Jn(w)), h--);
              for (; 0 < p - h;) ((g = Jn(g)), p--);
              for (; h--;) {
                if (w === g || (g !== null && w === g.alternate)) break t;
                ((w = Jn(w)), (g = Jn(g)));
              }
              w = null;
            }
          else w = null;
          (m !== null && Sf(c, d, m, w, !1),
            y !== null && k !== null && Sf(c, k, y, w, !0));
        }
      }
      e: {
        if (
          ((d = u ? or(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var C = Lv;
        else if (hf(d))
          if (Lp) C = Iv;
          else {
            C = Mv;
            var P = Av;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (C = Dv);
        if (C && (C = C(e, u))) {
          jp(c, C, n, f);
          break e;
        }
        (P && P(e, d, u),
          e === "focusout" &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === "number" &&
            ul(d, "number", d.value));
      }
      switch (((P = u ? or(u) : window), e)) {
        case "focusin":
          (hf(P) || P.contentEditable === "true") &&
            ((rr = P), (Sl = u), (di = null));
          break;
        case "focusout":
          di = Sl = rr = null;
          break;
        case "mousedown":
          kl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((kl = !1), vf(c, n, f));
          break;
        case "selectionchange":
          if (Fv) break;
        case "keydown":
        case "keyup":
          vf(c, n, f);
      }
      var E;
      if (Fu)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        nr
          ? bp(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      (T &&
        (_p &&
          n.locale !== "ko" &&
          (nr || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && nr && (E = Tp())
            : ((Zt = f),
              (Iu = "value" in Zt ? Zt.value : Zt.textContent),
              (nr = !0))),
        (P = qo(u, T)),
        0 < P.length &&
          ((T = new uf(T, e, null, n, f)),
          c.push({ event: T, listeners: P }),
          E ? (T.data = E) : ((E = Rp(n)), E !== null && (T.data = E)))),
        (E = Tv ? _v(e, n) : bv(e, n)) &&
          ((u = qo(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new uf("onBeforeInput", "beforeinput", null, n, f)),
            c.push({ event: f, listeners: u }),
            (f.data = E))));
    }
    Op(c, t);
  });
}
function Li(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qo(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var i = e,
      o = i.stateNode;
    (i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Pi(e, n)),
      o != null && r.unshift(Li(e, o, i)),
      (o = Pi(e, t)),
      o != null && r.push(Li(e, o, i))),
      (e = e.return));
  }
  return r;
}
function Jn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Sf(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r;) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Pi(n, o)), l != null && s.unshift(Li(n, l, a)))
        : i || ((l = Pi(n, o)), l != null && s.push(Li(n, l, a)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Bv = /\r\n?/g,
  Uv = /\u0000|\uFFFD/g;
function kf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bv,
      `
`,
    )
    .replace(Uv, "");
}
function po(e, t, n) {
  if (((t = kf(t)), kf(e) !== t && n)) throw Error(_(425));
}
function es() {}
var Cl = null,
  Pl = null;
function El(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Tl = typeof setTimeout == "function" ? setTimeout : void 0,
  Wv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Cf = typeof Promise == "function" ? Promise : void 0,
  Hv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Cf < "u"
        ? function (e) {
            return Cf.resolve(null).then(e).catch(Gv);
          }
        : Tl;
function Gv(e) {
  setTimeout(function () {
    throw e;
  });
}
function ba(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), _i(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  _i(t);
}
function on(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Pf(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Nr = Math.random().toString(36).slice(2),
  Ct = "__reactFiber$" + Nr,
  Ai = "__reactProps$" + Nr,
  Ft = "__reactContainer$" + Nr,
  _l = "__reactEvents$" + Nr,
  Kv = "__reactListeners$" + Nr,
  Qv = "__reactHandles$" + Nr;
function jn(e) {
  var t = e[Ct];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if ((t = n[Ft] || n[Ct])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Pf(e); e !== null;) {
          if ((n = e[Ct])) return n;
          e = Pf(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Yi(e) {
  return (
    (e = e[Ct] || e[Ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function or(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Fs(e) {
  return e[Ai] || null;
}
var bl = [],
  sr = -1;
function vn(e) {
  return { current: e };
}
function X(e) {
  0 > sr || ((e.current = bl[sr]), (bl[sr] = null), sr--);
}
function H(e, t) {
  (sr++, (bl[sr] = e.current), (e.current = t));
}
var pn = {},
  Re = vn(pn),
  ze = vn(!1),
  zn = pn;
function Pr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ne(e) {
  return ((e = e.childContextTypes), e != null);
}
function ts() {
  (X(ze), X(Re));
}
function Ef(e, t, n) {
  if (Re.current !== pn) throw Error(_(168));
  (H(Re, t), H(ze, n));
}
function Up(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(_(108, Ay(e) || "Unknown", i));
  return ne({}, n, r);
}
function ns(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pn),
    (zn = Re.current),
    H(Re, e),
    H(ze, ze.current),
    !0
  );
}
function Tf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  (n
    ? ((e = Up(e, t, zn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      X(ze),
      X(Re),
      H(Re, e))
    : X(ze),
    H(ze, n));
}
var jt = null,
  zs = !1,
  Ra = !1;
function Wp(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function Yv(e) {
  ((zs = !0), Wp(e));
}
function wn() {
  if (!Ra && jt !== null) {
    Ra = !0;
    var e = 0,
      t = U;
    try {
      var n = jt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((jt = null), (zs = !1));
    } catch (i) {
      throw (jt !== null && (jt = jt.slice(e + 1)), mp(Lu, wn), i);
    } finally {
      ((U = t), (Ra = !1));
    }
  }
  return null;
}
var ar = [],
  lr = 0,
  rs = null,
  is = 0,
  tt = [],
  nt = 0,
  Nn = null,
  Lt = 1,
  At = "";
function Pn(e, t) {
  ((ar[lr++] = is), (ar[lr++] = rs), (rs = e), (is = t));
}
function Hp(e, t, n) {
  ((tt[nt++] = Lt), (tt[nt++] = At), (tt[nt++] = Nn), (Nn = e));
  var r = Lt;
  e = At;
  var i = 32 - pt(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var o = 32 - pt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    ((o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Lt = (1 << (32 - pt(t) + i)) | (n << i) | r),
      (At = o + e));
  } else ((Lt = (1 << o) | (n << i) | r), (At = e));
}
function Nu(e) {
  e.return !== null && (Pn(e, 1), Hp(e, 1, 0));
}
function Ou(e) {
  for (; e === rs;)
    ((rs = ar[--lr]), (ar[lr] = null), (is = ar[--lr]), (ar[lr] = null));
  for (; e === Nn;)
    ((Nn = tt[--nt]),
      (tt[nt] = null),
      (At = tt[--nt]),
      (tt[nt] = null),
      (Lt = tt[--nt]),
      (tt[nt] = null));
}
var Ge = null,
  He = null,
  J = !1,
  ht = null;
function Gp(e, t) {
  var n = rt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function _f(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ge = e), (He = on(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ge = e), (He = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Nn !== null ? { id: Lt, overflow: At } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ge = e),
            (He = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Rl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function jl(e) {
  if (J) {
    var t = He;
    if (t) {
      var n = t;
      if (!_f(e, t)) {
        if (Rl(e)) throw Error(_(418));
        t = on(n.nextSibling);
        var r = Ge;
        t && _f(e, t)
          ? Gp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (J = !1), (Ge = e));
      }
    } else {
      if (Rl(e)) throw Error(_(418));
      ((e.flags = (e.flags & -4097) | 2), (J = !1), (Ge = e));
    }
  }
}
function bf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return;
  Ge = e;
}
function mo(e) {
  if (e !== Ge) return !1;
  if (!J) return (bf(e), (J = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !El(e.type, e.memoizedProps))),
    t && (t = He))
  ) {
    if (Rl(e)) throw (Kp(), Error(_(418)));
    for (; t;) (Gp(e, t), (t = on(t.nextSibling)));
  }
  if ((bf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              He = on(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      He = null;
    }
  } else He = Ge ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function Kp() {
  for (var e = He; e;) e = on(e.nextSibling);
}
function Er() {
  ((He = Ge = null), (J = !1));
}
function Bu(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
var Xv = Bt.ReactCurrentBatchConfig;
function Jr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function go(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Rf(e) {
  var t = e._init;
  return t(e._payload);
}
function Qp(e) {
  function t(g, h) {
    if (e) {
      var p = g.deletions;
      p === null ? ((g.deletions = [h]), (g.flags |= 16)) : p.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null;) (t(g, h), (h = h.sibling));
    return null;
  }
  function r(g, h) {
    for (g = new Map(); h !== null;)
      (h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling));
    return g;
  }
  function i(g, h) {
    return ((g = un(g, h)), (g.index = 0), (g.sibling = null), g);
  }
  function o(g, h, p) {
    return (
      (g.index = p),
      e
        ? ((p = g.alternate),
          p !== null
            ? ((p = p.index), p < h ? ((g.flags |= 2), h) : p)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function s(g) {
    return (e && g.alternate === null && (g.flags |= 2), g);
  }
  function a(g, h, p, x) {
    return h === null || h.tag !== 6
      ? ((h = Va(p, g.mode, x)), (h.return = g), h)
      : ((h = i(h, p)), (h.return = g), h);
  }
  function l(g, h, p, x) {
    var C = p.type;
    return C === tr
      ? f(g, h, p.props.children, x, p.key)
      : h !== null &&
          (h.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === Kt &&
              Rf(C) === h.type))
        ? ((x = i(h, p.props)), (x.ref = Jr(g, h, p)), (x.return = g), x)
        : ((x = Fo(p.type, p.key, p.props, null, g.mode, x)),
          (x.ref = Jr(g, h, p)),
          (x.return = g),
          x);
  }
  function u(g, h, p, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== p.containerInfo ||
      h.stateNode.implementation !== p.implementation
      ? ((h = $a(p, g.mode, x)), (h.return = g), h)
      : ((h = i(h, p.children || [])), (h.return = g), h);
  }
  function f(g, h, p, x, C) {
    return h === null || h.tag !== 7
      ? ((h = Vn(p, g.mode, x, C)), (h.return = g), h)
      : ((h = i(h, p)), (h.return = g), h);
  }
  function c(g, h, p) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return ((h = Va("" + h, g.mode, p)), (h.return = g), h);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case io:
          return (
            (p = Fo(h.type, h.key, h.props, null, g.mode, p)),
            (p.ref = Jr(g, null, h)),
            (p.return = g),
            p
          );
        case er:
          return ((h = $a(h, g.mode, p)), (h.return = g), h);
        case Kt:
          var x = h._init;
          return c(g, x(h._payload), p);
      }
      if (ri(h) || Gr(h))
        return ((h = Vn(h, g.mode, p, null)), (h.return = g), h);
      go(g, h);
    }
    return null;
  }
  function d(g, h, p, x) {
    var C = h !== null ? h.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return C !== null ? null : a(g, h, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case io:
          return p.key === C ? l(g, h, p, x) : null;
        case er:
          return p.key === C ? u(g, h, p, x) : null;
        case Kt:
          return ((C = p._init), d(g, h, C(p._payload), x));
      }
      if (ri(p) || Gr(p)) return C !== null ? null : f(g, h, p, x, null);
      go(g, p);
    }
    return null;
  }
  function m(g, h, p, x, C) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return ((g = g.get(p) || null), a(h, g, "" + x, C));
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case io:
          return (
            (g = g.get(x.key === null ? p : x.key) || null),
            l(h, g, x, C)
          );
        case er:
          return (
            (g = g.get(x.key === null ? p : x.key) || null),
            u(h, g, x, C)
          );
        case Kt:
          var P = x._init;
          return m(g, h, p, P(x._payload), C);
      }
      if (ri(x) || Gr(x)) return ((g = g.get(p) || null), f(h, g, x, C, null));
      go(h, x);
    }
    return null;
  }
  function y(g, h, p, x) {
    for (
      var C = null, P = null, E = h, T = (h = 0), M = null;
      E !== null && T < p.length;
      T++
    ) {
      E.index > T ? ((M = E), (E = null)) : (M = E.sibling);
      var D = d(g, E, p[T], x);
      if (D === null) {
        E === null && (E = M);
        break;
      }
      (e && E && D.alternate === null && t(g, E),
        (h = o(D, h, T)),
        P === null ? (C = D) : (P.sibling = D),
        (P = D),
        (E = M));
    }
    if (T === p.length) return (n(g, E), J && Pn(g, T), C);
    if (E === null) {
      for (; T < p.length; T++)
        ((E = c(g, p[T], x)),
          E !== null &&
            ((h = o(E, h, T)),
            P === null ? (C = E) : (P.sibling = E),
            (P = E)));
      return (J && Pn(g, T), C);
    }
    for (E = r(g, E); T < p.length; T++)
      ((M = m(E, g, T, p[T], x)),
        M !== null &&
          (e && M.alternate !== null && E.delete(M.key === null ? T : M.key),
          (h = o(M, h, T)),
          P === null ? (C = M) : (P.sibling = M),
          (P = M)));
    return (
      e &&
        E.forEach(function (re) {
          return t(g, re);
        }),
      J && Pn(g, T),
      C
    );
  }
  function w(g, h, p, x) {
    var C = Gr(p);
    if (typeof C != "function") throw Error(_(150));
    if (((p = C.call(p)), p == null)) throw Error(_(151));
    for (
      var P = (C = null), E = h, T = (h = 0), M = null, D = p.next();
      E !== null && !D.done;
      T++, D = p.next()
    ) {
      E.index > T ? ((M = E), (E = null)) : (M = E.sibling);
      var re = d(g, E, D.value, x);
      if (re === null) {
        E === null && (E = M);
        break;
      }
      (e && E && re.alternate === null && t(g, E),
        (h = o(re, h, T)),
        P === null ? (C = re) : (P.sibling = re),
        (P = re),
        (E = M));
    }
    if (D.done) return (n(g, E), J && Pn(g, T), C);
    if (E === null) {
      for (; !D.done; T++, D = p.next())
        ((D = c(g, D.value, x)),
          D !== null &&
            ((h = o(D, h, T)),
            P === null ? (C = D) : (P.sibling = D),
            (P = D)));
      return (J && Pn(g, T), C);
    }
    for (E = r(g, E); !D.done; T++, D = p.next())
      ((D = m(E, g, T, D.value, x)),
        D !== null &&
          (e && D.alternate !== null && E.delete(D.key === null ? T : D.key),
          (h = o(D, h, T)),
          P === null ? (C = D) : (P.sibling = D),
          (P = D)));
    return (
      e &&
        E.forEach(function (de) {
          return t(g, de);
        }),
      J && Pn(g, T),
      C
    );
  }
  function k(g, h, p, x) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === tr &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case io:
          e: {
            for (var C = p.key, P = h; P !== null;) {
              if (P.key === C) {
                if (((C = p.type), C === tr)) {
                  if (P.tag === 7) {
                    (n(g, P.sibling),
                      (h = i(P, p.props.children)),
                      (h.return = g),
                      (g = h));
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Kt &&
                    Rf(C) === P.type)
                ) {
                  (n(g, P.sibling),
                    (h = i(P, p.props)),
                    (h.ref = Jr(g, P, p)),
                    (h.return = g),
                    (g = h));
                  break e;
                }
                n(g, P);
                break;
              } else t(g, P);
              P = P.sibling;
            }
            p.type === tr
              ? ((h = Vn(p.props.children, g.mode, x, p.key)),
                (h.return = g),
                (g = h))
              : ((x = Fo(p.type, p.key, p.props, null, g.mode, x)),
                (x.ref = Jr(g, h, p)),
                (x.return = g),
                (g = x));
          }
          return s(g);
        case er:
          e: {
            for (P = p.key; h !== null;) {
              if (h.key === P)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === p.containerInfo &&
                  h.stateNode.implementation === p.implementation
                ) {
                  (n(g, h.sibling),
                    (h = i(h, p.children || [])),
                    (h.return = g),
                    (g = h));
                  break e;
                } else {
                  n(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            ((h = $a(p, g.mode, x)), (h.return = g), (g = h));
          }
          return s(g);
        case Kt:
          return ((P = p._init), k(g, h, P(p._payload), x));
      }
      if (ri(p)) return y(g, h, p, x);
      if (Gr(p)) return w(g, h, p, x);
      go(g, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        h !== null && h.tag === 6
          ? (n(g, h.sibling), (h = i(h, p)), (h.return = g), (g = h))
          : (n(g, h), (h = Va(p, g.mode, x)), (h.return = g), (g = h)),
        s(g))
      : n(g, h);
  }
  return k;
}
var Tr = Qp(!0),
  Yp = Qp(!1),
  os = vn(null),
  ss = null,
  ur = null,
  Uu = null;
function Wu() {
  Uu = ur = ss = null;
}
function Hu(e) {
  var t = os.current;
  (X(os), (e._currentValue = t));
}
function Ll(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Sr(e, t) {
  ((ss = e),
    (Uu = ur = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Fe = !0), (e.firstContext = null)));
}
function ot(e) {
  var t = e._currentValue;
  if (Uu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ur === null)) {
      if (ss === null) throw Error(_(308));
      ((ur = e), (ss.dependencies = { lanes: 0, firstContext: e }));
    } else ur = ur.next = e;
  return t;
}
var Ln = null;
function Gu(e) {
  Ln === null ? (Ln = [e]) : Ln.push(e);
}
function Xp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Gu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    zt(e, r)
  );
}
function zt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Qt = !1;
function Ku(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Jp(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Dt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      zt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Gu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    zt(e, n)
  );
}
function Ao(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Au(e, n));
  }
}
function jf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (o === null ? (i = o = s) : (o = o.next = s), (n = n.next));
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function as(e, t, n, r) {
  var i = e.updateQueue;
  Qt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), s === null ? (o = u) : (s.next = u), (s = l));
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== s &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
        (f.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var c = i.baseState;
    ((s = 0), (f = u = l = null), (a = o));
    do {
      var d = a.lane,
        m = a.eventTime;
      if ((r & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            w = a;
          switch (((d = t), (m = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                c = y.call(m, c, d);
                break e;
              }
              c = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (d = typeof y == "function" ? y.call(m, c, d) : y),
                d == null)
              )
                break e;
              c = ne({}, c, d);
              break e;
            case 2:
              Qt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        ((m = {
          eventTime: m,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((u = f = m), (l = c)) : (f = f.next = m),
          (s |= d));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (f === null && (l = c),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((s |= i.lane), (i = i.next));
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    ((Bn |= s), (e.lanes = s), (e.memoizedState = c));
  }
}
function Lf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(_(191, i));
        i.call(r);
      }
    }
}
var Xi = {},
  Et = vn(Xi),
  Mi = vn(Xi),
  Di = vn(Xi);
function An(e) {
  if (e === Xi) throw Error(_(174));
  return e;
}
function Qu(e, t) {
  switch ((H(Di, t), H(Mi, e), H(Et, Xi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fl(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = fl(t, e)));
  }
  (X(Et), H(Et, t));
}
function _r() {
  (X(Et), X(Mi), X(Di));
}
function Zp(e) {
  An(Di.current);
  var t = An(Et.current),
    n = fl(t, e.type);
  t !== n && (H(Mi, e), H(Et, n));
}
function Yu(e) {
  Mi.current === e && (X(Et), X(Mi));
}
var q = vn(0);
function ls(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var ja = [];
function Xu() {
  for (var e = 0; e < ja.length; e++)
    ja[e]._workInProgressVersionPrimary = null;
  ja.length = 0;
}
var Mo = Bt.ReactCurrentDispatcher,
  La = Bt.ReactCurrentBatchConfig,
  On = 0,
  te = null,
  pe = null,
  ge = null,
  us = !1,
  hi = !1,
  Ii = 0,
  Jv = 0;
function Ee() {
  throw Error(_(321));
}
function Ju(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!yt(e[n], t[n])) return !1;
  return !0;
}
function Zu(e, t, n, r, i, o) {
  if (
    ((On = o),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Mo.current = e === null || e.memoizedState === null ? t1 : n1),
    (e = n(r, i)),
    hi)
  ) {
    o = 0;
    do {
      if (((hi = !1), (Ii = 0), 25 <= o)) throw Error(_(301));
      ((o += 1),
        (ge = pe = null),
        (t.updateQueue = null),
        (Mo.current = r1),
        (e = n(r, i)));
    } while (hi);
  }
  if (
    ((Mo.current = cs),
    (t = pe !== null && pe.next !== null),
    (On = 0),
    (ge = pe = te = null),
    (us = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function qu() {
  var e = Ii !== 0;
  return ((Ii = 0), e);
}
function St() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ge === null ? (te.memoizedState = ge = e) : (ge = ge.next = e), ge);
}
function st() {
  if (pe === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = pe.next;
  var t = ge === null ? te.memoizedState : ge.next;
  if (t !== null) ((ge = t), (pe = e));
  else {
    if (e === null) throw Error(_(310));
    ((pe = e),
      (e = {
        memoizedState: pe.memoizedState,
        baseState: pe.baseState,
        baseQueue: pe.baseQueue,
        queue: pe.queue,
        next: null,
      }),
      ge === null ? (te.memoizedState = ge = e) : (ge = ge.next = e));
  }
  return ge;
}
function Vi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Aa(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = pe,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      ((i.next = o.next), (o.next = s));
    }
    ((r.baseQueue = i = o), (n.pending = null));
  }
  if (i !== null) {
    ((o = i.next), (r = r.baseState));
    var a = (s = null),
      l = null,
      u = o;
    do {
      var f = u.lane;
      if ((On & f) === f)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var c = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = c), (s = r)) : (l = l.next = c),
          (te.lanes |= f),
          (Bn |= f));
      }
      u = u.next;
    } while (u !== null && u !== o);
    (l === null ? (s = r) : (l.next = a),
      yt(r, t.memoizedState) || (Fe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((o = i.lane), (te.lanes |= o), (Bn |= o), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ma(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do ((o = e(o, s.action)), (s = s.next));
    while (s !== i);
    (yt(o, t.memoizedState) || (Fe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function qp() {}
function em(e, t) {
  var n = te,
    r = st(),
    i = t(),
    o = !yt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Fe = !0)),
    (r = r.queue),
    ec(rm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ge !== null && ge.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      $i(9, nm.bind(null, n, r, i, t), void 0, null),
      we === null)
    )
      throw Error(_(349));
    On & 30 || tm(n, t, i);
  }
  return i;
}
function tm(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function nm(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), im(t) && om(e));
}
function rm(e, t, n) {
  return n(function () {
    im(t) && om(e);
  });
}
function im(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !yt(e, n);
  } catch {
    return !0;
  }
}
function om(e) {
  var t = zt(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function Af(e) {
  var t = St();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = e1.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function $i(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sm() {
  return st().memoizedState;
}
function Do(e, t, n, r) {
  var i = St();
  ((te.flags |= e),
    (i.memoizedState = $i(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Ns(e, t, n, r) {
  var i = st();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (pe !== null) {
    var s = pe.memoizedState;
    if (((o = s.destroy), r !== null && Ju(r, s.deps))) {
      i.memoizedState = $i(t, n, o, r);
      return;
    }
  }
  ((te.flags |= e), (i.memoizedState = $i(1 | t, n, o, r)));
}
function Mf(e, t) {
  return Do(8390656, 8, e, t);
}
function ec(e, t) {
  return Ns(2048, 8, e, t);
}
function am(e, t) {
  return Ns(4, 2, e, t);
}
function lm(e, t) {
  return Ns(4, 4, e, t);
}
function um(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function cm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Ns(4, 4, um.bind(null, t, e), n)
  );
}
function tc() {}
function fm(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ju(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function dm(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ju(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function hm(e, t, n) {
  return On & 21
    ? (yt(n, t) || ((n = vp()), (te.lanes |= n), (Bn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n));
}
function Zv(e, t) {
  var n = U;
  ((U = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = La.transition;
  La.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((U = n), (La.transition = r));
  }
}
function pm() {
  return st().memoizedState;
}
function qv(e, t, n) {
  var r = ln(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    mm(e))
  )
    gm(t, n);
  else if (((n = Xp(e, t, n, r)), n !== null)) {
    var i = Me();
    (mt(n, e, r, i), ym(n, t, r));
  }
}
function e1(e, t, n) {
  var r = ln(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (mm(e)) gm(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), yt(a, s))) {
          var l = t.interleaved;
          (l === null
            ? ((i.next = i), Gu(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Xp(e, t, i, r)),
      n !== null && ((i = Me()), mt(n, e, r, i), ym(n, t, r)));
  }
}
function mm(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function gm(e, t) {
  hi = us = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function ym(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Au(e, n));
  }
}
var cs = {
    readContext: ot,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useInsertionEffect: Ee,
    useLayoutEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useMutableSource: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
    unstable_isNewReconciler: !1,
  },
  t1 = {
    readContext: ot,
    useCallback: function (e, t) {
      return ((St().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: ot,
    useEffect: Mf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Do(4194308, 4, um.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Do(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Do(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = St();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = St();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = qv.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = St();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Af,
    useDebugValue: tc,
    useDeferredValue: function (e) {
      return (St().memoizedState = e);
    },
    useTransition: function () {
      var e = Af(!1),
        t = e[0];
      return ((e = Zv.bind(null, e[1])), (St().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        i = St();
      if (J) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), we === null)) throw Error(_(349));
        On & 30 || tm(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Mf(rm.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        $i(9, nm.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = St(),
        t = we.identifierPrefix;
      if (J) {
        var n = At,
          r = Lt;
        ((n = (r & ~(1 << (32 - pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ii++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Jv++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  n1 = {
    readContext: ot,
    useCallback: fm,
    useContext: ot,
    useEffect: ec,
    useImperativeHandle: cm,
    useInsertionEffect: am,
    useLayoutEffect: lm,
    useMemo: dm,
    useReducer: Aa,
    useRef: sm,
    useState: function () {
      return Aa(Vi);
    },
    useDebugValue: tc,
    useDeferredValue: function (e) {
      var t = st();
      return hm(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = Aa(Vi)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: qp,
    useSyncExternalStore: em,
    useId: pm,
    unstable_isNewReconciler: !1,
  },
  r1 = {
    readContext: ot,
    useCallback: fm,
    useContext: ot,
    useEffect: ec,
    useImperativeHandle: cm,
    useInsertionEffect: am,
    useLayoutEffect: lm,
    useMemo: dm,
    useReducer: Ma,
    useRef: sm,
    useState: function () {
      return Ma(Vi);
    },
    useDebugValue: tc,
    useDeferredValue: function (e) {
      var t = st();
      return pe === null ? (t.memoizedState = e) : hm(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ma(Vi)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: qp,
    useSyncExternalStore: em,
    useId: pm,
    unstable_isNewReconciler: !1,
  };
function ft(e, t) {
  if (e && e.defaultProps) {
    ((t = ne({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Al(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Os = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Kn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      i = ln(e),
      o = Dt(r, i);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = sn(e, o, i)),
      t !== null && (mt(t, e, i, r), Ao(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      i = ln(e),
      o = Dt(r, i);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = sn(e, o, i)),
      t !== null && (mt(t, e, i, r), Ao(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Me(),
      r = ln(e),
      i = Dt(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = sn(e, i, r)),
      t !== null && (mt(t, e, r, n), Ao(t, e, r)));
  },
};
function Df(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Ri(n, r) || !Ri(i, o)
        : !0
  );
}
function vm(e, t, n) {
  var r = !1,
    i = pn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ot(o))
      : ((i = Ne(t) ? zn : Re.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Pr(e, i) : pn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Os),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function If(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Os.enqueueReplaceState(t, t.state, null));
}
function Ml(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), Ku(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (i.context = ot(o))
    : ((o = Ne(t) ? zn : Re.current), (i.context = Pr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Al(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Os.enqueueReplaceState(i, i.state, null),
      as(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function br(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Ly(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Da(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Dl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var i1 = typeof WeakMap == "function" ? WeakMap : Map;
function wm(e, t, n) {
  ((n = Dt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (ds || ((ds = !0), (Wl = r)), Dl(e, t));
    }),
    n
  );
}
function xm(e, t, n) {
  ((n = Dt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Dl(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        (Dl(e, t),
          typeof r != "function" &&
            (an === null ? (an = new Set([this])) : an.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Vf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new i1();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = v1.bind(null, e, t, n)), t.then(e, e));
}
function $f(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ff(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Dt(-1, 1)), (t.tag = 2), sn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var o1 = Bt.ReactCurrentOwner,
  Fe = !1;
function Le(e, t, n, r) {
  t.child = e === null ? Yp(t, null, n, r) : Tr(t, e.child, n, r);
}
function zf(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Sr(t, i),
    (r = Zu(e, t, n, r, o, i)),
    (n = qu()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Nt(e, t, i))
      : (J && n && Nu(t), (t.flags |= 1), Le(e, t, r, i), t.child)
  );
}
function Nf(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !uc(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Sm(e, t, o, r, i))
      : ((e = Fo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ri), n(s, r) && e.ref === t.ref)
    )
      return Nt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = un(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Sm(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ri(o, r) && e.ref === t.ref)
      if (((Fe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Fe = !0);
      else return ((t.lanes = e.lanes), Nt(e, t, i));
  }
  return Il(e, t, n, r, i);
}
function km(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        H(fr, We),
        (We |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          H(fr, We),
          (We |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        H(fr, We),
        (We |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      H(fr, We),
      (We |= r));
  return (Le(e, t, i, n), t.child);
}
function Cm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Il(e, t, n, r, i) {
  var o = Ne(n) ? zn : Re.current;
  return (
    (o = Pr(t, o)),
    Sr(t, i),
    (n = Zu(e, t, n, r, o, i)),
    (r = qu()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Nt(e, t, i))
      : (J && r && Nu(t), (t.flags |= 1), Le(e, t, n, i), t.child)
  );
}
function Of(e, t, n, r, i) {
  if (Ne(n)) {
    var o = !0;
    ns(t);
  } else o = !1;
  if ((Sr(t, i), t.stateNode === null))
    (Io(e, t), vm(t, n, r), Ml(t, n, r, i), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ot(u))
      : ((u = Ne(n) ? zn : Re.current), (u = Pr(t, u)));
    var f = n.getDerivedStateFromProps,
      c =
        typeof f == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    (c ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && If(t, s, r, u)),
      (Qt = !1));
    var d = t.memoizedState;
    ((s.state = d),
      as(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || ze.current || Qt
        ? (typeof f == "function" && (Al(t, n, f, r), (l = t.memoizedState)),
          (a = Qt || Df(t, n, a, r, d, l, u))
            ? (c ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      Jp(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : ft(t.type, a)),
      (s.props = u),
      (c = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = ot(l))
        : ((l = Ne(n) ? zn : Re.current), (l = Pr(t, l))));
    var m = n.getDerivedStateFromProps;
    ((f =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== c || d !== l) && If(t, s, r, l)),
      (Qt = !1),
      (d = t.memoizedState),
      (s.state = d),
      as(t, r, s, i));
    var y = t.memoizedState;
    a !== c || d !== y || ze.current || Qt
      ? (typeof m == "function" && (Al(t, n, m, r), (y = t.memoizedState)),
        (u = Qt || Df(t, n, u, r, d, y, l) || !1)
          ? (f ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Vl(e, t, n, r, o, i);
}
function Vl(e, t, n, r, i, o) {
  Cm(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (i && Tf(t, n, !1), Nt(e, t, o));
  ((r = t.stateNode), (o1.current = t));
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Tr(t, e.child, null, o)), (t.child = Tr(t, null, a, o)))
      : Le(e, t, a, o),
    (t.memoizedState = r.state),
    i && Tf(t, n, !0),
    t.child
  );
}
function Pm(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Ef(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ef(e, t.context, !1),
    Qu(e, t.containerInfo));
}
function Bf(e, t, n, r, i) {
  return (Er(), Bu(i), (t.flags |= 256), Le(e, t, n, r), t.child);
}
var $l = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Em(e, t, n) {
  var r = t.pendingProps,
    i = q.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    H(q, i & 1),
    e === null)
  )
    return (
      jl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Ws(s, r, 0, null)),
              (e = Vn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Fl(n)),
              (t.memoizedState = $l),
              e)
            : nc(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return s1(e, t, s, r, a, i, n);
  if (o) {
    ((o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = un(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = un(a, o)) : ((o = Vn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Fl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = $l),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = un(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function nc(e, t) {
  return (
    (t = Ws({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function yo(e, t, n, r) {
  return (
    r !== null && Bu(r),
    Tr(t, e.child, null, n),
    (e = nc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function s1(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Da(Error(_(422)))), yo(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = Ws({ mode: "visible", children: r.children }, i, 0, null)),
          (o = Vn(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Tr(t, e.child, null, s),
          (t.child.memoizedState = Fl(s)),
          (t.memoizedState = $l),
          o);
  if (!(t.mode & 1)) return yo(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (o = Error(_(419))),
      (r = Da(o, r, void 0)),
      yo(e, t, s, r)
    );
  }
  if (((a = (s & e.childLanes) !== 0), Fe || a)) {
    if (((r = we), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), zt(e, i), mt(r, e, i, -1)));
    }
    return (lc(), (r = Da(Error(_(421)))), yo(e, t, s, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = w1.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (He = on(i.nextSibling)),
      (Ge = t),
      (J = !0),
      (ht = null),
      e !== null &&
        ((tt[nt++] = Lt),
        (tt[nt++] = At),
        (tt[nt++] = Nn),
        (Lt = e.id),
        (At = e.overflow),
        (Nn = t)),
      (t = nc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Uf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Ll(e.return, t, n));
}
function Ia(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Tm(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Le(e, t, r.children, n), (r = q.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && Uf(e, n, t);
        else if (e.tag === 19) Uf(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((H(q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null;)
          ((e = n.alternate),
            e !== null && ls(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ia(t, !1, i, n, o));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null;) {
          if (((e = i.alternate), e !== null && ls(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        Ia(t, !0, n, null, o);
        break;
      case "together":
        Ia(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Io(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Bn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = un(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function a1(e, t, n) {
  switch (t.tag) {
    case 3:
      (Pm(t), Er());
      break;
    case 5:
      Zp(t);
      break;
    case 1:
      Ne(t.type) && ns(t);
      break;
    case 4:
      Qu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (H(os, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (H(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Em(e, t, n)
            : (H(q, q.current & 1),
              (e = Nt(e, t, n)),
              e !== null ? e.sibling : null);
      H(q, q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Tm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        H(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), km(e, t, n));
  }
  return Nt(e, t, n);
}
var _m, zl, bm, Rm;
_m = function (e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
zl = function () {};
bm = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), An(Et.current));
    var o = null;
    switch (n) {
      case "input":
        ((i = al(e, i)), (r = al(e, r)), (o = []));
        break;
      case "select":
        ((i = ne({}, i, { value: void 0 })),
          (r = ne({}, r, { value: void 0 })),
          (o = []));
        break;
      case "textarea":
        ((i = cl(e, i)), (r = cl(e, r)), (o = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = es);
    }
    dl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ki.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else (n || (o || (o = []), o.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (o = o || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (ki.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && Q("scroll", e),
                    o || a === l || (o = []))
                  : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Rm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Zr(e, t) {
  if (!J)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null;)
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null;)
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null;)
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null;)
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function l1(e, t, n) {
  var r = t.pendingProps;
  switch ((Ou(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Te(t), null);
    case 1:
      return (Ne(t.type) && ts(), Te(t), null);
    case 3:
      return (
        (r = t.stateNode),
        _r(),
        X(ze),
        X(Re),
        Xu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ht !== null && (Kl(ht), (ht = null)))),
        zl(e, t),
        Te(t),
        null
      );
    case 5:
      Yu(t);
      var i = An(Di.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (bm(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return (Te(t), null);
        }
        if (((e = An(Et.current)), mo(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[Ct] = t), (r[Ai] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (Q("cancel", r), Q("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < oi.length; i++) Q(oi[i], r);
              break;
            case "source":
              Q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (Q("error", r), Q("load", r));
              break;
            case "details":
              Q("toggle", r);
              break;
            case "input":
              (Jc(r, o), Q("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!o.multiple }),
                Q("invalid", r));
              break;
            case "textarea":
              (qc(r, o), Q("invalid", r));
          }
          (dl(n, o), (i = null));
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      po(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      po(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : ki.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Q("scroll", r);
            }
          switch (n) {
            case "input":
              (oo(r), Zc(r, o, !0));
              break;
            case "textarea":
              (oo(r), ef(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = es);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = rp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ct] = t),
            (e[Ai] = r),
            _m(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = hl(n, r)), n)) {
              case "dialog":
                (Q("cancel", e), Q("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (Q("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < oi.length; i++) Q(oi[i], e);
                i = r;
                break;
              case "source":
                (Q("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (Q("error", e), Q("load", e), (i = r));
                break;
              case "details":
                (Q("toggle", e), (i = r));
                break;
              case "input":
                (Jc(e, r), (i = al(e, r)), Q("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ne({}, r, { value: void 0 })),
                  Q("invalid", e));
                break;
              case "textarea":
                (qc(e, r), (i = cl(e, r)), Q("invalid", e));
                break;
              default:
                i = r;
            }
            (dl(n, i), (a = i));
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? sp(e, l)
                  : o === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && ip(e, l))
                    : o === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Ci(e, l)
                        : typeof l == "number" && Ci(e, "" + l)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (ki.hasOwnProperty(o)
                          ? l != null && o === "onScroll" && Q("scroll", e)
                          : l != null && Tu(e, o, l, s));
              }
            switch (n) {
              case "input":
                (oo(e), Zc(e, r, !1));
                break;
              case "textarea":
                (oo(e), ef(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + hn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? yr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      yr(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = es);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Te(t), null);
    case 6:
      if (e && t.stateNode != null) Rm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = An(Di.current)), An(Et.current), mo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ct] = t),
            (o = r.nodeValue !== n) && ((e = Ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                po(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  po(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ct] = t),
            (t.stateNode = r));
      }
      return (Te(t), null);
    case 13:
      if (
        (X(q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && He !== null && t.mode & 1 && !(t.flags & 128))
          (Kp(), Er(), (t.flags |= 98560), (o = !1));
        else if (((o = mo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(_(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(_(317));
            o[Ct] = t;
          } else
            (Er(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Te(t), (o = !1));
        } else (ht !== null && (Kl(ht), (ht = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? me === 0 && (me = 3) : lc())),
          t.updateQueue !== null && (t.flags |= 4),
          Te(t),
          null);
    case 4:
      return (
        _r(),
        zl(e, t),
        e === null && ji(t.stateNode.containerInfo),
        Te(t),
        null
      );
    case 10:
      return (Hu(t.type._context), Te(t), null);
    case 17:
      return (Ne(t.type) && ts(), Te(t), null);
    case 19:
      if ((X(q), (o = t.memoizedState), o === null)) return (Te(t), null);
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Zr(o, !1);
        else {
          if (me !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null;) {
              if (((s = ls(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Zr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (H(q, (q.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            se() > Rr &&
            ((t.flags |= 128), (r = !0), Zr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ls(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Zr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !J)
            )
              return (Te(t), null);
          } else
            2 * se() - o.renderingStartTime > Rr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Zr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = se()),
          (t.sibling = null),
          (n = q.current),
          H(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (Te(t), null);
    case 22:
    case 23:
      return (
        ac(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? We & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Te(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function u1(e, t) {
  switch ((Ou(t), t.tag)) {
    case 1:
      return (
        Ne(t.type) && ts(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        _r(),
        X(ze),
        X(Re),
        Xu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Yu(t), null);
    case 13:
      if ((X(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(_(340));
        Er();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (X(q), null);
    case 4:
      return (_r(), null);
    case 10:
      return (Hu(t.type._context), null);
    case 22:
    case 23:
      return (ac(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var vo = !1,
  be = !1,
  c1 = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function cr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else n.current = null;
}
function Nl(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var Wf = !1;
function f1(e, t) {
  if (((Cl = Jo), (e = Dp()), zu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, o.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            f = 0,
            c = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              c !== n || (i !== 0 && c.nodeType !== 3) || (a = s + i),
                c !== o || (r !== 0 && c.nodeType !== 3) || (l = s + r),
                c.nodeType === 3 && (s += c.nodeValue.length),
                (m = c.firstChild) !== null;
            )
              ((d = c), (c = m));
            for (;;) {
              if (c === e) break t;
              if (
                (d === n && ++u === i && (a = s),
                d === o && ++f === r && (l = s),
                (m = c.nextSibling) !== null)
              )
                break;
              ((c = d), (d = c.parentNode));
            }
            c = m;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Pl = { focusedElem: e, selectionRange: n }, Jo = !1, j = t; j !== null;)
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (j = e));
    else
      for (; j !== null;) {
        t = j;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    k = y.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : ft(t.type, w),
                      k,
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (x) {
          ie(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (j = e));
          break;
        }
        j = t.return;
      }
  return ((y = Wf), (Wf = !1), y);
}
function pi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        ((i.destroy = void 0), o !== void 0 && Nl(t, n, o));
      }
      i = i.next;
    } while (i !== r);
  }
}
function Bs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ol(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function jm(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), jm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ct], delete t[Ai], delete t[_l], delete t[Kv], delete t[Qv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Lm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hf(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || Lm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = es)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bl(e, t, n), e = e.sibling; e !== null;)
      (Bl(e, t, n), (e = e.sibling));
}
function Ul(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ul(e, t, n), e = e.sibling; e !== null;)
      (Ul(e, t, n), (e = e.sibling));
}
var Se = null,
  dt = !1;
function Wt(e, t, n) {
  for (n = n.child; n !== null;) (Am(e, t, n), (n = n.sibling));
}
function Am(e, t, n) {
  if (Pt && typeof Pt.onCommitFiberUnmount == "function")
    try {
      Pt.onCommitFiberUnmount(Ds, n);
    } catch {}
  switch (n.tag) {
    case 5:
      be || cr(n, t);
    case 6:
      var r = Se,
        i = dt;
      ((Se = null),
        Wt(e, t, n),
        (Se = r),
        (dt = i),
        Se !== null &&
          (dt
            ? ((e = Se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Se.removeChild(n.stateNode)));
      break;
    case 18:
      Se !== null &&
        (dt
          ? ((e = Se),
            (n = n.stateNode),
            e.nodeType === 8
              ? ba(e.parentNode, n)
              : e.nodeType === 1 && ba(e, n),
            _i(e))
          : ba(Se, n.stateNode));
      break;
    case 4:
      ((r = Se),
        (i = dt),
        (Se = n.stateNode.containerInfo),
        (dt = !0),
        Wt(e, t, n),
        (Se = r),
        (dt = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !be &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          ((o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Nl(n, t, s),
            (i = i.next));
        } while (i !== r);
      }
      Wt(e, t, n);
      break;
    case 1:
      if (
        !be &&
        (cr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          ie(n, t, a);
        }
      Wt(e, t, n);
      break;
    case 21:
      Wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((be = (r = be) || n.memoizedState !== null), Wt(e, t, n), (be = r))
        : Wt(e, t, n);
      break;
    default:
      Wt(e, t, n);
  }
}
function Gf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new c1()),
      t.forEach(function (r) {
        var i = x1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null;) {
          switch (a.tag) {
            case 5:
              ((Se = a.stateNode), (dt = !1));
              break e;
            case 3:
              ((Se = a.stateNode.containerInfo), (dt = !0));
              break e;
            case 4:
              ((Se = a.stateNode.containerInfo), (dt = !0));
              break e;
          }
          a = a.return;
        }
        if (Se === null) throw Error(_(160));
        (Am(o, s, i), (Se = null), (dt = !1));
        var l = i.alternate;
        (l !== null && (l.return = null), (i.return = null));
      } catch (u) {
        ie(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) (Mm(t, e), (t = t.sibling));
}
function Mm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ct(t, e), xt(e), r & 4)) {
        try {
          (pi(3, e, e.return), Bs(3, e));
        } catch (w) {
          ie(e, e.return, w);
        }
        try {
          pi(5, e, e.return);
        } catch (w) {
          ie(e, e.return, w);
        }
      }
      break;
    case 1:
      (ct(t, e), xt(e), r & 512 && n !== null && cr(n, n.return));
      break;
    case 5:
      if (
        (ct(t, e),
        xt(e),
        r & 512 && n !== null && cr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ci(i, "");
        } catch (w) {
          ie(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && o.type === "radio" && o.name != null && tp(i, o),
              hl(a, s));
            var u = hl(a, o);
            for (s = 0; s < l.length; s += 2) {
              var f = l[s],
                c = l[s + 1];
              f === "style"
                ? sp(i, c)
                : f === "dangerouslySetInnerHTML"
                  ? ip(i, c)
                  : f === "children"
                    ? Ci(i, c)
                    : Tu(i, f, c, u);
            }
            switch (a) {
              case "input":
                ll(i, o);
                break;
              case "textarea":
                np(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? yr(i, !!o.multiple, m, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? yr(i, !!o.multiple, o.defaultValue, !0)
                      : yr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Ai] = o;
          } catch (w) {
            ie(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((ct(t, e), xt(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        ((i = e.stateNode), (o = e.memoizedProps));
        try {
          i.nodeValue = o;
        } catch (w) {
          ie(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (ct(t, e), xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          _i(t.containerInfo);
        } catch (w) {
          ie(e, e.return, w);
        }
      break;
    case 4:
      (ct(t, e), xt(e));
      break;
    case 13:
      (ct(t, e),
        xt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (oc = se())),
        r & 4 && Gf(e));
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((be = (u = be) || f), ct(t, e), (be = u)) : ct(t, e),
        xt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (j = e, f = e.child; f !== null;) {
            for (c = j = f; j !== null;) {
              switch (((d = j), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pi(4, d, d.return);
                  break;
                case 1:
                  cr(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    ((r = d), (n = d.return));
                    try {
                      ((t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount());
                    } catch (w) {
                      ie(r, n, w);
                    }
                  }
                  break;
                case 5:
                  cr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Qf(c);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (j = m)) : Qf(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ;) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                ((i = c.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = c.stateNode),
                      (l = c.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = op("display", s))));
              } catch (w) {
                ie(e, e.return, w);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (w) {
                ie(e, e.return, w);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            ((c.child.return = c), (c = c.child));
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null;) {
            if (c.return === null || c.return === e) break e;
            (f === c && (f = null), (c = c.return));
          }
          (f === c && (f = null),
            (c.sibling.return = c.return),
            (c = c.sibling));
        }
      }
      break;
    case 19:
      (ct(t, e), xt(e), r & 4 && Gf(e));
      break;
    case 21:
      break;
    default:
      (ct(t, e), xt(e));
  }
}
function xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (Lm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ci(i, ""), (r.flags &= -33));
          var o = Hf(e);
          Ul(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Hf(e);
          Bl(e, a, s);
          break;
        default:
          throw Error(_(161));
      }
    } catch (l) {
      ie(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function d1(e, t, n) {
  ((j = e), Dm(e));
}
function Dm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null;) {
    var i = j,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || vo;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || be;
        a = vo;
        var u = be;
        if (((vo = s), (be = l) && !u))
          for (j = i; j !== null;)
            ((s = j),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Yf(i)
                : l !== null
                  ? ((l.return = s), (j = l))
                  : Yf(i));
        for (; o !== null;) ((j = o), Dm(o), (o = o.sibling));
        ((j = i), (vo = a), (be = u));
      }
      Kf(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (j = o)) : Kf(e);
  }
}
function Kf(e) {
  for (; j !== null;) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              be || Bs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !be)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ft(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Lf(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Lf(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && _i(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        be || (t.flags & 512 && Ol(t));
      } catch (d) {
        ie(t, t.return, d);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (j = n));
      break;
    }
    j = t.return;
  }
}
function Qf(e) {
  for (; j !== null;) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (j = n));
      break;
    }
    j = t.return;
  }
}
function Yf(e) {
  for (; j !== null;) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bs(4, t);
          } catch (l) {
            ie(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ie(t, i, l);
            }
          }
          var o = t.return;
          try {
            Ol(t);
          } catch (l) {
            ie(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ol(t);
          } catch (l) {
            ie(t, s, l);
          }
      }
    } catch (l) {
      ie(t, t.return, l);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (j = a));
      break;
    }
    j = t.return;
  }
}
var h1 = Math.ceil,
  fs = Bt.ReactCurrentDispatcher,
  rc = Bt.ReactCurrentOwner,
  it = Bt.ReactCurrentBatchConfig,
  O = 0,
  we = null,
  fe = null,
  ke = 0,
  We = 0,
  fr = vn(0),
  me = 0,
  Fi = null,
  Bn = 0,
  Us = 0,
  ic = 0,
  mi = null,
  $e = null,
  oc = 0,
  Rr = 1 / 0,
  bt = null,
  ds = !1,
  Wl = null,
  an = null,
  wo = !1,
  qt = null,
  hs = 0,
  gi = 0,
  Hl = null,
  Vo = -1,
  $o = 0;
function Me() {
  return O & 6 ? se() : Vo !== -1 ? Vo : (Vo = se());
}
function ln(e) {
  return e.mode & 1
    ? O & 2 && ke !== 0
      ? ke & -ke
      : Xv.transition !== null
        ? ($o === 0 && ($o = vp()), $o)
        : ((e = U),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ep(e.type))),
          e)
    : 1;
}
function mt(e, t, n, r) {
  if (50 < gi) throw ((gi = 0), (Hl = null), Error(_(185)));
  (Ki(e, n, r),
    (!(O & 2) || e !== we) &&
      (e === we && (!(O & 2) && (Us |= n), me === 4 && Jt(e, ke)),
      Oe(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((Rr = se() + 500), zs && wn())));
}
function Oe(e, t) {
  var n = e.callbackNode;
  Xy(e, t);
  var r = Xo(e, e === we ? ke : 0);
  if (r === 0)
    (n !== null && rf(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && rf(n), t === 1))
      (e.tag === 0 ? Yv(Xf.bind(null, e)) : Wp(Xf.bind(null, e)),
        Hv(function () {
          !(O & 6) && wn();
        }),
        (n = null));
    else {
      switch (wp(r)) {
        case 1:
          n = Lu;
          break;
        case 4:
          n = gp;
          break;
        case 16:
          n = Yo;
          break;
        case 536870912:
          n = yp;
          break;
        default:
          n = Yo;
      }
      n = Bm(n, Im.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Im(e, t) {
  if (((Vo = -1), ($o = 0), O & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (kr() && e.callbackNode !== n) return null;
  var r = Xo(e, e === we ? ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ps(e, r);
  else {
    t = r;
    var i = O;
    O |= 2;
    var o = $m();
    (we !== e || ke !== t) && ((bt = null), (Rr = se() + 500), In(e, t));
    do
      try {
        g1();
        break;
      } catch (a) {
        Vm(e, a);
      }
    while (!0);
    (Wu(),
      (fs.current = o),
      (O = i),
      fe !== null ? (t = 0) : ((we = null), (ke = 0), (t = me)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = vl(e)), i !== 0 && ((r = i), (t = Gl(e, i)))), t === 1)
    )
      throw ((n = Fi), In(e, 0), Jt(e, r), Oe(e, se()), n);
    if (t === 6) Jt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !p1(i) &&
          ((t = ps(e, r)),
          t === 2 && ((o = vl(e)), o !== 0 && ((r = o), (t = Gl(e, o)))),
          t === 1))
      )
        throw ((n = Fi), In(e, 0), Jt(e, r), Oe(e, se()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          En(e, $e, bt);
          break;
        case 3:
          if (
            (Jt(e, r), (r & 130023424) === r && ((t = oc + 500 - se()), 10 < t))
          ) {
            if (Xo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (Me(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = Tl(En.bind(null, e, $e, bt), t);
            break;
          }
          En(e, $e, bt);
          break;
        case 4:
          if ((Jt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r;) {
            var s = 31 - pt(r);
            ((o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o));
          }
          if (
            ((r = i),
            (r = se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * h1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Tl(En.bind(null, e, $e, bt), r);
            break;
          }
          En(e, $e, bt);
          break;
        case 5:
          En(e, $e, bt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return (Oe(e, se()), e.callbackNode === n ? Im.bind(null, e) : null);
}
function Gl(e, t) {
  var n = mi;
  return (
    e.current.memoizedState.isDehydrated && (In(e, t).flags |= 256),
    (e = ps(e, t)),
    e !== 2 && ((t = $e), ($e = n), t !== null && Kl(t)),
    e
  );
}
function Kl(e) {
  $e === null ? ($e = e) : $e.push.apply($e, e);
}
function p1(e) {
  for (var t = e; ;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!yt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Jt(e, t) {
  for (
    t &= ~ic,
      t &= ~Us,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - pt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Xf(e) {
  if (O & 6) throw Error(_(327));
  kr();
  var t = Xo(e, 0);
  if (!(t & 1)) return (Oe(e, se()), null);
  var n = ps(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vl(e);
    r !== 0 && ((t = r), (n = Gl(e, r)));
  }
  if (n === 1) throw ((n = Fi), In(e, 0), Jt(e, t), Oe(e, se()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    En(e, $e, bt),
    Oe(e, se()),
    null
  );
}
function sc(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    ((O = n), O === 0 && ((Rr = se() + 500), zs && wn()));
  }
}
function Un(e) {
  qt !== null && qt.tag === 0 && !(O & 6) && kr();
  var t = O;
  O |= 1;
  var n = it.transition,
    r = U;
  try {
    if (((it.transition = null), (U = 1), e)) return e();
  } finally {
    ((U = r), (it.transition = n), (O = t), !(O & 6) && wn());
  }
}
function ac() {
  ((We = fr.current), X(fr));
}
function In(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Wv(n)), fe !== null))
    for (n = fe.return; n !== null;) {
      var r = n;
      switch ((Ou(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ts());
          break;
        case 3:
          (_r(), X(ze), X(Re), Xu());
          break;
        case 5:
          Yu(r);
          break;
        case 4:
          _r();
          break;
        case 13:
          X(q);
          break;
        case 19:
          X(q);
          break;
        case 10:
          Hu(r.type._context);
          break;
        case 22:
        case 23:
          ac();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (fe = e = un(e.current, null)),
    (ke = We = t),
    (me = 0),
    (Fi = null),
    (ic = Us = Bn = 0),
    ($e = mi = null),
    Ln !== null)
  ) {
    for (t = 0; t < Ln.length; t++)
      if (((n = Ln[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          ((o.next = i), (r.next = s));
        }
        n.pending = r;
      }
    Ln = null;
  }
  return e;
}
function Vm(e, t) {
  do {
    var n = fe;
    try {
      if ((Wu(), (Mo.current = cs), us)) {
        for (var r = te.memoizedState; r !== null;) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        us = !1;
      }
      if (
        ((On = 0),
        (ge = pe = te = null),
        (hi = !1),
        (Ii = 0),
        (rc.current = null),
        n === null || n.return === null)
      ) {
        ((me = 1), (Fi = t), (fe = null));
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = ke),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            f = a,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var d = f.alternate;
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var m = $f(s);
          if (m !== null) {
            ((m.flags &= -257),
              Ff(m, s, a, o, t),
              m.mode & 1 && Vf(o, u, t),
              (t = m),
              (l = u));
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              (w.add(l), (t.updateQueue = w));
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Vf(o, u, t), lc());
              break e;
            }
            l = Error(_(426));
          }
        } else if (J && a.mode & 1) {
          var k = $f(s);
          if (k !== null) {
            (!(k.flags & 65536) && (k.flags |= 256),
              Ff(k, s, a, o, t),
              Bu(br(l, a)));
            break e;
          }
        }
        ((o = l = br(l, a)),
          me !== 4 && (me = 2),
          mi === null ? (mi = [o]) : mi.push(o),
          (o = s));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var g = wm(o, l, t);
              jf(o, g);
              break e;
            case 1:
              a = l;
              var h = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (an === null || !an.has(p))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var x = xm(o, a, t);
                jf(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      zm(n);
    } catch (C) {
      ((t = C), fe === n && n !== null && (fe = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function $m() {
  var e = fs.current;
  return ((fs.current = cs), e === null ? cs : e);
}
function lc() {
  ((me === 0 || me === 3 || me === 2) && (me = 4),
    we === null || (!(Bn & 268435455) && !(Us & 268435455)) || Jt(we, ke));
}
function ps(e, t) {
  var n = O;
  O |= 2;
  var r = $m();
  (we !== e || ke !== t) && ((bt = null), In(e, t));
  do
    try {
      m1();
      break;
    } catch (i) {
      Vm(e, i);
    }
  while (!0);
  if ((Wu(), (O = n), (fs.current = r), fe !== null)) throw Error(_(261));
  return ((we = null), (ke = 0), me);
}
function m1() {
  for (; fe !== null;) Fm(fe);
}
function g1() {
  for (; fe !== null && !Oy();) Fm(fe);
}
function Fm(e) {
  var t = Om(e.alternate, e, We);
  ((e.memoizedProps = e.pendingProps),
    t === null ? zm(e) : (fe = t),
    (rc.current = null));
}
function zm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = u1(n, t)), n !== null)) {
        ((n.flags &= 32767), (fe = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((me = 6), (fe = null));
        return;
      }
    } else if (((n = l1(n, t, We)), n !== null)) {
      fe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      fe = t;
      return;
    }
    fe = t = e;
  } while (t !== null);
  me === 0 && (me = 5);
}
function En(e, t, n) {
  var r = U,
    i = it.transition;
  try {
    ((it.transition = null), (U = 1), y1(e, t, n, r));
  } finally {
    ((it.transition = i), (U = r));
  }
  return null;
}
function y1(e, t, n, r) {
  do kr();
  while (qt !== null);
  if (O & 6) throw Error(_(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (Jy(e, o),
    e === we && ((fe = we = null), (ke = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wo ||
      ((wo = !0),
      Bm(Yo, function () {
        return (kr(), null);
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ((o = it.transition), (it.transition = null));
    var s = U;
    U = 1;
    var a = O;
    ((O |= 4),
      (rc.current = null),
      f1(e, n),
      Mm(n, e),
      $v(Pl),
      (Jo = !!Cl),
      (Pl = Cl = null),
      (e.current = n),
      d1(n),
      By(),
      (O = a),
      (U = s),
      (it.transition = o));
  } else e.current = n;
  if (
    (wo && ((wo = !1), (qt = e), (hs = i)),
    (o = e.pendingLanes),
    o === 0 && (an = null),
    Hy(n.stateNode),
    Oe(e, se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (ds) throw ((ds = !1), (e = Wl), (Wl = null), e);
  return (
    hs & 1 && e.tag !== 0 && kr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Hl ? gi++ : ((gi = 0), (Hl = e))) : (gi = 0),
    wn(),
    null
  );
}
function kr() {
  if (qt !== null) {
    var e = wp(hs),
      t = it.transition,
      n = U;
    try {
      if (((it.transition = null), (U = 16 > e ? 16 : e), qt === null))
        var r = !1;
      else {
        if (((e = qt), (qt = null), (hs = 0), O & 6)) throw Error(_(331));
        var i = O;
        for (O |= 4, j = e.current; j !== null;) {
          var o = j,
            s = o.child;
          if (j.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (j = u; j !== null;) {
                  var f = j;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pi(8, f, o);
                  }
                  var c = f.child;
                  if (c !== null) ((c.return = f), (j = c));
                  else
                    for (; j !== null;) {
                      f = j;
                      var d = f.sibling,
                        m = f.return;
                      if ((jm(f), f === u)) {
                        j = null;
                        break;
                      }
                      if (d !== null) {
                        ((d.return = m), (j = d));
                        break;
                      }
                      j = m;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var k = w.sibling;
                    ((w.sibling = null), (w = k));
                  } while (w !== null);
                }
              }
              j = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) ((s.return = o), (j = s));
          else
            e: for (; j !== null;) {
              if (((o = j), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    pi(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                ((g.return = o.return), (j = g));
                break e;
              }
              j = o.return;
            }
        }
        var h = e.current;
        for (j = h; j !== null;) {
          s = j;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) ((p.return = s), (j = p));
          else
            e: for (s = h; j !== null;) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bs(9, a);
                  }
                } catch (C) {
                  ie(a, a.return, C);
                }
              if (a === s) {
                j = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                ((x.return = a.return), (j = x));
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((O = i), wn(), Pt && typeof Pt.onPostCommitFiberRoot == "function")
        )
          try {
            Pt.onPostCommitFiberRoot(Ds, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((U = n), (it.transition = t));
    }
  }
  return !1;
}
function Jf(e, t, n) {
  ((t = br(n, t)),
    (t = wm(e, t, 1)),
    (e = sn(e, t, 1)),
    (t = Me()),
    e !== null && (Ki(e, 1, t), Oe(e, t)));
}
function ie(e, t, n) {
  if (e.tag === 3) Jf(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        Jf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (an === null || !an.has(r)))
        ) {
          ((e = br(n, e)),
            (e = xm(t, e, 1)),
            (t = sn(t, e, 1)),
            (e = Me()),
            t !== null && (Ki(t, 1, e), Oe(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function v1(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (ke & n) === n &&
      (me === 4 || (me === 3 && (ke & 130023424) === ke && 500 > se() - oc)
        ? In(e, 0)
        : (ic |= n)),
    Oe(e, t));
}
function Nm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = lo), (lo <<= 1), !(lo & 130023424) && (lo = 4194304))
      : (t = 1));
  var n = Me();
  ((e = zt(e, t)), e !== null && (Ki(e, t, n), Oe(e, n)));
}
function w1(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Nm(e, n));
}
function x1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  (r !== null && r.delete(t), Nm(e, n));
}
var Om;
Om = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current) Fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Fe = !1), a1(e, t, n));
      Fe = !!(e.flags & 131072);
    }
  else ((Fe = !1), J && t.flags & 1048576 && Hp(t, is, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Io(e, t), (e = t.pendingProps));
      var i = Pr(t, Re.current);
      (Sr(t, n), (i = Zu(null, t, r, e, i, n)));
      var o = qu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ne(r) ? ((o = !0), ns(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ku(t),
            (i.updater = Os),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ml(t, r, e, n),
            (t = Vl(null, t, r, !0, o, n)))
          : ((t.tag = 0), J && o && Nu(t), Le(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Io(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = k1(r)),
          (e = ft(r, e)),
          i)
        ) {
          case 0:
            t = Il(null, t, r, e, n);
            break e;
          case 1:
            t = Of(null, t, r, e, n);
            break e;
          case 11:
            t = zf(null, t, r, e, n);
            break e;
          case 14:
            t = Nf(null, t, r, ft(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        Il(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        Of(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Pm(t), e === null)) throw Error(_(387));
        ((r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Jp(e, t),
          as(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ((i = br(Error(_(423)), t)), (t = Bf(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = br(Error(_(424)), t)), (t = Bf(e, t, r, n, i)));
            break e;
          } else
            for (
              He = on(t.stateNode.containerInfo.firstChild),
                Ge = t,
                J = !0,
                ht = null,
                n = Yp(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Er(), r === i)) {
            t = Nt(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Zp(t),
        e === null && jl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        El(r, i) ? (s = null) : o !== null && El(r, o) && (t.flags |= 32),
        Cm(e, t),
        Le(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && jl(t), null);
    case 13:
      return Em(e, t, n);
    case 4:
      return (
        Qu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Tr(t, null, r, n)) : Le(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        zf(e, t, r, i, n)
      );
    case 7:
      return (Le(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Le(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Le(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          H(os, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (yt(o.value, s)) {
            if (o.children === i.children && !ze.current) {
              t = Nt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null;) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null;) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      ((l = Dt(-1, n & -n)), (l.tag = 2));
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        (f === null
                          ? (l.next = l)
                          : ((l.next = f.next), (f.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Ll(o.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(_(341));
                ((s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Ll(s, n, t),
                  (s = o.sibling));
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null;) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    ((o.return = s.return), (s = o));
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        (Le(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Sr(t, n),
        (i = ot(i)),
        (r = r(i)),
        (t.flags |= 1),
        Le(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = ft(r, t.pendingProps)),
        (i = ft(r.type, i)),
        Nf(e, t, r, i, n)
      );
    case 15:
      return Sm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        Io(e, t),
        (t.tag = 1),
        Ne(r) ? ((e = !0), ns(t)) : (e = !1),
        Sr(t, n),
        vm(t, r, i),
        Ml(t, r, i, n),
        Vl(null, t, r, !0, e, n)
      );
    case 19:
      return Tm(e, t, n);
    case 22:
      return km(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function Bm(e, t) {
  return mp(e, t);
}
function S1(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function rt(e, t, n, r) {
  return new S1(e, t, n, r);
}
function uc(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function k1(e) {
  if (typeof e == "function") return uc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === bu)) return 11;
    if (e === Ru) return 14;
  }
  return 2;
}
function un(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Fo(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) uc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case tr:
        return Vn(n.children, i, o, t);
      case _u:
        ((s = 8), (i |= 8));
        break;
      case rl:
        return (
          (e = rt(12, n, t, i | 2)),
          (e.elementType = rl),
          (e.lanes = o),
          e
        );
      case il:
        return ((e = rt(13, n, t, i)), (e.elementType = il), (e.lanes = o), e);
      case ol:
        return ((e = rt(19, n, t, i)), (e.elementType = ol), (e.lanes = o), e);
      case Zh:
        return Ws(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Xh:
              s = 10;
              break e;
            case Jh:
              s = 9;
              break e;
            case bu:
              s = 11;
              break e;
            case Ru:
              s = 14;
              break e;
            case Kt:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = rt(s, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = o),
    t
  );
}
function Vn(e, t, n, r) {
  return ((e = rt(7, e, r, t)), (e.lanes = n), e);
}
function Ws(e, t, n, r) {
  return (
    (e = rt(22, e, r, t)),
    (e.elementType = Zh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Va(e, t, n) {
  return ((e = rt(6, e, null, t)), (e.lanes = n), e);
}
function $a(e, t, n) {
  return (
    (t = rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function C1(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ya(0)),
    (this.expirationTimes = ya(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ya(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function cc(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new C1(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = rt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ku(o),
    e
  );
}
function P1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: er,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Um(e) {
  if (!e) return pn;
  e = e._reactInternals;
  e: {
    if (Kn(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return Up(e, n, t);
  }
  return t;
}
function Wm(e, t, n, r, i, o, s, a, l) {
  return (
    (e = cc(n, r, !0, e, i, o, s, a, l)),
    (e.context = Um(null)),
    (n = e.current),
    (r = Me()),
    (i = ln(n)),
    (o = Dt(r, i)),
    (o.callback = t ?? null),
    sn(n, o, i),
    (e.current.lanes = i),
    Ki(e, i, r),
    Oe(e, r),
    e
  );
}
function Hs(e, t, n, r) {
  var i = t.current,
    o = Me(),
    s = ln(i);
  return (
    (n = Um(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Dt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = sn(i, t, s)),
    e !== null && (mt(e, i, s, o), Ao(e, i, s)),
    s
  );
}
function ms(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fc(e, t) {
  (Zf(e, t), (e = e.alternate) && Zf(e, t));
}
function E1() {
  return null;
}
var Hm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function dc(e) {
  this._internalRoot = e;
}
Gs.prototype.render = dc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Hs(e, t, null, null);
};
Gs.prototype.unmount = dc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Un(function () {
      Hs(null, e, null, null);
    }),
      (t[Ft] = null));
  }
};
function Gs(e) {
  this._internalRoot = e;
}
Gs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = kp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Xt.length && t !== 0 && t < Xt[n].priority; n++);
    (Xt.splice(n, 0, e), n === 0 && Pp(e));
  }
};
function hc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ks(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function qf() {}
function T1(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = ms(s);
        o.call(u);
      };
    }
    var s = Wm(t, r, e, 0, null, !1, !1, "", qf);
    return (
      (e._reactRootContainer = s),
      (e[Ft] = s.current),
      ji(e.nodeType === 8 ? e.parentNode : e),
      Un(),
      s
    );
  }
  for (; (i = e.lastChild);) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ms(l);
      a.call(u);
    };
  }
  var l = cc(e, 0, !1, null, null, !1, !1, "", qf);
  return (
    (e._reactRootContainer = l),
    (e[Ft] = l.current),
    ji(e.nodeType === 8 ? e.parentNode : e),
    Un(function () {
      Hs(t, l, n, r);
    }),
    l
  );
}
function Qs(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = ms(s);
        a.call(l);
      };
    }
    Hs(t, s, e, i);
  } else s = T1(n, t, e, i, r);
  return ms(s);
}
xp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ii(t.pendingLanes);
        n !== 0 &&
          (Au(t, n | 1), Oe(t, se()), !(O & 6) && ((Rr = se() + 500), wn()));
      }
      break;
    case 13:
      (Un(function () {
        var r = zt(e, 1);
        if (r !== null) {
          var i = Me();
          mt(r, e, 1, i);
        }
      }),
        fc(e, 1));
  }
};
Mu = function (e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728);
    if (t !== null) {
      var n = Me();
      mt(t, e, 134217728, n);
    }
    fc(e, 134217728);
  }
};
Sp = function (e) {
  if (e.tag === 13) {
    var t = ln(e),
      n = zt(e, t);
    if (n !== null) {
      var r = Me();
      mt(n, e, t, r);
    }
    fc(e, t);
  }
};
kp = function () {
  return U;
};
Cp = function (e, t) {
  var n = U;
  try {
    return ((U = e), t());
  } finally {
    U = n;
  }
};
ml = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ll(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Fs(r);
            if (!i) throw Error(_(90));
            (ep(r), ll(r, i));
          }
        }
      }
      break;
    case "textarea":
      np(e, n);
      break;
    case "select":
      ((t = n.value), t != null && yr(e, !!n.multiple, t, !1));
  }
};
up = sc;
cp = Un;
var _1 = { usingClientEntryPoint: !1, Events: [Yi, or, Fs, ap, lp, sc] },
  qr = {
    findFiberByHostInstance: jn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  b1 = {
    bundleType: qr.bundleType,
    version: qr.version,
    rendererPackageName: qr.rendererPackageName,
    rendererConfig: qr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Bt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = hp(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: qr.findFiberByHostInstance || E1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xo.isDisabled && xo.supportsFiber)
    try {
      ((Ds = xo.inject(b1)), (Pt = xo));
    } catch {}
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _1;
Ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hc(t)) throw Error(_(200));
  return P1(e, t, null, n);
};
Ye.createRoot = function (e, t) {
  if (!hc(e)) throw Error(_(299));
  var n = !1,
    r = "",
    i = Hm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = cc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Ft] = t.current),
    ji(e.nodeType === 8 ? e.parentNode : e),
    new dc(t)
  );
};
Ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return ((e = hp(t)), (e = e === null ? null : e.stateNode), e);
};
Ye.flushSync = function (e) {
  return Un(e);
};
Ye.hydrate = function (e, t, n) {
  if (!Ks(t)) throw Error(_(200));
  return Qs(null, e, t, !0, n);
};
Ye.hydrateRoot = function (e, t, n) {
  if (!hc(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Hm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Wm(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Ft] = t.current),
    ji(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new Gs(t);
};
Ye.render = function (e, t, n) {
  if (!Ks(t)) throw Error(_(200));
  return Qs(null, e, t, !1, n);
};
Ye.unmountComponentAtNode = function (e) {
  if (!Ks(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (Un(function () {
        Qs(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Ft] = null));
        });
      }),
      !0)
    : !1;
};
Ye.unstable_batchedUpdates = sc;
Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ks(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Qs(e, t, n, !1, r);
};
Ye.version = "18.3.1-next-f1338f8080-20240426";
function Gm() {
  if (!(
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
  ))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gm);
    } catch (e) {
      console.error(e);
    }
}
(Gm(), (Gh.exports = Ye));
var R1 = Gh.exports,
  Km,
  ed = R1;
((Km = ed.createRoot), ed.hydrateRoot);
var ve = function () {
  return (
    (ve =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    ve.apply(this, arguments)
  );
};
function jr(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
var Y = "-ms-",
  yi = "-moz-",
  B = "-webkit-",
  Qm = "comm",
  Ys = "rule",
  pc = "decl",
  j1 = "@import",
  Ym = "@keyframes",
  L1 = "@layer",
  Xm = Math.abs,
  mc = String.fromCharCode,
  Ql = Object.assign;
function A1(e, t) {
  return ye(e, 0) ^ 45
    ? (((((((t << 2) ^ ye(e, 0)) << 2) ^ ye(e, 1)) << 2) ^ ye(e, 2)) << 2) ^
        ye(e, 3)
    : 0;
}
function Jm(e) {
  return e.trim();
}
function Rt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function F(e, t, n) {
  return e.replace(t, n);
}
function zo(e, t, n) {
  return e.indexOf(t, n);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function Lr(e, t, n) {
  return e.slice(t, n);
}
function kt(e) {
  return e.length;
}
function Zm(e) {
  return e.length;
}
function si(e, t) {
  return (t.push(e), e);
}
function M1(e, t) {
  return e.map(t).join("");
}
function td(e, t) {
  return e.filter(function (n) {
    return !Rt(n, t);
  });
}
var Xs = 1,
  Ar = 1,
  qm = 0,
  at = 0,
  ce = 0,
  Or = "";
function Js(e, t, n, r, i, o, s, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Xs,
    column: Ar,
    length: s,
    return: "",
    siblings: a,
  };
}
function Ht(e, t) {
  return Ql(
    Js("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t,
  );
}
function Zn(e) {
  for (; e.root;) e = Ht(e.root, { children: [e] });
  si(e, e.siblings);
}
function D1() {
  return ce;
}
function I1() {
  return (
    (ce = at > 0 ? ye(Or, --at) : 0),
    Ar--,
    ce === 10 && ((Ar = 1), Xs--),
    ce
  );
}
function gt() {
  return (
    (ce = at < qm ? ye(Or, at++) : 0),
    Ar++,
    ce === 10 && ((Ar = 1), Xs++),
    ce
  );
}
function $n() {
  return ye(Or, at);
}
function No() {
  return at;
}
function Zs(e, t) {
  return Lr(Or, e, t);
}
function Yl(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function V1(e) {
  return ((Xs = Ar = 1), (qm = kt((Or = e))), (at = 0), []);
}
function $1(e) {
  return ((Or = ""), e);
}
function Fa(e) {
  return Jm(Zs(at - 1, Xl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function F1(e) {
  for (; (ce = $n()) && ce < 33;) gt();
  return Yl(e) > 2 || Yl(ce) > 3 ? "" : " ";
}
function z1(e, t) {
  for (
    ;
    --t &&
    gt() &&
    !(ce < 48 || ce > 102 || (ce > 57 && ce < 65) || (ce > 70 && ce < 97));
  );
  return Zs(e, No() + (t < 6 && $n() == 32 && gt() == 32));
}
function Xl(e) {
  for (; gt();)
    switch (ce) {
      case e:
        return at;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Xl(ce);
        break;
      case 40:
        e === 41 && Xl(e);
        break;
      case 92:
        gt();
        break;
    }
  return at;
}
function N1(e, t) {
  for (; gt() && e + ce !== 57;) if (e + ce === 84 && $n() === 47) break;
  return "/*" + Zs(t, at - 1) + "*" + mc(e === 47 ? e : gt());
}
function O1(e) {
  for (; !Yl($n());) gt();
  return Zs(e, at);
}
function B1(e) {
  return $1(Oo("", null, null, null, [""], (e = V1(e)), 0, [0], e));
}
function Oo(e, t, n, r, i, o, s, a, l) {
  for (
    var u = 0,
      f = 0,
      c = s,
      d = 0,
      m = 0,
      y = 0,
      w = 1,
      k = 1,
      g = 1,
      h = 0,
      p = "",
      x = i,
      C = o,
      P = r,
      E = p;
    k;
  )
    switch (((y = h), (h = gt()))) {
      case 40:
        if (y != 108 && ye(E, c - 1) == 58) {
          zo((E += F(Fa(h), "&", "&\f")), "&\f", Xm(u ? a[u - 1] : 0)) != -1 &&
            (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Fa(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += F1(y);
        break;
      case 92:
        E += z1(No() - 1, 7);
        continue;
      case 47:
        switch ($n()) {
          case 42:
          case 47:
            si(U1(N1(gt(), No()), t, n, l), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * w:
        a[u++] = kt(E) * g;
      case 125 * w:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            k = 0;
          case 59 + f:
            (g == -1 && (E = F(E, /\f/g, "")),
              m > 0 &&
                kt(E) - c &&
                si(
                  m > 32
                    ? rd(E + ";", r, n, c - 1, l)
                    : rd(F(E, " ", "") + ";", r, n, c - 2, l),
                  l,
                ));
            break;
          case 59:
            E += ";";
          default:
            if (
              (si(
                (P = nd(E, t, n, u, f, i, a, p, (x = []), (C = []), c, o)),
                o,
              ),
              h === 123)
            )
              if (f === 0) Oo(E, t, P, P, x, o, c, a, C);
              else
                switch (d === 99 && ye(E, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Oo(
                      e,
                      P,
                      P,
                      r && si(nd(e, P, P, 0, 0, i, a, p, i, (x = []), c, C), C),
                      i,
                      C,
                      c,
                      a,
                      r ? x : C,
                    );
                    break;
                  default:
                    Oo(E, P, P, P, [""], C, 0, a, C);
                }
        }
        ((u = f = m = 0), (w = g = 1), (p = E = ""), (c = s));
        break;
      case 58:
        ((c = 1 + kt(E)), (m = y));
      default:
        if (w < 1) {
          if (h == 123) --w;
          else if (h == 125 && w++ == 0 && I1() == 125) continue;
        }
        switch (((E += mc(h)), h * w)) {
          case 38:
            g = f > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            ((a[u++] = (kt(E) - 1) * g), (g = 1));
            break;
          case 64:
            ($n() === 45 && (E += Fa(gt())),
              (d = $n()),
              (f = c = kt((p = E += O1(No())))),
              h++);
            break;
          case 45:
            y === 45 && kt(E) == 2 && (w = 0);
        }
    }
  return o;
}
function nd(e, t, n, r, i, o, s, a, l, u, f, c) {
  for (
    var d = i - 1, m = i === 0 ? o : [""], y = Zm(m), w = 0, k = 0, g = 0;
    w < r;
    ++w
  )
    for (var h = 0, p = Lr(e, d + 1, (d = Xm((k = s[w])))), x = e; h < y; ++h)
      (x = Jm(k > 0 ? m[h] + " " + p : F(p, /&\f/g, m[h]))) && (l[g++] = x);
  return Js(e, t, n, i === 0 ? Ys : a, l, u, f, c);
}
function U1(e, t, n, r) {
  return Js(e, t, n, Qm, mc(D1()), Lr(e, 2, -2), 0, r);
}
function rd(e, t, n, r, i) {
  return Js(e, t, n, pc, Lr(e, 0, r), Lr(e, r + 1, -1), r, i);
}
function eg(e, t, n) {
  switch (A1(e, t)) {
    case 5103:
      return B + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return B + e + e;
    case 4789:
      return yi + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return B + e + yi + e + Y + e + e;
    case 5936:
      switch (ye(e, t + 11)) {
        case 114:
          return B + e + Y + F(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return B + e + Y + F(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return B + e + Y + F(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return B + e + Y + e + e;
    case 6165:
      return B + e + Y + "flex-" + e + e;
    case 5187:
      return (
        B + e + F(e, /(\w+).+(:[^]+)/, B + "box-$1$2" + Y + "flex-$1$2") + e
      );
    case 5443:
      return (
        B +
        e +
        Y +
        "flex-item-" +
        F(e, /flex-|-self/g, "") +
        (Rt(e, /flex-|baseline/)
          ? ""
          : Y + "grid-row-" + F(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        B +
        e +
        Y +
        "flex-line-pack" +
        F(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return B + e + Y + F(e, "shrink", "negative") + e;
    case 5292:
      return B + e + Y + F(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        B +
        "box-" +
        F(e, "-grow", "") +
        B +
        e +
        Y +
        F(e, "grow", "positive") +
        e
      );
    case 4554:
      return B + F(e, /([^-])(transform)/g, "$1" + B + "$2") + e;
    case 6187:
      return (
        F(F(F(e, /(zoom-|grab)/, B + "$1"), /(image-set)/, B + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return F(e, /(image-set\([^]*)/, B + "$1$`$1");
    case 4968:
      return (
        F(
          F(e, /(.+:)(flex-)?(.*)/, B + "box-pack:$3" + Y + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        B +
        e +
        e
      );
    case 4200:
      if (!Rt(e, /flex-|baseline/))
        return Y + "grid-column-align" + Lr(e, t) + e;
      break;
    case 2592:
    case 3360:
      return Y + F(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, i) {
          return ((t = i), Rt(r.props, /grid-\w+-end/));
        })
        ? ~zo(e + (n = n[t].value), "span", 0)
          ? e
          : Y +
            F(e, "-start", "") +
            e +
            Y +
            "grid-row-span:" +
            (~zo(n, "span", 0) ? Rt(n, /\d+/) : +Rt(n, /\d+/) - +Rt(e, /\d+/)) +
            ";"
        : Y + F(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return Rt(r.props, /grid-\w+-start/);
        })
        ? e
        : Y + F(F(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return F(e, /(.+)-inline(.+)/, B + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (kt(e) - 1 - t > 6)
        switch (ye(e, t + 1)) {
          case 109:
            if (ye(e, t + 4) !== 45) break;
          case 102:
            return (
              F(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  B +
                  "$2-$3$1" +
                  yi +
                  (ye(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~zo(e, "stretch", 0)
              ? eg(F(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return F(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, i, o, s, a, l, u) {
          return (
            Y +
            i +
            ":" +
            o +
            u +
            (s ? Y + i + "-span:" + (a ? l : +l - +o) + u : "") +
            e
          );
        },
      );
    case 4949:
      if (ye(e, t + 6) === 121) return F(e, ":", ":" + B) + e;
      break;
    case 6444:
      switch (ye(e, ye(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            F(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                B +
                (ye(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                B +
                "$2$3$1" +
                Y +
                "$2box$3",
            ) + e
          );
        case 100:
          return F(e, ":", ":" + Y) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return F(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function gs(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function W1(e, t, n, r) {
  switch (e.type) {
    case L1:
      if (e.children.length) break;
    case j1:
    case pc:
      return (e.return = e.return || e.value);
    case Qm:
      return "";
    case Ym:
      return (e.return = e.value + "{" + gs(e.children, r) + "}");
    case Ys:
      if (!kt((e.value = e.props.join(",")))) return "";
  }
  return kt((n = gs(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function H1(e) {
  var t = Zm(e);
  return function (n, r, i, o) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, i, o) || "";
    return s;
  };
}
function G1(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function K1(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case pc:
        e.return = eg(e.value, e.length, n);
        return;
      case Ym:
        return gs([Ht(e, { value: F(e.value, "@", "@" + B) })], r);
      case Ys:
        if (e.length)
          return M1((n = e.props), function (i) {
            switch (Rt(i, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                (Zn(Ht(e, { props: [F(i, /:(read-\w+)/, ":" + yi + "$1")] })),
                  Zn(Ht(e, { props: [i] })),
                  Ql(e, { props: td(n, r) }));
                break;
              case "::placeholder":
                (Zn(
                  Ht(e, { props: [F(i, /:(plac\w+)/, ":" + B + "input-$1")] }),
                ),
                  Zn(Ht(e, { props: [F(i, /:(plac\w+)/, ":" + yi + "$1")] })),
                  Zn(Ht(e, { props: [F(i, /:(plac\w+)/, Y + "input-$1")] })),
                  Zn(Ht(e, { props: [i] })),
                  Ql(e, { props: td(n, r) }));
                break;
            }
            return "";
          });
    }
}
var Q1 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Ue = {},
  Mr =
    (typeof process < "u" &&
      Ue !== void 0 &&
      (Ue.REACT_APP_SC_ATTR || Ue.SC_ATTR)) ||
    "data-styled",
  tg = "active",
  ng = "data-styled-version",
  qs = "6.1.19",
  gc = `/*!sc*/
`,
  ys = typeof window < "u" && typeof document < "u",
  Y1 = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
        Ue !== void 0 &&
        Ue.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        Ue.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? Ue.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
        Ue.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        Ue !== void 0 &&
        Ue.SC_DISABLE_SPEEDY !== void 0 &&
        Ue.SC_DISABLE_SPEEDY !== "" &&
        Ue.SC_DISABLE_SPEEDY !== "false" &&
        Ue.SC_DISABLE_SPEEDY),
  X1 = {},
  ea = Object.freeze([]),
  Dr = Object.freeze({});
function rg(e, t, n) {
  return (
    n === void 0 && (n = Dr),
    (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var ig = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  J1 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Z1 = /(^-|-$)/g;
function id(e) {
  return e.replace(J1, "-").replace(Z1, "");
}
var q1 = /(a)(d)/gi,
  So = 52,
  od = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Jl(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > So; t = (t / So) | 0) n = od(t % So) + n;
  return (od(t % So) + n).replace(q1, "$1-$2");
}
var za,
  og = 5381,
  dr = function (e, t) {
    for (var n = t.length; n;) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  sg = function (e) {
    return dr(og, e);
  };
function yc(e) {
  return Jl(sg(e) >>> 0);
}
function ew(e) {
  return e.displayName || e.name || "Component";
}
function Na(e) {
  return typeof e == "string" && !0;
}
var ag = typeof Symbol == "function" && Symbol.for,
  lg = ag ? Symbol.for("react.memo") : 60115,
  tw = ag ? Symbol.for("react.forward_ref") : 60112,
  nw = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  rw = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  ug = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  iw =
    (((za = {})[tw] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (za[lg] = ug),
    za);
function sd(e) {
  return ("type" in (t = e) && t.type.$$typeof) === lg
    ? ug
    : "$$typeof" in e
      ? iw[e.$$typeof]
      : nw;
  var t;
}
var ow = Object.defineProperty,
  sw = Object.getOwnPropertyNames,
  ad = Object.getOwnPropertySymbols,
  aw = Object.getOwnPropertyDescriptor,
  lw = Object.getPrototypeOf,
  ld = Object.prototype;
function cg(e, t, n) {
  if (typeof t != "string") {
    if (ld) {
      var r = lw(t);
      r && r !== ld && cg(e, r, n);
    }
    var i = sw(t);
    ad && (i = i.concat(ad(t)));
    for (var o = sd(e), s = sd(t), a = 0; a < i.length; ++a) {
      var l = i[a];
      if (!(l in rw || (n && n[l]) || (s && l in s) || (o && l in o))) {
        var u = aw(t, l);
        try {
          ow(e, l, u);
        } catch {}
      }
    }
  }
  return e;
}
function Wn(e) {
  return typeof e == "function";
}
function vc(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Mn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function vs(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function zi(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function Zl(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !zi(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = Zl(e[r], t[r]);
  else if (zi(t)) for (var r in t) e[r] = Zl(e[r], t[r]);
  return e;
}
function wc(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Hn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""),
  );
}
var uw = (function () {
    function e(t) {
      ((this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t));
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, i = r.length, o = i; t >= o;)
            if ((o <<= 1) < 0) throw Hn(16, "".concat(t));
          ((this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(r),
            (this.length = o));
          for (var s = i; s < o; s++) this.groupSizes[s] = 0;
        }
        for (
          var a = this.indexOfGroup(t + 1), l = ((s = 0), n.length);
          s < l;
          s++
        )
          this.tag.insertRule(a, n[s]) && (this.groupSizes[t]++, a++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            i = r + n;
          this.groupSizes[t] = 0;
          for (var o = r; o < i; o++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            i = this.indexOfGroup(t),
            o = i + r,
            s = i;
          s < o;
          s++
        )
          n += "".concat(this.tag.getRule(s)).concat(gc);
        return n;
      }),
      e
    );
  })(),
  Bo = new Map(),
  ws = new Map(),
  Uo = 1,
  ko = function (e) {
    if (Bo.has(e)) return Bo.get(e);
    for (; ws.has(Uo);) Uo++;
    var t = Uo++;
    return (Bo.set(e, t), ws.set(t, e), t);
  },
  cw = function (e, t) {
    ((Uo = t + 1), Bo.set(e, t), ws.set(t, e));
  },
  fw = "style[".concat(Mr, "][").concat(ng, '="').concat(qs, '"]'),
  dw = new RegExp(
    "^".concat(Mr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ),
  hw = function (e, t, n) {
    for (var r, i = n.split(","), o = 0, s = i.length; o < s; o++)
      (r = i[o]) && e.registerName(t, r);
  },
  pw = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(gc),
        i = [],
        o = 0,
        s = r.length;
      o < s;
      o++
    ) {
      var a = r[o].trim();
      if (a) {
        var l = a.match(dw);
        if (l) {
          var u = 0 | parseInt(l[1], 10),
            f = l[2];
          (u !== 0 && (cw(f, u), hw(e, f, l[3]), e.getTag().insertRules(u, i)),
            (i.length = 0));
        } else i.push(a);
      }
    }
  },
  ud = function (e) {
    for (
      var t = document.querySelectorAll(fw), n = 0, r = t.length;
      n < r;
      n++
    ) {
      var i = t[n];
      i &&
        i.getAttribute(Mr) !== tg &&
        (pw(e, i), i.parentNode && i.parentNode.removeChild(i));
    }
  };
function mw() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var fg = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      i = (function (a) {
        var l = Array.from(a.querySelectorAll("style[".concat(Mr, "]")));
        return l[l.length - 1];
      })(n),
      o = i !== void 0 ? i.nextSibling : null;
    (r.setAttribute(Mr, tg), r.setAttribute(ng, qs));
    var s = mw();
    return (s && r.setAttribute("nonce", s), n.insertBefore(r, o), r);
  },
  gw = (function () {
    function e(t) {
      ((this.element = fg(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, i = 0, o = r.length; i < o; i++) {
            var s = r[i];
            if (s.ownerNode === n) return s;
          }
          throw Hn(17);
        })(this.element)),
        (this.length = 0));
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return (this.sheet.insertRule(n, t), this.length++, !0);
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        (this.sheet.deleteRule(t), this.length--);
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  yw = (function () {
    function e(t) {
      ((this.element = fg(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0));
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        (this.element.removeChild(this.nodes[t]), this.length--);
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  vw = (function () {
    function e(t) {
      ((this.rules = []), (this.length = 0));
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        (this.rules.splice(t, 1), this.length--);
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  cd = ys,
  ww = { isServer: !ys, useCSSOMInjection: !Y1 },
  xs = (function () {
    function e(t, n, r) {
      (t === void 0 && (t = Dr), n === void 0 && (n = {}));
      var i = this;
      ((this.options = ve(ve({}, ww), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server && ys && cd && ((cd = !1), ud(this)),
        wc(this, function () {
          return (function (o) {
            for (
              var s = o.getTag(),
                a = s.length,
                l = "",
                u = function (c) {
                  var d = (function (g) {
                    return ws.get(g);
                  })(c);
                  if (d === void 0) return "continue";
                  var m = o.names.get(d),
                    y = s.getGroup(c);
                  if (m === void 0 || !m.size || y.length === 0)
                    return "continue";
                  var w = ""
                      .concat(Mr, ".g")
                      .concat(c, '[id="')
                      .concat(d, '"]'),
                    k = "";
                  (m !== void 0 &&
                    m.forEach(function (g) {
                      g.length > 0 && (k += "".concat(g, ","));
                    }),
                    (l += ""
                      .concat(y)
                      .concat(w, '{content:"')
                      .concat(k, '"}')
                      .concat(gc)));
                },
                f = 0;
              f < a;
              f++
            )
              u(f);
            return l;
          })(i);
        }));
    }
    return (
      (e.registerId = function (t) {
        return ko(t);
      }),
      (e.prototype.rehydrate = function () {
        !this.server && ys && ud(this);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            ve(ve({}, this.options), t),
            this.gs,
            (n && this.names) || void 0,
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                i = n.target;
              return n.isServer ? new vw(i) : r ? new gw(i) : new yw(i);
            })(this.options)),
            new uw(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((ko(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          (r.add(n), this.names.set(t, r));
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        (this.registerName(t, n), this.getTag().insertRules(ko(t), r));
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        (this.getTag().clearGroup(ko(t)), this.clearNames(t));
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  xw = /&/g,
  Sw = /^\s*\/\/.*$/gm;
function dg(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = dg(n.children, t)),
      n
    );
  });
}
function kw(e) {
  var t,
    n,
    r,
    i = Dr,
    o = i.options,
    s = o === void 0 ? Dr : o,
    a = i.plugins,
    l = a === void 0 ? ea : a,
    u = function (d, m, y) {
      return y.startsWith(n) && y.endsWith(n) && y.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : d;
    },
    f = l.slice();
  (f.push(function (d) {
    d.type === Ys &&
      d.value.includes("&") &&
      (d.props[0] = d.props[0].replace(xw, n).replace(r, u));
  }),
    s.prefix && f.push(K1),
    f.push(W1));
  var c = function (d, m, y, w) {
    (m === void 0 && (m = ""),
      y === void 0 && (y = ""),
      w === void 0 && (w = "&"),
      (t = w),
      (n = m),
      (r = new RegExp("\\".concat(n, "\\b"), "g")));
    var k = d.replace(Sw, ""),
      g = B1(y || m ? "".concat(y, " ").concat(m, " { ").concat(k, " }") : k);
    s.namespace && (g = dg(g, s.namespace));
    var h = [];
    return (
      gs(
        g,
        H1(
          f.concat(
            G1(function (p) {
              return h.push(p);
            }),
          ),
        ),
      ),
      h
    );
  };
  return (
    (c.hash = l.length
      ? l
          .reduce(function (d, m) {
            return (m.name || Hn(15), dr(d, m.name));
          }, og)
          .toString()
      : ""),
    c
  );
}
var Cw = new xs(),
  ql = kw(),
  hg = Ae.createContext({
    shouldForwardProp: void 0,
    styleSheet: Cw,
    stylis: ql,
  });
hg.Consumer;
Ae.createContext(void 0);
function eu() {
  return S.useContext(hg);
}
var pg = (function () {
    function e(t, n) {
      var r = this;
      ((this.inject = function (i, o) {
        o === void 0 && (o = ql);
        var s = r.name + o.hash;
        i.hasNameForId(r.id, s) ||
          i.insertRules(r.id, s, o(r.rules, s, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        wc(this, function () {
          throw Hn(12, String(r.name));
        }));
    }
    return (
      (e.prototype.getName = function (t) {
        return (t === void 0 && (t = ql), this.name + t.hash);
      }),
      e
    );
  })(),
  Pw = function (e) {
    return e >= "A" && e <= "Z";
  };
function fd(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Pw(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var mg = function (e) {
    return e == null || e === !1 || e === "";
  },
  gg = function (e) {
    var t,
      n,
      r = [];
    for (var i in e) {
      var o = e[i];
      e.hasOwnProperty(i) &&
        !mg(o) &&
        ((Array.isArray(o) && o.isCss) || Wn(o)
          ? r.push("".concat(fd(i), ":"), o, ";")
          : zi(o)
            ? r.push.apply(
                r,
                jr(jr(["".concat(i, " {")], gg(o), !1), ["}"], !1),
              )
            : r.push(
                ""
                  .concat(fd(i), ": ")
                  .concat(
                    ((t = i),
                    (n = o) == null || typeof n == "boolean" || n === ""
                      ? ""
                      : typeof n != "number" ||
                          n === 0 ||
                          t in Q1 ||
                          t.startsWith("--")
                        ? String(n).trim()
                        : "".concat(n, "px")),
                    ";",
                  ),
              ));
    }
    return r;
  };
function cn(e, t, n, r) {
  if (mg(e)) return [];
  if (vc(e)) return [".".concat(e.styledComponentId)];
  if (Wn(e)) {
    if (!Wn((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t)
      return [e];
    var i = e(t);
    return cn(i, t, n, r);
  }
  var o;
  return e instanceof pg
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : zi(e)
      ? gg(e)
      : Array.isArray(e)
        ? Array.prototype.concat.apply(
            ea,
            e.map(function (s) {
              return cn(s, t, n, r);
            }),
          )
        : [e.toString()];
}
function yg(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Wn(n) && !vc(n)) return !1;
  }
  return !0;
}
var Ew = sg(qs),
  Tw = (function () {
    function e(t, n, r) {
      ((this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && yg(t)),
        (this.componentId = n),
        (this.baseHash = dr(Ew, n)),
        (this.baseStyle = r),
        xs.registerId(n));
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = Mn(i, this.staticRulesId);
          else {
            var o = vs(cn(this.rules, t, n, r)),
              s = Jl(dr(this.baseHash, o) >>> 0);
            if (!n.hasNameForId(this.componentId, s)) {
              var a = r(o, ".".concat(s), void 0, this.componentId);
              n.insertRules(this.componentId, s, a);
            }
            ((i = Mn(i, s)), (this.staticRulesId = s));
          }
        else {
          for (
            var l = dr(this.baseHash, r.hash), u = "", f = 0;
            f < this.rules.length;
            f++
          ) {
            var c = this.rules[f];
            if (typeof c == "string") u += c;
            else if (c) {
              var d = vs(cn(c, t, n, r));
              ((l = dr(l, d + f)), (u += d));
            }
          }
          if (u) {
            var m = Jl(l >>> 0);
            (n.hasNameForId(this.componentId, m) ||
              n.insertRules(
                this.componentId,
                m,
                r(u, ".".concat(m), void 0, this.componentId),
              ),
              (i = Mn(i, m)));
          }
        }
        return i;
      }),
      e
    );
  })(),
  Ni = Ae.createContext(void 0);
Ni.Consumer;
function Ji(e) {
  var t = Ae.useContext(Ni),
    n = S.useMemo(
      function () {
        return (function (r, i) {
          if (!r) throw Hn(14);
          if (Wn(r)) {
            var o = r(i);
            return o;
          }
          if (Array.isArray(r) || typeof r != "object") throw Hn(8);
          return i ? ve(ve({}, i), r) : r;
        })(e.theme, t);
      },
      [e.theme, t],
    );
  return e.children
    ? Ae.createElement(Ni.Provider, { value: n }, e.children)
    : null;
}
var Oa = {};
function _w(e, t, n) {
  var r = vc(e),
    i = e,
    o = !Na(e),
    s = t.attrs,
    a = s === void 0 ? ea : s,
    l = t.componentId,
    u =
      l === void 0
        ? (function (x, C) {
            var P = typeof x != "string" ? "sc" : id(x);
            Oa[P] = (Oa[P] || 0) + 1;
            var E = "".concat(P, "-").concat(yc(qs + P + Oa[P]));
            return C ? "".concat(C, "-").concat(E) : E;
          })(t.displayName, t.parentComponentId)
        : l,
    f = t.displayName,
    c =
      f === void 0
        ? (function (x) {
            return Na(x) ? "styled.".concat(x) : "Styled(".concat(ew(x), ")");
          })(e)
        : f,
    d =
      t.displayName && t.componentId
        ? "".concat(id(t.displayName), "-").concat(t.componentId)
        : t.componentId || u,
    m = r && i.attrs ? i.attrs.concat(a).filter(Boolean) : a,
    y = t.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var w = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var k = t.shouldForwardProp;
      y = function (x, C) {
        return w(x, C) && k(x, C);
      };
    } else y = w;
  }
  var g = new Tw(n, d, r ? i.componentStyle : void 0);
  function h(x, C) {
    return (function (P, E, T) {
      var M = P.attrs,
        D = P.componentStyle,
        re = P.defaultProps,
        de = P.foldedComponentIds,
        xe = P.styledComponentId,
        le = P.target,
        vt = Ae.useContext(Ni),
        Z = eu(),
        Pe = P.shouldForwardProp || Z.shouldForwardProp,
        b = rg(E, vt, re) || Dr,
        A = (function (lt, he, Je) {
          for (
            var kn,
              ut = ve(ve({}, he), { className: void 0, theme: Je }),
              Ut = 0;
            Ut < lt.length;
            Ut += 1
          ) {
            var Ze = Wn((kn = lt[Ut])) ? kn(ut) : kn;
            for (var _t in Ze)
              ut[_t] =
                _t === "className"
                  ? Mn(ut[_t], Ze[_t])
                  : _t === "style"
                    ? ve(ve({}, ut[_t]), Ze[_t])
                    : Ze[_t];
          }
          return (
            he.className && (ut.className = Mn(ut.className, he.className)),
            ut
          );
        })(M, E, b),
        $ = A.as || le,
        I = {};
      for (var N in A)
        A[N] === void 0 ||
          N[0] === "$" ||
          N === "as" ||
          (N === "theme" && A.theme === b) ||
          (N === "forwardedAs"
            ? (I.as = A.forwardedAs)
            : (Pe && !Pe(N, $)) || (I[N] = A[N]));
      var wt = (function (lt, he) {
          var Je = eu(),
            kn = lt.generateAndInjectStyles(he, Je.styleSheet, Je.stylis);
          return kn;
        })(D, A),
        Ve = Mn(de, xe);
      return (
        wt && (Ve += " " + wt),
        A.className && (Ve += " " + A.className),
        (I[Na($) && !ig.has($) ? "class" : "className"] = Ve),
        T && (I.ref = T),
        S.createElement($, I)
      );
    })(p, x, C);
  }
  h.displayName = c;
  var p = Ae.forwardRef(h);
  return (
    (p.attrs = m),
    (p.componentStyle = g),
    (p.displayName = c),
    (p.shouldForwardProp = y),
    (p.foldedComponentIds = r
      ? Mn(i.foldedComponentIds, i.styledComponentId)
      : ""),
    (p.styledComponentId = d),
    (p.target = r ? i.target : e),
    Object.defineProperty(p, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (x) {
        this._foldedDefaultProps = r
          ? (function (C) {
              for (var P = [], E = 1; E < arguments.length; E++)
                P[E - 1] = arguments[E];
              for (var T = 0, M = P; T < M.length; T++) Zl(C, M[T], !0);
              return C;
            })({}, i.defaultProps, x)
          : x;
      },
    }),
    wc(p, function () {
      return ".".concat(p.styledComponentId);
    }),
    o &&
      cg(p, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    p
  );
}
function dd(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var hd = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function xc(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Wn(e) || zi(e)) return hd(cn(dd(ea, jr([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? cn(r)
    : hd(cn(dd(r, t)));
}
function tu(e, t, n) {
  if ((n === void 0 && (n = Dr), !t)) throw Hn(1, t);
  var r = function (i) {
    for (var o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s];
    return e(t, n, xc.apply(void 0, jr([i], o, !1)));
  };
  return (
    (r.attrs = function (i) {
      return tu(
        e,
        t,
        ve(ve({}, n), {
          attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
        }),
      );
    }),
    (r.withConfig = function (i) {
      return tu(e, t, ve(ve({}, n), i));
    }),
    r
  );
}
var vg = function (e) {
    return tu(_w, e);
  },
  R = vg;
ig.forEach(function (e) {
  R[e] = vg(e);
});
var bw = (function () {
  function e(t, n) {
    ((this.rules = t),
      (this.componentId = n),
      (this.isStatic = yg(t)),
      xs.registerId(this.componentId + 1));
  }
  return (
    (e.prototype.createStyles = function (t, n, r, i) {
      var o = i(vs(cn(this.rules, n, r, i)), ""),
        s = this.componentId + t;
      r.insertRules(s, s, o);
    }),
    (e.prototype.removeStyles = function (t, n) {
      n.clearRules(this.componentId + t);
    }),
    (e.prototype.renderStyles = function (t, n, r, i) {
      (t > 2 && xs.registerId(this.componentId + t),
        this.removeStyles(t, r),
        this.createStyles(t, n, r, i));
    }),
    e
  );
})();
function Rw(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = xc.apply(void 0, jr([e], t, !1)),
    i = "sc-global-".concat(yc(JSON.stringify(r))),
    o = new bw(r, i),
    s = function (l) {
      var u = eu(),
        f = Ae.useContext(Ni),
        c = Ae.useRef(u.styleSheet.allocateGSInstance(i)).current;
      return (
        u.styleSheet.server && a(c, l, u.styleSheet, f, u.stylis),
        Ae.useLayoutEffect(
          function () {
            if (!u.styleSheet.server)
              return (
                a(c, l, u.styleSheet, f, u.stylis),
                function () {
                  return o.removeStyles(c, u.styleSheet);
                }
              );
          },
          [c, l, u.styleSheet, f, u.stylis],
        ),
        null
      );
    };
  function a(l, u, f, c, d) {
    if (o.isStatic) o.renderStyles(l, X1, f, d);
    else {
      var m = ve(ve({}, u), { theme: rg(u, c, s.defaultProps) });
      o.renderStyles(l, m, f, d);
    }
  }
  return Ae.memo(s);
}
function wg(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = vs(xc.apply(void 0, jr([e], t, !1))),
    i = yc(r);
  return new pg(i, r);
}
const xg = {
    body: "#FCF6F4",
    text: "#000000",
    fontFamily: "'Source Sans Pro', sans-serif",
    bodyRgba: "252, 246, 244",
    textRgba: "0,0,0",
  },
  Ss = {
    body: "#000000",
    text: "#FCF6F4",
    fontFamily: "'Source Sans Pro', sans-serif",
    textRgba: "252, 246, 244",
    bodyRgba: "0,0,0",
  },
  L = (e) => (t) => `@media (max-width: ${e}em) { ${t} }`,
  jw = Rw`

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}

body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro',sans-serif;
}

`;
/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Oi() {
  return (
    (Oi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Oi.apply(this, arguments)
  );
}
var en;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(en || (en = {}));
const pd = "popstate";
function Lw(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return nu(
      "",
      { pathname: o, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : ks(i);
  }
  return Mw(t, n, null, e);
}
function oe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Sc(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Aw() {
  return Math.random().toString(36).substr(2, 8);
}
function md(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function nu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Oi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Br(t) : t,
      { state: n, key: (t && t.key) || r || Aw() },
    )
  );
}
function ks(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Br(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function Mw(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = en.Pop,
    l = null,
    u = f();
  u == null && ((u = 0), s.replaceState(Oi({}, s.state, { idx: u }), ""));
  function f() {
    return (s.state || { idx: null }).idx;
  }
  function c() {
    a = en.Pop;
    let k = f(),
      g = k == null ? null : k - u;
    ((u = k), l && l({ action: a, location: w.location, delta: g }));
  }
  function d(k, g) {
    a = en.Push;
    let h = nu(w.location, k, g);
    u = f() + 1;
    let p = md(h, u),
      x = w.createHref(h);
    try {
      s.pushState(p, "", x);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      i.location.assign(x);
    }
    o && l && l({ action: a, location: w.location, delta: 1 });
  }
  function m(k, g) {
    a = en.Replace;
    let h = nu(w.location, k, g);
    u = f();
    let p = md(h, u),
      x = w.createHref(h);
    (s.replaceState(p, "", x),
      o && l && l({ action: a, location: w.location, delta: 0 }));
  }
  function y(k) {
    let g = i.location.origin !== "null" ? i.location.origin : i.location.href,
      h = typeof k == "string" ? k : ks(k);
    return (
      (h = h.replace(/ $/, "%20")),
      oe(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          h,
      ),
      new URL(h, g)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(k) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(pd, c),
        (l = k),
        () => {
          (i.removeEventListener(pd, c), (l = null));
        }
      );
    },
    createHref(k) {
      return t(i, k);
    },
    createURL: y,
    encodeLocation(k) {
      let g = y(k);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: d,
    replace: m,
    go(k) {
      return s.go(k);
    },
  };
  return w;
}
var gd;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(gd || (gd = {}));
function Dw(e, t, n) {
  return (n === void 0 && (n = "/"), Iw(e, t, n));
}
function Iw(e, t, n, r) {
  let i = typeof t == "string" ? Br(t) : t,
    o = Ir(i.pathname || "/", n);
  if (o == null) return null;
  let s = Sg(e);
  Vw(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = Kw(o);
    a = Hw(s[l], u);
  }
  return a;
}
function Sg(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (oe(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = fn([r, l.relativePath]),
      f = n.concat(l);
    (o.children &&
      o.children.length > 0 &&
      (oe(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      Sg(o.children, t, f, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: Uw(u, o.index), routesMeta: f }));
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else for (let l of kg(o.path)) i(o, s, l);
    }),
    t
  );
}
function kg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = kg(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function Vw(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Ww(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const $w = /^:[\w-]+$/,
  Fw = 3,
  zw = 2,
  Nw = 1,
  Ow = 10,
  Bw = -2,
  yd = (e) => e === "*";
function Uw(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(yd) && (r += Bw),
    t && (r += zw),
    n
      .filter((i) => !yd(i))
      .reduce((i, o) => i + ($w.test(o) ? Fw : o === "" ? Nw : Ow), r)
  );
}
function Ww(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Hw(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      f = o === "/" ? t : t.slice(o.length) || "/",
      c = ru(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        f,
      ),
      d = l.route;
    if (!c) return null;
    (Object.assign(i, c.params),
      s.push({
        params: i,
        pathname: fn([o, c.pathname]),
        pathnameBase: Zw(fn([o, c.pathnameBase])),
        route: d,
      }),
      c.pathnameBase !== "/" && (o = fn([o, c.pathnameBase])));
  }
  return s;
}
function ru(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Gw(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, f, c) => {
      let { paramName: d, isOptional: m } = f;
      if (d === "*") {
        let w = a[c] || "";
        s = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const y = a[c];
      return (
        m && !y ? (u[d] = void 0) : (u[d] = (y || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function Gw(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Sc(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Kw(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Sc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Ir(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Qw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Yw = (e) => Qw.test(e);
function Xw(e, t) {
  t === void 0 && (t = "/");
  let {
      pathname: n,
      search: r = "",
      hash: i = "",
    } = typeof e == "string" ? Br(e) : e,
    o;
  if (n)
    if (Yw(n)) o = n;
    else {
      if (n.includes("//")) {
        let s = n;
        ((n = n.replace(/\/\/+/g, "/")),
          Sc(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (s + " -> " + n),
          ));
      }
      n.startsWith("/") ? (o = vd(n.substring(1), "/")) : (o = vd(n, t));
    }
  else o = t;
  return { pathname: o, search: qw(r), hash: ex(i) };
}
function vd(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ba(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Jw(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Cg(e, t) {
  let n = Jw(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Pg(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Br(e))
    : ((i = Oi({}, e)),
      oe(
        !i.pathname || !i.pathname.includes("?"),
        Ba("?", "pathname", "search", i),
      ),
      oe(
        !i.pathname || !i.pathname.includes("#"),
        Ba("#", "pathname", "hash", i),
      ),
      oe(!i.search || !i.search.includes("#"), Ba("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    a;
  if (s == null) a = n;
  else {
    let c = t.length - 1;
    if (!r && s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === "..";) (d.shift(), (c -= 1));
      i.pathname = d.join("/");
    }
    a = c >= 0 ? t[c] : "/";
  }
  let l = Xw(i, a),
    u = s && s !== "/" && s.endsWith("/"),
    f = (o || s === ".") && n.endsWith("/");
  return (!l.pathname.endsWith("/") && (u || f) && (l.pathname += "/"), l);
}
const fn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Zw = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  qw = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  ex = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function tx(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Eg = ["post", "put", "patch", "delete"];
new Set(Eg);
const nx = ["get", ...Eg];
new Set(nx);
/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bi() {
  return (
    (Bi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bi.apply(this, arguments)
  );
}
const ta = S.createContext(null),
  Tg = S.createContext(null),
  xn = S.createContext(null),
  na = S.createContext(null),
  Qn = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  _g = S.createContext(null);
function rx(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Zi() || oe(!1);
  let { basename: r, navigator: i } = S.useContext(xn),
    { hash: o, pathname: s, search: a } = ra(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : fn([r, s])),
    i.createHref({ pathname: l, search: a, hash: o })
  );
}
function Zi() {
  return S.useContext(na) != null;
}
function Ur() {
  return (Zi() || oe(!1), S.useContext(na).location);
}
function bg(e) {
  S.useContext(xn).static || S.useLayoutEffect(e);
}
function ix() {
  let { isDataRoute: e } = S.useContext(Qn);
  return e ? yx() : ox();
}
function ox() {
  Zi() || oe(!1);
  let e = S.useContext(ta),
    { basename: t, future: n, navigator: r } = S.useContext(xn),
    { matches: i } = S.useContext(Qn),
    { pathname: o } = Ur(),
    s = JSON.stringify(Cg(i, n.v7_relativeSplatPath)),
    a = S.useRef(!1);
  return (
    bg(() => {
      a.current = !0;
    }),
    S.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let c = Pg(u, JSON.parse(s), o, f.relative === "path");
        (e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : fn([t, c.pathname])),
          (f.replace ? r.replace : r.push)(c, f.state, f));
      },
      [t, r, s, o, e],
    )
  );
}
function ra(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = S.useContext(xn),
    { matches: i } = S.useContext(Qn),
    { pathname: o } = Ur(),
    s = JSON.stringify(Cg(i, r.v7_relativeSplatPath));
  return S.useMemo(() => Pg(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function sx(e, t) {
  return ax(e, t);
}
function ax(e, t, n, r) {
  Zi() || oe(!1);
  let { navigator: i } = S.useContext(xn),
    { matches: o } = S.useContext(Qn),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = Ur(),
    f;
  if (t) {
    var c;
    let k = typeof t == "string" ? Br(t) : t;
    (l === "/" || ((c = k.pathname) != null && c.startsWith(l)) || oe(!1),
      (f = k));
  } else f = u;
  let d = f.pathname || "/",
    m = d;
  if (l !== "/") {
    let k = l.replace(/^\//, "").split("/");
    m = "/" + d.replace(/^\//, "").split("/").slice(k.length).join("/");
  }
  let y = Dw(e, { pathname: m }),
    w = dx(
      y &&
        y.map((k) =>
          Object.assign({}, k, {
            params: Object.assign({}, a, k.params),
            pathname: fn([
              l,
              i.encodeLocation
                ? i.encodeLocation(k.pathname).pathname
                : k.pathname,
            ]),
            pathnameBase:
              k.pathnameBase === "/"
                ? l
                : fn([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(k.pathnameBase).pathname
                      : k.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
      r,
    );
  return t && w
    ? S.createElement(
        na.Provider,
        {
          value: {
            location: Bi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f,
            ),
            navigationType: en.Pop,
          },
        },
        w,
      )
    : w;
}
function lx() {
  let e = gx(),
    t = tx(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: i }, n) : null,
    null,
  );
}
const ux = S.createElement(lx, null);
class cx extends S.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          Qn.Provider,
          { value: this.props.routeContext },
          S.createElement(_g.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function fx(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = S.useContext(ta);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Qn.Provider, { value: t }, r)
  );
}
function dx(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let f = s.findIndex(
      (c) => c.route.id && (a == null ? void 0 : a[c.route.id]) !== void 0,
    );
    (f >= 0 || oe(!1), (s = s.slice(0, Math.min(s.length, f + 1))));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < s.length; f++) {
      let c = s[f];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = f),
        c.route.id)
      ) {
        let { loaderData: d, errors: m } = n,
          y =
            c.route.loader &&
            d[c.route.id] === void 0 &&
            (!m || m[c.route.id] === void 0);
        if (c.route.lazy || y) {
          ((l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]));
          break;
        }
      }
    }
  return s.reduceRight((f, c, d) => {
    let m,
      y = !1,
      w = null,
      k = null;
    n &&
      ((m = a && c.route.id ? a[c.route.id] : void 0),
      (w = c.route.errorElement || ux),
      l &&
        (u < 0 && d === 0
          ? (vx("route-fallback"), (y = !0), (k = null))
          : u === d &&
            ((y = !0), (k = c.route.hydrateFallbackElement || null))));
    let g = t.concat(s.slice(0, d + 1)),
      h = () => {
        let p;
        return (
          m
            ? (p = w)
            : y
              ? (p = k)
              : c.route.Component
                ? (p = S.createElement(c.route.Component, null))
                : c.route.element
                  ? (p = c.route.element)
                  : (p = f),
          S.createElement(fx, {
            match: c,
            routeContext: { outlet: f, matches: g, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || d === 0)
      ? S.createElement(cx, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: m,
          children: h(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var Rg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Rg || {}),
  jg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(jg || {});
function hx(e) {
  let t = S.useContext(ta);
  return (t || oe(!1), t);
}
function px(e) {
  let t = S.useContext(Tg);
  return (t || oe(!1), t);
}
function mx(e) {
  let t = S.useContext(Qn);
  return (t || oe(!1), t);
}
function Lg(e) {
  let t = mx(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || oe(!1), n.route.id);
}
function gx() {
  var e;
  let t = S.useContext(_g),
    n = px(),
    r = Lg();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function yx() {
  let { router: e } = hx(Rg.UseNavigateStable),
    t = Lg(jg.UseNavigateStable),
    n = S.useRef(!1);
  return (
    bg(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (i, o) {
        (o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Bi({ fromRouteId: t }, o))));
      },
      [e, t],
    )
  );
}
const wd = {};
function vx(e, t, n) {
  wd[e] || (wd[e] = !0);
}
function wx(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function Tn(e) {
  oe(!1);
}
function xx(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = en.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  Zi() && oe(!1);
  let l = t.replace(/^\/*/, "/"),
    u = S.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: s,
        future: Bi({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, o, s],
    );
  typeof r == "string" && (r = Br(r));
  let {
      pathname: f = "/",
      search: c = "",
      hash: d = "",
      state: m = null,
      key: y = "default",
    } = r,
    w = S.useMemo(() => {
      let k = Ir(f, l);
      return k == null
        ? null
        : {
            location: { pathname: k, search: c, hash: d, state: m, key: y },
            navigationType: i,
          };
    }, [l, f, c, d, m, y, i]);
  return w == null
    ? null
    : S.createElement(
        xn.Provider,
        { value: u },
        S.createElement(na.Provider, { children: n, value: w }),
      );
}
function Sx(e) {
  let { children: t, location: n } = e;
  return sx(iu(t), n);
}
new Promise(() => {});
function iu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, i) => {
      if (!S.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === S.Fragment) {
        n.push.apply(n, iu(r.props.children, o));
        return;
      }
      (r.type !== Tn && oe(!1), !r.props.index || !r.props.children || oe(!1));
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (s.children = iu(r.props.children, o)), n.push(s));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Cs() {
  return (
    (Cs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cs.apply(this, arguments)
  );
}
function Ag(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    ((i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]));
  return n;
}
function kx(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Cx(e, t) {
  return e.button === 0 && (!t || t === "_self") && !kx(e);
}
const Px = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  Ex = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  Tx = "6";
try {
  window.__reactRouterVersion = Tx;
} catch {}
const _x = S.createContext({ isTransitioning: !1 }),
  bx = "startTransition",
  xd = vy[bx];
function Rx(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = S.useRef();
  o.current == null && (o.current = Lw({ window: i, v5Compat: !0 }));
  let s = o.current,
    [a, l] = S.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    f = S.useCallback(
      (c) => {
        u && xd ? xd(() => l(c)) : l(c);
      },
      [l, u],
    );
  return (
    S.useLayoutEffect(() => s.listen(f), [s, f]),
    S.useEffect(() => wx(r), [r]),
    S.createElement(xx, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
const jx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Lx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ax = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: f,
        viewTransition: c,
      } = t,
      d = Ag(t, Px),
      { basename: m } = S.useContext(xn),
      y,
      w = !1;
    if (typeof u == "string" && Lx.test(u) && ((y = u), jx))
      try {
        let p = new URL(window.location.href),
          x = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u),
          C = Ir(x.pathname, m);
        x.origin === p.origin && C != null
          ? (u = C + x.search + x.hash)
          : (w = !0);
      } catch {}
    let k = rx(u, { relative: i }),
      g = Dx(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: f,
        relative: i,
        viewTransition: c,
      });
    function h(p) {
      (r && r(p), p.defaultPrevented || g(p));
    }
    return S.createElement(
      "a",
      Cs({}, d, { href: y || k, onClick: w || o ? r : h, ref: n, target: l }),
    );
  }),
  Wr = S.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: s = !1,
        style: a,
        to: l,
        viewTransition: u,
        children: f,
      } = t,
      c = Ag(t, Ex),
      d = ra(l, { relative: c.relative }),
      m = Ur(),
      y = S.useContext(Tg),
      { navigator: w, basename: k } = S.useContext(xn),
      g = y != null && Ix(d) && u === !0,
      h = w.encodeLocation ? w.encodeLocation(d).pathname : d.pathname,
      p = m.pathname,
      x =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    (i ||
      ((p = p.toLowerCase()),
      (x = x ? x.toLowerCase() : null),
      (h = h.toLowerCase())),
      x && k && (x = Ir(x, k) || x));
    const C = h !== "/" && h.endsWith("/") ? h.length - 1 : h.length;
    let P = p === h || (!s && p.startsWith(h) && p.charAt(C) === "/"),
      E =
        x != null &&
        (x === h || (!s && x.startsWith(h) && x.charAt(h.length) === "/")),
      T = { isActive: P, isPending: E, isTransitioning: g },
      M = P ? r : void 0,
      D;
    typeof o == "function"
      ? (D = o(T))
      : (D = [
          o,
          P ? "active" : null,
          E ? "pending" : null,
          g ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let re = typeof a == "function" ? a(T) : a;
    return S.createElement(
      Ax,
      Cs({}, c, {
        "aria-current": M,
        className: D,
        ref: n,
        style: re,
        to: l,
        viewTransition: u,
      }),
      typeof f == "function" ? f(T) : f,
    );
  });
var ou;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(ou || (ou = {}));
var Sd;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Sd || (Sd = {}));
function Mx(e) {
  let t = S.useContext(ta);
  return (t || oe(!1), t);
}
function Dx(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = ix(),
    u = Ur(),
    f = ra(e, { relative: s });
  return S.useCallback(
    (c) => {
      if (Cx(c, n)) {
        c.preventDefault();
        let d = r !== void 0 ? r : ks(u) === ks(f);
        l(e, {
          replace: d,
          state: i,
          preventScrollReset: o,
          relative: s,
          viewTransition: a,
        });
      }
    },
    [u, l, f, r, i, n, e, o, s, a],
  );
}
function Ix(e, t) {
  t === void 0 && (t = {});
  let n = S.useContext(_x);
  n == null && oe(!1);
  let { basename: r } = Mx(ou.useViewTransitionState),
    i = ra(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = Ir(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = Ir(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return ru(i.pathname, s) != null || ru(i.pathname, o) != null;
}
const Mg = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  ia = S.createContext({}),
  oa = S.createContext(null),
  sa = typeof document < "u",
  kc = sa ? S.useLayoutEffect : S.useEffect,
  Dg = S.createContext({ strict: !1 }),
  Cc = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  Vx = "framerAppearId",
  Ig = "data-" + Cc(Vx);
function $x(e, t, n, r) {
  const { visualElement: i } = S.useContext(ia),
    o = S.useContext(Dg),
    s = S.useContext(oa),
    a = S.useContext(Mg).reducedMotion,
    l = S.useRef();
  ((r = r || o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      })));
  const u = l.current;
  S.useInsertionEffect(() => {
    u && u.update(n, s);
  });
  const f = S.useRef(!!(n[Ig] && !window.HandoffComplete));
  return (
    kc(() => {
      u &&
        (u.render(),
        f.current && u.animationState && u.animationState.animateChanges());
    }),
    S.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !f.current && u.animationState && u.animationState.animateChanges(),
        f.current && ((f.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function hr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Fx(e, t, n) {
  return S.useCallback(
    (r) => {
      (r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : hr(n) && (n.current = r)));
    },
    [t],
  );
}
function Ui(e) {
  return typeof e == "string" || Array.isArray(e);
}
function aa(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Pc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ec = ["initial", ...Pc];
function la(e) {
  return aa(e.animate) || Ec.some((t) => Ui(e[t]));
}
function Vg(e) {
  return !!(la(e) || e.variants);
}
function zx(e, t) {
  if (la(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ui(n) ? n : void 0,
      animate: Ui(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Nx(e) {
  const { initial: t, animate: n } = zx(e, S.useContext(ia));
  return S.useMemo(() => ({ initial: t, animate: n }), [kd(t), kd(n)]);
}
function kd(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Cd = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Wi = {};
for (const e in Cd) Wi[e] = { isEnabled: (t) => Cd[e].some((n) => !!t[n]) };
function Ox(e) {
  for (const t in e) Wi[t] = { ...Wi[t], ...e[t] };
}
const Tc = S.createContext({}),
  $g = S.createContext({}),
  Bx = Symbol.for("motionComponentSymbol");
function Ux({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Ox(e);
  function o(a, l) {
    let u;
    const f = { ...S.useContext(Mg), ...a, layoutId: Wx(a) },
      { isStatic: c } = f,
      d = Nx(a),
      m = r(a, c);
    if (!c && sa) {
      d.visualElement = $x(i, m, f, t);
      const y = S.useContext($g),
        w = S.useContext(Dg).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(f, w, e, y));
    }
    return S.createElement(
      ia.Provider,
      { value: d },
      u && d.visualElement
        ? S.createElement(u, { visualElement: d.visualElement, ...f })
        : null,
      n(i, a, Fx(m, d.visualElement, l), m, c, d.visualElement),
    );
  }
  const s = S.forwardRef(o);
  return ((s[Bx] = i), s);
}
function Wx({ layoutId: e }) {
  const t = S.useContext(Tc).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Hx(e) {
  function t(r, i = {}) {
    return Ux(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const Gx = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function _c(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Gx.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Ps = {};
function Kx(e) {
  Object.assign(Ps, e);
}
const qi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Yn = new Set(qi);
function Fg(e, { layout: t, layoutId: n }) {
  return (
    Yn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Ps[e] || e === "opacity"))
  );
}
const Be = (e) => !!(e && e.getVelocity),
  Qx = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Yx = qi.length;
function Xx(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i,
) {
  let o = "";
  for (let s = 0; s < Yx; s++) {
    const a = qi[s];
    if (e[a] !== void 0) {
      const l = Qx[a] || a;
      o += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const zg = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Ng = zg("--"),
  su = zg("var(--"),
  Jx =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  Zx = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  mn = (e, t, n) => Math.min(Math.max(n, e), t),
  Xn = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  vi = { ...Xn, transform: (e) => mn(0, 1, e) },
  Co = { ...Xn, default: 1 },
  wi = (e) => Math.round(e * 1e5) / 1e5,
  ua = /(-)?([\d]*\.?[\d])+/g,
  Og =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  qx =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function eo(e) {
  return typeof e == "string";
}
const to = (e) => ({
    test: (t) => eo(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Gt = to("deg"),
  Tt = to("%"),
  V = to("px"),
  e2 = to("vh"),
  t2 = to("vw"),
  Pd = {
    ...Tt,
    parse: (e) => Tt.parse(e) / 100,
    transform: (e) => Tt.transform(e * 100),
  },
  Ed = { ...Xn, transform: Math.round },
  Bg = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    radius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    size: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    rotate: Gt,
    rotateX: Gt,
    rotateY: Gt,
    rotateZ: Gt,
    scale: Co,
    scaleX: Co,
    scaleY: Co,
    scaleZ: Co,
    skew: Gt,
    skewX: Gt,
    skewY: Gt,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: vi,
    originX: Pd,
    originY: Pd,
    originZ: V,
    zIndex: Ed,
    fillOpacity: vi,
    strokeOpacity: vi,
    numOctaves: Ed,
  };
function bc(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    f = !0;
  for (const c in t) {
    const d = t[c];
    if (Ng(c)) {
      o[c] = d;
      continue;
    }
    const m = Bg[c],
      y = Zx(d, m);
    if (Yn.has(c)) {
      if (((l = !0), (s[c] = y), !f)) continue;
      d !== (m.default || 0) && (f = !1);
    } else c.startsWith("origin") ? ((u = !0), (a[c] = y)) : (i[c] = y);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = Xx(e.transform, n, f, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: c = "50%", originY: d = "50%", originZ: m = 0 } = a;
    i.transformOrigin = `${c} ${d} ${m}`;
  }
}
const Rc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Ug(e, t, n) {
  for (const r in t) !Be(t[r]) && !Fg(r, n) && (e[r] = t[r]);
}
function n2({ transformTemplate: e }, t, n) {
  return S.useMemo(() => {
    const r = Rc();
    return (
      bc(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function r2(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    Ug(i, r, e),
    Object.assign(i, n2(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function i2(e, t, n) {
  const r = {},
    i = r2(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const o2 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Es(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    o2.has(e)
  );
}
let Wg = (e) => !Es(e);
function s2(e) {
  e && (Wg = (t) => (t.startsWith("on") ? !Es(t) : e(t)));
}
try {
  s2(require("@emotion/is-prop-valid").default);
} catch {}
function a2(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Wg(i) ||
        (n === !0 && Es(i)) ||
        (!t && !Es(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Td(e, t, n) {
  return typeof e == "string" ? e : V.transform(t + n * e);
}
function l2(e, t, n) {
  const r = Td(t, e.x, e.width),
    i = Td(n, e.y, e.height);
  return `${r} ${i}`;
}
const u2 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  c2 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function f2(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? u2 : c2;
  e[o.offset] = V.transform(-r);
  const s = V.transform(t),
    a = V.transform(n);
  e[o.array] = `${s} ${a}`;
}
function jc(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  f,
  c,
  d,
) {
  if ((bc(e, u, f, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: m, style: y, dimensions: w } = e;
  (m.transform && (w && (y.transform = m.transform), delete m.transform),
    w &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = l2(
        w,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5,
      )),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    s !== void 0 && f2(m, s, a, l, !1));
}
const Hg = () => ({ ...Rc(), attrs: {} }),
  Lc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function d2(e, t, n, r) {
  const i = S.useMemo(() => {
    const o = Hg();
    return (
      jc(o, t, { enableHardwareAcceleration: !1 }, Lc(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    (Ug(o, e.style, e), (i.style = { ...o, ...i.style }));
  }
  return i;
}
function h2(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (_c(n) ? d2 : i2)(r, o, s, n),
      f = { ...a2(r, typeof n == "string", e), ...l, ref: i },
      { children: c } = r,
      d = S.useMemo(() => (Be(c) ? c.get() : c), [c]);
    return S.createElement(n, { ...f, children: d });
  };
}
function Gg(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const Kg = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Qg(e, t, n, r) {
  Gg(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Kg.has(i) ? i : Cc(i), t.attrs[i]);
}
function Ac(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (Be(n[i]) || (t.style && Be(t.style[i])) || Fg(i, e)) && (r[i] = n[i]);
  return r;
}
function Yg(e, t) {
  const n = Ac(e, t);
  for (const r in e)
    if (Be(e[r]) || Be(t[r])) {
      const i =
        qi.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function Mc(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function Xg(e) {
  const t = S.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const Ts = (e) => Array.isArray(e),
  p2 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  m2 = (e) => (Ts(e) ? e[e.length - 1] || 0 : e);
function Wo(e) {
  const t = Be(e) ? e.get() : e;
  return p2(t) ? t.toValue() : t;
}
function g2(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o,
) {
  const s = { latestValues: y2(r, i, o, e), renderState: t() };
  return (n && (s.mount = (a) => n(r, a, s)), s);
}
const Jg = (e) => (t, n) => {
  const r = S.useContext(ia),
    i = S.useContext(oa),
    o = () => g2(e, t, r, i);
  return n ? o() : Xg(o);
};
function y2(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = Wo(o[d]);
  let { initial: s, animate: a } = e;
  const l = la(e),
    u = Vg(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let f = n ? n.initial === !1 : !1;
  f = f || s === !1;
  const c = f ? a : s;
  return (
    c &&
      typeof c != "boolean" &&
      !aa(c) &&
      (Array.isArray(c) ? c : [c]).forEach((m) => {
        const y = Mc(e, m);
        if (!y) return;
        const { transitionEnd: w, transition: k, ...g } = y;
        for (const h in g) {
          let p = g[h];
          if (Array.isArray(p)) {
            const x = f ? p.length - 1 : 0;
            p = p[x];
          }
          p !== null && (i[h] = p);
        }
        for (const h in w) i[h] = w[h];
      }),
    i
  );
}
const ae = (e) => e;
class _d {
  constructor() {
    ((this.order = []), (this.scheduled = new Set()));
  }
  add(t) {
    if (!this.scheduled.has(t))
      return (this.scheduled.add(t), this.order.push(t), !0);
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    ((this.order.length = 0), this.scheduled.clear());
  }
}
function v2(e) {
  let t = new _d(),
    n = new _d(),
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, f = !1) => {
        const c = f && i,
          d = c ? t : n;
        return (u && s.add(l), d.add(l) && c && i && (r = t.order.length), l);
      },
      cancel: (l) => {
        (n.remove(l), s.delete(l));
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const f = t.order[u];
            (f(l), s.has(f) && (a.schedule(f), e()));
          }
        ((i = !1), o && ((o = !1), a.process(l)));
      },
    };
  return a;
}
const Po = ["prepare", "read", "update", "preRender", "render", "postRender"],
  w2 = 40;
function x2(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = Po.reduce((c, d) => ((c[d] = v2(() => (n = !0))), c), {}),
    s = (c) => o[c].process(i),
    a = () => {
      const c = performance.now();
      ((n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(c - i.timestamp, w2), 1)),
        (i.timestamp = c),
        (i.isProcessing = !0),
        Po.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(a)));
    },
    l = () => {
      ((n = !0), (r = !0), i.isProcessing || e(a));
    };
  return {
    schedule: Po.reduce((c, d) => {
      const m = o[d];
      return (
        (c[d] = (y, w = !1, k = !1) => (n || l(), m.schedule(y, w, k))),
        c
      );
    }, {}),
    cancel: (c) => Po.forEach((d) => o[d].cancel(c)),
    state: i,
    steps: o,
  };
}
const {
    schedule: G,
    cancel: Ot,
    state: _e,
    steps: Ua,
  } = x2(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ae, !0),
  S2 = {
    useVisualState: Jg({
      scrapeMotionValuesFromProps: Yg,
      createRenderState: Hg,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        (G.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          G.render(() => {
            (jc(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Lc(t.tagName),
              e.transformTemplate,
            ),
              Qg(t, n));
          }));
      },
    }),
  },
  k2 = {
    useVisualState: Jg({
      scrapeMotionValuesFromProps: Ac,
      createRenderState: Rc,
    }),
  };
function C2(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(_c(e) ? S2 : k2),
    preloadedFeatures: n,
    useRender: h2(t),
    createVisualElement: r,
    Component: e,
  };
}
function Mt(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
const Zg = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function ca(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const P2 = (e) => (t) => Zg(t) && e(t, ca(t));
function It(e, t, n, r) {
  return Mt(e, t, P2(n), r);
}
const E2 = (e, t) => (n) => t(e(n)),
  dn = (...e) => e.reduce(E2);
function qg(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const bd = qg("dragHorizontal"),
  Rd = qg("dragVertical");
function e0(e) {
  let t = !1;
  if (e === "y") t = Rd();
  else if (e === "x") t = bd();
  else {
    const n = bd(),
      r = Rd();
    n && r
      ? (t = () => {
          (n(), r());
        })
      : (n && n(), r && r());
  }
  return t;
}
function t0() {
  const e = e0(!0);
  return e ? (e(), !1) : !0;
}
class Sn {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
function jd(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.pointerType === "touch" || t0()) return;
      const a = e.getProps();
      (e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t),
        a[r] && G.update(() => a[r](o, s)));
    };
  return It(e.current, n, i, { passive: !e.getProps()[r] });
}
class T2 extends Sn {
  mount() {
    this.unmount = dn(jd(this.node, !0), jd(this.node, !1));
  }
  unmount() {}
}
class _2 extends Sn {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = dn(
      Mt(this.node.current, "focus", () => this.onFocus()),
      Mt(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
const n0 = (e, t) => (t ? (e === t ? !0 : n0(e, t.parentElement)) : !1);
function Wa(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, ca(n));
}
class b2 extends Sn {
  constructor() {
    (super(...arguments),
      (this.removeStartListeners = ae),
      (this.removeEndListeners = ae),
      (this.removeAccessibleListeners = ae),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = It(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: u,
                onTapCancel: f,
                globalTapTarget: c,
              } = this.node.getProps();
              G.update(() => {
                !c && !n0(this.node.current, a.target)
                  ? f && f(a, l)
                  : u && u(a, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) },
          ),
          s = It(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        ((this.removeEndListeners = dn(o, s)), this.startPress(t, n));
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Wa("up", (l, u) => {
                  const { onTap: f } = this.node.getProps();
                  f && G.update(() => f(l, u));
                });
            };
            (this.removeEndListeners(),
              (this.removeEndListeners = Mt(this.node.current, "keyup", s)),
              Wa("down", (a, l) => {
                this.startPress(a, l);
              }));
          },
          n = Mt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Wa("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = Mt(this.node.current, "blur", r);
        this.removeAccessibleListeners = dn(n, i);
      }));
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    (i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && G.update(() => r(t, n)));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !t0()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && G.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = It(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) },
      ),
      r = Mt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = dn(n, r);
  }
  unmount() {
    (this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners());
  }
}
const au = new WeakMap(),
  Ha = new WeakMap(),
  R2 = (e) => {
    const t = au.get(e.target);
    t && t(e);
  },
  j2 = (e) => {
    e.forEach(R2);
  };
function L2({ root: e, ...t }) {
  const n = e || document;
  Ha.has(n) || Ha.set(n, {});
  const r = Ha.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(j2, { root: e, ...t })),
    r[i]
  );
}
function A2(e, t, n) {
  const r = L2(t);
  return (
    au.set(e, n),
    r.observe(e),
    () => {
      (au.delete(e), r.unobserve(e));
    }
  );
}
const M2 = { some: 0, all: 1 };
class D2 extends Sn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : M2[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u));
        const { onViewportEnter: f, onViewportLeave: c } = this.node.getProps(),
          d = u ? f : c;
        d && d(l);
      };
    return A2(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(I2(t, n)) && this.startObserver();
  }
  unmount() {}
}
function I2({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const V2 = {
  inView: { Feature: D2 },
  tap: { Feature: b2 },
  focus: { Feature: _2 },
  hover: { Feature: T2 },
};
function r0(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function $2(e) {
  const t = {};
  return (e.values.forEach((n, r) => (t[r] = n.get())), t);
}
function F2(e) {
  const t = {};
  return (e.values.forEach((n, r) => (t[r] = n.getVelocity())), t);
}
function fa(e, t, n) {
  const r = e.getProps();
  return Mc(r, t, n !== void 0 ? n : r.custom, $2(e), F2(e));
}
let Dc = ae;
const Fn = (e) => e * 1e3,
  Vt = (e) => e / 1e3,
  z2 = { current: !1 },
  i0 = (e) => Array.isArray(e) && typeof e[0] == "number";
function o0(e) {
  return !!(
    !e ||
    (typeof e == "string" && s0[e]) ||
    i0(e) ||
    (Array.isArray(e) && e.every(o0))
  );
}
const ai = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  s0 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ai([0, 0.65, 0.55, 1]),
    circOut: ai([0.55, 0, 1, 0.45]),
    backIn: ai([0.31, 0.01, 0.66, -0.59]),
    backOut: ai([0.33, 1.53, 0.69, 0.99]),
  };
function a0(e) {
  if (e) return i0(e) ? ai(e) : Array.isArray(e) ? e.map(a0) : s0[e];
}
function N2(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {},
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const f = a0(a);
  return (
    Array.isArray(f) && (u.easing = f),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(f) ? "linear" : f,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function O2(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const l0 = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  B2 = 1e-7,
  U2 = 12;
function W2(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do ((s = t + (n - t) / 2), (o = l0(s, r, i) - e), o > 0 ? (n = s) : (t = s));
  while (Math.abs(o) > B2 && ++a < U2);
  return s;
}
function no(e, t, n, r) {
  if (e === t && n === r) return ae;
  const i = (o) => W2(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : l0(i(o), t, r));
}
const H2 = no(0.42, 0, 1, 1),
  G2 = no(0, 0, 0.58, 1),
  u0 = no(0.42, 0, 0.58, 1),
  K2 = (e) => Array.isArray(e) && typeof e[0] != "number",
  c0 = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  f0 = (e) => (t) => 1 - e(1 - t),
  Ic = (e) => 1 - Math.sin(Math.acos(e)),
  d0 = f0(Ic),
  Q2 = c0(Ic),
  h0 = no(0.33, 1.53, 0.69, 0.99),
  Vc = f0(h0),
  Y2 = c0(Vc),
  X2 = (e) =>
    (e *= 2) < 1 ? 0.5 * Vc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  J2 = {
    linear: ae,
    easeIn: H2,
    easeInOut: u0,
    easeOut: G2,
    circIn: Ic,
    circInOut: Q2,
    circOut: d0,
    backIn: Vc,
    backInOut: Y2,
    backOut: h0,
    anticipate: X2,
  },
  Ld = (e) => {
    if (Array.isArray(e)) {
      Dc(e.length === 4);
      const [t, n, r, i] = e;
      return no(t, n, r, i);
    } else if (typeof e == "string") return J2[e];
    return e;
  },
  $c = (e, t) => (n) =>
    !!(
      (eo(n) && qx.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  p0 = (e, t, n) => (r) => {
    if (!eo(r)) return r;
    const [i, o, s, a] = r.match(ua);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Z2 = (e) => mn(0, 255, e),
  Ga = { ...Xn, transform: (e) => Math.round(Z2(e)) },
  Dn = {
    test: $c("rgb", "red"),
    parse: p0("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ga.transform(e) +
      ", " +
      Ga.transform(t) +
      ", " +
      Ga.transform(n) +
      ", " +
      wi(vi.transform(r)) +
      ")",
  };
function q2(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const lu = { test: $c("#"), parse: q2, transform: Dn.transform },
  pr = {
    test: $c("hsl", "hue"),
    parse: p0("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Tt.transform(wi(t)) +
      ", " +
      Tt.transform(wi(n)) +
      ", " +
      wi(vi.transform(r)) +
      ")",
  },
  je = {
    test: (e) => Dn.test(e) || lu.test(e) || pr.test(e),
    parse: (e) =>
      Dn.test(e) ? Dn.parse(e) : pr.test(e) ? pr.parse(e) : lu.parse(e),
    transform: (e) =>
      eo(e) ? e : e.hasOwnProperty("red") ? Dn.transform(e) : pr.transform(e),
  },
  ee = (e, t, n) => -n * e + n * t + e;
function Ka(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function e5({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((i = Ka(l, a, e + 1 / 3)), (o = Ka(l, a, e)), (s = Ka(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Qa = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  t5 = [lu, Dn, pr],
  n5 = (e) => t5.find((t) => t.test(e));
function Ad(e) {
  const t = n5(e);
  let n = t.parse(e);
  return (t === pr && (n = e5(n)), n);
}
const m0 = (e, t) => {
  const n = Ad(e),
    r = Ad(t),
    i = { ...n };
  return (o) => (
    (i.red = Qa(n.red, r.red, o)),
    (i.green = Qa(n.green, r.green, o)),
    (i.blue = Qa(n.blue, r.blue, o)),
    (i.alpha = ee(n.alpha, r.alpha, o)),
    Dn.transform(i)
  );
};
function r5(e) {
  var t, n;
  return (
    isNaN(e) &&
    eo(e) &&
    (((t = e.match(ua)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Og)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const g0 = { regex: Jx, countKey: "Vars", token: "${v}", parse: ae },
  y0 = { regex: Og, countKey: "Colors", token: "${c}", parse: je.parse },
  v0 = { regex: ua, countKey: "Numbers", token: "${n}", parse: Xn.parse };
function Ya(e, { regex: t, countKey: n, token: r, parse: i }) {
  const o = e.tokenised.match(t);
  o &&
    ((e["num" + n] = o.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...o.map(i)));
}
function _s(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return (n.value.includes("var(--") && Ya(n, g0), Ya(n, y0), Ya(n, v0), n);
}
function w0(e) {
  return _s(e).values;
}
function x0(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = _s(e),
    o = t.length;
  return (s) => {
    let a = i;
    for (let l = 0; l < o; l++)
      l < r
        ? (a = a.replace(g0.token, s[l]))
        : l < r + n
          ? (a = a.replace(y0.token, je.transform(s[l])))
          : (a = a.replace(v0.token, wi(s[l])));
    return a;
  };
}
const i5 = (e) => (typeof e == "number" ? 0 : e);
function o5(e) {
  const t = w0(e);
  return x0(e)(t.map(i5));
}
const gn = {
    test: r5,
    parse: w0,
    createTransformer: x0,
    getAnimatableNone: o5,
  },
  S0 = (e, t) => (n) => `${n > 0 ? t : e}`;
function k0(e, t) {
  return typeof e == "number"
    ? (n) => ee(e, t, n)
    : je.test(e)
      ? m0(e, t)
      : e.startsWith("var(")
        ? S0(e, t)
        : P0(e, t);
}
const C0 = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, s) => k0(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n;
    };
  },
  s5 = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = k0(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  P0 = (e, t) => {
    const n = gn.createTransformer(t),
      r = _s(e),
      i = _s(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? dn(C0(r.values, i.values), n)
      : S0(e, t);
  },
  Hi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Md = (e, t) => (n) => ee(e, t, n);
function a5(e) {
  return typeof e == "number"
    ? Md
    : typeof e == "string"
      ? je.test(e)
        ? m0
        : P0
      : Array.isArray(e)
        ? C0
        : typeof e == "object"
          ? s5
          : Md;
}
function l5(e, t, n) {
  const r = [],
    i = n || a5(e[0]),
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || ae : t;
      a = dn(l, a);
    }
    r.push(a);
  }
  return r;
}
function E0(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((Dc(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = l5(t, r, i),
    a = s.length,
    l = (u) => {
      let f = 0;
      if (a > 1) for (; f < e.length - 2 && !(u < e[f + 1]); f++);
      const c = Hi(e[f], e[f + 1], u);
      return s[f](c);
    };
  return n ? (u) => l(mn(e[0], e[o - 1], u)) : l;
}
function u5(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Hi(0, t, r);
    e.push(ee(n, 1, i));
  }
}
function c5(e) {
  const t = [0];
  return (u5(t, e.length - 1), t);
}
function f5(e, t) {
  return e.map((n) => n * t);
}
function d5(e, t) {
  return e.map(() => t || u0).splice(0, e.length - 1);
}
function bs({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = K2(r) ? r.map(Ld) : Ld(r),
    o = { done: !1, value: t[0] },
    s = f5(n && n.length === t.length ? n : c5(t), e),
    a = E0(s, t, { ease: Array.isArray(i) ? i : d5(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
function T0(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const h5 = 5;
function _0(e, t, n) {
  const r = Math.max(t - h5, 0);
  return T0(n - e(r), t - r);
}
const Xa = 0.001,
  p5 = 0.01,
  m5 = 10,
  g5 = 0.05,
  y5 = 1;
function v5({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    o,
    s = 1 - t;
  ((s = mn(g5, y5, s)),
    (e = mn(p5, m5, Vt(e))),
    s < 1
      ? ((i = (u) => {
          const f = u * s,
            c = f * e,
            d = f - n,
            m = uu(u, s),
            y = Math.exp(-c);
          return Xa - (d / m) * y;
        }),
        (o = (u) => {
          const c = u * s * e,
            d = c * n + n,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-c),
            w = uu(Math.pow(u, 2), s);
          return ((-i(u) + Xa > 0 ? -1 : 1) * ((d - m) * y)) / w;
        }))
      : ((i = (u) => {
          const f = Math.exp(-u * e),
            c = (u - n) * e + 1;
          return -Xa + f * c;
        }),
        (o = (u) => {
          const f = Math.exp(-u * e),
            c = (n - u) * (e * e);
          return f * c;
        })));
  const a = 5 / e,
    l = x5(i, o, a);
  if (((e = Fn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const w5 = 12;
function x5(e, t, n) {
  let r = n;
  for (let i = 1; i < w5; i++) r = r - e(r) / t(r);
  return r;
}
function uu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const S5 = ["duration", "bounce"],
  k5 = ["stiffness", "damping", "mass"];
function Dd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function C5(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Dd(e, k5) && Dd(e, S5)) {
    const n = v5(e);
    ((t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0));
  }
  return t;
}
function b0({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: f,
      velocity: c,
      isResolvedFromDuration: d,
    } = C5({ ...r, velocity: -Vt(r.velocity || 0) }),
    m = c || 0,
    y = l / (2 * Math.sqrt(a * u)),
    w = o - i,
    k = Vt(Math.sqrt(a / u)),
    g = Math.abs(w) < 5;
  (n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5));
  let h;
  if (y < 1) {
    const p = uu(k, y);
    h = (x) => {
      const C = Math.exp(-y * k * x);
      return (
        o - C * (((m + y * k * w) / p) * Math.sin(p * x) + w * Math.cos(p * x))
      );
    };
  } else if (y === 1) h = (p) => o - Math.exp(-k * p) * (w + (m + k * w) * p);
  else {
    const p = k * Math.sqrt(y * y - 1);
    h = (x) => {
      const C = Math.exp(-y * k * x),
        P = Math.min(p * x, 300);
      return (
        o - (C * ((m + y * k * w) * Math.sinh(P) + p * w * Math.cosh(P))) / p
      );
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (p) => {
      const x = h(p);
      if (d) s.done = p >= f;
      else {
        let C = m;
        p !== 0 && (y < 1 ? (C = _0(h, p, x)) : (C = 0));
        const P = Math.abs(C) <= n,
          E = Math.abs(o - x) <= t;
        s.done = P && E;
      }
      return ((s.value = s.done ? o : x), s);
    },
  };
}
function Id({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: f,
}) {
  const c = e[0],
    d = { done: !1, value: c },
    m = (T) => (a !== void 0 && T < a) || (l !== void 0 && T > l),
    y = (T) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - T) < Math.abs(l - T)
          ? a
          : l;
  let w = n * t;
  const k = c + w,
    g = s === void 0 ? k : s(k);
  g !== k && (w = g - c);
  const h = (T) => -w * Math.exp(-T / r),
    p = (T) => g + h(T),
    x = (T) => {
      const M = h(T),
        D = p(T);
      ((d.done = Math.abs(M) <= u), (d.value = d.done ? g : D));
    };
  let C, P;
  const E = (T) => {
    m(d.value) &&
      ((C = T),
      (P = b0({
        keyframes: [d.value, y(d.value)],
        velocity: _0(p, T, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: f,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let M = !1;
        return (
          !P && C === void 0 && ((M = !0), x(T), E(T)),
          C !== void 0 && T > C ? P.next(T - C) : (!M && x(T), d)
        );
      },
    }
  );
}
const P5 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => G.update(t, !0),
      stop: () => Ot(t),
      now: () => (_e.isProcessing ? _e.timestamp : performance.now()),
    };
  },
  Vd = 2e4;
function $d(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Vd;) ((t += n), (r = e.next(t)));
  return t >= Vd ? 1 / 0 : t;
}
const E5 = { decay: Id, inertia: Id, tween: bs, keyframes: bs, spring: b0 };
function Rs({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = P5,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: u,
  onComplete: f,
  onUpdate: c,
  ...d
}) {
  let m = 1,
    y = !1,
    w,
    k;
  const g = () => {
    k = new Promise((I) => {
      w = I;
    });
  };
  g();
  let h;
  const p = E5[i] || bs;
  let x;
  p !== bs &&
    typeof r[0] != "number" &&
    ((x = E0([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const C = p({ ...d, keyframes: r });
  let P;
  a === "mirror" &&
    (P = p({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let E = "idle",
    T = null,
    M = null,
    D = null;
  C.calculatedDuration === null && o && (C.calculatedDuration = $d(C));
  const { calculatedDuration: re } = C;
  let de = 1 / 0,
    xe = 1 / 0;
  re !== null && ((de = re + s), (xe = de * (o + 1) - s));
  let le = 0;
  const vt = (I) => {
      if (M === null) return;
      (m > 0 && (M = Math.min(M, I)),
        m < 0 && (M = Math.min(I - xe / m, M)),
        T !== null ? (le = T) : (le = Math.round(I - M) * m));
      const N = le - t * (m >= 0 ? 1 : -1),
        wt = m >= 0 ? N < 0 : N > xe;
      ((le = Math.max(N, 0)), E === "finished" && T === null && (le = xe));
      let Ve = le,
        lt = C;
      if (o) {
        const ut = Math.min(le, xe) / de;
        let Ut = Math.floor(ut),
          Ze = ut % 1;
        (!Ze && ut >= 1 && (Ze = 1),
          Ze === 1 && Ut--,
          (Ut = Math.min(Ut, o + 1)),
          !!(Ut % 2) &&
            (a === "reverse"
              ? ((Ze = 1 - Ze), s && (Ze -= s / de))
              : a === "mirror" && (lt = P)),
          (Ve = mn(0, 1, Ze) * de));
      }
      const he = wt ? { done: !1, value: r[0] } : lt.next(Ve);
      x && (he.value = x(he.value));
      let { done: Je } = he;
      !wt && re !== null && (Je = m >= 0 ? le >= xe : le <= 0);
      const kn = T === null && (E === "finished" || (E === "running" && Je));
      return (c && c(he.value), kn && b(), he);
    },
    Z = () => {
      (h && h.stop(), (h = void 0));
    },
    Pe = () => {
      ((E = "idle"), Z(), w(), g(), (M = D = null));
    },
    b = () => {
      ((E = "finished"), f && f(), Z(), w());
    },
    A = () => {
      if (y) return;
      h || (h = n(vt));
      const I = h.now();
      (l && l(),
        T !== null ? (M = I - T) : (!M || E === "finished") && (M = I),
        E === "finished" && g(),
        (D = M),
        (T = null),
        (E = "running"),
        h.start());
    };
  e && A();
  const $ = {
    then(I, N) {
      return k.then(I, N);
    },
    get time() {
      return Vt(le);
    },
    set time(I) {
      ((I = Fn(I)),
        (le = I),
        T !== null || !h || m === 0 ? (T = I) : (M = h.now() - I / m));
    },
    get duration() {
      const I = C.calculatedDuration === null ? $d(C) : C.calculatedDuration;
      return Vt(I);
    },
    get speed() {
      return m;
    },
    set speed(I) {
      I === m || !h || ((m = I), ($.time = Vt(le)));
    },
    get state() {
      return E;
    },
    play: A,
    pause: () => {
      ((E = "paused"), (T = le));
    },
    stop: () => {
      ((y = !0), E !== "idle" && ((E = "idle"), u && u(), Pe()));
    },
    cancel: () => {
      (D !== null && vt(D), Pe());
    },
    complete: () => {
      E = "finished";
    },
    sample: (I) => ((M = 0), vt(I)),
  };
  return $;
}
function T5(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const _5 = T5(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  b5 = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Eo = 10,
  R5 = 2e4,
  j5 = (e, t) => t.type === "spring" || e === "backgroundColor" || !o0(t.ease);
function L5(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (!(
    _5() &&
    b5.has(t) &&
    !i.repeatDelay &&
    i.repeatType !== "mirror" &&
    i.damping !== 0 &&
    i.type !== "inertia"
  ))
    return !1;
  let s = !1,
    a,
    l,
    u = !1;
  const f = () => {
    l = new Promise((p) => {
      a = p;
    });
  };
  f();
  let { keyframes: c, duration: d = 300, ease: m, times: y } = i;
  if (j5(t, i)) {
    const p = Rs({ ...i, repeat: 0, delay: 0 });
    let x = { done: !1, value: c[0] };
    const C = [];
    let P = 0;
    for (; !x.done && P < R5;) ((x = p.sample(P)), C.push(x.value), (P += Eo));
    ((y = void 0), (c = C), (d = P - Eo), (m = "linear"));
  }
  const w = N2(e.owner.current, t, c, { ...i, duration: d, ease: m, times: y }),
    k = () => {
      ((u = !1), w.cancel());
    },
    g = () => {
      ((u = !0), G.update(k), a(), f());
    };
  return (
    (w.onfinish = () => {
      u || (e.set(O2(c, i)), r && r(), g());
    }),
    {
      then(p, x) {
        return l.then(p, x);
      },
      attachTimeline(p) {
        return ((w.timeline = p), (w.onfinish = null), ae);
      },
      get time() {
        return Vt(w.currentTime || 0);
      },
      set time(p) {
        w.currentTime = Fn(p);
      },
      get speed() {
        return w.playbackRate;
      },
      set speed(p) {
        w.playbackRate = p;
      },
      get duration() {
        return Vt(d);
      },
      play: () => {
        s || (w.play(), Ot(k));
      },
      pause: () => w.pause(),
      stop: () => {
        if (((s = !0), w.playState === "idle")) return;
        const { currentTime: p } = w;
        if (p) {
          const x = Rs({ ...i, autoplay: !1 });
          e.setWithVelocity(x.sample(p - Eo).value, x.sample(p).value, Eo);
        }
        g();
      },
      complete: () => {
        u || w.finish();
      },
      cancel: g,
    }
  );
}
function A5({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: ae,
      pause: ae,
      stop: ae,
      then: (o) => (o(), Promise.resolve()),
      cancel: ae,
      complete: ae,
    }
  );
  return t
    ? Rs({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const M5 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  D5 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  I5 = { type: "keyframes", duration: 0.8 },
  V5 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  $5 = (e, { keyframes: t }) =>
    t.length > 2
      ? I5
      : Yn.has(e)
        ? e.startsWith("scale")
          ? D5(t[1])
          : M5
        : V5,
  cu = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (gn.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  F5 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function z5(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(ua) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = F5.has(t) ? 1 : 0;
  return (r !== n && (o *= 100), t + "(" + o + i + ")");
}
const N5 = /([a-z-]*)\(.*?\)/g,
  fu = {
    ...gn,
    getAnimatableNone: (e) => {
      const t = e.match(N5);
      return t ? t.map(z5).join(" ") : e;
    },
  },
  O5 = {
    ...Bg,
    color: je,
    backgroundColor: je,
    outlineColor: je,
    fill: je,
    stroke: je,
    borderColor: je,
    borderTopColor: je,
    borderRightColor: je,
    borderBottomColor: je,
    borderLeftColor: je,
    filter: fu,
    WebkitFilter: fu,
  },
  Fc = (e) => O5[e];
function R0(e, t) {
  let n = Fc(e);
  return (
    n !== fu && (n = gn),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const j0 = (e) => /^0[^.\s]+$/.test(e);
function B5(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || j0(e);
}
function U5(e, t, n, r) {
  const i = cu(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let a;
  const l = [];
  for (let u = 0; u < o.length; u++)
    (o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
      B5(o[u]) && l.push(u),
      typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (a = o[u]));
  if (i && l.length && a)
    for (let u = 0; u < l.length; u++) {
      const f = l[u];
      o[f] = R0(t, a);
    }
  return o;
}
function W5({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...f
}) {
  return !!Object.keys(f).length;
}
function zc(e, t) {
  return e[t] || e.default || e;
}
const H5 = { skipAnimations: !1 },
  Nc =
    (e, t, n, r = {}) =>
    (i) => {
      const o = zc(r, e) || {},
        s = o.delay || r.delay || 0;
      let { elapsed: a = 0 } = r;
      a = a - Fn(s);
      const l = U5(t, e, n, o),
        u = l[0],
        f = l[l.length - 1],
        c = cu(e, u),
        d = cu(e, f);
      let m = {
        keyframes: l,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...o,
        delay: -a,
        onUpdate: (y) => {
          (t.set(y), o.onUpdate && o.onUpdate(y));
        },
        onComplete: () => {
          (i(), o.onComplete && o.onComplete());
        },
      };
      if (
        (W5(o) || (m = { ...m, ...$5(e, m) }),
        m.duration && (m.duration = Fn(m.duration)),
        m.repeatDelay && (m.repeatDelay = Fn(m.repeatDelay)),
        !c || !d || z2.current || o.type === !1 || H5.skipAnimations)
      )
        return A5(m);
      if (
        !r.isHandoff &&
        t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate
      ) {
        const y = L5(t, e, m);
        if (y) return y;
      }
      return Rs(m);
    };
function js(e) {
  return !!(Be(e) && e.add);
}
const L0 = (e) => /^\-?\d*\.?\d+$/.test(e);
function Oc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Bc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Uc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (Oc(this.subscriptions, t), () => Bc(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const G5 = (e) => !isNaN(parseFloat(e));
class K5 {
  constructor(t, n = {}) {
    ((this.version = "10.18.0"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        ((this.prev = this.current), (this.current = r));
        const { delta: o, timestamp: s } = _e;
        (this.lastUpdated !== s &&
          ((this.timeDelta = o),
          (this.lastUpdated = s),
          G.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current));
      }),
      (this.scheduleVelocityCheck = () => G.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = G5(this.current)),
      (this.owner = n.owner));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Uc());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            G.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    (this.set(n), (this.prev = t), (this.timeDelta = r));
  }
  jump(t) {
    (this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? T0(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Vr(e, t) {
  return new K5(e, t);
}
const A0 = (e) => (t) => t.test(e),
  Q5 = { test: (e) => e === "auto", parse: (e) => e },
  M0 = [Xn, V, Tt, Gt, t2, e2, Q5],
  ei = (e) => M0.find(A0(e)),
  Y5 = [...M0, je, gn],
  X5 = (e) => Y5.find(A0(e));
function J5(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Vr(n));
}
function Z5(e, t) {
  const n = fa(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = m2(o[s]);
    J5(e, s, a);
  }
}
function q5(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((a) => !e.hasValue(a)),
    s = o.length;
  if (s)
    for (let a = 0; a < s; a++) {
      const l = o[a],
        u = t[l];
      let f = null;
      (Array.isArray(u) && (f = u[0]),
        f === null &&
          (f =
            (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && i !== void 0
              ? i
              : t[l]),
        f != null &&
          (typeof f == "string" && (L0(f) || j0(f))
            ? (f = parseFloat(f))
            : !X5(f) && gn.test(u) && (f = R0(l, u)),
          e.addValue(l, Vr(f, { owner: e })),
          n[l] === void 0 && (n[l] = f),
          f !== null && e.setBaseTarget(l, f)));
    }
}
function eS(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function tS(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = eS(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function nS({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function rS(e, t) {
  const n = e.get();
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
  } else return n !== t;
}
function D0(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: s,
    ...a
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (o = r);
  const u = [],
    f = i && e.animationState && e.animationState.getState()[i];
  for (const c in a) {
    const d = e.getValue(c),
      m = a[c];
    if (!d || m === void 0 || (f && nS(f, c))) continue;
    const y = { delay: n, elapsed: 0, ...zc(o || {}, c) };
    if (window.HandoffAppearAnimations) {
      const g = e.getProps()[Ig];
      if (g) {
        const h = window.HandoffAppearAnimations(g, c, d, G);
        h !== null && ((y.elapsed = h), (y.isHandoff = !0));
      }
    }
    let w = !y.isHandoff && !rS(d, m);
    if (
      (y.type === "spring" && (d.getVelocity() || y.velocity) && (w = !1),
      d.animation && (w = !1),
      w)
    )
      continue;
    d.start(Nc(c, d, m, e.shouldReduceMotion && Yn.has(c) ? { type: !1 } : y));
    const k = d.animation;
    (js(l) && (l.add(c), k.then(() => l.remove(c))), u.push(k));
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && Z5(e, s);
      }),
    u
  );
}
function du(e, t, n = {}) {
  const r = fa(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(D0(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: f,
              staggerDirection: c,
            } = i;
            return iS(e, t, u + l, f, c, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [o, s] : [s, o];
    return l().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function iS(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(oS)
      .forEach((u, f) => {
        (u.notify("AnimationStart", t),
          s.push(
            du(u, t, { ...o, delay: n + l(f) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(s)
  );
}
function oS(e, t) {
  return e.sortNodePosition(t);
}
function sS(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => du(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = du(e, t, n);
  else {
    const i = typeof t == "function" ? fa(e, t, n.custom) : t;
    r = Promise.all(D0(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const aS = [...Pc].reverse(),
  lS = Pc.length;
function uS(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => sS(e, n, r)));
}
function cS(e) {
  let t = uS(e);
  const n = dS();
  let r = !0;
  const i = (l, u) => {
    const f = fa(e, u);
    if (f) {
      const { transition: c, transitionEnd: d, ...m } = f;
      l = { ...l, ...m, ...d };
    }
    return l;
  };
  function o(l) {
    t = l(e);
  }
  function s(l, u) {
    const f = e.getProps(),
      c = e.getVariantContext(!0) || {},
      d = [],
      m = new Set();
    let y = {},
      w = 1 / 0;
    for (let g = 0; g < lS; g++) {
      const h = aS[g],
        p = n[h],
        x = f[h] !== void 0 ? f[h] : c[h],
        C = Ui(x),
        P = h === u ? p.isActive : null;
      P === !1 && (w = g);
      let E = x === c[h] && x !== f[h] && C;
      if (
        (E && r && e.manuallyAnimateOnMount && (E = !1),
        (p.protectedKeys = { ...y }),
        (!p.isActive && P === null) ||
          (!x && !p.prevProp) ||
          aa(x) ||
          typeof x == "boolean")
      )
        continue;
      let M =
          fS(p.prevProp, x) ||
          (h === u && p.isActive && !E && C) ||
          (g > w && C),
        D = !1;
      const re = Array.isArray(x) ? x : [x];
      let de = re.reduce(i, {});
      P === !1 && (de = {});
      const { prevResolvedValues: xe = {} } = p,
        le = { ...xe, ...de },
        vt = (Z) => {
          ((M = !0),
            m.has(Z) && ((D = !0), m.delete(Z)),
            (p.needsAnimating[Z] = !0));
        };
      for (const Z in le) {
        const Pe = de[Z],
          b = xe[Z];
        if (y.hasOwnProperty(Z)) continue;
        let A = !1;
        (Ts(Pe) && Ts(b) ? (A = !r0(Pe, b)) : (A = Pe !== b),
          A
            ? Pe !== void 0
              ? vt(Z)
              : m.add(Z)
            : Pe !== void 0 && m.has(Z)
              ? vt(Z)
              : (p.protectedKeys[Z] = !0));
      }
      ((p.prevProp = x),
        (p.prevResolvedValues = de),
        p.isActive && (y = { ...y, ...de }),
        r && e.blockInitialAnimation && (M = !1),
        M &&
          (!E || D) &&
          d.push(
            ...re.map((Z) => ({ animation: Z, options: { type: h, ...l } })),
          ));
    }
    if (m.size) {
      const g = {};
      (m.forEach((h) => {
        const p = e.getBaseTarget(h);
        p !== void 0 && (g[h] = p);
      }),
        d.push({ animation: g }));
    }
    let k = !!d.length;
    return (
      r &&
        (f.initial === !1 || f.initial === f.animate) &&
        !e.manuallyAnimateOnMount &&
        (k = !1),
      (r = !1),
      k ? t(d) : Promise.resolve()
    );
  }
  function a(l, u, f) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    ((c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((m) => {
        var y;
        return (y = m.animationState) === null || y === void 0
          ? void 0
          : y.setActive(l, u);
      }),
      (n[l].isActive = u));
    const d = s(f, l);
    for (const m in n) n[m].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function fS(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !r0(t, e) : !1;
}
function Cn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function dS() {
  return {
    animate: Cn(!0),
    whileInView: Cn(),
    whileHover: Cn(),
    whileTap: Cn(),
    whileDrag: Cn(),
    whileFocus: Cn(),
    exit: Cn(),
  };
}
class hS extends Sn {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = cS(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    (this.unmount(), aa(t) && (this.unmount = t.subscribe(this.node)));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let pS = 0;
class mS extends Sn {
  constructor() {
    (super(...arguments), (this.id = pS++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const gS = { animation: { Feature: hS }, exit: { Feature: mS } },
  Fd = (e, t) => Math.abs(e - t);
function yS(e, t) {
  const n = Fd(e.x, t.x),
    r = Fd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class I0 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const c = Za(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          m = yS(c.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !m) return;
        const { point: y } = c,
          { timestamp: w } = _e;
        this.history.push({ ...y, timestamp: w });
        const { onStart: k, onMove: g } = this.handlers;
        (d ||
          (k && k(this.lastMoveEvent, c),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, c));
      }),
      (this.handlePointerMove = (c, d) => {
        ((this.lastMoveEvent = c),
          (this.lastMoveEventInfo = Ja(d, this.transformPagePoint)),
          G.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (c, d) => {
        this.end();
        const { onEnd: m, onSessionEnd: y, resumeAnimation: w } = this.handlers;
        if (
          (this.dragSnapToOrigin && w && w(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const k = Za(
          c.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Ja(d, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && m && m(c, k), y && y(c, k));
      }),
      !Zg(t))
    )
      return;
    ((this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window));
    const s = ca(t),
      a = Ja(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = _e;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: f } = n;
    (f && f(t, Za(a, this.history)),
      (this.removeListeners = dn(
        It(this.contextWindow, "pointermove", this.handlePointerMove),
        It(this.contextWindow, "pointerup", this.handlePointerUp),
        It(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), Ot(this.updatePoint));
  }
}
function Ja(e, t) {
  return t ? { point: t(e.point) } : e;
}
function zd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Za({ point: e }, t) {
  return {
    point: e,
    delta: zd(e, V0(t)),
    offset: zd(e, vS(t)),
    velocity: wS(t, 0.1),
  };
}
function vS(e) {
  return e[0];
}
function V0(e) {
  return e[e.length - 1];
}
function wS(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = V0(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Fn(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  const o = Vt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return (s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s);
}
function Qe(e) {
  return e.max - e.min;
}
function hu(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Nd(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = ee(t.min, t.max, e.origin)),
    (e.scale = Qe(n) / Qe(t)),
    (hu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = ee(n.min, n.max, e.origin) - e.originPoint),
    (hu(e.translate) || isNaN(e.translate)) && (e.translate = 0));
}
function xi(e, t, n, r) {
  (Nd(e.x, t.x, n.x, r ? r.originX : void 0),
    Nd(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Od(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + Qe(t)));
}
function xS(e, t, n) {
  (Od(e.x, t.x, n.x), Od(e.y, t.y, n.y));
}
function Bd(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + Qe(t)));
}
function Si(e, t, n) {
  (Bd(e.x, t.x, n.x), Bd(e.y, t.y, n.y));
}
function SS(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ee(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ee(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Ud(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function kS(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Ud(e.x, n, i), y: Ud(e.y, t, r) };
}
function Wd(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function CS(e, t) {
  return { x: Wd(e.x, t.x), y: Wd(e.y, t.y) };
}
function PS(e, t) {
  let n = 0.5;
  const r = Qe(e),
    i = Qe(t);
  return (
    i > r
      ? (n = Hi(t.min, t.max - r, e.min))
      : r > i && (n = Hi(e.min, e.max - i, t.min)),
    mn(0, 1, n)
  );
}
function ES(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const pu = 0.35;
function TS(e = pu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = pu),
    { x: Hd(e, "left", "right"), y: Hd(e, "top", "bottom") }
  );
}
function Hd(e, t, n) {
  return { min: Gd(e, t), max: Gd(e, n) };
}
function Gd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Kd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  mr = () => ({ x: Kd(), y: Kd() }),
  Qd = () => ({ min: 0, max: 0 }),
  ue = () => ({ x: Qd(), y: Qd() });
function et(e) {
  return [e("x"), e("y")];
}
function $0({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function _S({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function bS(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function qa(e) {
  return e === void 0 || e === 1;
}
function mu({ scale: e, scaleX: t, scaleY: n }) {
  return !qa(e) || !qa(t) || !qa(n);
}
function _n(e) {
  return mu(e) || F0(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function F0(e) {
  return Yd(e.x) || Yd(e.y);
}
function Yd(e) {
  return e && e !== "0%";
}
function Ls(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Xd(e, t, n, r, i) {
  return (i !== void 0 && (e = Ls(e, i, r)), Ls(e, n, r) + t);
}
function gu(e, t = 0, n = 1, r, i) {
  ((e.min = Xd(e.min, t, n, r, i)), (e.max = Xd(e.max, t, n, r, i)));
}
function z0(e, { x: t, y: n }) {
  (gu(e.x, t.translate, t.scale, t.originPoint),
    gu(e.y, n.translate, n.scale, n.originPoint));
}
function RS(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    ((o = n[a]), (s = o.projectionDelta));
    const l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        gr(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), z0(e, s)),
      r && _n(o.latestValues) && gr(e, o.latestValues));
  }
  ((t.x = Jd(t.x)), (t.y = Jd(t.y)));
}
function Jd(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Yt(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function Zd(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = ee(e.min, e.max, o);
  gu(e, t[n], t[r], s, t.scale);
}
const jS = ["x", "scaleX", "originX"],
  LS = ["y", "scaleY", "originY"];
function gr(e, t) {
  (Zd(e.x, t, jS), Zd(e.y, t, LS));
}
function N0(e, t) {
  return $0(bS(e.getBoundingClientRect(), t));
}
function AS(e, t, n) {
  const r = N0(e, n),
    { scroll: i } = t;
  return (i && (Yt(r.x, i.offset.x), Yt(r.y, i.offset.y)), r);
}
const O0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  MS = new WeakMap();
class DS {
  constructor(t) {
    ((this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ue()),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (f) => {
        const { dragSnapToOrigin: c } = this.getProps();
        (c ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(ca(f, "page").point));
      },
      o = (f, c) => {
        const { drag: d, dragPropagation: m, onDragStart: y } = this.getProps();
        if (
          d &&
          !m &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = e0(d)),
          !this.openGlobalLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          et((k) => {
            let g = this.getAxisMotionValue(k).get() || 0;
            if (Tt.test(g)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const p = h.layout.layoutBox[k];
                p && (g = Qe(p) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[k] = g;
          }),
          y && G.update(() => y(f, c), !1, !0));
        const { animationState: w } = this.visualElement;
        w && w.setActive("whileDrag", !0);
      },
      s = (f, c) => {
        const {
          dragPropagation: d,
          dragDirectionLock: m,
          onDirectionLock: y,
          onDrag: w,
        } = this.getProps();
        if (!d && !this.openGlobalLock) return;
        const { offset: k } = c;
        if (m && this.currentDirection === null) {
          ((this.currentDirection = IS(k)),
            this.currentDirection !== null && y && y(this.currentDirection));
          return;
        }
        (this.updateAxis("x", c.point, k),
          this.updateAxis("y", c.point, k),
          this.visualElement.render(),
          w && w(f, c));
      },
      a = (f, c) => this.stop(f, c),
      l = () =>
        et((f) => {
          var c;
          return (
            this.getAnimationState(f) === "paused" &&
            ((c = this.getAxisMotionValue(f).animation) === null || c === void 0
              ? void 0
              : c.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new I0(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: O0(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && G.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !To(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (s = SS(s, this.constraints[t], this.elastic[t])),
      o.set(s));
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      o = this.constraints;
    (n && hr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = kS(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = TS(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        et((s) => {
          this.getAxisMotionValue(s) &&
            (this.constraints[s] = ES(i.layoutBox[s], this.constraints[s]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !hr(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = AS(r, i.root, this.visualElement.getTransformPagePoint());
    let s = CS(i.layout.layoutBox, o);
    if (n) {
      const a = n(_S(s));
      ((this.hasMutatedConstraints = !!a), a && (s = $0(a)));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = et((f) => {
        if (!To(f, n, this.currentDirection)) return;
        let c = (l && l[f]) || {};
        s && (c = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          m = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[f] : 0,
            bounceStiffness: d,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...c,
          };
        return this.startAxisValueAnimation(f, y);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Nc(t, r, 0, n));
  }
  stopAnimation() {
    et((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    et((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    et((n) => {
      const { drag: r } = this.getProps();
      if (!To(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - ee(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!hr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    et((s) => {
      const a = this.getAxisMotionValue(s);
      if (a) {
        const l = a.get();
        i[s] = PS({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      et((s) => {
        if (!To(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(ee(l, u, i[s]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    MS.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = It(t, "pointerdown", (l) => {
        const { drag: u, dragListener: f = !0 } = this.getProps();
        u && f && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        hr(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      r());
    const s = Mt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (et((f) => {
              const c = this.getAxisMotionValue(f);
              c &&
                ((this.originPoint[f] += l[f].translate),
                c.set(c.get() + l[f].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (s(), n(), o(), a && a());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = pu,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function To(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function IS(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class VS extends Sn {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = ae),
      (this.removeListeners = ae),
      (this.controls = new DS(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ae));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const qd = (e) => (t, n) => {
  e && G.update(() => e(t, n));
};
class $S extends Sn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = ae));
  }
  onPointerDown(t) {
    this.session = new I0(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: O0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: qd(t),
      onStart: qd(n),
      onMove: r,
      onEnd: (o, s) => {
        (delete this.session, i && G.update(() => i(o, s)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = It(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
function FS() {
  const e = S.useContext(oa);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = S.useId();
  return (S.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0]);
}
const Ho = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function eh(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ti = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (V.test(e)) e = parseFloat(e);
        else return e;
      const n = eh(e, t.target.x),
        r = eh(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  zS = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = gn.parse(e);
      if (i.length > 5) return r;
      const o = gn.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((i[0 + s] /= a), (i[1 + s] /= l));
      const u = ee(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class NS extends Ae.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    (Kx(OS),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ho.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              G.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function B0(e) {
  const [t, n] = FS(),
    r = S.useContext(Tc);
  return Ae.createElement(NS, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: S.useContext($g),
    isPresent: t,
    safeToRemove: n,
  });
}
const OS = {
    borderRadius: {
      ...ti,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ti,
    borderTopRightRadius: ti,
    borderBottomLeftRadius: ti,
    borderBottomRightRadius: ti,
    boxShadow: zS,
  },
  U0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  BS = U0.length,
  th = (e) => (typeof e == "string" ? parseFloat(e) : e),
  nh = (e) => typeof e == "number" || V.test(e);
function US(e, t, n, r, i, o) {
  i
    ? ((e.opacity = ee(0, n.opacity !== void 0 ? n.opacity : 1, WS(r))),
      (e.opacityExit = ee(t.opacity !== void 0 ? t.opacity : 1, 0, HS(r))))
    : o &&
      (e.opacity = ee(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let s = 0; s < BS; s++) {
    const a = `border${U0[s]}Radius`;
    let l = rh(t, a),
      u = rh(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || nh(l) === nh(u)
        ? ((e[a] = Math.max(ee(th(l), th(u), r), 0)),
          (Tt.test(u) || Tt.test(l)) && (e[a] += "%"))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = ee(t.rotate || 0, n.rotate || 0, r));
}
function rh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const WS = W0(0, 0.5, d0),
  HS = W0(0.5, 0.95, ae);
function W0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Hi(e, t, r)));
}
function ih(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function qe(e, t) {
  (ih(e.x, t.x), ih(e.y, t.y));
}
function oh(e, t, n, r, i) {
  return (
    (e -= t),
    (e = Ls(e, 1 / n, r)),
    i !== void 0 && (e = Ls(e, 1 / i, r)),
    e
  );
}
function GS(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (Tt.test(t) &&
      ((t = parseFloat(t)), (t = ee(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = ee(o.min, o.max, r);
  (e === o && (a -= t),
    (e.min = oh(e.min, t, n, a, i)),
    (e.max = oh(e.max, t, n, a, i)));
}
function sh(e, t, [n, r, i], o, s) {
  GS(e, t[n], t[r], t[i], t.scale, o, s);
}
const KS = ["x", "scaleX", "originX"],
  QS = ["y", "scaleY", "originY"];
function ah(e, t, n, r) {
  (sh(e.x, t, KS, n ? n.x : void 0, r ? r.x : void 0),
    sh(e.y, t, QS, n ? n.y : void 0, r ? r.y : void 0));
}
function lh(e) {
  return e.translate === 0 && e.scale === 1;
}
function H0(e) {
  return lh(e.x) && lh(e.y);
}
function YS(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function G0(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function uh(e) {
  return Qe(e.x) / Qe(e.y);
}
class XS {
  constructor() {
    this.members = [];
  }
  add(t) {
    (Oc(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (Bc(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function ch(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: f } = n;
    (l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      f && (r += `rotateY(${f}deg) `));
  }
  const s = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return ((s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none");
}
const JS = (e, t) => e.depth - t.depth;
class ZS {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (Oc(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (Bc(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(JS),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function qS(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (Ot(r), e(o - t));
    };
  return (G.read(r, !0), () => Ot(r));
}
function e3(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function t3(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function n3(e, t, n) {
  const r = Be(e) ? e : Vr(e);
  return (r.start(Nc("", r, t, n)), r.animation);
}
const fh = ["", "X", "Y", "Z"],
  r3 = { visibility: "hidden" },
  dh = 1e3;
let i3 = 0;
const bn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function K0({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      ((this.id = i3++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            (bn.totalNodes =
              bn.resolvedTargetDeltas =
              bn.recalculatedProjection =
                0),
            this.nodes.forEach(a3),
            this.nodes.forEach(d3),
            this.nodes.forEach(h3),
            this.nodes.forEach(l3),
            e3(bn));
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ZS());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Uc()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = t3(s)), (this.instance = s));
      const { layoutId: l, layout: u, visualElement: f } = this.options;
      if (
        (f && !f.current && f.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          ((this.root.updateBlockedByResize = !0),
            c && c(),
            (c = qS(d, 250)),
            Ho.hasAnimatedSinceResize &&
              ((Ho.hasAnimatedSinceResize = !1), this.nodes.forEach(ph)));
        });
      }
      (l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          f &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: m,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const w =
                  this.options.transition || f.getDefaultTransition() || v3,
                { onLayoutAnimationStart: k, onLayoutAnimationComplete: g } =
                  f.getProps(),
                h = !this.targetLayout || !G0(this.targetLayout, y) || m,
                p = !d && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                p ||
                (d && (h || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(c, p));
                const x = { ...zc(w, "layout"), onPlay: k, onComplete: g };
                ((f.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x));
              } else
                (d || ph(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = y;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const s = this.getStack();
      (s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Ot(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(p3),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let f = 0; f < this.path.length; f++) {
        const c = this.path[f];
        ((c.shouldResetTransform = !0),
          c.updateScroll("snapshot"),
          c.options.layoutRoot && c.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(hh));
        return;
      }
      (this.isUpdating || this.nodes.forEach(c3),
        (this.isUpdating = !1),
        this.nodes.forEach(f3),
        this.nodes.forEach(o3),
        this.nodes.forEach(s3),
        this.clearAllSnapshots());
      const a = performance.now();
      ((_e.delta = mn(0, 1e3 / 60, a - _e.timestamp)),
        (_e.timestamp = a),
        (_e.isProcessing = !0),
        Ua.update.process(_e),
        Ua.preRender.process(_e),
        Ua.render.process(_e),
        (_e.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(u3), this.sharedNodes.forEach(m3));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        G.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      G.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = ue()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0,
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      (this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          }));
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !H0(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        f = u !== this.prevTransformTemplateValue;
      s &&
        (a || _n(this.latestValues) || f) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        w3(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return ue();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return (l && (Yt(a.x, l.offset.x), Yt(a.y, l.offset.y)), a);
    }
    removeElementScroll(s) {
      const a = ue();
      qe(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: f, options: c } = u;
        if (u !== this.root && f && c.layoutScroll) {
          if (f.isRoot) {
            qe(a, s);
            const { scroll: d } = this.root;
            d && (Yt(a.x, -d.offset.x), Yt(a.y, -d.offset.y));
          }
          (Yt(a.x, f.offset.x), Yt(a.y, f.offset.y));
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = ue();
      qe(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const f = this.path[u];
        (!a &&
          f.options.layoutScroll &&
          f.scroll &&
          f !== f.root &&
          gr(l, { x: -f.scroll.offset.x, y: -f.scroll.offset.y }),
          _n(f.latestValues) && gr(l, f.latestValues));
      }
      return (_n(this.latestValues) && gr(l, this.latestValues), l);
    }
    removeTransform(s) {
      const a = ue();
      qe(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !_n(u.latestValues)) continue;
        mu(u.latestValues) && u.updateSnapshot();
        const f = ue(),
          c = u.measurePageBox();
        (qe(f, c),
          ah(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, f));
      }
      return (_n(this.latestValues) && ah(a, this.latestValues), a);
    }
    setTargetDelta(s) {
      ((this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== _e.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty));
      const u = !!this.resumingFrom || this !== l;
      if (!(
        s ||
        (u && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        (!((a = this.parent) === null || a === void 0) &&
          a.isProjectionDirty) ||
        this.attemptToResolveRelativeTarget
      ))
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!(!this.layout || !(c || d))) {
        if (
          ((this.resolvedRelativeTargetAt = _e.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ue()),
              (this.relativeTargetOrigin = ue()),
              Si(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox,
              ),
              qe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ue()), (this.targetWithTransforms = ue())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                xS(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : qe(this.target, this.layout.layoutBox),
                  z0(this.target, this.targetDelta))
                : qe(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ue()),
                (this.relativeTargetOrigin = ue()),
                Si(this.relativeTargetOrigin, this.target, m.target),
                qe(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          bn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(
        !this.parent ||
        mu(this.parent.latestValues) ||
        F0(this.parent.latestValues)
      ))
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === _e.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: f, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(f || c))
      )
        return;
      qe(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        m = this.treeScale.y;
      (RS(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (a.target = a.layout.layoutBox));
      const { target: y } = a;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = mr()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = mr()),
        (this.projectionDeltaWithTransform = mr()));
      const w = this.projectionTransform;
      (xi(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = ch(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== w ||
          this.treeScale.x !== d ||
          this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        bn.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        f = { ...this.latestValues },
        c = mr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const d = ue(),
        m = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        w = m !== y,
        k = this.getStack(),
        g = !k || k.members.length <= 1,
        h = !!(w && !g && this.options.crossfade === !0 && !this.path.some(y3));
      this.animationProgress = 0;
      let p;
      ((this.mixTargetDelta = (x) => {
        const C = x / 1e3;
        (mh(c.x, s.x, C),
          mh(c.y, s.y, C),
          this.setTargetDelta(c),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Si(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            g3(this.relativeTarget, this.relativeTargetOrigin, d, C),
            p && YS(this.relativeTarget, p) && (this.isProjectionDirty = !1),
            p || (p = ue()),
            qe(p, this.relativeTarget)),
          w &&
            ((this.animationValues = f), US(f, u, this.latestValues, C, h, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(s) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Ot(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = G.update(() => {
          ((Ho.hasAnimatedSinceResize = !0),
            (this.currentAnimation = n3(0, dh, {
              ...s,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a));
              },
              onComplete: () => {
                (s.onComplete && s.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      (s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(dh),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: f,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Q0(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ue();
          const c = Qe(this.layout.layoutBox.x);
          ((l.x.min = s.target.x.min), (l.x.max = l.x.min + c));
          const d = Qe(this.layout.layoutBox.y);
          ((l.y.min = s.target.y.min), (l.y.max = l.y.min + d));
        }
        (qe(a, l),
          gr(a, f),
          xi(this.projectionDeltaWithTransform, this.layoutCorrected, a, f));
      }
    }
    registerSharedNode(s, a) {
      (this.sharedNodes.has(s) || this.sharedNodes.set(s, new XS()),
        this.sharedNodes.get(s).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const u = {};
      for (let f = 0; f < fh.length; f++) {
        const c = "rotate" + fh[f];
        l[c] && ((u[c] = l[c]), s.setStaticValue(c, 0));
      }
      s.render();
      for (const f in u) s.setStaticValue(f, u[f]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return r3;
      const u = { visibility: "" },
        f = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Wo(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = f ? f(this.latestValues, "") : "none"),
          u
        );
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        const w = {};
        return (
          this.options.layoutId &&
            ((w.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (w.pointerEvents = Wo(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !_n(this.latestValues) &&
            ((w.transform = f ? f({}, "") : "none"), (this.hasProjected = !1)),
          w
        );
      }
      const d = c.animationValues || c.latestValues;
      (this.applyTransformsToTarget(),
        (u.transform = ch(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d,
        )),
        f && (u.transform = f(d, u.transform)));
      const { x: m, y } = this.projectionDelta;
      ((u.transformOrigin = `${m.origin * 100}% ${y.origin * 100}% 0`),
        c.animationValues
          ? (u.opacity =
              c === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
          : (u.opacity =
              c === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                  ? d.opacityExit
                  : 0));
      for (const w in Ps) {
        if (d[w] === void 0) continue;
        const { correct: k, applyTo: g } = Ps[w],
          h = u.transform === "none" ? d[w] : k(d[w], c);
        if (g) {
          const p = g.length;
          for (let x = 0; x < p; x++) u[g[x]] = h;
        } else u[w] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            c === this
              ? Wo(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(hh),
        this.root.sharedNodes.clear());
    }
  };
}
function o3(e) {
  e.updateLayout();
}
function s3(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? et((c) => {
          const d = s ? n.measuredBox[c] : n.layoutBox[c],
            m = Qe(d);
          ((d.min = r[c].min), (d.max = d.min + m));
        })
      : Q0(o, n.layoutBox, r) &&
        et((c) => {
          const d = s ? n.measuredBox[c] : n.layoutBox[c],
            m = Qe(r[c]);
          ((d.max = d.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[c].max = e.relativeTarget[c].min + m)));
        });
    const a = mr();
    xi(a, r, n.layoutBox);
    const l = mr();
    s ? xi(l, e.applyTransform(i, !0), n.measuredBox) : xi(l, r, n.layoutBox);
    const u = !H0(a);
    let f = !1;
    if (!e.resumeFrom) {
      const c = e.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        const { snapshot: d, layout: m } = c;
        if (d && m) {
          const y = ue();
          Si(y, n.layoutBox, d.layoutBox);
          const w = ue();
          (Si(w, r, m.layoutBox),
            G0(y, w) || (f = !0),
            c.options.layoutRoot &&
              ((e.relativeTarget = w),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = c)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: f,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function a3(e) {
  (bn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function l3(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function u3(e) {
  e.clearSnapshot();
}
function hh(e) {
  e.clearMeasurements();
}
function c3(e) {
  e.isLayoutDirty = !1;
}
function f3(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function ph(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function d3(e) {
  e.resolveTargetDelta();
}
function h3(e) {
  e.calcProjection();
}
function p3(e) {
  e.resetRotation();
}
function m3(e) {
  e.removeLeadSnapshot();
}
function mh(e, t, n) {
  ((e.translate = ee(t.translate, 0, n)),
    (e.scale = ee(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function gh(e, t, n, r) {
  ((e.min = ee(t.min, n.min, r)), (e.max = ee(t.max, n.max, r)));
}
function g3(e, t, n, r) {
  (gh(e.x, t.x, n.x, r), gh(e.y, t.y, n.y, r));
}
function y3(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const v3 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  yh = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  vh = yh("applewebkit/") && !yh("chrome/") ? Math.round : ae;
function wh(e) {
  ((e.min = vh(e.min)), (e.max = vh(e.max)));
}
function w3(e) {
  (wh(e.x), wh(e.y));
}
function Q0(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !hu(uh(t), uh(n), 0.2))
  );
}
const x3 = K0({
    attachResizeListener: (e, t) => Mt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  el = { current: void 0 },
  Y0 = K0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!el.current) {
        const e = new x3({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (el.current = e));
      }
      return el.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  S3 = {
    pan: { Feature: $S },
    drag: { Feature: VS, ProjectionNode: Y0, MeasureLayout: B0 },
  },
  k3 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function C3(e) {
  const t = k3.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function yu(e, t, n = 1) {
  const [r, i] = C3(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return L0(s) ? parseFloat(s) : s;
  } else return su(i) ? yu(i, t, n + 1) : i;
}
function P3(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  (n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!su(o)) return;
      const s = yu(o, r);
      s && i.set(s);
    }));
  for (const i in t) {
    const o = t[i];
    if (!su(o)) continue;
    const s = yu(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const E3 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  X0 = (e) => E3.has(e),
  T3 = (e) => Object.keys(e).some(X0),
  xh = (e) => e === Xn || e === V,
  Sh = (e, t) => parseFloat(e.split(", ")[t]),
  kh =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return Sh(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? Sh(o[1], e) : 0;
      }
    },
  _3 = new Set(["x", "y", "z"]),
  b3 = qi.filter((e) => !_3.has(e));
function R3(e) {
  const t = [];
  return (
    b3.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const $r = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: kh(4, 13),
  y: kh(5, 14),
};
$r.translateX = $r.x;
$r.translateY = $r.y;
const j3 = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      a = {};
    (s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        a[u] = $r[u](r, o);
      }),
      t.render());
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const f = t.getValue(u);
        (f && f.jump(a[u]), (e[u] = $r[u](l, o)));
      }),
      e
    );
  },
  L3 = (e, t, n = {}, r = {}) => {
    ((t = { ...t }), (r = { ...r }));
    const i = Object.keys(t).filter(X0);
    let o = [],
      s = !1;
    const a = [];
    if (
      (i.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let f = n[l],
          c = ei(f);
        const d = t[l];
        let m;
        if (Ts(d)) {
          const y = d.length,
            w = d[0] === null ? 1 : 0;
          ((f = d[w]), (c = ei(f)));
          for (let k = w; k < y && d[k] !== null; k++)
            m ? Dc(ei(d[k]) === m) : (m = ei(d[k]));
        } else m = ei(d);
        if (c !== m)
          if (xh(c) && xh(m)) {
            const y = u.get();
            (typeof y == "string" && u.set(parseFloat(y)),
              typeof d == "string"
                ? (t[l] = parseFloat(d))
                : Array.isArray(d) && m === V && (t[l] = d.map(parseFloat)));
          } else
            c != null &&
            c.transform &&
            m != null &&
            m.transform &&
            (f === 0 || d === 0)
              ? f === 0
                ? u.set(m.transform(f))
                : (t[l] = c.transform(d))
              : (s || ((o = R3(e)), (s = !0)),
                a.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(d));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = j3(t, e, a);
      return (
        o.length &&
          o.forEach(([f, c]) => {
            e.getValue(f).set(c);
          }),
        e.render(),
        sa && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function A3(e, t, n, r) {
  return T3(t) ? L3(e, t, n, r) : { target: t, transitionEnd: r };
}
const M3 = (e, t, n, r) => {
    const i = P3(e, t, r);
    return ((t = i.target), (r = i.transitionEnd), A3(e, t, n, r));
  },
  vu = { current: null },
  J0 = { current: !1 };
function D3() {
  if (((J0.current = !0), !!sa))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (vu.current = e.matches);
      (e.addListener(t), t());
    } else vu.current = !1;
}
function I3(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (Be(o)) (e.addValue(i, o), js(r) && r.add(i));
    else if (Be(s)) (e.addValue(i, Vr(o, { owner: e })), js(r) && r.remove(i));
    else if (s !== o)
      if (e.hasValue(i)) {
        const a = e.getValue(i);
        !a.hasAnimated && a.set(o);
      } else {
        const a = e.getStaticValue(i);
        e.addValue(i, Vr(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const Ch = new WeakMap(),
  Z0 = Object.keys(Wi),
  V3 = Z0.length,
  Ph = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  $3 = Ec.length;
class F3 {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    s = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.scheduleRender = () => G.render(this.render, !1, !0)));
    const { latestValues: a, renderState: l } = o;
    ((this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = la(n)),
      (this.isVariantNode = Vg(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: u, ...f } = this.scrapeMotionValuesFromProps(n, {});
    for (const c in f) {
      const d = f[c];
      a[c] !== void 0 && Be(d) && (d.set(a[c], !1), js(u) && u.add(c));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    ((this.current = t),
      Ch.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      J0.current || D3(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : vu.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (Ch.delete(this.current),
      this.projection && this.projection.unmount(),
      Ot(this.notifyUpdate),
      Ot(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Yn.has(t),
      i = n.on("change", (s) => {
        ((this.latestValues[t] = s),
          this.props.onUpdate && G.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0));
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      (i(), o());
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, a;
    for (let l = 0; l < V3; l++) {
      const u = Z0[l],
        {
          isEnabled: f,
          Feature: c,
          ProjectionNode: d,
          MeasureLayout: m,
        } = Wi[u];
      (d && (s = d),
        f(n) &&
          (!this.features[u] && c && (this.features[u] = new c(this)),
          m && (a = m)));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      s
    ) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection,
      );
      const {
        layoutId: l,
        layout: u,
        drag: f,
        dragConstraints: c,
        layoutScroll: d,
        layoutRoot: m,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!f || (c && hr(c)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: d,
        layoutRoot: m,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ue();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < Ph.length; r++) {
      const i = Ph[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    ((this.prevMotionValues = I3(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial),
        r
      );
    }
    const n = {};
    for (let r = 0; r < $3; r++) {
      const i = Ec[r],
        o = this.props[i];
      (Ui(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    (n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Vr(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
          n !== void 0
        ? n
        : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = Mc(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Be(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new Uc()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class q0 extends F3 {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    o,
  ) {
    let s = tS(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
      q5(this, r, s);
      const a = M3(this, r, s, n);
      ((n = a.transitionEnd), (r = a.target));
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function z3(e) {
  return window.getComputedStyle(e);
}
class N3 extends q0 {
  constructor() {
    (super(...arguments), (this.type = "html"));
  }
  readValueFromInstance(t, n) {
    if (Yn.has(n)) {
      const r = Fc(n);
      return (r && r.default) || 0;
    } else {
      const r = z3(t),
        i = (Ng(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return N0(t, n);
  }
  build(t, n, r, i) {
    bc(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Ac(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Be(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    Gg(t, n, r, i);
  }
}
class O3 extends q0 {
  constructor() {
    (super(...arguments), (this.type = "svg"), (this.isSVGTag = !1));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Yn.has(n)) {
      const r = Fc(n);
      return (r && r.default) || 0;
    }
    return ((n = Kg.has(n) ? n : Cc(n)), t.getAttribute(n));
  }
  measureInstanceViewportBox() {
    return ue();
  }
  scrapeMotionValuesFromProps(t, n) {
    return Yg(t, n);
  }
  build(t, n, r, i) {
    jc(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Qg(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = Lc(t.tagName)), super.mount(t));
  }
}
const B3 = (e, t) =>
    _c(e)
      ? new O3(t, { enableHardwareAcceleration: !1 })
      : new N3(t, { enableHardwareAcceleration: !0 }),
  U3 = { layout: { ProjectionNode: Y0, MeasureLayout: B0 } },
  W3 = { ...gS, ...V2, ...S3, ...U3 },
  W = Hx((e, t) => C2(e, t, W3, B3));
function ey() {
  const e = S.useRef(!1);
  return (
    kc(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    e
  );
}
function H3() {
  const e = ey(),
    [t, n] = S.useState(0),
    r = S.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [S.useCallback(() => G.postRender(r), [r]), t];
}
class G3 extends S.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      ((r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function K3({ children: e, isPresent: t }) {
  const n = S.useId(),
    r = S.useRef(null),
    i = S.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    S.useInsertionEffect(() => {
      const { width: o, height: s, top: a, left: l } = i.current;
      if (t || !r.current || !o || !s) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    S.createElement(
      G3,
      { isPresent: t, childRef: r, sizeRef: i },
      S.cloneElement(e, { ref: r }),
    )
  );
}
const tl = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  const a = Xg(Q3),
    l = S.useId(),
    u = S.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (f) => {
          a.set(f, !0);
          for (const c of a.values()) if (!c) return;
          r && r();
        },
        register: (f) => (a.set(f, !1), () => a.delete(f)),
      }),
      o ? void 0 : [n],
    );
  return (
    S.useMemo(() => {
      a.forEach((f, c) => a.set(c, !1));
    }, [n]),
    S.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = S.createElement(K3, { isPresent: n }, e)),
    S.createElement(oa.Provider, { value: u }, e)
  );
};
function Q3() {
  return new Map();
}
function Y3(e) {
  return S.useEffect(() => () => e(), []);
}
const Rn = (e) => e.key || "";
function X3(e, t) {
  e.forEach((n) => {
    const r = Rn(n);
    t.set(r, n);
  });
}
function J3(e) {
  const t = [];
  return (
    S.Children.forEach(e, (n) => {
      S.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Z3 = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    exitBeforeEnter: i,
    presenceAffectsLayout: o = !0,
    mode: s = "sync",
  }) => {
    const a = S.useContext(Tc).forceRender || H3()[0],
      l = ey(),
      u = J3(e);
    let f = u;
    const c = S.useRef(new Map()).current,
      d = S.useRef(f),
      m = S.useRef(new Map()).current,
      y = S.useRef(!0);
    if (
      (kc(() => {
        ((y.current = !1), X3(u, m), (d.current = f));
      }),
      Y3(() => {
        ((y.current = !0), m.clear(), c.clear());
      }),
      y.current)
    )
      return S.createElement(
        S.Fragment,
        null,
        f.map((h) =>
          S.createElement(
            tl,
            {
              key: Rn(h),
              isPresent: !0,
              initial: n ? void 0 : !1,
              presenceAffectsLayout: o,
              mode: s,
            },
            h,
          ),
        ),
      );
    f = [...f];
    const w = d.current.map(Rn),
      k = u.map(Rn),
      g = w.length;
    for (let h = 0; h < g; h++) {
      const p = w[h];
      k.indexOf(p) === -1 && !c.has(p) && c.set(p, void 0);
    }
    return (
      s === "wait" && c.size && (f = []),
      c.forEach((h, p) => {
        if (k.indexOf(p) !== -1) return;
        const x = m.get(p);
        if (!x) return;
        const C = w.indexOf(p);
        let P = h;
        if (!P) {
          const E = () => {
            c.delete(p);
            const T = Array.from(m.keys()).filter((M) => !k.includes(M));
            if (
              (T.forEach((M) => m.delete(M)),
              (d.current = u.filter((M) => {
                const D = Rn(M);
                return D === p || T.includes(D);
              })),
              !c.size)
            ) {
              if (l.current === !1) return;
              (a(), r && r());
            }
          };
          ((P = S.createElement(
            tl,
            {
              key: Rn(x),
              isPresent: !1,
              onExitComplete: E,
              custom: t,
              presenceAffectsLayout: o,
              mode: s,
            },
            x,
          )),
            c.set(p, P));
        }
        f.splice(C, 0, P);
      }),
      (f = f.map((h) => {
        const p = h.key;
        return c.has(p)
          ? h
          : S.createElement(
              tl,
              { key: Rn(h), isPresent: !0, presenceAffectsLayout: o, mode: s },
              h,
            );
      })),
      S.createElement(
        S.Fragment,
        null,
        c.size ? f : f.map((h) => S.cloneElement(h)),
      )
    );
  },
  q3 = "modulepreload",
  ek = function (e) {
    return "/" + e;
  },
  Eh = {},
  K = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const s = document.querySelector("meta[property=csp-nonce]"),
        a =
          (s == null ? void 0 : s.nonce) ||
          (s == null ? void 0 : s.getAttribute("nonce"));
      i = Promise.allSettled(
        n.map((l) => {
          if (((l = ek(l)), l in Eh)) return;
          Eh[l] = !0;
          const u = l.endsWith(".css"),
            f = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${f}`)) return;
          const c = document.createElement("link");
          if (
            ((c.rel = u ? "stylesheet" : q3),
            u || (c.as = "script"),
            (c.crossOrigin = ""),
            (c.href = l),
            a && c.setAttribute("nonce", a),
            document.head.appendChild(c),
            u)
          )
            return new Promise((d, m) => {
              (c.addEventListener("load", d),
                c.addEventListener("error", () =>
                  m(new Error(`Unable to preload CSS for ${l}`)),
                ));
            });
        }),
      );
    }
    function o(s) {
      const a = new Event("vite:preloadError", { cancelable: !0 });
      if (((a.payload = s), window.dispatchEvent(a), !a.defaultPrevented))
        throw s;
    }
    return i.then((s) => {
      for (const a of s || []) a.status === "rejected" && o(a.reason);
      return t().catch(o);
    });
  },
  rC = (e) =>
    v.jsx("svg", {
      "aria-hidden": "true",
      "data-prefix": "fas",
      "data-icon": "arrow-left",
      className:
        "prefix__svg-inline--fa prefix__fa-power-off prefix__fa-w-16 svg-inline--fa fa-arrow-left",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      ...e,
      children: v.jsx("path", {
        fill: "currentColor",
        d: "M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z",
      }),
    }),
  tk = (e) =>
    v.jsx("svg", {
      "aria-hidden": "true",
      "data-prefix": "fab",
      "data-icon": "github",
      className: "prefix__svg-inline--fa prefix__fa-github prefix__fa-w-16",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 496 512",
      ...e,
      children: v.jsx("path", {
        fill: e.fill,
        d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
      }),
    }),
  iC = (e) =>
    v.jsx("svg", {
      "aria-hidden": "true",
      "data-prefix": "fab",
      "data-icon": "twitter",
      className: "prefix__svg-inline--fa prefix__fa-twitter prefix__fa-w-16",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      ...e,
      children: v.jsx("path", {
        fill: e.fill,
        d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
      }),
    }),
  oC = (e) =>
    v.jsx("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "linkedin",
      className:
        " prefix__svg-inline--fa prefix__fa-linkedin svg-inline--fa prefix__fa-w-16 fa-linkedin",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      ...e,
      children: v.jsx("path", {
        fill: e.fill,
        d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
      }),
    }),
  sC = (e) =>
    v.jsx("svg", {
      "aria-hidden": "true",
      "data-prefix": "fab",
      "data-icon": "facebook",
      className: "prefix__svg-inline--fa prefix__fa-facebook prefix__fa-w-16",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      ...e,
      children: v.jsx("path", {
        fill: e.fill,
        d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
      }),
    }),
  aC = (e) =>
    v.jsx("svg", {
      "aria-hidden": "true",
      "data-prefix": "fab",
      "data-icon": "youtube",
      className: "prefix__svg-inline--fa prefix__fa-youtube prefix__fa-w-18",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 576 512",
      ...e,
      children: v.jsx("path", {
        fill: e.fill,
        d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
      }),
    }),
  wu = (e) =>
    v.jsx("svg", {
      "aria-hidden": "true",
      "data-prefix": "fas",
      "data-icon": "yin-yang",
      className: "prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 496 512",
      ...e,
      children: v.jsx("path", {
        fill: e.fill,
        d: "M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z",
      }),
    }),
  lC = (e) =>
    v.jsx("svg", {
      "aria-hidden": "true",
      "data-prefix": "fas",
      "data-icon": "anchor",
      className: "prefix__svg-inline--fa prefix__fa-anchor prefix__fa-w-18",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 576 512",
      ...e,
      children: v.jsx("path", {
        fill: e.fill,
        d: "M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z",
      }),
    }),
  uC = (e) =>
    v.jsx("svg", {
      "aria-hidden": "true",
      "data-prefix": "fas",
      "data-icon": "link",
      className: "prefix__svg-inline--fa prefix__fa-link prefix__fa-w-16",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      ...e,
      children: v.jsx("path", {
        fill: e.fill,
        d: "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z",
      }),
    }),
  nk = (e) =>
    v.jsx("svg", {
      "aria-hidden": "true",
      "data-prefix": "fas",
      "data-icon": "palette",
      className: "prefix__svg-inline--fa prefix__fa-palette prefix__fa-w-16",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      ...e,
      children: v.jsx("path", {
        fill: e.fill,
        d: "M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z",
      }),
    }),
  rk = (e) =>
    v.jsx("svg", {
      "aria-hidden": "true",
      "data-prefix": "fas",
      "data-icon": "laptop-code",
      className:
        "prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 640 512",
      ...e,
      children: v.jsx("path", {
        fill: e.fill,
        d: "M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z",
      }),
    }),
  ik = "/assets/profile-img-LyKEUko9.png",
  ok = R(W.div)`
  /* width: 50vw;
height:50vh;
 */
  width: 55vw;
  display: flex;
  background: linear-gradient(
        to right,
        ${(e) => e.theme.body} 50%,
        ${(e) => e.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(e) => e.theme.body} 50%,
        ${(e) => e.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${(e) => e.theme.body};
  border-right: 2px solid ${(e) => e.theme.text};

  z-index: 1;

  position: absolute;
  left: 50%;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);

  ${L(1200)`
    width: 65vw;
  `};

  ${L(60)`
    width: 70vw;
  `};

  ${L(50)`
    width: 50vw;
    background-size: 100% 2px;

    flex-direction:column;
    justify-content:space-between;
  
  `};

  ${L(40)`
    width: 60vw;
    
  
  `};

  ${L(30)`
    width: 70vw;
    
  
  `};
  ${L(20)`
    width: 60vw;
    
  
  `};

  @media only screen and (max-width: 50em) {
    background: none;
    border: none;
    border-top: 2px solid ${(e) => e.theme.body};
    border-bottom: 2px solid ${(e) => e.theme.text};
    background-image: linear-gradient(
        ${(e) => e.theme.body} 50%,
        ${(e) => e.theme.text} 50%
      ),
      linear-gradient(
        ${(e) => e.theme.body} 50%,
        ${(e) => e.theme.text} 50%
      );
    background-size: 2px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
  }

  //height:55vh;
`,
  Th = R.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
  ${L(50)`
      width: 100%;
    height: 50%;
      .pic {
    
    width: 70%;
    
  }

  `};

  ${L(40)`
  
      .pic {
    
    width: 80%;
    
  }

  `};

  ${L(30)`
     

      .pic {
    
    width: 90%;
    
  }

  `};
  ${L(20)`
     

     .pic {
   
   width: 80%;
   
 }

 `};
`,
  sk = R(W.div)`
  font-size: calc(1rem + 1.5vw);
  color: ${(e) => e.theme.body};
  padding: 2rem;
  cursor: crosshair;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(e) => `rgba(${e.theme.bodyRgba},0.6)`};

    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;

    ${L(40)`
        font-size: calc(0.5rem + 1vw);


  `};
  }

  ${L(40)`
        font-size: calc(1rem + 1.5vw);


  `};
  ${L(20)`
         padding: 1rem;



  `};
`,
  ak = () => {
    const [e, t] = S.useState("55vh");
    return (
      S.useEffect(() => {
        (window.matchMedia("(max-width: 50em)").matches && t("70vh"),
          window.matchMedia("(max-width: 20em)").matches && t("60vh"));
      }, []),
      v.jsxs(ok, {
        initial: { height: 0 },
        animate: { height: e },
        transition: { type: "spring", duration: 2, delay: 1 },
        children: [
          v.jsx(Th, {
            children: v.jsxs(sk, {
              children: [
                v.jsx("h1", { children: "Hi," }),
                v.jsx("h3", { children: "I'm Hareesh Rajendran" }),
                v.jsx("h6", {
                  children:
                    "A self-motivated, highly skilled, and self-driven Product Engineer at Highbrow Technology with the ability to adapt to any situation and the proven ability to grow oneself and others.",
                }),
              ],
            }),
          }),
          v.jsx(Th, {
            children: v.jsx(W.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 1, delay: 2 },
              children: v.jsx("img", {
                className: "pic",
                src: ik,
                alt: "My Pic",
              }),
            }),
          }),
        ],
      })
    );
  },
  lk = R.div`
  width: 100vw;
  height: 100vh;
  background: ${(e) => e.theme.text};
  color: ${(e) => e.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
`,
  Hr = () => v.jsx(lk, { children: v.jsx("h1", { children: "Loading..." }) }),
  uk = S.lazy(() => K(() => import("./PowerButton-7EvZcJPM.js"), [])),
  _h = S.lazy(() => K(() => import("./SocialIcons-DdUsFf1Y.js"), [])),
  ck = S.lazy(() => K(() => import("./LogoComponent-COFNQSqI.js"), [])),
  fk = R(W.div)`
  &::selection {
    color: white;
    background: rgb(0 0 0 / 73%);
  }
  background: ${(e) => e.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  h2,
  h3,
  h4, 
  h5,
  h6 {
    font-family: "Karla", sans-serif;

    font-weight: 500;
  }

  h2 {
    ${L(40)`
      font-size:1.2em;

  `};

    ${L(30)`
      font-size:1em;

  `};
  }
`,
  dk = R.div`
  padding: 2rem;
`,
  hk = wg`
from {
    transform: rotate(0) ;
  }
  to {
    transform: rotate(360deg) ;
  }
`,
  pk = R.button.withConfig({ shouldForwardProp: (e) => e !== "click" })`
  position: absolute;
  top: ${(e) => (e.click ? "85%" : "50%")};
  left: ${(e) => (e.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;
  & > *:first-child {
    animation: ${hk} infinite 1.5s linear;
  }
  & > *:last-child {
    display: ${(e) => (e.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }

  @media only screen and (max-width: 50em) {
    top: ${(e) => (e.click ? "90%" : "50%")};
    left: ${(e) => (e.click ? "90%" : "50%")};
    width: ${(e) => (e.click ? "80px" : "150px")};
    height: ${(e) => (e.click ? "80px" : "150px")};
  }
  @media only screen and (max-width: 30em) {
    width: ${(e) => (e.click ? "40px" : "150px")};
    height: ${(e) => (e.click ? "40px" : "150px")};
  }
`,
  bh = R.a.withConfig({ shouldForwardProp: (e) => e !== "click" })`
  color: ${(e) => (e.click ? e.theme.body : e.theme.text)};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`,
  Rh = R(Wr).withConfig({ shouldForwardProp: (e) => e !== "click" })`
  color: ${(e) => (e.click ? e.theme.body : e.theme.text)};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;

  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(e) => (e.click ? "0 0 4px #000" : "none")};
  }
`,
  mk = R(Wr).withConfig({ shouldForwardProp: (e) => e !== "click" })`
  color: ${(e) => (e.click ? e.theme.body : e.theme.text)};
  position: absolute;
  top: 25%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(e) => (e.click ? "0 0 4px #000" : "none")};
  }
  @media only screen and (max-height: 750px) {
    position: absolute;
    top: 4% !important;
    left: calc(1rem + 25vw) !important;
    transform: none !important;
  }
`,
  gk = R(Wr).withConfig({ shouldForwardProp: (e) => e !== "click" })`
  color: ${(e) => (e.click ? e.theme.body : e.theme.text)};
  position: absolute;
  top: 45%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(e) => (e.click ? "0 0 4px #000" : "none")};
  }
  @media only screen and (max-height: 750px) {
    position: absolute;
    top: 25% !important;
  }
`;
R(Wr).withConfig({ shouldForwardProp: (e) => e !== "click" })`
  color: ${(e) => (e.click ? e.theme.body : e.theme.text)};
  position: absolute;
  top: 65%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(e) => (e.click ? "0 0 4px #000" : "none")};
  }
  @media only screen and (max-height: 750px) {
    position: absolute;
    top: 45% !important;
  }
`;
const yk = R.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`,
  vk = R(Wr).withConfig({ shouldForwardProp: (e) => e !== "click" })`
  color: ${(e) => (e.click ? e.theme.body : e.theme.text)};
  text-decoration: none;
  z-index: 1;
`,
  wk = R(Wr)`
  color: ${(e) => e.theme.text};
  text-decoration: none;
`,
  xk = R.div.withConfig({ shouldForwardProp: (e) => e !== "click" })`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(e) => (e.click ? "50%" : "0%")};
  background-color: #000000;
  height: ${(e) => (e.click ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;

  ${(e) =>
    e.click
      ? L(50)`
       height: 50%;
  right:0;
  width: 100%;
  transition: width 0.5s ease, height 1s ease 0.5s;
  `
      : L(50)`
       height: 0;
  width: 0;
  `};
`,
  Sk = () => {
    const [e, t] = S.useState(!1),
      [n, r] = S.useState(""),
      i = () => {
        (t(!e),
          document.documentElement.requestFullScreen
            ? document.documentElement.requestFullScreen()
            : document.documentElement.mozRequestFullScreen
              ? document.documentElement.mozRequestFullScreen()
              : document.documentElement.webkitRequestFullScreen &&
                document.documentElement.webkitRequestFullScreen());
      },
      o = { y: "-100%" },
      s = { x: `${n === "work" ? "100%" : "-100%"}` },
      a = window.matchMedia("(max-width: 50em)").matches;
    return v.jsx(S.Suspense, {
      fallback: v.jsx(Hr, {}),
      children: v.jsxs(
        fk,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: n === "about" || n === "skills" ? o : s,
          transition: { duration: 0.5 },
          children: [
            v.jsx(xk, { click: e }),
            v.jsxs(dk, {
              children: [
                v.jsx(ck, { theme: e ? "dark" : "light" }),
                v.jsx(uk, {}),
                a
                  ? v.jsx(_h, { theme: "light" })
                  : v.jsx(_h, { theme: e ? "dark" : "light" }),
                v.jsxs(pk, {
                  click: e,
                  children: [
                    a
                      ? v.jsx(wu, {
                          onClick: () => i(),
                          width: e ? 80 : 150,
                          height: e ? 80 : 150,
                          fill: "currentColor",
                        })
                      : v.jsx(wu, {
                          onClick: () => i(),
                          width: e ? 120 : 200,
                          height: e ? 120 : 200,
                          fill: "currentColor",
                        }),
                    v.jsx("span", {
                      onClick: () => i(),
                      children: "click here",
                    }),
                  ],
                }),
                a
                  ? v.jsx(bh, {
                      click: +e,
                      href: "mailto:hareeshprogrammer@gmail.com",
                      onClick: () =>
                        window.open(
                          "mailto:hareeshprogrammer@gmail.com",
                          "_blank",
                        ),
                      children: v.jsx(W.h3, {
                        initial: {
                          y: -200,
                          transition: {
                            type: "spring",
                            duration: 1.5,
                            delay: 1,
                          },
                        },
                        animate: {
                          y: 0,
                          transition: {
                            type: "spring",
                            duration: 1.5,
                            delay: 1,
                          },
                        },
                        whileHover: { scale: 1.1 },
                        whileTap: { scale: 0.9 },
                        children: "Say hi..",
                      }),
                    })
                  : v.jsx(bh, {
                      click: 0,
                      href: "mailto:hareeshprogrammer@gmail.com",
                      onClick: () =>
                        window.open(
                          "mailto:hareeshprogrammer@gmail.com",
                          "_blank",
                        ),
                      children: v.jsx(W.h3, {
                        initial: {
                          y: -200,
                          transition: {
                            type: "spring",
                            duration: 1.5,
                            delay: 1,
                          },
                        },
                        animate: {
                          y: 0,
                          transition: {
                            type: "spring",
                            duration: 1.5,
                            delay: 1,
                          },
                        },
                        whileHover: { scale: 1.1 },
                        whileTap: { scale: 0.9 },
                        children: "Say hi..",
                      }),
                    }),
                a
                  ? v.jsx(Rh, {
                      click: +e,
                      onClick: () => r("blog"),
                      to: "/blog",
                      children: v.jsx(W.h2, {
                        initial: {
                          y: -200,
                          transition: {
                            type: "spring",
                            duration: 1.5,
                            delay: 1,
                          },
                        },
                        animate: {
                          y: 0,
                          transition: {
                            type: "spring",
                            duration: 1.5,
                            delay: 1,
                          },
                        },
                        whileHover: { scale: 1.1 },
                        whileTap: { scale: 0.9 },
                        children: "Feats",
                      }),
                    })
                  : v.jsx(Rh, {
                      click: 0,
                      onClick: () => r("blog"),
                      to: "/blog",
                      children: v.jsx(W.h2, {
                        initial: {
                          y: -200,
                          transition: {
                            type: "spring",
                            duration: 1.5,
                            delay: 1,
                          },
                        },
                        animate: {
                          y: 0,
                          transition: {
                            type: "spring",
                            duration: 1.5,
                            delay: 1,
                          },
                        },
                        whileHover: { scale: 1.1 },
                        whileTap: { scale: 0.9 },
                        children: "Feats",
                      }),
                    }),
                v.jsx(gk, {
                  click: +e,
                  to: "/work",
                  children: v.jsx(W.h2, {
                    onClick: () => r("work"),
                    initial: {
                      y: -200,
                      transition: { type: "spring", duration: 1.5, delay: 1 },
                    },
                    animate: {
                      y: 0,
                      transition: { type: "spring", duration: 1.5, delay: 1 },
                    },
                    whileHover: { scale: 1.1 },
                    whileTap: { scale: 0.9 },
                    children: "Projects",
                  }),
                }),
                v.jsx(mk, {
                  click: +e,
                  to: "/work-history",
                  children: v.jsx(W.h2, {
                    onClick: () => r("work-history"),
                    initial: {
                      y: -200,
                      transition: { type: "spring", duration: 1.5, delay: 1 },
                    },
                    animate: {
                      y: 0,
                      transition: { type: "spring", duration: 1.5, delay: 1 },
                    },
                    whileHover: { scale: 1.1 },
                    whileTap: { scale: 0.9 },
                    children: "Experience",
                  }),
                }),
                v.jsxs(yk, {
                  children: [
                    v.jsx(vk, {
                      onClick: () => t(!1),
                      click: a ? 0 : +e,
                      to: "/about",
                      children: v.jsx(W.h2, {
                        onClick: () => r("about"),
                        initial: {
                          y: 200,
                          transition: {
                            type: "spring",
                            duration: 1.5,
                            delay: 1,
                          },
                        },
                        animate: {
                          y: 0,
                          transition: {
                            type: "spring",
                            duration: 1.5,
                            delay: 1,
                          },
                        },
                        whileHover: { scale: 1.1 },
                        whileTap: { scale: 0.9 },
                        children: "About",
                      }),
                    }),
                    v.jsx(wk, {
                      to: "/skills",
                      children: v.jsx(W.h2, {
                        onClick: () => r("skills"),
                        initial: {
                          y: 200,
                          transition: {
                            type: "spring",
                            duration: 1.5,
                            delay: 1,
                          },
                        },
                        animate: {
                          y: 0,
                          transition: {
                            type: "spring",
                            duration: 1.5,
                            delay: 1,
                          },
                        },
                        whileHover: { scale: 1.1 },
                        whileTap: { scale: 0.9 },
                        children: "My Skills",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e ? v.jsx(ak, { click: e }) : null,
          ],
        },
        "modal",
      ),
    });
  },
  kk = "/assets/spaceman-BDQFogbB.png",
  Ck = S.lazy(() => K(() => import("./SocialIcons-DdUsFf1Y.js"), [])),
  Pk = S.lazy(() => K(() => import("./PowerButton-7EvZcJPM.js"), [])),
  Ek = S.lazy(() => K(() => import("./LogoComponent-COFNQSqI.js"), [])),
  Tk = S.lazy(() => K(() => import("./ParticleComponent-DNCEmcKq.js"), [])),
  _k = S.lazy(() => K(() => import("./BigTitle-CyocCDOl.js"), [])),
  bk = R(W.div)`
  background-color: ${(e) => e.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`,
  Rk = wg`
0% { transform: translateY(-10px)         }
    50% { transform: translateY(15px) translateX(15px)        }
    100% { transform: translateY(-10px)         }
`,
  jk = R(W.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  animation: ${Rk} 4s ease infinite;
  width: 20vw;
  img {
    width: 100%;
    height: auto;
  }
`,
  Lk = R(W.div)`
  border: 2px solid ${(e) => e.theme.text};
  color: ${(e) => e.theme.text};
  padding: 2rem;
  width: 50vw;
  max-height: 70vh;
  z-index: 3;
  line-height: 1.6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.5rem + 1vw);
  backdrop-filter: blur(4px);
  background: rgb(0 0 0 / 0%);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  overflow-y: auto;
  overflow-x: hidden;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(e) => e.theme.text};
    border-radius: 3px;
    opacity: 0.5;
  }
  &::-webkit-scrollbar-thumb:hover {
    opacity: 0.8;
  }

  ${L(40)`
          width: 60vw;
          max-height: 60vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);


  `};
  ${L(30)`
          width: 50vw;
          max-height: 65vh;
          margin-top:2rem;

  `};

  ${L(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
          max-height: 70vh;
  `};
`,
  Ak = () =>
    v.jsx(Ji, {
      theme: Ss,
      children: v.jsx(S.Suspense, {
        fallback: v.jsx(Hr, {}),
        children: v.jsxs(
          bk,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.5 } },
            exit: { opacity: 0, transition: { duration: 0.5 } },
            children: [
              v.jsx(Ek, { theme: "dark" }),
              v.jsx(Pk, {}),
              v.jsx(Ck, { theme: "dark" }),
              v.jsx(Tk, { theme: "dark" }),
              v.jsx(jk, {
                initial: { right: "-20%", top: "100%" },
                animate: {
                  right: "5%",
                  top: "10%",
                  transition: { duration: 2, delay: 0.5 },
                },
                children: v.jsx("img", { src: kk, alt: "spaceman" }),
              }),
              v.jsxs(Lk, {
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { duration: 1, delay: 1 } },
                children: [
                  "I'm a Product Engineer at Highbrow Technology, turning ideas into shipped products. Previously at Zoho, now building the future of work with AI-powered tools.",
                  v.jsx("br", {}),
                  v.jsx("br", {}),
                  "I don't just write code—I architect systems, shape culture, and ship products that matter. 2000+ commits, 85% frontend ownership across CleverHire, TalentBridge, and TimesheetTracker. I introduced AI-assisted development, evaluated 15+ UI libraries, and built products that reached 500+ users in weeks.",
                  v.jsx("br", {}),
                  v.jsx("br", {}),
                  "When I'm not coding, I'm exploring AI frameworks, attending engineering meetups, or experimenting with the latest tech. Lifelong learner, product builder, and someone who actually enjoys solving hard problems.",
                  v.jsx("br", {}),
                  v.jsx("br", {}),
                  "Looking to build something cool? Let's talk.",
                ],
              }),
              v.jsx(_k, { text: "ABOUT", top: "10%", left: "5%" }),
            ],
          },
          "skills",
        ),
      }),
    }),
  Mk = "/assets/patrick-tomasso-Oaqk7qqNh_c-unsplash-Dfmr2wyI.jpg",
  Dk = [
    {
      id: 16,
      name: "Leetcode coding profile",
      tags: ["leetcode", "dsa", "java"],
      date: "brute better optimal repeat",
      imgSrc: "https://leetcard.jacoblin.cool/hareeshprogrammer?ext=contest",
      link: "https://leetcode.com/hareeshprogrammer/",
    },
    {
      id: 15,
      name: "Mentee - Amazon ML Summer School",
      tags: ["ML", "Machine Learning", "Data Science", "Data Analysis"],
      date: "4 weeks apprenticeship program",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/download.png?alt=media&token=6a694785-b91b-435e-910e-aa73754e625e",
      link: "https://www.amazon.in/Mentee-Amazon-ML-Summer-School/dp/B07JQZQZQZ",
    },
    {
      id: 14,
      name: "Zoho - Summer Intern",
      tags: ["SQL", "JDBC", "JAVA", "KAFKA"],
      date: "Software Development Intern",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/zoho-logo.png?alt=media&token=2d6bf5e7-1d2b-4fad-b3e3-1a8f445190d6",
      link: "https://www.zoho.com/",
    },
    {
      id: 13,
      name: "Bit Brothers - Junior Javascript Developer",
      tags: ["ReactJS", "MaterialUI", "Figma", "Github"],
      date: "Worked on Real world projects and Collaborated using GitHub by using conventional commits",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/bitbros.png?alt=media&token=367f4b3d-5d48-4bb6-bdb2-3aa5509c41bb",
      link: "https://bitbrothers.in/",
    },
    {
      id: 12,
      name: "Mineral Drop - Frontend Development Intern",
      tags: ["Netlify", "GitHub", "Godaddy", "FireBase"],
      date: "6 months long Internship in Mineral Drop , Made me do incredible web designs ",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/mindrop.png?alt=media&token=365a56e9-f204-4955-8316-4dd85b415b8f",
      link: "mineraldrop.in",
    },
    {
      id: 11,
      name: "Fashioo.in - Frontend Development Intern",
      tags: ["HTML", "CSS", "BootStrap", "JavaScript"],
      date: "Worked as a Frontend Developer Netlify , GitHub , SEO Multimedia Manipulation",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/fashioo.jfif?alt=media&token=3ef77672-550a-43d3-bc1a-989ed7dd8e32",
      link: "fashioo.in",
    },
    {
      id: 10,
      name: "Gmail Login using Python Selenium",
      tags: ["Geeks For Geeks", "Article", "python", "selenium"],
      date: "Jul 14, 2020",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/gfg.png?alt=media&token=b416e9e5-cef2-40ce-be6b-3bbd5f41a5c1",
      link: "https://www.geeksforgeeks.org/gmail-login-using-python-selenium/",
    },
    {
      id: 9,
      name: "I'm a content creator and Admin @technamite",
      tags: ["instagram", "tech", "content", "admin"],
      date: "23 Feb, 2020 - Present",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/technamite%20logo.png?alt=media&token=fb6c6f6f-d3a3-4b03-a8e1-9f0d989db707",
      link: "https://www.instagram.com/technamite/",
    },
    {
      id: 8,
      name: "Google Cloud Community India Learn to Earn Cloud Security Challenge: Level 2",
      tags: ["Google", "Cloud", "Cloud", "Security"],
      date: "6 July, 2021",
      imgSrc:
        "https://cdn.qwiklabs.com/X5Ngy9b5EeSYwJ4BajDQmvS2LB3KmqU07Krx6K2jtrg%3D",
      link: "https://www.cloudskillsboost.google/public_profiles/e7acb751-2ffa-43cf-9436-779913a65daf/badges/1647215?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      id: 7,
      name: "Machine Learning",
      tags: ["Applied ML", "Data Science", "Data Analysis"],
      date: "Internshala - Credential ID : 0664361D-388D-E9FE-CDEE-52C350E6A7D9",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/internshala_og_image.jpg?alt=media&token=d6528be6-79ff-445c-acd7-c1bdd3c13b13",
      link: "https://trainings.internshala.com/verify_certificate",
    },
    {
      id: 6,
      name: "Build a Face Recognition Application using Python",
      tags: ["Guiness", "AI-For-India", "Artificial Intelligence"],
      date: "GUVI Geek Networks, IITM Research Park ",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/guvi.png?alt=media&token=b008e54e-8c49-4b68-a96b-168298514e75",
      link: "https://www.guvi.in/verify-certificate?id=4iW3B7712GQ8191O63#",
    },
    {
      id: 5,
      name: "Getting Started with AWS Machine Learning",
      tags: ["coursera", "aws", "machine-learning"],
      date: "Coursera certification - May 29, 2020",
      imgSrc:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~8XDVWW4YGHY5/CERTIFICATE_LANDING_PAGE~8XDVWW4YGHY5.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/8XDVWW4YGHY5",
    },
    {
      id: 4,
      name: "Practical Java course : Zero to One",
      tags: ["Java", "Udemy", "OOPS"],
      date: "Udemy Certification",
      imgSrc:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-f6b0a490-1813-4b8c-9e25-cdaa38dbbea9.jpg?v=1589915024000",
      link: "https://www.udemy.com/certificate/UC-f6b0a490-1813-4b8c-9e25-cdaa38dbbea9/",
    },
    {
      id: 3,
      name: "The Python 3 Course - Learn Python Practically",
      tags: ["Python", "OOPS", "Udemy"],
      date: "Udemy Certification",
      imgSrc:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-b1fefa2f-d02f-4325-ae29-19f96dc7c919.jpg?v=1590409067000",
      link: "https://www.udemy.com/certificate/UC-b1fefa2f-d02f-4325-ae29-19f96dc7c919/",
    },
    {
      id: 2,
      name: "Skillrack coding profile",
      tags: ["skillrack", "regional competetive coding", "coding"],
      date: "First year of Coding",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/srack.jpg?alt=media&token=5205cc9a-ef54-4781-9296-9bf3def6e1e0",
      link: "https://www.skillrack.com/faces/resume.xhtml?id=258957&key=be07621cdc077b395521f8fe439050c4d537901e",
    },
    {
      id: 1,
      name: "Cognitive class Python 101 Data science course",
      tags: ["python", "datas cience", "machine learning"],
      date: "June 7, 2020",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/Cognitive-Class.jpg?alt=media&token=358a0cdf-e681-4f42-9b36-009213259773",
      link: "https://courses.cognitiveclass.ai/certificates/b01765909a884866b155a54bf0ef109b",
    },
  ],
  Wc = R(W.a)`
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  text-decoration: none;
  width: calc(10rem + 15vw);
  height: 20rem;
  border: 2px solid ${(e) => e.theme.text};
  padding: 1rem;
  color: ${(e) => e.theme.text};
  display: flex;
  flex-direction: column;
  z-index: 5;
  cursor: pointer;
  &:hover {
    color: ${(e) => e.theme.body};
    background-color: ${(e) => e.theme.text};
    transition: all 0.3s ease;
  }

  ${L(50)`
    width:calc(60vw);
  `};
  ${L(30)`
    height:18rem;
  `};

  ${L(25)`
    height:14rem;
    padding:0.8rem;
    backdrop-filter: none;
  `};
`,
  Ik = R.div`
  background-image: ${(e) => `url(${e.img})`};
  width: 100%;
  height: 60%;
  background-size: contain;
  border: 1px solid transparent;
  background-position: center center;
  ${L(25)`
    height:70%;
  `};
  ${Wc}:hover & {
    border: 1px solid ${(e) => e.theme.body};
  }
`,
  Vk = R.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  ${L(40)`
    font-size:calc(0.8em + 1vw);
  `};
  ${L(25)`
    font-size:calc(0.6em + 1vw);
  `};
  border-bottom: 1px solid ${(e) => e.theme.text};
  ${Wc}:hover & {
    border-bottom: 1px solid ${(e) => e.theme.body};
  }
`,
  $k = R.div`
  padding: 0.5rem 0;
  ${L(25)`
    font-size:calc(0.5em + 1vw);
  `};
`,
  Fk = R.span`
  padding-right: 0.5rem;
`,
  zk = R.span`
  padding: 0.5rem 0;
  ${L(25)`
    font-size:calc(0.5em + 1vw);
  `};
`,
  Nk = R(W.div)``,
  Ok = {
    hidden: { scale: 0 },
    show: { scale: 1, transition: { type: "spring", duration: 0.5 } },
  },
  Bk = (e) => {
    const { id: t, name: n, tags: r, date: i, imgSrc: o, link: s } = e.blog;
    return v.jsx(Nk, {
      id: "card-" + t,
      variants: Ok,
      children: v.jsxs(Wc, {
        href: s,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
          v.jsx(Ik, { id: "card-img-" + t, img: o }),
          v.jsx(Vk, { children: n }),
          v.jsx($k, {
            id: "card-tags-" + t,
            children: r.map((a, l) => v.jsxs(Fk, { children: ["#", a] }, l)),
          }),
          v.jsx(zk, { id: "card-date-" + t, children: i }),
        ],
      }),
    });
  },
  Uk = S.lazy(() => K(() => import("./Anchor-D04uNkKj.js"), [])),
  Wk = S.lazy(() => K(() => import("./SocialIcons-DdUsFf1Y.js"), [])),
  Hk = S.lazy(() => K(() => import("./PowerButton-7EvZcJPM.js"), [])),
  Gk = S.lazy(() => K(() => import("./LogoComponent-COFNQSqI.js"), [])),
  Kk = S.lazy(() => K(() => import("./BigTitle-CyocCDOl.js"), [])),
  Qk = R(W.div)`
  background-image: url(${Mk});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`,
  Yk = R.div`
  background-color: ${(e) => `rgba(${e.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`,
  Xk = R.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;

  ${L(30)`
    padding-top: 7rem;
    
  
  `};
`,
  Jk = R(W.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
  ${L(50)`
    grid-template-columns: 100%;
  `};
`,
  jh = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5, duration: 0.5 } },
  },
  Zk = () => {
    const [e, t] = S.useState(0);
    return (
      S.useEffect(() => {
        let n = (window.innerHeight - 70) / 30;
        t(parseInt(n));
      }, []),
      v.jsx(S.Suspense, {
        fallback: v.jsx(Hr, {}),
        children: v.jsx(Qk, {
          variants: jh,
          initial: "hidden",
          animate: "show",
          exit: { opacity: 0, transition: { duration: 0.5 } },
          children: v.jsxs(Yk, {
            children: [
              v.jsx(Gk, {}),
              v.jsx(Hk, {}),
              v.jsx(Wk, {}),
              v.jsx(Uk, { number: e }),
              v.jsx(Xk, {
                children: v.jsx(Jk, {
                  variants: jh,
                  initial: "hidden",
                  animate: "show",
                  children: Dk.map((n) => v.jsx(Bk, { blog: n }, n.id)),
                }),
              }),
              v.jsx(Kk, { text: "FEATURES", top: "5rem", left: "5rem" }),
            ],
          }),
        }),
      })
    );
  },
  qk = [
    {
      id: 17,
      name: "KryptoGiffy",
      description:
        "This platform allows you to perform transactions via Blockchain by using Ethereum mainnet.Prerequsite : Web3.0 Wallet.",
      tags: ["Ropsen", "Goerli", "Ethereum", "Web 3.0"],
      demo: "https://kryptogiffy.web.app/",
      github: "https://github.com/hareesh-r/KryptoGiffy",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Fkryptogiffy.jpg?alt=media&token=b642f131-cdda-4378-9d2b-7f8770b1e671",
    },
    {
      id: 16,
      name: "Graphical Password Authentication",
      description:
        "Users can set passwords using images and their sequence using this project, which implements the same concept for password authentication as recapcha (checks for Human). I have presented the Live Demo for Smart India Hackathon",
      tags: ["SIH", "Security", "API", "MongoDB"],
      demo: "https://github.com/hareesh-r/Graphical-password-authentication",
      github: "https://github.com/hareesh-r/Graphical-password-authentication",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2FWIP.jpg?alt=media&token=d384a63d-39f9-4c55-8cea-e39e2c52de4c",
    },
    {
      id: 18,
      name: "Breach Checker",
      description:
        "This website checks if your passwords or critical information has been leaked anywhere in the internet or not. This website is completely free , secure and not vulnerable to attacks like SQL Injection, XSS, etc.",
      tags: ["HIBP", "RockYou2021", "APIs", "Particle.JS"],
      demo: "https://breachchecker.web.app/",
      github: "https://github.com/hareesh-r/password-breach-checker",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2FBreach.jpg?alt=media&token=cafe9666-18c6-403d-919c-c6771c44b9fc",
    },
    {
      id: 1,
      name: "Crypto King",
      description:
        "Crypto king is a crypto infomercial web app that displays market and Top 100 crypto currency data, as well as relevant news and information about crypto exchanges.",
      tags: ["React", "Crypto", "Coinranking API", "Redux"],
      demo: "https://cryptoking.web.app/",
      github: "https://github.com/hareesh-r/cryptoking",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Fcryptoking.jpg?alt=media&token=250872db-0997-4e38-9676-08c1d69242a9",
    },
    {
      id: 2,
      name: "Internshala-frontend",
      description:
        "This web application for an internship application was created in 3 hours and is identical to the homepage of internshala.com",
      tags: ["React", "HTML", "CSS"],
      demo: "https://internshala-frontend.web.app/",
      github: "https://github.com/hareesh-r/internshala-frontend",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Finternshala-frontend.jpg?alt=media&token=6111c43a-0ae0-4130-8e52-4897b042a43d",
    },
    {
      id: 3,
      name: "Stock-information",
      description:
        "This is a stock market information web application that will provide infographics on real-time stock market data from well-known stocks in daily, weekly, and monthly views, as well as extra stock information packed with a search for specific stock feature.",
      tags: ["React", "API", "Stocks", "AlphaVantage", "Chart.js"],
      demo: "https://stock-information.web.app/",
      github: "https://github.com/hareesh-r/stock-info",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Fstock-info.jpg?alt=media&token=e676df7e-fdd5-42be-9ef2-f5ba640320e4",
    },
    {
      id: 4,
      name: "Acoustic Music",
      description:
        "This is a Spotify web app that allows you to listen to most of the songs if you have a premium membership; otherwise, you can listen to a 30-second song preview.",
      tags: ["React", "Spotify API", "Spotify Authentication"],
      demo: "https://acousticmusic.web.app/",
      github: "https://github.com/hareesh-r/acoustic-music",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Facoustic.jpg?alt=media&token=08d3adfc-c468-4f34-ab83-1a5fefda41d5",
    },
    {
      id: 5,
      name: "Weather Man",
      description:
        "It's a simple weather app featuring real-time data from 5 well-known locations, as well as a detailed Real-Time Prediction Chart developed with OpenWeatherAPI. You can also search for your desired city and get facts, as well as a dynamic backdrop image and real-time chart.",
      tags: ["React", "Open weather API", "Chart.js"],
      demo: "https://weather-man-hareesh.web.app/",
      github: "https://github.com/hareesh-r/weather-man",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Fweather.jpg?alt=media&token=56582d0b-fe15-4e53-a9ce-349c0f17e7f8",
    },
    {
      id: 6,
      name: "Eco Ville - Geek Social",
      description:
        "Climate change has always been a persistent and catastrophic issue, and the problem with addressing it is that there is no effective way to determine whether one's contribution to environmental protection is effective and We built a potential solution",
      tags: ["React Native", "Android", "Adobe XD"],
      demo: "https://www.youtube.com/watch?v=40ZY_vaVn3w",
      github: "https://www.youtube.com/watch?v=40ZY_vaVn3w",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2FEcoVille.jpg?alt=media&token=ee509486-64bd-4aa4-8bc1-6577f74338f5",
    },
    {
      id: 7,
      name: "ComebackAlums V2.0",
      description:
        "CSI Sponsored web development competition winning Project and Personal Favorite",
      tags: ["React", "Firebase", "Material UI"],
      demo: "https://comebackalums.web.app/",
      github: "https://github.com/hareesh-r/comebackalums2.0",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Fcomeback.jpg?alt=media&token=8fc2dcf5-1696-4626-a52b-c2625452a8f2",
    },
    {
      id: 8,
      name: "Google Clone",
      description:
        "Clone of Google With dark mode functionality, built with Google Custom Search API and ReactJS.",
      tags: ["React", "Google Search API", "CSS", "HTML"],
      demo: "https://gooogle-hareesh.web.app/",
      github: "https://github.com/hareesh-r/google-hareesh",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Fgoogle.jpg?alt=media&token=e1aa6175-55ca-4307-9e7a-1811d42060ca",
    },
    {
      id: 9,
      name: "Netflix Frontend Clone",
      description:
        "Netflix frontend clone with React JS and Firebase Backend with TMDB API",
      tags: ["React", "TMDB API", "CSS", "Firebase"],
      demo: "https://netflix-hareesh.web.app/",
      github: "https://github.com/hareesh-r/netflix-hareesh",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Fnetflix.jpg?alt=media&token=61b9542d-d38b-44bc-b4dd-8199a1a42f4a",
    },
    {
      id: 10,
      name: "JioFi-Battery-Notification",
      description:
        "This is my own code to fix a real-world problem with my JioFi's (Portable Hotspot) battery bulging due to overcharging and cutting out owing to low battery.",
      tags: ["Python", "Python notification", "selenium"],
      demo: "https://github.com/hareesh-r/JioFi-Battery-Notification",
      github: "https://github.com/hareesh-r/JioFi-Battery-Notification",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Fjiofi.jpg?alt=media&token=433dd834-4a6f-4443-8322-4d0ed1aeb2ca",
    },
    {
      id: 11,
      name: "Mineral Drop",
      description:
        "This is the website I built for Mineral Drop as an intern. It serves as a landing page for the startup.",
      tags: ["HTML", "CSS", "Bootstrap"],
      demo: "https://mineraldrop.in/",
      github: "https://github.com/hareesh-r/mdrop",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Fmineraldrop.jpg?alt=media&token=d98dc2e4-16b0-4cba-8083-e81e29052bf4",
    },
    {
      id: 12,
      name: "Facial Expression Recognition",
      description:
        "Tensor flow based facial expression recognition project constructed with a package called Keras and an 8 layers neural network that can recognise 7 expressions.",
      tags: ["Python 3", "CNN", "Deep Learning", "Open CV"],
      demo: "https://github.com/hareesh-r/Facial-Expression-Recognition-Keras",
      github:
        "https://github.com/hareesh-r/Facial-Expression-Recognition-Keras",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Fface.jpg?alt=media&token=c85f8e04-3c8d-4c58-82cc-0e68a7df5378",
    },
    {
      id: 13,
      name: "Tweet Bot",
      description:
        "If you have a legitimate account, this is the tweet bot that can post tweets indefinitely.",
      tags: ["Python", "Selenium", "Bot"],
      demo: "https://github.com/hareesh-r/tweetbot",
      github: "https://github.com/hareesh-r/tweetbot",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Ftweet.jpg?alt=media&token=fe7b2aec-1317-40a8-aee6-dac343050ba2",
    },
    {
      id: 14,
      name: "File-Seperator",
      description:
        "It's a Python-based file segregator that separates files into different folders based on their type, allowing you to organise your files in seconds and helping people with OCD by cleaning the cutter. ",
      tags: ["OS", "Python", "Utility", "Real Time"],
      demo: "https://github.com/hareesh-r/File-Seperator",
      github: "https://github.com/hareesh-r/File-Seperator",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Ffileseperator.jpg?alt=media&token=06a64da8-2da2-4bf8-8232-ba3ca50e39bc",
    },
    {
      id: 15,
      name: "instagram-login-automation",
      description:
        "Send a message to anyone with two options. In a variety of languages (120+), wish them a happy birthday. Annoy them by sending them the same message N times.",
      tags: ["Instagram", "Selenium", "Python"],
      demo: "http://React-responsive-navbar-codebucks27.vercel.app/",
      github: "https://github.com/codebucks27/React-responsive-navbar",
      image:
        "https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Ffileseperator.jpg?alt=media&token=06a64da8-2da2-4bf8-8232-ba3ca50e39bc",
    },
  ],
  Lh = R(W.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(e) => e.theme.text};
  color: ${(e) => e.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid ${(e) => e.theme.body};
  transition: all 0.2s ease;

  ${L(50)`
        width:16rem;
        margin-right:6rem;
        height:35vh;
  `};
  ${L(40)`
        width:14rem;
        margin-right:4rem;
        height:35vh;
  `};
  ${L(25)`
        width:12rem;
        margin-right:4rem;
        height:35vh;
padding:1.5rem 1.5rem;
  `};
  ${L(20)`
        width:10rem;
        margin-right:4rem;
        height:40vh;
  `};
`,
  e4 = R.h2`
  font-size: calc(1em + 0.5vw);
`,
  t4 = R.div`
  font-size: calc(0.7em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
  ${L(25)`
  font-size:calc(0.7em + 0.3vw);
  `};
  ${L(20)`
  font-size:calc(0.6em + 0.3vw);
  `};
`,
  n4 = R.div`
  border-top: 2px solid #FCF6F4;
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`,
  r4 = R.img`

`,
  i4 = R.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);

  ${L(25)`
  font-size:calc(0.7em);


  `};
`,
  o4 = R.footer`
  display: flex;
  justify-content: space-between;
`,
  s4 = R.a`
  background-color: ${(e) => e.theme.body};
  color: ${(e) => e.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);
`,
  a4 = R.a`
  text-decoration: none;
  }
`,
  Ah = {
    hidden: { scale: 1 },
    show: { scale: 1, transition: { type: "spring", duration: 0 } },
  },
  l4 = (e) => {
    const {
      id: t,
      name: n,
      description: r,
      tags: i,
      demo: o,
      github: s,
      image: a,
    } = e.data;
    return v.jsx("div", {
      className: "mr-8rem",
      children: v.jsx("div", {
        className: "flip-card",
        children: v.jsxs("div", {
          className: "flip-card-inner",
          children: [
            v.jsx("div", {
              className: "flip-card-front",
              children: v.jsxs(
                Lh,
                {
                  variants: Ah,
                  children: [
                    v.jsx(e4, { children: n }),
                    v.jsx(t4, { children: r }),
                  ],
                },
                t,
              ),
            }),
            v.jsx("div", {
              className: "flip-card-back",
              children: v.jsxs(
                Lh,
                {
                  className: "box",
                  variants: Ah,
                  children: [
                    v.jsx(r4, { src: a }),
                    v.jsx(n4, {
                      className: "box",
                      children: i.map((l, u) =>
                        v.jsxs(i4, { children: ["#", l] }, u),
                      ),
                    }),
                    v.jsxs(o4, {
                      children: [
                        v.jsx(s4, {
                          className: "visit-link",
                          href: o,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: "Visit",
                        }),
                        v.jsx(a4, {
                          href: s,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: v.jsx(tk, {
                            className: "git",
                            width: 30,
                            height: 30,
                          }),
                        }),
                      ],
                    }),
                  ],
                },
                t,
              ),
            }),
          ],
        }),
      }),
    });
  },
  u4 = S.lazy(() => K(() => import("./SocialIcons-DdUsFf1Y.js"), [])),
  c4 = S.lazy(() => K(() => import("./PowerButton-7EvZcJPM.js"), [])),
  f4 = S.lazy(() => K(() => import("./LogoComponent-COFNQSqI.js"), [])),
  Mh = S.lazy(() => K(() => import("./BigTitle-CyocCDOl.js"), [])),
  d4 = R(W.div)`
  background-color: ${(e) => e.theme.body};
  position: relative;
  display: flex;
  height: 400vh;
`,
  h4 = R(W.ul)`
  position: fixed;
  top: 6rem;
  left: 0;

  height: 40vh;

  display: flex;
`,
  p4 = R.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
  transition: transform 0.1s ease-out;

  ${L(40)`
     width:60px;
     height:60px;   
     svg{
       width:60px;
       height:60px;
     }
  `};
  ${L(25)`
     width:50px;
     height:50px;
     svg{
       width:50px;
       height:50px;
     }
  `};
`,
  m4 = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5, duration: 0.5 } },
  },
  g4 = () => {
    const e = S.useRef(null),
      t = S.useRef(null);
    S.useEffect(() => {
      let r = null,
        i = 0;
      const o = 20,
        s = () => {
          const a = e.current,
            l = t.current;
          if (!a || !l) {
            (i++, i < o && requestAnimationFrame(s));
            return;
          }
          r = n(a, l);
        };
      return (
        requestAnimationFrame(s),
        () => {
          r && r();
        }
      );
    }, []);
    const n = (r, i) => {
      let o = !1,
        s,
        a;
      r.style.cursor = "grab";
      const l = () => {
        if (i && r) {
          const P = r.scrollLeft / 2;
          i.style.transform = `rotate(${P}deg)`;
        }
      };
      let u = null,
        f = null;
      const c = () => {
          (l(), (u = requestAnimationFrame(c)));
        },
        d = () => {
          (u || c(),
            f && clearTimeout(f),
            (f = setTimeout(() => {
              m();
            }, 150)));
        },
        m = () => {
          (u && (cancelAnimationFrame(u), (u = null)), l());
        };
      (l(),
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            l();
          });
        }));
      const y = (P) => {
          ((o = !0),
            r.classList.add("active"),
            (r.style.cursor = "grabbing"),
            (s = P.pageX - r.offsetLeft),
            (a = r.scrollLeft));
        },
        w = () => {
          ((o = !1), r.classList.remove("active"), (r.style.cursor = "grab"));
        },
        k = () => {
          ((o = !1),
            r.classList.remove("active"),
            (r.style.cursor = "grab"),
            m());
        },
        g = (P) => {
          if (!o) return;
          P.preventDefault();
          const T = (P.pageX - r.offsetLeft - s) * 2;
          ((r.scrollLeft = a - T), u || c());
        },
        h = (P) => {
          ((o = !0),
            r.classList.add("active"),
            (s = P.touches[0].pageX - r.offsetLeft),
            (a = r.scrollLeft));
        },
        p = (P) => {
          if (!o) return;
          P.preventDefault();
          const T = (P.touches[0].pageX - r.offsetLeft - s) * 2;
          ((r.scrollLeft = a - T), u || c());
        },
        x = () => {
          ((o = !1), r.classList.remove("active"), m());
        },
        C = (P) => {
          Math.abs(P.deltaX) > Math.abs(P.deltaY) &&
            (P.preventDefault(), (r.scrollLeft += P.deltaX), u || c());
        };
      return (
        r.addEventListener("mousedown", y),
        r.addEventListener("mouseleave", w),
        r.addEventListener("mouseup", k),
        r.addEventListener("mousemove", g),
        r.addEventListener("touchstart", h, { passive: !1 }),
        r.addEventListener("touchmove", p, { passive: !1 }),
        r.addEventListener("touchend", x),
        r.addEventListener("wheel", C, { passive: !1 }),
        r.addEventListener("scroll", d),
        () => {
          (u && cancelAnimationFrame(u),
            f && clearTimeout(f),
            r.removeEventListener("mousedown", y),
            r.removeEventListener("mouseleave", w),
            r.removeEventListener("mouseup", k),
            r.removeEventListener("mousemove", g),
            r.removeEventListener("touchstart", h),
            r.removeEventListener("touchmove", p),
            r.removeEventListener("touchend", x),
            r.removeEventListener("wheel", C),
            r.removeEventListener("scroll", d));
        }
      );
    };
    return v.jsx(Ji, {
      theme: Ss,
      children: v.jsx(S.Suspense, {
        fallback: v.jsx(Hr, {}),
        children: v.jsxs(
          d4,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 1 } },
            exit: { opacity: 0, transition: { duration: 0.5 } },
            children: [
              v.jsx(f4, { theme: "dark" }),
              v.jsx(c4, {}),
              v.jsx(u4, { theme: "dark" }),
              v.jsx(h4, {
                className: "items",
                id: "grab-scroll",
                ref: e,
                variants: m4,
                initial: "hidden",
                animate: "show",
                children: qk.map((r) => v.jsx(l4, { data: r }, r.id)),
              }),
              v.jsx(Mh, { text: "WORK", top: "10%", right: "20%" }),
              v.jsx(Mh, { text: "Swipe..", top: "80%", right: "0%" }),
              v.jsx(p4, {
                ref: t,
                children: v.jsx(wu, { width: 80, height: 80, fill: Ss.text }),
              }),
            ],
          },
          "work",
        ),
      }),
    });
  },
  y4 = S.lazy(() => K(() => import("./SocialIcons-DdUsFf1Y.js"), [])),
  v4 = S.lazy(() => K(() => import("./PowerButton-7EvZcJPM.js"), [])),
  w4 = S.lazy(() => K(() => import("./LogoComponent-COFNQSqI.js"), [])),
  x4 = S.lazy(() => K(() => import("./ParticleComponent-DNCEmcKq.js"), [])),
  S4 = S.lazy(() => K(() => import("./BigTitle-CyocCDOl.js"), [])),
  k4 = R(W.div)`
  background-color: ${(e) => e.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${L(50)`
            flex-direction:column;  
            padding:8rem 0;
            height:auto;
            &>*:nth-child(5){
              margin-bottom:5rem;
            }
           
  `};
  ${L(30)`
           
            &>*:nth-child(5){
              margin-bottom:4rem;
            }
           
  `};
`,
  As = R(W.div)`
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: ${(e) => e.theme.text};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  border-radius: 10px;

  ${L(60)`
            height: 55vh;
  `};

  ${L(50)`
              width: 50vw;
              height: max-content;

  `};

  font-family: "Ubuntu Mono", monospace;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.15);
  }
`,
  Dh = R.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${L(60)`
          font-size:calc(0.8em + 1vw);
  `};

  ${L(50)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

  ${L(30)`
                      font-size:calc(1em + 1vw);
  `};
  ${L(25)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};

  ${As}:hover & {
    & > * {
      fill: ${(e) => e.theme.text};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`,
  qn = R.div`
  color: ${(e) => e.theme.text};
  font-size: calc(0.5em + 1vw);
  padding: 0.5rem 0;
  ${As}:hover & {
    color: ${(e) => e.theme.text};
  }

  ${L(50)`
            font-size: calc(0.8em + 1vw);

  `};

  ${L(30)`
                      font-size:calc(0.7em + 1vw);

              

  `};

  ${L(25)`
                      font-size:calc(0.5em + 1vw);

              

  `};

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`,
  C4 = () =>
    v.jsx(Ji, {
      theme: xg,
      children: v.jsx(S.Suspense, {
        fallback: v.jsx(Hr, {}),
        children: v.jsxs(
          k4,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 1 } },
            exit: { opacity: 0, transition: { duration: 0.5 } },
            children: [
              v.jsx(w4, { theme: "light" }),
              v.jsx(v4, {}),
              v.jsx(y4, { theme: "light" }),
              v.jsx(x4, { theme: "light" }),
              v.jsxs(As, {
                children: [
                  v.jsxs(Dh, {
                    children: [
                      v.jsx(rk, { width: 40, height: 40 }),
                      " Full-Stack",
                    ],
                  }),
                  v.jsx(qn, {
                    children:
                      "Building scalable products from zero to production with modern frameworks and clean architecture.",
                  }),
                  v.jsxs(qn, {
                    children: [
                      v.jsx("strong", { children: "I like to code in" }),
                      " ",
                      v.jsx("br", {}),
                      v.jsx("p", {
                        children:
                          "React, Next.js, TypeScript, Node.js, Java, GraphQL, Python",
                      }),
                    ],
                  }),
                  v.jsxs(qn, {
                    children: [
                      v.jsx("strong", { children: "Tools" }),
                      " ",
                      v.jsx("br", {}),
                      v.jsxs("ul", {
                        children: [
                          v.jsx("li", {
                            children: "MongoDB, MySQL, PostgreSQL, Redis",
                          }),
                          v.jsx("li", { children: "AWS, Docker, Serverless" }),
                          v.jsx("li", {
                            children: "Spring Boot, Express.js, Apollo",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs(As, {
                children: [
                  v.jsxs(Dh, {
                    children: [v.jsx(nk, { width: 40, height: 40 }), " AI/ML"],
                  }),
                  v.jsx(qn, {
                    children:
                      "Integrating AI technologies into production workflows with MCP, RAG, and voice models.",
                  }),
                  v.jsxs(qn, {
                    children: [
                      v.jsx("strong", { children: "Skills" }),
                      " ",
                      v.jsx("br", {}),
                      v.jsx("p", {
                        children:
                          "MCP, RAG Pipelines, LLM Integrations, Agent Orchestration, Voice Models",
                      }),
                    ],
                  }),
                  v.jsxs(qn, {
                    children: [
                      v.jsx("strong", { children: "Tools" }),
                      " ",
                      v.jsx("br", {}),
                      v.jsx("p", {
                        children:
                          "OpenAI GPT, Claude, ElevenLabs, Cursor AI, Pipecat",
                      }),
                    ],
                  }),
                ],
              }),
              v.jsx(S4, { text: "Skills", top: "80%", right: "30%" }),
            ],
          },
          "skills",
        ),
      }),
    }),
  P4 = [
    {
      id: 1,
      company: "Highbrow Technology Inc",
      role: "Product Engineer",
      period: "Jan 2026 - Present",
      location: "North Carolina, United States · Remote",
      type: "Full-time",
      description:
        "Own the product roadmap and quarterly execution plan aligned with business goals. Translate business and customer needs into clear PRDs, user stories, and prioritized backlogs. Act as the single point of contact between stakeholders, engineering, design, and sales.",
      keyPoints: [
        "Drive sprint planning, ticket grooming, and release coordination",
        "Define success metrics, track outcomes, and iterate based on data",
        "Align product features with market needs, pricing strategy, and go-to-market plans",
        "Ensure timely delivery of high-impact features while balancing scope, quality, and speed",
      ],
      skills: [
        "Product Management",
        "Positioning (Marketing)",
        "Full-Stack Development",
        "Product Development",
        "Database Design",
      ],
    },
    {
      id: 2,
      company: "Highbrow Technology Inc",
      role: "Senior Software Engineer",
      period: "Dec 2024 - Jan 2026",
      location: "North Carolina, United States · Remote",
      type: "Full-time",
      description:
        "Early engineering team member who helped take HighBrow from experimentation to production-ready systems by owning execution, systems, and culture from day one.",
      keyPoints: [
        "Co-built CleverHire and TalentBridge, contributing major portion of frontend",
        "Designed database schemas with DBML and set up scalable MERN-stack foundations",
        "Shipped Timesheet Tracker in two weeks, scaled to 500+ users",
        "Led frontend architecture across multiple products, exploring 15+ UI libraries",
        "Introduced AI-assisted development and validated tools like Cursor through R&D",
        "Built AI-first workflows using MCP, RAG pipelines, LLM integrations, and voice models",
      ],
      skills: [
        "MERN Stack",
        "React.js",
        "Systems Design",
        "AI Integration",
        "GraphQL",
      ],
    },
    {
      id: 3,
      company: "Zoho Corporation",
      role: "Member of Technical Staff",
      period: "Jun 2023 - Nov 2024",
      location: "Chennai, Tamil Nadu, India · Hybrid",
      type: "Full-time",
      description:
        "Software Development Engineer - Fullstack product Development, GraphQL Expert. Product Owner: Zgraph at Zoho Catalyst & MBaaS.",
      keyPoints: [
        "Fixed high-impact Java production bugs and revived GraphQL subservice",
        "Optimized APIs with Java and SQL, delivering ~70% performance improvements",
        "Integrated 10+ Zoho Products maintaining great Developer Experience",
        "Worked on Microservice architecture, Serverless, Multi-tenancy, Thread pooling",
      ],
      skills: [
        "Java",
        "Spring Boot",
        "GraphQL",
        "Apollo GraphQL",
        "MySQL",
        "Redis",
        "REST APIs",
      ],
    },
    {
      id: 4,
      company: "Zoho Corporation",
      role: "Project Trainee",
      period: "Jul 2022 - Jun 2023",
      location: "Chennai, Tamil Nadu, India · On-site",
      type: "Internship",
      description:
        "GraphQL Expert, Service Orientated Architecture, ORM, Serverless, Cloud Infrastructure.",
      keyPoints: [
        "Developed GraphQL APIs and REST services",
        "Worked with Redis, MySQL, Java, JavaScript, Handlebars, Highcharts",
        "Built cloud infrastructure solutions",
      ],
      skills: [
        "GraphQL",
        "Java",
        "Spring Boot",
        "MySQL",
        "Redis",
        "JavaScript",
        "REST APIs",
      ],
    },
    {
      id: 5,
      company: "Amazon",
      role: "Mentee - Amazon ML Summer School",
      period: "Jun 2022 - Aug 2022",
      location: "Virtual",
      type: "Trainee",
      description:
        "In-depth knowledge on key ML topics from Amazon Scientists. Platform to interact with Scientists and learn about break-through innovation.",
      keyPoints: [
        "Learned key ML concepts from Amazon Scientists",
        "Prepared for a career in ML",
        "Explored breakthrough innovations in machine learning",
      ],
      skills: ["Data Science", "Machine Learning", "MySQL"],
    },
    {
      id: 6,
      company: "Catalyst by Zoho",
      role: "Summer Intern",
      period: "Mar 2022 - Apr 2022",
      location: "India",
      type: "Internship",
      description: "Worked on Java, MySQL, and Kafka technologies.",
      keyPoints: [
        "Developed applications using Java and MySQL",
        "Worked with Kafka for event streaming",
        "Built REST APIs and integrated with Firebase",
      ],
      skills: ["Java", "MySQL", "Kafka", "REST APIs", "Firebase"],
    },
    {
      id: 7,
      company: "Bit Brothers",
      role: "Frontend Web Developer",
      period: "Aug 2021 - Sep 2021",
      location: "Remote",
      type: "Internship",
      description:
        "Worked on ReactJS, MaterialUI, Figma. Real world projects. Collaborated using GitHub with conventional commits.",
      keyPoints: [
        "Built frontend applications with ReactJS and MaterialUI",
        "Designed UI/UX using Figma",
        "Collaborated using GitHub with conventional commits",
      ],
      skills: [
        "React.js",
        "MaterialUI",
        "Figma",
        "Git",
        "REST APIs",
        "Firebase",
      ],
    },
    {
      id: 8,
      company: "Mineral Drop",
      role: "Frontend Web Developer",
      period: "Nov 2020 - Mar 2021",
      location: "Remote",
      type: "Internship",
      description:
        "6 months long Internship. Made incredible web designs with HTML, CSS, Bootstrap, JavaScript, ReactJS. Worked with Netlify, GitHub, GoDaddy, Firebase. SEO and Google Mobile Friendly website.",
      keyPoints: [
        "Created responsive web designs using HTML, CSS, Bootstrap, JavaScript, ReactJS",
        "Deployed websites using Netlify, GitHub, GoDaddy",
        "Implemented SEO and mobile-friendly designs",
      ],
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "React.js",
        "Firebase",
        "SEO",
      ],
    },
    {
      id: 9,
      company: "Fashioo",
      role: "Web Developer",
      period: "Oct 2020 - Nov 2020",
      location: "Remote",
      type: "Internship",
      description:
        "Worked as a Frontend Developer. HTML, CSS, Bootstrap, JavaScript. Netlify, GitHub, SEO. Multimedia Manipulation.",
      keyPoints: [
        "Developed frontend applications with HTML, CSS, Bootstrap, JavaScript",
        "Worked on multimedia manipulation",
        "Implemented SEO best practices",
      ],
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "Git", "SEO"],
    },
  ],
  E4 = S.lazy(() => K(() => import("./SocialIcons-DdUsFf1Y.js"), [])),
  T4 = S.lazy(() => K(() => import("./PowerButton-7EvZcJPM.js"), [])),
  _4 = S.lazy(() => K(() => import("./LogoComponent-COFNQSqI.js"), [])),
  b4 = S.lazy(() => K(() => import("./BigTitle-CyocCDOl.js"), [])),
  R4 = R(W.div)`
  background-color: ${(e) => e.theme.body};
  height: 100vh;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(e) => e.theme.text};
    border-radius: 4px;
  }

  ${L(50)`
    scroll-snap-type: none;
    height: auto;
    min-height: 100vh;
  `};
`,
  j4 = R.div`
  position: relative;
  width: 100%;
`,
  L4 = R(W.section)`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  padding: 2rem;
  padding-top: 8rem;
  box-sizing: border-box;

  ${L(50)`
    height: auto;
    min-height: auto;
    padding: 1.5rem;
    padding-top: 6rem;
    scroll-snap-align: none;
  `};
`,
  A4 = R.div`
  max-width: 1400px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  ${L(50)`
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 2rem;
    gap: 2rem;
  `};
`,
  M4 = R.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(
    to bottom,
    ${(e) => e.theme.text} 0%,
    ${(e) => e.theme.text} 100%
  );
  transform: translateX(-50%);
  z-index: 1;

  ${L(50)`
    display: none;
  `};
`,
  D4 = R(W.div).withConfig({ shouldForwardProp: (e) => e !== "isInternship" })`
  width: 45%;
  z-index: 2;
  opacity: 0;
  transform: translateX(-50px);

  ${L(50)`
    width: 100%;
    opacity: 1 !important;
    transform: translateX(0) !important;
  `};
`,
  I4 = R(W.div).withConfig({ shouldForwardProp: (e) => e !== "isInternship" })`
  width: 45%;
  z-index: 2;
  opacity: 0;
  transform: translateX(50px);

  ${L(50)`
    width: 100%;
    opacity: 1 !important;
    transform: translateX(0) !important;
  `};
`,
  V4 = R.div.withConfig({ shouldForwardProp: (e) => e !== "isInternship" })`
  background: ${(e) => (e.isInternship ? "rgba(100, 150, 255, 0.08)" : "rgba(255, 255, 255, 0.05)")};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${(e) => (e.isInternship ? "rgba(100, 150, 255, 0.3)" : "rgba(255, 255, 255, 0.1)")};
  border-left: 4px solid ${(e) => (e.isInternship ? "rgba(100, 150, 255, 0.6)" : "rgba(255, 255, 255, 0.4)")};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: ${(e) => (e.isInternship ? "0 8px 32px 0 rgba(100, 150, 255, 0.15)" : "0 8px 32px 0 rgba(0, 0, 0, 0.2)")};
  display: flex;
  flex-direction: column;

  ${L(50)`
    padding: 1.5rem;
  `};
`,
  $4 = R.h2`
  font-size: calc(1.3rem + 1vw);
  color: ${(e) => e.theme.text};
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-align: left;
  display: block;
  width: 100%;

  ${L(50)`
    font-size: calc(1.1rem + 1vw);
    margin-bottom: 1.2rem;
  `};
`,
  F4 = R.h3`
  font-size: calc(1rem + 0.6vw);
  color: ${(e) => e.theme.text};
  margin-bottom: 0.8rem;
  font-weight: 600;
  opacity: 0.95;
  text-align: left;
  display: block;
  width: 100%;

  ${L(50)`
    font-size: calc(0.9rem + 0.6vw);
  `};
`,
  z4 = R.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 1.5rem;
  opacity: 0.8;
  text-align: left;
`,
  N4 = R.span`
  font-size: calc(0.85rem + 0.4vw);
  color: ${(e) => e.theme.text};
  font-weight: 500;
`,
  O4 = R.span`
  font-size: calc(0.75rem + 0.3vw);
  color: ${(e) => `rgba(${e.theme.textRgba}, 0.7)`};
  font-style: italic;
`,
  B4 = R.span.withConfig({ shouldForwardProp: (e) => e !== "isInternship" })`
  display: inline-block;
  font-size: calc(0.7rem + 0.25vw);
  color: ${(e) => (e.isInternship ? "rgba(150, 200, 255, 1)" : e.theme.text)};
  background: ${(e) => (e.isInternship ? "rgba(100, 150, 255, 0.2)" : "rgba(255, 255, 255, 0.15)")};
  border: 1px solid ${(e) => (e.isInternship ? "rgba(100, 150, 255, 0.4)" : "rgba(255, 255, 255, 0.2)")};
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  margin-top: 0.5rem;
  width: fit-content;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,
  U4 = R.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`,
  W4 = R.span`
  font-size: calc(0.7rem + 0.25vw);
  color: ${(e) => e.theme.text};
  background: rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`,
  H4 = R.div.withConfig({ shouldForwardProp: (e) => e !== "isInternship" })`
  background: ${(e) => (e.isInternship ? "rgba(100, 150, 255, 0.08)" : "rgba(255, 255, 255, 0.05)")};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${(e) => (e.isInternship ? "rgba(100, 150, 255, 0.3)" : "rgba(255, 255, 255, 0.1)")};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: ${(e) => (e.isInternship ? "0 8px 32px 0 rgba(100, 150, 255, 0.15)" : "0 8px 32px 0 rgba(0, 0, 0, 0.2)")};
  height: fit-content;
  max-height: 80vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(e) => e.theme.text};
    border-radius: 3px;
  }

  ${L(50)`
    padding: 1.5rem;
    max-height: none;
  `};
`,
  G4 = R.p`
  font-size: calc(0.9rem + 0.4vw);
  color: ${(e) => `rgba(${e.theme.textRgba}, 0.85)`};
  line-height: 1.8;
  margin: 0 0 1.5rem 0;
  font-family: "Ubuntu Mono", monospace;
  text-align: left;

  ${L(50)`
    font-size: calc(0.85rem + 0.4vw);
  `};
`,
  K4 = R.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  text-align: left;
`,
  Q4 = R.li`
  font-size: calc(0.85rem + 0.35vw);
  color: ${(e) => `rgba(${e.theme.textRgba}, 0.8)`};
  line-height: 1.8;
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  font-family: "Ubuntu Mono", monospace;
  text-align: left;

  &::before {
    content: "▸";
    position: absolute;
    left: 0;
    color: ${(e) => e.theme.text};
    font-weight: bold;
    font-size: 1.2em;
  }

  ${L(50)`
    font-size: calc(0.8rem + 0.35vw);
    margin-bottom: 0.6rem;
  `};
`,
  Y4 = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  },
  X4 = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.2 },
    },
  },
  J4 = () =>
    v.jsx(Ji, {
      theme: Ss,
      children: v.jsx(S.Suspense, {
        fallback: v.jsx(Hr, {}),
        children: v.jsxs(
          R4,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 1 } },
            exit: { opacity: 0, transition: { duration: 0.5 } },
            children: [
              v.jsx(_4, { theme: "dark" }),
              v.jsx(T4, {}),
              v.jsx(E4, { theme: "dark" }),
              v.jsxs(j4, {
                children: [
                  v.jsx(M4, {}),
                  P4.map((e, t) => {
                    var r, i;
                    const n =
                      ((r = e.type) == null
                        ? void 0
                        : r.toLowerCase().includes("internship")) ||
                      ((i = e.type) == null
                        ? void 0
                        : i.toLowerCase().includes("trainee"));
                    return v.jsx(
                      L4,
                      {
                        children: v.jsxs(A4, {
                          children: [
                            v.jsx(D4, {
                              isInternship: n,
                              variants: Y4,
                              initial: "hidden",
                              whileInView: "visible",
                              viewport: { once: !0, amount: 0.3 },
                              children: v.jsxs(V4, {
                                isInternship: n,
                                children: [
                                  v.jsx($4, { children: e.company }),
                                  v.jsx(F4, { children: e.role }),
                                  v.jsxs(z4, {
                                    children: [
                                      v.jsx(N4, { children: e.period }),
                                      e.location &&
                                        v.jsx(O4, { children: e.location }),
                                      e.type &&
                                        v.jsx(B4, {
                                          isInternship: n,
                                          children: e.type,
                                        }),
                                    ],
                                  }),
                                  e.skills &&
                                    e.skills.length > 0 &&
                                    v.jsx(U4, {
                                      children: e.skills.map((o, s) =>
                                        v.jsx(W4, { children: o }, s),
                                      ),
                                    }),
                                ],
                              }),
                            }),
                            v.jsx(I4, {
                              isInternship: n,
                              variants: X4,
                              initial: "hidden",
                              whileInView: "visible",
                              viewport: { once: !0, amount: 0.3 },
                              children: v.jsxs(H4, {
                                isInternship: n,
                                children: [
                                  v.jsx(G4, { children: e.description }),
                                  e.keyPoints &&
                                    e.keyPoints.length > 0 &&
                                    v.jsx(K4, {
                                      children: e.keyPoints.map((o, s) =>
                                        v.jsx(Q4, { children: o }, s),
                                      ),
                                    }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      },
                      e.id,
                    );
                  }),
                ],
              }),
              v.jsx(b4, { text: "EXPERIENCE", top: "5%", right: "10%" }),
            ],
          },
          "work-history",
        ),
      }),
    });
function Z4() {
  const e = Ur();
  return v.jsx(Z3, {
    mode: "wait",
    initial: !1,
    children: v.jsxs(
      Sx,
      {
        location: e,
        children: [
          v.jsx(Tn, { path: "/", element: v.jsx(Sk, {}, "main") }),
          v.jsx(Tn, { path: "/about", element: v.jsx(Ak, {}, "about") }),
          v.jsx(Tn, { path: "/blog", element: v.jsx(Zk, {}, "blog") }),
          v.jsx(Tn, { path: "/work", element: v.jsx(g4, {}, "work") }),
          v.jsx(Tn, {
            path: "/work-history",
            element: v.jsx(J4, {}, "work-history"),
          }),
          v.jsx(Tn, { path: "/skills", element: v.jsx(C4, {}, "skills") }),
        ],
      },
      e.pathname,
    ),
  });
}
function q4() {
  return v.jsxs(v.Fragment, {
    children: [
      v.jsx(jw, {}),
      v.jsx(Ji, { theme: xg, children: v.jsx(Z4, {}) }),
    ],
  });
}
const eC = document.getElementById("root"),
  tC = Km(eC);
tC.render(
  v.jsx(Ae.StrictMode, { children: v.jsx(Rx, { children: v.jsx(q4, {}) }) }),
);
export {
  lC as A,
  Ss as D,
  sC as F,
  tk as G,
  oC as L,
  Wr as N,
  rC as P,
  Ae as R,
  iC as T,
  aC as Y,
  W as a,
  uC as b,
  R as d,
  v as j,
  L as m,
  S as r,
};
