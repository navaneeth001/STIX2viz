import e_, { useRef as NP, useEffect as FP } from "react";
function BP(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ls = { exports: {} }, Ia = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Op;
function jP() {
  if (Op) return Ia;
  Op = 1;
  var r = e_, i = Symbol.for("react.element"), e = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, n = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, u, l) {
    var c, d = {}, f = null, h = null;
    l !== void 0 && (f = "" + l), u.key !== void 0 && (f = "" + u.key), u.ref !== void 0 && (h = u.ref);
    for (c in u) t.call(u, c) && !a.hasOwnProperty(c) && (d[c] = u[c]);
    if (s && s.defaultProps) for (c in u = s.defaultProps, u) d[c] === void 0 && (d[c] = u[c]);
    return { $$typeof: i, type: s, key: f, ref: h, props: d, _owner: n.current };
  }
  return Ia.Fragment = e, Ia.jsx = o, Ia.jsxs = o, Ia;
}
var ka = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tp;
function LP() {
  return Tp || (Tp = 1, process.env.NODE_ENV !== "production" && (function() {
    var r = e_, i = Symbol.for("react.element"), e = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v = Symbol.iterator, p = "@@iterator";
    function y(g) {
      if (g === null || typeof g != "object")
        return null;
      var x = v && g[v] || g[p];
      return typeof x == "function" ? x : null;
    }
    var m = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(g) {
      {
        for (var x = arguments.length, z = new Array(x > 1 ? x - 1 : 0), le = 1; le < x; le++)
          z[le - 1] = arguments[le];
        w("error", g, z);
      }
    }
    function w(g, x, z) {
      {
        var le = m.ReactDebugCurrentFrame, _e = le.getStackAddendum();
        _e !== "" && (x += "%s", z = z.concat([_e]));
        var Ce = z.map(function(pe) {
          return String(pe);
        });
        Ce.unshift("Warning: " + x), Function.prototype.apply.call(console[g], console, Ce);
      }
    }
    var _ = !1, $ = !1, C = !1, j = !1, W = !1, B;
    B = Symbol.for("react.module.reference");
    function L(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === t || g === a || W || g === n || g === l || g === c || j || g === h || _ || $ || C || typeof g == "object" && g !== null && (g.$$typeof === f || g.$$typeof === d || g.$$typeof === o || g.$$typeof === s || g.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === B || g.getModuleId !== void 0));
    }
    function X(g, x, z) {
      var le = g.displayName;
      if (le)
        return le;
      var _e = x.displayName || x.name || "";
      return _e !== "" ? z + "(" + _e + ")" : z;
    }
    function ue(g) {
      return g.displayName || "Context";
    }
    function ee(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case t:
          return "Fragment";
        case e:
          return "Portal";
        case a:
          return "Profiler";
        case n:
          return "StrictMode";
        case l:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case s:
            var x = g;
            return ue(x) + ".Consumer";
          case o:
            var z = g;
            return ue(z._context) + ".Provider";
          case u:
            return X(g, g.render, "ForwardRef");
          case d:
            var le = g.displayName || null;
            return le !== null ? le : ee(g.type) || "Memo";
          case f: {
            var _e = g, Ce = _e._payload, pe = _e._init;
            try {
              return ee(pe(Ce));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var de = Object.assign, ke = 0, ve, Ne, je, Le, I, F, H;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function U() {
      {
        if (ke === 0) {
          ve = console.log, Ne = console.info, je = console.warn, Le = console.error, I = console.group, F = console.groupCollapsed, H = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: K,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        ke++;
      }
    }
    function ne() {
      {
        if (ke--, ke === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: de({}, g, {
              value: ve
            }),
            info: de({}, g, {
              value: Ne
            }),
            warn: de({}, g, {
              value: je
            }),
            error: de({}, g, {
              value: Le
            }),
            group: de({}, g, {
              value: I
            }),
            groupCollapsed: de({}, g, {
              value: F
            }),
            groupEnd: de({}, g, {
              value: H
            })
          });
        }
        ke < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = m.ReactCurrentDispatcher, Q;
    function Z(g, x, z) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (_e) {
            var le = _e.stack.trim().match(/\n( *(at )?)/);
            Q = le && le[1] || "";
          }
        return `
` + Q + g;
      }
    }
    var P = !1, S;
    {
      var k = typeof WeakMap == "function" ? WeakMap : Map;
      S = new k();
    }
    function O(g, x) {
      if (!g || P)
        return "";
      {
        var z = S.get(g);
        if (z !== void 0)
          return z;
      }
      var le;
      P = !0;
      var _e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ce;
      Ce = ie.current, ie.current = null, U();
      try {
        if (x) {
          var pe = function() {
            throw Error();
          };
          if (Object.defineProperty(pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pe, []);
            } catch (Cr) {
              le = Cr;
            }
            Reflect.construct(g, [], pe);
          } else {
            try {
              pe.call();
            } catch (Cr) {
              le = Cr;
            }
            g.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Cr) {
            le = Cr;
          }
          g();
        }
      } catch (Cr) {
        if (Cr && le && typeof Cr.stack == "string") {
          for (var he = Cr.stack.split(`
`), _t = le.stack.split(`
`), Ye = he.length - 1, Ze = _t.length - 1; Ye >= 1 && Ze >= 0 && he[Ye] !== _t[Ze]; )
            Ze--;
          for (; Ye >= 1 && Ze >= 0; Ye--, Ze--)
            if (he[Ye] !== _t[Ze]) {
              if (Ye !== 1 || Ze !== 1)
                do
                  if (Ye--, Ze--, Ze < 0 || he[Ye] !== _t[Ze]) {
                    var Xt = `
` + he[Ye].replace(" at new ", " at ");
                    return g.displayName && Xt.includes("<anonymous>") && (Xt = Xt.replace("<anonymous>", g.displayName)), typeof g == "function" && S.set(g, Xt), Xt;
                  }
                while (Ye >= 1 && Ze >= 0);
              break;
            }
        }
      } finally {
        P = !1, ie.current = Ce, ne(), Error.prepareStackTrace = _e;
      }
      var ci = g ? g.displayName || g.name : "", Sp = ci ? Z(ci) : "";
      return typeof g == "function" && S.set(g, Sp), Sp;
    }
    function J(g, x, z) {
      return O(g, !1);
    }
    function te(g) {
      var x = g.prototype;
      return !!(x && x.isReactComponent);
    }
    function Oe(g, x, z) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return O(g, te(g));
      if (typeof g == "string")
        return Z(g);
      switch (g) {
        case l:
          return Z("Suspense");
        case c:
          return Z("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case u:
            return J(g.render);
          case d:
            return Oe(g.type, x, z);
          case f: {
            var le = g, _e = le._payload, Ce = le._init;
            try {
              return Oe(Ce(_e), x, z);
            } catch {
            }
          }
        }
      return "";
    }
    var Qe = Object.prototype.hasOwnProperty, pt = {}, vr = m.ReactDebugCurrentFrame;
    function zt(g) {
      if (g) {
        var x = g._owner, z = Oe(g.type, g._source, x ? x.type : null);
        vr.setExtraStackFrame(z);
      } else
        vr.setExtraStackFrame(null);
    }
    function kr(g, x, z, le, _e) {
      {
        var Ce = Function.call.bind(Qe);
        for (var pe in g)
          if (Ce(g, pe)) {
            var he = void 0;
            try {
              if (typeof g[pe] != "function") {
                var _t = Error((le || "React class") + ": " + z + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _t.name = "Invariant Violation", _t;
              }
              he = g[pe](x, pe, le, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ye) {
              he = Ye;
            }
            he && !(he instanceof Error) && (zt(_e), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", z, pe, typeof he), zt(null)), he instanceof Error && !(he.message in pt) && (pt[he.message] = !0, zt(_e), b("Failed %s type: %s", z, he.message), zt(null));
          }
      }
    }
    var gP = Array.isArray;
    function Gl(g) {
      return gP(g);
    }
    function mP(g) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, z = x && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return z;
      }
    }
    function bP(g) {
      try {
        return hp(g), !1;
      } catch {
        return !0;
      }
    }
    function hp(g) {
      return "" + g;
    }
    function vp(g) {
      if (bP(g))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mP(g)), hp(g);
    }
    var pp = m.ReactCurrentOwner, $P = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, yp, gp;
    function _P(g) {
      if (Qe.call(g, "ref")) {
        var x = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function wP(g) {
      if (Qe.call(g, "key")) {
        var x = Object.getOwnPropertyDescriptor(g, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function EP(g, x) {
      typeof g.ref == "string" && pp.current;
    }
    function SP(g, x) {
      {
        var z = function() {
          yp || (yp = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        z.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: z,
          configurable: !0
        });
      }
    }
    function OP(g, x) {
      {
        var z = function() {
          gp || (gp = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        z.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: z,
          configurable: !0
        });
      }
    }
    var TP = function(g, x, z, le, _e, Ce, pe) {
      var he = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: g,
        key: x,
        ref: z,
        props: pe,
        // Record the component responsible for creating this element.
        _owner: Ce
      };
      return he._store = {}, Object.defineProperty(he._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(he, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.defineProperty(he, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _e
      }), Object.freeze && (Object.freeze(he.props), Object.freeze(he)), he;
    };
    function PP(g, x, z, le, _e) {
      {
        var Ce, pe = {}, he = null, _t = null;
        z !== void 0 && (vp(z), he = "" + z), wP(x) && (vp(x.key), he = "" + x.key), _P(x) && (_t = x.ref, EP(x, _e));
        for (Ce in x)
          Qe.call(x, Ce) && !$P.hasOwnProperty(Ce) && (pe[Ce] = x[Ce]);
        if (g && g.defaultProps) {
          var Ye = g.defaultProps;
          for (Ce in Ye)
            pe[Ce] === void 0 && (pe[Ce] = Ye[Ce]);
        }
        if (he || _t) {
          var Ze = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          he && SP(pe, Ze), _t && OP(pe, Ze);
        }
        return TP(g, he, _t, _e, le, pp.current, pe);
      }
    }
    var Kl = m.ReactCurrentOwner, mp = m.ReactDebugCurrentFrame;
    function li(g) {
      if (g) {
        var x = g._owner, z = Oe(g.type, g._source, x ? x.type : null);
        mp.setExtraStackFrame(z);
      } else
        mp.setExtraStackFrame(null);
    }
    var ql;
    ql = !1;
    function Yl(g) {
      return typeof g == "object" && g !== null && g.$$typeof === i;
    }
    function bp() {
      {
        if (Kl.current) {
          var g = ee(Kl.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function IP(g) {
      return "";
    }
    var $p = {};
    function kP(g) {
      {
        var x = bp();
        if (!x) {
          var z = typeof g == "string" ? g : g.displayName || g.name;
          z && (x = `

Check the top-level render call using <` + z + ">.");
        }
        return x;
      }
    }
    function _p(g, x) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var z = kP(x);
        if ($p[z])
          return;
        $p[z] = !0;
        var le = "";
        g && g._owner && g._owner !== Kl.current && (le = " It was passed a child from " + ee(g._owner.type) + "."), li(g), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, le), li(null);
      }
    }
    function wp(g, x) {
      {
        if (typeof g != "object")
          return;
        if (Gl(g))
          for (var z = 0; z < g.length; z++) {
            var le = g[z];
            Yl(le) && _p(le, x);
          }
        else if (Yl(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var _e = y(g);
          if (typeof _e == "function" && _e !== g.entries)
            for (var Ce = _e.call(g), pe; !(pe = Ce.next()).done; )
              Yl(pe.value) && _p(pe.value, x);
        }
      }
    }
    function CP(g) {
      {
        var x = g.type;
        if (x == null || typeof x == "string")
          return;
        var z;
        if (typeof x == "function")
          z = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        x.$$typeof === d))
          z = x.propTypes;
        else
          return;
        if (z) {
          var le = ee(x);
          kr(z, g.props, "prop", le, g);
        } else if (x.PropTypes !== void 0 && !ql) {
          ql = !0;
          var _e = ee(x);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _e || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xP(g) {
      {
        for (var x = Object.keys(g.props), z = 0; z < x.length; z++) {
          var le = x[z];
          if (le !== "children" && le !== "key") {
            li(g), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), li(null);
            break;
          }
        }
        g.ref !== null && (li(g), b("Invalid attribute `ref` supplied to `React.Fragment`."), li(null));
      }
    }
    function Ep(g, x, z, le, _e, Ce) {
      {
        var pe = L(g);
        if (!pe) {
          var he = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (he += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _t = IP();
          _t ? he += _t : he += bp();
          var Ye;
          g === null ? Ye = "null" : Gl(g) ? Ye = "array" : g !== void 0 && g.$$typeof === i ? (Ye = "<" + (ee(g.type) || "Unknown") + " />", he = " Did you accidentally export a JSX literal instead of a component?") : Ye = typeof g, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ye, he);
        }
        var Ze = PP(g, x, z, _e, Ce);
        if (Ze == null)
          return Ze;
        if (pe) {
          var Xt = x.children;
          if (Xt !== void 0)
            if (le)
              if (Gl(Xt)) {
                for (var ci = 0; ci < Xt.length; ci++)
                  wp(Xt[ci], g);
                Object.freeze && Object.freeze(Xt);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wp(Xt, g);
        }
        return g === t ? xP(Ze) : CP(Ze), Ze;
      }
    }
    function RP(g, x, z) {
      return Ep(g, x, z, !0);
    }
    function AP(g, x, z) {
      return Ep(g, x, z, !1);
    }
    var DP = AP, MP = RP;
    ka.Fragment = t, ka.jsx = DP, ka.jsxs = MP;
  })()), ka;
}
var Pp;
function zP() {
  return Pp || (Pp = 1, process.env.NODE_ENV === "production" ? ls.exports = jP() : ls.exports = LP()), ls.exports;
}
var Xl = zP();
/**
 * vis-data
 * http://visjs.org/
 *
 * Manage unstructured data using DataSet. Add, update, and remove data, and listen for changes in the data.
 *
 * @version 7.1.9
 * @date    2023-11-24T17:53:34.179Z
 *
 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
 * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
 *
 * @license
 * vis.js is dual licensed under both
 *
 *   1. The Apache 2.0 License
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   and
 *
 *   2. The MIT License
 *      http://opensource.org/licenses/MIT
 *
 * vis.js may be distributed under either license.
 */
function Hu(r, i) {
  if (!(r instanceof i))
    throw new TypeError("Cannot call a class as a function");
}
var Jl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function se(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var t_ = { exports: {} }, cs = function(r) {
  return r && r.Math === Math && r;
}, Fe = (
  // eslint-disable-next-line es/no-global-this -- safe
  cs(typeof globalThis == "object" && globalThis) || cs(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  cs(typeof self == "object" && self) || cs(typeof Jl == "object" && Jl) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ (function() {
    return this;
  })() || Jl || Function("return this")()
), Se = function(r) {
  try {
    return !!r();
  } catch {
    return !0;
  }
}, WP = Se, go = !WP(function() {
  var r = (function() {
  }).bind();
  return typeof r != "function" || r.hasOwnProperty("prototype");
}), HP = go, r_ = Function.prototype, Ip = r_.apply, kp = r_.call, ta = typeof Reflect == "object" && Reflect.apply || (HP ? kp.bind(Ip) : function() {
  return kp.apply(Ip, arguments);
}), n_ = go, i_ = Function.prototype, gf = i_.call, UP = n_ && i_.bind.bind(gf, gf), Me = n_ ? UP : function(r) {
  return function() {
    return gf.apply(r, arguments);
  };
}, a_ = Me, VP = a_({}.toString), GP = a_("".slice), hn = function(r) {
  return GP(VP(r), 8, -1);
}, KP = hn, qP = Me, o_ = function(r) {
  if (KP(r) === "Function") return qP(r);
}, mf = typeof document == "object" && document.all, YP = typeof mf > "u" && mf !== void 0, s_ = {
  all: mf,
  IS_HTMLDDA: YP
}, u_ = s_, XP = u_.all, Ue = u_.IS_HTMLDDA ? function(r) {
  return typeof r == "function" || r === XP;
} : function(r) {
  return typeof r == "function";
}, qn = {}, JP = Se, ut = !JP(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), QP = go, ds = Function.prototype.call, lt = QP ? ds.bind(ds) : function() {
  return ds.apply(ds, arguments);
}, Uu = {}, l_ = {}.propertyIsEnumerable, c_ = Object.getOwnPropertyDescriptor, ZP = c_ && !l_.call({ 1: 2 }, 1);
Uu.f = ZP ? function(i) {
  var e = c_(this, i);
  return !!e && e.enumerable;
} : l_;
var Yn = function(r, i) {
  return {
    enumerable: !(r & 1),
    configurable: !(r & 2),
    writable: !(r & 4),
    value: i
  };
}, eI = Me, tI = Se, rI = hn, Ql = Object, nI = eI("".split), Vu = tI(function() {
  return !Ql("z").propertyIsEnumerable(0);
}) ? function(r) {
  return rI(r) === "String" ? nI(r, "") : Ql(r);
} : Ql, ra = function(r) {
  return r == null;
}, iI = ra, aI = TypeError, Rh = function(r) {
  if (iI(r)) throw new aI("Can't call method on " + r);
  return r;
}, oI = Vu, sI = Rh, Or = function(r) {
  return oI(sI(r));
}, Cp = Ue, d_ = s_, uI = d_.all, bt = d_.IS_HTMLDDA ? function(r) {
  return typeof r == "object" ? r !== null : Cp(r) || r === uI;
} : function(r) {
  return typeof r == "object" ? r !== null : Cp(r);
}, Be = {}, Zl = Be, ec = Fe, lI = Ue, xp = function(r) {
  return lI(r) ? r : void 0;
}, Pt = function(r, i) {
  return arguments.length < 2 ? xp(Zl[r]) || xp(ec[r]) : Zl[r] && Zl[r][i] || ec[r] && ec[r][i];
}, cI = Me, nt = cI({}.isPrototypeOf), vn = typeof navigator < "u" && String(navigator.userAgent) || "", f_ = Fe, tc = vn, Rp = f_.process, Ap = f_.Deno, Dp = Rp && Rp.versions || Ap && Ap.version, Mp = Dp && Dp.v8, or, mu;
Mp && (or = Mp.split("."), mu = or[0] > 0 && or[0] < 4 ? 1 : +(or[0] + or[1]));
!mu && tc && (or = tc.match(/Edge\/(\d+)/), (!or || or[1] >= 74) && (or = tc.match(/Chrome\/(\d+)/), or && (mu = +or[1])));
var na = mu, Np = na, dI = Se, fI = Fe, hI = fI.String, ia = !!Object.getOwnPropertySymbols && !dI(function() {
  var r = Symbol("symbol detection");
  return !hI(r) || !(Object(r) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && Np && Np < 41;
}), vI = ia, h_ = vI && !Symbol.sham && typeof Symbol.iterator == "symbol", pI = Pt, yI = Ue, gI = nt, mI = h_, bI = Object, mo = mI ? function(r) {
  return typeof r == "symbol";
} : function(r) {
  var i = pI("Symbol");
  return yI(i) && gI(i.prototype, bI(r));
}, $I = String, aa = function(r) {
  try {
    return $I(r);
  } catch {
    return "Object";
  }
}, _I = Ue, wI = aa, EI = TypeError, Ft = function(r) {
  if (_I(r)) return r;
  throw new EI(wI(r) + " is not a function");
}, SI = Ft, OI = ra, Ah = function(r, i) {
  var e = r[i];
  return OI(e) ? void 0 : SI(e);
}, rc = lt, nc = Ue, ic = bt, TI = TypeError, PI = function(r, i) {
  var e, t;
  if (i === "string" && nc(e = r.toString) && !ic(t = rc(e, r)) || nc(e = r.valueOf) && !ic(t = rc(e, r)) || i !== "string" && nc(e = r.toString) && !ic(t = rc(e, r))) return t;
  throw new TI("Can't convert object to primitive value");
}, v_ = { exports: {} }, II = !0, Fp = Fe, kI = Object.defineProperty, CI = function(r, i) {
  try {
    kI(Fp, r, { value: i, configurable: !0, writable: !0 });
  } catch {
    Fp[r] = i;
  }
  return i;
}, xI = Fe, RI = CI, Bp = "__core-js_shared__", AI = xI[Bp] || RI(Bp, {}), Dh = AI, jp = Dh;
(v_.exports = function(r, i) {
  return jp[r] || (jp[r] = i !== void 0 ? i : {});
})("versions", []).push({
  version: "3.33.2",
  mode: "pure",
  copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var oa = v_.exports, DI = Rh, MI = Object, Bt = function(r) {
  return MI(DI(r));
}, NI = Me, FI = Bt, BI = NI({}.hasOwnProperty), it = Object.hasOwn || function(i, e) {
  return BI(FI(i), e);
}, jI = Me, LI = 0, zI = Math.random(), WI = jI(1 .toString), Gu = function(r) {
  return "Symbol(" + (r === void 0 ? "" : r) + ")_" + WI(++LI + zI, 36);
}, HI = Fe, UI = oa, Lp = it, VI = Gu, GI = ia, KI = h_, Si = HI.Symbol, ac = UI("wks"), qI = KI ? Si.for || Si : Si && Si.withoutSetter || VI, ze = function(r) {
  return Lp(ac, r) || (ac[r] = GI && Lp(Si, r) ? Si[r] : qI("Symbol." + r)), ac[r];
}, YI = lt, zp = bt, Wp = mo, XI = Ah, JI = PI, QI = ze, ZI = TypeError, ek = QI("toPrimitive"), tk = function(r, i) {
  if (!zp(r) || Wp(r)) return r;
  var e = XI(r, ek), t;
  if (e) {
    if (i === void 0 && (i = "default"), t = YI(e, r, i), !zp(t) || Wp(t)) return t;
    throw new ZI("Can't convert object to primitive value");
  }
  return i === void 0 && (i = "number"), JI(r, i);
}, rk = tk, nk = mo, Ku = function(r) {
  var i = rk(r, "string");
  return nk(i) ? i : i + "";
}, ik = Fe, Hp = bt, bf = ik.document, ak = Hp(bf) && Hp(bf.createElement), Mh = function(r) {
  return ak ? bf.createElement(r) : {};
}, ok = ut, sk = Se, uk = Mh, p_ = !ok && !sk(function() {
  return Object.defineProperty(uk("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), lk = ut, ck = lt, dk = Uu, fk = Yn, hk = Or, vk = Ku, pk = it, yk = p_, Up = Object.getOwnPropertyDescriptor;
qn.f = lk ? Up : function(i, e) {
  if (i = hk(i), e = vk(e), yk) try {
    return Up(i, e);
  } catch {
  }
  if (pk(i, e)) return fk(!ck(dk.f, i, e), i[e]);
};
var gk = Se, mk = Ue, bk = /#|\.prototype\./, bo = function(r, i) {
  var e = _k[$k(r)];
  return e === Ek ? !0 : e === wk ? !1 : mk(i) ? gk(i) : !!i;
}, $k = bo.normalize = function(r) {
  return String(r).replace(bk, ".").toLowerCase();
}, _k = bo.data = {}, wk = bo.NATIVE = "N", Ek = bo.POLYFILL = "P", y_ = bo, Vp = o_, Sk = Ft, Ok = go, Tk = Vp(Vp.bind), pn = function(r, i) {
  return Sk(r), i === void 0 ? r : Ok ? Tk(r, i) : function() {
    return r.apply(i, arguments);
  };
}, jt = {}, Pk = ut, Ik = Se, g_ = Pk && Ik(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), kk = bt, Ck = String, xk = TypeError, Vt = function(r) {
  if (kk(r)) return r;
  throw new xk(Ck(r) + " is not an object");
}, Rk = ut, Ak = p_, Dk = g_, fs = Vt, Gp = Ku, Mk = TypeError, oc = Object.defineProperty, Nk = Object.getOwnPropertyDescriptor, sc = "enumerable", uc = "configurable", lc = "writable";
jt.f = Rk ? Dk ? function(i, e, t) {
  if (fs(i), e = Gp(e), fs(t), typeof i == "function" && e === "prototype" && "value" in t && lc in t && !t[lc]) {
    var n = Nk(i, e);
    n && n[lc] && (i[e] = t.value, t = {
      configurable: uc in t ? t[uc] : n[uc],
      enumerable: sc in t ? t[sc] : n[sc],
      writable: !1
    });
  }
  return oc(i, e, t);
} : oc : function(i, e, t) {
  if (fs(i), e = Gp(e), fs(t), Ak) try {
    return oc(i, e, t);
  } catch {
  }
  if ("get" in t || "set" in t) throw new Mk("Accessors not supported");
  return "value" in t && (i[e] = t.value), i;
};
var Fk = ut, Bk = jt, jk = Yn, Vr = Fk ? function(r, i, e) {
  return Bk.f(r, i, jk(1, e));
} : function(r, i, e) {
  return r[i] = e, r;
}, hs = Fe, Lk = ta, zk = o_, Wk = Ue, Hk = qn.f, Uk = y_, di = Be, Vk = pn, fi = Vr, Kp = it, Gk = function(r) {
  var i = function(e, t, n) {
    if (this instanceof i) {
      switch (arguments.length) {
        case 0:
          return new r();
        case 1:
          return new r(e);
        case 2:
          return new r(e, t);
      }
      return new r(e, t, n);
    }
    return Lk(r, this, arguments);
  };
  return i.prototype = r.prototype, i;
}, re = function(r, i) {
  var e = r.target, t = r.global, n = r.stat, a = r.proto, o = t ? hs : n ? hs[e] : (hs[e] || {}).prototype, s = t ? di : di[e] || fi(di, e, {})[e], u = s.prototype, l, c, d, f, h, v, p, y, m;
  for (f in i)
    l = Uk(t ? f : e + (n ? "." : "#") + f, r.forced), c = !l && o && Kp(o, f), v = s[f], c && (r.dontCallGetSet ? (m = Hk(o, f), p = m && m.value) : p = o[f]), h = c && p ? p : i[f], !(c && typeof v == typeof h) && (r.bind && c ? y = Vk(h, hs) : r.wrap && c ? y = Gk(h) : a && Wk(h) ? y = zk(h) : y = h, (r.sham || h && h.sham || v && v.sham) && fi(y, "sham", !0), fi(s, f, y), a && (d = e + "Prototype", Kp(di, d) || fi(di, d, {}), fi(di[d], f, h), r.real && u && (l || !u[f]) && fi(u, f, h)));
}, Kk = re, qk = ut, qp = jt.f;
Kk({ target: "Object", stat: !0, forced: Object.defineProperty !== qp, sham: !qk }, {
  defineProperty: qp
});
var Yk = Be, m_ = Yk.Object, Xk = t_.exports = function(i, e, t) {
  return m_.defineProperty(i, e, t);
};
m_.defineProperty.sham && (Xk.sham = !0);
var Jk = t_.exports, Qk = Jk, b_ = Qk, Zk = b_, eC = Zk, tC = eC, rC = tC, $_ = rC, qu = /* @__PURE__ */ se($_), nC = hn, yn = Array.isArray || function(i) {
  return nC(i) === "Array";
}, iC = Math.ceil, aC = Math.floor, oC = Math.trunc || function(i) {
  var e = +i;
  return (e > 0 ? aC : iC)(e);
}, sC = oC, Yu = function(r) {
  var i = +r;
  return i !== i || i === 0 ? 0 : sC(i);
}, uC = Yu, lC = Math.min, cC = function(r) {
  return r > 0 ? lC(uC(r), 9007199254740991) : 0;
}, dC = cC, Gt = function(r) {
  return dC(r.length);
}, fC = TypeError, hC = 9007199254740991, Xu = function(r) {
  if (r > hC) throw fC("Maximum allowed index exceeded");
  return r;
}, vC = Ku, pC = jt, yC = Yn, sa = function(r, i, e) {
  var t = vC(i);
  t in r ? pC.f(r, t, yC(0, e)) : r[t] = e;
}, gC = ze, mC = gC("toStringTag"), __ = {};
__[mC] = "z";
var Nh = String(__) === "[object z]", bC = Nh, $C = Ue, Qs = hn, _C = ze, wC = _C("toStringTag"), EC = Object, SC = Qs(/* @__PURE__ */ (function() {
  return arguments;
})()) === "Arguments", OC = function(r, i) {
  try {
    return r[i];
  } catch {
  }
}, Gr = bC ? Qs : function(r) {
  var i, e, t;
  return r === void 0 ? "Undefined" : r === null ? "Null" : typeof (e = OC(i = EC(r), wC)) == "string" ? e : SC ? Qs(i) : (t = Qs(i)) === "Object" && $C(i.callee) ? "Arguments" : t;
}, TC = Me, PC = Ue, $f = Dh, IC = TC(Function.toString);
PC($f.inspectSource) || ($f.inspectSource = function(r) {
  return IC(r);
});
var w_ = $f.inspectSource, kC = Me, CC = Se, E_ = Ue, xC = Gr, RC = Pt, AC = w_, S_ = function() {
}, DC = [], O_ = RC("Reflect", "construct"), Fh = /^\s*(?:class|function)\b/, MC = kC(Fh.exec), NC = !Fh.test(S_), Ca = function(i) {
  if (!E_(i)) return !1;
  try {
    return O_(S_, DC, i), !0;
  } catch {
    return !1;
  }
}, T_ = function(i) {
  if (!E_(i)) return !1;
  switch (xC(i)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return NC || !!MC(Fh, AC(i));
  } catch {
    return !0;
  }
};
T_.sham = !0;
var Ju = !O_ || CC(function() {
  var r;
  return Ca(Ca.call) || !Ca(Object) || !Ca(function() {
    r = !0;
  }) || r;
}) ? T_ : Ca, Yp = yn, FC = Ju, BC = bt, jC = ze, LC = jC("species"), Xp = Array, zC = function(r) {
  var i;
  return Yp(r) && (i = r.constructor, FC(i) && (i === Xp || Yp(i.prototype)) ? i = void 0 : BC(i) && (i = i[LC], i === null && (i = void 0))), i === void 0 ? Xp : i;
}, WC = zC, Qu = function(r, i) {
  return new (WC(r))(i === 0 ? 0 : i);
}, HC = Se, UC = ze, VC = na, GC = UC("species"), $o = function(r) {
  return VC >= 51 || !HC(function() {
    var i = [], e = i.constructor = {};
    return e[GC] = function() {
      return { foo: 1 };
    }, i[r](Boolean).foo !== 1;
  });
}, KC = re, qC = Se, YC = yn, XC = bt, JC = Bt, QC = Gt, Jp = Xu, Qp = sa, ZC = Qu, ex = $o, tx = ze, rx = na, P_ = tx("isConcatSpreadable"), nx = rx >= 51 || !qC(function() {
  var r = [];
  return r[P_] = !1, r.concat()[0] !== r;
}), ix = function(r) {
  if (!XC(r)) return !1;
  var i = r[P_];
  return i !== void 0 ? !!i : YC(r);
}, ax = !nx || !ex("concat");
KC({ target: "Array", proto: !0, forced: ax }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function(i) {
    var e = JC(this), t = ZC(e, 0), n = 0, a, o, s, u, l;
    for (a = -1, s = arguments.length; a < s; a++)
      if (l = a === -1 ? e : arguments[a], ix(l))
        for (u = QC(l), Jp(n + u), o = 0; o < u; o++, n++) o in l && Qp(t, n, l[o]);
      else
        Jp(n + 1), Qp(t, n++, l);
    return t.length = n, t;
  }
});
var ox = Gr, sx = String, Xn = function(r) {
  if (ox(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
  return sx(r);
}, Zu = {}, ux = Yu, lx = Math.max, cx = Math.min, el = function(r, i) {
  var e = ux(r);
  return e < 0 ? lx(e + i, 0) : cx(e, i);
}, dx = Or, fx = el, hx = Gt, vx = function(r) {
  return function(i, e, t) {
    var n = dx(i), a = hx(n), o = fx(t, a), s;
    if (r && e !== e) {
      for (; a > o; )
        if (s = n[o++], s !== s) return !0;
    } else for (; a > o; o++)
      if ((r || o in n) && n[o] === e) return r || o || 0;
    return !r && -1;
  };
}, px = {
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: vx(!1)
}, _o = {}, yx = Me, cc = it, gx = Or, mx = px.indexOf, bx = _o, Zp = yx([].push), I_ = function(r, i) {
  var e = gx(r), t = 0, n = [], a;
  for (a in e) !cc(bx, a) && cc(e, a) && Zp(n, a);
  for (; i.length > t; ) cc(e, a = i[t++]) && (~mx(n, a) || Zp(n, a));
  return n;
}, Bh = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], $x = I_, _x = Bh, tl = Object.keys || function(i) {
  return $x(i, _x);
}, wx = ut, Ex = g_, Sx = jt, Ox = Vt, Tx = Or, Px = tl;
Zu.f = wx && !Ex ? Object.defineProperties : function(i, e) {
  Ox(i);
  for (var t = Tx(e), n = Px(e), a = n.length, o = 0, s; a > o; ) Sx.f(i, s = n[o++], t[s]);
  return i;
};
var Ix = Pt, k_ = Ix("document", "documentElement"), kx = oa, Cx = Gu, ey = kx("keys"), rl = function(r) {
  return ey[r] || (ey[r] = Cx(r));
}, xx = Vt, Rx = Zu, ty = Bh, Ax = _o, Dx = k_, Mx = Mh, Nx = rl, ry = ">", ny = "<", _f = "prototype", wf = "script", C_ = Nx("IE_PROTO"), dc = function() {
}, x_ = function(r) {
  return ny + wf + ry + r + ny + "/" + wf + ry;
}, iy = function(r) {
  r.write(x_("")), r.close();
  var i = r.parentWindow.Object;
  return r = null, i;
}, Fx = function() {
  var r = Mx("iframe"), i = "java" + wf + ":", e;
  return r.style.display = "none", Dx.appendChild(r), r.src = String(i), e = r.contentWindow.document, e.open(), e.write(x_("document.F=Object")), e.close(), e.F;
}, vs, Zs = function() {
  try {
    vs = new ActiveXObject("htmlfile");
  } catch {
  }
  Zs = typeof document < "u" ? document.domain && vs ? iy(vs) : Fx() : iy(vs);
  for (var r = ty.length; r--; ) delete Zs[_f][ty[r]];
  return Zs();
};
Ax[C_] = !0;
var Jn = Object.create || function(i, e) {
  var t;
  return i !== null ? (dc[_f] = xx(i), t = new dc(), dc[_f] = null, t[C_] = i) : t = Zs(), e === void 0 ? t : Rx.f(t, e);
}, wo = {}, Bx = I_, jx = Bh, Lx = jx.concat("length", "prototype");
wo.f = Object.getOwnPropertyNames || function(i) {
  return Bx(i, Lx);
};
var jh = {}, ay = el, zx = Gt, Wx = sa, Hx = Array, Ux = Math.max, R_ = function(r, i, e) {
  for (var t = zx(r), n = ay(i, t), a = ay(e === void 0 ? t : e, t), o = Hx(Ux(a - n, 0)), s = 0; n < a; n++, s++) Wx(o, s, r[n]);
  return o.length = s, o;
}, Vx = hn, Gx = Or, A_ = wo.f, Kx = R_, D_ = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], qx = function(r) {
  try {
    return A_(r);
  } catch {
    return Kx(D_);
  }
};
jh.f = function(i) {
  return D_ && Vx(i) === "Window" ? qx(i) : A_(Gx(i));
};
var Eo = {};
Eo.f = Object.getOwnPropertySymbols;
var Yx = Vr, ua = function(r, i, e, t) {
  return t && t.enumerable ? r[i] = e : Yx(r, i, e), r;
}, Xx = jt, Lh = function(r, i, e) {
  return Xx.f(r, i, e);
}, So = {}, Jx = ze;
So.f = Jx;
var oy = Be, Qx = it, Zx = So, eR = jt.f, Ve = function(r) {
  var i = oy.Symbol || (oy.Symbol = {});
  Qx(i, r) || eR(i, r, {
    value: Zx.f(r)
  });
}, tR = lt, rR = Pt, nR = ze, iR = ua, M_ = function() {
  var r = rR("Symbol"), i = r && r.prototype, e = i && i.valueOf, t = nR("toPrimitive");
  i && !i[t] && iR(i, t, function(n) {
    return tR(e, this);
  }, {});
}, aR = Nh, oR = Gr, sR = aR ? {}.toString : function() {
  return "[object " + oR(this) + "]";
}, uR = Nh, lR = jt.f, cR = Vr, dR = it, fR = sR, hR = ze, sy = hR("toStringTag"), Qn = function(r, i, e, t) {
  if (r) {
    var n = e ? r : r.prototype;
    dR(n, sy) || lR(n, sy, { configurable: !0, value: i }), t && !uR && cR(n, "toString", fR);
  }
}, vR = Fe, pR = Ue, uy = vR.WeakMap, yR = pR(uy) && /native code/.test(String(uy)), gR = yR, N_ = Fe, mR = bt, bR = Vr, fc = it, hc = Dh, $R = rl, _R = _o, ly = "Object already initialized", Ef = N_.TypeError, wR = N_.WeakMap, bu, Za, $u, ER = function(r) {
  return $u(r) ? Za(r) : bu(r, {});
}, SR = function(r) {
  return function(i) {
    var e;
    if (!mR(i) || (e = Za(i)).type !== r)
      throw new Ef("Incompatible receiver, " + r + " required");
    return e;
  };
};
if (gR || hc.state) {
  var pr = hc.state || (hc.state = new wR());
  pr.get = pr.get, pr.has = pr.has, pr.set = pr.set, bu = function(r, i) {
    if (pr.has(r)) throw new Ef(ly);
    return i.facade = r, pr.set(r, i), i;
  }, Za = function(r) {
    return pr.get(r) || {};
  }, $u = function(r) {
    return pr.has(r);
  };
} else {
  var hi = $R("state");
  _R[hi] = !0, bu = function(r, i) {
    if (fc(r, hi)) throw new Ef(ly);
    return i.facade = r, bR(r, hi, i), i;
  }, Za = function(r) {
    return fc(r, hi) ? r[hi] : {};
  }, $u = function(r) {
    return fc(r, hi);
  };
}
var la = {
  set: bu,
  get: Za,
  has: $u,
  enforce: ER,
  getterFor: SR
}, OR = pn, TR = Me, PR = Vu, IR = Bt, kR = Gt, CR = Qu, cy = TR([].push), ps = function(r) {
  var i = r === 1, e = r === 2, t = r === 3, n = r === 4, a = r === 6, o = r === 7, s = r === 5 || a;
  return function(u, l, c, d) {
    for (var f = IR(u), h = PR(f), v = OR(l, c), p = kR(h), y = 0, m = d || CR, b = i ? m(u, p) : e || o ? m(u, 0) : void 0, w, _; p > y; y++) if ((s || y in h) && (w = h[y], _ = v(w, y, f), r))
      if (i) b[y] = _;
      else if (_) switch (r) {
        case 3:
          return !0;
        // some
        case 5:
          return w;
        // find
        case 6:
          return y;
        // findIndex
        case 2:
          cy(b, w);
      }
      else switch (r) {
        case 4:
          return !1;
        // every
        case 7:
          cy(b, w);
      }
    return a ? -1 : t || n ? n : b;
  };
}, ca = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: ps(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: ps(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: ps(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: ps(3)
}, nl = re, Oo = Fe, zh = lt, xR = Me, zi = ut, Wi = ia, RR = Se, ot = it, AR = nt, Sf = Vt, il = Or, Wh = Ku, DR = Xn, Of = Yn, eo = Jn, F_ = tl, MR = wo, B_ = jh, NR = Eo, j_ = qn, L_ = jt, FR = Zu, z_ = Uu, dy = ua, BR = Lh, Hh = oa, jR = rl, W_ = _o, fy = Gu, LR = ze, zR = So, WR = Ve, HR = M_, UR = Qn, H_ = la, al = ca.forEach, xt = jR("hidden"), ol = "Symbol", to = "prototype", VR = H_.set, hy = H_.getterFor(ol), cr = Object[to], In = Oo.Symbol, Fa = In && In[to], GR = Oo.RangeError, KR = Oo.TypeError, vc = Oo.QObject, U_ = j_.f, kn = L_.f, V_ = B_.f, qR = z_.f, G_ = xR([].push), zr = Hh("symbols"), To = Hh("op-symbols"), YR = Hh("wks"), Tf = !vc || !vc[to] || !vc[to].findChild, K_ = function(r, i, e) {
  var t = U_(cr, i);
  t && delete cr[i], kn(r, i, e), t && r !== cr && kn(cr, i, t);
}, Pf = zi && RR(function() {
  return eo(kn({}, "a", {
    get: function() {
      return kn(this, "a", { value: 7 }).a;
    }
  })).a !== 7;
}) ? K_ : kn, pc = function(r, i) {
  var e = zr[r] = eo(Fa);
  return VR(e, {
    type: ol,
    tag: r,
    description: i
  }), zi || (e.description = i), e;
}, sl = function(i, e, t) {
  i === cr && sl(To, e, t), Sf(i);
  var n = Wh(e);
  return Sf(t), ot(zr, n) ? (t.enumerable ? (ot(i, xt) && i[xt][n] && (i[xt][n] = !1), t = eo(t, { enumerable: Of(0, !1) })) : (ot(i, xt) || kn(i, xt, Of(1, {})), i[xt][n] = !0), Pf(i, n, t)) : kn(i, n, t);
}, Uh = function(i, e) {
  Sf(i);
  var t = il(e), n = F_(t).concat(J_(t));
  return al(n, function(a) {
    (!zi || zh(q_, t, a)) && sl(i, a, t[a]);
  }), i;
}, XR = function(i, e) {
  return e === void 0 ? eo(i) : Uh(eo(i), e);
}, q_ = function(i) {
  var e = Wh(i), t = zh(qR, this, e);
  return this === cr && ot(zr, e) && !ot(To, e) ? !1 : t || !ot(this, e) || !ot(zr, e) || ot(this, xt) && this[xt][e] ? t : !0;
}, Y_ = function(i, e) {
  var t = il(i), n = Wh(e);
  if (!(t === cr && ot(zr, n) && !ot(To, n))) {
    var a = U_(t, n);
    return a && ot(zr, n) && !(ot(t, xt) && t[xt][n]) && (a.enumerable = !0), a;
  }
}, X_ = function(i) {
  var e = V_(il(i)), t = [];
  return al(e, function(n) {
    !ot(zr, n) && !ot(W_, n) && G_(t, n);
  }), t;
}, J_ = function(r) {
  var i = r === cr, e = V_(i ? To : il(r)), t = [];
  return al(e, function(n) {
    ot(zr, n) && (!i || ot(cr, n)) && G_(t, zr[n]);
  }), t;
};
Wi || (In = function() {
  if (AR(Fa, this)) throw new KR("Symbol is not a constructor");
  var i = !arguments.length || arguments[0] === void 0 ? void 0 : DR(arguments[0]), e = fy(i), t = function(n) {
    var a = this === void 0 ? Oo : this;
    a === cr && zh(t, To, n), ot(a, xt) && ot(a[xt], e) && (a[xt][e] = !1);
    var o = Of(1, n);
    try {
      Pf(a, e, o);
    } catch (s) {
      if (!(s instanceof GR)) throw s;
      K_(a, e, o);
    }
  };
  return zi && Tf && Pf(cr, e, { configurable: !0, set: t }), pc(e, i);
}, Fa = In[to], dy(Fa, "toString", function() {
  return hy(this).tag;
}), dy(In, "withoutSetter", function(r) {
  return pc(fy(r), r);
}), z_.f = q_, L_.f = sl, FR.f = Uh, j_.f = Y_, MR.f = B_.f = X_, NR.f = J_, zR.f = function(r) {
  return pc(LR(r), r);
}, zi && BR(Fa, "description", {
  configurable: !0,
  get: function() {
    return hy(this).description;
  }
}));
nl({ global: !0, wrap: !0, forced: !Wi, sham: !Wi }, {
  Symbol: In
});
al(F_(YR), function(r) {
  WR(r);
});
nl({ target: ol, stat: !0, forced: !Wi }, {
  useSetter: function() {
    Tf = !0;
  },
  useSimple: function() {
    Tf = !1;
  }
});
nl({ target: "Object", stat: !0, forced: !Wi, sham: !zi }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: XR,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: sl,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: Uh,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: Y_
});
nl({ target: "Object", stat: !0, forced: !Wi }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: X_
});
HR();
UR(In, ol);
W_[xt] = !0;
var JR = ia, Q_ = JR && !!Symbol.for && !!Symbol.keyFor, QR = re, ZR = Pt, eA = it, tA = Xn, Z_ = oa, rA = Q_, yc = Z_("string-to-symbol-registry"), nA = Z_("symbol-to-string-registry");
QR({ target: "Symbol", stat: !0, forced: !rA }, {
  for: function(r) {
    var i = tA(r);
    if (eA(yc, i)) return yc[i];
    var e = ZR("Symbol")(i);
    return yc[i] = e, nA[e] = i, e;
  }
});
var iA = re, aA = it, oA = mo, sA = aa, uA = oa, lA = Q_, vy = uA("symbol-to-string-registry");
iA({ target: "Symbol", stat: !0, forced: !lA }, {
  keyFor: function(i) {
    if (!oA(i)) throw new TypeError(sA(i) + " is not a symbol");
    if (aA(vy, i)) return vy[i];
  }
});
var cA = Me, Po = cA([].slice), dA = Me, py = yn, fA = Ue, yy = hn, hA = Xn, gy = dA([].push), vA = function(r) {
  if (fA(r)) return r;
  if (py(r)) {
    for (var i = r.length, e = [], t = 0; t < i; t++) {
      var n = r[t];
      typeof n == "string" ? gy(e, n) : (typeof n == "number" || yy(n) === "Number" || yy(n) === "String") && gy(e, hA(n));
    }
    var a = e.length, o = !0;
    return function(s, u) {
      if (o)
        return o = !1, u;
      if (py(this)) return u;
      for (var l = 0; l < a; l++) if (e[l] === s) return u;
    };
  }
}, pA = re, ew = Pt, tw = ta, yA = lt, Io = Me, rw = Se, my = Ue, by = mo, nw = Po, gA = vA, mA = ia, bA = String, tn = ew("JSON", "stringify"), ys = Io(/./.exec), $y = Io("".charAt), $A = Io("".charCodeAt), _A = Io("".replace), wA = Io(1 .toString), EA = /[\uD800-\uDFFF]/g, _y = /^[\uD800-\uDBFF]$/, wy = /^[\uDC00-\uDFFF]$/, Ey = !mA || rw(function() {
  var r = ew("Symbol")("stringify detection");
  return tn([r]) !== "[null]" || tn({ a: r }) !== "{}" || tn(Object(r)) !== "{}";
}), Sy = rw(function() {
  return tn("\uDF06\uD834") !== '"\\udf06\\ud834"' || tn("\uDEAD") !== '"\\udead"';
}), SA = function(r, i) {
  var e = nw(arguments), t = gA(i);
  if (!(!my(t) && (r === void 0 || by(r))))
    return e[1] = function(n, a) {
      if (my(t) && (a = yA(t, this, bA(n), a)), !by(a)) return a;
    }, tw(tn, null, e);
}, OA = function(r, i, e) {
  var t = $y(e, i - 1), n = $y(e, i + 1);
  return ys(_y, r) && !ys(wy, n) || ys(wy, r) && !ys(_y, t) ? "\\u" + wA($A(r, 0), 16) : r;
};
tn && pA({ target: "JSON", stat: !0, forced: Ey || Sy }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  stringify: function(i, e, t) {
    var n = nw(arguments), a = tw(Ey ? SA : tn, null, n);
    return Sy && typeof a == "string" ? _A(a, EA, OA) : a;
  }
});
var TA = re, PA = ia, IA = Se, iw = Eo, kA = Bt, CA = !PA || IA(function() {
  iw.f(1);
});
TA({ target: "Object", stat: !0, forced: CA }, {
  getOwnPropertySymbols: function(i) {
    var e = iw.f;
    return e ? e(kA(i)) : [];
  }
});
var xA = Ve;
xA("asyncIterator");
var RA = Ve;
RA("hasInstance");
var AA = Ve;
AA("isConcatSpreadable");
var DA = Ve;
DA("iterator");
var MA = Ve;
MA("match");
var NA = Ve;
NA("matchAll");
var FA = Ve;
FA("replace");
var BA = Ve;
BA("search");
var jA = Ve;
jA("species");
var LA = Ve;
LA("split");
var zA = Ve, WA = M_;
zA("toPrimitive");
WA();
var HA = Pt, UA = Ve, VA = Qn;
UA("toStringTag");
VA(HA("Symbol"), "Symbol");
var GA = Ve;
GA("unscopables");
var KA = Fe, qA = Qn;
qA(KA.JSON, "JSON", !0);
var YA = Be, XA = YA.Symbol, da = {}, If = ut, JA = it, aw = Function.prototype, QA = If && Object.getOwnPropertyDescriptor, ow = JA(aw, "name"), ZA = ow && (function() {
}).name === "something";
ow && (!If || If && QA(aw, "name").configurable);
var eD = {
  PROPER: ZA
}, tD = Se, sw = !tD(function() {
  function r() {
  }
  return r.prototype.constructor = null, Object.getPrototypeOf(new r()) !== r.prototype;
}), rD = it, nD = Ue, iD = Bt, aD = rl, oD = sw, Oy = aD("IE_PROTO"), kf = Object, sD = kf.prototype, ul = oD ? kf.getPrototypeOf : function(r) {
  var i = iD(r);
  if (rD(i, Oy)) return i[Oy];
  var e = i.constructor;
  return nD(e) && i instanceof e ? e.prototype : i instanceof kf ? sD : null;
}, uD = Se, lD = Ue, cD = bt, dD = Jn, Ty = ul, fD = ua, hD = ze, Cf = hD("iterator"), uw = !1, Rr, gc, mc;
[].keys && (mc = [].keys(), "next" in mc ? (gc = Ty(Ty(mc)), gc !== Object.prototype && (Rr = gc)) : uw = !0);
var vD = !cD(Rr) || uD(function() {
  var r = {};
  return Rr[Cf].call(r) !== r;
});
vD ? Rr = {} : Rr = dD(Rr);
lD(Rr[Cf]) || fD(Rr, Cf, function() {
  return this;
});
var lw = {
  IteratorPrototype: Rr,
  BUGGY_SAFARI_ITERATORS: uw
}, pD = lw.IteratorPrototype, yD = Jn, gD = Yn, mD = Qn, bD = da, $D = function() {
  return this;
}, _D = function(r, i, e, t) {
  var n = i + " Iterator";
  return r.prototype = yD(pD, { next: gD(+!t, e) }), mD(r, n, !1, !0), bD[n] = $D, r;
}, wD = Me, ED = Ft, SD = function(r, i, e) {
  try {
    return wD(ED(Object.getOwnPropertyDescriptor(r, i)[e]));
  } catch {
  }
}, OD = Ue, TD = String, PD = TypeError, ID = function(r) {
  if (typeof r == "object" || OD(r)) return r;
  throw new PD("Can't set " + TD(r) + " as a prototype");
}, kD = SD, CD = Vt, xD = ID, cw = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
  var r = !1, i = {}, e;
  try {
    e = kD(Object.prototype, "__proto__", "set"), e(i, []), r = i instanceof Array;
  } catch {
  }
  return function(n, a) {
    return CD(n), xD(a), r ? e(n, a) : n.__proto__ = a, n;
  };
})() : void 0), RD = re, AD = lt, DD = eD, MD = _D, ND = ul, FD = Qn, Py = ua, BD = ze, Iy = da, jD = lw, LD = DD.PROPER, gs = jD.BUGGY_SAFARI_ITERATORS, bc = BD("iterator"), ky = "keys", ms = "values", Cy = "entries", zD = function() {
  return this;
}, Vh = function(r, i, e, t, n, a, o) {
  MD(e, i, t);
  var s = function(m) {
    if (m === n && f) return f;
    if (!gs && m && m in c) return c[m];
    switch (m) {
      case ky:
        return function() {
          return new e(this, m);
        };
      case ms:
        return function() {
          return new e(this, m);
        };
      case Cy:
        return function() {
          return new e(this, m);
        };
    }
    return function() {
      return new e(this);
    };
  }, u = i + " Iterator", l = !1, c = r.prototype, d = c[bc] || c["@@iterator"] || n && c[n], f = !gs && d || s(n), h = i === "Array" && c.entries || d, v, p, y;
  if (h && (v = ND(h.call(new r())), v !== Object.prototype && v.next && (FD(v, u, !0, !0), Iy[u] = zD)), LD && n === ms && d && d.name !== ms && (l = !0, f = function() {
    return AD(d, this);
  }), n)
    if (p = {
      values: s(ms),
      keys: a ? f : s(ky),
      entries: s(Cy)
    }, o) for (y in p)
      (gs || l || !(y in c)) && Py(c, y, p[y]);
    else RD({ target: i, proto: !0, forced: gs || l }, p);
  return o && c[bc] !== f && Py(c, bc, f, {}), Iy[i] = f, p;
}, Gh = function(r, i) {
  return { value: r, done: i };
}, WD = Or, xy = da, dw = la;
jt.f;
var HD = Vh, bs = Gh, fw = "Array Iterator", UD = dw.set, VD = dw.getterFor(fw);
HD(Array, "Array", function(r, i) {
  UD(this, {
    type: fw,
    target: WD(r),
    // target
    index: 0,
    // next index
    kind: i
    // kind
  });
}, function() {
  var r = VD(this), i = r.target, e = r.index++;
  if (!i || e >= i.length)
    return r.target = void 0, bs(void 0, !0);
  switch (r.kind) {
    case "keys":
      return bs(e, !1);
    case "values":
      return bs(i[e], !1);
  }
  return bs([e, i[e]], !1);
}, "values");
xy.Arguments = xy.Array;
var GD = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
}, KD = GD, qD = Fe, YD = Gr, XD = Vr, Ry = da, JD = ze, Ay = JD("toStringTag");
for (var $c in KD) {
  var Dy = qD[$c], _c = Dy && Dy.prototype;
  _c && YD(_c) !== Ay && XD(_c, Ay, $c), Ry[$c] = Ry.Array;
}
var QD = XA, hw = QD, ZD = ze, eM = jt.f, My = ZD("metadata"), Ny = Function.prototype;
Ny[My] === void 0 && eM(Ny, My, {
  value: null
});
var tM = Ve;
tM("asyncDispose");
var rM = Ve;
rM("dispose");
var nM = Ve;
nM("metadata");
var iM = hw, aM = iM, oM = Pt, sM = Me, Kh = oM("Symbol"), uM = Kh.keyFor, lM = sM(Kh.prototype.valueOf), vw = Kh.isRegisteredSymbol || function(i) {
  try {
    return uM(lM(i)) !== void 0;
  } catch {
    return !1;
  }
}, cM = re, dM = vw;
cM({ target: "Symbol", stat: !0 }, {
  isRegisteredSymbol: dM
});
var fM = oa, pw = Pt, hM = Me, vM = mo, pM = ze, _u = pw("Symbol"), Fy = _u.isWellKnownSymbol, yw = pw("Object", "getOwnPropertyNames"), yM = hM(_u.prototype.valueOf), By = fM("wks");
for (var wc = 0, jy = yw(_u), gM = jy.length; wc < gM; wc++)
  try {
    var Ly = jy[wc];
    vM(_u[Ly]) && pM(Ly);
  } catch {
  }
var gw = function(i) {
  if (Fy && Fy(i)) return !0;
  try {
    for (var e = yM(i), t = 0, n = yw(By), a = n.length; t < a; t++)
      if (By[n[t]] == e) return !0;
  } catch {
  }
  return !1;
}, mM = re, bM = gw;
mM({ target: "Symbol", stat: !0, forced: !0 }, {
  isWellKnownSymbol: bM
});
var $M = Ve;
$M("matcher");
var _M = Ve;
_M("observable");
var wM = re, EM = vw;
wM({ target: "Symbol", stat: !0 }, {
  isRegistered: EM
});
var SM = re, OM = gw;
SM({ target: "Symbol", stat: !0, forced: !0 }, {
  isWellKnown: OM
});
var TM = Ve;
TM("metadataKey");
var PM = Ve;
PM("patternMatch");
var IM = Ve;
IM("replaceAll");
var kM = aM, CM = kM, qh = CM, Oi = /* @__PURE__ */ se(qh), Yh = Me, xM = Yu, RM = Xn, AM = Rh, DM = Yh("".charAt), zy = Yh("".charCodeAt), MM = Yh("".slice), NM = function(r) {
  return function(i, e) {
    var t = RM(AM(i)), n = xM(e), a = t.length, o, s;
    return n < 0 || n >= a ? r ? "" : void 0 : (o = zy(t, n), o < 55296 || o > 56319 || n + 1 === a || (s = zy(t, n + 1)) < 56320 || s > 57343 ? r ? DM(t, n) : o : r ? MM(t, n, n + 2) : (o - 55296 << 10) + (s - 56320) + 65536);
  };
}, FM = {
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: NM(!0)
}, BM = FM.charAt, jM = Xn, mw = la, LM = Vh, Wy = Gh, bw = "String Iterator", zM = mw.set, WM = mw.getterFor(bw);
LM(String, "String", function(r) {
  zM(this, {
    type: bw,
    string: jM(r),
    index: 0
  });
}, function() {
  var i = WM(this), e = i.string, t = i.index, n;
  return t >= e.length ? Wy(void 0, !0) : (n = BM(e, t), i.index += n.length, Wy(n, !1));
});
var HM = So, UM = HM.f("iterator"), VM = UM, $w = VM, GM = $w, KM = GM, qM = KM, YM = qM, _w = YM, XM = /* @__PURE__ */ se(_w);
function Hi(r) {
  "@babel/helpers - typeof";
  return Hi = typeof Oi == "function" && typeof XM == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Oi == "function" && i.constructor === Oi && i !== Oi.prototype ? "symbol" : typeof i;
  }, Hi(r);
}
var JM = So, QM = JM.f("toPrimitive"), ZM = QM, eN = ZM, tN = eN, rN = tN, nN = rN, iN = nN, aN = iN, oN = /* @__PURE__ */ se(aN);
function sN(r, i) {
  if (Hi(r) !== "object" || r === null) return r;
  var e = r[oN];
  if (e !== void 0) {
    var t = e.call(r, i);
    if (Hi(t) !== "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(r);
}
function ww(r) {
  var i = sN(r, "string");
  return Hi(i) === "symbol" ? i : String(i);
}
function Hy(r, i) {
  for (var e = 0; e < i.length; e++) {
    var t = i[e];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), qu(r, ww(t.key), t);
  }
}
function ll(r, i, e) {
  return i && Hy(r.prototype, i), e && Hy(r, e), qu(r, "prototype", {
    writable: !1
  }), r;
}
function rn(r, i, e) {
  return i = ww(i), i in r ? qu(r, i, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[i] = e, r;
}
var Ew = Me, uN = Ft, lN = bt, cN = it, Uy = Po, dN = go, Sw = Function, fN = Ew([].concat), hN = Ew([].join), Ec = {}, vN = function(r, i, e) {
  if (!cN(Ec, i)) {
    for (var t = [], n = 0; n < i; n++) t[n] = "a[" + n + "]";
    Ec[i] = Sw("C,a", "return new C(" + hN(t, ",") + ")");
  }
  return Ec[i](r, e);
}, Ow = dN ? Sw.bind : function(i) {
  var e = uN(this), t = e.prototype, n = Uy(arguments, 1), a = function() {
    var s = fN(n, Uy(arguments));
    return this instanceof a ? vN(e, s.length, s) : e.apply(i, s);
  };
  return lN(t) && (a.prototype = t), a;
}, pN = re, Vy = Ow;
pN({ target: "Function", proto: !0, forced: Function.bind !== Vy }, {
  bind: Vy
});
var yN = Fe, gN = Be, $t = function(r, i) {
  var e = gN[r + "Prototype"], t = e && e[i];
  if (t) return t;
  var n = yN[r], a = n && n.prototype;
  return a && a[i];
}, mN = $t, bN = mN("Function", "bind"), $N = nt, _N = bN, Sc = Function.prototype, wN = function(r) {
  var i = r.bind;
  return r === Sc || $N(Sc, r) && i === Sc.bind ? _N : i;
}, EN = wN, Tw = EN, SN = Tw, Pw = /* @__PURE__ */ se(SN), ON = Ft, TN = Bt, PN = Vu, IN = Gt, kN = TypeError, CN = function(r) {
  return function(i, e, t, n) {
    ON(e);
    var a = TN(i), o = PN(a), s = IN(a), u = r ? s - 1 : 0, l = r ? -1 : 1;
    if (t < 2) for (; ; ) {
      if (u in o) {
        n = o[u], u += l;
        break;
      }
      if (u += l, r ? u < 0 : s <= u)
        throw new kN("Reduce of empty array with no initial value");
    }
    for (; r ? u >= 0 : s > u; u += l) u in o && (n = e(n, o[u], u, a));
    return n;
  };
}, xN = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: CN(!1)
}, RN = Se, cl = function(r, i) {
  var e = [][r];
  return !!e && RN(function() {
    e.call(null, i || function() {
      return 1;
    }, 1);
  });
}, AN = Fe, DN = hn, ko = DN(AN.process) === "process", MN = re, NN = xN.left, FN = cl, Gy = na, BN = ko, jN = !BN && Gy > 79 && Gy < 83, LN = jN || !FN("reduce");
MN({ target: "Array", proto: !0, forced: LN }, {
  reduce: function(i) {
    var e = arguments.length;
    return NN(this, i, e, e > 1 ? arguments[1] : void 0);
  }
});
var zN = $t, WN = zN("Array", "reduce"), HN = nt, UN = WN, Oc = Array.prototype, VN = function(r) {
  var i = r.reduce;
  return r === Oc || HN(Oc, r) && i === Oc.reduce ? UN : i;
}, GN = VN, KN = GN, qN = KN, YN = /* @__PURE__ */ se(qN), XN = re, JN = ca.filter, QN = $o, ZN = QN("filter");
XN({ target: "Array", proto: !0, forced: !ZN }, {
  filter: function(i) {
    return JN(this, i, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var e2 = $t, t2 = e2("Array", "filter"), r2 = nt, n2 = t2, Tc = Array.prototype, i2 = function(r) {
  var i = r.filter;
  return r === Tc || r2(Tc, r) && i === Tc.filter ? n2 : i;
}, a2 = i2, o2 = a2, s2 = o2, Ti = /* @__PURE__ */ se(s2), u2 = re, l2 = ca.map, c2 = $o, d2 = c2("map");
u2({ target: "Array", proto: !0, forced: !d2 }, {
  map: function(i) {
    return l2(this, i, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var f2 = $t, h2 = f2("Array", "map"), v2 = nt, p2 = h2, Pc = Array.prototype, y2 = function(r) {
  var i = r.map;
  return r === Pc || v2(Pc, r) && i === Pc.map ? p2 : i;
}, g2 = y2, m2 = g2, b2 = m2, sr = /* @__PURE__ */ se(b2), $2 = yn, _2 = Gt, w2 = Xu, E2 = pn, Iw = function(r, i, e, t, n, a, o, s) {
  for (var u = n, l = 0, c = o ? E2(o, s) : !1, d, f; l < t; )
    l in e && (d = c ? c(e[l], l, i) : e[l], a > 0 && $2(d) ? (f = _2(d), u = Iw(r, i, d, f, u, a - 1) - 1) : (w2(u + 1), r[u] = d), u++), l++;
  return u;
}, S2 = Iw, O2 = re, T2 = S2, P2 = Ft, I2 = Bt, k2 = Gt, C2 = Qu;
O2({ target: "Array", proto: !0 }, {
  flatMap: function(i) {
    var e = I2(this), t = k2(e), n;
    return P2(i), n = C2(e, 0), n.length = T2(n, e, e, t, 0, 1, i, arguments.length > 1 ? arguments[1] : void 0), n;
  }
});
var x2 = $t;
x2("Array", "flatMap");
var R2 = lt, Ky = Vt, A2 = Ah, kw = function(r, i, e) {
  var t, n;
  Ky(r);
  try {
    if (t = A2(r, "return"), !t) {
      if (i === "throw") throw e;
      return e;
    }
    t = R2(t, r);
  } catch (a) {
    n = !0, t = a;
  }
  if (i === "throw") throw e;
  if (n) throw t;
  return Ky(t), e;
}, D2 = Vt, M2 = kw, N2 = function(r, i, e, t) {
  try {
    return t ? i(D2(e)[0], e[1]) : i(e);
  } catch (n) {
    M2(r, "throw", n);
  }
}, F2 = ze, B2 = da, j2 = F2("iterator"), L2 = Array.prototype, Cw = function(r) {
  return r !== void 0 && (B2.Array === r || L2[j2] === r);
}, z2 = Gr, qy = Ah, W2 = ra, H2 = da, U2 = ze, V2 = U2("iterator"), dl = function(r) {
  if (!W2(r)) return qy(r, V2) || qy(r, "@@iterator") || H2[z2(r)];
}, G2 = lt, K2 = Ft, q2 = Vt, Y2 = aa, X2 = dl, J2 = TypeError, Xh = function(r, i) {
  var e = arguments.length < 2 ? X2(r) : i;
  if (K2(e)) return q2(G2(e, r));
  throw new J2(Y2(r) + " is not iterable");
}, Q2 = pn, Z2 = lt, eF = Bt, tF = N2, rF = Cw, nF = Ju, iF = Gt, Yy = sa, aF = Xh, oF = dl, Xy = Array, sF = function(i) {
  var e = eF(i), t = nF(this), n = arguments.length, a = n > 1 ? arguments[1] : void 0, o = a !== void 0;
  o && (a = Q2(a, n > 2 ? arguments[2] : void 0));
  var s = oF(e), u = 0, l, c, d, f, h, v;
  if (s && !(this === Xy && rF(s)))
    for (f = aF(e, s), h = f.next, c = t ? new this() : []; !(d = Z2(h, f)).done; u++)
      v = o ? tF(f, a, [d.value, u], !0) : d.value, Yy(c, u, v);
  else
    for (l = iF(e), c = t ? new this(l) : Xy(l); l > u; u++)
      v = o ? a(e[u], u) : e[u], Yy(c, u, v);
  return c.length = u, c;
}, uF = ze, xw = uF("iterator"), Rw = !1;
try {
  var lF = 0, Jy = {
    next: function() {
      return { done: !!lF++ };
    },
    return: function() {
      Rw = !0;
    }
  };
  Jy[xw] = function() {
    return this;
  }, Array.from(Jy, function() {
    throw 2;
  });
} catch {
}
var Aw = function(r, i) {
  try {
    if (!i && !Rw) return !1;
  } catch {
    return !1;
  }
  var e = !1;
  try {
    var t = {};
    t[xw] = function() {
      return {
        next: function() {
          return { done: e = !0 };
        }
      };
    }, r(t);
  } catch {
  }
  return e;
}, cF = re, dF = sF, fF = Aw, hF = !fF(function(r) {
  Array.from(r);
});
cF({ target: "Array", stat: !0, forced: hF }, {
  from: dF
});
var vF = Be, pF = vF.Array.from, yF = pF, Dw = yF, gF = Dw, Jh = /* @__PURE__ */ se(gF), mF = dl, bF = mF, $F = bF, _F = $F, wF = _F, EF = wF, SF = EF, OF = SF, Mw = OF, Nw = /* @__PURE__ */ se(Mw), TF = Mw, Qh = /* @__PURE__ */ se(TF), PF = re, IF = yn;
PF({ target: "Array", stat: !0 }, {
  isArray: IF
});
var kF = Be, CF = kF.Array.isArray, xF = CF, Fw = xF, RF = Fw, AF = RF, DF = AF, MF = DF, NF = MF, Bw = /* @__PURE__ */ se(NF);
function FF(r) {
  if (Bw(r)) return r;
}
var BF = ut, jF = yn, LF = TypeError, zF = Object.getOwnPropertyDescriptor, WF = BF && !(function() {
  if (this !== void 0) return !0;
  try {
    Object.defineProperty([], "length", { writable: !1 }).length = 1;
  } catch (r) {
    return r instanceof TypeError;
  }
})(), jw = WF ? function(r, i) {
  if (jF(r) && !zF(r, "length").writable)
    throw new LF("Cannot set read only .length");
  return r.length = i;
} : function(r, i) {
  return r.length = i;
}, HF = re, UF = Bt, VF = Gt, GF = jw, KF = Xu, qF = Se, YF = qF(function() {
  return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
}), XF = function() {
  try {
    Object.defineProperty([], "length", { writable: !1 }).push();
  } catch (r) {
    return r instanceof TypeError;
  }
}, JF = YF || !XF();
HF({ target: "Array", proto: !0, forced: JF }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function(i) {
    var e = UF(this), t = VF(e), n = arguments.length;
    KF(t + n);
    for (var a = 0; a < n; a++)
      e[t] = arguments[a], t++;
    return GF(e, t), t;
  }
});
var QF = $t, ZF = QF("Array", "push"), eB = nt, tB = ZF, Ic = Array.prototype, rB = function(r) {
  var i = r.push;
  return r === Ic || eB(Ic, r) && i === Ic.push ? tB : i;
}, nB = rB, iB = nB, aB = iB, oB = aB, sB = oB, uB = sB, Lw = uB, lB = /* @__PURE__ */ se(Lw);
function cB(r, i) {
  var e = r == null ? null : typeof Oi < "u" && Nw(r) || r["@@iterator"];
  if (e != null) {
    var t, n, a, o, s = [], u = !0, l = !1;
    try {
      if (a = (e = e.call(r)).next, i === 0) {
        if (Object(e) !== e) return;
        u = !1;
      } else for (; !(u = (t = a.call(e)).done) && (lB(s).call(s, t.value), s.length !== i); u = !0) ;
    } catch (c) {
      l = !0, n = c;
    } finally {
      try {
        if (!u && e.return != null && (o = e.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw n;
      }
    }
    return s;
  }
}
var dB = re, Qy = yn, fB = Ju, hB = bt, Zy = el, vB = Gt, pB = Or, yB = sa, gB = ze, mB = $o, bB = Po, $B = mB("slice"), _B = gB("species"), kc = Array, wB = Math.max;
dB({ target: "Array", proto: !0, forced: !$B }, {
  slice: function(i, e) {
    var t = pB(this), n = vB(t), a = Zy(i, n), o = Zy(e === void 0 ? n : e, n), s, u, l;
    if (Qy(t) && (s = t.constructor, fB(s) && (s === kc || Qy(s.prototype)) ? s = void 0 : hB(s) && (s = s[_B], s === null && (s = void 0)), s === kc || s === void 0))
      return bB(t, a, o);
    for (u = new (s === void 0 ? kc : s)(wB(o - a, 0)), l = 0; a < o; a++, l++) a in t && yB(u, l, t[a]);
    return u.length = l, u;
  }
});
var EB = $t, SB = EB("Array", "slice"), OB = nt, TB = SB, Cc = Array.prototype, PB = function(r) {
  var i = r.slice;
  return r === Cc || OB(Cc, r) && i === Cc.slice ? TB : i;
}, IB = PB, zw = IB, kB = zw, CB = kB, xB = CB, RB = xB, Ww = RB, AB = /* @__PURE__ */ se(Ww), DB = Dw, MB = DB, NB = MB, FB = NB, BB = FB, Hw = /* @__PURE__ */ se(BB);
function xf(r, i) {
  (i == null || i > r.length) && (i = r.length);
  for (var e = 0, t = new Array(i); e < i; e++) t[e] = r[e];
  return t;
}
function Uw(r, i) {
  var e;
  if (r) {
    if (typeof r == "string") return xf(r, i);
    var t = AB(e = Object.prototype.toString.call(r)).call(e, 8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Hw(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return xf(r, i);
  }
}
function jB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function It(r, i) {
  return FF(r) || cB(r, i) || Uw(r, i) || jB();
}
function LB(r) {
  if (Bw(r)) return xf(r);
}
function zB(r) {
  if (typeof Oi < "u" && Nw(r) != null || r["@@iterator"] != null) return Hw(r);
}
function WB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rt(r) {
  return LB(r) || zB(r) || Uw(r) || WB();
}
var HB = hw, fl = /* @__PURE__ */ se(HB), UB = $t, VB = UB("Array", "concat"), GB = nt, KB = VB, xc = Array.prototype, qB = function(r) {
  var i = r.concat;
  return r === xc || GB(xc, r) && i === xc.concat ? KB : i;
}, YB = qB, XB = YB, JB = XB, hl = /* @__PURE__ */ se(JB), QB = zw, vl = /* @__PURE__ */ se(QB), ZB = Pt, ej = Me, tj = wo, rj = Eo, nj = Vt, ij = ej([].concat), Zh = ZB("Reflect", "ownKeys") || function(i) {
  var e = tj.f(nj(i)), t = rj.f;
  return t ? ij(e, t(i)) : e;
}, aj = re, oj = Zh;
aj({ target: "Reflect", stat: !0 }, {
  ownKeys: oj
});
var sj = Be, uj = sj.Reflect.ownKeys, lj = uj, cj = lj, dj = cj, fj = /* @__PURE__ */ se(dj), hj = Fw, Ht = /* @__PURE__ */ se(hj), vj = re, pj = Bt, Vw = tl, yj = Se, gj = yj(function() {
  Vw(1);
});
vj({ target: "Object", stat: !0, forced: gj }, {
  keys: function(i) {
    return Vw(pj(i));
  }
});
var mj = Be, bj = mj.Object.keys, $j = bj, _j = $j, wj = _j, ev = /* @__PURE__ */ se(wj), Ej = ca.forEach, Sj = cl, Oj = Sj("forEach"), Tj = Oj ? [].forEach : function(i) {
  return Ej(this, i, arguments.length > 1 ? arguments[1] : void 0);
}, Pj = re, eg = Tj;
Pj({ target: "Array", proto: !0, forced: [].forEach !== eg }, {
  forEach: eg
});
var Ij = $t, kj = Ij("Array", "forEach"), Cj = kj, xj = Cj, Rj = Gr, Aj = it, Dj = nt, Mj = xj, Rc = Array.prototype, Nj = {
  DOMTokenList: !0,
  NodeList: !0
}, Gw = function(r) {
  var i = r.forEach;
  return r === Rc || Dj(Rc, r) && i === Rc.forEach || Aj(Nj, Rj(r)) ? Mj : i;
}, Fj = Gw, Bn = /* @__PURE__ */ se(Fj), Bj = re, jj = Me, Lj = yn, zj = jj([].reverse), tg = [1, 2];
Bj({ target: "Array", proto: !0, forced: String(tg) === String(tg.reverse()) }, {
  reverse: function() {
    return Lj(this) && (this.length = this.length), zj(this);
  }
});
var Wj = $t, Hj = Wj("Array", "reverse"), Uj = nt, Vj = Hj, Ac = Array.prototype, Gj = function(r) {
  var i = r.reverse;
  return r === Ac || Uj(Ac, r) && i === Ac.reverse ? Vj : i;
}, Kj = Gj, Kw = Kj, qj = Kw, Yj = /* @__PURE__ */ se(qj), rg = aa, Xj = TypeError, qw = function(r, i) {
  if (!delete r[i]) throw new Xj("Cannot delete property " + rg(i) + " of " + rg(r));
}, Jj = re, Qj = Bt, Zj = el, eL = Yu, tL = Gt, rL = jw, nL = Xu, iL = Qu, aL = sa, Dc = qw, oL = $o, sL = oL("splice"), uL = Math.max, lL = Math.min;
Jj({ target: "Array", proto: !0, forced: !sL }, {
  splice: function(i, e) {
    var t = Qj(this), n = tL(t), a = Zj(i, n), o = arguments.length, s, u, l, c, d, f;
    for (o === 0 ? s = u = 0 : o === 1 ? (s = 0, u = n - a) : (s = o - 2, u = lL(uL(eL(e), 0), n - a)), nL(n + s - u), l = iL(t, u), c = 0; c < u; c++)
      d = a + c, d in t && aL(l, c, t[d]);
    if (l.length = u, s < u) {
      for (c = a; c < n - u; c++)
        d = c + u, f = c + s, d in t ? t[f] = t[d] : Dc(t, f);
      for (c = n; c > n - u + s; c--) Dc(t, c - 1);
    } else if (s > u)
      for (c = n - u; c > a; c--)
        d = c + u - 1, f = c + s - 1, d in t ? t[f] = t[d] : Dc(t, f);
    for (c = 0; c < s; c++)
      t[c + a] = arguments[c + 2];
    return rL(t, n - u + s), l;
  }
});
var cL = $t, dL = cL("Array", "splice"), fL = nt, hL = dL, Mc = Array.prototype, vL = function(r) {
  var i = r.splice;
  return r === Mc || fL(Mc, r) && i === Mc.splice ? hL : i;
}, pL = vL, yL = pL, gL = yL, Yw = /* @__PURE__ */ se(gL), ng = ut, mL = Me, bL = lt, $L = Se, Nc = tl, _L = Eo, wL = Uu, EL = Bt, SL = Vu, vi = Object.assign, ig = Object.defineProperty, OL = mL([].concat), TL = !vi || $L(function() {
  if (ng && vi({ b: 1 }, vi(ig({}, "a", {
    enumerable: !0,
    get: function() {
      ig(this, "b", {
        value: 3,
        enumerable: !1
      });
    }
  }), { b: 2 })).b !== 1) return !0;
  var r = {}, i = {}, e = Symbol("assign detection"), t = "abcdefghijklmnopqrst";
  return r[e] = 7, t.split("").forEach(function(n) {
    i[n] = n;
  }), vi({}, r)[e] !== 7 || Nc(vi({}, i)).join("") !== t;
}) ? function(i, e) {
  for (var t = EL(i), n = arguments.length, a = 1, o = _L.f, s = wL.f; n > a; )
    for (var u = SL(arguments[a++]), l = o ? OL(Nc(u), o(u)) : Nc(u), c = l.length, d = 0, f; c > d; )
      f = l[d++], (!ng || bL(s, u, f)) && (t[f] = u[f]);
  return t;
} : vi, PL = re, ag = TL;
PL({ target: "Object", stat: !0, forced: Object.assign !== ag }, {
  assign: ag
});
var IL = Be, kL = IL.Object.assign, CL = kL, xL = CL, RL = xL, AL = /* @__PURE__ */ se(RL), DL = re, ML = Se, NL = Bt, Xw = ul, FL = sw, BL = ML(function() {
  Xw(1);
});
DL({ target: "Object", stat: !0, forced: BL, sham: !FL }, {
  getPrototypeOf: function(i) {
    return Xw(NL(i));
  }
});
var jL = Be, LL = jL.Object.getPrototypeOf, zL = LL, WL = zL, HL = re, UL = ut, VL = Jn;
HL({ target: "Object", stat: !0, sham: !UL }, {
  create: VL
});
var GL = Be, KL = GL.Object, qL = function(i, e) {
  return KL.create(i, e);
}, YL = qL, Jw = YL, XL = Jw, JL = /* @__PURE__ */ se(XL), Rf = Be, QL = ta;
Rf.JSON || (Rf.JSON = { stringify: JSON.stringify });
var ZL = function(i, e, t) {
  return QL(Rf.JSON.stringify, null, arguments);
}, ez = ZL, tz = ez, rz = tz, nz = /* @__PURE__ */ se(rz), iz = typeof Bun == "function" && Bun && typeof Bun.version == "string", az = TypeError, Qw = function(r, i) {
  if (r < i) throw new az("Not enough arguments");
  return r;
}, Zw = Fe, oz = ta, sz = Ue, uz = iz, lz = vn, cz = Po, dz = Qw, fz = Zw.Function, hz = /MSIE .\./.test(lz) || uz && (function() {
  var r = Zw.Bun.version.split(".");
  return r.length < 3 || r[0] === "0" && (r[1] < 3 || r[1] === "3" && r[2] === "0");
})(), e0 = function(r, i) {
  var e = i ? 2 : 1;
  return hz ? function(t, n) {
    var a = dz(arguments.length, 1) > e, o = sz(t) ? t : fz(t), s = a ? cz(arguments, e) : [], u = a ? function() {
      oz(o, this, s);
    } : o;
    return i ? r(u, n) : r(u);
  } : r;
}, vz = re, t0 = Fe, pz = e0, og = pz(t0.setInterval, !0);
vz({ global: !0, bind: !0, forced: t0.setInterval !== og }, {
  setInterval: og
});
var yz = re, r0 = Fe, gz = e0, sg = gz(r0.setTimeout, !0);
yz({ global: !0, bind: !0, forced: r0.setTimeout !== sg }, {
  setTimeout: sg
});
var mz = Be, bz = mz.setTimeout, $z = bz, _z = /* @__PURE__ */ se($z), n0 = { exports: {} };
(function(r) {
  function i(t) {
    if (t)
      return e(t);
    this._callbacks = /* @__PURE__ */ new Map();
  }
  function e(t) {
    return Object.assign(t, i.prototype), t._callbacks = /* @__PURE__ */ new Map(), t;
  }
  i.prototype.on = function(t, n) {
    const a = this._callbacks.get(t) ?? [];
    return a.push(n), this._callbacks.set(t, a), this;
  }, i.prototype.once = function(t, n) {
    const a = (...o) => {
      this.off(t, a), n.apply(this, o);
    };
    return a.fn = n, this.on(t, a), this;
  }, i.prototype.off = function(t, n) {
    if (t === void 0 && n === void 0)
      return this._callbacks.clear(), this;
    if (n === void 0)
      return this._callbacks.delete(t), this;
    const a = this._callbacks.get(t);
    if (a) {
      for (const [o, s] of a.entries())
        if (s === n || s.fn === n) {
          a.splice(o, 1);
          break;
        }
      a.length === 0 ? this._callbacks.delete(t) : this._callbacks.set(t, a);
    }
    return this;
  }, i.prototype.emit = function(t, ...n) {
    const a = this._callbacks.get(t);
    if (a) {
      const o = [...a];
      for (const s of o)
        s.apply(this, n);
    }
    return this;
  }, i.prototype.listeners = function(t) {
    return this._callbacks.get(t) ?? [];
  }, i.prototype.listenerCount = function(t) {
    if (t)
      return this.listeners(t).length;
    let n = 0;
    for (const a of this._callbacks.values())
      n += a.length;
    return n;
  }, i.prototype.hasListeners = function(t) {
    return this.listenerCount(t) > 0;
  }, i.prototype.addEventListener = i.prototype.on, i.prototype.removeListener = i.prototype.off, i.prototype.removeEventListener = i.prototype.off, i.prototype.removeAllListeners = i.prototype.off, r.exports = i;
})(n0);
var wz = n0.exports, Ez = /* @__PURE__ */ se(wz);
/*! Hammer.JS - v2.0.17-rc - 2019-12-16
 * http://naver.github.io/egjs
 *
 * Forked By Naver egjs
 * Copyright (c) hammerjs
 * Licensed under the MIT license */
function fr() {
  return fr = Object.assign || function(r) {
    for (var i = 1; i < arguments.length; i++) {
      var e = arguments[i];
      for (var t in e)
        Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
    }
    return r;
  }, fr.apply(this, arguments);
}
function rr(r, i) {
  r.prototype = Object.create(i.prototype), r.prototype.constructor = r, r.__proto__ = i;
}
function $s(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
var Af;
typeof Object.assign != "function" ? Af = function(i) {
  if (i == null)
    throw new TypeError("Cannot convert undefined or null to object");
  for (var e = Object(i), t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    if (n != null)
      for (var a in n)
        n.hasOwnProperty(a) && (e[a] = n[a]);
  }
  return e;
} : Af = Object.assign;
var jn = Af, ug = ["", "webkit", "Moz", "MS", "ms", "o"], Sz = typeof document > "u" ? {
  style: {}
} : document.createElement("div"), Oz = "function", Pi = Math.round, Ln = Math.abs, tv = Date.now;
function pl(r, i) {
  for (var e, t, n = i[0].toUpperCase() + i.slice(1), a = 0; a < ug.length; ) {
    if (e = ug[a], t = e ? e + n : i, t in r)
      return t;
    a++;
  }
}
var Ar;
typeof window > "u" ? Ar = {} : Ar = window;
var i0 = pl(Sz.style, "touchAction"), a0 = i0 !== void 0;
function Tz() {
  if (!a0)
    return !1;
  var r = {}, i = Ar.CSS && Ar.CSS.supports;
  return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(e) {
    return r[e] = i ? Ar.CSS.supports("touch-action", e) : !0;
  }), r;
}
var o0 = "compute", s0 = "auto", Df = "manipulation", Cn = "none", ro = "pan-x", no = "pan-y", _s = Tz(), Pz = /mobile|tablet|ip(ad|hone|od)|android/i, u0 = "ontouchstart" in Ar, Iz = pl(Ar, "PointerEvent") !== void 0, kz = u0 && Pz.test(navigator.userAgent), Co = "touch", Cz = "pen", rv = "mouse", xz = "kinect", Rz = 25, Ot = 1, Zn = 2, et = 4, Mt = 8, wu = 1, xo = 2, Ro = 4, Ao = 8, Ui = 16, wr = xo | Ro, xn = Ao | Ui, l0 = wr | xn, c0 = ["x", "y"], Eu = ["clientX", "clientY"];
function Dr(r, i, e) {
  var t;
  if (r)
    if (r.forEach)
      r.forEach(i, e);
    else if (r.length !== void 0)
      for (t = 0; t < r.length; )
        i.call(e, r[t], t, r), t++;
    else
      for (t in r)
        r.hasOwnProperty(t) && i.call(e, r[t], t, r);
}
function yl(r, i) {
  return typeof r === Oz ? r.apply(i && i[0] || void 0, i) : r;
}
function On(r, i) {
  return r.indexOf(i) > -1;
}
function Az(r) {
  if (On(r, Cn))
    return Cn;
  var i = On(r, ro), e = On(r, no);
  return i && e ? Cn : i || e ? i ? ro : no : On(r, Df) ? Df : s0;
}
var d0 = /* @__PURE__ */ (function() {
  function r(e, t) {
    this.manager = e, this.set(t);
  }
  var i = r.prototype;
  return i.set = function(t) {
    t === o0 && (t = this.compute()), a0 && this.manager.element.style && _s[t] && (this.manager.element.style[i0] = t), this.actions = t.toLowerCase().trim();
  }, i.update = function() {
    this.set(this.manager.options.touchAction);
  }, i.compute = function() {
    var t = [];
    return Dr(this.manager.recognizers, function(n) {
      yl(n.options.enable, [n]) && (t = t.concat(n.getTouchAction()));
    }), Az(t.join(" "));
  }, i.preventDefaults = function(t) {
    var n = t.srcEvent, a = t.offsetDirection;
    if (this.manager.session.prevented) {
      n.preventDefault();
      return;
    }
    var o = this.actions, s = On(o, Cn) && !_s[Cn], u = On(o, no) && !_s[no], l = On(o, ro) && !_s[ro];
    if (s) {
      var c = t.pointers.length === 1, d = t.distance < 2, f = t.deltaTime < 250;
      if (c && d && f)
        return;
    }
    if (!(l && u) && (s || u && a & wr || l && a & xn))
      return this.preventSrc(n);
  }, i.preventSrc = function(t) {
    this.manager.session.prevented = !0, t.preventDefault();
  }, r;
})();
function nv(r, i) {
  for (; r; ) {
    if (r === i)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
function f0(r) {
  var i = r.length;
  if (i === 1)
    return {
      x: Pi(r[0].clientX),
      y: Pi(r[0].clientY)
    };
  for (var e = 0, t = 0, n = 0; n < i; )
    e += r[n].clientX, t += r[n].clientY, n++;
  return {
    x: Pi(e / i),
    y: Pi(t / i)
  };
}
function lg(r) {
  for (var i = [], e = 0; e < r.pointers.length; )
    i[e] = {
      clientX: Pi(r.pointers[e].clientX),
      clientY: Pi(r.pointers[e].clientY)
    }, e++;
  return {
    timeStamp: tv(),
    pointers: i,
    center: f0(i),
    deltaX: r.deltaX,
    deltaY: r.deltaY
  };
}
function Su(r, i, e) {
  e || (e = c0);
  var t = i[e[0]] - r[e[0]], n = i[e[1]] - r[e[1]];
  return Math.sqrt(t * t + n * n);
}
function Mf(r, i, e) {
  e || (e = c0);
  var t = i[e[0]] - r[e[0]], n = i[e[1]] - r[e[1]];
  return Math.atan2(n, t) * 180 / Math.PI;
}
function h0(r, i) {
  return r === i ? wu : Ln(r) >= Ln(i) ? r < 0 ? xo : Ro : i < 0 ? Ao : Ui;
}
function Dz(r, i) {
  var e = i.center, t = r.offsetDelta || {}, n = r.prevDelta || {}, a = r.prevInput || {};
  (i.eventType === Ot || a.eventType === et) && (n = r.prevDelta = {
    x: a.deltaX || 0,
    y: a.deltaY || 0
  }, t = r.offsetDelta = {
    x: e.x,
    y: e.y
  }), i.deltaX = n.x + (e.x - t.x), i.deltaY = n.y + (e.y - t.y);
}
function v0(r, i, e) {
  return {
    x: i / r || 0,
    y: e / r || 0
  };
}
function Mz(r, i) {
  return Su(i[0], i[1], Eu) / Su(r[0], r[1], Eu);
}
function Nz(r, i) {
  return Mf(i[1], i[0], Eu) + Mf(r[1], r[0], Eu);
}
function Fz(r, i) {
  var e = r.lastInterval || i, t = i.timeStamp - e.timeStamp, n, a, o, s;
  if (i.eventType !== Mt && (t > Rz || e.velocity === void 0)) {
    var u = i.deltaX - e.deltaX, l = i.deltaY - e.deltaY, c = v0(t, u, l);
    a = c.x, o = c.y, n = Ln(c.x) > Ln(c.y) ? c.x : c.y, s = h0(u, l), r.lastInterval = i;
  } else
    n = e.velocity, a = e.velocityX, o = e.velocityY, s = e.direction;
  i.velocity = n, i.velocityX = a, i.velocityY = o, i.direction = s;
}
function Bz(r, i) {
  var e = r.session, t = i.pointers, n = t.length;
  e.firstInput || (e.firstInput = lg(i)), n > 1 && !e.firstMultiple ? e.firstMultiple = lg(i) : n === 1 && (e.firstMultiple = !1);
  var a = e.firstInput, o = e.firstMultiple, s = o ? o.center : a.center, u = i.center = f0(t);
  i.timeStamp = tv(), i.deltaTime = i.timeStamp - a.timeStamp, i.angle = Mf(s, u), i.distance = Su(s, u), Dz(e, i), i.offsetDirection = h0(i.deltaX, i.deltaY);
  var l = v0(i.deltaTime, i.deltaX, i.deltaY);
  i.overallVelocityX = l.x, i.overallVelocityY = l.y, i.overallVelocity = Ln(l.x) > Ln(l.y) ? l.x : l.y, i.scale = o ? Mz(o.pointers, t) : 1, i.rotation = o ? Nz(o.pointers, t) : 0, i.maxPointers = e.prevInput ? i.pointers.length > e.prevInput.maxPointers ? i.pointers.length : e.prevInput.maxPointers : i.pointers.length, Fz(e, i);
  var c = r.element, d = i.srcEvent, f;
  d.composedPath ? f = d.composedPath()[0] : d.path ? f = d.path[0] : f = d.target, nv(f, c) && (c = f), i.target = c;
}
function jz(r, i, e) {
  var t = e.pointers.length, n = e.changedPointers.length, a = i & Ot && t - n === 0, o = i & (et | Mt) && t - n === 0;
  e.isFirst = !!a, e.isFinal = !!o, a && (r.session = {}), e.eventType = i, Bz(r, e), r.emit("hammer.input", e), r.recognize(e), r.session.prevInput = e;
}
function io(r) {
  return r.trim().split(/\s+/g);
}
function za(r, i, e) {
  Dr(io(i), function(t) {
    r.addEventListener(t, e, !1);
  });
}
function Wa(r, i, e) {
  Dr(io(i), function(t) {
    r.removeEventListener(t, e, !1);
  });
}
function cg(r) {
  var i = r.ownerDocument || r;
  return i.defaultView || i.parentWindow || window;
}
var fa = /* @__PURE__ */ (function() {
  function r(e, t) {
    var n = this;
    this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(a) {
      yl(e.options.enable, [e]) && n.handler(a);
    }, this.init();
  }
  var i = r.prototype;
  return i.handler = function() {
  }, i.init = function() {
    this.evEl && za(this.element, this.evEl, this.domHandler), this.evTarget && za(this.target, this.evTarget, this.domHandler), this.evWin && za(cg(this.element), this.evWin, this.domHandler);
  }, i.destroy = function() {
    this.evEl && Wa(this.element, this.evEl, this.domHandler), this.evTarget && Wa(this.target, this.evTarget, this.domHandler), this.evWin && Wa(cg(this.element), this.evWin, this.domHandler);
  }, r;
})();
function zn(r, i, e) {
  if (r.indexOf && !e)
    return r.indexOf(i);
  for (var t = 0; t < r.length; ) {
    if (e && r[t][e] == i || !e && r[t] === i)
      return t;
    t++;
  }
  return -1;
}
var Lz = {
  pointerdown: Ot,
  pointermove: Zn,
  pointerup: et,
  pointercancel: Mt,
  pointerout: Mt
}, zz = {
  2: Co,
  3: Cz,
  4: rv,
  5: xz
  // see https://twitter.com/jacobrossi/status/480596438489890816
}, p0 = "pointerdown", y0 = "pointermove pointerup pointercancel";
Ar.MSPointerEvent && !Ar.PointerEvent && (p0 = "MSPointerDown", y0 = "MSPointerMove MSPointerUp MSPointerCancel");
var g0 = /* @__PURE__ */ (function(r) {
  rr(i, r);
  function i() {
    var t, n = i.prototype;
    return n.evEl = p0, n.evWin = y0, t = r.apply(this, arguments) || this, t.store = t.manager.session.pointerEvents = [], t;
  }
  var e = i.prototype;
  return e.handler = function(n) {
    var a = this.store, o = !1, s = n.type.toLowerCase().replace("ms", ""), u = Lz[s], l = zz[n.pointerType] || n.pointerType, c = l === Co, d = zn(a, n.pointerId, "pointerId");
    u & Ot && (n.button === 0 || c) ? d < 0 && (a.push(n), d = a.length - 1) : u & (et | Mt) && (o = !0), !(d < 0) && (a[d] = n, this.callback(this.manager, u, {
      pointers: a,
      changedPointers: [n],
      pointerType: l,
      srcEvent: n
    }), o && a.splice(d, 1));
  }, i;
})(fa);
function ao(r) {
  return Array.prototype.slice.call(r, 0);
}
function iv(r, i, e) {
  for (var t = [], n = [], a = 0; a < r.length; ) {
    var o = i ? r[a][i] : r[a];
    zn(n, o) < 0 && t.push(r[a]), n[a] = o, a++;
  }
  return e && (i ? t = t.sort(function(s, u) {
    return s[i] > u[i];
  }) : t = t.sort()), t;
}
var Wz = {
  touchstart: Ot,
  touchmove: Zn,
  touchend: et,
  touchcancel: Mt
}, Hz = "touchstart touchmove touchend touchcancel", av = /* @__PURE__ */ (function(r) {
  rr(i, r);
  function i() {
    var t;
    return i.prototype.evTarget = Hz, t = r.apply(this, arguments) || this, t.targetIds = {}, t;
  }
  var e = i.prototype;
  return e.handler = function(n) {
    var a = Wz[n.type], o = Uz.call(this, n, a);
    o && this.callback(this.manager, a, {
      pointers: o[0],
      changedPointers: o[1],
      pointerType: Co,
      srcEvent: n
    });
  }, i;
})(fa);
function Uz(r, i) {
  var e = ao(r.touches), t = this.targetIds;
  if (i & (Ot | Zn) && e.length === 1)
    return t[e[0].identifier] = !0, [e, e];
  var n, a, o = ao(r.changedTouches), s = [], u = this.target;
  if (a = e.filter(function(l) {
    return nv(l.target, u);
  }), i === Ot)
    for (n = 0; n < a.length; )
      t[a[n].identifier] = !0, n++;
  for (n = 0; n < o.length; )
    t[o[n].identifier] && s.push(o[n]), i & (et | Mt) && delete t[o[n].identifier], n++;
  if (s.length)
    return [
      // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
      iv(a.concat(s), "identifier", !0),
      s
    ];
}
var Vz = {
  mousedown: Ot,
  mousemove: Zn,
  mouseup: et
}, Gz = "mousedown", Kz = "mousemove mouseup", ov = /* @__PURE__ */ (function(r) {
  rr(i, r);
  function i() {
    var t, n = i.prototype;
    return n.evEl = Gz, n.evWin = Kz, t = r.apply(this, arguments) || this, t.pressed = !1, t;
  }
  var e = i.prototype;
  return e.handler = function(n) {
    var a = Vz[n.type];
    a & Ot && n.button === 0 && (this.pressed = !0), a & Zn && n.which !== 1 && (a = et), this.pressed && (a & et && (this.pressed = !1), this.callback(this.manager, a, {
      pointers: [n],
      changedPointers: [n],
      pointerType: rv,
      srcEvent: n
    }));
  }, i;
})(fa), qz = 2500, dg = 25;
function fg(r) {
  var i = r.changedPointers, e = i[0];
  if (e.identifier === this.primaryTouch) {
    var t = {
      x: e.clientX,
      y: e.clientY
    }, n = this.lastTouches;
    this.lastTouches.push(t);
    var a = function() {
      var s = n.indexOf(t);
      s > -1 && n.splice(s, 1);
    };
    setTimeout(a, qz);
  }
}
function Yz(r, i) {
  r & Ot ? (this.primaryTouch = i.changedPointers[0].identifier, fg.call(this, i)) : r & (et | Mt) && fg.call(this, i);
}
function Xz(r) {
  for (var i = r.srcEvent.clientX, e = r.srcEvent.clientY, t = 0; t < this.lastTouches.length; t++) {
    var n = this.lastTouches[t], a = Math.abs(i - n.x), o = Math.abs(e - n.y);
    if (a <= dg && o <= dg)
      return !0;
  }
  return !1;
}
var m0 = /* @__PURE__ */ (function() {
  var r = /* @__PURE__ */ (function(i) {
    rr(e, i);
    function e(n, a) {
      var o;
      return o = i.call(this, n, a) || this, o.handler = function(s, u, l) {
        var c = l.pointerType === Co, d = l.pointerType === rv;
        if (!(d && l.sourceCapabilities && l.sourceCapabilities.firesTouchEvents)) {
          if (c)
            Yz.call($s($s(o)), u, l);
          else if (d && Xz.call($s($s(o)), l))
            return;
          o.callback(s, u, l);
        }
      }, o.touch = new av(o.manager, o.handler), o.mouse = new ov(o.manager, o.handler), o.primaryTouch = null, o.lastTouches = [], o;
    }
    var t = e.prototype;
    return t.destroy = function() {
      this.touch.destroy(), this.mouse.destroy();
    }, e;
  })(fa);
  return r;
})();
function Jz(r) {
  var i, e = r.options.inputClass;
  return e ? i = e : Iz ? i = g0 : kz ? i = av : u0 ? i = m0 : i = ov, new i(r, jz);
}
function Ii(r, i, e) {
  return Array.isArray(r) ? (Dr(r, e[i], e), !0) : !1;
}
var eu = 1, er = 2, Vi = 4, nn = 8, Mr = nn, oo = 16, br = 32, Qz = 1;
function Zz() {
  return Qz++;
}
function ws(r, i) {
  var e = i.manager;
  return e ? e.get(r) : r;
}
function hg(r) {
  return r & oo ? "cancel" : r & nn ? "end" : r & Vi ? "move" : r & er ? "start" : "";
}
var Do = /* @__PURE__ */ (function() {
  function r(e) {
    e === void 0 && (e = {}), this.options = fr({
      enable: !0
    }, e), this.id = Zz(), this.manager = null, this.state = eu, this.simultaneous = {}, this.requireFail = [];
  }
  var i = r.prototype;
  return i.set = function(t) {
    return jn(this.options, t), this.manager && this.manager.touchAction.update(), this;
  }, i.recognizeWith = function(t) {
    if (Ii(t, "recognizeWith", this))
      return this;
    var n = this.simultaneous;
    return t = ws(t, this), n[t.id] || (n[t.id] = t, t.recognizeWith(this)), this;
  }, i.dropRecognizeWith = function(t) {
    return Ii(t, "dropRecognizeWith", this) ? this : (t = ws(t, this), delete this.simultaneous[t.id], this);
  }, i.requireFailure = function(t) {
    if (Ii(t, "requireFailure", this))
      return this;
    var n = this.requireFail;
    return t = ws(t, this), zn(n, t) === -1 && (n.push(t), t.requireFailure(this)), this;
  }, i.dropRequireFailure = function(t) {
    if (Ii(t, "dropRequireFailure", this))
      return this;
    t = ws(t, this);
    var n = zn(this.requireFail, t);
    return n > -1 && this.requireFail.splice(n, 1), this;
  }, i.hasRequireFailures = function() {
    return this.requireFail.length > 0;
  }, i.canRecognizeWith = function(t) {
    return !!this.simultaneous[t.id];
  }, i.emit = function(t) {
    var n = this, a = this.state;
    function o(s) {
      n.manager.emit(s, t);
    }
    a < nn && o(n.options.event + hg(a)), o(n.options.event), t.additionalEvent && o(t.additionalEvent), a >= nn && o(n.options.event + hg(a));
  }, i.tryEmit = function(t) {
    if (this.canEmit())
      return this.emit(t);
    this.state = br;
  }, i.canEmit = function() {
    for (var t = 0; t < this.requireFail.length; ) {
      if (!(this.requireFail[t].state & (br | eu)))
        return !1;
      t++;
    }
    return !0;
  }, i.recognize = function(t) {
    var n = jn({}, t);
    if (!yl(this.options.enable, [this, n])) {
      this.reset(), this.state = br;
      return;
    }
    this.state & (Mr | oo | br) && (this.state = eu), this.state = this.process(n), this.state & (er | Vi | nn | oo) && this.tryEmit(n);
  }, i.process = function(t) {
  }, i.getTouchAction = function() {
  }, i.reset = function() {
  }, r;
})(), Nf = /* @__PURE__ */ (function(r) {
  rr(i, r);
  function i(t) {
    var n;
    return t === void 0 && (t = {}), n = r.call(this, fr({
      event: "tap",
      pointers: 1,
      taps: 1,
      interval: 300,
      // max time between the multi-tap taps
      time: 250,
      // max time of the pointer to be down (like finger on the screen)
      threshold: 9,
      // a minimal movement is ok, but keep it low
      posThreshold: 10
    }, t)) || this, n.pTime = !1, n.pCenter = !1, n._timer = null, n._input = null, n.count = 0, n;
  }
  var e = i.prototype;
  return e.getTouchAction = function() {
    return [Df];
  }, e.process = function(n) {
    var a = this, o = this.options, s = n.pointers.length === o.pointers, u = n.distance < o.threshold, l = n.deltaTime < o.time;
    if (this.reset(), n.eventType & Ot && this.count === 0)
      return this.failTimeout();
    if (u && l && s) {
      if (n.eventType !== et)
        return this.failTimeout();
      var c = this.pTime ? n.timeStamp - this.pTime < o.interval : !0, d = !this.pCenter || Su(this.pCenter, n.center) < o.posThreshold;
      this.pTime = n.timeStamp, this.pCenter = n.center, !d || !c ? this.count = 1 : this.count += 1, this._input = n;
      var f = this.count % o.taps;
      if (f === 0)
        return this.hasRequireFailures() ? (this._timer = setTimeout(function() {
          a.state = Mr, a.tryEmit();
        }, o.interval), er) : Mr;
    }
    return br;
  }, e.failTimeout = function() {
    var n = this;
    return this._timer = setTimeout(function() {
      n.state = br;
    }, this.options.interval), br;
  }, e.reset = function() {
    clearTimeout(this._timer);
  }, e.emit = function() {
    this.state === Mr && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
  }, i;
})(Do), Gi = /* @__PURE__ */ (function(r) {
  rr(i, r);
  function i(t) {
    return t === void 0 && (t = {}), r.call(this, fr({
      pointers: 1
    }, t)) || this;
  }
  var e = i.prototype;
  return e.attrTest = function(n) {
    var a = this.options.pointers;
    return a === 0 || n.pointers.length === a;
  }, e.process = function(n) {
    var a = this.state, o = n.eventType, s = a & (er | Vi), u = this.attrTest(n);
    return s && (o & Mt || !u) ? a | oo : s || u ? o & et ? a | nn : a & er ? a | Vi : er : br;
  }, i;
})(Do);
function b0(r) {
  return r === Ui ? "down" : r === Ao ? "up" : r === xo ? "left" : r === Ro ? "right" : "";
}
var sv = /* @__PURE__ */ (function(r) {
  rr(i, r);
  function i(t) {
    var n;
    return t === void 0 && (t = {}), n = r.call(this, fr({
      event: "pan",
      threshold: 10,
      pointers: 1,
      direction: l0
    }, t)) || this, n.pX = null, n.pY = null, n;
  }
  var e = i.prototype;
  return e.getTouchAction = function() {
    var n = this.options.direction, a = [];
    return n & wr && a.push(no), n & xn && a.push(ro), a;
  }, e.directionTest = function(n) {
    var a = this.options, o = !0, s = n.distance, u = n.direction, l = n.deltaX, c = n.deltaY;
    return u & a.direction || (a.direction & wr ? (u = l === 0 ? wu : l < 0 ? xo : Ro, o = l !== this.pX, s = Math.abs(n.deltaX)) : (u = c === 0 ? wu : c < 0 ? Ao : Ui, o = c !== this.pY, s = Math.abs(n.deltaY))), n.direction = u, o && s > a.threshold && u & a.direction;
  }, e.attrTest = function(n) {
    return Gi.prototype.attrTest.call(this, n) && // replace with a super call
    (this.state & er || !(this.state & er) && this.directionTest(n));
  }, e.emit = function(n) {
    this.pX = n.deltaX, this.pY = n.deltaY;
    var a = b0(n.direction);
    a && (n.additionalEvent = this.options.event + a), r.prototype.emit.call(this, n);
  }, i;
})(Gi), $0 = /* @__PURE__ */ (function(r) {
  rr(i, r);
  function i(t) {
    return t === void 0 && (t = {}), r.call(this, fr({
      event: "swipe",
      threshold: 10,
      velocity: 0.3,
      direction: wr | xn,
      pointers: 1
    }, t)) || this;
  }
  var e = i.prototype;
  return e.getTouchAction = function() {
    return sv.prototype.getTouchAction.call(this);
  }, e.attrTest = function(n) {
    var a = this.options.direction, o;
    return a & (wr | xn) ? o = n.overallVelocity : a & wr ? o = n.overallVelocityX : a & xn && (o = n.overallVelocityY), r.prototype.attrTest.call(this, n) && a & n.offsetDirection && n.distance > this.options.threshold && n.maxPointers === this.options.pointers && Ln(o) > this.options.velocity && n.eventType & et;
  }, e.emit = function(n) {
    var a = b0(n.offsetDirection);
    a && this.manager.emit(this.options.event + a, n), this.manager.emit(this.options.event, n);
  }, i;
})(Gi), _0 = /* @__PURE__ */ (function(r) {
  rr(i, r);
  function i(t) {
    return t === void 0 && (t = {}), r.call(this, fr({
      event: "pinch",
      threshold: 0,
      pointers: 2
    }, t)) || this;
  }
  var e = i.prototype;
  return e.getTouchAction = function() {
    return [Cn];
  }, e.attrTest = function(n) {
    return r.prototype.attrTest.call(this, n) && (Math.abs(n.scale - 1) > this.options.threshold || this.state & er);
  }, e.emit = function(n) {
    if (n.scale !== 1) {
      var a = n.scale < 1 ? "in" : "out";
      n.additionalEvent = this.options.event + a;
    }
    r.prototype.emit.call(this, n);
  }, i;
})(Gi), w0 = /* @__PURE__ */ (function(r) {
  rr(i, r);
  function i(t) {
    return t === void 0 && (t = {}), r.call(this, fr({
      event: "rotate",
      threshold: 0,
      pointers: 2
    }, t)) || this;
  }
  var e = i.prototype;
  return e.getTouchAction = function() {
    return [Cn];
  }, e.attrTest = function(n) {
    return r.prototype.attrTest.call(this, n) && (Math.abs(n.rotation) > this.options.threshold || this.state & er);
  }, i;
})(Gi), E0 = /* @__PURE__ */ (function(r) {
  rr(i, r);
  function i(t) {
    var n;
    return t === void 0 && (t = {}), n = r.call(this, fr({
      event: "press",
      pointers: 1,
      time: 251,
      // minimal time of the pointer to be pressed
      threshold: 9
    }, t)) || this, n._timer = null, n._input = null, n;
  }
  var e = i.prototype;
  return e.getTouchAction = function() {
    return [s0];
  }, e.process = function(n) {
    var a = this, o = this.options, s = n.pointers.length === o.pointers, u = n.distance < o.threshold, l = n.deltaTime > o.time;
    if (this._input = n, !u || !s || n.eventType & (et | Mt) && !l)
      this.reset();
    else if (n.eventType & Ot)
      this.reset(), this._timer = setTimeout(function() {
        a.state = Mr, a.tryEmit();
      }, o.time);
    else if (n.eventType & et)
      return Mr;
    return br;
  }, e.reset = function() {
    clearTimeout(this._timer);
  }, e.emit = function(n) {
    this.state === Mr && (n && n.eventType & et ? this.manager.emit(this.options.event + "up", n) : (this._input.timeStamp = tv(), this.manager.emit(this.options.event, this._input)));
  }, i;
})(Do), S0 = {
  /**
   * @private
   * set if DOM events are being triggered.
   * But this is slower and unused by simple implementations, so disabled by default.
   * @type {Boolean}
   * @default false
   */
  domEvents: !1,
  /**
   * @private
   * The value for the touchAction property/fallback.
   * When set to `compute` it will magically set the correct value based on the added recognizers.
   * @type {String}
   * @default compute
   */
  touchAction: o0,
  /**
   * @private
   * @type {Boolean}
   * @default true
   */
  enable: !0,
  /**
   * @private
   * EXPERIMENTAL FEATURE -- can be removed/changed
   * Change the parent input target element.
   * If Null, then it is being set the to main element.
   * @type {Null|EventTarget}
   * @default null
   */
  inputTarget: null,
  /**
   * @private
   * force an input class
   * @type {Null|Function}
   * @default null
   */
  inputClass: null,
  /**
   * @private
   * Some CSS properties can be used to improve the working of Hammer.
   * Add them to this method and they will be set when creating a new Manager.
   * @namespace
   */
  cssProps: {
    /**
     * @private
     * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
     * @type {String}
     * @default 'none'
     */
    userSelect: "none",
    /**
     * @private
     * Disable the Windows Phone grippers when pressing an element.
     * @type {String}
     * @default 'none'
     */
    touchSelect: "none",
    /**
     * @private
     * Disables the default callout shown when you touch and hold a touch target.
     * On iOS, when you touch and hold a touch target such as a link, Safari displays
     * a callout containing information about the link. This property allows you to disable that callout.
     * @type {String}
     * @default 'none'
     */
    touchCallout: "none",
    /**
     * @private
     * Specifies whether zooming is enabled. Used by IE10>
     * @type {String}
     * @default 'none'
     */
    contentZooming: "none",
    /**
     * @private
     * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
     * @type {String}
     * @default 'none'
     */
    userDrag: "none",
    /**
     * @private
     * Overrides the highlight color shown when the user taps a link or a JavaScript
     * clickable element in iOS. This property obeys the alpha value, if specified.
     * @type {String}
     * @default 'rgba(0,0,0,0)'
     */
    tapHighlightColor: "rgba(0,0,0,0)"
  }
}, vg = [[w0, {
  enable: !1
}], [_0, {
  enable: !1
}, ["rotate"]], [$0, {
  direction: wr
}], [sv, {
  direction: wr
}, ["swipe"]], [Nf], [Nf, {
  event: "doubletap",
  taps: 2
}, ["tap"]], [E0]], e3 = 1, pg = 2;
function yg(r, i) {
  var e = r.element;
  if (e.style) {
    var t;
    Dr(r.options.cssProps, function(n, a) {
      t = pl(e.style, a), i ? (r.oldCssProps[t] = e.style[t], e.style[t] = n) : e.style[t] = r.oldCssProps[t] || "";
    }), i || (r.oldCssProps = {});
  }
}
function t3(r, i) {
  var e = document.createEvent("Event");
  e.initEvent(r, !0, !0), e.gesture = i, i.target.dispatchEvent(e);
}
var gg = /* @__PURE__ */ (function() {
  function r(e, t) {
    var n = this;
    this.options = jn({}, S0, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = Jz(this), this.touchAction = new d0(this, this.options.touchAction), yg(this, !0), Dr(this.options.recognizers, function(a) {
      var o = n.add(new a[0](a[1]));
      a[2] && o.recognizeWith(a[2]), a[3] && o.requireFailure(a[3]);
    }, this);
  }
  var i = r.prototype;
  return i.set = function(t) {
    return jn(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;
  }, i.stop = function(t) {
    this.session.stopped = t ? pg : e3;
  }, i.recognize = function(t) {
    var n = this.session;
    if (!n.stopped) {
      this.touchAction.preventDefaults(t);
      var a, o = this.recognizers, s = n.curRecognizer;
      (!s || s && s.state & Mr) && (n.curRecognizer = null, s = null);
      for (var u = 0; u < o.length; )
        a = o[u], n.stopped !== pg && // 1
        (!s || a === s || // 2
        a.canRecognizeWith(s)) ? a.recognize(t) : a.reset(), !s && a.state & (er | Vi | nn) && (n.curRecognizer = a, s = a), u++;
    }
  }, i.get = function(t) {
    if (t instanceof Do)
      return t;
    for (var n = this.recognizers, a = 0; a < n.length; a++)
      if (n[a].options.event === t)
        return n[a];
    return null;
  }, i.add = function(t) {
    if (Ii(t, "add", this))
      return this;
    var n = this.get(t.options.event);
    return n && this.remove(n), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t;
  }, i.remove = function(t) {
    if (Ii(t, "remove", this))
      return this;
    var n = this.get(t);
    if (t) {
      var a = this.recognizers, o = zn(a, n);
      o !== -1 && (a.splice(o, 1), this.touchAction.update());
    }
    return this;
  }, i.on = function(t, n) {
    if (t === void 0 || n === void 0)
      return this;
    var a = this.handlers;
    return Dr(io(t), function(o) {
      a[o] = a[o] || [], a[o].push(n);
    }), this;
  }, i.off = function(t, n) {
    if (t === void 0)
      return this;
    var a = this.handlers;
    return Dr(io(t), function(o) {
      n ? a[o] && a[o].splice(zn(a[o], n), 1) : delete a[o];
    }), this;
  }, i.emit = function(t, n) {
    this.options.domEvents && t3(t, n);
    var a = this.handlers[t] && this.handlers[t].slice();
    if (!(!a || !a.length)) {
      n.type = t, n.preventDefault = function() {
        n.srcEvent.preventDefault();
      };
      for (var o = 0; o < a.length; )
        a[o](n), o++;
    }
  }, i.destroy = function() {
    this.element && yg(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
  }, r;
})(), r3 = {
  touchstart: Ot,
  touchmove: Zn,
  touchend: et,
  touchcancel: Mt
}, n3 = "touchstart", i3 = "touchstart touchmove touchend touchcancel", a3 = /* @__PURE__ */ (function(r) {
  rr(i, r);
  function i() {
    var t, n = i.prototype;
    return n.evTarget = n3, n.evWin = i3, t = r.apply(this, arguments) || this, t.started = !1, t;
  }
  var e = i.prototype;
  return e.handler = function(n) {
    var a = r3[n.type];
    if (a === Ot && (this.started = !0), !!this.started) {
      var o = o3.call(this, n, a);
      a & (et | Mt) && o[0].length - o[1].length === 0 && (this.started = !1), this.callback(this.manager, a, {
        pointers: o[0],
        changedPointers: o[1],
        pointerType: Co,
        srcEvent: n
      });
    }
  }, i;
})(fa);
function o3(r, i) {
  var e = ao(r.touches), t = ao(r.changedTouches);
  return i & (et | Mt) && (e = iv(e.concat(t), "identifier", !0)), [e, t];
}
function O0(r, i, e) {
  var t = "DEPRECATED METHOD: " + i + `
` + e + ` AT 
`;
  return function() {
    var n = new Error("get-stack-trace"), a = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", o = window.console && (window.console.warn || window.console.log);
    return o && o.call(window.console, t, a), r.apply(this, arguments);
  };
}
var T0 = O0(function(r, i, e) {
  for (var t = Object.keys(i), n = 0; n < t.length; )
    (!e || e && r[t[n]] === void 0) && (r[t[n]] = i[t[n]]), n++;
  return r;
}, "extend", "Use `assign`."), s3 = O0(function(r, i) {
  return T0(r, i, !0);
}, "merge", "Use `assign`.");
function u3(r, i, e) {
  var t = i.prototype, n;
  n = r.prototype = Object.create(t), n.constructor = r, n._super = t, e && jn(n, e);
}
function mg(r, i) {
  return function() {
    return r.apply(i, arguments);
  };
}
var l3 = /* @__PURE__ */ (function() {
  var r = (
    /**
      * @private
      * @const {string}
      */
    function(e, t) {
      return t === void 0 && (t = {}), new gg(e, fr({
        recognizers: vg.concat()
      }, t));
    }
  );
  return r.VERSION = "2.0.17-rc", r.DIRECTION_ALL = l0, r.DIRECTION_DOWN = Ui, r.DIRECTION_LEFT = xo, r.DIRECTION_RIGHT = Ro, r.DIRECTION_UP = Ao, r.DIRECTION_HORIZONTAL = wr, r.DIRECTION_VERTICAL = xn, r.DIRECTION_NONE = wu, r.DIRECTION_DOWN = Ui, r.INPUT_START = Ot, r.INPUT_MOVE = Zn, r.INPUT_END = et, r.INPUT_CANCEL = Mt, r.STATE_POSSIBLE = eu, r.STATE_BEGAN = er, r.STATE_CHANGED = Vi, r.STATE_ENDED = nn, r.STATE_RECOGNIZED = Mr, r.STATE_CANCELLED = oo, r.STATE_FAILED = br, r.Manager = gg, r.Input = fa, r.TouchAction = d0, r.TouchInput = av, r.MouseInput = ov, r.PointerEventInput = g0, r.TouchMouseInput = m0, r.SingleTouchInput = a3, r.Recognizer = Do, r.AttrRecognizer = Gi, r.Tap = Nf, r.Pan = sv, r.Swipe = $0, r.Pinch = _0, r.Rotate = w0, r.Press = E0, r.on = za, r.off = Wa, r.each = Dr, r.merge = s3, r.extend = T0, r.bindFn = mg, r.assign = jn, r.inherit = u3, r.bindFn = mg, r.prefixed = pl, r.toArray = ao, r.inArray = zn, r.uniqueArray = iv, r.splitStr = io, r.boolOrFn = yl, r.hasParent = nv, r.addEventListeners = za, r.removeEventListeners = Wa, r.defaults = jn({}, S0, {
    preset: vg
  }), r;
})(), c3 = l3;
function P0(r, i) {
  var e = typeof fl < "u" && Qh(r) || r["@@iterator"];
  if (!e) {
    if (Ht(r) || (e = d3(r)) || i) {
      e && (r = e);
      var t = 0, n = function() {
      };
      return { s: n, n: function() {
        return t >= r.length ? { done: !0 } : { done: !1, value: r[t++] };
      }, e: function(l) {
        throw l;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, s;
  return { s: function() {
    e = e.call(r);
  }, n: function() {
    var l = e.next();
    return a = l.done, l;
  }, e: function(l) {
    o = !0, s = l;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (o) throw s;
    }
  } };
}
function d3(r, i) {
  var e;
  if (r) {
    if (typeof r == "string") return bg(r, i);
    var t = vl(e = Object.prototype.toString.call(r)).call(e, 8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Jh(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return bg(r, i);
  }
}
function bg(r, i) {
  (i == null || i > r.length) && (i = r.length);
  for (var e = 0, t = new Array(i); e < i; e++) t[e] = r[e];
  return t;
}
var I0 = fl("DELETE");
function f3(r) {
  for (var i, e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  return k0.apply(void 0, hl(i = [{}, r]).call(i, t));
}
function k0() {
  var r = Ou.apply(void 0, arguments);
  return x0(r), r;
}
function Ou() {
  for (var r = arguments.length, i = new Array(r), e = 0; e < r; e++)
    i[e] = arguments[e];
  if (i.length < 2)
    return i[0];
  if (i.length > 2) {
    var t;
    return Ou.apply(void 0, hl(t = [k0(i[0], i[1])]).call(t, Rt(vl(i).call(i, 2))));
  }
  var n = i[0], a = i[1];
  if (n instanceof Date && a instanceof Date)
    return n.setTime(a.getTime()), n;
  var o = P0(fj(a)), s;
  try {
    for (o.s(); !(s = o.n()).done; ) {
      var u = s.value;
      Object.prototype.propertyIsEnumerable.call(a, u) && (a[u] === I0 ? delete n[u] : n[u] !== null && a[u] !== null && typeof n[u] == "object" && typeof a[u] == "object" && !Ht(n[u]) && !Ht(a[u]) ? n[u] = Ou(n[u], a[u]) : n[u] = C0(a[u]));
    }
  } catch (l) {
    o.e(l);
  } finally {
    o.f();
  }
  return n;
}
function C0(r) {
  return Ht(r) ? sr(r).call(r, function(i) {
    return C0(i);
  }) : typeof r == "object" && r !== null ? r instanceof Date ? new Date(r.getTime()) : Ou({}, r) : r;
}
function x0(r) {
  for (var i = 0, e = ev(r); i < e.length; i++) {
    var t = e[i];
    r[t] === I0 ? delete r[t] : typeof r[t] == "object" && r[t] !== null && x0(r[t]);
  }
}
function h3() {
  var r = function() {
  };
  return {
    on: r,
    off: r,
    destroy: r,
    emit: r,
    get() {
      return {
        set: r
      };
    }
  };
}
var v3 = typeof window < "u" ? window.Hammer || c3 : function() {
  return h3();
};
function xr(r) {
  var i = this, e;
  this._cleanupQueue = [], this.active = !1, this._dom = {
    container: r,
    overlay: document.createElement("div")
  }, this._dom.overlay.classList.add("vis-overlay"), this._dom.container.appendChild(this._dom.overlay), this._cleanupQueue.push(function() {
    i._dom.overlay.parentNode.removeChild(i._dom.overlay);
  });
  var t = v3(this._dom.overlay);
  t.on("tap", Pw(e = this._onTapOverlay).call(e, this)), this._cleanupQueue.push(function() {
    t.destroy();
  });
  var n = ["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"];
  Bn(n).call(n, function(a) {
    t.on(a, function(o) {
      o.srcEvent.stopPropagation();
    });
  }), document && document.body && (this._onClick = function(a) {
    p3(a.target, r) || i.deactivate();
  }, document.body.addEventListener("click", this._onClick), this._cleanupQueue.push(function() {
    document.body.removeEventListener("click", i._onClick);
  })), this._escListener = function(a) {
    ("key" in a ? a.key === "Escape" : a.keyCode === 27) && i.deactivate();
  };
}
Ez(xr.prototype);
xr.current = null;
xr.prototype.destroy = function() {
  var r, i;
  this.deactivate();
  var e = P0(Yj(r = Yw(i = this._cleanupQueue).call(i, 0)).call(r)), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var n = t.value;
      n();
    }
  } catch (a) {
    e.e(a);
  } finally {
    e.f();
  }
};
xr.prototype.activate = function() {
  xr.current && xr.current.deactivate(), xr.current = this, this.active = !0, this._dom.overlay.style.display = "none", this._dom.container.classList.add("vis-active"), this.emit("change"), this.emit("activate"), document.body.addEventListener("keydown", this._escListener);
};
xr.prototype.deactivate = function() {
  this.active = !1, this._dom.overlay.style.display = "block", this._dom.container.classList.remove("vis-active"), document.body.removeEventListener("keydown", this._escListener), this.emit("change"), this.emit("deactivate");
};
xr.prototype._onTapOverlay = function(r) {
  this.activate(), r.srcEvent.stopPropagation();
};
function p3(r, i) {
  for (; r; ) {
    if (r === i)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var y3 = Ju, g3 = aa, m3 = TypeError, R0 = function(r) {
  if (y3(r)) return r;
  throw new m3(g3(r) + " is not a constructor");
}, b3 = re, $3 = Pt, Fc = ta, _3 = Ow, $g = R0, w3 = Vt, _g = bt, E3 = Jn, A0 = Se, uv = $3("Reflect", "construct"), S3 = Object.prototype, O3 = [].push, D0 = A0(function() {
  function r() {
  }
  return !(uv(function() {
  }, [], r) instanceof r);
}), M0 = !A0(function() {
  uv(function() {
  });
}), wg = D0 || M0;
b3({ target: "Reflect", stat: !0, forced: wg, sham: wg }, {
  construct: function(i, e) {
    $g(i), w3(e);
    var t = arguments.length < 3 ? i : $g(arguments[2]);
    if (M0 && !D0) return uv(i, e, t);
    if (i === t) {
      switch (e.length) {
        case 0:
          return new i();
        case 1:
          return new i(e[0]);
        case 2:
          return new i(e[0], e[1]);
        case 3:
          return new i(e[0], e[1], e[2]);
        case 4:
          return new i(e[0], e[1], e[2], e[3]);
      }
      var n = [null];
      return Fc(O3, n, e), new (Fc(_3, i, n))();
    }
    var a = t.prototype, o = E3(_g(a) ? a : S3), s = Fc(i, o, e);
    return _g(s) ? s : o;
  }
});
var T3 = Be, P3 = T3.Reflect.construct, I3 = P3, k3 = I3, C3 = k3, tu = /* @__PURE__ */ se(C3), x3 = Be, R3 = x3.Object.getOwnPropertySymbols, A3 = R3, D3 = A3, M3 = D3, Eg = /* @__PURE__ */ se(M3), N0 = { exports: {} }, N3 = re, F3 = Se, B3 = Or, F0 = qn.f, B0 = ut, j3 = !B0 || F3(function() {
  F0(1);
});
N3({ target: "Object", stat: !0, forced: j3, sham: !B0 }, {
  getOwnPropertyDescriptor: function(i, e) {
    return F0(B3(i), e);
  }
});
var L3 = Be, j0 = L3.Object, z3 = N0.exports = function(i, e) {
  return j0.getOwnPropertyDescriptor(i, e);
};
j0.getOwnPropertyDescriptor.sham && (z3.sham = !0);
var W3 = N0.exports, H3 = W3, U3 = H3, V3 = U3, L0 = /* @__PURE__ */ se(V3), G3 = re, K3 = ut, q3 = Zh, Y3 = Or, X3 = qn, J3 = sa;
G3({ target: "Object", stat: !0, sham: !K3 }, {
  getOwnPropertyDescriptors: function(i) {
    for (var e = Y3(i), t = X3.f, n = q3(e), a = {}, o = 0, s, u; n.length > o; )
      u = t(e, s = n[o++]), u !== void 0 && J3(a, s, u);
    return a;
  }
});
var Q3 = Be, Z3 = Q3.Object.getOwnPropertyDescriptors, e5 = Z3, t5 = e5, r5 = t5, Sg = /* @__PURE__ */ se(r5), z0 = { exports: {} }, n5 = re, i5 = ut, Og = Zu.f;
n5({ target: "Object", stat: !0, forced: Object.defineProperties !== Og, sham: !i5 }, {
  defineProperties: Og
});
var a5 = Be, W0 = a5.Object, o5 = z0.exports = function(i, e) {
  return W0.defineProperties(i, e);
};
W0.defineProperties.sham && (o5.sham = !0);
var s5 = z0.exports, u5 = s5, l5 = u5, c5 = l5, d5 = /* @__PURE__ */ se(c5), f5 = b_, h5 = /* @__PURE__ */ se(f5);
function H0(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
var v5 = Jw, p5 = v5, y5 = p5, g5 = y5, U0 = g5, m5 = /* @__PURE__ */ se(U0), b5 = re, $5 = cw;
b5({ target: "Object", stat: !0 }, {
  setPrototypeOf: $5
});
var _5 = Be, w5 = _5.Object.setPrototypeOf, E5 = w5, S5 = E5, O5 = S5, T5 = O5, P5 = T5, I5 = P5, V0 = I5, Ff = /* @__PURE__ */ se(V0), k5 = Tw, C5 = k5, x5 = C5, R5 = x5, A5 = R5, G0 = /* @__PURE__ */ se(A5);
function Bf(r, i) {
  var e;
  return Bf = Ff ? G0(e = Ff).call(e) : function(n, a) {
    return n.__proto__ = a, n;
  }, Bf(r, i);
}
function D5(r, i) {
  if (typeof i != "function" && i !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = m5(i && i.prototype, {
    constructor: {
      value: r,
      writable: !0,
      configurable: !0
    }
  }), qu(r, "prototype", {
    writable: !1
  }), i && Bf(r, i);
}
function M5(r, i) {
  if (i && (Hi(i) === "object" || typeof i == "function"))
    return i;
  if (i !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return H0(r);
}
var N5 = WL, F5 = N5, B5 = F5, j5 = B5, K0 = j5, Tg = /* @__PURE__ */ se(K0);
function Tu(r) {
  var i;
  return Tu = Ff ? G0(i = Tg).call(i) : function(t) {
    return t.__proto__ || Tg(t);
  }, Tu(r);
}
var q0 = { exports: {} }, Y0 = { exports: {} };
(function(r) {
  var i = qh, e = _w;
  function t(n) {
    "@babel/helpers - typeof";
    return r.exports = t = typeof i == "function" && typeof e == "symbol" ? function(a) {
      return typeof a;
    } : function(a) {
      return a && typeof i == "function" && a.constructor === i && a !== i.prototype ? "symbol" : typeof a;
    }, r.exports.__esModule = !0, r.exports.default = r.exports, t(n);
  }
  r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
})(Y0);
var L5 = Y0.exports, z5 = Gw, W5 = z5, H5 = W5, U5 = H5, V5 = U5, Pg = it, G5 = Zh, K5 = qn, q5 = jt, Y5 = function(r, i, e) {
  for (var t = G5(i), n = q5.f, a = K5.f, o = 0; o < t.length; o++) {
    var s = t[o];
    !Pg(r, s) && !(e && Pg(e, s)) && n(r, s, a(i, s));
  }
}, X5 = bt, J5 = Vr, Q5 = function(r, i) {
  X5(i) && "cause" in i && J5(r, "cause", i.cause);
}, Z5 = Me, X0 = Error, eW = Z5("".replace), tW = (function(r) {
  return String(new X0(r).stack);
})("zxcasd"), J0 = /\n\s*at [^:]*:[^\n]*/, rW = J0.test(tW), nW = function(r, i) {
  if (rW && typeof r == "string" && !X0.prepareStackTrace)
    for (; i--; ) r = eW(r, J0, "");
  return r;
}, iW = Se, aW = Yn, oW = !iW(function() {
  var r = new Error("a");
  return "stack" in r ? (Object.defineProperty(r, "stack", aW(1, 7)), r.stack !== 7) : !0;
}), sW = Vr, uW = nW, lW = oW, Ig = Error.captureStackTrace, cW = function(r, i, e, t) {
  lW && (Ig ? Ig(r, i) : sW(r, "stack", uW(e, t)));
}, dW = pn, fW = lt, hW = Vt, vW = aa, pW = Cw, yW = Gt, kg = nt, gW = Xh, mW = dl, Cg = kw, bW = TypeError, ru = function(r, i) {
  this.stopped = r, this.result = i;
}, xg = ru.prototype, ei = function(r, i, e) {
  var t = e && e.that, n = !!(e && e.AS_ENTRIES), a = !!(e && e.IS_RECORD), o = !!(e && e.IS_ITERATOR), s = !!(e && e.INTERRUPTED), u = dW(i, t), l, c, d, f, h, v, p, y = function(b) {
    return l && Cg(l, "normal", b), new ru(!0, b);
  }, m = function(b) {
    return n ? (hW(b), s ? u(b[0], b[1], y) : u(b[0], b[1])) : s ? u(b, y) : u(b);
  };
  if (a)
    l = r.iterator;
  else if (o)
    l = r;
  else {
    if (c = mW(r), !c) throw new bW(vW(r) + " is not iterable");
    if (pW(c)) {
      for (d = 0, f = yW(r); f > d; d++)
        if (h = m(r[d]), h && kg(xg, h)) return h;
      return new ru(!1);
    }
    l = gW(r, c);
  }
  for (v = a ? r.next : l.next; !(p = fW(v, l)).done; ) {
    try {
      h = m(p.value);
    } catch (b) {
      Cg(l, "throw", b);
    }
    if (typeof h == "object" && h && kg(xg, h)) return h;
  }
  return new ru(!1);
}, $W = Xn, _W = function(r, i) {
  return r === void 0 ? arguments.length < 2 ? "" : i : $W(r);
}, wW = re, EW = nt, SW = ul, Pu = cw, OW = Y5, Q0 = Jn, Bc = Vr, jc = Yn, TW = Q5, PW = cW, IW = ei, kW = _W, CW = ze, xW = CW("toStringTag"), Iu = Error, RW = [].push, Ki = function(i, e) {
  var t = EW(Lc, this), n;
  Pu ? n = Pu(new Iu(), t ? SW(this) : Lc) : (n = t ? this : Q0(Lc), Bc(n, xW, "Error")), e !== void 0 && Bc(n, "message", kW(e)), PW(n, Ki, n.stack, 1), arguments.length > 2 && TW(n, arguments[2]);
  var a = [];
  return IW(i, RW, { that: a }), Bc(n, "errors", a), n;
};
Pu ? Pu(Ki, Iu) : OW(Ki, Iu, { name: !0 });
var Lc = Ki.prototype = Q0(Iu.prototype, {
  constructor: jc(1, Ki),
  message: jc(1, ""),
  name: jc(1, "AggregateError")
});
wW({ global: !0 }, {
  AggregateError: Ki
});
var AW = Pt, DW = Lh, MW = ze, NW = ut, Rg = MW("species"), Z0 = function(r) {
  var i = AW(r);
  NW && i && !i[Rg] && DW(i, Rg, {
    configurable: !0,
    get: function() {
      return this;
    }
  });
}, FW = nt, BW = TypeError, lv = function(r, i) {
  if (FW(i, r)) return r;
  throw new BW("Incorrect invocation");
}, Ag = Vt, jW = R0, LW = ra, zW = ze, WW = zW("species"), eE = function(r, i) {
  var e = Ag(r).constructor, t;
  return e === void 0 || LW(t = Ag(e)[WW]) ? i : jW(t);
}, HW = vn, tE = /(?:ipad|iphone|ipod).*applewebkit/i.test(HW), Ut = Fe, UW = ta, VW = pn, Dg = Ue, GW = it, rE = Se, Mg = k_, KW = Po, Ng = Mh, qW = Qw, YW = tE, XW = ko, jf = Ut.setImmediate, Fg = Ut.clearImmediate, JW = Ut.process, zc = Ut.Dispatch, QW = Ut.Function, Bg = Ut.MessageChannel, ZW = Ut.String, Wc = 0, Ha = {}, jg = "onreadystatechange", so, _n, Hc, Uc;
rE(function() {
  so = Ut.location;
});
var cv = function(r) {
  if (GW(Ha, r)) {
    var i = Ha[r];
    delete Ha[r], i();
  }
}, Vc = function(r) {
  return function() {
    cv(r);
  };
}, Lg = function(r) {
  cv(r.data);
}, zg = function(r) {
  Ut.postMessage(ZW(r), so.protocol + "//" + so.host);
};
(!jf || !Fg) && (jf = function(i) {
  qW(arguments.length, 1);
  var e = Dg(i) ? i : QW(i), t = KW(arguments, 1);
  return Ha[++Wc] = function() {
    UW(e, void 0, t);
  }, _n(Wc), Wc;
}, Fg = function(i) {
  delete Ha[i];
}, XW ? _n = function(r) {
  JW.nextTick(Vc(r));
} : zc && zc.now ? _n = function(r) {
  zc.now(Vc(r));
} : Bg && !YW ? (Hc = new Bg(), Uc = Hc.port2, Hc.port1.onmessage = Lg, _n = VW(Uc.postMessage, Uc)) : Ut.addEventListener && Dg(Ut.postMessage) && !Ut.importScripts && so && so.protocol !== "file:" && !rE(zg) ? (_n = zg, Ut.addEventListener("message", Lg, !1)) : jg in Ng("script") ? _n = function(r) {
  Mg.appendChild(Ng("script"))[jg] = function() {
    Mg.removeChild(this), cv(r);
  };
} : _n = function(r) {
  setTimeout(Vc(r), 0);
});
var nE = {
  set: jf
}, iE = function() {
  this.head = null, this.tail = null;
};
iE.prototype = {
  add: function(r) {
    var i = { item: r, next: null }, e = this.tail;
    e ? e.next = i : this.head = i, this.tail = i;
  },
  get: function() {
    var r = this.head;
    if (r) {
      var i = this.head = r.next;
      return i === null && (this.tail = null), r.item;
    }
  }
};
var aE = iE, eH = vn, tH = /ipad|iphone|ipod/i.test(eH) && typeof Pebble < "u", rH = vn, nH = /web0s(?!.*chrome)/i.test(rH), Wn = Fe, Wg = pn, iH = qn.f, Gc = nE.set, aH = aE, oH = tE, sH = tH, uH = nH, Kc = ko, Hg = Wn.MutationObserver || Wn.WebKitMutationObserver, Ug = Wn.document, Vg = Wn.process, Es = Wn.Promise, Gg = iH(Wn, "queueMicrotask"), Lf = Gg && Gg.value, pi, qc, Yc, Ss, Kg;
if (!Lf) {
  var Os = new aH(), Ts = function() {
    var r, i;
    for (Kc && (r = Vg.domain) && r.exit(); i = Os.get(); ) try {
      i();
    } catch (e) {
      throw Os.head && pi(), e;
    }
    r && r.enter();
  };
  !oH && !Kc && !uH && Hg && Ug ? (qc = !0, Yc = Ug.createTextNode(""), new Hg(Ts).observe(Yc, { characterData: !0 }), pi = function() {
    Yc.data = qc = !qc;
  }) : !sH && Es && Es.resolve ? (Ss = Es.resolve(void 0), Ss.constructor = Es, Kg = Wg(Ss.then, Ss), pi = function() {
    Kg(Ts);
  }) : Kc ? pi = function() {
    Vg.nextTick(Ts);
  } : (Gc = Wg(Gc, Wn), pi = function() {
    Gc(Ts);
  }), Lf = function(r) {
    Os.head || pi(), Os.add(r);
  };
}
var lH = Lf, cH = function(r, i) {
  try {
    arguments.length === 1 ? console.error(r) : console.error(r, i);
  } catch {
  }
}, ha = function(r) {
  try {
    return { error: !1, value: r() };
  } catch (i) {
    return { error: !0, value: i };
  }
}, dH = Fe, va = dH.Promise, oE = typeof Deno == "object" && Deno && typeof Deno.version == "object", fH = oE, hH = ko, vH = !fH && !hH && typeof window == "object" && typeof document == "object", pH = Fe, Ua = va, yH = Ue, gH = y_, mH = w_, bH = ze, $H = vH, _H = oE, Xc = na, qg = Ua && Ua.prototype, wH = bH("species"), Yg = !1, sE = yH(pH.PromiseRejectionEvent), EH = gH("Promise", function() {
  var r = mH(Ua), i = r !== String(Ua);
  if (!i && Xc === 66 || !(qg.catch && qg.finally)) return !0;
  if (!Xc || Xc < 51 || !/native code/.test(r)) {
    var e = new Ua(function(a) {
      a(1);
    }), t = function(a) {
      a(function() {
      }, function() {
      });
    }, n = e.constructor = {};
    if (n[wH] = t, Yg = e.then(function() {
    }) instanceof t, !Yg) return !0;
  }
  return !i && ($H || _H) && !sE;
}), Mo = {
  CONSTRUCTOR: EH,
  REJECTION_EVENT: sE
}, Tr = {}, Xg = Ft, SH = TypeError, OH = function(r) {
  var i, e;
  this.promise = new r(function(t, n) {
    if (i !== void 0 || e !== void 0) throw new SH("Bad Promise constructor");
    i = t, e = n;
  }), this.resolve = Xg(i), this.reject = Xg(e);
};
Tr.f = function(r) {
  return new OH(r);
};
var TH = re, ku = ko, ln = Fe, No = lt, PH = ua, IH = Qn, kH = Z0, CH = Ft, zf = Ue, xH = bt, RH = lv, AH = eE, uE = nE.set, dv = lH, DH = cH, MH = ha, NH = aE, lE = la, Wf = va, cE = Mo, dE = Tr, gl = "Promise", fE = cE.CONSTRUCTOR, FH = cE.REJECTION_EVENT, Jc = lE.getterFor(gl), BH = lE.set, jH = Wf && Wf.prototype, ki = Wf, Qc = jH, hE = ln.TypeError, Hf = ln.document, fv = ln.process, Uf = dE.f, LH = Uf, zH = !!(Hf && Hf.createEvent && ln.dispatchEvent), vE = "unhandledrejection", WH = "rejectionhandled", Jg = 0, pE = 1, HH = 2, hv = 1, yE = 2, Ps, Qg, UH, gE = function(r) {
  var i;
  return xH(r) && zf(i = r.then) ? i : !1;
}, mE = function(r, i) {
  var e = i.value, t = i.state === pE, n = t ? r.ok : r.fail, a = r.resolve, o = r.reject, s = r.domain, u, l, c;
  try {
    n ? (t || (i.rejection === yE && GH(i), i.rejection = hv), n === !0 ? u = e : (s && s.enter(), u = n(e), s && (s.exit(), c = !0)), u === r.promise ? o(new hE("Promise-chain cycle")) : (l = gE(u)) ? No(l, u, a, o) : a(u)) : o(e);
  } catch (d) {
    s && !c && s.exit(), o(d);
  }
}, bE = function(r, i) {
  r.notified || (r.notified = !0, dv(function() {
    for (var e = r.reactions, t; t = e.get(); )
      mE(t, r);
    r.notified = !1, i && !r.rejection && VH(r);
  }));
}, $E = function(r, i, e) {
  var t, n;
  zH ? (t = Hf.createEvent("Event"), t.promise = i, t.reason = e, t.initEvent(r, !1, !0), ln.dispatchEvent(t)) : t = { promise: i, reason: e }, !FH && (n = ln["on" + r]) ? n(t) : r === vE && DH("Unhandled promise rejection", e);
}, VH = function(r) {
  No(uE, ln, function() {
    var i = r.facade, e = r.value, t = Zg(r), n;
    if (t && (n = MH(function() {
      ku ? fv.emit("unhandledRejection", e, i) : $E(vE, i, e);
    }), r.rejection = ku || Zg(r) ? yE : hv, n.error))
      throw n.value;
  });
}, Zg = function(r) {
  return r.rejection !== hv && !r.parent;
}, GH = function(r) {
  No(uE, ln, function() {
    var i = r.facade;
    ku ? fv.emit("rejectionHandled", i) : $E(WH, i, r.value);
  });
}, Ci = function(r, i, e) {
  return function(t) {
    r(i, t, e);
  };
}, Ni = function(r, i, e) {
  r.done || (r.done = !0, e && (r = e), r.value = i, r.state = HH, bE(r, !0));
}, Vf = function(r, i, e) {
  if (!r.done) {
    r.done = !0, e && (r = e);
    try {
      if (r.facade === i) throw new hE("Promise can't be resolved itself");
      var t = gE(i);
      t ? dv(function() {
        var n = { done: !1 };
        try {
          No(
            t,
            i,
            Ci(Vf, n, r),
            Ci(Ni, n, r)
          );
        } catch (a) {
          Ni(n, a, r);
        }
      }) : (r.value = i, r.state = pE, bE(r, !1));
    } catch (n) {
      Ni({ done: !1 }, n, r);
    }
  }
};
fE && (ki = function(i) {
  RH(this, Qc), CH(i), No(Ps, this);
  var e = Jc(this);
  try {
    i(Ci(Vf, e), Ci(Ni, e));
  } catch (t) {
    Ni(e, t);
  }
}, Qc = ki.prototype, Ps = function(i) {
  BH(this, {
    type: gl,
    done: !1,
    notified: !1,
    parent: !1,
    reactions: new NH(),
    rejection: !1,
    state: Jg,
    value: void 0
  });
}, Ps.prototype = PH(Qc, "then", function(i, e) {
  var t = Jc(this), n = Uf(AH(this, ki));
  return t.parent = !0, n.ok = zf(i) ? i : !0, n.fail = zf(e) && e, n.domain = ku ? fv.domain : void 0, t.state === Jg ? t.reactions.add(n) : dv(function() {
    mE(n, t);
  }), n.promise;
}), Qg = function() {
  var r = new Ps(), i = Jc(r);
  this.promise = r, this.resolve = Ci(Vf, i), this.reject = Ci(Ni, i);
}, dE.f = Uf = function(r) {
  return r === ki || r === UH ? new Qg(r) : LH(r);
});
TH({ global: !0, wrap: !0, forced: fE }, {
  Promise: ki
});
IH(ki, gl, !1, !0);
kH(gl);
var KH = va, qH = Aw, YH = Mo.CONSTRUCTOR, ml = YH || !qH(function(r) {
  KH.all(r).then(void 0, function() {
  });
}), XH = re, JH = lt, QH = Ft, ZH = Tr, e4 = ha, t4 = ei, r4 = ml;
XH({ target: "Promise", stat: !0, forced: r4 }, {
  all: function(i) {
    var e = this, t = ZH.f(e), n = t.resolve, a = t.reject, o = e4(function() {
      var s = QH(e.resolve), u = [], l = 0, c = 1;
      t4(i, function(d) {
        var f = l++, h = !1;
        c++, JH(s, e, d).then(function(v) {
          h || (h = !0, u[f] = v, --c || n(u));
        }, a);
      }), --c || n(u);
    });
    return o.error && a(o.value), t.promise;
  }
});
var n4 = re, i4 = Mo.CONSTRUCTOR, em = va;
em && em.prototype;
n4({ target: "Promise", proto: !0, forced: i4, real: !0 }, {
  catch: function(r) {
    return this.then(void 0, r);
  }
});
var a4 = re, o4 = lt, s4 = Ft, u4 = Tr, l4 = ha, c4 = ei, d4 = ml;
a4({ target: "Promise", stat: !0, forced: d4 }, {
  race: function(i) {
    var e = this, t = u4.f(e), n = t.reject, a = l4(function() {
      var o = s4(e.resolve);
      c4(i, function(s) {
        o4(o, e, s).then(t.resolve, n);
      });
    });
    return a.error && n(a.value), t.promise;
  }
});
var f4 = re, h4 = lt, v4 = Tr, p4 = Mo.CONSTRUCTOR;
f4({ target: "Promise", stat: !0, forced: p4 }, {
  reject: function(i) {
    var e = v4.f(this);
    return h4(e.reject, void 0, i), e.promise;
  }
});
var y4 = Vt, g4 = bt, m4 = Tr, _E = function(r, i) {
  if (y4(r), g4(i) && i.constructor === r) return i;
  var e = m4.f(r), t = e.resolve;
  return t(i), e.promise;
}, b4 = re, $4 = Pt, _4 = II, w4 = va, E4 = Mo.CONSTRUCTOR, S4 = _E, O4 = $4("Promise"), T4 = !E4;
b4({ target: "Promise", stat: !0, forced: _4 }, {
  resolve: function(i) {
    return S4(T4 && this === O4 ? w4 : this, i);
  }
});
var P4 = re, I4 = lt, k4 = Ft, C4 = Tr, x4 = ha, R4 = ei, A4 = ml;
P4({ target: "Promise", stat: !0, forced: A4 }, {
  allSettled: function(i) {
    var e = this, t = C4.f(e), n = t.resolve, a = t.reject, o = x4(function() {
      var s = k4(e.resolve), u = [], l = 0, c = 1;
      R4(i, function(d) {
        var f = l++, h = !1;
        c++, I4(s, e, d).then(function(v) {
          h || (h = !0, u[f] = { status: "fulfilled", value: v }, --c || n(u));
        }, function(v) {
          h || (h = !0, u[f] = { status: "rejected", reason: v }, --c || n(u));
        });
      }), --c || n(u);
    });
    return o.error && a(o.value), t.promise;
  }
});
var D4 = re, M4 = lt, N4 = Ft, F4 = Pt, B4 = Tr, j4 = ha, L4 = ei, z4 = ml, tm = "No one promise resolved";
D4({ target: "Promise", stat: !0, forced: z4 }, {
  any: function(i) {
    var e = this, t = F4("AggregateError"), n = B4.f(e), a = n.resolve, o = n.reject, s = j4(function() {
      var u = N4(e.resolve), l = [], c = 0, d = 1, f = !1;
      L4(i, function(h) {
        var v = c++, p = !1;
        d++, M4(u, e, h).then(function(y) {
          p || f || (f = !0, a(y));
        }, function(y) {
          p || f || (p = !0, l[v] = y, --d || o(new t(l, tm)));
        });
      }), --d || o(new t(l, tm));
    });
    return s.error && o(s.value), n.promise;
  }
});
var W4 = re, Gf = va, H4 = Se, U4 = Pt, V4 = Ue, G4 = eE, rm = _E, K4 = Gf && Gf.prototype, q4 = !!Gf && H4(function() {
  K4.finally.call({ then: function() {
  } }, function() {
  });
});
W4({ target: "Promise", proto: !0, real: !0, forced: q4 }, {
  finally: function(r) {
    var i = G4(this, U4("Promise")), e = V4(r);
    return this.then(
      e ? function(t) {
        return rm(i, r()).then(function() {
          return t;
        });
      } : r,
      e ? function(t) {
        return rm(i, r()).then(function() {
          throw t;
        });
      } : r
    );
  }
});
var Y4 = Be, X4 = Y4.Promise, J4 = X4, Q4 = J4, Z4 = re, eU = Tr;
Z4({ target: "Promise", stat: !0 }, {
  withResolvers: function() {
    var i = eU.f(this);
    return {
      promise: i.promise,
      resolve: i.resolve,
      reject: i.reject
    };
  }
});
var tU = Q4, rU = tU, nU = re, iU = Tr, aU = ha;
nU({ target: "Promise", stat: !0, forced: !0 }, {
  try: function(r) {
    var i = iU.f(this), e = aU(r);
    return (e.error ? i.reject : i.resolve)(e.value), i.promise;
  }
});
var oU = rU, sU = oU, uU = sU, lU = Kw, cU = lU, dU = cU, fU = dU, hU = fU;
(function(r) {
  var i = L5.default, e = $_, t = qh, n = U0, a = K0, o = V5, s = Lw, u = V0, l = uU, c = hU, d = Ww;
  function f() {
    r.exports = f = function() {
      return v;
    }, r.exports.__esModule = !0, r.exports.default = r.exports;
    var h, v = {}, p = Object.prototype, y = p.hasOwnProperty, m = e || function(P, S, k) {
      P[S] = k.value;
    }, b = typeof t == "function" ? t : {}, w = b.iterator || "@@iterator", _ = b.asyncIterator || "@@asyncIterator", $ = b.toStringTag || "@@toStringTag";
    function C(P, S, k) {
      return e(P, S, {
        value: k,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), P[S];
    }
    try {
      C({}, "");
    } catch {
      C = function(k, O, J) {
        return k[O] = J;
      };
    }
    function j(P, S, k, O) {
      var J = S && S.prototype instanceof de ? S : de, te = n(J.prototype), Oe = new Q(O || []);
      return m(te, "_invoke", {
        value: K(P, k, Oe)
      }), te;
    }
    function W(P, S, k) {
      try {
        return {
          type: "normal",
          arg: P.call(S, k)
        };
      } catch (O) {
        return {
          type: "throw",
          arg: O
        };
      }
    }
    v.wrap = j;
    var B = "suspendedStart", L = "suspendedYield", X = "executing", ue = "completed", ee = {};
    function de() {
    }
    function ke() {
    }
    function ve() {
    }
    var Ne = {};
    C(Ne, w, function() {
      return this;
    });
    var je = a, Le = je && je(je(Z([])));
    Le && Le !== p && y.call(Le, w) && (Ne = Le);
    var I = ve.prototype = de.prototype = n(Ne);
    function F(P) {
      var S;
      o(S = ["next", "throw", "return"]).call(S, function(k) {
        C(P, k, function(O) {
          return this._invoke(k, O);
        });
      });
    }
    function H(P, S) {
      function k(J, te, Oe, Qe) {
        var pt = W(P[J], P, te);
        if (pt.type !== "throw") {
          var vr = pt.arg, zt = vr.value;
          return zt && i(zt) == "object" && y.call(zt, "__await") ? S.resolve(zt.__await).then(function(kr) {
            k("next", kr, Oe, Qe);
          }, function(kr) {
            k("throw", kr, Oe, Qe);
          }) : S.resolve(zt).then(function(kr) {
            vr.value = kr, Oe(vr);
          }, function(kr) {
            return k("throw", kr, Oe, Qe);
          });
        }
        Qe(pt.arg);
      }
      var O;
      m(this, "_invoke", {
        value: function(te, Oe) {
          function Qe() {
            return new S(function(pt, vr) {
              k(te, Oe, pt, vr);
            });
          }
          return O = O ? O.then(Qe, Qe) : Qe();
        }
      });
    }
    function K(P, S, k) {
      var O = B;
      return function(J, te) {
        if (O === X) throw new Error("Generator is already running");
        if (O === ue) {
          if (J === "throw") throw te;
          return {
            value: h,
            done: !0
          };
        }
        for (k.method = J, k.arg = te; ; ) {
          var Oe = k.delegate;
          if (Oe) {
            var Qe = U(Oe, k);
            if (Qe) {
              if (Qe === ee) continue;
              return Qe;
            }
          }
          if (k.method === "next") k.sent = k._sent = k.arg;
          else if (k.method === "throw") {
            if (O === B) throw O = ue, k.arg;
            k.dispatchException(k.arg);
          } else k.method === "return" && k.abrupt("return", k.arg);
          O = X;
          var pt = W(P, S, k);
          if (pt.type === "normal") {
            if (O = k.done ? ue : L, pt.arg === ee) continue;
            return {
              value: pt.arg,
              done: k.done
            };
          }
          pt.type === "throw" && (O = ue, k.method = "throw", k.arg = pt.arg);
        }
      };
    }
    function U(P, S) {
      var k = S.method, O = P.iterator[k];
      if (O === h) return S.delegate = null, k === "throw" && P.iterator.return && (S.method = "return", S.arg = h, U(P, S), S.method === "throw") || k !== "return" && (S.method = "throw", S.arg = new TypeError("The iterator does not provide a '" + k + "' method")), ee;
      var J = W(O, P.iterator, S.arg);
      if (J.type === "throw") return S.method = "throw", S.arg = J.arg, S.delegate = null, ee;
      var te = J.arg;
      return te ? te.done ? (S[P.resultName] = te.value, S.next = P.nextLoc, S.method !== "return" && (S.method = "next", S.arg = h), S.delegate = null, ee) : te : (S.method = "throw", S.arg = new TypeError("iterator result is not an object"), S.delegate = null, ee);
    }
    function ne(P) {
      var S, k = {
        tryLoc: P[0]
      };
      1 in P && (k.catchLoc = P[1]), 2 in P && (k.finallyLoc = P[2], k.afterLoc = P[3]), s(S = this.tryEntries).call(S, k);
    }
    function ie(P) {
      var S = P.completion || {};
      S.type = "normal", delete S.arg, P.completion = S;
    }
    function Q(P) {
      this.tryEntries = [{
        tryLoc: "root"
      }], o(P).call(P, ne, this), this.reset(!0);
    }
    function Z(P) {
      if (P || P === "") {
        var S = P[w];
        if (S) return S.call(P);
        if (typeof P.next == "function") return P;
        if (!isNaN(P.length)) {
          var k = -1, O = function J() {
            for (; ++k < P.length; ) if (y.call(P, k)) return J.value = P[k], J.done = !1, J;
            return J.value = h, J.done = !0, J;
          };
          return O.next = O;
        }
      }
      throw new TypeError(i(P) + " is not iterable");
    }
    return ke.prototype = ve, m(I, "constructor", {
      value: ve,
      configurable: !0
    }), m(ve, "constructor", {
      value: ke,
      configurable: !0
    }), ke.displayName = C(ve, $, "GeneratorFunction"), v.isGeneratorFunction = function(P) {
      var S = typeof P == "function" && P.constructor;
      return !!S && (S === ke || (S.displayName || S.name) === "GeneratorFunction");
    }, v.mark = function(P) {
      return u ? u(P, ve) : (P.__proto__ = ve, C(P, $, "GeneratorFunction")), P.prototype = n(I), P;
    }, v.awrap = function(P) {
      return {
        __await: P
      };
    }, F(H.prototype), C(H.prototype, _, function() {
      return this;
    }), v.AsyncIterator = H, v.async = function(P, S, k, O, J) {
      J === void 0 && (J = l);
      var te = new H(j(P, S, k, O), J);
      return v.isGeneratorFunction(S) ? te : te.next().then(function(Oe) {
        return Oe.done ? Oe.value : te.next();
      });
    }, F(I), C(I, $, "Generator"), C(I, w, function() {
      return this;
    }), C(I, "toString", function() {
      return "[object Generator]";
    }), v.keys = function(P) {
      var S = Object(P), k = [];
      for (var O in S) s(k).call(k, O);
      return c(k).call(k), function J() {
        for (; k.length; ) {
          var te = k.pop();
          if (te in S) return J.value = te, J.done = !1, J;
        }
        return J.done = !0, J;
      };
    }, v.values = Z, Q.prototype = {
      constructor: Q,
      reset: function(S) {
        var k;
        if (this.prev = 0, this.next = 0, this.sent = this._sent = h, this.done = !1, this.delegate = null, this.method = "next", this.arg = h, o(k = this.tryEntries).call(k, ie), !S) for (var O in this) O.charAt(0) === "t" && y.call(this, O) && !isNaN(+d(O).call(O, 1)) && (this[O] = h);
      },
      stop: function() {
        this.done = !0;
        var S = this.tryEntries[0].completion;
        if (S.type === "throw") throw S.arg;
        return this.rval;
      },
      dispatchException: function(S) {
        if (this.done) throw S;
        var k = this;
        function O(vr, zt) {
          return Oe.type = "throw", Oe.arg = S, k.next = vr, zt && (k.method = "next", k.arg = h), !!zt;
        }
        for (var J = this.tryEntries.length - 1; J >= 0; --J) {
          var te = this.tryEntries[J], Oe = te.completion;
          if (te.tryLoc === "root") return O("end");
          if (te.tryLoc <= this.prev) {
            var Qe = y.call(te, "catchLoc"), pt = y.call(te, "finallyLoc");
            if (Qe && pt) {
              if (this.prev < te.catchLoc) return O(te.catchLoc, !0);
              if (this.prev < te.finallyLoc) return O(te.finallyLoc);
            } else if (Qe) {
              if (this.prev < te.catchLoc) return O(te.catchLoc, !0);
            } else {
              if (!pt) throw new Error("try statement without catch or finally");
              if (this.prev < te.finallyLoc) return O(te.finallyLoc);
            }
          }
        }
      },
      abrupt: function(S, k) {
        for (var O = this.tryEntries.length - 1; O >= 0; --O) {
          var J = this.tryEntries[O];
          if (J.tryLoc <= this.prev && y.call(J, "finallyLoc") && this.prev < J.finallyLoc) {
            var te = J;
            break;
          }
        }
        te && (S === "break" || S === "continue") && te.tryLoc <= k && k <= te.finallyLoc && (te = null);
        var Oe = te ? te.completion : {};
        return Oe.type = S, Oe.arg = k, te ? (this.method = "next", this.next = te.finallyLoc, ee) : this.complete(Oe);
      },
      complete: function(S, k) {
        if (S.type === "throw") throw S.arg;
        return S.type === "break" || S.type === "continue" ? this.next = S.arg : S.type === "return" ? (this.rval = this.arg = S.arg, this.method = "return", this.next = "end") : S.type === "normal" && k && (this.next = k), ee;
      },
      finish: function(S) {
        for (var k = this.tryEntries.length - 1; k >= 0; --k) {
          var O = this.tryEntries[k];
          if (O.finallyLoc === S) return this.complete(O.completion, O.afterLoc), ie(O), ee;
        }
      },
      catch: function(S) {
        for (var k = this.tryEntries.length - 1; k >= 0; --k) {
          var O = this.tryEntries[k];
          if (O.tryLoc === S) {
            var J = O.completion;
            if (J.type === "throw") {
              var te = J.arg;
              ie(O);
            }
            return te;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(S, k, O) {
        return this.delegate = {
          iterator: Z(S),
          resultName: k,
          nextLoc: O
        }, this.method === "next" && (this.arg = h), ee;
      }
    }, v;
  }
  r.exports = f, r.exports.__esModule = !0, r.exports.default = r.exports;
})(q0);
var vU = q0.exports, nu = vU(), pU = nu;
try {
  regeneratorRuntime = nu;
} catch {
  typeof globalThis == "object" ? globalThis.regeneratorRuntime = nu : Function("r", "regeneratorRuntime = r")(nu);
}
var kt = /* @__PURE__ */ se(pU), wE = { exports: {} }, yU = Se, gU = yU(function() {
  if (typeof ArrayBuffer == "function") {
    var r = new ArrayBuffer(8);
    Object.isExtensible(r) && Object.defineProperty(r, "a", { value: 8 });
  }
}), mU = Se, bU = bt, $U = hn, nm = gU, iu = Object.isExtensible, _U = mU(function() {
  iu(1);
}), wU = _U || nm ? function(i) {
  return !bU(i) || nm && $U(i) === "ArrayBuffer" ? !1 : iu ? iu(i) : !0;
} : iu, EU = Se, SU = !EU(function() {
  return Object.isExtensible(Object.preventExtensions({}));
}), OU = re, TU = Me, PU = _o, IU = bt, vv = it, kU = jt.f, im = wo, CU = jh, pv = wU, xU = Gu, RU = SU, EE = !1, Wr = xU("meta"), AU = 0, yv = function(r) {
  kU(r, Wr, { value: {
    objectID: "O" + AU++,
    // object ID
    weakData: {}
    // weak collections IDs
  } });
}, DU = function(r, i) {
  if (!IU(r)) return typeof r == "symbol" ? r : (typeof r == "string" ? "S" : "P") + r;
  if (!vv(r, Wr)) {
    if (!pv(r)) return "F";
    if (!i) return "E";
    yv(r);
  }
  return r[Wr].objectID;
}, MU = function(r, i) {
  if (!vv(r, Wr)) {
    if (!pv(r)) return !0;
    if (!i) return !1;
    yv(r);
  }
  return r[Wr].weakData;
}, NU = function(r) {
  return RU && EE && pv(r) && !vv(r, Wr) && yv(r), r;
}, FU = function() {
  BU.enable = function() {
  }, EE = !0;
  var r = im.f, i = TU([].splice), e = {};
  e[Wr] = 1, r(e).length && (im.f = function(t) {
    for (var n = r(t), a = 0, o = n.length; a < o; a++)
      if (n[a] === Wr) {
        i(n, a, 1);
        break;
      }
    return n;
  }, OU({ target: "Object", stat: !0, forced: !0 }, {
    getOwnPropertyNames: CU.f
  }));
}, BU = wE.exports = {
  enable: FU,
  fastKey: DU,
  getWeakData: MU,
  onFreeze: NU
};
PU[Wr] = !0;
var SE = wE.exports, jU = re, LU = Fe, zU = SE, WU = Se, HU = Vr, UU = ei, VU = lv, GU = Ue, KU = bt, qU = ra, YU = Qn, XU = jt.f, JU = ca.forEach, QU = ut, OE = la, ZU = OE.set, e6 = OE.getterFor, TE = function(r, i, e) {
  var t = r.indexOf("Map") !== -1, n = r.indexOf("Weak") !== -1, a = t ? "set" : "add", o = LU[r], s = o && o.prototype, u = {}, l;
  if (!QU || !GU(o) || !(n || s.forEach && !WU(function() {
    new o().entries().next();
  })))
    l = e.getConstructor(i, r, t, a), zU.enable();
  else {
    l = i(function(f, h) {
      ZU(VU(f, c), {
        type: r,
        collection: new o()
      }), qU(h) || UU(h, f[a], { that: f, AS_ENTRIES: t });
    });
    var c = l.prototype, d = e6(r);
    JU(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(f) {
      var h = f === "add" || f === "set";
      f in s && !(n && f === "clear") && HU(c, f, function(v, p) {
        var y = d(this).collection;
        if (!h && n && !KU(v)) return f === "get" ? void 0 : !1;
        var m = y[f](v === 0 ? 0 : v, p);
        return h ? this : m;
      });
    }), n || XU(c, "size", {
      configurable: !0,
      get: function() {
        return d(this).collection.size;
      }
    });
  }
  return YU(l, r, !1, !0), u[r] = l, jU({ global: !0, forced: !0 }, u), n || e.setStrong(l, r, t), l;
}, t6 = ua, r6 = function(r, i, e) {
  for (var t in i)
    e && e.unsafe && r[t] ? r[t] = i[t] : t6(r, t, i[t], e);
  return r;
}, n6 = Jn, i6 = Lh, am = r6, a6 = pn, o6 = lv, s6 = ra, u6 = ei, l6 = Vh, Is = Gh, c6 = Z0, xa = ut, om = SE.fastKey, PE = la, sm = PE.set, Zc = PE.getterFor, IE = {
  getConstructor: function(r, i, e, t) {
    var n = r(function(l, c) {
      o6(l, a), sm(l, {
        type: i,
        index: n6(null),
        first: void 0,
        last: void 0,
        size: 0
      }), xa || (l.size = 0), s6(c) || u6(c, l[t], { that: l, AS_ENTRIES: e });
    }), a = n.prototype, o = Zc(i), s = function(l, c, d) {
      var f = o(l), h = u(l, c), v, p;
      return h ? h.value = d : (f.last = h = {
        index: p = om(c, !0),
        key: c,
        value: d,
        previous: v = f.last,
        next: void 0,
        removed: !1
      }, f.first || (f.first = h), v && (v.next = h), xa ? f.size++ : l.size++, p !== "F" && (f.index[p] = h)), l;
    }, u = function(l, c) {
      var d = o(l), f = om(c), h;
      if (f !== "F") return d.index[f];
      for (h = d.first; h; h = h.next)
        if (h.key === c) return h;
    };
    return am(a, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function() {
        for (var c = this, d = o(c), f = d.index, h = d.first; h; )
          h.removed = !0, h.previous && (h.previous = h.previous.next = void 0), delete f[h.index], h = h.next;
        d.first = d.last = void 0, xa ? d.size = 0 : c.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      delete: function(l) {
        var c = this, d = o(c), f = u(c, l);
        if (f) {
          var h = f.next, v = f.previous;
          delete d.index[f.index], f.removed = !0, v && (v.next = h), h && (h.previous = v), d.first === f && (d.first = h), d.last === f && (d.last = v), xa ? d.size-- : c.size--;
        }
        return !!f;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function(c) {
        for (var d = o(this), f = a6(c, arguments.length > 1 ? arguments[1] : void 0), h; h = h ? h.next : d.first; )
          for (f(h.value, h.key, this); h && h.removed; ) h = h.previous;
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function(c) {
        return !!u(this, c);
      }
    }), am(a, e ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function(c) {
        var d = u(this, c);
        return d && d.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function(c, d) {
        return s(this, c === 0 ? 0 : c, d);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function(c) {
        return s(this, c = c === 0 ? 0 : c, c);
      }
    }), xa && i6(a, "size", {
      configurable: !0,
      get: function() {
        return o(this).size;
      }
    }), n;
  },
  setStrong: function(r, i, e) {
    var t = i + " Iterator", n = Zc(i), a = Zc(t);
    l6(r, i, function(o, s) {
      sm(this, {
        type: t,
        target: o,
        state: n(o),
        kind: s,
        last: void 0
      });
    }, function() {
      for (var o = a(this), s = o.kind, u = o.last; u && u.removed; ) u = u.previous;
      return !o.target || !(o.last = u = u ? u.next : o.state.first) ? (o.target = void 0, Is(void 0, !0)) : Is(s === "keys" ? u.key : s === "values" ? u.value : [u.key, u.value], !1);
    }, e ? "entries" : "values", !e, !0), c6(i);
  }
}, d6 = TE, f6 = IE;
d6("Map", function(r) {
  return function() {
    return r(this, arguments.length ? arguments[0] : void 0);
  };
}, f6);
var h6 = Be, v6 = h6.Map, p6 = v6, y6 = p6, g6 = y6, kE = /* @__PURE__ */ se(g6), m6 = re, b6 = ca.some, $6 = cl, _6 = $6("some");
m6({ target: "Array", proto: !0, forced: !_6 }, {
  some: function(i) {
    return b6(this, i, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var w6 = $t, E6 = w6("Array", "some"), S6 = nt, O6 = E6, ed = Array.prototype, T6 = function(r) {
  var i = r.some;
  return r === ed || S6(ed, r) && i === ed.some ? O6 : i;
}, P6 = T6, I6 = P6, k6 = I6, C6 = /* @__PURE__ */ se(k6), x6 = $t, R6 = x6("Array", "keys"), A6 = R6, D6 = A6, M6 = Gr, N6 = it, F6 = nt, B6 = D6, td = Array.prototype, j6 = {
  DOMTokenList: !0,
  NodeList: !0
}, L6 = function(r) {
  var i = r.keys;
  return r === td || F6(td, r) && i === td.keys || N6(j6, M6(r)) ? B6 : i;
}, z6 = L6, yi = /* @__PURE__ */ se(z6), um = R_, W6 = Math.floor, Kf = function(r, i) {
  var e = r.length, t = W6(e / 2);
  return e < 8 ? H6(r, i) : U6(
    r,
    Kf(um(r, 0, t), i),
    Kf(um(r, t), i),
    i
  );
}, H6 = function(r, i) {
  for (var e = r.length, t = 1, n, a; t < e; ) {
    for (a = t, n = r[t]; a && i(r[a - 1], n) > 0; )
      r[a] = r[--a];
    a !== t++ && (r[a] = n);
  }
  return r;
}, U6 = function(r, i, e, t) {
  for (var n = i.length, a = e.length, o = 0, s = 0; o < n || s < a; )
    r[o + s] = o < n && s < a ? t(i[o], e[s]) <= 0 ? i[o++] : e[s++] : o < n ? i[o++] : e[s++];
  return r;
}, V6 = Kf, G6 = vn, lm = G6.match(/firefox\/(\d+)/i), K6 = !!lm && +lm[1], q6 = vn, Y6 = /MSIE|Trident/.test(q6), X6 = vn, cm = X6.match(/AppleWebKit\/(\d+)\./), J6 = !!cm && +cm[1], Q6 = re, CE = Me, Z6 = Ft, eV = Bt, dm = Gt, tV = qw, fm = Xn, gv = Se, rV = V6, nV = cl, hm = K6, iV = Y6, vm = na, pm = J6, Qr = [], ym = CE(Qr.sort), aV = CE(Qr.push), oV = gv(function() {
  Qr.sort(void 0);
}), sV = gv(function() {
  Qr.sort(null);
}), uV = nV("sort"), xE = !gv(function() {
  if (vm) return vm < 70;
  if (!(hm && hm > 3)) {
    if (iV) return !0;
    if (pm) return pm < 603;
    var r = "", i, e, t, n;
    for (i = 65; i < 76; i++) {
      switch (e = String.fromCharCode(i), i) {
        case 66:
        case 69:
        case 70:
        case 72:
          t = 3;
          break;
        case 68:
        case 71:
          t = 4;
          break;
        default:
          t = 2;
      }
      for (n = 0; n < 47; n++)
        Qr.push({ k: e + n, v: t });
    }
    for (Qr.sort(function(a, o) {
      return o.v - a.v;
    }), n = 0; n < Qr.length; n++)
      e = Qr[n].k.charAt(0), r.charAt(r.length - 1) !== e && (r += e);
    return r !== "DGBEFHACIJK";
  }
}), lV = oV || !sV || !uV || !xE, cV = function(r) {
  return function(i, e) {
    return e === void 0 ? -1 : i === void 0 ? 1 : r !== void 0 ? +r(i, e) || 0 : fm(i) > fm(e) ? 1 : -1;
  };
};
Q6({ target: "Array", proto: !0, forced: lV }, {
  sort: function(i) {
    i !== void 0 && Z6(i);
    var e = eV(this);
    if (xE) return i === void 0 ? ym(e) : ym(e, i);
    var t = [], n = dm(e), a, o;
    for (o = 0; o < n; o++)
      o in e && aV(t, e[o]);
    for (rV(t, cV(i)), a = dm(t), o = 0; o < a; ) e[o] = t[o++];
    for (; o < n; ) tV(e, o++);
    return e;
  }
});
var dV = $t, fV = dV("Array", "sort"), hV = nt, vV = fV, rd = Array.prototype, pV = function(r) {
  var i = r.sort;
  return r === rd || hV(rd, r) && i === rd.sort ? vV : i;
}, yV = pV, gV = yV, mV = gV, qf = /* @__PURE__ */ se(mV), bV = $t, $V = bV("Array", "values"), _V = $V, wV = _V, EV = Gr, SV = it, OV = nt, TV = wV, nd = Array.prototype, PV = {
  DOMTokenList: !0,
  NodeList: !0
}, IV = function(r) {
  var i = r.values;
  return r === nd || OV(nd, r) && i === nd.values || SV(PV, EV(r)) ? TV : i;
}, kV = IV, gm = /* @__PURE__ */ se(kV), CV = $w, xi = /* @__PURE__ */ se(CV), xV = $t, RV = xV("Array", "entries"), AV = RV, DV = AV, MV = Gr, NV = it, FV = nt, BV = DV, id = Array.prototype, jV = {
  DOMTokenList: !0,
  NodeList: !0
}, LV = function(r) {
  var i = r.entries;
  return r === id || FV(id, r) && i === id.entries || NV(jV, MV(r)) ? BV : i;
}, zV = LV, WV = /* @__PURE__ */ se(zV);
let ks;
const HV = new Uint8Array(16);
function UV() {
  if (!ks && (ks = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ks))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ks(HV);
}
const yt = [];
for (let r = 0; r < 256; ++r)
  yt.push((r + 256).toString(16).slice(1));
function VV(r, i = 0) {
  return yt[r[i + 0]] + yt[r[i + 1]] + yt[r[i + 2]] + yt[r[i + 3]] + "-" + yt[r[i + 4]] + yt[r[i + 5]] + "-" + yt[r[i + 6]] + yt[r[i + 7]] + "-" + yt[r[i + 8]] + yt[r[i + 9]] + "-" + yt[r[i + 10]] + yt[r[i + 11]] + yt[r[i + 12]] + yt[r[i + 13]] + yt[r[i + 14]] + yt[r[i + 15]];
}
const GV = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var mm = {
  randomUUID: GV
};
function KV(r, i, e) {
  if (mm.randomUUID && !r)
    return mm.randomUUID();
  r = r || {};
  const t = r.random || (r.rng || UV)();
  return t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, VV(t);
}
function bm(r) {
  return typeof r == "string" || typeof r == "number";
}
var qV = /* @__PURE__ */ (function() {
  function r(i) {
    Hu(this, r), rn(this, "_queue", []), rn(this, "_timeout", null), rn(this, "_extended", null), this.delay = null, this.max = 1 / 0, this.setOptions(i);
  }
  return ll(r, [{
    key: "setOptions",
    value: function(e) {
      e && typeof e.delay < "u" && (this.delay = e.delay), e && typeof e.max < "u" && (this.max = e.max), this._flushIfNeeded();
    }
    /**
     * Extend an object with queuing functionality.
     * The object will be extended with a function flush, and the methods provided in options.replace will be replaced with queued ones.
     *
     * @param object - The object to be extended.
     * @param options - Additional options.
     * @returns The created queue.
     */
  }, {
    key: "destroy",
    value: (
      /**
       * Destroy the queue. The queue will first flush all queued actions, and in case it has extended an object, will restore the original object.
       */
      function() {
        if (this.flush(), this._extended) {
          for (var e = this._extended.object, t = this._extended.methods, n = 0; n < t.length; n++) {
            var a = t[n];
            a.original ? e[a.name] = a.original : delete e[a.name];
          }
          this._extended = null;
        }
      }
    )
    /**
     * Replace a method on an object with a queued version.
     *
     * @param object - Object having the method.
     * @param method - The method name.
     */
  }, {
    key: "replace",
    value: function(e, t) {
      var n = this, a = e[t];
      if (!a)
        throw new Error("Method " + t + " undefined");
      e[t] = function() {
        for (var o = arguments.length, s = new Array(o), u = 0; u < o; u++)
          s[u] = arguments[u];
        n.queue({
          args: s,
          fn: a,
          context: this
        });
      };
    }
    /**
     * Queue a call.
     *
     * @param entry - The function or entry to be queued.
     */
  }, {
    key: "queue",
    value: function(e) {
      typeof e == "function" ? this._queue.push({
        fn: e
      }) : this._queue.push(e), this._flushIfNeeded();
    }
    /**
     * Check whether the queue needs to be flushed.
     */
  }, {
    key: "_flushIfNeeded",
    value: function() {
      var e = this;
      this._queue.length > this.max && this.flush(), this._timeout != null && (clearTimeout(this._timeout), this._timeout = null), this.queue.length > 0 && typeof this.delay == "number" && (this._timeout = _z(function() {
        e.flush();
      }, this.delay));
    }
    /**
     * Flush all queued calls
     */
  }, {
    key: "flush",
    value: function() {
      var e, t;
      Bn(e = Yw(t = this._queue).call(t, 0)).call(e, function(n) {
        n.fn.apply(n.context || n.fn, n.args || []);
      });
    }
  }], [{
    key: "extend",
    value: function(e, t) {
      var n = new r(t);
      if (e.flush !== void 0)
        throw new Error("Target object already has a property flush");
      e.flush = function() {
        n.flush();
      };
      var a = [{
        name: "flush",
        original: void 0
      }];
      if (t && t.replace)
        for (var o = 0; o < t.replace.length; o++) {
          var s = t.replace[o];
          a.push({
            name: s,
            // @TODO: better solution?
            original: e[s]
          }), n.replace(e, s);
        }
      return n._extended = {
        object: e,
        methods: a
      }, n;
    }
  }]), r;
})(), YV = /* @__PURE__ */ (function() {
  function r() {
    Hu(this, r), rn(this, "_subscribers", {
      "*": [],
      add: [],
      remove: [],
      update: []
    }), rn(this, "subscribe", r.prototype.on), rn(this, "unsubscribe", r.prototype.off);
  }
  return ll(r, [{
    key: "_trigger",
    value: (
      /**
       * Trigger an event
       *
       * @param event - Event name.
       * @param payload - Event payload.
       * @param senderId - Id of the sender.
       */
      function(e, t, n) {
        var a, o;
        if (e === "*")
          throw new Error("Cannot trigger event *");
        Bn(a = hl(o = []).call(o, Rt(this._subscribers[e]), Rt(this._subscribers["*"]))).call(a, function(s) {
          s(e, t, n ?? null);
        });
      }
    )
    /**
     * Subscribe to an event, add an event listener.
     *
     * @remarks Non-function callbacks are ignored.
     * @param event - Event name.
     * @param callback - Callback method.
     */
  }, {
    key: "on",
    value: function(e, t) {
      typeof t == "function" && this._subscribers[e].push(t);
    }
    /**
     * Unsubscribe from an event, remove an event listener.
     *
     * @remarks If the same callback was subscribed more than once **all** occurences will be removed.
     * @param event - Event name.
     * @param callback - Callback method.
     */
  }, {
    key: "off",
    value: function(e, t) {
      var n;
      this._subscribers[e] = Ti(n = this._subscribers[e]).call(n, function(a) {
        return a !== t;
      });
    }
  }]), r;
})(), XV = TE, JV = IE;
XV("Set", function(r) {
  return function() {
    return r(this, arguments.length ? arguments[0] : void 0);
  };
}, JV);
var QV = Be, ZV = QV.Set, e8 = ZV, t8 = e8, r8 = t8, ad = /* @__PURE__ */ se(r8), n8 = Xh, i8 = n8, a8 = i8, o8 = a8, s8 = o8, u8 = s8, l8 = u8, c8 = l8, d8 = c8, f8 = d8, od = /* @__PURE__ */ se(f8);
function yr(r, i) {
  var e = typeof fl < "u" && Qh(r) || r["@@iterator"];
  if (!e) {
    if (Ht(r) || (e = h8(r)) || i) {
      e && (r = e);
      var t = 0, n = function() {
      };
      return { s: n, n: function() {
        return t >= r.length ? { done: !0 } : { done: !1, value: r[t++] };
      }, e: function(l) {
        throw l;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, s;
  return { s: function() {
    e = e.call(r);
  }, n: function() {
    var l = e.next();
    return a = l.done, l;
  }, e: function(l) {
    o = !0, s = l;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (o) throw s;
    }
  } };
}
function h8(r, i) {
  var e;
  if (r) {
    if (typeof r == "string") return $m(r, i);
    var t = vl(e = Object.prototype.toString.call(r)).call(e, 8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Jh(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return $m(r, i);
  }
}
function $m(r, i) {
  (i == null || i > r.length) && (i = r.length);
  for (var e = 0, t = new Array(i); e < i; e++) t[e] = r[e];
  return t;
}
var _m = /* @__PURE__ */ (function(r) {
  function i(e) {
    Hu(this, i), this._pairs = e;
  }
  return ll(i, [{
    key: r,
    value: /* @__PURE__ */ kt.mark(function e() {
      var t, n, a, o, s;
      return kt.wrap(function(l) {
        for (; ; ) switch (l.prev = l.next) {
          case 0:
            t = yr(this._pairs), l.prev = 1, t.s();
          case 3:
            if ((n = t.n()).done) {
              l.next = 9;
              break;
            }
            return a = It(n.value, 2), o = a[0], s = a[1], l.next = 7, [o, s];
          case 7:
            l.next = 3;
            break;
          case 9:
            l.next = 14;
            break;
          case 11:
            l.prev = 11, l.t0 = l.catch(1), t.e(l.t0);
          case 14:
            return l.prev = 14, t.f(), l.finish(14);
          case 17:
          case "end":
            return l.stop();
        }
      }, e, this, [[1, 11, 14, 17]]);
    })
    /**
     * Return an iterable of key, value pairs for every entry in the stream.
     */
  }, {
    key: "entries",
    value: /* @__PURE__ */ kt.mark(function e() {
      var t, n, a, o, s;
      return kt.wrap(function(l) {
        for (; ; ) switch (l.prev = l.next) {
          case 0:
            t = yr(this._pairs), l.prev = 1, t.s();
          case 3:
            if ((n = t.n()).done) {
              l.next = 9;
              break;
            }
            return a = It(n.value, 2), o = a[0], s = a[1], l.next = 7, [o, s];
          case 7:
            l.next = 3;
            break;
          case 9:
            l.next = 14;
            break;
          case 11:
            l.prev = 11, l.t0 = l.catch(1), t.e(l.t0);
          case 14:
            return l.prev = 14, t.f(), l.finish(14);
          case 17:
          case "end":
            return l.stop();
        }
      }, e, this, [[1, 11, 14, 17]]);
    })
    /**
     * Return an iterable of keys in the stream.
     */
  }, {
    key: "keys",
    value: /* @__PURE__ */ kt.mark(function e() {
      var t, n, a, o;
      return kt.wrap(function(u) {
        for (; ; ) switch (u.prev = u.next) {
          case 0:
            t = yr(this._pairs), u.prev = 1, t.s();
          case 3:
            if ((n = t.n()).done) {
              u.next = 9;
              break;
            }
            return a = It(n.value, 1), o = a[0], u.next = 7, o;
          case 7:
            u.next = 3;
            break;
          case 9:
            u.next = 14;
            break;
          case 11:
            u.prev = 11, u.t0 = u.catch(1), t.e(u.t0);
          case 14:
            return u.prev = 14, t.f(), u.finish(14);
          case 17:
          case "end":
            return u.stop();
        }
      }, e, this, [[1, 11, 14, 17]]);
    })
    /**
     * Return an iterable of values in the stream.
     */
  }, {
    key: "values",
    value: /* @__PURE__ */ kt.mark(function e() {
      var t, n, a, o;
      return kt.wrap(function(u) {
        for (; ; ) switch (u.prev = u.next) {
          case 0:
            t = yr(this._pairs), u.prev = 1, t.s();
          case 3:
            if ((n = t.n()).done) {
              u.next = 9;
              break;
            }
            return a = It(n.value, 2), o = a[1], u.next = 7, o;
          case 7:
            u.next = 3;
            break;
          case 9:
            u.next = 14;
            break;
          case 11:
            u.prev = 11, u.t0 = u.catch(1), t.e(u.t0);
          case 14:
            return u.prev = 14, t.f(), u.finish(14);
          case 17:
          case "end":
            return u.stop();
        }
      }, e, this, [[1, 11, 14, 17]]);
    })
    /**
     * Return an array containing all the ids in this stream.
     *
     * @remarks
     * The array may contain duplicities.
     * @returns The array with all ids from this stream.
     */
  }, {
    key: "toIdArray",
    value: function() {
      var t;
      return sr(t = Rt(this._pairs)).call(t, function(n) {
        return n[0];
      });
    }
    /**
     * Return an array containing all the items in this stream.
     *
     * @remarks
     * The array may contain duplicities.
     * @returns The array with all items from this stream.
     */
  }, {
    key: "toItemArray",
    value: function() {
      var t;
      return sr(t = Rt(this._pairs)).call(t, function(n) {
        return n[1];
      });
    }
    /**
     * Return an array containing all the entries in this stream.
     *
     * @remarks
     * The array may contain duplicities.
     * @returns The array with all entries from this stream.
     */
  }, {
    key: "toEntryArray",
    value: function() {
      return Rt(this._pairs);
    }
    /**
     * Return an object map containing all the items in this stream accessible by ids.
     *
     * @remarks
     * In case of duplicate ids (coerced to string so `7 == '7'`) the last encoutered appears in the returned object.
     * @returns The object map of all id → item pairs from this stream.
     */
  }, {
    key: "toObjectMap",
    value: function() {
      var t = JL(null), n = yr(this._pairs), a;
      try {
        for (n.s(); !(a = n.n()).done; ) {
          var o = It(a.value, 2), s = o[0], u = o[1];
          t[s] = u;
        }
      } catch (l) {
        n.e(l);
      } finally {
        n.f();
      }
      return t;
    }
    /**
     * Return a map containing all the items in this stream accessible by ids.
     *
     * @returns The map of all id → item pairs from this stream.
     */
  }, {
    key: "toMap",
    value: function() {
      return new kE(this._pairs);
    }
    /**
     * Return a set containing all the (unique) ids in this stream.
     *
     * @returns The set of all ids from this stream.
     */
  }, {
    key: "toIdSet",
    value: function() {
      return new ad(this.toIdArray());
    }
    /**
     * Return a set containing all the (unique) items in this stream.
     *
     * @returns The set of all items from this stream.
     */
  }, {
    key: "toItemSet",
    value: function() {
      return new ad(this.toItemArray());
    }
    /**
     * Cache the items from this stream.
     *
     * @remarks
     * This method allows for items to be fetched immediatelly and used (possibly multiple times) later.
     * It can also be used to optimize performance as {@link DataStream} would otherwise reevaluate everything upon each iteration.
     *
     * ## Example
     * ```javascript
     * const ds = new DataSet([…])
     *
     * const cachedStream = ds.stream()
     *   .filter(…)
     *   .sort(…)
     *   .map(…)
     *   .cached(…) // Data are fetched, processed and cached here.
     *
     * ds.clear()
     * chachedStream // Still has all the items.
     * ```
     * @returns A new {@link DataStream} with cached items (detached from the original {@link DataSet}).
     */
  }, {
    key: "cache",
    value: function() {
      return new i(Rt(this._pairs));
    }
    /**
     * Get the distinct values of given property.
     *
     * @param callback - The function that picks and possibly converts the property.
     * @typeParam T - The type of the distinct value.
     * @returns A set of all distinct properties.
     */
  }, {
    key: "distinct",
    value: function(t) {
      var n = new ad(), a = yr(this._pairs), o;
      try {
        for (a.s(); !(o = a.n()).done; ) {
          var s = It(o.value, 2), u = s[0], l = s[1];
          n.add(t(l, u));
        }
      } catch (c) {
        a.e(c);
      } finally {
        a.f();
      }
      return n;
    }
    /**
     * Filter the items of the stream.
     *
     * @param callback - The function that decides whether an item will be included.
     * @returns A new data stream with the filtered items.
     */
  }, {
    key: "filter",
    value: function(t) {
      var n = this._pairs;
      return new i({
        [xi]() {
          return /* @__PURE__ */ kt.mark(function a() {
            var o, s, u, l, c;
            return kt.wrap(function(f) {
              for (; ; ) switch (f.prev = f.next) {
                case 0:
                  o = yr(n), f.prev = 1, o.s();
                case 3:
                  if ((s = o.n()).done) {
                    f.next = 10;
                    break;
                  }
                  if (u = It(s.value, 2), l = u[0], c = u[1], !t(c, l)) {
                    f.next = 8;
                    break;
                  }
                  return f.next = 8, [l, c];
                case 8:
                  f.next = 3;
                  break;
                case 10:
                  f.next = 15;
                  break;
                case 12:
                  f.prev = 12, f.t0 = f.catch(1), o.e(f.t0);
                case 15:
                  return f.prev = 15, o.f(), f.finish(15);
                case 18:
                case "end":
                  return f.stop();
              }
            }, a, null, [[1, 12, 15, 18]]);
          })();
        }
      });
    }
    /**
     * Execute a callback for each item of the stream.
     *
     * @param callback - The function that will be invoked for each item.
     */
  }, {
    key: "forEach",
    value: function(t) {
      var n = yr(this._pairs), a;
      try {
        for (n.s(); !(a = n.n()).done; ) {
          var o = It(a.value, 2), s = o[0], u = o[1];
          t(u, s);
        }
      } catch (l) {
        n.e(l);
      } finally {
        n.f();
      }
    }
    /**
     * Map the items into a different type.
     *
     * @param callback - The function that does the conversion.
     * @typeParam Mapped - The type of the item after mapping.
     * @returns A new data stream with the mapped items.
     */
  }, {
    key: "map",
    value: function(t) {
      var n = this._pairs;
      return new i({
        [xi]() {
          return /* @__PURE__ */ kt.mark(function a() {
            var o, s, u, l, c;
            return kt.wrap(function(f) {
              for (; ; ) switch (f.prev = f.next) {
                case 0:
                  o = yr(n), f.prev = 1, o.s();
                case 3:
                  if ((s = o.n()).done) {
                    f.next = 9;
                    break;
                  }
                  return u = It(s.value, 2), l = u[0], c = u[1], f.next = 7, [l, t(c, l)];
                case 7:
                  f.next = 3;
                  break;
                case 9:
                  f.next = 14;
                  break;
                case 11:
                  f.prev = 11, f.t0 = f.catch(1), o.e(f.t0);
                case 14:
                  return f.prev = 14, o.f(), f.finish(14);
                case 17:
                case "end":
                  return f.stop();
              }
            }, a, null, [[1, 11, 14, 17]]);
          })();
        }
      });
    }
    /**
     * Get the item with the maximum value of given property.
     *
     * @param callback - The function that picks and possibly converts the property.
     * @returns The item with the maximum if found otherwise null.
     */
  }, {
    key: "max",
    value: function(t) {
      var n = od(this._pairs), a = n.next();
      if (a.done)
        return null;
      for (var o = a.value[1], s = t(a.value[1], a.value[0]); !(a = n.next()).done; ) {
        var u = It(a.value, 2), l = u[0], c = u[1], d = t(c, l);
        d > s && (s = d, o = c);
      }
      return o;
    }
    /**
     * Get the item with the minimum value of given property.
     *
     * @param callback - The function that picks and possibly converts the property.
     * @returns The item with the minimum if found otherwise null.
     */
  }, {
    key: "min",
    value: function(t) {
      var n = od(this._pairs), a = n.next();
      if (a.done)
        return null;
      for (var o = a.value[1], s = t(a.value[1], a.value[0]); !(a = n.next()).done; ) {
        var u = It(a.value, 2), l = u[0], c = u[1], d = t(c, l);
        d < s && (s = d, o = c);
      }
      return o;
    }
    /**
     * Reduce the items into a single value.
     *
     * @param callback - The function that does the reduction.
     * @param accumulator - The initial value of the accumulator.
     * @typeParam T - The type of the accumulated value.
     * @returns The reduced value.
     */
  }, {
    key: "reduce",
    value: function(t, n) {
      var a = yr(this._pairs), o;
      try {
        for (a.s(); !(o = a.n()).done; ) {
          var s = It(o.value, 2), u = s[0], l = s[1];
          n = t(n, l, u);
        }
      } catch (c) {
        a.e(c);
      } finally {
        a.f();
      }
      return n;
    }
    /**
     * Sort the items.
     *
     * @param callback - Item comparator.
     * @returns A new stream with sorted items.
     */
  }, {
    key: "sort",
    value: function(t) {
      var n = this;
      return new i({
        [xi]: function() {
          var a;
          return od(qf(a = Rt(n._pairs)).call(a, function(o, s) {
            var u = It(o, 2), l = u[0], c = u[1], d = It(s, 2), f = d[0], h = d[1];
            return t(c, h, l, f);
          }));
        }
      });
    }
  }]), i;
})(xi);
function wm(r, i) {
  var e = ev(r);
  if (Eg) {
    var t = Eg(r);
    i && (t = Ti(t).call(t, function(n) {
      return L0(r, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function Em(r) {
  for (var i = 1; i < arguments.length; i++) {
    var e, t, n = arguments[i] != null ? arguments[i] : {};
    i % 2 ? Bn(e = wm(Object(n), !0)).call(e, function(a) {
      rn(r, a, n[a]);
    }) : Sg ? d5(r, Sg(n)) : Bn(t = wm(Object(n))).call(t, function(a) {
      h5(r, a, L0(n, a));
    });
  }
  return r;
}
function sd(r, i) {
  var e = typeof fl < "u" && Qh(r) || r["@@iterator"];
  if (!e) {
    if (Ht(r) || (e = v8(r)) || i) {
      e && (r = e);
      var t = 0, n = function() {
      };
      return { s: n, n: function() {
        return t >= r.length ? { done: !0 } : { done: !1, value: r[t++] };
      }, e: function(l) {
        throw l;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, s;
  return { s: function() {
    e = e.call(r);
  }, n: function() {
    var l = e.next();
    return a = l.done, l;
  }, e: function(l) {
    o = !0, s = l;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (o) throw s;
    }
  } };
}
function v8(r, i) {
  var e;
  if (r) {
    if (typeof r == "string") return Sm(r, i);
    var t = vl(e = Object.prototype.toString.call(r)).call(e, 8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Jh(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Sm(r, i);
  }
}
function Sm(r, i) {
  (i == null || i > r.length) && (i = r.length);
  for (var e = 0, t = new Array(i); e < i; e++) t[e] = r[e];
  return t;
}
function p8(r) {
  var i = y8();
  return function() {
    var t = Tu(r), n;
    if (i) {
      var a = Tu(this).constructor;
      n = tu(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return M5(this, n);
  };
}
function y8() {
  if (typeof Reflect > "u" || !tu || tu.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(tu(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function g8(r, i) {
  return r[i] == null && (r[i] = KV()), r;
}
var Hn = /* @__PURE__ */ (function(r) {
  D5(e, r);
  var i = p8(e);
  function e(t, n) {
    var a;
    return Hu(this, e), a = i.call(this), rn(H0(a), "_queue", null), t && !Ht(t) && (n = t, t = []), a._options = n || {}, a._data = new kE(), a.length = 0, a._idProp = a._options.fieldId || "id", t && t.length && a.add(t), a.setOptions(n), a;
  }
  return ll(e, [{
    key: "idProp",
    get: (
      /** Flush all queued calls. */
      /** @inheritDoc */
      /** @inheritDoc */
      function() {
        return this._idProp;
      }
    )
  }, {
    key: "setOptions",
    value: function(n) {
      n && n.queue !== void 0 && (n.queue === !1 ? this._queue && (this._queue.destroy(), this._queue = null) : (this._queue || (this._queue = qV.extend(this, {
        replace: ["add", "update", "remove"]
      })), n.queue && typeof n.queue == "object" && this._queue.setOptions(n.queue)));
    }
    /**
     * Add a data item or an array with items.
     *
     * After the items are added to the DataSet, the DataSet will trigger an event `add`. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
     *
     * ## Example
     *
     * ```javascript
     * // create a DataSet
     * const data = new vis.DataSet()
     *
     * // add items
     * const ids = data.add([
     *   { id: 1, text: 'item 1' },
     *   { id: 2, text: 'item 2' },
     *   { text: 'item without an id' }
     * ])
     *
     * console.log(ids) // [1, 2, '<UUIDv4>']
     * ```
     *
     * @param data - Items to be added (ids will be generated if missing).
     * @param senderId - Sender id.
     * @returns addedIds - Array with the ids (generated if not present) of the added items.
     * @throws When an item with the same id as any of the added items already exists.
     */
  }, {
    key: "add",
    value: function(n, a) {
      var o = this, s = [], u;
      if (Ht(n)) {
        var l = sr(n).call(n, function(f) {
          return f[o._idProp];
        });
        if (C6(l).call(l, function(f) {
          return o._data.has(f);
        }))
          throw new Error("A duplicate id was found in the parameter array.");
        for (var c = 0, d = n.length; c < d; c++)
          u = this._addItem(n[c]), s.push(u);
      } else if (n && typeof n == "object")
        u = this._addItem(n), s.push(u);
      else
        throw new Error("Unknown dataType");
      return s.length && this._trigger("add", {
        items: s
      }, a), s;
    }
    /**
     * Update existing items. When an item does not exist, it will be created.
     *
     * @remarks
     * The provided properties will be merged in the existing item. When an item does not exist, it will be created.
     *
     * After the items are updated, the DataSet will trigger an event `add` for the added items, and an event `update`. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
     *
     * ## Example
     *
     * ```javascript
     * // create a DataSet
     * const data = new vis.DataSet([
     *   { id: 1, text: 'item 1' },
     *   { id: 2, text: 'item 2' },
     *   { id: 3, text: 'item 3' }
     * ])
     *
     * // update items
     * const ids = data.update([
     *   { id: 2, text: 'item 2 (updated)' },
     *   { id: 4, text: 'item 4 (new)' }
     * ])
     *
     * console.log(ids) // [2, 4]
     * ```
     *
     * ## Warning for TypeScript users
     * This method may introduce partial items into the data set. Use add or updateOnly instead for better type safety.
     * @param data - Items to be updated (if the id is already present) or added (if the id is missing).
     * @param senderId - Sender id.
     * @returns updatedIds - The ids of the added (these may be newly generated if there was no id in the item from the data) or updated items.
     * @throws When the supplied data is neither an item nor an array of items.
     */
  }, {
    key: "update",
    value: function(n, a) {
      var o = this, s = [], u = [], l = [], c = [], d = this._idProp, f = function(m) {
        var b = m[d];
        if (b != null && o._data.has(b)) {
          var w = m, _ = AL({}, o._data.get(b)), $ = o._updateItem(w);
          u.push($), c.push(w), l.push(_);
        } else {
          var C = o._addItem(m);
          s.push(C);
        }
      };
      if (Ht(n))
        for (var h = 0, v = n.length; h < v; h++)
          n[h] && typeof n[h] == "object" ? f(n[h]) : console.warn("Ignoring input item, which is not an object at index " + h);
      else if (n && typeof n == "object")
        f(n);
      else
        throw new Error("Unknown dataType");
      if (s.length && this._trigger("add", {
        items: s
      }, a), u.length) {
        var p = {
          items: u,
          oldData: l,
          data: c
        };
        this._trigger("update", p, a);
      }
      return hl(s).call(s, u);
    }
    /**
     * Update existing items. When an item does not exist, an error will be thrown.
     *
     * @remarks
     * The provided properties will be deeply merged into the existing item.
     * When an item does not exist (id not present in the data set or absent), an error will be thrown and nothing will be changed.
     *
     * After the items are updated, the DataSet will trigger an event `update`.
     * When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
     *
     * ## Example
     *
     * ```javascript
     * // create a DataSet
     * const data = new vis.DataSet([
     *   { id: 1, text: 'item 1' },
     *   { id: 2, text: 'item 2' },
     *   { id: 3, text: 'item 3' },
     * ])
     *
     * // update items
     * const ids = data.update([
     *   { id: 2, text: 'item 2 (updated)' }, // works
     *   // { id: 4, text: 'item 4 (new)' }, // would throw
     *   // { text: 'item 4 (new)' }, // would also throw
     * ])
     *
     * console.log(ids) // [2]
     * ```
     * @param data - Updates (the id and optionally other props) to the items in this data set.
     * @param senderId - Sender id.
     * @returns updatedIds - The ids of the updated items.
     * @throws When the supplied data is neither an item nor an array of items, when the ids are missing.
     */
  }, {
    key: "updateOnly",
    value: function(n, a) {
      var o, s = this;
      Ht(n) || (n = [n]);
      var u = sr(o = sr(n).call(n, function(c) {
        var d = s._data.get(c[s._idProp]);
        if (d == null)
          throw new Error("Updating non-existent items is not allowed.");
        return {
          oldData: d,
          update: c
        };
      })).call(o, function(c) {
        var d = c.oldData, f = c.update, h = d[s._idProp], v = f3(d, f);
        return s._data.set(h, v), {
          id: h,
          oldData: d,
          updatedData: v
        };
      });
      if (u.length) {
        var l = {
          items: sr(u).call(u, function(c) {
            return c.id;
          }),
          oldData: sr(u).call(u, function(c) {
            return c.oldData;
          }),
          data: sr(u).call(u, function(c) {
            return c.updatedData;
          })
        };
        return this._trigger("update", l, a), l.items;
      } else
        return [];
    }
    /** @inheritDoc */
  }, {
    key: "get",
    value: function(n, a) {
      var o = void 0, s = void 0, u = void 0;
      bm(n) ? (o = n, u = a) : Ht(n) ? (s = n, u = a) : u = n;
      var l = u && u.returnType === "Object" ? "Object" : "Array", c = u && Ti(u), d = [], f = void 0, h = void 0, v = void 0;
      if (o != null)
        f = this._data.get(o), f && c && !c(f) && (f = void 0);
      else if (s != null)
        for (var p = 0, y = s.length; p < y; p++)
          f = this._data.get(s[p]), f != null && (!c || c(f)) && d.push(f);
      else {
        var m;
        h = Rt(yi(m = this._data).call(m));
        for (var b = 0, w = h.length; b < w; b++)
          v = h[b], f = this._data.get(v), f != null && (!c || c(f)) && d.push(f);
      }
      if (u && u.order && o == null && this._sort(d, u.order), u && u.fields) {
        var _ = u.fields;
        if (o != null && f != null)
          f = this._filterFields(f, _);
        else
          for (var $ = 0, C = d.length; $ < C; $++)
            d[$] = this._filterFields(d[$], _);
      }
      if (l == "Object") {
        for (var j = {}, W = 0, B = d.length; W < B; W++) {
          var L = d[W], X = L[this._idProp];
          j[X] = L;
        }
        return j;
      } else if (o != null) {
        var ue;
        return (ue = f) !== null && ue !== void 0 ? ue : null;
      } else
        return d;
    }
    /** @inheritDoc */
  }, {
    key: "getIds",
    value: function(n) {
      var a = this._data, o = n && Ti(n), s = n && n.order, u = Rt(yi(a).call(a)), l = [];
      if (o)
        if (s) {
          for (var c = [], d = 0, f = u.length; d < f; d++) {
            var h = u[d], v = this._data.get(h);
            v != null && o(v) && c.push(v);
          }
          this._sort(c, s);
          for (var p = 0, y = c.length; p < y; p++)
            l.push(c[p][this._idProp]);
        } else
          for (var m = 0, b = u.length; m < b; m++) {
            var w = u[m], _ = this._data.get(w);
            _ != null && o(_) && l.push(_[this._idProp]);
          }
      else if (s) {
        for (var $ = [], C = 0, j = u.length; C < j; C++) {
          var W = u[C];
          $.push(a.get(W));
        }
        this._sort($, s);
        for (var B = 0, L = $.length; B < L; B++)
          l.push($[B][this._idProp]);
      } else
        for (var X = 0, ue = u.length; X < ue; X++) {
          var ee = u[X], de = a.get(ee);
          de != null && l.push(de[this._idProp]);
        }
      return l;
    }
    /** @inheritDoc */
  }, {
    key: "getDataSet",
    value: function() {
      return this;
    }
    /** @inheritDoc */
  }, {
    key: "forEach",
    value: function(n, a) {
      var o = a && Ti(a), s = this._data, u = Rt(yi(s).call(s));
      if (a && a.order)
        for (var l = this.get(a), c = 0, d = l.length; c < d; c++) {
          var f = l[c], h = f[this._idProp];
          n(f, h);
        }
      else
        for (var v = 0, p = u.length; v < p; v++) {
          var y = u[v], m = this._data.get(y);
          m != null && (!o || o(m)) && n(m, y);
        }
    }
    /** @inheritDoc */
  }, {
    key: "map",
    value: function(n, a) {
      for (var o = a && Ti(a), s = [], u = this._data, l = Rt(yi(u).call(u)), c = 0, d = l.length; c < d; c++) {
        var f = l[c], h = this._data.get(f);
        h != null && (!o || o(h)) && s.push(n(h, f));
      }
      return a && a.order && this._sort(s, a.order), s;
    }
    /**
     * Filter the fields of an item.
     *
     * @param item - The item whose fields should be filtered.
     * @param fields - The names of the fields that will be kept.
     * @typeParam K - Field name type.
     * @returns The item without any additional fields.
     */
  }, {
    key: "_filterFields",
    value: function(n, a) {
      var o;
      return n && YN(o = Ht(a) ? (
        // Use the supplied array
        a
      ) : (
        // Use the keys of the supplied object
        ev(a)
      )).call(o, function(s, u) {
        return s[u] = n[u], s;
      }, {});
    }
    /**
     * Sort the provided array with items.
     *
     * @param items - Items to be sorted in place.
     * @param order - A field name or custom sort function.
     * @typeParam T - The type of the items in the items array.
     */
  }, {
    key: "_sort",
    value: function(n, a) {
      if (typeof a == "string") {
        var o = a;
        qf(n).call(n, function(s, u) {
          var l = s[o], c = u[o];
          return l > c ? 1 : l < c ? -1 : 0;
        });
      } else if (typeof a == "function")
        qf(n).call(n, a);
      else
        throw new TypeError("Order must be a function or a string");
    }
    /**
     * Remove an item or multiple items by “reference” (only the id is used) or by id.
     *
     * The method ignores removal of non-existing items, and returns an array containing the ids of the items which are actually removed from the DataSet.
     *
     * After the items are removed, the DataSet will trigger an event `remove` for the removed items. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
     *
     * ## Example
     * ```javascript
     * // create a DataSet
     * const data = new vis.DataSet([
     *   { id: 1, text: 'item 1' },
     *   { id: 2, text: 'item 2' },
     *   { id: 3, text: 'item 3' }
     * ])
     *
     * // remove items
     * const ids = data.remove([2, { id: 3 }, 4])
     *
     * console.log(ids) // [2, 3]
     * ```
     *
     * @param id - One or more items or ids of items to be removed.
     * @param senderId - Sender id.
     * @returns The ids of the removed items.
     */
  }, {
    key: "remove",
    value: function(n, a) {
      for (var o = [], s = [], u = Ht(n) ? n : [n], l = 0, c = u.length; l < c; l++) {
        var d = this._remove(u[l]);
        if (d) {
          var f = d[this._idProp];
          f != null && (o.push(f), s.push(d));
        }
      }
      return o.length && this._trigger("remove", {
        items: o,
        oldData: s
      }, a), o;
    }
    /**
     * Remove an item by its id or reference.
     *
     * @param id - Id of an item or the item itself.
     * @returns The removed item if removed, null otherwise.
     */
  }, {
    key: "_remove",
    value: function(n) {
      var a;
      if (bm(n) ? a = n : n && typeof n == "object" && (a = n[this._idProp]), a != null && this._data.has(a)) {
        var o = this._data.get(a) || null;
        return this._data.delete(a), --this.length, o;
      }
      return null;
    }
    /**
     * Clear the entire data set.
     *
     * After the items are removed, the {@link DataSet} will trigger an event `remove` for all removed items. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
     *
     * @param senderId - Sender id.
     * @returns removedIds - The ids of all removed items.
     */
  }, {
    key: "clear",
    value: function(n) {
      for (var a, o = Rt(yi(a = this._data).call(a)), s = [], u = 0, l = o.length; u < l; u++)
        s.push(this._data.get(o[u]));
      return this._data.clear(), this.length = 0, this._trigger("remove", {
        items: o,
        oldData: s
      }, n), o;
    }
    /**
     * Find the item with maximum value of a specified field.
     *
     * @param field - Name of the property that should be searched for max value.
     * @returns Item containing max value, or null if no items.
     */
  }, {
    key: "max",
    value: function(n) {
      var a, o = null, s = null, u = sd(gm(a = this._data).call(a)), l;
      try {
        for (u.s(); !(l = u.n()).done; ) {
          var c = l.value, d = c[n];
          typeof d == "number" && (s == null || d > s) && (o = c, s = d);
        }
      } catch (f) {
        u.e(f);
      } finally {
        u.f();
      }
      return o || null;
    }
    /**
     * Find the item with minimum value of a specified field.
     *
     * @param field - Name of the property that should be searched for min value.
     * @returns Item containing min value, or null if no items.
     */
  }, {
    key: "min",
    value: function(n) {
      var a, o = null, s = null, u = sd(gm(a = this._data).call(a)), l;
      try {
        for (u.s(); !(l = u.n()).done; ) {
          var c = l.value, d = c[n];
          typeof d == "number" && (s == null || d < s) && (o = c, s = d);
        }
      } catch (f) {
        u.e(f);
      } finally {
        u.f();
      }
      return o || null;
    }
    /**
     * Find all distinct values of a specified field
     *
     * @param prop - The property name whose distinct values should be returned.
     * @returns Unordered array containing all distinct values. Items without specified property are ignored.
     */
  }, {
    key: "distinct",
    value: function(n) {
      for (var a = this._data, o = Rt(yi(a).call(a)), s = [], u = 0, l = 0, c = o.length; l < c; l++) {
        for (var d = o[l], f = a.get(d), h = f[n], v = !1, p = 0; p < u; p++)
          if (s[p] == h) {
            v = !0;
            break;
          }
        !v && h !== void 0 && (s[u] = h, u++);
      }
      return s;
    }
    /**
     * Add a single item. Will fail when an item with the same id already exists.
     *
     * @param item - A new item to be added.
     * @returns Added item's id. An id is generated when it is not present in the item.
     */
  }, {
    key: "_addItem",
    value: function(n) {
      var a = g8(n, this._idProp), o = a[this._idProp];
      if (this._data.has(o))
        throw new Error("Cannot add item: item with id " + o + " already exists");
      return this._data.set(o, a), ++this.length, o;
    }
    /**
     * Update a single item: merge with existing item.
     * Will fail when the item has no id, or when there does not exist an item with the same id.
     *
     * @param update - The new item
     * @returns The id of the updated item.
     */
  }, {
    key: "_updateItem",
    value: function(n) {
      var a = n[this._idProp];
      if (a == null)
        throw new Error("Cannot update item: item has no id (item: " + nz(n) + ")");
      var o = this._data.get(a);
      if (!o)
        throw new Error("Cannot update item: no item with id " + a + " found");
      return this._data.set(a, Em(Em({}, o), n)), a;
    }
    /** @inheritDoc */
  }, {
    key: "stream",
    value: function(n) {
      if (n) {
        var a = this._data;
        return new _m({
          [xi]() {
            return /* @__PURE__ */ kt.mark(function s() {
              var u, l, c, d;
              return kt.wrap(function(h) {
                for (; ; ) switch (h.prev = h.next) {
                  case 0:
                    u = sd(n), h.prev = 1, u.s();
                  case 3:
                    if ((l = u.n()).done) {
                      h.next = 11;
                      break;
                    }
                    if (c = l.value, d = a.get(c), d == null) {
                      h.next = 9;
                      break;
                    }
                    return h.next = 9, [c, d];
                  case 9:
                    h.next = 3;
                    break;
                  case 11:
                    h.next = 16;
                    break;
                  case 13:
                    h.prev = 13, h.t0 = h.catch(1), u.e(h.t0);
                  case 16:
                    return h.prev = 16, u.f(), h.finish(16);
                  case 19:
                  case "end":
                    return h.stop();
                }
              }, s, null, [[1, 13, 16, 19]]);
            })();
          }
        });
      } else {
        var o;
        return new _m({
          [xi]: Pw(o = WV(this._data)).call(o, this._data)
        });
      }
    }
  }]), e;
})(YV);
function m8(r, i) {
  return typeof i == "object" && i !== null && r === i.idProp && typeof i.add == "function" && typeof i.clear == "function" && typeof i.distinct == "function" && typeof Bn(i) == "function" && typeof i.get == "function" && typeof i.getDataSet == "function" && typeof i.getIds == "function" && typeof i.length == "number" && typeof sr(i) == "function" && typeof i.max == "function" && typeof i.min == "function" && typeof i.off == "function" && typeof i.on == "function" && typeof i.remove == "function" && typeof i.setOptions == "function" && typeof i.stream == "function" && typeof i.update == "function" && typeof i.updateOnly == "function";
}
function RE(r, i) {
  return typeof i == "object" && i !== null && r === i.idProp && typeof Bn(i) == "function" && typeof i.get == "function" && typeof i.getDataSet == "function" && typeof i.getIds == "function" && typeof i.length == "number" && typeof sr(i) == "function" && typeof i.off == "function" && typeof i.on == "function" && typeof i.stream == "function" && m8(r, i.getDataSet());
}
/**
 * vis-network
 * https://visjs.github.io/vis-network/
 *
 * A dynamic, browser-based visualization library.
 *
 * @version 9.1.9
 * @date    2023-11-03T01:42:27.418Z
 *
 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
 * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
 *
 * @license
 * vis.js is dual licensed under both
 *
 *   1. The Apache 2.0 License
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   and
 *
 *   2. The MIT License
 *      http://opensource.org/licenses/MIT
 *
 * vis.js may be distributed under either license.
 */
var ud = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Y(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Cs = function(r) {
  return r && r.Math === Math && r;
}, Ge = (
  // eslint-disable-next-line es/no-global-this -- safe
  Cs(typeof globalThis == "object" && globalThis) || Cs(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  Cs(typeof self == "object" && self) || Cs(typeof ud == "object" && ud) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ (function() {
    return this;
  })() || ud || Function("return this")()
), ge = function(r) {
  try {
    return !!r();
  } catch {
    return !0;
  }
}, b8 = ge, Fo = !b8(function() {
  var r = (function() {
  }).bind();
  return typeof r != "function" || r.hasOwnProperty("prototype");
}), $8 = Fo, AE = Function.prototype, Om = AE.apply, Tm = AE.call, Bo = typeof Reflect == "object" && Reflect.apply || ($8 ? Tm.bind(Om) : function() {
  return Tm.apply(Om, arguments);
}), DE = Fo, ME = Function.prototype, Yf = ME.call, _8 = DE && ME.bind.bind(Yf, Yf), be = DE ? _8 : function(r) {
  return function() {
    return Yf.apply(r, arguments);
  };
}, NE = be, w8 = NE({}.toString), E8 = NE("".slice), Kr = function(r) {
  return E8(w8(r), 8, -1);
}, S8 = Kr, O8 = be, mv = function(r) {
  if (S8(r) === "Function") return O8(r);
}, Xf = typeof document == "object" && document.all, T8 = typeof Xf > "u" && Xf !== void 0, FE = {
  all: Xf,
  IS_HTMLDDA: T8
}, BE = FE, P8 = BE.all, ct = BE.IS_HTMLDDA ? function(r) {
  return typeof r == "function" || r === P8;
} : function(r) {
  return typeof r == "function";
}, pa = {}, I8 = ge, dt = !I8(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), k8 = Fo, xs = Function.prototype.call, Kt = k8 ? xs.bind(xs) : function() {
  return xs.apply(xs, arguments);
}, bl = {}, jE = {}.propertyIsEnumerable, LE = Object.getOwnPropertyDescriptor, C8 = LE && !jE.call({ 1: 2 }, 1);
bl.f = C8 ? function(i) {
  var e = LE(this, i);
  return !!e && e.enumerable;
} : jE;
var jo = function(r, i) {
  return {
    enumerable: !(r & 1),
    configurable: !(r & 2),
    writable: !(r & 4),
    value: i
  };
}, x8 = be, R8 = ge, A8 = Kr, ld = Object, D8 = x8("".split), $l = R8(function() {
  return !ld("z").propertyIsEnumerable(0);
}) ? function(r) {
  return A8(r) === "String" ? D8(r, "") : ld(r);
} : ld, ya = function(r) {
  return r == null;
}, M8 = ya, N8 = TypeError, Lo = function(r) {
  if (M8(r)) throw new N8("Can't call method on " + r);
  return r;
}, F8 = $l, B8 = Lo, Pr = function(r) {
  return F8(B8(r));
}, Pm = ct, zE = FE, j8 = zE.all, ft = zE.IS_HTMLDDA ? function(r) {
  return typeof r == "object" ? r !== null : Pm(r) || r === j8;
} : function(r) {
  return typeof r == "object" ? r !== null : Pm(r);
}, me = {}, cd = me, dd = Ge, L8 = ct, Im = function(r) {
  return L8(r) ? r : void 0;
}, nr = function(r, i) {
  return arguments.length < 2 ? Im(cd[r]) || Im(dd[r]) : cd[r] && cd[r][i] || dd[r] && dd[r][i];
}, z8 = be, Je = z8({}.isPrototypeOf), zo = typeof navigator < "u" && String(navigator.userAgent) || "", WE = Ge, fd = zo, km = WE.process, Cm = WE.Deno, xm = km && km.versions || Cm && Cm.version, Rm = xm && xm.v8, ur, Cu;
Rm && (ur = Rm.split("."), Cu = ur[0] > 0 && ur[0] < 4 ? 1 : +(ur[0] + ur[1]));
!Cu && fd && (ur = fd.match(/Edge\/(\d+)/), (!ur || ur[1] >= 74) && (ur = fd.match(/Chrome\/(\d+)/), ur && (Cu = +ur[1])));
var Wo = Cu, Am = Wo, W8 = ge, H8 = Ge, U8 = H8.String, ga = !!Object.getOwnPropertySymbols && !W8(function() {
  var r = Symbol("symbol detection");
  return !U8(r) || !(Object(r) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && Am && Am < 41;
}), V8 = ga, HE = V8 && !Symbol.sham && typeof Symbol.iterator == "symbol", G8 = nr, K8 = ct, q8 = Je, Y8 = HE, X8 = Object, Ho = Y8 ? function(r) {
  return typeof r == "symbol";
} : function(r) {
  var i = G8("Symbol");
  return K8(i) && q8(i.prototype, X8(r));
}, J8 = String, ma = function(r) {
  try {
    return J8(r);
  } catch {
    return "Object";
  }
}, Q8 = ct, Z8 = ma, eG = TypeError, ti = function(r) {
  if (Q8(r)) return r;
  throw new eG(Z8(r) + " is not a function");
}, tG = ti, rG = ya, bv = function(r, i) {
  var e = r[i];
  return rG(e) ? void 0 : tG(e);
}, hd = Kt, vd = ct, pd = ft, nG = TypeError, iG = function(r, i) {
  var e, t;
  if (i === "string" && vd(e = r.toString) && !pd(t = hd(e, r)) || vd(e = r.valueOf) && !pd(t = hd(e, r)) || i !== "string" && vd(e = r.toString) && !pd(t = hd(e, r))) return t;
  throw new nG("Can't convert object to primitive value");
}, UE = { exports: {} }, Dm = Ge, aG = Object.defineProperty, oG = function(r, i) {
  try {
    aG(Dm, r, { value: i, configurable: !0, writable: !0 });
  } catch {
    Dm[r] = i;
  }
  return i;
}, sG = Ge, uG = oG, Mm = "__core-js_shared__", lG = sG[Mm] || uG(Mm, {}), $v = lG, Nm = $v;
(UE.exports = function(r, i) {
  return Nm[r] || (Nm[r] = i !== void 0 ? i : {});
})("versions", []).push({
  version: "3.33.0",
  mode: "pure",
  copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var ba = UE.exports, cG = Lo, dG = Object, Lt = function(r) {
  return dG(cG(r));
}, fG = be, hG = Lt, vG = fG({}.hasOwnProperty), ht = Object.hasOwn || function(i, e) {
  return vG(hG(i), e);
}, pG = be, yG = 0, gG = Math.random(), mG = pG(1 .toString), _l = function(r) {
  return "Symbol(" + (r === void 0 ? "" : r) + ")_" + mG(++yG + gG, 36);
}, bG = Ge, $G = ba, Fm = ht, _G = _l, wG = ga, EG = HE, Ri = bG.Symbol, yd = $G("wks"), SG = EG ? Ri.for || Ri : Ri && Ri.withoutSetter || _G, Ke = function(r) {
  return Fm(yd, r) || (yd[r] = wG && Fm(Ri, r) ? Ri[r] : SG("Symbol." + r)), yd[r];
}, OG = Kt, Bm = ft, jm = Ho, TG = bv, PG = iG, IG = Ke, kG = TypeError, CG = IG("toPrimitive"), xG = function(r, i) {
  if (!Bm(r) || jm(r)) return r;
  var e = TG(r, CG), t;
  if (e) {
    if (i === void 0 && (i = "default"), t = OG(e, r, i), !Bm(t) || jm(t)) return t;
    throw new kG("Can't convert object to primitive value");
  }
  return i === void 0 && (i = "number"), PG(r, i);
}, RG = xG, AG = Ho, wl = function(r) {
  var i = RG(r, "string");
  return AG(i) ? i : i + "";
}, DG = Ge, Lm = ft, Jf = DG.document, MG = Lm(Jf) && Lm(Jf.createElement), VE = function(r) {
  return MG ? Jf.createElement(r) : {};
}, NG = dt, FG = ge, BG = VE, GE = !NG && !FG(function() {
  return Object.defineProperty(BG("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), jG = dt, LG = Kt, zG = bl, WG = jo, HG = Pr, UG = wl, VG = ht, GG = GE, zm = Object.getOwnPropertyDescriptor;
pa.f = jG ? zm : function(i, e) {
  if (i = HG(i), e = UG(e), GG) try {
    return zm(i, e);
  } catch {
  }
  if (VG(i, e)) return WG(!LG(zG.f, i, e), i[e]);
};
var KG = ge, qG = ct, YG = /#|\.prototype\./, Uo = function(r, i) {
  var e = JG[XG(r)];
  return e === ZG ? !0 : e === QG ? !1 : qG(i) ? KG(i) : !!i;
}, XG = Uo.normalize = function(r) {
  return String(r).replace(YG, ".").toLowerCase();
}, JG = Uo.data = {}, QG = Uo.NATIVE = "N", ZG = Uo.POLYFILL = "P", e9 = Uo, Wm = mv, t9 = ti, r9 = Fo, n9 = Wm(Wm.bind), Vo = function(r, i) {
  return t9(r), i === void 0 ? r : r9 ? n9(r, i) : function() {
    return r.apply(i, arguments);
  };
}, qt = {}, i9 = dt, a9 = ge, KE = i9 && a9(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), o9 = ft, s9 = String, u9 = TypeError, Yt = function(r) {
  if (o9(r)) return r;
  throw new u9(s9(r) + " is not an object");
}, l9 = dt, c9 = GE, d9 = KE, Rs = Yt, Hm = wl, f9 = TypeError, gd = Object.defineProperty, h9 = Object.getOwnPropertyDescriptor, md = "enumerable", bd = "configurable", $d = "writable";
qt.f = l9 ? d9 ? function(i, e, t) {
  if (Rs(i), e = Hm(e), Rs(t), typeof i == "function" && e === "prototype" && "value" in t && $d in t && !t[$d]) {
    var n = h9(i, e);
    n && n[$d] && (i[e] = t.value, t = {
      configurable: bd in t ? t[bd] : n[bd],
      enumerable: md in t ? t[md] : n[md],
      writable: !1
    });
  }
  return gd(i, e, t);
} : gd : function(i, e, t) {
  if (Rs(i), e = Hm(e), Rs(t), c9) try {
    return gd(i, e, t);
  } catch {
  }
  if ("get" in t || "set" in t) throw new f9("Accessors not supported");
  return "value" in t && (i[e] = t.value), i;
};
var v9 = dt, p9 = qt, y9 = jo, $a = v9 ? function(r, i, e) {
  return p9.f(r, i, y9(1, e));
} : function(r, i, e) {
  return r[i] = e, r;
}, As = Ge, g9 = Bo, m9 = mv, b9 = ct, $9 = pa.f, _9 = e9, gi = me, w9 = Vo, mi = $a, Um = ht, E9 = function(r) {
  var i = function(e, t, n) {
    if (this instanceof i) {
      switch (arguments.length) {
        case 0:
          return new r();
        case 1:
          return new r(e);
        case 2:
          return new r(e, t);
      }
      return new r(e, t, n);
    }
    return g9(r, this, arguments);
  };
  return i.prototype = r.prototype, i;
}, oe = function(r, i) {
  var e = r.target, t = r.global, n = r.stat, a = r.proto, o = t ? As : n ? As[e] : (As[e] || {}).prototype, s = t ? gi : gi[e] || mi(gi, e, {})[e], u = s.prototype, l, c, d, f, h, v, p, y, m;
  for (f in i)
    l = _9(t ? f : e + (n ? "." : "#") + f, r.forced), c = !l && o && Um(o, f), v = s[f], c && (r.dontCallGetSet ? (m = $9(o, f), p = m && m.value) : p = o[f]), h = c && p ? p : i[f], !(c && typeof v == typeof h) && (r.bind && c ? y = w9(h, As) : r.wrap && c ? y = E9(h) : a && b9(h) ? y = m9(h) : y = h, (r.sham || h && h.sham || v && v.sham) && mi(y, "sham", !0), mi(s, f, y), a && (d = e + "Prototype", Um(gi, d) || mi(gi, d, {}), mi(gi[d], f, h), r.real && u && (l || !u[f]) && mi(u, f, h)));
}, S9 = Math.ceil, O9 = Math.floor, T9 = Math.trunc || function(i) {
  var e = +i;
  return (e > 0 ? O9 : S9)(e);
}, P9 = T9, El = function(r) {
  var i = +r;
  return i !== i || i === 0 ? 0 : P9(i);
}, I9 = El, k9 = Math.max, C9 = Math.min, Go = function(r, i) {
  var e = I9(r);
  return e < 0 ? k9(e + i, 0) : C9(e, i);
}, x9 = El, R9 = Math.min, A9 = function(r) {
  return r > 0 ? R9(x9(r), 9007199254740991) : 0;
}, D9 = A9, ir = function(r) {
  return D9(r.length);
}, M9 = Pr, N9 = Go, F9 = ir, Vm = function(r) {
  return function(i, e, t) {
    var n = M9(i), a = F9(n), o = N9(t, a), s;
    if (r && e !== e) {
      for (; a > o; )
        if (s = n[o++], s !== s) return !0;
    } else for (; a > o; o++)
      if ((r || o in n) && n[o] === e) return r || o || 0;
    return !r && -1;
  };
}, _v = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: Vm(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: Vm(!1)
}, Ko = {}, B9 = be, _d = ht, j9 = Pr, L9 = _v.indexOf, z9 = Ko, Gm = B9([].push), qE = function(r, i) {
  var e = j9(r), t = 0, n = [], a;
  for (a in e) !_d(z9, a) && _d(e, a) && Gm(n, a);
  for (; i.length > t; ) _d(e, a = i[t++]) && (~L9(n, a) || Gm(n, a));
  return n;
}, wv = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], W9 = qE, H9 = wv, Sl = Object.keys || function(i) {
  return W9(i, H9);
}, qo = {};
qo.f = Object.getOwnPropertySymbols;
var Km = dt, U9 = be, V9 = Kt, G9 = ge, wd = Sl, K9 = qo, q9 = bl, Y9 = Lt, X9 = $l, bi = Object.assign, qm = Object.defineProperty, J9 = U9([].concat), Q9 = !bi || G9(function() {
  if (Km && bi({ b: 1 }, bi(qm({}, "a", {
    enumerable: !0,
    get: function() {
      qm(this, "b", {
        value: 3,
        enumerable: !1
      });
    }
  }), { b: 2 })).b !== 1) return !0;
  var r = {}, i = {}, e = Symbol("assign detection"), t = "abcdefghijklmnopqrst";
  return r[e] = 7, t.split("").forEach(function(n) {
    i[n] = n;
  }), bi({}, r)[e] !== 7 || wd(bi({}, i)).join("") !== t;
}) ? function(i, e) {
  for (var t = Y9(i), n = arguments.length, a = 1, o = K9.f, s = q9.f; n > a; )
    for (var u = X9(arguments[a++]), l = o ? J9(wd(u), o(u)) : wd(u), c = l.length, d = 0, f; c > d; )
      f = l[d++], (!Km || V9(s, u, f)) && (t[f] = u[f]);
  return t;
} : bi, Z9 = oe, Ym = Q9;
Z9({ target: "Object", stat: !0, forced: Object.assign !== Ym }, {
  assign: Ym
});
var eK = me, tK = eK.Object.assign, rK = tK, nK = rK, iK = nK, tt = /* @__PURE__ */ Y(iK), aK = be, Ol = aK([].slice), YE = be, oK = ti, sK = ft, uK = ht, Xm = Ol, lK = Fo, XE = Function, cK = YE([].concat), dK = YE([].join), Ed = {}, fK = function(r, i, e) {
  if (!uK(Ed, i)) {
    for (var t = [], n = 0; n < i; n++) t[n] = "a[" + n + "]";
    Ed[i] = XE("C,a", "return new C(" + dK(t, ",") + ")");
  }
  return Ed[i](r, e);
}, JE = lK ? XE.bind : function(i) {
  var e = oK(this), t = e.prototype, n = Xm(arguments, 1), a = function() {
    var s = cK(n, Xm(arguments));
    return this instanceof a ? fK(e, s.length, s) : e.apply(i, s);
  };
  return sK(t) && (a.prototype = t), a;
}, hK = oe, Jm = JE;
hK({ target: "Function", proto: !0, forced: Function.bind !== Jm }, {
  bind: Jm
});
var vK = me, vt = function(r) {
  return vK[r + "Prototype"];
}, pK = vt, yK = pK("Function").bind, gK = Je, mK = yK, Sd = Function.prototype, bK = function(r) {
  var i = r.bind;
  return r === Sd || gK(Sd, r) && i === Sd.bind ? mK : i;
}, $K = bK, QE = $K, _K = QE, A = /* @__PURE__ */ Y(_K);
function Ev(r, i, e, t) {
  r.beginPath(), r.arc(i, e, t, 0, 2 * Math.PI, !1), r.closePath();
}
function wK(r, i, e, t) {
  r.beginPath(), r.rect(i - t, e - t, t * 2, t * 2), r.closePath();
}
function EK(r, i, e, t) {
  r.beginPath(), t *= 1.15, e += 0.275 * t;
  var n = t * 2, a = n / 2, o = Math.sqrt(3) / 6 * n, s = Math.sqrt(n * n - a * a);
  r.moveTo(i, e - (s - o)), r.lineTo(i + a, e + o), r.lineTo(i - a, e + o), r.lineTo(i, e - (s - o)), r.closePath();
}
function SK(r, i, e, t) {
  r.beginPath(), t *= 1.15, e -= 0.275 * t;
  var n = t * 2, a = n / 2, o = Math.sqrt(3) / 6 * n, s = Math.sqrt(n * n - a * a);
  r.moveTo(i, e + (s - o)), r.lineTo(i + a, e - o), r.lineTo(i - a, e - o), r.lineTo(i, e + (s - o)), r.closePath();
}
function OK(r, i, e, t) {
  r.beginPath(), t *= 0.82, e += 0.1 * t;
  for (var n = 0; n < 10; n++) {
    var a = n % 2 === 0 ? t * 1.3 : t * 0.5;
    r.lineTo(i + a * Math.sin(n * 2 * Math.PI / 10), e - a * Math.cos(n * 2 * Math.PI / 10));
  }
  r.closePath();
}
function TK(r, i, e, t) {
  r.beginPath(), r.lineTo(i, e + t), r.lineTo(i + t, e), r.lineTo(i, e - t), r.lineTo(i - t, e), r.closePath();
}
function ZE(r, i, e, t, n, a) {
  var o = Math.PI / 180;
  t - 2 * a < 0 && (a = t / 2), n - 2 * a < 0 && (a = n / 2), r.beginPath(), r.moveTo(i + a, e), r.lineTo(i + t - a, e), r.arc(i + t - a, e + a, a, o * 270, o * 360, !1), r.lineTo(i + t, e + n - a), r.arc(i + t - a, e + n - a, a, 0, o * 90, !1), r.lineTo(i + a, e + n), r.arc(i + a, e + n - a, a, o * 90, o * 180, !1), r.lineTo(i, e + a), r.arc(i + a, e + a, a, o * 180, o * 270, !1), r.closePath();
}
function Qf(r, i, e, t, n) {
  var a = 0.5522848, o = t / 2 * a, s = n / 2 * a, u = i + t, l = e + n, c = i + t / 2, d = e + n / 2;
  r.beginPath(), r.moveTo(i, d), r.bezierCurveTo(i, d - s, c - o, e, c, e), r.bezierCurveTo(c + o, e, u, d - s, u, d), r.bezierCurveTo(u, d + s, c + o, l, c, l), r.bezierCurveTo(c - o, l, i, d + s, i, d), r.closePath();
}
function eS(r, i, e, t, n) {
  var a = 0.3333333333333333, o = t, s = n * a, u = 0.5522848, l = o / 2 * u, c = s / 2 * u, d = i + o, f = e + s, h = i + o / 2, v = e + s / 2, p = e + (n - s / 2), y = e + n;
  r.beginPath(), r.moveTo(d, v), r.bezierCurveTo(d, v + c, h + l, f, h, f), r.bezierCurveTo(h - l, f, i, v + c, i, v), r.bezierCurveTo(i, v - c, h - l, e, h, e), r.bezierCurveTo(h + l, e, d, v - c, d, v), r.lineTo(d, p), r.bezierCurveTo(d, p + c, h + l, y, h, y), r.bezierCurveTo(h - l, y, i, p + c, i, p), r.lineTo(i, v);
}
function tS(r, i, e, t, n, a) {
  r.beginPath(), r.moveTo(i, e);
  for (var o = a.length, s = t - i, u = n - e, l = u / s, c = Math.sqrt(s * s + u * u), d = 0, f = !0, h = 0, v = +a[0]; c >= 0.1; )
    v = +a[d++ % o], v > c && (v = c), h = Math.sqrt(v * v / (1 + l * l)), h = s < 0 ? -h : h, i += h, e += l * h, f === !0 ? r.lineTo(i, e) : r.moveTo(i, e), c -= v, f = !f;
}
function PK(r, i, e, t) {
  r.beginPath();
  var n = 6, a = Math.PI * 2 / n;
  r.moveTo(i + t, e);
  for (var o = 1; o < n; o++)
    r.lineTo(i + t * Math.cos(a * o), e + t * Math.sin(a * o));
  r.closePath();
}
var Qm = {
  circle: Ev,
  dashedLine: tS,
  database: eS,
  diamond: TK,
  ellipse: Qf,
  ellipse_vis: Qf,
  hexagon: PK,
  roundRect: ZE,
  square: wK,
  star: OK,
  triangle: EK,
  triangleDown: SK
};
function IK(r) {
  return Object.prototype.hasOwnProperty.call(Qm, r) ? Qm[r] : function(i) {
    for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
      t[n - 1] = arguments[n];
    CanvasRenderingContext2D.prototype[r].call(i, t);
  };
}
var rS = { exports: {} };
(function(r) {
  r.exports = i;
  function i(t) {
    if (t) return e(t);
  }
  function e(t) {
    for (var n in i.prototype)
      t[n] = i.prototype[n];
    return t;
  }
  i.prototype.on = i.prototype.addEventListener = function(t, n) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(n), this;
  }, i.prototype.once = function(t, n) {
    function a() {
      this.off(t, a), n.apply(this, arguments);
    }
    return a.fn = n, this.on(t, a), this;
  }, i.prototype.off = i.prototype.removeListener = i.prototype.removeAllListeners = i.prototype.removeEventListener = function(t, n) {
    if (this._callbacks = this._callbacks || {}, arguments.length == 0)
      return this._callbacks = {}, this;
    var a = this._callbacks["$" + t];
    if (!a) return this;
    if (arguments.length == 1)
      return delete this._callbacks["$" + t], this;
    for (var o, s = 0; s < a.length; s++)
      if (o = a[s], o === n || o.fn === n) {
        a.splice(s, 1);
        break;
      }
    return a.length === 0 && delete this._callbacks["$" + t], this;
  }, i.prototype.emit = function(t) {
    this._callbacks = this._callbacks || {};
    for (var n = new Array(arguments.length - 1), a = this._callbacks["$" + t], o = 1; o < arguments.length; o++)
      n[o - 1] = arguments[o];
    if (a) {
      a = a.slice(0);
      for (var o = 0, s = a.length; o < s; ++o)
        a[o].apply(this, n);
    }
    return this;
  }, i.prototype.listeners = function(t) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
  }, i.prototype.hasListeners = function(t) {
    return !!this.listeners(t).length;
  };
})(rS);
var kK = rS.exports, nS = /* @__PURE__ */ Y(kK), CK = Ke, xK = CK("toStringTag"), iS = {};
iS[xK] = "z";
var Sv = String(iS) === "[object z]", RK = Sv, AK = ct, au = Kr, DK = Ke, MK = DK("toStringTag"), NK = Object, FK = au(/* @__PURE__ */ (function() {
  return arguments;
})()) === "Arguments", BK = function(r, i) {
  try {
    return r[i];
  } catch {
  }
}, ri = RK ? au : function(r) {
  var i, e, t;
  return r === void 0 ? "Undefined" : r === null ? "Null" : typeof (e = BK(i = NK(r), MK)) == "string" ? e : FK ? au(i) : (t = au(i)) === "Object" && AK(i.callee) ? "Arguments" : t;
}, jK = ri, LK = String, Ir = function(r) {
  if (jK(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
  return LK(r);
}, Ov = be, zK = El, WK = Ir, HK = Lo, UK = Ov("".charAt), Zm = Ov("".charCodeAt), VK = Ov("".slice), GK = function(r) {
  return function(i, e) {
    var t = WK(HK(i)), n = zK(e), a = t.length, o, s;
    return n < 0 || n >= a ? r ? "" : void 0 : (o = Zm(t, n), o < 55296 || o > 56319 || n + 1 === a || (s = Zm(t, n + 1)) < 56320 || s > 57343 ? r ? UK(t, n) : o : r ? VK(t, n, n + 2) : (o - 55296 << 10) + (s - 56320) + 65536);
  };
}, KK = {
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: GK(!0)
}, qK = Ge, YK = ct, eb = qK.WeakMap, aS = YK(eb) && /native code/.test(String(eb)), XK = ba, JK = _l, tb = XK("keys"), Tl = function(r) {
  return tb[r] || (tb[r] = JK(r));
}, QK = aS, oS = Ge, ZK = ft, eq = $a, Od = ht, Td = $v, tq = Tl, rq = Ko, rb = "Object already initialized", Zf = oS.TypeError, nq = oS.WeakMap, xu, uo, Ru, iq = function(r) {
  return Ru(r) ? uo(r) : xu(r, {});
}, aq = function(r) {
  return function(i) {
    var e;
    if (!ZK(i) || (e = uo(i)).type !== r)
      throw new Zf("Incompatible receiver, " + r + " required");
    return e;
  };
};
if (QK || Td.state) {
  var gr = Td.state || (Td.state = new nq());
  gr.get = gr.get, gr.has = gr.has, gr.set = gr.set, xu = function(r, i) {
    if (gr.has(r)) throw new Zf(rb);
    return i.facade = r, gr.set(r, i), i;
  }, uo = function(r) {
    return gr.get(r) || {};
  }, Ru = function(r) {
    return gr.has(r);
  };
} else {
  var $i = tq("state");
  rq[$i] = !0, xu = function(r, i) {
    if (Od(r, $i)) throw new Zf(rb);
    return i.facade = r, eq(r, $i, i), i;
  }, uo = function(r) {
    return Od(r, $i) ? r[$i] : {};
  }, Ru = function(r) {
    return Od(r, $i);
  };
}
var ni = {
  set: xu,
  get: uo,
  has: Ru,
  enforce: iq,
  getterFor: aq
}, eh = dt, oq = ht, sS = Function.prototype, sq = eh && Object.getOwnPropertyDescriptor, uS = oq(sS, "name"), uq = uS && (function() {
}).name === "something";
uS && (!eh || eh && sq(sS, "name").configurable);
var lq = {
  PROPER: uq
}, Pl = {}, cq = dt, dq = KE, fq = qt, hq = Yt, vq = Pr, pq = Sl;
Pl.f = cq && !dq ? Object.defineProperties : function(i, e) {
  hq(i);
  for (var t = vq(e), n = pq(e), a = n.length, o = 0, s; a > o; ) fq.f(i, s = n[o++], t[s]);
  return i;
};
var yq = nr, gq = yq("document", "documentElement"), mq = Yt, bq = Pl, nb = wv, $q = Ko, _q = gq, wq = VE, Eq = Tl, ib = ">", ab = "<", th = "prototype", rh = "script", lS = Eq("IE_PROTO"), Pd = function() {
}, cS = function(r) {
  return ab + rh + ib + r + ab + "/" + rh + ib;
}, ob = function(r) {
  r.write(cS("")), r.close();
  var i = r.parentWindow.Object;
  return r = null, i;
}, Sq = function() {
  var r = wq("iframe"), i = "java" + rh + ":", e;
  return r.style.display = "none", _q.appendChild(r), r.src = String(i), e = r.contentWindow.document, e.open(), e.write(cS("document.F=Object")), e.close(), e.F;
}, Ds, ou = function() {
  try {
    Ds = new ActiveXObject("htmlfile");
  } catch {
  }
  ou = typeof document < "u" ? document.domain && Ds ? ob(Ds) : Sq() : ob(Ds);
  for (var r = nb.length; r--; ) delete ou[th][nb[r]];
  return ou();
};
$q[lS] = !0;
var _a = Object.create || function(i, e) {
  var t;
  return i !== null ? (Pd[th] = mq(i), t = new Pd(), Pd[th] = null, t[lS] = i) : t = ou(), e === void 0 ? t : bq.f(t, e);
}, Oq = ge, dS = !Oq(function() {
  function r() {
  }
  return r.prototype.constructor = null, Object.getPrototypeOf(new r()) !== r.prototype;
}), Tq = ht, Pq = ct, Iq = Lt, kq = Tl, Cq = dS, sb = kq("IE_PROTO"), nh = Object, xq = nh.prototype, Il = Cq ? nh.getPrototypeOf : function(r) {
  var i = Iq(r);
  if (Tq(i, sb)) return i[sb];
  var e = i.constructor;
  return Pq(e) && i instanceof e ? e.prototype : i instanceof nh ? xq : null;
}, Rq = $a, Yo = function(r, i, e, t) {
  return t && t.enumerable ? r[i] = e : Rq(r, i, e), r;
}, Aq = ge, Dq = ct, Mq = ft, Nq = _a, ub = Il, Fq = Yo, Bq = Ke, ih = Bq("iterator"), fS = !1, Nr, Id, kd;
[].keys && (kd = [].keys(), "next" in kd ? (Id = ub(ub(kd)), Id !== Object.prototype && (Nr = Id)) : fS = !0);
var jq = !Mq(Nr) || Aq(function() {
  var r = {};
  return Nr[ih].call(r) !== r;
});
jq ? Nr = {} : Nr = Nq(Nr);
Dq(Nr[ih]) || Fq(Nr, ih, function() {
  return this;
});
var hS = {
  IteratorPrototype: Nr,
  BUGGY_SAFARI_ITERATORS: fS
}, Lq = Sv, zq = ri, Wq = Lq ? {}.toString : function() {
  return "[object " + zq(this) + "]";
}, Hq = Sv, Uq = qt.f, Vq = $a, Gq = ht, Kq = Wq, qq = Ke, lb = qq("toStringTag"), wa = function(r, i, e, t) {
  if (r) {
    var n = e ? r : r.prototype;
    Gq(n, lb) || Uq(n, lb, { configurable: !0, value: i }), t && !Hq && Vq(n, "toString", Kq);
  }
}, Ea = {}, Yq = hS.IteratorPrototype, Xq = _a, Jq = jo, Qq = wa, Zq = Ea, e7 = function() {
  return this;
}, t7 = function(r, i, e, t) {
  var n = i + " Iterator";
  return r.prototype = Xq(Yq, { next: Jq(+!t, e) }), Qq(r, n, !1, !0), Zq[n] = e7, r;
}, r7 = be, n7 = ti, i7 = function(r, i, e) {
  try {
    return r7(n7(Object.getOwnPropertyDescriptor(r, i)[e]));
  } catch {
  }
}, a7 = ct, o7 = String, s7 = TypeError, u7 = function(r) {
  if (typeof r == "object" || a7(r)) return r;
  throw new s7("Can't set " + o7(r) + " as a prototype");
}, l7 = i7, c7 = Yt, d7 = u7, f7 = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
  var r = !1, i = {}, e;
  try {
    e = l7(Object.prototype, "__proto__", "set"), e(i, []), r = i instanceof Array;
  } catch {
  }
  return function(n, a) {
    return c7(n), d7(a), r ? e(n, a) : n.__proto__ = a, n;
  };
})() : void 0), h7 = oe, v7 = Kt, p7 = lq, y7 = t7, g7 = Il, m7 = wa, cb = Yo, b7 = Ke, db = Ea, $7 = hS, _7 = p7.PROPER, Ms = $7.BUGGY_SAFARI_ITERATORS, Cd = b7("iterator"), fb = "keys", Ns = "values", hb = "entries", w7 = function() {
  return this;
}, Tv = function(r, i, e, t, n, a, o) {
  y7(e, i, t);
  var s = function(m) {
    if (m === n && f) return f;
    if (!Ms && m && m in c) return c[m];
    switch (m) {
      case fb:
        return function() {
          return new e(this, m);
        };
      case Ns:
        return function() {
          return new e(this, m);
        };
      case hb:
        return function() {
          return new e(this, m);
        };
    }
    return function() {
      return new e(this);
    };
  }, u = i + " Iterator", l = !1, c = r.prototype, d = c[Cd] || c["@@iterator"] || n && c[n], f = !Ms && d || s(n), h = i === "Array" && c.entries || d, v, p, y;
  if (h && (v = g7(h.call(new r())), v !== Object.prototype && v.next && (m7(v, u, !0, !0), db[u] = w7)), _7 && n === Ns && d && d.name !== Ns && (l = !0, f = function() {
    return v7(d, this);
  }), n)
    if (p = {
      values: s(Ns),
      keys: a ? f : s(fb),
      entries: s(hb)
    }, o) for (y in p)
      (Ms || l || !(y in c)) && cb(c, y, p[y]);
    else h7({ target: i, proto: !0, forced: Ms || l }, p);
  return o && c[Cd] !== f && cb(c, Cd, f, {}), db[i] = f, p;
}, Pv = function(r, i) {
  return { value: r, done: i };
}, E7 = KK.charAt, S7 = Ir, vS = ni, O7 = Tv, vb = Pv, pS = "String Iterator", T7 = vS.set, P7 = vS.getterFor(pS);
O7(String, "String", function(r) {
  T7(this, {
    type: pS,
    string: S7(r),
    index: 0
  });
}, function() {
  var i = P7(this), e = i.string, t = i.index, n;
  return t >= e.length ? vb(void 0, !0) : (n = E7(e, t), i.index += n.length, vb(n, !1));
});
var I7 = Kt, pb = Yt, k7 = bv, yS = function(r, i, e) {
  var t, n;
  pb(r);
  try {
    if (t = k7(r, "return"), !t) {
      if (i === "throw") throw e;
      return e;
    }
    t = I7(t, r);
  } catch (a) {
    n = !0, t = a;
  }
  if (i === "throw") throw e;
  if (n) throw t;
  return pb(t), e;
}, C7 = Yt, x7 = yS, R7 = function(r, i, e, t) {
  try {
    return t ? i(C7(e)[0], e[1]) : i(e);
  } catch (n) {
    x7(r, "throw", n);
  }
}, A7 = Ke, D7 = Ea, M7 = A7("iterator"), N7 = Array.prototype, gS = function(r) {
  return r !== void 0 && (D7.Array === r || N7[M7] === r);
}, F7 = be, B7 = ct, ah = $v, j7 = F7(Function.toString);
B7(ah.inspectSource) || (ah.inspectSource = function(r) {
  return j7(r);
});
var L7 = ah.inspectSource, z7 = be, W7 = ge, mS = ct, H7 = ri, U7 = nr, V7 = L7, bS = function() {
}, G7 = [], $S = U7("Reflect", "construct"), Iv = /^\s*(?:class|function)\b/, K7 = z7(Iv.exec), q7 = !Iv.test(bS), Ra = function(i) {
  if (!mS(i)) return !1;
  try {
    return $S(bS, G7, i), !0;
  } catch {
    return !1;
  }
}, _S = function(i) {
  if (!mS(i)) return !1;
  switch (H7(i)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return q7 || !!K7(Iv, V7(i));
  } catch {
    return !0;
  }
};
_S.sham = !0;
var kl = !$S || W7(function() {
  var r;
  return Ra(Ra.call) || !Ra(Object) || !Ra(function() {
    r = !0;
  }) || r;
}) ? _S : Ra, Y7 = wl, X7 = qt, J7 = jo, Sa = function(r, i, e) {
  var t = Y7(i);
  t in r ? X7.f(r, t, J7(0, e)) : r[t] = e;
}, Q7 = ri, yb = bv, Z7 = ya, eY = Ea, tY = Ke, rY = tY("iterator"), Cl = function(r) {
  if (!Z7(r)) return yb(r, rY) || yb(r, "@@iterator") || eY[Q7(r)];
}, nY = Kt, iY = ti, aY = Yt, oY = ma, sY = Cl, uY = TypeError, wS = function(r, i) {
  var e = arguments.length < 2 ? sY(r) : i;
  if (iY(e)) return aY(nY(e, r));
  throw new uY(oY(r) + " is not iterable");
}, lY = Vo, cY = Kt, dY = Lt, fY = R7, hY = gS, vY = kl, pY = ir, gb = Sa, yY = wS, gY = Cl, mb = Array, mY = function(i) {
  var e = dY(i), t = vY(this), n = arguments.length, a = n > 1 ? arguments[1] : void 0, o = a !== void 0;
  o && (a = lY(a, n > 2 ? arguments[2] : void 0));
  var s = gY(e), u = 0, l, c, d, f, h, v;
  if (s && !(this === mb && hY(s)))
    for (f = yY(e, s), h = f.next, c = t ? new this() : []; !(d = cY(h, f)).done; u++)
      v = o ? fY(f, a, [d.value, u], !0) : d.value, gb(c, u, v);
  else
    for (l = pY(e), c = t ? new this(l) : mb(l); l > u; u++)
      v = o ? a(e[u], u) : e[u], gb(c, u, v);
  return c.length = u, c;
}, bY = Ke, ES = bY("iterator"), SS = !1;
try {
  var $Y = 0, bb = {
    next: function() {
      return { done: !!$Y++ };
    },
    return: function() {
      SS = !0;
    }
  };
  bb[ES] = function() {
    return this;
  }, Array.from(bb, function() {
    throw 2;
  });
} catch {
}
var _Y = function(r, i) {
  try {
    if (!i && !SS) return !1;
  } catch {
    return !1;
  }
  var e = !1;
  try {
    var t = {};
    t[ES] = function() {
      return {
        next: function() {
          return { done: e = !0 };
        }
      };
    }, r(t);
  } catch {
  }
  return e;
}, wY = oe, EY = mY, SY = _Y, OY = !SY(function(r) {
  Array.from(r);
});
wY({ target: "Array", stat: !0, forced: OY }, {
  from: EY
});
var TY = me, PY = TY.Array.from, IY = PY, OS = IY, kY = OS, ii = /* @__PURE__ */ Y(kY), CY = Pr, $b = Ea, TS = ni;
qt.f;
var xY = Tv, Fs = Pv, PS = "Array Iterator", RY = TS.set, AY = TS.getterFor(PS);
xY(Array, "Array", function(r, i) {
  RY(this, {
    type: PS,
    target: CY(r),
    // target
    index: 0,
    // next index
    kind: i
    // kind
  });
}, function() {
  var r = AY(this), i = r.target, e = r.kind, t = r.index++;
  if (!i || t >= i.length)
    return r.target = void 0, Fs(void 0, !0);
  switch (e) {
    case "keys":
      return Fs(t, !1);
    case "values":
      return Fs(i[t], !1);
  }
  return Fs([t, i[t]], !1);
}, "values");
$b.Arguments = $b.Array;
var DY = Cl, MY = DY, NY = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
}, FY = NY, BY = Ge, jY = ri, LY = $a, _b = Ea, zY = Ke, wb = zY("toStringTag");
for (var xd in FY) {
  var Eb = BY[xd], Rd = Eb && Eb.prototype;
  Rd && jY(Rd) !== wb && LY(Rd, wb, xd), _b[xd] = _b.Array;
}
var WY = MY, HY = WY, UY = HY, VY = UY, GY = VY, KY = GY, IS = KY, kS = /* @__PURE__ */ Y(IS), qY = IS, ai = /* @__PURE__ */ Y(qY);
function M(r, i) {
  if (!(r instanceof i))
    throw new TypeError("Cannot call a class as a function");
}
var CS = { exports: {} }, YY = oe, XY = dt, Sb = qt.f;
YY({ target: "Object", stat: !0, forced: Object.defineProperty !== Sb, sham: !XY }, {
  defineProperty: Sb
});
var JY = me, xS = JY.Object, QY = CS.exports = function(i, e, t) {
  return xS.defineProperty(i, e, t);
};
xS.defineProperty.sham && (QY.sham = !0);
var ZY = CS.exports, eX = ZY, RS = eX, tX = RS, rX = tX, nX = rX, iX = nX, aX = iX, xl = /* @__PURE__ */ Y(aX), oX = Kr, oi = Array.isArray || function(i) {
  return oX(i) === "Array";
}, sX = TypeError, uX = 9007199254740991, kv = function(r) {
  if (r > uX) throw sX("Maximum allowed index exceeded");
  return r;
}, Ob = oi, lX = kl, cX = ft, dX = Ke, fX = dX("species"), Tb = Array, hX = function(r) {
  var i;
  return Ob(r) && (i = r.constructor, lX(i) && (i === Tb || Ob(i.prototype)) ? i = void 0 : cX(i) && (i = i[fX], i === null && (i = void 0))), i === void 0 ? Tb : i;
}, vX = hX, Cv = function(r, i) {
  return new (vX(r))(i === 0 ? 0 : i);
}, pX = ge, yX = Ke, gX = Wo, mX = yX("species"), Xo = function(r) {
  return gX >= 51 || !pX(function() {
    var i = [], e = i.constructor = {};
    return e[mX] = function() {
      return { foo: 1 };
    }, i[r](Boolean).foo !== 1;
  });
}, bX = oe, $X = ge, _X = oi, wX = ft, EX = Lt, SX = ir, Pb = kv, Ib = Sa, OX = Cv, TX = Xo, PX = Ke, IX = Wo, AS = PX("isConcatSpreadable"), kX = IX >= 51 || !$X(function() {
  var r = [];
  return r[AS] = !1, r.concat()[0] !== r;
}), CX = function(r) {
  if (!wX(r)) return !1;
  var i = r[AS];
  return i !== void 0 ? !!i : _X(r);
}, xX = !kX || !TX("concat");
bX({ target: "Array", proto: !0, forced: xX }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function(i) {
    var e = EX(this), t = OX(e, 0), n = 0, a, o, s, u, l;
    for (a = -1, s = arguments.length; a < s; a++)
      if (l = a === -1 ? e : arguments[a], CX(l))
        for (u = SX(l), Pb(n + u), o = 0; o < u; o++, n++) o in l && Ib(t, n, l[o]);
      else
        Pb(n + 1), Ib(t, n++, l);
    return t.length = n, t;
  }
});
var Jo = {}, RX = qE, AX = wv, DX = AX.concat("length", "prototype");
Jo.f = Object.getOwnPropertyNames || function(i) {
  return RX(i, DX);
};
var Rl = {}, kb = Go, MX = ir, NX = Sa, FX = Array, BX = Math.max, DS = function(r, i, e) {
  for (var t = MX(r), n = kb(i, t), a = kb(e === void 0 ? t : e, t), o = FX(BX(a - n, 0)), s = 0; n < a; n++, s++) NX(o, s, r[n]);
  return o.length = s, o;
}, jX = Kr, LX = Pr, MS = Jo.f, zX = DS, NS = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], WX = function(r) {
  try {
    return MS(r);
  } catch {
    return zX(NS);
  }
};
Rl.f = function(i) {
  return NS && jX(i) === "Window" ? WX(i) : MS(LX(i));
};
var HX = qt, xv = function(r, i, e) {
  return HX.f(r, i, e);
}, Qo = {}, UX = Ke;
Qo.f = UX;
var Cb = me, VX = ht, GX = Qo, KX = qt.f, qe = function(r) {
  var i = Cb.Symbol || (Cb.Symbol = {});
  VX(i, r) || KX(i, r, {
    value: GX.f(r)
  });
}, qX = Kt, YX = nr, XX = Ke, JX = Yo, FS = function() {
  var r = YX("Symbol"), i = r && r.prototype, e = i && i.valueOf, t = XX("toPrimitive");
  i && !i[t] && JX(i, t, function(n) {
    return qX(e, this);
  }, {});
}, QX = Vo, ZX = be, eJ = $l, tJ = Lt, rJ = ir, nJ = Cv, xb = ZX([].push), wn = function(r) {
  var i = r === 1, e = r === 2, t = r === 3, n = r === 4, a = r === 6, o = r === 7, s = r === 5 || a;
  return function(u, l, c, d) {
    for (var f = tJ(u), h = eJ(f), v = QX(l, c), p = rJ(h), y = 0, m = d || nJ, b = i ? m(u, p) : e || o ? m(u, 0) : void 0, w, _; p > y; y++) if ((s || y in h) && (w = h[y], _ = v(w, y, f), r))
      if (i) b[y] = _;
      else if (_) switch (r) {
        case 3:
          return !0;
        // some
        case 5:
          return w;
        // find
        case 6:
          return y;
        // findIndex
        case 2:
          xb(b, w);
      }
      else switch (r) {
        case 4:
          return !1;
        // every
        case 7:
          xb(b, w);
      }
    return a ? -1 : t || n ? n : b;
  };
}, gn = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: wn(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: wn(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: wn(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: wn(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: wn(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: wn(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: wn(6)
}, Al = oe, Dl = Ge, Rv = Kt, iJ = be, qi = dt, Yi = ga, aJ = ge, st = ht, oJ = Je, oh = Yt, Ml = Pr, Av = wl, sJ = Ir, sh = jo, lo = _a, BS = Sl, uJ = Jo, jS = Rl, lJ = qo, LS = pa, zS = qt, cJ = Pl, WS = bl, Rb = Yo, dJ = xv, Dv = ba, fJ = Tl, HS = Ko, Ab = _l, hJ = Ke, vJ = Qo, pJ = qe, yJ = FS, gJ = wa, US = ni, Nl = gn.forEach, At = fJ("hidden"), Fl = "Symbol", co = "prototype", mJ = US.set, Db = US.getterFor(Fl), dr = Object[co], Rn = Dl.Symbol, Ba = Rn && Rn[co], bJ = Dl.RangeError, $J = Dl.TypeError, Ad = Dl.QObject, VS = LS.f, An = zS.f, GS = jS.f, _J = WS.f, KS = iJ([].push), Hr = Dv("symbols"), Zo = Dv("op-symbols"), wJ = Dv("wks"), uh = !Ad || !Ad[co] || !Ad[co].findChild, qS = function(r, i, e) {
  var t = VS(dr, i);
  t && delete dr[i], An(r, i, e), t && r !== dr && An(dr, i, t);
}, lh = qi && aJ(function() {
  return lo(An({}, "a", {
    get: function() {
      return An(this, "a", { value: 7 }).a;
    }
  })).a !== 7;
}) ? qS : An, Dd = function(r, i) {
  var e = Hr[r] = lo(Ba);
  return mJ(e, {
    type: Fl,
    tag: r,
    description: i
  }), qi || (e.description = i), e;
}, Bl = function(i, e, t) {
  i === dr && Bl(Zo, e, t), oh(i);
  var n = Av(e);
  return oh(t), st(Hr, n) ? (t.enumerable ? (st(i, At) && i[At][n] && (i[At][n] = !1), t = lo(t, { enumerable: sh(0, !1) })) : (st(i, At) || An(i, At, sh(1, {})), i[At][n] = !0), lh(i, n, t)) : An(i, n, t);
}, Mv = function(i, e) {
  oh(i);
  var t = Ml(e), n = BS(t).concat(QS(t));
  return Nl(n, function(a) {
    (!qi || Rv(YS, t, a)) && Bl(i, a, t[a]);
  }), i;
}, EJ = function(i, e) {
  return e === void 0 ? lo(i) : Mv(lo(i), e);
}, YS = function(i) {
  var e = Av(i), t = Rv(_J, this, e);
  return this === dr && st(Hr, e) && !st(Zo, e) ? !1 : t || !st(this, e) || !st(Hr, e) || st(this, At) && this[At][e] ? t : !0;
}, XS = function(i, e) {
  var t = Ml(i), n = Av(e);
  if (!(t === dr && st(Hr, n) && !st(Zo, n))) {
    var a = VS(t, n);
    return a && st(Hr, n) && !(st(t, At) && t[At][n]) && (a.enumerable = !0), a;
  }
}, JS = function(i) {
  var e = GS(Ml(i)), t = [];
  return Nl(e, function(n) {
    !st(Hr, n) && !st(HS, n) && KS(t, n);
  }), t;
}, QS = function(r) {
  var i = r === dr, e = GS(i ? Zo : Ml(r)), t = [];
  return Nl(e, function(n) {
    st(Hr, n) && (!i || st(dr, n)) && KS(t, Hr[n]);
  }), t;
};
Yi || (Rn = function() {
  if (oJ(Ba, this)) throw new $J("Symbol is not a constructor");
  var i = !arguments.length || arguments[0] === void 0 ? void 0 : sJ(arguments[0]), e = Ab(i), t = function(n) {
    this === dr && Rv(t, Zo, n), st(this, At) && st(this[At], e) && (this[At][e] = !1);
    var a = sh(1, n);
    try {
      lh(this, e, a);
    } catch (o) {
      if (!(o instanceof bJ)) throw o;
      qS(this, e, a);
    }
  };
  return qi && uh && lh(dr, e, { configurable: !0, set: t }), Dd(e, i);
}, Ba = Rn[co], Rb(Ba, "toString", function() {
  return Db(this).tag;
}), Rb(Rn, "withoutSetter", function(r) {
  return Dd(Ab(r), r);
}), WS.f = YS, zS.f = Bl, cJ.f = Mv, LS.f = XS, uJ.f = jS.f = JS, lJ.f = QS, vJ.f = function(r) {
  return Dd(hJ(r), r);
}, qi && dJ(Ba, "description", {
  configurable: !0,
  get: function() {
    return Db(this).description;
  }
}));
Al({ global: !0, wrap: !0, forced: !Yi, sham: !Yi }, {
  Symbol: Rn
});
Nl(BS(wJ), function(r) {
  pJ(r);
});
Al({ target: Fl, stat: !0, forced: !Yi }, {
  useSetter: function() {
    uh = !0;
  },
  useSimple: function() {
    uh = !1;
  }
});
Al({ target: "Object", stat: !0, forced: !Yi, sham: !qi }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: EJ,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: Bl,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: Mv,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: XS
});
Al({ target: "Object", stat: !0, forced: !Yi }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: JS
});
yJ();
gJ(Rn, Fl);
HS[At] = !0;
var SJ = ga, ZS = SJ && !!Symbol.for && !!Symbol.keyFor, OJ = oe, TJ = nr, PJ = ht, IJ = Ir, eO = ba, kJ = ZS, Md = eO("string-to-symbol-registry"), CJ = eO("symbol-to-string-registry");
OJ({ target: "Symbol", stat: !0, forced: !kJ }, {
  for: function(r) {
    var i = IJ(r);
    if (PJ(Md, i)) return Md[i];
    var e = TJ("Symbol")(i);
    return Md[i] = e, CJ[e] = i, e;
  }
});
var xJ = oe, RJ = ht, AJ = Ho, DJ = ma, MJ = ba, NJ = ZS, Mb = MJ("symbol-to-string-registry");
xJ({ target: "Symbol", stat: !0, forced: !NJ }, {
  keyFor: function(i) {
    if (!AJ(i)) throw new TypeError(DJ(i) + " is not a symbol");
    if (RJ(Mb, i)) return Mb[i];
  }
});
var FJ = be, Nb = oi, BJ = ct, Fb = Kr, jJ = Ir, Bb = FJ([].push), LJ = function(r) {
  if (BJ(r)) return r;
  if (Nb(r)) {
    for (var i = r.length, e = [], t = 0; t < i; t++) {
      var n = r[t];
      typeof n == "string" ? Bb(e, n) : (typeof n == "number" || Fb(n) === "Number" || Fb(n) === "String") && Bb(e, jJ(n));
    }
    var a = e.length, o = !0;
    return function(s, u) {
      if (o)
        return o = !1, u;
      if (Nb(this)) return u;
      for (var l = 0; l < a; l++) if (e[l] === s) return u;
    };
  }
}, zJ = oe, tO = nr, rO = Bo, WJ = Kt, es = be, nO = ge, jb = ct, Lb = Ho, iO = Ol, HJ = LJ, UJ = ga, VJ = String, an = tO("JSON", "stringify"), Bs = es(/./.exec), zb = es("".charAt), GJ = es("".charCodeAt), KJ = es("".replace), qJ = es(1 .toString), YJ = /[\uD800-\uDFFF]/g, Wb = /^[\uD800-\uDBFF]$/, Hb = /^[\uDC00-\uDFFF]$/, Ub = !UJ || nO(function() {
  var r = tO("Symbol")("stringify detection");
  return an([r]) !== "[null]" || an({ a: r }) !== "{}" || an(Object(r)) !== "{}";
}), Vb = nO(function() {
  return an("\uDF06\uD834") !== '"\\udf06\\ud834"' || an("\uDEAD") !== '"\\udead"';
}), XJ = function(r, i) {
  var e = iO(arguments), t = HJ(i);
  if (!(!jb(t) && (r === void 0 || Lb(r))))
    return e[1] = function(n, a) {
      if (jb(t) && (a = WJ(t, this, VJ(n), a)), !Lb(a)) return a;
    }, rO(an, null, e);
}, JJ = function(r, i, e) {
  var t = zb(e, i - 1), n = zb(e, i + 1);
  return Bs(Wb, r) && !Bs(Hb, n) || Bs(Hb, r) && !Bs(Wb, t) ? "\\u" + qJ(GJ(r, 0), 16) : r;
};
an && zJ({ target: "JSON", stat: !0, forced: Ub || Vb }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  stringify: function(i, e, t) {
    var n = iO(arguments), a = rO(Ub ? XJ : an, null, n);
    return Vb && typeof a == "string" ? KJ(a, YJ, JJ) : a;
  }
});
var QJ = oe, ZJ = ga, eQ = ge, aO = qo, tQ = Lt, rQ = !ZJ || eQ(function() {
  aO.f(1);
});
QJ({ target: "Object", stat: !0, forced: rQ }, {
  getOwnPropertySymbols: function(i) {
    var e = aO.f;
    return e ? e(tQ(i)) : [];
  }
});
var nQ = qe;
nQ("asyncIterator");
var iQ = qe;
iQ("hasInstance");
var aQ = qe;
aQ("isConcatSpreadable");
var oQ = qe;
oQ("iterator");
var sQ = qe;
sQ("match");
var uQ = qe;
uQ("matchAll");
var lQ = qe;
lQ("replace");
var cQ = qe;
cQ("search");
var dQ = qe;
dQ("species");
var fQ = qe;
fQ("split");
var hQ = qe, vQ = FS;
hQ("toPrimitive");
vQ();
var pQ = nr, yQ = qe, gQ = wa;
yQ("toStringTag");
gQ(pQ("Symbol"), "Symbol");
var mQ = qe;
mQ("unscopables");
var bQ = Ge, $Q = wa;
$Q(bQ.JSON, "JSON", !0);
var _Q = me, wQ = _Q.Symbol, EQ = wQ, oO = EQ, SQ = Ke, OQ = qt.f, Gb = SQ("metadata"), Kb = Function.prototype;
Kb[Gb] === void 0 && OQ(Kb, Gb, {
  value: null
});
var TQ = qe;
TQ("asyncDispose");
var PQ = qe;
PQ("dispose");
var IQ = qe;
IQ("metadata");
var kQ = oO, CQ = kQ, xQ = nr, RQ = be, Nv = xQ("Symbol"), AQ = Nv.keyFor, DQ = RQ(Nv.prototype.valueOf), sO = Nv.isRegisteredSymbol || function(i) {
  try {
    return AQ(DQ(i)) !== void 0;
  } catch {
    return !1;
  }
}, MQ = oe, NQ = sO;
MQ({ target: "Symbol", stat: !0 }, {
  isRegisteredSymbol: NQ
});
var FQ = ba, uO = nr, BQ = be, jQ = Ho, LQ = Ke, Au = uO("Symbol"), qb = Au.isWellKnownSymbol, lO = uO("Object", "getOwnPropertyNames"), zQ = BQ(Au.prototype.valueOf), Yb = FQ("wks");
for (var Nd = 0, Xb = lO(Au), WQ = Xb.length; Nd < WQ; Nd++)
  try {
    var Jb = Xb[Nd];
    jQ(Au[Jb]) && LQ(Jb);
  } catch {
  }
var cO = function(i) {
  if (qb && qb(i)) return !0;
  try {
    for (var e = zQ(i), t = 0, n = lO(Yb), a = n.length; t < a; t++)
      if (Yb[n[t]] == e) return !0;
  } catch {
  }
  return !1;
}, HQ = oe, UQ = cO;
HQ({ target: "Symbol", stat: !0, forced: !0 }, {
  isWellKnownSymbol: UQ
});
var VQ = qe;
VQ("matcher");
var GQ = qe;
GQ("observable");
var KQ = oe, qQ = sO;
KQ({ target: "Symbol", stat: !0 }, {
  isRegistered: qQ
});
var YQ = oe, XQ = cO;
YQ({ target: "Symbol", stat: !0, forced: !0 }, {
  isWellKnown: XQ
});
var JQ = qe;
JQ("metadataKey");
var QQ = qe;
QQ("patternMatch");
var ZQ = qe;
ZQ("replaceAll");
var eZ = CQ, tZ = eZ, rZ = tZ, Ai = /* @__PURE__ */ Y(rZ), nZ = Qo, iZ = nZ.f("iterator"), aZ = iZ, oZ = aZ, sZ = oZ, uZ = sZ, lZ = uZ, cZ = lZ, dZ = cZ, fZ = /* @__PURE__ */ Y(dZ);
function Ie(r) {
  "@babel/helpers - typeof";
  return Ie = typeof Ai == "function" && typeof fZ == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Ai == "function" && i.constructor === Ai && i !== Ai.prototype ? "symbol" : typeof i;
  }, Ie(r);
}
var hZ = Qo, vZ = hZ.f("toPrimitive"), pZ = vZ, yZ = pZ, gZ = yZ, mZ = gZ, bZ = mZ, $Z = bZ, _Z = $Z, wZ = /* @__PURE__ */ Y(_Z);
function EZ(r, i) {
  if (Ie(r) !== "object" || r === null) return r;
  var e = r[wZ];
  if (e !== void 0) {
    var t = e.call(r, i);
    if (Ie(t) !== "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(r);
}
function dO(r) {
  var i = EZ(r, "string");
  return Ie(i) === "symbol" ? i : String(i);
}
function Qb(r, i) {
  for (var e = 0; e < i.length; e++) {
    var t = i[e];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), xl(r, dO(t.key), t);
  }
}
function N(r, i, e) {
  return i && Qb(r.prototype, i), e && Qb(r, e), xl(r, "prototype", {
    writable: !1
  }), r;
}
var SZ = oe, OZ = oi;
SZ({ target: "Array", stat: !0 }, {
  isArray: OZ
});
var TZ = me, PZ = TZ.Array.isArray, IZ = PZ, fO = IZ, kZ = fO, CZ = kZ, xZ = CZ, RZ = xZ, AZ = RZ, hO = /* @__PURE__ */ Y(AZ);
function DZ(r) {
  if (hO(r)) return r;
}
var MZ = dt, NZ = oi, FZ = TypeError, BZ = Object.getOwnPropertyDescriptor, jZ = MZ && !(function() {
  if (this !== void 0) return !0;
  try {
    Object.defineProperty([], "length", { writable: !1 }).length = 1;
  } catch (r) {
    return r instanceof TypeError;
  }
})(), vO = jZ ? function(r, i) {
  if (NZ(r) && !BZ(r, "length").writable)
    throw new FZ("Cannot set read only .length");
  return r.length = i;
} : function(r, i) {
  return r.length = i;
}, LZ = oe, zZ = Lt, WZ = ir, HZ = vO, UZ = kv, VZ = ge, GZ = VZ(function() {
  return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
}), KZ = function() {
  try {
    Object.defineProperty([], "length", { writable: !1 }).push();
  } catch (r) {
    return r instanceof TypeError;
  }
}, qZ = GZ || !KZ();
LZ({ target: "Array", proto: !0, forced: qZ }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function(i) {
    var e = zZ(this), t = WZ(e), n = arguments.length;
    UZ(t + n);
    for (var a = 0; a < n; a++)
      e[t] = arguments[a], t++;
    return HZ(e, t), t;
  }
});
var YZ = vt, XZ = YZ("Array").push, JZ = Je, QZ = XZ, Fd = Array.prototype, ZZ = function(r) {
  var i = r.push;
  return r === Fd || JZ(Fd, r) && i === Fd.push ? QZ : i;
}, eee = ZZ, tee = eee, ree = tee, nee = ree, iee = nee, aee = iee, oee = aee, see = /* @__PURE__ */ Y(oee);
function uee(r, i) {
  var e = r == null ? null : typeof Ai < "u" && kS(r) || r["@@iterator"];
  if (e != null) {
    var t, n, a, o, s = [], u = !0, l = !1;
    try {
      if (a = (e = e.call(r)).next, i === 0) {
        if (Object(e) !== e) return;
        u = !1;
      } else for (; !(u = (t = a.call(e)).done) && (see(s).call(s, t.value), s.length !== i); u = !0) ;
    } catch (c) {
      l = !0, n = c;
    } finally {
      try {
        if (!u && e.return != null && (o = e.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw n;
      }
    }
    return s;
  }
}
var lee = oe, Zb = oi, cee = kl, dee = ft, e$ = Go, fee = ir, hee = Pr, vee = Sa, pee = Ke, yee = Xo, gee = Ol, mee = yee("slice"), bee = pee("species"), Bd = Array, $ee = Math.max;
lee({ target: "Array", proto: !0, forced: !mee }, {
  slice: function(i, e) {
    var t = hee(this), n = fee(t), a = e$(i, n), o = e$(e === void 0 ? n : e, n), s, u, l;
    if (Zb(t) && (s = t.constructor, cee(s) && (s === Bd || Zb(s.prototype)) ? s = void 0 : dee(s) && (s = s[bee], s === null && (s = void 0)), s === Bd || s === void 0))
      return gee(t, a, o);
    for (u = new (s === void 0 ? Bd : s)($ee(o - a, 0)), l = 0; a < o; a++, l++) a in t && vee(u, l, t[a]);
    return u.length = l, u;
  }
});
var _ee = vt, wee = _ee("Array").slice, Eee = Je, See = wee, jd = Array.prototype, Oee = function(r) {
  var i = r.slice;
  return r === jd || Eee(jd, r) && i === jd.slice ? See : i;
}, Tee = Oee, pO = Tee, Pee = pO, Iee = Pee, kee = Iee, Cee = kee, xee = Cee, Ree = /* @__PURE__ */ Y(xee), Aee = OS, Dee = Aee, Mee = Dee, Nee = Mee, Fee = Nee, yO = /* @__PURE__ */ Y(Fee);
function ch(r, i) {
  (i == null || i > r.length) && (i = r.length);
  for (var e = 0, t = new Array(i); e < i; e++) t[e] = r[e];
  return t;
}
function gO(r, i) {
  var e;
  if (r) {
    if (typeof r == "string") return ch(r, i);
    var t = Ree(e = Object.prototype.toString.call(r)).call(e, 8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return yO(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ch(r, i);
  }
}
function Bee() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function He(r, i) {
  return DZ(r) || uee(r, i) || gO(r, i) || Bee();
}
function jee(r) {
  if (hO(r)) return ch(r);
}
function Lee(r) {
  if (typeof Ai < "u" && kS(r) != null || r["@@iterator"] != null) return yO(r);
}
function zee() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mr(r) {
  return jee(r) || Lee(r) || gO(r) || zee();
}
var Wee = oO, mn = /* @__PURE__ */ Y(Wee), Hee = vt, Uee = Hee("Array").concat, Vee = Je, Gee = Uee, Ld = Array.prototype, Kee = function(r) {
  var i = r.concat;
  return r === Ld || Vee(Ld, r) && i === Ld.concat ? Gee : i;
}, qee = Kee, Yee = qee, Xee = Yee, Fv = /* @__PURE__ */ Y(Xee), Jee = pO, mt = /* @__PURE__ */ Y(Jee), Qee = nr, Zee = be, ete = Jo, tte = qo, rte = Yt, nte = Zee([].concat), ite = Qee("Reflect", "ownKeys") || function(i) {
  var e = ete.f(rte(i)), t = tte.f;
  return t ? nte(e, t(i)) : e;
}, ate = fO, Te = /* @__PURE__ */ Y(ate), ote = oe, ste = gn.map, ute = Xo, lte = ute("map");
ote({ target: "Array", proto: !0, forced: !lte }, {
  map: function(i) {
    return ste(this, i, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var cte = vt, dte = cte("Array").map, fte = Je, hte = dte, zd = Array.prototype, vte = function(r) {
  var i = r.map;
  return r === zd || fte(zd, r) && i === zd.map ? hte : i;
}, pte = vte, yte = pte, gte = yte, Xi = /* @__PURE__ */ Y(gte), mte = oe, bte = Lt, mO = Sl, $te = ge, _te = $te(function() {
  mO(1);
});
mte({ target: "Object", stat: !0, forced: _te }, {
  keys: function(i) {
    return mO(bte(i));
  }
});
var wte = me, Ete = wte.Object.keys, Ste = Ete, Ote = Ste, Tte = Ote, We = /* @__PURE__ */ Y(Tte), Pte = oe, Ite = be, bO = Date, kte = Ite(bO.prototype.getTime);
Pte({ target: "Date", stat: !0 }, {
  now: function() {
    return kte(new bO());
  }
});
var Cte = me, xte = Cte.Date.now, Rte = xte, Ate = Rte, Dte = Ate, Du = /* @__PURE__ */ Y(Dte), Mte = ge, Oa = function(r, i) {
  var e = [][r];
  return !!e && Mte(function() {
    e.call(null, i || function() {
      return 1;
    }, 1);
  });
}, Nte = gn.forEach, Fte = Oa, Bte = Fte("forEach"), jte = Bte ? [].forEach : function(i) {
  return Nte(this, i, arguments.length > 1 ? arguments[1] : void 0);
}, Lte = oe, t$ = jte;
Lte({ target: "Array", proto: !0, forced: [].forEach !== t$ }, {
  forEach: t$
});
var zte = vt, Wte = zte("Array").forEach, Hte = Wte, Ute = Hte, Vte = ri, Gte = ht, Kte = Je, qte = Ute, Wd = Array.prototype, Yte = {
  DOMTokenList: !0,
  NodeList: !0
}, Xte = function(r) {
  var i = r.forEach;
  return r === Wd || Kte(Wd, r) && i === Wd.forEach || Gte(Yte, Vte(r)) ? qte : i;
}, Jte = Xte, xe = /* @__PURE__ */ Y(Jte), Qte = oe, Zte = be, ere = oi, tre = Zte([].reverse), r$ = [1, 2];
Qte({ target: "Array", proto: !0, forced: String(r$) === String(r$.reverse()) }, {
  reverse: function() {
    return ere(this) && (this.length = this.length), tre(this);
  }
});
var rre = vt, nre = rre("Array").reverse, ire = Je, are = nre, Hd = Array.prototype, ore = function(r) {
  var i = r.reverse;
  return r === Hd || ire(Hd, r) && i === Hd.reverse ? are : i;
}, sre = ore, ure = sre, lre = ure, Dn = /* @__PURE__ */ Y(lre), n$ = ma, cre = TypeError, $O = function(r, i) {
  if (!delete r[i]) throw new cre("Cannot delete property " + n$(i) + " of " + n$(r));
}, dre = oe, fre = Lt, hre = Go, vre = El, pre = ir, yre = vO, gre = kv, mre = Cv, bre = Sa, Ud = $O, $re = Xo, _re = $re("splice"), wre = Math.max, Ere = Math.min;
dre({ target: "Array", proto: !0, forced: !_re }, {
  splice: function(i, e) {
    var t = fre(this), n = pre(t), a = hre(i, n), o = arguments.length, s, u, l, c, d, f;
    for (o === 0 ? s = u = 0 : o === 1 ? (s = 0, u = n - a) : (s = o - 2, u = Ere(wre(vre(e), 0), n - a)), gre(n + s - u), l = mre(t, u), c = 0; c < u; c++)
      d = a + c, d in t && bre(l, c, t[d]);
    if (l.length = u, s < u) {
      for (c = a; c < n - u; c++)
        d = c + u, f = c + s, d in t ? t[f] = t[d] : Ud(t, f);
      for (c = n; c > n - u + s; c--) Ud(t, c - 1);
    } else if (s > u)
      for (c = n - u; c > a; c--)
        d = c + u - 1, f = c + s - 1, d in t ? t[f] = t[d] : Ud(t, f);
    for (c = 0; c < s; c++)
      t[c + a] = arguments[c + 2];
    return yre(t, n - u + s), l;
  }
});
var Sre = vt, Ore = Sre("Array").splice, Tre = Je, Pre = Ore, Vd = Array.prototype, Ire = function(r) {
  var i = r.splice;
  return r === Vd || Tre(Vd, r) && i === Vd.splice ? Pre : i;
}, kre = Ire, Cre = kre, xre = Cre, Fr = /* @__PURE__ */ Y(xre), Rre = oe, Are = _v.includes, Dre = ge, Mre = Dre(function() {
  return !Array(1).includes();
});
Rre({ target: "Array", proto: !0, forced: Mre }, {
  includes: function(i) {
    return Are(this, i, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var Nre = vt, Fre = Nre("Array").includes, Bre = ft, jre = Kr, Lre = Ke, zre = Lre("match"), Wre = function(r) {
  var i;
  return Bre(r) && ((i = r[zre]) !== void 0 ? !!i : jre(r) === "RegExp");
}, Hre = Wre, Ure = TypeError, Vre = function(r) {
  if (Hre(r))
    throw new Ure("The method doesn't accept regular expressions");
  return r;
}, Gre = Ke, Kre = Gre("match"), qre = function(r) {
  var i = /./;
  try {
    "/./"[r](i);
  } catch {
    try {
      return i[Kre] = !1, "/./"[r](i);
    } catch {
    }
  }
  return !1;
}, Yre = oe, Xre = be, Jre = Vre, Qre = Lo, i$ = Ir, Zre = qre, ene = Xre("".indexOf);
Yre({ target: "String", proto: !0, forced: !Zre("includes") }, {
  includes: function(i) {
    return !!~ene(
      i$(Qre(this)),
      i$(Jre(i)),
      arguments.length > 1 ? arguments[1] : void 0
    );
  }
});
var tne = vt, rne = tne("String").includes, a$ = Je, nne = Fre, ine = rne, Gd = Array.prototype, Kd = String.prototype, ane = function(r) {
  var i = r.includes;
  return r === Gd || a$(Gd, r) && i === Gd.includes ? nne : typeof r == "string" || r === Kd || a$(Kd, r) && i === Kd.includes ? ine : i;
}, one = ane, sne = one, une = sne, on = /* @__PURE__ */ Y(une), lne = oe, cne = ge, dne = Lt, _O = Il, fne = dS, hne = cne(function() {
  _O(1);
});
lne({ target: "Object", stat: !0, forced: hne, sham: !fne }, {
  getPrototypeOf: function(i) {
    return _O(dne(i));
  }
});
var vne = me, pne = vne.Object.getPrototypeOf, yne = pne, wO = yne, gne = wO, o$ = /* @__PURE__ */ Y(gne), mne = oe, bne = gn.filter, $ne = Xo, _ne = $ne("filter");
mne({ target: "Array", proto: !0, forced: !_ne }, {
  filter: function(i) {
    return bne(this, i, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var wne = vt, Ene = wne("Array").filter, Sne = Je, One = Ene, qd = Array.prototype, Tne = function(r) {
  var i = r.filter;
  return r === qd || Sne(qd, r) && i === qd.filter ? One : i;
}, Pne = Tne, Ine = Pne, kne = Ine, Dt = /* @__PURE__ */ Y(kne), Bv = `	
\v\f\r                　\u2028\u2029\uFEFF`, Cne = be, xne = Lo, Rne = Ir, dh = Bv, s$ = Cne("".replace), Ane = RegExp("^[" + dh + "]+"), Dne = RegExp("(^|[^" + dh + "])[" + dh + "]+$"), Mne = function(r) {
  return function(i) {
    var e = Rne(xne(i));
    return r & 1 && (e = s$(e, Ane, "")), r & 2 && (e = s$(e, Dne, "$1")), e;
  };
}, EO = {
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: Mne(3)
}, SO = Ge, Nne = ge, Fne = be, Bne = Ir, jne = EO.trim, u$ = Bv, Va = SO.parseInt, l$ = SO.Symbol, c$ = l$ && l$.iterator, OO = /^[+-]?0x/i, Lne = Fne(OO.exec), zne = Va(u$ + "08") !== 8 || Va(u$ + "0x16") !== 22 || c$ && !Nne(function() {
  Va(Object(c$));
}), Wne = zne ? function(i, e) {
  var t = jne(Bne(i));
  return Va(t, e >>> 0 || (Lne(OO, t) ? 16 : 10));
} : Va, Hne = oe, d$ = Wne;
Hne({ global: !0, forced: parseInt !== d$ }, {
  parseInt: d$
});
var Une = me, Vne = Une.parseInt, Gne = Vne, Kne = Gne, qne = Kne, lr = /* @__PURE__ */ Y(qne), Yne = oe, Xne = mv, Jne = _v.indexOf, Qne = Oa, fh = Xne([].indexOf), TO = !!fh && 1 / fh([1], 1, -0) < 0, Zne = TO || !Qne("indexOf");
Yne({ target: "Array", proto: !0, forced: Zne }, {
  indexOf: function(i) {
    var e = arguments.length > 1 ? arguments[1] : void 0;
    return TO ? fh(this, i, e) || 0 : Jne(this, i, e);
  }
});
var eie = vt, tie = eie("Array").indexOf, rie = Je, nie = tie, Yd = Array.prototype, iie = function(r) {
  var i = r.indexOf;
  return r === Yd || rie(Yd, r) && i === Yd.indexOf ? nie : i;
}, aie = iie, oie = aie, sie = oie, ye = /* @__PURE__ */ Y(sie), uie = oe, lie = dt, cie = _a;
uie({ target: "Object", stat: !0, sham: !lie }, {
  create: cie
});
var die = me, fie = die.Object, hie = function(i, e) {
  return fie.create(i, e);
}, vie = hie, PO = vie, pie = PO, Mn = /* @__PURE__ */ Y(pie), hh = me, yie = Bo;
hh.JSON || (hh.JSON = { stringify: JSON.stringify });
var gie = function(i, e, t) {
  return yie(hh.JSON.stringify, null, arguments);
}, mie = gie, bie = mie, $ie = bie, ts = /* @__PURE__ */ Y($ie), _ie = typeof Bun == "function" && Bun && typeof Bun.version == "string", wie = TypeError, Eie = function(r, i) {
  if (r < i) throw new wie("Not enough arguments");
  return r;
}, IO = Ge, Sie = Bo, Oie = ct, Tie = _ie, Pie = zo, Iie = Ol, kie = Eie, Cie = IO.Function, xie = /MSIE .\./.test(Pie) || Tie && (function() {
  var r = IO.Bun.version.split(".");
  return r.length < 3 || r[0] === "0" && (r[1] < 3 || r[1] === "3" && r[2] === "0");
})(), kO = function(r, i) {
  var e = i ? 2 : 1;
  return xie ? function(t, n) {
    var a = kie(arguments.length, 1) > e, o = Oie(t) ? t : Cie(t), s = a ? Iie(arguments, e) : [], u = a ? function() {
      Sie(o, this, s);
    } : o;
    return i ? r(u, n) : r(u);
  } : r;
}, Rie = oe, CO = Ge, Aie = kO, f$ = Aie(CO.setInterval, !0);
Rie({ global: !0, bind: !0, forced: CO.setInterval !== f$ }, {
  setInterval: f$
});
var Die = oe, xO = Ge, Mie = kO, h$ = Mie(xO.setTimeout, !0);
Die({ global: !0, bind: !0, forced: xO.setTimeout !== h$ }, {
  setTimeout: h$
});
var Nie = me, Fie = Nie.setTimeout, Bie = Fie, Er = /* @__PURE__ */ Y(Bie), jie = Lt, v$ = Go, Lie = ir, zie = function(i) {
  for (var e = jie(this), t = Lie(e), n = arguments.length, a = v$(n > 1 ? arguments[1] : void 0, t), o = n > 2 ? arguments[2] : void 0, s = o === void 0 ? t : v$(o, t); s > a; ) e[a++] = i;
  return e;
}, Wie = oe, Hie = zie;
Wie({ target: "Array", proto: !0 }, {
  fill: Hie
});
var Uie = vt, Vie = Uie("Array").fill, Gie = Je, Kie = Vie, Xd = Array.prototype, qie = function(r) {
  var i = r.fill;
  return r === Xd || Gie(Xd, r) && i === Xd.fill ? Kie : i;
}, Yie = qie, Xie = Yie, Jie = Xie, rs = /* @__PURE__ */ Y(Jie);
/*! Hammer.JS - v2.0.17-rc - 2019-12-16
 * http://naver.github.io/egjs
 *
 * Forked By Naver egjs
 * Copyright (c) hammerjs
 * Licensed under the MIT license */
function hr() {
  return hr = Object.assign || function(r) {
    for (var i = 1; i < arguments.length; i++) {
      var e = arguments[i];
      for (var t in e)
        Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
    }
    return r;
  }, hr.apply(this, arguments);
}
function ar(r, i) {
  r.prototype = Object.create(i.prototype), r.prototype.constructor = r, r.__proto__ = i;
}
function js(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
var vh;
typeof Object.assign != "function" ? vh = function(i) {
  if (i == null)
    throw new TypeError("Cannot convert undefined or null to object");
  for (var e = Object(i), t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    if (n != null)
      for (var a in n)
        n.hasOwnProperty(a) && (e[a] = n[a]);
  }
  return e;
} : vh = Object.assign;
var Un = vh, p$ = ["", "webkit", "Moz", "MS", "ms", "o"], Qie = typeof document > "u" ? {
  style: {}
} : document.createElement("div"), Zie = "function", Di = Math.round, Vn = Math.abs, jv = Date.now;
function jl(r, i) {
  for (var e, t, n = i[0].toUpperCase() + i.slice(1), a = 0; a < p$.length; ) {
    if (e = p$[a], t = e ? e + n : i, t in r)
      return t;
    a++;
  }
}
var Br;
typeof window > "u" ? Br = {} : Br = window;
var RO = jl(Qie.style, "touchAction"), AO = RO !== void 0;
function eae() {
  if (!AO)
    return !1;
  var r = {}, i = Br.CSS && Br.CSS.supports;
  return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(e) {
    return r[e] = i ? Br.CSS.supports("touch-action", e) : !0;
  }), r;
}
var DO = "compute", MO = "auto", ph = "manipulation", Nn = "none", fo = "pan-x", ho = "pan-y", Ls = eae(), tae = /mobile|tablet|ip(ad|hone|od)|android/i, NO = "ontouchstart" in Br, rae = jl(Br, "PointerEvent") !== void 0, nae = NO && tae.test(navigator.userAgent), ns = "touch", iae = "pen", Lv = "mouse", aae = "kinect", oae = 25, Tt = 1, si = 2, rt = 4, Nt = 8, Mu = 1, is = 2, as = 4, os = 8, Ji = 16, Sr = is | as, Fn = os | Ji, FO = Sr | Fn, BO = ["x", "y"], Nu = ["clientX", "clientY"];
function jr(r, i, e) {
  var t;
  if (r)
    if (r.forEach)
      r.forEach(i, e);
    else if (r.length !== void 0)
      for (t = 0; t < r.length; )
        i.call(e, r[t], t, r), t++;
    else
      for (t in r)
        r.hasOwnProperty(t) && i.call(e, r[t], t, r);
}
function Ll(r, i) {
  return typeof r === Zie ? r.apply(i && i[0] || void 0, i) : r;
}
function Tn(r, i) {
  return r.indexOf(i) > -1;
}
function sae(r) {
  if (Tn(r, Nn))
    return Nn;
  var i = Tn(r, fo), e = Tn(r, ho);
  return i && e ? Nn : i || e ? i ? fo : ho : Tn(r, ph) ? ph : MO;
}
var jO = /* @__PURE__ */ (function() {
  function r(e, t) {
    this.manager = e, this.set(t);
  }
  var i = r.prototype;
  return i.set = function(t) {
    t === DO && (t = this.compute()), AO && this.manager.element.style && Ls[t] && (this.manager.element.style[RO] = t), this.actions = t.toLowerCase().trim();
  }, i.update = function() {
    this.set(this.manager.options.touchAction);
  }, i.compute = function() {
    var t = [];
    return jr(this.manager.recognizers, function(n) {
      Ll(n.options.enable, [n]) && (t = t.concat(n.getTouchAction()));
    }), sae(t.join(" "));
  }, i.preventDefaults = function(t) {
    var n = t.srcEvent, a = t.offsetDirection;
    if (this.manager.session.prevented) {
      n.preventDefault();
      return;
    }
    var o = this.actions, s = Tn(o, Nn) && !Ls[Nn], u = Tn(o, ho) && !Ls[ho], l = Tn(o, fo) && !Ls[fo];
    if (s) {
      var c = t.pointers.length === 1, d = t.distance < 2, f = t.deltaTime < 250;
      if (c && d && f)
        return;
    }
    if (!(l && u) && (s || u && a & Sr || l && a & Fn))
      return this.preventSrc(n);
  }, i.preventSrc = function(t) {
    this.manager.session.prevented = !0, t.preventDefault();
  }, r;
})();
function zv(r, i) {
  for (; r; ) {
    if (r === i)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
function LO(r) {
  var i = r.length;
  if (i === 1)
    return {
      x: Di(r[0].clientX),
      y: Di(r[0].clientY)
    };
  for (var e = 0, t = 0, n = 0; n < i; )
    e += r[n].clientX, t += r[n].clientY, n++;
  return {
    x: Di(e / i),
    y: Di(t / i)
  };
}
function y$(r) {
  for (var i = [], e = 0; e < r.pointers.length; )
    i[e] = {
      clientX: Di(r.pointers[e].clientX),
      clientY: Di(r.pointers[e].clientY)
    }, e++;
  return {
    timeStamp: jv(),
    pointers: i,
    center: LO(i),
    deltaX: r.deltaX,
    deltaY: r.deltaY
  };
}
function Fu(r, i, e) {
  e || (e = BO);
  var t = i[e[0]] - r[e[0]], n = i[e[1]] - r[e[1]];
  return Math.sqrt(t * t + n * n);
}
function yh(r, i, e) {
  e || (e = BO);
  var t = i[e[0]] - r[e[0]], n = i[e[1]] - r[e[1]];
  return Math.atan2(n, t) * 180 / Math.PI;
}
function zO(r, i) {
  return r === i ? Mu : Vn(r) >= Vn(i) ? r < 0 ? is : as : i < 0 ? os : Ji;
}
function uae(r, i) {
  var e = i.center, t = r.offsetDelta || {}, n = r.prevDelta || {}, a = r.prevInput || {};
  (i.eventType === Tt || a.eventType === rt) && (n = r.prevDelta = {
    x: a.deltaX || 0,
    y: a.deltaY || 0
  }, t = r.offsetDelta = {
    x: e.x,
    y: e.y
  }), i.deltaX = n.x + (e.x - t.x), i.deltaY = n.y + (e.y - t.y);
}
function WO(r, i, e) {
  return {
    x: i / r || 0,
    y: e / r || 0
  };
}
function lae(r, i) {
  return Fu(i[0], i[1], Nu) / Fu(r[0], r[1], Nu);
}
function cae(r, i) {
  return yh(i[1], i[0], Nu) + yh(r[1], r[0], Nu);
}
function dae(r, i) {
  var e = r.lastInterval || i, t = i.timeStamp - e.timeStamp, n, a, o, s;
  if (i.eventType !== Nt && (t > oae || e.velocity === void 0)) {
    var u = i.deltaX - e.deltaX, l = i.deltaY - e.deltaY, c = WO(t, u, l);
    a = c.x, o = c.y, n = Vn(c.x) > Vn(c.y) ? c.x : c.y, s = zO(u, l), r.lastInterval = i;
  } else
    n = e.velocity, a = e.velocityX, o = e.velocityY, s = e.direction;
  i.velocity = n, i.velocityX = a, i.velocityY = o, i.direction = s;
}
function fae(r, i) {
  var e = r.session, t = i.pointers, n = t.length;
  e.firstInput || (e.firstInput = y$(i)), n > 1 && !e.firstMultiple ? e.firstMultiple = y$(i) : n === 1 && (e.firstMultiple = !1);
  var a = e.firstInput, o = e.firstMultiple, s = o ? o.center : a.center, u = i.center = LO(t);
  i.timeStamp = jv(), i.deltaTime = i.timeStamp - a.timeStamp, i.angle = yh(s, u), i.distance = Fu(s, u), uae(e, i), i.offsetDirection = zO(i.deltaX, i.deltaY);
  var l = WO(i.deltaTime, i.deltaX, i.deltaY);
  i.overallVelocityX = l.x, i.overallVelocityY = l.y, i.overallVelocity = Vn(l.x) > Vn(l.y) ? l.x : l.y, i.scale = o ? lae(o.pointers, t) : 1, i.rotation = o ? cae(o.pointers, t) : 0, i.maxPointers = e.prevInput ? i.pointers.length > e.prevInput.maxPointers ? i.pointers.length : e.prevInput.maxPointers : i.pointers.length, dae(e, i);
  var c = r.element, d = i.srcEvent, f;
  d.composedPath ? f = d.composedPath()[0] : d.path ? f = d.path[0] : f = d.target, zv(f, c) && (c = f), i.target = c;
}
function hae(r, i, e) {
  var t = e.pointers.length, n = e.changedPointers.length, a = i & Tt && t - n === 0, o = i & (rt | Nt) && t - n === 0;
  e.isFirst = !!a, e.isFinal = !!o, a && (r.session = {}), e.eventType = i, fae(r, e), r.emit("hammer.input", e), r.recognize(e), r.session.prevInput = e;
}
function vo(r) {
  return r.trim().split(/\s+/g);
}
function Ga(r, i, e) {
  jr(vo(i), function(t) {
    r.addEventListener(t, e, !1);
  });
}
function Ka(r, i, e) {
  jr(vo(i), function(t) {
    r.removeEventListener(t, e, !1);
  });
}
function g$(r) {
  var i = r.ownerDocument || r;
  return i.defaultView || i.parentWindow || window;
}
var Ta = /* @__PURE__ */ (function() {
  function r(e, t) {
    var n = this;
    this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(a) {
      Ll(e.options.enable, [e]) && n.handler(a);
    }, this.init();
  }
  var i = r.prototype;
  return i.handler = function() {
  }, i.init = function() {
    this.evEl && Ga(this.element, this.evEl, this.domHandler), this.evTarget && Ga(this.target, this.evTarget, this.domHandler), this.evWin && Ga(g$(this.element), this.evWin, this.domHandler);
  }, i.destroy = function() {
    this.evEl && Ka(this.element, this.evEl, this.domHandler), this.evTarget && Ka(this.target, this.evTarget, this.domHandler), this.evWin && Ka(g$(this.element), this.evWin, this.domHandler);
  }, r;
})();
function Gn(r, i, e) {
  if (r.indexOf && !e)
    return r.indexOf(i);
  for (var t = 0; t < r.length; ) {
    if (e && r[t][e] == i || !e && r[t] === i)
      return t;
    t++;
  }
  return -1;
}
var vae = {
  pointerdown: Tt,
  pointermove: si,
  pointerup: rt,
  pointercancel: Nt,
  pointerout: Nt
}, pae = {
  2: ns,
  3: iae,
  4: Lv,
  5: aae
  // see https://twitter.com/jacobrossi/status/480596438489890816
}, HO = "pointerdown", UO = "pointermove pointerup pointercancel";
Br.MSPointerEvent && !Br.PointerEvent && (HO = "MSPointerDown", UO = "MSPointerMove MSPointerUp MSPointerCancel");
var VO = /* @__PURE__ */ (function(r) {
  ar(i, r);
  function i() {
    var t, n = i.prototype;
    return n.evEl = HO, n.evWin = UO, t = r.apply(this, arguments) || this, t.store = t.manager.session.pointerEvents = [], t;
  }
  var e = i.prototype;
  return e.handler = function(n) {
    var a = this.store, o = !1, s = n.type.toLowerCase().replace("ms", ""), u = vae[s], l = pae[n.pointerType] || n.pointerType, c = l === ns, d = Gn(a, n.pointerId, "pointerId");
    u & Tt && (n.button === 0 || c) ? d < 0 && (a.push(n), d = a.length - 1) : u & (rt | Nt) && (o = !0), !(d < 0) && (a[d] = n, this.callback(this.manager, u, {
      pointers: a,
      changedPointers: [n],
      pointerType: l,
      srcEvent: n
    }), o && a.splice(d, 1));
  }, i;
})(Ta);
function po(r) {
  return Array.prototype.slice.call(r, 0);
}
function Wv(r, i, e) {
  for (var t = [], n = [], a = 0; a < r.length; ) {
    var o = i ? r[a][i] : r[a];
    Gn(n, o) < 0 && t.push(r[a]), n[a] = o, a++;
  }
  return e && (i ? t = t.sort(function(s, u) {
    return s[i] > u[i];
  }) : t = t.sort()), t;
}
var yae = {
  touchstart: Tt,
  touchmove: si,
  touchend: rt,
  touchcancel: Nt
}, gae = "touchstart touchmove touchend touchcancel", Hv = /* @__PURE__ */ (function(r) {
  ar(i, r);
  function i() {
    var t;
    return i.prototype.evTarget = gae, t = r.apply(this, arguments) || this, t.targetIds = {}, t;
  }
  var e = i.prototype;
  return e.handler = function(n) {
    var a = yae[n.type], o = mae.call(this, n, a);
    o && this.callback(this.manager, a, {
      pointers: o[0],
      changedPointers: o[1],
      pointerType: ns,
      srcEvent: n
    });
  }, i;
})(Ta);
function mae(r, i) {
  var e = po(r.touches), t = this.targetIds;
  if (i & (Tt | si) && e.length === 1)
    return t[e[0].identifier] = !0, [e, e];
  var n, a, o = po(r.changedTouches), s = [], u = this.target;
  if (a = e.filter(function(l) {
    return zv(l.target, u);
  }), i === Tt)
    for (n = 0; n < a.length; )
      t[a[n].identifier] = !0, n++;
  for (n = 0; n < o.length; )
    t[o[n].identifier] && s.push(o[n]), i & (rt | Nt) && delete t[o[n].identifier], n++;
  if (s.length)
    return [
      // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
      Wv(a.concat(s), "identifier", !0),
      s
    ];
}
var bae = {
  mousedown: Tt,
  mousemove: si,
  mouseup: rt
}, $ae = "mousedown", _ae = "mousemove mouseup", Uv = /* @__PURE__ */ (function(r) {
  ar(i, r);
  function i() {
    var t, n = i.prototype;
    return n.evEl = $ae, n.evWin = _ae, t = r.apply(this, arguments) || this, t.pressed = !1, t;
  }
  var e = i.prototype;
  return e.handler = function(n) {
    var a = bae[n.type];
    a & Tt && n.button === 0 && (this.pressed = !0), a & si && n.which !== 1 && (a = rt), this.pressed && (a & rt && (this.pressed = !1), this.callback(this.manager, a, {
      pointers: [n],
      changedPointers: [n],
      pointerType: Lv,
      srcEvent: n
    }));
  }, i;
})(Ta), wae = 2500, m$ = 25;
function b$(r) {
  var i = r.changedPointers, e = i[0];
  if (e.identifier === this.primaryTouch) {
    var t = {
      x: e.clientX,
      y: e.clientY
    }, n = this.lastTouches;
    this.lastTouches.push(t);
    var a = function() {
      var s = n.indexOf(t);
      s > -1 && n.splice(s, 1);
    };
    setTimeout(a, wae);
  }
}
function Eae(r, i) {
  r & Tt ? (this.primaryTouch = i.changedPointers[0].identifier, b$.call(this, i)) : r & (rt | Nt) && b$.call(this, i);
}
function Sae(r) {
  for (var i = r.srcEvent.clientX, e = r.srcEvent.clientY, t = 0; t < this.lastTouches.length; t++) {
    var n = this.lastTouches[t], a = Math.abs(i - n.x), o = Math.abs(e - n.y);
    if (a <= m$ && o <= m$)
      return !0;
  }
  return !1;
}
var GO = /* @__PURE__ */ (function() {
  var r = /* @__PURE__ */ (function(i) {
    ar(e, i);
    function e(n, a) {
      var o;
      return o = i.call(this, n, a) || this, o.handler = function(s, u, l) {
        var c = l.pointerType === ns, d = l.pointerType === Lv;
        if (!(d && l.sourceCapabilities && l.sourceCapabilities.firesTouchEvents)) {
          if (c)
            Eae.call(js(js(o)), u, l);
          else if (d && Sae.call(js(js(o)), l))
            return;
          o.callback(s, u, l);
        }
      }, o.touch = new Hv(o.manager, o.handler), o.mouse = new Uv(o.manager, o.handler), o.primaryTouch = null, o.lastTouches = [], o;
    }
    var t = e.prototype;
    return t.destroy = function() {
      this.touch.destroy(), this.mouse.destroy();
    }, e;
  })(Ta);
  return r;
})();
function Oae(r) {
  var i, e = r.options.inputClass;
  return e ? i = e : rae ? i = VO : nae ? i = Hv : NO ? i = GO : i = Uv, new i(r, hae);
}
function Mi(r, i, e) {
  return Array.isArray(r) ? (jr(r, e[i], e), !0) : !1;
}
var su = 1, tr = 2, Qi = 4, sn = 8, Lr = sn, yo = 16, $r = 32, Tae = 1;
function Pae() {
  return Tae++;
}
function zs(r, i) {
  var e = i.manager;
  return e ? e.get(r) : r;
}
function $$(r) {
  return r & yo ? "cancel" : r & sn ? "end" : r & Qi ? "move" : r & tr ? "start" : "";
}
var ss = /* @__PURE__ */ (function() {
  function r(e) {
    e === void 0 && (e = {}), this.options = hr({
      enable: !0
    }, e), this.id = Pae(), this.manager = null, this.state = su, this.simultaneous = {}, this.requireFail = [];
  }
  var i = r.prototype;
  return i.set = function(t) {
    return Un(this.options, t), this.manager && this.manager.touchAction.update(), this;
  }, i.recognizeWith = function(t) {
    if (Mi(t, "recognizeWith", this))
      return this;
    var n = this.simultaneous;
    return t = zs(t, this), n[t.id] || (n[t.id] = t, t.recognizeWith(this)), this;
  }, i.dropRecognizeWith = function(t) {
    return Mi(t, "dropRecognizeWith", this) ? this : (t = zs(t, this), delete this.simultaneous[t.id], this);
  }, i.requireFailure = function(t) {
    if (Mi(t, "requireFailure", this))
      return this;
    var n = this.requireFail;
    return t = zs(t, this), Gn(n, t) === -1 && (n.push(t), t.requireFailure(this)), this;
  }, i.dropRequireFailure = function(t) {
    if (Mi(t, "dropRequireFailure", this))
      return this;
    t = zs(t, this);
    var n = Gn(this.requireFail, t);
    return n > -1 && this.requireFail.splice(n, 1), this;
  }, i.hasRequireFailures = function() {
    return this.requireFail.length > 0;
  }, i.canRecognizeWith = function(t) {
    return !!this.simultaneous[t.id];
  }, i.emit = function(t) {
    var n = this, a = this.state;
    function o(s) {
      n.manager.emit(s, t);
    }
    a < sn && o(n.options.event + $$(a)), o(n.options.event), t.additionalEvent && o(t.additionalEvent), a >= sn && o(n.options.event + $$(a));
  }, i.tryEmit = function(t) {
    if (this.canEmit())
      return this.emit(t);
    this.state = $r;
  }, i.canEmit = function() {
    for (var t = 0; t < this.requireFail.length; ) {
      if (!(this.requireFail[t].state & ($r | su)))
        return !1;
      t++;
    }
    return !0;
  }, i.recognize = function(t) {
    var n = Un({}, t);
    if (!Ll(this.options.enable, [this, n])) {
      this.reset(), this.state = $r;
      return;
    }
    this.state & (Lr | yo | $r) && (this.state = su), this.state = this.process(n), this.state & (tr | Qi | sn | yo) && this.tryEmit(n);
  }, i.process = function(t) {
  }, i.getTouchAction = function() {
  }, i.reset = function() {
  }, r;
})(), gh = /* @__PURE__ */ (function(r) {
  ar(i, r);
  function i(t) {
    var n;
    return t === void 0 && (t = {}), n = r.call(this, hr({
      event: "tap",
      pointers: 1,
      taps: 1,
      interval: 300,
      // max time between the multi-tap taps
      time: 250,
      // max time of the pointer to be down (like finger on the screen)
      threshold: 9,
      // a minimal movement is ok, but keep it low
      posThreshold: 10
    }, t)) || this, n.pTime = !1, n.pCenter = !1, n._timer = null, n._input = null, n.count = 0, n;
  }
  var e = i.prototype;
  return e.getTouchAction = function() {
    return [ph];
  }, e.process = function(n) {
    var a = this, o = this.options, s = n.pointers.length === o.pointers, u = n.distance < o.threshold, l = n.deltaTime < o.time;
    if (this.reset(), n.eventType & Tt && this.count === 0)
      return this.failTimeout();
    if (u && l && s) {
      if (n.eventType !== rt)
        return this.failTimeout();
      var c = this.pTime ? n.timeStamp - this.pTime < o.interval : !0, d = !this.pCenter || Fu(this.pCenter, n.center) < o.posThreshold;
      this.pTime = n.timeStamp, this.pCenter = n.center, !d || !c ? this.count = 1 : this.count += 1, this._input = n;
      var f = this.count % o.taps;
      if (f === 0)
        return this.hasRequireFailures() ? (this._timer = setTimeout(function() {
          a.state = Lr, a.tryEmit();
        }, o.interval), tr) : Lr;
    }
    return $r;
  }, e.failTimeout = function() {
    var n = this;
    return this._timer = setTimeout(function() {
      n.state = $r;
    }, this.options.interval), $r;
  }, e.reset = function() {
    clearTimeout(this._timer);
  }, e.emit = function() {
    this.state === Lr && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
  }, i;
})(ss), Zi = /* @__PURE__ */ (function(r) {
  ar(i, r);
  function i(t) {
    return t === void 0 && (t = {}), r.call(this, hr({
      pointers: 1
    }, t)) || this;
  }
  var e = i.prototype;
  return e.attrTest = function(n) {
    var a = this.options.pointers;
    return a === 0 || n.pointers.length === a;
  }, e.process = function(n) {
    var a = this.state, o = n.eventType, s = a & (tr | Qi), u = this.attrTest(n);
    return s && (o & Nt || !u) ? a | yo : s || u ? o & rt ? a | sn : a & tr ? a | Qi : tr : $r;
  }, i;
})(ss);
function KO(r) {
  return r === Ji ? "down" : r === os ? "up" : r === is ? "left" : r === as ? "right" : "";
}
var Vv = /* @__PURE__ */ (function(r) {
  ar(i, r);
  function i(t) {
    var n;
    return t === void 0 && (t = {}), n = r.call(this, hr({
      event: "pan",
      threshold: 10,
      pointers: 1,
      direction: FO
    }, t)) || this, n.pX = null, n.pY = null, n;
  }
  var e = i.prototype;
  return e.getTouchAction = function() {
    var n = this.options.direction, a = [];
    return n & Sr && a.push(ho), n & Fn && a.push(fo), a;
  }, e.directionTest = function(n) {
    var a = this.options, o = !0, s = n.distance, u = n.direction, l = n.deltaX, c = n.deltaY;
    return u & a.direction || (a.direction & Sr ? (u = l === 0 ? Mu : l < 0 ? is : as, o = l !== this.pX, s = Math.abs(n.deltaX)) : (u = c === 0 ? Mu : c < 0 ? os : Ji, o = c !== this.pY, s = Math.abs(n.deltaY))), n.direction = u, o && s > a.threshold && u & a.direction;
  }, e.attrTest = function(n) {
    return Zi.prototype.attrTest.call(this, n) && // replace with a super call
    (this.state & tr || !(this.state & tr) && this.directionTest(n));
  }, e.emit = function(n) {
    this.pX = n.deltaX, this.pY = n.deltaY;
    var a = KO(n.direction);
    a && (n.additionalEvent = this.options.event + a), r.prototype.emit.call(this, n);
  }, i;
})(Zi), qO = /* @__PURE__ */ (function(r) {
  ar(i, r);
  function i(t) {
    return t === void 0 && (t = {}), r.call(this, hr({
      event: "swipe",
      threshold: 10,
      velocity: 0.3,
      direction: Sr | Fn,
      pointers: 1
    }, t)) || this;
  }
  var e = i.prototype;
  return e.getTouchAction = function() {
    return Vv.prototype.getTouchAction.call(this);
  }, e.attrTest = function(n) {
    var a = this.options.direction, o;
    return a & (Sr | Fn) ? o = n.overallVelocity : a & Sr ? o = n.overallVelocityX : a & Fn && (o = n.overallVelocityY), r.prototype.attrTest.call(this, n) && a & n.offsetDirection && n.distance > this.options.threshold && n.maxPointers === this.options.pointers && Vn(o) > this.options.velocity && n.eventType & rt;
  }, e.emit = function(n) {
    var a = KO(n.offsetDirection);
    a && this.manager.emit(this.options.event + a, n), this.manager.emit(this.options.event, n);
  }, i;
})(Zi), YO = /* @__PURE__ */ (function(r) {
  ar(i, r);
  function i(t) {
    return t === void 0 && (t = {}), r.call(this, hr({
      event: "pinch",
      threshold: 0,
      pointers: 2
    }, t)) || this;
  }
  var e = i.prototype;
  return e.getTouchAction = function() {
    return [Nn];
  }, e.attrTest = function(n) {
    return r.prototype.attrTest.call(this, n) && (Math.abs(n.scale - 1) > this.options.threshold || this.state & tr);
  }, e.emit = function(n) {
    if (n.scale !== 1) {
      var a = n.scale < 1 ? "in" : "out";
      n.additionalEvent = this.options.event + a;
    }
    r.prototype.emit.call(this, n);
  }, i;
})(Zi), XO = /* @__PURE__ */ (function(r) {
  ar(i, r);
  function i(t) {
    return t === void 0 && (t = {}), r.call(this, hr({
      event: "rotate",
      threshold: 0,
      pointers: 2
    }, t)) || this;
  }
  var e = i.prototype;
  return e.getTouchAction = function() {
    return [Nn];
  }, e.attrTest = function(n) {
    return r.prototype.attrTest.call(this, n) && (Math.abs(n.rotation) > this.options.threshold || this.state & tr);
  }, i;
})(Zi), JO = /* @__PURE__ */ (function(r) {
  ar(i, r);
  function i(t) {
    var n;
    return t === void 0 && (t = {}), n = r.call(this, hr({
      event: "press",
      pointers: 1,
      time: 251,
      // minimal time of the pointer to be pressed
      threshold: 9
    }, t)) || this, n._timer = null, n._input = null, n;
  }
  var e = i.prototype;
  return e.getTouchAction = function() {
    return [MO];
  }, e.process = function(n) {
    var a = this, o = this.options, s = n.pointers.length === o.pointers, u = n.distance < o.threshold, l = n.deltaTime > o.time;
    if (this._input = n, !u || !s || n.eventType & (rt | Nt) && !l)
      this.reset();
    else if (n.eventType & Tt)
      this.reset(), this._timer = setTimeout(function() {
        a.state = Lr, a.tryEmit();
      }, o.time);
    else if (n.eventType & rt)
      return Lr;
    return $r;
  }, e.reset = function() {
    clearTimeout(this._timer);
  }, e.emit = function(n) {
    this.state === Lr && (n && n.eventType & rt ? this.manager.emit(this.options.event + "up", n) : (this._input.timeStamp = jv(), this.manager.emit(this.options.event, this._input)));
  }, i;
})(ss), QO = {
  /**
   * @private
   * set if DOM events are being triggered.
   * But this is slower and unused by simple implementations, so disabled by default.
   * @type {Boolean}
   * @default false
   */
  domEvents: !1,
  /**
   * @private
   * The value for the touchAction property/fallback.
   * When set to `compute` it will magically set the correct value based on the added recognizers.
   * @type {String}
   * @default compute
   */
  touchAction: DO,
  /**
   * @private
   * @type {Boolean}
   * @default true
   */
  enable: !0,
  /**
   * @private
   * EXPERIMENTAL FEATURE -- can be removed/changed
   * Change the parent input target element.
   * If Null, then it is being set the to main element.
   * @type {Null|EventTarget}
   * @default null
   */
  inputTarget: null,
  /**
   * @private
   * force an input class
   * @type {Null|Function}
   * @default null
   */
  inputClass: null,
  /**
   * @private
   * Some CSS properties can be used to improve the working of Hammer.
   * Add them to this method and they will be set when creating a new Manager.
   * @namespace
   */
  cssProps: {
    /**
     * @private
     * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
     * @type {String}
     * @default 'none'
     */
    userSelect: "none",
    /**
     * @private
     * Disable the Windows Phone grippers when pressing an element.
     * @type {String}
     * @default 'none'
     */
    touchSelect: "none",
    /**
     * @private
     * Disables the default callout shown when you touch and hold a touch target.
     * On iOS, when you touch and hold a touch target such as a link, Safari displays
     * a callout containing information about the link. This property allows you to disable that callout.
     * @type {String}
     * @default 'none'
     */
    touchCallout: "none",
    /**
     * @private
     * Specifies whether zooming is enabled. Used by IE10>
     * @type {String}
     * @default 'none'
     */
    contentZooming: "none",
    /**
     * @private
     * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
     * @type {String}
     * @default 'none'
     */
    userDrag: "none",
    /**
     * @private
     * Overrides the highlight color shown when the user taps a link or a JavaScript
     * clickable element in iOS. This property obeys the alpha value, if specified.
     * @type {String}
     * @default 'rgba(0,0,0,0)'
     */
    tapHighlightColor: "rgba(0,0,0,0)"
  }
}, _$ = [[XO, {
  enable: !1
}], [YO, {
  enable: !1
}, ["rotate"]], [qO, {
  direction: Sr
}], [Vv, {
  direction: Sr
}, ["swipe"]], [gh], [gh, {
  event: "doubletap",
  taps: 2
}, ["tap"]], [JO]], Iae = 1, w$ = 2;
function E$(r, i) {
  var e = r.element;
  if (e.style) {
    var t;
    jr(r.options.cssProps, function(n, a) {
      t = jl(e.style, a), i ? (r.oldCssProps[t] = e.style[t], e.style[t] = n) : e.style[t] = r.oldCssProps[t] || "";
    }), i || (r.oldCssProps = {});
  }
}
function kae(r, i) {
  var e = document.createEvent("Event");
  e.initEvent(r, !0, !0), e.gesture = i, i.target.dispatchEvent(e);
}
var S$ = /* @__PURE__ */ (function() {
  function r(e, t) {
    var n = this;
    this.options = Un({}, QO, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = Oae(this), this.touchAction = new jO(this, this.options.touchAction), E$(this, !0), jr(this.options.recognizers, function(a) {
      var o = n.add(new a[0](a[1]));
      a[2] && o.recognizeWith(a[2]), a[3] && o.requireFailure(a[3]);
    }, this);
  }
  var i = r.prototype;
  return i.set = function(t) {
    return Un(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;
  }, i.stop = function(t) {
    this.session.stopped = t ? w$ : Iae;
  }, i.recognize = function(t) {
    var n = this.session;
    if (!n.stopped) {
      this.touchAction.preventDefaults(t);
      var a, o = this.recognizers, s = n.curRecognizer;
      (!s || s && s.state & Lr) && (n.curRecognizer = null, s = null);
      for (var u = 0; u < o.length; )
        a = o[u], n.stopped !== w$ && // 1
        (!s || a === s || // 2
        a.canRecognizeWith(s)) ? a.recognize(t) : a.reset(), !s && a.state & (tr | Qi | sn) && (n.curRecognizer = a, s = a), u++;
    }
  }, i.get = function(t) {
    if (t instanceof ss)
      return t;
    for (var n = this.recognizers, a = 0; a < n.length; a++)
      if (n[a].options.event === t)
        return n[a];
    return null;
  }, i.add = function(t) {
    if (Mi(t, "add", this))
      return this;
    var n = this.get(t.options.event);
    return n && this.remove(n), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t;
  }, i.remove = function(t) {
    if (Mi(t, "remove", this))
      return this;
    var n = this.get(t);
    if (t) {
      var a = this.recognizers, o = Gn(a, n);
      o !== -1 && (a.splice(o, 1), this.touchAction.update());
    }
    return this;
  }, i.on = function(t, n) {
    if (t === void 0 || n === void 0)
      return this;
    var a = this.handlers;
    return jr(vo(t), function(o) {
      a[o] = a[o] || [], a[o].push(n);
    }), this;
  }, i.off = function(t, n) {
    if (t === void 0)
      return this;
    var a = this.handlers;
    return jr(vo(t), function(o) {
      n ? a[o] && a[o].splice(Gn(a[o], n), 1) : delete a[o];
    }), this;
  }, i.emit = function(t, n) {
    this.options.domEvents && kae(t, n);
    var a = this.handlers[t] && this.handlers[t].slice();
    if (!(!a || !a.length)) {
      n.type = t, n.preventDefault = function() {
        n.srcEvent.preventDefault();
      };
      for (var o = 0; o < a.length; )
        a[o](n), o++;
    }
  }, i.destroy = function() {
    this.element && E$(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
  }, r;
})(), Cae = {
  touchstart: Tt,
  touchmove: si,
  touchend: rt,
  touchcancel: Nt
}, xae = "touchstart", Rae = "touchstart touchmove touchend touchcancel", Aae = /* @__PURE__ */ (function(r) {
  ar(i, r);
  function i() {
    var t, n = i.prototype;
    return n.evTarget = xae, n.evWin = Rae, t = r.apply(this, arguments) || this, t.started = !1, t;
  }
  var e = i.prototype;
  return e.handler = function(n) {
    var a = Cae[n.type];
    if (a === Tt && (this.started = !0), !!this.started) {
      var o = Dae.call(this, n, a);
      a & (rt | Nt) && o[0].length - o[1].length === 0 && (this.started = !1), this.callback(this.manager, a, {
        pointers: o[0],
        changedPointers: o[1],
        pointerType: ns,
        srcEvent: n
      });
    }
  }, i;
})(Ta);
function Dae(r, i) {
  var e = po(r.touches), t = po(r.changedTouches);
  return i & (rt | Nt) && (e = Wv(e.concat(t), "identifier", !0)), [e, t];
}
function ZO(r, i, e) {
  var t = "DEPRECATED METHOD: " + i + `
` + e + ` AT 
`;
  return function() {
    var n = new Error("get-stack-trace"), a = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", o = window.console && (window.console.warn || window.console.log);
    return o && o.call(window.console, t, a), r.apply(this, arguments);
  };
}
var eT = ZO(function(r, i, e) {
  for (var t = Object.keys(i), n = 0; n < t.length; )
    (!e || e && r[t[n]] === void 0) && (r[t[n]] = i[t[n]]), n++;
  return r;
}, "extend", "Use `assign`."), Mae = ZO(function(r, i) {
  return eT(r, i, !0);
}, "merge", "Use `assign`.");
function Nae(r, i, e) {
  var t = i.prototype, n;
  n = r.prototype = Object.create(t), n.constructor = r, n._super = t, e && Un(n, e);
}
function O$(r, i) {
  return function() {
    return r.apply(i, arguments);
  };
}
var tT = /* @__PURE__ */ (function() {
  var r = (
    /**
      * @private
      * @const {string}
      */
    function(e, t) {
      return t === void 0 && (t = {}), new S$(e, hr({
        recognizers: _$.concat()
      }, t));
    }
  );
  return r.VERSION = "2.0.17-rc", r.DIRECTION_ALL = FO, r.DIRECTION_DOWN = Ji, r.DIRECTION_LEFT = is, r.DIRECTION_RIGHT = as, r.DIRECTION_UP = os, r.DIRECTION_HORIZONTAL = Sr, r.DIRECTION_VERTICAL = Fn, r.DIRECTION_NONE = Mu, r.DIRECTION_DOWN = Ji, r.INPUT_START = Tt, r.INPUT_MOVE = si, r.INPUT_END = rt, r.INPUT_CANCEL = Nt, r.STATE_POSSIBLE = su, r.STATE_BEGAN = tr, r.STATE_CHANGED = Qi, r.STATE_ENDED = sn, r.STATE_RECOGNIZED = Lr, r.STATE_CANCELLED = yo, r.STATE_FAILED = $r, r.Manager = S$, r.Input = Ta, r.TouchAction = jO, r.TouchInput = Hv, r.MouseInput = Uv, r.PointerEventInput = VO, r.TouchMouseInput = GO, r.SingleTouchInput = Aae, r.Recognizer = ss, r.AttrRecognizer = Zi, r.Tap = gh, r.Pan = Vv, r.Swipe = qO, r.Pinch = YO, r.Rotate = XO, r.Press = JO, r.on = Ga, r.off = Ka, r.each = jr, r.merge = Mae, r.extend = eT, r.bindFn = O$, r.assign = Un, r.inherit = Nae, r.bindFn = O$, r.prefixed = jl, r.toArray = po, r.inArray = Gn, r.uniqueArray = Wv, r.splitStr = vo, r.boolOrFn = Ll, r.hasParent = zv, r.addEventListeners = Ga, r.removeEventListeners = Ka, r.defaults = Un({}, QO, {
    preset: _$
  }), r;
})();
tT.defaults;
var Fae = tT;
function rT(r, i) {
  var e = typeof mn < "u" && ai(r) || r["@@iterator"];
  if (!e) {
    if (Te(r) || (e = Bae(r)) || i) {
      e && (r = e);
      var t = 0, n = function() {
      };
      return { s: n, n: function() {
        return t >= r.length ? { done: !0 } : { done: !1, value: r[t++] };
      }, e: function(l) {
        throw l;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, s;
  return { s: function() {
    e = e.call(r);
  }, n: function() {
    var l = e.next();
    return a = l.done, l;
  }, e: function(l) {
    o = !0, s = l;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (o) throw s;
    }
  } };
}
function Bae(r, i) {
  var e;
  if (r) {
    if (typeof r == "string") return T$(r, i);
    var t = mt(e = Object.prototype.toString.call(r)).call(e, 8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return ii(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return T$(r, i);
  }
}
function T$(r, i) {
  (i == null || i > r.length) && (i = r.length);
  for (var e = 0, t = new Array(i); e < i; e++) t[e] = r[e];
  return t;
}
mn("DELETE");
function zl() {
  for (var r = arguments.length, i = new Array(r), e = 0; e < r; e++)
    i[e] = arguments[e];
  return jae(i.length ? i : [Du()]);
}
function jae(r) {
  var i = Lae(r), e = He(i, 3), t = e[0], n = e[1], a = e[2], o = 1, s = function() {
    var l = 2091639 * t + o * 23283064365386963e-26;
    return t = n, n = a, a = l - (o = l | 0);
  };
  return s.uint32 = function() {
    return s() * 4294967296;
  }, s.fract53 = function() {
    return s() + (s() * 2097152 | 0) * 11102230246251565e-32;
  }, s.algorithm = "Alea", s.seed = r, s.version = "0.9", s;
}
function Lae() {
  for (var r = zae(), i = r(" "), e = r(" "), t = r(" "), n = 0; n < arguments.length; n++)
    i -= r(n < 0 || arguments.length <= n ? void 0 : arguments[n]), i < 0 && (i += 1), e -= r(n < 0 || arguments.length <= n ? void 0 : arguments[n]), e < 0 && (e += 1), t -= r(n < 0 || arguments.length <= n ? void 0 : arguments[n]), t < 0 && (t += 1);
  return [i, e, t];
}
function zae() {
  var r = 4022871197;
  return function(i) {
    for (var e = i.toString(), t = 0; t < e.length; t++) {
      r += e.charCodeAt(t);
      var n = 0.02519603282416938 * r;
      r = n >>> 0, n -= r, n *= r, r = n >>> 0, n -= r, r += n * 4294967296;
    }
    return (r >>> 0) * 23283064365386963e-26;
  };
}
function Wae() {
  var r = function() {
  };
  return {
    on: r,
    off: r,
    destroy: r,
    emit: r,
    get: function() {
      return {
        set: r
      };
    }
  };
}
var Gv = typeof window < "u" ? window.Hammer || Fae : function() {
  return Wae();
};
function _r(r) {
  var i = this, e;
  this._cleanupQueue = [], this.active = !1, this._dom = {
    container: r,
    overlay: document.createElement("div")
  }, this._dom.overlay.classList.add("vis-overlay"), this._dom.container.appendChild(this._dom.overlay), this._cleanupQueue.push(function() {
    i._dom.overlay.parentNode.removeChild(i._dom.overlay);
  });
  var t = Gv(this._dom.overlay);
  t.on("tap", A(e = this._onTapOverlay).call(e, this)), this._cleanupQueue.push(function() {
    t.destroy();
  });
  var n = ["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"];
  xe(n).call(n, function(a) {
    t.on(a, function(o) {
      o.srcEvent.stopPropagation();
    });
  }), document && document.body && (this._onClick = function(a) {
    Hae(a.target, r) || i.deactivate();
  }, document.body.addEventListener("click", this._onClick), this._cleanupQueue.push(function() {
    document.body.removeEventListener("click", i._onClick);
  })), this._escListener = function(a) {
    ("key" in a ? a.key === "Escape" : a.keyCode === 27) && i.deactivate();
  };
}
nS(_r.prototype);
_r.current = null;
_r.prototype.destroy = function() {
  var r, i;
  this.deactivate();
  var e = rT(Dn(r = Fr(i = this._cleanupQueue).call(i, 0)).call(r)), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var n = t.value;
      n();
    }
  } catch (a) {
    e.e(a);
  } finally {
    e.f();
  }
};
_r.prototype.activate = function() {
  _r.current && _r.current.deactivate(), _r.current = this, this.active = !0, this._dom.overlay.style.display = "none", this._dom.container.classList.add("vis-active"), this.emit("change"), this.emit("activate"), document.body.addEventListener("keydown", this._escListener);
};
_r.prototype.deactivate = function() {
  this.active = !1, this._dom.overlay.style.display = "block", this._dom.container.classList.remove("vis-active"), document.body.removeEventListener("keydown", this._escListener), this.emit("change"), this.emit("deactivate");
};
_r.prototype._onTapOverlay = function(r) {
  this.activate(), r.srcEvent.stopPropagation();
};
function Hae(r, i) {
  for (; r; ) {
    if (r === i)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var Uae = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, Vae = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, Gae = /^rgb\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *\)$/i, Kae = /^rgba\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *([01]|0?\.\d+) *\)$/i;
function Xr(r) {
  if (r)
    for (; r.hasChildNodes() === !0; ) {
      var i = r.firstChild;
      i && (Xr(i), r.removeChild(i));
    }
}
function Fi(r) {
  return r instanceof String || typeof r == "string";
}
function P$(r) {
  return Ie(r) === "object" && r !== null;
}
function Kn(r, i, e, t) {
  var n = !1;
  t === !0 && (n = i[e] === null && r[e] !== void 0), n ? delete r[e] : r[e] = i[e];
}
function nT(r, i) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  for (var t in r)
    if (i[t] !== void 0)
      if (i[t] === null || Ie(i[t]) !== "object")
        Kn(r, i, t, e);
      else {
        var n = r[t], a = i[t];
        P$(n) && P$(a) && nT(n, a, e);
      }
}
function Pa(r, i, e) {
  var t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (Te(e))
    throw new TypeError("Arrays are not supported by deepExtend");
  for (var n = 0; n < r.length; n++) {
    var a = r[n];
    if (Object.prototype.hasOwnProperty.call(e, a))
      if (e[a] && e[a].constructor === Object)
        i[a] === void 0 && (i[a] = {}), i[a].constructor === Object ? Ae(i[a], e[a], !1, t) : Kn(i, e, a, t);
      else {
        if (Te(e[a]))
          throw new TypeError("Arrays are not supported by deepExtend");
        Kn(i, e, a, t);
      }
  }
  return i;
}
function Bu(r, i, e) {
  var t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (Te(e))
    throw new TypeError("Arrays are not supported by deepExtend");
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && !on(r).call(r, n))
      if (e[n] && e[n].constructor === Object)
        i[n] === void 0 && (i[n] = {}), i[n].constructor === Object ? Ae(i[n], e[n]) : Kn(i, e, n, t);
      else if (Te(e[n])) {
        i[n] = [];
        for (var a = 0; a < e[n].length; a++)
          i[n].push(e[n][a]);
      } else
        Kn(i, e, n, t);
  return i;
}
function Ae(r, i) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  for (var n in i)
    if (Object.prototype.hasOwnProperty.call(i, n) || e === !0)
      if (Ie(i[n]) === "object" && i[n] !== null && o$(i[n]) === Object.prototype)
        r[n] === void 0 ? r[n] = Ae({}, i[n], e) : Ie(r[n]) === "object" && r[n] !== null && o$(r[n]) === Object.prototype ? Ae(r[n], i[n], e) : Kn(r, i, n, t);
      else if (Te(i[n])) {
        var a;
        r[n] = mt(a = i[n]).call(a);
      } else
        Kn(r, i, n, t);
  return r;
}
function ju(r, i) {
  var e;
  return Fv(e = []).call(e, mr(r), [i]);
}
function qae(r) {
  return mt(r).call(r);
}
function Yae(r) {
  return r.getBoundingClientRect().left;
}
function Xae(r) {
  return r.getBoundingClientRect().top;
}
function fe(r, i) {
  if (Te(r))
    for (var e = r.length, t = 0; t < e; t++)
      i(r[t], t, r);
  else
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && i(r[n], n, r);
}
function Kv(r) {
  var i;
  switch (r.length) {
    case 3:
    case 4:
      return i = Vae.exec(r), i ? {
        r: lr(i[1] + i[1], 16),
        g: lr(i[2] + i[2], 16),
        b: lr(i[3] + i[3], 16)
      } : null;
    case 6:
    case 7:
      return i = Uae.exec(r), i ? {
        r: lr(i[1], 16),
        g: lr(i[2], 16),
        b: lr(i[3], 16)
      } : null;
    default:
      return null;
  }
}
function Zt(r, i) {
  if (on(r).call(r, "rgba"))
    return r;
  if (on(r).call(r, "rgb")) {
    var e = r.substr(ye(r).call(r, "(") + 1).replace(")", "").split(",");
    return "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + i + ")";
  } else {
    var t = Kv(r);
    return t == null ? r : "rgba(" + t.r + "," + t.g + "," + t.b + "," + i + ")";
  }
}
function iT(r, i, e) {
  var t;
  return "#" + mt(t = ((1 << 24) + (r << 16) + (i << 8) + e).toString(16)).call(t, 1);
}
function mh(r, i) {
  if (Fi(r)) {
    var e = r;
    if (oT(e)) {
      var t, n = Xi(t = e.substr(4).substr(0, e.length - 5).split(",")).call(t, function(d) {
        return lr(d);
      });
      e = iT(n[0], n[1], n[2]);
    }
    if (aT(e) === !0) {
      var a = Jae(e), o = {
        h: a.h,
        s: a.s * 0.8,
        v: Math.min(1, a.v * 1.02)
      }, s = {
        h: a.h,
        s: Math.min(1, a.s * 1.25),
        v: a.v * 0.8
      }, u = bh(s.h, s.s, s.v), l = bh(o.h, o.s, o.v);
      return {
        background: e,
        border: u,
        highlight: {
          background: l,
          border: u
        },
        hover: {
          background: l,
          border: u
        }
      };
    } else
      return {
        background: e,
        border: e,
        highlight: {
          background: e,
          border: e
        },
        hover: {
          background: e,
          border: e
        }
      };
  } else {
    var c = {
      background: r.background || void 0,
      border: r.border || void 0,
      highlight: Fi(r.highlight) ? {
        border: r.highlight,
        background: r.highlight
      } : {
        background: r.highlight && r.highlight.background || void 0,
        border: r.highlight && r.highlight.border || void 0
      },
      hover: Fi(r.hover) ? {
        border: r.hover,
        background: r.hover
      } : {
        border: r.hover && r.hover.border || void 0,
        background: r.hover && r.hover.background || void 0
      }
    };
    return c;
  }
}
function ja(r, i, e) {
  r = r / 255, i = i / 255, e = e / 255;
  var t = Math.min(r, Math.min(i, e)), n = Math.max(r, Math.max(i, e));
  if (t === n)
    return {
      h: 0,
      s: 0,
      v: t
    };
  var a = r === t ? i - e : e === t ? r - i : e - r, o = r === t ? 3 : e === t ? 1 : 5, s = 60 * (o - a / (n - t)) / 360, u = (n - t) / n, l = n;
  return {
    h: s,
    s: u,
    v: l
  };
}
function uu(r, i, e) {
  var t, n, a, o = Math.floor(r * 6), s = r * 6 - o, u = e * (1 - i), l = e * (1 - s * i), c = e * (1 - (1 - s) * i);
  switch (o % 6) {
    case 0:
      t = e, n = c, a = u;
      break;
    case 1:
      t = l, n = e, a = u;
      break;
    case 2:
      t = u, n = e, a = c;
      break;
    case 3:
      t = u, n = l, a = e;
      break;
    case 4:
      t = c, n = u, a = e;
      break;
    case 5:
      t = e, n = u, a = l;
      break;
  }
  return {
    r: Math.floor(t * 255),
    g: Math.floor(n * 255),
    b: Math.floor(a * 255)
  };
}
function bh(r, i, e) {
  var t = uu(r, i, e);
  return iT(t.r, t.g, t.b);
}
function Jae(r) {
  var i = Kv(r);
  if (!i)
    throw new TypeError("'".concat(r, "' is not a valid color."));
  return ja(i.r, i.g, i.b);
}
function aT(r) {
  var i = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r);
  return i;
}
function oT(r) {
  return Gae.test(r);
}
function Qae(r) {
  return Kae.test(r);
}
function un(r) {
  if (r === null || Ie(r) !== "object")
    return null;
  if (r instanceof Element)
    return r;
  var i = Mn(r);
  for (var e in r)
    Object.prototype.hasOwnProperty.call(r, e) && Ie(r[e]) == "object" && (i[e] = un(r[e]));
  return i;
}
function Qt(r, i, e) {
  var t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = function(v) {
    return v != null;
  }, a = function(v) {
    return v !== null && Ie(v) === "object";
  }, o = function(v) {
    for (var p in v)
      if (Object.prototype.hasOwnProperty.call(v, p))
        return !1;
    return !0;
  };
  if (!a(r))
    throw new Error("Parameter mergeTarget must be an object");
  if (!a(i))
    throw new Error("Parameter options must be an object");
  if (!n(e))
    throw new Error("Parameter option must have a value");
  if (!a(t))
    throw new Error("Parameter globalOptions must be an object");
  var s = function(v, p, y) {
    a(v[y]) || (v[y] = {});
    var m = p[y], b = v[y];
    for (var w in m)
      Object.prototype.hasOwnProperty.call(m, w) && (b[w] = m[w]);
  }, u = i[e], l = a(t) && !o(t), c = l ? t[e] : void 0, d = c ? c.enabled : void 0;
  if (u !== void 0) {
    if (typeof u == "boolean") {
      a(r[e]) || (r[e] = {}), r[e].enabled = u;
      return;
    }
    if (u === null && !a(r[e]))
      if (n(c))
        r[e] = Mn(c);
      else
        return;
    if (a(u)) {
      var f = !0;
      u.enabled !== void 0 ? f = u.enabled : d !== void 0 && (f = c.enabled), s(r, i, e), r[e].enabled = f;
    }
  }
}
var Zae = {
  /**
   * Provides no easing and no acceleration.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  linear: function(i) {
    return i;
  },
  /**
   * Accelerate from zero velocity.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeInQuad: function(i) {
    return i * i;
  },
  /**
   * Decelerate to zero velocity.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeOutQuad: function(i) {
    return i * (2 - i);
  },
  /**
   * Accelerate until halfway, then decelerate.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeInOutQuad: function(i) {
    return i < 0.5 ? 2 * i * i : -1 + (4 - 2 * i) * i;
  },
  /**
   * Accelerate from zero velocity.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeInCubic: function(i) {
    return i * i * i;
  },
  /**
   * Decelerate to zero velocity.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeOutCubic: function(i) {
    return --i * i * i + 1;
  },
  /**
   * Accelerate until halfway, then decelerate.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeInOutCubic: function(i) {
    return i < 0.5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1;
  },
  /**
   * Accelerate from zero velocity.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeInQuart: function(i) {
    return i * i * i * i;
  },
  /**
   * Decelerate to zero velocity.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeOutQuart: function(i) {
    return 1 - --i * i * i * i;
  },
  /**
   * Accelerate until halfway, then decelerate.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeInOutQuart: function(i) {
    return i < 0.5 ? 8 * i * i * i * i : 1 - 8 * --i * i * i * i;
  },
  /**
   * Accelerate from zero velocity.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeInQuint: function(i) {
    return i * i * i * i * i;
  },
  /**
   * Decelerate to zero velocity.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeOutQuint: function(i) {
    return 1 + --i * i * i * i * i;
  },
  /**
   * Accelerate until halfway, then decelerate.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeInOutQuint: function(i) {
    return i < 0.5 ? 16 * i * i * i * i * i : 1 + 16 * --i * i * i * i * i;
  }
};
function Jr(r, i) {
  var e;
  Te(i) || (i = [i]);
  var t = rT(r), n;
  try {
    for (t.s(); !(n = t.n()).done; ) {
      var a = n.value;
      if (a) {
        e = a[i[0]];
        for (var o = 1; o < i.length; o++)
          e && (e = e[i[o]]);
        if (typeof e < "u")
          break;
      }
    }
  } catch (s) {
    t.e(s);
  } finally {
    t.f();
  }
  return e;
}
var eoe = {
  black: "#000000",
  navy: "#000080",
  darkblue: "#00008B",
  mediumblue: "#0000CD",
  blue: "#0000FF",
  darkgreen: "#006400",
  green: "#008000",
  teal: "#008080",
  darkcyan: "#008B8B",
  deepskyblue: "#00BFFF",
  darkturquoise: "#00CED1",
  mediumspringgreen: "#00FA9A",
  lime: "#00FF00",
  springgreen: "#00FF7F",
  aqua: "#00FFFF",
  cyan: "#00FFFF",
  midnightblue: "#191970",
  dodgerblue: "#1E90FF",
  lightseagreen: "#20B2AA",
  forestgreen: "#228B22",
  seagreen: "#2E8B57",
  darkslategray: "#2F4F4F",
  limegreen: "#32CD32",
  mediumseagreen: "#3CB371",
  turquoise: "#40E0D0",
  royalblue: "#4169E1",
  steelblue: "#4682B4",
  darkslateblue: "#483D8B",
  mediumturquoise: "#48D1CC",
  indigo: "#4B0082",
  darkolivegreen: "#556B2F",
  cadetblue: "#5F9EA0",
  cornflowerblue: "#6495ED",
  mediumaquamarine: "#66CDAA",
  dimgray: "#696969",
  slateblue: "#6A5ACD",
  olivedrab: "#6B8E23",
  slategray: "#708090",
  lightslategray: "#778899",
  mediumslateblue: "#7B68EE",
  lawngreen: "#7CFC00",
  chartreuse: "#7FFF00",
  aquamarine: "#7FFFD4",
  maroon: "#800000",
  purple: "#800080",
  olive: "#808000",
  gray: "#808080",
  skyblue: "#87CEEB",
  lightskyblue: "#87CEFA",
  blueviolet: "#8A2BE2",
  darkred: "#8B0000",
  darkmagenta: "#8B008B",
  saddlebrown: "#8B4513",
  darkseagreen: "#8FBC8F",
  lightgreen: "#90EE90",
  mediumpurple: "#9370D8",
  darkviolet: "#9400D3",
  palegreen: "#98FB98",
  darkorchid: "#9932CC",
  yellowgreen: "#9ACD32",
  sienna: "#A0522D",
  brown: "#A52A2A",
  darkgray: "#A9A9A9",
  lightblue: "#ADD8E6",
  greenyellow: "#ADFF2F",
  paleturquoise: "#AFEEEE",
  lightsteelblue: "#B0C4DE",
  powderblue: "#B0E0E6",
  firebrick: "#B22222",
  darkgoldenrod: "#B8860B",
  mediumorchid: "#BA55D3",
  rosybrown: "#BC8F8F",
  darkkhaki: "#BDB76B",
  silver: "#C0C0C0",
  mediumvioletred: "#C71585",
  indianred: "#CD5C5C",
  peru: "#CD853F",
  chocolate: "#D2691E",
  tan: "#D2B48C",
  lightgrey: "#D3D3D3",
  palevioletred: "#D87093",
  thistle: "#D8BFD8",
  orchid: "#DA70D6",
  goldenrod: "#DAA520",
  crimson: "#DC143C",
  gainsboro: "#DCDCDC",
  plum: "#DDA0DD",
  burlywood: "#DEB887",
  lightcyan: "#E0FFFF",
  lavender: "#E6E6FA",
  darksalmon: "#E9967A",
  violet: "#EE82EE",
  palegoldenrod: "#EEE8AA",
  lightcoral: "#F08080",
  khaki: "#F0E68C",
  aliceblue: "#F0F8FF",
  honeydew: "#F0FFF0",
  azure: "#F0FFFF",
  sandybrown: "#F4A460",
  wheat: "#F5DEB3",
  beige: "#F5F5DC",
  whitesmoke: "#F5F5F5",
  mintcream: "#F5FFFA",
  ghostwhite: "#F8F8FF",
  salmon: "#FA8072",
  antiquewhite: "#FAEBD7",
  linen: "#FAF0E6",
  lightgoldenrodyellow: "#FAFAD2",
  oldlace: "#FDF5E6",
  red: "#FF0000",
  fuchsia: "#FF00FF",
  magenta: "#FF00FF",
  deeppink: "#FF1493",
  orangered: "#FF4500",
  tomato: "#FF6347",
  hotpink: "#FF69B4",
  coral: "#FF7F50",
  darkorange: "#FF8C00",
  lightsalmon: "#FFA07A",
  orange: "#FFA500",
  lightpink: "#FFB6C1",
  pink: "#FFC0CB",
  gold: "#FFD700",
  peachpuff: "#FFDAB9",
  navajowhite: "#FFDEAD",
  moccasin: "#FFE4B5",
  bisque: "#FFE4C4",
  mistyrose: "#FFE4E1",
  blanchedalmond: "#FFEBCD",
  papayawhip: "#FFEFD5",
  lavenderblush: "#FFF0F5",
  seashell: "#FFF5EE",
  cornsilk: "#FFF8DC",
  lemonchiffon: "#FFFACD",
  floralwhite: "#FFFAF0",
  snow: "#FFFAFA",
  yellow: "#FFFF00",
  lightyellow: "#FFFFE0",
  ivory: "#FFFFF0",
  white: "#FFFFFF"
}, toe = /* @__PURE__ */ (function() {
  function r() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    M(this, r), this.pixelRatio = i, this.generated = !1, this.centerCoordinates = {
      x: 289 / 2,
      y: 289 / 2
    }, this.r = 289 * 0.49, this.color = {
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, this.hueCircle = void 0, this.initialColor = {
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, this.previousColor = void 0, this.applied = !1, this.updateCallback = function() {
    }, this.closeCallback = function() {
    }, this._create();
  }
  return N(r, [{
    key: "insertTo",
    value: function(e) {
      this.hammer !== void 0 && (this.hammer.destroy(), this.hammer = void 0), this.container = e, this.container.appendChild(this.frame), this._bindHammer(), this._setSize();
    }
    /**
     * the callback is executed on apply and save. Bind it to the application
     *
     * @param {Function} callback
     */
  }, {
    key: "setUpdateCallback",
    value: function(e) {
      if (typeof e == "function")
        this.updateCallback = e;
      else
        throw new Error("Function attempted to set as colorPicker update callback is not a function.");
    }
    /**
     * the callback is executed on apply and save. Bind it to the application
     *
     * @param {Function} callback
     */
  }, {
    key: "setCloseCallback",
    value: function(e) {
      if (typeof e == "function")
        this.closeCallback = e;
      else
        throw new Error("Function attempted to set as colorPicker closing callback is not a function.");
    }
    /**
     *
     * @param {string} color
     * @returns {string}
     * @private
     */
  }, {
    key: "_isColorString",
    value: function(e) {
      if (typeof e == "string")
        return eoe[e];
    }
    /**
     * Set the color of the colorPicker
     * Supported formats:
     * 'red'                   --> HTML color string
     * '#ffffff'               --> hex string
     * 'rgb(255,255,255)'      --> rgb string
     * 'rgba(255,255,255,1.0)' --> rgba string
     * {r:255,g:255,b:255}     --> rgb object
     * {r:255,g:255,b:255,a:1.0} --> rgba object
     *
     * @param {string | object} color
     * @param {boolean} [setInitial=true]
     */
  }, {
    key: "setColor",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (e !== "none") {
        var n, a = this._isColorString(e);
        if (a !== void 0 && (e = a), Fi(e) === !0) {
          if (oT(e) === !0) {
            var o = e.substr(4).substr(0, e.length - 5).split(",");
            n = {
              r: o[0],
              g: o[1],
              b: o[2],
              a: 1
            };
          } else if (Qae(e) === !0) {
            var s = e.substr(5).substr(0, e.length - 6).split(",");
            n = {
              r: s[0],
              g: s[1],
              b: s[2],
              a: s[3]
            };
          } else if (aT(e) === !0) {
            var u = Kv(e);
            n = {
              r: u.r,
              g: u.g,
              b: u.b,
              a: 1
            };
          }
        } else if (e instanceof Object && e.r !== void 0 && e.g !== void 0 && e.b !== void 0) {
          var l = e.a !== void 0 ? e.a : "1.0";
          n = {
            r: e.r,
            g: e.g,
            b: e.b,
            a: l
          };
        }
        if (n === void 0)
          throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: " + ts(e));
        this._setColor(n, t);
      }
    }
    /**
     * this shows the color picker.
     * The hue circle is constructed once and stored.
     */
  }, {
    key: "show",
    value: function() {
      this.closeCallback !== void 0 && (this.closeCallback(), this.closeCallback = void 0), this.applied = !1, this.frame.style.display = "block", this._generateHueCircle();
    }
    // ------------------------------------------ PRIVATE ----------------------------- //
    /**
     * Hide the picker. Is called by the cancel button.
     * Optional boolean to store the previous color for easy access later on.
     *
     * @param {boolean} [storePrevious=true]
     * @private
     */
  }, {
    key: "_hide",
    value: function() {
      var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      t === !0 && (this.previousColor = tt({}, this.color)), this.applied === !0 && this.updateCallback(this.initialColor), this.frame.style.display = "none", Er(function() {
        e.closeCallback !== void 0 && (e.closeCallback(), e.closeCallback = void 0);
      }, 0);
    }
    /**
     * bound to the save button. Saves and hides.
     *
     * @private
     */
  }, {
    key: "_save",
    value: function() {
      this.updateCallback(this.color), this.applied = !1, this._hide();
    }
    /**
     * Bound to apply button. Saves but does not close. Is undone by the cancel button.
     *
     * @private
     */
  }, {
    key: "_apply",
    value: function() {
      this.applied = !0, this.updateCallback(this.color), this._updatePicker(this.color);
    }
    /**
     * load the color from the previous session.
     *
     * @private
     */
  }, {
    key: "_loadLast",
    value: function() {
      this.previousColor !== void 0 ? this.setColor(this.previousColor, !1) : alert("There is no last color to load...");
    }
    /**
     * set the color, place the picker
     *
     * @param {object} rgba
     * @param {boolean} [setInitial=true]
     * @private
     */
  }, {
    key: "_setColor",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      t === !0 && (this.initialColor = tt({}, e)), this.color = e;
      var n = ja(e.r, e.g, e.b), a = 2 * Math.PI, o = this.r * n.s, s = this.centerCoordinates.x + o * Math.sin(a * n.h), u = this.centerCoordinates.y + o * Math.cos(a * n.h);
      this.colorPickerSelector.style.left = s - 0.5 * this.colorPickerSelector.clientWidth + "px", this.colorPickerSelector.style.top = u - 0.5 * this.colorPickerSelector.clientHeight + "px", this._updatePicker(e);
    }
    /**
     * bound to opacity control
     *
     * @param {number} value
     * @private
     */
  }, {
    key: "_setOpacity",
    value: function(e) {
      this.color.a = e / 100, this._updatePicker(this.color);
    }
    /**
     * bound to brightness control
     *
     * @param {number} value
     * @private
     */
  }, {
    key: "_setBrightness",
    value: function(e) {
      var t = ja(this.color.r, this.color.g, this.color.b);
      t.v = e / 100;
      var n = uu(t.h, t.s, t.v);
      n.a = this.color.a, this.color = n, this._updatePicker();
    }
    /**
     * update the color picker. A black circle overlays the hue circle to mimic the brightness decreasing.
     *
     * @param {object} rgba
     * @private
     */
  }, {
    key: "_updatePicker",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.color, t = ja(e.r, e.g, e.b), n = this.colorPickerCanvas.getContext("2d");
      this.pixelRation === void 0 && (this.pixelRatio = (window.devicePixelRatio || 1) / (n.webkitBackingStorePixelRatio || n.mozBackingStorePixelRatio || n.msBackingStorePixelRatio || n.oBackingStorePixelRatio || n.backingStorePixelRatio || 1)), n.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
      var a = this.colorPickerCanvas.clientWidth, o = this.colorPickerCanvas.clientHeight;
      n.clearRect(0, 0, a, o), n.putImageData(this.hueCircle, 0, 0), n.fillStyle = "rgba(0,0,0," + (1 - t.v) + ")", n.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r), rs(n).call(n), this.brightnessRange.value = 100 * t.v, this.opacityRange.value = 100 * e.a, this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")", this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")";
    }
    /**
     * used by create to set the size of the canvas.
     *
     * @private
     */
  }, {
    key: "_setSize",
    value: function() {
      this.colorPickerCanvas.style.width = "100%", this.colorPickerCanvas.style.height = "100%", this.colorPickerCanvas.width = 289 * this.pixelRatio, this.colorPickerCanvas.height = 289 * this.pixelRatio;
    }
    /**
     * create all dom elements
     * TODO: cleanup, lots of similar dom elements
     *
     * @private
     */
  }, {
    key: "_create",
    value: function() {
      var e, t, n, a;
      if (this.frame = document.createElement("div"), this.frame.className = "vis-color-picker", this.colorPickerDiv = document.createElement("div"), this.colorPickerSelector = document.createElement("div"), this.colorPickerSelector.className = "vis-selector", this.colorPickerDiv.appendChild(this.colorPickerSelector), this.colorPickerCanvas = document.createElement("canvas"), this.colorPickerDiv.appendChild(this.colorPickerCanvas), this.colorPickerCanvas.getContext) {
        var s = this.colorPickerCanvas.getContext("2d");
        this.pixelRatio = (window.devicePixelRatio || 1) / (s.webkitBackingStorePixelRatio || s.mozBackingStorePixelRatio || s.msBackingStorePixelRatio || s.oBackingStorePixelRatio || s.backingStorePixelRatio || 1), this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
      } else {
        var o = document.createElement("DIV");
        o.style.color = "red", o.style.fontWeight = "bold", o.style.padding = "10px", o.innerText = "Error: your browser does not support HTML canvas", this.colorPickerCanvas.appendChild(o);
      }
      this.colorPickerDiv.className = "vis-color", this.opacityDiv = document.createElement("div"), this.opacityDiv.className = "vis-opacity", this.brightnessDiv = document.createElement("div"), this.brightnessDiv.className = "vis-brightness", this.arrowDiv = document.createElement("div"), this.arrowDiv.className = "vis-arrow", this.opacityRange = document.createElement("input");
      try {
        this.opacityRange.type = "range", this.opacityRange.min = "0", this.opacityRange.max = "100";
      } catch {
      }
      this.opacityRange.value = "100", this.opacityRange.className = "vis-range", this.brightnessRange = document.createElement("input");
      try {
        this.brightnessRange.type = "range", this.brightnessRange.min = "0", this.brightnessRange.max = "100";
      } catch {
      }
      this.brightnessRange.value = "100", this.brightnessRange.className = "vis-range", this.opacityDiv.appendChild(this.opacityRange), this.brightnessDiv.appendChild(this.brightnessRange);
      var u = this;
      this.opacityRange.onchange = function() {
        u._setOpacity(this.value);
      }, this.opacityRange.oninput = function() {
        u._setOpacity(this.value);
      }, this.brightnessRange.onchange = function() {
        u._setBrightness(this.value);
      }, this.brightnessRange.oninput = function() {
        u._setBrightness(this.value);
      }, this.brightnessLabel = document.createElement("div"), this.brightnessLabel.className = "vis-label vis-brightness", this.brightnessLabel.innerText = "brightness:", this.opacityLabel = document.createElement("div"), this.opacityLabel.className = "vis-label vis-opacity", this.opacityLabel.innerText = "opacity:", this.newColorDiv = document.createElement("div"), this.newColorDiv.className = "vis-new-color", this.newColorDiv.innerText = "new", this.initialColorDiv = document.createElement("div"), this.initialColorDiv.className = "vis-initial-color", this.initialColorDiv.innerText = "initial", this.cancelButton = document.createElement("div"), this.cancelButton.className = "vis-button vis-cancel", this.cancelButton.innerText = "cancel", this.cancelButton.onclick = A(e = this._hide).call(e, this, !1), this.applyButton = document.createElement("div"), this.applyButton.className = "vis-button vis-apply", this.applyButton.innerText = "apply", this.applyButton.onclick = A(t = this._apply).call(t, this), this.saveButton = document.createElement("div"), this.saveButton.className = "vis-button vis-save", this.saveButton.innerText = "save", this.saveButton.onclick = A(n = this._save).call(n, this), this.loadButton = document.createElement("div"), this.loadButton.className = "vis-button vis-load", this.loadButton.innerText = "load last", this.loadButton.onclick = A(a = this._loadLast).call(a, this), this.frame.appendChild(this.colorPickerDiv), this.frame.appendChild(this.arrowDiv), this.frame.appendChild(this.brightnessLabel), this.frame.appendChild(this.brightnessDiv), this.frame.appendChild(this.opacityLabel), this.frame.appendChild(this.opacityDiv), this.frame.appendChild(this.newColorDiv), this.frame.appendChild(this.initialColorDiv), this.frame.appendChild(this.cancelButton), this.frame.appendChild(this.applyButton), this.frame.appendChild(this.saveButton), this.frame.appendChild(this.loadButton);
    }
    /**
     * bind hammer to the color picker
     *
     * @private
     */
  }, {
    key: "_bindHammer",
    value: function() {
      var e = this;
      this.drag = {}, this.pinch = {}, this.hammer = new Gv(this.colorPickerCanvas), this.hammer.get("pinch").set({
        enable: !0
      }), this.hammer.on("hammer.input", function(t) {
        t.isFirst && e._moveSelector(t);
      }), this.hammer.on("tap", function(t) {
        e._moveSelector(t);
      }), this.hammer.on("panstart", function(t) {
        e._moveSelector(t);
      }), this.hammer.on("panmove", function(t) {
        e._moveSelector(t);
      }), this.hammer.on("panend", function(t) {
        e._moveSelector(t);
      });
    }
    /**
     * generate the hue circle. This is relatively heavy (200ms) and is done only once on the first time it is shown.
     *
     * @private
     */
  }, {
    key: "_generateHueCircle",
    value: function() {
      if (this.generated === !1) {
        var e = this.colorPickerCanvas.getContext("2d");
        this.pixelRation === void 0 && (this.pixelRatio = (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)), e.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
        var t = this.colorPickerCanvas.clientWidth, n = this.colorPickerCanvas.clientHeight;
        e.clearRect(0, 0, t, n);
        var a, o, s, u;
        this.centerCoordinates = {
          x: t * 0.5,
          y: n * 0.5
        }, this.r = 0.49 * t;
        var l = 2 * Math.PI / 360, c = 1 / 360, d = 1 / this.r, f;
        for (s = 0; s < 360; s++)
          for (u = 0; u < this.r; u++)
            a = this.centerCoordinates.x + u * Math.sin(l * s), o = this.centerCoordinates.y + u * Math.cos(l * s), f = uu(s * c, u * d, 1), e.fillStyle = "rgb(" + f.r + "," + f.g + "," + f.b + ")", e.fillRect(a - 0.5, o - 0.5, 2, 2);
        e.strokeStyle = "rgba(0,0,0,1)", e.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r), e.stroke(), this.hueCircle = e.getImageData(0, 0, t, n);
      }
      this.generated = !0;
    }
    /**
     * move the selector. This is called by hammer functions.
     *
     * @param {Event}  event   The event
     * @private
     */
  }, {
    key: "_moveSelector",
    value: function(e) {
      var t = this.colorPickerDiv.getBoundingClientRect(), n = e.center.x - t.left, a = e.center.y - t.top, o = 0.5 * this.colorPickerDiv.clientHeight, s = 0.5 * this.colorPickerDiv.clientWidth, u = n - s, l = a - o, c = Math.atan2(u, l), d = 0.98 * Math.min(Math.sqrt(u * u + l * l), s), f = Math.cos(c) * d + o, h = Math.sin(c) * d + s;
      this.colorPickerSelector.style.top = f - 0.5 * this.colorPickerSelector.clientHeight + "px", this.colorPickerSelector.style.left = h - 0.5 * this.colorPickerSelector.clientWidth + "px";
      var v = c / (2 * Math.PI);
      v = v < 0 ? v + 1 : v;
      var p = d / this.r, y = ja(this.color.r, this.color.g, this.color.b);
      y.h = v, y.s = p;
      var m = uu(y.h, y.s, y.v);
      m.a = this.color.a, this.color = m, this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")", this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")";
    }
  }]), r;
})();
function $h() {
  for (var r = arguments.length, i = new Array(r), e = 0; e < r; e++)
    i[e] = arguments[e];
  if (i.length < 1)
    throw new TypeError("Invalid arguments.");
  if (i.length === 1)
    return document.createTextNode(i[0]);
  var t = document.createElement(i[0]);
  return t.appendChild($h.apply(void 0, mr(mt(i).call(i, 1)))), t;
}
var roe = /* @__PURE__ */ (function() {
  function r(i, e, t) {
    var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : function() {
      return !1;
    };
    M(this, r), this.parent = i, this.changedOptions = [], this.container = e, this.allowCreation = !1, this.hideOption = a, this.options = {}, this.initialized = !1, this.popupCounter = 0, this.defaultOptions = {
      enabled: !1,
      filter: !0,
      container: void 0,
      showButton: !0
    }, tt(this.options, this.defaultOptions), this.configureOptions = t, this.moduleOptions = {}, this.domElements = [], this.popupDiv = {}, this.popupLimit = 5, this.popupHistory = {}, this.colorPicker = new toe(n), this.wrapper = void 0;
  }
  return N(r, [{
    key: "setOptions",
    value: function(e) {
      if (e !== void 0) {
        this.popupHistory = {}, this._removePopup();
        var t = !0;
        if (typeof e == "string")
          this.options.filter = e;
        else if (Te(e))
          this.options.filter = e.join();
        else if (Ie(e) === "object") {
          if (e == null)
            throw new TypeError("options cannot be null");
          e.container !== void 0 && (this.options.container = e.container), Dt(e) !== void 0 && (this.options.filter = Dt(e)), e.showButton !== void 0 && (this.options.showButton = e.showButton), e.enabled !== void 0 && (t = e.enabled);
        } else typeof e == "boolean" ? (this.options.filter = !0, t = e) : typeof e == "function" && (this.options.filter = e, t = !0);
        Dt(this.options) === !1 && (t = !1), this.options.enabled = t;
      }
      this._clean();
    }
    /**
     *
     * @param {object} moduleOptions
     */
  }, {
    key: "setModuleOptions",
    value: function(e) {
      this.moduleOptions = e, this.options.enabled === !0 && (this._clean(), this.options.container !== void 0 && (this.container = this.options.container), this._create());
    }
    /**
     * Create all DOM elements
     *
     * @private
     */
  }, {
    key: "_create",
    value: function() {
      this._clean(), this.changedOptions = [];
      var e = Dt(this.options), t = 0, n = !1;
      for (var a in this.configureOptions)
        Object.prototype.hasOwnProperty.call(this.configureOptions, a) && (this.allowCreation = !1, n = !1, typeof e == "function" ? (n = e(a, []), n = n || this._handleObject(this.configureOptions[a], [a], !0)) : (e === !0 || ye(e).call(e, a) !== -1) && (n = !0), n !== !1 && (this.allowCreation = !0, t > 0 && this._makeItem([]), this._makeHeader(a), this._handleObject(this.configureOptions[a], [a])), t++);
      this._makeButton(), this._push();
    }
    /**
     * draw all DOM elements on the screen
     *
     * @private
     */
  }, {
    key: "_push",
    value: function() {
      this.wrapper = document.createElement("div"), this.wrapper.className = "vis-configuration-wrapper", this.container.appendChild(this.wrapper);
      for (var e = 0; e < this.domElements.length; e++)
        this.wrapper.appendChild(this.domElements[e]);
      this._showPopupIfNeeded();
    }
    /**
     * delete all DOM elements
     *
     * @private
     */
  }, {
    key: "_clean",
    value: function() {
      for (var e = 0; e < this.domElements.length; e++)
        this.wrapper.removeChild(this.domElements[e]);
      this.wrapper !== void 0 && (this.container.removeChild(this.wrapper), this.wrapper = void 0), this.domElements = [], this._removePopup();
    }
    /**
     * get the value from the actualOptions if it exists
     *
     * @param {Array} path    | where to look for the actual option
     * @returns {*}
     * @private
     */
  }, {
    key: "_getValue",
    value: function(e) {
      for (var t = this.moduleOptions, n = 0; n < e.length; n++)
        if (t[e[n]] !== void 0)
          t = t[e[n]];
        else {
          t = void 0;
          break;
        }
      return t;
    }
    /**
     * all option elements are wrapped in an item
     *
     * @param {Array} path    | where to look for the actual option
     * @param {Array.<Element>} domElements
     * @returns {number}
     * @private
     */
  }, {
    key: "_makeItem",
    value: function(e) {
      if (this.allowCreation === !0) {
        var t = document.createElement("div");
        t.className = "vis-configuration vis-config-item vis-config-s" + e.length;
        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
          a[o - 1] = arguments[o];
        return xe(a).call(a, function(s) {
          t.appendChild(s);
        }), this.domElements.push(t), this.domElements.length;
      }
      return 0;
    }
    /**
     * header for major subjects
     *
     * @param {string} name
     * @private
     */
  }, {
    key: "_makeHeader",
    value: function(e) {
      var t = document.createElement("div");
      t.className = "vis-configuration vis-config-header", t.innerText = e, this._makeItem([], t);
    }
    /**
     * make a label, if it is an object label, it gets different styling.
     *
     * @param {string} name
     * @param {Array} path    | where to look for the actual option
     * @param {string} objectLabel
     * @returns {HTMLElement}
     * @private
     */
  }, {
    key: "_makeLabel",
    value: function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = document.createElement("div");
      if (a.className = "vis-configuration vis-config-label vis-config-s" + t.length, n === !0) {
        for (; a.firstChild; )
          a.removeChild(a.firstChild);
        a.appendChild($h("i", "b", e));
      } else
        a.innerText = e + ":";
      return a;
    }
    /**
     * make a dropdown list for multiple possible string optoins
     *
     * @param {Array.<number>} arr
     * @param {number} value
     * @param {Array} path    | where to look for the actual option
     * @private
     */
  }, {
    key: "_makeDropdown",
    value: function(e, t, n) {
      var a = document.createElement("select");
      a.className = "vis-configuration vis-config-select";
      var o = 0;
      t !== void 0 && ye(e).call(e, t) !== -1 && (o = ye(e).call(e, t));
      for (var s = 0; s < e.length; s++) {
        var u = document.createElement("option");
        u.value = e[s], s === o && (u.selected = "selected"), u.innerText = e[s], a.appendChild(u);
      }
      var l = this;
      a.onchange = function() {
        l._update(this.value, n);
      };
      var c = this._makeLabel(n[n.length - 1], n);
      this._makeItem(n, c, a);
    }
    /**
     * make a range object for numeric options
     *
     * @param {Array.<number>} arr
     * @param {number} value
     * @param {Array} path    | where to look for the actual option
     * @private
     */
  }, {
    key: "_makeRange",
    value: function(e, t, n) {
      var a = e[0], o = e[1], s = e[2], u = e[3], l = document.createElement("input");
      l.className = "vis-configuration vis-config-range";
      try {
        l.type = "range", l.min = o, l.max = s;
      } catch {
      }
      l.step = u;
      var c = "", d = 0;
      if (t !== void 0) {
        var f = 1.2;
        t < 0 && t * f < o ? (l.min = Math.ceil(t * f), d = l.min, c = "range increased") : t / f < o && (l.min = Math.ceil(t / f), d = l.min, c = "range increased"), t * f > s && s !== 1 && (l.max = Math.ceil(t * f), d = l.max, c = "range increased"), l.value = t;
      } else
        l.value = a;
      var h = document.createElement("input");
      h.className = "vis-configuration vis-config-rangeinput", h.value = l.value;
      var v = this;
      l.onchange = function() {
        h.value = this.value, v._update(Number(this.value), n);
      }, l.oninput = function() {
        h.value = this.value;
      };
      var p = this._makeLabel(n[n.length - 1], n), y = this._makeItem(n, p, l, h);
      c !== "" && this.popupHistory[y] !== d && (this.popupHistory[y] = d, this._setupPopup(c, y));
    }
    /**
     * make a button object
     *
     * @private
     */
  }, {
    key: "_makeButton",
    value: function() {
      var e = this;
      if (this.options.showButton === !0) {
        var t = document.createElement("div");
        t.className = "vis-configuration vis-config-button", t.innerText = "generate options", t.onclick = function() {
          e._printOptions();
        }, t.onmouseover = function() {
          t.className = "vis-configuration vis-config-button hover";
        }, t.onmouseout = function() {
          t.className = "vis-configuration vis-config-button";
        }, this.optionsContainer = document.createElement("div"), this.optionsContainer.className = "vis-configuration vis-config-option-container", this.domElements.push(this.optionsContainer), this.domElements.push(t);
      }
    }
    /**
     * prepare the popup
     *
     * @param {string} string
     * @param {number} index
     * @private
     */
  }, {
    key: "_setupPopup",
    value: function(e, t) {
      var n = this;
      if (this.initialized === !0 && this.allowCreation === !0 && this.popupCounter < this.popupLimit) {
        var a = document.createElement("div");
        a.id = "vis-configuration-popup", a.className = "vis-configuration-popup", a.innerText = e, a.onclick = function() {
          n._removePopup();
        }, this.popupCounter += 1, this.popupDiv = {
          html: a,
          index: t
        };
      }
    }
    /**
     * remove the popup from the dom
     *
     * @private
     */
  }, {
    key: "_removePopup",
    value: function() {
      this.popupDiv.html !== void 0 && (this.popupDiv.html.parentNode.removeChild(this.popupDiv.html), clearTimeout(this.popupDiv.hideTimeout), clearTimeout(this.popupDiv.deleteTimeout), this.popupDiv = {});
    }
    /**
     * Show the popup if it is needed.
     *
     * @private
     */
  }, {
    key: "_showPopupIfNeeded",
    value: function() {
      var e = this;
      if (this.popupDiv.html !== void 0) {
        var t = this.domElements[this.popupDiv.index], n = t.getBoundingClientRect();
        this.popupDiv.html.style.left = n.left + "px", this.popupDiv.html.style.top = n.top - 30 + "px", document.body.appendChild(this.popupDiv.html), this.popupDiv.hideTimeout = Er(function() {
          e.popupDiv.html.style.opacity = 0;
        }, 1500), this.popupDiv.deleteTimeout = Er(function() {
          e._removePopup();
        }, 1800);
      }
    }
    /**
     * make a checkbox for boolean options.
     *
     * @param {number} defaultValue
     * @param {number} value
     * @param {Array} path    | where to look for the actual option
     * @private
     */
  }, {
    key: "_makeCheckbox",
    value: function(e, t, n) {
      var a = document.createElement("input");
      a.type = "checkbox", a.className = "vis-configuration vis-config-checkbox", a.checked = e, t !== void 0 && (a.checked = t, t !== e && (Ie(e) === "object" ? t !== e.enabled && this.changedOptions.push({
        path: n,
        value: t
      }) : this.changedOptions.push({
        path: n,
        value: t
      })));
      var o = this;
      a.onchange = function() {
        o._update(this.checked, n);
      };
      var s = this._makeLabel(n[n.length - 1], n);
      this._makeItem(n, s, a);
    }
    /**
     * make a text input field for string options.
     *
     * @param {number} defaultValue
     * @param {number} value
     * @param {Array} path    | where to look for the actual option
     * @private
     */
  }, {
    key: "_makeTextInput",
    value: function(e, t, n) {
      var a = document.createElement("input");
      a.type = "text", a.className = "vis-configuration vis-config-text", a.value = t, t !== e && this.changedOptions.push({
        path: n,
        value: t
      });
      var o = this;
      a.onchange = function() {
        o._update(this.value, n);
      };
      var s = this._makeLabel(n[n.length - 1], n);
      this._makeItem(n, s, a);
    }
    /**
     * make a color field with a color picker for color fields
     *
     * @param {Array.<number>} arr
     * @param {number} value
     * @param {Array} path    | where to look for the actual option
     * @private
     */
  }, {
    key: "_makeColorField",
    value: function(e, t, n) {
      var a = this, o = e[1], s = document.createElement("div");
      t = t === void 0 ? o : t, t !== "none" ? (s.className = "vis-configuration vis-config-colorBlock", s.style.backgroundColor = t) : s.className = "vis-configuration vis-config-colorBlock none", t = t === void 0 ? o : t, s.onclick = function() {
        a._showColorPicker(t, s, n);
      };
      var u = this._makeLabel(n[n.length - 1], n);
      this._makeItem(n, u, s);
    }
    /**
     * used by the color buttons to call the color picker.
     *
     * @param {number} value
     * @param {HTMLElement} div
     * @param {Array} path    | where to look for the actual option
     * @private
     */
  }, {
    key: "_showColorPicker",
    value: function(e, t, n) {
      var a = this;
      t.onclick = function() {
      }, this.colorPicker.insertTo(t), this.colorPicker.show(), this.colorPicker.setColor(e), this.colorPicker.setUpdateCallback(function(o) {
        var s = "rgba(" + o.r + "," + o.g + "," + o.b + "," + o.a + ")";
        t.style.backgroundColor = s, a._update(s, n);
      }), this.colorPicker.setCloseCallback(function() {
        t.onclick = function() {
          a._showColorPicker(e, t, n);
        };
      });
    }
    /**
     * parse an object and draw the correct items
     *
     * @param {object} obj
     * @param {Array} [path=[]]    | where to look for the actual option
     * @param {boolean} [checkOnly=false]
     * @returns {boolean}
     * @private
     */
  }, {
    key: "_handleObject",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = !1, o = Dt(this.options), s = !1;
      for (var u in e)
        if (Object.prototype.hasOwnProperty.call(e, u)) {
          a = !0;
          var l = e[u], c = ju(t, u);
          if (typeof o == "function" && (a = o(u, t), a === !1 && !Te(l) && typeof l != "string" && typeof l != "boolean" && l instanceof Object && (this.allowCreation = !1, a = this._handleObject(l, c, !0), this.allowCreation = n === !1)), a !== !1) {
            s = !0;
            var d = this._getValue(c);
            if (Te(l))
              this._handleArray(l, d, c);
            else if (typeof l == "string")
              this._makeTextInput(l, d, c);
            else if (typeof l == "boolean")
              this._makeCheckbox(l, d, c);
            else if (l instanceof Object) {
              if (!this.hideOption(t, u, this.moduleOptions))
                if (l.enabled !== void 0) {
                  var f = ju(c, "enabled"), h = this._getValue(f);
                  if (h === !0) {
                    var v = this._makeLabel(u, c, !0);
                    this._makeItem(c, v), s = this._handleObject(l, c) || s;
                  } else
                    this._makeCheckbox(l, h, c);
                } else {
                  var p = this._makeLabel(u, c, !0);
                  this._makeItem(c, p), s = this._handleObject(l, c) || s;
                }
            } else
              console.error("dont know how to handle", l, u, c);
          }
        }
      return s;
    }
    /**
     * handle the array type of option
     *
     * @param {Array.<number>} arr
     * @param {number} value
     * @param {Array} path    | where to look for the actual option
     * @private
     */
  }, {
    key: "_handleArray",
    value: function(e, t, n) {
      typeof e[0] == "string" && e[0] === "color" ? (this._makeColorField(e, t, n), e[1] !== t && this.changedOptions.push({
        path: n,
        value: t
      })) : typeof e[0] == "string" ? (this._makeDropdown(e, t, n), e[0] !== t && this.changedOptions.push({
        path: n,
        value: t
      })) : typeof e[0] == "number" && (this._makeRange(e, t, n), e[0] !== t && this.changedOptions.push({
        path: n,
        value: Number(t)
      }));
    }
    /**
     * called to update the network with the new settings.
     *
     * @param {number} value
     * @param {Array} path    | where to look for the actual option
     * @private
     */
  }, {
    key: "_update",
    value: function(e, t) {
      var n = this._constructOptions(e, t);
      this.parent.body && this.parent.body.emitter && this.parent.body.emitter.emit && this.parent.body.emitter.emit("configChange", n), this.initialized = !0, this.parent.setOptions(n);
    }
    /**
     *
     * @param {string | boolean} value
     * @param {Array.<string>} path
     * @param {{}} optionsObj
     * @returns {{}}
     * @private
     */
  }, {
    key: "_constructOptions",
    value: function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = n;
      e = e === "true" ? !0 : e, e = e === "false" ? !1 : e;
      for (var o = 0; o < t.length; o++)
        t[o] !== "global" && (a[t[o]] === void 0 && (a[t[o]] = {}), o !== t.length - 1 ? a = a[t[o]] : a[t[o]] = e);
      return n;
    }
    /**
     * @private
     */
  }, {
    key: "_printOptions",
    value: function() {
      for (var e = this.getOptions(); this.optionsContainer.firstChild; )
        this.optionsContainer.removeChild(this.optionsContainer.firstChild);
      this.optionsContainer.appendChild($h("pre", "const options = " + ts(e, null, 2)));
    }
    /**
     *
     * @returns {{}} options
     */
  }, {
    key: "getOptions",
    value: function() {
      for (var e = {}, t = 0; t < this.changedOptions.length; t++)
        this._constructOptions(this.changedOptions[t].value, this.changedOptions[t].path, e);
      return e;
    }
  }]), r;
})(), noe = /* @__PURE__ */ (function() {
  function r(i, e) {
    M(this, r), this.container = i, this.overflowMethod = e || "cap", this.x = 0, this.y = 0, this.padding = 5, this.hidden = !1, this.frame = document.createElement("div"), this.frame.className = "vis-tooltip", this.container.appendChild(this.frame);
  }
  return N(r, [{
    key: "setPosition",
    value: function(e, t) {
      this.x = lr(e), this.y = lr(t);
    }
    /**
     * Set the content for the popup window. This can be HTML code or text.
     *
     * @param {string | Element} content
     */
  }, {
    key: "setText",
    value: function(e) {
      if (e instanceof Element) {
        for (; this.frame.firstChild; )
          this.frame.removeChild(this.frame.firstChild);
        this.frame.appendChild(e);
      } else
        this.frame.innerText = e;
    }
    /**
     * Show the popup window
     *
     * @param {boolean} [doShow]    Show or hide the window
     */
  }, {
    key: "show",
    value: function(e) {
      if (e === void 0 && (e = !0), e === !0) {
        var t = this.frame.clientHeight, n = this.frame.clientWidth, a = this.frame.parentNode.clientHeight, o = this.frame.parentNode.clientWidth, s = 0, u = 0;
        if (this.overflowMethod == "flip") {
          var l = !1, c = !0;
          this.y - t < this.padding && (c = !1), this.x + n > o - this.padding && (l = !0), l ? s = this.x - n : s = this.x, c ? u = this.y - t : u = this.y;
        } else
          u = this.y - t, u + t + this.padding > a && (u = a - t - this.padding), u < this.padding && (u = this.padding), s = this.x, s + n + this.padding > o && (s = o - n - this.padding), s < this.padding && (s = this.padding);
        this.frame.style.left = s + "px", this.frame.style.top = u + "px", this.frame.style.visibility = "visible", this.hidden = !1;
      } else
        this.hide();
    }
    /**
     * Hide the popup window
     */
  }, {
    key: "hide",
    value: function() {
      this.hidden = !0, this.frame.style.left = "0", this.frame.style.top = "0", this.frame.style.visibility = "hidden";
    }
    /**
     * Remove the popup window
     */
  }, {
    key: "destroy",
    value: function() {
      this.frame.parentNode.removeChild(this.frame);
    }
  }]), r;
})(), Aa = !1, I$, _h = "background: #FFeeee; color: #dd0000", ioe = /* @__PURE__ */ (function() {
  function r() {
    M(this, r);
  }
  return N(r, null, [{
    key: "validate",
    value: (
      /**
       * Main function to be called
       *
       * @param {object} options
       * @param {object} referenceOptions
       * @param {object} subObject
       * @returns {boolean}
       * @static
       */
      function(e, t, n) {
        Aa = !1, I$ = t;
        var a = t;
        return n !== void 0 && (a = t[n]), r.parse(e, a, []), Aa;
      }
    )
    /**
     * Will traverse an object recursively and check every value
     *
     * @param {object} options
     * @param {object} referenceOptions
     * @param {Array} path    | where to look for the actual option
     * @static
     */
  }, {
    key: "parse",
    value: function(e, t, n) {
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && r.check(a, e, t, n);
    }
    /**
     * Check every value. If the value is an object, call the parse function on that object.
     *
     * @param {string} option
     * @param {object} options
     * @param {object} referenceOptions
     * @param {Array} path    | where to look for the actual option
     * @static
     */
  }, {
    key: "check",
    value: function(e, t, n, a) {
      if (n[e] === void 0 && n.__any__ === void 0) {
        r.getSuggestion(e, n, a);
        return;
      }
      var o = e, s = !0;
      n[e] === void 0 && n.__any__ !== void 0 && (o = "__any__", s = r.getType(t[e]) === "object");
      var u = n[o];
      s && u.__type__ !== void 0 && (u = u.__type__), r.checkFields(e, t, n, o, u, a);
    }
    /**
     *
     * @param {string}  option           | the option property
     * @param {object}  options          | The supplied options object
     * @param {object}  referenceOptions | The reference options containing all options and their allowed formats
     * @param {string}  referenceOption  | Usually this is the same as option, except when handling an __any__ tag.
     * @param {string}  refOptionObj     | This is the type object from the reference options
     * @param {Array}   path             | where in the object is the option
     * @static
     */
  }, {
    key: "checkFields",
    value: function(e, t, n, a, o, s) {
      var u = function(f) {
        console.error("%c" + f + r.printLocation(s, e), _h);
      }, l = r.getType(t[e]), c = o[l];
      c !== void 0 ? r.getType(c) === "array" && ye(c).call(c, t[e]) === -1 ? (u('Invalid option detected in "' + e + '". Allowed values are:' + r.print(c) + ' not "' + t[e] + '". '), Aa = !0) : l === "object" && a !== "__any__" && (s = ju(s, e), r.parse(t[e], n[a], s)) : o.any === void 0 && (u('Invalid type received for "' + e + '". Expected: ' + r.print(We(o)) + ". Received [" + l + '] "' + t[e] + '"'), Aa = !0);
    }
    /**
     *
     * @param {object | boolean | number | string | Array.<number> | Date | Node | Moment | undefined | null} object
     * @returns {string}
     * @static
     */
  }, {
    key: "getType",
    value: function(e) {
      var t = Ie(e);
      return t === "object" ? e === null ? "null" : e instanceof Boolean ? "boolean" : e instanceof Number ? "number" : e instanceof String ? "string" : Te(e) ? "array" : e instanceof Date ? "date" : e.nodeType !== void 0 ? "dom" : e._isAMomentObject === !0 ? "moment" : "object" : t === "number" ? "number" : t === "boolean" ? "boolean" : t === "string" ? "string" : t === void 0 ? "undefined" : t;
    }
    /**
     * @param {string} option
     * @param {object} options
     * @param {Array.<string>} path
     * @static
     */
  }, {
    key: "getSuggestion",
    value: function(e, t, n) {
      var a = r.findInOptions(e, t, n, !1), o = r.findInOptions(e, I$, [], !0), s = 8, u = 4, l;
      a.indexMatch !== void 0 ? l = " in " + r.printLocation(a.path, e, "") + 'Perhaps it was incomplete? Did you mean: "' + a.indexMatch + `"?

` : o.distance <= u && a.distance > o.distance ? l = " in " + r.printLocation(a.path, e, "") + "Perhaps it was misplaced? Matching option found at: " + r.printLocation(o.path, o.closestMatch, "") : a.distance <= s ? l = '. Did you mean "' + a.closestMatch + '"?' + r.printLocation(a.path, e) : l = ". Did you mean one of these: " + r.print(We(t)) + r.printLocation(n, e), console.error('%cUnknown option detected: "' + e + '"' + l, _h), Aa = !0;
    }
    /**
     * traverse the options in search for a match.
     *
     * @param {string} option
     * @param {object} options
     * @param {Array} path    | where to look for the actual option
     * @param {boolean} [recursive=false]
     * @returns {{closestMatch: string, path: Array, distance: number}}
     * @static
     */
  }, {
    key: "findInOptions",
    value: function(e, t, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, o = 1e9, s = "", u = [], l = e.toLowerCase(), c = void 0;
      for (var d in t) {
        var f = void 0;
        if (t[d].__type__ !== void 0 && a === !0) {
          var h = r.findInOptions(e, t[d], ju(n, d));
          o > h.distance && (s = h.closestMatch, u = h.path, o = h.distance, c = h.indexMatch);
        } else {
          var v;
          ye(v = d.toLowerCase()).call(v, l) !== -1 && (c = d), f = r.levenshteinDistance(e, d), o > f && (s = d, u = qae(n), o = f);
        }
      }
      return {
        closestMatch: s,
        path: u,
        distance: o,
        indexMatch: c
      };
    }
    /**
     * @param {Array.<string>} path
     * @param {object} option
     * @param {string} prefix
     * @returns {string}
     * @static
     */
  }, {
    key: "printLocation",
    value: function(e, t) {
      for (var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : `Problem value found at: 
`, a = `

` + n + `options = {
`, o = 0; o < e.length; o++) {
        for (var s = 0; s < o + 1; s++)
          a += "  ";
        a += e[o] + `: {
`;
      }
      for (var u = 0; u < e.length + 1; u++)
        a += "  ";
      a += t + `
`;
      for (var l = 0; l < e.length + 1; l++) {
        for (var c = 0; c < e.length - l; c++)
          a += "  ";
        a += `}
`;
      }
      return a + `

`;
    }
    /**
     * @param {object} options
     * @returns {string}
     * @static
     */
  }, {
    key: "print",
    value: function(e) {
      return ts(e).replace(/(")|(\[)|(\])|(,"__type__")/g, "").replace(/(,)/g, ", ");
    }
    /**
     *  Compute the edit distance between the two given strings
     * http://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript
     *
     * Copyright (c) 2011 Andrei Mackenzie
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     *
     * @param {string} a
     * @param {string} b
     * @returns {Array.<Array.<number>>}}
     * @static
     */
  }, {
    key: "levenshteinDistance",
    value: function(e, t) {
      if (e.length === 0) return t.length;
      if (t.length === 0) return e.length;
      var n = [], a;
      for (a = 0; a <= t.length; a++)
        n[a] = [a];
      var o;
      for (o = 0; o <= e.length; o++)
        n[0][o] = o;
      for (a = 1; a <= t.length; a++)
        for (o = 1; o <= e.length; o++)
          t.charAt(a - 1) == e.charAt(o - 1) ? n[a][o] = n[a - 1][o - 1] : n[a][o] = Math.min(
            n[a - 1][o - 1] + 1,
            // substitution
            Math.min(
              n[a][o - 1] + 1,
              // insertion
              n[a - 1][o] + 1
            )
          );
      return n[t.length][e.length];
    }
  }]), r;
})(), aoe = _r, ooe = roe, Bi = Gv, soe = noe, sT = _h, uoe = ioe;
function uT(r) {
  return Zr = r, foe();
}
var lT = {
  fontsize: "font.size",
  fontcolor: "font.color",
  labelfontcolor: "font.color",
  fontname: "font.face",
  color: ["color.border", "color.background"],
  fillcolor: "color.background",
  tooltip: "title",
  labeltooltip: "title"
}, qv = Mn(lT);
qv.color = "color.color";
qv.style = "dashes";
var wt = {
  NULL: 0,
  DELIMITER: 1,
  IDENTIFIER: 2,
  UNKNOWN: 3
}, k$ = {
  "{": !0,
  "}": !0,
  "[": !0,
  "]": !0,
  ";": !0,
  "=": !0,
  ",": !0,
  "->": !0,
  "--": !0
}, Zr = "", ea = 0, ce = "", ae = "", Ct = wt.NULL;
function loe() {
  ea = 0, ce = Zr.charAt(0);
}
function at() {
  ea++, ce = Zr.charAt(ea);
}
function _i() {
  return Zr.charAt(ea + 1);
}
function C$(r) {
  var i = r.charCodeAt(0);
  return i < 47 ? i === 35 || i === 46 : i < 59 ? i > 47 : i < 91 ? i > 64 : i < 96 ? i === 95 : i < 123 ? i > 96 : !1;
}
function cn(r, i) {
  if (r || (r = {}), i)
    for (var e in i)
      i.hasOwnProperty(e) && (r[e] = i[e]);
  return r;
}
function coe(r, i, e) {
  for (var t = i.split("."), n = r; t.length; ) {
    var a = t.shift();
    t.length ? (n[a] || (n[a] = {}), n = n[a]) : n[a] = e;
  }
}
function cT(r, i) {
  for (var e, t, n = null, a = [r], o = r; o.parent; )
    a.push(o.parent), o = o.parent;
  if (o.nodes) {
    for (e = 0, t = o.nodes.length; e < t; e++)
      if (i.id === o.nodes[e].id) {
        n = o.nodes[e];
        break;
      }
  }
  for (n || (n = {
    id: i.id
  }, r.node && (n.attr = cn(n.attr, r.node))), e = a.length - 1; e >= 0; e--) {
    var s, u = a[e];
    u.nodes || (u.nodes = []), ye(s = u.nodes).call(s, n) === -1 && u.nodes.push(n);
  }
  i.attr && (n.attr = cn(n.attr, i.attr));
}
function doe(r, i) {
  if (r.edges || (r.edges = []), r.edges.push(i), r.edge) {
    var e = cn({}, r.edge);
    i.attr = cn(e, i.attr);
  }
}
function dT(r, i, e, t, n) {
  var a = {
    from: i,
    to: e,
    type: t
  };
  return r.edge && (a.attr = cn({}, r.edge)), a.attr = cn(a.attr || {}, n), n != null && n.hasOwnProperty("arrows") && n.arrows != null && (a.arrows = {
    to: {
      enabled: !0,
      type: n.arrows.type
    }
  }, n.arrows = null), a;
}
function De() {
  for (Ct = wt.NULL, ae = ""; ce === " " || ce === "	" || ce === `
` || ce === "\r"; )
    at();
  do {
    var r = !1;
    if (ce === "#") {
      for (var i = ea - 1; Zr.charAt(i) === " " || Zr.charAt(i) === "	"; )
        i--;
      if (Zr.charAt(i) === `
` || Zr.charAt(i) === "") {
        for (; ce != "" && ce != `
`; )
          at();
        r = !0;
      }
    }
    if (ce === "/" && _i() === "/") {
      for (; ce != "" && ce != `
`; )
        at();
      r = !0;
    }
    if (ce === "/" && _i() === "*") {
      for (; ce != ""; )
        if (ce === "*" && _i() === "/") {
          at(), at();
          break;
        } else
          at();
      r = !0;
    }
    for (; ce === " " || ce === "	" || ce === `
` || ce === "\r"; )
      at();
  } while (r);
  if (ce === "") {
    Ct = wt.DELIMITER;
    return;
  }
  var e = ce + _i();
  if (k$[e]) {
    Ct = wt.DELIMITER, ae = e, at(), at();
    return;
  }
  if (k$[ce]) {
    Ct = wt.DELIMITER, ae = ce, at();
    return;
  }
  if (C$(ce) || ce === "-") {
    for (ae += ce, at(); C$(ce); )
      ae += ce, at();
    ae === "false" ? ae = !1 : ae === "true" ? ae = !0 : isNaN(Number(ae)) || (ae = Number(ae)), Ct = wt.IDENTIFIER;
    return;
  }
  if (ce === '"') {
    for (at(); ce != "" && (ce != '"' || ce === '"' && _i() === '"'); )
      ce === '"' ? (ae += ce, at()) : ce === "\\" && _i() === "n" ? (ae += `
`, at()) : ae += ce, at();
    if (ce != '"')
      throw Et('End of string " expected');
    at(), Ct = wt.IDENTIFIER;
    return;
  }
  for (Ct = wt.UNKNOWN; ce != ""; )
    ae += ce, at();
  throw new SyntaxError('Syntax error in part "' + pT(ae, 30) + '"');
}
function foe() {
  var r = {};
  if (loe(), De(), ae === "strict" && (r.strict = !0, De()), (ae === "graph" || ae === "digraph") && (r.type = ae, De()), Ct === wt.IDENTIFIER && (r.id = ae, De()), ae != "{")
    throw Et("Angle bracket { expected");
  if (De(), fT(r), ae != "}")
    throw Et("Angle bracket } expected");
  if (De(), ae !== "")
    throw Et("End of file expected");
  return De(), delete r.node, delete r.edge, delete r.graph, r;
}
function fT(r) {
  for (; ae !== "" && ae != "}"; )
    hoe(r), ae === ";" && De();
}
function hoe(r) {
  var i = hT(r);
  if (i) {
    vT(r, i);
    return;
  }
  var e = voe(r);
  if (!e) {
    if (Ct != wt.IDENTIFIER)
      throw Et("Identifier expected");
    var t = ae;
    if (De(), ae === "=") {
      if (De(), Ct != wt.IDENTIFIER)
        throw Et("Identifier expected");
      r[t] = ae, De();
    } else
      poe(r, t);
  }
}
function hT(r) {
  var i = null;
  if (ae === "subgraph" && (i = {}, i.type = "subgraph", De(), Ct === wt.IDENTIFIER && (i.id = ae, De())), ae === "{") {
    if (De(), i || (i = {}), i.parent = r, i.node = r.node, i.edge = r.edge, i.graph = r.graph, fT(i), ae != "}")
      throw Et("Angle bracket } expected");
    De(), delete i.node, delete i.edge, delete i.graph, delete i.parent, r.subgraphs || (r.subgraphs = []), r.subgraphs.push(i);
  }
  return i;
}
function voe(r) {
  return ae === "node" ? (De(), r.node = qa(), "node") : ae === "edge" ? (De(), r.edge = qa(), "edge") : ae === "graph" ? (De(), r.graph = qa(), "graph") : null;
}
function poe(r, i) {
  var e = {
    id: i
  }, t = qa();
  t && (e.attr = t), cT(r, e), vT(r, i);
}
function vT(r, i) {
  for (; ae === "->" || ae === "--"; ) {
    var e, t = ae;
    De();
    var n = hT(r);
    if (n)
      e = n;
    else {
      if (Ct != wt.IDENTIFIER)
        throw Et("Identifier or subgraph expected");
      e = ae, cT(r, {
        id: e
      }), De();
    }
    var a = qa(), o = dT(r, i, e, t, a);
    doe(r, o), i = e;
  }
}
function qa() {
  for (var r, i = null, e = {
    dashed: !0,
    solid: !1,
    dotted: [1, 5]
  }, t = {
    dot: "circle",
    box: "box",
    crow: "crow",
    curve: "curve",
    icurve: "inv_curve",
    normal: "triangle",
    inv: "inv_triangle",
    diamond: "diamond",
    tee: "bar",
    vee: "vee"
  }, n = new Array(), a = new Array(); ae === "["; ) {
    for (De(), i = {}; ae !== "" && ae != "]"; ) {
      if (Ct != wt.IDENTIFIER)
        throw Et("Attribute name expected");
      var o = ae;
      if (De(), ae != "=")
        throw Et("Equal sign = expected");
      if (De(), Ct != wt.IDENTIFIER)
        throw Et("Attribute value expected");
      var s = ae;
      o === "style" && (s = e[s]);
      var u;
      o === "arrowhead" && (u = t[s], o = "arrows", s = {
        to: {
          enabled: !0,
          type: u
        }
      }), o === "arrowtail" && (u = t[s], o = "arrows", s = {
        from: {
          enabled: !0,
          type: u
        }
      }), n.push({
        attr: i,
        name: o,
        value: s
      }), a.push(o), De(), ae == "," && De();
    }
    if (ae != "]")
      throw Et("Bracket ] expected");
    De();
  }
  if (on(a).call(a, "dir")) {
    var l = {};
    for (l.arrows = {}, r = 0; r < n.length; r++)
      if (n[r].name === "arrows")
        if (n[r].value.to != null)
          l.arrows.to = r;
        else if (n[r].value.from != null)
          l.arrows.from = r;
        else
          throw Et("Invalid value of arrows");
      else n[r].name === "dir" && (l.dir = r);
    var c = n[l.dir].value;
    if (!on(a).call(a, "arrows"))
      if (c === "both")
        n.push({
          attr: n[l.dir].attr,
          name: "arrows",
          value: {
            to: {
              enabled: !0
            }
          }
        }), l.arrows.to = n.length - 1, n.push({
          attr: n[l.dir].attr,
          name: "arrows",
          value: {
            from: {
              enabled: !0
            }
          }
        }), l.arrows.from = n.length - 1;
      else if (c === "forward")
        n.push({
          attr: n[l.dir].attr,
          name: "arrows",
          value: {
            to: {
              enabled: !0
            }
          }
        }), l.arrows.to = n.length - 1;
      else if (c === "back")
        n.push({
          attr: n[l.dir].attr,
          name: "arrows",
          value: {
            from: {
              enabled: !0
            }
          }
        }), l.arrows.from = n.length - 1;
      else if (c === "none")
        n.push({
          attr: n[l.dir].attr,
          name: "arrows",
          value: ""
        }), l.arrows.to = n.length - 1;
      else
        throw Et('Invalid dir type "' + c + '"');
    var d, f;
    if (c === "both")
      l.arrows.to && l.arrows.from ? (f = n[l.arrows.to].value.to.type, d = n[l.arrows.from].value.from.type, n[l.arrows.to] = {
        attr: n[l.arrows.to].attr,
        name: n[l.arrows.to].name,
        value: {
          to: {
            enabled: !0,
            type: f
          },
          from: {
            enabled: !0,
            type: d
          }
        }
      }, Fr(n).call(n, l.arrows.from, 1)) : l.arrows.to ? (f = n[l.arrows.to].value.to.type, d = "arrow", n[l.arrows.to] = {
        attr: n[l.arrows.to].attr,
        name: n[l.arrows.to].name,
        value: {
          to: {
            enabled: !0,
            type: f
          },
          from: {
            enabled: !0,
            type: d
          }
        }
      }) : l.arrows.from && (f = "arrow", d = n[l.arrows.from].value.from.type, n[l.arrows.from] = {
        attr: n[l.arrows.from].attr,
        name: n[l.arrows.from].name,
        value: {
          to: {
            enabled: !0,
            type: f
          },
          from: {
            enabled: !0,
            type: d
          }
        }
      });
    else if (c === "back")
      l.arrows.to && l.arrows.from ? (f = "", d = n[l.arrows.from].value.from.type, n[l.arrows.from] = {
        attr: n[l.arrows.from].attr,
        name: n[l.arrows.from].name,
        value: {
          to: {
            enabled: !0,
            type: f
          },
          from: {
            enabled: !0,
            type: d
          }
        }
      }) : l.arrows.to ? (f = "", d = "arrow", l.arrows.from = l.arrows.to, n[l.arrows.from] = {
        attr: n[l.arrows.from].attr,
        name: n[l.arrows.from].name,
        value: {
          to: {
            enabled: !0,
            type: f
          },
          from: {
            enabled: !0,
            type: d
          }
        }
      }) : l.arrows.from && (f = "", d = n[l.arrows.from].value.from.type, n[l.arrows.to] = {
        attr: n[l.arrows.from].attr,
        name: n[l.arrows.from].name,
        value: {
          to: {
            enabled: !0,
            type: f
          },
          from: {
            enabled: !0,
            type: d
          }
        }
      }), n[l.arrows.from] = {
        attr: n[l.arrows.from].attr,
        name: n[l.arrows.from].name,
        value: {
          from: {
            enabled: !0,
            type: n[l.arrows.from].value.from.type
          }
        }
      };
    else if (c === "none") {
      var h;
      l.arrows.to ? h = l.arrows.to : h = l.arrows.from, n[h] = {
        attr: n[h].attr,
        name: n[h].name,
        value: ""
      };
    } else if (c === "forward")
      l.arrows.to && l.arrows.from ? (f = n[l.arrows.to].value.to.type, d = "", n[l.arrows.to] = {
        attr: n[l.arrows.to].attr,
        name: n[l.arrows.to].name,
        value: {
          to: {
            enabled: !0,
            type: f
          },
          from: {
            enabled: !0,
            type: d
          }
        }
      }) : l.arrows.to ? (f = n[l.arrows.to].value.to.type, d = "", n[l.arrows.to] = {
        attr: n[l.arrows.to].attr,
        name: n[l.arrows.to].name,
        value: {
          to: {
            enabled: !0,
            type: f
          },
          from: {
            enabled: !0,
            type: d
          }
        }
      }) : l.arrows.from && (f = "arrow", d = "", l.arrows.to = l.arrows.from, n[l.arrows.to] = {
        attr: n[l.arrows.to].attr,
        name: n[l.arrows.to].name,
        value: {
          to: {
            enabled: !0,
            type: f
          },
          from: {
            enabled: !0,
            type: d
          }
        }
      }), n[l.arrows.to] = {
        attr: n[l.arrows.to].attr,
        name: n[l.arrows.to].name,
        value: {
          to: {
            enabled: !0,
            type: n[l.arrows.to].value.to.type
          }
        }
      };
    else
      throw Et('Invalid dir type "' + c + '"');
    Fr(n).call(n, l.dir, 1);
  }
  var v;
  if (on(a).call(a, "penwidth")) {
    var p = [];
    for (v = n.length, r = 0; r < v; r++)
      n[r].name !== "width" && (n[r].name === "penwidth" && (n[r].name = "width"), p.push(n[r]));
    n = p;
  }
  for (v = n.length, r = 0; r < v; r++)
    coe(n[r].attr, n[r].name, n[r].value);
  return i;
}
function Et(r) {
  return new SyntaxError(r + ', got "' + pT(ae, 30) + '" (char ' + ea + ")");
}
function pT(r, i) {
  return r.length <= i ? r : r.substr(0, 27) + "...";
}
function yoe(r, i, e) {
  Te(r) ? xe(r).call(r, function(t) {
    Te(i) ? xe(i).call(i, function(n) {
      e(t, n);
    }) : e(t, i);
  }) : Te(i) ? xe(i).call(i, function(t) {
    e(r, t);
  }) : e(r, i);
}
function Jd(r, i, e) {
  for (var t = i.split("."), n = t.pop(), a = r, o = 0; o < t.length; o++) {
    var s = t[o];
    s in a || (a[s] = {}), a = a[s];
  }
  return a[n] = e, r;
}
function x$(r, i) {
  var e = {};
  for (var t in r)
    if (r.hasOwnProperty(t)) {
      var n = i[t];
      Te(n) ? xe(n).call(n, function(a) {
        Jd(e, a, r[t]);
      }) : typeof n == "string" ? Jd(e, n, r[t]) : Jd(e, t, r[t]);
    }
  return e;
}
function Yv(r) {
  var i = uT(r), e = {
    nodes: [],
    edges: [],
    options: {}
  };
  if (i.nodes) {
    var t;
    xe(t = i.nodes).call(t, function(o) {
      var s = {
        id: o.id,
        label: String(o.label || o.id)
      };
      cn(s, x$(o.attr, lT)), s.image && (s.shape = "image"), e.nodes.push(s);
    });
  }
  if (i.edges) {
    var n, a = function(s) {
      var u = {
        from: s.from,
        to: s.to
      };
      return cn(u, x$(s.attr, qv)), u.arrows == null && s.type === "->" && (u.arrows = "to"), u;
    };
    xe(n = i.edges).call(n, function(o) {
      var s, u;
      if (o.from instanceof Object ? s = o.from.nodes : s = {
        id: o.from
      }, o.to instanceof Object ? u = o.to.nodes : u = {
        id: o.to
      }, o.from instanceof Object && o.from.edges) {
        var l;
        xe(l = o.from.edges).call(l, function(d) {
          var f = a(d);
          e.edges.push(f);
        });
      }
      if (yoe(s, u, function(d, f) {
        var h = dT(e, d.id, f.id, o.type, o.attr), v = a(h);
        e.edges.push(v);
      }), o.to instanceof Object && o.to.edges) {
        var c;
        xe(c = o.to.edges).call(c, function(d) {
          var f = a(d);
          e.edges.push(f);
        });
      }
    });
  }
  return i.attr && (e.options = i.attr), e;
}
var goe = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DOTToGraph: Yv,
  parseDOT: uT
});
function Xv(r, i) {
  var e, t = {
    edges: {
      inheritColor: !1
    },
    nodes: {
      fixed: !1,
      parseColor: !1
    }
  };
  i != null && (i.fixed != null && (t.nodes.fixed = i.fixed), i.parseColor != null && (t.nodes.parseColor = i.parseColor), i.inheritColor != null && (t.edges.inheritColor = i.inheritColor));
  var n = r.edges, a = Xi(n).call(n, function(s) {
    var u = {
      from: s.source,
      id: s.id,
      to: s.target
    };
    return s.attributes != null && (u.attributes = s.attributes), s.label != null && (u.label = s.label), s.attributes != null && s.attributes.title != null && (u.title = s.attributes.title), s.type === "Directed" && (u.arrows = "to"), s.color && t.edges.inheritColor === !1 && (u.color = s.color), u;
  }), o = Xi(e = r.nodes).call(e, function(s) {
    var u = {
      id: s.id,
      fixed: t.nodes.fixed && s.x != null && s.y != null
    };
    return s.attributes != null && (u.attributes = s.attributes), s.label != null && (u.label = s.label), s.size != null && (u.size = s.size), s.attributes != null && s.attributes.title != null && (u.title = s.attributes.title), s.title != null && (u.title = s.title), s.x != null && (u.x = s.x), s.y != null && (u.y = s.y), s.color != null && (t.nodes.parseColor === !0 ? u.color = s.color : u.color = {
      background: s.color,
      border: s.color,
      highlight: {
        background: s.color,
        border: s.color
      },
      hover: {
        background: s.color,
        border: s.color
      }
    }), u;
  });
  return {
    nodes: o,
    edges: a
  };
}
var moe = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  parseGephi: Xv
}), boe = {
  addDescription: "Click in an empty space to place a new node.",
  addEdge: "Add Edge",
  addNode: "Add Node",
  back: "Back",
  close: "Close",
  createEdgeError: "Cannot link edges to a cluster.",
  del: "Delete selected",
  deleteClusterError: "Clusters cannot be deleted.",
  edgeDescription: "Click on a node and drag the edge to another node to connect them.",
  edit: "Edit",
  editClusterError: "Clusters cannot be edited.",
  editEdge: "Edit Edge",
  editEdgeDescription: "Click on the control points and drag them to a node to connect to it.",
  editNode: "Edit Node"
}, $oe = {
  addDescription: "Klicke auf eine freie Stelle, um einen neuen Knoten zu plazieren.",
  addEdge: "Kante hinzufügen",
  addNode: "Knoten hinzufügen",
  back: "Zurück",
  close: "Schließen",
  createEdgeError: "Es ist nicht möglich, Kanten mit Clustern zu verbinden.",
  del: "Lösche Auswahl",
  deleteClusterError: "Cluster können nicht gelöscht werden.",
  edgeDescription: "Klicke auf einen Knoten und ziehe die Kante zu einem anderen Knoten, um diese zu verbinden.",
  edit: "Editieren",
  editClusterError: "Cluster können nicht editiert werden.",
  editEdge: "Kante editieren",
  editEdgeDescription: "Klicke auf die Verbindungspunkte und ziehe diese auf einen Knoten, um sie zu verbinden.",
  editNode: "Knoten editieren"
}, _oe = {
  addDescription: "Haga clic en un lugar vacío para colocar un nuevo nodo.",
  addEdge: "Añadir arista",
  addNode: "Añadir nodo",
  back: "Atrás",
  close: "Cerrar",
  createEdgeError: "No se puede conectar una arista a un grupo.",
  del: "Eliminar selección",
  deleteClusterError: "No es posible eliminar grupos.",
  edgeDescription: "Haga clic en un nodo y arrastre la arista hacia otro nodo para conectarlos.",
  edit: "Editar",
  editClusterError: "No es posible editar grupos.",
  editEdge: "Editar arista",
  editEdgeDescription: "Haga clic en un punto de control y arrastrelo a un nodo para conectarlo.",
  editNode: "Editar nodo"
}, woe = {
  addDescription: "Clicca per aggiungere un nuovo nodo",
  addEdge: "Aggiungi un vertice",
  addNode: "Aggiungi un nodo",
  back: "Indietro",
  close: "Chiudere",
  createEdgeError: "Non si possono collegare vertici ad un cluster",
  del: "Cancella la selezione",
  deleteClusterError: "I cluster non possono essere cancellati",
  edgeDescription: "Clicca su un nodo e trascinalo ad un altro nodo per connetterli.",
  edit: "Modifica",
  editClusterError: "I clusters non possono essere modificati.",
  editEdge: "Modifica il vertice",
  editEdgeDescription: "Clicca sui Punti di controllo e trascinali ad un nodo per connetterli.",
  editNode: "Modifica il nodo"
}, Eoe = {
  addDescription: "Klik op een leeg gebied om een nieuwe node te maken.",
  addEdge: "Link toevoegen",
  addNode: "Node toevoegen",
  back: "Terug",
  close: "Sluiten",
  createEdgeError: "Kan geen link maken naar een cluster.",
  del: "Selectie verwijderen",
  deleteClusterError: "Clusters kunnen niet worden verwijderd.",
  edgeDescription: "Klik op een node en sleep de link naar een andere node om ze te verbinden.",
  edit: "Wijzigen",
  editClusterError: "Clusters kunnen niet worden aangepast.",
  editEdge: "Link wijzigen",
  editEdgeDescription: "Klik op de verbindingspunten en sleep ze naar een node om daarmee te verbinden.",
  editNode: "Node wijzigen"
}, Soe = {
  addDescription: "Clique em um espaço em branco para adicionar um novo nó",
  addEdge: "Adicionar aresta",
  addNode: "Adicionar nó",
  back: "Voltar",
  close: "Fechar",
  createEdgeError: "Não foi possível linkar arestas a um cluster.",
  del: "Remover selecionado",
  deleteClusterError: "Clusters não puderam ser removidos.",
  edgeDescription: "Clique em um nó e arraste a aresta até outro nó para conectá-los",
  edit: "Editar",
  editClusterError: "Clusters não puderam ser editados.",
  editEdge: "Editar aresta",
  editEdgeDescription: "Clique nos pontos de controle e os arraste para um nó para conectá-los",
  editNode: "Editar nó"
}, Ooe = {
  addDescription: "Кликните в свободное место, чтобы добавить новый узел.",
  addEdge: "Добавить ребро",
  addNode: "Добавить узел",
  back: "Назад",
  close: "Закрывать",
  createEdgeError: "Невозможно соединить ребра в кластер.",
  del: "Удалить выбранное",
  deleteClusterError: "Кластеры не могут быть удалены",
  edgeDescription: "Кликните на узел и протяните ребро к другому узлу, чтобы соединить их.",
  edit: "Редактировать",
  editClusterError: "Кластеры недоступны для редактирования.",
  editEdge: "Редактировать ребро",
  editEdgeDescription: "Кликните на контрольные точки и перетащите их в узел, чтобы подключиться к нему.",
  editNode: "Редактировать узел"
}, Toe = {
  addDescription: "单击空白处放置新节点。",
  addEdge: "添加连接线",
  addNode: "添加节点",
  back: "返回",
  close: "關閉",
  createEdgeError: "无法将连接线连接到群集。",
  del: "删除选定",
  deleteClusterError: "无法删除群集。",
  edgeDescription: "单击某个节点并将该连接线拖动到另一个节点以连接它们。",
  edit: "编辑",
  editClusterError: "无法编辑群集。",
  editEdge: "编辑连接线",
  editEdgeDescription: "单击控制节点并将它们拖到节点上连接。",
  editNode: "编辑节点"
}, Poe = {
  addDescription: "Kлікніть на вільне місце, щоб додати новий вузол.",
  addEdge: "Додати край",
  addNode: "Додати вузол",
  back: "Назад",
  close: "Закрити",
  createEdgeError: "Не можливо об'єднати краї в групу.",
  del: "Видалити обране",
  deleteClusterError: "Групи не можуть бути видалені.",
  edgeDescription: "Клікніть на вузол і перетягніть край до іншого вузла, щоб їх з'єднати.",
  edit: "Редагувати",
  editClusterError: "Групи недоступні для редагування.",
  editEdge: "Редагувати край",
  editEdgeDescription: "Клікніть на контрольні точки і перетягніть їх у вузол, щоб підключитися до нього.",
  editNode: "Редагувати вузол"
}, Ioe = {
  addDescription: "Cliquez dans un endroit vide pour placer un nœud.",
  addEdge: "Ajouter un lien",
  addNode: "Ajouter un nœud",
  back: "Retour",
  close: "Fermer",
  createEdgeError: "Impossible de créer un lien vers un cluster.",
  del: "Effacer la sélection",
  deleteClusterError: "Les clusters ne peuvent pas être effacés.",
  edgeDescription: "Cliquez sur un nœud et glissez le lien vers un autre nœud pour les connecter.",
  edit: "Éditer",
  editClusterError: "Les clusters ne peuvent pas être édités.",
  editEdge: "Éditer le lien",
  editEdgeDescription: "Cliquez sur les points de contrôle et glissez-les pour connecter un nœud.",
  editNode: "Éditer le nœud"
}, koe = {
  addDescription: "Kluknutím do prázdného prostoru můžete přidat nový vrchol.",
  addEdge: "Přidat hranu",
  addNode: "Přidat vrchol",
  back: "Zpět",
  close: "Zavřít",
  createEdgeError: "Nelze připojit hranu ke shluku.",
  del: "Smazat výběr",
  deleteClusterError: "Nelze mazat shluky.",
  edgeDescription: "Přetažením z jednoho vrcholu do druhého můžete spojit tyto vrcholy novou hranou.",
  edit: "Upravit",
  editClusterError: "Nelze upravovat shluky.",
  editEdge: "Upravit hranu",
  editEdgeDescription: "Přetažením kontrolního vrcholu hrany ji můžete připojit k jinému vrcholu.",
  editNode: "Upravit vrchol"
}, Coe = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  cn: Toe,
  cs: koe,
  de: $oe,
  en: boe,
  es: _oe,
  fr: Ioe,
  it: woe,
  nl: Eoe,
  pt: Soe,
  ru: Ooe,
  uk: Poe
});
function xoe(r, i) {
  try {
    var e = i.split(/[-_ /]/, 2), t = He(e, 2), n = t[0], a = t[1], o = n != null ? n.toLowerCase() : null, s = a != null ? a.toUpperCase() : null;
    if (o && s) {
      var u = o + "-" + s;
      if (Object.prototype.hasOwnProperty.call(r, u))
        return u;
      var l;
      console.warn(Fv(l = "Unknown variant ".concat(s, " of language ")).call(l, o, "."));
    }
    if (o) {
      var c = o;
      if (Object.prototype.hasOwnProperty.call(r, c))
        return c;
      console.warn("Unknown language ".concat(o));
    }
    return console.warn("Unknown locale ".concat(i, ", falling back to English.")), "en";
  } catch (d) {
    return console.error(d), console.warn("Unexpected error while normalizing locale ".concat(i, ", falling back to English.")), "en";
  }
}
var Roe = /* @__PURE__ */ (function() {
  function r() {
    M(this, r), this.NUM_ITERATIONS = 4, this.image = new Image(), this.canvas = document.createElement("canvas");
  }
  return N(r, [{
    key: "init",
    value: function() {
      if (!this.initialized()) {
        this.src = this.image.src;
        var e = this.image.width, t = this.image.height;
        this.width = e, this.height = t;
        var n = Math.floor(t / 2), a = Math.floor(t / 4), o = Math.floor(t / 8), s = Math.floor(t / 16), u = Math.floor(e / 2), l = Math.floor(e / 4), c = Math.floor(e / 8), d = Math.floor(e / 16);
        this.canvas.width = 3 * l, this.canvas.height = n, this.coordinates = [[0, 0, u, n], [u, 0, l, a], [u, a, c, o], [5 * c, a, d, s]], this._fillMipMap();
      }
    }
    /**
     * @returns {boolean} true if init() has been called, false otherwise.
     */
  }, {
    key: "initialized",
    value: function() {
      return this.coordinates !== void 0;
    }
    /**
     * Redraw main image in various sizes to the context.
     *
     * The rationale behind this is to reduce artefacts due to interpolation
     * at differing zoom levels.
     *
     * Source: http://stackoverflow.com/q/18761404/1223531
     *
     * This methods takes the resizing out of the drawing loop, in order to
     * reduce performance overhead.
     *
     * TODO: The code assumes that a 2D context can always be gotten. This is
     *       not necessarily true! OTOH, if not true then usage of this class
     *       is senseless.
     *
     * @private
     */
  }, {
    key: "_fillMipMap",
    value: function() {
      var e = this.canvas.getContext("2d"), t = this.coordinates[0];
      e.drawImage(this.image, t[0], t[1], t[2], t[3]);
      for (var n = 1; n < this.NUM_ITERATIONS; n++) {
        var a = this.coordinates[n - 1], o = this.coordinates[n];
        e.drawImage(this.canvas, a[0], a[1], a[2], a[3], o[0], o[1], o[2], o[3]);
      }
    }
    /**
     * Draw the image, using the mipmap if necessary.
     *
     * MipMap is only used if param factor > 2; otherwise, original bitmap
     * is resized. This is also used to skip mipmap usage, e.g. by setting factor = 1
     *
     * Credits to 'Alex de Mulder' for original implementation.
     *
     * @param {CanvasRenderingContext2D} ctx  context on which to draw zoomed image
     * @param {Float} factor scale factor at which to draw
     * @param {number} left
     * @param {number} top
     * @param {number} width
     * @param {number} height
     */
  }, {
    key: "drawImageAtPosition",
    value: function(e, t, n, a, o, s) {
      if (this.initialized())
        if (t > 2) {
          t *= 0.5;
          for (var u = 0; t > 2 && u < this.NUM_ITERATIONS; )
            t *= 0.5, u += 1;
          u >= this.NUM_ITERATIONS && (u = this.NUM_ITERATIONS - 1);
          var l = this.coordinates[u];
          e.drawImage(this.canvas, l[0], l[1], l[2], l[3], n, a, o, s);
        } else
          e.drawImage(this.image, n, a, o, s);
    }
  }]), r;
})(), yT = /* @__PURE__ */ (function() {
  function r(i) {
    M(this, r), this.images = {}, this.imageBroken = {}, this.callback = i;
  }
  return N(r, [{
    key: "_tryloadBrokenUrl",
    value: function(e, t, n) {
      if (!(e === void 0 || n === void 0)) {
        if (t === void 0) {
          console.warn("No broken url image defined");
          return;
        }
        n.image.onerror = function() {
          console.error("Could not load brokenImage:", t);
        }, n.image.src = t;
      }
    }
    /**
     *
     * @param {vis.Image} imageToRedrawWith
     * @private
     */
  }, {
    key: "_redrawWithImage",
    value: function(e) {
      this.callback && this.callback(e);
    }
    /**
     * @param {string} url          Url of the image
     * @param {string} brokenUrl    Url of an image to use if the url image is not found
     * @returns {Image} img          The image object
     */
  }, {
    key: "load",
    value: function(e, t) {
      var n = this, a = this.images[e];
      if (a) return a;
      var o = new Roe();
      return this.images[e] = o, o.image.onload = function() {
        n._fixImageCoordinates(o.image), o.init(), n._redrawWithImage(o);
      }, o.image.onerror = function() {
        console.error("Could not load image:", e), n._tryloadBrokenUrl(e, t, o);
      }, o.image.src = e, o;
    }
    /**
     * IE11 fix -- thanks dponch!
     *
     * Local helper function
     *
     * @param {vis.Image} imageToCache
     * @private
     */
  }, {
    key: "_fixImageCoordinates",
    value: function(e) {
      e.width === 0 && (document.body.appendChild(e), e.width = e.offsetWidth, e.height = e.offsetHeight, document.body.removeChild(e));
    }
  }]), r;
})(), gT = { exports: {} }, Aoe = ge, Doe = Aoe(function() {
  if (typeof ArrayBuffer == "function") {
    var r = new ArrayBuffer(8);
    Object.isExtensible(r) && Object.defineProperty(r, "a", { value: 8 });
  }
}), Moe = ge, Noe = ft, Foe = Kr, R$ = Doe, lu = Object.isExtensible, Boe = Moe(function() {
  lu(1);
}), joe = Boe || R$ ? function(i) {
  return !Noe(i) || R$ && Foe(i) === "ArrayBuffer" ? !1 : lu ? lu(i) : !0;
} : lu, Loe = ge, mT = !Loe(function() {
  return Object.isExtensible(Object.preventExtensions({}));
}), zoe = oe, Woe = be, Hoe = Ko, Uoe = ft, Jv = ht, Voe = qt.f, A$ = Jo, Goe = Rl, Qv = joe, Koe = _l, qoe = mT, bT = !1, Ur = Koe("meta"), Yoe = 0, Zv = function(r) {
  Voe(r, Ur, { value: {
    objectID: "O" + Yoe++,
    // object ID
    weakData: {}
    // weak collections IDs
  } });
}, Xoe = function(r, i) {
  if (!Uoe(r)) return typeof r == "symbol" ? r : (typeof r == "string" ? "S" : "P") + r;
  if (!Jv(r, Ur)) {
    if (!Qv(r)) return "F";
    if (!i) return "E";
    Zv(r);
  }
  return r[Ur].objectID;
}, Joe = function(r, i) {
  if (!Jv(r, Ur)) {
    if (!Qv(r)) return !0;
    if (!i) return !1;
    Zv(r);
  }
  return r[Ur].weakData;
}, Qoe = function(r) {
  return qoe && bT && Qv(r) && !Jv(r, Ur) && Zv(r), r;
}, Zoe = function() {
  ese.enable = function() {
  }, bT = !0;
  var r = A$.f, i = Woe([].splice), e = {};
  e[Ur] = 1, r(e).length && (A$.f = function(t) {
    for (var n = r(t), a = 0, o = n.length; a < o; a++)
      if (n[a] === Ur) {
        i(n, a, 1);
        break;
      }
    return n;
  }, zoe({ target: "Object", stat: !0, forced: !0 }, {
    getOwnPropertyNames: Goe.f
  }));
}, ese = gT.exports = {
  enable: Zoe,
  fastKey: Xoe,
  getWeakData: Joe,
  onFreeze: Qoe
};
Hoe[Ur] = !0;
var Wl = gT.exports, tse = Vo, rse = Kt, nse = Yt, ise = ma, ase = gS, ose = ir, D$ = Je, sse = wS, use = Cl, M$ = yS, lse = TypeError, cu = function(r, i) {
  this.stopped = r, this.result = i;
}, N$ = cu.prototype, ep = function(r, i, e) {
  var t = e && e.that, n = !!(e && e.AS_ENTRIES), a = !!(e && e.IS_RECORD), o = !!(e && e.IS_ITERATOR), s = !!(e && e.INTERRUPTED), u = tse(i, t), l, c, d, f, h, v, p, y = function(b) {
    return l && M$(l, "normal", b), new cu(!0, b);
  }, m = function(b) {
    return n ? (nse(b), s ? u(b[0], b[1], y) : u(b[0], b[1])) : s ? u(b, y) : u(b);
  };
  if (a)
    l = r.iterator;
  else if (o)
    l = r;
  else {
    if (c = use(r), !c) throw new lse(ise(r) + " is not iterable");
    if (ase(c)) {
      for (d = 0, f = ose(r); f > d; d++)
        if (h = m(r[d]), h && D$(N$, h)) return h;
      return new cu(!1);
    }
    l = sse(r, c);
  }
  for (v = a ? r.next : l.next; !(p = rse(v, l)).done; ) {
    try {
      h = m(p.value);
    } catch (b) {
      M$(l, "throw", b);
    }
    if (typeof h == "object" && h && D$(N$, h)) return h;
  }
  return new cu(!1);
}, cse = Je, dse = TypeError, tp = function(r, i) {
  if (cse(i, r)) return r;
  throw new dse("Incorrect invocation");
}, fse = oe, hse = Ge, vse = Wl, pse = ge, yse = $a, gse = ep, mse = tp, bse = ct, $se = ft, _se = ya, wse = wa, Ese = qt.f, Sse = gn.forEach, Ose = dt, $T = ni, Tse = $T.set, Pse = $T.getterFor, rp = function(r, i, e) {
  var t = r.indexOf("Map") !== -1, n = r.indexOf("Weak") !== -1, a = t ? "set" : "add", o = hse[r], s = o && o.prototype, u = {}, l;
  if (!Ose || !bse(o) || !(n || s.forEach && !pse(function() {
    new o().entries().next();
  })))
    l = e.getConstructor(i, r, t, a), vse.enable();
  else {
    l = i(function(f, h) {
      Tse(mse(f, c), {
        type: r,
        collection: new o()
      }), _se(h) || gse(h, f[a], { that: f, AS_ENTRIES: t });
    });
    var c = l.prototype, d = Pse(r);
    Sse(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(f) {
      var h = f === "add" || f === "set";
      f in s && !(n && f === "clear") && yse(c, f, function(v, p) {
        var y = d(this).collection;
        if (!h && n && !$se(v)) return f === "get" ? void 0 : !1;
        var m = y[f](v === 0 ? 0 : v, p);
        return h ? this : m;
      });
    }), n || Ese(c, "size", {
      configurable: !0,
      get: function() {
        return d(this).collection.size;
      }
    });
  }
  return wse(l, r, !1, !0), u[r] = l, fse({ global: !0, forced: !0 }, u), n || e.setStrong(l, r, t), l;
}, Ise = Yo, np = function(r, i, e) {
  for (var t in i)
    e && e.unsafe && r[t] ? r[t] = i[t] : Ise(r, t, i[t], e);
  return r;
}, kse = nr, Cse = xv, xse = Ke, Rse = dt, F$ = xse("species"), Ase = function(r) {
  var i = kse(r);
  Rse && i && !i[F$] && Cse(i, F$, {
    configurable: !0,
    get: function() {
      return this;
    }
  });
}, Dse = _a, Mse = xv, B$ = np, Nse = Vo, Fse = tp, Bse = ya, jse = ep, Lse = Tv, Ws = Pv, zse = Ase, Da = dt, j$ = Wl.fastKey, _T = ni, L$ = _T.set, Qd = _T.getterFor, wT = {
  getConstructor: function(r, i, e, t) {
    var n = r(function(l, c) {
      Fse(l, a), L$(l, {
        type: i,
        index: Dse(null),
        first: void 0,
        last: void 0,
        size: 0
      }), Da || (l.size = 0), Bse(c) || jse(c, l[t], { that: l, AS_ENTRIES: e });
    }), a = n.prototype, o = Qd(i), s = function(l, c, d) {
      var f = o(l), h = u(l, c), v, p;
      return h ? h.value = d : (f.last = h = {
        index: p = j$(c, !0),
        key: c,
        value: d,
        previous: v = f.last,
        next: void 0,
        removed: !1
      }, f.first || (f.first = h), v && (v.next = h), Da ? f.size++ : l.size++, p !== "F" && (f.index[p] = h)), l;
    }, u = function(l, c) {
      var d = o(l), f = j$(c), h;
      if (f !== "F") return d.index[f];
      for (h = d.first; h; h = h.next)
        if (h.key === c) return h;
    };
    return B$(a, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function() {
        for (var c = this, d = o(c), f = d.index, h = d.first; h; )
          h.removed = !0, h.previous && (h.previous = h.previous.next = void 0), delete f[h.index], h = h.next;
        d.first = d.last = void 0, Da ? d.size = 0 : c.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      delete: function(l) {
        var c = this, d = o(c), f = u(c, l);
        if (f) {
          var h = f.next, v = f.previous;
          delete d.index[f.index], f.removed = !0, v && (v.next = h), h && (h.previous = v), d.first === f && (d.first = h), d.last === f && (d.last = v), Da ? d.size-- : c.size--;
        }
        return !!f;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function(c) {
        for (var d = o(this), f = Nse(c, arguments.length > 1 ? arguments[1] : void 0), h; h = h ? h.next : d.first; )
          for (f(h.value, h.key, this); h && h.removed; ) h = h.previous;
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function(c) {
        return !!u(this, c);
      }
    }), B$(a, e ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function(c) {
        var d = u(this, c);
        return d && d.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function(c, d) {
        return s(this, c === 0 ? 0 : c, d);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function(c) {
        return s(this, c = c === 0 ? 0 : c, c);
      }
    }), Da && Mse(a, "size", {
      configurable: !0,
      get: function() {
        return o(this).size;
      }
    }), n;
  },
  setStrong: function(r, i, e) {
    var t = i + " Iterator", n = Qd(i), a = Qd(t);
    Lse(r, i, function(o, s) {
      L$(this, {
        type: t,
        target: o,
        state: n(o),
        kind: s,
        last: void 0
      });
    }, function() {
      for (var o = a(this), s = o.kind, u = o.last; u && u.removed; ) u = u.previous;
      return !o.target || !(o.last = u = u ? u.next : o.state.first) ? (o.target = void 0, Ws(void 0, !0)) : Ws(s === "keys" ? u.key : s === "values" ? u.value : [u.key, u.value], !1);
    }, e ? "entries" : "values", !e, !0), zse(i);
  }
}, Wse = rp, Hse = wT;
Wse("Map", function(r) {
  return function() {
    return r(this, arguments.length ? arguments[0] : void 0);
  };
}, Hse);
var Use = me, Vse = Use.Map, Gse = Vse, Kse = Gse, qse = Kse, ET = /* @__PURE__ */ Y(qse), Yse = /* @__PURE__ */ (function() {
  function r() {
    M(this, r), this.clear(), this._defaultIndex = 0, this._groupIndex = 0, this._defaultGroups = [
      {
        border: "#2B7CE9",
        background: "#97C2FC",
        highlight: {
          border: "#2B7CE9",
          background: "#D2E5FF"
        },
        hover: {
          border: "#2B7CE9",
          background: "#D2E5FF"
        }
      },
      // 0: blue
      {
        border: "#FFA500",
        background: "#FFFF00",
        highlight: {
          border: "#FFA500",
          background: "#FFFFA3"
        },
        hover: {
          border: "#FFA500",
          background: "#FFFFA3"
        }
      },
      // 1: yellow
      {
        border: "#FA0A10",
        background: "#FB7E81",
        highlight: {
          border: "#FA0A10",
          background: "#FFAFB1"
        },
        hover: {
          border: "#FA0A10",
          background: "#FFAFB1"
        }
      },
      // 2: red
      {
        border: "#41A906",
        background: "#7BE141",
        highlight: {
          border: "#41A906",
          background: "#A1EC76"
        },
        hover: {
          border: "#41A906",
          background: "#A1EC76"
        }
      },
      // 3: green
      {
        border: "#E129F0",
        background: "#EB7DF4",
        highlight: {
          border: "#E129F0",
          background: "#F0B3F5"
        },
        hover: {
          border: "#E129F0",
          background: "#F0B3F5"
        }
      },
      // 4: magenta
      {
        border: "#7C29F0",
        background: "#AD85E4",
        highlight: {
          border: "#7C29F0",
          background: "#D3BDF0"
        },
        hover: {
          border: "#7C29F0",
          background: "#D3BDF0"
        }
      },
      // 5: purple
      {
        border: "#C37F00",
        background: "#FFA807",
        highlight: {
          border: "#C37F00",
          background: "#FFCA66"
        },
        hover: {
          border: "#C37F00",
          background: "#FFCA66"
        }
      },
      // 6: orange
      {
        border: "#4220FB",
        background: "#6E6EFD",
        highlight: {
          border: "#4220FB",
          background: "#9B9BFD"
        },
        hover: {
          border: "#4220FB",
          background: "#9B9BFD"
        }
      },
      // 7: darkblue
      {
        border: "#FD5A77",
        background: "#FFC0CB",
        highlight: {
          border: "#FD5A77",
          background: "#FFD1D9"
        },
        hover: {
          border: "#FD5A77",
          background: "#FFD1D9"
        }
      },
      // 8: pink
      {
        border: "#4AD63A",
        background: "#C2FABC",
        highlight: {
          border: "#4AD63A",
          background: "#E6FFE3"
        },
        hover: {
          border: "#4AD63A",
          background: "#E6FFE3"
        }
      },
      // 9: mint
      {
        border: "#990000",
        background: "#EE0000",
        highlight: {
          border: "#BB0000",
          background: "#FF3333"
        },
        hover: {
          border: "#BB0000",
          background: "#FF3333"
        }
      },
      // 10:bright red
      {
        border: "#FF6000",
        background: "#FF6000",
        highlight: {
          border: "#FF6000",
          background: "#FF6000"
        },
        hover: {
          border: "#FF6000",
          background: "#FF6000"
        }
      },
      // 12: real orange
      {
        border: "#97C2FC",
        background: "#2B7CE9",
        highlight: {
          border: "#D2E5FF",
          background: "#2B7CE9"
        },
        hover: {
          border: "#D2E5FF",
          background: "#2B7CE9"
        }
      },
      // 13: blue
      {
        border: "#399605",
        background: "#255C03",
        highlight: {
          border: "#399605",
          background: "#255C03"
        },
        hover: {
          border: "#399605",
          background: "#255C03"
        }
      },
      // 14: green
      {
        border: "#B70054",
        background: "#FF007E",
        highlight: {
          border: "#B70054",
          background: "#FF007E"
        },
        hover: {
          border: "#B70054",
          background: "#FF007E"
        }
      },
      // 15: magenta
      {
        border: "#AD85E4",
        background: "#7C29F0",
        highlight: {
          border: "#D3BDF0",
          background: "#7C29F0"
        },
        hover: {
          border: "#D3BDF0",
          background: "#7C29F0"
        }
      },
      // 16: purple
      {
        border: "#4557FA",
        background: "#000EA1",
        highlight: {
          border: "#6E6EFD",
          background: "#000EA1"
        },
        hover: {
          border: "#6E6EFD",
          background: "#000EA1"
        }
      },
      // 17: darkblue
      {
        border: "#FFC0CB",
        background: "#FD5A77",
        highlight: {
          border: "#FFD1D9",
          background: "#FD5A77"
        },
        hover: {
          border: "#FFD1D9",
          background: "#FD5A77"
        }
      },
      // 18: pink
      {
        border: "#C2FABC",
        background: "#74D66A",
        highlight: {
          border: "#E6FFE3",
          background: "#74D66A"
        },
        hover: {
          border: "#E6FFE3",
          background: "#74D66A"
        }
      },
      // 19: mint
      {
        border: "#EE0000",
        background: "#990000",
        highlight: {
          border: "#FF3333",
          background: "#BB0000"
        },
        hover: {
          border: "#FF3333",
          background: "#BB0000"
        }
      }
      // 20:bright red
    ], this.options = {}, this.defaultOptions = {
      useDefaultGroups: !0
    }, tt(this.options, this.defaultOptions);
  }
  return N(r, [{
    key: "setOptions",
    value: function(e) {
      var t = ["useDefaultGroups"];
      if (e !== void 0) {
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n) && ye(t).call(t, n) === -1) {
            var a = e[n];
            this.add(n, a);
          }
      }
    }
    /**
     * Clear all groups
     */
  }, {
    key: "clear",
    value: function() {
      this._groups = new ET(), this._groupNames = [];
    }
    /**
     * Get group options of a groupname.
     * If groupname is not found, a new group may be created.
     *
     * @param {*}       groupname     Can be a number, string, Date, etc.
     * @param {boolean} [shouldCreate=true] If true, create a new group
     * @returns {object} The found or created group
     */
  }, {
    key: "get",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = this._groups.get(e);
      if (n === void 0 && t)
        if (this.options.useDefaultGroups === !1 && this._groupNames.length > 0) {
          var a = this._groupIndex % this._groupNames.length;
          ++this._groupIndex, n = {}, n.color = this._groups.get(this._groupNames[a]), this._groups.set(e, n);
        } else {
          var o = this._defaultIndex % this._defaultGroups.length;
          this._defaultIndex++, n = {}, n.color = this._defaultGroups[o], this._groups.set(e, n);
        }
      return n;
    }
    /**
     * Add custom group style.
     *
     * @param {string} groupName - The name of the group, a new group will be
     * created if a group with the same name doesn't exist, otherwise the old
     * groups style will be overwritten.
     * @param {object} style - An object containing borderColor, backgroundColor,
     * etc.
     * @returns {object} The created group object.
     */
  }, {
    key: "add",
    value: function(e, t) {
      return this._groups.has(e) || this._groupNames.push(e), this._groups.set(e, t), t;
    }
  }]), r;
})(), Xse = oe;
Xse({ target: "Number", stat: !0 }, {
  isNaN: function(i) {
    return i !== i;
  }
});
var Jse = me, Qse = Jse.Number.isNaN, Zse = Qse, eue = Zse, tue = eue, wh = /* @__PURE__ */ Y(tue), rue = Ge, nue = rue.isFinite, iue = Number.isFinite || function(i) {
  return typeof i == "number" && nue(i);
}, aue = oe, oue = iue;
aue({ target: "Number", stat: !0 }, { isFinite: oue });
var sue = me, uue = sue.Number.isFinite, lue = uue, cue = lue, due = cue, Pn = /* @__PURE__ */ Y(due), fue = oe, hue = gn.some, vue = Oa, pue = vue("some");
fue({ target: "Array", proto: !0, forced: !pue }, {
  some: function(i) {
    return hue(this, i, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var yue = vt, gue = yue("Array").some, mue = Je, bue = gue, Zd = Array.prototype, $ue = function(r) {
  var i = r.some;
  return r === Zd || mue(Zd, r) && i === Zd.some ? bue : i;
}, _ue = $ue, wue = _ue, Eue = wue, Sue = /* @__PURE__ */ Y(Eue), Oue = me, Tue = Oue.Object.getOwnPropertySymbols, Pue = Tue, Iue = Pue, kue = Iue, dn = /* @__PURE__ */ Y(kue), ST = { exports: {} }, Cue = oe, xue = ge, Rue = Pr, OT = pa.f, TT = dt, Aue = !TT || xue(function() {
  OT(1);
});
Cue({ target: "Object", stat: !0, forced: Aue, sham: !TT }, {
  getOwnPropertyDescriptor: function(i, e) {
    return OT(Rue(i), e);
  }
});
var Due = me, PT = Due.Object, Mue = ST.exports = function(i, e) {
  return PT.getOwnPropertyDescriptor(i, e);
};
PT.getOwnPropertyDescriptor.sham && (Mue.sham = !0);
var Nue = ST.exports, Fue = Nue, IT = Fue, Bue = IT, bn = /* @__PURE__ */ Y(Bue), jue = oe, Lue = dt, zue = ite, Wue = Pr, Hue = pa, Uue = Sa;
jue({ target: "Object", stat: !0, sham: !Lue }, {
  getOwnPropertyDescriptors: function(i) {
    for (var e = Wue(i), t = Hue.f, n = zue(e), a = {}, o = 0, s, u; n.length > o; )
      u = t(e, s = n[o++]), u !== void 0 && Uue(a, s, u);
    return a;
  }
});
var Vue = me, Gue = Vue.Object.getOwnPropertyDescriptors, Kue = Gue, que = Kue, Yue = que, fn = /* @__PURE__ */ Y(Yue), kT = { exports: {} }, Xue = oe, Jue = dt, z$ = Pl.f;
Xue({ target: "Object", stat: !0, forced: Object.defineProperties !== z$, sham: !Jue }, {
  defineProperties: z$
});
var Que = me, CT = Que.Object, Zue = kT.exports = function(i, e) {
  return CT.defineProperties(i, e);
};
CT.defineProperties.sham && (Zue.sham = !0);
var ele = kT.exports, tle = ele, rle = tle, nle = rle, Hl = /* @__PURE__ */ Y(nle), ile = RS, Ul = /* @__PURE__ */ Y(ile);
function Vl(r, i, e) {
  return i = dO(i), i in r ? xl(r, i, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[i] = e, r;
}
var xT = Ge, ale = ge, ole = be, sle = Ir, ule = EO.trim, lle = Bv, cle = ole("".charAt), Lu = xT.parseFloat, W$ = xT.Symbol, H$ = W$ && W$.iterator, dle = 1 / Lu(lle + "-0") !== -1 / 0 || H$ && !ale(function() {
  Lu(Object(H$));
}), fle = dle ? function(i) {
  var e = ule(sle(i)), t = Lu(e);
  return t === 0 && cle(e, 0) === "-" ? -0 : t;
} : Lu, hle = oe, U$ = fle;
hle({ global: !0, forced: parseFloat !== U$ }, {
  parseFloat: U$
});
var vle = me, ple = vle.parseFloat, yle = ple, gle = yle, mle = gle, RT = /* @__PURE__ */ Y(mle), ble = oe, $le = ge, _le = Rl.f, wle = $le(function() {
  return !Object.getOwnPropertyNames(1);
});
ble({ target: "Object", stat: !0, forced: wle }, {
  getOwnPropertyNames: _le
});
var Ele = me, Sle = Ele.Object, Ole = function(i) {
  return Sle.getOwnPropertyNames(i);
}, Tle = Ole, Ple = Tle, Ile = Ple, kle = /* @__PURE__ */ Y(Ile);
function ip(r, i) {
  var e = ["node", "edge", "label"], t = !0, n = Jr(i, "chosen");
  if (typeof n == "boolean")
    t = n;
  else if (Ie(n) === "object") {
    if (ye(e).call(e, r) === -1)
      throw new Error("choosify: subOption '" + r + "' should be one of '" + e.join("', '") + "'");
    var a = Jr(i, ["chosen", r]);
    (typeof a == "boolean" || typeof a == "function") && (t = a);
  }
  return t;
}
function Eh(r, i, e) {
  if (r.width <= 0 || r.height <= 0)
    return !1;
  if (e !== void 0) {
    var t = {
      x: i.x - e.x,
      y: i.y - e.y
    };
    if (e.angle !== 0) {
      var n = -e.angle, a = {
        x: Math.cos(n) * t.x - Math.sin(n) * t.y,
        y: Math.sin(n) * t.x + Math.cos(n) * t.y
      };
      i = a;
    } else
      i = t;
  }
  var o = r.x + r.width, s = r.y + r.width;
  return r.left < i.x && o > i.x && r.top < i.y && s > i.y;
}
function zu(r) {
  return typeof r == "string" && r !== "";
}
function AT(r, i, e, t) {
  var n = t.x, a = t.y;
  if (typeof t.distanceToBorder == "function") {
    var o = t.distanceToBorder(r, i), s = Math.sin(i) * o, u = Math.cos(i) * o;
    u === o ? (n += o, a = t.y) : s === o ? (n = t.x, a -= o) : (n += u, a -= s);
  } else t.shape.width > t.shape.height ? (n = t.x + t.shape.width * 0.5, a = t.y - e) : (n = t.x + e, a = t.y - t.shape.height * 0.5);
  return {
    x: n,
    y: a
  };
}
var Cle = vt, xle = Cle("Array").values, Rle = xle, Ale = Rle, Dle = ri, Mle = ht, Nle = Je, Fle = Ale, ef = Array.prototype, Ble = {
  DOMTokenList: !0,
  NodeList: !0
}, jle = function(r) {
  var i = r.values;
  return r === ef || Nle(ef, r) && i === ef.values || Mle(Ble, Dle(r)) ? Fle : i;
}, Lle = jle, DT = /* @__PURE__ */ Y(Lle), zle = /* @__PURE__ */ (function() {
  function r(i) {
    M(this, r), this.measureText = i, this.current = 0, this.width = 0, this.height = 0, this.lines = [];
  }
  return N(r, [{
    key: "_add",
    value: function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "normal";
      this.lines[e] === void 0 && (this.lines[e] = {
        width: 0,
        height: 0,
        blocks: []
      });
      var a = t;
      (t === void 0 || t === "") && (a = " ");
      var o = this.measureText(a, n), s = tt({}, DT(o));
      s.text = t, s.width = o.width, s.mod = n, (t === void 0 || t === "") && (s.width = 0), this.lines[e].blocks.push(s), this.lines[e].width += s.width;
    }
    /**
     * Returns the width in pixels of the current line.
     *
     * @returns {number}
     */
  }, {
    key: "curWidth",
    value: function() {
      var e = this.lines[this.current];
      return e === void 0 ? 0 : e.width;
    }
    /**
     * Add text in block to current line
     *
     * @param {string} text
     * @param {'bold'|'ital'|'boldital'|'mono'|'normal'} [mod='normal']
     */
  }, {
    key: "append",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "normal";
      this._add(this.current, e, t);
    }
    /**
     * Add text in block to current line and start a new line
     *
     * @param {string} text
     * @param {'bold'|'ital'|'boldital'|'mono'|'normal'} [mod='normal']
     */
  }, {
    key: "newLine",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "normal";
      this._add(this.current, e, t), this.current++;
    }
    /**
     * Determine and set the heights of all the lines currently contained in this instance
     *
     * Note that width has already been set.
     *
     * @private
     */
  }, {
    key: "determineLineHeights",
    value: function() {
      for (var e = 0; e < this.lines.length; e++) {
        var t = this.lines[e], n = 0;
        if (t.blocks !== void 0)
          for (var a = 0; a < t.blocks.length; a++) {
            var o = t.blocks[a];
            n < o.height && (n = o.height);
          }
        t.height = n;
      }
    }
    /**
     * Determine the full size of the label text, as determined by current lines and blocks
     *
     * @private
     */
  }, {
    key: "determineLabelSize",
    value: function() {
      for (var e = 0, t = 0, n = 0; n < this.lines.length; n++) {
        var a = this.lines[n];
        a.width > e && (e = a.width), t += a.height;
      }
      this.width = e, this.height = t;
    }
    /**
     * Remove all empty blocks and empty lines we don't need
     *
     * This must be done after the width/height determination,
     * so that these are set properly for processing here.
     *
     * @returns {Array<Line>} Lines with empty blocks (and some empty lines) removed
     * @private
     */
  }, {
    key: "removeEmptyBlocks",
    value: function() {
      for (var e = [], t = 0; t < this.lines.length; t++) {
        var n = this.lines[t];
        if (n.blocks.length !== 0 && !(t === this.lines.length - 1 && n.width === 0)) {
          var a = {};
          tt(a, n), a.blocks = [];
          for (var o = void 0, s = [], u = 0; u < n.blocks.length; u++) {
            var l = n.blocks[u];
            l.width !== 0 ? s.push(l) : o === void 0 && (o = l);
          }
          s.length === 0 && o !== void 0 && s.push(o), a.blocks = s, e.push(a);
        }
      }
      return e;
    }
    /**
     * Set the sizes for all lines and the whole thing.
     *
     * @returns {{width: (number|*), height: (number|*), lines: Array}}
     */
  }, {
    key: "finalize",
    value: function() {
      this.determineLineHeights(), this.determineLabelSize();
      var e = this.removeEmptyBlocks();
      return {
        width: this.width,
        height: this.height,
        lines: e
      };
    }
  }]), r;
})(), Wle = {
  // HTML
  "<b>": /<b>/,
  "<i>": /<i>/,
  "<code>": /<code>/,
  "</b>": /<\/b>/,
  "</i>": /<\/i>/,
  "</code>": /<\/code>/,
  // Markdown
  "*": /\*/,
  // bold
  _: /_/,
  // ital
  "`": /`/,
  // mono
  afterBold: /[^*]/,
  afterItal: /[^_]/,
  afterMono: /[^`]/
}, V$ = /* @__PURE__ */ (function() {
  function r(i) {
    M(this, r), this.text = i, this.bold = !1, this.ital = !1, this.mono = !1, this.spacing = !1, this.position = 0, this.buffer = "", this.modStack = [], this.blocks = [];
  }
  return N(r, [{
    key: "mod",
    value: function() {
      return this.modStack.length === 0 ? "normal" : this.modStack[0];
    }
    /**
     * Return the mod label currently active
     *
     * @returns {string}  label of active mod
     * @private
     */
  }, {
    key: "modName",
    value: function() {
      if (this.modStack.length === 0) return "normal";
      if (this.modStack[0] === "mono") return "mono";
      if (this.bold && this.ital)
        return "boldital";
      if (this.bold)
        return "bold";
      if (this.ital)
        return "ital";
    }
    /**
     * @private
     */
  }, {
    key: "emitBlock",
    value: function() {
      this.spacing && (this.add(" "), this.spacing = !1), this.buffer.length > 0 && (this.blocks.push({
        text: this.buffer,
        mod: this.modName()
      }), this.buffer = "");
    }
    /**
     * Output text to buffer
     *
     * @param {string} text  text to add
     * @private
     */
  }, {
    key: "add",
    value: function(e) {
      e === " " && (this.spacing = !0), this.spacing && (this.buffer += " ", this.spacing = !1), e != " " && (this.buffer += e);
    }
    /**
     * Handle parsing of whitespace
     *
     * @param {string} ch  the character to check
     * @returns {boolean} true if the character was processed as whitespace, false otherwise
     */
  }, {
    key: "parseWS",
    value: function(e) {
      return /[ \t]/.test(e) ? (this.mono ? this.add(e) : this.spacing = !0, !0) : !1;
    }
    /**
     * @param {string} tagName  label for block type to set
     * @private
     */
  }, {
    key: "setTag",
    value: function(e) {
      this.emitBlock(), this[e] = !0, this.modStack.unshift(e);
    }
    /**
     * @param {string} tagName  label for block type to unset
     * @private
     */
  }, {
    key: "unsetTag",
    value: function(e) {
      this.emitBlock(), this[e] = !1, this.modStack.shift();
    }
    /**
     * @param {string} tagName label for block type we are currently processing
     * @param {string|RegExp} tag string to match in text
     * @returns {boolean} true if the tag was processed, false otherwise
     */
  }, {
    key: "parseStartTag",
    value: function(e, t) {
      return !this.mono && !this[e] && this.match(t) ? (this.setTag(e), !0) : !1;
    }
    /**
     * @param {string|RegExp} tag
     * @param {number} [advance=true] if set, advance current position in text
     * @returns {boolean} true if match at given position, false otherwise
     * @private
     */
  }, {
    key: "match",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = this.prepareRegExp(e), a = He(n, 2), o = a[0], s = a[1], u = o.test(this.text.substr(this.position, s));
      return u && t && (this.position += s - 1), u;
    }
    /**
     * @param {string} tagName label for block type we are currently processing
     * @param {string|RegExp} tag string to match in text
     * @param {RegExp} [nextTag] regular expression to match for characters *following* the current tag
     * @returns {boolean} true if the tag was processed, false otherwise
     */
  }, {
    key: "parseEndTag",
    value: function(e, t, n) {
      var a = this.mod() === e;
      return e === "mono" ? a = a && this.mono : a = a && !this.mono, a && this.match(t) ? (n !== void 0 ? (this.position === this.text.length - 1 || this.match(n, !1)) && this.unsetTag(e) : this.unsetTag(e), !0) : !1;
    }
    /**
     * @param {string|RegExp} tag  string to match in text
     * @param {value} value  string to replace tag with, if found at current position
     * @returns {boolean} true if the tag was processed, false otherwise
     */
  }, {
    key: "replace",
    value: function(e, t) {
      return this.match(e) ? (this.add(t), this.position += length - 1, !0) : !1;
    }
    /**
     * Create a regular expression for the tag if it isn't already one.
     *
     * The return value is an array `[RegExp, number]`, with exactly two value, where:
     *  - RegExp is the regular expression to use
     *  - number is the lenth of the input string to match
     *
     * @param {string|RegExp} tag  string to match in text
     * @returns {Array}  regular expression to use and length of input string to match
     * @private
     */
  }, {
    key: "prepareRegExp",
    value: function(e) {
      var t, n;
      if (e instanceof RegExp)
        n = e, t = 1;
      else {
        var a = Wle[e];
        a !== void 0 ? n = a : n = new RegExp(e), t = e.length;
      }
      return [n, t];
    }
  }]), r;
})(), Hle = /* @__PURE__ */ (function() {
  function r(i, e, t, n) {
    var a = this;
    M(this, r), this.ctx = i, this.parent = e, this.selected = t, this.hover = n;
    var o = function(u, l) {
      if (u === void 0) return 0;
      var c = a.parent.getFormattingValues(i, t, n, l), d = 0;
      if (u !== "") {
        var f = a.ctx.measureText(u);
        d = f.width;
      }
      return {
        width: d,
        values: c
      };
    };
    this.lines = new zle(o);
  }
  return N(r, [{
    key: "process",
    value: function(e) {
      if (!zu(e))
        return this.lines.finalize();
      var t = this.parent.fontOptions;
      e = e.replace(/\r\n/g, `
`), e = e.replace(/\r/g, `
`);
      var n = String(e).split(`
`), a = n.length;
      if (t.multi)
        for (var o = 0; o < a; o++) {
          var s = this.splitBlocks(n[o], t.multi);
          if (s !== void 0) {
            if (s.length === 0) {
              this.lines.newLine("");
              continue;
            }
            if (t.maxWdt > 0)
              for (var u = 0; u < s.length; u++) {
                var l = s[u].mod, c = s[u].text;
                this.splitStringIntoLines(c, l, !0);
              }
            else
              for (var d = 0; d < s.length; d++) {
                var f = s[d].mod, h = s[d].text;
                this.lines.append(h, f);
              }
            this.lines.newLine();
          }
        }
      else if (t.maxWdt > 0)
        for (var v = 0; v < a; v++)
          this.splitStringIntoLines(n[v]);
      else
        for (var p = 0; p < a; p++)
          this.lines.newLine(n[p]);
      return this.lines.finalize();
    }
    /**
     * normalize the markup system
     *
     * @param {boolean|'md'|'markdown'|'html'} markupSystem
     * @returns {string}
     */
  }, {
    key: "decodeMarkupSystem",
    value: function(e) {
      var t = "none";
      return e === "markdown" || e === "md" ? t = "markdown" : (e === !0 || e === "html") && (t = "html"), t;
    }
    /**
     *
     * @param {string} text
     * @returns {Array}
     */
  }, {
    key: "splitHtmlBlocks",
    value: function(e) {
      for (var t = new V$(e), n = function(u) {
        if (/&/.test(u)) {
          var l = t.replace(t.text, "&lt;", "<") || t.replace(t.text, "&amp;", "&");
          return l || t.add("&"), !0;
        }
        return !1;
      }; t.position < t.text.length; ) {
        var a = t.text.charAt(t.position), o = t.parseWS(a) || /</.test(a) && (t.parseStartTag("bold", "<b>") || t.parseStartTag("ital", "<i>") || t.parseStartTag("mono", "<code>") || t.parseEndTag("bold", "</b>") || t.parseEndTag("ital", "</i>") || t.parseEndTag("mono", "</code>")) || n(a);
        o || t.add(a), t.position++;
      }
      return t.emitBlock(), t.blocks;
    }
    /**
     *
     * @param {string} text
     * @returns {Array}
     */
  }, {
    key: "splitMarkdownBlocks",
    value: function(e) {
      for (var t = this, n = new V$(e), a = !0, o = function(c) {
        return /\\/.test(c) ? (n.position < t.text.length + 1 && (n.position++, c = t.text.charAt(n.position), / \t/.test(c) ? n.spacing = !0 : (n.add(c), a = !1)), !0) : !1;
      }; n.position < n.text.length; ) {
        var s = n.text.charAt(n.position), u = n.parseWS(s) || o(s) || (a || n.spacing) && (n.parseStartTag("bold", "*") || n.parseStartTag("ital", "_") || n.parseStartTag("mono", "`")) || n.parseEndTag("bold", "*", "afterBold") || n.parseEndTag("ital", "_", "afterItal") || n.parseEndTag("mono", "`", "afterMono");
        u || (n.add(s), a = !1), n.position++;
      }
      return n.emitBlock(), n.blocks;
    }
    /**
     * Explodes a piece of text into single-font blocks using a given markup
     *
     * @param {string} text
     * @param {boolean|'md'|'markdown'|'html'} markupSystem
     * @returns {Array.<{text: string, mod: string}>}
     * @private
     */
  }, {
    key: "splitBlocks",
    value: function(e, t) {
      var n = this.decodeMarkupSystem(t);
      if (n === "none")
        return [{
          text: e,
          mod: "normal"
        }];
      if (n === "markdown")
        return this.splitMarkdownBlocks(e);
      if (n === "html")
        return this.splitHtmlBlocks(e);
    }
    /**
     * @param {string} text
     * @returns {boolean} true if text length over the current max with
     * @private
     */
  }, {
    key: "overMaxWidth",
    value: function(e) {
      var t = this.ctx.measureText(e).width;
      return this.lines.curWidth() + t > this.parent.fontOptions.maxWdt;
    }
    /**
     * Determine the longest part of the sentence which still fits in the
     * current max width.
     *
     * @param {Array} words  Array of strings signifying a text lines
     * @returns {number}      index of first item in string making string go over max
     * @private
     */
  }, {
    key: "getLongestFit",
    value: function(e) {
      for (var t = "", n = 0; n < e.length; ) {
        var a = t === "" ? "" : " ", o = t + a + e[n];
        if (this.overMaxWidth(o)) break;
        t = o, n++;
      }
      return n;
    }
    /**
     * Determine the longest part of the string which still fits in the
     * current max width.
     *
     * @param {Array} words Array of strings signifying a text lines
     * @returns {number} index of first item in string making string go over max
     */
  }, {
    key: "getLongestFitWord",
    value: function(e) {
      for (var t = 0; t < e.length && !this.overMaxWidth(mt(e).call(e, 0, t)); )
        t++;
      return t;
    }
    /**
     * Split the passed text into lines, according to width constraint (if any).
     *
     * The method assumes that the input string is a single line, i.e. without lines break.
     *
     * This method retains spaces, if still present (case `font.multi: false`).
     * A space which falls on an internal line break, will be replaced by a newline.
     * There is no special handling of tabs; these go along with the flow.
     *
     * @param {string} str
     * @param {string} [mod='normal']
     * @param {boolean} [appendLast=false]
     * @private
     */
  }, {
    key: "splitStringIntoLines",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "normal", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      this.parent.getFormattingValues(this.ctx, this.selected, this.hover, t), e = e.replace(/^( +)/g, "$1\r"), e = e.replace(/([^\r][^ ]*)( +)/g, "$1\r$2\r");
      for (var a = e.split("\r"); a.length > 0; ) {
        var o = this.getLongestFit(a);
        if (o === 0) {
          var s = a[0], u = this.getLongestFitWord(s);
          this.lines.newLine(mt(s).call(s, 0, u), t), a[0] = mt(s).call(s, u);
        } else {
          var l = o;
          a[o - 1] === " " ? o-- : a[l] === " " && l++;
          var c = mt(a).call(a, 0, o).join("");
          o == a.length && n ? this.lines.append(c, t) : this.lines.newLine(c, t), a = mt(a).call(a, l);
        }
      }
    }
  }]), r;
})(), Ma = ["bold", "ital", "boldital", "mono"], MT = /* @__PURE__ */ (function() {
  function r(i, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    M(this, r), this.body = i, this.pointToSelf = !1, this.baseSize = void 0, this.fontOptions = {}, this.setOptions(e), this.size = {
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      yLine: 0
    }, this.isEdgeLabel = t;
  }
  return N(r, [{
    key: "setOptions",
    value: function(e) {
      if (this.elementOptions = e, this.initFontOptions(e.font), zu(e.label) ? this.labelDirty = !0 : e.label = void 0, e.font !== void 0 && e.font !== null) {
        if (typeof e.font == "string")
          this.baseSize = this.fontOptions.size;
        else if (Ie(e.font) === "object") {
          var t = e.font.size;
          t !== void 0 && (this.baseSize = t);
        }
      }
    }
    /**
     * Init the font Options structure.
     *
     * Member fontOptions serves as an accumulator for the current font options.
     * As such, it needs to be completely separated from the node options.
     *
     * @param {object} newFontOptions the new font options to process
     * @private
     */
  }, {
    key: "initFontOptions",
    value: function(e) {
      var t = this;
      if (fe(Ma, function(n) {
        t.fontOptions[n] = {};
      }), r.parseFontString(this.fontOptions, e)) {
        this.fontOptions.vadjust = 0;
        return;
      }
      fe(e, function(n, a) {
        n != null && Ie(n) !== "object" && (t.fontOptions[a] = n);
      });
    }
    /**
     * If in-variable is a string, parse it as a font specifier.
     *
     * Note that following is not done here and have to be done after the call:
     * - Not all font options are set (vadjust, mod)
     *
     * @param {object} outOptions  out-parameter, object in which to store the parse results (if any)
     * @param {object} inOptions  font options to parse
     * @returns {boolean} true if font parsed as string, false otherwise
     * @static
     */
  }, {
    key: "constrain",
    value: (
      /**
       * Set the width and height constraints based on 'nearest' value
       *
       * @param {Array} pile array of option objects to consider
       * @returns {object} the actual constraint values to use
       * @private
       */
      function(e) {
        var t = {
          constrainWidth: !1,
          maxWdt: -1,
          minWdt: -1,
          constrainHeight: !1,
          minHgt: -1,
          valign: "middle"
        }, n = Jr(e, "widthConstraint");
        if (typeof n == "number")
          t.maxWdt = Number(n), t.minWdt = Number(n);
        else if (Ie(n) === "object") {
          var a = Jr(e, ["widthConstraint", "maximum"]);
          typeof a == "number" && (t.maxWdt = Number(a));
          var o = Jr(e, ["widthConstraint", "minimum"]);
          typeof o == "number" && (t.minWdt = Number(o));
        }
        var s = Jr(e, "heightConstraint");
        if (typeof s == "number")
          t.minHgt = Number(s);
        else if (Ie(s) === "object") {
          var u = Jr(e, ["heightConstraint", "minimum"]);
          typeof u == "number" && (t.minHgt = Number(u));
          var l = Jr(e, ["heightConstraint", "valign"]);
          typeof l == "string" && (l === "top" || l === "bottom") && (t.valign = l);
        }
        return t;
      }
    )
    /**
     * Set options and update internal state
     *
     * @param {object} options  options to set
     * @param {Array}  pile     array of option objects to consider for option 'chosen'
     */
  }, {
    key: "update",
    value: function(e, t) {
      this.setOptions(e, !0), this.propagateFonts(t), Ae(this.fontOptions, this.constrain(t)), this.fontOptions.chooser = ip("label", t);
    }
    /**
     * When margins are set in an element, adjust sizes is called to remove them
     * from the width/height constraints. This must be done prior to label sizing.
     *
     * @param {{top: number, right: number, bottom: number, left: number}} margins
     */
  }, {
    key: "adjustSizes",
    value: function(e) {
      var t = e ? e.right + e.left : 0;
      this.fontOptions.constrainWidth && (this.fontOptions.maxWdt -= t, this.fontOptions.minWdt -= t);
      var n = e ? e.top + e.bottom : 0;
      this.fontOptions.constrainHeight && (this.fontOptions.minHgt -= n);
    }
    /////////////////////////////////////////////////////////
    // Methods for handling options piles
    // Eventually, these will be moved to a separate class
    /////////////////////////////////////////////////////////
    /**
     * Add the font members of the passed list of option objects to the pile.
     *
     * @param {Pile} dstPile  pile of option objects add to
     * @param {Pile} srcPile  pile of option objects to take font options from
     * @private
     */
  }, {
    key: "addFontOptionsToPile",
    value: function(e, t) {
      for (var n = 0; n < t.length; ++n)
        this.addFontToPile(e, t[n]);
    }
    /**
     * Add given font option object to the list of objects (the 'pile') to consider for determining
     * multi-font option values.
     *
     * @param {Pile} pile  pile of option objects to use
     * @param {object} options  instance to add to pile
     * @private
     */
  }, {
    key: "addFontToPile",
    value: function(e, t) {
      if (t !== void 0 && !(t.font === void 0 || t.font === null)) {
        var n = t.font;
        e.push(n);
      }
    }
    /**
     * Collect all own-property values from the font pile that aren't multi-font option objectss.
     *
     * @param {Pile} pile  pile of option objects to use
     * @returns {object} object with all current own basic font properties
     * @private
     */
  }, {
    key: "getBasicOptions",
    value: function(e) {
      for (var t = {}, n = 0; n < e.length; ++n) {
        var a = e[n], o = {};
        r.parseFontString(o, a) && (a = o), fe(a, function(s, u) {
          s !== void 0 && (Object.prototype.hasOwnProperty.call(t, u) || (ye(Ma).call(Ma, u) !== -1 ? t[u] = {} : t[u] = s));
        });
      }
      return t;
    }
    /**
     * Return the value for given option for the given multi-font.
     *
     * All available option objects are trawled in the set order to construct the option values.
     *
     * ---------------------------------------------------------------------
     * ## Traversal of pile for multi-fonts
     *
     * The determination of multi-font option values is a special case, because any values not
     * present in the multi-font options should by definition be taken from the main font options,
     * i.e. from the current 'parent' object of the multi-font option.
     *
     * ### Search order for multi-fonts
     *
     * 'bold' used as example:
     *
     *   - search in option group 'bold' in local properties
     *   - search in main font option group in local properties
     *
     * ---------------------------------------------------------------------
     *
     * @param {Pile} pile  pile of option objects to use
     * @param {MultiFontStyle} multiName sub path for the multi-font
     * @param {string} option  the option to search for, for the given multi-font
     * @returns {string|number} the value for the given option
     * @private
     */
  }, {
    key: "getFontOption",
    value: function(e, t, n) {
      for (var a, o = 0; o < e.length; ++o) {
        var s = e[o];
        if (Object.prototype.hasOwnProperty.call(s, t)) {
          if (a = s[t], a == null) continue;
          var u = {};
          if (r.parseFontString(u, a) && (a = u), Object.prototype.hasOwnProperty.call(a, n))
            return a[n];
        }
      }
      if (Object.prototype.hasOwnProperty.call(this.fontOptions, n))
        return this.fontOptions[n];
      throw new Error("Did not find value for multi-font for property: '" + n + "'");
    }
    /**
     * Return all options values for the given multi-font.
     *
     * All available option objects are trawled in the set order to construct the option values.
     *
     * @param {Pile} pile  pile of option objects to use
     * @param {MultiFontStyle} multiName sub path for the mod-font
     * @returns {MultiFontOptions}
     * @private
     */
  }, {
    key: "getFontOptions",
    value: function(e, t) {
      for (var n = {}, a = ["color", "size", "face", "mod", "vadjust"], o = 0; o < a.length; ++o) {
        var s = a[o];
        n[s] = this.getFontOption(e, t, s);
      }
      return n;
    }
    /////////////////////////////////////////////////////////
    // End methods for handling options piles
    /////////////////////////////////////////////////////////
    /**
     * Collapse the font options for the multi-font to single objects, from
     * the chain of option objects passed (the 'pile').
     *
     * @param {Pile} pile  sequence of option objects to consider.
     *                     First item in list assumed to be the newly set options.
     */
  }, {
    key: "propagateFonts",
    value: function(e) {
      var t = this, n = [];
      this.addFontOptionsToPile(n, e), this.fontOptions = this.getBasicOptions(n);
      for (var a = function() {
        var u = Ma[o], l = t.fontOptions[u], c = t.getFontOptions(n, u);
        fe(c, function(d, f) {
          l[f] = d;
        }), l.size = Number(l.size), l.vadjust = Number(l.vadjust);
      }, o = 0; o < Ma.length; ++o)
        a();
    }
    /**
     * Main function. This is called from anything that wants to draw a label.
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} x
     * @param {number} y
     * @param {boolean} selected
     * @param {boolean} hover
     * @param {string} [baseline='middle']
     */
  }, {
    key: "draw",
    value: function(e, t, n, a, o) {
      var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "middle";
      if (this.elementOptions.label !== void 0) {
        var u = this.fontOptions.size * this.body.view.scale;
        this.elementOptions.label && u < this.elementOptions.scaling.label.drawThreshold - 1 || (u >= this.elementOptions.scaling.label.maxVisible && (u = Number(this.elementOptions.scaling.label.maxVisible) / this.body.view.scale), this.calculateLabelSize(e, a, o, t, n, s), this._drawBackground(e), this._drawText(e, t, this.size.yLine, s, u));
      }
    }
    /**
     * Draws the label background
     *
     * @param {CanvasRenderingContext2D} ctx
     * @private
     */
  }, {
    key: "_drawBackground",
    value: function(e) {
      if (this.fontOptions.background !== void 0 && this.fontOptions.background !== "none") {
        e.fillStyle = this.fontOptions.background;
        var t = this.getSize();
        e.fillRect(t.left, t.top, t.width, t.height);
      }
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} x
     * @param {number} y
     * @param {string} [baseline='middle']
     * @param {number} viewFontSize
     * @private
     */
  }, {
    key: "_drawText",
    value: function(e, t, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "middle", o = arguments.length > 4 ? arguments[4] : void 0, s = this._setAlignment(e, t, n, a), u = He(s, 2);
      t = u[0], n = u[1], e.textAlign = "left", t = t - this.size.width / 2, this.fontOptions.valign && this.size.height > this.size.labelHeight && (this.fontOptions.valign === "top" && (n -= (this.size.height - this.size.labelHeight) / 2), this.fontOptions.valign === "bottom" && (n += (this.size.height - this.size.labelHeight) / 2));
      for (var l = 0; l < this.lineCount; l++) {
        var c = this.lines[l];
        if (c && c.blocks) {
          var d = 0;
          this.isEdgeLabel || this.fontOptions.align === "center" ? d += (this.size.width - c.width) / 2 : this.fontOptions.align === "right" && (d += this.size.width - c.width);
          for (var f = 0; f < c.blocks.length; f++) {
            var h = c.blocks[f];
            e.font = h.font;
            var v = this._getColor(h.color, o, h.strokeColor), p = He(v, 2), y = p[0], m = p[1];
            h.strokeWidth > 0 && (e.lineWidth = h.strokeWidth, e.strokeStyle = m, e.lineJoin = "round"), e.fillStyle = y, h.strokeWidth > 0 && e.strokeText(h.text, t + d, n + h.vadjust), e.fillText(h.text, t + d, n + h.vadjust), d += h.width;
          }
          n += c.height;
        }
      }
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} x
     * @param {number} y
     * @param {string} baseline
     * @returns {Array.<number>}
     * @private
     */
  }, {
    key: "_setAlignment",
    value: function(e, t, n, a) {
      if (this.isEdgeLabel && this.fontOptions.align !== "horizontal" && this.pointToSelf === !1) {
        t = 0, n = 0;
        var o = 2;
        this.fontOptions.align === "top" ? (e.textBaseline = "alphabetic", n -= 2 * o) : this.fontOptions.align === "bottom" ? (e.textBaseline = "hanging", n += 2 * o) : e.textBaseline = "middle";
      } else
        e.textBaseline = a;
      return [t, n];
    }
    /**
     * fade in when relative scale is between threshold and threshold - 1.
     * If the relative scale would be smaller than threshold -1 the draw function would have returned before coming here.
     *
     * @param {string} color  The font color to use
     * @param {number} viewFontSize
     * @param {string} initialStrokeColor
     * @returns {Array.<string>} An array containing the font color and stroke color
     * @private
     */
  }, {
    key: "_getColor",
    value: function(e, t, n) {
      var a = e || "#000000", o = n || "#ffffff";
      if (t <= this.elementOptions.scaling.label.drawThreshold) {
        var s = Math.max(0, Math.min(1, 1 - (this.elementOptions.scaling.label.drawThreshold - t)));
        a = Zt(a, s), o = Zt(o, s);
      }
      return [a, o];
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {boolean} selected
     * @param {boolean} hover
     * @returns {{width: number, height: number}}
     */
  }, {
    key: "getTextSize",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      return this._processLabel(e, t, n), {
        width: this.size.width,
        height: this.size.height,
        lineCount: this.lineCount
      };
    }
    /**
     * Get the current dimensions of the label
     *
     * @returns {rect}
     */
  }, {
    key: "getSize",
    value: function() {
      var e = 2, t = this.size.left, n = this.size.top - 0.5 * e;
      if (this.isEdgeLabel) {
        var a = -this.size.width * 0.5;
        switch (this.fontOptions.align) {
          case "middle":
            t = a, n = -this.size.height * 0.5;
            break;
          case "top":
            t = a, n = -(this.size.height + e);
            break;
          case "bottom":
            t = a, n = e;
            break;
        }
      }
      var o = {
        left: t,
        top: n,
        width: this.size.width,
        height: this.size.height
      };
      return o;
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {boolean} selected
     * @param {boolean} hover
     * @param {number} [x=0]
     * @param {number} [y=0]
     * @param {'middle'|'hanging'} [baseline='middle']
     */
  }, {
    key: "calculateLabelSize",
    value: function(e, t, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "middle";
      this._processLabel(e, t, n), this.size.left = a - this.size.width * 0.5, this.size.top = o - this.size.height * 0.5, this.size.yLine = o + (1 - this.lineCount) * 0.5 * this.fontOptions.size, s === "hanging" && (this.size.top += 0.5 * this.fontOptions.size, this.size.top += 4, this.size.yLine += 4);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {boolean} selected
     * @param {boolean} hover
     * @param {string} mod
     * @returns {{color, size, face, mod, vadjust, strokeWidth: *, strokeColor: (*|string|allOptions.edges.font.strokeColor|{string}|allOptions.nodes.font.strokeColor|Array)}}
     */
  }, {
    key: "getFormattingValues",
    value: function(e, t, n, a) {
      var o = function(c, d, f) {
        return d === "normal" ? f === "mod" ? "" : c[f] : c[d][f] !== void 0 ? c[d][f] : c[f];
      }, s = {
        color: o(this.fontOptions, a, "color"),
        size: o(this.fontOptions, a, "size"),
        face: o(this.fontOptions, a, "face"),
        mod: o(this.fontOptions, a, "mod"),
        vadjust: o(this.fontOptions, a, "vadjust"),
        strokeWidth: this.fontOptions.strokeWidth,
        strokeColor: this.fontOptions.strokeColor
      };
      (t || n) && (a === "normal" && this.fontOptions.chooser === !0 && this.elementOptions.labelHighlightBold ? s.mod = "bold" : typeof this.fontOptions.chooser == "function" && this.fontOptions.chooser(s, this.elementOptions.id, t, n));
      var u = "";
      return s.mod !== void 0 && s.mod !== "" && (u += s.mod + " "), u += s.size + "px " + s.face, e.font = u.replace(/"/g, ""), s.font = e.font, s.height = s.size, s;
    }
    /**
     *
     * @param {boolean} selected
     * @param {boolean} hover
     * @returns {boolean}
     */
  }, {
    key: "differentState",
    value: function(e, t) {
      return e !== this.selectedState || t !== this.hoverState;
    }
    /**
     * This explodes the passed text into lines and determines the width, height and number of lines.
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {boolean} selected
     * @param {boolean} hover
     * @param {string} inText  the text to explode
     * @returns {{width, height, lines}|*}
     * @private
     */
  }, {
    key: "_processLabelText",
    value: function(e, t, n, a) {
      var o = new Hle(e, this, t, n);
      return o.process(a);
    }
    /**
     * This explodes the label string into lines and sets the width, height and number of lines.
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {boolean} selected
     * @param {boolean} hover
     * @private
     */
  }, {
    key: "_processLabel",
    value: function(e, t, n) {
      if (!(this.labelDirty === !1 && !this.differentState(t, n))) {
        var a = this._processLabelText(e, t, n, this.elementOptions.label);
        this.fontOptions.minWdt > 0 && a.width < this.fontOptions.minWdt && (a.width = this.fontOptions.minWdt), this.size.labelHeight = a.height, this.fontOptions.minHgt > 0 && a.height < this.fontOptions.minHgt && (a.height = this.fontOptions.minHgt), this.lines = a.lines, this.lineCount = a.lines.length, this.size.width = a.width, this.size.height = a.height, this.selectedState = t, this.hoverState = n, this.labelDirty = !1;
      }
    }
    /**
     * Check if this label is visible
     *
     * @returns {boolean} true if this label will be show, false otherwise
     */
  }, {
    key: "visible",
    value: function() {
      if (this.size.width === 0 || this.size.height === 0 || this.elementOptions.label === void 0)
        return !1;
      var e = this.fontOptions.size * this.body.view.scale;
      return !(e < this.elementOptions.scaling.label.drawThreshold - 1);
    }
  }], [{
    key: "parseFontString",
    value: function(e, t) {
      if (!t || typeof t != "string") return !1;
      var n = t.split(" ");
      return e.size = +n[0].replace("px", ""), e.face = n[1], e.color = n[2], !0;
    }
  }]), r;
})(), Ule = kl, Vle = ma, Gle = TypeError, Kle = function(r) {
  if (Ule(r)) return r;
  throw new Gle(Vle(r) + " is not a constructor");
}, qle = oe, Yle = nr, tf = Bo, Xle = JE, G$ = Kle, Jle = Yt, K$ = ft, Qle = _a, NT = ge, ap = Yle("Reflect", "construct"), Zle = Object.prototype, ece = [].push, FT = NT(function() {
  function r() {
  }
  return !(ap(function() {
  }, [], r) instanceof r);
}), BT = !NT(function() {
  ap(function() {
  });
}), q$ = FT || BT;
qle({ target: "Reflect", stat: !0, forced: q$, sham: q$ }, {
  construct: function(i, e) {
    G$(i), Jle(e);
    var t = arguments.length < 3 ? i : G$(arguments[2]);
    if (BT && !FT) return ap(i, e, t);
    if (i === t) {
      switch (e.length) {
        case 0:
          return new i();
        case 1:
          return new i(e[0]);
        case 2:
          return new i(e[0], e[1]);
        case 3:
          return new i(e[0], e[1], e[2]);
        case 4:
          return new i(e[0], e[1], e[2], e[3]);
      }
      var n = [null];
      return tf(ece, n, e), new (tf(Xle, i, n))();
    }
    var a = t.prototype, o = Qle(K$(a) ? a : Zle), s = tf(i, o, e);
    return K$(s) ? s : o;
  }
});
var tce = me, rce = tce.Reflect.construct, nce = rce, ice = nce, ace = ice, T = /* @__PURE__ */ Y(ace), oce = PO, sce = oce, uce = sce, lce = uce, cce = lce, dce = /* @__PURE__ */ Y(cce), fce = oe, hce = f7;
fce({ target: "Object", stat: !0 }, {
  setPrototypeOf: hce
});
var vce = me, pce = vce.Object.setPrototypeOf, yce = pce, gce = yce, mce = gce, bce = mce, $ce = bce, _ce = $ce, wce = _ce, Sh = /* @__PURE__ */ Y(wce), Ece = QE, Sce = Ece, Oce = Sce, Tce = Oce, Pce = Tce, op = /* @__PURE__ */ Y(Pce);
function Oh(r, i) {
  var e;
  return Oh = Sh ? op(e = Sh).call(e) : function(n, a) {
    return n.__proto__ = a, n;
  }, Oh(r, i);
}
function $e(r, i) {
  if (typeof i != "function" && i !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = dce(i && i.prototype, {
    constructor: {
      value: r,
      writable: !0,
      configurable: !0
    }
  }), xl(r, "prototype", {
    writable: !1
  }), i && Oh(r, i);
}
function Ice(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Pe(r, i) {
  if (i && (Ie(i) === "object" || typeof i == "function"))
    return i;
  if (i !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ice(r);
}
var kce = wO, Cce = kce, xce = Cce, Rce = xce, Ace = Rce, Y$ = /* @__PURE__ */ Y(Ace);
function V(r) {
  var i;
  return V = Sh ? op(i = Y$).call(i) : function(t) {
    return t.__proto__ || Y$(t);
  }, V(r);
}
var ui = /* @__PURE__ */ (function() {
  function r(i, e, t) {
    M(this, r), this.body = e, this.labelModule = t, this.setOptions(i), this.top = void 0, this.left = void 0, this.height = void 0, this.width = void 0, this.radius = void 0, this.margin = void 0, this.refreshNeeded = !0, this.boundingBox = {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
  }
  return N(r, [{
    key: "setOptions",
    value: function(e) {
      this.options = e;
    }
    /**
     *
     * @param {Label} labelModule
     * @private
     */
  }, {
    key: "_setMargins",
    value: function(e) {
      this.margin = {}, this.options.margin && (Ie(this.options.margin) == "object" ? (this.margin.top = this.options.margin.top, this.margin.right = this.options.margin.right, this.margin.bottom = this.options.margin.bottom, this.margin.left = this.options.margin.left) : (this.margin.top = this.options.margin, this.margin.right = this.options.margin, this.margin.bottom = this.options.margin, this.margin.left = this.options.margin)), e.adjustSizes(this.margin);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} angle
     * @returns {number}
     * @private
     */
  }, {
    key: "_distanceToBorder",
    value: function(e, t) {
      var n = this.options.borderWidth;
      return e && this.resize(e), Math.min(Math.abs(this.width / 2 / Math.cos(t)), Math.abs(this.height / 2 / Math.sin(t))) + n;
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {ArrowOptions} values
     */
  }, {
    key: "enableShadow",
    value: function(e, t) {
      t.shadow && (e.shadowColor = t.shadowColor, e.shadowBlur = t.shadowSize, e.shadowOffsetX = t.shadowX, e.shadowOffsetY = t.shadowY);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {ArrowOptions} values
     */
  }, {
    key: "disableShadow",
    value: function(e, t) {
      t.shadow && (e.shadowColor = "rgba(0,0,0,0)", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {ArrowOptions} values
     */
  }, {
    key: "enableBorderDashes",
    value: function(e, t) {
      if (t.borderDashes !== !1)
        if (e.setLineDash !== void 0) {
          var n = t.borderDashes;
          n === !0 && (n = [5, 15]), e.setLineDash(n);
        } else
          console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."), this.options.shapeProperties.borderDashes = !1, t.borderDashes = !1;
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {ArrowOptions} values
     */
  }, {
    key: "disableBorderDashes",
    value: function(e, t) {
      t.borderDashes !== !1 && (e.setLineDash !== void 0 ? e.setLineDash([0]) : (console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."), this.options.shapeProperties.borderDashes = !1, t.borderDashes = !1));
    }
    /**
     * Determine if the shape of a node needs to be recalculated.
     *
     * @param {boolean} selected
     * @param {boolean} hover
     * @returns {boolean}
     * @protected
     */
  }, {
    key: "needsRefresh",
    value: function(e, t) {
      return this.refreshNeeded === !0 ? (this.refreshNeeded = !1, !0) : this.width === void 0 || this.labelModule.differentState(e, t);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {ArrowOptions} values
     */
  }, {
    key: "initContextForDraw",
    value: function(e, t) {
      var n = t.borderWidth / this.body.view.scale;
      e.lineWidth = Math.min(this.width, n), e.strokeStyle = t.borderColor, e.fillStyle = t.color;
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {ArrowOptions} values
     */
  }, {
    key: "performStroke",
    value: function(e, t) {
      var n = t.borderWidth / this.body.view.scale;
      e.save(), n > 0 && (this.enableBorderDashes(e, t), e.stroke(), this.disableBorderDashes(e, t)), e.restore();
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {ArrowOptions} values
     */
  }, {
    key: "performFill",
    value: function(e, t) {
      e.save(), e.fillStyle = t.color, this.enableShadow(e, t), rs(e).call(e), this.disableShadow(e, t), e.restore(), this.performStroke(e, t);
    }
    /**
     *
     * @param {number} margin
     * @private
     */
  }, {
    key: "_addBoundingBoxMargin",
    value: function(e) {
      this.boundingBox.left -= e, this.boundingBox.top -= e, this.boundingBox.bottom += e, this.boundingBox.right += e;
    }
    /**
     * Actual implementation of this method call.
     *
     * Doing it like this makes it easier to override
     * in the child classes.
     *
     * @param {number} x width
     * @param {number} y height
     * @param {CanvasRenderingContext2D} ctx
     * @param {boolean} selected
     * @param {boolean} hover
     * @private
     */
  }, {
    key: "_updateBoundingBox",
    value: function(e, t, n, a, o) {
      n !== void 0 && this.resize(n, a, o), this.left = e - this.width / 2, this.top = t - this.height / 2, this.boundingBox.left = this.left, this.boundingBox.top = this.top, this.boundingBox.bottom = this.top + this.height, this.boundingBox.right = this.left + this.width;
    }
    /**
     * Default implementation of this method call.
     * This acts as a stub which can be overridden.
     *
     * @param {number} x width
     * @param {number} y height
     * @param {CanvasRenderingContext2D} ctx
     * @param {boolean} selected
     * @param {boolean} hover
     */
  }, {
    key: "updateBoundingBox",
    value: function(e, t, n, a, o) {
      this._updateBoundingBox(e, t, n, a, o);
    }
    /**
     * Determine the dimensions to use for nodes with an internal label
     *
     * Currently, these are: Circle, Ellipse, Database, Box
     * The other nodes have external labels, and will not call this method
     *
     * If there is no label, decent default values are supplied.
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {boolean} [selected]
     * @param {boolean} [hover]
     * @returns {{width:number, height:number}}
     */
  }, {
    key: "getDimensionsFromLabel",
    value: function(e, t, n) {
      this.textSize = this.labelModule.getTextSize(e, t, n);
      var a = this.textSize.width, o = this.textSize.height, s = 14;
      return a === 0 && (a = s, o = s), {
        width: a,
        height: o
      };
    }
  }]), r;
})();
function Dce(r) {
  var i = Mce();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function Mce() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Nce = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = Dce(e);
  function e(t, n, a) {
    var o;
    return M(this, e), o = i.call(this, t, n, a), o._setMargins(a), o;
  }
  return N(e, [{
    key: "resize",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.selected, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.hover;
      if (this.needsRefresh(a, o)) {
        var s = this.getDimensionsFromLabel(n, a, o);
        this.width = s.width + this.margin.right + this.margin.left, this.height = s.height + this.margin.top + this.margin.bottom, this.radius = this.width / 2;
      }
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} x width
     * @param {number} y height
     * @param {boolean} selected
     * @param {boolean} hover
     * @param {ArrowOptions} values
     */
  }, {
    key: "draw",
    value: function(n, a, o, s, u, l) {
      this.resize(n, s, u), this.left = a - this.width / 2, this.top = o - this.height / 2, this.initContextForDraw(n, l), ZE(n, this.left, this.top, this.width, this.height, l.borderRadius), this.performFill(n, l), this.updateBoundingBox(a, o, n, s, u), this.labelModule.draw(n, this.left + this.textSize.width / 2 + this.margin.left, this.top + this.textSize.height / 2 + this.margin.top, s, u);
    }
    /**
     *
     * @param {number} x width
     * @param {number} y height
     * @param {CanvasRenderingContext2D} ctx
     * @param {boolean} selected
     * @param {boolean} hover
     */
  }, {
    key: "updateBoundingBox",
    value: function(n, a, o, s, u) {
      this._updateBoundingBox(n, a, o, s, u);
      var l = this.options.shapeProperties.borderRadius;
      this._addBoundingBoxMargin(l);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} angle
     * @returns {number}
     */
  }, {
    key: "distanceToBorder",
    value: function(n, a) {
      n && this.resize(n);
      var o = this.options.borderWidth;
      return Math.min(Math.abs(this.width / 2 / Math.cos(a)), Math.abs(this.height / 2 / Math.sin(a))) + o;
    }
  }]), e;
})(ui);
function Fce(r) {
  var i = Bce();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function Bce() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var sp = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = Fce(e);
  function e(t, n, a) {
    var o;
    return M(this, e), o = i.call(this, t, n, a), o.labelOffset = 0, o.selected = !1, o;
  }
  return N(e, [{
    key: "setOptions",
    value: function(n, a, o) {
      this.options = n, a === void 0 && o === void 0 || this.setImages(a, o);
    }
    /**
     * Set the images for this node.
     *
     * The images can be updated after the initial setting of options;
     * therefore, this method needs to be reentrant.
     *
     * For correct working in error cases, it is necessary to properly set
     * field 'nodes.brokenImage' in the options.
     *
     * @param {Image} imageObj  required; main image to show for this node
     * @param {Image|undefined} imageObjAlt optional; image to show when node is selected
     */
  }, {
    key: "setImages",
    value: function(n, a) {
      a && this.selected ? (this.imageObj = a, this.imageObjAlt = n) : (this.imageObj = n, this.imageObjAlt = a);
    }
    /**
     * Set selection and switch between the base and the selected image.
     *
     * Do the switch only if imageObjAlt exists.
     *
     * @param {boolean} selected value of new selected state for current node
     */
  }, {
    key: "switchImages",
    value: function(n) {
      var a = n && !this.selected || !n && this.selected;
      if (this.selected = n, this.imageObjAlt !== void 0 && a) {
        var o = this.imageObj;
        this.imageObj = this.imageObjAlt, this.imageObjAlt = o;
      }
    }
    /**
     * Returns Image Padding from node options
     *
     * @returns {{top: number,left: number,bottom: number,right: number}} image padding inside this shape
     * @private
     */
  }, {
    key: "_getImagePadding",
    value: function() {
      var n = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
      if (this.options.imagePadding) {
        var a = this.options.imagePadding;
        Ie(a) == "object" ? (n.top = a.top, n.right = a.right, n.bottom = a.bottom, n.left = a.left) : (n.top = a, n.right = a, n.bottom = a, n.left = a);
      }
      return n;
    }
    /**
     * Adjust the node dimensions for a loaded image.
     *
     * Pre: this.imageObj is valid
     */
  }, {
    key: "_resizeImage",
    value: function() {
      var n, a;
      if (this.options.shapeProperties.useImageSize === !1) {
        var o = 1, s = 1;
        this.imageObj.width && this.imageObj.height && (this.imageObj.width > this.imageObj.height ? o = this.imageObj.width / this.imageObj.height : s = this.imageObj.height / this.imageObj.width), n = this.options.size * 2 * o, a = this.options.size * 2 * s;
      } else {
        var u = this._getImagePadding();
        n = this.imageObj.width + u.left + u.right, a = this.imageObj.height + u.top + u.bottom;
      }
      this.width = n, this.height = a, this.radius = 0.5 * this.width;
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} x width
     * @param {number} y height
     * @param {ArrowOptions} values
     * @private
     */
  }, {
    key: "_drawRawCircle",
    value: function(n, a, o, s) {
      this.initContextForDraw(n, s), Ev(n, a, o, s.size), this.performFill(n, s);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {ArrowOptions} values
     * @private
     */
  }, {
    key: "_drawImageAtPosition",
    value: function(n, a) {
      if (this.imageObj.width != 0) {
        n.globalAlpha = a.opacity !== void 0 ? a.opacity : 1, this.enableShadow(n, a);
        var o = 1;
        this.options.shapeProperties.interpolation === !0 && (o = this.imageObj.width / this.width / this.body.view.scale);
        var s = this._getImagePadding(), u = this.left + s.left, l = this.top + s.top, c = this.width - s.left - s.right, d = this.height - s.top - s.bottom;
        this.imageObj.drawImageAtPosition(n, o, u, l, c, d), this.disableShadow(n, a);
      }
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} x width
     * @param {number} y height
     * @param {boolean} selected
     * @param {boolean} hover
     * @private
     */
  }, {
    key: "_drawImageLabel",
    value: function(n, a, o, s, u) {
      var l = 0;
      if (this.height !== void 0) {
        l = this.height * 0.5;
        var c = this.labelModule.getTextSize(n, s, u);
        c.lineCount >= 1 && (l += c.height / 2);
      }
      var d = o + l;
      this.options.label && (this.labelOffset = l), this.labelModule.draw(n, a, d, s, u, "hanging");
    }
  }]), e;
})(ui);
function jce(r) {
  var i = Lce();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function Lce() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var zce = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = jce(e);
  function e(t, n, a) {
    var o;
    return M(this, e), o = i.call(this, t, n, a), o._setMargins(a), o;
  }
  return N(e, [{
    key: "resize",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.selected, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.hover;
      if (this.needsRefresh(a, o)) {
        var s = this.getDimensionsFromLabel(n, a, o), u = Math.max(s.width + this.margin.right + this.margin.left, s.height + this.margin.top + this.margin.bottom);
        this.options.size = u / 2, this.width = u, this.height = u, this.radius = this.width / 2;
      }
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} x width
     * @param {number} y height
     * @param {boolean} selected
     * @param {boolean} hover
     * @param {ArrowOptions} values
     */
  }, {
    key: "draw",
    value: function(n, a, o, s, u, l) {
      this.resize(n, s, u), this.left = a - this.width / 2, this.top = o - this.height / 2, this._drawRawCircle(n, a, o, l), this.updateBoundingBox(a, o), this.labelModule.draw(n, this.left + this.textSize.width / 2 + this.margin.left, o, s, u);
    }
    /**
     *
     * @param {number} x width
     * @param {number} y height
     */
  }, {
    key: "updateBoundingBox",
    value: function(n, a) {
      this.boundingBox.top = a - this.options.size, this.boundingBox.left = n - this.options.size, this.boundingBox.right = n + this.options.size, this.boundingBox.bottom = a + this.options.size;
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @returns {number}
     */
  }, {
    key: "distanceToBorder",
    value: function(n) {
      return n && this.resize(n), this.width * 0.5;
    }
  }]), e;
})(sp);
function Wce(r) {
  var i = Hce();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function Hce() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Uce = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = Wce(e);
  function e(t, n, a, o, s) {
    var u;
    return M(this, e), u = i.call(this, t, n, a), u.setImages(o, s), u;
  }
  return N(e, [{
    key: "resize",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.selected, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.hover, s = this.imageObj.src === void 0 || this.imageObj.width === void 0 || this.imageObj.height === void 0;
      if (s) {
        var u = this.options.size * 2;
        this.width = u, this.height = u, this.radius = 0.5 * this.width;
        return;
      }
      this.needsRefresh(a, o) && this._resizeImage();
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} x width
     * @param {number} y height
     * @param {boolean} selected
     * @param {boolean} hover
     * @param {ArrowOptions} values
     */
  }, {
    key: "draw",
    value: function(n, a, o, s, u, l) {
      this.switchImages(s), this.resize();
      var c = a, d = o;
      this.options.shapeProperties.coordinateOrigin === "top-left" ? (this.left = a, this.top = o, c += this.width / 2, d += this.height / 2) : (this.left = a - this.width / 2, this.top = o - this.height / 2), this._drawRawCircle(n, c, d, l), n.save(), n.clip(), this._drawImageAtPosition(n, l), n.restore(), this._drawImageLabel(n, c, d, s, u), this.updateBoundingBox(a, o);
    }
    // TODO: compare with Circle.updateBoundingBox(), consolidate? More stuff is happening here
    /**
     *
     * @param {number} x width
     * @param {number} y height
     */
  }, {
    key: "updateBoundingBox",
    value: function(n, a) {
      this.options.shapeProperties.coordinateOrigin === "top-left" ? (this.boundingBox.top = a, this.boundingBox.left = n, this.boundingBox.right = n + this.options.size * 2, this.boundingBox.bottom = a + this.options.size * 2) : (this.boundingBox.top = a - this.options.size, this.boundingBox.left = n - this.options.size, this.boundingBox.right = n + this.options.size, this.boundingBox.bottom = a + this.options.size), this.boundingBox.left = Math.min(this.boundingBox.left, this.labelModule.size.left), this.boundingBox.right = Math.max(this.boundingBox.right, this.labelModule.size.left + this.labelModule.size.width), this.boundingBox.bottom = Math.max(this.boundingBox.bottom, this.boundingBox.bottom + this.labelOffset);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @returns {number}
     */
  }, {
    key: "distanceToBorder",
    value: function(n) {
      return n && this.resize(n), this.width * 0.5;
    }
  }]), e;
})(sp);
function Vce(r) {
  var i = Gce();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function Gce() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var $n = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = Vce(e);
  function e(t, n, a) {
    return M(this, e), i.call(this, t, n, a);
  }
  return N(e, [{
    key: "resize",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.selected, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.hover, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        size: this.options.size
      };
      if (this.needsRefresh(a, o)) {
        var u, l;
        this.labelModule.getTextSize(n, a, o);
        var c = 2 * s.size;
        this.width = (u = this.customSizeWidth) !== null && u !== void 0 ? u : c, this.height = (l = this.customSizeHeight) !== null && l !== void 0 ? l : c, this.radius = 0.5 * this.width;
      }
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {string} shape
     * @param {number} sizeMultiplier - Unused! TODO: Remove next major release
     * @param {number} x
     * @param {number} y
     * @param {boolean} selected
     * @param {boolean} hover
     * @param {ArrowOptions} values
     * @private
     * @returns {object} Callbacks to draw later on higher layers.
     */
  }, {
    key: "_drawShape",
    value: function(n, a, o, s, u, l, c, d) {
      var f = this;
      return this.resize(n, l, c, d), this.left = s - this.width / 2, this.top = u - this.height / 2, this.initContextForDraw(n, d), IK(a)(n, s, u, d.size), this.performFill(n, d), this.options.icon !== void 0 && this.options.icon.code !== void 0 && (n.font = (l ? "bold " : "") + this.height / 2 + "px " + (this.options.icon.face || "FontAwesome"), n.fillStyle = this.options.icon.color || "black", n.textAlign = "center", n.textBaseline = "middle", n.fillText(this.options.icon.code, s, u)), {
        drawExternalLabel: function() {
          if (f.options.label !== void 0) {
            f.labelModule.calculateLabelSize(n, l, c, s, u, "hanging");
            var v = u + 0.5 * f.height + 0.5 * f.labelModule.size.height;
            f.labelModule.draw(n, s, v, l, c, "hanging");
          }
          f.updateBoundingBox(s, u);
        }
      };
    }
    /**
     *
     * @param {number} x
     * @param {number} y
     */
  }, {
    key: "updateBoundingBox",
    value: function(n, a) {
      this.boundingBox.top = a - this.options.size, this.boundingBox.left = n - this.options.size, this.boundingBox.right = n + this.options.size, this.boundingBox.bottom = a + this.options.size, this.options.label !== void 0 && this.labelModule.size.width > 0 && (this.boundingBox.left = Math.min(this.boundingBox.left, this.labelModule.size.left), this.boundingBox.right = Math.max(this.boundingBox.right, this.labelModule.size.left + this.labelModule.size.width), this.boundingBox.bottom = Math.max(this.boundingBox.bottom, this.boundingBox.bottom + this.labelModule.size.height));
    }
  }]), e;
})(ui);
function X$(r, i) {
  var e = We(r);
  if (dn) {
    var t = dn(r);
    i && (t = Dt(t).call(t, function(n) {
      return bn(r, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function Kce(r) {
  for (var i = 1; i < arguments.length; i++) {
    var e, t, n = arguments[i] != null ? arguments[i] : {};
    i % 2 ? xe(e = X$(Object(n), !0)).call(e, function(a) {
      Vl(r, a, n[a]);
    }) : fn ? Hl(r, fn(n)) : xe(t = X$(Object(n))).call(t, function(a) {
      Ul(r, a, bn(n, a));
    });
  }
  return r;
}
function qce(r) {
  var i = Yce();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function Yce() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Xce = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = qce(e);
  function e(t, n, a, o) {
    var s;
    return M(this, e), s = i.call(this, t, n, a, o), s.ctxRenderer = o, s;
  }
  return N(e, [{
    key: "draw",
    value: function(n, a, o, s, u, l) {
      this.resize(n, s, u, l), this.left = a - this.width / 2, this.top = o - this.height / 2, n.save();
      var c = this.ctxRenderer({
        ctx: n,
        id: this.options.id,
        x: a,
        y: o,
        state: {
          selected: s,
          hover: u
        },
        style: Kce({}, l),
        label: this.options.label
      });
      if (c.drawNode != null && c.drawNode(), n.restore(), c.drawExternalLabel) {
        var d = c.drawExternalLabel;
        c.drawExternalLabel = function() {
          n.save(), d(), n.restore();
        };
      }
      return c.nodeDimensions && (this.customSizeWidth = c.nodeDimensions.width, this.customSizeHeight = c.nodeDimensions.height), c;
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} angle
     * @returns {number}
     */
  }, {
    key: "distanceToBorder",
    value: function(n, a) {
      return this._distanceToBorder(n, a);
    }
  }]), e;
})($n);
function Jce(r) {
  var i = Qce();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function Qce() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Zce = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = Jce(e);
  function e(t, n, a) {
    var o;
    return M(this, e), o = i.call(this, t, n, a), o._setMargins(a), o;
  }
  return N(e, [{
    key: "resize",
    value: function(n, a, o) {
      if (this.needsRefresh(a, o)) {
        var s = this.getDimensionsFromLabel(n, a, o), u = s.width + this.margin.right + this.margin.left;
        this.width = u, this.height = u, this.radius = this.width / 2;
      }
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} x width
     * @param {number} y height
     * @param {boolean} selected
     * @param {boolean} hover
     * @param {ArrowOptions} values
     */
  }, {
    key: "draw",
    value: function(n, a, o, s, u, l) {
      this.resize(n, s, u), this.left = a - this.width / 2, this.top = o - this.height / 2, this.initContextForDraw(n, l), eS(n, a - this.width / 2, o - this.height / 2, this.width, this.height), this.performFill(n, l), this.updateBoundingBox(a, o, n, s, u), this.labelModule.draw(n, this.left + this.textSize.width / 2 + this.margin.left, this.top + this.textSize.height / 2 + this.margin.top, s, u);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} angle
     * @returns {number}
     */
  }, {
    key: "distanceToBorder",
    value: function(n, a) {
      return this._distanceToBorder(n, a);
    }
  }]), e;
})(ui);
function ede(r) {
  var i = tde();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function tde() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var rde = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = ede(e);
  function e(t, n, a) {
    return M(this, e), i.call(this, t, n, a);
  }
  return N(e, [{
    key: "draw",
    value: function(n, a, o, s, u, l) {
      return this._drawShape(n, "diamond", 4, a, o, s, u, l);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} angle
     * @returns {number}
     */
  }, {
    key: "distanceToBorder",
    value: function(n, a) {
      return this._distanceToBorder(n, a);
    }
  }]), e;
})($n);
function nde(r) {
  var i = ide();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function ide() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var ade = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = nde(e);
  function e(t, n, a) {
    return M(this, e), i.call(this, t, n, a);
  }
  return N(e, [{
    key: "draw",
    value: function(n, a, o, s, u, l) {
      return this._drawShape(n, "circle", 2, a, o, s, u, l);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @returns {number}
     */
  }, {
    key: "distanceToBorder",
    value: function(n) {
      return n && this.resize(n), this.options.size;
    }
  }]), e;
})($n);
function ode(r) {
  var i = sde();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function sde() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var J$ = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = ode(e);
  function e(t, n, a) {
    return M(this, e), i.call(this, t, n, a);
  }
  return N(e, [{
    key: "resize",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.selected, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.hover;
      if (this.needsRefresh(a, o)) {
        var s = this.getDimensionsFromLabel(n, a, o);
        this.height = s.height * 2, this.width = s.width + s.height, this.radius = 0.5 * this.width;
      }
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} x width
     * @param {number} y height
     * @param {boolean} selected
     * @param {boolean} hover
     * @param {ArrowOptions} values
     */
  }, {
    key: "draw",
    value: function(n, a, o, s, u, l) {
      this.resize(n, s, u), this.left = a - this.width * 0.5, this.top = o - this.height * 0.5, this.initContextForDraw(n, l), Qf(n, this.left, this.top, this.width, this.height), this.performFill(n, l), this.updateBoundingBox(a, o, n, s, u), this.labelModule.draw(n, a, o, s, u);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} angle
     * @returns {number}
     */
  }, {
    key: "distanceToBorder",
    value: function(n, a) {
      n && this.resize(n);
      var o = this.width * 0.5, s = this.height * 0.5, u = Math.sin(a) * o, l = Math.cos(a) * s;
      return o * s / Math.sqrt(u * u + l * l);
    }
  }]), e;
})(ui);
function ude(r) {
  var i = lde();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function lde() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var cde = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = ude(e);
  function e(t, n, a) {
    var o;
    return M(this, e), o = i.call(this, t, n, a), o._setMargins(a), o;
  }
  return N(e, [{
    key: "resize",
    value: function(n, a, o) {
      this.needsRefresh(a, o) && (this.iconSize = {
        width: Number(this.options.icon.size),
        height: Number(this.options.icon.size)
      }, this.width = this.iconSize.width + this.margin.right + this.margin.left, this.height = this.iconSize.height + this.margin.top + this.margin.bottom, this.radius = 0.5 * this.width);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} x width
     * @param {number} y height
     * @param {boolean} selected
     * @param {boolean} hover
     * @param {ArrowOptions} values
     * @returns {object} Callbacks to draw later on higher layers.
     */
  }, {
    key: "draw",
    value: function(n, a, o, s, u, l) {
      var c = this;
      return this.resize(n, s, u), this.options.icon.size = this.options.icon.size || 50, this.left = a - this.width / 2, this.top = o - this.height / 2, this._icon(n, a, o, s, u, l), {
        drawExternalLabel: function() {
          if (c.options.label !== void 0) {
            var f = 5;
            c.labelModule.draw(n, c.left + c.iconSize.width / 2 + c.margin.left, o + c.height / 2 + f, s);
          }
          c.updateBoundingBox(a, o);
        }
      };
    }
    /**
     *
     * @param {number} x
     * @param {number} y
     */
  }, {
    key: "updateBoundingBox",
    value: function(n, a) {
      if (this.boundingBox.top = a - this.options.icon.size * 0.5, this.boundingBox.left = n - this.options.icon.size * 0.5, this.boundingBox.right = n + this.options.icon.size * 0.5, this.boundingBox.bottom = a + this.options.icon.size * 0.5, this.options.label !== void 0 && this.labelModule.size.width > 0) {
        var o = 5;
        this.boundingBox.left = Math.min(this.boundingBox.left, this.labelModule.size.left), this.boundingBox.right = Math.max(this.boundingBox.right, this.labelModule.size.left + this.labelModule.size.width), this.boundingBox.bottom = Math.max(this.boundingBox.bottom, this.boundingBox.bottom + this.labelModule.size.height + o);
      }
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} x width
     * @param {number} y height
     * @param {boolean} selected
     * @param {boolean} hover - Unused
     * @param {ArrowOptions} values
     */
  }, {
    key: "_icon",
    value: function(n, a, o, s, u, l) {
      var c = Number(this.options.icon.size);
      this.options.icon.code !== void 0 ? (n.font = [
        this.options.icon.weight != null ? this.options.icon.weight : s ? "bold" : "",
        // If the weight is forced (for example to make Font Awesome 5 work
        // properly) substitute slightly bigger size for bold font face.
        (this.options.icon.weight != null && s ? 5 : 0) + c + "px",
        this.options.icon.face
      ].join(" "), n.fillStyle = this.options.icon.color || "black", n.textAlign = "center", n.textBaseline = "middle", this.enableShadow(n, l), n.fillText(this.options.icon.code, a, o), this.disableShadow(n, l)) : console.error("When using the icon shape, you need to define the code in the icon options object. This can be done per node or globally.");
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} angle
     * @returns {number}
     */
  }, {
    key: "distanceToBorder",
    value: function(n, a) {
      return this._distanceToBorder(n, a);
    }
  }]), e;
})(ui);
function dde(r) {
  var i = fde();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function fde() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var hde = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = dde(e);
  function e(t, n, a, o, s) {
    var u;
    return M(this, e), u = i.call(this, t, n, a), u.setImages(o, s), u;
  }
  return N(e, [{
    key: "resize",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.selected, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.hover, s = this.imageObj.src === void 0 || this.imageObj.width === void 0 || this.imageObj.height === void 0;
      if (s) {
        var u = this.options.size * 2;
        this.width = u, this.height = u;
        return;
      }
      this.needsRefresh(a, o) && this._resizeImage();
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} x width
     * @param {number} y height
     * @param {boolean} selected
     * @param {boolean} hover
     * @param {ArrowOptions} values
     */
  }, {
    key: "draw",
    value: function(n, a, o, s, u, l) {
      n.save(), this.switchImages(s), this.resize();
      var c = a, d = o;
      if (this.options.shapeProperties.coordinateOrigin === "top-left" ? (this.left = a, this.top = o, c += this.width / 2, d += this.height / 2) : (this.left = a - this.width / 2, this.top = o - this.height / 2), this.options.shapeProperties.useBorderWithImage === !0) {
        var f = this.options.borderWidth, h = this.options.borderWidthSelected || 2 * this.options.borderWidth, v = (s ? h : f) / this.body.view.scale;
        n.lineWidth = Math.min(this.width, v), n.beginPath();
        var p = s ? this.options.color.highlight.border : u ? this.options.color.hover.border : this.options.color.border, y = s ? this.options.color.highlight.background : u ? this.options.color.hover.background : this.options.color.background;
        l.opacity !== void 0 && (p = Zt(p, l.opacity), y = Zt(y, l.opacity)), n.strokeStyle = p, n.fillStyle = y, n.rect(this.left - 0.5 * n.lineWidth, this.top - 0.5 * n.lineWidth, this.width + n.lineWidth, this.height + n.lineWidth), rs(n).call(n), this.performStroke(n, l), n.closePath();
      }
      this._drawImageAtPosition(n, l), this._drawImageLabel(n, c, d, s, u), this.updateBoundingBox(a, o), n.restore();
    }
    /**
     *
     * @param {number} x
     * @param {number} y
     */
  }, {
    key: "updateBoundingBox",
    value: function(n, a) {
      this.resize(), this.options.shapeProperties.coordinateOrigin === "top-left" ? (this.left = n, this.top = a) : (this.left = n - this.width / 2, this.top = a - this.height / 2), this.boundingBox.left = this.left, this.boundingBox.top = this.top, this.boundingBox.bottom = this.top + this.height, this.boundingBox.right = this.left + this.width, this.options.label !== void 0 && this.labelModule.size.width > 0 && (this.boundingBox.left = Math.min(this.boundingBox.left, this.labelModule.size.left), this.boundingBox.right = Math.max(this.boundingBox.right, this.labelModule.size.left + this.labelModule.size.width), this.boundingBox.bottom = Math.max(this.boundingBox.bottom, this.boundingBox.bottom + this.labelOffset));
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} angle
     * @returns {number}
     */
  }, {
    key: "distanceToBorder",
    value: function(n, a) {
      return this._distanceToBorder(n, a);
    }
  }]), e;
})(sp);
function vde(r) {
  var i = pde();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function pde() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var yde = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = vde(e);
  function e(t, n, a) {
    return M(this, e), i.call(this, t, n, a);
  }
  return N(e, [{
    key: "draw",
    value: function(n, a, o, s, u, l) {
      return this._drawShape(n, "square", 2, a, o, s, u, l);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} angle
     * @returns {number}
     */
  }, {
    key: "distanceToBorder",
    value: function(n, a) {
      return this._distanceToBorder(n, a);
    }
  }]), e;
})($n);
function gde(r) {
  var i = mde();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function mde() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var bde = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = gde(e);
  function e(t, n, a) {
    return M(this, e), i.call(this, t, n, a);
  }
  return N(e, [{
    key: "draw",
    value: function(n, a, o, s, u, l) {
      return this._drawShape(n, "hexagon", 4, a, o, s, u, l);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} angle
     * @returns {number}
     */
  }, {
    key: "distanceToBorder",
    value: function(n, a) {
      return this._distanceToBorder(n, a);
    }
  }]), e;
})($n);
function $de(r) {
  var i = _de();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function _de() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var wde = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = $de(e);
  function e(t, n, a) {
    return M(this, e), i.call(this, t, n, a);
  }
  return N(e, [{
    key: "draw",
    value: function(n, a, o, s, u, l) {
      return this._drawShape(n, "star", 4, a, o, s, u, l);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} angle
     * @returns {number}
     */
  }, {
    key: "distanceToBorder",
    value: function(n, a) {
      return this._distanceToBorder(n, a);
    }
  }]), e;
})($n);
function Ede(r) {
  var i = Sde();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function Sde() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Ode = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = Ede(e);
  function e(t, n, a) {
    var o;
    return M(this, e), o = i.call(this, t, n, a), o._setMargins(a), o;
  }
  return N(e, [{
    key: "resize",
    value: function(n, a, o) {
      this.needsRefresh(a, o) && (this.textSize = this.labelModule.getTextSize(n, a, o), this.width = this.textSize.width + this.margin.right + this.margin.left, this.height = this.textSize.height + this.margin.top + this.margin.bottom, this.radius = 0.5 * this.width);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} x width
     * @param {number} y height
     * @param {boolean} selected
     * @param {boolean} hover
     * @param {ArrowOptions} values
     */
  }, {
    key: "draw",
    value: function(n, a, o, s, u, l) {
      this.resize(n, s, u), this.left = a - this.width / 2, this.top = o - this.height / 2, this.enableShadow(n, l), this.labelModule.draw(n, this.left + this.textSize.width / 2 + this.margin.left, this.top + this.textSize.height / 2 + this.margin.top, s, u), this.disableShadow(n, l), this.updateBoundingBox(a, o, n, s, u);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} angle
     * @returns {number}
     */
  }, {
    key: "distanceToBorder",
    value: function(n, a) {
      return this._distanceToBorder(n, a);
    }
  }]), e;
})(ui);
function Tde(r) {
  var i = Pde();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function Pde() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Ide = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = Tde(e);
  function e(t, n, a) {
    return M(this, e), i.call(this, t, n, a);
  }
  return N(e, [{
    key: "draw",
    value: function(n, a, o, s, u, l) {
      return this._drawShape(n, "triangle", 3, a, o, s, u, l);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} angle
     * @returns {number}
     */
  }, {
    key: "distanceToBorder",
    value: function(n, a) {
      return this._distanceToBorder(n, a);
    }
  }]), e;
})($n);
function kde(r) {
  var i = Cde();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function Cde() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var xde = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = kde(e);
  function e(t, n, a) {
    return M(this, e), i.call(this, t, n, a);
  }
  return N(e, [{
    key: "draw",
    value: function(n, a, o, s, u, l) {
      return this._drawShape(n, "triangleDown", 3, a, o, s, u, l);
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} angle
     * @returns {number}
     */
  }, {
    key: "distanceToBorder",
    value: function(n, a) {
      return this._distanceToBorder(n, a);
    }
  }]), e;
})($n);
function Q$(r, i) {
  var e = We(r);
  if (dn) {
    var t = dn(r);
    i && (t = Dt(t).call(t, function(n) {
      return bn(r, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function Z$(r) {
  for (var i = 1; i < arguments.length; i++) {
    var e, t, n = arguments[i] != null ? arguments[i] : {};
    i % 2 ? xe(e = Q$(Object(n), !0)).call(e, function(a) {
      Vl(r, a, n[a]);
    }) : fn ? Hl(r, fn(n)) : xe(t = Q$(Object(n))).call(t, function(a) {
      Ul(r, a, bn(n, a));
    });
  }
  return r;
}
var Wt = /* @__PURE__ */ (function() {
  function r(i, e, t, n, a, o) {
    M(this, r), this.options = un(a), this.globalOptions = a, this.defaultOptions = o, this.body = e, this.edges = [], this.id = void 0, this.imagelist = t, this.grouplist = n, this.x = void 0, this.y = void 0, this.baseSize = this.options.size, this.baseFontSize = this.options.font.size, this.predefinedPosition = !1, this.selected = !1, this.hover = !1, this.labelModule = new MT(
      this.body,
      this.options,
      !1
      /* Not edge label */
    ), this.setOptions(i);
  }
  return N(r, [{
    key: "attachEdge",
    value: function(e) {
      var t;
      ye(t = this.edges).call(t, e) === -1 && this.edges.push(e);
    }
    /**
     * Detach a edge from the node
     *
     * @param {Edge} edge
     */
  }, {
    key: "detachEdge",
    value: function(e) {
      var t, n = ye(t = this.edges).call(t, e);
      if (n != -1) {
        var a;
        Fr(a = this.edges).call(a, n, 1);
      }
    }
    /**
     * Set or overwrite options for the node
     *
     * @param {object} options an object with options
     * @returns {null|boolean}
     */
  }, {
    key: "setOptions",
    value: function(e) {
      var t = this.options.shape;
      if (e) {
        if (typeof e.color < "u" && (this._localColor = e.color), e.id !== void 0 && (this.id = e.id), this.id === void 0)
          throw new Error("Node must have an id");
        r.checkMass(e, this.id), e.x !== void 0 && (e.x === null ? (this.x = void 0, this.predefinedPosition = !1) : (this.x = lr(e.x), this.predefinedPosition = !0)), e.y !== void 0 && (e.y === null ? (this.y = void 0, this.predefinedPosition = !1) : (this.y = lr(e.y), this.predefinedPosition = !0)), e.size !== void 0 && (this.baseSize = e.size), e.value !== void 0 && (e.value = RT(e.value)), r.parseOptions(this.options, e, !0, this.globalOptions, this.grouplist);
        var n = [e, this.options, this.defaultOptions];
        return this.chooser = ip("node", n), this._load_images(), this.updateLabelModule(e), e.opacity !== void 0 && r.checkOpacity(e.opacity) && (this.options.opacity = e.opacity), this.updateShape(t), e.hidden !== void 0 || e.physics !== void 0;
      }
    }
    /**
     * Load the images from the options, for the nodes that need them.
     *
     * Images are always loaded, even if they are not used in the current shape.
     * The user may switch to an image shape later on.
     *
     * @private
     */
  }, {
    key: "_load_images",
    value: function() {
      if ((this.options.shape === "circularImage" || this.options.shape === "image") && this.options.image === void 0)
        throw new Error("Option image must be defined for node type '" + this.options.shape + "'");
      if (this.options.image !== void 0) {
        if (this.imagelist === void 0)
          throw new Error("Internal Error: No images provided");
        if (typeof this.options.image == "string")
          this.imageObj = this.imagelist.load(this.options.image, this.options.brokenImage, this.id);
        else {
          if (this.options.image.unselected === void 0)
            throw new Error("No unselected image provided");
          this.imageObj = this.imagelist.load(this.options.image.unselected, this.options.brokenImage, this.id), this.options.image.selected !== void 0 ? this.imageObjAlt = this.imagelist.load(this.options.image.selected, this.options.brokenImage, this.id) : this.imageObjAlt = void 0;
        }
      }
    }
    /**
     * Check that opacity is only between 0 and 1
     *
     * @param {number} opacity
     * @returns {boolean}
     */
  }, {
    key: "getFormattingValues",
    value: (
      /**
       *
       * @returns {{color: *, borderWidth: *, borderColor: *, size: *, borderDashes: (boolean|Array|allOptions.nodes.shapeProperties.borderDashes|{boolean, array}), borderRadius: (number|allOptions.nodes.shapeProperties.borderRadius|{number}|Array), shadow: *, shadowColor: *, shadowSize: *, shadowX: *, shadowY: *}}
       */
      function() {
        var e = {
          color: this.options.color.background,
          opacity: this.options.opacity,
          borderWidth: this.options.borderWidth,
          borderColor: this.options.color.border,
          size: this.options.size,
          borderDashes: this.options.shapeProperties.borderDashes,
          borderRadius: this.options.shapeProperties.borderRadius,
          shadow: this.options.shadow.enabled,
          shadowColor: this.options.shadow.color,
          shadowSize: this.options.shadow.size,
          shadowX: this.options.shadow.x,
          shadowY: this.options.shadow.y
        };
        if (this.selected || this.hover ? this.chooser === !0 ? this.selected ? (this.options.borderWidthSelected != null ? e.borderWidth = this.options.borderWidthSelected : e.borderWidth *= 2, e.color = this.options.color.highlight.background, e.borderColor = this.options.color.highlight.border, e.shadow = this.options.shadow.enabled) : this.hover && (e.color = this.options.color.hover.background, e.borderColor = this.options.color.hover.border, e.shadow = this.options.shadow.enabled) : typeof this.chooser == "function" && (this.chooser(e, this.options.id, this.selected, this.hover), e.shadow === !1 && (e.shadowColor !== this.options.shadow.color || e.shadowSize !== this.options.shadow.size || e.shadowX !== this.options.shadow.x || e.shadowY !== this.options.shadow.y) && (e.shadow = !0)) : e.shadow = this.options.shadow.enabled, this.options.opacity !== void 0) {
          var t = this.options.opacity;
          e.borderColor = Zt(e.borderColor, t), e.color = Zt(e.color, t), e.shadowColor = Zt(e.shadowColor, t);
        }
        return e;
      }
    )
    /**
     *
     * @param {object} options
     */
  }, {
    key: "updateLabelModule",
    value: function(e) {
      (this.options.label === void 0 || this.options.label === null) && (this.options.label = ""), r.updateGroupOptions(this.options, Z$(Z$({}, e), {}, {
        color: e && e.color || this._localColor || void 0
      }), this.grouplist);
      var t = this.grouplist.get(this.options.group, !1), n = [
        e,
        // new options
        this.options,
        // current node options, see comment above for prototype
        t,
        // group options, if any
        this.globalOptions,
        // Currently set global node options
        this.defaultOptions
        // Default global node options
      ];
      this.labelModule.update(this.options, n), this.labelModule.baseSize !== void 0 && (this.baseFontSize = this.labelModule.baseSize);
    }
    /**
     *
     * @param {string} currentShape
     */
  }, {
    key: "updateShape",
    value: function(e) {
      if (e === this.options.shape && this.shape)
        this.shape.setOptions(this.options, this.imageObj, this.imageObjAlt);
      else
        switch (this.options.shape) {
          case "box":
            this.shape = new Nce(this.options, this.body, this.labelModule);
            break;
          case "circle":
            this.shape = new zce(this.options, this.body, this.labelModule);
            break;
          case "circularImage":
            this.shape = new Uce(this.options, this.body, this.labelModule, this.imageObj, this.imageObjAlt);
            break;
          case "custom":
            this.shape = new Xce(this.options, this.body, this.labelModule, this.options.ctxRenderer);
            break;
          case "database":
            this.shape = new Zce(this.options, this.body, this.labelModule);
            break;
          case "diamond":
            this.shape = new rde(this.options, this.body, this.labelModule);
            break;
          case "dot":
            this.shape = new ade(this.options, this.body, this.labelModule);
            break;
          case "ellipse":
            this.shape = new J$(this.options, this.body, this.labelModule);
            break;
          case "icon":
            this.shape = new cde(this.options, this.body, this.labelModule);
            break;
          case "image":
            this.shape = new hde(this.options, this.body, this.labelModule, this.imageObj, this.imageObjAlt);
            break;
          case "square":
            this.shape = new yde(this.options, this.body, this.labelModule);
            break;
          case "hexagon":
            this.shape = new bde(this.options, this.body, this.labelModule);
            break;
          case "star":
            this.shape = new wde(this.options, this.body, this.labelModule);
            break;
          case "text":
            this.shape = new Ode(this.options, this.body, this.labelModule);
            break;
          case "triangle":
            this.shape = new Ide(this.options, this.body, this.labelModule);
            break;
          case "triangleDown":
            this.shape = new xde(this.options, this.body, this.labelModule);
            break;
          default:
            this.shape = new J$(this.options, this.body, this.labelModule);
            break;
        }
      this.needsRefresh();
    }
    /**
     * select this node
     */
  }, {
    key: "select",
    value: function() {
      this.selected = !0, this.needsRefresh();
    }
    /**
     * unselect this node
     */
  }, {
    key: "unselect",
    value: function() {
      this.selected = !1, this.needsRefresh();
    }
    /**
     * Reset the calculated size of the node, forces it to recalculate its size
     */
  }, {
    key: "needsRefresh",
    value: function() {
      this.shape.refreshNeeded = !0;
    }
    /**
     * get the title of this node.
     *
     * @returns {string} title    The title of the node, or undefined when no title
     *                           has been set.
     */
  }, {
    key: "getTitle",
    value: function() {
      return this.options.title;
    }
    /**
     * Calculate the distance to the border of the Node
     *
     * @param {CanvasRenderingContext2D}   ctx
     * @param {number} angle        Angle in radians
     * @returns {number} distance   Distance to the border in pixels
     */
  }, {
    key: "distanceToBorder",
    value: function(e, t) {
      return this.shape.distanceToBorder(e, t);
    }
    /**
     * Check if this node has a fixed x and y position
     *
     * @returns {boolean}      true if fixed, false if not
     */
  }, {
    key: "isFixed",
    value: function() {
      return this.options.fixed.x && this.options.fixed.y;
    }
    /**
     * check if this node is selecte
     *
     * @returns {boolean} selected   True if node is selected, else false
     */
  }, {
    key: "isSelected",
    value: function() {
      return this.selected;
    }
    /**
     * Retrieve the value of the node. Can be undefined
     *
     * @returns {number} value
     */
  }, {
    key: "getValue",
    value: function() {
      return this.options.value;
    }
    /**
     * Get the current dimensions of the label
     *
     * @returns {rect}
     */
  }, {
    key: "getLabelSize",
    value: function() {
      return this.labelModule.size();
    }
    /**
     * Adjust the value range of the node. The node will adjust it's size
     * based on its value.
     *
     * @param {number} min
     * @param {number} max
     * @param {number} total
     */
  }, {
    key: "setValueRange",
    value: function(e, t, n) {
      if (this.options.value !== void 0) {
        var a = this.options.scaling.customScalingFunction(e, t, n, this.options.value), o = this.options.scaling.max - this.options.scaling.min;
        if (this.options.scaling.label.enabled === !0) {
          var s = this.options.scaling.label.max - this.options.scaling.label.min;
          this.options.font.size = this.options.scaling.label.min + a * s;
        }
        this.options.size = this.options.scaling.min + a * o;
      } else
        this.options.size = this.baseSize, this.options.font.size = this.baseFontSize;
      this.updateLabelModule();
    }
    /**
     * Draw this node in the given canvas
     * The 2d context of a HTML canvas can be retrieved by canvas.getContext("2d");
     *
     * @param {CanvasRenderingContext2D}   ctx
     * @returns {object} Callbacks to draw later on higher layers.
     */
  }, {
    key: "draw",
    value: function(e) {
      var t = this.getFormattingValues();
      return this.shape.draw(e, this.x, this.y, this.selected, this.hover, t) || {};
    }
    /**
     * Update the bounding box of the shape
     *
     * @param {CanvasRenderingContext2D}   ctx
     */
  }, {
    key: "updateBoundingBox",
    value: function(e) {
      this.shape.updateBoundingBox(this.x, this.y, e);
    }
    /**
     * Recalculate the size of this node in the given canvas
     * The 2d context of a HTML canvas can be retrieved by canvas.getContext("2d");
     *
     * @param {CanvasRenderingContext2D}   ctx
     */
  }, {
    key: "resize",
    value: function(e) {
      var t = this.getFormattingValues();
      this.shape.resize(e, this.selected, this.hover, t);
    }
    /**
     * Determine all visual elements of this node instance, in which the given
     * point falls within the bounding shape.
     *
     * @param {point} point
     * @returns {Array.<nodeClickItem|nodeLabelClickItem>} list with the items which are on the point
     */
  }, {
    key: "getItemsOnPoint",
    value: function(e) {
      var t = [];
      return this.labelModule.visible() && Eh(this.labelModule.getSize(), e) && t.push({
        nodeId: this.id,
        labelId: 0
      }), Eh(this.shape.boundingBox, e) && t.push({
        nodeId: this.id
      }), t;
    }
    /**
     * Check if this object is overlapping with the provided object
     *
     * @param {object} obj   an object with parameters left, top, right, bottom
     * @returns {boolean}     True if location is located on node
     */
  }, {
    key: "isOverlappingWith",
    value: function(e) {
      return this.shape.left < e.right && this.shape.left + this.shape.width > e.left && this.shape.top < e.bottom && this.shape.top + this.shape.height > e.top;
    }
    /**
     * Check if this object is overlapping with the provided object
     *
     * @param {object} obj   an object with parameters left, top, right, bottom
     * @returns {boolean}     True if location is located on node
     */
  }, {
    key: "isBoundingBoxOverlappingWith",
    value: function(e) {
      return this.shape.boundingBox.left < e.right && this.shape.boundingBox.right > e.left && this.shape.boundingBox.top < e.bottom && this.shape.boundingBox.bottom > e.top;
    }
    /**
     * Check valid values for mass
     *
     * The mass may not be negative or zero. If it is, reset to 1
     *
     * @param {object} options
     * @param {Node.id} id
     * @static
     */
  }], [{
    key: "checkOpacity",
    value: function(e) {
      return 0 <= e && e <= 1;
    }
    /**
     * Check that origin is 'center' or 'top-left'
     *
     * @param {string} origin
     * @returns {boolean}
     */
  }, {
    key: "checkCoordinateOrigin",
    value: function(e) {
      return e === void 0 || e === "center" || e === "top-left";
    }
    /**
     * Copy group option values into the node options.
     *
     * The group options override the global node options, so the copy of group options
     *  must happen *after* the global node options have been set.
     *
     * This method must also be called also if the global node options have changed and the group options did not.
     *
     * @param {object} parentOptions
     * @param {object} newOptions  new values for the options, currently only passed in for check
     * @param {object} groupList
     */
  }, {
    key: "updateGroupOptions",
    value: function(e, t, n) {
      var a;
      if (n !== void 0) {
        var o = e.group;
        if (t !== void 0 && t.group !== void 0 && o !== t.group)
          throw new Error("updateGroupOptions: group values in options don't match.");
        var s = typeof o == "number" || typeof o == "string" && o != "";
        if (s) {
          var u = n.get(o);
          u.opacity !== void 0 && t.opacity === void 0 && (r.checkOpacity(u.opacity) || (console.error("Invalid option for node opacity. Value must be between 0 and 1, found: " + u.opacity), u.opacity = void 0));
          var l = Dt(a = kle(t)).call(a, function(c) {
            return t[c] != null;
          });
          l.push("font"), Bu(l, e, u), e.color = mh(e.color);
        }
      }
    }
    /**
     * This process all possible shorthands in the new options and makes sure that the parentOptions are fully defined.
     * Static so it can also be used by the handler.
     *
     * @param {object} parentOptions
     * @param {object} newOptions
     * @param {boolean} [allowDeletion=false]
     * @param {object} [globalOptions={}]
     * @param {object} [groupList]
     * @static
     */
  }, {
    key: "parseOptions",
    value: function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 ? arguments[4] : void 0, s = ["color", "fixed", "shadow"];
      if (Bu(s, e, t, n), r.checkMass(t), e.opacity !== void 0 && (r.checkOpacity(e.opacity) || (console.error("Invalid option for node opacity. Value must be between 0 and 1, found: " + e.opacity), e.opacity = void 0)), t.opacity !== void 0 && (r.checkOpacity(t.opacity) || (console.error("Invalid option for node opacity. Value must be between 0 and 1, found: " + t.opacity), t.opacity = void 0)), t.shapeProperties && !r.checkCoordinateOrigin(t.shapeProperties.coordinateOrigin) && console.error("Invalid option for node coordinateOrigin, found: " + t.shapeProperties.coordinateOrigin), Qt(e, t, "shadow", a), t.color !== void 0 && t.color !== null) {
        var u = mh(t.color);
        nT(e.color, u);
      } else n === !0 && t.color === null && (e.color = un(a.color));
      t.fixed !== void 0 && t.fixed !== null && (typeof t.fixed == "boolean" ? (e.fixed.x = t.fixed, e.fixed.y = t.fixed) : (t.fixed.x !== void 0 && typeof t.fixed.x == "boolean" && (e.fixed.x = t.fixed.x), t.fixed.y !== void 0 && typeof t.fixed.y == "boolean" && (e.fixed.y = t.fixed.y))), n === !0 && t.font === null && (e.font = un(a.font)), r.updateGroupOptions(e, t, o), t.scaling !== void 0 && Qt(e.scaling, t.scaling, "label", a.scaling);
    }
  }, {
    key: "checkMass",
    value: function(e, t) {
      if (e.mass !== void 0 && e.mass <= 0) {
        var n = "";
        t !== void 0 && (n = " in node id: " + t), console.error("%cNegative or zero mass disallowed" + n + ", setting mass to 1.", sT), e.mass = 1;
      }
    }
  }]), r;
})();
function Rde(r, i) {
  var e = typeof mn < "u" && ai(r) || r["@@iterator"];
  if (!e) {
    if (Te(r) || (e = Ade(r)) || i) {
      e && (r = e);
      var t = 0, n = function() {
      };
      return { s: n, n: function() {
        return t >= r.length ? { done: !0 } : { done: !1, value: r[t++] };
      }, e: function(l) {
        throw l;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, s;
  return { s: function() {
    e = e.call(r);
  }, n: function() {
    var l = e.next();
    return a = l.done, l;
  }, e: function(l) {
    o = !0, s = l;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (o) throw s;
    }
  } };
}
function Ade(r, i) {
  var e;
  if (r) {
    if (typeof r == "string") return e1(r, i);
    var t = mt(e = Object.prototype.toString.call(r)).call(e, 8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return ii(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return e1(r, i);
  }
}
function e1(r, i) {
  (i == null || i > r.length) && (i = r.length);
  for (var e = 0, t = new Array(i); e < i; e++) t[e] = r[e];
  return t;
}
var Dde = /* @__PURE__ */ (function() {
  function r(i, e, t, n) {
    var a, o = this;
    if (M(this, r), this.body = i, this.images = e, this.groups = t, this.layoutEngine = n, this.body.functions.createNode = A(a = this.create).call(a, this), this.nodesListeners = {
      add: function(u, l) {
        o.add(l.items);
      },
      update: function(u, l) {
        o.update(l.items, l.data, l.oldData);
      },
      remove: function(u, l) {
        o.remove(l.items);
      }
    }, this.defaultOptions = {
      borderWidth: 1,
      borderWidthSelected: void 0,
      brokenImage: void 0,
      color: {
        border: "#2B7CE9",
        background: "#97C2FC",
        highlight: {
          border: "#2B7CE9",
          background: "#D2E5FF"
        },
        hover: {
          border: "#2B7CE9",
          background: "#D2E5FF"
        }
      },
      opacity: void 0,
      // number between 0 and 1
      fixed: {
        x: !1,
        y: !1
      },
      font: {
        color: "#343434",
        size: 14,
        // px
        face: "arial",
        background: "none",
        strokeWidth: 0,
        // px
        strokeColor: "#ffffff",
        align: "center",
        vadjust: 0,
        multi: !1,
        bold: {
          mod: "bold"
        },
        boldital: {
          mod: "bold italic"
        },
        ital: {
          mod: "italic"
        },
        mono: {
          mod: "",
          size: 15,
          // px
          face: "monospace",
          vadjust: 2
        }
      },
      group: void 0,
      hidden: !1,
      icon: {
        face: "FontAwesome",
        //'FontAwesome',
        code: void 0,
        //'\uf007',
        size: 50,
        //50,
        color: "#2B7CE9"
        //'#aa00ff'
      },
      image: void 0,
      // --> URL
      imagePadding: {
        // only for image shape
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      label: void 0,
      labelHighlightBold: !0,
      level: void 0,
      margin: {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
      },
      mass: 1,
      physics: !0,
      scaling: {
        min: 10,
        max: 30,
        label: {
          enabled: !1,
          min: 14,
          max: 30,
          maxVisible: 30,
          drawThreshold: 5
        },
        customScalingFunction: function(u, l, c, d) {
          if (l === u)
            return 0.5;
          var f = 1 / (l - u);
          return Math.max(0, (d - u) * f);
        }
      },
      shadow: {
        enabled: !1,
        color: "rgba(0,0,0,0.5)",
        size: 10,
        x: 5,
        y: 5
      },
      shape: "ellipse",
      shapeProperties: {
        borderDashes: !1,
        // only for borders
        borderRadius: 6,
        // only for box shape
        interpolation: !0,
        // only for image and circularImage shapes
        useImageSize: !1,
        // only for image and circularImage shapes
        useBorderWithImage: !1,
        // only for image shape
        coordinateOrigin: "center"
        // only for image and circularImage shapes
      },
      size: 25,
      title: void 0,
      value: void 0,
      x: void 0,
      y: void 0
    }, this.defaultOptions.mass <= 0)
      throw "Internal error: mass in defaultOptions of NodesHandler may not be zero or negative";
    this.options = un(this.defaultOptions), this.bindEventListeners();
  }
  return N(r, [{
    key: "bindEventListeners",
    value: function() {
      var e, t, n = this;
      this.body.emitter.on("refreshNodes", A(e = this.refresh).call(e, this)), this.body.emitter.on("refresh", A(t = this.refresh).call(t, this)), this.body.emitter.on("destroy", function() {
        fe(n.nodesListeners, function(a, o) {
          n.body.data.nodes && n.body.data.nodes.off(o, a);
        }), delete n.body.functions.createNode, delete n.nodesListeners.add, delete n.nodesListeners.update, delete n.nodesListeners.remove, delete n.nodesListeners;
      });
    }
    /**
     *
     * @param {object} options
     */
  }, {
    key: "setOptions",
    value: function(e) {
      if (e !== void 0) {
        if (Wt.parseOptions(this.options, e), e.opacity !== void 0 && (wh(e.opacity) || !Pn(e.opacity) || e.opacity < 0 || e.opacity > 1 ? console.error("Invalid option for node opacity. Value must be between 0 and 1, found: " + e.opacity) : this.options.opacity = e.opacity), e.shape !== void 0)
          for (var t in this.body.nodes)
            Object.prototype.hasOwnProperty.call(this.body.nodes, t) && this.body.nodes[t].updateShape();
        if (typeof e.font < "u" || typeof e.widthConstraint < "u" || typeof e.heightConstraint < "u")
          for (var n = 0, a = We(this.body.nodes); n < a.length; n++) {
            var o = a[n];
            this.body.nodes[o].updateLabelModule(), this.body.nodes[o].needsRefresh();
          }
        if (e.size !== void 0)
          for (var s in this.body.nodes)
            Object.prototype.hasOwnProperty.call(this.body.nodes, s) && this.body.nodes[s].needsRefresh();
        (e.hidden !== void 0 || e.physics !== void 0) && this.body.emitter.emit("_dataChanged");
      }
    }
    /**
     * Set a data set with nodes for the network
     *
     * @param {Array | DataSet | DataView} nodes         The data containing the nodes.
     * @param {boolean} [doNotEmit=false] - Suppress data changed event.
     * @private
     */
  }, {
    key: "setData",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = this.body.data.nodes;
      if (RE("id", e))
        this.body.data.nodes = e;
      else if (Te(e))
        this.body.data.nodes = new Hn(), this.body.data.nodes.add(e);
      else if (!e)
        this.body.data.nodes = new Hn();
      else
        throw new TypeError("Array or DataSet expected");
      if (n && fe(this.nodesListeners, function(s, u) {
        n.off(u, s);
      }), this.body.nodes = {}, this.body.data.nodes) {
        var a = this;
        fe(this.nodesListeners, function(s, u) {
          a.body.data.nodes.on(u, s);
        });
        var o = this.body.data.nodes.getIds();
        this.add(o, !0);
      }
      t === !1 && this.body.emitter.emit("_dataChanged");
    }
    /**
     * Add nodes
     *
     * @param {number[] | string[]} ids
     * @param {boolean} [doNotEmit=false]
     * @private
     */
  }, {
    key: "add",
    value: function(e) {
      for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n, a = [], o = 0; o < e.length; o++) {
        n = e[o];
        var s = this.body.data.nodes.get(n), u = this.create(s);
        a.push(u), this.body.nodes[n] = u;
      }
      this.layoutEngine.positionInitially(a), t === !1 && this.body.emitter.emit("_dataChanged");
    }
    /**
     * Update existing nodes, or create them when not yet existing
     *
     * @param {number[] | string[]} ids id's of changed nodes
     * @param {Array} changedData array with changed data
     * @param {Array|undefined} oldData optional; array with previous data
     * @private
     */
  }, {
    key: "update",
    value: function(e, t, n) {
      for (var a = this.body.nodes, o = !1, s = 0; s < e.length; s++) {
        var u = e[s], l = a[u], c = t[s];
        l !== void 0 ? l.setOptions(c) && (o = !0) : (o = !0, l = this.create(c), a[u] = l);
      }
      !o && n !== void 0 && (o = Sue(t).call(t, function(d, f) {
        var h = n[f];
        return h && h.level !== d.level;
      })), o === !0 ? this.body.emitter.emit("_dataChanged") : this.body.emitter.emit("_dataUpdated");
    }
    /**
     * Remove existing nodes. If nodes do not exist, the method will just ignore it.
     *
     * @param {number[] | string[]} ids
     * @private
     */
  }, {
    key: "remove",
    value: function(e) {
      for (var t = this.body.nodes, n = 0; n < e.length; n++) {
        var a = e[n];
        delete t[a];
      }
      this.body.emitter.emit("_dataChanged");
    }
    /**
     * create a node
     *
     * @param {object} properties
     * @param {class} [constructorClass=Node.default]
     * @returns {*}
     */
  }, {
    key: "create",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Wt;
      return new t(e, this.body, this.images, this.groups, this.options, this.defaultOptions);
    }
    /**
     *
     * @param {boolean} [clearPositions=false]
     */
  }, {
    key: "refresh",
    value: function() {
      var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      fe(this.body.nodes, function(n, a) {
        var o = e.body.data.nodes.get(a);
        o !== void 0 && (t === !0 && n.setOptions({
          x: null,
          y: null
        }), n.setOptions({
          fixed: !1
        }), n.setOptions(o));
      });
    }
    /**
     * Returns the positions of the nodes.
     *
     * @param {Array.<Node.id> | string} [ids]  --> optional, can be array of nodeIds, can be string
     * @returns {{}}
     */
  }, {
    key: "getPositions",
    value: function(e) {
      var t = {};
      if (e !== void 0) {
        if (Te(e) === !0) {
          for (var n = 0; n < e.length; n++)
            if (this.body.nodes[e[n]] !== void 0) {
              var a = this.body.nodes[e[n]];
              t[e[n]] = {
                x: Math.round(a.x),
                y: Math.round(a.y)
              };
            }
        } else if (this.body.nodes[e] !== void 0) {
          var o = this.body.nodes[e];
          t[e] = {
            x: Math.round(o.x),
            y: Math.round(o.y)
          };
        }
      } else
        for (var s = 0; s < this.body.nodeIndices.length; s++) {
          var u = this.body.nodes[this.body.nodeIndices[s]];
          t[this.body.nodeIndices[s]] = {
            x: Math.round(u.x),
            y: Math.round(u.y)
          };
        }
      return t;
    }
    /**
     * Retrieves the x y position of a specific id.
     *
     * @param {string} id The id to retrieve.
     * @throws {TypeError} If no id is included.
     * @throws {ReferenceError} If an invalid id is provided.
     * @returns {{ x: number, y: number }} Returns X, Y canvas position of the node with given id.
     */
  }, {
    key: "getPosition",
    value: function(e) {
      if (e == null)
        throw new TypeError("No id was specified for getPosition method.");
      if (this.body.nodes[e] == null)
        throw new ReferenceError("NodeId provided for getPosition does not exist. Provided: ".concat(e));
      return {
        x: Math.round(this.body.nodes[e].x),
        y: Math.round(this.body.nodes[e].y)
      };
    }
    /**
     * Load the XY positions of the nodes into the dataset.
     */
  }, {
    key: "storePositions",
    value: function() {
      var e = [], t = this.body.data.nodes.getDataSet(), n = Rde(t.get()), a;
      try {
        for (n.s(); !(a = n.n()).done; ) {
          var o = a.value, s = o.id, u = this.body.nodes[s], l = Math.round(u.x), c = Math.round(u.y);
          (o.x !== l || o.y !== c) && e.push({
            id: s,
            x: l,
            y: c
          });
        }
      } catch (d) {
        n.e(d);
      } finally {
        n.f();
      }
      t.update(e);
    }
    /**
     * get the bounding box of a node.
     *
     * @param {Node.id} nodeId
     * @returns {j|*}
     */
  }, {
    key: "getBoundingBox",
    value: function(e) {
      if (this.body.nodes[e] !== void 0)
        return this.body.nodes[e].shape.boundingBox;
    }
    /**
     * Get the Ids of nodes connected to this node.
     *
     * @param {Node.id} nodeId
     * @param {'to'|'from'|undefined} direction values 'from' and 'to' select respectively parent and child nodes only.
     *                                          Any other value returns both parent and child nodes.
     * @returns {Array}
     */
  }, {
    key: "getConnectedNodes",
    value: function(e, t) {
      var n = [];
      if (this.body.nodes[e] !== void 0)
        for (var a = this.body.nodes[e], o = {}, s = 0; s < a.edges.length; s++) {
          var u = a.edges[s];
          t !== "to" && u.toId == a.id ? o[u.fromId] === void 0 && (n.push(u.fromId), o[u.fromId] = !0) : t !== "from" && u.fromId == a.id && o[u.toId] === void 0 && (n.push(u.toId), o[u.toId] = !0);
        }
      return n;
    }
    /**
     * Get the ids of the edges connected to this node.
     *
     * @param {Node.id} nodeId
     * @returns {*}
     */
  }, {
    key: "getConnectedEdges",
    value: function(e) {
      var t = [];
      if (this.body.nodes[e] !== void 0)
        for (var n = this.body.nodes[e], a = 0; a < n.edges.length; a++)
          t.push(n.edges[a].id);
      else
        console.error("NodeId provided for getConnectedEdges does not exist. Provided: ", e);
      return t;
    }
    /**
     * Move a node.
     *
     * @param {Node.id} nodeId
     * @param {number} x
     * @param {number} y
     */
  }, {
    key: "moveNode",
    value: function(e, t, n) {
      var a = this;
      this.body.nodes[e] !== void 0 ? (this.body.nodes[e].x = Number(t), this.body.nodes[e].y = Number(n), Er(function() {
        a.body.emitter.emit("startSimulation");
      }, 0)) : console.error("Node id supplied to moveNode does not exist. Provided: ", e);
    }
  }]), r;
})(), t1 = ht, Mde = function(r) {
  return r !== void 0 && (t1(r, "value") || t1(r, "writable"));
}, Nde = oe, Fde = Kt, Bde = ft, jde = Yt, Lde = Mde, zde = pa, Wde = Il;
function jT(r, i) {
  var e = arguments.length < 3 ? r : arguments[2], t, n;
  if (jde(r) === e) return r[i];
  if (t = zde.f(r, i), t) return Lde(t) ? t.value : t.get === void 0 ? void 0 : Fde(t.get, e);
  if (Bde(n = Wde(r))) return jT(n, i, e);
}
Nde({ target: "Reflect", stat: !0 }, {
  get: jT
});
var Hde = me, Ude = Hde.Reflect.get, Vde = Ude, Gde = Vde, Kde = Gde, qde = Kde, Yde = qde, Xde = Yde, Jde = Xde, r1 = /* @__PURE__ */ Y(Jde), Qde = IT, Zde = Qde, efe = Zde, tfe = efe, rfe = tfe, nfe = /* @__PURE__ */ Y(rfe);
function ife(r, i) {
  for (; !Object.prototype.hasOwnProperty.call(r, i) && (r = V(r), r !== null); )
    ;
  return r;
}
function du() {
  if (typeof Reflect < "u" && r1) {
    var r;
    du = op(r = r1).call(r);
  } else
    du = function(e, t, n) {
      var a = ife(e, t);
      if (a) {
        var o = nfe(a, t);
        return o.get ? o.get.call(arguments.length < 3 ? e : n) : o.value;
      }
    };
  return du.apply(this, arguments);
}
var afe = oe, n1 = Math.hypot, ofe = Math.abs, sfe = Math.sqrt, ufe = !!n1 && n1(1 / 0, NaN) !== 1 / 0;
afe({ target: "Math", stat: !0, forced: ufe }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  hypot: function(i, e) {
    for (var t = 0, n = 0, a = arguments.length, o = 0, s, u; n < a; )
      s = ofe(arguments[n++]), o < s ? (u = o / s, t = t * u * u + 1, o = s) : s > 0 ? (u = s / o, t += u * u) : t += s;
    return o === 1 / 0 ? 1 / 0 : o * sfe(t);
  }
});
var lfe = me, cfe = lfe.Math.hypot, dfe = cfe, ffe = dfe, hfe = ffe, vfe = /* @__PURE__ */ Y(hfe);
function LT(r) {
  var i = pfe();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function pfe() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Xe = /* @__PURE__ */ (function() {
  function r() {
    M(this, r);
  }
  return N(r, null, [{
    key: "transform",
    value: (
      /**
       * Apply transformation on points for display.
       *
       * The following is done:
       * - rotate by the specified angle
       * - multiply the (normalized) coordinates by the passed length
       * - offset by the target coordinates
       *
       * @param points - The point(s) to be transformed.
       * @param arrowData - The data determining the result of the transformation.
       */
      function(e, t) {
        Te(e) || (e = [e]);
        for (var n = t.point.x, a = t.point.y, o = t.angle, s = t.length, u = 0; u < e.length; ++u) {
          var l = e[u], c = l.x * Math.cos(o) - l.y * Math.sin(o), d = l.x * Math.sin(o) + l.y * Math.cos(o);
          l.x = n + s * c, l.y = a + s * d;
        }
      }
    )
    /**
     * Draw a closed path using the given real coordinates.
     *
     * @param ctx - The path will be rendered into this context.
     * @param points - The points of the path.
     */
  }, {
    key: "drawPath",
    value: function(e, t) {
      e.beginPath(), e.moveTo(t[0].x, t[0].y);
      for (var n = 1; n < t.length; ++n)
        e.lineTo(t[n].x, t[n].y);
      e.closePath();
    }
  }]), r;
})(), yfe = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = LT(e);
  function e() {
    return M(this, e), i.apply(this, arguments);
  }
  return N(e, null, [{
    key: "draw",
    value: (
      /**
       * Draw this shape at the end of a line.
       *
       * @param ctx - The shape will be rendered into this context.
       * @param arrowData - The data determining the shape.
       * @returns False as there is no way to fill an image.
       */
      function(n, a) {
        if (a.image) {
          n.save(), n.translate(a.point.x, a.point.y), n.rotate(Math.PI / 2 + a.angle);
          var o = a.imageWidth != null ? a.imageWidth : a.image.width, s = a.imageHeight != null ? a.imageHeight : a.image.height;
          a.image.drawImageAtPosition(
            n,
            1,
            // scale
            -o / 2,
            // x
            0,
            // y
            o,
            s
          ), n.restore();
        }
        return !1;
      }
    )
  }]), e;
})(Xe), gfe = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = LT(e);
  function e() {
    return M(this, e), i.apply(this, arguments);
  }
  return N(e, null, [{
    key: "draw",
    value: (
      /**
       * Draw this shape at the end of a line.
       *
       * @param ctx - The shape will be rendered into this context.
       * @param arrowData - The data determining the shape.
       * @returns True because ctx.fill() can be used to fill the arrow.
       */
      function(n, a) {
        var o = [{
          x: 0,
          y: 0
        }, {
          x: -1,
          y: 0.3
        }, {
          x: -0.9,
          y: 0
        }, {
          x: -1,
          y: -0.3
        }];
        return Xe.transform(o, a), Xe.drawPath(n, o), !0;
      }
    )
  }]), e;
})(Xe), mfe = /* @__PURE__ */ (function() {
  function r() {
    M(this, r);
  }
  return N(r, null, [{
    key: "draw",
    value: (
      /**
       * Draw this shape at the end of a line.
       *
       * @param ctx - The shape will be rendered into this context.
       * @param arrowData - The data determining the shape.
       * @returns True because ctx.fill() can be used to fill the arrow.
       */
      function(e, t) {
        var n = [{
          x: -1,
          y: 0
        }, {
          x: 0,
          y: 0.3
        }, {
          x: -0.4,
          y: 0
        }, {
          x: 0,
          y: -0.3
        }];
        return Xe.transform(n, t), Xe.drawPath(e, n), !0;
      }
    )
  }]), r;
})(), bfe = /* @__PURE__ */ (function() {
  function r() {
    M(this, r);
  }
  return N(r, null, [{
    key: "draw",
    value: (
      /**
       * Draw this shape at the end of a line.
       *
       * @param ctx - The shape will be rendered into this context.
       * @param arrowData - The data determining the shape.
       * @returns True because ctx.fill() can be used to fill the arrow.
       */
      function(e, t) {
        var n = {
          x: -0.4,
          y: 0
        };
        Xe.transform(n, t), e.strokeStyle = e.fillStyle, e.fillStyle = "rgba(0, 0, 0, 0)";
        var a = Math.PI, o = t.angle - a / 2, s = t.angle + a / 2;
        return e.beginPath(), e.arc(n.x, n.y, t.length * 0.4, o, s, !1), e.stroke(), !0;
      }
    )
  }]), r;
})(), $fe = /* @__PURE__ */ (function() {
  function r() {
    M(this, r);
  }
  return N(r, null, [{
    key: "draw",
    value: (
      /**
       * Draw this shape at the end of a line.
       *
       * @param ctx - The shape will be rendered into this context.
       * @param arrowData - The data determining the shape.
       * @returns True because ctx.fill() can be used to fill the arrow.
       */
      function(e, t) {
        var n = {
          x: -0.3,
          y: 0
        };
        Xe.transform(n, t), e.strokeStyle = e.fillStyle, e.fillStyle = "rgba(0, 0, 0, 0)";
        var a = Math.PI, o = t.angle + a / 2, s = t.angle + 3 * a / 2;
        return e.beginPath(), e.arc(n.x, n.y, t.length * 0.4, o, s, !1), e.stroke(), !0;
      }
    )
  }]), r;
})(), _fe = /* @__PURE__ */ (function() {
  function r() {
    M(this, r);
  }
  return N(r, null, [{
    key: "draw",
    value: (
      /**
       * Draw this shape at the end of a line.
       *
       * @param ctx - The shape will be rendered into this context.
       * @param arrowData - The data determining the shape.
       * @returns True because ctx.fill() can be used to fill the arrow.
       */
      function(e, t) {
        var n = [{
          x: 0.02,
          y: 0
        }, {
          x: -1,
          y: 0.3
        }, {
          x: -1,
          y: -0.3
        }];
        return Xe.transform(n, t), Xe.drawPath(e, n), !0;
      }
    )
  }]), r;
})(), wfe = /* @__PURE__ */ (function() {
  function r() {
    M(this, r);
  }
  return N(r, null, [{
    key: "draw",
    value: (
      /**
       * Draw this shape at the end of a line.
       *
       * @param ctx - The shape will be rendered into this context.
       * @param arrowData - The data determining the shape.
       * @returns True because ctx.fill() can be used to fill the arrow.
       */
      function(e, t) {
        var n = [{
          x: 0,
          y: 0.3
        }, {
          x: 0,
          y: -0.3
        }, {
          x: -1,
          y: 0
        }];
        return Xe.transform(n, t), Xe.drawPath(e, n), !0;
      }
    )
  }]), r;
})(), Efe = /* @__PURE__ */ (function() {
  function r() {
    M(this, r);
  }
  return N(r, null, [{
    key: "draw",
    value: (
      /**
       * Draw this shape at the end of a line.
       *
       * @param ctx - The shape will be rendered into this context.
       * @param arrowData - The data determining the shape.
       * @returns True because ctx.fill() can be used to fill the arrow.
       */
      function(e, t) {
        var n = {
          x: -0.4,
          y: 0
        };
        return Xe.transform(n, t), Ev(e, n.x, n.y, t.length * 0.4), !0;
      }
    )
  }]), r;
})(), Sfe = /* @__PURE__ */ (function() {
  function r() {
    M(this, r);
  }
  return N(r, null, [{
    key: "draw",
    value: (
      /**
       * Draw this shape at the end of a line.
       *
       * @param ctx - The shape will be rendered into this context.
       * @param arrowData - The data determining the shape.
       * @returns True because ctx.fill() can be used to fill the arrow.
       */
      function(e, t) {
        var n = [{
          x: 0,
          y: 0.5
        }, {
          x: 0,
          y: -0.5
        }, {
          x: -0.15,
          y: -0.5
        }, {
          x: -0.15,
          y: 0.5
        }];
        return Xe.transform(n, t), Xe.drawPath(e, n), !0;
      }
    )
  }]), r;
})(), Ofe = /* @__PURE__ */ (function() {
  function r() {
    M(this, r);
  }
  return N(r, null, [{
    key: "draw",
    value: (
      /**
       * Draw this shape at the end of a line.
       *
       * @param ctx - The shape will be rendered into this context.
       * @param arrowData - The data determining the shape.
       * @returns True because ctx.fill() can be used to fill the arrow.
       */
      function(e, t) {
        var n = [{
          x: 0,
          y: 0.3
        }, {
          x: 0,
          y: -0.3
        }, {
          x: -0.6,
          y: -0.3
        }, {
          x: -0.6,
          y: 0.3
        }];
        return Xe.transform(n, t), Xe.drawPath(e, n), !0;
      }
    )
  }]), r;
})(), Tfe = /* @__PURE__ */ (function() {
  function r() {
    M(this, r);
  }
  return N(r, null, [{
    key: "draw",
    value: (
      /**
       * Draw this shape at the end of a line.
       *
       * @param ctx - The shape will be rendered into this context.
       * @param arrowData - The data determining the shape.
       * @returns True because ctx.fill() can be used to fill the arrow.
       */
      function(e, t) {
        var n = [{
          x: 0,
          y: 0
        }, {
          x: -0.5,
          y: -0.3
        }, {
          x: -1,
          y: 0
        }, {
          x: -0.5,
          y: 0.3
        }];
        return Xe.transform(n, t), Xe.drawPath(e, n), !0;
      }
    )
  }]), r;
})(), Pfe = /* @__PURE__ */ (function() {
  function r() {
    M(this, r);
  }
  return N(r, null, [{
    key: "draw",
    value: (
      /**
       * Draw this shape at the end of a line.
       *
       * @param ctx - The shape will be rendered into this context.
       * @param arrowData - The data determining the shape.
       * @returns True because ctx.fill() can be used to fill the arrow.
       */
      function(e, t) {
        var n = [{
          x: -1,
          y: 0.3
        }, {
          x: -0.5,
          y: 0
        }, {
          x: -1,
          y: -0.3
        }, {
          x: 0,
          y: 0
        }];
        return Xe.transform(n, t), Xe.drawPath(e, n), !0;
      }
    )
  }]), r;
})(), zT = /* @__PURE__ */ (function() {
  function r() {
    M(this, r);
  }
  return N(r, null, [{
    key: "draw",
    value: (
      /**
       * Draw an endpoint.
       *
       * @param ctx - The shape will be rendered into this context.
       * @param arrowData - The data determining the shape.
       * @returns True if ctx.fill() can be used to fill the arrow, false otherwise.
       */
      function(e, t) {
        var n;
        switch (t.type && (n = t.type.toLowerCase()), n) {
          case "image":
            return yfe.draw(e, t);
          case "circle":
            return Efe.draw(e, t);
          case "box":
            return Ofe.draw(e, t);
          case "crow":
            return mfe.draw(e, t);
          case "curve":
            return bfe.draw(e, t);
          case "diamond":
            return Tfe.draw(e, t);
          case "inv_curve":
            return $fe.draw(e, t);
          case "triangle":
            return _fe.draw(e, t);
          case "inv_triangle":
            return wfe.draw(e, t);
          case "bar":
            return Sfe.draw(e, t);
          case "vee":
            return Pfe.draw(e, t);
          case "arrow":
          // fall-through
          default:
            return gfe.draw(e, t);
        }
      }
    )
  }]), r;
})();
function i1(r, i) {
  var e = We(r);
  if (dn) {
    var t = dn(r);
    i && (t = Dt(t).call(t, function(n) {
      return bn(r, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function a1(r) {
  for (var i = 1; i < arguments.length; i++) {
    var e, t, n = arguments[i] != null ? arguments[i] : {};
    i % 2 ? xe(e = i1(Object(n), !0)).call(e, function(a) {
      Vl(r, a, n[a]);
    }) : fn ? Hl(r, fn(n)) : xe(t = i1(Object(n))).call(t, function(a) {
      Ul(r, a, bn(n, a));
    });
  }
  return r;
}
var WT = /* @__PURE__ */ (function() {
  function r(i, e, t) {
    M(this, r), this._body = e, this._labelModule = t, this.color = {}, this.colorDirty = !0, this.hoverWidth = 1.5, this.selectionWidth = 2, this.setOptions(i), this.fromPoint = this.from, this.toPoint = this.to;
  }
  return N(r, [{
    key: "connect",
    value: function() {
      this.from = this._body.nodes[this.options.from], this.to = this._body.nodes[this.options.to];
    }
    /** @inheritDoc */
  }, {
    key: "cleanup",
    value: function() {
      return !1;
    }
    /**
     * Set new edge options.
     *
     * @param options - The new edge options object.
     */
  }, {
    key: "setOptions",
    value: function(e) {
      this.options = e, this.from = this._body.nodes[this.options.from], this.to = this._body.nodes[this.options.to], this.id = this.options.id;
    }
    /** @inheritDoc */
  }, {
    key: "drawLine",
    value: function(e, t, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.getViaNode();
      e.strokeStyle = this.getColor(e, t), e.lineWidth = t.width, t.dashes !== !1 ? this._drawDashedLine(e, t, o) : this._drawLine(e, t, o);
    }
    /**
     * Draw a line with given style between two nodes through supplied node(s).
     *
     * @param ctx - The context that will be used for rendering.
     * @param values - Formatting values like color, opacity or shadow.
     * @param viaNode - Additional control point(s) for the edge.
     * @param fromPoint - TODO: Seems ignored, remove?
     * @param toPoint - TODO: Seems ignored, remove?
     */
  }, {
    key: "_drawLine",
    value: function(e, t, n, a, o) {
      if (this.from != this.to)
        this._line(e, t, n, a, o);
      else {
        var s = this._getCircleData(e), u = He(s, 3), l = u[0], c = u[1], d = u[2];
        this._circle(e, t, l, c, d);
      }
    }
    /**
     * Draw a dashed line with given style between two nodes through supplied node(s).
     *
     * @param ctx - The context that will be used for rendering.
     * @param values - Formatting values like color, opacity or shadow.
     * @param viaNode - Additional control point(s) for the edge.
     * @param _fromPoint - Ignored (TODO: remove in the future).
     * @param _toPoint - Ignored (TODO: remove in the future).
     */
  }, {
    key: "_drawDashedLine",
    value: function(e, t, n, a, o) {
      e.lineCap = "round";
      var s = Te(t.dashes) ? t.dashes : [5, 5];
      if (e.setLineDash !== void 0) {
        if (e.save(), e.setLineDash(s), e.lineDashOffset = 0, this.from != this.to)
          this._line(e, t, n);
        else {
          var u = this._getCircleData(e), l = He(u, 3), c = l[0], d = l[1], f = l[2];
          this._circle(e, t, c, d, f);
        }
        e.setLineDash([0]), e.lineDashOffset = 0, e.restore();
      } else {
        if (this.from != this.to)
          tS(e, this.from.x, this.from.y, this.to.x, this.to.y, s);
        else {
          var h = this._getCircleData(e), v = He(h, 3), p = v[0], y = v[1], m = v[2];
          this._circle(e, t, p, y, m);
        }
        this.enableShadow(e, t), e.stroke(), this.disableShadow(e, t);
      }
    }
    /**
     * Find the intersection between the border of the node and the edge.
     *
     * @param node - The node (either from or to node of the edge).
     * @param ctx - The context that will be used for rendering.
     * @param options - Additional options.
     * @returns Cartesian coordinates of the intersection between the border of the node and the edge.
     */
  }, {
    key: "findBorderPosition",
    value: function(e, t, n) {
      return this.from != this.to ? this._findBorderPosition(e, t, n) : this._findBorderPositionCircle(e, t, n);
    }
    /** @inheritDoc */
  }, {
    key: "findBorderPositions",
    value: function(e) {
      if (this.from != this.to)
        return {
          from: this._findBorderPosition(this.from, e),
          to: this._findBorderPosition(this.to, e)
        };
      var t, n = mt(t = this._getCircleData(e)).call(t, 0, 2), a = He(n, 2), o = a[0], s = a[1];
      return {
        from: this._findBorderPositionCircle(this.from, e, {
          x: o,
          y: s,
          low: 0.25,
          high: 0.6,
          direction: -1
        }),
        to: this._findBorderPositionCircle(this.from, e, {
          x: o,
          y: s,
          low: 0.6,
          high: 0.8,
          direction: 1
        })
      };
    }
    /**
     * Compute the center point and radius of an edge connected to the same node at both ends.
     *
     * @param ctx - The context that will be used for rendering.
     * @returns `[x, y, radius]`
     */
  }, {
    key: "_getCircleData",
    value: function(e) {
      var t = this.options.selfReference.size;
      e !== void 0 && this.from.shape.width === void 0 && this.from.shape.resize(e);
      var n = AT(e, this.options.selfReference.angle, t, this.from);
      return [n.x, n.y, t];
    }
    /**
     * Get a point on a circle.
     *
     * @param x - Center of the circle on the x axis.
     * @param y - Center of the circle on the y axis.
     * @param radius - Radius of the circle.
     * @param position - Value between 0 (line start) and 1 (line end).
     * @returns Cartesian coordinates of requested point on the circle.
     */
  }, {
    key: "_pointOnCircle",
    value: function(e, t, n, a) {
      var o = a * 2 * Math.PI;
      return {
        x: e + n * Math.cos(o),
        y: t - n * Math.sin(o)
      };
    }
    /**
     * Find the intersection between the border of the node and the edge.
     *
     * @remarks
     * This function uses binary search to look for the point where the circle crosses the border of the node.
     * @param nearNode - The node (either from or to node of the edge).
     * @param ctx - The context that will be used for rendering.
     * @param options - Additional options.
     * @returns Cartesian coordinates of the intersection between the border of the node and the edge.
     */
  }, {
    key: "_findBorderPositionCircle",
    value: function(e, t, n) {
      var a = n.x, o = n.y, s = n.low, u = n.high, l = n.direction, c = 10, d = this.options.selfReference.size, f = 0.05, h, v = (s + u) * 0.5, p = 0;
      this.options.arrowStrikethrough === !0 && (l === -1 ? p = this.options.endPointOffset.from : l === 1 && (p = this.options.endPointOffset.to));
      var y = 0;
      do {
        v = (s + u) * 0.5, h = this._pointOnCircle(a, o, d, v);
        var m = Math.atan2(e.y - h.y, e.x - h.x), b = e.distanceToBorder(t, m) + p, w = Math.sqrt(Math.pow(h.x - e.x, 2) + Math.pow(h.y - e.y, 2)), _ = b - w;
        if (Math.abs(_) < f)
          break;
        _ > 0 ? l > 0 ? s = v : u = v : l > 0 ? u = v : s = v, ++y;
      } while (s <= u && y < c);
      return a1(a1({}, h), {}, {
        t: v
      });
    }
    /**
     * Get the line width of the edge. Depends on width and whether one of the connected nodes is selected.
     *
     * @param selected - Determines wheter the line is selected.
     * @param hover - Determines wheter the line is being hovered, only applies if selected is false.
     * @returns The width of the line.
     */
  }, {
    key: "getLineWidth",
    value: function(e, t) {
      return e === !0 ? Math.max(this.selectionWidth, 0.3 / this._body.view.scale) : t === !0 ? Math.max(this.hoverWidth, 0.3 / this._body.view.scale) : Math.max(this.options.width, 0.3 / this._body.view.scale);
    }
    /**
     * Compute the color or gradient for given edge.
     *
     * @param ctx - The context that will be used for rendering.
     * @param values - Formatting values like color, opacity or shadow.
     * @param _selected - Ignored (TODO: remove in the future).
     * @param _hover - Ignored (TODO: remove in the future).
     * @returns Color string if single color is inherited or gradient if two.
     */
  }, {
    key: "getColor",
    value: function(e, t) {
      if (t.inheritsColor !== !1) {
        if (t.inheritsColor === "both" && this.from.id !== this.to.id) {
          var n = e.createLinearGradient(this.from.x, this.from.y, this.to.x, this.to.y), a = this.from.options.color.highlight.border, o = this.to.options.color.highlight.border;
          return this.from.selected === !1 && this.to.selected === !1 ? (a = Zt(this.from.options.color.border, t.opacity), o = Zt(this.to.options.color.border, t.opacity)) : this.from.selected === !0 && this.to.selected === !1 ? o = this.to.options.color.border : this.from.selected === !1 && this.to.selected === !0 && (a = this.from.options.color.border), n.addColorStop(0, a), n.addColorStop(1, o), n;
        }
        return t.inheritsColor === "to" ? Zt(this.to.options.color.border, t.opacity) : Zt(this.from.options.color.border, t.opacity);
      } else
        return Zt(t.color, t.opacity);
    }
    /**
     * Draw a line from a node to itself, a circle.
     *
     * @param ctx - The context that will be used for rendering.
     * @param values - Formatting values like color, opacity or shadow.
     * @param x - Center of the circle on the x axis.
     * @param y - Center of the circle on the y axis.
     * @param radius - Radius of the circle.
     */
  }, {
    key: "_circle",
    value: function(e, t, n, a, o) {
      this.enableShadow(e, t);
      var s = 0, u = Math.PI * 2;
      if (!this.options.selfReference.renderBehindTheNode) {
        var l = this.options.selfReference.angle, c = this.options.selfReference.angle + Math.PI, d = this._findBorderPositionCircle(this.from, e, {
          x: n,
          y: a,
          low: l,
          high: c,
          direction: -1
        }), f = this._findBorderPositionCircle(this.from, e, {
          x: n,
          y: a,
          low: l,
          high: c,
          direction: 1
        });
        s = Math.atan2(d.y - a, d.x - n), u = Math.atan2(f.y - a, f.x - n);
      }
      e.beginPath(), e.arc(n, a, o, s, u, !1), e.stroke(), this.disableShadow(e, t);
    }
    /**
     * @inheritDoc
     * @remarks
     * http://stackoverflow.com/questions/849211/shortest-distancae-between-a-point-and-a-line-segment
     */
  }, {
    key: "getDistanceToEdge",
    value: function(e, t, n, a, o, s) {
      if (this.from != this.to)
        return this._getDistanceToEdge(e, t, n, a, o, s);
      var u = this._getCircleData(void 0), l = He(u, 3), c = l[0], d = l[1], f = l[2], h = c - o, v = d - s;
      return Math.abs(Math.sqrt(h * h + v * v) - f);
    }
    /**
     * Calculate the distance between a point (x3, y3) and a line segment from (x1, y1) to (x2, y2).
     *
     * @param x1 - First end of the line segment on the x axis.
     * @param y1 - First end of the line segment on the y axis.
     * @param x2 - Second end of the line segment on the x axis.
     * @param y2 - Second end of the line segment on the y axis.
     * @param x3 - Position of the point on the x axis.
     * @param y3 - Position of the point on the y axis.
     * @returns The distance between the line segment and the point.
     */
  }, {
    key: "_getDistanceToLine",
    value: function(e, t, n, a, o, s) {
      var u = n - e, l = a - t, c = u * u + l * l, d = ((o - e) * u + (s - t) * l) / c;
      d > 1 ? d = 1 : d < 0 && (d = 0);
      var f = e + d * u, h = t + d * l, v = f - o, p = h - s;
      return Math.sqrt(v * v + p * p);
    }
    /** @inheritDoc */
  }, {
    key: "getArrowData",
    value: function(e, t, n, a, o, s) {
      var u, l, c, d, f, h, v, p = s.width;
      t === "from" ? (c = this.from, d = this.to, f = s.fromArrowScale < 0, h = Math.abs(s.fromArrowScale), v = s.fromArrowType) : t === "to" ? (c = this.to, d = this.from, f = s.toArrowScale < 0, h = Math.abs(s.toArrowScale), v = s.toArrowType) : (c = this.to, d = this.from, f = s.middleArrowScale < 0, h = Math.abs(s.middleArrowScale), v = s.middleArrowType);
      var y = 15 * h + 3 * p;
      if (c != d) {
        var m = vfe(c.x - d.x, c.y - d.y), b = y / m;
        if (t !== "middle")
          if (this.options.smooth.enabled === !0) {
            var w = this._findBorderPosition(c, e, {
              via: n
            }), _ = this.getPoint(w.t + b * (t === "from" ? 1 : -1), n);
            u = Math.atan2(w.y - _.y, w.x - _.x), l = w;
          } else
            u = Math.atan2(c.y - d.y, c.x - d.x), l = this._findBorderPosition(c, e);
        else {
          var $ = (f ? -b : b) / 2, C = this.getPoint(0.5 + $, n), j = this.getPoint(0.5 - $, n);
          u = Math.atan2(C.y - j.y, C.x - j.x), l = this.getPoint(0.5, n);
        }
      } else {
        var W = this._getCircleData(e), B = He(W, 3), L = B[0], X = B[1], ue = B[2];
        if (t === "from") {
          var ee = this.options.selfReference.angle, de = this.options.selfReference.angle + Math.PI, ke = this._findBorderPositionCircle(this.from, e, {
            x: L,
            y: X,
            low: ee,
            high: de,
            direction: -1
          });
          u = ke.t * -2 * Math.PI + 1.5 * Math.PI + 0.1 * Math.PI, l = ke;
        } else if (t === "to") {
          var ve = this.options.selfReference.angle, Ne = this.options.selfReference.angle + Math.PI, je = this._findBorderPositionCircle(this.from, e, {
            x: L,
            y: X,
            low: ve,
            high: Ne,
            direction: 1
          });
          u = je.t * -2 * Math.PI + 1.5 * Math.PI - 1.1 * Math.PI, l = je;
        } else {
          var Le = this.options.selfReference.angle / (2 * Math.PI);
          l = this._pointOnCircle(L, X, ue, Le), u = Le * -2 * Math.PI + 1.5 * Math.PI + 0.1 * Math.PI;
        }
      }
      var I = l.x - y * 0.9 * Math.cos(u), F = l.y - y * 0.9 * Math.sin(u), H = {
        x: I,
        y: F
      };
      return {
        point: l,
        core: H,
        angle: u,
        length: y,
        type: v
      };
    }
    /** @inheritDoc */
  }, {
    key: "drawArrowHead",
    value: function(e, t, n, a, o) {
      e.strokeStyle = this.getColor(e, t), e.fillStyle = e.strokeStyle, e.lineWidth = t.width;
      var s = zT.draw(e, o);
      s && (this.enableShadow(e, t), rs(e).call(e), this.disableShadow(e, t));
    }
    /**
     * Set the shadow formatting values in the context if enabled, do nothing otherwise.
     *
     * @param ctx - The context that will be used for rendering.
     * @param values - Formatting values for the shadow.
     */
  }, {
    key: "enableShadow",
    value: function(e, t) {
      t.shadow === !0 && (e.shadowColor = t.shadowColor, e.shadowBlur = t.shadowSize, e.shadowOffsetX = t.shadowX, e.shadowOffsetY = t.shadowY);
    }
    /**
     * Reset the shadow formatting values in the context if enabled, do nothing otherwise.
     *
     * @param ctx - The context that will be used for rendering.
     * @param values - Formatting values for the shadow.
     */
  }, {
    key: "disableShadow",
    value: function(e, t) {
      t.shadow === !0 && (e.shadowColor = "rgba(0,0,0,0)", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0);
    }
    /**
     * Render the background according to the formatting values.
     *
     * @param ctx - The context that will be used for rendering.
     * @param values - Formatting values for the background.
     */
  }, {
    key: "drawBackground",
    value: function(e, t) {
      if (t.background !== !1) {
        var n = {
          strokeStyle: e.strokeStyle,
          lineWidth: e.lineWidth,
          dashes: e.dashes
        };
        e.strokeStyle = t.backgroundColor, e.lineWidth = t.backgroundSize, this.setStrokeDashed(e, t.backgroundDashes), e.stroke(), e.strokeStyle = n.strokeStyle, e.lineWidth = n.lineWidth, e.dashes = n.dashes, this.setStrokeDashed(e, t.dashes);
      }
    }
    /**
     * Set the line dash pattern if supported. Logs a warning to the console if it isn't supported.
     *
     * @param ctx - The context that will be used for rendering.
     * @param dashes - The pattern [line, space, line…], true for default dashed line or false for normal line.
     */
  }, {
    key: "setStrokeDashed",
    value: function(e, t) {
      if (t !== !1)
        if (e.setLineDash !== void 0) {
          var n = Te(t) ? t : [5, 5];
          e.setLineDash(n);
        } else
          console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used.");
      else
        e.setLineDash !== void 0 ? e.setLineDash([]) : console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used.");
    }
  }]), r;
})();
function o1(r, i) {
  var e = We(r);
  if (dn) {
    var t = dn(r);
    i && (t = Dt(t).call(t, function(n) {
      return bn(r, n).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function s1(r) {
  for (var i = 1; i < arguments.length; i++) {
    var e, t, n = arguments[i] != null ? arguments[i] : {};
    i % 2 ? xe(e = o1(Object(n), !0)).call(e, function(a) {
      Vl(r, a, n[a]);
    }) : fn ? Hl(r, fn(n)) : xe(t = o1(Object(n))).call(t, function(a) {
      Ul(r, a, bn(n, a));
    });
  }
  return r;
}
function Ife(r) {
  var i = kfe();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function kfe() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var up = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = Ife(e);
  function e(t, n, a) {
    return M(this, e), i.call(this, t, n, a);
  }
  return N(e, [{
    key: "_findBorderPositionBezier",
    value: function(n, a) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this._getViaCoordinates(), s = 10, u = 0.2, l = !1, c = 1, d = 0, f = this.to, h, v, p = this.options.endPointOffset ? this.options.endPointOffset.to : 0;
      n.id === this.from.id && (f = this.from, l = !0, p = this.options.endPointOffset ? this.options.endPointOffset.from : 0), this.options.arrowStrikethrough === !1 && (p = 0);
      var y = 0;
      do {
        v = (d + c) * 0.5, h = this.getPoint(v, o);
        var m = Math.atan2(f.y - h.y, f.x - h.x), b = f.distanceToBorder(a, m) + p, w = Math.sqrt(Math.pow(h.x - f.x, 2) + Math.pow(h.y - f.y, 2)), _ = b - w;
        if (Math.abs(_) < u)
          break;
        _ < 0 ? l === !1 ? d = v : c = v : l === !1 ? c = v : d = v, ++y;
      } while (d <= c && y < s);
      return s1(s1({}, h), {}, {
        t: v
      });
    }
    /**
     * Calculate the distance between a point (x3,y3) and a line segment from (x1,y1) to (x2,y2).
     *
     * @remarks
     * http://stackoverflow.com/questions/849211/shortest-distancae-between-a-point-and-a-line-segment
     * @param x1 - First end of the line segment on the x axis.
     * @param y1 - First end of the line segment on the y axis.
     * @param x2 - Second end of the line segment on the x axis.
     * @param y2 - Second end of the line segment on the y axis.
     * @param x3 - Position of the point on the x axis.
     * @param y3 - Position of the point on the y axis.
     * @param via - The control point for the edge.
     * @returns The distance between the line segment and the point.
     */
  }, {
    key: "_getDistanceToBezierEdge",
    value: function(n, a, o, s, u, l, c) {
      var d = 1e9, f, h, v, p, y, m = n, b = a;
      for (h = 1; h < 10; h++)
        v = 0.1 * h, p = Math.pow(1 - v, 2) * n + 2 * v * (1 - v) * c.x + Math.pow(v, 2) * o, y = Math.pow(1 - v, 2) * a + 2 * v * (1 - v) * c.y + Math.pow(v, 2) * s, h > 0 && (f = this._getDistanceToLine(m, b, p, y, u, l), d = f < d ? f : d), m = p, b = y;
      return d;
    }
    /**
     * Render a bezier curve between two nodes.
     *
     * @remarks
     * The method accepts zero, one or two control points.
     * Passing zero control points just draws a straight line.
     * @param ctx - The context that will be used for rendering.
     * @param values - Style options for edge drawing.
     * @param viaNode1 - First control point for curve drawing.
     * @param viaNode2 - Second control point for curve drawing.
     */
  }, {
    key: "_bezierCurve",
    value: function(n, a, o, s) {
      n.beginPath(), n.moveTo(this.fromPoint.x, this.fromPoint.y), o != null && o.x != null ? s != null && s.x != null ? n.bezierCurveTo(o.x, o.y, s.x, s.y, this.toPoint.x, this.toPoint.y) : n.quadraticCurveTo(o.x, o.y, this.toPoint.x, this.toPoint.y) : n.lineTo(this.toPoint.x, this.toPoint.y), this.drawBackground(n, a), this.enableShadow(n, a), n.stroke(), this.disableShadow(n, a);
    }
    /** @inheritDoc */
  }, {
    key: "getViaNode",
    value: function() {
      return this._getViaCoordinates();
    }
  }]), e;
})(WT);
function Cfe(r) {
  var i = xfe();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function xfe() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var u1 = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = Cfe(e);
  function e(t, n, a) {
    var o;
    return M(this, e), o = i.call(this, t, n, a), o.via = o.via, o._boundFunction = function() {
      o.positionBezierNode();
    }, o._body.emitter.on("_repositionBezierNodes", o._boundFunction), o;
  }
  return N(e, [{
    key: "setOptions",
    value: function(n) {
      du(V(e.prototype), "setOptions", this).call(this, n);
      var a = !1;
      this.options.physics !== n.physics && (a = !0), this.options = n, this.id = this.options.id, this.from = this._body.nodes[this.options.from], this.to = this._body.nodes[this.options.to], this.setupSupportNode(), this.connect(), a === !0 && (this.via.setOptions({
        physics: this.options.physics
      }), this.positionBezierNode());
    }
    /** @inheritDoc */
  }, {
    key: "connect",
    value: function() {
      this.from = this._body.nodes[this.options.from], this.to = this._body.nodes[this.options.to], this.from === void 0 || this.to === void 0 || this.options.physics === !1 ? this.via.setOptions({
        physics: !1
      }) : this.from.id === this.to.id ? this.via.setOptions({
        physics: !1
      }) : this.via.setOptions({
        physics: !0
      });
    }
    /** @inheritDoc */
  }, {
    key: "cleanup",
    value: function() {
      return this._body.emitter.off("_repositionBezierNodes", this._boundFunction), this.via !== void 0 ? (delete this._body.nodes[this.via.id], this.via = void 0, !0) : !1;
    }
    /**
     * Create and add a support node if not already present.
     *
     * @remarks
     * Bezier curves require an anchor point to calculate the smooth flow.
     * These points are nodes.
     * These nodes are invisible but are used for the force calculation.
     *
     * The changed data is not called, if needed, it is returned by the main edge constructor.
     */
  }, {
    key: "setupSupportNode",
    value: function() {
      if (this.via === void 0) {
        var n = "edgeId:" + this.id, a = this._body.functions.createNode({
          id: n,
          shape: "circle",
          physics: !0,
          hidden: !0
        });
        this._body.nodes[n] = a, this.via = a, this.via.parentEdgeId = this.id, this.positionBezierNode();
      }
    }
    /**
     * Position bezier node.
     */
  }, {
    key: "positionBezierNode",
    value: function() {
      this.via !== void 0 && this.from !== void 0 && this.to !== void 0 ? (this.via.x = 0.5 * (this.from.x + this.to.x), this.via.y = 0.5 * (this.from.y + this.to.y)) : this.via !== void 0 && (this.via.x = 0, this.via.y = 0);
    }
    /** @inheritDoc */
  }, {
    key: "_line",
    value: function(n, a, o) {
      this._bezierCurve(n, a, o);
    }
    /** @inheritDoc */
  }, {
    key: "_getViaCoordinates",
    value: function() {
      return this.via;
    }
    /** @inheritDoc */
  }, {
    key: "getViaNode",
    value: function() {
      return this.via;
    }
    /** @inheritDoc */
  }, {
    key: "getPoint",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.via;
      if (this.from === this.to) {
        var o = this._getCircleData(), s = He(o, 3), u = s[0], l = s[1], c = s[2], d = 2 * Math.PI * (1 - n);
        return {
          x: u + c * Math.sin(d),
          y: l + c - c * (1 - Math.cos(d))
        };
      } else
        return {
          x: Math.pow(1 - n, 2) * this.fromPoint.x + 2 * n * (1 - n) * a.x + Math.pow(n, 2) * this.toPoint.x,
          y: Math.pow(1 - n, 2) * this.fromPoint.y + 2 * n * (1 - n) * a.y + Math.pow(n, 2) * this.toPoint.y
        };
    }
    /** @inheritDoc */
  }, {
    key: "_findBorderPosition",
    value: function(n, a) {
      return this._findBorderPositionBezier(n, a, this.via);
    }
    /** @inheritDoc */
  }, {
    key: "_getDistanceToEdge",
    value: function(n, a, o, s, u, l) {
      return this._getDistanceToBezierEdge(n, a, o, s, u, l, this.via);
    }
  }]), e;
})(up);
function Rfe(r) {
  var i = Afe();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function Afe() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var l1 = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = Rfe(e);
  function e(t, n, a) {
    return M(this, e), i.call(this, t, n, a);
  }
  return N(e, [{
    key: "_line",
    value: function(n, a, o) {
      this._bezierCurve(n, a, o);
    }
    /** @inheritDoc */
  }, {
    key: "getViaNode",
    value: function() {
      return this._getViaCoordinates();
    }
    /**
     * Compute the coordinates of the via node.
     *
     * @remarks
     * We do not use the to and fromPoints here to make the via nodes the same as edges without arrows.
     * @returns Cartesian coordinates of the via node.
     */
  }, {
    key: "_getViaCoordinates",
    value: function() {
      var n = this.options.smooth.roundness, a = this.options.smooth.type, o = Math.abs(this.from.x - this.to.x), s = Math.abs(this.from.y - this.to.y);
      if (a === "discrete" || a === "diagonalCross") {
        var u, l;
        o <= s ? u = l = n * s : u = l = n * o, this.from.x > this.to.x && (u = -u), this.from.y >= this.to.y && (l = -l);
        var c = this.from.x + u, d = this.from.y + l;
        return a === "discrete" && (o <= s ? c = o < n * s ? this.from.x : c : d = s < n * o ? this.from.y : d), {
          x: c,
          y: d
        };
      } else if (a === "straightCross") {
        var f = (1 - n) * o, h = (1 - n) * s;
        return o <= s ? (f = 0, this.from.y < this.to.y && (h = -h)) : (this.from.x < this.to.x && (f = -f), h = 0), {
          x: this.to.x + f,
          y: this.to.y + h
        };
      } else if (a === "horizontal") {
        var v = (1 - n) * o;
        return this.from.x < this.to.x && (v = -v), {
          x: this.to.x + v,
          y: this.from.y
        };
      } else if (a === "vertical") {
        var p = (1 - n) * s;
        return this.from.y < this.to.y && (p = -p), {
          x: this.from.x,
          y: this.to.y + p
        };
      } else if (a === "curvedCW") {
        o = this.to.x - this.from.x, s = this.from.y - this.to.y;
        var y = Math.sqrt(o * o + s * s), m = Math.PI, b = Math.atan2(s, o), w = (b + (n * 0.5 + 0.5) * m) % (2 * m);
        return {
          x: this.from.x + (n * 0.5 + 0.5) * y * Math.sin(w),
          y: this.from.y + (n * 0.5 + 0.5) * y * Math.cos(w)
        };
      } else if (a === "curvedCCW") {
        o = this.to.x - this.from.x, s = this.from.y - this.to.y;
        var _ = Math.sqrt(o * o + s * s), $ = Math.PI, C = Math.atan2(s, o), j = (C + (-n * 0.5 + 0.5) * $) % (2 * $);
        return {
          x: this.from.x + (n * 0.5 + 0.5) * _ * Math.sin(j),
          y: this.from.y + (n * 0.5 + 0.5) * _ * Math.cos(j)
        };
      } else {
        var W, B;
        o <= s ? W = B = n * s : W = B = n * o, this.from.x > this.to.x && (W = -W), this.from.y >= this.to.y && (B = -B);
        var L = this.from.x + W, X = this.from.y + B;
        return o <= s ? this.from.x <= this.to.x ? L = this.to.x < L ? this.to.x : L : L = this.to.x > L ? this.to.x : L : this.from.y >= this.to.y ? X = this.to.y > X ? this.to.y : X : X = this.to.y < X ? this.to.y : X, {
          x: L,
          y: X
        };
      }
    }
    /** @inheritDoc */
  }, {
    key: "_findBorderPosition",
    value: function(n, a) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._findBorderPositionBezier(n, a, o.via);
    }
    /** @inheritDoc */
  }, {
    key: "_getDistanceToEdge",
    value: function(n, a, o, s, u, l) {
      var c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : this._getViaCoordinates();
      return this._getDistanceToBezierEdge(n, a, o, s, u, l, c);
    }
    /** @inheritDoc */
  }, {
    key: "getPoint",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._getViaCoordinates(), o = n, s = Math.pow(1 - o, 2) * this.fromPoint.x + 2 * o * (1 - o) * a.x + Math.pow(o, 2) * this.toPoint.x, u = Math.pow(1 - o, 2) * this.fromPoint.y + 2 * o * (1 - o) * a.y + Math.pow(o, 2) * this.toPoint.y;
      return {
        x: s,
        y: u
      };
    }
  }]), e;
})(up);
function Dfe(r) {
  var i = Mfe();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function Mfe() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Nfe = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = Dfe(e);
  function e(t, n, a) {
    return M(this, e), i.call(this, t, n, a);
  }
  return N(e, [{
    key: "_getDistanceToBezierEdge2",
    value: function(n, a, o, s, u, l, c, d) {
      for (var f = 1e9, h = n, v = a, p = [0, 0, 0, 0], y = 1; y < 10; y++) {
        var m = 0.1 * y;
        p[0] = Math.pow(1 - m, 3), p[1] = 3 * m * Math.pow(1 - m, 2), p[2] = 3 * Math.pow(m, 2) * (1 - m), p[3] = Math.pow(m, 3);
        var b = p[0] * n + p[1] * c.x + p[2] * d.x + p[3] * o, w = p[0] * a + p[1] * c.y + p[2] * d.y + p[3] * s;
        if (y > 0) {
          var _ = this._getDistanceToLine(h, v, b, w, u, l);
          f = _ < f ? _ : f;
        }
        h = b, v = w;
      }
      return f;
    }
  }]), e;
})(up);
function Ffe(r) {
  var i = Bfe();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function Bfe() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var c1 = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = Ffe(e);
  function e(t, n, a) {
    return M(this, e), i.call(this, t, n, a);
  }
  return N(e, [{
    key: "_line",
    value: function(n, a, o) {
      var s = o[0], u = o[1];
      this._bezierCurve(n, a, s, u);
    }
    /**
     * Compute the additional points the edge passes through.
     *
     * @returns Cartesian coordinates of the points the edge passes through.
     */
  }, {
    key: "_getViaCoordinates",
    value: function() {
      var n = this.from.x - this.to.x, a = this.from.y - this.to.y, o, s, u, l, c = this.options.smooth.roundness;
      return (Math.abs(n) > Math.abs(a) || this.options.smooth.forceDirection === !0 || this.options.smooth.forceDirection === "horizontal") && this.options.smooth.forceDirection !== "vertical" ? (s = this.from.y, l = this.to.y, o = this.from.x - c * n, u = this.to.x + c * n) : (s = this.from.y - c * a, l = this.to.y + c * a, o = this.from.x, u = this.to.x), [{
        x: o,
        y: s
      }, {
        x: u,
        y: l
      }];
    }
    /** @inheritDoc */
  }, {
    key: "getViaNode",
    value: function() {
      return this._getViaCoordinates();
    }
    /** @inheritDoc */
  }, {
    key: "_findBorderPosition",
    value: function(n, a) {
      return this._findBorderPositionBezier(n, a);
    }
    /** @inheritDoc */
  }, {
    key: "_getDistanceToEdge",
    value: function(n, a, o, s, u, l) {
      var c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : this._getViaCoordinates(), d = He(c, 2), f = d[0], h = d[1];
      return this._getDistanceToBezierEdge2(n, a, o, s, u, l, f, h);
    }
    /** @inheritDoc */
  }, {
    key: "getPoint",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._getViaCoordinates(), o = He(a, 2), s = o[0], u = o[1], l = n, c = [Math.pow(1 - l, 3), 3 * l * Math.pow(1 - l, 2), 3 * Math.pow(l, 2) * (1 - l), Math.pow(l, 3)], d = c[0] * this.fromPoint.x + c[1] * s.x + c[2] * u.x + c[3] * this.toPoint.x, f = c[0] * this.fromPoint.y + c[1] * s.y + c[2] * u.y + c[3] * this.toPoint.y;
      return {
        x: d,
        y: f
      };
    }
  }]), e;
})(Nfe);
function jfe(r) {
  var i = Lfe();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function Lfe() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var d1 = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = jfe(e);
  function e(t, n, a) {
    return M(this, e), i.call(this, t, n, a);
  }
  return N(e, [{
    key: "_line",
    value: function(n, a) {
      n.beginPath(), n.moveTo(this.fromPoint.x, this.fromPoint.y), n.lineTo(this.toPoint.x, this.toPoint.y), this.enableShadow(n, a), n.stroke(), this.disableShadow(n, a);
    }
    /** @inheritDoc */
  }, {
    key: "getViaNode",
    value: function() {
    }
    /** @inheritDoc */
  }, {
    key: "getPoint",
    value: function(n) {
      return {
        x: (1 - n) * this.fromPoint.x + n * this.toPoint.x,
        y: (1 - n) * this.fromPoint.y + n * this.toPoint.y
      };
    }
    /** @inheritDoc */
  }, {
    key: "_findBorderPosition",
    value: function(n, a) {
      var o = this.to, s = this.from;
      n.id === this.from.id && (o = this.from, s = this.to);
      var u = Math.atan2(o.y - s.y, o.x - s.x), l = o.x - s.x, c = o.y - s.y, d = Math.sqrt(l * l + c * c), f = n.distanceToBorder(a, u), h = (d - f) / d;
      return {
        x: (1 - h) * s.x + h * o.x,
        y: (1 - h) * s.y + h * o.y,
        t: 0
      };
    }
    /** @inheritDoc */
  }, {
    key: "_getDistanceToEdge",
    value: function(n, a, o, s, u, l) {
      return this._getDistanceToLine(n, a, o, s, u, l);
    }
  }]), e;
})(WT), ji = /* @__PURE__ */ (function() {
  function r(i, e, t, n, a) {
    if (M(this, r), e === void 0)
      throw new Error("No body provided");
    this.options = un(n), this.globalOptions = n, this.defaultOptions = a, this.body = e, this.imagelist = t, this.id = void 0, this.fromId = void 0, this.toId = void 0, this.selected = !1, this.hover = !1, this.labelDirty = !0, this.baseWidth = this.options.width, this.baseFontSize = this.options.font.size, this.from = void 0, this.to = void 0, this.edgeType = void 0, this.connected = !1, this.labelModule = new MT(
      this.body,
      this.options,
      !0
      /* It's an edge label */
    ), this.setOptions(i);
  }
  return N(r, [{
    key: "setOptions",
    value: function(e) {
      if (e) {
        var t = typeof e.physics < "u" && this.options.physics !== e.physics || typeof e.hidden < "u" && (this.options.hidden || !1) !== (e.hidden || !1) || typeof e.from < "u" && this.options.from !== e.from || typeof e.to < "u" && this.options.to !== e.to;
        r.parseOptions(this.options, e, !0, this.globalOptions), e.id !== void 0 && (this.id = e.id), e.from !== void 0 && (this.fromId = e.from), e.to !== void 0 && (this.toId = e.to), e.title !== void 0 && (this.title = e.title), e.value !== void 0 && (e.value = RT(e.value));
        var n = [e, this.options, this.defaultOptions];
        return this.chooser = ip("edge", n), this.updateLabelModule(e), t = this.updateEdgeType() || t, this._setInteractionWidths(), this.connect(), t;
      }
    }
    /**
     *
     * @param {object} parentOptions
     * @param {object} newOptions
     * @param {boolean} [allowDeletion=false]
     * @param {object} [globalOptions={}]
     * @param {boolean} [copyFromGlobals=false]
     */
  }, {
    key: "getFormattingValues",
    value: (
      /**
       *
       * @returns {ArrowOptions}
       */
      function() {
        var e = this.options.arrows.to === !0 || this.options.arrows.to.enabled === !0, t = this.options.arrows.from === !0 || this.options.arrows.from.enabled === !0, n = this.options.arrows.middle === !0 || this.options.arrows.middle.enabled === !0, a = this.options.color.inherit, o = {
          toArrow: e,
          toArrowScale: this.options.arrows.to.scaleFactor,
          toArrowType: this.options.arrows.to.type,
          toArrowSrc: this.options.arrows.to.src,
          toArrowImageWidth: this.options.arrows.to.imageWidth,
          toArrowImageHeight: this.options.arrows.to.imageHeight,
          middleArrow: n,
          middleArrowScale: this.options.arrows.middle.scaleFactor,
          middleArrowType: this.options.arrows.middle.type,
          middleArrowSrc: this.options.arrows.middle.src,
          middleArrowImageWidth: this.options.arrows.middle.imageWidth,
          middleArrowImageHeight: this.options.arrows.middle.imageHeight,
          fromArrow: t,
          fromArrowScale: this.options.arrows.from.scaleFactor,
          fromArrowType: this.options.arrows.from.type,
          fromArrowSrc: this.options.arrows.from.src,
          fromArrowImageWidth: this.options.arrows.from.imageWidth,
          fromArrowImageHeight: this.options.arrows.from.imageHeight,
          arrowStrikethrough: this.options.arrowStrikethrough,
          color: a ? void 0 : this.options.color.color,
          inheritsColor: a,
          opacity: this.options.color.opacity,
          hidden: this.options.hidden,
          length: this.options.length,
          shadow: this.options.shadow.enabled,
          shadowColor: this.options.shadow.color,
          shadowSize: this.options.shadow.size,
          shadowX: this.options.shadow.x,
          shadowY: this.options.shadow.y,
          dashes: this.options.dashes,
          width: this.options.width,
          background: this.options.background.enabled,
          backgroundColor: this.options.background.color,
          backgroundSize: this.options.background.size,
          backgroundDashes: this.options.background.dashes
        };
        if (this.selected || this.hover)
          if (this.chooser === !0) {
            if (this.selected) {
              var s = this.options.selectionWidth;
              typeof s == "function" ? o.width = s(o.width) : typeof s == "number" && (o.width += s), o.width = Math.max(o.width, 0.3 / this.body.view.scale), o.color = this.options.color.highlight, o.shadow = this.options.shadow.enabled;
            } else if (this.hover) {
              var u = this.options.hoverWidth;
              typeof u == "function" ? o.width = u(o.width) : typeof u == "number" && (o.width += u), o.width = Math.max(o.width, 0.3 / this.body.view.scale), o.color = this.options.color.hover, o.shadow = this.options.shadow.enabled;
            }
          } else typeof this.chooser == "function" && (this.chooser(o, this.options.id, this.selected, this.hover), o.color !== void 0 && (o.inheritsColor = !1), o.shadow === !1 && (o.shadowColor !== this.options.shadow.color || o.shadowSize !== this.options.shadow.size || o.shadowX !== this.options.shadow.x || o.shadowY !== this.options.shadow.y) && (o.shadow = !0));
        else
          o.shadow = this.options.shadow.enabled, o.width = Math.max(o.width, 0.3 / this.body.view.scale);
        return o;
      }
    )
    /**
     * update the options in the label module
     *
     * @param {object} options
     */
  }, {
    key: "updateLabelModule",
    value: function(e) {
      var t = [
        e,
        this.options,
        this.globalOptions,
        // Currently set global edge options
        this.defaultOptions
      ];
      this.labelModule.update(this.options, t), this.labelModule.baseSize !== void 0 && (this.baseFontSize = this.labelModule.baseSize);
    }
    /**
     * update the edge type, set the options
     *
     * @returns {boolean}
     */
  }, {
    key: "updateEdgeType",
    value: function() {
      var e = this.options.smooth, t = !1, n = !0;
      return this.edgeType !== void 0 && ((this.edgeType instanceof u1 && e.enabled === !0 && e.type === "dynamic" || this.edgeType instanceof c1 && e.enabled === !0 && e.type === "cubicBezier" || this.edgeType instanceof l1 && e.enabled === !0 && e.type !== "dynamic" && e.type !== "cubicBezier" || this.edgeType instanceof d1 && e.type.enabled === !1) && (n = !1), n === !0 && (t = this.cleanup())), n === !0 ? e.enabled === !0 ? e.type === "dynamic" ? (t = !0, this.edgeType = new u1(this.options, this.body, this.labelModule)) : e.type === "cubicBezier" ? this.edgeType = new c1(this.options, this.body, this.labelModule) : this.edgeType = new l1(this.options, this.body, this.labelModule) : this.edgeType = new d1(this.options, this.body, this.labelModule) : this.edgeType.setOptions(this.options), t;
    }
    /**
     * Connect an edge to its nodes
     */
  }, {
    key: "connect",
    value: function() {
      this.disconnect(), this.from = this.body.nodes[this.fromId] || void 0, this.to = this.body.nodes[this.toId] || void 0, this.connected = this.from !== void 0 && this.to !== void 0, this.connected === !0 ? (this.from.attachEdge(this), this.to.attachEdge(this)) : (this.from && this.from.detachEdge(this), this.to && this.to.detachEdge(this)), this.edgeType.connect();
    }
    /**
     * Disconnect an edge from its nodes
     */
  }, {
    key: "disconnect",
    value: function() {
      this.from && (this.from.detachEdge(this), this.from = void 0), this.to && (this.to.detachEdge(this), this.to = void 0), this.connected = !1;
    }
    /**
     * get the title of this edge.
     *
     * @returns {string} title    The title of the edge, or undefined when no title
     *                           has been set.
     */
  }, {
    key: "getTitle",
    value: function() {
      return this.title;
    }
    /**
     * check if this node is selecte
     *
     * @returns {boolean} selected   True if node is selected, else false
     */
  }, {
    key: "isSelected",
    value: function() {
      return this.selected;
    }
    /**
     * Retrieve the value of the edge. Can be undefined
     *
     * @returns {number} value
     */
  }, {
    key: "getValue",
    value: function() {
      return this.options.value;
    }
    /**
     * Adjust the value range of the edge. The edge will adjust it's width
     * based on its value.
     *
     * @param {number} min
     * @param {number} max
     * @param {number} total
     */
  }, {
    key: "setValueRange",
    value: function(e, t, n) {
      if (this.options.value !== void 0) {
        var a = this.options.scaling.customScalingFunction(e, t, n, this.options.value), o = this.options.scaling.max - this.options.scaling.min;
        if (this.options.scaling.label.enabled === !0) {
          var s = this.options.scaling.label.max - this.options.scaling.label.min;
          this.options.font.size = this.options.scaling.label.min + a * s;
        }
        this.options.width = this.options.scaling.min + a * o;
      } else
        this.options.width = this.baseWidth, this.options.font.size = this.baseFontSize;
      this._setInteractionWidths(), this.updateLabelModule();
    }
    /**
     *
     * @private
     */
  }, {
    key: "_setInteractionWidths",
    value: function() {
      typeof this.options.hoverWidth == "function" ? this.edgeType.hoverWidth = this.options.hoverWidth(this.options.width) : this.edgeType.hoverWidth = this.options.hoverWidth + this.options.width, typeof this.options.selectionWidth == "function" ? this.edgeType.selectionWidth = this.options.selectionWidth(this.options.width) : this.edgeType.selectionWidth = this.options.selectionWidth + this.options.width;
    }
    /**
     * Redraw a edge
     * Draw this edge in the given canvas
     * The 2d context of a HTML canvas can be retrieved by canvas.getContext("2d");
     *
     * @param {CanvasRenderingContext2D}   ctx
     */
  }, {
    key: "draw",
    value: function(e) {
      var t = this.getFormattingValues();
      if (!t.hidden) {
        var n = this.edgeType.getViaNode();
        this.edgeType.drawLine(e, t, this.selected, this.hover, n), this.drawLabel(e, n);
      }
    }
    /**
     * Redraw arrows
     * Draw this arrows in the given canvas
     * The 2d context of a HTML canvas can be retrieved by canvas.getContext("2d");
     *
     * @param {CanvasRenderingContext2D}   ctx
     */
  }, {
    key: "drawArrows",
    value: function(e) {
      var t = this.getFormattingValues();
      if (!t.hidden) {
        var n = this.edgeType.getViaNode(), a = {};
        this.edgeType.fromPoint = this.edgeType.from, this.edgeType.toPoint = this.edgeType.to, t.fromArrow && (a.from = this.edgeType.getArrowData(e, "from", n, this.selected, this.hover, t), t.arrowStrikethrough === !1 && (this.edgeType.fromPoint = a.from.core), t.fromArrowSrc && (a.from.image = this.imagelist.load(t.fromArrowSrc)), t.fromArrowImageWidth && (a.from.imageWidth = t.fromArrowImageWidth), t.fromArrowImageHeight && (a.from.imageHeight = t.fromArrowImageHeight)), t.toArrow && (a.to = this.edgeType.getArrowData(e, "to", n, this.selected, this.hover, t), t.arrowStrikethrough === !1 && (this.edgeType.toPoint = a.to.core), t.toArrowSrc && (a.to.image = this.imagelist.load(t.toArrowSrc)), t.toArrowImageWidth && (a.to.imageWidth = t.toArrowImageWidth), t.toArrowImageHeight && (a.to.imageHeight = t.toArrowImageHeight)), t.middleArrow && (a.middle = this.edgeType.getArrowData(e, "middle", n, this.selected, this.hover, t), t.middleArrowSrc && (a.middle.image = this.imagelist.load(t.middleArrowSrc)), t.middleArrowImageWidth && (a.middle.imageWidth = t.middleArrowImageWidth), t.middleArrowImageHeight && (a.middle.imageHeight = t.middleArrowImageHeight)), t.fromArrow && this.edgeType.drawArrowHead(e, t, this.selected, this.hover, a.from), t.middleArrow && this.edgeType.drawArrowHead(e, t, this.selected, this.hover, a.middle), t.toArrow && this.edgeType.drawArrowHead(e, t, this.selected, this.hover, a.to);
      }
    }
    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {Node} viaNode
     */
  }, {
    key: "drawLabel",
    value: function(e, t) {
      if (this.options.label !== void 0) {
        var n = this.from, a = this.to;
        this.labelModule.differentState(this.selected, this.hover) && this.labelModule.getTextSize(e, this.selected, this.hover);
        var o;
        if (n.id != a.id) {
          this.labelModule.pointToSelf = !1, o = this.edgeType.getPoint(0.5, t), e.save();
          var s = this._getRotation(e);
          s.angle != 0 && (e.translate(s.x, s.y), e.rotate(s.angle)), this.labelModule.draw(e, o.x, o.y, this.selected, this.hover), e.restore();
        } else {
          this.labelModule.pointToSelf = !0;
          var u = AT(e, this.options.selfReference.angle, this.options.selfReference.size, n);
          o = this._pointOnCircle(u.x, u.y, this.options.selfReference.size, this.options.selfReference.angle), this.labelModule.draw(e, o.x, o.y, this.selected, this.hover);
        }
      }
    }
    /**
     * Determine all visual elements of this edge instance, in which the given
     * point falls within the bounding shape.
     *
     * @param {point} point
     * @returns {Array.<edgeClickItem|edgeLabelClickItem>} list with the items which are on the point
     */
  }, {
    key: "getItemsOnPoint",
    value: function(e) {
      var t = [];
      if (this.labelModule.visible()) {
        var n = this._getRotation();
        Eh(this.labelModule.getSize(), e, n) && t.push({
          edgeId: this.id,
          labelId: 0
        });
      }
      var a = {
        left: e.x,
        top: e.y
      };
      return this.isOverlappingWith(a) && t.push({
        edgeId: this.id
      }), t;
    }
    /**
     * Check if this object is overlapping with the provided object
     *
     * @param {object} obj   an object with parameters left, top
     * @returns {boolean}     True if location is located on the edge
     */
  }, {
    key: "isOverlappingWith",
    value: function(e) {
      if (this.connected) {
        var t = 10, n = this.from.x, a = this.from.y, o = this.to.x, s = this.to.y, u = e.left, l = e.top, c = this.edgeType.getDistanceToEdge(n, a, o, s, u, l);
        return c < t;
      } else
        return !1;
    }
    /**
     * Determine the rotation point, if any.
     *
     * @param {CanvasRenderingContext2D} [ctx] if passed, do a recalculation of the label size
     * @returns {rotationPoint} the point to rotate around and the angle in radians to rotate
     * @private
     */
  }, {
    key: "_getRotation",
    value: function(e) {
      var t = this.edgeType.getViaNode(), n = this.edgeType.getPoint(0.5, t);
      e !== void 0 && this.labelModule.calculateLabelSize(e, this.selected, this.hover, n.x, n.y);
      var a = {
        x: n.x,
        y: this.labelModule.size.yLine,
        angle: 0
      };
      if (!this.labelModule.visible() || this.options.font.align === "horizontal")
        return a;
      var o = this.from.y - this.to.y, s = this.from.x - this.to.x, u = Math.atan2(o, s);
      return (u < -1 && s < 0 || u > 0 && s < 0) && (u += Math.PI), a.angle = u, a;
    }
    /**
     * Get a point on a circle
     *
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {number} angle
     * @returns {object} point
     * @private
     */
  }, {
    key: "_pointOnCircle",
    value: function(e, t, n, a) {
      return {
        x: e + n * Math.cos(a),
        y: t - n * Math.sin(a)
      };
    }
    /**
     * Sets selected state to true
     */
  }, {
    key: "select",
    value: function() {
      this.selected = !0;
    }
    /**
     * Sets selected state to false
     */
  }, {
    key: "unselect",
    value: function() {
      this.selected = !1;
    }
    /**
     * cleans all required things on delete
     *
     * @returns {*}
     */
  }, {
    key: "cleanup",
    value: function() {
      return this.edgeType.cleanup();
    }
    /**
     * Remove edge from the list and perform necessary cleanup.
     */
  }, {
    key: "remove",
    value: function() {
      this.cleanup(), this.disconnect(), delete this.body.edges[this.id];
    }
    /**
     * Check if both connecting nodes exist
     *
     * @returns {boolean}
     */
  }, {
    key: "endPointsValid",
    value: function() {
      return this.body.nodes[this.fromId] !== void 0 && this.body.nodes[this.toId] !== void 0;
    }
  }], [{
    key: "parseOptions",
    value: function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, s = ["endPointOffset", "arrowStrikethrough", "id", "from", "hidden", "hoverWidth", "labelHighlightBold", "length", "line", "opacity", "physics", "scaling", "selectionWidth", "selfReferenceSize", "selfReference", "to", "title", "value", "width", "font", "chosen", "widthConstraint"];
      if (Pa(s, e, t, n), t.endPointOffset !== void 0 && t.endPointOffset.from !== void 0 && (Pn(t.endPointOffset.from) ? e.endPointOffset.from = t.endPointOffset.from : (e.endPointOffset.from = a.endPointOffset.from !== void 0 ? a.endPointOffset.from : 0, console.error("endPointOffset.from is not a valid number"))), t.endPointOffset !== void 0 && t.endPointOffset.to !== void 0 && (Pn(t.endPointOffset.to) ? e.endPointOffset.to = t.endPointOffset.to : (e.endPointOffset.to = a.endPointOffset.to !== void 0 ? a.endPointOffset.to : 0, console.error("endPointOffset.to is not a valid number"))), zu(t.label) ? e.label = t.label : zu(e.label) || (e.label = void 0), Qt(e, t, "smooth", a), Qt(e, t, "shadow", a), Qt(e, t, "background", a), t.dashes !== void 0 && t.dashes !== null ? e.dashes = t.dashes : n === !0 && t.dashes === null && (e.dashes = Mn(a.dashes)), t.scaling !== void 0 && t.scaling !== null ? (t.scaling.min !== void 0 && (e.scaling.min = t.scaling.min), t.scaling.max !== void 0 && (e.scaling.max = t.scaling.max), Qt(e.scaling, t.scaling, "label", a.scaling)) : n === !0 && t.scaling === null && (e.scaling = Mn(a.scaling)), t.arrows !== void 0 && t.arrows !== null)
        if (typeof t.arrows == "string") {
          var u = t.arrows.toLowerCase();
          e.arrows.to.enabled = ye(u).call(u, "to") != -1, e.arrows.middle.enabled = ye(u).call(u, "middle") != -1, e.arrows.from.enabled = ye(u).call(u, "from") != -1;
        } else if (Ie(t.arrows) === "object")
          Qt(e.arrows, t.arrows, "to", a.arrows), Qt(e.arrows, t.arrows, "middle", a.arrows), Qt(e.arrows, t.arrows, "from", a.arrows);
        else
          throw new Error("The arrow newOptions can only be an object or a string. Refer to the documentation. You used:" + ts(t.arrows));
      else n === !0 && t.arrows === null && (e.arrows = Mn(a.arrows));
      if (t.color !== void 0 && t.color !== null) {
        var l = Fi(t.color) ? {
          color: t.color,
          highlight: t.color,
          hover: t.color,
          inherit: !1,
          opacity: 1
        } : t.color, c = e.color;
        if (o)
          Ae(c, a.color, !1, n);
        else
          for (var d in c)
            Object.prototype.hasOwnProperty.call(c, d) && delete c[d];
        if (Fi(c))
          c.color = c, c.highlight = c, c.hover = c, c.inherit = !1, l.opacity === void 0 && (c.opacity = 1);
        else {
          var f = !1;
          l.color !== void 0 && (c.color = l.color, f = !0), l.highlight !== void 0 && (c.highlight = l.highlight, f = !0), l.hover !== void 0 && (c.hover = l.hover, f = !0), l.inherit !== void 0 && (c.inherit = l.inherit), l.opacity !== void 0 && (c.opacity = Math.min(1, Math.max(0, l.opacity))), f === !0 ? c.inherit = !1 : c.inherit === void 0 && (c.inherit = "from");
        }
      } else n === !0 && t.color === null && (e.color = un(a.color));
      n === !0 && t.font === null && (e.font = un(a.font)), Object.prototype.hasOwnProperty.call(t, "selfReferenceSize") && (console.warn("The selfReferenceSize property has been deprecated. Please use selfReference property instead. The selfReference can be set like thise selfReference:{size:30, angle:Math.PI / 4}"), e.selfReference.size = t.selfReferenceSize);
    }
  }]), r;
})(), zfe = /* @__PURE__ */ (function() {
  function r(i, e, t) {
    var n, a = this;
    M(this, r), this.body = i, this.images = e, this.groups = t, this.body.functions.createEdge = A(n = this.create).call(n, this), this.edgesListeners = {
      add: function(s, u) {
        a.add(u.items);
      },
      update: function(s, u) {
        a.update(u.items);
      },
      remove: function(s, u) {
        a.remove(u.items);
      }
    }, this.options = {}, this.defaultOptions = {
      arrows: {
        to: {
          enabled: !1,
          scaleFactor: 1,
          type: "arrow"
        },
        // boolean / {arrowScaleFactor:1} / {enabled: false, arrowScaleFactor:1}
        middle: {
          enabled: !1,
          scaleFactor: 1,
          type: "arrow"
        },
        from: {
          enabled: !1,
          scaleFactor: 1,
          type: "arrow"
        }
      },
      endPointOffset: {
        from: 0,
        to: 0
      },
      arrowStrikethrough: !0,
      color: {
        color: "#848484",
        highlight: "#848484",
        hover: "#848484",
        inherit: "from",
        opacity: 1
      },
      dashes: !1,
      font: {
        color: "#343434",
        size: 14,
        // px
        face: "arial",
        background: "none",
        strokeWidth: 2,
        // px
        strokeColor: "#ffffff",
        align: "horizontal",
        multi: !1,
        vadjust: 0,
        bold: {
          mod: "bold"
        },
        boldital: {
          mod: "bold italic"
        },
        ital: {
          mod: "italic"
        },
        mono: {
          mod: "",
          size: 15,
          // px
          face: "courier new",
          vadjust: 2
        }
      },
      hidden: !1,
      hoverWidth: 1.5,
      label: void 0,
      labelHighlightBold: !0,
      length: void 0,
      physics: !0,
      scaling: {
        min: 1,
        max: 15,
        label: {
          enabled: !0,
          min: 14,
          max: 30,
          maxVisible: 30,
          drawThreshold: 5
        },
        customScalingFunction: function(s, u, l, c) {
          if (u === s)
            return 0.5;
          var d = 1 / (u - s);
          return Math.max(0, (c - s) * d);
        }
      },
      selectionWidth: 1.5,
      selfReference: {
        size: 20,
        angle: Math.PI / 4,
        renderBehindTheNode: !0
      },
      shadow: {
        enabled: !1,
        color: "rgba(0,0,0,0.5)",
        size: 10,
        x: 5,
        y: 5
      },
      background: {
        enabled: !1,
        color: "rgba(111,111,111,1)",
        size: 10,
        dashes: !1
      },
      smooth: {
        enabled: !0,
        type: "dynamic",
        forceDirection: "none",
        roundness: 0.5
      },
      title: void 0,
      width: 1,
      value: void 0
    }, Ae(this.options, this.defaultOptions), this.bindEventListeners();
  }
  return N(r, [{
    key: "bindEventListeners",
    value: function() {
      var e = this, t, n;
      this.body.emitter.on("_forceDisableDynamicCurves", function(a) {
        var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        a === "dynamic" && (a = "continuous");
        var s = !1;
        for (var u in e.body.edges)
          if (Object.prototype.hasOwnProperty.call(e.body.edges, u)) {
            var l = e.body.edges[u], c = e.body.data.edges.get(u);
            if (c != null) {
              var d = c.smooth;
              d !== void 0 && d.enabled === !0 && d.type === "dynamic" && (a === void 0 ? l.setOptions({
                smooth: !1
              }) : l.setOptions({
                smooth: {
                  type: a
                }
              }), s = !0);
            }
          }
        o === !0 && s === !0 && e.body.emitter.emit("_dataChanged");
      }), this.body.emitter.on("_dataUpdated", function() {
        e.reconnectEdges();
      }), this.body.emitter.on("refreshEdges", A(t = this.refresh).call(t, this)), this.body.emitter.on("refresh", A(n = this.refresh).call(n, this)), this.body.emitter.on("destroy", function() {
        fe(e.edgesListeners, function(a, o) {
          e.body.data.edges && e.body.data.edges.off(o, a);
        }), delete e.body.functions.createEdge, delete e.edgesListeners.add, delete e.edgesListeners.update, delete e.edgesListeners.remove, delete e.edgesListeners;
      });
    }
    /**
     *
     * @param {object} options
     */
  }, {
    key: "setOptions",
    value: function(e) {
      if (e !== void 0) {
        ji.parseOptions(this.options, e, !0, this.defaultOptions, !0);
        var t = !1;
        if (e.smooth !== void 0)
          for (var n in this.body.edges)
            Object.prototype.hasOwnProperty.call(this.body.edges, n) && (t = this.body.edges[n].updateEdgeType() || t);
        if (e.font !== void 0)
          for (var a in this.body.edges)
            Object.prototype.hasOwnProperty.call(this.body.edges, a) && this.body.edges[a].updateLabelModule();
        (e.hidden !== void 0 || e.physics !== void 0 || t === !0) && this.body.emitter.emit("_dataChanged");
      }
    }
    /**
     * Load edges by reading the data table
     *
     * @param {Array | DataSet | DataView} edges    The data containing the edges.
     * @param {boolean} [doNotEmit=false] - Suppress data changed event.
     * @private
     */
  }, {
    key: "setData",
    value: function(e) {
      var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = this.body.data.edges;
      if (RE("id", e))
        this.body.data.edges = e;
      else if (Te(e))
        this.body.data.edges = new Hn(), this.body.data.edges.add(e);
      else if (!e)
        this.body.data.edges = new Hn();
      else
        throw new TypeError("Array or DataSet expected");
      if (a && fe(this.edgesListeners, function(s, u) {
        a.off(u, s);
      }), this.body.edges = {}, this.body.data.edges) {
        fe(this.edgesListeners, function(s, u) {
          t.body.data.edges.on(u, s);
        });
        var o = this.body.data.edges.getIds();
        this.add(o, !0);
      }
      this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"), n === !1 && this.body.emitter.emit("_dataChanged");
    }
    /**
     * Add edges
     *
     * @param {number[] | string[]} ids
     * @param {boolean} [doNotEmit=false]
     * @private
     */
  }, {
    key: "add",
    value: function(e) {
      for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = this.body.edges, a = this.body.data.edges, o = 0; o < e.length; o++) {
        var s = e[o], u = n[s];
        u && u.disconnect();
        var l = a.get(s, {
          showInternalIds: !0
        });
        n[s] = this.create(l);
      }
      this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"), t === !1 && this.body.emitter.emit("_dataChanged");
    }
    /**
     * Update existing edges, or create them when not yet existing
     *
     * @param {number[] | string[]} ids
     * @private
     */
  }, {
    key: "update",
    value: function(e) {
      for (var t = this.body.edges, n = this.body.data.edges, a = !1, o = 0; o < e.length; o++) {
        var s = e[o], u = n.get(s), l = t[s];
        l !== void 0 ? (l.disconnect(), a = l.setOptions(u) || a, l.connect()) : (this.body.edges[s] = this.create(u), a = !0);
      }
      a === !0 ? (this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"), this.body.emitter.emit("_dataChanged")) : this.body.emitter.emit("_dataUpdated");
    }
    /**
     * Remove existing edges. Non existing ids will be ignored
     *
     * @param {number[] | string[]} ids
     * @param {boolean} [emit=true]
     * @private
     */
  }, {
    key: "remove",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (e.length !== 0) {
        var n = this.body.edges;
        fe(e, function(a) {
          var o = n[a];
          o !== void 0 && o.remove();
        }), t && this.body.emitter.emit("_dataChanged");
      }
    }
    /**
     * Refreshes Edge Handler
     */
  }, {
    key: "refresh",
    value: function() {
      var e = this;
      fe(this.body.edges, function(t, n) {
        var a = e.body.data.edges.get(n);
        a !== void 0 && t.setOptions(a);
      });
    }
    /**
     *
     * @param {object} properties
     * @returns {Edge}
     */
  }, {
    key: "create",
    value: function(e) {
      return new ji(e, this.body, this.images, this.options, this.defaultOptions);
    }
    /**
     * Reconnect all edges
     *
     * @private
     */
  }, {
    key: "reconnectEdges",
    value: function() {
      var e, t = this.body.nodes, n = this.body.edges;
      for (e in t)
        Object.prototype.hasOwnProperty.call(t, e) && (t[e].edges = []);
      for (e in n)
        if (Object.prototype.hasOwnProperty.call(n, e)) {
          var a = n[e];
          a.from = null, a.to = null, a.connect();
        }
    }
    /**
     *
     * @param {Edge.id} edgeId
     * @returns {Array}
     */
  }, {
    key: "getConnectedNodes",
    value: function(e) {
      var t = [];
      if (this.body.edges[e] !== void 0) {
        var n = this.body.edges[e];
        n.fromId !== void 0 && t.push(n.fromId), n.toId !== void 0 && t.push(n.toId);
      }
      return t;
    }
    /**
     * There is no direct relation between the nodes and the edges DataSet,
     * so the right place to do call this is in the handler for event `_dataUpdated`.
     */
  }, {
    key: "_updateState",
    value: function() {
      this._addMissingEdges(), this._removeInvalidEdges();
    }
    /**
     * Scan for missing nodes and remove corresponding edges, if any.
     *
     * @private
     */
  }, {
    key: "_removeInvalidEdges",
    value: function() {
      var e = this, t = [];
      fe(this.body.edges, function(n, a) {
        var o = e.body.nodes[n.toId], s = e.body.nodes[n.fromId];
        o !== void 0 && o.isCluster === !0 || s !== void 0 && s.isCluster === !0 || (o === void 0 || s === void 0) && t.push(a);
      }), this.remove(t, !1);
    }
    /**
     * add all edges from dataset that are not in the cached state
     *
     * @private
     */
  }, {
    key: "_addMissingEdges",
    value: function() {
      var e = this.body.data.edges;
      if (e != null) {
        var t = this.body.edges, n = [];
        xe(e).call(e, function(a, o) {
          var s = t[o];
          s === void 0 && n.push(o);
        }), this.add(n, !0);
      }
    }
  }]), r;
})(), HT = /* @__PURE__ */ (function() {
  function r(i, e, t) {
    M(this, r), this.body = i, this.physicsBody = e, this.barnesHutTree, this.setOptions(t), this._rng = zl("BARNES HUT SOLVER");
  }
  return N(r, [{
    key: "setOptions",
    value: function(e) {
      this.options = e, this.thetaInversed = 1 / this.options.theta, this.overlapAvoidanceFactor = 1 - Math.max(0, Math.min(1, this.options.avoidOverlap));
    }
    /**
     * This function calculates the forces the nodes apply on each other based on a gravitational model.
     * The Barnes Hut method is used to speed up this N-body simulation.
     *
     * @private
     */
  }, {
    key: "solve",
    value: function() {
      if (this.options.gravitationalConstant !== 0 && this.physicsBody.physicsNodeIndices.length > 0) {
        var e, t = this.body.nodes, n = this.physicsBody.physicsNodeIndices, a = n.length, o = this._formBarnesHutTree(t, n);
        this.barnesHutTree = o;
        for (var s = 0; s < a; s++)
          e = t[n[s]], e.options.mass > 0 && this._getForceContributions(o.root, e);
      }
    }
    /**
     * @param {object} parentBranch
     * @param {Node} node
     * @private
     */
  }, {
    key: "_getForceContributions",
    value: function(e, t) {
      this._getForceContribution(e.children.NW, t), this._getForceContribution(e.children.NE, t), this._getForceContribution(e.children.SW, t), this._getForceContribution(e.children.SE, t);
    }
    /**
     * This function traverses the barnesHutTree. It checks when it can approximate distant nodes with their center of mass.
     * If a region contains a single node, we check if it is not itself, then we apply the force.
     *
     * @param {object} parentBranch
     * @param {Node} node
     * @private
     */
  }, {
    key: "_getForceContribution",
    value: function(e, t) {
      if (e.childrenCount > 0) {
        var n = e.centerOfMass.x - t.x, a = e.centerOfMass.y - t.y, o = Math.sqrt(n * n + a * a);
        o * e.calcSize > this.thetaInversed ? this._calculateForces(o, n, a, t, e) : e.childrenCount === 4 ? this._getForceContributions(e, t) : e.children.data.id != t.id && this._calculateForces(o, n, a, t, e);
      }
    }
    /**
     * Calculate the forces based on the distance.
     *
     * @param {number} distance
     * @param {number} dx
     * @param {number} dy
     * @param {Node} node
     * @param {object} parentBranch
     * @private
     */
  }, {
    key: "_calculateForces",
    value: function(e, t, n, a, o) {
      e === 0 && (e = 0.1, t = e), this.overlapAvoidanceFactor < 1 && a.shape.radius && (e = Math.max(0.1 + this.overlapAvoidanceFactor * a.shape.radius, e - a.shape.radius));
      var s = this.options.gravitationalConstant * o.mass * a.options.mass / Math.pow(e, 3), u = t * s, l = n * s;
      this.physicsBody.forces[a.id].x += u, this.physicsBody.forces[a.id].y += l;
    }
    /**
     * This function constructs the barnesHut tree recursively. It creates the root, splits it and starts placing the nodes.
     *
     * @param {Array.<Node>} nodes
     * @param {Array.<number>} nodeIndices
     * @returns {{root: {centerOfMass: {x: number, y: number}, mass: number, range: {minX: number, maxX: number, minY: number, maxY: number}, size: number, calcSize: number, children: {data: null}, maxWidth: number, level: number, childrenCount: number}}} BarnesHutTree
     * @private
     */
  }, {
    key: "_formBarnesHutTree",
    value: function(e, t) {
      for (var n, a = t.length, o = e[t[0]].x, s = e[t[0]].y, u = e[t[0]].x, l = e[t[0]].y, c = 1; c < a; c++) {
        var d = e[t[c]], f = d.x, h = d.y;
        d.options.mass > 0 && (f < o && (o = f), f > u && (u = f), h < s && (s = h), h > l && (l = h));
      }
      var v = Math.abs(u - o) - Math.abs(l - s);
      v > 0 ? (s -= 0.5 * v, l += 0.5 * v) : (o += 0.5 * v, u -= 0.5 * v);
      var p = 1e-5, y = Math.max(p, Math.abs(u - o)), m = 0.5 * y, b = 0.5 * (o + u), w = 0.5 * (s + l), _ = {
        root: {
          centerOfMass: {
            x: 0,
            y: 0
          },
          mass: 0,
          range: {
            minX: b - m,
            maxX: b + m,
            minY: w - m,
            maxY: w + m
          },
          size: y,
          calcSize: 1 / y,
          children: {
            data: null
          },
          maxWidth: 0,
          level: 0,
          childrenCount: 4
        }
      };
      this._splitBranch(_.root);
      for (var $ = 0; $ < a; $++)
        n = e[t[$]], n.options.mass > 0 && this._placeInTree(_.root, n);
      return _;
    }
    /**
     * this updates the mass of a branch. this is increased by adding a node.
     *
     * @param {object} parentBranch
     * @param {Node} node
     * @private
     */
  }, {
    key: "_updateBranchMass",
    value: function(e, t) {
      var n = e.centerOfMass, a = e.mass + t.options.mass, o = 1 / a;
      n.x = n.x * e.mass + t.x * t.options.mass, n.x *= o, n.y = n.y * e.mass + t.y * t.options.mass, n.y *= o, e.mass = a;
      var s = Math.max(Math.max(t.height, t.radius), t.width);
      e.maxWidth = e.maxWidth < s ? s : e.maxWidth;
    }
    /**
     * determine in which branch the node will be placed.
     *
     * @param {object} parentBranch
     * @param {Node} node
     * @param {boolean} skipMassUpdate
     * @private
     */
  }, {
    key: "_placeInTree",
    value: function(e, t, n) {
      (n != !0 || n === void 0) && this._updateBranchMass(e, t);
      var a = e.children.NW.range, o;
      a.maxX > t.x ? a.maxY > t.y ? o = "NW" : o = "SW" : a.maxY > t.y ? o = "NE" : o = "SE", this._placeInRegion(e, t, o);
    }
    /**
     * actually place the node in a region (or branch)
     *
     * @param {object} parentBranch
     * @param {Node} node
     * @param {'NW'| 'NE' | 'SW' | 'SE'} region
     * @private
     */
  }, {
    key: "_placeInRegion",
    value: function(e, t, n) {
      var a = e.children[n];
      switch (a.childrenCount) {
        case 0:
          a.children.data = t, a.childrenCount = 1, this._updateBranchMass(a, t);
          break;
        case 1:
          a.children.data.x === t.x && a.children.data.y === t.y ? (t.x += this._rng(), t.y += this._rng()) : (this._splitBranch(a), this._placeInTree(a, t));
          break;
        case 4:
          this._placeInTree(a, t);
          break;
      }
    }
    /**
     * this function splits a branch into 4 sub branches. If the branch contained a node, we place it in the subbranch
     * after the split is complete.
     *
     * @param {object} parentBranch
     * @private
     */
  }, {
    key: "_splitBranch",
    value: function(e) {
      var t = null;
      e.childrenCount === 1 && (t = e.children.data, e.mass = 0, e.centerOfMass.x = 0, e.centerOfMass.y = 0), e.childrenCount = 4, e.children.data = null, this._insertRegion(e, "NW"), this._insertRegion(e, "NE"), this._insertRegion(e, "SW"), this._insertRegion(e, "SE"), t != null && this._placeInTree(e, t);
    }
    /**
     * This function subdivides the region into four new segments.
     * Specifically, this inserts a single new segment.
     * It fills the children section of the parentBranch
     *
     * @param {object} parentBranch
     * @param {'NW'| 'NE' | 'SW' | 'SE'} region
     * @private
     */
  }, {
    key: "_insertRegion",
    value: function(e, t) {
      var n, a, o, s, u = 0.5 * e.size;
      switch (t) {
        case "NW":
          n = e.range.minX, a = e.range.minX + u, o = e.range.minY, s = e.range.minY + u;
          break;
        case "NE":
          n = e.range.minX + u, a = e.range.maxX, o = e.range.minY, s = e.range.minY + u;
          break;
        case "SW":
          n = e.range.minX, a = e.range.minX + u, o = e.range.minY + u, s = e.range.maxY;
          break;
        case "SE":
          n = e.range.minX + u, a = e.range.maxX, o = e.range.minY + u, s = e.range.maxY;
          break;
      }
      e.children[t] = {
        centerOfMass: {
          x: 0,
          y: 0
        },
        mass: 0,
        range: {
          minX: n,
          maxX: a,
          minY: o,
          maxY: s
        },
        size: 0.5 * e.size,
        calcSize: 2 * e.calcSize,
        children: {
          data: null
        },
        maxWidth: 0,
        level: e.level + 1,
        childrenCount: 0
      };
    }
    //---------------------------  DEBUGGING BELOW  ---------------------------//
    /**
     * This function is for debugging purposed, it draws the tree.
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {string} color
     * @private
     */
  }, {
    key: "_debug",
    value: function(e, t) {
      this.barnesHutTree !== void 0 && (e.lineWidth = 1, this._drawBranch(this.barnesHutTree.root, e, t));
    }
    /**
     * This function is for debugging purposes. It draws the branches recursively.
     *
     * @param {object} branch
     * @param {CanvasRenderingContext2D} ctx
     * @param {string} color
     * @private
     */
  }, {
    key: "_drawBranch",
    value: function(e, t, n) {
      n === void 0 && (n = "#FF0000"), e.childrenCount === 4 && (this._drawBranch(e.children.NW, t), this._drawBranch(e.children.NE, t), this._drawBranch(e.children.SE, t), this._drawBranch(e.children.SW, t)), t.strokeStyle = n, t.beginPath(), t.moveTo(e.range.minX, e.range.minY), t.lineTo(e.range.maxX, e.range.minY), t.stroke(), t.beginPath(), t.moveTo(e.range.maxX, e.range.minY), t.lineTo(e.range.maxX, e.range.maxY), t.stroke(), t.beginPath(), t.moveTo(e.range.maxX, e.range.maxY), t.lineTo(e.range.minX, e.range.maxY), t.stroke(), t.beginPath(), t.moveTo(e.range.minX, e.range.maxY), t.lineTo(e.range.minX, e.range.minY), t.stroke();
    }
  }]), r;
})(), Wfe = /* @__PURE__ */ (function() {
  function r(i, e, t) {
    M(this, r), this._rng = zl("REPULSION SOLVER"), this.body = i, this.physicsBody = e, this.setOptions(t);
  }
  return N(r, [{
    key: "setOptions",
    value: function(e) {
      this.options = e;
    }
    /**
     * Calculate the forces the nodes apply on each other based on a repulsion field.
     * This field is linearly approximated.
     *
     * @private
     */
  }, {
    key: "solve",
    value: function() {
      for (var e, t, n, a, o, s, u, l, c = this.body.nodes, d = this.physicsBody.physicsNodeIndices, f = this.physicsBody.forces, h = this.options.nodeDistance, v = -2 / 3 / h, p = 4 / 3, y = 0; y < d.length - 1; y++) {
        u = c[d[y]];
        for (var m = y + 1; m < d.length; m++)
          l = c[d[m]], e = l.x - u.x, t = l.y - u.y, n = Math.sqrt(e * e + t * t), n === 0 && (n = 0.1 * this._rng(), e = n), n < 2 * h && (n < 0.5 * h ? s = 1 : s = v * n + p, s = s / n, a = e * s, o = t * s, f[u.id].x -= a, f[u.id].y -= o, f[l.id].x += a, f[l.id].y += o);
      }
    }
  }]), r;
})(), Hfe = /* @__PURE__ */ (function() {
  function r(i, e, t) {
    M(this, r), this.body = i, this.physicsBody = e, this.setOptions(t);
  }
  return N(r, [{
    key: "setOptions",
    value: function(e) {
      this.options = e, this.overlapAvoidanceFactor = Math.max(0, Math.min(1, this.options.avoidOverlap || 0));
    }
    /**
     * Calculate the forces the nodes apply on each other based on a repulsion field.
     * This field is linearly approximated.
     *
     * @private
     */
  }, {
    key: "solve",
    value: function() {
      for (var e = this.body.nodes, t = this.physicsBody.physicsNodeIndices, n = this.physicsBody.forces, a = this.options.nodeDistance, o = 0; o < t.length - 1; o++)
        for (var s = e[t[o]], u = o + 1; u < t.length; u++) {
          var l = e[t[u]];
          if (s.level === l.level) {
            var c = a + this.overlapAvoidanceFactor * ((s.shape.radius || 0) / 2 + (l.shape.radius || 0) / 2), d = l.x - s.x, f = l.y - s.y, h = Math.sqrt(d * d + f * f), v = 0.05, p = void 0;
            h < c ? p = -Math.pow(v * h, 2) + Math.pow(v * c, 2) : p = 0, h !== 0 && (p = p / h);
            var y = d * p, m = f * p;
            n[s.id].x -= y, n[s.id].y -= m, n[l.id].x += y, n[l.id].y += m;
          }
        }
    }
  }]), r;
})(), rf = /* @__PURE__ */ (function() {
  function r(i, e, t) {
    M(this, r), this.body = i, this.physicsBody = e, this.setOptions(t);
  }
  return N(r, [{
    key: "setOptions",
    value: function(e) {
      this.options = e;
    }
    /**
     * This function calculates the springforces on the nodes, accounting for the support nodes.
     *
     * @private
     */
  }, {
    key: "solve",
    value: function() {
      for (var e, t, n = this.physicsBody.physicsEdgeIndices, a = this.body.edges, o, s, u, l = 0; l < n.length; l++)
        t = a[n[l]], t.connected === !0 && t.toId !== t.fromId && this.body.nodes[t.toId] !== void 0 && this.body.nodes[t.fromId] !== void 0 && (t.edgeType.via !== void 0 ? (e = t.options.length === void 0 ? this.options.springLength : t.options.length, o = t.to, s = t.edgeType.via, u = t.from, this._calculateSpringForce(o, s, 0.5 * e), this._calculateSpringForce(s, u, 0.5 * e)) : (e = t.options.length === void 0 ? this.options.springLength * 1.5 : t.options.length, this._calculateSpringForce(t.from, t.to, e)));
    }
    /**
     * This is the code actually performing the calculation for the function above.
     *
     * @param {Node} node1
     * @param {Node} node2
     * @param {number} edgeLength
     * @private
     */
  }, {
    key: "_calculateSpringForce",
    value: function(e, t, n) {
      var a = e.x - t.x, o = e.y - t.y, s = Math.max(Math.sqrt(a * a + o * o), 0.01), u = this.options.springConstant * (n - s) / s, l = a * u, c = o * u;
      this.physicsBody.forces[e.id] !== void 0 && (this.physicsBody.forces[e.id].x += l, this.physicsBody.forces[e.id].y += c), this.physicsBody.forces[t.id] !== void 0 && (this.physicsBody.forces[t.id].x -= l, this.physicsBody.forces[t.id].y -= c);
    }
  }]), r;
})(), Ufe = /* @__PURE__ */ (function() {
  function r(i, e, t) {
    M(this, r), this.body = i, this.physicsBody = e, this.setOptions(t);
  }
  return N(r, [{
    key: "setOptions",
    value: function(e) {
      this.options = e;
    }
    /**
     * This function calculates the springforces on the nodes, accounting for the support nodes.
     *
     * @private
     */
  }, {
    key: "solve",
    value: function() {
      for (var e, t, n, a, o, s, u, l, c = this.body.edges, d = 0.5, f = this.physicsBody.physicsEdgeIndices, h = this.physicsBody.physicsNodeIndices, v = this.physicsBody.forces, p = 0; p < h.length; p++) {
        var y = h[p];
        v[y].springFx = 0, v[y].springFy = 0;
      }
      for (var m = 0; m < f.length; m++)
        t = c[f[m]], t.connected === !0 && (e = t.options.length === void 0 ? this.options.springLength : t.options.length, n = t.from.x - t.to.x, a = t.from.y - t.to.y, l = Math.sqrt(n * n + a * a), l = l === 0 ? 0.01 : l, u = this.options.springConstant * (e - l) / l, o = n * u, s = a * u, t.to.level != t.from.level ? (v[t.toId] !== void 0 && (v[t.toId].springFx -= o, v[t.toId].springFy -= s), v[t.fromId] !== void 0 && (v[t.fromId].springFx += o, v[t.fromId].springFy += s)) : (v[t.toId] !== void 0 && (v[t.toId].x -= d * o, v[t.toId].y -= d * s), v[t.fromId] !== void 0 && (v[t.fromId].x += d * o, v[t.fromId].y += d * s)));
      u = 1;
      for (var b, w, _ = 0; _ < h.length; _++) {
        var $ = h[_];
        b = Math.min(u, Math.max(-u, v[$].springFx)), w = Math.min(u, Math.max(-u, v[$].springFy)), v[$].x += b, v[$].y += w;
      }
      for (var C = 0, j = 0, W = 0; W < h.length; W++) {
        var B = h[W];
        C += v[B].x, j += v[B].y;
      }
      for (var L = C / h.length, X = j / h.length, ue = 0; ue < h.length; ue++) {
        var ee = h[ue];
        v[ee].x -= L, v[ee].y -= X;
      }
    }
  }]), r;
})(), fu = /* @__PURE__ */ (function() {
  function r(i, e, t) {
    M(this, r), this.body = i, this.physicsBody = e, this.setOptions(t);
  }
  return N(r, [{
    key: "setOptions",
    value: function(e) {
      this.options = e;
    }
    /**
     * Calculates forces for each node
     */
  }, {
    key: "solve",
    value: function() {
      for (var e, t, n, a, o = this.body.nodes, s = this.physicsBody.physicsNodeIndices, u = this.physicsBody.forces, l = 0; l < s.length; l++) {
        var c = s[l];
        a = o[c], e = -a.x, t = -a.y, n = Math.sqrt(e * e + t * t), this._calculateForces(n, e, t, u, a);
      }
    }
    /**
     * Calculate the forces based on the distance.
     *
     * @param {number} distance
     * @param {number} dx
     * @param {number} dy
     * @param {Object<Node.id, vis.Node>} forces
     * @param {Node} node
     * @private
     */
  }, {
    key: "_calculateForces",
    value: function(e, t, n, a, o) {
      var s = e === 0 ? 0 : this.options.centralGravity / e;
      a[o.id].x = t * s, a[o.id].y = n * s;
    }
  }]), r;
})();
function Vfe(r) {
  var i = Gfe();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function Gfe() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Kfe = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = Vfe(e);
  function e(t, n, a) {
    var o;
    return M(this, e), o = i.call(this, t, n, a), o._rng = zl("FORCE ATLAS 2 BASED REPULSION SOLVER"), o;
  }
  return N(e, [{
    key: "_calculateForces",
    value: function(n, a, o, s, u) {
      n === 0 && (n = 0.1 * this._rng(), a = n), this.overlapAvoidanceFactor < 1 && s.shape.radius && (n = Math.max(0.1 + this.overlapAvoidanceFactor * s.shape.radius, n - s.shape.radius));
      var l = s.edges.length + 1, c = this.options.gravitationalConstant * u.mass * s.options.mass * l / Math.pow(n, 2), d = a * c, f = o * c;
      this.physicsBody.forces[s.id].x += d, this.physicsBody.forces[s.id].y += f;
    }
  }]), e;
})(HT);
function qfe(r) {
  var i = Yfe();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function Yfe() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Xfe = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = qfe(e);
  function e(t, n, a) {
    return M(this, e), i.call(this, t, n, a);
  }
  return N(e, [{
    key: "_calculateForces",
    value: function(n, a, o, s, u) {
      if (n > 0) {
        var l = u.edges.length + 1, c = this.options.centralGravity * l * u.options.mass;
        s[u.id].x = a * c, s[u.id].y = o * c;
      }
    }
  }]), e;
})(fu), Jfe = /* @__PURE__ */ (function() {
  function r(i) {
    M(this, r), this.body = i, this.physicsBody = {
      physicsNodeIndices: [],
      physicsEdgeIndices: [],
      forces: {},
      velocities: {}
    }, this.physicsEnabled = !0, this.simulationInterval = 1e3 / 60, this.requiresTimeout = !0, this.previousStates = {}, this.referenceState = {}, this.freezeCache = {}, this.renderTimer = void 0, this.adaptiveTimestep = !1, this.adaptiveTimestepEnabled = !1, this.adaptiveCounter = 0, this.adaptiveInterval = 3, this.stabilized = !1, this.startedStabilization = !1, this.stabilizationIterations = 0, this.ready = !1, this.options = {}, this.defaultOptions = {
      enabled: !0,
      barnesHut: {
        theta: 0.5,
        gravitationalConstant: -2e3,
        centralGravity: 0.3,
        springLength: 95,
        springConstant: 0.04,
        damping: 0.09,
        avoidOverlap: 0
      },
      forceAtlas2Based: {
        theta: 0.5,
        gravitationalConstant: -50,
        centralGravity: 0.01,
        springConstant: 0.08,
        springLength: 100,
        damping: 0.4,
        avoidOverlap: 0
      },
      repulsion: {
        centralGravity: 0.2,
        springLength: 200,
        springConstant: 0.05,
        nodeDistance: 100,
        damping: 0.09,
        avoidOverlap: 0
      },
      hierarchicalRepulsion: {
        centralGravity: 0,
        springLength: 100,
        springConstant: 0.01,
        nodeDistance: 120,
        damping: 0.09
      },
      maxVelocity: 50,
      minVelocity: 0.75,
      // px/s
      solver: "barnesHut",
      stabilization: {
        enabled: !0,
        iterations: 1e3,
        // maximum number of iteration to stabilize
        updateInterval: 50,
        onlyDynamicEdges: !1,
        fit: !0
      },
      timestep: 0.5,
      adaptiveTimestep: !0,
      wind: {
        x: 0,
        y: 0
      }
    }, tt(this.options, this.defaultOptions), this.timestep = 0.5, this.layoutFailed = !1, this.bindEventListeners();
  }
  return N(r, [{
    key: "bindEventListeners",
    value: function() {
      var e = this;
      this.body.emitter.on("initPhysics", function() {
        e.initPhysics();
      }), this.body.emitter.on("_layoutFailed", function() {
        e.layoutFailed = !0;
      }), this.body.emitter.on("resetPhysics", function() {
        e.stopSimulation(), e.ready = !1;
      }), this.body.emitter.on("disablePhysics", function() {
        e.physicsEnabled = !1, e.stopSimulation();
      }), this.body.emitter.on("restorePhysics", function() {
        e.setOptions(e.options), e.ready === !0 && e.startSimulation();
      }), this.body.emitter.on("startSimulation", function() {
        e.ready === !0 && e.startSimulation();
      }), this.body.emitter.on("stopSimulation", function() {
        e.stopSimulation();
      }), this.body.emitter.on("destroy", function() {
        e.stopSimulation(!1), e.body.emitter.off();
      }), this.body.emitter.on("_dataChanged", function() {
        e.updatePhysicsData();
      });
    }
    /**
     * set the physics options
     *
     * @param {object} options
     */
  }, {
    key: "setOptions",
    value: function(e) {
      if (e !== void 0)
        if (e === !1)
          this.options.enabled = !1, this.physicsEnabled = !1, this.stopSimulation();
        else if (e === !0)
          this.options.enabled = !0, this.physicsEnabled = !0, this.startSimulation();
        else {
          this.physicsEnabled = !0, Bu(["stabilization"], this.options, e), Qt(this.options, e, "stabilization"), e.enabled === void 0 && (this.options.enabled = !0), this.options.enabled === !1 && (this.physicsEnabled = !1, this.stopSimulation());
          var t = this.options.wind;
          t && ((typeof t.x != "number" || wh(t.x)) && (t.x = 0), (typeof t.y != "number" || wh(t.y)) && (t.y = 0)), this.timestep = this.options.timestep;
        }
      this.init();
    }
    /**
     * configure the engine.
     */
  }, {
    key: "init",
    value: function() {
      var e;
      this.options.solver === "forceAtlas2Based" ? (e = this.options.forceAtlas2Based, this.nodesSolver = new Kfe(this.body, this.physicsBody, e), this.edgesSolver = new rf(this.body, this.physicsBody, e), this.gravitySolver = new Xfe(this.body, this.physicsBody, e)) : this.options.solver === "repulsion" ? (e = this.options.repulsion, this.nodesSolver = new Wfe(this.body, this.physicsBody, e), this.edgesSolver = new rf(this.body, this.physicsBody, e), this.gravitySolver = new fu(this.body, this.physicsBody, e)) : this.options.solver === "hierarchicalRepulsion" ? (e = this.options.hierarchicalRepulsion, this.nodesSolver = new Hfe(this.body, this.physicsBody, e), this.edgesSolver = new Ufe(this.body, this.physicsBody, e), this.gravitySolver = new fu(this.body, this.physicsBody, e)) : (e = this.options.barnesHut, this.nodesSolver = new HT(this.body, this.physicsBody, e), this.edgesSolver = new rf(this.body, this.physicsBody, e), this.gravitySolver = new fu(this.body, this.physicsBody, e)), this.modelOptions = e;
    }
    /**
     * initialize the engine
     */
  }, {
    key: "initPhysics",
    value: function() {
      this.physicsEnabled === !0 && this.options.enabled === !0 ? this.options.stabilization.enabled === !0 ? this.stabilize() : (this.stabilized = !1, this.ready = !0, this.body.emitter.emit("fit", {}, this.layoutFailed), this.startSimulation()) : (this.ready = !0, this.body.emitter.emit("fit"));
    }
    /**
     * Start the simulation
     */
  }, {
    key: "startSimulation",
    value: function() {
      if (this.physicsEnabled === !0 && this.options.enabled === !0) {
        if (this.stabilized = !1, this.adaptiveTimestep = !1, this.body.emitter.emit("_resizeNodes"), this.viewFunction === void 0) {
          var e;
          this.viewFunction = A(e = this.simulationStep).call(e, this), this.body.emitter.on("initRedraw", this.viewFunction), this.body.emitter.emit("_startRendering");
        }
      } else
        this.body.emitter.emit("_redraw");
    }
    /**
     * Stop the simulation, force stabilization.
     *
     * @param {boolean} [emit=true]
     */
  }, {
    key: "stopSimulation",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      this.stabilized = !0, e === !0 && this._emitStabilized(), this.viewFunction !== void 0 && (this.body.emitter.off("initRedraw", this.viewFunction), this.viewFunction = void 0, e === !0 && this.body.emitter.emit("_stopRendering"));
    }
    /**
     * The viewFunction inserts this step into each render loop. It calls the physics tick and handles the cleanup at stabilized.
     *
     */
  }, {
    key: "simulationStep",
    value: function() {
      var e = Du();
      this.physicsTick();
      var t = Du() - e;
      (t < 0.4 * this.simulationInterval || this.runDoubleSpeed === !0) && this.stabilized === !1 && (this.physicsTick(), this.runDoubleSpeed = !0), this.stabilized === !0 && this.stopSimulation();
    }
    /**
     * trigger the stabilized event.
     *
     * @param {number} [amountOfIterations=this.stabilizationIterations]
     * @private
     */
  }, {
    key: "_emitStabilized",
    value: function() {
      var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.stabilizationIterations;
      (this.stabilizationIterations > 1 || this.startedStabilization === !0) && Er(function() {
        e.body.emitter.emit("stabilized", {
          iterations: t
        }), e.startedStabilization = !1, e.stabilizationIterations = 0;
      }, 0);
    }
    /**
     * Calculate the forces for one physics iteration and move the nodes.
     *
     * @private
     */
  }, {
    key: "physicsStep",
    value: function() {
      this.gravitySolver.solve(), this.nodesSolver.solve(), this.edgesSolver.solve(), this.moveNodes();
    }
    /**
     * Make dynamic adjustments to the timestep, based on current state.
     *
     * Helper function for physicsTick().
     *
     * @private
     */
  }, {
    key: "adjustTimeStep",
    value: function() {
      var e = 1.2;
      this._evaluateStepQuality() === !0 ? this.timestep = e * this.timestep : this.timestep / e < this.options.timestep ? this.timestep = this.options.timestep : (this.adaptiveCounter = -1, this.timestep = Math.max(this.options.timestep, this.timestep / e));
    }
    /**
     * A single simulation step (or 'tick') in the physics simulation
     *
     * @private
     */
  }, {
    key: "physicsTick",
    value: function() {
      if (this._startStabilizing(), this.stabilized !== !0) {
        if (this.adaptiveTimestep === !0 && this.adaptiveTimestepEnabled === !0) {
          var e = this.adaptiveCounter % this.adaptiveInterval === 0;
          e ? (this.timestep = 2 * this.timestep, this.physicsStep(), this.revert(), this.timestep = 0.5 * this.timestep, this.physicsStep(), this.physicsStep(), this.adjustTimeStep()) : this.physicsStep(), this.adaptiveCounter += 1;
        } else
          this.timestep = this.options.timestep, this.physicsStep();
        this.stabilized === !0 && this.revert(), this.stabilizationIterations++;
      }
    }
    /**
     * Nodes and edges can have the physics toggles on or off. A collection of indices is created here so we can skip the check all the time.
     *
     * @private
     */
  }, {
    key: "updatePhysicsData",
    value: function() {
      this.physicsBody.forces = {}, this.physicsBody.physicsNodeIndices = [], this.physicsBody.physicsEdgeIndices = [];
      var e = this.body.nodes, t = this.body.edges;
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && e[n].options.physics === !0 && this.physicsBody.physicsNodeIndices.push(e[n].id);
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && t[a].options.physics === !0 && this.physicsBody.physicsEdgeIndices.push(t[a].id);
      for (var o = 0; o < this.physicsBody.physicsNodeIndices.length; o++) {
        var s = this.physicsBody.physicsNodeIndices[o];
        this.physicsBody.forces[s] = {
          x: 0,
          y: 0
        }, this.physicsBody.velocities[s] === void 0 && (this.physicsBody.velocities[s] = {
          x: 0,
          y: 0
        });
      }
      for (var u in this.physicsBody.velocities)
        e[u] === void 0 && delete this.physicsBody.velocities[u];
    }
    /**
     * Revert the simulation one step. This is done so after stabilization, every new start of the simulation will also say stabilized.
     */
  }, {
    key: "revert",
    value: function() {
      var e = We(this.previousStates), t = this.body.nodes, n = this.physicsBody.velocities;
      this.referenceState = {};
      for (var a = 0; a < e.length; a++) {
        var o = e[a];
        t[o] !== void 0 ? t[o].options.physics === !0 && (this.referenceState[o] = {
          positions: {
            x: t[o].x,
            y: t[o].y
          }
        }, n[o].x = this.previousStates[o].vx, n[o].y = this.previousStates[o].vy, t[o].x = this.previousStates[o].x, t[o].y = this.previousStates[o].y) : delete this.previousStates[o];
      }
    }
    /**
     * This compares the reference state to the current state
     *
     * @returns {boolean}
     * @private
     */
  }, {
    key: "_evaluateStepQuality",
    value: function() {
      var e, t, n, a = this.body.nodes, o = this.referenceState, s = 0.3;
      for (var u in this.referenceState)
        if (Object.prototype.hasOwnProperty.call(this.referenceState, u) && a[u] !== void 0 && (e = a[u].x - o[u].positions.x, t = a[u].y - o[u].positions.y, n = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2)), n > s))
          return !1;
      return !0;
    }
    /**
     * move the nodes one timestep and check if they are stabilized
     */
  }, {
    key: "moveNodes",
    value: function() {
      for (var e = this.physicsBody.physicsNodeIndices, t = 0, n = 0, a = 5, o = 0; o < e.length; o++) {
        var s = e[o], u = this._performStep(s);
        t = Math.max(t, u), n += u;
      }
      this.adaptiveTimestepEnabled = n / e.length < a, this.stabilized = t < this.options.minVelocity;
    }
    /**
     * Calculate new velocity for a coordinate direction
     *
     * @param {number} v  velocity for current coordinate
     * @param {number} f  regular force for current coordinate
     * @param {number} m  mass of current node
     * @returns {number} new velocity for current coordinate
     * @private
     */
  }, {
    key: "calculateComponentVelocity",
    value: function(e, t, n) {
      var a = this.modelOptions.damping * e, o = (t - a) / n;
      e += o * this.timestep;
      var s = this.options.maxVelocity || 1e9;
      return Math.abs(e) > s && (e = e > 0 ? s : -s), e;
    }
    /**
     * Perform the actual step
     *
     * @param {Node.id} nodeId
     * @returns {number} the new velocity of given node
     * @private
     */
  }, {
    key: "_performStep",
    value: function(e) {
      var t = this.body.nodes[e], n = this.physicsBody.forces[e];
      this.options.wind && (n.x += this.options.wind.x, n.y += this.options.wind.y);
      var a = this.physicsBody.velocities[e];
      this.previousStates[e] = {
        x: t.x,
        y: t.y,
        vx: a.x,
        vy: a.y
      }, t.options.fixed.x === !1 ? (a.x = this.calculateComponentVelocity(a.x, n.x, t.options.mass), t.x += a.x * this.timestep) : (n.x = 0, a.x = 0), t.options.fixed.y === !1 ? (a.y = this.calculateComponentVelocity(a.y, n.y, t.options.mass), t.y += a.y * this.timestep) : (n.y = 0, a.y = 0);
      var o = Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2));
      return o;
    }
    /**
     * When initializing and stabilizing, we can freeze nodes with a predefined position.
     * This greatly speeds up stabilization because only the supportnodes for the smoothCurves have to settle.
     *
     * @private
     */
  }, {
    key: "_freezeNodes",
    value: function() {
      var e = this.body.nodes;
      for (var t in e)
        if (Object.prototype.hasOwnProperty.call(e, t) && e[t].x && e[t].y) {
          var n = e[t].options.fixed;
          this.freezeCache[t] = {
            x: n.x,
            y: n.y
          }, n.x = !0, n.y = !0;
        }
    }
    /**
     * Unfreezes the nodes that have been frozen by _freezeDefinedNodes.
     *
     * @private
     */
  }, {
    key: "_restoreFrozenNodes",
    value: function() {
      var e = this.body.nodes;
      for (var t in e)
        Object.prototype.hasOwnProperty.call(e, t) && this.freezeCache[t] !== void 0 && (e[t].options.fixed.x = this.freezeCache[t].x, e[t].options.fixed.y = this.freezeCache[t].y);
      this.freezeCache = {};
    }
    /**
     * Find a stable position for all nodes
     *
     * @param {number} [iterations=this.options.stabilization.iterations]
     */
  }, {
    key: "stabilize",
    value: function() {
      var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.stabilization.iterations;
      if (typeof t != "number" && (t = this.options.stabilization.iterations, console.error("The stabilize method needs a numeric amount of iterations. Switching to default: ", t)), this.physicsBody.physicsNodeIndices.length === 0) {
        this.ready = !0;
        return;
      }
      this.adaptiveTimestep = this.options.adaptiveTimestep, this.body.emitter.emit("_resizeNodes"), this.stopSimulation(), this.stabilized = !1, this.body.emitter.emit("_blockRedraw"), this.targetIterations = t, this.options.stabilization.onlyDynamicEdges === !0 && this._freezeNodes(), this.stabilizationIterations = 0, Er(function() {
        return e._stabilizationBatch();
      }, 0);
    }
    /**
     * If not already stabilizing, start it and emit a start event.
     *
     * @returns {boolean} true if stabilization started with this call
     * @private
     */
  }, {
    key: "_startStabilizing",
    value: function() {
      return this.startedStabilization === !0 ? !1 : (this.body.emitter.emit("startStabilizing"), this.startedStabilization = !0, !0);
    }
    /**
     * One batch of stabilization
     *
     * @private
     */
  }, {
    key: "_stabilizationBatch",
    value: function() {
      var e = this, t = function() {
        return e.stabilized === !1 && e.stabilizationIterations < e.targetIterations;
      }, n = function() {
        e.body.emitter.emit("stabilizationProgress", {
          iterations: e.stabilizationIterations,
          total: e.targetIterations
        });
      };
      this._startStabilizing() && n();
      for (var a = 0; t() && a < this.options.stabilization.updateInterval; )
        this.physicsTick(), a++;
      if (n(), t()) {
        var o;
        Er(A(o = this._stabilizationBatch).call(o, this), 0);
      } else
        this._finalizeStabilization();
    }
    /**
     * Wrap up the stabilization, fit and emit the events.
     *
     * @private
     */
  }, {
    key: "_finalizeStabilization",
    value: function() {
      this.body.emitter.emit("_allowRedraw"), this.options.stabilization.fit === !0 && this.body.emitter.emit("fit"), this.options.stabilization.onlyDynamicEdges === !0 && this._restoreFrozenNodes(), this.body.emitter.emit("stabilizationIterationsDone"), this.body.emitter.emit("_requestRedraw"), this.stabilized === !0 ? this._emitStabilized() : this.startSimulation(), this.ready = !0;
    }
    //---------------------------  DEBUGGING BELOW  ---------------------------//
    /**
     * Debug function that display arrows for the forces currently active in the network.
     *
     * Use this when debugging only.
     *
     * @param {CanvasRenderingContext2D} ctx
     * @private
     */
  }, {
    key: "_drawForces",
    value: function(e) {
      for (var t = 0; t < this.physicsBody.physicsNodeIndices.length; t++) {
        var n = this.physicsBody.physicsNodeIndices[t], a = this.body.nodes[n], o = this.physicsBody.forces[n], s = 20, u = 0.03, l = Math.sqrt(Math.pow(o.x, 2) + Math.pow(o.x, 2)), c = Math.min(Math.max(5, l), 15), d = 3 * c, f = bh((180 - Math.min(1, Math.max(0, u * l)) * 180) / 360, 1, 1), h = {
          x: a.x + s * o.x,
          y: a.y + s * o.y
        };
        e.lineWidth = c, e.strokeStyle = f, e.beginPath(), e.moveTo(a.x, a.y), e.lineTo(h.x, h.y), e.stroke();
        var v = Math.atan2(o.y, o.x);
        e.fillStyle = f, zT.draw(e, {
          type: "arrow",
          point: h,
          angle: v,
          length: d
        }), rs(e).call(e);
      }
    }
  }]), r;
})();
let Hs;
const Qfe = new Uint8Array(16);
function Zfe() {
  if (!Hs && (Hs = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Hs))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Hs(Qfe);
}
const gt = [];
for (let r = 0; r < 256; ++r)
  gt.push((r + 256).toString(16).slice(1));
function ehe(r, i = 0) {
  return gt[r[i + 0]] + gt[r[i + 1]] + gt[r[i + 2]] + gt[r[i + 3]] + "-" + gt[r[i + 4]] + gt[r[i + 5]] + "-" + gt[r[i + 6]] + gt[r[i + 7]] + "-" + gt[r[i + 8]] + gt[r[i + 9]] + "-" + gt[r[i + 10]] + gt[r[i + 11]] + gt[r[i + 12]] + gt[r[i + 13]] + gt[r[i + 14]] + gt[r[i + 15]];
}
const the = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var f1 = {
  randomUUID: the
};
function Ya(r, i, e) {
  if (f1.randomUUID && !r)
    return f1.randomUUID();
  r = r || {};
  const t = r.random || (r.rng || Zfe)();
  return t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, ehe(t);
}
var St = /* @__PURE__ */ (function() {
  function r() {
    M(this, r);
  }
  return N(r, null, [{
    key: "getRange",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = 1e9, a = -1e9, o = 1e9, s = -1e9, u;
      if (t.length > 0)
        for (var l = 0; l < t.length; l++)
          u = e[t[l]], o > u.shape.boundingBox.left && (o = u.shape.boundingBox.left), s < u.shape.boundingBox.right && (s = u.shape.boundingBox.right), n > u.shape.boundingBox.top && (n = u.shape.boundingBox.top), a < u.shape.boundingBox.bottom && (a = u.shape.boundingBox.bottom);
      return o === 1e9 && s === -1e9 && n === 1e9 && a === -1e9 && (n = 0, a = 0, o = 0, s = 0), {
        minX: o,
        maxX: s,
        minY: n,
        maxY: a
      };
    }
    /**
     * Find the center position of the network
     *
     * @param {Array.<Node>} allNodes
     * @param {Array.<Node>} [specificNodes=[]]
     * @returns {{minX: number, maxX: number, minY: number, maxY: number}}
     * @static
     */
  }, {
    key: "getRangeCore",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = 1e9, a = -1e9, o = 1e9, s = -1e9, u;
      if (t.length > 0)
        for (var l = 0; l < t.length; l++)
          u = e[t[l]], o > u.x && (o = u.x), s < u.x && (s = u.x), n > u.y && (n = u.y), a < u.y && (a = u.y);
      return o === 1e9 && s === -1e9 && n === 1e9 && a === -1e9 && (n = 0, a = 0, o = 0, s = 0), {
        minX: o,
        maxX: s,
        minY: n,
        maxY: a
      };
    }
    /**
     * @param {object} range = {minX: minX, maxX: maxX, minY: minY, maxY: maxY};
     * @returns {{x: number, y: number}}
     * @static
     */
  }, {
    key: "findCenter",
    value: function(e) {
      return {
        x: 0.5 * (e.maxX + e.minX),
        y: 0.5 * (e.maxY + e.minY)
      };
    }
    /**
     * This returns a clone of the options or options of the edge or node to be used for construction of new edges or check functions for new nodes.
     *
     * @param {vis.Item} item
     * @param {'node'|undefined} type
     * @returns {{}}
     * @static
     */
  }, {
    key: "cloneOptions",
    value: function(e, t) {
      var n = {};
      return t === void 0 || t === "node" ? (Ae(n, e.options, !0), n.x = e.x, n.y = e.y, n.amountOfConnections = e.edges.length) : Ae(n, e.options, !0), n;
    }
  }]), r;
})();
function rhe(r) {
  var i = nhe();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function nhe() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var ihe = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = rhe(e);
  function e(t, n, a, o, s, u) {
    var l;
    return M(this, e), l = i.call(this, t, n, a, o, s, u), l.isCluster = !0, l.containedNodes = {}, l.containedEdges = {}, l;
  }
  return N(e, [{
    key: "_openChildCluster",
    value: function(n) {
      var a = this, o = this.body.nodes[n];
      if (this.containedNodes[n] === void 0)
        throw new Error("node with id: " + n + " not in current cluster");
      if (!o.isCluster)
        throw new Error("node with id: " + n + " is not a cluster");
      delete this.containedNodes[n], fe(o.edges, function(s) {
        delete a.containedEdges[s.id];
      }), fe(o.containedNodes, function(s, u) {
        a.containedNodes[u] = s;
      }), o.containedNodes = {}, fe(o.containedEdges, function(s, u) {
        a.containedEdges[u] = s;
      }), o.containedEdges = {}, fe(o.edges, function(s) {
        fe(a.edges, function(u) {
          var l, c, d = ye(l = u.clusteringEdgeReplacingIds).call(l, s.id);
          d !== -1 && (fe(s.clusteringEdgeReplacingIds, function(f) {
            u.clusteringEdgeReplacingIds.push(f), a.body.edges[f].edgeReplacedById = u.id;
          }), Fr(c = u.clusteringEdgeReplacingIds).call(c, d, 1));
        });
      }), o.edges = [];
    }
  }]), e;
})(Wt), ahe = /* @__PURE__ */ (function() {
  function r(i) {
    var e = this;
    M(this, r), this.body = i, this.clusteredNodes = {}, this.clusteredEdges = {}, this.options = {}, this.defaultOptions = {}, tt(this.options, this.defaultOptions), this.body.emitter.on("_resetData", function() {
      e.clusteredNodes = {}, e.clusteredEdges = {};
    });
  }
  return N(r, [{
    key: "clusterByHubsize",
    value: function(e, t) {
      e === void 0 ? e = this._getHubSize() : Ie(e) === "object" && (t = this._checkOptions(e), e = this._getHubSize());
      for (var n = [], a = 0; a < this.body.nodeIndices.length; a++) {
        var o = this.body.nodes[this.body.nodeIndices[a]];
        o.edges.length >= e && n.push(o.id);
      }
      for (var s = 0; s < n.length; s++)
        this.clusterByConnection(n[s], t, !0);
      this.body.emitter.emit("_dataChanged");
    }
    /**
     * loop over all nodes, check if they adhere to the condition and cluster if needed.
     *
     * @param {object} options
     * @param {boolean} [refreshData=true]
     */
  }, {
    key: "cluster",
    value: function() {
      var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (t.joinCondition === void 0)
        throw new Error("Cannot call clusterByNodeData without a joinCondition function in the options.");
      t = this._checkOptions(t);
      var a = {}, o = {};
      fe(this.body.nodes, function(s, u) {
        s.options && t.joinCondition(s.options) === !0 && (a[u] = s, fe(s.edges, function(l) {
          e.clusteredEdges[l.id] === void 0 && (o[l.id] = l);
        }));
      }), this._cluster(a, o, t, n);
    }
    /**
     * Cluster all nodes in the network that have only X edges
     *
     * @param {number} edgeCount
     * @param {object} options
     * @param {boolean} [refreshData=true]
     */
  }, {
    key: "clusterByEdgeCount",
    value: function(e, t) {
      var n = this, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
      t = this._checkOptions(t);
      for (var o = [], s = {}, u, l, c, d = function() {
        var p = {}, y = {}, m = n.body.nodeIndices[f], b = n.body.nodes[m];
        if (s[m] === void 0) {
          c = 0, l = [];
          for (var w = 0; w < b.edges.length; w++)
            u = b.edges[w], n.clusteredEdges[u.id] === void 0 && (u.toId !== u.fromId && c++, l.push(u));
          if (c === e) {
            for (var _ = function(ee) {
              if (t.joinCondition === void 0 || t.joinCondition === null)
                return !0;
              var de = St.cloneOptions(ee);
              return t.joinCondition(de);
            }, $ = !0, C = 0; C < l.length; C++) {
              u = l[C];
              var j = n._getConnectedId(u, m);
              if (_(b))
                y[u.id] = u, p[m] = b, p[j] = n.body.nodes[j], s[m] = !0;
              else {
                $ = !1;
                break;
              }
            }
            if (We(p).length > 0 && We(y).length > 0 && $ === !0) {
              var W = function() {
                for (var ee = 0; ee < o.length; ++ee)
                  for (var de in p)
                    if (o[ee].nodes[de] !== void 0)
                      return o[ee];
              }, B = W();
              if (B !== void 0) {
                for (var L in p)
                  B.nodes[L] === void 0 && (B.nodes[L] = p[L]);
                for (var X in y)
                  B.edges[X] === void 0 && (B.edges[X] = y[X]);
              } else
                o.push({
                  nodes: p,
                  edges: y
                });
            }
          }
        }
      }, f = 0; f < this.body.nodeIndices.length; f++)
        d();
      for (var h = 0; h < o.length; h++)
        this._cluster(o[h].nodes, o[h].edges, t, !1);
      a === !0 && this.body.emitter.emit("_dataChanged");
    }
    /**
     * Cluster all nodes in the network that have only 1 edge
     *
     * @param {object} options
     * @param {boolean} [refreshData=true]
     */
  }, {
    key: "clusterOutliers",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      this.clusterByEdgeCount(1, e, t);
    }
    /**
     * Cluster all nodes in the network that have only 2 edge
     *
     * @param {object} options
     * @param {boolean} [refreshData=true]
     */
  }, {
    key: "clusterBridges",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      this.clusterByEdgeCount(2, e, t);
    }
    /**
     * suck all connected nodes of a node into the node.
     *
     * @param {Node.id} nodeId
     * @param {object} options
     * @param {boolean} [refreshData=true]
     */
  }, {
    key: "clusterByConnection",
    value: function(e, t) {
      var n, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
      if (e === void 0)
        throw new Error("No nodeId supplied to clusterByConnection!");
      if (this.body.nodes[e] === void 0)
        throw new Error("The nodeId given to clusterByConnection does not exist!");
      var o = this.body.nodes[e];
      t = this._checkOptions(t, o), t.clusterNodeProperties.x === void 0 && (t.clusterNodeProperties.x = o.x), t.clusterNodeProperties.y === void 0 && (t.clusterNodeProperties.y = o.y), t.clusterNodeProperties.fixed === void 0 && (t.clusterNodeProperties.fixed = {}, t.clusterNodeProperties.fixed.x = o.options.fixed.x, t.clusterNodeProperties.fixed.y = o.options.fixed.y);
      var s = {}, u = {}, l = o.id, c = St.cloneOptions(o);
      s[l] = o;
      for (var d = 0; d < o.edges.length; d++) {
        var f = o.edges[d];
        if (this.clusteredEdges[f.id] === void 0) {
          var h = this._getConnectedId(f, l);
          if (this.clusteredNodes[h] === void 0)
            if (h !== l)
              if (t.joinCondition === void 0)
                u[f.id] = f, s[h] = this.body.nodes[h];
              else {
                var v = St.cloneOptions(this.body.nodes[h]);
                t.joinCondition(c, v) === !0 && (u[f.id] = f, s[h] = this.body.nodes[h]);
              }
            else
              u[f.id] = f;
        }
      }
      var p = Xi(n = We(s)).call(n, function(_) {
        return s[_].id;
      });
      for (var y in s)
        if (Object.prototype.hasOwnProperty.call(s, y))
          for (var m = s[y], b = 0; b < m.edges.length; b++) {
            var w = m.edges[b];
            ye(p).call(p, this._getConnectedId(w, m.id)) > -1 && (u[w.id] = w);
          }
      this._cluster(s, u, t, a);
    }
    /**
     * This function creates the edges that will be attached to the cluster
     * It looks for edges that are connected to the nodes from the "outside' of the cluster.
     *
     * @param {{Node.id: vis.Node}} childNodesObj
     * @param {{vis.Edge.id: vis.Edge}} childEdgesObj
     * @param {object} clusterNodeProperties
     * @param {object} clusterEdgeProperties
     * @private
     */
  }, {
    key: "_createClusterEdges",
    value: function(e, t, n, a) {
      for (var o, s, u, l, c, d, f = We(e), h = [], v = 0; v < f.length; v++) {
        s = f[v], u = e[s];
        for (var p = 0; p < u.edges.length; p++)
          o = u.edges[p], this.clusteredEdges[o.id] === void 0 && (o.toId == o.fromId ? t[o.id] = o : o.toId == s ? (l = n.id, c = o.fromId, d = c) : (l = o.toId, c = n.id, d = l), e[d] === void 0 && h.push({
            edge: o,
            fromId: c,
            toId: l
          }));
      }
      for (var y = [], m = function(j) {
        for (var W = 0; W < y.length; W++) {
          var B = y[W], L = j.fromId === B.fromId && j.toId === B.toId, X = j.fromId === B.toId && j.toId === B.fromId;
          if (L || X)
            return B;
        }
        return null;
      }, b = 0; b < h.length; b++) {
        var w = h[b], _ = w.edge, $ = m(w);
        $ === null ? ($ = this._createClusteredEdge(w.fromId, w.toId, _, a), y.push($)) : $.clusteringEdgeReplacingIds.push(_.id), this.body.edges[_.id].edgeReplacedById = $.id, this._backupEdgeOptions(_), _.setOptions({
          physics: !1
        });
      }
    }
    /**
     * This function checks the options that can be supplied to the different cluster functions
     * for certain fields and inserts defaults if needed
     *
     * @param {object} options
     * @returns {*}
     * @private
     */
  }, {
    key: "_checkOptions",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return e.clusterEdgeProperties === void 0 && (e.clusterEdgeProperties = {}), e.clusterNodeProperties === void 0 && (e.clusterNodeProperties = {}), e;
    }
    /**
     *
     * @param {object}    childNodesObj         | object with node objects, id as keys, same as childNodes except it also contains a source node
     * @param {object}    childEdgesObj         | object with edge objects, id as keys
     * @param {Array}     options               | object with {clusterNodeProperties, clusterEdgeProperties, processProperties}
     * @param {boolean}   refreshData | when true, do not wrap up
     * @private
     */
  }, {
    key: "_cluster",
    value: function(e, t, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, o = [];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && this.clusteredNodes[s] !== void 0 && o.push(s);
      for (var u = 0; u < o.length; ++u)
        delete e[o[u]];
      if (We(e).length != 0 && !(We(e).length == 1 && n.clusterNodeProperties.allowSingleNodeCluster != !0)) {
        var l = Ae({}, n.clusterNodeProperties);
        if (n.processProperties !== void 0) {
          var c = [];
          for (var d in e)
            if (Object.prototype.hasOwnProperty.call(e, d)) {
              var f = St.cloneOptions(e[d]);
              c.push(f);
            }
          var h = [];
          for (var v in t)
            if (Object.prototype.hasOwnProperty.call(t, v) && v.substr(0, 12) !== "clusterEdge:") {
              var p = St.cloneOptions(t[v], "edge");
              h.push(p);
            }
          if (l = n.processProperties(l, c, h), !l)
            throw new Error("The processProperties function does not return properties!");
        }
        l.id === void 0 && (l.id = "cluster:" + Ya());
        var y = l.id;
        l.label === void 0 && (l.label = "cluster");
        var m = void 0;
        l.x === void 0 && (m = this._getClusterPosition(e), l.x = m.x), l.y === void 0 && (m === void 0 && (m = this._getClusterPosition(e)), l.y = m.y), l.id = y;
        var b = this.body.functions.createNode(l, ihe);
        b.containedNodes = e, b.containedEdges = t, b.clusterEdgeProperties = n.clusterEdgeProperties, this.body.nodes[l.id] = b, this._clusterEdges(e, t, l, n.clusterEdgeProperties), l.id = void 0, a === !0 && this.body.emitter.emit("_dataChanged");
      }
    }
    /**
     *
     * @param {Edge} edge
     * @private
     */
  }, {
    key: "_backupEdgeOptions",
    value: function(e) {
      this.clusteredEdges[e.id] === void 0 && (this.clusteredEdges[e.id] = {
        physics: e.options.physics
      });
    }
    /**
     *
     * @param {Edge} edge
     * @private
     */
  }, {
    key: "_restoreEdge",
    value: function(e) {
      var t = this.clusteredEdges[e.id];
      t !== void 0 && (e.setOptions({
        physics: t.physics
      }), delete this.clusteredEdges[e.id]);
    }
    /**
     * Check if a node is a cluster.
     *
     * @param {Node.id} nodeId
     * @returns {*}
     */
  }, {
    key: "isCluster",
    value: function(e) {
      return this.body.nodes[e] !== void 0 ? this.body.nodes[e].isCluster === !0 : (console.error("Node does not exist."), !1);
    }
    /**
     * get the position of the cluster node based on what's inside
     *
     * @param {object} childNodesObj    | object with node objects, id as keys
     * @returns {{x: number, y: number}}
     * @private
     */
  }, {
    key: "_getClusterPosition",
    value: function(e) {
      for (var t = We(e), n = e[t[0]].x, a = e[t[0]].x, o = e[t[0]].y, s = e[t[0]].y, u, l = 1; l < t.length; l++)
        u = e[t[l]], n = u.x < n ? u.x : n, a = u.x > a ? u.x : a, o = u.y < o ? u.y : o, s = u.y > s ? u.y : s;
      return {
        x: 0.5 * (n + a),
        y: 0.5 * (o + s)
      };
    }
    /**
     * Open a cluster by calling this function.
     *
     * @param {vis.Edge.id}  clusterNodeId | the ID of the cluster node
     * @param {object} options
     * @param {boolean} refreshData | wrap up afterwards if not true
     */
  }, {
    key: "openCluster",
    value: function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
      if (e === void 0)
        throw new Error("No clusterNodeId supplied to openCluster.");
      var a = this.body.nodes[e];
      if (a === void 0)
        throw new Error("The clusterNodeId supplied to openCluster does not exist.");
      if (a.isCluster !== !0 || a.containedNodes === void 0 || a.containedEdges === void 0)
        throw new Error("The node:" + e + " is not a valid cluster.");
      var o = this.findNode(e), s = ye(o).call(o, e) - 1;
      if (s >= 0) {
        var u = o[s], l = this.body.nodes[u];
        l._openChildCluster(e), delete this.body.nodes[e], n === !0 && this.body.emitter.emit("_dataChanged");
        return;
      }
      var c = a.containedNodes, d = a.containedEdges;
      if (t !== void 0 && t.releaseFunction !== void 0 && typeof t.releaseFunction == "function") {
        var f = {}, h = {
          x: a.x,
          y: a.y
        };
        for (var v in c)
          if (Object.prototype.hasOwnProperty.call(c, v)) {
            var p = this.body.nodes[v];
            f[v] = {
              x: p.x,
              y: p.y
            };
          }
        var y = t.releaseFunction(h, f);
        for (var m in c)
          if (Object.prototype.hasOwnProperty.call(c, m)) {
            var b = this.body.nodes[m];
            y[m] !== void 0 && (b.x = y[m].x === void 0 ? a.x : y[m].x, b.y = y[m].y === void 0 ? a.y : y[m].y);
          }
      } else
        fe(c, function(je) {
          je.options.fixed.x === !1 && (je.x = a.x), je.options.fixed.y === !1 && (je.y = a.y);
        });
      for (var w in c)
        if (Object.prototype.hasOwnProperty.call(c, w)) {
          var _ = this.body.nodes[w];
          _.vx = a.vx, _.vy = a.vy, _.setOptions({
            physics: !0
          }), delete this.clusteredNodes[w];
        }
      for (var $ = [], C = 0; C < a.edges.length; C++)
        $.push(a.edges[C]);
      for (var j = 0; j < $.length; j++) {
        for (var W = $[j], B = this._getConnectedId(W, e), L = this.clusteredNodes[B], X = 0; X < W.clusteringEdgeReplacingIds.length; X++) {
          var ue = W.clusteringEdgeReplacingIds[X], ee = this.body.edges[ue];
          if (ee !== void 0)
            if (L !== void 0) {
              var de = this.body.nodes[L.clusterId];
              de.containedEdges[ee.id] = ee, delete d[ee.id];
              var ke = ee.fromId, ve = ee.toId;
              ee.toId == B ? ve = L.clusterId : ke = L.clusterId, this._createClusteredEdge(ke, ve, ee, de.clusterEdgeProperties, {
                hidden: !1,
                physics: !0
              });
            } else
              this._restoreEdge(ee);
        }
        W.remove();
      }
      for (var Ne in d)
        Object.prototype.hasOwnProperty.call(d, Ne) && this._restoreEdge(d[Ne]);
      delete this.body.nodes[e], n === !0 && this.body.emitter.emit("_dataChanged");
    }
    /**
     *
     * @param {Cluster.id} clusterId
     * @returns {Array.<Node.id>}
     */
  }, {
    key: "getNodesInCluster",
    value: function(e) {
      var t = [];
      if (this.isCluster(e) === !0) {
        var n = this.body.nodes[e].containedNodes;
        for (var a in n)
          Object.prototype.hasOwnProperty.call(n, a) && t.push(this.body.nodes[a].id);
      }
      return t;
    }
    /**
     * Get the stack clusterId's that a certain node resides in. cluster A -> cluster B -> cluster C -> node
     *
     * If a node can't be found in the chain, return an empty array.
     *
     * @param {string|number} nodeId
     * @returns {Array}
     */
  }, {
    key: "findNode",
    value: function(e) {
      for (var t = [], n = 100, a = 0, o; this.clusteredNodes[e] !== void 0 && a < n; ) {
        if (o = this.body.nodes[e], o === void 0) return [];
        t.push(o.id), e = this.clusteredNodes[e].clusterId, a++;
      }
      return o = this.body.nodes[e], o === void 0 ? [] : (t.push(o.id), Dn(t).call(t), t);
    }
    /**
     * Using a clustered nodeId, update with the new options
     *
     * @param {Node.id} clusteredNodeId
     * @param {object} newOptions
     */
  }, {
    key: "updateClusteredNode",
    value: function(e, t) {
      if (e === void 0)
        throw new Error("No clusteredNodeId supplied to updateClusteredNode.");
      if (t === void 0)
        throw new Error("No newOptions supplied to updateClusteredNode.");
      if (this.body.nodes[e] === void 0)
        throw new Error("The clusteredNodeId supplied to updateClusteredNode does not exist.");
      this.body.nodes[e].setOptions(t), this.body.emitter.emit("_dataChanged");
    }
    /**
     * Using a base edgeId, update all related clustered edges with the new options
     *
     * @param {vis.Edge.id} startEdgeId
     * @param {object} newOptions
     */
  }, {
    key: "updateEdge",
    value: function(e, t) {
      if (e === void 0)
        throw new Error("No startEdgeId supplied to updateEdge.");
      if (t === void 0)
        throw new Error("No newOptions supplied to updateEdge.");
      if (this.body.edges[e] === void 0)
        throw new Error("The startEdgeId supplied to updateEdge does not exist.");
      for (var n = this.getClusteredEdges(e), a = 0; a < n.length; a++) {
        var o = this.body.edges[n[a]];
        o.setOptions(t);
      }
      this.body.emitter.emit("_dataChanged");
    }
    /**
     * Get a stack of clusterEdgeId's (+base edgeid) that a base edge is the same as. cluster edge C -> cluster edge B -> cluster edge A -> base edge(edgeId)
     *
     * @param {vis.Edge.id} edgeId
     * @returns {Array.<vis.Edge.id>}
     */
  }, {
    key: "getClusteredEdges",
    value: function(e) {
      for (var t = [], n = 100, a = 0; e !== void 0 && this.body.edges[e] !== void 0 && a < n; )
        t.push(this.body.edges[e].id), e = this.body.edges[e].edgeReplacedById, a++;
      return Dn(t).call(t), t;
    }
    /**
     * Get the base edge id of clusterEdgeId. cluster edge (clusteredEdgeId) -> cluster edge B -> cluster edge C -> base edge
     *
     * @param {vis.Edge.id} clusteredEdgeId
     * @returns {vis.Edge.id} baseEdgeId
     *
     * TODO: deprecate in 5.0.0. Method getBaseEdges() is the correct one to use.
     */
  }, {
    key: "getBaseEdge",
    value: function(e) {
      return this.getBaseEdges(e)[0];
    }
    /**
     * Get all regular edges for this clustered edge id.
     *
     * @param {vis.Edge.id} clusteredEdgeId
     * @returns {Array.<vis.Edge.id>} all baseEdgeId's under this clustered edge
     */
  }, {
    key: "getBaseEdges",
    value: function(e) {
      for (var t = [e], n = [], a = [], o = 100, s = 0; t.length > 0 && s < o; ) {
        var u = t.pop();
        if (u !== void 0) {
          var l = this.body.edges[u];
          if (l !== void 0) {
            s++;
            var c = l.clusteringEdgeReplacingIds;
            if (c === void 0)
              a.push(u);
            else
              for (var d = 0; d < c.length; ++d) {
                var f = c[d];
                ye(t).call(t, c) !== -1 || ye(n).call(n, c) !== -1 || t.push(f);
              }
            n.push(u);
          }
        }
      }
      return a;
    }
    /**
     * Get the Id the node is connected to
     *
     * @param {vis.Edge} edge
     * @param {Node.id} nodeId
     * @returns {*}
     * @private
     */
  }, {
    key: "_getConnectedId",
    value: function(e, t) {
      return e.toId != t ? e.toId : (e.fromId != t, e.fromId);
    }
    /**
     * We determine how many connections denote an important hub.
     * We take the mean + 2*std as the important hub size. (Assuming a normal distribution of data, ~2.2%)
     *
     * @returns {number}
     * @private
     */
  }, {
    key: "_getHubSize",
    value: function() {
      for (var e = 0, t = 0, n = 0, a = 0, o = 0; o < this.body.nodeIndices.length; o++) {
        var s = this.body.nodes[this.body.nodeIndices[o]];
        s.edges.length > a && (a = s.edges.length), e += s.edges.length, t += Math.pow(s.edges.length, 2), n += 1;
      }
      e = e / n, t = t / n;
      var u = t - Math.pow(e, 2), l = Math.sqrt(u), c = Math.floor(e + 2 * l);
      return c > a && (c = a), c;
    }
    /**
     * Create an edge for the cluster representation.
     *
     * @param {Node.id} fromId
     * @param {Node.id} toId
     * @param {vis.Edge} baseEdge
     * @param {object} clusterEdgeProperties
     * @param {object} extraOptions
     * @returns {Edge} newly created clustered edge
     * @private
     */
  }, {
    key: "_createClusteredEdge",
    value: function(e, t, n, a, o) {
      var s = St.cloneOptions(n, "edge");
      Ae(s, a), s.from = e, s.to = t, s.id = "clusterEdge:" + Ya(), o !== void 0 && Ae(s, o);
      var u = this.body.functions.createEdge(s);
      return u.clusteringEdgeReplacingIds = [n.id], u.connect(), this.body.edges[u.id] = u, u;
    }
    /**
     * Add the passed child nodes and edges to the given cluster node.
     *
     * @param {object | Node} childNodes  hash of nodes or single node to add in cluster
     * @param {object | Edge} childEdges  hash of edges or single edge to take into account when clustering
     * @param {Node} clusterNode  cluster node to add nodes and edges to
     * @param {object} [clusterEdgeProperties]
     * @private
     */
  }, {
    key: "_clusterEdges",
    value: function(e, t, n, a) {
      if (t instanceof ji) {
        var o = t, s = {};
        s[o.id] = o, t = s;
      }
      if (e instanceof Wt) {
        var u = e, l = {};
        l[u.id] = u, e = l;
      }
      if (n == null)
        throw new Error("_clusterEdges: parameter clusterNode required");
      a === void 0 && (a = n.clusterEdgeProperties), this._createClusterEdges(e, t, n, a);
      for (var c in t)
        if (Object.prototype.hasOwnProperty.call(t, c) && this.body.edges[c] !== void 0) {
          var d = this.body.edges[c];
          this._backupEdgeOptions(d), d.setOptions({
            physics: !1
          });
        }
      for (var f in e)
        Object.prototype.hasOwnProperty.call(e, f) && (this.clusteredNodes[f] = {
          clusterId: n.id,
          node: this.body.nodes[f]
        }, this.body.nodes[f].setOptions({
          physics: !1
        }));
    }
    /**
     * Determine in which cluster given nodeId resides.
     *
     * If not in cluster, return undefined.
     *
     * NOTE: If you know a cleaner way to do this, please enlighten me (wimrijnders).
     *
     * @param {Node.id} nodeId
     * @returns {Node|undefined} Node instance for cluster, if present
     * @private
     */
  }, {
    key: "_getClusterNodeForNode",
    value: function(e) {
      if (e !== void 0) {
        var t = this.clusteredNodes[e];
        if (t !== void 0) {
          var n = t.clusterId;
          if (n !== void 0)
            return this.body.nodes[n];
        }
      }
    }
    /**
     * Internal helper function for conditionally removing items in array
     *
     * Done like this because Array.filter() is not fully supported by all IE's.
     *
     * @param {Array} arr
     * @param {Function} callback
     * @returns {Array}
     * @private
     */
  }, {
    key: "_filter",
    value: function(e, t) {
      var n = [];
      return fe(e, function(a) {
        t(a) && n.push(a);
      }), n;
    }
    /**
     * Scan all edges for changes in clustering and adjust this if necessary.
     *
     * Call this (internally) after there has been a change in node or edge data.
     *
     * Pre: States of this.body.nodes and this.body.edges consistent
     * Pre: this.clusteredNodes and this.clusteredEdge consistent with containedNodes and containedEdges
     *      of cluster nodes.
     */
  }, {
    key: "_updateState",
    value: function() {
      var e = this, t, n = [], a = {}, o = function(v) {
        fe(e.body.nodes, function(p) {
          p.isCluster === !0 && v(p);
        });
      };
      for (t in this.clusteredNodes)
        if (Object.prototype.hasOwnProperty.call(this.clusteredNodes, t)) {
          var s = this.body.nodes[t];
          s === void 0 && n.push(t);
        }
      o(function(h) {
        for (var v = 0; v < n.length; v++)
          delete h.containedNodes[n[v]];
      });
      for (var u = 0; u < n.length; u++)
        delete this.clusteredNodes[n[u]];
      fe(this.clusteredEdges, function(h) {
        var v = e.body.edges[h];
        (v === void 0 || !v.endPointsValid()) && (a[h] = h);
      }), o(function(h) {
        fe(h.containedEdges, function(v, p) {
          !v.endPointsValid() && !a[p] && (a[p] = p);
        });
      }), fe(this.body.edges, function(h, v) {
        var p = !0, y = h.clusteringEdgeReplacingIds;
        if (y !== void 0) {
          var m = 0;
          fe(y, function(b) {
            var w = e.body.edges[b];
            w !== void 0 && w.endPointsValid() && (m += 1);
          }), p = m > 0;
        }
        (!h.endPointsValid() || !p) && (a[v] = v);
      }), o(function(h) {
        fe(a, function(v) {
          delete h.containedEdges[v], fe(h.edges, function(p, y) {
            if (p.id === v) {
              h.edges[y] = null;
              return;
            }
            p.clusteringEdgeReplacingIds = e._filter(p.clusteringEdgeReplacingIds, function(m) {
              return !a[m];
            });
          }), h.edges = e._filter(h.edges, function(p) {
            return p !== null;
          });
        });
      }), fe(a, function(h) {
        delete e.clusteredEdges[h];
      }), fe(a, function(h) {
        delete e.body.edges[h];
      });
      var l = We(this.body.edges);
      fe(l, function(h) {
        var v = e.body.edges[h], p = e._isClusteredNode(v.fromId) || e._isClusteredNode(v.toId);
        if (p !== e._isClusteredEdge(v.id))
          if (p) {
            var y = e._getClusterNodeForNode(v.fromId);
            y !== void 0 && e._clusterEdges(e.body.nodes[v.fromId], v, y);
            var m = e._getClusterNodeForNode(v.toId);
            m !== void 0 && e._clusterEdges(e.body.nodes[v.toId], v, m);
          } else
            delete e._clusterEdges[h], e._restoreEdge(v);
      });
      for (var c = !1, d = !0, f = function() {
        var v = [];
        o(function(y) {
          var m = We(y.containedNodes).length, b = y.options.allowSingleNodeCluster === !0;
          (b && m < 1 || !b && m < 2) && v.push(y.id);
        });
        for (var p = 0; p < v.length; ++p)
          e.openCluster(
            v[p],
            {},
            !1
            /* Don't refresh, we're in an refresh/update already */
          );
        d = v.length > 0, c = c || d;
      }; d; )
        f();
      c && this._updateState();
    }
    /**
     * Determine if node with given id is part of a cluster.
     *
     * @param {Node.id} nodeId
     * @returns {boolean} true if part of a cluster.
     */
  }, {
    key: "_isClusteredNode",
    value: function(e) {
      return this.clusteredNodes[e] !== void 0;
    }
    /**
     * Determine if edge with given id is not visible due to clustering.
     *
     * An edge is considered clustered if:
     * - it is directly replaced by a clustering edge
     * - any of its connecting nodes is in a cluster
     *
     * @param {vis.Edge.id} edgeId
     * @returns {boolean} true if part of a cluster.
     */
  }, {
    key: "_isClusteredEdge",
    value: function(e) {
      return this.clusteredEdges[e] !== void 0;
    }
  }]), r;
})();
function ohe() {
  var r;
  window !== void 0 && (r = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame), r === void 0 ? window.requestAnimationFrame = function(i) {
    i();
  } : window.requestAnimationFrame = r;
}
var she = /* @__PURE__ */ (function() {
  function r(i, e) {
    M(this, r), ohe(), this.body = i, this.canvas = e, this.redrawRequested = !1, this.renderTimer = void 0, this.requiresTimeout = !0, this.renderingActive = !1, this.renderRequests = 0, this.allowRedraw = !0, this.dragging = !1, this.zooming = !1, this.options = {}, this.defaultOptions = {
      hideEdgesOnDrag: !1,
      hideEdgesOnZoom: !1,
      hideNodesOnDrag: !1
    }, tt(this.options, this.defaultOptions), this._determineBrowserMethod(), this.bindEventListeners();
  }
  return N(r, [{
    key: "bindEventListeners",
    value: function() {
      var e = this, t;
      this.body.emitter.on("dragStart", function() {
        e.dragging = !0;
      }), this.body.emitter.on("dragEnd", function() {
        e.dragging = !1;
      }), this.body.emitter.on("zoom", function() {
        e.zooming = !0, window.clearTimeout(e.zoomTimeoutId), e.zoomTimeoutId = Er(function() {
          var n;
          e.zooming = !1, A(n = e._requestRedraw).call(n, e)();
        }, 250);
      }), this.body.emitter.on("_resizeNodes", function() {
        e._resizeNodes();
      }), this.body.emitter.on("_redraw", function() {
        e.renderingActive === !1 && e._redraw();
      }), this.body.emitter.on("_blockRedraw", function() {
        e.allowRedraw = !1;
      }), this.body.emitter.on("_allowRedraw", function() {
        e.allowRedraw = !0, e.redrawRequested = !1;
      }), this.body.emitter.on("_requestRedraw", A(t = this._requestRedraw).call(t, this)), this.body.emitter.on("_startRendering", function() {
        e.renderRequests += 1, e.renderingActive = !0, e._startRendering();
      }), this.body.emitter.on("_stopRendering", function() {
        e.renderRequests -= 1, e.renderingActive = e.renderRequests > 0, e.renderTimer = void 0;
      }), this.body.emitter.on("destroy", function() {
        e.renderRequests = 0, e.allowRedraw = !1, e.renderingActive = !1, e.requiresTimeout === !0 ? clearTimeout(e.renderTimer) : window.cancelAnimationFrame(e.renderTimer), e.body.emitter.off();
      });
    }
    /**
     *
     * @param {object} options
     */
  }, {
    key: "setOptions",
    value: function(e) {
      if (e !== void 0) {
        var t = ["hideEdgesOnDrag", "hideEdgesOnZoom", "hideNodesOnDrag"];
        Pa(t, this.options, e);
      }
    }
    /**
     * Prepare the drawing of the next frame.
     *
     * Calls the callback when the next frame can or will be drawn.
     *
     * @param {Function} callback
     * @param {number} delay - timeout case only, wait this number of milliseconds
     * @returns {Function | undefined}
     * @private
     */
  }, {
    key: "_requestNextFrame",
    value: function(e, t) {
      if (!(typeof window > "u")) {
        var n, a = window;
        return this.requiresTimeout === !0 ? n = Er(e, t) : a.requestAnimationFrame && (n = a.requestAnimationFrame(e)), n;
      }
    }
    /**
     *
     * @private
     */
  }, {
    key: "_startRendering",
    value: function() {
      if (this.renderingActive === !0 && this.renderTimer === void 0) {
        var e;
        this.renderTimer = this._requestNextFrame(A(e = this._renderStep).call(e, this), this.simulationInterval);
      }
    }
    /**
     *
     * @private
     */
  }, {
    key: "_renderStep",
    value: function() {
      this.renderingActive === !0 && (this.renderTimer = void 0, this.requiresTimeout === !0 && this._startRendering(), this._redraw(), this.requiresTimeout === !1 && this._startRendering());
    }
    /**
     * Redraw the network with the current data
     * chart will be resized too.
     */
  }, {
    key: "redraw",
    value: function() {
      this.body.emitter.emit("setSize"), this._redraw();
    }
    /**
     * Redraw the network with the current data
     *
     * @private
     */
  }, {
    key: "_requestRedraw",
    value: function() {
      var e = this;
      this.redrawRequested !== !0 && this.renderingActive === !1 && this.allowRedraw === !0 && (this.redrawRequested = !0, this._requestNextFrame(function() {
        e._redraw(!1);
      }, 0));
    }
    /**
     * Redraw the network with the current data
     *
     * @param {boolean} [hidden=false] | Used to get the first estimate of the node sizes.
     *                                   Only the nodes are drawn after which they are quickly drawn over.
     * @private
     */
  }, {
    key: "_redraw",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      if (this.allowRedraw === !0) {
        this.body.emitter.emit("initRedraw"), this.redrawRequested = !1;
        var t = {
          drawExternalLabels: null
        };
        (this.canvas.frame.canvas.width === 0 || this.canvas.frame.canvas.height === 0) && this.canvas.setSize(), this.canvas.setTransform();
        var n = this.canvas.getContext(), a = this.canvas.frame.canvas.clientWidth, o = this.canvas.frame.canvas.clientHeight;
        if (n.clearRect(0, 0, a, o), this.canvas.frame.clientWidth === 0)
          return;
        if (n.save(), n.translate(this.body.view.translation.x, this.body.view.translation.y), n.scale(this.body.view.scale, this.body.view.scale), n.beginPath(), this.body.emitter.emit("beforeDrawing", n), n.closePath(), e === !1 && (this.dragging === !1 || this.dragging === !0 && this.options.hideEdgesOnDrag === !1) && (this.zooming === !1 || this.zooming === !0 && this.options.hideEdgesOnZoom === !1) && this._drawEdges(n), this.dragging === !1 || this.dragging === !0 && this.options.hideNodesOnDrag === !1) {
          var s = this._drawNodes(n, e), u = s.drawExternalLabels;
          t.drawExternalLabels = u;
        }
        e === !1 && (this.dragging === !1 || this.dragging === !0 && this.options.hideEdgesOnDrag === !1) && (this.zooming === !1 || this.zooming === !0 && this.options.hideEdgesOnZoom === !1) && this._drawArrows(n), t.drawExternalLabels != null && t.drawExternalLabels(), e === !1 && this._drawSelectionBox(n), n.beginPath(), this.body.emitter.emit("afterDrawing", n), n.closePath(), n.restore(), e === !0 && n.clearRect(0, 0, a, o);
      }
    }
    /**
     * Redraw all nodes
     *
     * @param {CanvasRenderingContext2D}   ctx
     * @param {boolean} [alwaysShow]
     * @private
     */
  }, {
    key: "_resizeNodes",
    value: function() {
      this.canvas.setTransform();
      var e = this.canvas.getContext();
      e.save(), e.translate(this.body.view.translation.x, this.body.view.translation.y), e.scale(this.body.view.scale, this.body.view.scale);
      var t = this.body.nodes, n;
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (n = t[a], n.resize(e), n.updateBoundingBox(e, n.selected));
      e.restore();
    }
    /**
     * Redraw all nodes
     *
     * @param {CanvasRenderingContext2D} ctx  2D context of a HTML canvas
     * @param {boolean} [alwaysShow]
     * @private
     * @returns {object} Callbacks to draw later on higher layers.
     */
  }, {
    key: "_drawNodes",
    value: function(e) {
      for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = this.body.nodes, a = this.body.nodeIndices, o, s = [], u = [], l = 20, c = this.canvas.DOMtoCanvas({
        x: -l,
        y: -l
      }), d = this.canvas.DOMtoCanvas({
        x: this.canvas.frame.canvas.clientWidth + l,
        y: this.canvas.frame.canvas.clientHeight + l
      }), f = {
        top: c.y,
        left: c.x,
        bottom: d.y,
        right: d.x
      }, h = [], v = 0; v < a.length; v++)
        if (o = n[a[v]], o.hover)
          u.push(a[v]);
        else if (o.isSelected())
          s.push(a[v]);
        else if (t === !0) {
          var p = o.draw(e);
          p.drawExternalLabel != null && h.push(p.drawExternalLabel);
        } else if (o.isBoundingBoxOverlappingWith(f) === !0) {
          var y = o.draw(e);
          y.drawExternalLabel != null && h.push(y.drawExternalLabel);
        } else
          o.updateBoundingBox(e, o.selected);
      var m, b = s.length, w = u.length;
      for (m = 0; m < b; m++) {
        o = n[s[m]];
        var _ = o.draw(e);
        _.drawExternalLabel != null && h.push(_.drawExternalLabel);
      }
      for (m = 0; m < w; m++) {
        o = n[u[m]];
        var $ = o.draw(e);
        $.drawExternalLabel != null && h.push($.drawExternalLabel);
      }
      return {
        drawExternalLabels: function() {
          for (var j = 0, W = h; j < W.length; j++) {
            var B = W[j];
            B();
          }
        }
      };
    }
    /**
     * Redraw all edges
     *
     * @param {CanvasRenderingContext2D} ctx  2D context of a HTML canvas
     * @private
     */
  }, {
    key: "_drawEdges",
    value: function(e) {
      for (var t = this.body.edges, n = this.body.edgeIndices, a = 0; a < n.length; a++) {
        var o = t[n[a]];
        o.connected === !0 && o.draw(e);
      }
    }
    /**
     * Redraw all arrows
     *
     * @param {CanvasRenderingContext2D} ctx  2D context of a HTML canvas
     * @private
     */
  }, {
    key: "_drawArrows",
    value: function(e) {
      for (var t = this.body.edges, n = this.body.edgeIndices, a = 0; a < n.length; a++) {
        var o = t[n[a]];
        o.connected === !0 && o.drawArrows(e);
      }
    }
    /**
     * Determine if the browser requires a setTimeout or a requestAnimationFrame. This was required because
     * some implementations (safari and IE9) did not support requestAnimationFrame
     *
     * @private
     */
  }, {
    key: "_determineBrowserMethod",
    value: function() {
      if (typeof window < "u") {
        var e = navigator.userAgent.toLowerCase();
        this.requiresTimeout = !1, ye(e).call(e, "msie 9.0") != -1 ? this.requiresTimeout = !0 : ye(e).call(e, "safari") != -1 && ye(e).call(e, "chrome") <= -1 && (this.requiresTimeout = !0);
      } else
        this.requiresTimeout = !0;
    }
    /**
     * Redraw selection box
     *
     * @param {CanvasRenderingContext2D} ctx  2D context of a HTML canvas
     * @private
     */
  }, {
    key: "_drawSelectionBox",
    value: function(e) {
      if (this.body.selectionBox.show) {
        e.beginPath();
        var t = this.body.selectionBox.position.end.x - this.body.selectionBox.position.start.x, n = this.body.selectionBox.position.end.y - this.body.selectionBox.position.start.y;
        e.rect(this.body.selectionBox.position.start.x, this.body.selectionBox.position.start.y, t, n), e.fillStyle = "rgba(151, 194, 252, 0.2)", e.fillRect(this.body.selectionBox.position.start.x, this.body.selectionBox.position.start.y, t, n), e.strokeStyle = "rgba(151, 194, 252, 1)", e.stroke();
      } else
        e.closePath();
    }
  }]), r;
})(), uhe = me, lhe = uhe.setInterval, che = lhe, dhe = /* @__PURE__ */ Y(che);
function Wu(r, i) {
  i.inputHandler = function(e) {
    e.isFirst && i(e);
  }, r.on("hammer.input", i.inputHandler);
}
function UT(r, i) {
  return i.inputHandler = function(e) {
    e.isFinal && i(e);
  }, r.on("hammer.input", i.inputHandler);
}
var fhe = /* @__PURE__ */ (function() {
  function r(i) {
    M(this, r), this.body = i, this.pixelRatio = 1, this.cameraState = {}, this.initialized = !1, this.canvasViewCenter = {}, this._cleanupCallbacks = [], this.options = {}, this.defaultOptions = {
      autoResize: !0,
      height: "100%",
      width: "100%"
    }, tt(this.options, this.defaultOptions), this.bindEventListeners();
  }
  return N(r, [{
    key: "bindEventListeners",
    value: function() {
      var e = this, t;
      this.body.emitter.once("resize", function(n) {
        n.width !== 0 && (e.body.view.translation.x = n.width * 0.5), n.height !== 0 && (e.body.view.translation.y = n.height * 0.5);
      }), this.body.emitter.on("setSize", A(t = this.setSize).call(t, this)), this.body.emitter.on("destroy", function() {
        e.hammerFrame.destroy(), e.hammer.destroy(), e._cleanUp();
      });
    }
    /**
     * @param {object} options
     */
  }, {
    key: "setOptions",
    value: function(e) {
      var t = this;
      if (e !== void 0) {
        var n = ["width", "height", "autoResize"];
        Pa(n, this.options, e);
      }
      if (this._cleanUp(), this.options.autoResize === !0) {
        var a;
        if (window.ResizeObserver) {
          var o = new ResizeObserver(function() {
            var c = t.setSize();
            c === !0 && t.body.emitter.emit("_requestRedraw");
          }), s = this.frame;
          o.observe(s), this._cleanupCallbacks.push(function() {
            o.unobserve(s);
          });
        } else {
          var u = dhe(function() {
            var c = t.setSize();
            c === !0 && t.body.emitter.emit("_requestRedraw");
          }, 1e3);
          this._cleanupCallbacks.push(function() {
            clearInterval(u);
          });
        }
        var l = A(a = this._onResize).call(a, this);
        window.addEventListener("resize", l), this._cleanupCallbacks.push(function() {
          window.removeEventListener("resize", l);
        });
      }
    }
    /**
     * @private
     */
  }, {
    key: "_cleanUp",
    value: function() {
      var e, t, n;
      xe(e = Dn(t = Fr(n = this._cleanupCallbacks).call(n, 0)).call(t)).call(e, function(a) {
        try {
          a();
        } catch (o) {
          console.error(o);
        }
      });
    }
    /**
     * @private
     */
  }, {
    key: "_onResize",
    value: function() {
      this.setSize(), this.body.emitter.emit("_redraw");
    }
    /**
     * Get and store the cameraState
     *
     * @param {number} [pixelRatio=this.pixelRatio]
     * @private
     */
  }, {
    key: "_getCameraState",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.pixelRatio;
      this.initialized === !0 && (this.cameraState.previousWidth = this.frame.canvas.width / e, this.cameraState.previousHeight = this.frame.canvas.height / e, this.cameraState.scale = this.body.view.scale, this.cameraState.position = this.DOMtoCanvas({
        x: 0.5 * this.frame.canvas.width / e,
        y: 0.5 * this.frame.canvas.height / e
      }));
    }
    /**
     * Set the cameraState
     *
     * @private
     */
  }, {
    key: "_setCameraState",
    value: function() {
      if (this.cameraState.scale !== void 0 && this.frame.canvas.clientWidth !== 0 && this.frame.canvas.clientHeight !== 0 && this.pixelRatio !== 0 && this.cameraState.previousWidth > 0 && this.cameraState.previousHeight > 0) {
        var e = this.frame.canvas.width / this.pixelRatio / this.cameraState.previousWidth, t = this.frame.canvas.height / this.pixelRatio / this.cameraState.previousHeight, n = this.cameraState.scale;
        e != 1 && t != 1 ? n = this.cameraState.scale * 0.5 * (e + t) : e != 1 ? n = this.cameraState.scale * e : t != 1 && (n = this.cameraState.scale * t), this.body.view.scale = n;
        var a = this.DOMtoCanvas({
          x: 0.5 * this.frame.canvas.clientWidth,
          y: 0.5 * this.frame.canvas.clientHeight
        }), o = {
          // offset from view, distance view has to change by these x and y to center the node
          x: a.x - this.cameraState.position.x,
          y: a.y - this.cameraState.position.y
        };
        this.body.view.translation.x += o.x * this.body.view.scale, this.body.view.translation.y += o.y * this.body.view.scale;
      }
    }
    /**
     *
     * @param {number|string} value
     * @returns {string}
     * @private
     */
  }, {
    key: "_prepareValue",
    value: function(e) {
      if (typeof e == "number")
        return e + "px";
      if (typeof e == "string") {
        if (ye(e).call(e, "%") !== -1 || ye(e).call(e, "px") !== -1)
          return e;
        if (ye(e).call(e, "%") === -1)
          return e + "px";
      }
      throw new Error("Could not use the value supplied for width or height:" + e);
    }
    /**
     * Create the HTML
     */
  }, {
    key: "_create",
    value: function() {
      for (; this.body.container.hasChildNodes(); )
        this.body.container.removeChild(this.body.container.firstChild);
      if (this.frame = document.createElement("div"), this.frame.className = "vis-network", this.frame.style.position = "relative", this.frame.style.overflow = "hidden", this.frame.tabIndex = 0, this.frame.canvas = document.createElement("canvas"), this.frame.canvas.style.position = "relative", this.frame.appendChild(this.frame.canvas), this.frame.canvas.getContext)
        this._setPixelRatio(), this.setTransform();
      else {
        var e = document.createElement("DIV");
        e.style.color = "red", e.style.fontWeight = "bold", e.style.padding = "10px", e.innerText = "Error: your browser does not support HTML canvas", this.frame.canvas.appendChild(e);
      }
      this.body.container.appendChild(this.frame), this.body.view.scale = 1, this.body.view.translation = {
        x: 0.5 * this.frame.canvas.clientWidth,
        y: 0.5 * this.frame.canvas.clientHeight
      }, this._bindHammer();
    }
    /**
     * This function binds hammer, it can be repeated over and over due to the uniqueness check.
     *
     * @private
     */
  }, {
    key: "_bindHammer",
    value: function() {
      var e = this;
      this.hammer !== void 0 && this.hammer.destroy(), this.drag = {}, this.pinch = {}, this.hammer = new Bi(this.frame.canvas), this.hammer.get("pinch").set({
        enable: !0
      }), this.hammer.get("pan").set({
        threshold: 5,
        direction: Bi.DIRECTION_ALL
      }), Wu(this.hammer, function(t) {
        e.body.eventListeners.onTouch(t);
      }), this.hammer.on("tap", function(t) {
        e.body.eventListeners.onTap(t);
      }), this.hammer.on("doubletap", function(t) {
        e.body.eventListeners.onDoubleTap(t);
      }), this.hammer.on("press", function(t) {
        e.body.eventListeners.onHold(t);
      }), this.hammer.on("panstart", function(t) {
        e.body.eventListeners.onDragStart(t);
      }), this.hammer.on("panmove", function(t) {
        e.body.eventListeners.onDrag(t);
      }), this.hammer.on("panend", function(t) {
        e.body.eventListeners.onDragEnd(t);
      }), this.hammer.on("pinch", function(t) {
        e.body.eventListeners.onPinch(t);
      }), this.frame.canvas.addEventListener("wheel", function(t) {
        e.body.eventListeners.onMouseWheel(t);
      }), this.frame.canvas.addEventListener("mousemove", function(t) {
        e.body.eventListeners.onMouseMove(t);
      }), this.frame.canvas.addEventListener("contextmenu", function(t) {
        e.body.eventListeners.onContext(t);
      }), this.hammerFrame = new Bi(this.frame), UT(this.hammerFrame, function(t) {
        e.body.eventListeners.onRelease(t);
      });
    }
    /**
     * Set a new size for the network
     *
     * @param {string} width   Width in pixels or percentage (for example '800px'
     *                         or '50%')
     * @param {string} height  Height in pixels or percentage  (for example '400px'
     *                         or '30%')
     * @returns {boolean}
     */
  }, {
    key: "setSize",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.width, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.height;
      e = this._prepareValue(e), t = this._prepareValue(t);
      var n = !1, a = this.frame.canvas.width, o = this.frame.canvas.height, s = this.pixelRatio;
      if (this._setPixelRatio(), e != this.options.width || t != this.options.height || this.frame.style.width != e || this.frame.style.height != t)
        this._getCameraState(s), this.frame.style.width = e, this.frame.style.height = t, this.frame.canvas.style.width = "100%", this.frame.canvas.style.height = "100%", this.frame.canvas.width = Math.round(this.frame.canvas.clientWidth * this.pixelRatio), this.frame.canvas.height = Math.round(this.frame.canvas.clientHeight * this.pixelRatio), this.options.width = e, this.options.height = t, this.canvasViewCenter = {
          x: 0.5 * this.frame.clientWidth,
          y: 0.5 * this.frame.clientHeight
        }, n = !0;
      else {
        var u = Math.round(this.frame.canvas.clientWidth * this.pixelRatio), l = Math.round(this.frame.canvas.clientHeight * this.pixelRatio);
        (this.frame.canvas.width !== u || this.frame.canvas.height !== l) && this._getCameraState(s), this.frame.canvas.width !== u && (this.frame.canvas.width = u, n = !0), this.frame.canvas.height !== l && (this.frame.canvas.height = l, n = !0);
      }
      return n === !0 && (this.body.emitter.emit("resize", {
        width: Math.round(this.frame.canvas.width / this.pixelRatio),
        height: Math.round(this.frame.canvas.height / this.pixelRatio),
        oldWidth: Math.round(a / this.pixelRatio),
        oldHeight: Math.round(o / this.pixelRatio)
      }), this._setCameraState()), this.initialized = !0, n;
    }
    /**
     *
     * @returns {CanvasRenderingContext2D}
     */
  }, {
    key: "getContext",
    value: function() {
      return this.frame.canvas.getContext("2d");
    }
    /**
     * Determine the pixel ratio for various browsers.
     *
     * @returns {number}
     * @private
     */
  }, {
    key: "_determinePixelRatio",
    value: function() {
      var e = this.getContext();
      if (e === void 0)
        throw new Error("Could not get canvax context");
      var t = 1;
      typeof window < "u" && (t = window.devicePixelRatio || 1);
      var n = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
      return t / n;
    }
    /**
     * Lazy determination of pixel ratio.
     *
     * @private
     */
  }, {
    key: "_setPixelRatio",
    value: function() {
      this.pixelRatio = this._determinePixelRatio();
    }
    /**
     * Set the transform in the contained context, based on its pixelRatio
     */
  }, {
    key: "setTransform",
    value: function() {
      var e = this.getContext();
      if (e === void 0)
        throw new Error("Could not get canvax context");
      e.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
    }
    /**
     * Convert the X coordinate in DOM-space (coordinate point in browser relative to the container div) to
     * the X coordinate in canvas-space (the simulation sandbox, which the camera looks upon)
     *
     * @param {number} x
     * @returns {number}
     * @private
     */
  }, {
    key: "_XconvertDOMtoCanvas",
    value: function(e) {
      return (e - this.body.view.translation.x) / this.body.view.scale;
    }
    /**
     * Convert the X coordinate in canvas-space (the simulation sandbox, which the camera looks upon) to
     * the X coordinate in DOM-space (coordinate point in browser relative to the container div)
     *
     * @param {number} x
     * @returns {number}
     * @private
     */
  }, {
    key: "_XconvertCanvasToDOM",
    value: function(e) {
      return e * this.body.view.scale + this.body.view.translation.x;
    }
    /**
     * Convert the Y coordinate in DOM-space (coordinate point in browser relative to the container div) to
     * the Y coordinate in canvas-space (the simulation sandbox, which the camera looks upon)
     *
     * @param {number} y
     * @returns {number}
     * @private
     */
  }, {
    key: "_YconvertDOMtoCanvas",
    value: function(e) {
      return (e - this.body.view.translation.y) / this.body.view.scale;
    }
    /**
     * Convert the Y coordinate in canvas-space (the simulation sandbox, which the camera looks upon) to
     * the Y coordinate in DOM-space (coordinate point in browser relative to the container div)
     *
     * @param {number} y
     * @returns {number}
     * @private
     */
  }, {
    key: "_YconvertCanvasToDOM",
    value: function(e) {
      return e * this.body.view.scale + this.body.view.translation.y;
    }
    /**
     * @param {point} pos
     * @returns {point}
     */
  }, {
    key: "canvasToDOM",
    value: function(e) {
      return {
        x: this._XconvertCanvasToDOM(e.x),
        y: this._YconvertCanvasToDOM(e.y)
      };
    }
    /**
     *
     * @param {point} pos
     * @returns {point}
     */
  }, {
    key: "DOMtoCanvas",
    value: function(e) {
      return {
        x: this._XconvertDOMtoCanvas(e.x),
        y: this._YconvertDOMtoCanvas(e.y)
      };
    }
  }]), r;
})();
function hhe(r, i) {
  var e = tt({
    nodes: i,
    minZoomLevel: Number.MIN_VALUE,
    maxZoomLevel: 1
  }, r ?? {});
  if (!Te(e.nodes))
    throw new TypeError("Nodes has to be an array of ids.");
  if (e.nodes.length === 0 && (e.nodes = i), !(typeof e.minZoomLevel == "number" && e.minZoomLevel > 0))
    throw new TypeError("Min zoom level has to be a number higher than zero.");
  if (!(typeof e.maxZoomLevel == "number" && e.minZoomLevel <= e.maxZoomLevel))
    throw new TypeError("Max zoom level has to be a number higher than min zoom level.");
  return e;
}
var vhe = /* @__PURE__ */ (function() {
  function r(i, e) {
    var t, n = this, a;
    M(this, r), this.body = i, this.canvas = e, this.animationSpeed = 1 / this.renderRefreshRate, this.animationEasingFunction = "easeInOutQuint", this.easingTime = 0, this.sourceScale = 0, this.targetScale = 0, this.sourceTranslation = 0, this.targetTranslation = 0, this.lockedOnNodeId = void 0, this.lockedOnNodeOffset = void 0, this.touchTime = 0, this.viewFunction = void 0, this.body.emitter.on("fit", A(t = this.fit).call(t, this)), this.body.emitter.on("animationFinished", function() {
      n.body.emitter.emit("_stopRendering");
    }), this.body.emitter.on("unlockNode", A(a = this.releaseNode).call(a, this));
  }
  return N(r, [{
    key: "setOptions",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.options = e;
    }
    /**
     * This function zooms out to fit all data on screen based on amount of nodes
     *
     * @param {object} [options={{nodes=Array}}]
     * @param options
     * @param {boolean} [initialZoom=false]  | zoom based on fitted formula or range, true = fitted, default = false;
     */
  }, {
    key: "fit",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      e = hhe(e, this.body.nodeIndices);
      var n = this.canvas.frame.canvas.clientWidth, a = this.canvas.frame.canvas.clientHeight, o, s;
      if (n === 0 || a === 0)
        s = 1, o = St.getRange(this.body.nodes, e.nodes);
      else if (t === !0) {
        var u = 0;
        for (var l in this.body.nodes)
          if (Object.prototype.hasOwnProperty.call(this.body.nodes, l)) {
            var c = this.body.nodes[l];
            c.predefinedPosition === !0 && (u += 1);
          }
        if (u > 0.5 * this.body.nodeIndices.length) {
          this.fit(e, !1);
          return;
        }
        o = St.getRange(this.body.nodes, e.nodes);
        var d = this.body.nodeIndices.length;
        s = 12.662 / (d + 7.4147) + 0.0964822;
        var f = Math.min(n / 600, a / 600);
        s *= f;
      } else {
        this.body.emitter.emit("_resizeNodes"), o = St.getRange(this.body.nodes, e.nodes);
        var h = Math.abs(o.maxX - o.minX) * 1.1, v = Math.abs(o.maxY - o.minY) * 1.1, p = n / h, y = a / v;
        s = p <= y ? p : y;
      }
      s > e.maxZoomLevel ? s = e.maxZoomLevel : s < e.minZoomLevel && (s = e.minZoomLevel);
      var m = St.findCenter(o), b = {
        position: m,
        scale: s,
        animation: e.animation
      };
      this.moveTo(b);
    }
    // animation
    /**
     * Center a node in view.
     *
     * @param {number} nodeId
     * @param {number} [options]
     */
  }, {
    key: "focus",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this.body.nodes[e] !== void 0) {
        var n = {
          x: this.body.nodes[e].x,
          y: this.body.nodes[e].y
        };
        t.position = n, t.lockedOnNode = e, this.moveTo(t);
      } else
        console.error("Node: " + e + " cannot be found.");
    }
    /**
     *
     * @param {object} options  |  options.offset   = {x:number, y:number}   // offset from the center in DOM pixels
     *                          |  options.scale    = number                 // scale to move to
     *                          |  options.position = {x:number, y:number}   // position to move to
     *                          |  options.animation = {duration:number, easingFunction:String} || Boolean   // position to move to
     */
  }, {
    key: "moveTo",
    value: function(e) {
      if (e === void 0) {
        e = {};
        return;
      }
      if (e.offset != null) {
        if (e.offset.x != null) {
          if (e.offset.x = +e.offset.x, !Pn(e.offset.x))
            throw new TypeError('The option "offset.x" has to be a finite number.');
        } else
          e.offset.x = 0;
        if (e.offset.y != null) {
          if (e.offset.y = +e.offset.y, !Pn(e.offset.y))
            throw new TypeError('The option "offset.y" has to be a finite number.');
        } else
          e.offset.x = 0;
      } else
        e.offset = {
          x: 0,
          y: 0
        };
      if (e.position != null) {
        if (e.position.x != null) {
          if (e.position.x = +e.position.x, !Pn(e.position.x))
            throw new TypeError('The option "position.x" has to be a finite number.');
        } else
          e.position.x = 0;
        if (e.position.y != null) {
          if (e.position.y = +e.position.y, !Pn(e.position.y))
            throw new TypeError('The option "position.y" has to be a finite number.');
        } else
          e.position.x = 0;
      } else
        e.position = this.getViewPosition();
      if (e.scale != null) {
        if (e.scale = +e.scale, !(e.scale > 0))
          throw new TypeError('The option "scale" has to be a number greater than zero.');
      } else
        e.scale = this.body.view.scale;
      e.animation === void 0 && (e.animation = {
        duration: 0
      }), e.animation === !1 && (e.animation = {
        duration: 0
      }), e.animation === !0 && (e.animation = {}), e.animation.duration === void 0 && (e.animation.duration = 1e3), e.animation.easingFunction === void 0 && (e.animation.easingFunction = "easeInOutQuad"), this.animateView(e);
    }
    /**
     *
     * @param {object} options  |  options.offset   = {x:number, y:number}   // offset from the center in DOM pixels
     *                          |  options.time     = number                 // animation time in milliseconds
     *                          |  options.scale    = number                 // scale to animate to
     *                          |  options.position = {x:number, y:number}   // position to animate to
     *                          |  options.easingFunction = String           // linear, easeInQuad, easeOutQuad, easeInOutQuad,
     *                                                                       // easeInCubic, easeOutCubic, easeInOutCubic,
     *                                                                       // easeInQuart, easeOutQuart, easeInOutQuart,
     *                                                                       // easeInQuint, easeOutQuint, easeInOutQuint
     */
  }, {
    key: "animateView",
    value: function(e) {
      if (e !== void 0) {
        this.animationEasingFunction = e.animation.easingFunction, this.releaseNode(), e.locked === !0 && (this.lockedOnNodeId = e.lockedOnNode, this.lockedOnNodeOffset = e.offset), this.easingTime != 0 && this._transitionRedraw(!0), this.sourceScale = this.body.view.scale, this.sourceTranslation = this.body.view.translation, this.targetScale = e.scale, this.body.view.scale = this.targetScale;
        var t = this.canvas.DOMtoCanvas({
          x: 0.5 * this.canvas.frame.canvas.clientWidth,
          y: 0.5 * this.canvas.frame.canvas.clientHeight
        }), n = {
          // offset from view, distance view has to change by these x and y to center the node
          x: t.x - e.position.x,
          y: t.y - e.position.y
        };
        if (this.targetTranslation = {
          x: this.sourceTranslation.x + n.x * this.targetScale + e.offset.x,
          y: this.sourceTranslation.y + n.y * this.targetScale + e.offset.y
        }, e.animation.duration === 0)
          if (this.lockedOnNodeId != null) {
            var a;
            this.viewFunction = A(a = this._lockedRedraw).call(a, this), this.body.emitter.on("initRedraw", this.viewFunction);
          } else
            this.body.view.scale = this.targetScale, this.body.view.translation = this.targetTranslation, this.body.emitter.emit("_requestRedraw");
        else {
          var o;
          this.animationSpeed = 1 / (60 * e.animation.duration * 1e-3) || 1 / 60, this.animationEasingFunction = e.animation.easingFunction, this.viewFunction = A(o = this._transitionRedraw).call(o, this), this.body.emitter.on("initRedraw", this.viewFunction), this.body.emitter.emit("_startRendering");
        }
      }
    }
    /**
     * used to animate smoothly by hijacking the redraw function.
     *
     * @private
     */
  }, {
    key: "_lockedRedraw",
    value: function() {
      var e = {
        x: this.body.nodes[this.lockedOnNodeId].x,
        y: this.body.nodes[this.lockedOnNodeId].y
      }, t = this.canvas.DOMtoCanvas({
        x: 0.5 * this.canvas.frame.canvas.clientWidth,
        y: 0.5 * this.canvas.frame.canvas.clientHeight
      }), n = {
        // offset from view, distance view has to change by these x and y to center the node
        x: t.x - e.x,
        y: t.y - e.y
      }, a = this.body.view.translation, o = {
        x: a.x + n.x * this.body.view.scale + this.lockedOnNodeOffset.x,
        y: a.y + n.y * this.body.view.scale + this.lockedOnNodeOffset.y
      };
      this.body.view.translation = o;
    }
    /**
     * Resets state of a locked on Node
     */
  }, {
    key: "releaseNode",
    value: function() {
      this.lockedOnNodeId !== void 0 && this.viewFunction !== void 0 && (this.body.emitter.off("initRedraw", this.viewFunction), this.lockedOnNodeId = void 0, this.lockedOnNodeOffset = void 0);
    }
    /**
     * @param {boolean} [finished=false]
     * @private
     */
  }, {
    key: "_transitionRedraw",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      this.easingTime += this.animationSpeed, this.easingTime = e === !0 ? 1 : this.easingTime;
      var t = Zae[this.animationEasingFunction](this.easingTime);
      if (this.body.view.scale = this.sourceScale + (this.targetScale - this.sourceScale) * t, this.body.view.translation = {
        x: this.sourceTranslation.x + (this.targetTranslation.x - this.sourceTranslation.x) * t,
        y: this.sourceTranslation.y + (this.targetTranslation.y - this.sourceTranslation.y) * t
      }, this.easingTime >= 1) {
        if (this.body.emitter.off("initRedraw", this.viewFunction), this.easingTime = 0, this.lockedOnNodeId != null) {
          var n;
          this.viewFunction = A(n = this._lockedRedraw).call(n, this), this.body.emitter.on("initRedraw", this.viewFunction);
        }
        this.body.emitter.emit("animationFinished");
      }
    }
    /**
     *
     * @returns {number}
     */
  }, {
    key: "getScale",
    value: function() {
      return this.body.view.scale;
    }
    /**
     *
     * @returns {{x: number, y: number}}
     */
  }, {
    key: "getViewPosition",
    value: function() {
      return this.canvas.DOMtoCanvas({
        x: 0.5 * this.canvas.frame.canvas.clientWidth,
        y: 0.5 * this.canvas.frame.canvas.clientHeight
      });
    }
  }]), r;
})();
function h1(r) {
  var i = r && r.preventDefault || !1, e = r && r.container || window, t = {}, n = { keydown: {}, keyup: {} }, a = {}, o;
  for (o = 97; o <= 122; o++)
    a[String.fromCharCode(o)] = { code: 65 + (o - 97), shift: !1 };
  for (o = 65; o <= 90; o++)
    a[String.fromCharCode(o)] = { code: o, shift: !0 };
  for (o = 0; o <= 9; o++)
    a["" + o] = { code: 48 + o, shift: !1 };
  for (o = 1; o <= 12; o++)
    a["F" + o] = { code: 111 + o, shift: !1 };
  for (o = 0; o <= 9; o++)
    a["num" + o] = { code: 96 + o, shift: !1 };
  a["num*"] = { code: 106, shift: !1 }, a["num+"] = { code: 107, shift: !1 }, a["num-"] = { code: 109, shift: !1 }, a["num/"] = { code: 111, shift: !1 }, a["num."] = { code: 110, shift: !1 }, a.left = { code: 37, shift: !1 }, a.up = { code: 38, shift: !1 }, a.right = { code: 39, shift: !1 }, a.down = { code: 40, shift: !1 }, a.space = { code: 32, shift: !1 }, a.enter = { code: 13, shift: !1 }, a.shift = { code: 16, shift: void 0 }, a.esc = { code: 27, shift: !1 }, a.backspace = { code: 8, shift: !1 }, a.tab = { code: 9, shift: !1 }, a.ctrl = { code: 17, shift: !1 }, a.alt = { code: 18, shift: !1 }, a.delete = { code: 46, shift: !1 }, a.pageup = { code: 33, shift: !1 }, a.pagedown = { code: 34, shift: !1 }, a["="] = { code: 187, shift: !1 }, a["-"] = { code: 189, shift: !1 }, a["]"] = { code: 221, shift: !1 }, a["["] = { code: 219, shift: !1 };
  var s = function(c) {
    l(c, "keydown");
  }, u = function(c) {
    l(c, "keyup");
  }, l = function(c, d) {
    if (n[d][c.keyCode] !== void 0) {
      for (var f = n[d][c.keyCode], h = 0; h < f.length; h++)
        (f[h].shift === void 0 || f[h].shift == !0 && c.shiftKey == !0 || f[h].shift == !1 && c.shiftKey == !1) && f[h].fn(c);
      i == !0 && c.preventDefault();
    }
  };
  return t.bind = function(c, d, f) {
    if (f === void 0 && (f = "keydown"), a[c] === void 0)
      throw new Error("unsupported key: " + c);
    n[f][a[c].code] === void 0 && (n[f][a[c].code] = []), n[f][a[c].code].push({ fn: d, shift: a[c].shift });
  }, t.bindAll = function(c, d) {
    d === void 0 && (d = "keydown");
    for (var f in a)
      a.hasOwnProperty(f) && t.bind(f, c, d);
  }, t.getKey = function(c) {
    for (var d in a)
      if (a.hasOwnProperty(d)) {
        if (c.shiftKey == !0 && a[d].shift == !0 && c.keyCode == a[d].code)
          return d;
        if (c.shiftKey == !1 && a[d].shift == !1 && c.keyCode == a[d].code)
          return d;
        if (c.keyCode == a[d].code && d == "shift")
          return d;
      }
    return "unknown key, currently not supported";
  }, t.unbind = function(c, d, f) {
    if (f === void 0 && (f = "keydown"), a[c] === void 0)
      throw new Error("unsupported key: " + c);
    if (d !== void 0) {
      var h = [], v = n[f][a[c].code];
      if (v !== void 0)
        for (var p = 0; p < v.length; p++)
          v[p].fn == d && v[p].shift == a[c].shift || h.push(n[f][a[c].code][p]);
      n[f][a[c].code] = h;
    } else
      n[f][a[c].code] = [];
  }, t.reset = function() {
    n = { keydown: {}, keyup: {} };
  }, t.destroy = function() {
    n = { keydown: {}, keyup: {} }, e.removeEventListener("keydown", s, !0), e.removeEventListener("keyup", u, !0);
  }, e.addEventListener("keydown", s, !0), e.addEventListener("keyup", u, !0), t;
}
var phe = /* @__PURE__ */ (function() {
  function r(i, e) {
    var t = this;
    M(this, r), this.body = i, this.canvas = e, this.iconsCreated = !1, this.navigationHammers = [], this.boundFunctions = {}, this.touchTime = 0, this.activated = !1, this.body.emitter.on("activate", function() {
      t.activated = !0, t.configureKeyboardBindings();
    }), this.body.emitter.on("deactivate", function() {
      t.activated = !1, t.configureKeyboardBindings();
    }), this.body.emitter.on("destroy", function() {
      t.keycharm !== void 0 && t.keycharm.destroy();
    }), this.options = {};
  }
  return N(r, [{
    key: "setOptions",
    value: function(e) {
      e !== void 0 && (this.options = e, this.create());
    }
    /**
     * Creates or refreshes navigation and sets key bindings
     */
  }, {
    key: "create",
    value: function() {
      this.options.navigationButtons === !0 ? this.iconsCreated === !1 && this.loadNavigationElements() : this.iconsCreated === !0 && this.cleanNavigation(), this.configureKeyboardBindings();
    }
    /**
     * Cleans up previous navigation items
     */
  }, {
    key: "cleanNavigation",
    value: function() {
      if (this.navigationHammers.length != 0) {
        for (var e = 0; e < this.navigationHammers.length; e++)
          this.navigationHammers[e].destroy();
        this.navigationHammers = [];
      }
      this.navigationDOM && this.navigationDOM.wrapper && this.navigationDOM.wrapper.parentNode && this.navigationDOM.wrapper.parentNode.removeChild(this.navigationDOM.wrapper), this.iconsCreated = !1;
    }
    /**
     * Creation of the navigation controls nodes. They are drawn over the rest of the nodes and are not affected by scale and translation
     * they have a triggerFunction which is called on click. If the position of the navigation controls is dependent
     * on this.frame.canvas.clientWidth or this.frame.canvas.clientHeight, we flag horizontalAlignLeft and verticalAlignTop false.
     * This means that the location will be corrected by the _relocateNavigation function on a size change of the canvas.
     *
     * @private
     */
  }, {
    key: "loadNavigationElements",
    value: function() {
      var e = this;
      this.cleanNavigation(), this.navigationDOM = {};
      var t = ["up", "down", "left", "right", "zoomIn", "zoomOut", "zoomExtends"], n = ["_moveUp", "_moveDown", "_moveLeft", "_moveRight", "_zoomIn", "_zoomOut", "_fit"];
      this.navigationDOM.wrapper = document.createElement("div"), this.navigationDOM.wrapper.className = "vis-navigation", this.canvas.frame.appendChild(this.navigationDOM.wrapper);
      for (var a = 0; a < t.length; a++) {
        this.navigationDOM[t[a]] = document.createElement("div"), this.navigationDOM[t[a]].className = "vis-button vis-" + t[a], this.navigationDOM.wrapper.appendChild(this.navigationDOM[t[a]]);
        var o = new Bi(this.navigationDOM[t[a]]);
        if (n[a] === "_fit") {
          var s;
          Wu(o, A(s = this._fit).call(s, this));
        } else {
          var u;
          Wu(o, A(u = this.bindToRedraw).call(u, this, n[a]));
        }
        this.navigationHammers.push(o);
      }
      var l = new Bi(this.canvas.frame);
      UT(l, function() {
        e._stopMovement();
      }), this.navigationHammers.push(l), this.iconsCreated = !0;
    }
    /**
     *
     * @param {string} action
     */
  }, {
    key: "bindToRedraw",
    value: function(e) {
      if (this.boundFunctions[e] === void 0) {
        var t;
        this.boundFunctions[e] = A(t = this[e]).call(t, this), this.body.emitter.on("initRedraw", this.boundFunctions[e]), this.body.emitter.emit("_startRendering");
      }
    }
    /**
     *
     * @param {string} action
     */
  }, {
    key: "unbindFromRedraw",
    value: function(e) {
      this.boundFunctions[e] !== void 0 && (this.body.emitter.off("initRedraw", this.boundFunctions[e]), this.body.emitter.emit("_stopRendering"), delete this.boundFunctions[e]);
    }
    /**
     * this stops all movement induced by the navigation buttons
     *
     * @private
     */
  }, {
    key: "_fit",
    value: function() {
      (/* @__PURE__ */ new Date()).valueOf() - this.touchTime > 700 && (this.body.emitter.emit("fit", {
        duration: 700
      }), this.touchTime = (/* @__PURE__ */ new Date()).valueOf());
    }
    /**
     * this stops all movement induced by the navigation buttons
     *
     * @private
     */
  }, {
    key: "_stopMovement",
    value: function() {
      for (var e in this.boundFunctions)
        Object.prototype.hasOwnProperty.call(this.boundFunctions, e) && (this.body.emitter.off("initRedraw", this.boundFunctions[e]), this.body.emitter.emit("_stopRendering"));
      this.boundFunctions = {};
    }
    /**
     *
     * @private
     */
  }, {
    key: "_moveUp",
    value: function() {
      this.body.view.translation.y += this.options.keyboard.speed.y;
    }
    /**
     *
     * @private
     */
  }, {
    key: "_moveDown",
    value: function() {
      this.body.view.translation.y -= this.options.keyboard.speed.y;
    }
    /**
     *
     * @private
     */
  }, {
    key: "_moveLeft",
    value: function() {
      this.body.view.translation.x += this.options.keyboard.speed.x;
    }
    /**
     *
     * @private
     */
  }, {
    key: "_moveRight",
    value: function() {
      this.body.view.translation.x -= this.options.keyboard.speed.x;
    }
    /**
     *
     * @private
     */
  }, {
    key: "_zoomIn",
    value: function() {
      var e = this.body.view.scale, t = this.body.view.scale * (1 + this.options.keyboard.speed.zoom), n = this.body.view.translation, a = t / e, o = (1 - a) * this.canvas.canvasViewCenter.x + n.x * a, s = (1 - a) * this.canvas.canvasViewCenter.y + n.y * a;
      this.body.view.scale = t, this.body.view.translation = {
        x: o,
        y: s
      }, this.body.emitter.emit("zoom", {
        direction: "+",
        scale: this.body.view.scale,
        pointer: null
      });
    }
    /**
     *
     * @private
     */
  }, {
    key: "_zoomOut",
    value: function() {
      var e = this.body.view.scale, t = this.body.view.scale / (1 + this.options.keyboard.speed.zoom), n = this.body.view.translation, a = t / e, o = (1 - a) * this.canvas.canvasViewCenter.x + n.x * a, s = (1 - a) * this.canvas.canvasViewCenter.y + n.y * a;
      this.body.view.scale = t, this.body.view.translation = {
        x: o,
        y: s
      }, this.body.emitter.emit("zoom", {
        direction: "-",
        scale: this.body.view.scale,
        pointer: null
      });
    }
    /**
     * bind all keys using keycharm.
     */
  }, {
    key: "configureKeyboardBindings",
    value: function() {
      var e = this;
      if (this.keycharm !== void 0 && this.keycharm.destroy(), this.options.keyboard.enabled === !0 && (this.options.keyboard.bindToWindow === !0 ? this.keycharm = h1({
        container: window,
        preventDefault: !0
      }) : this.keycharm = h1({
        container: this.canvas.frame,
        preventDefault: !0
      }), this.keycharm.reset(), this.activated === !0)) {
        var t, n, a, o, s, u, l, c, d, f, h, v, p, y, m, b, w, _, $, C, j, W, B, L;
        A(t = this.keycharm).call(t, "up", function() {
          e.bindToRedraw("_moveUp");
        }, "keydown"), A(n = this.keycharm).call(n, "down", function() {
          e.bindToRedraw("_moveDown");
        }, "keydown"), A(a = this.keycharm).call(a, "left", function() {
          e.bindToRedraw("_moveLeft");
        }, "keydown"), A(o = this.keycharm).call(o, "right", function() {
          e.bindToRedraw("_moveRight");
        }, "keydown"), A(s = this.keycharm).call(s, "=", function() {
          e.bindToRedraw("_zoomIn");
        }, "keydown"), A(u = this.keycharm).call(u, "num+", function() {
          e.bindToRedraw("_zoomIn");
        }, "keydown"), A(l = this.keycharm).call(l, "num-", function() {
          e.bindToRedraw("_zoomOut");
        }, "keydown"), A(c = this.keycharm).call(c, "-", function() {
          e.bindToRedraw("_zoomOut");
        }, "keydown"), A(d = this.keycharm).call(d, "[", function() {
          e.bindToRedraw("_zoomOut");
        }, "keydown"), A(f = this.keycharm).call(f, "]", function() {
          e.bindToRedraw("_zoomIn");
        }, "keydown"), A(h = this.keycharm).call(h, "pageup", function() {
          e.bindToRedraw("_zoomIn");
        }, "keydown"), A(v = this.keycharm).call(v, "pagedown", function() {
          e.bindToRedraw("_zoomOut");
        }, "keydown"), A(p = this.keycharm).call(p, "up", function() {
          e.unbindFromRedraw("_moveUp");
        }, "keyup"), A(y = this.keycharm).call(y, "down", function() {
          e.unbindFromRedraw("_moveDown");
        }, "keyup"), A(m = this.keycharm).call(m, "left", function() {
          e.unbindFromRedraw("_moveLeft");
        }, "keyup"), A(b = this.keycharm).call(b, "right", function() {
          e.unbindFromRedraw("_moveRight");
        }, "keyup"), A(w = this.keycharm).call(w, "=", function() {
          e.unbindFromRedraw("_zoomIn");
        }, "keyup"), A(_ = this.keycharm).call(_, "num+", function() {
          e.unbindFromRedraw("_zoomIn");
        }, "keyup"), A($ = this.keycharm).call($, "num-", function() {
          e.unbindFromRedraw("_zoomOut");
        }, "keyup"), A(C = this.keycharm).call(C, "-", function() {
          e.unbindFromRedraw("_zoomOut");
        }, "keyup"), A(j = this.keycharm).call(j, "[", function() {
          e.unbindFromRedraw("_zoomOut");
        }, "keyup"), A(W = this.keycharm).call(W, "]", function() {
          e.unbindFromRedraw("_zoomIn");
        }, "keyup"), A(B = this.keycharm).call(B, "pageup", function() {
          e.unbindFromRedraw("_zoomIn");
        }, "keyup"), A(L = this.keycharm).call(L, "pagedown", function() {
          e.unbindFromRedraw("_zoomOut");
        }, "keyup");
      }
    }
  }]), r;
})();
function yhe(r, i) {
  var e = typeof mn < "u" && ai(r) || r["@@iterator"];
  if (!e) {
    if (Te(r) || (e = ghe(r)) || i) {
      e && (r = e);
      var t = 0, n = function() {
      };
      return { s: n, n: function() {
        return t >= r.length ? { done: !0 } : { done: !1, value: r[t++] };
      }, e: function(l) {
        throw l;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, s;
  return { s: function() {
    e = e.call(r);
  }, n: function() {
    var l = e.next();
    return a = l.done, l;
  }, e: function(l) {
    o = !0, s = l;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (o) throw s;
    }
  } };
}
function ghe(r, i) {
  var e;
  if (r) {
    if (typeof r == "string") return v1(r, i);
    var t = mt(e = Object.prototype.toString.call(r)).call(e, 8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return ii(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return v1(r, i);
  }
}
function v1(r, i) {
  (i == null || i > r.length) && (i = r.length);
  for (var e = 0, t = new Array(i); e < i; e++) t[e] = r[e];
  return t;
}
var mhe = /* @__PURE__ */ (function() {
  function r(i, e, t) {
    var n, a, o, s, u, l, c, d, f, h, v, p, y;
    M(this, r), this.body = i, this.canvas = e, this.selectionHandler = t, this.navigationHandler = new phe(i, e), this.body.eventListeners.onTap = A(n = this.onTap).call(n, this), this.body.eventListeners.onTouch = A(a = this.onTouch).call(a, this), this.body.eventListeners.onDoubleTap = A(o = this.onDoubleTap).call(o, this), this.body.eventListeners.onHold = A(s = this.onHold).call(s, this), this.body.eventListeners.onDragStart = A(u = this.onDragStart).call(u, this), this.body.eventListeners.onDrag = A(l = this.onDrag).call(l, this), this.body.eventListeners.onDragEnd = A(c = this.onDragEnd).call(c, this), this.body.eventListeners.onMouseWheel = A(d = this.onMouseWheel).call(d, this), this.body.eventListeners.onPinch = A(f = this.onPinch).call(f, this), this.body.eventListeners.onMouseMove = A(h = this.onMouseMove).call(h, this), this.body.eventListeners.onRelease = A(v = this.onRelease).call(v, this), this.body.eventListeners.onContext = A(p = this.onContext).call(p, this), this.touchTime = 0, this.drag = {}, this.pinch = {}, this.popup = void 0, this.popupObj = void 0, this.popupTimer = void 0, this.body.functions.getPointer = A(y = this.getPointer).call(y, this), this.options = {}, this.defaultOptions = {
      dragNodes: !0,
      dragView: !0,
      hover: !1,
      keyboard: {
        enabled: !1,
        speed: {
          x: 10,
          y: 10,
          zoom: 0.02
        },
        bindToWindow: !0,
        autoFocus: !0
      },
      navigationButtons: !1,
      tooltipDelay: 300,
      zoomView: !0,
      zoomSpeed: 1
    }, tt(this.options, this.defaultOptions), this.bindEventListeners();
  }
  return N(r, [{
    key: "bindEventListeners",
    value: function() {
      var e = this;
      this.body.emitter.on("destroy", function() {
        clearTimeout(e.popupTimer), delete e.body.functions.getPointer;
      });
    }
    /**
     *
     * @param {object} options
     */
  }, {
    key: "setOptions",
    value: function(e) {
      if (e !== void 0) {
        var t = ["hideEdgesOnDrag", "hideEdgesOnZoom", "hideNodesOnDrag", "keyboard", "multiselect", "selectable", "selectConnectedEdges"];
        Bu(t, this.options, e), Qt(this.options, e, "keyboard"), e.tooltip && (tt(this.options.tooltip, e.tooltip), e.tooltip.color && (this.options.tooltip.color = mh(e.tooltip.color)));
      }
      this.navigationHandler.setOptions(this.options);
    }
    /**
     * Get the pointer location from a touch location
     *
     * @param {{x: number, y: number}} touch
     * @returns {{x: number, y: number}} pointer
     * @private
     */
  }, {
    key: "getPointer",
    value: function(e) {
      return {
        x: e.x - Yae(this.canvas.frame.canvas),
        y: e.y - Xae(this.canvas.frame.canvas)
      };
    }
    /**
     * On start of a touch gesture, store the pointer
     *
     * @param {Event}  event   The event
     * @private
     */
  }, {
    key: "onTouch",
    value: function(e) {
      (/* @__PURE__ */ new Date()).valueOf() - this.touchTime > 50 && (this.drag.pointer = this.getPointer(e.center), this.drag.pinched = !1, this.pinch.scale = this.body.view.scale, this.touchTime = (/* @__PURE__ */ new Date()).valueOf());
    }
    /**
     * handle tap/click event: select/unselect a node
     *
     * @param {Event} event
     * @private
     */
  }, {
    key: "onTap",
    value: function(e) {
      var t = this.getPointer(e.center), n = this.selectionHandler.options.multiselect && (e.changedPointers[0].ctrlKey || e.changedPointers[0].metaKey);
      this.checkSelectionChanges(t, n), this.selectionHandler.commitAndEmit(t, e), this.selectionHandler.generateClickEvent("click", e, t);
    }
    /**
     * handle doubletap event
     *
     * @param {Event} event
     * @private
     */
  }, {
    key: "onDoubleTap",
    value: function(e) {
      var t = this.getPointer(e.center);
      this.selectionHandler.generateClickEvent("doubleClick", e, t);
    }
    /**
     * handle long tap event: multi select nodes
     *
     * @param {Event} event
     * @private
     */
  }, {
    key: "onHold",
    value: function(e) {
      var t = this.getPointer(e.center), n = this.selectionHandler.options.multiselect;
      this.checkSelectionChanges(t, n), this.selectionHandler.commitAndEmit(t, e), this.selectionHandler.generateClickEvent("click", e, t), this.selectionHandler.generateClickEvent("hold", e, t);
    }
    /**
     * handle the release of the screen
     *
     * @param {Event} event
     * @private
     */
  }, {
    key: "onRelease",
    value: function(e) {
      if ((/* @__PURE__ */ new Date()).valueOf() - this.touchTime > 10) {
        var t = this.getPointer(e.center);
        this.selectionHandler.generateClickEvent("release", e, t), this.touchTime = (/* @__PURE__ */ new Date()).valueOf();
      }
    }
    /**
     *
     * @param {Event} event
     */
  }, {
    key: "onContext",
    value: function(e) {
      var t = this.getPointer({
        x: e.clientX,
        y: e.clientY
      });
      this.selectionHandler.generateClickEvent("oncontext", e, t);
    }
    /**
     * Select and deselect nodes depending current selection change.
     *
     * @param {{x: number, y: number}} pointer
     * @param {boolean} [add=false]
     */
  }, {
    key: "checkSelectionChanges",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      t === !0 ? this.selectionHandler.selectAdditionalOnPoint(e) : this.selectionHandler.selectOnPoint(e);
    }
    /**
     * Remove all node and edge id's from the first set that are present in the second one.
     *
     * @param {{nodes: Array.<Node>, edges: Array.<vis.Edge>}} firstSet
     * @param {{nodes: Array.<Node>, edges: Array.<vis.Edge>}} secondSet
     * @returns {{nodes: Array.<Node>, edges: Array.<vis.Edge>}}
     * @private
     */
  }, {
    key: "_determineDifference",
    value: function(e, t) {
      var n = function(o, s) {
        for (var u = [], l = 0; l < o.length; l++) {
          var c = o[l];
          ye(s).call(s, c) === -1 && u.push(c);
        }
        return u;
      };
      return {
        nodes: n(e.nodes, t.nodes),
        edges: n(e.edges, t.edges)
      };
    }
    /**
     * This function is called by onDragStart.
     * It is separated out because we can then overload it for the datamanipulation system.
     *
     * @param {Event} event
     * @private
     */
  }, {
    key: "onDragStart",
    value: function(e) {
      if (!this.drag.dragging) {
        this.drag.pointer === void 0 && this.onTouch(e);
        var t = this.selectionHandler.getNodeAt(this.drag.pointer);
        if (this.drag.dragging = !0, this.drag.selection = [], this.drag.translation = tt({}, this.body.view.translation), this.drag.nodeId = void 0, e.srcEvent.shiftKey) {
          this.body.selectionBox.show = !0;
          var n = this.getPointer(e.center);
          this.body.selectionBox.position.start = {
            x: this.canvas._XconvertDOMtoCanvas(n.x),
            y: this.canvas._YconvertDOMtoCanvas(n.y)
          }, this.body.selectionBox.position.end = {
            x: this.canvas._XconvertDOMtoCanvas(n.x),
            y: this.canvas._YconvertDOMtoCanvas(n.y)
          };
        } else if (t !== void 0 && this.options.dragNodes === !0) {
          this.drag.nodeId = t.id, t.isSelected() === !1 && this.selectionHandler.setSelection({
            nodes: [t.id]
          }), this.selectionHandler.generateClickEvent("dragStart", e, this.drag.pointer);
          var a = yhe(this.selectionHandler.getSelectedNodes()), o;
          try {
            for (a.s(); !(o = a.n()).done; ) {
              var s = o.value, u = {
                id: s.id,
                node: s,
                // store original x, y, xFixed and yFixed, make the node temporarily Fixed
                x: s.x,
                y: s.y,
                xFixed: s.options.fixed.x,
                yFixed: s.options.fixed.y
              };
              s.options.fixed.x = !0, s.options.fixed.y = !0, this.drag.selection.push(u);
            }
          } catch (l) {
            a.e(l);
          } finally {
            a.f();
          }
        } else
          this.selectionHandler.generateClickEvent("dragStart", e, this.drag.pointer, void 0, !0);
      }
    }
    /**
     * handle drag event
     *
     * @param {Event} event
     * @private
     */
  }, {
    key: "onDrag",
    value: function(e) {
      var t = this;
      if (this.drag.pinched !== !0) {
        this.body.emitter.emit("unlockNode");
        var n = this.getPointer(e.center), a = this.drag.selection;
        if (a && a.length && this.options.dragNodes === !0) {
          this.selectionHandler.generateClickEvent("dragging", e, n);
          var o = n.x - this.drag.pointer.x, s = n.y - this.drag.pointer.y;
          xe(a).call(a, function(c) {
            var d = c.node;
            c.xFixed === !1 && (d.x = t.canvas._XconvertDOMtoCanvas(t.canvas._XconvertCanvasToDOM(c.x) + o)), c.yFixed === !1 && (d.y = t.canvas._YconvertDOMtoCanvas(t.canvas._YconvertCanvasToDOM(c.y) + s));
          }), this.body.emitter.emit("startSimulation");
        } else {
          if (e.srcEvent.shiftKey) {
            if (this.selectionHandler.generateClickEvent("dragging", e, n, void 0, !0), this.drag.pointer === void 0) {
              this.onDragStart(e);
              return;
            }
            this.body.selectionBox.position.end = {
              x: this.canvas._XconvertDOMtoCanvas(n.x),
              y: this.canvas._YconvertDOMtoCanvas(n.y)
            }, this.body.emitter.emit("_requestRedraw");
          }
          if (this.options.dragView === !0 && !e.srcEvent.shiftKey) {
            if (this.selectionHandler.generateClickEvent("dragging", e, n, void 0, !0), this.drag.pointer === void 0) {
              this.onDragStart(e);
              return;
            }
            var u = n.x - this.drag.pointer.x, l = n.y - this.drag.pointer.y;
            this.body.view.translation = {
              x: this.drag.translation.x + u,
              y: this.drag.translation.y + l
            }, this.body.emitter.emit("_requestRedraw");
          }
        }
      }
    }
    /**
     * handle drag start event
     *
     * @param {Event} event
     * @private
     */
  }, {
    key: "onDragEnd",
    value: function(e) {
      var t = this;
      if (this.drag.dragging = !1, this.body.selectionBox.show) {
        var n;
        this.body.selectionBox.show = !1;
        var a = this.body.selectionBox.position, o = {
          minX: Math.min(a.start.x, a.end.x),
          minY: Math.min(a.start.y, a.end.y),
          maxX: Math.max(a.start.x, a.end.x),
          maxY: Math.max(a.start.y, a.end.y)
        }, s = Dt(n = this.body.nodeIndices).call(n, function(c) {
          var d = t.body.nodes[c];
          return d.x >= o.minX && d.x <= o.maxX && d.y >= o.minY && d.y <= o.maxY;
        });
        xe(s).call(s, function(c) {
          return t.selectionHandler.selectObject(t.body.nodes[c]);
        });
        var u = this.getPointer(e.center);
        this.selectionHandler.commitAndEmit(u, e), this.selectionHandler.generateClickEvent("dragEnd", e, this.getPointer(e.center), void 0, !0), this.body.emitter.emit("_requestRedraw");
      } else {
        var l = this.drag.selection;
        l && l.length ? (xe(l).call(l, function(c) {
          c.node.options.fixed.x = c.xFixed, c.node.options.fixed.y = c.yFixed;
        }), this.selectionHandler.generateClickEvent("dragEnd", e, this.getPointer(e.center)), this.body.emitter.emit("startSimulation")) : (this.selectionHandler.generateClickEvent("dragEnd", e, this.getPointer(e.center), void 0, !0), this.body.emitter.emit("_requestRedraw"));
      }
    }
    /**
     * Handle pinch event
     *
     * @param {Event}  event   The event
     * @private
     */
  }, {
    key: "onPinch",
    value: function(e) {
      var t = this.getPointer(e.center);
      this.drag.pinched = !0, this.pinch.scale === void 0 && (this.pinch.scale = 1);
      var n = this.pinch.scale * e.scale;
      this.zoom(n, t);
    }
    /**
     * Zoom the network in or out
     *
     * @param {number} scale a number around 1, and between 0.01 and 10
     * @param {{x: number, y: number}} pointer    Position on screen
     * @private
     */
  }, {
    key: "zoom",
    value: function(e, t) {
      if (this.options.zoomView === !0) {
        var n = this.body.view.scale;
        e < 1e-5 && (e = 1e-5), e > 10 && (e = 10);
        var a = void 0;
        this.drag !== void 0 && this.drag.dragging === !0 && (a = this.canvas.DOMtoCanvas(this.drag.pointer));
        var o = this.body.view.translation, s = e / n, u = (1 - s) * t.x + o.x * s, l = (1 - s) * t.y + o.y * s;
        if (this.body.view.scale = e, this.body.view.translation = {
          x: u,
          y: l
        }, a != null) {
          var c = this.canvas.canvasToDOM(a);
          this.drag.pointer.x = c.x, this.drag.pointer.y = c.y;
        }
        this.body.emitter.emit("_requestRedraw"), n < e ? this.body.emitter.emit("zoom", {
          direction: "+",
          scale: this.body.view.scale,
          pointer: t
        }) : this.body.emitter.emit("zoom", {
          direction: "-",
          scale: this.body.view.scale,
          pointer: t
        });
      }
    }
    /**
     * Event handler for mouse wheel event, used to zoom the timeline
     * See http://adomas.org/javascript-mouse-wheel/
     *     https://github.com/EightMedia/hammer.js/issues/256
     *
     * @param {MouseEvent}  event
     * @private
     */
  }, {
    key: "onMouseWheel",
    value: function(e) {
      if (this.options.zoomView === !0) {
        if (e.deltaY !== 0) {
          var t = this.body.view.scale;
          t *= 1 + (e.deltaY < 0 ? 1 : -1) * (this.options.zoomSpeed * 0.1);
          var n = this.getPointer({
            x: e.clientX,
            y: e.clientY
          });
          this.zoom(t, n);
        }
        e.preventDefault();
      }
    }
    /**
     * Mouse move handler for checking whether the title moves over a node with a title.
     *
     * @param  {Event} event
     * @private
     */
  }, {
    key: "onMouseMove",
    value: function(e) {
      var t = this, n = this.getPointer({
        x: e.clientX,
        y: e.clientY
      }), a = !1;
      this.popup !== void 0 && (this.popup.hidden === !1 && this._checkHidePopup(n), this.popup.hidden === !1 && (a = !0, this.popup.setPosition(n.x + 3, n.y - 5), this.popup.show())), this.options.keyboard.autoFocus && this.options.keyboard.bindToWindow === !1 && this.options.keyboard.enabled === !0 && this.canvas.frame.focus(), a === !1 && (this.popupTimer !== void 0 && (clearInterval(this.popupTimer), this.popupTimer = void 0), this.drag.dragging || (this.popupTimer = Er(function() {
        return t._checkShowPopup(n);
      }, this.options.tooltipDelay))), this.options.hover === !0 && this.selectionHandler.hoverObject(e, n);
    }
    /**
     * Check if there is an element on the given position in the network
     * (a node or edge). If so, and if this element has a title,
     * show a popup window with its title.
     *
     * @param {{x:number, y:number}} pointer
     * @private
     */
  }, {
    key: "_checkShowPopup",
    value: function(e) {
      var t = this.canvas._XconvertDOMtoCanvas(e.x), n = this.canvas._YconvertDOMtoCanvas(e.y), a = {
        left: t,
        top: n,
        right: t,
        bottom: n
      }, o = this.popupObj === void 0 ? void 0 : this.popupObj.id, s = !1, u = "node";
      if (this.popupObj === void 0) {
        for (var l = this.body.nodeIndices, c = this.body.nodes, d, f = [], h = 0; h < l.length; h++)
          d = c[l[h]], d.isOverlappingWith(a) === !0 && (s = !0, d.getTitle() !== void 0 && f.push(l[h]));
        f.length > 0 && (this.popupObj = c[f[f.length - 1]], s = !0);
      }
      if (this.popupObj === void 0 && s === !1) {
        for (var v = this.body.edgeIndices, p = this.body.edges, y, m = [], b = 0; b < v.length; b++)
          y = p[v[b]], y.isOverlappingWith(a) === !0 && y.connected === !0 && y.getTitle() !== void 0 && m.push(v[b]);
        m.length > 0 && (this.popupObj = p[m[m.length - 1]], u = "edge");
      }
      this.popupObj !== void 0 ? this.popupObj.id !== o && (this.popup === void 0 && (this.popup = new soe(this.canvas.frame)), this.popup.popupTargetType = u, this.popup.popupTargetId = this.popupObj.id, this.popup.setPosition(e.x + 3, e.y - 5), this.popup.setText(this.popupObj.getTitle()), this.popup.show(), this.body.emitter.emit("showPopup", this.popupObj.id)) : this.popup !== void 0 && (this.popup.hide(), this.body.emitter.emit("hidePopup"));
    }
    /**
     * Check if the popup must be hidden, which is the case when the mouse is no
     * longer hovering on the object
     *
     * @param {{x:number, y:number}} pointer
     * @private
     */
  }, {
    key: "_checkHidePopup",
    value: function(e) {
      var t = this.selectionHandler._pointerToPositionObject(e), n = !1;
      if (this.popup.popupTargetType === "node") {
        if (this.body.nodes[this.popup.popupTargetId] !== void 0 && (n = this.body.nodes[this.popup.popupTargetId].isOverlappingWith(t), n === !0)) {
          var a = this.selectionHandler.getNodeAt(e);
          n = a === void 0 ? !1 : a.id === this.popup.popupTargetId;
        }
      } else
        this.selectionHandler.getNodeAt(e) === void 0 && this.body.edges[this.popup.popupTargetId] !== void 0 && (n = this.body.edges[this.popup.popupTargetId].isOverlappingWith(t));
      n === !1 && (this.popupObj = void 0, this.popup.hide(), this.body.emitter.emit("hidePopup"));
    }
  }]), r;
})(), bhe = rp, $he = wT;
bhe("Set", function(r) {
  return function() {
    return r(this, arguments.length ? arguments[0] : void 0);
  };
}, $he);
var _he = me, whe = _he.Set, Ehe = whe, She = Ehe, Ohe = She, Sn = /* @__PURE__ */ Y(Ohe), The = be, p1 = np, Us = Wl.getWeakData, Phe = tp, Ihe = Yt, khe = ya, nf = ft, Che = ep, VT = gn, y1 = ht, GT = ni, xhe = GT.set, Rhe = GT.getterFor, Ahe = VT.find, Dhe = VT.findIndex, Mhe = The([].splice), Nhe = 0, Vs = function(r) {
  return r.frozen || (r.frozen = new KT());
}, KT = function() {
  this.entries = [];
}, af = function(r, i) {
  return Ahe(r.entries, function(e) {
    return e[0] === i;
  });
};
KT.prototype = {
  get: function(r) {
    var i = af(this, r);
    if (i) return i[1];
  },
  has: function(r) {
    return !!af(this, r);
  },
  set: function(r, i) {
    var e = af(this, r);
    e ? e[1] = i : this.entries.push([r, i]);
  },
  delete: function(r) {
    var i = Dhe(this.entries, function(e) {
      return e[0] === r;
    });
    return ~i && Mhe(this.entries, i, 1), !!~i;
  }
};
var Fhe = {
  getConstructor: function(r, i, e, t) {
    var n = r(function(u, l) {
      Phe(u, a), xhe(u, {
        type: i,
        id: Nhe++,
        frozen: void 0
      }), khe(l) || Che(l, u[t], { that: u, AS_ENTRIES: e });
    }), a = n.prototype, o = Rhe(i), s = function(u, l, c) {
      var d = o(u), f = Us(Ihe(l), !0);
      return f === !0 ? Vs(d).set(l, c) : f[d.id] = c, u;
    };
    return p1(a, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      delete: function(u) {
        var l = o(this);
        if (!nf(u)) return !1;
        var c = Us(u);
        return c === !0 ? Vs(l).delete(u) : c && y1(c, l.id) && delete c[l.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function(l) {
        var c = o(this);
        if (!nf(l)) return !1;
        var d = Us(l);
        return d === !0 ? Vs(c).has(l) : d && y1(d, c.id);
      }
    }), p1(a, e ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function(l) {
        var c = o(this);
        if (nf(l)) {
          var d = Us(l);
          return d === !0 ? Vs(c).get(l) : d ? d[c.id] : void 0;
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function(l, c) {
        return s(this, l, c);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function(l) {
        return s(this, l, !0);
      }
    }), n;
  }
}, Bhe = mT, g1 = Ge, hu = be, m1 = np, jhe = Wl, Lhe = rp, qT = Fhe, Gs = ft, Ks = ni.enforce, zhe = ge, Whe = aS, us = Object, Hhe = Array.isArray, qs = us.isExtensible, YT = us.isFrozen, Uhe = us.isSealed, XT = us.freeze, Vhe = us.seal, b1 = {}, $1 = {}, Ghe = !g1.ActiveXObject && "ActiveXObject" in g1, Na, JT = function(r) {
  return function() {
    return r(this, arguments.length ? arguments[0] : void 0);
  };
}, QT = Lhe("WeakMap", JT, qT), Ei = QT.prototype, vu = hu(Ei.set), Khe = function() {
  return Bhe && zhe(function() {
    var r = XT([]);
    return vu(new QT(), r, 1), !YT(r);
  });
};
if (Whe) if (Ghe) {
  Na = qT.getConstructor(JT, "WeakMap", !0), jhe.enable();
  var _1 = hu(Ei.delete), Ys = hu(Ei.has), w1 = hu(Ei.get);
  m1(Ei, {
    delete: function(r) {
      if (Gs(r) && !qs(r)) {
        var i = Ks(this);
        return i.frozen || (i.frozen = new Na()), _1(this, r) || i.frozen.delete(r);
      }
      return _1(this, r);
    },
    has: function(i) {
      if (Gs(i) && !qs(i)) {
        var e = Ks(this);
        return e.frozen || (e.frozen = new Na()), Ys(this, i) || e.frozen.has(i);
      }
      return Ys(this, i);
    },
    get: function(i) {
      if (Gs(i) && !qs(i)) {
        var e = Ks(this);
        return e.frozen || (e.frozen = new Na()), Ys(this, i) ? w1(this, i) : e.frozen.get(i);
      }
      return w1(this, i);
    },
    set: function(i, e) {
      if (Gs(i) && !qs(i)) {
        var t = Ks(this);
        t.frozen || (t.frozen = new Na()), Ys(this, i) ? vu(this, i, e) : t.frozen.set(i, e);
      } else vu(this, i, e);
      return this;
    }
  });
} else Khe() && m1(Ei, {
  set: function(i, e) {
    var t;
    return Hhe(i) && (YT(i) ? t = b1 : Uhe(i) && (t = $1)), vu(this, i, e), t === b1 && XT(i), t === $1 && Vhe(i), this;
  }
});
var qhe = me, Yhe = qhe.WeakMap, Xhe = Yhe, Jhe = Xhe, Qhe = Jhe, Xa = /* @__PURE__ */ Y(Qhe);
function Re(r, i, e, t) {
  if (typeof i == "function" ? r !== i || !t : !i.has(r)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? t : e === "a" ? t.call(r) : t ? t.value : i.get(r);
}
function Th(r, i, e, t, n) {
  if (typeof i == "function" ? r !== i || !0 : !i.has(r)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i.set(r, e), e;
}
function Ph(r, i) {
  var e = typeof mn < "u" && ai(r) || r["@@iterator"];
  if (!e) {
    if (Te(r) || (e = Zhe(r)) || i) {
      e && (r = e);
      var t = 0, n = function() {
      };
      return { s: n, n: function() {
        return t >= r.length ? { done: !0 } : { done: !1, value: r[t++] };
      }, e: function(l) {
        throw l;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, s;
  return { s: function() {
    e = e.call(r);
  }, n: function() {
    var l = e.next();
    return a = l.done, l;
  }, e: function(l) {
    o = !0, s = l;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (o) throw s;
    }
  } };
}
function Zhe(r, i) {
  var e;
  if (r) {
    if (typeof r == "string") return E1(r, i);
    var t = mt(e = Object.prototype.toString.call(r)).call(e, 8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return ii(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return E1(r, i);
  }
}
function E1(r, i) {
  (i == null || i > r.length) && (i = r.length);
  for (var e = 0, t = new Array(i); e < i; e++) t[e] = r[e];
  return t;
}
var En, Jt, qr, Yr, pu;
function S1(r, i) {
  var e = new Sn(), t = Ph(i), n;
  try {
    for (t.s(); !(n = t.n()).done; ) {
      var a = n.value;
      r.has(a) || e.add(a);
    }
  } catch (o) {
    t.e(o);
  } finally {
    t.f();
  }
  return e;
}
var O1 = /* @__PURE__ */ (function() {
  function r() {
    M(this, r), En.set(this, new Sn()), Jt.set(this, new Sn());
  }
  return N(r, [{
    key: "size",
    get: function() {
      return Re(this, Jt, "f").size;
    }
  }, {
    key: "add",
    value: function() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      for (var a = 0, o = t; a < o.length; a++) {
        var s = o[a];
        Re(this, Jt, "f").add(s);
      }
    }
  }, {
    key: "delete",
    value: function() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      for (var a = 0, o = t; a < o.length; a++) {
        var s = o[a];
        Re(this, Jt, "f").delete(s);
      }
    }
  }, {
    key: "clear",
    value: function() {
      Re(this, Jt, "f").clear();
    }
  }, {
    key: "getSelection",
    value: function() {
      return mr(Re(this, Jt, "f"));
    }
  }, {
    key: "getChanges",
    value: function() {
      return {
        added: mr(S1(Re(this, En, "f"), Re(this, Jt, "f"))),
        deleted: mr(S1(Re(this, Jt, "f"), Re(this, En, "f"))),
        previous: mr(new Sn(Re(this, En, "f"))),
        current: mr(new Sn(Re(this, Jt, "f")))
      };
    }
  }, {
    key: "commit",
    value: function() {
      var e = this.getChanges();
      Th(this, En, Re(this, Jt, "f")), Th(this, Jt, new Sn(Re(this, En, "f")));
      var t = Ph(e.added), n;
      try {
        for (t.s(); !(n = t.n()).done; ) {
          var a = n.value;
          a.select();
        }
      } catch (l) {
        t.e(l);
      } finally {
        t.f();
      }
      var o = Ph(e.deleted), s;
      try {
        for (o.s(); !(s = o.n()).done; ) {
          var u = s.value;
          u.unselect();
        }
      } catch (l) {
        o.e(l);
      } finally {
        o.f();
      }
      return e;
    }
  }]), r;
})();
En = new Xa(), Jt = new Xa();
var eve = /* @__PURE__ */ (function() {
  function r() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    M(this, r), qr.set(this, new O1()), Yr.set(this, new O1()), pu.set(this, void 0), Th(this, pu, i);
  }
  return N(r, [{
    key: "sizeNodes",
    get: function() {
      return Re(this, qr, "f").size;
    }
  }, {
    key: "sizeEdges",
    get: function() {
      return Re(this, Yr, "f").size;
    }
  }, {
    key: "getNodes",
    value: function() {
      return Re(this, qr, "f").getSelection();
    }
  }, {
    key: "getEdges",
    value: function() {
      return Re(this, Yr, "f").getSelection();
    }
  }, {
    key: "addNodes",
    value: function() {
      var e;
      (e = Re(this, qr, "f")).add.apply(e, arguments);
    }
  }, {
    key: "addEdges",
    value: function() {
      var e;
      (e = Re(this, Yr, "f")).add.apply(e, arguments);
    }
  }, {
    key: "deleteNodes",
    value: function(e) {
      Re(this, qr, "f").delete(e);
    }
  }, {
    key: "deleteEdges",
    value: function(e) {
      Re(this, Yr, "f").delete(e);
    }
  }, {
    key: "clear",
    value: function() {
      Re(this, qr, "f").clear(), Re(this, Yr, "f").clear();
    }
  }, {
    key: "commit",
    value: function() {
      for (var e, t, n = {
        nodes: Re(this, qr, "f").commit(),
        edges: Re(this, Yr, "f").commit()
      }, a = arguments.length, o = new Array(a), s = 0; s < a; s++)
        o[s] = arguments[s];
      return (e = Re(this, pu, "f")).call.apply(e, Fv(t = [this, n]).call(t, o)), n;
    }
  }]), r;
})();
qr = new Xa(), Yr = new Xa(), pu = new Xa();
function T1(r, i) {
  var e = typeof mn < "u" && ai(r) || r["@@iterator"];
  if (!e) {
    if (Te(r) || (e = tve(r)) || i) {
      e && (r = e);
      var t = 0, n = function() {
      };
      return { s: n, n: function() {
        return t >= r.length ? { done: !0 } : { done: !1, value: r[t++] };
      }, e: function(l) {
        throw l;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, s;
  return { s: function() {
    e = e.call(r);
  }, n: function() {
    var l = e.next();
    return a = l.done, l;
  }, e: function(l) {
    o = !0, s = l;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (o) throw s;
    }
  } };
}
function tve(r, i) {
  var e;
  if (r) {
    if (typeof r == "string") return P1(r, i);
    var t = mt(e = Object.prototype.toString.call(r)).call(e, 8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return ii(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return P1(r, i);
  }
}
function P1(r, i) {
  (i == null || i > r.length) && (i = r.length);
  for (var e = 0, t = new Array(i); e < i; e++) t[e] = r[e];
  return t;
}
var rve = /* @__PURE__ */ (function() {
  function r(i, e) {
    var t = this;
    M(this, r), this.body = i, this.canvas = e, this._selectionAccumulator = new eve(), this.hoverObj = {
      nodes: {},
      edges: {}
    }, this.options = {}, this.defaultOptions = {
      multiselect: !1,
      selectable: !0,
      selectConnectedEdges: !0,
      hoverConnectedEdges: !0
    }, tt(this.options, this.defaultOptions), this.body.emitter.on("_dataChanged", function() {
      t.updateSelection();
    });
  }
  return N(r, [{
    key: "setOptions",
    value: function(e) {
      if (e !== void 0) {
        var t = ["multiselect", "hoverConnectedEdges", "selectable", "selectConnectedEdges"];
        Pa(t, this.options, e);
      }
    }
    /**
     * handles the selection part of the tap;
     *
     * @param {{x: number, y: number}} pointer
     * @returns {boolean}
     */
  }, {
    key: "selectOnPoint",
    value: function(e) {
      var t = !1;
      if (this.options.selectable === !0) {
        var n = this.getNodeAt(e) || this.getEdgeAt(e);
        this.unselectAll(), n !== void 0 && (t = this.selectObject(n)), this.body.emitter.emit("_requestRedraw");
      }
      return t;
    }
    /**
     *
     * @param {{x: number, y: number}} pointer
     * @returns {boolean}
     */
  }, {
    key: "selectAdditionalOnPoint",
    value: function(e) {
      var t = !1;
      if (this.options.selectable === !0) {
        var n = this.getNodeAt(e) || this.getEdgeAt(e);
        n !== void 0 && (t = !0, n.isSelected() === !0 ? this.deselectObject(n) : this.selectObject(n), this.body.emitter.emit("_requestRedraw"));
      }
      return t;
    }
    /**
     * Create an object containing the standard fields for an event.
     *
     * @param {Event} event
     * @param {{x: number, y: number}} pointer Object with the x and y screen coordinates of the mouse
     * @returns {{}}
     * @private
     */
  }, {
    key: "_initBaseEvent",
    value: function(e, t) {
      var n = {};
      return n.pointer = {
        DOM: {
          x: t.x,
          y: t.y
        },
        canvas: this.canvas.DOMtoCanvas(t)
      }, n.event = e, n;
    }
    /**
     * Generate an event which the user can catch.
     *
     * This adds some extra data to the event with respect to cursor position and
     * selected nodes and edges.
     *
     * @param {string} eventType                          Name of event to send
     * @param {Event}  event
     * @param {{x: number, y: number}} pointer            Object with the x and y screen coordinates of the mouse
     * @param {object | undefined} oldSelection             If present, selection state before event occured
     * @param {boolean|undefined} [emptySelection=false]  Indicate if selection data should be passed
     */
  }, {
    key: "generateClickEvent",
    value: function(e, t, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, s = this._initBaseEvent(t, n);
      if (o === !0)
        s.nodes = [], s.edges = [];
      else {
        var u = this.getSelection();
        s.nodes = u.nodes, s.edges = u.edges;
      }
      a !== void 0 && (s.previousSelection = a), e == "click" && (s.items = this.getClickedItems(n)), t.controlEdge !== void 0 && (s.controlEdge = t.controlEdge), this.body.emitter.emit(e, s);
    }
    /**
     *
     * @param {object} obj
     * @param {boolean} [highlightEdges=this.options.selectConnectedEdges]
     * @returns {boolean}
     */
  }, {
    key: "selectObject",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.selectConnectedEdges;
      if (e !== void 0) {
        if (e instanceof Wt) {
          if (t === !0) {
            var n;
            (n = this._selectionAccumulator).addEdges.apply(n, mr(e.edges));
          }
          this._selectionAccumulator.addNodes(e);
        } else
          this._selectionAccumulator.addEdges(e);
        return !0;
      }
      return !1;
    }
    /**
     *
     * @param {object} obj
     */
  }, {
    key: "deselectObject",
    value: function(e) {
      e.isSelected() === !0 && (e.selected = !1, this._removeFromSelection(e));
    }
    /**
     * retrieve all nodes overlapping with given object
     *
     * @param {object} object  An object with parameters left, top, right, bottom
     * @returns {number[]}   An array with id's of the overlapping nodes
     * @private
     */
  }, {
    key: "_getAllNodesOverlappingWith",
    value: function(e) {
      for (var t = [], n = this.body.nodes, a = 0; a < this.body.nodeIndices.length; a++) {
        var o = this.body.nodeIndices[a];
        n[o].isOverlappingWith(e) && t.push(o);
      }
      return t;
    }
    /**
     * Return a position object in canvasspace from a single point in screenspace
     *
     * @param {{x: number, y: number}} pointer
     * @returns {{left: number, top: number, right: number, bottom: number}}
     * @private
     */
  }, {
    key: "_pointerToPositionObject",
    value: function(e) {
      var t = this.canvas.DOMtoCanvas(e);
      return {
        left: t.x - 1,
        top: t.y + 1,
        right: t.x + 1,
        bottom: t.y - 1
      };
    }
    /**
     * Get the top node at the passed point (like a click)
     *
     * @param {{x: number, y: number}} pointer
     * @param {boolean} [returnNode=true]
     * @returns {Node | undefined} node
     */
  }, {
    key: "getNodeAt",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = this._pointerToPositionObject(e), a = this._getAllNodesOverlappingWith(n);
      if (a.length > 0)
        return t === !0 ? this.body.nodes[a[a.length - 1]] : a[a.length - 1];
    }
    /**
     * retrieve all edges overlapping with given object, selector is around center
     *
     * @param {object} object  An object with parameters left, top, right, bottom
     * @param {number[]} overlappingEdges An array with id's of the overlapping nodes
     * @private
     */
  }, {
    key: "_getEdgesOverlappingWith",
    value: function(e, t) {
      for (var n = this.body.edges, a = 0; a < this.body.edgeIndices.length; a++) {
        var o = this.body.edgeIndices[a];
        n[o].isOverlappingWith(e) && t.push(o);
      }
    }
    /**
     * retrieve all nodes overlapping with given object
     *
     * @param {object} object  An object with parameters left, top, right, bottom
     * @returns {number[]}   An array with id's of the overlapping nodes
     * @private
     */
  }, {
    key: "_getAllEdgesOverlappingWith",
    value: function(e) {
      var t = [];
      return this._getEdgesOverlappingWith(e, t), t;
    }
    /**
     * Get the edges nearest to the passed point (like a click)
     *
     * @param {{x: number, y: number}} pointer
     * @param {boolean} [returnEdge=true]
     * @returns {Edge | undefined} node
     */
  }, {
    key: "getEdgeAt",
    value: function(e) {
      for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = this.canvas.DOMtoCanvas(e), a = 10, o = null, s = this.body.edges, u = 0; u < this.body.edgeIndices.length; u++) {
        var l = this.body.edgeIndices[u], c = s[l];
        if (c.connected) {
          var d = c.from.x, f = c.from.y, h = c.to.x, v = c.to.y, p = c.edgeType.getDistanceToEdge(d, f, h, v, n.x, n.y);
          p < a && (o = l, a = p);
        }
      }
      if (o !== null)
        return t === !0 ? this.body.edges[o] : o;
    }
    /**
     * Add object to the selection array.
     *
     * @param {object} obj
     * @private
     */
  }, {
    key: "_addToHover",
    value: function(e) {
      e instanceof Wt ? this.hoverObj.nodes[e.id] = e : this.hoverObj.edges[e.id] = e;
    }
    /**
     * Remove a single option from selection.
     *
     * @param {object} obj
     * @private
     */
  }, {
    key: "_removeFromSelection",
    value: function(e) {
      if (e instanceof Wt) {
        var t;
        this._selectionAccumulator.deleteNodes(e), (t = this._selectionAccumulator).deleteEdges.apply(t, mr(e.edges));
      } else
        this._selectionAccumulator.deleteEdges(e);
    }
    /**
     * Unselect all nodes and edges.
     */
  }, {
    key: "unselectAll",
    value: function() {
      this._selectionAccumulator.clear();
    }
    /**
     * return the number of selected nodes
     *
     * @returns {number}
     */
  }, {
    key: "getSelectedNodeCount",
    value: function() {
      return this._selectionAccumulator.sizeNodes;
    }
    /**
     * return the number of selected edges
     *
     * @returns {number}
     */
  }, {
    key: "getSelectedEdgeCount",
    value: function() {
      return this._selectionAccumulator.sizeEdges;
    }
    /**
     * select the edges connected to the node that is being selected
     *
     * @param {Node} node
     * @private
     */
  }, {
    key: "_hoverConnectedEdges",
    value: function(e) {
      for (var t = 0; t < e.edges.length; t++) {
        var n = e.edges[t];
        n.hover = !0, this._addToHover(n);
      }
    }
    /**
     * Remove the highlight from a node or edge, in response to mouse movement
     *
     * @param {Event}  event
     * @param {{x: number, y: number}} pointer object with the x and y screen coordinates of the mouse
     * @param {Node|vis.Edge} object
     * @private
     */
  }, {
    key: "emitBlurEvent",
    value: function(e, t, n) {
      var a = this._initBaseEvent(e, t);
      n.hover === !0 && (n.hover = !1, n instanceof Wt ? (a.node = n.id, this.body.emitter.emit("blurNode", a)) : (a.edge = n.id, this.body.emitter.emit("blurEdge", a)));
    }
    /**
     * Create the highlight for a node or edge, in response to mouse movement
     *
     * @param {Event}  event
     * @param {{x: number, y: number}} pointer object with the x and y screen coordinates of the mouse
     * @param {Node|vis.Edge} object
     * @returns {boolean} hoverChanged
     * @private
     */
  }, {
    key: "emitHoverEvent",
    value: function(e, t, n) {
      var a = this._initBaseEvent(e, t), o = !1;
      return n.hover === !1 && (n.hover = !0, this._addToHover(n), o = !0, n instanceof Wt ? (a.node = n.id, this.body.emitter.emit("hoverNode", a)) : (a.edge = n.id, this.body.emitter.emit("hoverEdge", a))), o;
    }
    /**
     * Perform actions in response to a mouse movement.
     *
     * @param {Event}  event
     * @param {{x: number, y: number}} pointer | object with the x and y screen coordinates of the mouse
     */
  }, {
    key: "hoverObject",
    value: function(e, t) {
      var n = this.getNodeAt(t);
      n === void 0 && (n = this.getEdgeAt(t));
      var a = !1;
      for (var o in this.hoverObj.nodes)
        Object.prototype.hasOwnProperty.call(this.hoverObj.nodes, o) && (n === void 0 || n instanceof Wt && n.id != o || n instanceof ji) && (this.emitBlurEvent(e, t, this.hoverObj.nodes[o]), delete this.hoverObj.nodes[o], a = !0);
      for (var s in this.hoverObj.edges)
        Object.prototype.hasOwnProperty.call(this.hoverObj.edges, s) && (a === !0 ? (this.hoverObj.edges[s].hover = !1, delete this.hoverObj.edges[s]) : (n === void 0 || n instanceof ji && n.id != s || n instanceof Wt && !n.hover) && (this.emitBlurEvent(e, t, this.hoverObj.edges[s]), delete this.hoverObj.edges[s], a = !0));
      if (n !== void 0) {
        var u = We(this.hoverObj.edges).length, l = We(this.hoverObj.nodes).length, c = n instanceof ji && u === 0 && l === 0, d = n instanceof Wt && u === 0 && l === 0;
        (a || c || d) && (a = this.emitHoverEvent(e, t, n)), n instanceof Wt && this.options.hoverConnectedEdges === !0 && this._hoverConnectedEdges(n);
      }
      a === !0 && this.body.emitter.emit("_requestRedraw");
    }
    /**
     * Commit the selection changes but don't emit any events.
     */
  }, {
    key: "commitWithoutEmitting",
    value: function() {
      this._selectionAccumulator.commit();
    }
    /**
     * Select and deselect nodes depending current selection change.
     *
     * For changing nodes, select/deselect events are fired.
     *
     * NOTE: For a given edge, if one connecting node is deselected and with the
     * same click the other node is selected, no events for the edge will fire. It
     * was selected and it will remain selected.
     *
     * @param {{x: number, y: number}} pointer - The x and y coordinates of the
     * click, tap, dragend… that triggered this.
     * @param {UIEvent} event - The event that triggered this.
     */
  }, {
    key: "commitAndEmit",
    value: function(e, t) {
      var n = !1, a = this._selectionAccumulator.commit(), o = {
        nodes: a.nodes.previous,
        edges: a.edges.previous
      };
      a.edges.deleted.length > 0 && (this.generateClickEvent("deselectEdge", t, e, o), n = !0), a.nodes.deleted.length > 0 && (this.generateClickEvent("deselectNode", t, e, o), n = !0), a.nodes.added.length > 0 && (this.generateClickEvent("selectNode", t, e), n = !0), a.edges.added.length > 0 && (this.generateClickEvent("selectEdge", t, e), n = !0), n === !0 && this.generateClickEvent("select", t, e);
    }
    /**
     * Retrieve the currently selected node and edge ids.
     *
     * @returns {{nodes: Array.<string>, edges: Array.<string>}} Arrays with the
     * ids of the selected nodes and edges.
     */
  }, {
    key: "getSelection",
    value: function() {
      return {
        nodes: this.getSelectedNodeIds(),
        edges: this.getSelectedEdgeIds()
      };
    }
    /**
     * Retrieve the currently selected nodes.
     *
     * @returns {Array} An array with selected nodes.
     */
  }, {
    key: "getSelectedNodes",
    value: function() {
      return this._selectionAccumulator.getNodes();
    }
    /**
     * Retrieve the currently selected edges.
     *
     * @returns {Array} An array with selected edges.
     */
  }, {
    key: "getSelectedEdges",
    value: function() {
      return this._selectionAccumulator.getEdges();
    }
    /**
     * Retrieve the currently selected node ids.
     *
     * @returns {Array} An array with the ids of the selected nodes.
     */
  }, {
    key: "getSelectedNodeIds",
    value: function() {
      var e;
      return Xi(e = this._selectionAccumulator.getNodes()).call(e, function(t) {
        return t.id;
      });
    }
    /**
     * Retrieve the currently selected edge ids.
     *
     * @returns {Array} An array with the ids of the selected edges.
     */
  }, {
    key: "getSelectedEdgeIds",
    value: function() {
      var e;
      return Xi(e = this._selectionAccumulator.getEdges()).call(e, function(t) {
        return t.id;
      });
    }
    /**
     * Updates the current selection
     *
     * @param {{nodes: Array.<string>, edges: Array.<string>}} selection
     * @param {object} options                                 Options
     */
  }, {
    key: "setSelection",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!e || !e.nodes && !e.edges)
        throw new TypeError("Selection must be an object with nodes and/or edges properties");
      if ((t.unselectAll || t.unselectAll === void 0) && this.unselectAll(), e.nodes) {
        var n = T1(e.nodes), a;
        try {
          for (n.s(); !(a = n.n()).done; ) {
            var o = a.value, s = this.body.nodes[o];
            if (!s)
              throw new RangeError('Node with id "' + o + '" not found');
            this.selectObject(s, t.highlightEdges);
          }
        } catch (f) {
          n.e(f);
        } finally {
          n.f();
        }
      }
      if (e.edges) {
        var u = T1(e.edges), l;
        try {
          for (u.s(); !(l = u.n()).done; ) {
            var c = l.value, d = this.body.edges[c];
            if (!d)
              throw new RangeError('Edge with id "' + c + '" not found');
            this.selectObject(d);
          }
        } catch (f) {
          u.e(f);
        } finally {
          u.f();
        }
      }
      this.body.emitter.emit("_requestRedraw"), this._selectionAccumulator.commit();
    }
    /**
     * select zero or more nodes with the option to highlight edges
     *
     * @param {number[] | string[]} selection     An array with the ids of the
     *                                            selected nodes.
     * @param {boolean} [highlightEdges]
     */
  }, {
    key: "selectNodes",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!e || e.length === void 0) throw "Selection must be an array with ids";
      this.setSelection({
        nodes: e
      }, {
        highlightEdges: t
      });
    }
    /**
     * select zero or more edges
     *
     * @param {number[] | string[]} selection     An array with the ids of the
     *                                            selected nodes.
     */
  }, {
    key: "selectEdges",
    value: function(e) {
      if (!e || e.length === void 0) throw "Selection must be an array with ids";
      this.setSelection({
        edges: e
      });
    }
    /**
     * Validate the selection: remove ids of nodes which no longer exist
     *
     * @private
     */
  }, {
    key: "updateSelection",
    value: function() {
      for (var e in this._selectionAccumulator.getNodes())
        Object.prototype.hasOwnProperty.call(this.body.nodes, e.id) || this._selectionAccumulator.deleteNodes(e);
      for (var t in this._selectionAccumulator.getEdges())
        Object.prototype.hasOwnProperty.call(this.body.edges, t.id) || this._selectionAccumulator.deleteEdges(t);
    }
    /**
     * Determine all the visual elements clicked which are on the given point.
     *
     * All elements are returned; this includes nodes, edges and their labels.
     * The order returned is from highest to lowest, i.e. element 0 of the return
     * value is the topmost item clicked on.
     *
     * The return value consists of an array of the following possible elements:
     *
     * - `{nodeId:number}`             - node with given id clicked on
     * - `{nodeId:number, labelId:0}`  - label of node with given id clicked on
     * - `{edgeId:number}`             - edge with given id clicked on
     * - `{edge:number, labelId:0}`    - label of edge with given id clicked on
     *
     * ## NOTES
     *
     * - Currently, there is only one label associated with a node or an edge,
     *   but this is expected to change somewhere in the future.
     * - Since there is no z-indexing yet, it is not really possible to set the nodes and
     *   edges in the correct order. For the time being, nodes come first.
     *
     * @param {point} pointer  mouse position in screen coordinates
     * @returns {Array.<nodeClickItem|nodeLabelClickItem|edgeClickItem|edgeLabelClickItem>}
     * @private
     */
  }, {
    key: "getClickedItems",
    value: function(e) {
      for (var t = this.canvas.DOMtoCanvas(e), n = [], a = this.body.nodeIndices, o = this.body.nodes, s = a.length - 1; s >= 0; s--) {
        var u = o[a[s]], l = u.getItemsOnPoint(t);
        n.push.apply(n, l);
      }
      for (var c = this.body.edgeIndices, d = this.body.edges, f = c.length - 1; f >= 0; f--) {
        var h = d[c[f]], v = h.getItemsOnPoint(t);
        n.push.apply(n, v);
      }
      return n;
    }
  }]), r;
})(), I1 = DS, nve = Math.floor, Ih = function(r, i) {
  var e = r.length, t = nve(e / 2);
  return e < 8 ? ive(r, i) : ave(
    r,
    Ih(I1(r, 0, t), i),
    Ih(I1(r, t), i),
    i
  );
}, ive = function(r, i) {
  for (var e = r.length, t = 1, n, a; t < e; ) {
    for (a = t, n = r[t]; a && i(r[a - 1], n) > 0; )
      r[a] = r[--a];
    a !== t++ && (r[a] = n);
  }
  return r;
}, ave = function(r, i, e, t) {
  for (var n = i.length, a = e.length, o = 0, s = 0; o < n || s < a; )
    r[o + s] = o < n && s < a ? t(i[o], e[s]) <= 0 ? i[o++] : e[s++] : o < n ? i[o++] : e[s++];
  return r;
}, ove = Ih, sve = zo, k1 = sve.match(/firefox\/(\d+)/i), uve = !!k1 && +k1[1], lve = zo, cve = /MSIE|Trident/.test(lve), dve = zo, C1 = dve.match(/AppleWebKit\/(\d+)\./), fve = !!C1 && +C1[1], hve = oe, ZT = be, vve = ti, pve = Lt, x1 = ir, yve = $O, R1 = Ir, lp = ge, gve = ove, mve = Oa, A1 = uve, bve = cve, D1 = Wo, M1 = fve, en = [], N1 = ZT(en.sort), $ve = ZT(en.push), _ve = lp(function() {
  en.sort(void 0);
}), wve = lp(function() {
  en.sort(null);
}), Eve = mve("sort"), eP = !lp(function() {
  if (D1) return D1 < 70;
  if (!(A1 && A1 > 3)) {
    if (bve) return !0;
    if (M1) return M1 < 603;
    var r = "", i, e, t, n;
    for (i = 65; i < 76; i++) {
      switch (e = String.fromCharCode(i), i) {
        case 66:
        case 69:
        case 70:
        case 72:
          t = 3;
          break;
        case 68:
        case 71:
          t = 4;
          break;
        default:
          t = 2;
      }
      for (n = 0; n < 47; n++)
        en.push({ k: e + n, v: t });
    }
    for (en.sort(function(a, o) {
      return o.v - a.v;
    }), n = 0; n < en.length; n++)
      e = en[n].k.charAt(0), r.charAt(r.length - 1) !== e && (r += e);
    return r !== "DGBEFHACIJK";
  }
}), Sve = _ve || !wve || !Eve || !eP, Ove = function(r) {
  return function(i, e) {
    return e === void 0 ? -1 : i === void 0 ? 1 : r !== void 0 ? +r(i, e) || 0 : R1(i) > R1(e) ? 1 : -1;
  };
};
hve({ target: "Array", proto: !0, forced: Sve }, {
  sort: function(i) {
    i !== void 0 && vve(i);
    var e = pve(this);
    if (eP) return i === void 0 ? N1(e) : N1(e, i);
    var t = [], n = x1(e), a, o;
    for (o = 0; o < n; o++)
      o in e && $ve(t, e[o]);
    for (gve(t, Ove(i)), a = x1(t), o = 0; o < a; ) e[o] = t[o++];
    for (; o < n; ) yve(e, o++);
    return e;
  }
});
var Tve = vt, Pve = Tve("Array").sort, Ive = Je, kve = Pve, of = Array.prototype, Cve = function(r) {
  var i = r.sort;
  return r === of || Ive(of, r) && i === of.sort ? kve : i;
}, xve = Cve, Rve = xve, Ave = Rve, Ja = /* @__PURE__ */ Y(Ave), Dve = ti, Mve = Lt, Nve = $l, Fve = ir, Bve = TypeError, jve = function(r) {
  return function(i, e, t, n) {
    Dve(e);
    var a = Mve(i), o = Nve(a), s = Fve(a), u = r ? s - 1 : 0, l = r ? -1 : 1;
    if (t < 2) for (; ; ) {
      if (u in o) {
        n = o[u], u += l;
        break;
      }
      if (u += l, r ? u < 0 : s <= u)
        throw new Bve("Reduce of empty array with no initial value");
    }
    for (; r ? u >= 0 : s > u; u += l) u in o && (n = e(n, o[u], u, a));
    return n;
  };
}, Lve = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: jve(!1)
}, zve = Ge, Wve = Kr, Hve = Wve(zve.process) === "process", Uve = oe, Vve = Lve.left, Gve = Oa, F1 = Wo, Kve = Hve, qve = !Kve && F1 > 79 && F1 < 83, Yve = qve || !Gve("reduce");
Uve({ target: "Array", proto: !0, forced: Yve }, {
  reduce: function(i) {
    var e = arguments.length;
    return Vve(this, i, e, e > 1 ? arguments[1] : void 0);
  }
});
var Xve = vt, Jve = Xve("Array").reduce, Qve = Je, Zve = Jve, sf = Array.prototype, epe = function(r) {
  var i = r.reduce;
  return r === sf || Qve(sf, r) && i === sf.reduce ? Zve : i;
}, tpe = epe, rpe = tpe, npe = rpe, tP = /* @__PURE__ */ Y(npe);
function rP(r) {
  var i = ipe();
  return function() {
    var t = V(r), n;
    if (i) {
      var a = V(this).constructor;
      n = T(t, arguments, a);
    } else
      n = t.apply(this, arguments);
    return Pe(this, n);
  };
}
function ipe() {
  if (typeof Reflect > "u" || !T || T.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(T(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var nP = /* @__PURE__ */ (function() {
  function r() {
    M(this, r);
  }
  return N(r, [{
    key: "abstract",
    value: (
      /**
       * @ignore
       */
      function() {
        throw new Error("Can't instantiate abstract class!");
      }
    )
    /**
     * This is a dummy call which is used to suppress the jsdoc errors of type:
     *
     *   "'param' is assigned a value but never used"
     *
     * @ignore
     */
  }, {
    key: "fake_use",
    value: function() {
    }
    /**
     * Type to use to translate dynamic curves to, in the case of hierarchical layout.
     * Dynamic curves do not work for these.
     *
     * The value should be perpendicular to the actual direction of the layout.
     *
     * @returns {string} Direction, either 'vertical' or 'horizontal'
     */
  }, {
    key: "curveType",
    value: function() {
      return this.abstract();
    }
    /**
     * Return the value of the coordinate that is not fixed for this direction.
     *
     * @param {Node} node The node to read
     * @returns {number} Value of the unfixed coordinate
     */
  }, {
    key: "getPosition",
    value: function(e) {
      return this.fake_use(e), this.abstract();
    }
    /**
     * Set the value of the coordinate that is not fixed for this direction.
     *
     * @param {Node} node The node to adjust
     * @param {number} position
     * @param {number} [level] if specified, the hierarchy level that this node should be fixed to
     */
  }, {
    key: "setPosition",
    value: function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
      this.fake_use(e, t, n), this.abstract();
    }
    /**
     * Get the width of a tree.
     *
     * A `tree` here is a subset of nodes within the network which are not connected to other nodes,
     * only among themselves. In essence, it is a sub-network.
     *
     * @param {number} index The index number of a tree
     * @returns {number} the width of a tree in the view coordinates
     */
  }, {
    key: "getTreeSize",
    value: function(e) {
      return this.fake_use(e), this.abstract();
    }
    /**
     * Sort array of nodes on the unfixed coordinates.
     *
     * Note:** chrome has non-stable sorting implementation, which
     * has a tendency to change the order of the array items,
     * even if the custom sort function returns 0.
     *
     * For this reason, an external sort implementation is used,
     * which has the added benefit of being faster than the standard
     * platforms implementation. This has been verified on `node.js`,
     * `firefox` and `chrome` (all linux).
     *
     * @param {Array.<Node>} nodeArray array of nodes to sort
     */
  }, {
    key: "sort",
    value: function(e) {
      this.fake_use(e), this.abstract();
    }
    /**
     * Assign the fixed coordinate of the node to the given level
     *
     * @param {Node} node The node to adjust
     * @param {number} level The level to fix to
     */
  }, {
    key: "fix",
    value: function(e, t) {
      this.fake_use(e, t), this.abstract();
    }
    /**
     * Add an offset to the unfixed coordinate of the given node.
     *
     * @param {NodeId} nodeId Id of the node to adjust
     * @param {number} diff Offset to add to the unfixed coordinate
     */
  }, {
    key: "shift",
    value: function(e, t) {
      this.fake_use(e, t), this.abstract();
    }
  }]), r;
})(), ape = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = rP(e);
  function e(t) {
    var n;
    return M(this, e), n = i.call(this), n.layout = t, n;
  }
  return N(e, [{
    key: "curveType",
    value: function() {
      return "horizontal";
    }
    /** @inheritDoc */
  }, {
    key: "getPosition",
    value: function(n) {
      return n.x;
    }
    /** @inheritDoc */
  }, {
    key: "setPosition",
    value: function(n, a) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
      o !== void 0 && this.layout.hierarchical.addToOrdering(n, o), n.x = a;
    }
    /** @inheritDoc */
  }, {
    key: "getTreeSize",
    value: function(n) {
      var a = this.layout.hierarchical.getTreeSize(this.layout.body.nodes, n);
      return {
        min: a.min_x,
        max: a.max_x
      };
    }
    /** @inheritDoc */
  }, {
    key: "sort",
    value: function(n) {
      Ja(n).call(n, function(a, o) {
        return a.x - o.x;
      });
    }
    /** @inheritDoc */
  }, {
    key: "fix",
    value: function(n, a) {
      n.y = this.layout.options.hierarchical.levelSeparation * a, n.options.fixed.y = !0;
    }
    /** @inheritDoc */
  }, {
    key: "shift",
    value: function(n, a) {
      this.layout.body.nodes[n].x += a;
    }
  }]), e;
})(nP), ope = /* @__PURE__ */ (function(r) {
  $e(e, r);
  var i = rP(e);
  function e(t) {
    var n;
    return M(this, e), n = i.call(this), n.layout = t, n;
  }
  return N(e, [{
    key: "curveType",
    value: function() {
      return "vertical";
    }
    /** @inheritDoc */
  }, {
    key: "getPosition",
    value: function(n) {
      return n.y;
    }
    /** @inheritDoc */
  }, {
    key: "setPosition",
    value: function(n, a) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
      o !== void 0 && this.layout.hierarchical.addToOrdering(n, o), n.y = a;
    }
    /** @inheritDoc */
  }, {
    key: "getTreeSize",
    value: function(n) {
      var a = this.layout.hierarchical.getTreeSize(this.layout.body.nodes, n);
      return {
        min: a.min_y,
        max: a.max_y
      };
    }
    /** @inheritDoc */
  }, {
    key: "sort",
    value: function(n) {
      Ja(n).call(n, function(a, o) {
        return a.y - o.y;
      });
    }
    /** @inheritDoc */
  }, {
    key: "fix",
    value: function(n, a) {
      n.x = this.layout.options.hierarchical.levelSeparation * a, n.options.fixed.x = !0;
    }
    /** @inheritDoc */
  }, {
    key: "shift",
    value: function(n, a) {
      this.layout.body.nodes[n].y += a;
    }
  }]), e;
})(nP), spe = oe, upe = gn.every, lpe = Oa, cpe = lpe("every");
spe({ target: "Array", proto: !0, forced: !cpe }, {
  every: function(i) {
    return upe(this, i, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var dpe = vt, fpe = dpe("Array").every, hpe = Je, vpe = fpe, uf = Array.prototype, ppe = function(r) {
  var i = r.every;
  return r === uf || hpe(uf, r) && i === uf.every ? vpe : i;
}, ype = ppe, gpe = ype, mpe = gpe, iP = /* @__PURE__ */ Y(mpe);
function bpe(r, i) {
  var e = typeof mn < "u" && ai(r) || r["@@iterator"];
  if (!e) {
    if (Te(r) || (e = $pe(r)) || i) {
      e && (r = e);
      var t = 0, n = function() {
      };
      return { s: n, n: function() {
        return t >= r.length ? { done: !0 } : { done: !1, value: r[t++] };
      }, e: function(l) {
        throw l;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, s;
  return { s: function() {
    e = e.call(r);
  }, n: function() {
    var l = e.next();
    return a = l.done, l;
  }, e: function(l) {
    o = !0, s = l;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (o) throw s;
    }
  } };
}
function $pe(r, i) {
  var e;
  if (r) {
    if (typeof r == "string") return B1(r, i);
    var t = mt(e = Object.prototype.toString.call(r)).call(e, 8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return ii(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return B1(r, i);
  }
}
function B1(r, i) {
  (i == null || i > r.length) && (i = r.length);
  for (var e = 0, t = new Array(i); e < i; e++) t[e] = r[e];
  return t;
}
function _pe(r, i) {
  var e = new Sn();
  return xe(r).call(r, function(t) {
    var n;
    xe(n = t.edges).call(n, function(a) {
      a.connected && e.add(a);
    });
  }), xe(e).call(e, function(t) {
    var n = t.from.id, a = t.to.id;
    i[n] == null && (i[n] = 0), (i[a] == null || i[n] >= i[a]) && (i[a] = i[n] + 1);
  }), i;
}
function wpe(r) {
  return aP(
    // Pick only leaves (nodes without children).
    function(i) {
      var e, t;
      return iP(
        e = Dt(
          t = i.edges
          // Take only visible nodes into account.
        ).call(t, function(n) {
          return r.has(n.toId);
        })
        // Check that all edges lead to this node (leaf).
      ).call(e, function(n) {
        return n.to === i;
      });
    },
    // Use the lowest level.
    function(i, e) {
      return e > i;
    },
    // Go against the direction of the edges.
    "from",
    r
  );
}
function Epe(r) {
  return aP(
    // Pick only roots (nodes without parents).
    function(i) {
      var e, t;
      return iP(
        e = Dt(
          t = i.edges
          // Take only visible nodes into account.
        ).call(t, function(n) {
          return r.has(n.toId);
        })
        // Check that all edges lead from this node (root).
      ).call(e, function(n) {
        return n.from === i;
      });
    },
    // Use the highest level.
    function(i, e) {
      return e < i;
    },
    // Go in the direction of the edges.
    "to",
    r
  );
}
function aP(r, i, e, t) {
  var n, a = Mn(null), o = tP(n = mr(DT(t).call(t))).call(n, function(h, v) {
    return h + 1 + v.edges.length;
  }, 0), s = e + "Id", u = e === "to" ? 1 : -1, l = bpe(t), c;
  try {
    var d = function() {
      var v = He(c.value, 2), p = v[0], y = v[1];
      if (
        // Skip if the node is not visible.
        !t.has(p) || // Skip if the node is not an entry node.
        !r(y)
      )
        return 0;
      a[p] = 0;
      for (var m = [y], b = 0, w, _ = function() {
        var j, W;
        if (!t.has(p))
          return 0;
        var B = a[w.id] + u;
        if (xe(j = Dt(W = w.edges).call(W, function(L) {
          return (
            // Ignore disconnected edges.
            L.connected && // Ignore circular edges.
            L.to !== L.from && // Ignore edges leading to the node that's currently being processed.
            L[e] !== w && // Ignore edges connecting to an invisible node.
            t.has(L.toId) && // Ignore edges connecting from an invisible node.
            t.has(L.fromId)
          );
        })).call(j, function(L) {
          var X = L[s], ue = a[X];
          (ue == null || i(B, ue)) && (a[X] = B, m.push(L[e]));
        }), b > o)
          return {
            v: {
              v: _pe(t, a)
            }
          };
        ++b;
      }, $; w = m.pop(); )
        if ($ = _(), $ !== 0 && $)
          return $.v;
    }, f;
    for (l.s(); !(c = l.n()).done; )
      if (f = d(), f !== 0 && f)
        return f.v;
  } catch (h) {
    l.e(h);
  } finally {
    l.f();
  }
  return a;
}
var Spe = /* @__PURE__ */ (function() {
  function r() {
    M(this, r), this.childrenReference = {}, this.parentReference = {}, this.trees = {}, this.distributionOrdering = {}, this.levels = {}, this.distributionIndex = {}, this.isTree = !1, this.treeIndex = -1;
  }
  return N(r, [{
    key: "addRelation",
    value: function(e, t) {
      this.childrenReference[e] === void 0 && (this.childrenReference[e] = []), this.childrenReference[e].push(t), this.parentReference[t] === void 0 && (this.parentReference[t] = []), this.parentReference[t].push(e);
    }
    /**
     * Check if the current state is for a formal tree or formal forest.
     *
     * This is the case if every node has at most one parent.
     *
     * Pre: parentReference init'ed properly for current network
     */
  }, {
    key: "checkIfTree",
    value: function() {
      for (var e in this.parentReference)
        if (this.parentReference[e].length > 1) {
          this.isTree = !1;
          return;
        }
      this.isTree = !0;
    }
    /**
     * Return the number of separate trees in the current network.
     *
     * @returns {number}
     */
  }, {
    key: "numTrees",
    value: function() {
      return this.treeIndex + 1;
    }
    /**
     * Assign a tree id to a node
     *
     * @param {Node} node
     * @param {string|number} treeId
     */
  }, {
    key: "setTreeIndex",
    value: function(e, t) {
      t !== void 0 && this.trees[e.id] === void 0 && (this.trees[e.id] = t, this.treeIndex = Math.max(t, this.treeIndex));
    }
    /**
     * Ensure level for given id is defined.
     *
     * Sets level to zero for given node id if not already present
     *
     * @param {Node.id} nodeId
     */
  }, {
    key: "ensureLevel",
    value: function(e) {
      this.levels[e] === void 0 && (this.levels[e] = 0);
    }
    /**
     * get the maximum level of a branch.
     *
     * TODO: Never entered; find a test case to test this!
     *
     * @param {Node.id} nodeId
     * @returns {number}
     */
  }, {
    key: "getMaxLevel",
    value: function(e) {
      var t = this, n = {}, a = function o(s) {
        if (n[s] !== void 0)
          return n[s];
        var u = t.levels[s];
        if (t.childrenReference[s]) {
          var l = t.childrenReference[s];
          if (l.length > 0)
            for (var c = 0; c < l.length; c++)
              u = Math.max(u, o(l[c]));
        }
        return n[s] = u, u;
      };
      return a(e);
    }
    /**
     *
     * @param {Node} nodeA
     * @param {Node} nodeB
     */
  }, {
    key: "levelDownstream",
    value: function(e, t) {
      this.levels[t.id] === void 0 && (this.levels[e.id] === void 0 && (this.levels[e.id] = 0), this.levels[t.id] = this.levels[e.id] + 1);
    }
    /**
     * Small util method to set the minimum levels of the nodes to zero.
     *
     * @param {Array.<Node>} nodes
     */
  }, {
    key: "setMinLevelToZero",
    value: function(e) {
      var t = 1e9;
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && this.levels[n] !== void 0 && (t = Math.min(this.levels[n], t));
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && this.levels[a] !== void 0 && (this.levels[a] -= t);
    }
    /**
     * Get the min and max xy-coordinates of a given tree
     *
     * @param {Array.<Node>} nodes
     * @param {number} index
     * @returns {{min_x: number, max_x: number, min_y: number, max_y: number}}
     */
  }, {
    key: "getTreeSize",
    value: function(e, t) {
      var n = 1e9, a = -1e9, o = 1e9, s = -1e9;
      for (var u in this.trees)
        if (Object.prototype.hasOwnProperty.call(this.trees, u) && this.trees[u] === t) {
          var l = e[u];
          n = Math.min(l.x, n), a = Math.max(l.x, a), o = Math.min(l.y, o), s = Math.max(l.y, s);
        }
      return {
        min_x: n,
        max_x: a,
        min_y: o,
        max_y: s
      };
    }
    /**
     * Check if two nodes have the same parent(s)
     *
     * @param {Node} node1
     * @param {Node} node2
     * @returns {boolean} true if the two nodes have a same ancestor node, false otherwise
     */
  }, {
    key: "hasSameParent",
    value: function(e, t) {
      var n = this.parentReference[e.id], a = this.parentReference[t.id];
      if (n === void 0 || a === void 0)
        return !1;
      for (var o = 0; o < n.length; o++)
        for (var s = 0; s < a.length; s++)
          if (n[o] == a[s])
            return !0;
      return !1;
    }
    /**
     * Check if two nodes are in the same tree.
     *
     * @param {Node} node1
     * @param {Node} node2
     * @returns {boolean} true if this is so, false otherwise
     */
  }, {
    key: "inSameSubNetwork",
    value: function(e, t) {
      return this.trees[e.id] === this.trees[t.id];
    }
    /**
     * Get a list of the distinct levels in the current network
     *
     * @returns {Array}
     */
  }, {
    key: "getLevels",
    value: function() {
      return We(this.distributionOrdering);
    }
    /**
     * Add a node to the ordering per level
     *
     * @param {Node} node
     * @param {number} level
     */
  }, {
    key: "addToOrdering",
    value: function(e, t) {
      this.distributionOrdering[t] === void 0 && (this.distributionOrdering[t] = []);
      var n = !1, a = this.distributionOrdering[t];
      for (var o in a)
        if (a[o] === e) {
          n = !0;
          break;
        }
      n || (this.distributionOrdering[t].push(e), this.distributionIndex[e.id] = this.distributionOrdering[t].length - 1);
    }
  }]), r;
})(), Ope = /* @__PURE__ */ (function() {
  function r(i) {
    M(this, r), this.body = i, this._resetRNG(Math.random() + ":" + Du()), this.setPhysics = !1, this.options = {}, this.optionsBackup = {
      physics: {}
    }, this.defaultOptions = {
      randomSeed: void 0,
      improvedLayout: !0,
      clusterThreshold: 150,
      hierarchical: {
        enabled: !1,
        levelSeparation: 150,
        nodeSpacing: 100,
        treeSpacing: 200,
        blockShifting: !0,
        edgeMinimization: !0,
        parentCentralization: !0,
        direction: "UD",
        // UD, DU, LR, RL
        sortMethod: "hubsize"
        // hubsize, directed
      }
    }, tt(this.options, this.defaultOptions), this.bindEventListeners();
  }
  return N(r, [{
    key: "bindEventListeners",
    value: function() {
      var e = this;
      this.body.emitter.on("_dataChanged", function() {
        e.setupHierarchicalLayout();
      }), this.body.emitter.on("_dataLoaded", function() {
        e.layoutNetwork();
      }), this.body.emitter.on("_resetHierarchicalLayout", function() {
        e.setupHierarchicalLayout();
      }), this.body.emitter.on("_adjustEdgesForHierarchicalLayout", function() {
        if (e.options.hierarchical.enabled === !0) {
          var t = e.direction.curveType();
          e.body.emitter.emit("_forceDisableDynamicCurves", t, !1);
        }
      });
    }
    /**
     *
     * @param {object} options
     * @param {object} allOptions
     * @returns {object}
     */
  }, {
    key: "setOptions",
    value: function(e, t) {
      if (e !== void 0) {
        var n = this.options.hierarchical, a = n.enabled;
        if (Pa(["randomSeed", "improvedLayout", "clusterThreshold"], this.options, e), Qt(this.options, e, "hierarchical"), e.randomSeed !== void 0 && this._resetRNG(e.randomSeed), n.enabled === !0)
          return a === !0 && this.body.emitter.emit("refresh", !0), n.direction === "RL" || n.direction === "DU" ? n.levelSeparation > 0 && (n.levelSeparation *= -1) : n.levelSeparation < 0 && (n.levelSeparation *= -1), this.setDirectionStrategy(), this.body.emitter.emit("_resetHierarchicalLayout"), this.adaptAllOptionsForHierarchicalLayout(t);
        if (a === !0)
          return this.body.emitter.emit("refresh"), Ae(t, this.optionsBackup);
      }
      return t;
    }
    /**
     * Reset the random number generator with given seed.
     *
     * @param {any} seed - The seed that will be forwarded the the RNG.
     */
  }, {
    key: "_resetRNG",
    value: function(e) {
      this.initialRandomSeed = e, this._rng = zl(this.initialRandomSeed);
    }
    /**
     *
     * @param {object} allOptions
     * @returns {object}
     */
  }, {
    key: "adaptAllOptionsForHierarchicalLayout",
    value: function(e) {
      if (this.options.hierarchical.enabled === !0) {
        var t = this.optionsBackup.physics;
        e.physics === void 0 || e.physics === !0 ? (e.physics = {
          enabled: t.enabled === void 0 ? !0 : t.enabled,
          solver: "hierarchicalRepulsion"
        }, t.enabled = t.enabled === void 0 ? !0 : t.enabled, t.solver = t.solver || "barnesHut") : Ie(e.physics) === "object" ? (t.enabled = e.physics.enabled === void 0 ? !0 : e.physics.enabled, t.solver = e.physics.solver || "barnesHut", e.physics.solver = "hierarchicalRepulsion") : e.physics !== !1 && (t.solver = "barnesHut", e.physics = {
          solver: "hierarchicalRepulsion"
        });
        var n = this.direction.curveType();
        if (e.edges === void 0)
          this.optionsBackup.edges = {
            smooth: {
              enabled: !0,
              type: "dynamic"
            }
          }, e.edges = {
            smooth: !1
          };
        else if (e.edges.smooth === void 0)
          this.optionsBackup.edges = {
            smooth: {
              enabled: !0,
              type: "dynamic"
            }
          }, e.edges.smooth = !1;
        else if (typeof e.edges.smooth == "boolean")
          this.optionsBackup.edges = {
            smooth: e.edges.smooth
          }, e.edges.smooth = {
            enabled: e.edges.smooth,
            type: n
          };
        else {
          var a = e.edges.smooth;
          a.type !== void 0 && a.type !== "dynamic" && (n = a.type), this.optionsBackup.edges = {
            smooth: {
              enabled: a.enabled === void 0 ? !0 : a.enabled,
              type: a.type === void 0 ? "dynamic" : a.type,
              roundness: a.roundness === void 0 ? 0.5 : a.roundness,
              forceDirection: a.forceDirection === void 0 ? !1 : a.forceDirection
            }
          }, e.edges.smooth = {
            enabled: a.enabled === void 0 ? !0 : a.enabled,
            type: n,
            roundness: a.roundness === void 0 ? 0.5 : a.roundness,
            forceDirection: a.forceDirection === void 0 ? !1 : a.forceDirection
          };
        }
        this.body.emitter.emit("_forceDisableDynamicCurves", n);
      }
      return e;
    }
    /**
     *
     * @param {Array.<Node>} nodesArray
     */
  }, {
    key: "positionInitially",
    value: function(e) {
      if (this.options.hierarchical.enabled !== !0) {
        this._resetRNG(this.initialRandomSeed);
        for (var t = e.length + 50, n = 0; n < e.length; n++) {
          var a = e[n], o = 2 * Math.PI * this._rng();
          a.x === void 0 && (a.x = t * Math.cos(o)), a.y === void 0 && (a.y = t * Math.sin(o));
        }
      }
    }
    /**
     * Use Kamada Kawai to position nodes. This is quite a heavy algorithm so if there are a lot of nodes we
     * cluster them first to reduce the amount.
     */
  }, {
    key: "layoutNetwork",
    value: function() {
      if (this.options.hierarchical.enabled !== !0 && this.options.improvedLayout === !0) {
        for (var e = this.body.nodeIndices, t = 0, n = 0; n < e.length; n++) {
          var a = this.body.nodes[e[n]];
          a.predefinedPosition === !0 && (t += 1);
        }
        if (t < 0.5 * e.length) {
          var o = 10, s = 0, u = this.options.clusterThreshold, l = {
            clusterNodeProperties: {
              shape: "ellipse",
              // Bugfix: avoid type 'image', no images supplied
              label: "",
              // avoid label handling
              group: "",
              // avoid group handling
              font: {
                multi: !1
              }
              // avoid font propagation
            },
            clusterEdgeProperties: {
              label: "",
              // avoid label handling
              font: {
                multi: !1
              },
              // avoid font propagation
              smooth: {
                enabled: !1
                // avoid drawing penalty for complex edges
              }
            }
          };
          if (e.length > u) {
            for (var c = e.length; e.length > u && s <= o; ) {
              s += 1;
              var d = e.length;
              s % 3 === 0 ? this.body.modules.clustering.clusterBridges(l) : this.body.modules.clustering.clusterOutliers(l);
              var f = e.length;
              if (d == f && s % 3 !== 0) {
                this._declusterAll(), this.body.emitter.emit("_layoutFailed"), console.info("This network could not be positioned by this version of the improved layout algorithm. Please disable improvedLayout for better performance.");
                return;
              }
            }
            this.body.modules.kamadaKawai.setOptions({
              springLength: Math.max(150, 2 * c)
            });
          }
          s > o && console.info("The clustering didn't succeed within the amount of interations allowed, progressing with partial result."), this.body.modules.kamadaKawai.solve(e, this.body.edgeIndices, !0), this._shiftToCenter();
          for (var h = 70, v = 0; v < e.length; v++) {
            var p = this.body.nodes[e[v]];
            p.predefinedPosition === !1 && (p.x += (0.5 - this._rng()) * h, p.y += (0.5 - this._rng()) * h);
          }
          this._declusterAll(), this.body.emitter.emit("_repositionBezierNodes");
        }
      }
    }
    /**
     * Move all the nodes towards to the center so gravitational pull wil not move the nodes away from view
     *
     * @private
     */
  }, {
    key: "_shiftToCenter",
    value: function() {
      for (var e = St.getRangeCore(this.body.nodes, this.body.nodeIndices), t = St.findCenter(e), n = 0; n < this.body.nodeIndices.length; n++) {
        var a = this.body.nodes[this.body.nodeIndices[n]];
        a.x -= t.x, a.y -= t.y;
      }
    }
    /**
     * Expands all clusters
     *
     * @private
     */
  }, {
    key: "_declusterAll",
    value: function() {
      for (var e = !0; e === !0; ) {
        e = !1;
        for (var t = 0; t < this.body.nodeIndices.length; t++)
          this.body.nodes[this.body.nodeIndices[t]].isCluster === !0 && (e = !0, this.body.modules.clustering.openCluster(this.body.nodeIndices[t], {}, !1));
        e === !0 && this.body.emitter.emit("_dataChanged");
      }
    }
    /**
     *
     * @returns {number|*}
     */
  }, {
    key: "getSeed",
    value: function() {
      return this.initialRandomSeed;
    }
    /**
     * This is the main function to layout the nodes in a hierarchical way.
     * It checks if the node details are supplied correctly
     *
     * @private
     */
  }, {
    key: "setupHierarchicalLayout",
    value: function() {
      if (this.options.hierarchical.enabled === !0 && this.body.nodeIndices.length > 0) {
        var e, t, n = !1, a = !1;
        this.lastNodeOnLevel = {}, this.hierarchical = new Spe();
        for (t in this.body.nodes)
          Object.prototype.hasOwnProperty.call(this.body.nodes, t) && (e = this.body.nodes[t], e.options.level !== void 0 ? (n = !0, this.hierarchical.levels[t] = e.options.level) : a = !0);
        if (a === !0 && n === !0)
          throw new Error("To use the hierarchical layout, nodes require either no predefined levels or levels have to be defined for all nodes.");
        if (a === !0) {
          var o = this.options.hierarchical.sortMethod;
          o === "hubsize" ? this._determineLevelsByHubsize() : o === "directed" ? this._determineLevelsDirected() : o === "custom" && this._determineLevelsCustomCallback();
        }
        for (var s in this.body.nodes)
          Object.prototype.hasOwnProperty.call(this.body.nodes, s) && this.hierarchical.ensureLevel(s);
        var u = this._getDistribution();
        this._generateMap(), this._placeNodesByHierarchy(u), this._condenseHierarchy(), this._shiftToCenter();
      }
    }
    /**
     * @private
     */
  }, {
    key: "_condenseHierarchy",
    value: function() {
      var e = this, t = !1, n = {}, a = function() {
        for (var w = s(), _ = 0, $ = 0; $ < w.length - 1; $++) {
          var C = w[$].max - w[$ + 1].min;
          _ += C + e.options.hierarchical.treeSpacing, o($ + 1, _);
        }
      }, o = function(w, _) {
        var $ = e.hierarchical.trees;
        for (var C in $)
          Object.prototype.hasOwnProperty.call($, C) && $[C] === w && e.direction.shift(C, _);
      }, s = function() {
        for (var w = [], _ = 0; _ < e.hierarchical.numTrees(); _++)
          w.push(e.direction.getTreeSize(_));
        return w;
      }, u = function b(w, _) {
        if (!_[w.id] && (_[w.id] = !0, e.hierarchical.childrenReference[w.id])) {
          var $ = e.hierarchical.childrenReference[w.id];
          if ($.length > 0)
            for (var C = 0; C < $.length; C++)
              b(e.body.nodes[$[C]], _);
        }
      }, l = function(w) {
        var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e9, $ = 1e9, C = 1e9, j = 1e9, W = -1e9;
        for (var B in w)
          if (Object.prototype.hasOwnProperty.call(w, B)) {
            var L = e.body.nodes[B], X = e.hierarchical.levels[L.id], ue = e.direction.getPosition(L), ee = e._getSpaceAroundNode(L, w), de = He(ee, 2), ke = de[0], ve = de[1];
            $ = Math.min(ke, $), C = Math.min(ve, C), X <= _ && (j = Math.min(ue, j), W = Math.max(ue, W));
          }
        return [j, W, $, C];
      }, c = function(w, _) {
        var $ = e.hierarchical.getMaxLevel(w.id), C = e.hierarchical.getMaxLevel(_.id);
        return Math.min($, C);
      }, d = function(w, _, $) {
        for (var C = e.hierarchical, j = 0; j < _.length; j++) {
          var W = _[j], B = C.distributionOrdering[W];
          if (B.length > 1)
            for (var L = 0; L < B.length - 1; L++) {
              var X = B[L], ue = B[L + 1];
              C.hasSameParent(X, ue) && C.inSameSubNetwork(X, ue) && w(X, ue, $);
            }
        }
      }, f = function(w, _) {
        var $ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, C = e.direction.getPosition(w), j = e.direction.getPosition(_), W = Math.abs(j - C), B = e.options.hierarchical.nodeSpacing;
        if (W > B) {
          var L = {}, X = {};
          u(w, L), u(_, X);
          var ue = c(w, _), ee = l(L, ue), de = l(X, ue), ke = ee[1], ve = de[0], Ne = de[2], je = Math.abs(ke - ve);
          if (je > B) {
            var Le = ke - ve + B;
            Le < -Ne + B && (Le = -Ne + B), Le < 0 && (e._shiftBlock(_.id, Le), t = !0, $ === !0 && e._centerParent(_));
          }
        }
      }, h = function(w, _) {
        for (var $ = _.id, C = _.edges, j = e.hierarchical.levels[_.id], W = e.options.hierarchical.levelSeparation * e.options.hierarchical.levelSeparation, B = {}, L = [], X = 0; X < C.length; X++) {
          var ue = C[X];
          if (ue.toId != ue.fromId) {
            var ee = ue.toId == $ ? ue.from : ue.to;
            B[C[X].id] = ee, e.hierarchical.levels[ee.id] < j && L.push(ue);
          }
        }
        var de = function(F, H) {
          for (var K = 0, U = 0; U < H.length; U++)
            if (B[H[U].id] !== void 0) {
              var ne = e.direction.getPosition(B[H[U].id]) - F;
              K += ne / Math.sqrt(ne * ne + W);
            }
          return K;
        }, ke = function(F, H) {
          for (var K = 0, U = 0; U < H.length; U++)
            if (B[H[U].id] !== void 0) {
              var ne = e.direction.getPosition(B[H[U].id]) - F;
              K -= W * Math.pow(ne * ne + W, -1.5);
            }
          return K;
        }, ve = function(F, H) {
          for (var K = e.direction.getPosition(_), U = {}, ne = 0; ne < F; ne++) {
            var ie = de(K, H), Q = ke(K, H), Z = 40, P = Math.max(-Z, Math.min(Z, Math.round(ie / Q)));
            if (K = K - P, U[K] !== void 0)
              break;
            U[K] = ne;
          }
          return K;
        }, Ne = function(F) {
          var H = e.direction.getPosition(_);
          if (n[_.id] === void 0) {
            var K = {};
            u(_, K), n[_.id] = K;
          }
          var U = l(n[_.id]), ne = U[2], ie = U[3], Q = F - H, Z = 0;
          Q > 0 ? Z = Math.min(Q, ie - e.options.hierarchical.nodeSpacing) : Q < 0 && (Z = -Math.min(-Q, ne - e.options.hierarchical.nodeSpacing)), Z != 0 && (e._shiftBlock(_.id, Z), t = !0);
        }, je = function(F) {
          var H = e.direction.getPosition(_), K = e._getSpaceAroundNode(_), U = He(K, 2), ne = U[0], ie = U[1], Q = F - H, Z = H;
          Q > 0 ? Z = Math.min(H + (ie - e.options.hierarchical.nodeSpacing), F) : Q < 0 && (Z = Math.max(H - (ne - e.options.hierarchical.nodeSpacing), F)), Z !== H && (e.direction.setPosition(_, Z), t = !0);
        }, Le = ve(w, L);
        Ne(Le), Le = ve(w, C), je(Le);
      }, v = function(w) {
        var _ = e.hierarchical.getLevels();
        _ = Dn(_).call(_);
        for (var $ = 0; $ < w; $++) {
          t = !1;
          for (var C = 0; C < _.length; C++)
            for (var j = _[C], W = e.hierarchical.distributionOrdering[j], B = 0; B < W.length; B++)
              h(1e3, W[B]);
          if (t !== !0)
            break;
        }
      }, p = function(w) {
        var _ = e.hierarchical.getLevels();
        _ = Dn(_).call(_);
        for (var $ = 0; $ < w && (t = !1, d(f, _, !0), t === !0); $++)
          ;
      }, y = function() {
        for (var w in e.body.nodes)
          Object.prototype.hasOwnProperty.call(e.body.nodes, w) && e._centerParent(e.body.nodes[w]);
      }, m = function() {
        var w = e.hierarchical.getLevels();
        w = Dn(w).call(w);
        for (var _ = 0; _ < w.length; _++)
          for (var $ = w[_], C = e.hierarchical.distributionOrdering[$], j = 0; j < C.length; j++)
            e._centerParent(C[j]);
      };
      this.options.hierarchical.blockShifting === !0 && (p(5), y()), this.options.hierarchical.edgeMinimization === !0 && v(20), this.options.hierarchical.parentCentralization === !0 && m(), a();
    }
    /**
     * This gives the space around the node. IF a map is supplied, it will only check against nodes NOT in the map.
     * This is used to only get the distances to nodes outside of a branch.
     *
     * @param {Node} node
     * @param {{Node.id: vis.Node}} map
     * @returns {number[]}
     * @private
     */
  }, {
    key: "_getSpaceAroundNode",
    value: function(e, t) {
      var n = !0;
      t === void 0 && (n = !1);
      var a = this.hierarchical.levels[e.id];
      if (a !== void 0) {
        var o = this.hierarchical.distributionIndex[e.id], s = this.direction.getPosition(e), u = this.hierarchical.distributionOrdering[a], l = 1e9, c = 1e9;
        if (o !== 0) {
          var d = u[o - 1];
          if (n === !0 && t[d.id] === void 0 || n === !1) {
            var f = this.direction.getPosition(d);
            l = s - f;
          }
        }
        if (o != u.length - 1) {
          var h = u[o + 1];
          if (n === !0 && t[h.id] === void 0 || n === !1) {
            var v = this.direction.getPosition(h);
            c = Math.min(c, v - s);
          }
        }
        return [l, c];
      } else
        return [0, 0];
    }
    /**
     * We use this method to center a parent node and check if it does not cross other nodes when it does.
     *
     * @param {Node} node
     * @private
     */
  }, {
    key: "_centerParent",
    value: function(e) {
      if (this.hierarchical.parentReference[e.id])
        for (var t = this.hierarchical.parentReference[e.id], n = 0; n < t.length; n++) {
          var a = t[n], o = this.body.nodes[a], s = this.hierarchical.childrenReference[a];
          if (s !== void 0) {
            var u = this._getCenterPosition(s), l = this.direction.getPosition(o), c = this._getSpaceAroundNode(o), d = He(c, 2), f = d[0], h = d[1], v = l - u;
            (v < 0 && Math.abs(v) < h - this.options.hierarchical.nodeSpacing || v > 0 && Math.abs(v) < f - this.options.hierarchical.nodeSpacing) && this.direction.setPosition(o, u);
          }
        }
    }
    /**
     * This function places the nodes on the canvas based on the hierarchial distribution.
     *
     * @param {object} distribution | obtained by the function this._getDistribution()
     * @private
     */
  }, {
    key: "_placeNodesByHierarchy",
    value: function(e) {
      this.positionedNodes = {};
      for (var t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n, a = We(e[t]);
          a = this._indexArrayToNodes(a), Ja(n = this.direction).call(n, a);
          for (var o = 0, s = 0; s < a.length; s++) {
            var u = a[s];
            if (this.positionedNodes[u.id] === void 0) {
              var l = this.options.hierarchical.nodeSpacing, c = l * o;
              o > 0 && (c = this.direction.getPosition(a[s - 1]) + l), this.direction.setPosition(u, c, t), this._validatePositionAndContinue(u, t, c), o++;
            }
          }
        }
    }
    /**
     * This is a recursively called function to enumerate the branches from the largest hubs and place the nodes
     * on a X position that ensures there will be no overlap.
     *
     * @param {Node.id} parentId
     * @param {number} parentLevel
     * @private
     */
  }, {
    key: "_placeBranchNodes",
    value: function(e, t) {
      var n, a = this.hierarchical.childrenReference[e];
      if (a !== void 0) {
        for (var o = [], s = 0; s < a.length; s++)
          o.push(this.body.nodes[a[s]]);
        Ja(n = this.direction).call(n, o);
        for (var u = 0; u < o.length; u++) {
          var l = o[u], c = this.hierarchical.levels[l.id];
          if (c > t && this.positionedNodes[l.id] === void 0) {
            var d = this.options.hierarchical.nodeSpacing, f = void 0;
            u === 0 ? f = this.direction.getPosition(this.body.nodes[e]) : f = this.direction.getPosition(o[u - 1]) + d, this.direction.setPosition(l, f, c), this._validatePositionAndContinue(l, c, f);
          } else
            return;
        }
        var h = this._getCenterPosition(o);
        this.direction.setPosition(this.body.nodes[e], h, t);
      }
    }
    /**
     * This method checks for overlap and if required shifts the branch. It also keeps records of positioned nodes.
     * Finally it will call _placeBranchNodes to place the branch nodes.
     *
     * @param {Node} node
     * @param {number} level
     * @param {number} pos
     * @private
     */
  }, {
    key: "_validatePositionAndContinue",
    value: function(e, t, n) {
      if (this.hierarchical.isTree) {
        if (this.lastNodeOnLevel[t] !== void 0) {
          var a = this.direction.getPosition(this.body.nodes[this.lastNodeOnLevel[t]]);
          if (n - a < this.options.hierarchical.nodeSpacing) {
            var o = a + this.options.hierarchical.nodeSpacing - n, s = this._findCommonParent(this.lastNodeOnLevel[t], e.id);
            this._shiftBlock(s.withChild, o);
          }
        }
        this.lastNodeOnLevel[t] = e.id, this.positionedNodes[e.id] = !0, this._placeBranchNodes(e.id, t);
      }
    }
    /**
     * Receives an array with node indices and returns an array with the actual node references.
     * Used for sorting based on node properties.
     *
     * @param {Array.<Node.id>} idArray
     * @returns {Array.<Node>}
     */
  }, {
    key: "_indexArrayToNodes",
    value: function(e) {
      for (var t = [], n = 0; n < e.length; n++)
        t.push(this.body.nodes[e[n]]);
      return t;
    }
    /**
     * This function get the distribution of levels based on hubsize
     *
     * @returns {object}
     * @private
     */
  }, {
    key: "_getDistribution",
    value: function() {
      var e = {}, t, n;
      for (t in this.body.nodes)
        if (Object.prototype.hasOwnProperty.call(this.body.nodes, t)) {
          n = this.body.nodes[t];
          var a = this.hierarchical.levels[t] === void 0 ? 0 : this.hierarchical.levels[t];
          this.direction.fix(n, a), e[a] === void 0 && (e[a] = {}), e[a][t] = n;
        }
      return e;
    }
    /**
     * Return the active (i.e. visible) edges for this node
     *
     * @param {Node} node
     * @returns {Array.<vis.Edge>} Array of edge instances
     * @private
     */
  }, {
    key: "_getActiveEdges",
    value: function(e) {
      var t = this, n = [];
      return fe(e.edges, function(a) {
        var o;
        ye(o = t.body.edgeIndices).call(o, a.id) !== -1 && n.push(a);
      }), n;
    }
    /**
     * Get the hubsizes for all active nodes.
     *
     * @returns {number}
     * @private
     */
  }, {
    key: "_getHubSizes",
    value: function() {
      var e = this, t = {}, n = this.body.nodeIndices;
      fe(n, function(o) {
        var s = e.body.nodes[o], u = e._getActiveEdges(s).length;
        t[u] = !0;
      });
      var a = [];
      return fe(t, function(o) {
        a.push(Number(o));
      }), Ja(a).call(a, function(o, s) {
        return s - o;
      }), a;
    }
    /**
     * this function allocates nodes in levels based on the recursive branching from the largest hubs.
     *
     * @private
     */
  }, {
    key: "_determineLevelsByHubsize",
    value: function() {
      for (var e = this, t = function(u, l) {
        e.hierarchical.levelDownstream(u, l);
      }, n = this._getHubSizes(), a = function() {
        var u = n[o];
        if (u === 0) return 1;
        fe(e.body.nodeIndices, function(l) {
          var c = e.body.nodes[l];
          u === e._getActiveEdges(c).length && e._crawlNetwork(t, l);
        });
      }, o = 0; o < n.length && !a(); ++o)
        ;
    }
    /**
     * TODO: release feature
     * TODO: Determine if this feature is needed at all
     *
     * @private
     */
  }, {
    key: "_determineLevelsCustomCallback",
    value: function() {
      var e = this, t = 1e5, n = function(s, u, l) {
      }, a = function(s, u, l) {
        var c = e.hierarchical.levels[s.id];
        c === void 0 && (c = e.hierarchical.levels[s.id] = t);
        var d = n(St.cloneOptions(s, "node"), St.cloneOptions(u, "node"), St.cloneOptions(l, "edge"));
        e.hierarchical.levels[u.id] = c + d;
      };
      this._crawlNetwork(a), this.hierarchical.setMinLevelToZero(this.body.nodes);
    }
    /**
     * Allocate nodes in levels based on the direction of the edges.
     *
     * @private
     */
  }, {
    key: "_determineLevelsDirected",
    value: function() {
      var e, t = this, n = tP(e = this.body.nodeIndices).call(e, function(a, o) {
        return a.set(o, t.body.nodes[o]), a;
      }, new ET());
      this.options.hierarchical.shakeTowards === "roots" ? this.hierarchical.levels = Epe(n) : this.hierarchical.levels = wpe(n), this.hierarchical.setMinLevelToZero(this.body.nodes);
    }
    /**
     * Update the bookkeeping of parent and child.
     *
     * @private
     */
  }, {
    key: "_generateMap",
    value: function() {
      var e = this, t = function(a, o) {
        e.hierarchical.levels[o.id] > e.hierarchical.levels[a.id] && e.hierarchical.addRelation(a.id, o.id);
      };
      this._crawlNetwork(t), this.hierarchical.checkIfTree();
    }
    /**
     * Crawl over the entire network and use a callback on each node couple that is connected to each other.
     *
     * @param {Function} [callback=function(){}]          | will receive nodeA, nodeB and the connecting edge. A and B are distinct.
     * @param {Node.id} startingNodeId
     * @private
     */
  }, {
    key: "_crawlNetwork",
    value: function() {
      var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      }, n = arguments.length > 1 ? arguments[1] : void 0, a = {}, o = function f(h, v) {
        if (a[h.id] === void 0) {
          e.hierarchical.setTreeIndex(h, v), a[h.id] = !0;
          for (var p, y = e._getActiveEdges(h), m = 0; m < y.length; m++) {
            var b = y[m];
            b.connected === !0 && (b.toId == h.id ? p = b.from : p = b.to, h.id != p.id && (t(h, p, b), f(p, v)));
          }
        }
      };
      if (n === void 0)
        for (var s = 0, u = 0; u < this.body.nodeIndices.length; u++) {
          var l = this.body.nodeIndices[u];
          if (a[l] === void 0) {
            var c = this.body.nodes[l];
            o(c, s), s += 1;
          }
        }
      else {
        var d = this.body.nodes[n];
        if (d === void 0) {
          console.error("Node not found:", n);
          return;
        }
        o(d);
      }
    }
    /**
     * Shift a branch a certain distance
     *
     * @param {Node.id} parentId
     * @param {number} diff
     * @private
     */
  }, {
    key: "_shiftBlock",
    value: function(e, t) {
      var n = this, a = {}, o = function s(u) {
        if (!a[u]) {
          a[u] = !0, n.direction.shift(u, t);
          var l = n.hierarchical.childrenReference[u];
          if (l !== void 0)
            for (var c = 0; c < l.length; c++)
              s(l[c]);
        }
      };
      o(e);
    }
    /**
     * Find a common parent between branches.
     *
     * @param {Node.id} childA
     * @param {Node.id} childB
     * @returns {{foundParent, withChild}}
     * @private
     */
  }, {
    key: "_findCommonParent",
    value: function(e, t) {
      var n = this, a = {}, o = function u(l, c) {
        var d = n.hierarchical.parentReference[c];
        if (d !== void 0)
          for (var f = 0; f < d.length; f++) {
            var h = d[f];
            l[h] = !0, u(l, h);
          }
      }, s = function u(l, c) {
        var d = n.hierarchical.parentReference[c];
        if (d !== void 0)
          for (var f = 0; f < d.length; f++) {
            var h = d[f];
            if (l[h] !== void 0)
              return {
                foundParent: h,
                withChild: c
              };
            var v = u(l, h);
            if (v.foundParent !== null)
              return v;
          }
        return {
          foundParent: null,
          withChild: c
        };
      };
      return o(a, e), s(a, t);
    }
    /**
     * Set the strategy pattern for handling the coordinates given the current direction.
     *
     * The individual instances contain all the operations and data specific to a layout direction.
     *
     * @param {Node} node
     * @param {{x: number, y: number}} position
     * @param {number} level
     * @param {boolean} [doNotUpdate=false]
     * @private
     */
  }, {
    key: "setDirectionStrategy",
    value: function() {
      var e = this.options.hierarchical.direction === "UD" || this.options.hierarchical.direction === "DU";
      e ? this.direction = new ape(this) : this.direction = new ope(this);
    }
    /**
     * Determine the center position of a branch from the passed list of child nodes
     *
     * This takes into account the positions of all the child nodes.
     *
     * @param {Array.<Node|vis.Node.id>} childNodes  Array of either child nodes or node id's
     * @returns {number}
     * @private
     */
  }, {
    key: "_getCenterPosition",
    value: function(e) {
      for (var t = 1e9, n = -1e9, a = 0; a < e.length; a++) {
        var o = void 0;
        if (e[a].id !== void 0)
          o = e[a];
        else {
          var s = e[a];
          o = this.body.nodes[s];
        }
        var u = this.direction.getPosition(o);
        t = Math.min(t, u), n = Math.max(n, u);
      }
      return 0.5 * (t + n);
    }
  }]), r;
})();
function Tpe(r, i) {
  var e = typeof mn < "u" && ai(r) || r["@@iterator"];
  if (!e) {
    if (Te(r) || (e = Ppe(r)) || i) {
      e && (r = e);
      var t = 0, n = function() {
      };
      return { s: n, n: function() {
        return t >= r.length ? { done: !0 } : { done: !1, value: r[t++] };
      }, e: function(l) {
        throw l;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, s;
  return { s: function() {
    e = e.call(r);
  }, n: function() {
    var l = e.next();
    return a = l.done, l;
  }, e: function(l) {
    o = !0, s = l;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (o) throw s;
    }
  } };
}
function Ppe(r, i) {
  var e;
  if (r) {
    if (typeof r == "string") return j1(r, i);
    var t = mt(e = Object.prototype.toString.call(r)).call(e, 8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return ii(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return j1(r, i);
  }
}
function j1(r, i) {
  (i == null || i > r.length) && (i = r.length);
  for (var e = 0, t = new Array(i); e < i; e++) t[e] = r[e];
  return t;
}
var Ipe = /* @__PURE__ */ (function() {
  function r(i, e, t, n) {
    var a = this, o, s;
    M(this, r), this.body = i, this.canvas = e, this.selectionHandler = t, this.interactionHandler = n, this.editMode = !1, this.manipulationDiv = void 0, this.editModeDiv = void 0, this.closeDiv = void 0, this._domEventListenerCleanupQueue = [], this.temporaryUIFunctions = {}, this.temporaryEventFunctions = [], this.touchTime = 0, this.temporaryIds = {
      nodes: [],
      edges: []
    }, this.guiEnabled = !1, this.inMode = !1, this.selectedControlNode = void 0, this.options = {}, this.defaultOptions = {
      enabled: !1,
      initiallyActive: !1,
      addNode: !0,
      addEdge: !0,
      editNode: void 0,
      editEdge: !0,
      deleteNode: !0,
      deleteEdge: !0,
      controlNodeStyle: {
        shape: "dot",
        size: 6,
        color: {
          background: "#ff0000",
          border: "#3c3c3c",
          highlight: {
            background: "#07f968",
            border: "#3c3c3c"
          }
        },
        borderWidth: 2,
        borderWidthSelected: 2
      }
    }, tt(this.options, this.defaultOptions), this.body.emitter.on("destroy", function() {
      a._clean();
    }), this.body.emitter.on("_dataChanged", A(o = this._restore).call(o, this)), this.body.emitter.on("_resetData", A(s = this._restore).call(s, this));
  }
  return N(r, [{
    key: "_restore",
    value: function() {
      this.inMode !== !1 && (this.options.initiallyActive === !0 ? this.enableEditMode() : this.disableEditMode());
    }
    /**
     * Set the Options
     *
     * @param {object} options
     * @param {object} allOptions
     * @param {object} globalOptions
     */
  }, {
    key: "setOptions",
    value: function(e, t, n) {
      t !== void 0 && (t.locale !== void 0 ? this.options.locale = t.locale : this.options.locale = n.locale, t.locales !== void 0 ? this.options.locales = t.locales : this.options.locales = n.locales), e !== void 0 && (typeof e == "boolean" ? this.options.enabled = e : (this.options.enabled = !0, Ae(this.options, e)), this.options.initiallyActive === !0 && (this.editMode = !0), this._setup());
    }
    /**
     * Enable or disable edit-mode. Draws the DOM required and cleans up after itself.
     *
     * @private
     */
  }, {
    key: "toggleEditMode",
    value: function() {
      this.editMode === !0 ? this.disableEditMode() : this.enableEditMode();
    }
    /**
     * Enables Edit Mode
     */
  }, {
    key: "enableEditMode",
    value: function() {
      this.editMode = !0, this._clean(), this.guiEnabled === !0 && (this.manipulationDiv.style.display = "block", this.closeDiv.style.display = "block", this.editModeDiv.style.display = "none", this.showManipulatorToolbar());
    }
    /**
     * Disables Edit Mode
     */
  }, {
    key: "disableEditMode",
    value: function() {
      this.editMode = !1, this._clean(), this.guiEnabled === !0 && (this.manipulationDiv.style.display = "none", this.closeDiv.style.display = "none", this.editModeDiv.style.display = "block", this._createEditButton());
    }
    /**
     * Creates the main toolbar. Removes functions bound to the select event. Binds all the buttons of the toolbar.
     *
     * @private
     */
  }, {
    key: "showManipulatorToolbar",
    value: function() {
      if (this._clean(), this.manipulationDOM = {}, this.guiEnabled === !0) {
        var e, t;
        this.editMode = !0, this.manipulationDiv.style.display = "block", this.closeDiv.style.display = "block";
        var n = this.selectionHandler.getSelectedNodeCount(), a = this.selectionHandler.getSelectedEdgeCount(), o = n + a, s = this.options.locales[this.options.locale], u = !1;
        this.options.addNode !== !1 && (this._createAddNodeButton(s), u = !0), this.options.addEdge !== !1 && (u === !0 ? this._createSeperator(1) : u = !0, this._createAddEdgeButton(s)), n === 1 && typeof this.options.editNode == "function" ? (u === !0 ? this._createSeperator(2) : u = !0, this._createEditNodeButton(s)) : a === 1 && n === 0 && this.options.editEdge !== !1 && (u === !0 ? this._createSeperator(3) : u = !0, this._createEditEdgeButton(s)), o !== 0 && (n > 0 && this.options.deleteNode !== !1 ? (u === !0 && this._createSeperator(4), this._createDeleteButton(s)) : n === 0 && this.options.deleteEdge !== !1 && (u === !0 && this._createSeperator(4), this._createDeleteButton(s))), this._bindElementEvents(this.closeDiv, A(e = this.toggleEditMode).call(e, this)), this._temporaryBindEvent("select", A(t = this.showManipulatorToolbar).call(t, this));
      }
      this.body.emitter.emit("_redraw");
    }
    /**
     * Create the toolbar for adding Nodes
     */
  }, {
    key: "addNodeMode",
    value: function() {
      var e;
      if (this.editMode !== !0 && this.enableEditMode(), this._clean(), this.inMode = "addNode", this.guiEnabled === !0) {
        var t, n = this.options.locales[this.options.locale];
        this.manipulationDOM = {}, this._createBackButton(n), this._createSeperator(), this._createDescription(n.addDescription || this.options.locales.en.addDescription), this._bindElementEvents(this.closeDiv, A(t = this.toggleEditMode).call(t, this));
      }
      this._temporaryBindEvent("click", A(e = this._performAddNode).call(e, this));
    }
    /**
     * call the bound function to handle the editing of the node. The node has to be selected.
     */
  }, {
    key: "editNode",
    value: function() {
      var e = this;
      this.editMode !== !0 && this.enableEditMode(), this._clean();
      var t = this.selectionHandler.getSelectedNodes()[0];
      if (t !== void 0)
        if (this.inMode = "editNode", typeof this.options.editNode == "function")
          if (t.isCluster !== !0) {
            var n = Ae({}, t.options, !1);
            if (n.x = t.x, n.y = t.y, this.options.editNode.length === 2)
              this.options.editNode(n, function(a) {
                a != null && e.inMode === "editNode" && e.body.data.nodes.getDataSet().update(a), e.showManipulatorToolbar();
              });
            else
              throw new Error("The function for edit does not support two arguments (data, callback)");
          } else
            alert(this.options.locales[this.options.locale].editClusterError || this.options.locales.en.editClusterError);
        else
          throw new Error("No function has been configured to handle the editing of nodes.");
      else
        this.showManipulatorToolbar();
    }
    /**
     * create the toolbar to connect nodes
     */
  }, {
    key: "addEdgeMode",
    value: function() {
      var e, t, n, a, o;
      if (this.editMode !== !0 && this.enableEditMode(), this._clean(), this.inMode = "addEdge", this.guiEnabled === !0) {
        var s, u = this.options.locales[this.options.locale];
        this.manipulationDOM = {}, this._createBackButton(u), this._createSeperator(), this._createDescription(u.edgeDescription || this.options.locales.en.edgeDescription), this._bindElementEvents(this.closeDiv, A(s = this.toggleEditMode).call(s, this));
      }
      this._temporaryBindUI("onTouch", A(e = this._handleConnect).call(e, this)), this._temporaryBindUI("onDragEnd", A(t = this._finishConnect).call(t, this)), this._temporaryBindUI("onDrag", A(n = this._dragControlNode).call(n, this)), this._temporaryBindUI("onRelease", A(a = this._finishConnect).call(a, this)), this._temporaryBindUI("onDragStart", A(o = this._dragStartEdge).call(o, this)), this._temporaryBindUI("onHold", function() {
      });
    }
    /**
     * create the toolbar to edit edges
     */
  }, {
    key: "editEdgeMode",
    value: function() {
      if (this.editMode !== !0 && this.enableEditMode(), this._clean(), this.inMode = "editEdge", Ie(this.options.editEdge) === "object" && typeof this.options.editEdge.editWithoutDrag == "function" && (this.edgeBeingEditedId = this.selectionHandler.getSelectedEdgeIds()[0], this.edgeBeingEditedId !== void 0)) {
        var e = this.body.edges[this.edgeBeingEditedId];
        this._performEditEdge(e.from.id, e.to.id);
        return;
      }
      if (this.guiEnabled === !0) {
        var t, n = this.options.locales[this.options.locale];
        this.manipulationDOM = {}, this._createBackButton(n), this._createSeperator(), this._createDescription(n.editEdgeDescription || this.options.locales.en.editEdgeDescription), this._bindElementEvents(this.closeDiv, A(t = this.toggleEditMode).call(t, this));
      }
      if (this.edgeBeingEditedId = this.selectionHandler.getSelectedEdgeIds()[0], this.edgeBeingEditedId !== void 0) {
        var a, o, s, u, l = this.body.edges[this.edgeBeingEditedId], c = this._getNewTargetNode(l.from.x, l.from.y), d = this._getNewTargetNode(l.to.x, l.to.y);
        this.temporaryIds.nodes.push(c.id), this.temporaryIds.nodes.push(d.id), this.body.nodes[c.id] = c, this.body.nodeIndices.push(c.id), this.body.nodes[d.id] = d, this.body.nodeIndices.push(d.id), this._temporaryBindUI("onTouch", A(a = this._controlNodeTouch).call(a, this)), this._temporaryBindUI("onTap", function() {
        }), this._temporaryBindUI("onHold", function() {
        }), this._temporaryBindUI("onDragStart", A(o = this._controlNodeDragStart).call(o, this)), this._temporaryBindUI("onDrag", A(s = this._controlNodeDrag).call(s, this)), this._temporaryBindUI("onDragEnd", A(u = this._controlNodeDragEnd).call(u, this)), this._temporaryBindUI("onMouseMove", function() {
        }), this._temporaryBindEvent("beforeDrawing", function(f) {
          var h = l.edgeType.findBorderPositions(f);
          c.selected === !1 && (c.x = h.from.x, c.y = h.from.y), d.selected === !1 && (d.x = h.to.x, d.y = h.to.y);
        }), this.body.emitter.emit("_redraw");
      } else
        this.showManipulatorToolbar();
    }
    /**
     * delete everything in the selection
     */
  }, {
    key: "deleteSelected",
    value: function() {
      var e = this;
      this.editMode !== !0 && this.enableEditMode(), this._clean(), this.inMode = "delete";
      var t = this.selectionHandler.getSelectedNodeIds(), n = this.selectionHandler.getSelectedEdgeIds(), a = void 0;
      if (t.length > 0) {
        for (var o = 0; o < t.length; o++)
          if (this.body.nodes[t[o]].isCluster === !0) {
            alert(this.options.locales[this.options.locale].deleteClusterError || this.options.locales.en.deleteClusterError);
            return;
          }
        typeof this.options.deleteNode == "function" && (a = this.options.deleteNode);
      } else n.length > 0 && typeof this.options.deleteEdge == "function" && (a = this.options.deleteEdge);
      if (typeof a == "function") {
        var s = {
          nodes: t,
          edges: n
        };
        if (a.length === 2)
          a(s, function(u) {
            u != null && e.inMode === "delete" ? (e.body.data.edges.getDataSet().remove(u.edges), e.body.data.nodes.getDataSet().remove(u.nodes), e.body.emitter.emit("startSimulation"), e.showManipulatorToolbar()) : (e.body.emitter.emit("startSimulation"), e.showManipulatorToolbar());
          });
        else
          throw new Error("The function for delete does not support two arguments (data, callback)");
      } else
        this.body.data.edges.getDataSet().remove(n), this.body.data.nodes.getDataSet().remove(t), this.body.emitter.emit("startSimulation"), this.showManipulatorToolbar();
    }
    //********************************************** PRIVATE ***************************************//
    /**
     * draw or remove the DOM
     *
     * @private
     */
  }, {
    key: "_setup",
    value: function() {
      this.options.enabled === !0 ? (this.guiEnabled = !0, this._createWrappers(), this.editMode === !1 ? this._createEditButton() : this.showManipulatorToolbar()) : (this._removeManipulationDOM(), this.guiEnabled = !1);
    }
    /**
     * create the div overlays that contain the DOM
     *
     * @private
     */
  }, {
    key: "_createWrappers",
    value: function() {
      if (this.manipulationDiv === void 0 && (this.manipulationDiv = document.createElement("div"), this.manipulationDiv.className = "vis-manipulation", this.editMode === !0 ? this.manipulationDiv.style.display = "block" : this.manipulationDiv.style.display = "none", this.canvas.frame.appendChild(this.manipulationDiv)), this.editModeDiv === void 0 && (this.editModeDiv = document.createElement("div"), this.editModeDiv.className = "vis-edit-mode", this.editMode === !0 ? this.editModeDiv.style.display = "none" : this.editModeDiv.style.display = "block", this.canvas.frame.appendChild(this.editModeDiv)), this.closeDiv === void 0) {
        var e, t;
        this.closeDiv = document.createElement("button"), this.closeDiv.className = "vis-close", this.closeDiv.setAttribute("aria-label", (e = (t = this.options.locales[this.options.locale]) === null || t === void 0 ? void 0 : t.close) !== null && e !== void 0 ? e : this.options.locales.en.close), this.closeDiv.style.display = this.manipulationDiv.style.display, this.canvas.frame.appendChild(this.closeDiv);
      }
    }
    /**
     * generate a new target node. Used for creating new edges and editing edges
     *
     * @param {number} x
     * @param {number} y
     * @returns {Node}
     * @private
     */
  }, {
    key: "_getNewTargetNode",
    value: function(e, t) {
      var n = Ae({}, this.options.controlNodeStyle);
      n.id = "targetNode" + Ya(), n.hidden = !1, n.physics = !1, n.x = e, n.y = t;
      var a = this.body.functions.createNode(n);
      return a.shape.boundingBox = {
        left: e,
        right: e,
        top: t,
        bottom: t
      }, a;
    }
    /**
     * Create the edit button
     */
  }, {
    key: "_createEditButton",
    value: function() {
      var e;
      this._clean(), this.manipulationDOM = {}, Xr(this.editModeDiv);
      var t = this.options.locales[this.options.locale], n = this._createButton("editMode", "vis-edit vis-edit-mode", t.edit || this.options.locales.en.edit);
      this.editModeDiv.appendChild(n), this._bindElementEvents(n, A(e = this.toggleEditMode).call(e, this));
    }
    /**
     * this function cleans up after everything this module does. Temporary elements, functions and events are removed, physics restored, hammers removed.
     *
     * @private
     */
  }, {
    key: "_clean",
    value: function() {
      this.inMode = !1, this.guiEnabled === !0 && (Xr(this.editModeDiv), Xr(this.manipulationDiv), this._cleanupDOMEventListeners()), this._cleanupTemporaryNodesAndEdges(), this._unbindTemporaryUIs(), this._unbindTemporaryEvents(), this.body.emitter.emit("restorePhysics");
    }
    /**
     * Each dom element has it's own hammer. They are stored in this.manipulationHammers. This cleans them up.
     *
     * @private
     */
  }, {
    key: "_cleanupDOMEventListeners",
    value: function() {
      var e, t = Tpe(Fr(e = this._domEventListenerCleanupQueue).call(e, 0)), n;
      try {
        for (t.s(); !(n = t.n()).done; ) {
          var a = n.value;
          a();
        }
      } catch (o) {
        t.e(o);
      } finally {
        t.f();
      }
    }
    /**
     * Remove all DOM elements created by this module.
     *
     * @private
     */
  }, {
    key: "_removeManipulationDOM",
    value: function() {
      this._clean(), Xr(this.manipulationDiv), Xr(this.editModeDiv), Xr(this.closeDiv), this.manipulationDiv && this.canvas.frame.removeChild(this.manipulationDiv), this.editModeDiv && this.canvas.frame.removeChild(this.editModeDiv), this.closeDiv && this.canvas.frame.removeChild(this.closeDiv), this.manipulationDiv = void 0, this.editModeDiv = void 0, this.closeDiv = void 0;
    }
    /**
     * create a seperator line. the index is to differentiate in the manipulation dom
     *
     * @param {number} [index=1]
     * @private
     */
  }, {
    key: "_createSeperator",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      this.manipulationDOM["seperatorLineDiv" + e] = document.createElement("div"), this.manipulationDOM["seperatorLineDiv" + e].className = "vis-separator-line", this.manipulationDiv.appendChild(this.manipulationDOM["seperatorLineDiv" + e]);
    }
    // ----------------------    DOM functions for buttons    --------------------------//
    /**
     *
     * @param {Locale} locale
     * @private
     */
  }, {
    key: "_createAddNodeButton",
    value: function(e) {
      var t, n = this._createButton("addNode", "vis-add", e.addNode || this.options.locales.en.addNode);
      this.manipulationDiv.appendChild(n), this._bindElementEvents(n, A(t = this.addNodeMode).call(t, this));
    }
    /**
     *
     * @param {Locale} locale
     * @private
     */
  }, {
    key: "_createAddEdgeButton",
    value: function(e) {
      var t, n = this._createButton("addEdge", "vis-connect", e.addEdge || this.options.locales.en.addEdge);
      this.manipulationDiv.appendChild(n), this._bindElementEvents(n, A(t = this.addEdgeMode).call(t, this));
    }
    /**
     *
     * @param {Locale} locale
     * @private
     */
  }, {
    key: "_createEditNodeButton",
    value: function(e) {
      var t, n = this._createButton("editNode", "vis-edit", e.editNode || this.options.locales.en.editNode);
      this.manipulationDiv.appendChild(n), this._bindElementEvents(n, A(t = this.editNode).call(t, this));
    }
    /**
     *
     * @param {Locale} locale
     * @private
     */
  }, {
    key: "_createEditEdgeButton",
    value: function(e) {
      var t, n = this._createButton("editEdge", "vis-edit", e.editEdge || this.options.locales.en.editEdge);
      this.manipulationDiv.appendChild(n), this._bindElementEvents(n, A(t = this.editEdgeMode).call(t, this));
    }
    /**
     *
     * @param {Locale} locale
     * @private
     */
  }, {
    key: "_createDeleteButton",
    value: function(e) {
      var t, n;
      this.options.rtl ? n = "vis-delete-rtl" : n = "vis-delete";
      var a = this._createButton("delete", n, e.del || this.options.locales.en.del);
      this.manipulationDiv.appendChild(a), this._bindElementEvents(a, A(t = this.deleteSelected).call(t, this));
    }
    /**
     *
     * @param {Locale} locale
     * @private
     */
  }, {
    key: "_createBackButton",
    value: function(e) {
      var t, n = this._createButton("back", "vis-back", e.back || this.options.locales.en.back);
      this.manipulationDiv.appendChild(n), this._bindElementEvents(n, A(t = this.showManipulatorToolbar).call(t, this));
    }
    /**
     *
     * @param {number|string} id
     * @param {string} className
     * @param {label} label
     * @param {string} labelClassName
     * @returns {HTMLElement}
     * @private
     */
  }, {
    key: "_createButton",
    value: function(e, t, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "vis-label";
      return this.manipulationDOM[e + "Div"] = document.createElement("button"), this.manipulationDOM[e + "Div"].className = "vis-button " + t, this.manipulationDOM[e + "Label"] = document.createElement("div"), this.manipulationDOM[e + "Label"].className = a, this.manipulationDOM[e + "Label"].innerText = n, this.manipulationDOM[e + "Div"].appendChild(this.manipulationDOM[e + "Label"]), this.manipulationDOM[e + "Div"];
    }
    /**
     *
     * @param {Label} label
     * @private
     */
  }, {
    key: "_createDescription",
    value: function(e) {
      this.manipulationDOM.descriptionLabel = document.createElement("div"), this.manipulationDOM.descriptionLabel.className = "vis-none", this.manipulationDOM.descriptionLabel.innerText = e, this.manipulationDiv.appendChild(this.manipulationDOM.descriptionLabel);
    }
    // -------------------------- End of DOM functions for buttons ------------------------------//
    /**
     * this binds an event until cleanup by the clean functions.
     *
     * @param {Event}  event   The event
     * @param {Function} newFunction
     * @private
     */
  }, {
    key: "_temporaryBindEvent",
    value: function(e, t) {
      this.temporaryEventFunctions.push({
        event: e,
        boundFunction: t
      }), this.body.emitter.on(e, t);
    }
    /**
     * this overrides an UI function until cleanup by the clean function
     *
     * @param {string} UIfunctionName
     * @param {Function} newFunction
     * @private
     */
  }, {
    key: "_temporaryBindUI",
    value: function(e, t) {
      if (this.body.eventListeners[e] !== void 0)
        this.temporaryUIFunctions[e] = this.body.eventListeners[e], this.body.eventListeners[e] = t;
      else
        throw new Error("This UI function does not exist. Typo? You tried: " + e + " possible are: " + ts(We(this.body.eventListeners)));
    }
    /**
     * Restore the overridden UI functions to their original state.
     *
     * @private
     */
  }, {
    key: "_unbindTemporaryUIs",
    value: function() {
      for (var e in this.temporaryUIFunctions)
        Object.prototype.hasOwnProperty.call(this.temporaryUIFunctions, e) && (this.body.eventListeners[e] = this.temporaryUIFunctions[e], delete this.temporaryUIFunctions[e]);
      this.temporaryUIFunctions = {};
    }
    /**
     * Unbind the events created by _temporaryBindEvent
     *
     * @private
     */
  }, {
    key: "_unbindTemporaryEvents",
    value: function() {
      for (var e = 0; e < this.temporaryEventFunctions.length; e++) {
        var t = this.temporaryEventFunctions[e].event, n = this.temporaryEventFunctions[e].boundFunction;
        this.body.emitter.off(t, n);
      }
      this.temporaryEventFunctions = [];
    }
    /**
     * Bind an hammer instance to a DOM element.
     *
     * @param {Element} domElement
     * @param {Function} boundFunction
     */
  }, {
    key: "_bindElementEvents",
    value: function(e, t) {
      var n = new Bi(e, {});
      Wu(n, t), this._domEventListenerCleanupQueue.push(function() {
        n.destroy();
      });
      var a = function(s) {
        var u = s.keyCode, l = s.key;
        (l === "Enter" || l === " " || u === 13 || u === 32) && t();
      };
      e.addEventListener("keyup", a, !1), this._domEventListenerCleanupQueue.push(function() {
        e.removeEventListener("keyup", a, !1);
      });
    }
    /**
     * Neatly clean up temporary edges and nodes
     *
     * @private
     */
  }, {
    key: "_cleanupTemporaryNodesAndEdges",
    value: function() {
      for (var e = 0; e < this.temporaryIds.edges.length; e++) {
        var t;
        this.body.edges[this.temporaryIds.edges[e]].disconnect(), delete this.body.edges[this.temporaryIds.edges[e]];
        var n = ye(t = this.body.edgeIndices).call(t, this.temporaryIds.edges[e]);
        if (n !== -1) {
          var a;
          Fr(a = this.body.edgeIndices).call(a, n, 1);
        }
      }
      for (var o = 0; o < this.temporaryIds.nodes.length; o++) {
        var s;
        delete this.body.nodes[this.temporaryIds.nodes[o]];
        var u = ye(s = this.body.nodeIndices).call(s, this.temporaryIds.nodes[o]);
        if (u !== -1) {
          var l;
          Fr(l = this.body.nodeIndices).call(l, u, 1);
        }
      }
      this.temporaryIds = {
        nodes: [],
        edges: []
      };
    }
    // ------------------------------------------ EDIT EDGE FUNCTIONS -----------------------------------------//
    /**
     * the touch is used to get the position of the initial click
     *
     * @param {Event}  event   The event
     * @private
     */
  }, {
    key: "_controlNodeTouch",
    value: function(e) {
      this.selectionHandler.unselectAll(), this.lastTouch = this.body.functions.getPointer(e.center), this.lastTouch.translation = tt({}, this.body.view.translation);
    }
    /**
     * the drag start is used to mark one of the control nodes as selected.
     *
     * @private
     */
  }, {
    key: "_controlNodeDragStart",
    value: function() {
      var e = this.lastTouch, t = this.selectionHandler._pointerToPositionObject(e), n = this.body.nodes[this.temporaryIds.nodes[0]], a = this.body.nodes[this.temporaryIds.nodes[1]], o = this.body.edges[this.edgeBeingEditedId];
      this.selectedControlNode = void 0;
      var s = n.isOverlappingWith(t), u = a.isOverlappingWith(t);
      s === !0 ? (this.selectedControlNode = n, o.edgeType.from = n) : u === !0 && (this.selectedControlNode = a, o.edgeType.to = a), this.selectedControlNode !== void 0 && this.selectionHandler.selectObject(this.selectedControlNode), this.body.emitter.emit("_redraw");
    }
    /**
     * dragging the control nodes or the canvas
     *
     * @param {Event}  event   The event
     * @private
     */
  }, {
    key: "_controlNodeDrag",
    value: function(e) {
      this.body.emitter.emit("disablePhysics");
      var t = this.body.functions.getPointer(e.center), n = this.canvas.DOMtoCanvas(t);
      this.selectedControlNode !== void 0 ? (this.selectedControlNode.x = n.x, this.selectedControlNode.y = n.y) : this.interactionHandler.onDrag(e), this.body.emitter.emit("_redraw");
    }
    /**
     * connecting or restoring the control nodes.
     *
     * @param {Event}  event   The event
     * @private
     */
  }, {
    key: "_controlNodeDragEnd",
    value: function(e) {
      var t = this.body.functions.getPointer(e.center), n = this.selectionHandler._pointerToPositionObject(t), a = this.body.edges[this.edgeBeingEditedId];
      if (this.selectedControlNode !== void 0) {
        this.selectionHandler.unselectAll();
        for (var o = this.selectionHandler._getAllNodesOverlappingWith(n), s = void 0, u = o.length - 1; u >= 0; u--)
          if (o[u] !== this.selectedControlNode.id) {
            s = this.body.nodes[o[u]];
            break;
          }
        if (s !== void 0 && this.selectedControlNode !== void 0)
          if (s.isCluster === !0)
            alert(this.options.locales[this.options.locale].createEdgeError || this.options.locales.en.createEdgeError);
          else {
            var l = this.body.nodes[this.temporaryIds.nodes[0]];
            this.selectedControlNode.id === l.id ? this._performEditEdge(s.id, a.to.id) : this._performEditEdge(a.from.id, s.id);
          }
        else
          a.updateEdgeType(), this.body.emitter.emit("restorePhysics");
        this.body.emitter.emit("_redraw");
      }
    }
    // ------------------------------------ END OF EDIT EDGE FUNCTIONS -----------------------------------------//
    // ------------------------------------------- ADD EDGE FUNCTIONS -----------------------------------------//
    /**
     * the function bound to the selection event. It checks if you want to connect a cluster and changes the description
     * to walk the user through the process.
     *
     * @param {Event} event
     * @private
     */
  }, {
    key: "_handleConnect",
    value: function(e) {
      if ((/* @__PURE__ */ new Date()).valueOf() - this.touchTime > 100) {
        this.lastTouch = this.body.functions.getPointer(e.center), this.lastTouch.translation = tt({}, this.body.view.translation), this.interactionHandler.drag.pointer = this.lastTouch, this.interactionHandler.drag.translation = this.lastTouch.translation;
        var t = this.lastTouch, n = this.selectionHandler.getNodeAt(t);
        if (n !== void 0)
          if (n.isCluster === !0)
            alert(this.options.locales[this.options.locale].createEdgeError || this.options.locales.en.createEdgeError);
          else {
            var a = this._getNewTargetNode(n.x, n.y);
            this.body.nodes[a.id] = a, this.body.nodeIndices.push(a.id);
            var o = this.body.functions.createEdge({
              id: "connectionEdge" + Ya(),
              from: n.id,
              to: a.id,
              physics: !1,
              smooth: {
                enabled: !0,
                type: "continuous",
                roundness: 0.5
              }
            });
            this.body.edges[o.id] = o, this.body.edgeIndices.push(o.id), this.temporaryIds.nodes.push(a.id), this.temporaryIds.edges.push(o.id);
          }
        this.touchTime = (/* @__PURE__ */ new Date()).valueOf();
      }
    }
    /**
     *
     * @param {Event} event
     * @private
     */
  }, {
    key: "_dragControlNode",
    value: function(e) {
      var t = this.body.functions.getPointer(e.center), n = this.selectionHandler._pointerToPositionObject(t), a = void 0;
      this.temporaryIds.edges[0] !== void 0 && (a = this.body.edges[this.temporaryIds.edges[0]].fromId);
      for (var o = this.selectionHandler._getAllNodesOverlappingWith(n), s = void 0, u = o.length - 1; u >= 0; u--) {
        var l;
        if (ye(l = this.temporaryIds.nodes).call(l, o[u]) === -1) {
          s = this.body.nodes[o[u]];
          break;
        }
      }
      if (e.controlEdge = {
        from: a,
        to: s ? s.id : void 0
      }, this.selectionHandler.generateClickEvent("controlNodeDragging", e, t), this.temporaryIds.nodes[0] !== void 0) {
        var c = this.body.nodes[this.temporaryIds.nodes[0]];
        c.x = this.canvas._XconvertDOMtoCanvas(t.x), c.y = this.canvas._YconvertDOMtoCanvas(t.y), this.body.emitter.emit("_redraw");
      } else
        this.interactionHandler.onDrag(e);
    }
    /**
     * Connect the new edge to the target if one exists, otherwise remove temp line
     *
     * @param {Event}  event   The event
     * @private
     */
  }, {
    key: "_finishConnect",
    value: function(e) {
      var t = this.body.functions.getPointer(e.center), n = this.selectionHandler._pointerToPositionObject(t), a = void 0;
      this.temporaryIds.edges[0] !== void 0 && (a = this.body.edges[this.temporaryIds.edges[0]].fromId);
      for (var o = this.selectionHandler._getAllNodesOverlappingWith(n), s = void 0, u = o.length - 1; u >= 0; u--) {
        var l;
        if (ye(l = this.temporaryIds.nodes).call(l, o[u]) === -1) {
          s = this.body.nodes[o[u]];
          break;
        }
      }
      this._cleanupTemporaryNodesAndEdges(), s !== void 0 && (s.isCluster === !0 ? alert(this.options.locales[this.options.locale].createEdgeError || this.options.locales.en.createEdgeError) : this.body.nodes[a] !== void 0 && this.body.nodes[s.id] !== void 0 && this._performAddEdge(a, s.id)), e.controlEdge = {
        from: a,
        to: s ? s.id : void 0
      }, this.selectionHandler.generateClickEvent("controlNodeDragEnd", e, t), this.body.emitter.emit("_redraw");
    }
    /**
     *
     * @param {Event} event
     * @private
     */
  }, {
    key: "_dragStartEdge",
    value: function(e) {
      var t = this.lastTouch;
      this.selectionHandler.generateClickEvent("dragStart", e, t, void 0, !0);
    }
    // --------------------------------------- END OF ADD EDGE FUNCTIONS -------------------------------------//
    // ------------------------------ Performing all the actual data manipulation ------------------------//
    /**
     * Adds a node on the specified location
     *
     * @param {object} clickData
     * @private
     */
  }, {
    key: "_performAddNode",
    value: function(e) {
      var t = this, n = {
        id: Ya(),
        x: e.pointer.canvas.x,
        y: e.pointer.canvas.y,
        label: "new"
      };
      if (typeof this.options.addNode == "function")
        if (this.options.addNode.length === 2)
          this.options.addNode(n, function(a) {
            a != null && t.inMode === "addNode" && t.body.data.nodes.getDataSet().add(a), t.showManipulatorToolbar();
          });
        else
          throw this.showManipulatorToolbar(), new Error("The function for add does not support two arguments (data,callback)");
      else
        this.body.data.nodes.getDataSet().add(n), this.showManipulatorToolbar();
    }
    /**
     * connect two nodes with a new edge.
     *
     * @param {Node.id} sourceNodeId
     * @param {Node.id} targetNodeId
     * @private
     */
  }, {
    key: "_performAddEdge",
    value: function(e, t) {
      var n = this, a = {
        from: e,
        to: t
      };
      if (typeof this.options.addEdge == "function")
        if (this.options.addEdge.length === 2)
          this.options.addEdge(a, function(o) {
            o != null && n.inMode === "addEdge" && (n.body.data.edges.getDataSet().add(o), n.selectionHandler.unselectAll(), n.showManipulatorToolbar());
          });
        else
          throw new Error("The function for connect does not support two arguments (data,callback)");
      else
        this.body.data.edges.getDataSet().add(a), this.selectionHandler.unselectAll(), this.showManipulatorToolbar();
    }
    /**
     * connect two nodes with a new edge.
     *
     * @param {Node.id} sourceNodeId
     * @param {Node.id} targetNodeId
     * @private
     */
  }, {
    key: "_performEditEdge",
    value: function(e, t) {
      var n = this, a = {
        id: this.edgeBeingEditedId,
        from: e,
        to: t,
        label: this.body.data.edges.get(this.edgeBeingEditedId).label
      }, o = this.options.editEdge;
      if (Ie(o) === "object" && (o = o.editWithoutDrag), typeof o == "function")
        if (o.length === 2)
          o(a, function(s) {
            s == null || n.inMode !== "editEdge" ? (n.body.edges[a.id].updateEdgeType(), n.body.emitter.emit("_redraw"), n.showManipulatorToolbar()) : (n.body.data.edges.getDataSet().update(s), n.selectionHandler.unselectAll(), n.showManipulatorToolbar());
          });
        else
          throw new Error("The function for edit does not support two arguments (data, callback)");
      else
        this.body.data.edges.getDataSet().update(a), this.selectionHandler.unselectAll(), this.showManipulatorToolbar();
    }
  }]), r;
})(), D = "string", R = "boolean", E = "number", La = "array", q = "object", oP = "dom", kpe = "any", lf = ["arrow", "bar", "box", "circle", "crow", "curve", "diamond", "image", "inv_curve", "inv_triangle", "triangle", "vee"], cf = {
  borderWidth: {
    number: E
  },
  borderWidthSelected: {
    number: E,
    undefined: "undefined"
  },
  brokenImage: {
    string: D,
    undefined: "undefined"
  },
  chosen: {
    label: {
      boolean: R,
      function: "function"
    },
    node: {
      boolean: R,
      function: "function"
    },
    __type__: {
      object: q,
      boolean: R
    }
  },
  color: {
    border: {
      string: D
    },
    background: {
      string: D
    },
    highlight: {
      border: {
        string: D
      },
      background: {
        string: D
      },
      __type__: {
        object: q,
        string: D
      }
    },
    hover: {
      border: {
        string: D
      },
      background: {
        string: D
      },
      __type__: {
        object: q,
        string: D
      }
    },
    __type__: {
      object: q,
      string: D
    }
  },
  opacity: {
    number: E,
    undefined: "undefined"
  },
  fixed: {
    x: {
      boolean: R
    },
    y: {
      boolean: R
    },
    __type__: {
      object: q,
      boolean: R
    }
  },
  font: {
    align: {
      string: D
    },
    color: {
      string: D
    },
    size: {
      number: E
    },
    face: {
      string: D
    },
    background: {
      string: D
    },
    strokeWidth: {
      number: E
    },
    strokeColor: {
      string: D
    },
    vadjust: {
      number: E
    },
    multi: {
      boolean: R,
      string: D
    },
    bold: {
      color: {
        string: D
      },
      size: {
        number: E
      },
      face: {
        string: D
      },
      mod: {
        string: D
      },
      vadjust: {
        number: E
      },
      __type__: {
        object: q,
        string: D
      }
    },
    boldital: {
      color: {
        string: D
      },
      size: {
        number: E
      },
      face: {
        string: D
      },
      mod: {
        string: D
      },
      vadjust: {
        number: E
      },
      __type__: {
        object: q,
        string: D
      }
    },
    ital: {
      color: {
        string: D
      },
      size: {
        number: E
      },
      face: {
        string: D
      },
      mod: {
        string: D
      },
      vadjust: {
        number: E
      },
      __type__: {
        object: q,
        string: D
      }
    },
    mono: {
      color: {
        string: D
      },
      size: {
        number: E
      },
      face: {
        string: D
      },
      mod: {
        string: D
      },
      vadjust: {
        number: E
      },
      __type__: {
        object: q,
        string: D
      }
    },
    __type__: {
      object: q,
      string: D
    }
  },
  group: {
    string: D,
    number: E,
    undefined: "undefined"
  },
  heightConstraint: {
    minimum: {
      number: E
    },
    valign: {
      string: D
    },
    __type__: {
      object: q,
      boolean: R,
      number: E
    }
  },
  hidden: {
    boolean: R
  },
  icon: {
    face: {
      string: D
    },
    code: {
      string: D
    },
    size: {
      number: E
    },
    color: {
      string: D
    },
    weight: {
      string: D,
      number: E
    },
    __type__: {
      object: q
    }
  },
  id: {
    string: D,
    number: E
  },
  image: {
    selected: {
      string: D,
      undefined: "undefined"
    },
    unselected: {
      string: D,
      undefined: "undefined"
    },
    __type__: {
      object: q,
      string: D
    }
  },
  imagePadding: {
    top: {
      number: E
    },
    right: {
      number: E
    },
    bottom: {
      number: E
    },
    left: {
      number: E
    },
    __type__: {
      object: q,
      number: E
    }
  },
  label: {
    string: D,
    undefined: "undefined"
  },
  labelHighlightBold: {
    boolean: R
  },
  level: {
    number: E,
    undefined: "undefined"
  },
  margin: {
    top: {
      number: E
    },
    right: {
      number: E
    },
    bottom: {
      number: E
    },
    left: {
      number: E
    },
    __type__: {
      object: q,
      number: E
    }
  },
  mass: {
    number: E
  },
  physics: {
    boolean: R
  },
  scaling: {
    min: {
      number: E
    },
    max: {
      number: E
    },
    label: {
      enabled: {
        boolean: R
      },
      min: {
        number: E
      },
      max: {
        number: E
      },
      maxVisible: {
        number: E
      },
      drawThreshold: {
        number: E
      },
      __type__: {
        object: q,
        boolean: R
      }
    },
    customScalingFunction: {
      function: "function"
    },
    __type__: {
      object: q
    }
  },
  shadow: {
    enabled: {
      boolean: R
    },
    color: {
      string: D
    },
    size: {
      number: E
    },
    x: {
      number: E
    },
    y: {
      number: E
    },
    __type__: {
      object: q,
      boolean: R
    }
  },
  shape: {
    string: ["custom", "ellipse", "circle", "database", "box", "text", "image", "circularImage", "diamond", "dot", "star", "triangle", "triangleDown", "square", "icon", "hexagon"]
  },
  ctxRenderer: {
    function: "function"
  },
  shapeProperties: {
    borderDashes: {
      boolean: R,
      array: La
    },
    borderRadius: {
      number: E
    },
    interpolation: {
      boolean: R
    },
    useImageSize: {
      boolean: R
    },
    useBorderWithImage: {
      boolean: R
    },
    coordinateOrigin: {
      string: ["center", "top-left"]
    },
    __type__: {
      object: q
    }
  },
  size: {
    number: E
  },
  title: {
    string: D,
    dom: oP,
    undefined: "undefined"
  },
  value: {
    number: E,
    undefined: "undefined"
  },
  widthConstraint: {
    minimum: {
      number: E
    },
    maximum: {
      number: E
    },
    __type__: {
      object: q,
      boolean: R,
      number: E
    }
  },
  x: {
    number: E
  },
  y: {
    number: E
  },
  __type__: {
    object: q
  }
}, sP = {
  configure: {
    enabled: {
      boolean: R
    },
    filter: {
      boolean: R,
      string: D,
      array: La,
      function: "function"
    },
    container: {
      dom: oP
    },
    showButton: {
      boolean: R
    },
    __type__: {
      object: q,
      boolean: R,
      string: D,
      array: La,
      function: "function"
    }
  },
  edges: {
    arrows: {
      to: {
        enabled: {
          boolean: R
        },
        scaleFactor: {
          number: E
        },
        type: {
          string: lf
        },
        imageHeight: {
          number: E
        },
        imageWidth: {
          number: E
        },
        src: {
          string: D
        },
        __type__: {
          object: q,
          boolean: R
        }
      },
      middle: {
        enabled: {
          boolean: R
        },
        scaleFactor: {
          number: E
        },
        type: {
          string: lf
        },
        imageWidth: {
          number: E
        },
        imageHeight: {
          number: E
        },
        src: {
          string: D
        },
        __type__: {
          object: q,
          boolean: R
        }
      },
      from: {
        enabled: {
          boolean: R
        },
        scaleFactor: {
          number: E
        },
        type: {
          string: lf
        },
        imageWidth: {
          number: E
        },
        imageHeight: {
          number: E
        },
        src: {
          string: D
        },
        __type__: {
          object: q,
          boolean: R
        }
      },
      __type__: {
        string: ["from", "to", "middle"],
        object: q
      }
    },
    endPointOffset: {
      from: {
        number: E
      },
      to: {
        number: E
      },
      __type__: {
        object: q,
        number: E
      }
    },
    arrowStrikethrough: {
      boolean: R
    },
    background: {
      enabled: {
        boolean: R
      },
      color: {
        string: D
      },
      size: {
        number: E
      },
      dashes: {
        boolean: R,
        array: La
      },
      __type__: {
        object: q,
        boolean: R
      }
    },
    chosen: {
      label: {
        boolean: R,
        function: "function"
      },
      edge: {
        boolean: R,
        function: "function"
      },
      __type__: {
        object: q,
        boolean: R
      }
    },
    color: {
      color: {
        string: D
      },
      highlight: {
        string: D
      },
      hover: {
        string: D
      },
      inherit: {
        string: ["from", "to", "both"],
        boolean: R
      },
      opacity: {
        number: E
      },
      __type__: {
        object: q,
        string: D
      }
    },
    dashes: {
      boolean: R,
      array: La
    },
    font: {
      color: {
        string: D
      },
      size: {
        number: E
      },
      face: {
        string: D
      },
      background: {
        string: D
      },
      strokeWidth: {
        number: E
      },
      strokeColor: {
        string: D
      },
      align: {
        string: ["horizontal", "top", "middle", "bottom"]
      },
      vadjust: {
        number: E
      },
      multi: {
        boolean: R,
        string: D
      },
      bold: {
        color: {
          string: D
        },
        size: {
          number: E
        },
        face: {
          string: D
        },
        mod: {
          string: D
        },
        vadjust: {
          number: E
        },
        __type__: {
          object: q,
          string: D
        }
      },
      boldital: {
        color: {
          string: D
        },
        size: {
          number: E
        },
        face: {
          string: D
        },
        mod: {
          string: D
        },
        vadjust: {
          number: E
        },
        __type__: {
          object: q,
          string: D
        }
      },
      ital: {
        color: {
          string: D
        },
        size: {
          number: E
        },
        face: {
          string: D
        },
        mod: {
          string: D
        },
        vadjust: {
          number: E
        },
        __type__: {
          object: q,
          string: D
        }
      },
      mono: {
        color: {
          string: D
        },
        size: {
          number: E
        },
        face: {
          string: D
        },
        mod: {
          string: D
        },
        vadjust: {
          number: E
        },
        __type__: {
          object: q,
          string: D
        }
      },
      __type__: {
        object: q,
        string: D
      }
    },
    hidden: {
      boolean: R
    },
    hoverWidth: {
      function: "function",
      number: E
    },
    label: {
      string: D,
      undefined: "undefined"
    },
    labelHighlightBold: {
      boolean: R
    },
    length: {
      number: E,
      undefined: "undefined"
    },
    physics: {
      boolean: R
    },
    scaling: {
      min: {
        number: E
      },
      max: {
        number: E
      },
      label: {
        enabled: {
          boolean: R
        },
        min: {
          number: E
        },
        max: {
          number: E
        },
        maxVisible: {
          number: E
        },
        drawThreshold: {
          number: E
        },
        __type__: {
          object: q,
          boolean: R
        }
      },
      customScalingFunction: {
        function: "function"
      },
      __type__: {
        object: q
      }
    },
    selectionWidth: {
      function: "function",
      number: E
    },
    selfReferenceSize: {
      number: E
    },
    selfReference: {
      size: {
        number: E
      },
      angle: {
        number: E
      },
      renderBehindTheNode: {
        boolean: R
      },
      __type__: {
        object: q
      }
    },
    shadow: {
      enabled: {
        boolean: R
      },
      color: {
        string: D
      },
      size: {
        number: E
      },
      x: {
        number: E
      },
      y: {
        number: E
      },
      __type__: {
        object: q,
        boolean: R
      }
    },
    smooth: {
      enabled: {
        boolean: R
      },
      type: {
        string: ["dynamic", "continuous", "discrete", "diagonalCross", "straightCross", "horizontal", "vertical", "curvedCW", "curvedCCW", "cubicBezier"]
      },
      roundness: {
        number: E
      },
      forceDirection: {
        string: ["horizontal", "vertical", "none"],
        boolean: R
      },
      __type__: {
        object: q,
        boolean: R
      }
    },
    title: {
      string: D,
      undefined: "undefined"
    },
    width: {
      number: E
    },
    widthConstraint: {
      maximum: {
        number: E
      },
      __type__: {
        object: q,
        boolean: R,
        number: E
      }
    },
    value: {
      number: E,
      undefined: "undefined"
    },
    __type__: {
      object: q
    }
  },
  groups: {
    useDefaultGroups: {
      boolean: R
    },
    __any__: cf,
    __type__: {
      object: q
    }
  },
  interaction: {
    dragNodes: {
      boolean: R
    },
    dragView: {
      boolean: R
    },
    hideEdgesOnDrag: {
      boolean: R
    },
    hideEdgesOnZoom: {
      boolean: R
    },
    hideNodesOnDrag: {
      boolean: R
    },
    hover: {
      boolean: R
    },
    keyboard: {
      enabled: {
        boolean: R
      },
      speed: {
        x: {
          number: E
        },
        y: {
          number: E
        },
        zoom: {
          number: E
        },
        __type__: {
          object: q
        }
      },
      bindToWindow: {
        boolean: R
      },
      autoFocus: {
        boolean: R
      },
      __type__: {
        object: q,
        boolean: R
      }
    },
    multiselect: {
      boolean: R
    },
    navigationButtons: {
      boolean: R
    },
    selectable: {
      boolean: R
    },
    selectConnectedEdges: {
      boolean: R
    },
    hoverConnectedEdges: {
      boolean: R
    },
    tooltipDelay: {
      number: E
    },
    zoomView: {
      boolean: R
    },
    zoomSpeed: {
      number: E
    },
    __type__: {
      object: q
    }
  },
  layout: {
    randomSeed: {
      undefined: "undefined",
      number: E,
      string: D
    },
    improvedLayout: {
      boolean: R
    },
    clusterThreshold: {
      number: E
    },
    hierarchical: {
      enabled: {
        boolean: R
      },
      levelSeparation: {
        number: E
      },
      nodeSpacing: {
        number: E
      },
      treeSpacing: {
        number: E
      },
      blockShifting: {
        boolean: R
      },
      edgeMinimization: {
        boolean: R
      },
      parentCentralization: {
        boolean: R
      },
      direction: {
        string: ["UD", "DU", "LR", "RL"]
      },
      sortMethod: {
        string: ["hubsize", "directed"]
      },
      shakeTowards: {
        string: ["leaves", "roots"]
      },
      __type__: {
        object: q,
        boolean: R
      }
    },
    __type__: {
      object: q
    }
  },
  manipulation: {
    enabled: {
      boolean: R
    },
    initiallyActive: {
      boolean: R
    },
    addNode: {
      boolean: R,
      function: "function"
    },
    addEdge: {
      boolean: R,
      function: "function"
    },
    editNode: {
      function: "function"
    },
    editEdge: {
      editWithoutDrag: {
        function: "function"
      },
      __type__: {
        object: q,
        boolean: R,
        function: "function"
      }
    },
    deleteNode: {
      boolean: R,
      function: "function"
    },
    deleteEdge: {
      boolean: R,
      function: "function"
    },
    controlNodeStyle: cf,
    __type__: {
      object: q,
      boolean: R
    }
  },
  nodes: cf,
  physics: {
    enabled: {
      boolean: R
    },
    barnesHut: {
      theta: {
        number: E
      },
      gravitationalConstant: {
        number: E
      },
      centralGravity: {
        number: E
      },
      springLength: {
        number: E
      },
      springConstant: {
        number: E
      },
      damping: {
        number: E
      },
      avoidOverlap: {
        number: E
      },
      __type__: {
        object: q
      }
    },
    forceAtlas2Based: {
      theta: {
        number: E
      },
      gravitationalConstant: {
        number: E
      },
      centralGravity: {
        number: E
      },
      springLength: {
        number: E
      },
      springConstant: {
        number: E
      },
      damping: {
        number: E
      },
      avoidOverlap: {
        number: E
      },
      __type__: {
        object: q
      }
    },
    repulsion: {
      centralGravity: {
        number: E
      },
      springLength: {
        number: E
      },
      springConstant: {
        number: E
      },
      nodeDistance: {
        number: E
      },
      damping: {
        number: E
      },
      __type__: {
        object: q
      }
    },
    hierarchicalRepulsion: {
      centralGravity: {
        number: E
      },
      springLength: {
        number: E
      },
      springConstant: {
        number: E
      },
      nodeDistance: {
        number: E
      },
      damping: {
        number: E
      },
      avoidOverlap: {
        number: E
      },
      __type__: {
        object: q
      }
    },
    maxVelocity: {
      number: E
    },
    minVelocity: {
      number: E
    },
    solver: {
      string: ["barnesHut", "repulsion", "hierarchicalRepulsion", "forceAtlas2Based"]
    },
    stabilization: {
      enabled: {
        boolean: R
      },
      iterations: {
        number: E
      },
      updateInterval: {
        number: E
      },
      onlyDynamicEdges: {
        boolean: R
      },
      fit: {
        boolean: R
      },
      __type__: {
        object: q,
        boolean: R
      }
    },
    timestep: {
      number: E
    },
    adaptiveTimestep: {
      boolean: R
    },
    wind: {
      x: {
        number: E
      },
      y: {
        number: E
      },
      __type__: {
        object: q
      }
    },
    __type__: {
      object: q,
      boolean: R
    }
  },
  //globals :
  autoResize: {
    boolean: R
  },
  clickToUse: {
    boolean: R
  },
  locale: {
    string: D
  },
  locales: {
    __any__: {
      any: kpe
    },
    __type__: {
      object: q
    }
  },
  height: {
    string: D
  },
  width: {
    string: D
  },
  __type__: {
    object: q
  }
}, cp = {
  nodes: {
    borderWidth: [1, 0, 10, 1],
    borderWidthSelected: [2, 0, 10, 1],
    color: {
      border: ["color", "#2B7CE9"],
      background: ["color", "#97C2FC"],
      highlight: {
        border: ["color", "#2B7CE9"],
        background: ["color", "#D2E5FF"]
      },
      hover: {
        border: ["color", "#2B7CE9"],
        background: ["color", "#D2E5FF"]
      }
    },
    opacity: [0, 0, 1, 0.1],
    fixed: {
      x: !1,
      y: !1
    },
    font: {
      color: ["color", "#343434"],
      size: [14, 0, 100, 1],
      face: ["arial", "verdana", "tahoma"],
      background: ["color", "none"],
      strokeWidth: [0, 0, 50, 1],
      strokeColor: ["color", "#ffffff"]
    },
    //group: 'string',
    hidden: !1,
    labelHighlightBold: !0,
    //icon: {
    //  face: 'string',  //'FontAwesome',
    //  code: 'string',  //'\uf007',
    //  size: [50, 0, 200, 1],  //50,
    //  color: ['color','#2B7CE9']   //'#aa00ff'
    //},
    //image: 'string', // --> URL
    physics: !0,
    scaling: {
      min: [10, 0, 200, 1],
      max: [30, 0, 200, 1],
      label: {
        enabled: !1,
        min: [14, 0, 200, 1],
        max: [30, 0, 200, 1],
        maxVisible: [30, 0, 200, 1],
        drawThreshold: [5, 0, 20, 1]
      }
    },
    shadow: {
      enabled: !1,
      color: "rgba(0,0,0,0.5)",
      size: [10, 0, 20, 1],
      x: [5, -30, 30, 1],
      y: [5, -30, 30, 1]
    },
    shape: ["ellipse", "box", "circle", "database", "diamond", "dot", "square", "star", "text", "triangle", "triangleDown", "hexagon"],
    shapeProperties: {
      borderDashes: !1,
      borderRadius: [6, 0, 20, 1],
      interpolation: !0,
      useImageSize: !1
    },
    size: [25, 0, 200, 1]
  },
  edges: {
    arrows: {
      to: {
        enabled: !1,
        scaleFactor: [1, 0, 3, 0.05],
        type: "arrow"
      },
      middle: {
        enabled: !1,
        scaleFactor: [1, 0, 3, 0.05],
        type: "arrow"
      },
      from: {
        enabled: !1,
        scaleFactor: [1, 0, 3, 0.05],
        type: "arrow"
      }
    },
    endPointOffset: {
      from: [0, -10, 10, 1],
      to: [0, -10, 10, 1]
    },
    arrowStrikethrough: !0,
    color: {
      color: ["color", "#848484"],
      highlight: ["color", "#848484"],
      hover: ["color", "#848484"],
      inherit: ["from", "to", "both", !0, !1],
      opacity: [1, 0, 1, 0.05]
    },
    dashes: !1,
    font: {
      color: ["color", "#343434"],
      size: [14, 0, 100, 1],
      face: ["arial", "verdana", "tahoma"],
      background: ["color", "none"],
      strokeWidth: [2, 0, 50, 1],
      strokeColor: ["color", "#ffffff"],
      align: ["horizontal", "top", "middle", "bottom"]
    },
    hidden: !1,
    hoverWidth: [1.5, 0, 5, 0.1],
    labelHighlightBold: !0,
    physics: !0,
    scaling: {
      min: [1, 0, 100, 1],
      max: [15, 0, 100, 1],
      label: {
        enabled: !0,
        min: [14, 0, 200, 1],
        max: [30, 0, 200, 1],
        maxVisible: [30, 0, 200, 1],
        drawThreshold: [5, 0, 20, 1]
      }
    },
    selectionWidth: [1.5, 0, 5, 0.1],
    selfReferenceSize: [20, 0, 200, 1],
    selfReference: {
      size: [20, 0, 200, 1],
      angle: [Math.PI / 2, -6 * Math.PI, 6 * Math.PI, Math.PI / 8],
      renderBehindTheNode: !0
    },
    shadow: {
      enabled: !1,
      color: "rgba(0,0,0,0.5)",
      size: [10, 0, 20, 1],
      x: [5, -30, 30, 1],
      y: [5, -30, 30, 1]
    },
    smooth: {
      enabled: !0,
      type: ["dynamic", "continuous", "discrete", "diagonalCross", "straightCross", "horizontal", "vertical", "curvedCW", "curvedCCW", "cubicBezier"],
      forceDirection: ["horizontal", "vertical", "none"],
      roundness: [0.5, 0, 1, 0.05]
    },
    width: [1, 0, 30, 1]
  },
  layout: {
    //randomSeed: [0, 0, 500, 1],
    //improvedLayout: true,
    hierarchical: {
      enabled: !1,
      levelSeparation: [150, 20, 500, 5],
      nodeSpacing: [100, 20, 500, 5],
      treeSpacing: [200, 20, 500, 5],
      blockShifting: !0,
      edgeMinimization: !0,
      parentCentralization: !0,
      direction: ["UD", "DU", "LR", "RL"],
      sortMethod: ["hubsize", "directed"],
      shakeTowards: ["leaves", "roots"]
      // leaves, roots
    }
  },
  interaction: {
    dragNodes: !0,
    dragView: !0,
    hideEdgesOnDrag: !1,
    hideEdgesOnZoom: !1,
    hideNodesOnDrag: !1,
    hover: !1,
    keyboard: {
      enabled: !1,
      speed: {
        x: [10, 0, 40, 1],
        y: [10, 0, 40, 1],
        zoom: [0.02, 0, 0.1, 5e-3]
      },
      bindToWindow: !0,
      autoFocus: !0
    },
    multiselect: !1,
    navigationButtons: !1,
    selectable: !0,
    selectConnectedEdges: !0,
    hoverConnectedEdges: !0,
    tooltipDelay: [300, 0, 1e3, 25],
    zoomView: !0,
    zoomSpeed: [1, 0.1, 2, 0.1]
  },
  manipulation: {
    enabled: !1,
    initiallyActive: !1
  },
  physics: {
    enabled: !0,
    barnesHut: {
      theta: [0.5, 0.1, 1, 0.05],
      gravitationalConstant: [-2e3, -3e4, 0, 50],
      centralGravity: [0.3, 0, 10, 0.05],
      springLength: [95, 0, 500, 5],
      springConstant: [0.04, 0, 1.2, 5e-3],
      damping: [0.09, 0, 1, 0.01],
      avoidOverlap: [0, 0, 1, 0.01]
    },
    forceAtlas2Based: {
      theta: [0.5, 0.1, 1, 0.05],
      gravitationalConstant: [-50, -500, 0, 1],
      centralGravity: [0.01, 0, 1, 5e-3],
      springLength: [95, 0, 500, 5],
      springConstant: [0.08, 0, 1.2, 5e-3],
      damping: [0.4, 0, 1, 0.01],
      avoidOverlap: [0, 0, 1, 0.01]
    },
    repulsion: {
      centralGravity: [0.2, 0, 10, 0.05],
      springLength: [200, 0, 500, 5],
      springConstant: [0.05, 0, 1.2, 5e-3],
      nodeDistance: [100, 0, 500, 5],
      damping: [0.09, 0, 1, 0.01]
    },
    hierarchicalRepulsion: {
      centralGravity: [0.2, 0, 10, 0.05],
      springLength: [100, 0, 500, 5],
      springConstant: [0.01, 0, 1.2, 5e-3],
      nodeDistance: [120, 0, 500, 5],
      damping: [0.09, 0, 1, 0.01],
      avoidOverlap: [0, 0, 1, 0.01]
    },
    maxVelocity: [50, 0, 150, 1],
    minVelocity: [0.1, 0.01, 0.5, 0.01],
    solver: ["barnesHut", "forceAtlas2Based", "repulsion", "hierarchicalRepulsion"],
    timestep: [0.5, 0.01, 1, 0.01],
    wind: {
      x: [0, -10, 10, 0.1],
      y: [0, -10, 10, 0.1]
    }
    //adaptiveTimestep: true
  }
}, uP = function(i, e, t) {
  var n;
  return !!(on(i).call(i, "physics") && on(n = cp.physics.solver).call(n, e) && t.physics.solver !== e && e !== "wind");
}, Cpe = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  allOptions: sP,
  configuratorHideOption: uP,
  configureOptions: cp
}), xpe = /* @__PURE__ */ (function() {
  function r() {
    M(this, r);
  }
  return N(r, [{
    key: "getDistances",
    value: function(e, t, n) {
      for (var a = {}, o = e.edges, s = 0; s < t.length; s++) {
        var u = t[s], l = {};
        a[u] = l;
        for (var c = 0; c < t.length; c++)
          l[t[c]] = s == c ? 0 : 1e9;
      }
      for (var d = 0; d < n.length; d++) {
        var f = o[n[d]];
        f.connected === !0 && a[f.fromId] !== void 0 && a[f.toId] !== void 0 && (a[f.fromId][f.toId] = 1, a[f.toId][f.fromId] = 1);
      }
      for (var h = t.length, v = 0; v < h; v++)
        for (var p = t[v], y = a[p], m = 0; m < h - 1; m++)
          for (var b = t[m], w = a[b], _ = m + 1; _ < h; _++) {
            var $ = t[_], C = a[$], j = Math.min(w[$], w[p] + y[$]);
            w[$] = j, C[b] = j;
          }
      return a;
    }
  }]), r;
})(), Rpe = /* @__PURE__ */ (function() {
  function r(i, e, t) {
    M(this, r), this.body = i, this.springLength = e, this.springConstant = t, this.distanceSolver = new xpe();
  }
  return N(r, [{
    key: "setOptions",
    value: function(e) {
      e && (e.springLength && (this.springLength = e.springLength), e.springConstant && (this.springConstant = e.springConstant));
    }
    /**
     * Position the system
     *
     * @param {Array.<Node>} nodesArray
     * @param {Array.<vis.Edge>} edgesArray
     * @param {boolean} [ignoreClusters=false]
     */
  }, {
    key: "solve",
    value: function(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = this.distanceSolver.getDistances(this.body, e, t);
      this._createL_matrix(a), this._createK_matrix(a), this._createE_matrix();
      for (var o = 0.01, s = 1, u = 0, l = Math.max(1e3, Math.min(10 * this.body.nodeIndices.length, 6e3)), c = 5, d = 1e9, f = 0, h = 0, v = 0, p = 0, y = 0; d > o && u < l; ) {
        u += 1;
        var m = this._getHighestEnergyNode(n), b = He(m, 4);
        for (f = b[0], d = b[1], h = b[2], v = b[3], p = d, y = 0; p > s && y < c; ) {
          y += 1, this._moveNode(f, h, v);
          var w = this._getEnergy(f), _ = He(w, 3);
          p = _[0], h = _[1], v = _[2];
        }
      }
    }
    /**
     * get the node with the highest energy
     *
     * @param {boolean} ignoreClusters
     * @returns {number[]}
     * @private
     */
  }, {
    key: "_getHighestEnergyNode",
    value: function(e) {
      for (var t = this.body.nodeIndices, n = this.body.nodes, a = 0, o = t[0], s = 0, u = 0, l = 0; l < t.length; l++) {
        var c = t[l];
        if (n[c].predefinedPosition !== !0 || n[c].isCluster === !0 && e === !0 || n[c].options.fixed.x !== !0 || n[c].options.fixed.y !== !0) {
          var d = this._getEnergy(c), f = He(d, 3), h = f[0], v = f[1], p = f[2];
          a < h && (a = h, o = c, s = v, u = p);
        }
      }
      return [o, a, s, u];
    }
    /**
     * calculate the energy of a single node
     *
     * @param {Node.id} m
     * @returns {number[]}
     * @private
     */
  }, {
    key: "_getEnergy",
    value: function(e) {
      var t = He(this.E_sums[e], 2), n = t[0], a = t[1], o = Math.sqrt(Math.pow(n, 2) + Math.pow(a, 2));
      return [o, n, a];
    }
    /**
     * move the node based on it's energy
     * the dx and dy are calculated from the linear system proposed by Kamada and Kawai
     *
     * @param {number} m
     * @param {number} dE_dx
     * @param {number} dE_dy
     * @private
     */
  }, {
    key: "_moveNode",
    value: function(e, t, n) {
      for (var a = this.body.nodeIndices, o = this.body.nodes, s = 0, u = 0, l = 0, c = o[e].x, d = o[e].y, f = this.K_matrix[e], h = this.L_matrix[e], v = 0; v < a.length; v++) {
        var p = a[v];
        if (p !== e) {
          var y = o[p].x, m = o[p].y, b = f[p], w = h[p], _ = 1 / Math.pow(Math.pow(c - y, 2) + Math.pow(d - m, 2), 1.5);
          s += b * (1 - w * Math.pow(d - m, 2) * _), u += b * (w * (c - y) * (d - m) * _), l += b * (1 - w * Math.pow(c - y, 2) * _);
        }
      }
      var $ = s, C = u, j = t, W = l, B = n, L = (j / $ + B / C) / (C / $ - W / C), X = -(C * L + j) / $;
      o[e].x += X, o[e].y += L, this._updateE_matrix(e);
    }
    /**
     * Create the L matrix: edge length times shortest path
     *
     * @param {object} D_matrix
     * @private
     */
  }, {
    key: "_createL_matrix",
    value: function(e) {
      var t = this.body.nodeIndices, n = this.springLength;
      this.L_matrix = [];
      for (var a = 0; a < t.length; a++) {
        this.L_matrix[t[a]] = {};
        for (var o = 0; o < t.length; o++)
          this.L_matrix[t[a]][t[o]] = n * e[t[a]][t[o]];
      }
    }
    /**
     * Create the K matrix: spring constants times shortest path
     *
     * @param {object} D_matrix
     * @private
     */
  }, {
    key: "_createK_matrix",
    value: function(e) {
      var t = this.body.nodeIndices, n = this.springConstant;
      this.K_matrix = [];
      for (var a = 0; a < t.length; a++) {
        this.K_matrix[t[a]] = {};
        for (var o = 0; o < t.length; o++)
          this.K_matrix[t[a]][t[o]] = n * Math.pow(e[t[a]][t[o]], -2);
      }
    }
    /**
     *  Create matrix with all energies between nodes
     *
     *  @private
     */
  }, {
    key: "_createE_matrix",
    value: function() {
      var e = this.body.nodeIndices, t = this.body.nodes;
      this.E_matrix = {}, this.E_sums = {};
      for (var n = 0; n < e.length; n++)
        this.E_matrix[e[n]] = [];
      for (var a = 0; a < e.length; a++) {
        for (var o = e[a], s = t[o].x, u = t[o].y, l = 0, c = 0, d = a; d < e.length; d++) {
          var f = e[d];
          if (f !== o) {
            var h = t[f].x, v = t[f].y, p = 1 / Math.sqrt(Math.pow(s - h, 2) + Math.pow(u - v, 2));
            this.E_matrix[o][d] = [this.K_matrix[o][f] * (s - h - this.L_matrix[o][f] * (s - h) * p), this.K_matrix[o][f] * (u - v - this.L_matrix[o][f] * (u - v) * p)], this.E_matrix[f][a] = this.E_matrix[o][d], l += this.E_matrix[o][d][0], c += this.E_matrix[o][d][1];
          }
        }
        this.E_sums[o] = [l, c];
      }
    }
    /**
     * Update method, just doing single column (rows are auto-updated) (update all sums)
     *
     * @param {number} m
     * @private
     */
  }, {
    key: "_updateE_matrix",
    value: function(e) {
      for (var t = this.body.nodeIndices, n = this.body.nodes, a = this.E_matrix[e], o = this.K_matrix[e], s = this.L_matrix[e], u = n[e].x, l = n[e].y, c = 0, d = 0, f = 0; f < t.length; f++) {
        var h = t[f];
        if (h !== e) {
          var v = a[f], p = v[0], y = v[1], m = n[h].x, b = n[h].y, w = 1 / Math.sqrt(Math.pow(u - m, 2) + Math.pow(l - b, 2)), _ = o[h] * (u - m - s[h] * (u - m) * w), $ = o[h] * (l - b - s[h] * (l - b) * w);
          a[f] = [_, $], c += _, d += $;
          var C = this.E_sums[h];
          C[0] += _ - p, C[1] += $ - y;
        }
      }
      this.E_sums[e] = [c, d];
    }
  }]), r;
})();
function G(r, i, e) {
  var t, n, a, o, s = this;
  if (!(this instanceof G))
    throw new SyntaxError("Constructor must be called with the new operator");
  this.options = {}, this.defaultOptions = {
    locale: "en",
    locales: Coe,
    clickToUse: !1
  }, tt(this.options, this.defaultOptions), this.body = {
    container: r,
    // See comment above for following fields
    nodes: {},
    nodeIndices: [],
    edges: {},
    edgeIndices: [],
    emitter: {
      on: A(t = this.on).call(t, this),
      off: A(n = this.off).call(n, this),
      emit: A(a = this.emit).call(a, this),
      once: A(o = this.once).call(o, this)
    },
    eventListeners: {
      onTap: function() {
      },
      onTouch: function() {
      },
      onDoubleTap: function() {
      },
      onHold: function() {
      },
      onDragStart: function() {
      },
      onDrag: function() {
      },
      onDragEnd: function() {
      },
      onMouseWheel: function() {
      },
      onPinch: function() {
      },
      onMouseMove: function() {
      },
      onRelease: function() {
      },
      onContext: function() {
      }
    },
    data: {
      nodes: null,
      // A DataSet or DataView
      edges: null
      // A DataSet or DataView
    },
    functions: {
      createNode: function() {
      },
      createEdge: function() {
      },
      getPointer: function() {
      }
    },
    modules: {},
    view: {
      scale: 1,
      translation: {
        x: 0,
        y: 0
      }
    },
    selectionBox: {
      show: !1,
      position: {
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 0
        }
      }
    }
  }, this.bindEventListeners(), this.images = new yT(function() {
    return s.body.emitter.emit("_requestRedraw");
  }), this.groups = new Yse(), this.canvas = new fhe(this.body), this.selectionHandler = new rve(this.body, this.canvas), this.interactionHandler = new mhe(this.body, this.canvas, this.selectionHandler), this.view = new vhe(this.body, this.canvas), this.renderer = new she(this.body, this.canvas), this.physics = new Jfe(this.body), this.layoutEngine = new Ope(this.body), this.clustering = new ahe(this.body), this.manipulation = new Ipe(this.body, this.canvas, this.selectionHandler, this.interactionHandler), this.nodesHandler = new Dde(this.body, this.images, this.groups, this.layoutEngine), this.edgesHandler = new zfe(this.body, this.images, this.groups), this.body.modules.kamadaKawai = new Rpe(this.body, 150, 0.05), this.body.modules.clustering = this.clustering, this.canvas._create(), this.setOptions(e), this.setData(i);
}
nS(G.prototype);
G.prototype.setOptions = function(r) {
  var i = this;
  if (r === null && (r = void 0), r !== void 0) {
    var e = uoe.validate(r, sP);
    e === !0 && console.error("%cErrors have been found in the supplied options object.", sT);
    var t = ["locale", "locales", "clickToUse"];
    if (Pa(t, this.options, r), r.locale !== void 0 && (r.locale = xoe(r.locales || this.options.locales, r.locale)), r = this.layoutEngine.setOptions(r.layout, r), this.canvas.setOptions(r), this.groups.setOptions(r.groups), this.nodesHandler.setOptions(r.nodes), this.edgesHandler.setOptions(r.edges), this.physics.setOptions(r.physics), this.manipulation.setOptions(r.manipulation, r, this.options), this.interactionHandler.setOptions(r.interaction), this.renderer.setOptions(r.interaction), this.selectionHandler.setOptions(r.interaction), r.groups !== void 0 && this.body.emitter.emit("refreshNodes"), "configure" in r && (this.configurator || (this.configurator = new ooe(this, this.body.container, cp, this.canvas.pixelRatio, uP)), this.configurator.setOptions(r.configure)), this.configurator && this.configurator.options.enabled === !0) {
      var n = {
        nodes: {},
        edges: {},
        layout: {},
        interaction: {},
        manipulation: {},
        physics: {},
        global: {}
      };
      Ae(n.nodes, this.nodesHandler.options), Ae(n.edges, this.edgesHandler.options), Ae(n.layout, this.layoutEngine.options), Ae(n.interaction, this.selectionHandler.options), Ae(n.interaction, this.renderer.options), Ae(n.interaction, this.interactionHandler.options), Ae(n.manipulation, this.manipulation.options), Ae(n.physics, this.physics.options), Ae(n.global, this.canvas.options), Ae(n.global, this.options), this.configurator.setModuleOptions(n);
    }
    r.clickToUse !== void 0 ? r.clickToUse === !0 ? this.activator === void 0 && (this.activator = new aoe(this.canvas.frame), this.activator.on("change", function() {
      i.body.emitter.emit("activate");
    })) : (this.activator !== void 0 && (this.activator.destroy(), delete this.activator), this.body.emitter.emit("activate")) : this.body.emitter.emit("activate"), this.canvas.setSize(), this.body.emitter.emit("startSimulation");
  }
};
G.prototype._updateVisibleIndices = function() {
  var r = this.body.nodes, i = this.body.edges;
  this.body.nodeIndices = [], this.body.edgeIndices = [];
  for (var e in r)
    Object.prototype.hasOwnProperty.call(r, e) && !this.clustering._isClusteredNode(e) && r[e].options.hidden === !1 && this.body.nodeIndices.push(r[e].id);
  for (var t in i)
    if (Object.prototype.hasOwnProperty.call(i, t)) {
      var n = i[t], a = r[n.fromId], o = r[n.toId], s = a !== void 0 && o !== void 0, u = !this.clustering._isClusteredEdge(t) && n.options.hidden === !1 && s && a.options.hidden === !1 && // Also hidden if any of its connecting nodes are hidden
      o.options.hidden === !1;
      u && this.body.edgeIndices.push(n.id);
    }
};
G.prototype.bindEventListeners = function() {
  var r = this;
  this.body.emitter.on("_dataChanged", function() {
    r.edgesHandler._updateState(), r.body.emitter.emit("_dataUpdated");
  }), this.body.emitter.on("_dataUpdated", function() {
    r.clustering._updateState(), r._updateVisibleIndices(), r._updateValueRange(r.body.nodes), r._updateValueRange(r.body.edges), r.body.emitter.emit("startSimulation"), r.body.emitter.emit("_requestRedraw");
  });
};
G.prototype.setData = function(r) {
  if (this.body.emitter.emit("resetPhysics"), this.body.emitter.emit("_resetData"), this.selectionHandler.unselectAll(), r && r.dot && (r.nodes || r.edges))
    throw new SyntaxError('Data must contain either parameter "dot" or  parameter pair "nodes" and "edges", but not both.');
  if (this.setOptions(r && r.options), r && r.dot) {
    console.warn("The dot property has been deprecated. Please use the static convertDot method to convert DOT into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertDot(dotString);");
    var i = Yv(r.dot);
    this.setData(i);
    return;
  } else if (r && r.gephi) {
    console.warn("The gephi property has been deprecated. Please use the static convertGephi method to convert gephi into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertGephi(gephiJson);");
    var e = Xv(r.gephi);
    this.setData(e);
    return;
  } else
    this.nodesHandler.setData(r && r.nodes, !0), this.edgesHandler.setData(r && r.edges, !0);
  this.body.emitter.emit("_dataChanged"), this.body.emitter.emit("_dataLoaded"), this.body.emitter.emit("initPhysics");
};
G.prototype.destroy = function() {
  this.body.emitter.emit("destroy"), this.body.emitter.off(), this.off(), delete this.groups, delete this.canvas, delete this.selectionHandler, delete this.interactionHandler, delete this.view, delete this.renderer, delete this.physics, delete this.layoutEngine, delete this.clustering, delete this.manipulation, delete this.nodesHandler, delete this.edgesHandler, delete this.configurator, delete this.images;
  for (var r in this.body.nodes)
    Object.prototype.hasOwnProperty.call(this.body.nodes, r) && delete this.body.nodes[r];
  for (var i in this.body.edges)
    Object.prototype.hasOwnProperty.call(this.body.edges, i) && delete this.body.edges[i];
  Xr(this.body.container);
};
G.prototype._updateValueRange = function(r) {
  var i, e = void 0, t = void 0, n = 0;
  for (i in r)
    if (Object.prototype.hasOwnProperty.call(r, i)) {
      var a = r[i].getValue();
      a !== void 0 && (e = e === void 0 ? a : Math.min(a, e), t = t === void 0 ? a : Math.max(a, t), n += a);
    }
  if (e !== void 0 && t !== void 0)
    for (i in r)
      Object.prototype.hasOwnProperty.call(r, i) && r[i].setValueRange(e, t, n);
};
G.prototype.isActive = function() {
  return !this.activator || this.activator.active;
};
G.prototype.setSize = function() {
  return this.canvas.setSize.apply(this.canvas, arguments);
};
G.prototype.canvasToDOM = function() {
  return this.canvas.canvasToDOM.apply(this.canvas, arguments);
};
G.prototype.DOMtoCanvas = function() {
  return this.canvas.DOMtoCanvas.apply(this.canvas, arguments);
};
G.prototype.findNode = function() {
  return this.clustering.findNode.apply(this.clustering, arguments);
};
G.prototype.isCluster = function() {
  return this.clustering.isCluster.apply(this.clustering, arguments);
};
G.prototype.openCluster = function() {
  return this.clustering.openCluster.apply(this.clustering, arguments);
};
G.prototype.cluster = function() {
  return this.clustering.cluster.apply(this.clustering, arguments);
};
G.prototype.getNodesInCluster = function() {
  return this.clustering.getNodesInCluster.apply(this.clustering, arguments);
};
G.prototype.clusterByConnection = function() {
  return this.clustering.clusterByConnection.apply(this.clustering, arguments);
};
G.prototype.clusterByHubsize = function() {
  return this.clustering.clusterByHubsize.apply(this.clustering, arguments);
};
G.prototype.updateClusteredNode = function() {
  return this.clustering.updateClusteredNode.apply(this.clustering, arguments);
};
G.prototype.getClusteredEdges = function() {
  return this.clustering.getClusteredEdges.apply(this.clustering, arguments);
};
G.prototype.getBaseEdge = function() {
  return this.clustering.getBaseEdge.apply(this.clustering, arguments);
};
G.prototype.getBaseEdges = function() {
  return this.clustering.getBaseEdges.apply(this.clustering, arguments);
};
G.prototype.updateEdge = function() {
  return this.clustering.updateEdge.apply(this.clustering, arguments);
};
G.prototype.clusterOutliers = function() {
  return this.clustering.clusterOutliers.apply(this.clustering, arguments);
};
G.prototype.getSeed = function() {
  return this.layoutEngine.getSeed.apply(this.layoutEngine, arguments);
};
G.prototype.enableEditMode = function() {
  return this.manipulation.enableEditMode.apply(this.manipulation, arguments);
};
G.prototype.disableEditMode = function() {
  return this.manipulation.disableEditMode.apply(this.manipulation, arguments);
};
G.prototype.addNodeMode = function() {
  return this.manipulation.addNodeMode.apply(this.manipulation, arguments);
};
G.prototype.editNode = function() {
  return this.manipulation.editNode.apply(this.manipulation, arguments);
};
G.prototype.editNodeMode = function() {
  return console.warn("Deprecated: Please use editNode instead of editNodeMode."), this.manipulation.editNode.apply(this.manipulation, arguments);
};
G.prototype.addEdgeMode = function() {
  return this.manipulation.addEdgeMode.apply(this.manipulation, arguments);
};
G.prototype.editEdgeMode = function() {
  return this.manipulation.editEdgeMode.apply(this.manipulation, arguments);
};
G.prototype.deleteSelected = function() {
  return this.manipulation.deleteSelected.apply(this.manipulation, arguments);
};
G.prototype.getPositions = function() {
  return this.nodesHandler.getPositions.apply(this.nodesHandler, arguments);
};
G.prototype.getPosition = function() {
  return this.nodesHandler.getPosition.apply(this.nodesHandler, arguments);
};
G.prototype.storePositions = function() {
  return this.nodesHandler.storePositions.apply(this.nodesHandler, arguments);
};
G.prototype.moveNode = function() {
  return this.nodesHandler.moveNode.apply(this.nodesHandler, arguments);
};
G.prototype.getBoundingBox = function() {
  return this.nodesHandler.getBoundingBox.apply(this.nodesHandler, arguments);
};
G.prototype.getConnectedNodes = function(r) {
  return this.body.nodes[r] !== void 0 ? this.nodesHandler.getConnectedNodes.apply(this.nodesHandler, arguments) : this.edgesHandler.getConnectedNodes.apply(this.edgesHandler, arguments);
};
G.prototype.getConnectedEdges = function() {
  return this.nodesHandler.getConnectedEdges.apply(this.nodesHandler, arguments);
};
G.prototype.startSimulation = function() {
  return this.physics.startSimulation.apply(this.physics, arguments);
};
G.prototype.stopSimulation = function() {
  return this.physics.stopSimulation.apply(this.physics, arguments);
};
G.prototype.stabilize = function() {
  return this.physics.stabilize.apply(this.physics, arguments);
};
G.prototype.getSelection = function() {
  return this.selectionHandler.getSelection.apply(this.selectionHandler, arguments);
};
G.prototype.setSelection = function() {
  return this.selectionHandler.setSelection.apply(this.selectionHandler, arguments);
};
G.prototype.getSelectedNodes = function() {
  return this.selectionHandler.getSelectedNodeIds.apply(this.selectionHandler, arguments);
};
G.prototype.getSelectedEdges = function() {
  return this.selectionHandler.getSelectedEdgeIds.apply(this.selectionHandler, arguments);
};
G.prototype.getNodeAt = function() {
  var r = this.selectionHandler.getNodeAt.apply(this.selectionHandler, arguments);
  return r !== void 0 && r.id !== void 0 ? r.id : r;
};
G.prototype.getEdgeAt = function() {
  var r = this.selectionHandler.getEdgeAt.apply(this.selectionHandler, arguments);
  return r !== void 0 && r.id !== void 0 ? r.id : r;
};
G.prototype.selectNodes = function() {
  return this.selectionHandler.selectNodes.apply(this.selectionHandler, arguments);
};
G.prototype.selectEdges = function() {
  return this.selectionHandler.selectEdges.apply(this.selectionHandler, arguments);
};
G.prototype.unselectAll = function() {
  this.selectionHandler.unselectAll.apply(this.selectionHandler, arguments), this.selectionHandler.commitWithoutEmitting.apply(this.selectionHandler), this.redraw();
};
G.prototype.redraw = function() {
  return this.renderer.redraw.apply(this.renderer, arguments);
};
G.prototype.getScale = function() {
  return this.view.getScale.apply(this.view, arguments);
};
G.prototype.getViewPosition = function() {
  return this.view.getViewPosition.apply(this.view, arguments);
};
G.prototype.fit = function() {
  return this.view.fit.apply(this.view, arguments);
};
G.prototype.moveTo = function() {
  return this.view.moveTo.apply(this.view, arguments);
};
G.prototype.focus = function() {
  return this.view.focus.apply(this.view, arguments);
};
G.prototype.releaseNode = function() {
  return this.view.releaseNode.apply(this.view, arguments);
};
G.prototype.getOptionsFromConfigurator = function() {
  var r = {};
  return this.configurator && (r = this.configurator.getOptions.apply(this.configurator)), r;
};
var Ape = Yv;
const Dpe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Network: G,
  NetworkImages: yT,
  networkDOTParser: goe,
  networkGephiParser: moe,
  networkOptions: Cpe,
  parseDOTNetwork: Ape,
  parseGephiNetwork: Xv
}, Symbol.toStringTag, { value: "Module" }));
let L1 = /* @__PURE__ */ new Map([
  [
    null,
    [
      ["created_by_ref", "created-by", !0],
      ["object_marking_refs", "applies-to", !1]
    ]
  ],
  ["directory", [["contains_refs", "contains", !0]]],
  ["domain-name", [["resolves_to_refs", "resolves-to", !0]]],
  ["email-addr", [["belongs_to_ref", "belongs-to", !0]]],
  [
    "email-message",
    [
      ["from_ref", "from", !0],
      ["sender_ref", "sent-by", !0],
      ["to_refs", "to", !0],
      ["cc_refs", "cc", !0],
      ["bcc_refs", "bcc", !0],
      ["raw_email_ref", "raw-binary-of", !1]
    ]
  ],
  [
    "file",
    [
      ["contains_refs", "contains", !0],
      ["content_ref", "contents-of", !1],
      ["parent_directory_ref", "parent-of", !1]
    ]
  ],
  ["grouping", [["object_refs", "refers-to", !0]]],
  ["ipv4-addr", [["resolves_to_refs", "resolves-to", !0]]],
  ["ipv6-addr", [["resolves_to_refs", "resolves-to", !0]]],
  ["language-content", [["object_ref", "applies-to", !0]]],
  ["malware", [["sample_refs", "sample-of", !1]]],
  ["malware-analysis", [["analysis_sco_refs", "captured-by", !1]]],
  [
    "network-traffic",
    [
      ["src_ref", "source-of", !1],
      ["dst_ref", "destination-of", !1],
      ["src_payload_ref", "source-payload-of", !1],
      ["dst_payload_ref", "destination-payload-of", !1],
      ["encapsulates_refs", "encapsulated-by", !1],
      ["encapsulated_by_ref", "encapsulated-by", !0]
    ]
  ],
  ["note", [["object_refs", "refers-to", !0]]],
  ["observed-data", [["object_refs", "refers-to", !0]]],
  ["opinion", [["object_refs", "refers-to", !0]]],
  [
    "process",
    [
      ["opened_connection_refs", "opened-by", !1],
      ["creator_user_ref", "created-by", !0],
      ["image_ref", "image-of", !1],
      ["parent_ref", "parent-of", !1]
    ]
  ],
  ["report", [["object_refs", "refers-to", !0]]],
  [
    "sighting",
    [
      ["sighting_of_ref", "sighting-of", !0],
      ["observed_data_refs", "observed", !0],
      ["where_sighted_refs", "saw", !1]
    ]
  ],
  ["windows-registry-key", [["creator_user_ref", "created-by", !0]]]
]), kh = /* @__PURE__ */ new Map([
  ["$eq", (r, i) => r === i],
  ["$gt", (r, i) => r > i],
  ["$gte", (r, i) => r >= i],
  ["$in", (r, i) => i.includes(r)],
  ["$lt", (r, i) => r < i],
  ["$lte", (r, i) => r <= i],
  ["$ne", (r, i) => r !== i],
  ["$nin", (r, i) => !i.includes(r)]
]);
class yu extends Error {
  constructor(i = null, e = null) {
    i || (i = "Invalid STIX content: expected a non-empty mapping (object or Map) which is a single STIX object or bundle with at least one object, or a non-empty array of objects."), super(i, e);
  }
}
class Mpe extends yu {
  stixObject;
  constructor(i, e = null) {
    let t = "Invalid STIX object: requires at least type and id properties", n = i.get("id");
    n && (t += ": " + n), super(t, e), this.stixObject = i;
  }
}
class z1 extends Error {
  constructor(i = null, e = null) {
    i || (i = "Invalid configuration value: must be a JSON or Javascript object."), super(i, e);
  }
}
class lP extends Error {
  constructor(i = null, e = null) {
    let t = "In match criteria, invalid operator: " + i;
    super(t, e);
  }
}
function cP(r) {
  let i = !1;
  return r && (i = Object.getPrototypeOf(r) === Object.prototype), i;
}
function Npe(r, i) {
  return cP(i) ? new Map(Object.entries(i)) : i;
}
function Ch(r) {
  let i;
  if (cP(r)) {
    let e = /* @__PURE__ */ new Map();
    for (let [t, n] of Object.entries(r))
      e.set(t, Ch(n));
    i = e;
  } else Array.isArray(r) ? i = r.map(Ch) : i = r;
  return i;
}
function dP(r) {
  let i;
  return typeof r == "string" || r instanceof String ? i = JSON.parse(r, Npe) : i = Ch(r), i;
}
function gu(r, i, e) {
  let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  if (e instanceof Map)
    for (let [u, l] of e)
      if (["$and", "$or", "$not"].includes(u))
        t.set(u, l);
      else if (kh.has(u))
        n.set(u, l);
      else if (u === "$exists")
        a.set(u, l);
      else {
        if (u.startsWith("$"))
          throw new lP(u);
        n.set(u, l);
      }
  else n.set("$eq", e);
  let o = !0;
  for (let [u, l] of t) {
    if (u === "$or") {
      let c = !1;
      for (let d of l)
        if (gu(r, i, d)) {
          c = !0;
          break;
        }
      o &&= c;
    } else if (u === "$and") {
      let c = !0;
      for (let d of l)
        if (!gu(r, i, d)) {
          c = !1;
          break;
        }
      o &&= c;
    } else o &&= !gu(r, i, l);
    if (!o) break;
  }
  let s = !1;
  if (o) {
    n.size > 0 && (o = !1);
    for (let u of Qa(r, i))
      if (s = !0, o || (o = Li(u, n), o)) break;
  }
  if (o && a.has("$exists")) {
    let u = a.get("$exists");
    o &&= u === s;
  }
  return o;
}
function Li(r, i) {
  let e = !0, t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  if (i instanceof Map)
    for (let [o, s] of i)
      if (["$and", "$or", "$not"].includes(o))
        t.set(o, s);
      else if (kh.has(o)) n.set(o, s);
      else {
        if (o.startsWith("$")) throw new lP(o);
        a.set(o, s);
      }
  else r instanceof Map ? e = !1 : n.set("$eq", i);
  if (e)
    for (let [o, s] of t) {
      if (o === "$or") {
        let u = !1;
        for (let l of s)
          if (Li(r, l)) {
            u = !0;
            break;
          }
        e &&= u;
      } else if (o === "$and") {
        let u = !0;
        for (let l of s)
          if (!Li(r, l)) {
            u = !1;
            break;
          }
        e &&= u;
      } else e &&= !Li(r, s);
      if (!e) break;
    }
  if (e)
    for (let [o, s] of n) {
      let u = kh.get(o);
      if (e &&= u(r, s), !e) break;
    }
  if (e) {
    for (let [o, s] of a)
      if (r instanceof Map ? e &&= gu(r, o, s) : e = !1, !e) break;
  }
  return e;
}
function Fpe(r) {
  return r.has("id") && r.has("type");
}
function dp(r) {
  return r !== "relationship";
}
function xh(r) {
  let i = r.length - 38, e = r.substring(0, i);
  return dp(e);
}
function Bpe(r, i) {
  let e, t = i.get(r) || 0;
  return ++t, i.set(r, t), t === 1 ? e = r : e = r + "(" + t.toString() + ")", e;
}
function jpe(r, i, e, t = null) {
  let n = r.get("id"), a = r.get("type"), o = i.get(n);
  if (!o) {
    let s, u;
    if (t && (u = t.get("userLabels"), u && (s = u.get(n)), !s)) {
      let l = t.get(a);
      if (l) {
        let c = l.get("displayProperty");
        c && (s = r.get(c));
      }
    }
    s || (s = r.get("name")), s || (s = r.get("value")), s || (s = r.get("path")), s || (s = a), s.length > 40 && (s = s.substr(0, 40) + "..."), o = Bpe(s, e), i.set(n, o);
  }
  return o;
}
function fP(r, i, e) {
  let t;
  return e || (e = "stix2_" + r.replaceAll("-", "_") + "_icon_tiny_round_v1.png"), i == null ? t = e : t = i + "/" + e, t;
}
function hP(r, i, e, t = null) {
  let n = {
    from: r,
    to: i,
    label: e
  };
  return t && (n.id = t), n;
}
function Lpe(r, i) {
  return {
    id: i.get("id"),
    label: r
  };
}
function zpe(r = null) {
  let i = fP("custom_object", r, null);
  return i = i.replace(".png", ".svg"), i;
}
function Wpe(r, i = null) {
  let e = null;
  i && (e = i.get("iconDir")), console.log("iconPath1 from stix2viz", e);
  let t = zpe(e), n = /* @__PURE__ */ new Set();
  if (console.log("stixIdToObject from makeLegendData", r), r)
    for (let o of r.values()) {
      let s = o.get("type");
      dp(s) && n.add(s);
    }
  let a = /* @__PURE__ */ new Map();
  for (let o of n) {
    let s;
    if (i) {
      let l = i.get(o);
      l && (s = l.get("displayIcon"));
    }
    let u = fP(o, e, s);
    console.log("iconUrls", u), a.set(o, u);
  }
  return [a, t];
}
function vP(r) {
  try {
    r = dP(r);
  } catch (i) {
    throw new z1(null, { cause: i });
  }
  if (!(r instanceof Map)) throw new z1();
  return r;
}
function Hpe(r) {
  let i;
  try {
    r = dP(r);
  } catch (e) {
    throw new yu(null, { cause: e });
  }
  if (r instanceof Map && r.size > 0)
    r.get("type") === "bundle" ? i = r.get("objects") || [] : i = [r];
  else if (Array.isArray(r)) i = r;
  else throw new yu();
  if (!Array.isArray(i) || i.length <= 0)
    throw new yu();
  for (let e of i)
    if (!Fpe(e))
      throw new Mpe(e);
  return i;
}
class Upe {
  #e;
  constructor(i, e = null) {
    this.#e = Wpe(i, e);
  }
  get legendData() {
    return this.#e;
  }
  on(...i) {
  }
  destroy() {
  }
  toggleStixType(i) {
  }
  selectNode(i) {
  }
}
class Vpe extends Upe {
  #e;
  #r;
  #t;
  constructor(i, e, t, n, a, o = null) {
    o !== null && (o = vP(o)), super(a, o), this.#r = n, this.#e = new Hn(), console.log("this.#nodeDataSet", this.#e), t?.forEach((c, d) => {
      this.#e.add({
        ...c,
        group: a.get(d).get("type")
      });
    });
    let s = this.#n(), u = {
      nodes: this.#e,
      edges: this.#r
    }, l = {
      groups: s,
      nodes: {
        color: {
          border: "black"
        },
        font: {
          size: 20
        },
        borderWidth: 2,
        chosen: {
          node: (c, d, f, h) => {
            f && (c.shadow = !0, c.shadowX = c.shadowY = 8, c.borderWidth = 4);
          }
        }
      },
      edges: {
        arrows: "to",
        width: 3,
        color: "gray",
        font: {
          size: 20
        }
      },
      physics: {
        solver: "barnesHut",
        barnesHut: {
          theta: 0.9,
          gravitationalConstant: -3e3,
          centralGravity: 0,
          springConstant: 0.01,
          springLength: 400
        },
        minVelocity: 1,
        stabilization: !0
      }
    };
    console.log("graphOpts2", l), this.#t = new i.Network(e, u, l);
  }
  get graph() {
    return this.#t;
  }
  get nodeDataSet() {
    return this.#e;
  }
  get edgeDataSet() {
    return this.#r;
  }
  on(...i) {
    this.graph.on(...i);
  }
  destroy() {
    this.graph.destroy();
  }
  #n() {
    let [i, e] = this.legendData, t = {};
    const n = /* @__PURE__ */ Object.assign({ "./icons/stix2_artifact_icon_tiny_round_v1.png": () => import("./stix2_artifact_icon_tiny_round_v1-BFJTS41s.mjs"), "./icons/stix2_attack_pattern_icon_tiny_round_v1.png": () => import("./stix2_attack_pattern_icon_tiny_round_v1-YlcHMBUC.mjs"), "./icons/stix2_autonomous_system_icon_tiny_round_v1.png": () => import("./stix2_autonomous_system_icon_tiny_round_v1-Bo0tGSJF.mjs"), "./icons/stix2_bundle_icon_tiny_round_v1.png": () => import("./stix2_bundle_icon_tiny_round_v1-hSTv-Gdf.mjs"), "./icons/stix2_campaign_icon_tiny_round_v1.png": () => import("./stix2_campaign_icon_tiny_round_v1-BR8EgOUA.mjs"), "./icons/stix2_coa_icon_tiny_round_v1.png": () => import("./stix2_coa_icon_tiny_round_v1-DJt4tFa7.mjs"), "./icons/stix2_course_of_action_icon_tiny_round_v1.png": () => import("./stix2_course_of_action_icon_tiny_round_v1-DBh0wPOw.mjs"), "./icons/stix2_custom_object_icon_tiny_round_v1.svg": () => import("./stix2_custom_object_icon_tiny_round_v1-B4ty7V_A.mjs"), "./icons/stix2_directory_icon_tiny_round_v1.png": () => import("./stix2_directory_icon_tiny_round_v1-C1dtq2gY.mjs"), "./icons/stix2_domain_name_icon_tiny_round_v1.png": () => import("./stix2_domain_name_icon_tiny_round_v1-DLtdcVbc.mjs"), "./icons/stix2_email_addr_icon_tiny_round_v1.png": () => import("./stix2_email_addr_icon_tiny_round_v1-Bv5G1H3c.mjs"), "./icons/stix2_email_message_icon_tiny_round_v1.png": () => import("./stix2_email_message_icon_tiny_round_v1-Bsgtq0cg.mjs"), "./icons/stix2_file_icon_tiny_round_v1.png": () => import("./stix2_file_icon_tiny_round_v1-kPRc-Q8D.mjs"), "./icons/stix2_grouping_icon_tiny_round_v1.png": () => import("./stix2_grouping_icon_tiny_round_v1-DYqDn5C_.mjs"), "./icons/stix2_http_icon_tiny_round_v1.png": () => import("./stix2_http_icon_tiny_round_v1-6WIXW_CD.mjs"), "./icons/stix2_identity_icon_tiny_round_v1.png": () => import("./stix2_identity_icon_tiny_round_v1-DGx70CBQ.mjs"), "./icons/stix2_incident_icon_tiny_round_v1.png": () => import("./stix2_incident_icon_tiny_round_v1-DovicL8i.mjs"), "./icons/stix2_indicator_icon_tiny_round_v1.png": () => import("./stix2_indicator_icon_tiny_round_v1-BWpoAhtB.mjs"), "./icons/stix2_infrastructure_icon_tiny_round_v1.png": () => import("./stix2_infrastructure_icon_tiny_round_v1-BiWoSEQt.mjs"), "./icons/stix2_intrusion_set_icon_tiny_round_v1.png": () => import("./stix2_intrusion_set_icon_tiny_round_v1-DpOqadAL.mjs"), "./icons/stix2_ipv4_addr_icon_tiny_round_v1.png": () => import("./stix2_ipv4_addr_icon_tiny_round_v1-Dfma1yK7.mjs"), "./icons/stix2_ipv6_addr_icon_tiny_round_v1.png": () => import("./stix2_ipv6_addr_icon_tiny_round_v1-v1IdJ7-q.mjs"), "./icons/stix2_language_icon_tiny_round_v1.png": () => import("./stix2_language_icon_tiny_round_v1-HjOcq3oh.mjs"), "./icons/stix2_location_icon_tiny_round_v1.png": () => import("./stix2_location_icon_tiny_round_v1-CfQBWxa9.mjs"), "./icons/stix2_mac_addr_icon_tiny_round_v1.png": () => import("./stix2_mac_addr_icon_tiny_round_v1-DoRKmdQ0.mjs"), "./icons/stix2_malware_analysis_icon_tiny_round_v1.png": () => import("./stix2_malware_analysis_icon_tiny_round_v1-Ni5lxNv4.mjs"), "./icons/stix2_malware_icon_tiny_round_v1.png": () => import("./stix2_malware_icon_tiny_round_v1-BGSVoYuy.mjs"), "./icons/stix2_marking_definition_icon_tiny_round_v1.png": () => import("./stix2_marking_definition_icon_tiny_round_v1-CSD0h85B.mjs"), "./icons/stix2_mutex_icon_tiny_round_v1.png": () => import("./stix2_mutex_icon_tiny_round_v1-DpRIfMYz.mjs"), "./icons/stix2_network_traffic_icon_tiny_round_v1.png": () => import("./stix2_network_traffic_icon_tiny_round_v1-BSzbza3w.mjs"), "./icons/stix2_note_icon_tiny_round_v1.png": () => import("./stix2_note_icon_tiny_round_v1-BYLCm02C.mjs"), "./icons/stix2_observed_data_icon_tiny_round_v1.png": () => import("./stix2_observed_data_icon_tiny_round_v1-daYCo9zw.mjs"), "./icons/stix2_opinion_icon_tiny_round_v1.png": () => import("./stix2_opinion_icon_tiny_round_v1-DFJOxyvk.mjs"), "./icons/stix2_process_icon_tiny_round_v1.png": () => import("./stix2_process_icon_tiny_round_v1-DH3Su4Se.mjs"), "./icons/stix2_relationship_icon_tiny_round_v1.png": () => import("./stix2_relationship_icon_tiny_round_v1-BXl0f2rA.mjs"), "./icons/stix2_report_icon_tiny_round_v1.png": () => import("./stix2_report_icon_tiny_round_v1-yxQV0YcT.mjs"), "./icons/stix2_sighting_icon_tiny_round_v1.png": () => import("./stix2_sighting_icon_tiny_round_v1-PK2zJhJC.mjs"), "./icons/stix2_software_icon_tiny_round_v1.png": () => import("./stix2_software_icon_tiny_round_v1-83ltUY69.mjs"), "./icons/stix2_source_icon_tiny_round_v1.png": () => import("./stix2_source_icon_tiny_round_v1-DGx70CBQ.mjs"), "./icons/stix2_threat_actor_icon_tiny_round_v1.png": () => import("./stix2_threat_actor_icon_tiny_round_v1-C03tC5Co.mjs"), "./icons/stix2_tlp_icon_tiny_round_v1.png": () => import("./stix2_tlp_icon_tiny_round_v1-D_22ADQJ.mjs"), "./icons/stix2_tool_icon_tiny_round_v1.png": () => import("./stix2_tool_icon_tiny_round_v1-DOiB_XJV.mjs"), "./icons/stix2_url_icon_tiny_round_v1.png": () => import("./stix2_url_icon_tiny_round_v1-BZSw8bvK.mjs"), "./icons/stix2_user_account_icon_tiny_round_v1.png": () => import("./stix2_user_account_icon_tiny_round_v1-CJ6KPRoP.mjs"), "./icons/stix2_victim_icon_tiny_round_v1.png": () => import("./stix2_victim_icon_tiny_round_v1-m9iXOvIq.mjs"), "./icons/stix2_victim_target_icon_tiny_round_v1.png": () => import("./stix2_victim_target_icon_tiny_round_v1-yqbxBaQs.mjs"), "./icons/stix2_vulnerability_icon_tiny_round_v1.png": () => import("./stix2_vulnerability_icon_tiny_round_v1-C1AXu-nV.mjs"), "./icons/stix2_windows_registry_key_icon_tiny_round_v1.png": () => import("./stix2_windows_registry_key_icon_tiny_round_v1-C20UsbGw.mjs"), "./icons/stix2_x509_certificate_icon_tiny_round_v1.png": () => import("./stix2_x509_certificate_icon_tiny_round_v1-BOVMv5gs.mjs") });
    for (let [a, o] of i) {
      console.log("image url", i);
      const u = `../stix2viz/icons/${o.substring(o.lastIndexOf("/") + 1)}`;
      n[u] && (t[a] = {
        shape: "circularImage",
        image: n[u],
        brokenImage: e
      });
    }
    return t;
  }
  toggleStixType(i) {
    let e = this.nodeDataSet.get({
      filter: (s) => s.group === i,
      fields: ["id", "hidden"]
    });
    if (e.length === 0) return;
    this.enablePhysics();
    let t = !e[0].hidden, n = [], a = [], o = /* @__PURE__ */ new Set();
    for (let s of e) {
      n.push({
        id: s.id,
        hidden: t,
        physics: !t
      });
      let u = this.edgeDataSet.get({
        filter: (l) => (l.from === s.id || l.to === s.id) && !l.hidden === t && !o.has(l.id),
        fields: ["id", "from", "to"]
      });
      if (t)
        for (let l of u)
          a.push({
            id: l.id,
            hidden: !0,
            physics: !1
          }), o.add(l.id);
      else
        for (let l of u) {
          let c;
          l.from === s.id ? c = l.to : c = l.from;
          let d = this.nodeDataSet.get(c, {
            fields: ["group", "hidden"]
          });
          (!d.hidden || d.group === i) && (a.push({
            id: l.id,
            hidden: !1,
            physics: !0
          }), o.add(l.id));
        }
    }
    this.nodeDataSet.update(n), this.edgeDataSet.update(a);
  }
  selectNode(i) {
    this.graph.selectNodes([i]);
  }
  enablePhysics() {
    this.#t.setOptions({ physics: !0 });
  }
  disablePhysics() {
    this.#t.setOptions({ physics: !1 });
  }
}
function Gpe(r, i) {
  let e = r.get("source_ref"), t = r.get("target_ref"), n = r.get("relationship_type"), a = null;
  return i.has(e) && i.has(t) ? xh(e) && xh(t) && (a = hP(e, t, n, r.get("id"))) : console.warn(
    "Skipped relationship %s %s %s: missing endpoint object(s)",
    e,
    n,
    t
  ), a;
}
function* Qa(r, i, e = -1) {
  if (Array.isArray(r))
    for (let t of r) yield* Qa(t, i, e);
  else if (r instanceof Map) {
    let t = i.indexOf(".", e + 1), n;
    if (t === -1 ? n = i.substring(e + 1) : n = i.substring(e + 1, t), n.length > 0) {
      if (r.has(n)) {
        let a = r.get(n);
        t === -1 ? Array.isArray(a) ? yield* a : yield a : yield* Qa(a, i, t);
      }
    } else t !== -1 && (yield* Qa(r, i, t));
  }
}
function Kpe(r, i, e) {
  let t = r.get("id"), n = [];
  for (let [a, o, s] of e)
    for (let u of Qa(r, a))
      if (xh(u))
        if (i.has(u)) {
          let l, c;
          s ? [l, c] = [t, u] : [l, c] = [u, t];
          let d = hP(l, c, o);
          n.push(d);
        } else
          console.warn(
            "Skipped embedded relationship %s %s %s: target object missing",
            t,
            a,
            u
          );
  return n;
}
function qpe(r, i, e = null) {
  let t = r.get("type"), n = L1.get(null), a = L1.get(t), o = null, s = null;
  if (e) {
    if (e.has("")) {
      let c = e.get("");
      c.has("embeddedRelationships") && (o = c.get("embeddedRelationships"));
    }
    if (e.has(t)) {
      let c = e.get(t);
      c.has("embeddedRelationships") && (s = c.get("embeddedRelationships"));
    }
  }
  let u = [];
  return n && u.push(...n), a && u.push(...a), o && u.push(...o), s && u.push(...s), Kpe(r, i, u);
}
function Ype(r, i = null) {
  let e = [], t = [], n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  for (let o of r.values()) {
    let s = o.get("type");
    if (s === "relationship") {
      let u = Gpe(o, r);
      u && t.push(u);
    } else if (dp(s)) {
      let u = jpe(o, a, n, i), l = Lpe(u, o);
      e.push(l);
      let c = qpe(
        o,
        r,
        i
      );
      t.push(...c);
    }
  }
  return [e, t];
}
function Xpe(r, i) {
  i.disablePhysics();
}
function Jpe(r, i) {
  if (i && i.has("include")) {
    let e = i.get("include");
    r = r.filter(
      (t) => Li(t, e)
    );
  }
  if (i && i.has("exclude")) {
    let e = i.get("exclude");
    r = r.filter(
      (t) => !Li(t, e)
    );
  }
  return r;
}
function Qpe(r, i, e = null) {
  console.log("data from makegraphdata", r, i), e !== null && (e = vP(e));
  let t = Hpe(i);
  t = Jpe(t, e);
  let n = /* @__PURE__ */ new Map();
  for (let l of t) n.set(l.get("id"), l);
  let [a, o] = Ype(n, e), s = new Hn(a), u = new Hn(o);
  return console.log("nodes and edges", s, u), console.log("nodeDataSet and edgeDataSet", s, u), [s, u, n];
}
function Zpe(r, i, e, t, n, a = null) {
  let o = new Vpe(
    r,
    i,
    e,
    t,
    n,
    a
  );
  return o.on("stabilized", (s) => Xpe(s, o)), o;
}
function eye(r) {
  return {
    makeGraphData: (e, t = null) => Qpe(r, e, t),
    makeGraphView: (e, t, n, a, o = null) => Zpe(
      r,
      e,
      t,
      n,
      a,
      o
    )
  };
}
const W1 = eye(Dpe);
var Xs = { exports: {} }, Js = { exports: {} }, we = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H1;
function tye() {
  if (H1) return we;
  H1 = 1;
  var r = typeof Symbol == "function" && Symbol.for, i = r ? Symbol.for("react.element") : 60103, e = r ? Symbol.for("react.portal") : 60106, t = r ? Symbol.for("react.fragment") : 60107, n = r ? Symbol.for("react.strict_mode") : 60108, a = r ? Symbol.for("react.profiler") : 60114, o = r ? Symbol.for("react.provider") : 60109, s = r ? Symbol.for("react.context") : 60110, u = r ? Symbol.for("react.async_mode") : 60111, l = r ? Symbol.for("react.concurrent_mode") : 60111, c = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, f = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, v = r ? Symbol.for("react.lazy") : 60116, p = r ? Symbol.for("react.block") : 60121, y = r ? Symbol.for("react.fundamental") : 60117, m = r ? Symbol.for("react.responder") : 60118, b = r ? Symbol.for("react.scope") : 60119;
  function w($) {
    if (typeof $ == "object" && $ !== null) {
      var C = $.$$typeof;
      switch (C) {
        case i:
          switch ($ = $.type, $) {
            case u:
            case l:
            case t:
            case a:
            case n:
            case d:
              return $;
            default:
              switch ($ = $ && $.$$typeof, $) {
                case s:
                case c:
                case v:
                case h:
                case o:
                  return $;
                default:
                  return C;
              }
          }
        case e:
          return C;
      }
    }
  }
  function _($) {
    return w($) === l;
  }
  return we.AsyncMode = u, we.ConcurrentMode = l, we.ContextConsumer = s, we.ContextProvider = o, we.Element = i, we.ForwardRef = c, we.Fragment = t, we.Lazy = v, we.Memo = h, we.Portal = e, we.Profiler = a, we.StrictMode = n, we.Suspense = d, we.isAsyncMode = function($) {
    return _($) || w($) === u;
  }, we.isConcurrentMode = _, we.isContextConsumer = function($) {
    return w($) === s;
  }, we.isContextProvider = function($) {
    return w($) === o;
  }, we.isElement = function($) {
    return typeof $ == "object" && $ !== null && $.$$typeof === i;
  }, we.isForwardRef = function($) {
    return w($) === c;
  }, we.isFragment = function($) {
    return w($) === t;
  }, we.isLazy = function($) {
    return w($) === v;
  }, we.isMemo = function($) {
    return w($) === h;
  }, we.isPortal = function($) {
    return w($) === e;
  }, we.isProfiler = function($) {
    return w($) === a;
  }, we.isStrictMode = function($) {
    return w($) === n;
  }, we.isSuspense = function($) {
    return w($) === d;
  }, we.isValidElementType = function($) {
    return typeof $ == "string" || typeof $ == "function" || $ === t || $ === l || $ === a || $ === n || $ === d || $ === f || typeof $ == "object" && $ !== null && ($.$$typeof === v || $.$$typeof === h || $.$$typeof === o || $.$$typeof === s || $.$$typeof === c || $.$$typeof === y || $.$$typeof === m || $.$$typeof === b || $.$$typeof === p);
  }, we.typeOf = w, we;
}
var Ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U1;
function rye() {
  return U1 || (U1 = 1, process.env.NODE_ENV !== "production" && (function() {
    var r = typeof Symbol == "function" && Symbol.for, i = r ? Symbol.for("react.element") : 60103, e = r ? Symbol.for("react.portal") : 60106, t = r ? Symbol.for("react.fragment") : 60107, n = r ? Symbol.for("react.strict_mode") : 60108, a = r ? Symbol.for("react.profiler") : 60114, o = r ? Symbol.for("react.provider") : 60109, s = r ? Symbol.for("react.context") : 60110, u = r ? Symbol.for("react.async_mode") : 60111, l = r ? Symbol.for("react.concurrent_mode") : 60111, c = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, f = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, v = r ? Symbol.for("react.lazy") : 60116, p = r ? Symbol.for("react.block") : 60121, y = r ? Symbol.for("react.fundamental") : 60117, m = r ? Symbol.for("react.responder") : 60118, b = r ? Symbol.for("react.scope") : 60119;
    function w(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === t || O === l || O === a || O === n || O === d || O === f || typeof O == "object" && O !== null && (O.$$typeof === v || O.$$typeof === h || O.$$typeof === o || O.$$typeof === s || O.$$typeof === c || O.$$typeof === y || O.$$typeof === m || O.$$typeof === b || O.$$typeof === p);
    }
    function _(O) {
      if (typeof O == "object" && O !== null) {
        var J = O.$$typeof;
        switch (J) {
          case i:
            var te = O.type;
            switch (te) {
              case u:
              case l:
              case t:
              case a:
              case n:
              case d:
                return te;
              default:
                var Oe = te && te.$$typeof;
                switch (Oe) {
                  case s:
                  case c:
                  case v:
                  case h:
                  case o:
                    return Oe;
                  default:
                    return J;
                }
            }
          case e:
            return J;
        }
      }
    }
    var $ = u, C = l, j = s, W = o, B = i, L = c, X = t, ue = v, ee = h, de = e, ke = a, ve = n, Ne = d, je = !1;
    function Le(O) {
      return je || (je = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(O) || _(O) === u;
    }
    function I(O) {
      return _(O) === l;
    }
    function F(O) {
      return _(O) === s;
    }
    function H(O) {
      return _(O) === o;
    }
    function K(O) {
      return typeof O == "object" && O !== null && O.$$typeof === i;
    }
    function U(O) {
      return _(O) === c;
    }
    function ne(O) {
      return _(O) === t;
    }
    function ie(O) {
      return _(O) === v;
    }
    function Q(O) {
      return _(O) === h;
    }
    function Z(O) {
      return _(O) === e;
    }
    function P(O) {
      return _(O) === a;
    }
    function S(O) {
      return _(O) === n;
    }
    function k(O) {
      return _(O) === d;
    }
    Ee.AsyncMode = $, Ee.ConcurrentMode = C, Ee.ContextConsumer = j, Ee.ContextProvider = W, Ee.Element = B, Ee.ForwardRef = L, Ee.Fragment = X, Ee.Lazy = ue, Ee.Memo = ee, Ee.Portal = de, Ee.Profiler = ke, Ee.StrictMode = ve, Ee.Suspense = Ne, Ee.isAsyncMode = Le, Ee.isConcurrentMode = I, Ee.isContextConsumer = F, Ee.isContextProvider = H, Ee.isElement = K, Ee.isForwardRef = U, Ee.isFragment = ne, Ee.isLazy = ie, Ee.isMemo = Q, Ee.isPortal = Z, Ee.isProfiler = P, Ee.isStrictMode = S, Ee.isSuspense = k, Ee.isValidElementType = w, Ee.typeOf = _;
  })()), Ee;
}
var V1;
function pP() {
  return V1 || (V1 = 1, process.env.NODE_ENV === "production" ? Js.exports = tye() : Js.exports = rye()), Js.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var df, G1;
function nye() {
  if (G1) return df;
  G1 = 1;
  var r = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty, e = Object.prototype.propertyIsEnumerable;
  function t(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function n() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(o).map(function(c) {
        return o[c];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        l[c] = c;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return df = n() ? Object.assign : function(a, o) {
    for (var s, u = t(a), l, c = 1; c < arguments.length; c++) {
      s = Object(arguments[c]);
      for (var d in s)
        i.call(s, d) && (u[d] = s[d]);
      if (r) {
        l = r(s);
        for (var f = 0; f < l.length; f++)
          e.call(s, l[f]) && (u[l[f]] = s[l[f]]);
      }
    }
    return u;
  }, df;
}
var ff, K1;
function fp() {
  if (K1) return ff;
  K1 = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ff = r, ff;
}
var hf, q1;
function yP() {
  return q1 || (q1 = 1, hf = Function.call.bind(Object.prototype.hasOwnProperty)), hf;
}
var vf, Y1;
function iye() {
  if (Y1) return vf;
  Y1 = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var i = /* @__PURE__ */ fp(), e = {}, t = /* @__PURE__ */ yP();
    r = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function n(a, o, s, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in a)
        if (t(a, c)) {
          var d;
          try {
            if (typeof a[c] != "function") {
              var f = Error(
                (u || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            d = a[c](o, c, u, s, null, i);
          } catch (v) {
            d = v;
          }
          if (d && !(d instanceof Error) && r(
            (u || "React class") + ": type specification of " + s + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in e)) {
            e[d.message] = !0;
            var h = l ? l() : "";
            r(
              "Failed " + s + " type: " + d.message + (h ?? "")
            );
          }
        }
    }
  }
  return n.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (e = {});
  }, vf = n, vf;
}
var pf, X1;
function aye() {
  if (X1) return pf;
  X1 = 1;
  var r = pP(), i = nye(), e = /* @__PURE__ */ fp(), t = /* @__PURE__ */ yP(), n = /* @__PURE__ */ iye(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return pf = function(s, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function d(I) {
      var F = I && (l && I[l] || I[c]);
      if (typeof F == "function")
        return F;
    }
    var f = "<<anonymous>>", h = {
      array: m("array"),
      bigint: m("bigint"),
      bool: m("boolean"),
      func: m("function"),
      number: m("number"),
      object: m("object"),
      string: m("string"),
      symbol: m("symbol"),
      any: b(),
      arrayOf: w,
      element: _(),
      elementType: $(),
      instanceOf: C,
      node: L(),
      objectOf: W,
      oneOf: j,
      oneOfType: B,
      shape: ue,
      exact: ee
    };
    function v(I, F) {
      return I === F ? I !== 0 || 1 / I === 1 / F : I !== I && F !== F;
    }
    function p(I, F) {
      this.message = I, this.data = F && typeof F == "object" ? F : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function y(I) {
      if (process.env.NODE_ENV !== "production")
        var F = {}, H = 0;
      function K(ne, ie, Q, Z, P, S, k) {
        if (Z = Z || f, S = S || Q, k !== e) {
          if (u) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var J = Z + ":" + Q;
            !F[J] && // Avoid spamming the console because they are often not actionable except for lib authors
            H < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + S + "` prop on `" + Z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), F[J] = !0, H++);
          }
        }
        return ie[Q] == null ? ne ? ie[Q] === null ? new p("The " + P + " `" + S + "` is marked as required " + ("in `" + Z + "`, but its value is `null`.")) : new p("The " + P + " `" + S + "` is marked as required in " + ("`" + Z + "`, but its value is `undefined`.")) : null : I(ie, Q, Z, P, S);
      }
      var U = K.bind(null, !1);
      return U.isRequired = K.bind(null, !0), U;
    }
    function m(I) {
      function F(H, K, U, ne, ie, Q) {
        var Z = H[K], P = ve(Z);
        if (P !== I) {
          var S = Ne(Z);
          return new p(
            "Invalid " + ne + " `" + ie + "` of type " + ("`" + S + "` supplied to `" + U + "`, expected ") + ("`" + I + "`."),
            { expectedType: I }
          );
        }
        return null;
      }
      return y(F);
    }
    function b() {
      return y(o);
    }
    function w(I) {
      function F(H, K, U, ne, ie) {
        if (typeof I != "function")
          return new p("Property `" + ie + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var Q = H[K];
        if (!Array.isArray(Q)) {
          var Z = ve(Q);
          return new p("Invalid " + ne + " `" + ie + "` of type " + ("`" + Z + "` supplied to `" + U + "`, expected an array."));
        }
        for (var P = 0; P < Q.length; P++) {
          var S = I(Q, P, U, ne, ie + "[" + P + "]", e);
          if (S instanceof Error)
            return S;
        }
        return null;
      }
      return y(F);
    }
    function _() {
      function I(F, H, K, U, ne) {
        var ie = F[H];
        if (!s(ie)) {
          var Q = ve(ie);
          return new p("Invalid " + U + " `" + ne + "` of type " + ("`" + Q + "` supplied to `" + K + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(I);
    }
    function $() {
      function I(F, H, K, U, ne) {
        var ie = F[H];
        if (!r.isValidElementType(ie)) {
          var Q = ve(ie);
          return new p("Invalid " + U + " `" + ne + "` of type " + ("`" + Q + "` supplied to `" + K + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(I);
    }
    function C(I) {
      function F(H, K, U, ne, ie) {
        if (!(H[K] instanceof I)) {
          var Q = I.name || f, Z = Le(H[K]);
          return new p("Invalid " + ne + " `" + ie + "` of type " + ("`" + Z + "` supplied to `" + U + "`, expected ") + ("instance of `" + Q + "`."));
        }
        return null;
      }
      return y(F);
    }
    function j(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function F(H, K, U, ne, ie) {
        for (var Q = H[K], Z = 0; Z < I.length; Z++)
          if (v(Q, I[Z]))
            return null;
        var P = JSON.stringify(I, function(k, O) {
          var J = Ne(O);
          return J === "symbol" ? String(O) : O;
        });
        return new p("Invalid " + ne + " `" + ie + "` of value `" + String(Q) + "` " + ("supplied to `" + U + "`, expected one of " + P + "."));
      }
      return y(F);
    }
    function W(I) {
      function F(H, K, U, ne, ie) {
        if (typeof I != "function")
          return new p("Property `" + ie + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var Q = H[K], Z = ve(Q);
        if (Z !== "object")
          return new p("Invalid " + ne + " `" + ie + "` of type " + ("`" + Z + "` supplied to `" + U + "`, expected an object."));
        for (var P in Q)
          if (t(Q, P)) {
            var S = I(Q, P, U, ne, ie + "." + P, e);
            if (S instanceof Error)
              return S;
          }
        return null;
      }
      return y(F);
    }
    function B(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var F = 0; F < I.length; F++) {
        var H = I[F];
        if (typeof H != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + je(H) + " at index " + F + "."
          ), o;
      }
      function K(U, ne, ie, Q, Z) {
        for (var P = [], S = 0; S < I.length; S++) {
          var k = I[S], O = k(U, ne, ie, Q, Z, e);
          if (O == null)
            return null;
          O.data && t(O.data, "expectedType") && P.push(O.data.expectedType);
        }
        var J = P.length > 0 ? ", expected one of type [" + P.join(", ") + "]" : "";
        return new p("Invalid " + Q + " `" + Z + "` supplied to " + ("`" + ie + "`" + J + "."));
      }
      return y(K);
    }
    function L() {
      function I(F, H, K, U, ne) {
        return de(F[H]) ? null : new p("Invalid " + U + " `" + ne + "` supplied to " + ("`" + K + "`, expected a ReactNode."));
      }
      return y(I);
    }
    function X(I, F, H, K, U) {
      return new p(
        (I || "React class") + ": " + F + " type `" + H + "." + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function ue(I) {
      function F(H, K, U, ne, ie) {
        var Q = H[K], Z = ve(Q);
        if (Z !== "object")
          return new p("Invalid " + ne + " `" + ie + "` of type `" + Z + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var P in I) {
          var S = I[P];
          if (typeof S != "function")
            return X(U, ne, ie, P, Ne(S));
          var k = S(Q, P, U, ne, ie + "." + P, e);
          if (k)
            return k;
        }
        return null;
      }
      return y(F);
    }
    function ee(I) {
      function F(H, K, U, ne, ie) {
        var Q = H[K], Z = ve(Q);
        if (Z !== "object")
          return new p("Invalid " + ne + " `" + ie + "` of type `" + Z + "` " + ("supplied to `" + U + "`, expected `object`."));
        var P = i({}, H[K], I);
        for (var S in P) {
          var k = I[S];
          if (t(I, S) && typeof k != "function")
            return X(U, ne, ie, S, Ne(k));
          if (!k)
            return new p(
              "Invalid " + ne + " `" + ie + "` key `" + S + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(H[K], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(I), null, "  ")
            );
          var O = k(Q, S, U, ne, ie + "." + S, e);
          if (O)
            return O;
        }
        return null;
      }
      return y(F);
    }
    function de(I) {
      switch (typeof I) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !I;
        case "object":
          if (Array.isArray(I))
            return I.every(de);
          if (I === null || s(I))
            return !0;
          var F = d(I);
          if (F) {
            var H = F.call(I), K;
            if (F !== I.entries) {
              for (; !(K = H.next()).done; )
                if (!de(K.value))
                  return !1;
            } else
              for (; !(K = H.next()).done; ) {
                var U = K.value;
                if (U && !de(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ke(I, F) {
      return I === "symbol" ? !0 : F ? F["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && F instanceof Symbol : !1;
    }
    function ve(I) {
      var F = typeof I;
      return Array.isArray(I) ? "array" : I instanceof RegExp ? "object" : ke(F, I) ? "symbol" : F;
    }
    function Ne(I) {
      if (typeof I > "u" || I === null)
        return "" + I;
      var F = ve(I);
      if (F === "object") {
        if (I instanceof Date)
          return "date";
        if (I instanceof RegExp)
          return "regexp";
      }
      return F;
    }
    function je(I) {
      var F = Ne(I);
      switch (F) {
        case "array":
        case "object":
          return "an " + F;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + F;
        default:
          return F;
      }
    }
    function Le(I) {
      return !I.constructor || !I.constructor.name ? f : I.constructor.name;
    }
    return h.checkPropTypes = n, h.resetWarningCache = n.resetWarningCache, h.PropTypes = h, h;
  }, pf;
}
var yf, J1;
function oye() {
  if (J1) return yf;
  J1 = 1;
  var r = /* @__PURE__ */ fp();
  function i() {
  }
  function e() {
  }
  return e.resetWarningCache = i, yf = function() {
    function t(o, s, u, l, c, d) {
      if (d !== r) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    t.isRequired = t;
    function n() {
      return t;
    }
    var a = {
      array: t,
      bigint: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: n,
      element: t,
      elementType: t,
      instanceOf: n,
      node: t,
      objectOf: n,
      oneOf: n,
      oneOfType: n,
      shape: n,
      exact: n,
      checkPropTypes: e,
      resetWarningCache: i
    };
    return a.PropTypes = a, a;
  }, yf;
}
var Q1;
function sye() {
  if (Q1) return Xs.exports;
  if (Q1 = 1, process.env.NODE_ENV !== "production") {
    var r = pP(), i = !0;
    Xs.exports = /* @__PURE__ */ aye()(r.isElement, i);
  } else
    Xs.exports = /* @__PURE__ */ oye()();
  return Xs.exports;
}
var uye = /* @__PURE__ */ sye();
const wi = /* @__PURE__ */ BP(uye);
let Z1 = null;
const lye = ({
  stixJson: r = null,
  graphStyle: i,
  wrapStyle: e,
  onNodeclick: t = () => {
  }
}) => {
  const n = NP(null), a = {};
  function o(s) {
    if (s.nodes.length > 0) {
      const u = s.nodes[0];
      t && t(u);
    }
  }
  return FP(() => {
    if (n.current && r)
      try {
        const s = n.current.querySelector("#graphContainer");
        if (s) {
          const [u, l, c] = W1.makeGraphData(r);
          a.iconDir = ".", Z1 = W1.makeGraphView(
            s,
            u,
            l,
            c,
            new Map(Object.entries(a))
          ), Z1.on("click", (d) => o(d));
        }
      } catch (s) {
        console.error("Failed to create graph view:", s);
      }
  }, [r]), /* @__PURE__ */ Xl.jsx("div", { ref: n, children: /* @__PURE__ */ Xl.jsx("div", { style: e, children: /* @__PURE__ */ Xl.jsx(
    "div",
    {
      id: "graphContainer",
      style: { width: 600, height: 600, ...i }
    }
  ) }) });
};
lye.propTypes = {
  stixJson: wi.oneOfType([wi.array, wi.object]),
  graphStyle: wi.object,
  wrapStyle: wi.object,
  onNodeClick: wi.func
};
export {
  lye as default
};
