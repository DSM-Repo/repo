import {
  require_react_dom
} from "./chunk-OE7SLV2L.js";
import {
  require_jsx_runtime
} from "./chunk-T626GWXX.js";
import {
  require_react
} from "./chunk-ZK6F47AF.js";
import {
  __toESM
} from "./chunk-WOOG5QLI.js";

// ../../.yarn/__virtual__/react-virtuoso-virtual-f5e1d93ce4/0/cache/react-virtuoso-npm-4.12.5-4c3a2bc2df-a1470edd45.zip/node_modules/react-virtuoso/dist/index.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var Ce = 0;
var Lt = 1;
var Yt = 2;
var En = 4;
function sn(t) {
  return () => t;
}
function lo(t) {
  t();
}
function ne(t, e) {
  return (n) => t(e(n));
}
function ln(t, e) {
  return () => t(e);
}
function Hn(t, e) {
  return (n) => t(e, n);
}
function Ae(t) {
  return t !== void 0;
}
function co(...t) {
  return () => {
    t.map(lo);
  };
}
function Gt() {
}
function ye(t, e) {
  return e(t), t;
}
function uo(t, e) {
  return e(t);
}
function X(...t) {
  return t;
}
function K(t, e) {
  return t(Lt, e);
}
function M(t, e) {
  t(Ce, e);
}
function We(t) {
  t(Yt);
}
function lt(t) {
  return t(En);
}
function F(t, e) {
  return K(t, Hn(e, Ce));
}
function Rt(t, e) {
  const n = t(Lt, (o) => {
    n(), e(o);
  });
  return n;
}
function cn(t) {
  let e, n;
  return (o) => (r) => {
    e = r, n && clearTimeout(n), n = setTimeout(() => {
      o(e);
    }, t);
  };
}
function Bn(t, e) {
  return t === e;
}
function Y(t = Bn) {
  let e;
  return (n) => (o) => {
    t(e, o) || (e = o, n(o));
  };
}
function V(t) {
  return (e) => (n) => {
    t(n) && e(n);
  };
}
function H(t) {
  return (e) => ne(e, t);
}
function vt(t) {
  return (e) => () => {
    e(t);
  };
}
function x(t, ...e) {
  const n = ao(...e);
  return (o, r) => {
    switch (o) {
      case Yt:
        We(t);
        return;
      case Lt:
        return K(t, n(r));
    }
  };
}
function bt(t, e) {
  return (n) => (o) => {
    n(e = t(e, o));
  };
}
function qt(t) {
  return (e) => (n) => {
    t > 0 ? t-- : e(n);
  };
}
function zt(t) {
  let e = null, n;
  return (o) => (r) => {
    e = r, !n && (n = setTimeout(() => {
      n = void 0, o(e);
    }, t));
  };
}
function G(...t) {
  const e = new Array(t.length);
  let n = 0, o = null;
  const r = Math.pow(2, t.length) - 1;
  return t.forEach((s, i) => {
    const l = Math.pow(2, i);
    K(s, (c) => {
      const d = n;
      n = n | l, e[i] = c, d !== r && n === r && o && (o(), o = null);
    });
  }), (s) => (i) => {
    const l = () => {
      s([i].concat(e));
    };
    n === r ? l() : o = l;
  };
}
function ao(...t) {
  return (e) => t.reduceRight(uo, e);
}
function fo(t) {
  let e, n;
  const o = () => e == null ? void 0 : e();
  return function(r, s) {
    switch (r) {
      case Lt:
        return s ? n === s ? void 0 : (o(), n = s, e = K(t, s), e) : (o(), Gt);
      case Yt:
        o(), n = null;
        return;
    }
  };
}
function w(t) {
  let e = t;
  const n = $();
  return (o, r) => {
    switch (o) {
      case Ce:
        e = r;
        break;
      case Lt: {
        r(e);
        break;
      }
      case En:
        return e;
    }
    return n(o, r);
  };
}
function ct(t, e) {
  return ye(w(e), (n) => F(t, n));
}
function $() {
  const t = [];
  return (e, n) => {
    switch (e) {
      case Ce:
        t.slice().forEach((o) => {
          o(n);
        });
        return;
      case Yt:
        t.splice(0, t.length);
        return;
      case Lt:
        return t.push(n), () => {
          const o = t.indexOf(n);
          o > -1 && t.splice(o, 1);
        };
    }
  };
}
function pt(t) {
  return ye($(), (e) => F(t, e));
}
function U(t, e = [], { singleton: n } = { singleton: true }) {
  return {
    constructor: t,
    dependencies: e,
    id: mo(),
    singleton: n
  };
}
var mo = () => Symbol();
function po(t) {
  const e = /* @__PURE__ */ new Map(), n = ({ constructor: o, dependencies: r, id: s, singleton: i }) => {
    if (i && e.has(s))
      return e.get(s);
    const l = o(r.map((c) => n(c)));
    return i && e.set(s, l), l;
  };
  return n(t);
}
function rt(...t) {
  const e = $(), n = new Array(t.length);
  let o = 0;
  const r = Math.pow(2, t.length) - 1;
  return t.forEach((s, i) => {
    const l = Math.pow(2, i);
    K(s, (c) => {
      n[i] = c, o = o | l, o === r && M(e, n);
    });
  }), function(s, i) {
    switch (s) {
      case Yt: {
        We(e);
        return;
      }
      case Lt:
        return o === r && i(n), K(e, i);
    }
  };
}
function A(t, e = Bn) {
  return x(t, Y(e));
}
function un(...t) {
  return function(e, n) {
    switch (e) {
      case Yt:
        return;
      case Lt:
        return co(...t.map((o) => K(o, n)));
    }
  };
}
var ht = ((t) => (t[t.DEBUG = 0] = "DEBUG", t[t.INFO = 1] = "INFO", t[t.WARN = 2] = "WARN", t[t.ERROR = 3] = "ERROR", t))(ht || {});
var ho = {
  0: "debug",
  3: "error",
  1: "log",
  2: "warn"
};
var go = () => typeof globalThis > "u" ? window : globalThis;
var Pt = U(
  () => {
    const t = w(
      3
      /* ERROR */
    );
    return {
      log: w((n, o, r = 1) => {
        var i;
        const s = (i = go().VIRTUOSO_LOG_LEVEL) != null ? i : lt(t);
        r >= s && console[ho[r]](
          "%creact-virtuoso: %c%s %o",
          "color: #0253b3; font-weight: bold",
          "color: initial",
          n,
          o
        );
      }),
      logLevel: t
    };
  },
  [],
  { singleton: true }
);
function Et(t, e, n) {
  return Me(t, e, n).callbackRef;
}
function Me(t, e, n) {
  const o = import_react.default.useRef(null);
  let r = (s) => {
  };
  if (typeof ResizeObserver < "u") {
    const s = import_react.default.useMemo(() => new ResizeObserver((i) => {
      const l = () => {
        const c = i[0].target;
        c.offsetParent !== null && t(c);
      };
      n ? l() : requestAnimationFrame(l);
    }), [t]);
    r = (i) => {
      i && e ? (s.observe(i), o.current = i) : (o.current && s.unobserve(o.current), o.current = null);
    };
  }
  return { callbackRef: r, ref: o };
}
function kn(t, e, n, o, r, s, i, l, c) {
  const d = import_react.default.useCallback(
    (f) => {
      const S = Io(f.children, e, l ? "offsetWidth" : "offsetHeight", r);
      let p = f.parentElement;
      for (; !p.dataset.virtuosoScroller; )
        p = p.parentElement;
      const m = p.lastElementChild.dataset.viewportType === "window", C = i ? l ? i.scrollLeft : i.scrollTop : m ? l ? window.pageXOffset || document.documentElement.scrollLeft : window.pageYOffset || document.documentElement.scrollTop : l ? p.scrollLeft : p.scrollTop, I = i ? l ? i.scrollWidth : i.scrollHeight : m ? l ? document.documentElement.scrollWidth : document.documentElement.scrollHeight : l ? p.scrollWidth : p.scrollHeight, y = i ? l ? i.offsetWidth : i.offsetHeight : m ? l ? window.innerWidth : window.innerHeight : l ? p.offsetWidth : p.offsetHeight;
      o({
        scrollHeight: I,
        scrollTop: Math.max(C, 0),
        viewportHeight: y
      }), s == null || s(
        l ? an("column-gap", getComputedStyle(f).columnGap, r) : an("row-gap", getComputedStyle(f).rowGap, r)
      ), S !== null && t(S);
    },
    [t, e, r, s, i, o]
  );
  return Me(d, n, c);
}
function Io(t, e, n, o) {
  const r = t.length;
  if (r === 0)
    return null;
  const s = [];
  for (let i = 0; i < r; i++) {
    const l = t.item(i);
    if (l.dataset.index === void 0)
      continue;
    const c = parseInt(l.dataset.index), d = parseFloat(l.dataset.knownSize), f = e(l, n);
    if (f === 0 && o("Zero-sized element, this should not happen", { child: l }, ht.ERROR), f === d)
      continue;
    const S = s[s.length - 1];
    s.length === 0 || S.size !== f || S.endIndex !== c - 1 ? s.push({ endIndex: c, size: f, startIndex: c }) : s[s.length - 1].endIndex++;
  }
  return s;
}
function an(t, e, n) {
  return e !== "normal" && !(e != null && e.endsWith("px")) && n(`${t} was not resolved to pixel value correctly`, e, ht.WARN), e === "normal" ? 0 : parseInt(e != null ? e : "0", 10);
}
function _e(t, e, n) {
  const o = import_react.default.useRef(null), r = import_react.default.useCallback(
    (c) => {
      if (!(c != null && c.offsetParent))
        return;
      const d = c.getBoundingClientRect(), f = d.width;
      let S, p;
      if (e) {
        const m = e.getBoundingClientRect(), C = d.top - m.top;
        p = m.height - Math.max(0, C), S = C + e.scrollTop;
      } else
        p = window.innerHeight - Math.max(0, d.top), S = d.top + window.pageYOffset;
      o.current = {
        offsetTop: S,
        visibleHeight: p,
        visibleWidth: f
      }, t(o.current);
    },
    [t, e]
  ), { callbackRef: s, ref: i } = Me(r, true, n), l = import_react.default.useCallback(() => {
    r(i.current);
  }, [r, i]);
  return import_react.default.useEffect(() => {
    if (e) {
      e.addEventListener("scroll", l);
      const c = new ResizeObserver(() => {
        requestAnimationFrame(l);
      });
      return c.observe(e), () => {
        e.removeEventListener("scroll", l), c.unobserve(e);
      };
    } else
      return window.addEventListener("scroll", l), window.addEventListener("resize", l), () => {
        window.removeEventListener("scroll", l), window.removeEventListener("resize", l);
      };
  }, [l, e]), s;
}
var at = U(
  () => {
    const t = $(), e = $(), n = w(0), o = $(), r = w(0), s = $(), i = $(), l = w(0), c = w(0), d = w(0), f = w(0), S = $(), p = $(), m = w(false), C = w(false), I = w(false);
    return F(
      x(
        t,
        H(({ scrollTop: y }) => y)
      ),
      e
    ), F(
      x(
        t,
        H(({ scrollHeight: y }) => y)
      ),
      i
    ), F(e, r), {
      deviation: n,
      fixedFooterHeight: d,
      fixedHeaderHeight: c,
      footerHeight: f,
      headerHeight: l,
      horizontalDirection: C,
      scrollBy: p,
      // input
      scrollContainerState: t,
      scrollHeight: i,
      scrollingInProgress: m,
      // signals
      scrollTo: S,
      scrollTop: e,
      skipAnimationFrameInResizeObserver: I,
      smoothScrollTargetReached: o,
      // state
      statefulScrollTop: r,
      viewportHeight: s
    };
  },
  [],
  { singleton: true }
);
var oe = { lvl: 0 };
function On(t, e) {
  const n = t.length;
  if (n === 0)
    return [];
  let { index: o, value: r } = e(t[0]);
  const s = [];
  for (let i = 1; i < n; i++) {
    const { index: l, value: c } = e(t[i]);
    s.push({ end: l - 1, start: o, value: r }), o = l, r = c;
  }
  return s.push({ end: 1 / 0, start: o, value: r }), s;
}
function j(t) {
  return t === oe;
}
function re(t, e) {
  if (!j(t))
    return e === t.k ? t.v : e < t.k ? re(t.l, e) : re(t.r, e);
}
function wt(t, e, n = "k") {
  if (j(t))
    return [-1 / 0, void 0];
  if (Number(t[n]) === e)
    return [t.k, t.v];
  if (Number(t[n]) < e) {
    const o = wt(t.r, e, n);
    return o[0] === -1 / 0 ? [t.k, t.v] : o;
  }
  return wt(t.l, e, n);
}
function mt(t, e, n) {
  return j(t) ? Ln(e, n, 1) : e === t.k ? ot(t, { k: e, v: n }) : e < t.k ? dn(ot(t, { l: mt(t.l, e, n) })) : dn(ot(t, { r: mt(t.r, e, n) }));
}
function Kt() {
  return oe;
}
function ve(t, e, n) {
  if (j(t))
    return [];
  const o = wt(t, e)[0];
  return So(ze(t, o, n));
}
function Fe(t, e) {
  if (j(t)) return oe;
  const { k: n, l: o, r } = t;
  if (e === n) {
    if (j(o))
      return r;
    if (j(r))
      return o;
    {
      const [s, i] = zn(o);
      return ge(ot(t, { k: s, l: Fn(o), v: i }));
    }
  } else return e < n ? ge(ot(t, { l: Fe(o, e) })) : ge(ot(t, { r: Fe(r, e) }));
}
function _t(t) {
  return j(t) ? [] : [..._t(t.l), { k: t.k, v: t.v }, ..._t(t.r)];
}
function ze(t, e, n) {
  if (j(t))
    return [];
  const { k: o, l: r, r: s, v: i } = t;
  let l = [];
  return o > e && (l = l.concat(ze(r, e, n))), o >= e && o <= n && l.push({ k: o, v: i }), o <= n && (l = l.concat(ze(s, e, n))), l;
}
function ge(t) {
  const { l: e, lvl: n, r: o } = t;
  if (o.lvl >= n - 1 && e.lvl >= n - 1)
    return t;
  if (n > o.lvl + 1) {
    if (He(e))
      return Pn(ot(t, { lvl: n - 1 }));
    if (!j(e) && !j(e.r))
      return ot(e.r, {
        l: ot(e, { r: e.r.l }),
        lvl: n,
        r: ot(t, {
          l: e.r.r,
          lvl: n - 1
        })
      });
    throw new Error("Unexpected empty nodes");
  } else {
    if (He(t))
      return Le(ot(t, { lvl: n - 1 }));
    if (!j(o) && !j(o.l)) {
      const r = o.l, s = He(r) ? o.lvl - 1 : o.lvl;
      return ot(r, {
        l: ot(t, {
          lvl: n - 1,
          r: r.l
        }),
        lvl: r.lvl + 1,
        r: Le(ot(o, { l: r.r, lvl: s }))
      });
    } else
      throw new Error("Unexpected empty nodes");
  }
}
function ot(t, e) {
  return Ln(
    e.k !== void 0 ? e.k : t.k,
    e.v !== void 0 ? e.v : t.v,
    e.lvl !== void 0 ? e.lvl : t.lvl,
    e.l !== void 0 ? e.l : t.l,
    e.r !== void 0 ? e.r : t.r
  );
}
function Fn(t) {
  return j(t.r) ? t.l : ge(ot(t, { r: Fn(t.r) }));
}
function He(t) {
  return j(t) || t.lvl > t.r.lvl;
}
function zn(t) {
  return j(t.r) ? [t.k, t.v] : zn(t.r);
}
function Ln(t, e, n, o = oe, r = oe) {
  return { k: t, l: o, lvl: n, r, v: e };
}
function dn(t) {
  return Le(Pn(t));
}
function Pn(t) {
  const { l: e } = t;
  return !j(e) && e.lvl === t.lvl ? ot(e, { r: ot(t, { l: e.r }) }) : t;
}
function Le(t) {
  const { lvl: e, r: n } = t;
  return !j(n) && !j(n.r) && n.lvl === e && n.r.lvl === e ? ot(n, { l: ot(t, { r: n.l }), lvl: e + 1 }) : t;
}
function So(t) {
  return On(t, ({ k: e, v: n }) => ({ index: e, value: n }));
}
function Vn(t, e) {
  return !!(t && t.startIndex === e.startIndex && t.endIndex === e.endIndex);
}
function se(t, e) {
  return !!(t && t[0] === e[0] && t[1] === e[1]);
}
var Ge = U(
  () => ({ recalcInProgress: w(false) }),
  [],
  { singleton: true }
);
function An(t, e, n) {
  return t[Se(t, e, n)];
}
function Se(t, e, n, o = 0) {
  let r = t.length - 1;
  for (; o <= r; ) {
    const s = Math.floor((o + r) / 2), i = t[s], l = n(i, e);
    if (l === 0)
      return s;
    if (l === -1) {
      if (r - o < 2)
        return s - 1;
      r = s - 1;
    } else {
      if (r === o)
        return s;
      o = s + 1;
    }
  }
  throw new Error(`Failed binary finding record in array - ${t.join(",")}, searched for ${e}`);
}
function xo(t, e, n, o) {
  const r = Se(t, e, o), s = Se(t, n, o, r);
  return t.slice(r, s + 1);
}
function Ct(t, e) {
  return Math.round(t.getBoundingClientRect()[e]);
}
function be(t) {
  return !j(t.groupOffsetTree);
}
function Ne({ index: t }, e) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function To() {
  return {
    groupIndices: [],
    groupOffsetTree: Kt(),
    lastIndex: 0,
    lastOffset: 0,
    lastSize: 0,
    offsetTree: [],
    sizeTree: Kt()
  };
}
function wo(t, e) {
  let n = j(t) ? 0 : 1 / 0;
  for (const o of e) {
    const { endIndex: r, size: s, startIndex: i } = o;
    if (n = Math.min(n, i), j(t)) {
      t = mt(t, 0, s);
      continue;
    }
    const l = ve(t, i - 1, r + 1);
    if (l.some(Ho(o)))
      continue;
    let c = false, d = false;
    for (const { end: f, start: S, value: p } of l)
      c ? (r >= S || s === p) && (t = Fe(t, S)) : (d = p !== s, c = true), f > r && r >= S && p !== s && (t = mt(t, r + 1, p));
    d && (t = mt(t, i, s));
  }
  return [t, n];
}
function Co(t) {
  return typeof t.groupIndex < "u";
}
function yo({ offset: t }, e) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function ie(t, e, n) {
  if (e.length === 0)
    return 0;
  const { index: o, offset: r, size: s } = An(e, t, Ne), i = t - o, l = s * i + (i - 1) * n + r;
  return l > 0 ? l + n : l;
}
function Wn(t, e) {
  if (!be(e))
    return t;
  let n = 0;
  for (; e.groupIndices[n] <= t + n; )
    n++;
  return t + n;
}
function Mn(t, e, n) {
  if (Co(t))
    return e.groupIndices[t.groupIndex] + 1;
  {
    const o = t.index === "LAST" ? n : t.index;
    let r = Wn(o, e);
    return r = Math.max(0, r, Math.min(n, r)), r;
  }
}
function vo(t, e, n, o = 0) {
  return o > 0 && (e = Math.max(e, An(t, o, Ne).offset)), On(xo(t, e, n, yo), Eo);
}
function bo(t, [e, n, o, r]) {
  e.length > 0 && o("received item sizes", e, ht.DEBUG);
  const s = t.sizeTree;
  let i = s, l = 0;
  if (n.length > 0 && j(s) && e.length === 2) {
    const p = e[0].size, m = e[1].size;
    i = n.reduce((C, I) => mt(mt(C, I, p), I + 1, m), i);
  } else
    [i, l] = wo(i, e);
  if (i === s)
    return t;
  const { lastIndex: c, lastOffset: d, lastSize: f, offsetTree: S } = Pe(t.offsetTree, l, i, r);
  return {
    groupIndices: n,
    groupOffsetTree: n.reduce((p, m) => mt(p, m, ie(m, S, r)), Kt()),
    lastIndex: c,
    lastOffset: d,
    lastSize: f,
    offsetTree: S,
    sizeTree: i
  };
}
function Ro(t) {
  return _t(t).map(({ k: e, v: n }, o, r) => {
    const s = r[o + 1];
    return { endIndex: s ? s.k - 1 : 1 / 0, size: n, startIndex: e };
  });
}
function fn(t, e) {
  let n = 0, o = 0;
  for (; n < t; )
    n += e[o + 1] - e[o] - 1, o++;
  return o - (n === t ? 0 : 1);
}
function Pe(t, e, n, o) {
  let r = t, s = 0, i = 0, l = 0, c = 0;
  if (e !== 0) {
    c = Se(r, e - 1, Ne), l = r[c].offset;
    const f = wt(n, e - 1);
    s = f[0], i = f[1], r.length && r[c].size === wt(n, e)[1] && (c -= 1), r = r.slice(0, c + 1);
  } else
    r = [];
  for (const { start: d, value: f } of ve(n, e, 1 / 0)) {
    const S = d - s, p = S * i + l + S * o;
    r.push({
      index: d,
      offset: p,
      size: f
    }), s = d, l = p, i = f;
  }
  return {
    lastIndex: s,
    lastOffset: l,
    lastSize: i,
    offsetTree: r
  };
}
function Eo(t) {
  return { index: t.index, value: t };
}
function Ho(t) {
  const { endIndex: e, size: n, startIndex: o } = t;
  return (r) => r.start === o && (r.end === e || r.end === 1 / 0) && r.value === n;
}
var Bo = {
  offsetHeight: "height",
  offsetWidth: "width"
};
var Ht = U(
  ([{ log: t }, { recalcInProgress: e }]) => {
    const n = $(), o = $(), r = ct(o, 0), s = $(), i = $(), l = w(0), c = w([]), d = w(void 0), f = w(void 0), S = w((h, a) => Ct(h, Bo[a])), p = w(void 0), m = w(0), C = To(), I = ct(
      x(n, G(c, t, m), bt(bo, C), Y()),
      C
    ), y = ct(
      x(
        c,
        Y(),
        bt((h, a) => ({ current: a, prev: h.current }), {
          current: [],
          prev: []
        }),
        H(({ prev: h }) => h)
      ),
      []
    );
    F(
      x(
        c,
        V((h) => h.length > 0),
        G(I, m),
        H(([h, a, R]) => {
          const k = h.reduce((O, z, P) => mt(O, z, ie(z, a.offsetTree, R) || P), Kt());
          return {
            ...a,
            groupIndices: h,
            groupOffsetTree: k
          };
        })
      ),
      I
    ), F(
      x(
        o,
        G(I),
        V(([h, { lastIndex: a }]) => h < a),
        H(([h, { lastIndex: a, lastSize: R }]) => [
          {
            endIndex: a,
            size: R,
            startIndex: h
          }
        ])
      ),
      n
    ), F(d, f);
    const g = ct(
      x(
        d,
        H((h) => h === void 0)
      ),
      true
    );
    F(
      x(
        f,
        V((h) => h !== void 0 && j(lt(I).sizeTree)),
        H((h) => [{ endIndex: 0, size: h, startIndex: 0 }])
      ),
      n
    );
    const u = pt(
      x(
        n,
        G(I),
        bt(
          ({ sizes: h }, [a, R]) => ({
            changed: R !== h,
            sizes: R
          }),
          { changed: false, sizes: C }
        ),
        H((h) => h.changed)
      )
    );
    K(
      x(
        l,
        bt(
          (h, a) => ({ diff: h.prev - a, prev: a }),
          { diff: 0, prev: 0 }
        ),
        H((h) => h.diff)
      ),
      (h) => {
        const { groupIndices: a } = lt(I);
        if (h > 0)
          M(e, true), M(s, h + fn(h, a));
        else if (h < 0) {
          const R = lt(y);
          R.length > 0 && (h -= fn(-h, R)), M(i, h);
        }
      }
    ), K(x(l, G(t)), ([h, a]) => {
      h < 0 && a(
        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
        { firstItemIndex: l },
        ht.ERROR
      );
    });
    const T = pt(s);
    F(
      x(
        s,
        G(I),
        H(([h, a]) => {
          const R = a.groupIndices.length > 0, k = [], O = a.lastSize;
          if (R) {
            const z = re(a.sizeTree, 0);
            let P = 0, D = 0;
            for (; P < h; ) {
              const B = a.groupIndices[D], q = a.groupIndices.length === D + 1 ? 1 / 0 : a.groupIndices[D + 1] - B - 1;
              k.push({
                endIndex: B,
                size: z,
                startIndex: B
              }), k.push({
                endIndex: B + 1 + q - 1,
                size: O,
                startIndex: B + 1
              }), D++, P += q + 1;
            }
            const J = _t(a.sizeTree);
            return P !== h && J.shift(), J.reduce(
              (B, { k: q, v: st }) => {
                let dt = B.ranges;
                return B.prevSize !== 0 && (dt = [
                  ...B.ranges,
                  {
                    endIndex: q + h - 1,
                    size: B.prevSize,
                    startIndex: B.prevIndex
                  }
                ]), {
                  prevIndex: q + h,
                  prevSize: st,
                  ranges: dt
                };
              },
              {
                prevIndex: h,
                prevSize: 0,
                ranges: k
              }
            ).ranges;
          }
          return _t(a.sizeTree).reduce(
            (z, { k: P, v: D }) => ({
              prevIndex: P + h,
              prevSize: D,
              ranges: [...z.ranges, { endIndex: P + h - 1, size: z.prevSize, startIndex: z.prevIndex }]
            }),
            {
              prevIndex: 0,
              prevSize: O,
              ranges: []
            }
          ).ranges;
        })
      ),
      n
    );
    const b = pt(
      x(
        i,
        G(I, m),
        H(([h, { offsetTree: a }, R]) => {
          const k = -h;
          return ie(k, a, R);
        })
      )
    );
    return F(
      x(
        i,
        G(I, m),
        H(([h, a, R]) => {
          if (a.groupIndices.length > 0) {
            if (j(a.sizeTree))
              return a;
            let O = Kt();
            const z = lt(y);
            let P = 0, D = 0, J = 0;
            for (; P < -h; ) {
              J = z[D];
              const B = z[D + 1] - J - 1;
              D++, P += B + 1;
            }
            if (O = _t(a.sizeTree).reduce((B, { k: q, v: st }) => mt(B, Math.max(0, q + h), st), O), P !== -h) {
              const B = re(a.sizeTree, J);
              O = mt(O, 0, B);
              const q = wt(a.sizeTree, -h + 1)[1];
              O = mt(O, 1, q);
            }
            return {
              ...a,
              sizeTree: O,
              ...Pe(a.offsetTree, 0, O, R)
            };
          } else {
            const O = _t(a.sizeTree).reduce((z, { k: P, v: D }) => mt(z, Math.max(0, P + h), D), Kt());
            return {
              ...a,
              sizeTree: O,
              ...Pe(a.offsetTree, 0, O, R)
            };
          }
        })
      ),
      I
    ), {
      beforeUnshiftWith: T,
      // input
      data: p,
      defaultItemSize: f,
      firstItemIndex: l,
      fixedItemSize: d,
      gap: m,
      groupIndices: c,
      itemSize: S,
      listRefresh: u,
      shiftWith: i,
      shiftWithOffset: b,
      sizeRanges: n,
      // output
      sizes: I,
      statefulTotalCount: r,
      totalCount: o,
      trackItemSizes: g,
      unshiftWith: s
    };
  },
  X(Pt, Ge),
  { singleton: true }
);
function ko(t) {
  return t.reduce(
    (e, n) => (e.groupIndices.push(e.totalCount), e.totalCount += n + 1, e),
    {
      groupIndices: [],
      totalCount: 0
    }
  );
}
var _n = U(
  ([{ groupIndices: t, sizes: e, totalCount: n }, { headerHeight: o, scrollTop: r }]) => {
    const s = $(), i = $(), l = pt(x(s, H(ko)));
    return F(
      x(
        l,
        H((c) => c.totalCount)
      ),
      n
    ), F(
      x(
        l,
        H((c) => c.groupIndices)
      ),
      t
    ), F(
      x(
        rt(r, e, o),
        V(([c, d]) => be(d)),
        H(([c, d, f]) => wt(d.groupOffsetTree, Math.max(c - f, 0), "v")[0]),
        Y(),
        H((c) => [c])
      ),
      i
    ), { groupCounts: s, topItemsIndexes: i };
  },
  X(Ht, at)
);
var Vt = U(
  ([{ log: t }]) => {
    const e = w(false), n = pt(
      x(
        e,
        V((o) => o),
        Y()
      )
    );
    return K(e, (o) => {
      o && lt(t)("props updated", {}, ht.DEBUG);
    }), { didMount: n, propsReady: e };
  },
  X(Pt),
  { singleton: true }
);
var Oo = typeof document < "u" && "scrollBehavior" in document.documentElement.style;
function Gn(t) {
  const e = typeof t == "number" ? { index: t } : t;
  return e.align || (e.align = "start"), (!e.behavior || !Oo) && (e.behavior = "auto"), e.offset || (e.offset = 0), e;
}
var ce = U(
  ([
    { gap: t, listRefresh: e, sizes: n, totalCount: o },
    {
      fixedFooterHeight: r,
      fixedHeaderHeight: s,
      footerHeight: i,
      headerHeight: l,
      scrollingInProgress: c,
      scrollTo: d,
      smoothScrollTargetReached: f,
      viewportHeight: S
    },
    { log: p }
  ]) => {
    const m = $(), C = $(), I = w(0);
    let y = null, g = null, u = null;
    function T() {
      y && (y(), y = null), u && (u(), u = null), g && (clearTimeout(g), g = null), M(c, false);
    }
    return F(
      x(
        m,
        G(n, S, o, I, l, i, p),
        G(t, s, r),
        H(
          ([
            [b, h, a, R, k, O, z, P],
            D,
            J,
            nt
          ]) => {
            const B = Gn(b), { align: q, behavior: st, offset: dt } = B, St = R - 1, ft = Mn(B, h, St);
            let ut = ie(ft, h.offsetTree, D) + O;
            q === "end" ? (ut += J + wt(h.sizeTree, ft)[1] - a + nt, ft === St && (ut += z)) : q === "center" ? ut += (J + wt(h.sizeTree, ft)[1] - a + nt) / 2 : ut -= k, dt && (ut += dt);
            const At = (xt) => {
              T(), xt ? (P("retrying to scroll to", { location: b }, ht.DEBUG), M(m, b)) : (M(C, true), P("list did not change, scroll successful", {}, ht.DEBUG));
            };
            if (T(), st === "smooth") {
              let xt = false;
              u = K(e, (Xt) => {
                xt = xt || Xt;
              }), y = Rt(f, () => {
                At(xt);
              });
            } else
              y = Rt(x(e, Fo(150)), At);
            return g = setTimeout(() => {
              T();
            }, 1200), M(c, true), P("scrolling from index to", { behavior: st, index: ft, top: ut }, ht.DEBUG), { behavior: st, top: ut };
          }
        )
      ),
      d
    ), {
      scrollTargetReached: C,
      scrollToIndex: m,
      topListHeight: I
    };
  },
  X(Ht, at, Pt),
  { singleton: true }
);
function Fo(t) {
  return (e) => {
    const n = setTimeout(() => {
      e(false);
    }, t);
    return (o) => {
      o && (e(true), clearTimeout(n));
    };
  };
}
function De(t, e) {
  t == 0 ? e() : requestAnimationFrame(() => {
    De(t - 1, e);
  });
}
function $e(t, e) {
  const n = e - 1;
  return typeof t == "number" ? t : t.index === "LAST" ? n : t.index;
}
var ue = U(
  ([{ defaultItemSize: t, listRefresh: e, sizes: n }, { scrollTop: o }, { scrollTargetReached: r, scrollToIndex: s }, { didMount: i }]) => {
    const l = w(true), c = w(0), d = w(true);
    return F(
      x(
        i,
        G(c),
        V(([f, S]) => !!S),
        vt(false)
      ),
      l
    ), F(
      x(
        i,
        G(c),
        V(([f, S]) => !!S),
        vt(false)
      ),
      d
    ), K(
      x(
        rt(e, i),
        G(l, n, t, d),
        V(([[, f], S, { sizeTree: p }, m, C]) => f && (!j(p) || Ae(m)) && !S && !C),
        G(c)
      ),
      ([, f]) => {
        Rt(r, () => {
          M(d, true);
        }), De(4, () => {
          Rt(o, () => {
            M(l, true);
          }), M(s, f);
        });
      }
    ), {
      initialItemFinalLocationReached: d,
      initialTopMostItemIndex: c,
      scrolledToInitialItem: l
    };
  },
  X(Ht, at, ce, Vt),
  { singleton: true }
);
function Nn(t, e) {
  return Math.abs(t - e) < 1.01;
}
var le = "up";
var te = "down";
var zo = "none";
var Lo = {
  atBottom: false,
  notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
  state: {
    offsetBottom: 0,
    scrollHeight: 0,
    scrollTop: 0,
    viewportHeight: 0
  }
};
var Po = 0;
var ae = U(([{ footerHeight: t, headerHeight: e, scrollBy: n, scrollContainerState: o, scrollTop: r, viewportHeight: s }]) => {
  const i = w(false), l = w(true), c = $(), d = $(), f = w(4), S = w(Po), p = ct(
    x(
      un(x(A(r), qt(1), vt(true)), x(A(r), qt(1), vt(false), cn(100))),
      Y()
    ),
    false
  ), m = ct(
    x(un(x(n, vt(true)), x(n, vt(false), cn(200))), Y()),
    false
  );
  F(
    x(
      rt(A(r), A(S)),
      H(([u, T]) => u <= T),
      Y()
    ),
    l
  ), F(x(l, zt(50)), d);
  const C = pt(
    x(
      rt(o, A(s), A(e), A(t), A(f)),
      bt((u, [{ scrollHeight: T, scrollTop: b }, h, a, R, k]) => {
        const O = b + h - T > -k, z = {
          scrollHeight: T,
          scrollTop: b,
          viewportHeight: h
        };
        if (O) {
          let D, J;
          return b > u.state.scrollTop ? (D = "SCROLLED_DOWN", J = u.state.scrollTop - b) : (D = "SIZE_DECREASED", J = u.state.scrollTop - b || u.scrollTopDelta), {
            atBottom: true,
            atBottomBecause: D,
            scrollTopDelta: J,
            state: z
          };
        }
        let P;
        return z.scrollHeight > u.state.scrollHeight ? P = "SIZE_INCREASED" : h < u.state.viewportHeight ? P = "VIEWPORT_HEIGHT_DECREASING" : b < u.state.scrollTop ? P = "SCROLLING_UPWARDS" : P = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
          atBottom: false,
          notAtBottomBecause: P,
          state: z
        };
      }, Lo),
      Y((u, T) => u && u.atBottom === T.atBottom)
    )
  ), I = ct(
    x(
      o,
      bt(
        (u, { scrollHeight: T, scrollTop: b, viewportHeight: h }) => {
          if (Nn(u.scrollHeight, T))
            return {
              changed: false,
              jump: 0,
              scrollHeight: T,
              scrollTop: b
            };
          {
            const a = T - (b + h) < 1;
            return u.scrollTop !== b && a ? {
              changed: true,
              jump: u.scrollTop - b,
              scrollHeight: T,
              scrollTop: b
            } : {
              changed: true,
              jump: 0,
              scrollHeight: T,
              scrollTop: b
            };
          }
        },
        { changed: false, jump: 0, scrollHeight: 0, scrollTop: 0 }
      ),
      V((u) => u.changed),
      H((u) => u.jump)
    ),
    0
  );
  F(
    x(
      C,
      H((u) => u.atBottom)
    ),
    i
  ), F(x(i, zt(50)), c);
  const y = w(te);
  F(
    x(
      o,
      H(({ scrollTop: u }) => u),
      Y(),
      bt(
        (u, T) => lt(m) ? { direction: u.direction, prevScrollTop: T } : { direction: T < u.prevScrollTop ? le : te, prevScrollTop: T },
        { direction: te, prevScrollTop: 0 }
      ),
      H((u) => u.direction)
    ),
    y
  ), F(x(o, zt(50), vt(zo)), y);
  const g = w(0);
  return F(
    x(
      p,
      V((u) => !u),
      vt(0)
    ),
    g
  ), F(
    x(
      r,
      zt(100),
      G(p),
      V(([u, T]) => !!T),
      bt(([u, T], [b]) => [T, b], [0, 0]),
      H(([u, T]) => T - u)
    ),
    g
  ), {
    atBottomState: C,
    atBottomStateChange: c,
    atBottomThreshold: f,
    atTopStateChange: d,
    atTopThreshold: S,
    isAtBottom: i,
    isAtTop: l,
    isScrolling: p,
    lastJumpDueToItemResize: I,
    scrollDirection: y,
    scrollVelocity: g
  };
}, X(at));
var xe = "top";
var Te = "bottom";
var mn = "none";
function pn(t, e, n) {
  return typeof t == "number" ? n === le && e === xe || n === te && e === Te ? t : 0 : n === le ? e === xe ? t.main : t.reverse : e === Te ? t.main : t.reverse;
}
function hn(t, e) {
  var n;
  return typeof t == "number" ? t : (n = t[e]) != null ? n : 0;
}
var Ue = U(
  ([{ deviation: t, fixedHeaderHeight: e, headerHeight: n, scrollTop: o, viewportHeight: r }]) => {
    const s = $(), i = w(0), l = w(0), c = w(0), d = ct(
      x(
        rt(
          A(o),
          A(r),
          A(n),
          A(s, se),
          A(c),
          A(i),
          A(e),
          A(t),
          A(l)
        ),
        H(
          ([
            f,
            S,
            p,
            [m, C],
            I,
            y,
            g,
            u,
            T
          ]) => {
            const b = f - u, h = y + g, a = Math.max(p - b, 0);
            let R = mn;
            const k = hn(T, xe), O = hn(T, Te);
            return m -= u, m += p + g, C += p + g, C -= u, m > f + h - k && (R = le), C < f - a + S + O && (R = te), R !== mn ? [
              Math.max(b - p - pn(I, xe, R) - k, 0),
              b - a - g + S + pn(I, Te, R) + O
            ] : null;
          }
        ),
        V((f) => f != null),
        Y(se)
      ),
      [0, 0]
    );
    return {
      increaseViewportBy: l,
      // input
      listBoundary: s,
      overscan: c,
      topListHeight: i,
      // output
      visibleRange: d
    };
  },
  X(at),
  { singleton: true }
);
function Vo(t, e, n) {
  if (be(e)) {
    const o = Wn(t, e);
    return [
      { index: wt(e.groupOffsetTree, o)[0], offset: 0, size: 0 },
      { data: n == null ? void 0 : n[0], index: o, offset: 0, size: 0 }
    ];
  }
  return [{ data: n == null ? void 0 : n[0], index: t, offset: 0, size: 0 }];
}
var Be = {
  bottom: 0,
  firstItemIndex: 0,
  items: [],
  offsetBottom: 0,
  offsetTop: 0,
  top: 0,
  topItems: [],
  topListHeight: 0,
  totalCount: 0
};
function Ie(t, e, n, o, r, s) {
  const { lastIndex: i, lastOffset: l, lastSize: c } = r;
  let d = 0, f = 0;
  if (t.length > 0) {
    d = t[0].offset;
    const I = t[t.length - 1];
    f = I.offset + I.size;
  }
  const S = n - i, p = l + S * c + (S - 1) * o, m = d, C = p - f;
  return {
    bottom: f,
    firstItemIndex: s,
    items: gn(t, r, s),
    offsetBottom: C,
    offsetTop: d,
    top: m,
    topItems: gn(e, r, s),
    topListHeight: e.reduce((I, y) => y.size + I, 0),
    totalCount: n
  };
}
function Dn(t, e, n, o, r, s) {
  let i = 0;
  if (n.groupIndices.length > 0)
    for (const f of n.groupIndices) {
      if (f - i >= t)
        break;
      i++;
    }
  const l = t + i, c = $e(e, l), d = Array.from({ length: l }).map((f, S) => ({
    data: s[S + c],
    index: S + c,
    offset: 0,
    size: 0
  }));
  return Ie(d, [], l, r, n, o);
}
function gn(t, e, n) {
  if (t.length === 0)
    return [];
  if (!be(e))
    return t.map((d) => ({ ...d, index: d.index + n, originalIndex: d.index }));
  const o = t[0].index, r = t[t.length - 1].index, s = [], i = ve(e.groupOffsetTree, o, r);
  let l, c = 0;
  for (const d of t) {
    (!l || l.end < d.index) && (l = i.shift(), c = e.groupIndices.indexOf(l.start));
    let f;
    d.index === l.start ? f = {
      index: c,
      type: "group"
    } : f = {
      groupIndex: c,
      index: d.index - (c + 1) + n
    }, s.push({
      ...f,
      data: d.data,
      offset: d.offset,
      originalIndex: d.index,
      size: d.size
    });
  }
  return s;
}
var Nt = U(
  ([
    { data: t, firstItemIndex: e, gap: n, sizes: o, totalCount: r },
    s,
    { listBoundary: i, topListHeight: l, visibleRange: c },
    { initialTopMostItemIndex: d, scrolledToInitialItem: f },
    { topListHeight: S },
    p,
    { didMount: m },
    { recalcInProgress: C }
  ]) => {
    const I = w([]), y = w(0), g = $();
    F(s.topItemsIndexes, I);
    const u = ct(
      x(
        rt(
          m,
          C,
          A(c, se),
          A(r),
          A(o),
          A(d),
          f,
          A(I),
          A(e),
          A(n),
          t
        ),
        V(([a, R, , k, , , , , , , O]) => {
          const z = O && O.length !== k;
          return a && !R && !z;
        }),
        H(
          ([
            ,
            ,
            [a, R],
            k,
            O,
            z,
            P,
            D,
            J,
            nt,
            B
          ]) => {
            const q = O, { offsetTree: st, sizeTree: dt } = q, St = lt(y);
            if (k === 0)
              return { ...Be, totalCount: k };
            if (a === 0 && R === 0)
              return St === 0 ? { ...Be, totalCount: k } : Dn(St, z, O, J, nt, B || []);
            if (j(dt))
              return St > 0 ? null : Ie(
                Vo($e(z, k), q, B),
                [],
                k,
                nt,
                q,
                J
              );
            const ft = [];
            if (D.length > 0) {
              const Wt = D[0], yt = D[D.length - 1];
              let Bt = 0;
              for (const v of ve(dt, Wt, yt)) {
                const N = v.value, Q = Math.max(v.start, Wt), it = Math.min(v.end, yt);
                for (let tt = Q; tt <= it; tt++)
                  ft.push({ data: B == null ? void 0 : B[tt], index: tt, offset: Bt, size: N }), Bt += N;
              }
            }
            if (!P)
              return Ie([], ft, k, nt, q, J);
            const ut = D.length > 0 ? D[D.length - 1] + 1 : 0, At = vo(st, a, R, ut);
            if (At.length === 0)
              return null;
            const xt = k - 1, Xt = ye([], (Wt) => {
              for (const yt of At) {
                const Bt = yt.value;
                let v = Bt.offset, N = yt.start;
                const Q = Bt.size;
                if (Bt.offset < a) {
                  N += Math.floor((a - Bt.offset + nt) / (Q + nt));
                  const tt = N - yt.start;
                  v += tt * Q + tt * nt;
                }
                N < ut && (v += (ut - N) * Q, N = ut);
                const it = Math.min(yt.end, xt);
                for (let tt = N; tt <= it && !(v >= R); tt++)
                  Wt.push({ data: B == null ? void 0 : B[tt], index: tt, offset: v, size: Q }), v += Q + nt;
              }
            });
            return Ie(Xt, ft, k, nt, q, J);
          }
        ),
        //@ts-expect-error filter needs to be fixed
        V((a) => a !== null),
        Y()
      ),
      Be
    );
    F(
      x(
        t,
        V(Ae),
        H((a) => a == null ? void 0 : a.length)
      ),
      r
    ), F(
      x(
        u,
        H((a) => a.topListHeight)
      ),
      S
    ), F(S, l), F(
      x(
        u,
        H((a) => [a.top, a.bottom])
      ),
      i
    ), F(
      x(
        u,
        H((a) => a.items)
      ),
      g
    );
    const T = pt(
      x(
        u,
        V(({ items: a }) => a.length > 0),
        G(r, t),
        V(([{ items: a }, R]) => a[a.length - 1].originalIndex === R - 1),
        H(([, a, R]) => [a - 1, R]),
        Y(se),
        H(([a]) => a)
      )
    ), b = pt(
      x(
        u,
        zt(200),
        V(({ items: a, topItems: R }) => a.length > 0 && a[0].originalIndex === R.length),
        H(({ items: a }) => a[0].index),
        Y()
      )
    ), h = pt(
      x(
        u,
        V(({ items: a }) => a.length > 0),
        H(({ items: a }) => {
          let R = 0, k = a.length - 1;
          for (; a[R].type === "group" && R < k; )
            R++;
          for (; a[k].type === "group" && k > R; )
            k--;
          return {
            endIndex: a[k].index,
            startIndex: a[R].index
          };
        }),
        Y(Vn)
      )
    );
    return { endReached: T, initialItemCount: y, itemsRendered: g, listState: u, rangeChanged: h, startReached: b, topItemsIndexes: I, ...p };
  },
  X(
    Ht,
    _n,
    Ue,
    ue,
    ce,
    ae,
    Vt,
    Ge
  ),
  { singleton: true }
);
var $n = U(
  ([{ fixedFooterHeight: t, fixedHeaderHeight: e, footerHeight: n, headerHeight: o }, { listState: r }]) => {
    const s = $(), i = ct(
      x(
        rt(n, t, o, e, r),
        H(([l, c, d, f, S]) => l + c + d + f + S.offsetBottom + S.bottom)
      ),
      0
    );
    return F(A(i), s), { totalListHeight: i, totalListHeightChanged: s };
  },
  X(at, Nt),
  { singleton: true }
);
var Ao = U(
  ([{ viewportHeight: t }, { totalListHeight: e }]) => {
    const n = w(false), o = ct(
      x(
        rt(n, t, e),
        V(([r]) => r),
        H(([, r, s]) => Math.max(0, r - s)),
        zt(0),
        Y()
      ),
      0
    );
    return { alignToBottom: n, paddingTopAddition: o };
  },
  X(at, $n),
  { singleton: true }
);
function In(t) {
  return t ? t === "smooth" ? "smooth" : "auto" : false;
}
var Wo = (t, e) => typeof t == "function" ? In(t(e)) : e && In(t);
var Mo = U(
  ([
    { listRefresh: t, totalCount: e },
    { atBottomState: n, isAtBottom: o },
    { scrollToIndex: r },
    { scrolledToInitialItem: s },
    { didMount: i, propsReady: l },
    { log: c },
    { scrollingInProgress: d }
  ]) => {
    const f = w(false), S = $();
    let p = null;
    function m(I) {
      M(r, {
        align: "end",
        behavior: I,
        index: "LAST"
      });
    }
    K(
      x(
        rt(x(A(e), qt(1)), i),
        G(A(f), o, s, d),
        H(([[I, y], g, u, T, b]) => {
          let h = y && T, a = "auto";
          return h && (a = Wo(g, u || b), h = h && !!a), { followOutputBehavior: a, shouldFollow: h, totalCount: I };
        }),
        V(({ shouldFollow: I }) => I)
      ),
      ({ followOutputBehavior: I, totalCount: y }) => {
        p && (p(), p = null), p = Rt(t, () => {
          lt(c)("following output to ", { totalCount: y }, ht.DEBUG), m(I), p = null;
        });
      }
    );
    function C(I) {
      const y = Rt(n, (g) => {
        I && !g.atBottom && g.notAtBottomBecause === "SIZE_INCREASED" && !p && (lt(c)("scrolling to bottom due to increased size", {}, ht.DEBUG), m("auto"));
      });
      setTimeout(y, 100);
    }
    return K(
      x(
        rt(A(f), e, l),
        V(([I, , y]) => I && y),
        bt(
          ({ value: I }, [, y]) => ({ refreshed: I === y, value: y }),
          { refreshed: false, value: 0 }
        ),
        V(({ refreshed: I }) => I),
        G(f, e)
      ),
      ([, I]) => {
        lt(s) && C(I !== false);
      }
    ), K(S, () => {
      C(lt(f) !== false);
    }), K(rt(A(f), n), ([I, y]) => {
      I && !y.atBottom && y.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && m("auto");
    }), { autoscrollToBottom: S, followOutput: f };
  },
  X(Ht, ae, ce, ue, Vt, Pt, at)
);
var _o = U(
  ([{ data: t, firstItemIndex: e, gap: n, sizes: o }, { initialTopMostItemIndex: r }, { initialItemCount: s, listState: i }, { didMount: l }]) => (F(
    x(
      l,
      G(s),
      V(([, c]) => c !== 0),
      G(r, o, e, n, t),
      H(([[, c], d, f, S, p, m = []]) => Dn(c, d, f, S, p, m))
    ),
    i
  ), {}),
  X(Ht, ue, Nt, Vt),
  { singleton: true }
);
var Go = U(
  ([{ didMount: t }, { scrollTo: e }, { listState: n }]) => {
    const o = w(0);
    return K(
      x(
        t,
        G(o),
        V(([, r]) => r !== 0),
        H(([, r]) => ({ top: r }))
      ),
      (r) => {
        Rt(
          x(
            n,
            qt(1),
            V((s) => s.items.length > 1)
          ),
          () => {
            requestAnimationFrame(() => {
              M(e, r);
            });
          }
        );
      }
    ), {
      initialScrollTop: o
    };
  },
  X(Vt, at, Nt),
  { singleton: true }
);
var No = ({
  itemBottom: t,
  itemTop: e,
  locationParams: { align: n, behavior: o, ...r },
  viewportBottom: s,
  viewportTop: i
}) => e < i ? { ...r, align: n != null ? n : "start", behavior: o } : t > s ? { ...r, align: n != null ? n : "end", behavior: o } : null;
var Do = U(
  ([
    { gap: t, sizes: e, totalCount: n },
    { fixedFooterHeight: o, fixedHeaderHeight: r, headerHeight: s, scrollingInProgress: i, scrollTop: l, viewportHeight: c },
    { scrollToIndex: d }
  ]) => {
    const f = $();
    return F(
      x(
        f,
        G(e, c, n, s, r, o, l),
        G(t),
        H(([[S, p, m, C, I, y, g, u], T]) => {
          const { align: b, behavior: h, calculateViewLocation: a = No, done: R, ...k } = S, O = Mn(S, p, C - 1), z = ie(O, p.offsetTree, T) + I + y, P = z + wt(p.sizeTree, O)[1], D = u + y, J = u + m - g, nt = a({
            itemBottom: P,
            itemTop: z,
            locationParams: { align: b, behavior: h, ...k },
            viewportBottom: J,
            viewportTop: D
          });
          return nt ? R && Rt(
            x(
              i,
              V((B) => !B),
              // skips the initial publish of false, and the cleanup call.
              // but if scrollingInProgress is true, we skip the initial publish.
              qt(lt(i) ? 1 : 2)
            ),
            R
          ) : R && R(), nt;
        }),
        V((S) => S !== null)
      ),
      d
    ), {
      scrollIntoView: f
    };
  },
  X(Ht, at, ce, Nt, Pt),
  { singleton: true }
);
var Un = U(
  ([{ scrollVelocity: t }]) => {
    const e = w(false), n = $(), o = w(false);
    return F(
      x(
        t,
        G(o, e, n),
        V(([r, s]) => !!s),
        H(([r, s, i, l]) => {
          const { enter: c, exit: d } = s;
          if (i) {
            if (d(r, l))
              return false;
          } else if (c(r, l))
            return true;
          return i;
        }),
        Y()
      ),
      e
    ), K(
      x(rt(e, t, n), G(o)),
      ([[r, s, i], l]) => {
        r && l && l.change && l.change(s, i);
      }
    ), { isSeeking: e, scrollSeekConfiguration: o, scrollSeekRangeChanged: n, scrollVelocity: t };
  },
  X(ae),
  { singleton: true }
);
var Ke = U(([{ scrollContainerState: t, scrollTo: e }]) => {
  const n = $(), o = $(), r = $(), s = w(false), i = w(void 0);
  return F(
    x(
      rt(n, o),
      H(([{ scrollHeight: l, scrollTop: c, viewportHeight: d }, { offsetTop: f }]) => ({
        scrollHeight: l,
        scrollTop: Math.max(0, c - f),
        viewportHeight: d
      }))
    ),
    t
  ), F(
    x(
      e,
      G(o),
      H(([l, { offsetTop: c }]) => ({
        ...l,
        top: l.top + c
      }))
    ),
    r
  ), {
    customScrollParent: i,
    // config
    useWindowScroll: s,
    // input
    windowScrollContainerState: n,
    // signals
    windowScrollTo: r,
    windowViewportRect: o
  };
}, X(at));
var $o = U(
  ([
    { sizeRanges: t, sizes: e },
    { headerHeight: n, scrollTop: o },
    { initialTopMostItemIndex: r },
    { didMount: s },
    { useWindowScroll: i, windowScrollContainerState: l, windowViewportRect: c }
  ]) => {
    const d = $(), f = w(void 0), S = w(null), p = w(null);
    return F(l, S), F(c, p), K(
      x(
        d,
        G(e, o, i, S, p, n)
      ),
      ([m, C, I, y, g, u, T]) => {
        const b = Ro(C.sizeTree);
        y && g !== null && u !== null && (I = g.scrollTop - u.offsetTop), I -= T, m({ ranges: b, scrollTop: I });
      }
    ), F(x(f, V(Ae), H(Uo)), r), F(
      x(
        s,
        G(f),
        V(([, m]) => m !== void 0),
        Y(),
        H(([, m]) => m.ranges)
      ),
      t
    ), {
      getState: d,
      restoreStateFrom: f
    };
  },
  X(Ht, at, ue, Vt, Ke)
);
function Uo(t) {
  return { align: "start", index: 0, offset: t.scrollTop };
}
var Ko = U(([{ topItemsIndexes: t }]) => {
  const e = w(0);
  return F(
    x(
      e,
      V((n) => n >= 0),
      H((n) => Array.from({ length: n }).map((o, r) => r))
    ),
    t
  ), { topItemCount: e };
}, X(Nt));
function Kn(t) {
  let e = false, n;
  return () => (e || (e = true, n = t()), n);
}
var jo = Kn(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent));
var qo = U(
  ([
    { deviation: t, scrollBy: e, scrollingInProgress: n, scrollTop: o },
    { isAtBottom: r, isScrolling: s, lastJumpDueToItemResize: i, scrollDirection: l },
    { listState: c },
    { beforeUnshiftWith: d, gap: f, shiftWithOffset: S, sizes: p },
    { log: m },
    { recalcInProgress: C }
  ]) => {
    const I = pt(
      x(
        c,
        G(i),
        bt(
          ([, g, u, T], [{ bottom: b, items: h, offsetBottom: a, totalCount: R }, k]) => {
            const O = b + a;
            let z = 0;
            return u === R && g.length > 0 && h.length > 0 && (h[0].originalIndex === 0 && g[0].originalIndex === 0 || (z = O - T, z !== 0 && (z += k))), [z, h, R, O];
          },
          [0, [], 0, 0]
        ),
        V(([g]) => g !== 0),
        G(o, l, n, r, m, C),
        V(([, g, u, T, , , b]) => !b && !T && g !== 0 && u === le),
        H(([[g], , , , , u]) => (u("Upward scrolling compensation", { amount: g }, ht.DEBUG), g))
      )
    );
    function y(g) {
      g > 0 ? (M(e, { behavior: "auto", top: -g }), M(t, 0)) : (M(t, 0), M(e, { behavior: "auto", top: -g }));
    }
    return K(x(I, G(t, s)), ([g, u, T]) => {
      T && jo() ? M(t, u - g) : y(-g);
    }), K(
      x(
        rt(ct(s, false), t, C),
        V(([g, u, T]) => !g && !T && u !== 0),
        H(([g, u]) => u),
        zt(1)
      ),
      y
    ), F(
      x(
        S,
        H((g) => ({ top: -g }))
      ),
      e
    ), K(
      x(
        d,
        G(p, f),
        H(([g, { groupIndices: u, lastSize: T, sizeTree: b }, h]) => {
          function a(R) {
            return R * (T + h);
          }
          if (u.length === 0)
            return a(g);
          {
            let R = 0;
            const k = re(b, 0);
            let O = 0, z = 0;
            for (; O < g; ) {
              O++, R += k;
              let P = u.length === z + 1 ? 1 / 0 : u[z + 1] - u[z] - 1;
              O + P > g && (R -= k, P = g - O + 1), O += P, R += a(P), z++;
            }
            return R;
          }
        })
      ),
      (g) => {
        M(t, g), requestAnimationFrame(() => {
          M(e, { top: g }), requestAnimationFrame(() => {
            M(t, 0), M(C, false);
          });
        });
      }
    ), { deviation: t };
  },
  X(at, ae, Nt, Ht, Pt, Ge)
);
var Yo = U(
  ([
    t,
    e,
    n,
    o,
    r,
    s,
    i,
    l,
    c,
    d
  ]) => ({
    ...t,
    ...e,
    ...n,
    ...o,
    ...r,
    ...s,
    ...i,
    ...l,
    ...c,
    ...d
  }),
  X(
    Ue,
    _o,
    Vt,
    Un,
    $n,
    Go,
    Ao,
    Ke,
    Do,
    Pt
  )
);
var jn = U(
  ([
    {
      data: t,
      defaultItemSize: e,
      firstItemIndex: n,
      fixedItemSize: o,
      gap: r,
      groupIndices: s,
      itemSize: i,
      sizeRanges: l,
      sizes: c,
      statefulTotalCount: d,
      totalCount: f,
      trackItemSizes: S
    },
    { initialItemFinalLocationReached: p, initialTopMostItemIndex: m, scrolledToInitialItem: C },
    I,
    y,
    g,
    { listState: u, topItemsIndexes: T, ...b },
    { scrollToIndex: h },
    a,
    { topItemCount: R },
    { groupCounts: k },
    O
  ]) => (F(b.rangeChanged, O.scrollSeekRangeChanged), F(
    x(
      O.windowViewportRect,
      H((z) => z.visibleHeight)
    ),
    I.viewportHeight
  ), {
    data: t,
    defaultItemHeight: e,
    firstItemIndex: n,
    fixedItemHeight: o,
    gap: r,
    groupCounts: k,
    initialItemFinalLocationReached: p,
    initialTopMostItemIndex: m,
    scrolledToInitialItem: C,
    sizeRanges: l,
    topItemCount: R,
    topItemsIndexes: T,
    // input
    totalCount: f,
    ...g,
    groupIndices: s,
    itemSize: i,
    listState: u,
    scrollToIndex: h,
    // output
    statefulTotalCount: d,
    trackItemSizes: S,
    // exported from stateFlagsSystem
    ...b,
    // the bag of IO from featureGroup1System
    ...O,
    ...I,
    sizes: c,
    ...y
  }),
  X(
    Ht,
    ue,
    at,
    $o,
    Mo,
    Nt,
    ce,
    qo,
    Ko,
    _n,
    Yo
  )
);
function Zo(t, e) {
  const n = {}, o = {};
  let r = 0;
  const s = t.length;
  for (; r < s; )
    o[t[r]] = 1, r += 1;
  for (const i in e)
    Object.hasOwn(o, i) || (n[i] = e[i]);
  return n;
}
var pe = typeof document < "u" ? import_react.default.useLayoutEffect : import_react.default.useEffect;
function je(t, e, n) {
  const o = Object.keys(e.required || {}), r = Object.keys(e.optional || {}), s = Object.keys(e.methods || {}), i = Object.keys(e.events || {}), l = import_react.default.createContext({});
  function c(g, u) {
    g.propsReady && M(g.propsReady, false);
    for (const T of o) {
      const b = g[e.required[T]];
      M(b, u[T]);
    }
    for (const T of r)
      if (T in u) {
        const b = g[e.optional[T]];
        M(b, u[T]);
      }
    g.propsReady && M(g.propsReady, true);
  }
  function d(g) {
    return s.reduce((u, T) => (u[T] = (b) => {
      const h = g[e.methods[T]];
      M(h, b);
    }, u), {});
  }
  function f(g) {
    return i.reduce((u, T) => (u[T] = fo(g[e.events[T]]), u), {});
  }
  const S = import_react.default.forwardRef((g, u) => {
    const { children: T, ...b } = g, [h] = import_react.default.useState(() => ye(po(t), (k) => {
      c(k, b);
    })), [a] = import_react.default.useState(ln(f, h));
    pe(() => {
      for (const k of i)
        k in b && K(a[k], b[k]);
      return () => {
        Object.values(a).map(We);
      };
    }, [b, a, h]), pe(() => {
      c(h, b);
    }), import_react.default.useImperativeHandle(u, sn(d(h)));
    const R = n;
    return (0, import_jsx_runtime.jsx)(l.Provider, { value: h, children: n ? (0, import_jsx_runtime.jsx)(R, { ...Zo([...o, ...r, ...i], b), children: T }) : T });
  }), p = (g) => import_react.default.useCallback(Hn(M, import_react.default.useContext(l)[g]), [g]), m = (g) => {
    const T = import_react.default.useContext(l)[g], b = import_react.default.useCallback(
      (h) => K(T, h),
      [T]
    );
    return import_react.default.useSyncExternalStore(
      b,
      () => lt(T),
      () => lt(T)
    );
  }, C = (g) => {
    const T = import_react.default.useContext(l)[g], [b, h] = import_react.default.useState(ln(lt, T));
    return pe(
      () => K(T, (a) => {
        a !== b && h(sn(a));
      }),
      [T, b]
    ), b;
  }, I = import_react.default.version.startsWith("18") ? m : C;
  return {
    Component: S,
    useEmitter: (g, u) => {
      const b = import_react.default.useContext(l)[g];
      pe(() => K(b, u), [u, b]);
    },
    useEmitterValue: I,
    usePublisher: p
  };
}
var Re = import_react.default.createContext(void 0);
var qn = import_react.default.createContext(void 0);
var Yn = typeof document < "u" ? import_react.default.useLayoutEffect : import_react.default.useEffect;
function Zn(t, e, n, o = Gt, r, s) {
  const i = import_react.default.useRef(null), l = import_react.default.useRef(null), c = import_react.default.useRef(null), d = import_react.default.useCallback(
    (p) => {
      const m = p.target, C = m === window || m === document, I = s ? C ? window.pageXOffset || document.documentElement.scrollLeft : m.scrollLeft : C ? window.pageYOffset || document.documentElement.scrollTop : m.scrollTop, y = s ? C ? document.documentElement.scrollWidth : m.scrollWidth : C ? document.documentElement.scrollHeight : m.scrollHeight, g = s ? C ? window.innerWidth : m.offsetWidth : C ? window.innerHeight : m.offsetHeight, u = () => {
        t({
          scrollHeight: y,
          scrollTop: Math.max(I, 0),
          viewportHeight: g
        });
      };
      p.suppressFlushSync ? u() : import_react_dom.default.flushSync(u), l.current !== null && (I === l.current || I <= 0 || I === y - g) && (l.current = null, e(true), c.current && (clearTimeout(c.current), c.current = null));
    },
    [t, e]
  );
  import_react.default.useEffect(() => {
    const p = r || i.current;
    return o(r || i.current), d({ suppressFlushSync: true, target: p }), p.addEventListener("scroll", d, { passive: true }), () => {
      o(null), p.removeEventListener("scroll", d);
    };
  }, [i, d, n, o, r]);
  function f(p) {
    const m = i.current;
    if (!m || (s ? "offsetWidth" in m && m.offsetWidth === 0 : "offsetHeight" in m && m.offsetHeight === 0))
      return;
    const C = p.behavior === "smooth";
    let I, y, g;
    m === window ? (y = Math.max(
      Ct(document.documentElement, s ? "width" : "height"),
      s ? document.documentElement.scrollWidth : document.documentElement.scrollHeight
    ), I = s ? window.innerWidth : window.innerHeight, g = s ? document.documentElement.scrollLeft : document.documentElement.scrollTop) : (y = m[s ? "scrollWidth" : "scrollHeight"], I = Ct(m, s ? "width" : "height"), g = m[s ? "scrollLeft" : "scrollTop"]);
    const u = y - I;
    if (p.top = Math.ceil(Math.max(Math.min(u, p.top), 0)), Nn(I, y) || p.top === g) {
      t({ scrollHeight: y, scrollTop: g, viewportHeight: I }), C && e(true);
      return;
    }
    C ? (l.current = p.top, c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      c.current = null, l.current = null, e(true);
    }, 1e3)) : l.current = null, s && (p = { behavior: p.behavior, left: p.top }), m.scrollTo(p);
  }
  function S(p) {
    s && (p = { behavior: p.behavior, left: p.top }), i.current.scrollBy(p);
  }
  return { scrollByCallback: S, scrollerRef: i, scrollToCallback: f };
}
var ke = "-webkit-sticky";
var Sn = "sticky";
var Xn = Kn(() => {
  if (typeof document > "u")
    return Sn;
  const t = document.createElement("div");
  return t.style.position = ke, t.style.position === ke ? ke : Sn;
});
function qe(t) {
  return t;
}
var Xo = U(() => {
  const t = w((c) => `Item ${c}`), e = w(null), n = w((c) => `Group ${c}`), o = w({}), r = w(qe), s = w("div"), i = w(Gt), l = (c, d = null) => ct(
    x(
      o,
      H((f) => f[c]),
      Y()
    ),
    d
  );
  return {
    components: o,
    computeItemKey: r,
    context: e,
    EmptyPlaceholder: l("EmptyPlaceholder"),
    FooterComponent: l("Footer"),
    GroupComponent: l("Group", "div"),
    groupContent: n,
    HeaderComponent: l("Header"),
    HeaderFooterTag: s,
    ItemComponent: l("Item", "div"),
    itemContent: t,
    ListComponent: l("List", "div"),
    ScrollerComponent: l("Scroller", "div"),
    scrollerRef: i,
    ScrollSeekPlaceholder: l("ScrollSeekPlaceholder"),
    TopItemListComponent: l("TopItemList")
  };
});
var Jo = U(
  ([t, e]) => ({ ...t, ...e }),
  X(jn, Xo)
);
var Qo = ({ height: t }) => (0, import_jsx_runtime.jsx)("div", { style: { height: t } });
var tr = { overflowAnchor: "none", position: Xn(), zIndex: 1 };
var Jn = { overflowAnchor: "none" };
var er = { ...Jn, display: "inline-block", height: "100%" };
var xn = import_react.default.memo(function({ showTopList: e = false }) {
  const n = W("listState"), o = gt("sizeRanges"), r = W("useWindowScroll"), s = W("customScrollParent"), i = gt("windowScrollContainerState"), l = gt("scrollContainerState"), c = s || r ? i : l, d = W("itemContent"), f = W("context"), S = W("groupContent"), p = W("trackItemSizes"), m = W("itemSize"), C = W("log"), I = gt("gap"), y = W("horizontalDirection"), { callbackRef: g } = kn(
    o,
    m,
    p,
    e ? Gt : c,
    C,
    I,
    s,
    y,
    W("skipAnimationFrameInResizeObserver")
  ), [u, T] = import_react.default.useState(0);
  Xe("deviation", (B) => {
    u !== B && T(B);
  });
  const b = W("EmptyPlaceholder"), h = W("ScrollSeekPlaceholder") || Qo, a = W("ListComponent"), R = W("ItemComponent"), k = W("GroupComponent"), O = W("computeItemKey"), z = W("isSeeking"), P = W("groupIndices").length > 0, D = W("alignToBottom"), J = W("initialItemFinalLocationReached"), nt = e ? {} : {
    boxSizing: "border-box",
    ...y ? {
      display: "inline-block",
      height: "100%",
      marginLeft: u !== 0 ? u : D ? "auto" : 0,
      paddingLeft: n.offsetTop,
      paddingRight: n.offsetBottom,
      whiteSpace: "nowrap"
    } : {
      marginTop: u !== 0 ? u : D ? "auto" : 0,
      paddingBottom: n.offsetBottom,
      paddingTop: n.offsetTop
    },
    ...J ? {} : { visibility: "hidden" }
  };
  return !e && n.totalCount === 0 && b ? (0, import_jsx_runtime.jsx)(b, { ...Z(b, f) }) : (0, import_jsx_runtime.jsx)(
    a,
    {
      ...Z(a, f),
      "data-testid": e ? "virtuoso-top-item-list" : "virtuoso-item-list",
      ref: g,
      style: nt,
      children: (e ? n.topItems : n.items).map((B) => {
        const q = B.originalIndex, st = O(q + n.firstItemIndex, B.data, f);
        return z ? (0, import_react.createElement)(
          h,
          {
            ...Z(h, f),
            height: B.size,
            index: B.index,
            key: st,
            type: B.type || "item",
            ...B.type === "group" ? {} : { groupIndex: B.groupIndex }
          }
        ) : B.type === "group" ? (0, import_react.createElement)(
          k,
          {
            ...Z(k, f),
            "data-index": q,
            "data-item-index": B.index,
            "data-known-size": B.size,
            key: st,
            style: tr
          },
          S(B.index, f)
        ) : (0, import_react.createElement)(
          R,
          {
            ...Z(R, f),
            ...Qn(R, B.data),
            "data-index": q,
            "data-item-group-index": B.groupIndex,
            "data-item-index": B.index,
            "data-known-size": B.size,
            key: st,
            style: y ? er : Jn
          },
          P ? d(B.index, B.groupIndex, B.data, f) : d(B.index, B.data, f)
        );
      })
    }
  );
});
var nr = {
  height: "100%",
  outline: "none",
  overflowY: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch"
};
var or = {
  outline: "none",
  overflowX: "auto",
  position: "relative"
};
var Zt = (t) => ({
  height: "100%",
  position: "absolute",
  top: 0,
  width: "100%",
  ...t ? { display: "flex", flexDirection: "column" } : {}
});
var rr = {
  position: Xn(),
  top: 0,
  width: "100%",
  zIndex: 1
};
function Z(t, e) {
  if (typeof t != "string")
    return { context: e };
}
function Qn(t, e) {
  return { item: typeof t == "string" ? void 0 : e };
}
var sr = import_react.default.memo(function() {
  const e = W("HeaderComponent"), n = gt("headerHeight"), o = W("HeaderFooterTag"), r = Et(
    import_react.default.useMemo(
      () => (i) => {
        n(Ct(i, "height"));
      },
      [n]
    ),
    true,
    W("skipAnimationFrameInResizeObserver")
  ), s = W("context");
  return e ? (0, import_jsx_runtime.jsx)(o, { ref: r, children: (0, import_jsx_runtime.jsx)(e, { ...Z(e, s) }) }) : null;
});
var ir = import_react.default.memo(function() {
  const e = W("FooterComponent"), n = gt("footerHeight"), o = W("HeaderFooterTag"), r = Et(
    import_react.default.useMemo(
      () => (i) => {
        n(Ct(i, "height"));
      },
      [n]
    ),
    true,
    W("skipAnimationFrameInResizeObserver")
  ), s = W("context");
  return e ? (0, import_jsx_runtime.jsx)(o, { ref: r, children: (0, import_jsx_runtime.jsx)(e, { ...Z(e, s) }) }) : null;
});
function Ye({ useEmitter: t, useEmitterValue: e, usePublisher: n }) {
  return import_react.default.memo(function({ children: s, style: i, ...l }) {
    const c = n("scrollContainerState"), d = e("ScrollerComponent"), f = n("smoothScrollTargetReached"), S = e("scrollerRef"), p = e("context"), m = e("horizontalDirection") || false, { scrollByCallback: C, scrollerRef: I, scrollToCallback: y } = Zn(
      c,
      f,
      d,
      S,
      void 0,
      m
    );
    return t("scrollTo", y), t("scrollBy", C), (0, import_jsx_runtime.jsx)(
      d,
      {
        "data-testid": "virtuoso-scroller",
        "data-virtuoso-scroller": true,
        ref: I,
        style: { ...m ? or : nr, ...i },
        tabIndex: 0,
        ...l,
        ...Z(d, p),
        children: s
      }
    );
  });
}
function Ze({ useEmitter: t, useEmitterValue: e, usePublisher: n }) {
  return import_react.default.memo(function({ children: s, style: i, ...l }) {
    const c = n("windowScrollContainerState"), d = e("ScrollerComponent"), f = n("smoothScrollTargetReached"), S = e("totalListHeight"), p = e("deviation"), m = e("customScrollParent"), C = e("context"), { scrollByCallback: I, scrollerRef: y, scrollToCallback: g } = Zn(
      c,
      f,
      d,
      Gt,
      m
    );
    return Yn(() => (y.current = m || window, () => {
      y.current = null;
    }), [y, m]), t("windowScrollTo", g), t("scrollBy", I), (0, import_jsx_runtime.jsx)(
      d,
      {
        "data-virtuoso-scroller": true,
        style: { position: "relative", ...i, ...S !== 0 ? { height: S + p } : {} },
        ...l,
        ...Z(d, C),
        children: s
      }
    );
  });
}
var lr = ({ children: t }) => {
  const e = import_react.default.useContext(Re), n = gt("viewportHeight"), o = gt("fixedItemHeight"), r = W("alignToBottom"), s = W("horizontalDirection"), i = import_react.default.useMemo(
    () => ne(n, (c) => Ct(c, s ? "width" : "height")),
    [n, s]
  ), l = Et(i, true, W("skipAnimationFrameInResizeObserver"));
  return import_react.default.useEffect(() => {
    e && (n(e.viewportHeight), o(e.itemHeight));
  }, [e, n, o]), (0, import_jsx_runtime.jsx)("div", { "data-viewport-type": "element", ref: l, style: Zt(r), children: t });
};
var cr = ({ children: t }) => {
  const e = import_react.default.useContext(Re), n = gt("windowViewportRect"), o = gt("fixedItemHeight"), r = W("customScrollParent"), s = _e(
    n,
    r,
    W("skipAnimationFrameInResizeObserver")
  ), i = W("alignToBottom");
  return import_react.default.useEffect(() => {
    e && (o(e.itemHeight), n({ offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: 100 }));
  }, [e, n, o]), (0, import_jsx_runtime.jsx)("div", { "data-viewport-type": "window", ref: s, style: Zt(i), children: t });
};
var ur = ({ children: t }) => {
  const e = W("TopItemListComponent") || "div", n = W("headerHeight"), o = { ...rr, marginTop: `${n}px` }, r = W("context");
  return (0, import_jsx_runtime.jsx)(e, { style: o, ...Z(e, r), children: t });
};
var ar = import_react.default.memo(function(e) {
  const n = W("useWindowScroll"), o = W("topItemsIndexes").length > 0, r = W("customScrollParent"), s = W("context"), i = r || n ? fr : dr, l = r || n ? cr : lr;
  return (0, import_jsx_runtime.jsxs)(i, { ...e, ...Z(i, s), children: [
    o && (0, import_jsx_runtime.jsx)(ur, { children: (0, import_jsx_runtime.jsx)(xn, { showTopList: true }) }),
    (0, import_jsx_runtime.jsxs)(l, { children: [
      (0, import_jsx_runtime.jsx)(sr, {}),
      (0, import_jsx_runtime.jsx)(xn, {}),
      (0, import_jsx_runtime.jsx)(ir, {})
    ] })
  ] });
});
var {
  Component: to,
  useEmitter: Xe,
  useEmitterValue: W,
  usePublisher: gt
} = je(
  Jo,
  {
    events: {
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      endReached: "endReached",
      groupIndices: "groupIndices",
      isScrolling: "isScrolling",
      itemsRendered: "itemsRendered",
      rangeChanged: "rangeChanged",
      startReached: "startReached",
      totalListHeightChanged: "totalListHeightChanged"
    },
    methods: {
      autoscrollToBottom: "autoscrollToBottom",
      getState: "getState",
      scrollBy: "scrollBy",
      scrollIntoView: "scrollIntoView",
      scrollTo: "scrollTo",
      scrollToIndex: "scrollToIndex"
    },
    optional: {
      alignToBottom: "alignToBottom",
      atBottomThreshold: "atBottomThreshold",
      atTopThreshold: "atTopThreshold",
      components: "components",
      computeItemKey: "computeItemKey",
      context: "context",
      customScrollParent: "customScrollParent",
      data: "data",
      defaultItemHeight: "defaultItemHeight",
      firstItemIndex: "firstItemIndex",
      fixedItemHeight: "fixedItemHeight",
      followOutput: "followOutput",
      groupContent: "groupContent",
      groupCounts: "groupCounts",
      headerFooterTag: "HeaderFooterTag",
      horizontalDirection: "horizontalDirection",
      increaseViewportBy: "increaseViewportBy",
      initialItemCount: "initialItemCount",
      initialScrollTop: "initialScrollTop",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      itemContent: "itemContent",
      itemSize: "itemSize",
      logLevel: "logLevel",
      overscan: "overscan",
      restoreStateFrom: "restoreStateFrom",
      scrollerRef: "scrollerRef",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      skipAnimationFrameInResizeObserver: "skipAnimationFrameInResizeObserver",
      topItemCount: "topItemCount",
      totalCount: "totalCount",
      useWindowScroll: "useWindowScroll"
    },
    required: {}
  },
  ar
);
var dr = Ye({ useEmitter: Xe, useEmitterValue: W, usePublisher: gt });
var fr = Ze({ useEmitter: Xe, useEmitterValue: W, usePublisher: gt });
var $r = to;
var Ur = to;
var mr = U(() => {
  const t = w((c) => (0, import_jsx_runtime.jsxs)("td", { children: [
    "Item $",
    c
  ] })), e = w(null), n = w(null), o = w(null), r = w({}), s = w(qe), i = w(Gt), l = (c, d = null) => ct(
    x(
      r,
      H((f) => f[c]),
      Y()
    ),
    d
  );
  return {
    components: r,
    computeItemKey: s,
    context: e,
    EmptyPlaceholder: l("EmptyPlaceholder"),
    FillerRow: l("FillerRow"),
    fixedFooterContent: o,
    fixedHeaderContent: n,
    itemContent: t,
    ScrollerComponent: l("Scroller", "div"),
    scrollerRef: i,
    ScrollSeekPlaceholder: l("ScrollSeekPlaceholder"),
    TableBodyComponent: l("TableBody", "tbody"),
    TableComponent: l("Table", "table"),
    TableFooterComponent: l("TableFoot", "tfoot"),
    TableHeadComponent: l("TableHead", "thead"),
    TableRowComponent: l("TableRow", "tr")
  };
});
var pr = U(
  ([t, e]) => ({ ...t, ...e }),
  X(jn, mr)
);
var hr = ({ height: t }) => (0, import_jsx_runtime.jsx)("tr", { children: (0, import_jsx_runtime.jsx)("td", { style: { height: t } }) });
var gr = ({ height: t }) => (0, import_jsx_runtime.jsx)("tr", { children: (0, import_jsx_runtime.jsx)("td", { style: { border: 0, height: t, padding: 0 } }) });
var Ir = { overflowAnchor: "none" };
var Tn = import_react.default.memo(function({ showTopList: e = false }) {
  const n = _("listState"), o = _("computeItemKey"), r = _("firstItemIndex"), s = _("isSeeking"), i = _("ScrollSeekPlaceholder") || hr, l = _("context"), c = _("TableRowComponent"), d = _("fixedHeaderHeight"), f = _("itemContent"), S = (e ? n.topItems : []).reduce((m, C, I) => (I === 0 ? m.push(C.size) : m.push(m[I - 1] + C.size), m), []), p = (e ? n.topItems : n.items).map((m) => {
    const C = m.originalIndex, I = o(C + r, m.data, l), y = e ? C === 0 ? 0 : S[C - 1] : 0;
    return s ? (0, import_react.createElement)(
      i,
      {
        ...Z(i, l),
        height: m.size,
        index: m.index,
        key: I,
        type: m.type || "item"
      }
    ) : (0, import_react.createElement)(
      c,
      {
        ...Z(c, l),
        ...Qn(c, m.data),
        "data-index": C,
        "data-item-index": m.index,
        "data-known-size": m.size,
        key: I,
        style: e ? { overflowAnchor: "none", position: "sticky", top: d + y, zIndex: 2 } : Ir
      },
      f(m.index, m.data, l)
    );
  });
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: p });
});
var Sr = import_react.default.memo(function() {
  const e = _("listState"), n = _("topItemsIndexes").length > 0, o = Tt("sizeRanges"), r = _("useWindowScroll"), s = _("customScrollParent"), i = Tt("windowScrollContainerState"), l = Tt("scrollContainerState"), c = s || r ? i : l, d = _("trackItemSizes"), f = _("itemSize"), S = _("log"), { callbackRef: p, ref: m } = kn(
    o,
    f,
    d,
    c,
    S,
    void 0,
    s,
    false,
    _("skipAnimationFrameInResizeObserver")
  ), [C, I] = import_react.default.useState(0);
  Je("deviation", (P) => {
    C !== P && (m.current.style.marginTop = `${P}px`, I(P));
  });
  const y = _("EmptyPlaceholder"), g = _("FillerRow") || gr, u = _("TableBodyComponent"), T = _("paddingTopAddition"), b = _("statefulTotalCount"), h = _("context");
  if (b === 0 && y)
    return (0, import_jsx_runtime.jsx)(y, { ...Z(y, h) });
  const a = (n ? e.topItems : []).reduce((P, D) => P + D.size, 0), R = e.offsetTop + T + C - a, k = e.offsetBottom, O = R > 0 ? (0, import_jsx_runtime.jsx)(g, { context: h, height: R }, "padding-top") : null, z = k > 0 ? (0, import_jsx_runtime.jsx)(g, { context: h, height: k }, "padding-bottom") : null;
  return (0, import_jsx_runtime.jsxs)(u, { "data-testid": "virtuoso-item-list", ref: p, ...Z(u, h), children: [
    O,
    n && (0, import_jsx_runtime.jsx)(Tn, { showTopList: true }),
    (0, import_jsx_runtime.jsx)(Tn, {}),
    z
  ] });
});
var xr = ({ children: t }) => {
  const e = import_react.default.useContext(Re), n = Tt("viewportHeight"), o = Tt("fixedItemHeight"), r = Et(
    import_react.default.useMemo(() => ne(n, (s) => Ct(s, "height")), [n]),
    true,
    _("skipAnimationFrameInResizeObserver")
  );
  return import_react.default.useEffect(() => {
    e && (n(e.viewportHeight), o(e.itemHeight));
  }, [e, n, o]), (0, import_jsx_runtime.jsx)("div", { "data-viewport-type": "element", ref: r, style: Zt(false), children: t });
};
var Tr = ({ children: t }) => {
  const e = import_react.default.useContext(Re), n = Tt("windowViewportRect"), o = Tt("fixedItemHeight"), r = _("customScrollParent"), s = _e(
    n,
    r,
    _("skipAnimationFrameInResizeObserver")
  );
  return import_react.default.useEffect(() => {
    e && (o(e.itemHeight), n({ offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: 100 }));
  }, [e, n, o]), (0, import_jsx_runtime.jsx)("div", { "data-viewport-type": "window", ref: s, style: Zt(false), children: t });
};
var wr = import_react.default.memo(function(e) {
  const n = _("useWindowScroll"), o = _("customScrollParent"), r = Tt("fixedHeaderHeight"), s = Tt("fixedFooterHeight"), i = _("fixedHeaderContent"), l = _("fixedFooterContent"), c = _("context"), d = Et(
    import_react.default.useMemo(() => ne(r, (u) => Ct(u, "height")), [r]),
    true,
    _("skipAnimationFrameInResizeObserver")
  ), f = Et(
    import_react.default.useMemo(() => ne(s, (u) => Ct(u, "height")), [s]),
    true,
    _("skipAnimationFrameInResizeObserver")
  ), S = o || n ? vr : yr, p = o || n ? Tr : xr, m = _("TableComponent"), C = _("TableHeadComponent"), I = _("TableFooterComponent"), y = i ? (0, import_jsx_runtime.jsx)(
    C,
    {
      ref: d,
      style: { position: "sticky", top: 0, zIndex: 2 },
      ...Z(C, c),
      children: i()
    },
    "TableHead"
  ) : null, g = l ? (0, import_jsx_runtime.jsx)(
    I,
    {
      ref: f,
      style: { bottom: 0, position: "sticky", zIndex: 1 },
      ...Z(I, c),
      children: l()
    },
    "TableFoot"
  ) : null;
  return (0, import_jsx_runtime.jsx)(S, { ...e, ...Z(S, c), children: (0, import_jsx_runtime.jsx)(p, { children: (0, import_jsx_runtime.jsxs)(m, { style: { borderSpacing: 0, overflowAnchor: "none" }, ...Z(m, c), children: [
    y,
    (0, import_jsx_runtime.jsx)(Sr, {}, "TableBody"),
    g
  ] }) }) });
});
var {
  Component: Cr,
  useEmitter: Je,
  useEmitterValue: _,
  usePublisher: Tt
} = je(
  pr,
  {
    events: {
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      endReached: "endReached",
      groupIndices: "groupIndices",
      isScrolling: "isScrolling",
      itemsRendered: "itemsRendered",
      rangeChanged: "rangeChanged",
      startReached: "startReached",
      totalListHeightChanged: "totalListHeightChanged"
    },
    methods: {
      getState: "getState",
      scrollBy: "scrollBy",
      scrollIntoView: "scrollIntoView",
      scrollTo: "scrollTo",
      scrollToIndex: "scrollToIndex"
    },
    optional: {
      alignToBottom: "alignToBottom",
      atBottomThreshold: "atBottomThreshold",
      atTopThreshold: "atTopThreshold",
      components: "components",
      computeItemKey: "computeItemKey",
      context: "context",
      customScrollParent: "customScrollParent",
      data: "data",
      defaultItemHeight: "defaultItemHeight",
      firstItemIndex: "firstItemIndex",
      fixedFooterContent: "fixedFooterContent",
      fixedHeaderContent: "fixedHeaderContent",
      fixedItemHeight: "fixedItemHeight",
      followOutput: "followOutput",
      groupCounts: "groupCounts",
      increaseViewportBy: "increaseViewportBy",
      initialItemCount: "initialItemCount",
      initialScrollTop: "initialScrollTop",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      itemContent: "itemContent",
      itemSize: "itemSize",
      logLevel: "logLevel",
      overscan: "overscan",
      restoreStateFrom: "restoreStateFrom",
      scrollerRef: "scrollerRef",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      topItemCount: "topItemCount",
      totalCount: "totalCount",
      useWindowScroll: "useWindowScroll"
    },
    required: {}
  },
  wr
);
var yr = Ye({ useEmitter: Je, useEmitterValue: _, usePublisher: Tt });
var vr = Ze({ useEmitter: Je, useEmitterValue: _, usePublisher: Tt });
var Kr = Cr;
var wn = {
  bottom: 0,
  itemHeight: 0,
  items: [],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
};
var br = {
  bottom: 0,
  itemHeight: 0,
  items: [{ index: 0 }],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
};
var { ceil: Cn, floor: we, max: ee, min: Oe, round: yn } = Math;
function vn(t, e, n) {
  return Array.from({ length: e - t + 1 }).map((o, r) => ({ data: n === null ? null : n[r + t], index: r + t }));
}
function Rr(t) {
  return {
    ...br,
    items: t
  };
}
function he(t, e) {
  return t && t.width === e.width && t.height === e.height;
}
function Er(t, e) {
  return t && t.column === e.column && t.row === e.row;
}
var Hr = U(
  ([
    { increaseViewportBy: t, listBoundary: e, overscan: n, visibleRange: o },
    { footerHeight: r, headerHeight: s, scrollBy: i, scrollContainerState: l, scrollTo: c, scrollTop: d, smoothScrollTargetReached: f, viewportHeight: S },
    p,
    m,
    { didMount: C, propsReady: I },
    { customScrollParent: y, useWindowScroll: g, windowScrollContainerState: u, windowScrollTo: T, windowViewportRect: b },
    h
  ]) => {
    const a = w(0), R = w(0), k = w(wn), O = w({ height: 0, width: 0 }), z = w({ height: 0, width: 0 }), P = $(), D = $(), J = w(0), nt = w(null), B = w({ column: 0, row: 0 }), q = $(), st = $(), dt = w(false), St = w(0), ft = w(true), ut = w(false), At = w(false);
    K(
      x(
        C,
        G(St),
        V(([v, N]) => !!N)
      ),
      () => {
        M(ft, false);
      }
    ), K(
      x(
        rt(C, ft, z, O, St, ut),
        V(([v, N, Q, it, , tt]) => v && !N && Q.height !== 0 && it.height !== 0 && !tt)
      ),
      ([, , , , v]) => {
        M(ut, true), De(1, () => {
          M(P, v);
        }), Rt(x(d), () => {
          M(e, [0, 0]), M(ft, true);
        });
      }
    ), F(
      x(
        st,
        V((v) => v != null && v.scrollTop > 0),
        vt(0)
      ),
      R
    ), K(
      x(
        C,
        G(st),
        V(([, v]) => v != null)
      ),
      ([, v]) => {
        v && (M(O, v.viewport), M(z, v.item), M(B, v.gap), v.scrollTop > 0 && (M(dt, true), Rt(x(d, qt(1)), (N) => {
          M(dt, false);
        }), M(c, { top: v.scrollTop })));
      }
    ), F(
      x(
        O,
        H(({ height: v }) => v)
      ),
      S
    ), F(
      x(
        rt(
          A(O, he),
          A(z, he),
          A(B, (v, N) => v && v.column === N.column && v.row === N.row),
          A(d)
        ),
        H(([v, N, Q, it]) => ({
          gap: Q,
          item: N,
          scrollTop: it,
          viewport: v
        }))
      ),
      q
    ), F(
      x(
        rt(
          A(a),
          o,
          A(B, Er),
          A(z, he),
          A(O, he),
          A(nt),
          A(R),
          A(dt),
          A(ft),
          A(St)
        ),
        V(([, , , , , , , v]) => !v),
        H(
          ([
            v,
            [N, Q],
            it,
            tt,
            kt,
            Jt,
            Dt,
            ,
            de,
            Ot
          ]) => {
            const { column: Ft, row: Qt } = it, { height: fe, width: Ee } = tt, { width: Qe } = kt;
            if (Dt === 0 && (v === 0 || Qe === 0))
              return wn;
            if (Ee === 0) {
              const rn = $e(Ot, v), ro = rn + Math.max(Dt - 1, 0);
              return Rr(vn(rn, ro, Jt));
            }
            const me = eo(Qe, Ee, Ft);
            let $t, Mt;
            de ? N === 0 && Q === 0 && Dt > 0 ? ($t = 0, Mt = Dt - 1) : ($t = me * we((N + Qt) / (fe + Qt)), Mt = me * Cn((Q + Qt) / (fe + Qt)) - 1, Mt = Oe(v - 1, ee(Mt, me - 1)), $t = Oe(Mt, ee(0, $t))) : ($t = 0, Mt = -1);
            const tn = vn($t, Mt, Jt), { bottom: en, top: nn } = bn(kt, it, tt, tn), on = Cn(v / me), oo = on * fe + (on - 1) * Qt - en;
            return { bottom: en, itemHeight: fe, items: tn, itemWidth: Ee, offsetBottom: oo, offsetTop: nn, top: nn };
          }
        )
      ),
      k
    ), F(
      x(
        nt,
        V((v) => v !== null),
        H((v) => v.length)
      ),
      a
    ), F(
      x(
        rt(O, z, k, B),
        V(([v, N, { items: Q }]) => Q.length > 0 && N.height !== 0 && v.height !== 0),
        H(([v, N, { items: Q }, it]) => {
          const { bottom: tt, top: kt } = bn(v, it, N, Q);
          return [kt, tt];
        }),
        Y(se)
      ),
      e
    );
    const xt = w(false);
    F(
      x(
        d,
        G(xt),
        H(([v, N]) => N || v !== 0)
      ),
      xt
    );
    const Xt = pt(
      x(
        rt(k, a),
        V(([{ items: v }]) => v.length > 0),
        G(xt),
        V(([[v, N], Q]) => {
          const tt = v.items[v.items.length - 1].index === N - 1;
          return (Q || v.bottom > 0 && v.itemHeight > 0 && v.offsetBottom === 0 && v.items.length === N) && tt;
        }),
        H(([[, v]]) => v - 1),
        Y()
      )
    ), Wt = pt(
      x(
        A(k),
        V(({ items: v }) => v.length > 0 && v[0].index === 0),
        vt(0),
        Y()
      )
    ), yt = pt(
      x(
        A(k),
        G(dt),
        V(([{ items: v }, N]) => v.length > 0 && !N),
        H(([{ items: v }]) => ({
          endIndex: v[v.length - 1].index,
          startIndex: v[0].index
        })),
        Y(Vn),
        zt(0)
      )
    );
    F(yt, m.scrollSeekRangeChanged), F(
      x(
        P,
        G(O, z, a, B),
        H(([v, N, Q, it, tt]) => {
          const kt = Gn(v), { align: Jt, behavior: Dt, offset: de } = kt;
          let Ot = kt.index;
          Ot === "LAST" && (Ot = it - 1), Ot = ee(0, Ot, Oe(it - 1, Ot));
          let Ft = Ve(N, tt, Q, Ot);
          return Jt === "end" ? Ft = yn(Ft - N.height + Q.height) : Jt === "center" && (Ft = yn(Ft - N.height / 2 + Q.height / 2)), de && (Ft += de), { behavior: Dt, top: Ft };
        })
      ),
      c
    );
    const Bt = ct(
      x(
        k,
        H((v) => v.offsetBottom + v.bottom)
      ),
      0
    );
    return F(
      x(
        b,
        H((v) => ({ height: v.visibleHeight, width: v.visibleWidth }))
      ),
      O
    ), {
      customScrollParent: y,
      // input
      data: nt,
      deviation: J,
      footerHeight: r,
      gap: B,
      headerHeight: s,
      increaseViewportBy: t,
      initialItemCount: R,
      itemDimensions: z,
      overscan: n,
      restoreStateFrom: st,
      scrollBy: i,
      scrollContainerState: l,
      scrollHeight: D,
      scrollTo: c,
      scrollToIndex: P,
      scrollTop: d,
      smoothScrollTargetReached: f,
      totalCount: a,
      useWindowScroll: g,
      viewportDimensions: O,
      windowScrollContainerState: u,
      windowScrollTo: T,
      windowViewportRect: b,
      ...m,
      // output
      gridState: k,
      horizontalDirection: At,
      initialTopMostItemIndex: St,
      totalListHeight: Bt,
      ...p,
      endReached: Xt,
      propsReady: I,
      rangeChanged: yt,
      startReached: Wt,
      stateChanged: q,
      stateRestoreInProgress: dt,
      ...h
    };
  },
  X(Ue, at, ae, Un, Vt, Ke, Pt)
);
function eo(t, e, n) {
  return ee(1, we((t + n) / (we(e) + n)));
}
function bn(t, e, n, o) {
  const { height: r } = n;
  if (r === void 0 || o.length === 0)
    return { bottom: 0, top: 0 };
  const s = Ve(t, e, n, o[0].index);
  return { bottom: Ve(t, e, n, o[o.length - 1].index) + r, top: s };
}
function Ve(t, e, n, o) {
  const r = eo(t.width, n.width, e.column), s = we(o / r), i = s * n.height + ee(0, s - 1) * e.row;
  return i > 0 ? i + e.row : i;
}
var Br = U(() => {
  const t = w((S) => `Item ${S}`), e = w({}), n = w(null), o = w("virtuoso-grid-item"), r = w("virtuoso-grid-list"), s = w(qe), i = w("div"), l = w(Gt), c = (S, p = null) => ct(
    x(
      e,
      H((m) => m[S]),
      Y()
    ),
    p
  ), d = w(false), f = w(false);
  return F(A(f), d), {
    components: e,
    computeItemKey: s,
    context: n,
    FooterComponent: c("Footer"),
    HeaderComponent: c("Header"),
    headerFooterTag: i,
    itemClassName: o,
    ItemComponent: c("Item", "div"),
    itemContent: t,
    listClassName: r,
    ListComponent: c("List", "div"),
    readyStateChanged: d,
    reportReadyState: f,
    ScrollerComponent: c("Scroller", "div"),
    scrollerRef: l,
    ScrollSeekPlaceholder: c("ScrollSeekPlaceholder", "div")
  };
});
var kr = U(
  ([t, e]) => ({ ...t, ...e }),
  X(Hr, Br)
);
var Or = import_react.default.memo(function() {
  const e = et("gridState"), n = et("listClassName"), o = et("itemClassName"), r = et("itemContent"), s = et("computeItemKey"), i = et("isSeeking"), l = It("scrollHeight"), c = et("ItemComponent"), d = et("ListComponent"), f = et("ScrollSeekPlaceholder"), S = et("context"), p = It("itemDimensions"), m = It("gap"), C = et("log"), I = et("stateRestoreInProgress"), y = It("reportReadyState"), g = Et(
    import_react.default.useMemo(
      () => (u) => {
        const T = u.parentElement.parentElement.scrollHeight;
        l(T);
        const b = u.firstChild;
        if (b) {
          const { height: h, width: a } = b.getBoundingClientRect();
          p({ height: h, width: a });
        }
        m({
          column: Rn("column-gap", getComputedStyle(u).columnGap, C),
          row: Rn("row-gap", getComputedStyle(u).rowGap, C)
        });
      },
      [l, p, m, C]
    ),
    true,
    false
  );
  return Yn(() => {
    e.itemHeight > 0 && e.itemWidth > 0 && y(true);
  }, [e]), I ? null : (0, import_jsx_runtime.jsx)(
    d,
    {
      className: n,
      ref: g,
      ...Z(d, S),
      "data-testid": "virtuoso-item-list",
      style: { paddingBottom: e.offsetBottom, paddingTop: e.offsetTop },
      children: e.items.map((u) => {
        const T = s(u.index, u.data, S);
        return i ? (0, import_jsx_runtime.jsx)(
          f,
          {
            ...Z(f, S),
            height: e.itemHeight,
            index: u.index,
            width: e.itemWidth
          },
          T
        ) : (0, import_react.createElement)(
          c,
          {
            ...Z(c, S),
            className: o,
            "data-index": u.index,
            key: T
          },
          r(u.index, u.data, S)
        );
      })
    }
  );
});
var Fr = import_react.default.memo(function() {
  const e = et("HeaderComponent"), n = It("headerHeight"), o = et("headerFooterTag"), r = Et(
    import_react.default.useMemo(
      () => (i) => {
        n(Ct(i, "height"));
      },
      [n]
    ),
    true,
    false
  ), s = et("context");
  return e ? (0, import_jsx_runtime.jsx)(o, { ref: r, children: (0, import_jsx_runtime.jsx)(e, { ...Z(e, s) }) }) : null;
});
var zr = import_react.default.memo(function() {
  const e = et("FooterComponent"), n = It("footerHeight"), o = et("headerFooterTag"), r = Et(
    import_react.default.useMemo(
      () => (i) => {
        n(Ct(i, "height"));
      },
      [n]
    ),
    true,
    false
  ), s = et("context");
  return e ? (0, import_jsx_runtime.jsx)(o, { ref: r, children: (0, import_jsx_runtime.jsx)(e, { ...Z(e, s) }) }) : null;
});
var Lr = ({ children: t }) => {
  const e = import_react.default.useContext(qn), n = It("itemDimensions"), o = It("viewportDimensions"), r = Et(
    import_react.default.useMemo(
      () => (s) => {
        o(s.getBoundingClientRect());
      },
      [o]
    ),
    true,
    false
  );
  return import_react.default.useEffect(() => {
    e && (o({ height: e.viewportHeight, width: e.viewportWidth }), n({ height: e.itemHeight, width: e.itemWidth }));
  }, [e, o, n]), (0, import_jsx_runtime.jsx)("div", { ref: r, style: Zt(false), children: t });
};
var Pr = ({ children: t }) => {
  const e = import_react.default.useContext(qn), n = It("windowViewportRect"), o = It("itemDimensions"), r = et("customScrollParent"), s = _e(n, r, false);
  return import_react.default.useEffect(() => {
    e && (o({ height: e.itemHeight, width: e.itemWidth }), n({ offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: e.viewportWidth }));
  }, [e, n, o]), (0, import_jsx_runtime.jsx)("div", { ref: s, style: Zt(false), children: t });
};
var Vr = import_react.default.memo(function({ ...e }) {
  const n = et("useWindowScroll"), o = et("customScrollParent"), r = o || n ? Mr : Wr, s = o || n ? Pr : Lr, i = et("context");
  return (0, import_jsx_runtime.jsx)(r, { ...e, ...Z(r, i), children: (0, import_jsx_runtime.jsxs)(s, { children: [
    (0, import_jsx_runtime.jsx)(Fr, {}),
    (0, import_jsx_runtime.jsx)(Or, {}),
    (0, import_jsx_runtime.jsx)(zr, {})
  ] }) });
});
var {
  Component: Ar,
  useEmitter: no,
  useEmitterValue: et,
  usePublisher: It
} = je(
  kr,
  {
    events: {
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      endReached: "endReached",
      isScrolling: "isScrolling",
      rangeChanged: "rangeChanged",
      readyStateChanged: "readyStateChanged",
      startReached: "startReached",
      stateChanged: "stateChanged"
    },
    methods: {
      scrollBy: "scrollBy",
      scrollTo: "scrollTo",
      scrollToIndex: "scrollToIndex"
    },
    optional: {
      components: "components",
      computeItemKey: "computeItemKey",
      context: "context",
      customScrollParent: "customScrollParent",
      data: "data",
      headerFooterTag: "headerFooterTag",
      increaseViewportBy: "increaseViewportBy",
      initialItemCount: "initialItemCount",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      itemClassName: "itemClassName",
      itemContent: "itemContent",
      listClassName: "listClassName",
      logLevel: "logLevel",
      overscan: "overscan",
      restoreStateFrom: "restoreStateFrom",
      scrollerRef: "scrollerRef",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      totalCount: "totalCount",
      useWindowScroll: "useWindowScroll"
    }
  },
  Vr
);
var Wr = Ye({ useEmitter: no, useEmitterValue: et, usePublisher: It });
var Mr = Ze({ useEmitter: no, useEmitterValue: et, usePublisher: It });
function Rn(t, e, n) {
  return e !== "normal" && !(e != null && e.endsWith("px")) && n(`${t} was not resolved to pixel value correctly`, e, ht.WARN), e === "normal" ? 0 : parseInt(e != null ? e : "0", 10);
}
var jr = Ar;
export {
  Ur as GroupedVirtuoso,
  ht as LogLevel,
  Kr as TableVirtuoso,
  $r as Virtuoso,
  jr as VirtuosoGrid,
  qn as VirtuosoGridMockContext,
  Re as VirtuosoMockContext
};
//# sourceMappingURL=react-virtuoso.js.map
