import { createSSRApp, h as h$1 } from "vue";
import { renderToString } from "@vue/server-renderer";
import { Head, Link, createInertiaApp } from "@inertiajs/inertia-vue3";
import require$$0 from "process";
import require$$1 from "http";
import { createStore } from "vuex";
import mitt from "mitt";
import dayjs from "dayjs";
import axios from "axios";
import _ from "lodash";
var lib = {};
Object.defineProperty(lib, "__esModule", {
  value: true
});
var default_1 = lib.default = void 0;
var process = _interopRequireWildcard(require$$0);
var _http = require$$1;
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function")
    return null;
  var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
  var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
  return (_getRequireWildcardCache = function(nodeInterop2) {
    return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const readableToString = (readable) => new Promise((resolve, reject) => {
  let data = "";
  readable.on("data", (chunk) => data += chunk);
  readable.on("end", () => resolve(data));
  readable.on("error", (err) => reject(err));
});
var _default = (render, port) => {
  const _port = port || 13714;
  const routes = {
    "/health": async () => ({
      status: "OK",
      timestamp: Date.now()
    }),
    "/shutdown": () => process.exit(),
    "/render": async (request) => render(JSON.parse(await readableToString(request))),
    "/404": async () => ({
      status: "NOT_FOUND",
      timestamp: Date.now()
    })
  };
  (0, _http.createServer)(async (request, response) => {
    const dispatchRoute = routes[request.url] || routes["/404"];
    try {
      response.writeHead(200, {
        "Content-Type": "application/json",
        "Server": "Inertia.js SSR"
      });
      response.write(JSON.stringify(await dispatchRoute(request)));
    } catch (e2) {
      console.error(e2);
    }
    response.end();
  }).listen(_port, () => console.log("Inertia SSR server started."));
  console.log(`Starting SSR server on port ${_port}...`);
};
default_1 = lib.default = _default;
const core = {
  namespaced: true,
  state: () => ({
    visible: false,
    message: []
  }),
  getters: {
    getVisible(state) {
      return state.visible;
    }
  },
  mutations: {
    setVisible(state, visible) {
      state.visible = visible;
    }
  },
  actions: {
    fire({ commit }) {
      commit("setVisible", true);
    },
    dismiss({ commit }) {
      commit("setVisible", false);
    }
  }
};
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2)
        Object.prototype.hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(this, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = { default: "RFC3986", formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: "RFC3986" }, o = Object.prototype.hasOwnProperty, i = Array.isArray, u = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2)
    t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), a = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2)
    void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, s = { arrayToObject: a, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2)
    for (var o2 = e2[n2], u2 = o2.obj[o2.prop], a2 = Object.keys(u2), s2 = 0; s2 < a2.length; ++s2) {
      var f2 = a2[s2], c2 = u2[f2];
      "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: u2, prop: f2 }), r2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (i(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3)
          void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2)
    return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, o2, i2) {
  if (0 === t4.length)
    return t4;
  var a2 = t4;
  if ("symbol" == typeof t4 ? a2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (a2 = String(t4)), "iso-8859-1" === r2)
    return escape(a2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var s2 = "", f2 = 0; f2 < a2.length; ++f2) {
    var c2 = a2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === n.RFC1738 && (40 === c2 || 41 === c2) ? s2 += a2.charAt(f2) : c2 < 128 ? s2 += u[c2] : c2 < 2048 ? s2 += u[192 | c2 >> 6] + u[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += u[224 | c2 >> 12] + u[128 | c2 >> 6 & 63] + u[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & a2.charCodeAt(f2 += 1)), s2 += u[240 | c2 >> 18] + u[128 | c2 >> 12 & 63] + u[128 | c2 >> 6 & 63] + u[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (i(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1)
      r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2)
    return e2;
  if ("object" != typeof r2) {
    if (i(e2))
      e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2)
        return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !o.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2)
    return [e2].concat(r2);
  var u2 = e2;
  return i(e2) && !i(r2) && (u2 = a(e2, n2)), i(e2) && i(r2) ? (r2.forEach(function(r3, i2) {
    if (o.call(e2, i2)) {
      var u3 = e2[i2];
      u3 && "object" == typeof u3 && r3 && "object" == typeof r3 ? e2[i2] = t2(u3, r3, n2) : e2.push(r3);
    } else
      e2[i2] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, i2) {
    var u3 = r2[i2];
    return e3[i2] = o.call(e3, i2) ? t2(e3[i2], u3, n2) : u3, e3;
  }, u2);
} }, f = Object.prototype.hasOwnProperty, c = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, l = Array.isArray, p = String.prototype.split, h = Array.prototype.push, y = function(t4, e2) {
  h.apply(t4, l(e2) ? e2 : [e2]);
}, d = Date.prototype.toISOString, b = n.default, v = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: s.encode, encodeValuesOnly: false, format: b, formatter: n.formatters[b], indices: false, serializeDate: function(t4) {
  return d.call(t4);
}, skipNulls: false, strictNullHandling: false }, m = function t3(e2, r2, n2, o2, i2, u2, a2, f2, c2, h2, d2, b2, m2, g2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = h2(w2) : "comma" === n2 && l(w2) && (w2 = s.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? h2(t4) : t4;
  })), null === w2) {
    if (o2)
      return u2 && !m2 ? u2(r2, v.encoder, g2, "key", d2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || s.isBuffer(w2)) {
    if (u2) {
      var O2 = m2 ? r2 : u2(r2, v.encoder, g2, "key", d2);
      if ("comma" === n2 && m2) {
        for (var $2 = p.call(String(w2), ","), E2 = "", S2 = 0; S2 < $2.length; ++S2)
          E2 += (0 === S2 ? "" : ",") + b2(u2($2[S2], v.encoder, g2, "value", d2));
        return [b2(O2) + "=" + E2];
      }
      return [b2(O2) + "=" + b2(u2(w2, v.encoder, g2, "value", d2))];
    }
    return [b2(r2) + "=" + b2(String(w2))];
  }
  var R2, x2 = [];
  if (void 0 === w2)
    return x2;
  if ("comma" === n2 && l(w2))
    R2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (l(a2))
    R2 = a2;
  else {
    var C2 = Object.keys(w2);
    R2 = f2 ? C2.sort(f2) : C2;
  }
  for (var N = 0; N < R2.length; ++N) {
    var k = R2[N], T = "object" == typeof k && void 0 !== k.value ? k.value : w2[k];
    if (!i2 || null !== T) {
      var _2 = l(w2) ? "function" == typeof n2 ? n2(r2, k) : r2 : r2 + (c2 ? "." + k : "[" + k + "]");
      y(x2, t3(T, _2, n2, o2, i2, u2, a2, f2, c2, h2, d2, b2, m2, g2));
    }
  }
  return x2;
}, g = Object.prototype.hasOwnProperty, j = Array.isArray, w = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: s.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, $ = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, E = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && g.call(Object.prototype, a2) && !r2.allowPrototypes)
        return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && g.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes)
        return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : $(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, S = function(t4, e2) {
  var r2 = function(t5) {
    if (!t5)
      return w;
    if (null != t5.decoder && "function" != typeof t5.decoder)
      throw new TypeError("Decoder has to be a function.");
    if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    return { allowDots: void 0 === t5.allowDots ? w.allowDots : !!t5.allowDots, allowPrototypes: "boolean" == typeof t5.allowPrototypes ? t5.allowPrototypes : w.allowPrototypes, arrayLimit: "number" == typeof t5.arrayLimit ? t5.arrayLimit : w.arrayLimit, charset: void 0 === t5.charset ? w.charset : t5.charset, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : w.charsetSentinel, comma: "boolean" == typeof t5.comma ? t5.comma : w.comma, decoder: "function" == typeof t5.decoder ? t5.decoder : w.decoder, delimiter: "string" == typeof t5.delimiter || s.isRegExp(t5.delimiter) ? t5.delimiter : w.delimiter, depth: "number" == typeof t5.depth || false === t5.depth ? +t5.depth : w.depth, ignoreQueryPrefix: true === t5.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof t5.interpretNumericEntities ? t5.interpretNumericEntities : w.interpretNumericEntities, parameterLimit: "number" == typeof t5.parameterLimit ? t5.parameterLimit : w.parameterLimit, parseArrays: false !== t5.parseArrays, plainObjects: "boolean" == typeof t5.plainObjects ? t5.plainObjects : w.plainObjects, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : w.strictNullHandling };
  }(e2);
  if ("" === t4 || null == t4)
    return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel)
      for (r3 = 0; r3 < o3.length; ++r3)
        0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3)
      if (r3 !== i3) {
        var a3, f3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
        -1 === p2 ? (a3 = e3.decoder(c2, w.decoder, u3, "key"), f3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), w.decoder, u3, "key"), f3 = s.maybeMap($(c2.slice(p2 + 1), e3), function(t6) {
          return e3.decoder(t6, w.decoder, u3, "value");
        })), f3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (f3 = O(f3)), c2.indexOf("[]=") > -1 && (f3 = j(f3) ? [f3] : f3), n3[a3] = g.call(n3, a3) ? s.combine(n3[a3], f3) : f3;
      }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], f2 = E(a2, n2[a2], r2, "string" == typeof t4);
    o2 = s.merge(o2, f2, r2);
  }
  return s.compact(o2);
};
class R {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    return `${this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : ""}/${this.definition.uri}`.replace(/\/+$/, "");
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    if (!this.definition.methods.includes("GET"))
      return false;
    const e2 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i2 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i2})?` : `${e3}${i2}`;
    }).replace(/^\w+:\/\//, ""), [r2, n2] = t4.replace(/^\w+:\/\//, "").split("?"), o2 = new RegExp(`^${e2}/?$`).exec(r2);
    return !!o2 && { params: o2.groups, query: S(n2) };
  }
  compile(t4) {
    const e2 = this.parameterSegments;
    return e2.length ? this.template.replace(/{([^}?]+)(\??)}/g, (r2, n2, o2) => {
      var i2, u2, a2;
      if (!o2 && [null, void 0].includes(t4[n2]))
        throw new Error(`Ziggy error: '${n2}' parameter is required for route '${this.name}'.`);
      if (e2[e2.length - 1].name === n2 && ".*" === this.wheres[n2])
        return encodeURIComponent(null != (a2 = t4[n2]) ? a2 : "").replace(/%2F/g, "/");
      if (this.wheres[n2] && !new RegExp(`^${o2 ? `(${this.wheres[n2]})?` : this.wheres[n2]}$`).test(null != (i2 = t4[n2]) ? i2 : ""))
        throw new Error(`Ziggy error: '${n2}' parameter does not match required format '${this.wheres[n2]}' for route '${this.name}'.`);
      return encodeURIComponent(null != (u2 = t4[n2]) ? u2 : "");
    }).replace(/\/+$/, "") : this.template;
  }
}
class x extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2])
        throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new R(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, o2 = t4, i2 = function(t5) {
        if (!t5)
          return v;
        if (null != t5.encoder && "function" != typeof t5.encoder)
          throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || v.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = n.default;
        if (void 0 !== t5.format) {
          if (!f.call(n.formatters, t5.format))
            throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var o3 = n.formatters[r3], i3 = v.filter;
        return ("function" == typeof t5.filter || l(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : v.addQueryPrefix, allowDots: void 0 === t5.allowDots ? v.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : v.charsetSentinel, delimiter: void 0 === t5.delimiter ? v.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : v.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : v.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : v.encodeValuesOnly, filter: i3, format: r3, formatter: o3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : v.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : v.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : v.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? o2 = (0, i2.filter)("", o2) : l(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof o2 || null === o2)
        return "";
      var a2 = c[e3 && e3.arrayFormat in c ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(o2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var p2 = r2[s2];
        i2.skipNulls && null === o2[p2] || y(u2, m(o2[p2], p2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), d2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (d2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? d2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.v();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new R(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  v() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2)
      return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2)
      return a2;
    const s2 = new R(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    return !(!Object.values(r2).every((t4) => !t4) || Object.values(f2).some((t4) => void 0 !== t4)) || Object.entries(r2).every(([t4, e3]) => f2[t4] == e3);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  has(t4) {
    return Object.keys(this.t.routes).includes(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.m(r2), this.g(e2, r2));
  }
  m(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  g(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2))
        return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id"))
          throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
  check(t4) {
    return this.has(t4);
  }
}
const C = { install: (t4, e2) => {
  const r2 = (t5, r3, n2, o2 = e2) => function(t6, e3, r4, n3) {
    const o3 = new x(t6, e3, r4, n3);
    return t6 ? o3.toString() : o3;
  }(t5, r3, n2, o2);
  t4.mixin({ methods: { route: r2 } }), parseInt(t4.version) > 2 && t4.provide("route", r2);
} };
const Ziggy$1 = { "url": "https://jetstreampro.test", "port": null, "defaults": {}, "routes": { "login": { "uri": "login", "methods": ["GET", "HEAD"] }, "logout": { "uri": "logout", "methods": ["POST"] }, "password.request": { "uri": "forgot-password", "methods": ["GET", "HEAD"] }, "password.reset": { "uri": "reset-password/{token}", "methods": ["GET", "HEAD"] }, "password.email": { "uri": "forgot-password", "methods": ["POST"] }, "password.update": { "uri": "reset-password", "methods": ["POST"] }, "register": { "uri": "register", "methods": ["GET", "HEAD"] }, "verification.notice": { "uri": "email/verify", "methods": ["GET", "HEAD"] }, "verification.verify": { "uri": "email/verify/{id}/{hash}", "methods": ["GET", "HEAD"] }, "verification.send": { "uri": "email/verification-notification", "methods": ["POST"] }, "user-profile-information.update": { "uri": "user/profile-information", "methods": ["PUT"] }, "user-password.update": { "uri": "user/password", "methods": ["PUT"] }, "password.confirmation": { "uri": "user/confirmed-password-status", "methods": ["GET", "HEAD"] }, "password.confirm": { "uri": "user/confirm-password", "methods": ["POST"] }, "two-factor.login": { "uri": "two-factor-challenge", "methods": ["GET", "HEAD"] }, "two-factor.enable": { "uri": "user/two-factor-authentication", "methods": ["POST"] }, "two-factor.confirm": { "uri": "user/confirmed-two-factor-authentication", "methods": ["POST"] }, "two-factor.disable": { "uri": "user/two-factor-authentication", "methods": ["DELETE"] }, "two-factor.qr-code": { "uri": "user/two-factor-qr-code", "methods": ["GET", "HEAD"] }, "two-factor.secret-key": { "uri": "user/two-factor-secret-key", "methods": ["GET", "HEAD"] }, "two-factor.recovery-codes": { "uri": "user/two-factor-recovery-codes", "methods": ["GET", "HEAD"] }, "terms.show": { "uri": "terms-of-service", "methods": ["GET", "HEAD"] }, "policy.show": { "uri": "privacy-policy", "methods": ["GET", "HEAD"] }, "profile.show": { "uri": "user/profile", "methods": ["GET", "HEAD"] }, "other-browser-sessions.destroy": { "uri": "user/other-browser-sessions", "methods": ["DELETE"] }, "current-user-photo.destroy": { "uri": "user/profile-photo", "methods": ["DELETE"] }, "current-user.destroy": { "uri": "user", "methods": ["DELETE"] }, "api-tokens.index": { "uri": "user/api-tokens", "methods": ["GET", "HEAD"] }, "api-tokens.store": { "uri": "user/api-tokens", "methods": ["POST"] }, "api-tokens.update": { "uri": "user/api-tokens/{token}", "methods": ["PUT"] }, "api-tokens.destroy": { "uri": "user/api-tokens/{token}", "methods": ["DELETE"] }, "teams.create": { "uri": "teams/create", "methods": ["GET", "HEAD"] }, "teams.store": { "uri": "teams", "methods": ["POST"] }, "teams.show": { "uri": "teams/{team}", "methods": ["GET", "HEAD"] }, "teams.update": { "uri": "teams/{team}", "methods": ["PUT"] }, "teams.destroy": { "uri": "teams/{team}", "methods": ["DELETE"] }, "current-team.update": { "uri": "current-team", "methods": ["PUT"] }, "team-members.store": { "uri": "teams/{team}/members", "methods": ["POST"] }, "team-members.update": { "uri": "teams/{team}/members/{user}", "methods": ["PUT"] }, "team-members.destroy": { "uri": "teams/{team}/members/{user}", "methods": ["DELETE"] }, "team-invitations.accept": { "uri": "team-invitations/{invitation}", "methods": ["GET", "HEAD"], "bindings": { "invitation": "id" } }, "team-invitations.destroy": { "uri": "team-invitations/{invitation}", "methods": ["DELETE"], "bindings": { "invitation": "id" } }, "sanctum.csrf-cookie": { "uri": "sanctum/csrf-cookie", "methods": ["GET", "HEAD"] }, "ignition.healthCheck": { "uri": "_ignition/health-check", "methods": ["GET", "HEAD"] }, "ignition.executeSolution": { "uri": "_ignition/execute-solution", "methods": ["POST"] }, "ignition.updateConfig": { "uri": "_ignition/update-config", "methods": ["POST"] }, "dashboard.show": { "uri": "dashboard", "methods": ["GET", "HEAD"] }, "index.show": { "uri": "/", "methods": ["GET", "HEAD"] } } };
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy$1.routes, window.Ziggy.routes);
}
const trans = (key, replace, Zora2) => {
  const locale = window.locale;
  let translation = null;
  try {
    translation = key.split(".").reduce((t4, i2) => t4[i2] || null, Zora2.translations[locale].php);
    if (translation) {
      return checkForVariables(translation, replace);
    }
  } catch (e2) {
  }
  try {
    translation = Zora2.translations[locale]["json"][key];
    if (translation) {
      return checkForVariables(translation, replace);
    }
  } catch (e2) {
  }
  return checkForVariables(key, replace);
};
const checkForVariables = (translation, replace) => {
  let translated = null;
  if (typeof replace === "undefined") {
    return translation;
  }
  _.forEach(replace, (value, key) => {
    translated = translation.replace(":" + key, value);
  });
  return translated;
};
const ZoraVue = {
  install: (v2, options) => v2.mixin({
    methods: {
      __: (key, replace, config = options) => trans(key, replace, config),
      trans: (key, replace, config = options) => trans(key, replace, config)
    }
  })
};
const Zora = { translations: { "en": { "php": { "auth": { "failed": "These credentials do not match our records.", "password": "The provided password is incorrect.", "throttle": "Too many login attempts. Please try again in :seconds seconds." }, "pagination": { "previous": "&laquo; Previous", "next": "Next &raquo;" }, "passwords": { "reset": "Your password has been reset!", "sent": "We have emailed your password reset link!", "throttled": "Please wait before retrying.", "token": "This password reset token is invalid.", "user": "We can't find a user with that email address." }, "validation": { "accepted": "The :attribute must be accepted.", "accepted_if": "The :attribute must be accepted when :other is :value.", "active_url": "The :attribute is not a valid URL.", "after": "The :attribute must be a date after :date.", "after_or_equal": "The :attribute must be a date after or equal to :date.", "alpha": "The :attribute must only contain letters.", "alpha_dash": "The :attribute must only contain letters, numbers, dashes and underscores.", "alpha_num": "The :attribute must only contain letters and numbers.", "array": "The :attribute must be an array.", "before": "The :attribute must be a date before :date.", "before_or_equal": "The :attribute must be a date before or equal to :date.", "between": { "numeric": "The :attribute must be between :min and :max.", "file": "The :attribute must be between :min and :max kilobytes.", "string": "The :attribute must be between :min and :max characters.", "array": "The :attribute must have between :min and :max items." }, "boolean": "The :attribute field must be true or false.", "confirmed": "The :attribute confirmation does not match.", "current_password": "The password is incorrect.", "date": "The :attribute is not a valid date.", "date_equals": "The :attribute must be a date equal to :date.", "date_format": "The :attribute does not match the format :format.", "declined": "The :attribute must be declined.", "declined_if": "The :attribute must be declined when :other is :value.", "different": "The :attribute and :other must be different.", "digits": "The :attribute must be :digits digits.", "digits_between": "The :attribute must be between :min and :max digits.", "dimensions": "The :attribute has invalid image dimensions.", "distinct": "The :attribute field has a duplicate value.", "email": "The :attribute must be a valid email address.", "ends_with": "The :attribute must end with one of the following: :values.", "enum": "The selected :attribute is invalid.", "exists": "The selected :attribute is invalid.", "file": "The :attribute must be a file.", "filled": "The :attribute field must have a value.", "gt": { "numeric": "The :attribute must be greater than :value.", "file": "The :attribute must be greater than :value kilobytes.", "string": "The :attribute must be greater than :value characters.", "array": "The :attribute must have more than :value items." }, "gte": { "numeric": "The :attribute must be greater than or equal to :value.", "file": "The :attribute must be greater than or equal to :value kilobytes.", "string": "The :attribute must be greater than or equal to :value characters.", "array": "The :attribute must have :value items or more." }, "image": "The :attribute must be an image.", "in": "The selected :attribute is invalid.", "in_array": "The :attribute field does not exist in :other.", "integer": "The :attribute must be an integer.", "ip": "The :attribute must be a valid IP address.", "ipv4": "The :attribute must be a valid IPv4 address.", "ipv6": "The :attribute must be a valid IPv6 address.", "mac_address": "The :attribute must be a valid MAC address.", "json": "The :attribute must be a valid JSON string.", "lt": { "numeric": "The :attribute must be less than :value.", "file": "The :attribute must be less than :value kilobytes.", "string": "The :attribute must be less than :value characters.", "array": "The :attribute must have less than :value items." }, "lte": { "numeric": "The :attribute must be less than or equal to :value.", "file": "The :attribute must be less than or equal to :value kilobytes.", "string": "The :attribute must be less than or equal to :value characters.", "array": "The :attribute must not have more than :value items." }, "max": { "numeric": "The :attribute must not be greater than :max.", "file": "The :attribute must not be greater than :max kilobytes.", "string": "The :attribute must not be greater than :max characters.", "array": "The :attribute must not have more than :max items." }, "mimes": "The :attribute must be a file of type: :values.", "mimetypes": "The :attribute must be a file of type: :values.", "min": { "numeric": "The :attribute must be at least :min.", "file": "The :attribute must be at least :min kilobytes.", "string": "The :attribute must be at least :min characters.", "array": "The :attribute must have at least :min items." }, "multiple_of": "The :attribute must be a multiple of :value.", "not_in": "The selected :attribute is invalid.", "not_regex": "The :attribute format is invalid.", "numeric": "The :attribute must be a number.", "password": "The password is incorrect.", "present": "The :attribute field must be present.", "prohibited": "The :attribute field is prohibited.", "prohibited_if": "The :attribute field is prohibited when :other is :value.", "prohibited_unless": "The :attribute field is prohibited unless :other is in :values.", "prohibits": "The :attribute field prohibits :other from being present.", "regex": "The :attribute format is invalid.", "required": "The :attribute field is required.", "required_if": "The :attribute field is required when :other is :value.", "required_unless": "The :attribute field is required unless :other is in :values.", "required_with": "The :attribute field is required when :values is present.", "required_with_all": "The :attribute field is required when :values are present.", "required_without": "The :attribute field is required when :values is not present.", "required_without_all": "The :attribute field is required when none of :values are present.", "same": "The :attribute and :other must match.", "size": { "numeric": "The :attribute must be :size.", "file": "The :attribute must be :size kilobytes.", "string": "The :attribute must be :size characters.", "array": "The :attribute must contain :size items." }, "starts_with": "The :attribute must start with one of the following: :values.", "string": "The :attribute must be a string.", "timezone": "The :attribute must be a valid timezone.", "unique": "The :attribute has already been taken.", "uploaded": "The :attribute failed to upload.", "url": "The :attribute must be a valid URL.", "uuid": "The :attribute must be a valid UUID.", "custom": { "attribute-name": { "rule-name": "custom-message" } }, "attributes": [] } }, "json": { "The :attribute must contain at least one letter.": "The :attribute must contain at least one letter.", "The :attribute must contain at least one number.": "The :attribute must contain at least one number.", "The :attribute must contain at least one symbol.": "The :attribute must contain at least one symbol.", "The :attribute must contain at least one uppercase and one lowercase letter.": "The :attribute must contain at least one uppercase and one lowercase letter.", "The given :attribute has appeared in a data leak. Please choose a different :attribute.": "The given :attribute has appeared in a data leak. Please choose a different :attribute." } } } };
if (typeof window !== "undefined" && typeof window.Zora !== "undefined") {
  Object.assign(Zora.routes, window.Zora.routes);
}
const jetstreamssr = {
  install(app) {
    axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    axios.defaults.withCredentials = true;
    app.provide("emitter", mitt());
    app.provide("dayjs", dayjs);
    app.provide("echo", echo);
    app.provide("axios", axios);
    app.provide("_", _);
    const store = createStore({
      modules: { core }
    });
    app.use(C, Ziggy$1);
    app.use(ZoraVue, Zora);
    app.use(store);
    app.component("Head", Head);
    app.component("Link", Link);
  }
};
default_1(
  (page) => createInertiaApp({
    title: (title) => `${title} - ${"Jetstream Pro"}`,
    page,
    render: renderToString,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ app, props, plugin }) {
      return createSSRApp({
        render: () => h$1(app, props)
      }).use(plugin).use(jetstreamssr);
    }
  }),
  "13422"
);
