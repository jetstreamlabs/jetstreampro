"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var inertiaVue3 = require("@inertiajs/inertia-vue3");
var _$1 = require("lodash");
var inertia = require("@inertiajs/inertia");
var serverRenderer$1 = require("@vue/server-renderer");
var createServer = require("@inertiajs/server");
var vuex = require("vuex");
var mitt = require("mitt");
var dayjs = require("dayjs");
var axios$1 = require("axios");
function _interopDefaultLegacy(e2) {
  return e2 && typeof e2 === "object" && "default" in e2 ? e2 : { "default": e2 };
}
var ___default = /* @__PURE__ */ _interopDefaultLegacy(_$1);
var createServer__default = /* @__PURE__ */ _interopDefaultLegacy(createServer);
var mitt__default = /* @__PURE__ */ _interopDefaultLegacy(mitt);
var dayjs__default = /* @__PURE__ */ _interopDefaultLegacy(dayjs);
var axios__default = /* @__PURE__ */ _interopDefaultLegacy(axios$1);
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$Q = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    viewBox: "0 0 317 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M74.09 30.04V13h-4.14v21H82.1v-3.96h-8.01zM95.379 19v1.77c-1.08-1.35-2.7-2.19-4.89-2.19-3.99 0-7.29 3.45-7.29 7.92s3.3 7.92 7.29 7.92c2.19 0 3.81-.84 4.89-2.19V34h3.87V19h-3.87zm-4.17 11.73c-2.37 0-4.14-1.71-4.14-4.23 0-2.52 1.77-4.23 4.14-4.23 2.4 0 4.17 1.71 4.17 4.23 0 2.52-1.77 4.23-4.17 4.23zM106.628 21.58V19h-3.87v15h3.87v-7.17c0-3.15 2.55-4.05 4.56-3.81V18.7c-1.89 0-3.78.84-4.56 2.88zM124.295 19v1.77c-1.08-1.35-2.7-2.19-4.89-2.19-3.99 0-7.29 3.45-7.29 7.92s3.3 7.92 7.29 7.92c2.19 0 3.81-.84 4.89-2.19V34h3.87V19h-3.87zm-4.17 11.73c-2.37 0-4.14-1.71-4.14-4.23 0-2.52 1.77-4.23 4.14-4.23 2.4 0 4.17 1.71 4.17 4.23 0 2.52-1.77 4.23-4.17 4.23zM141.544 19l-3.66 10.5-3.63-10.5h-4.26l5.7 15h4.41l5.7-15h-4.26zM150.354 28.09h11.31c.09-.51.15-1.02.15-1.59 0-4.41-3.15-7.92-7.59-7.92-4.71 0-7.92 3.45-7.92 7.92s3.18 7.92 8.22 7.92c2.88 0 5.13-1.17 6.54-3.21l-3.12-1.8c-.66.87-1.86 1.5-3.36 1.5-2.04 0-3.69-.84-4.23-2.82zm-.06-3c.45-1.92 1.86-3.03 3.93-3.03 1.62 0 3.24.87 3.72 3.03h-7.65zM164.516 34h3.87V12.1h-3.87V34zM185.248 34.36c3.69 0 6.9-2.01 6.9-6.3V13h-2.1v15.06c0 3.03-2.07 4.26-4.8 4.26-2.19 0-3.93-.78-4.62-2.61l-1.77 1.05c1.05 2.43 3.57 3.6 6.39 3.6zM203.124 18.64c-4.65 0-7.83 3.45-7.83 7.86 0 4.53 3.24 7.86 7.98 7.86 3.03 0 5.34-1.41 6.6-3.45l-1.74-1.02c-.81 1.44-2.46 2.55-4.83 2.55-3.18 0-5.55-1.89-5.97-4.95h13.17c.03-.3.06-.63.06-.93 0-4.11-2.85-7.92-7.44-7.92zm0 1.92c2.58 0 4.98 1.71 5.4 5.01h-11.19c.39-2.94 2.64-5.01 5.79-5.01zM221.224 20.92V19h-4.32v-4.2l-1.98.6V19h-3.15v1.92h3.15v9.09c0 3.6 2.25 4.59 6.3 3.99v-1.74c-2.91.12-4.32.33-4.32-2.25v-9.09h4.32zM225.176 22.93c0-1.62 1.59-2.37 3.15-2.37 1.44 0 2.97.57 3.6 2.1l1.65-.96c-.87-1.86-2.79-3.06-5.25-3.06-3 0-5.13 1.89-5.13 4.29 0 5.52 8.76 3.39 8.76 7.11 0 1.77-1.68 2.4-3.45 2.4-2.01 0-3.57-.99-4.11-2.52l-1.68.99c.75 1.92 2.79 3.45 5.79 3.45 3.21 0 5.43-1.77 5.43-4.32 0-5.52-8.76-3.39-8.76-7.11zM244.603 20.92V19h-4.32v-4.2l-1.98.6V19h-3.15v1.92h3.15v9.09c0 3.6 2.25 4.59 6.3 3.99v-1.74c-2.91.12-4.32.33-4.32-2.25v-9.09h4.32zM249.883 21.49V19h-1.98v15h1.98v-8.34c0-3.72 2.34-4.98 4.74-4.98v-1.92c-1.92 0-3.69.63-4.74 2.73zM263.358 18.64c-4.65 0-7.83 3.45-7.83 7.86 0 4.53 3.24 7.86 7.98 7.86 3.03 0 5.34-1.41 6.6-3.45l-1.74-1.02c-.81 1.44-2.46 2.55-4.83 2.55-3.18 0-5.55-1.89-5.97-4.95h13.17c.03-.3.06-.63.06-.93 0-4.11-2.85-7.92-7.44-7.92zm0 1.92c2.58 0 4.98 1.71 5.4 5.01h-11.19c.39-2.94 2.64-5.01 5.79-5.01zM286.848 19v2.94c-1.26-2.01-3.39-3.3-6.06-3.3-4.23 0-7.74 3.42-7.74 7.86s3.51 7.86 7.74 7.86c2.67 0 4.8-1.29 6.06-3.3V34h1.98V19h-1.98zm-5.91 13.44c-3.33 0-5.91-2.61-5.91-5.94 0-3.33 2.58-5.94 5.91-5.94s5.91 2.61 5.91 5.94c0 3.33-2.58 5.94-5.91 5.94zM309.01 18.64c-1.92 0-3.75.87-4.86 2.73-.84-1.74-2.46-2.73-4.56-2.73-1.8 0-3.42.72-4.59 2.55V19h-1.98v15H295v-8.31c0-3.72 2.16-5.13 4.32-5.13 2.13 0 3.51 1.41 3.51 4.08V34h1.98v-8.31c0-3.72 1.86-5.13 4.17-5.13 2.13 0 3.66 1.41 3.66 4.08V34h1.98v-9.36c0-3.75-2.31-6-5.61-6z" fill="#000"></path><path d="M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z" fill="#6875F5"></path><path d="M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z" fill="#6875F5"></path></svg>`);
}
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetApplicationLogo.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
var __unplugin_components_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$P = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_JetApplicationLogo = __unplugin_components_0$2;
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><div class="p-6 bg-white border-b border-gray-200 sm:px-20"><div>`);
  _push(serverRenderer.ssrRenderComponent(_component_JetApplicationLogo, { class: "block w-auto h-12" }, null, _parent));
  _push(`</div><div class="mt-8 text-2xl">${serverRenderer.ssrInterpolate(_ctx.__("Welcome to your Jetstream application!"))}</div><div class="mt-6 text-gray-500">${serverRenderer.ssrInterpolate(_ctx.__("Laravel Jetstream provides a beautiful, robust starting point for your next Laravel application. Laravel is designed to help you build your application using a development environment that is simple, powerful, and enjoyable. We believe you should love expressing your creativity through programming, so we have spent time carefully crafting the Laravel ecosystem to be a breath of fresh air. We hope you love it."))}</div></div><div class="grid grid-cols-1 bg-gray-200 bg-opacity-25 md:grid-cols-2"><div class="p-6"><div class="flex items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-400"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg><div class="ml-4 text-lg font-semibold leading-7 text-gray-600"><a href="https://laravel.com/docs">${serverRenderer.ssrInterpolate(_ctx.__("Documentation"))}</a></div></div><div class="ml-12"><div class="mt-2 text-sm text-gray-500">${serverRenderer.ssrInterpolate(_ctx.__("Laravel has wonderful documentation covering every aspect of the framework. Whether you're new to the framework or have previous experience, we recommend reading all of the documentation from beginning to end."))}</div><a href="https://laravel.com/docs"><div class="flex items-center mt-3 text-sm font-semibold text-indigo-700"><div>${serverRenderer.ssrInterpolate(_ctx.__("Explore the documentation"))}</div><div class="ml-1 text-indigo-500"><svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div></div></a></div></div><div class="p-6 border-t border-gray-200 md:border-t-0 md:border-l"><div class="flex items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-400"><path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><div class="ml-4 text-lg font-semibold leading-7 text-gray-600"><a href="https://laracasts.com">${serverRenderer.ssrInterpolate(_ctx.__("Laracasts"))}</a></div></div><div class="ml-12"><div class="mt-2 text-sm text-gray-500">${serverRenderer.ssrInterpolate(_ctx.__("Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process."))}</div><a href="https://laracasts.com"><div class="flex items-center mt-3 text-sm font-semibold text-indigo-700"><div>${serverRenderer.ssrInterpolate(_ctx.__("Start watching Laracasts"))}</div><div class="ml-1 text-indigo-500"><svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div></div></a></div></div><div class="p-6 border-t border-gray-200"><div class="flex items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-400"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><div class="ml-4 text-lg font-semibold leading-7 text-gray-600"><a href="https://tailwindcss.com/">${serverRenderer.ssrInterpolate(_ctx.__("Tailwind"))}</a></div></div><div class="ml-12"><div class="mt-2 text-sm text-gray-500">${serverRenderer.ssrInterpolate(_ctx.__("Laravel Jetstream is built with Tailwind, an amazing utility first CSS framework that doesn't get in your way. You'll be amazed how easily you can build and maintain fresh, modern designs with this wonderful framework at your fingertips."))}</div></div></div><div class="p-6 border-t border-gray-200 md:border-l"><div class="flex items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-400"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg><div class="ml-4 text-lg font-semibold leading-7 text-gray-600">${serverRenderer.ssrInterpolate(_ctx.__("Authentication"))}</div></div><div class="ml-12"><div class="mt-2 text-sm text-gray-500">${serverRenderer.ssrInterpolate(_ctx.__("Authentication and registration views are included with Laravel Jetstream, as well as support for user email verification and resetting forgotten passwords. So, you're free to get started what matters most: building your application."))}</div></div></div></div></div>`);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetWelcome.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
var __unplugin_components_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$O = {
  __ssrInlineRender: true,
  props: ["active", "href", "has"],
  setup(__props) {
    const props = __props;
    const { active, href, has } = vue.toRefs(props);
    const classes = vue.computed(() => {
      active.value === true ? "block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition" : "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = vue.resolveComponent("Link");
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (vue.unref(has) == "button") {
        _push(`<button class="${serverRenderer.ssrRenderClass([vue.unref(classes), "w-full text-left"])}">`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else {
        _push(serverRenderer.ssrRenderComponent(_component_Link, {
          href: vue.unref(href),
          class: vue.unref(classes)
        }, {
          default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetResponsiveNavLink.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const _sfc_main$N = {
  __ssrInlineRender: true,
  props: ["href", "has"],
  setup(__props) {
    const props = __props;
    const { href, has } = vue.toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = vue.resolveComponent("Link");
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (vue.unref(has) == "button") {
        _push(`<button type="submit" class="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:bg-gray-100">`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else if (vue.unref(has) == "a") {
        _push(`<a${serverRenderer.ssrRenderAttr("href", vue.unref(href))} class="block px-4 py-2 text-sm leading-5 text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:bg-gray-100">`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        _push(serverRenderer.ssrRenderComponent(_component_Link, {
          href: vue.unref(href),
          class: "block px-4 py-2 text-sm leading-5 text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
        }, {
          default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetDropdownLink.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const _sfc_main$M = {
  __ssrInlineRender: true,
  props: {
    align: {
      default: "right"
    },
    width: {
      default: "48"
    },
    contentClasses: {
      default: () => ["py-1", "bg-white"]
    }
  },
  setup(__props) {
    const props = __props;
    let open = vue.ref(false);
    const closeOnEscape = (e2) => {
      if (open.value && e2.key === "Escape") {
        open.value = false;
      }
    };
    vue.onMounted(() => document.addEventListener("keydown", closeOnEscape));
    vue.onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = vue.computed(() => {
      return {
        48: "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = vue.computed(() => {
      if (props.align === "left") {
        return "origin-top-left left-0";
      } else if (props.align === "right") {
        return "origin-top-right right-0";
      } else {
        return "origin-top";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "relative" }, _attrs))}><div>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${serverRenderer.ssrRenderStyle(vue.unref(open) ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        style: [
          vue.unref(open) ? null : { display: "none" },
          { "display": "none" }
        ],
        class: ["absolute z-50 mt-2 rounded-md shadow-lg", [vue.unref(widthClass), vue.unref(alignmentClasses)]]
      }, _attrs))}><div class="${serverRenderer.ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetDropdown.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const _sfc_main$L = {
  __ssrInlineRender: true,
  props: ["href", "active"],
  setup(__props) {
    const props = __props;
    const { href, active } = vue.toRefs(props);
    const classes = vue.computed(() => {
      return active.value === true ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = vue.resolveComponent("Link");
      _push(serverRenderer.ssrRenderComponent(_component_Link, vue.mergeProps({
        href: vue.unref(href),
        class: vue.unref(classes)
      }, _attrs), {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetNavLink.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const _sfc_main$K = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z" fill="#6875F5"></path><path d="M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z" fill="#6875F5"></path></svg>`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetApplicationMark.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
var __unplugin_components_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$J = {
  __ssrInlineRender: true,
  setup(__props) {
    const show = vue.ref(true);
    const style = vue.computed(() => inertiaVue3.usePage().props.value.jetstream.flash?.bannerStyle || "success");
    const message = vue.computed(() => inertiaVue3.usePage().props.value.jetstream.flash?.banner || "");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (show.value && vue.unref(message)) {
        _push(`<div class="${serverRenderer.ssrRenderClass({ "bg-indigo-500": vue.unref(style) == "success", "bg-red-700": vue.unref(style) == "danger" })}"><div class="max-w-screen-xl px-3 py-2 mx-auto sm:px-6 lg:px-8"><div class="flex flex-wrap items-center justify-between"><div class="flex items-center flex-1 w-0 min-w-0"><span class="${serverRenderer.ssrRenderClass([{ "bg-indigo-600": vue.unref(style) == "success", "bg-red-600": vue.unref(style) == "danger" }, "flex p-2 rounded-lg"])}">`);
        if (vue.unref(style) == "success") {
          _push(`<svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(style) == "danger") {
          _push(`<svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span><p class="ml-3 text-sm font-medium text-white truncate">${serverRenderer.ssrInterpolate(vue.unref(message))}</p></div><div class="shrink-0 sm:ml-3"><button type="button" class="${serverRenderer.ssrRenderClass([{
          "hover:bg-indigo-600 focus:bg-indigo-600": vue.unref(style) == "success",
          "hover:bg-red-600 focus:bg-red-600": vue.unref(style) == "danger"
        }, "flex p-2 -mr-1 transition rounded-md focus:outline-none sm:-mr-2"])}" aria-label="Dismiss"><svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetBanner.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const trans = (key, replace, Zora) => {
  const locale = process.env.LOCALE;
  let translation = null;
  try {
    translation = key.split(".").reduce((t6, i2) => t6[i2] || null, Zora.translations[locale].php);
    if (translation) {
      return checkForVariables(translation, replace);
    }
  } catch (e2) {
  }
  try {
    translation = Zora.translations[locale]["json"][key];
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
  ___default["default"].forEach(replace, (value, key) => {
    translated = translation.replace(":" + key, value);
  });
  return translated;
};
function useTrans(key, replace) {
  return trans(key, replace, inertiaVue3.usePage().props.value.zora);
}
function t() {
  return (t = Object.assign || function(t6) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var e2 = arguments[r2];
      for (var n2 in e2)
        Object.prototype.hasOwnProperty.call(e2, n2) && (t6[n2] = e2[n2]);
    }
    return t6;
  }).apply(this, arguments);
}
var r = typeof Symbol != "undefined" && Symbol, e = "Function.prototype.bind called on incompatible ", n = Array.prototype.slice, o = Object.prototype.toString, i = Function.prototype.bind || function(t6) {
  var r2 = this;
  if (typeof r2 != "function" || o.call(r2) !== "[object Function]")
    throw new TypeError(e + r2);
  for (var i2, a2 = n.call(arguments, 1), f2 = function() {
    if (this instanceof i2) {
      var e2 = r2.apply(this, a2.concat(n.call(arguments)));
      return Object(e2) === e2 ? e2 : this;
    }
    return r2.apply(t6, a2.concat(n.call(arguments)));
  }, u2 = Math.max(0, r2.length - a2.length), y2 = [], c2 = 0; c2 < u2; c2++)
    y2.push("$" + c2);
  if (i2 = Function("binder", "return function (" + y2.join(",") + "){ return binder.apply(this,arguments); }")(f2), r2.prototype) {
    var p2 = function() {
    };
    p2.prototype = r2.prototype, i2.prototype = new p2(), p2.prototype = null;
  }
  return i2;
}, a = i.call(Function.call, Object.prototype.hasOwnProperty), f = SyntaxError, u = Function, y = TypeError, c = function(t6) {
  try {
    return u('"use strict"; return (' + t6 + ").constructor;")();
  } catch (t7) {
  }
}, p = Object.getOwnPropertyDescriptor;
if (p)
  try {
    p({}, "");
  } catch (t6) {
    p = null;
  }
var s, l = function() {
  throw new y();
}, d = p ? function() {
  try {
    return l;
  } catch (t6) {
    try {
      return p(arguments, "callee").get;
    } catch (t7) {
      return l;
    }
  }
}() : l, b = typeof r == "function" && typeof Symbol == "function" && typeof r("foo") == "symbol" && typeof Symbol("bar") == "symbol" && function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return false;
  if (typeof Symbol.iterator == "symbol")
    return true;
  var t6 = {}, r2 = Symbol("test"), e2 = Object(r2);
  if (typeof r2 == "string")
    return false;
  if (Object.prototype.toString.call(r2) !== "[object Symbol]")
    return false;
  if (Object.prototype.toString.call(e2) !== "[object Symbol]")
    return false;
  for (r2 in t6[r2] = 42, t6)
    return false;
  if (typeof Object.keys == "function" && Object.keys(t6).length !== 0)
    return false;
  if (typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t6).length !== 0)
    return false;
  var n2 = Object.getOwnPropertySymbols(t6);
  if (n2.length !== 1 || n2[0] !== r2)
    return false;
  if (!Object.prototype.propertyIsEnumerable.call(t6, r2))
    return false;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var o2 = Object.getOwnPropertyDescriptor(t6, r2);
    if (o2.value !== 42 || o2.enumerable !== true)
      return false;
  }
  return true;
}(), v = Object.getPrototypeOf || function(t6) {
  return t6.__proto__;
}, h = {}, m = typeof Uint8Array == "undefined" ? void 0 : v(Uint8Array), g = { "%AggregateError%": typeof AggregateError == "undefined" ? void 0 : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer == "undefined" ? void 0 : ArrayBuffer, "%ArrayIteratorPrototype%": b ? v([][Symbol.iterator]()) : void 0, "%AsyncFromSyncIteratorPrototype%": void 0, "%AsyncFunction%": h, "%AsyncGenerator%": h, "%AsyncGeneratorFunction%": h, "%AsyncIteratorPrototype%": h, "%Atomics%": typeof Atomics == "undefined" ? void 0 : Atomics, "%BigInt%": typeof BigInt == "undefined" ? void 0 : BigInt, "%Boolean%": Boolean, "%DataView%": typeof DataView == "undefined" ? void 0 : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": typeof Float32Array == "undefined" ? void 0 : Float32Array, "%Float64Array%": typeof Float64Array == "undefined" ? void 0 : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry == "undefined" ? void 0 : FinalizationRegistry, "%Function%": u, "%GeneratorFunction%": h, "%Int8Array%": typeof Int8Array == "undefined" ? void 0 : Int8Array, "%Int16Array%": typeof Int16Array == "undefined" ? void 0 : Int16Array, "%Int32Array%": typeof Int32Array == "undefined" ? void 0 : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": b ? v(v([][Symbol.iterator]())) : void 0, "%JSON%": typeof JSON == "object" ? JSON : void 0, "%Map%": typeof Map == "undefined" ? void 0 : Map, "%MapIteratorPrototype%": typeof Map != "undefined" && b ? v(new Map()[Symbol.iterator]()) : void 0, "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise == "undefined" ? void 0 : Promise, "%Proxy%": typeof Proxy == "undefined" ? void 0 : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": typeof Reflect == "undefined" ? void 0 : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set == "undefined" ? void 0 : Set, "%SetIteratorPrototype%": typeof Set != "undefined" && b ? v(new Set()[Symbol.iterator]()) : void 0, "%SharedArrayBuffer%": typeof SharedArrayBuffer == "undefined" ? void 0 : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": b ? v(""[Symbol.iterator]()) : void 0, "%Symbol%": b ? Symbol : void 0, "%SyntaxError%": f, "%ThrowTypeError%": d, "%TypedArray%": m, "%TypeError%": y, "%Uint8Array%": typeof Uint8Array == "undefined" ? void 0 : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray == "undefined" ? void 0 : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array == "undefined" ? void 0 : Uint16Array, "%Uint32Array%": typeof Uint32Array == "undefined" ? void 0 : Uint32Array, "%URIError%": URIError, "%WeakMap%": typeof WeakMap == "undefined" ? void 0 : WeakMap, "%WeakRef%": typeof WeakRef == "undefined" ? void 0 : WeakRef, "%WeakSet%": typeof WeakSet == "undefined" ? void 0 : WeakSet }, j = function t2(r2) {
  var e2;
  if (r2 === "%AsyncFunction%")
    e2 = c("async function () {}");
  else if (r2 === "%GeneratorFunction%")
    e2 = c("function* () {}");
  else if (r2 === "%AsyncGeneratorFunction%")
    e2 = c("async function* () {}");
  else if (r2 === "%AsyncGenerator%") {
    var n2 = t2("%AsyncGeneratorFunction%");
    n2 && (e2 = n2.prototype);
  } else if (r2 === "%AsyncIteratorPrototype%") {
    var o2 = t2("%AsyncGenerator%");
    o2 && (e2 = v(o2.prototype));
  }
  return g[r2] = e2, e2;
}, S = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, A = i.call(Function.call, Array.prototype.concat), O = i.call(Function.apply, Array.prototype.splice), w = i.call(Function.call, String.prototype.replace), P = i.call(Function.call, String.prototype.slice), E = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, F = /\\(\\)?/g, R = function(t6) {
  var r2 = P(t6, 0, 1), e2 = P(t6, -1);
  if (r2 === "%" && e2 !== "%")
    throw new f("invalid intrinsic syntax, expected closing `%`");
  if (e2 === "%" && r2 !== "%")
    throw new f("invalid intrinsic syntax, expected opening `%`");
  var n2 = [];
  return w(t6, E, function(t7, r3, e3, o2) {
    n2[n2.length] = e3 ? w(o2, F, "$1") : r3 || t7;
  }), n2;
}, I = function(t6, r2) {
  var e2, n2 = t6;
  if (a(S, n2) && (n2 = "%" + (e2 = S[n2])[0] + "%"), a(g, n2)) {
    var o2 = g[n2];
    if (o2 === h && (o2 = j(n2)), o2 === void 0 && !r2)
      throw new y("intrinsic " + t6 + " exists, but is not available. Please file an issue!");
    return { alias: e2, name: n2, value: o2 };
  }
  throw new f("intrinsic " + t6 + " does not exist!");
}, k = function(t6, r2) {
  if (typeof t6 != "string" || t6.length === 0)
    throw new y("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r2 != "boolean")
    throw new y('"allowMissing" argument must be a boolean');
  var e2 = R(t6), n2 = e2.length > 0 ? e2[0] : "", o2 = I("%" + n2 + "%", r2), i2 = o2.name, u2 = o2.value, c2 = false, s2 = o2.alias;
  s2 && (n2 = s2[0], O(e2, A([0, 1], s2)));
  for (var l2 = 1, d2 = true; l2 < e2.length; l2 += 1) {
    var b2 = e2[l2], v2 = P(b2, 0, 1), h2 = P(b2, -1);
    if ((v2 === '"' || v2 === "'" || v2 === "`" || h2 === '"' || h2 === "'" || h2 === "`") && v2 !== h2)
      throw new f("property names with quotes must have matching quotes");
    if (b2 !== "constructor" && d2 || (c2 = true), a(g, i2 = "%" + (n2 += "." + b2) + "%"))
      u2 = g[i2];
    else if (u2 != null) {
      if (!(b2 in u2)) {
        if (!r2)
          throw new y("base intrinsic for " + t6 + " exists, but the property is not available.");
        return;
      }
      if (p && l2 + 1 >= e2.length) {
        var m2 = p(u2, b2);
        u2 = (d2 = !!m2) && "get" in m2 && !("originalValue" in m2.get) ? m2.get : u2[b2];
      } else
        d2 = a(u2, b2), u2 = u2[b2];
      d2 && !c2 && (g[i2] = u2);
    }
  }
  return u2;
}, M = (function(t6) {
  var r2 = k("%Function.prototype.apply%"), e2 = k("%Function.prototype.call%"), n2 = k("%Reflect.apply%", true) || i.call(e2, r2), o2 = k("%Object.getOwnPropertyDescriptor%", true), a2 = k("%Object.defineProperty%", true), f2 = k("%Math.max%");
  if (a2)
    try {
      a2({}, "a", { value: 1 });
    } catch (t7) {
      a2 = null;
    }
  t6.exports = function(t7) {
    var r3 = n2(i, e2, arguments);
    if (o2 && a2) {
      var u3 = o2(r3, "length");
      u3.configurable && a2(r3, "length", { value: 1 + f2(0, t7.length - (arguments.length - 1)) });
    }
    return r3;
  };
  var u2 = function() {
    return n2(i, r2, arguments);
  };
  a2 ? a2(t6.exports, "apply", { value: u2 }) : t6.exports.apply = u2;
}(s = { exports: {} }), s.exports), x = M(k("String.prototype.indexOf")), U = function(t6, r2) {
  var e2 = k(t6, !!r2);
  return typeof e2 == "function" && x(t6, ".prototype.") > -1 ? M(e2) : e2;
}, W = typeof Map == "function" && Map.prototype, $ = Object.getOwnPropertyDescriptor && W ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, N = W && $ && typeof $.get == "function" ? $.get : null, B = W && Map.prototype.forEach, T = typeof Set == "function" && Set.prototype, C = Object.getOwnPropertyDescriptor && T ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, _ = T && C && typeof C.get == "function" ? C.get : null, D = T && Set.prototype.forEach, G = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap.prototype.has : null, q = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet.prototype.has : null, V = typeof WeakRef == "function" && WeakRef.prototype ? WeakRef.prototype.deref : null, z = Boolean.prototype.valueOf, J = Object.prototype.toString, L = Function.prototype.toString, H = String.prototype.match, Z = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Q = Object.getOwnPropertySymbols, K = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, X = typeof Symbol == "function" && typeof Symbol.iterator == "object", Y = Object.prototype.propertyIsEnumerable, tt = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t6) {
  return t6.__proto__;
} : null), nt = typeof Symbol == "function" && Symbol.toStringTag !== void 0 ? Symbol.toStringTag : null, ot = function t3(r2, e2, n2, o2) {
  var i2 = e2 || {};
  if (ct(i2, "quoteStyle") && i2.quoteStyle !== "single" && i2.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (ct(i2, "maxStringLength") && (typeof i2.maxStringLength == "number" ? i2.maxStringLength < 0 && i2.maxStringLength !== Infinity : i2.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var a2 = !ct(i2, "customInspect") || i2.customInspect;
  if (typeof a2 != "boolean" && a2 !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (ct(i2, "indent") && i2.indent !== null && i2.indent !== "	" && !(parseInt(i2.indent, 10) === i2.indent && i2.indent > 0))
    throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
  if (r2 === void 0)
    return "undefined";
  if (r2 === null)
    return "null";
  if (typeof r2 == "boolean")
    return r2 ? "true" : "false";
  if (typeof r2 == "string")
    return lt(r2, i2);
  if (typeof r2 == "number")
    return r2 === 0 ? Infinity / r2 > 0 ? "0" : "-0" : String(r2);
  if (typeof r2 == "bigint")
    return String(r2) + "n";
  var f2 = i2.depth === void 0 ? 5 : i2.depth;
  if (n2 === void 0 && (n2 = 0), n2 >= f2 && f2 > 0 && typeof r2 == "object")
    return ft(r2) ? "[Array]" : "[Object]";
  var u2, y2 = function(t6, r3) {
    var e3;
    if (t6.indent === "	")
      e3 = "	";
    else {
      if (!(typeof t6.indent == "number" && t6.indent > 0))
        return null;
      e3 = Array(t6.indent + 1).join(" ");
    }
    return { base: e3, prev: Array(r3 + 1).join(e3) };
  }(i2, n2);
  if (o2 === void 0)
    o2 = [];
  else if (st(o2, r2) >= 0)
    return "[Circular]";
  function c2(r3, e3, a3) {
    if (e3 && (o2 = o2.slice()).push(e3), a3) {
      var f3 = { depth: i2.depth };
      return ct(i2, "quoteStyle") && (f3.quoteStyle = i2.quoteStyle), t3(r3, f3, n2 + 1, o2);
    }
    return t3(r3, i2, n2 + 1, o2);
  }
  if (typeof r2 == "function") {
    var p2 = function(t6) {
      if (t6.name)
        return t6.name;
      var r3 = H.call(L.call(t6), /^function\s*([\w$]+)/);
      return r3 ? r3[1] : null;
    }(r2), s2 = gt(r2, c2);
    return "[Function" + (p2 ? ": " + p2 : " (anonymous)") + "]" + (s2.length > 0 ? " { " + s2.join(", ") + " }" : "");
  }
  if (ut(r2)) {
    var l2 = X ? String(r2).replace(/^(Symbol\(.*\))_[^)]*$/, "$1") : K.call(r2);
    return typeof r2 != "object" || X ? l2 : bt(l2);
  }
  if ((u2 = r2) && typeof u2 == "object" && (typeof HTMLElement != "undefined" && u2 instanceof HTMLElement || typeof u2.nodeName == "string" && typeof u2.getAttribute == "function")) {
    for (var d2 = "<" + String(r2.nodeName).toLowerCase(), b2 = r2.attributes || [], v2 = 0; v2 < b2.length; v2++)
      d2 += " " + b2[v2].name + "=" + it(at(b2[v2].value), "double", i2);
    return d2 += ">", r2.childNodes && r2.childNodes.length && (d2 += "..."), d2 + "</" + String(r2.nodeName).toLowerCase() + ">";
  }
  if (ft(r2)) {
    if (r2.length === 0)
      return "[]";
    var h2 = gt(r2, c2);
    return y2 && !function(t6) {
      for (var r3 = 0; r3 < t6.length; r3++)
        if (st(t6[r3], "\n") >= 0)
          return false;
      return true;
    }(h2) ? "[" + mt(h2, y2) + "]" : "[ " + h2.join(", ") + " ]";
  }
  if (function(t6) {
    return !(pt(t6) !== "[object Error]" || nt && typeof t6 == "object" && nt in t6);
  }(r2)) {
    var m2 = gt(r2, c2);
    return m2.length === 0 ? "[" + String(r2) + "]" : "{ [" + String(r2) + "] " + m2.join(", ") + " }";
  }
  if (typeof r2 == "object" && a2) {
    if (a2 !== "symbol" && typeof r2.inspect == "function")
      return r2.inspect();
  }
  if (function(t6) {
    if (!N || !t6 || typeof t6 != "object")
      return false;
    try {
      N.call(t6);
      try {
        _.call(t6);
      } catch (t7) {
        return true;
      }
      return t6 instanceof Map;
    } catch (t7) {
    }
    return false;
  }(r2)) {
    var g2 = [];
    return B.call(r2, function(t6, e3) {
      g2.push(c2(e3, r2, true) + " => " + c2(t6, r2));
    }), ht("Map", N.call(r2), g2, y2);
  }
  if (function(t6) {
    if (!_ || !t6 || typeof t6 != "object")
      return false;
    try {
      _.call(t6);
      try {
        N.call(t6);
      } catch (t7) {
        return true;
      }
      return t6 instanceof Set;
    } catch (t7) {
    }
    return false;
  }(r2)) {
    var j2 = [];
    return D.call(r2, function(t6) {
      j2.push(c2(t6, r2));
    }), ht("Set", _.call(r2), j2, y2);
  }
  if (function(t6) {
    if (!G || !t6 || typeof t6 != "object")
      return false;
    try {
      G.call(t6, G);
      try {
        q.call(t6, q);
      } catch (t7) {
        return true;
      }
      return t6 instanceof WeakMap;
    } catch (t7) {
    }
    return false;
  }(r2))
    return vt("WeakMap");
  if (function(t6) {
    if (!q || !t6 || typeof t6 != "object")
      return false;
    try {
      q.call(t6, q);
      try {
        G.call(t6, G);
      } catch (t7) {
        return true;
      }
      return t6 instanceof WeakSet;
    } catch (t7) {
    }
    return false;
  }(r2))
    return vt("WeakSet");
  if (function(t6) {
    if (!V || !t6 || typeof t6 != "object")
      return false;
    try {
      return V.call(t6), true;
    } catch (t7) {
    }
    return false;
  }(r2))
    return vt("WeakRef");
  if (function(t6) {
    return !(pt(t6) !== "[object Number]" || nt && typeof t6 == "object" && nt in t6);
  }(r2))
    return bt(c2(Number(r2)));
  if (function(t6) {
    if (!t6 || typeof t6 != "object" || !Z)
      return false;
    try {
      return Z.call(t6), true;
    } catch (t7) {
    }
    return false;
  }(r2))
    return bt(c2(Z.call(r2)));
  if (function(t6) {
    return !(pt(t6) !== "[object Boolean]" || nt && typeof t6 == "object" && nt in t6);
  }(r2))
    return bt(z.call(r2));
  if (function(t6) {
    return !(pt(t6) !== "[object String]" || nt && typeof t6 == "object" && nt in t6);
  }(r2))
    return bt(c2(String(r2)));
  if (!function(t6) {
    return !(pt(t6) !== "[object Date]" || nt && typeof t6 == "object" && nt in t6);
  }(r2) && !function(t6) {
    return !(pt(t6) !== "[object RegExp]" || nt && typeof t6 == "object" && nt in t6);
  }(r2)) {
    var S2 = gt(r2, c2), A2 = tt ? tt(r2) === Object.prototype : r2 instanceof Object || r2.constructor === Object, O2 = r2 instanceof Object ? "" : "null prototype", w2 = !A2 && nt && Object(r2) === r2 && nt in r2 ? pt(r2).slice(8, -1) : O2 ? "Object" : "", P2 = (A2 || typeof r2.constructor != "function" ? "" : r2.constructor.name ? r2.constructor.name + " " : "") + (w2 || O2 ? "[" + [].concat(w2 || [], O2 || []).join(": ") + "] " : "");
    return S2.length === 0 ? P2 + "{}" : y2 ? P2 + "{" + mt(S2, y2) + "}" : P2 + "{ " + S2.join(", ") + " }";
  }
  return String(r2);
};
function it(t6, r2, e2) {
  var n2 = (e2.quoteStyle || r2) === "double" ? '"' : "'";
  return n2 + t6 + n2;
}
function at(t6) {
  return String(t6).replace(/"/g, "&quot;");
}
function ft(t6) {
  return !(pt(t6) !== "[object Array]" || nt && typeof t6 == "object" && nt in t6);
}
function ut(t6) {
  if (X)
    return t6 && typeof t6 == "object" && t6 instanceof Symbol;
  if (typeof t6 == "symbol")
    return true;
  if (!t6 || typeof t6 != "object" || !K)
    return false;
  try {
    return K.call(t6), true;
  } catch (t7) {
  }
  return false;
}
var yt = Object.prototype.hasOwnProperty || function(t6) {
  return t6 in this;
};
function ct(t6, r2) {
  return yt.call(t6, r2);
}
function pt(t6) {
  return J.call(t6);
}
function st(t6, r2) {
  if (t6.indexOf)
    return t6.indexOf(r2);
  for (var e2 = 0, n2 = t6.length; e2 < n2; e2++)
    if (t6[e2] === r2)
      return e2;
  return -1;
}
function lt(t6, r2) {
  if (t6.length > r2.maxStringLength) {
    var e2 = t6.length - r2.maxStringLength, n2 = "... " + e2 + " more character" + (e2 > 1 ? "s" : "");
    return lt(t6.slice(0, r2.maxStringLength), r2) + n2;
  }
  return it(t6.replace(/(['\\])/g, "\\$1").replace(/[\x00-\x1f]/g, dt), "single", r2);
}
function dt(t6) {
  var r2 = t6.charCodeAt(0), e2 = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[r2];
  return e2 ? "\\" + e2 : "\\x" + (r2 < 16 ? "0" : "") + r2.toString(16).toUpperCase();
}
function bt(t6) {
  return "Object(" + t6 + ")";
}
function vt(t6) {
  return t6 + " { ? }";
}
function ht(t6, r2, e2, n2) {
  return t6 + " (" + r2 + ") {" + (n2 ? mt(e2, n2) : e2.join(", ")) + "}";
}
function mt(t6, r2) {
  if (t6.length === 0)
    return "";
  var e2 = "\n" + r2.prev + r2.base;
  return e2 + t6.join("," + e2) + "\n" + r2.prev;
}
function gt(t6, r2) {
  var e2 = ft(t6), n2 = [];
  if (e2) {
    n2.length = t6.length;
    for (var o2 = 0; o2 < t6.length; o2++)
      n2[o2] = ct(t6, o2) ? r2(t6[o2], t6) : "";
  }
  var i2, a2 = typeof Q == "function" ? Q(t6) : [];
  if (X) {
    i2 = {};
    for (var f2 = 0; f2 < a2.length; f2++)
      i2["$" + a2[f2]] = a2[f2];
  }
  for (var u2 in t6)
    ct(t6, u2) && (e2 && String(Number(u2)) === u2 && u2 < t6.length || X && i2["$" + u2] instanceof Symbol || (/[^\w$]/.test(u2) ? n2.push(r2(u2, t6) + ": " + r2(t6[u2], t6)) : n2.push(u2 + ": " + r2(t6[u2], t6))));
  if (typeof Q == "function")
    for (var y2 = 0; y2 < a2.length; y2++)
      Y.call(t6, a2[y2]) && n2.push("[" + r2(a2[y2]) + "]: " + r2(t6[a2[y2]], t6));
  return n2;
}
var jt = k("%TypeError%"), St = k("%WeakMap%", true), At = k("%Map%", true), Ot = U("WeakMap.prototype.get", true), wt = U("WeakMap.prototype.set", true), Pt = U("WeakMap.prototype.has", true), Et = U("Map.prototype.get", true), Ft = U("Map.prototype.set", true), Rt = U("Map.prototype.has", true), It = function(t6, r2) {
  for (var e2, n2 = t6; (e2 = n2.next) !== null; n2 = e2)
    if (e2.key === r2)
      return n2.next = e2.next, e2.next = t6.next, t6.next = e2, e2;
}, kt = function() {
  var t6, r2, e2, n2 = { assert: function(t7) {
    if (!n2.has(t7))
      throw new jt("Side channel does not contain " + ot(t7));
  }, get: function(n3) {
    if (St && n3 && (typeof n3 == "object" || typeof n3 == "function")) {
      if (t6)
        return Ot(t6, n3);
    } else if (At) {
      if (r2)
        return Et(r2, n3);
    } else if (e2)
      return function(t7, r3) {
        var e3 = It(t7, r3);
        return e3 && e3.value;
      }(e2, n3);
  }, has: function(n3) {
    if (St && n3 && (typeof n3 == "object" || typeof n3 == "function")) {
      if (t6)
        return Pt(t6, n3);
    } else if (At) {
      if (r2)
        return Rt(r2, n3);
    } else if (e2)
      return function(t7, r3) {
        return !!It(t7, r3);
      }(e2, n3);
    return false;
  }, set: function(n3, o2) {
    St && n3 && (typeof n3 == "object" || typeof n3 == "function") ? (t6 || (t6 = new St()), wt(t6, n3, o2)) : At ? (r2 || (r2 = new At()), Ft(r2, n3, o2)) : (e2 || (e2 = { key: {}, next: null }), function(t7, r3, e3) {
      var n4 = It(t7, r3);
      n4 ? n4.value = e3 : t7.next = { key: r3, next: t7.next, value: e3 };
    }(e2, n3, o2));
  } };
  return n2;
}, Mt = String.prototype.replace, xt = /%20/g, Ut = { default: "RFC3986", formatters: { RFC1738: function(t6) {
  return Mt.call(t6, xt, "+");
}, RFC3986: function(t6) {
  return String(t6);
} }, RFC1738: "RFC1738", RFC3986: "RFC3986" }, Wt = Object.prototype.hasOwnProperty, $t = Array.isArray, Nt = function() {
  for (var t6 = [], r2 = 0; r2 < 256; ++r2)
    t6.push("%" + ((r2 < 16 ? "0" : "") + r2.toString(16)).toUpperCase());
  return t6;
}(), Bt = function(t6, r2) {
  for (var e2 = r2 && r2.plainObjects ? Object.create(null) : {}, n2 = 0; n2 < t6.length; ++n2)
    t6[n2] !== void 0 && (e2[n2] = t6[n2]);
  return e2;
}, Tt = { arrayToObject: Bt, assign: function(t6, r2) {
  return Object.keys(r2).reduce(function(t7, e2) {
    return t7[e2] = r2[e2], t7;
  }, t6);
}, combine: function(t6, r2) {
  return [].concat(t6, r2);
}, compact: function(t6) {
  for (var r2 = [{ obj: { o: t6 }, prop: "o" }], e2 = [], n2 = 0; n2 < r2.length; ++n2)
    for (var o2 = r2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), f2 = 0; f2 < a2.length; ++f2) {
      var u2 = a2[f2], y2 = i2[u2];
      typeof y2 == "object" && y2 !== null && e2.indexOf(y2) === -1 && (r2.push({ obj: i2, prop: u2 }), e2.push(y2));
    }
  return function(t7) {
    for (; t7.length > 1; ) {
      var r3 = t7.pop(), e3 = r3.obj[r3.prop];
      if ($t(e3)) {
        for (var n3 = [], o3 = 0; o3 < e3.length; ++o3)
          e3[o3] !== void 0 && n3.push(e3[o3]);
        r3.obj[r3.prop] = n3;
      }
    }
  }(r2), t6;
}, decode: function(t6, r2, e2) {
  var n2 = t6.replace(/\+/g, " ");
  if (e2 === "iso-8859-1")
    return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t7) {
    return n2;
  }
}, encode: function(t6, r2, e2, n2, o2) {
  if (t6.length === 0)
    return t6;
  var i2 = t6;
  if (typeof t6 == "symbol" ? i2 = Symbol.prototype.toString.call(t6) : typeof t6 != "string" && (i2 = String(t6)), e2 === "iso-8859-1")
    return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t7) {
      return "%26%23" + parseInt(t7.slice(2), 16) + "%3B";
    });
  for (var a2 = "", f2 = 0; f2 < i2.length; ++f2) {
    var u2 = i2.charCodeAt(f2);
    u2 === 45 || u2 === 46 || u2 === 95 || u2 === 126 || u2 >= 48 && u2 <= 57 || u2 >= 65 && u2 <= 90 || u2 >= 97 && u2 <= 122 || o2 === Ut.RFC1738 && (u2 === 40 || u2 === 41) ? a2 += i2.charAt(f2) : u2 < 128 ? a2 += Nt[u2] : u2 < 2048 ? a2 += Nt[192 | u2 >> 6] + Nt[128 | 63 & u2] : u2 < 55296 || u2 >= 57344 ? a2 += Nt[224 | u2 >> 12] + Nt[128 | u2 >> 6 & 63] + Nt[128 | 63 & u2] : (u2 = 65536 + ((1023 & u2) << 10 | 1023 & i2.charCodeAt(f2 += 1)), a2 += Nt[240 | u2 >> 18] + Nt[128 | u2 >> 12 & 63] + Nt[128 | u2 >> 6 & 63] + Nt[128 | 63 & u2]);
  }
  return a2;
}, isBuffer: function(t6) {
  return !(!t6 || typeof t6 != "object" || !(t6.constructor && t6.constructor.isBuffer && t6.constructor.isBuffer(t6)));
}, isRegExp: function(t6) {
  return Object.prototype.toString.call(t6) === "[object RegExp]";
}, maybeMap: function(t6, r2) {
  if ($t(t6)) {
    for (var e2 = [], n2 = 0; n2 < t6.length; n2 += 1)
      e2.push(r2(t6[n2]));
    return e2;
  }
  return r2(t6);
}, merge: function t4(r2, e2, n2) {
  if (!e2)
    return r2;
  if (typeof e2 != "object") {
    if ($t(r2))
      r2.push(e2);
    else {
      if (!r2 || typeof r2 != "object")
        return [r2, e2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !Wt.call(Object.prototype, e2)) && (r2[e2] = true);
    }
    return r2;
  }
  if (!r2 || typeof r2 != "object")
    return [r2].concat(e2);
  var o2 = r2;
  return $t(r2) && !$t(e2) && (o2 = Bt(r2, n2)), $t(r2) && $t(e2) ? (e2.forEach(function(e3, o3) {
    if (Wt.call(r2, o3)) {
      var i2 = r2[o3];
      i2 && typeof i2 == "object" && e3 && typeof e3 == "object" ? r2[o3] = t4(i2, e3, n2) : r2.push(e3);
    } else
      r2[o3] = e3;
  }), r2) : Object.keys(e2).reduce(function(r3, o3) {
    var i2 = e2[o3];
    return r3[o3] = Wt.call(r3, o3) ? t4(r3[o3], i2, n2) : i2, r3;
  }, o2);
} }, Ct = Object.prototype.hasOwnProperty, _t = { brackets: function(t6) {
  return t6 + "[]";
}, comma: "comma", indices: function(t6, r2) {
  return t6 + "[" + r2 + "]";
}, repeat: function(t6) {
  return t6;
} }, Dt = Array.isArray, Gt = Array.prototype.push, qt = function(t6, r2) {
  Gt.apply(t6, Dt(r2) ? r2 : [r2]);
}, Vt = Date.prototype.toISOString, zt = Ut.default, Jt = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: Tt.encode, encodeValuesOnly: false, format: zt, formatter: Ut.formatters[zt], indices: false, serializeDate: function(t6) {
  return Vt.call(t6);
}, skipNulls: false, strictNullHandling: false }, Lt = function t5(r2, e2, n2, o2, i2, a2, f2, u2, y2, c2, p2, s2, l2, d2, b2) {
  var v2, h2 = r2;
  if (b2.has(r2))
    throw new RangeError("Cyclic object value");
  if (typeof f2 == "function" ? h2 = f2(e2, h2) : h2 instanceof Date ? h2 = c2(h2) : n2 === "comma" && Dt(h2) && (h2 = Tt.maybeMap(h2, function(t6) {
    return t6 instanceof Date ? c2(t6) : t6;
  })), h2 === null) {
    if (o2)
      return a2 && !l2 ? a2(e2, Jt.encoder, d2, "key", p2) : e2;
    h2 = "";
  }
  if (typeof (v2 = h2) == "string" || typeof v2 == "number" || typeof v2 == "boolean" || typeof v2 == "symbol" || typeof v2 == "bigint" || Tt.isBuffer(h2))
    return a2 ? [s2(l2 ? e2 : a2(e2, Jt.encoder, d2, "key", p2)) + "=" + s2(a2(h2, Jt.encoder, d2, "value", p2))] : [s2(e2) + "=" + s2(String(h2))];
  var m2, g2 = [];
  if (h2 === void 0)
    return g2;
  if (n2 === "comma" && Dt(h2))
    m2 = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if (Dt(f2))
    m2 = f2;
  else {
    var j2 = Object.keys(h2);
    m2 = u2 ? j2.sort(u2) : j2;
  }
  for (var S2 = 0; S2 < m2.length; ++S2) {
    var A2 = m2[S2], O2 = typeof A2 == "object" && A2.value !== void 0 ? A2.value : h2[A2];
    if (!i2 || O2 !== null) {
      var w2 = Dt(h2) ? typeof n2 == "function" ? n2(e2, A2) : e2 : e2 + (y2 ? "." + A2 : "[" + A2 + "]");
      b2.set(r2, true);
      var P2 = kt();
      qt(g2, t5(O2, w2, n2, o2, i2, a2, f2, u2, y2, c2, p2, s2, l2, d2, P2));
    }
  }
  return g2;
}, Ht = Object.prototype.hasOwnProperty, Zt = Array.isArray, Qt = { allowDots: false, allowPrototypes: false, allowSparse: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: Tt.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, Kt = function(t6) {
  return t6.replace(/&#(\d+);/g, function(t7, r2) {
    return String.fromCharCode(parseInt(r2, 10));
  });
}, Xt = function(t6, r2) {
  return t6 && typeof t6 == "string" && r2.comma && t6.indexOf(",") > -1 ? t6.split(",") : t6;
}, Yt = function(t6, r2, e2, n2) {
  if (t6) {
    var o2 = e2.allowDots ? t6.replace(/\.([^.[]+)/g, "[$1]") : t6, i2 = /(\[[^[\]]*])/g, a2 = e2.depth > 0 && /(\[[^[\]]*])/.exec(o2), f2 = a2 ? o2.slice(0, a2.index) : o2, u2 = [];
    if (f2) {
      if (!e2.plainObjects && Ht.call(Object.prototype, f2) && !e2.allowPrototypes)
        return;
      u2.push(f2);
    }
    for (var y2 = 0; e2.depth > 0 && (a2 = i2.exec(o2)) !== null && y2 < e2.depth; ) {
      if (y2 += 1, !e2.plainObjects && Ht.call(Object.prototype, a2[1].slice(1, -1)) && !e2.allowPrototypes)
        return;
      u2.push(a2[1]);
    }
    return a2 && u2.push("[" + o2.slice(a2.index) + "]"), function(t7, r3, e3, n3) {
      for (var o3 = n3 ? r3 : Xt(r3, e3), i3 = t7.length - 1; i3 >= 0; --i3) {
        var a3, f3 = t7[i3];
        if (f3 === "[]" && e3.parseArrays)
          a3 = [].concat(o3);
        else {
          a3 = e3.plainObjects ? Object.create(null) : {};
          var u3 = f3.charAt(0) === "[" && f3.charAt(f3.length - 1) === "]" ? f3.slice(1, -1) : f3, y3 = parseInt(u3, 10);
          e3.parseArrays || u3 !== "" ? !isNaN(y3) && f3 !== u3 && String(y3) === u3 && y3 >= 0 && e3.parseArrays && y3 <= e3.arrayLimit ? (a3 = [])[y3] = o3 : a3[u3] = o3 : a3 = { 0: o3 };
        }
        o3 = a3;
      }
      return o3;
    }(u2, r2, e2, n2);
  }
};
class tr {
  constructor(t6, r2, e2) {
    var n2;
    this.name = t6, this.definition = r2, this.bindings = (n2 = r2.bindings) != null ? n2 : {}, this.config = e2;
  }
  get template() {
    return `${this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : ""}/${this.definition.uri}`.replace(/\/+$/, "");
  }
  get parameterSegments() {
    var t6, r2;
    return (t6 = (r2 = this.template.match(/{[^}?]+\??}/g)) == null ? void 0 : r2.map((t7) => ({ name: t7.replace(/{|\??}/g, ""), required: !/\?}$/.test(t7) }))) != null ? t6 : [];
  }
  matchesUrl(t6) {
    if (!this.definition.methods.includes("GET"))
      return false;
    const r2 = this.template.replace(/\/{[^}?]*\?}/g, "(/[^/?]+)?").replace(/{[^}?]*\?}/g, "([^/?]+)?").replace(/{[^}]+}/g, "[^/?]+").replace(/^\w+:\/\//, "");
    return new RegExp(`^${r2}$`).test(t6.replace(/\/+$/, "").split("?").shift());
  }
  compile(t6) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)\??}/g, (r2, e2) => {
      var n2;
      if ([null, void 0].includes(t6[e2]) && this.parameterSegments.find(({ name: t7 }) => t7 === e2).required)
        throw new Error(`Ziggy error: '${e2}' parameter is required for route '${this.name}'.`);
      return encodeURIComponent((n2 = t6[e2]) != null ? n2 : "");
    }).replace(/\/+$/, "") : this.template;
  }
}
class rr extends String {
  constructor(r2, e2, n2 = true, o2) {
    if (super(), this.t = o2 != null ? o2 : typeof Ziggy != "undefined" ? Ziggy : globalThis == null ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), r2) {
      if (!this.t.routes[r2])
        throw new Error(`Ziggy error: route '${r2}' is not in the route list.`);
      this.i = new tr(r2, this.t.routes[r2], this.t), this.u = this.p(e2);
    }
  }
  toString() {
    const r2 = Object.keys(this.u).filter((t6) => !this.i.parameterSegments.some(({ name: r3 }) => r3 === t6)).filter((t6) => t6 !== "_query").reduce((r3, e2) => t({}, r3, { [e2]: this.u[e2] }), {});
    return this.i.compile(this.u) + function(t6, r3) {
      var e2, n2 = t6, o2 = function(t7) {
        if (!t7)
          return Jt;
        if (t7.encoder != null && typeof t7.encoder != "function")
          throw new TypeError("Encoder has to be a function.");
        var r4 = t7.charset || Jt.charset;
        if (t7.charset !== void 0 && t7.charset !== "utf-8" && t7.charset !== "iso-8859-1")
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var e3 = Ut.default;
        if (t7.format !== void 0) {
          if (!Ct.call(Ut.formatters, t7.format))
            throw new TypeError("Unknown format option provided.");
          e3 = t7.format;
        }
        var n3 = Ut.formatters[e3], o3 = Jt.filter;
        return (typeof t7.filter == "function" || Dt(t7.filter)) && (o3 = t7.filter), { addQueryPrefix: typeof t7.addQueryPrefix == "boolean" ? t7.addQueryPrefix : Jt.addQueryPrefix, allowDots: t7.allowDots === void 0 ? Jt.allowDots : !!t7.allowDots, charset: r4, charsetSentinel: typeof t7.charsetSentinel == "boolean" ? t7.charsetSentinel : Jt.charsetSentinel, delimiter: t7.delimiter === void 0 ? Jt.delimiter : t7.delimiter, encode: typeof t7.encode == "boolean" ? t7.encode : Jt.encode, encoder: typeof t7.encoder == "function" ? t7.encoder : Jt.encoder, encodeValuesOnly: typeof t7.encodeValuesOnly == "boolean" ? t7.encodeValuesOnly : Jt.encodeValuesOnly, filter: o3, format: e3, formatter: n3, serializeDate: typeof t7.serializeDate == "function" ? t7.serializeDate : Jt.serializeDate, skipNulls: typeof t7.skipNulls == "boolean" ? t7.skipNulls : Jt.skipNulls, sort: typeof t7.sort == "function" ? t7.sort : null, strictNullHandling: typeof t7.strictNullHandling == "boolean" ? t7.strictNullHandling : Jt.strictNullHandling };
      }(r3);
      typeof o2.filter == "function" ? n2 = (0, o2.filter)("", n2) : Dt(o2.filter) && (e2 = o2.filter);
      var i2 = [];
      if (typeof n2 != "object" || n2 === null)
        return "";
      var a2 = _t[r3 && r3.arrayFormat in _t ? r3.arrayFormat : r3 && "indices" in r3 ? r3.indices ? "indices" : "repeat" : "indices"];
      e2 || (e2 = Object.keys(n2)), o2.sort && e2.sort(o2.sort);
      for (var f2 = kt(), u2 = 0; u2 < e2.length; ++u2) {
        var y2 = e2[u2];
        o2.skipNulls && n2[y2] === null || qt(i2, Lt(n2[y2], y2, a2, o2.strictNullHandling, o2.skipNulls, o2.encode ? o2.encoder : null, o2.filter, o2.sort, o2.allowDots, o2.serializeDate, o2.format, o2.formatter, o2.encodeValuesOnly, o2.charset, f2));
      }
      var c2 = i2.join(o2.delimiter), p2 = o2.addQueryPrefix === true ? "?" : "";
      return o2.charsetSentinel && (p2 += o2.charset === "iso-8859-1" ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c2.length > 0 ? p2 + c2 : "";
    }(t({}, r2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t6, r3) => typeof t6 == "boolean" ? Number(t6) : r3(t6) });
  }
  current(t6, r2) {
    const e2 = this.t.absolute ? this.l().host + this.l().pathname : this.l().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/"), [n2, o2] = Object.entries(this.t.routes).find(([r3, n3]) => new tr(t6, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    if (!t6)
      return n2;
    const i2 = new RegExp(`^${t6.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !i2)
      return i2;
    const a2 = new tr(n2, o2, this.t);
    r2 = this.p(r2, a2);
    const f2 = this.v(o2);
    return !(!Object.values(r2).every((t7) => !t7) || Object.values(f2).length) || Object.entries(r2).every(([t7, r3]) => f2[t7] == r3);
  }
  l() {
    var t6, r2, e2, n2, o2, i2;
    const { host: a2 = "", pathname: f2 = "", search: u2 = "" } = typeof window != "undefined" ? window.location : {};
    return { host: (t6 = (r2 = this.t.location) == null ? void 0 : r2.host) != null ? t6 : a2, pathname: (e2 = (n2 = this.t.location) == null ? void 0 : n2.pathname) != null ? e2 : f2, search: (o2 = (i2 = this.t.location) == null ? void 0 : i2.search) != null ? o2 : u2 };
  }
  get params() {
    return this.v(this.t.routes[this.current()]);
  }
  has(t6) {
    return Object.keys(this.t.routes).includes(t6);
  }
  p(r2 = {}, e2 = this.i) {
    r2 = ["string", "number"].includes(typeof r2) ? [r2] : r2;
    const n2 = e2.parameterSegments.filter(({ name: t6 }) => !this.t.defaults[t6]);
    return Array.isArray(r2) ? r2 = r2.reduce((r3, e3, o2) => t({}, r3, n2[o2] ? { [n2[o2].name]: e3 } : { [e3]: "" }), {}) : n2.length !== 1 || r2[n2[0].name] || !r2.hasOwnProperty(Object.values(e2.bindings)[0]) && !r2.hasOwnProperty("id") || (r2 = { [n2[0].name]: r2 }), t({}, this.h(e2), this.m(r2, e2));
  }
  h(r2) {
    return r2.parameterSegments.filter(({ name: t6 }) => this.t.defaults[t6]).reduce((r3, { name: e2 }, n2) => t({}, r3, { [e2]: this.t.defaults[e2] }), {});
  }
  m(r2, { bindings: e2, parameterSegments: n2 }) {
    return Object.entries(r2).reduce((r3, [o2, i2]) => {
      if (!i2 || typeof i2 != "object" || Array.isArray(i2) || !n2.some(({ name: t6 }) => t6 === o2))
        return t({}, r3, { [o2]: i2 });
      if (!i2.hasOwnProperty(e2[o2])) {
        if (!i2.hasOwnProperty("id"))
          throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${e2[o2]}'.`);
        e2[o2] = "id";
      }
      return t({}, r3, { [o2]: i2[e2[o2]] });
    }, {});
  }
  v(r2) {
    var e2;
    let n2 = this.l().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "");
    const o2 = (r3, e3 = "", n3) => {
      const [o3, i2] = [r3, e3].map((t6) => t6.split(n3));
      return i2.reduce((r4, e4, n4) => /{[^}?]+\??}/.test(e4) && o3[n4] ? t({}, r4, { [e4.replace(/.*{|\??}.*/g, "")]: o3[n4].replace(e4.match(/^[^{]*/g), "").replace(e4.match(/[^}]*$/g), "") }) : r4, {});
    };
    return t({}, o2(this.l().host, r2.domain, "."), o2(n2, r2.uri, "/"), function(t6, r3) {
      var e3 = Qt;
      if (t6 === "" || t6 == null)
        return e3.plainObjects ? Object.create(null) : {};
      for (var n3 = typeof t6 == "string" ? function(t7, r4) {
        var e4, n4 = {}, o4 = (r4.ignoreQueryPrefix ? t7.replace(/^\?/, "") : t7).split(r4.delimiter, r4.parameterLimit === Infinity ? void 0 : r4.parameterLimit), i3 = -1, a3 = r4.charset;
        if (r4.charsetSentinel)
          for (e4 = 0; e4 < o4.length; ++e4)
            o4[e4].indexOf("utf8=") === 0 && (o4[e4] === "utf8=%E2%9C%93" ? a3 = "utf-8" : o4[e4] === "utf8=%26%2310003%3B" && (a3 = "iso-8859-1"), i3 = e4, e4 = o4.length);
        for (e4 = 0; e4 < o4.length; ++e4)
          if (e4 !== i3) {
            var f3, u3, y2 = o4[e4], c2 = y2.indexOf("]="), p2 = c2 === -1 ? y2.indexOf("=") : c2 + 1;
            p2 === -1 ? (f3 = r4.decoder(y2, Qt.decoder, a3, "key"), u3 = r4.strictNullHandling ? null : "") : (f3 = r4.decoder(y2.slice(0, p2), Qt.decoder, a3, "key"), u3 = Tt.maybeMap(Xt(y2.slice(p2 + 1), r4), function(t8) {
              return r4.decoder(t8, Qt.decoder, a3, "value");
            })), u3 && r4.interpretNumericEntities && a3 === "iso-8859-1" && (u3 = Kt(u3)), y2.indexOf("[]=") > -1 && (u3 = Zt(u3) ? [u3] : u3), n4[f3] = Ht.call(n4, f3) ? Tt.combine(n4[f3], u3) : u3;
          }
        return n4;
      }(t6, e3) : t6, o3 = e3.plainObjects ? Object.create(null) : {}, i2 = Object.keys(n3), a2 = 0; a2 < i2.length; ++a2) {
        var f2 = i2[a2], u2 = Yt(f2, n3[f2], e3, typeof t6 == "string");
        o3 = Tt.merge(o3, u2, e3);
      }
      return e3.allowSparse === true ? o3 : Tt.compact(o3);
    }((e2 = this.l().search) == null ? void 0 : e2.replace(/^\?/, "")));
  }
  valueOf() {
    return this.toString();
  }
  check(t6) {
    return this.has(t6);
  }
}
function er(t6, r2, e2, n2) {
  const o2 = new rr(t6, r2, e2, n2);
  return t6 ? o2.toString() : o2;
}
function useRoutes(name, params) {
  return er(name, params, false, inertiaVue3.usePage().props.value.ziggy);
}
const _sfc_main$I = {
  __ssrInlineRender: true,
  props: { title: String },
  setup(__props) {
    const props = __props;
    const title = props.title || useTrans("Dashboard");
    const showingNavigationDropdown = vue.ref(false);
    const switchToTeam = (team) => {
      inertia.Inertia.put(useRoutes("current-team.update"), { team_id: team.id }, { preserveState: false });
    };
    const logout = () => {
      inertia.Inertia.post(useRoutes("logout"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = vue.resolveComponent("Head");
      const _component_JetBanner = _sfc_main$J;
      const _component_Link = vue.resolveComponent("Link");
      const _component_JetApplicationMark = __unplugin_components_1$1;
      const _component_JetNavLink = _sfc_main$L;
      const _component_JetDropdown = _sfc_main$M;
      const _component_JetDropdownLink = _sfc_main$N;
      const _component_JetResponsiveNavLink = _sfc_main$O;
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.ssrRenderComponent(_component_Head, { title: vue.unref(title) }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_JetBanner, null, null, _parent));
      _push(`<div class="min-h-screen bg-gray-100"><nav class="bg-white border-b border-gray-100"><div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="flex items-center shrink-0">`);
      _push(serverRenderer.ssrRenderComponent(_component_Link, {
        href: _ctx.route("dashboard")
      }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetApplicationMark, { class: "block w-auto h-9" }, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetApplicationMark, { class: "block w-auto h-9" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">`);
      _push(serverRenderer.ssrRenderComponent(_component_JetNavLink, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Dashboard"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Dashboard")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden sm:flex sm:items-center sm:ml-6"><div class="relative ml-3">`);
      if (_ctx.$page.props.jetstream.hasTeamFeatures) {
        _push(serverRenderer.ssrRenderComponent(_component_JetDropdown, {
          align: "right",
          width: "60"
        }, {
          trigger: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.$page.props.user.current_team.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
            } else {
              return [
                vue.createVNode("span", { class: "inline-flex rounded-md" }, [
                  vue.createVNode("button", {
                    type: "button",
                    class: "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50"
                  }, [
                    vue.createTextVNode(vue.toDisplayString(_ctx.$page.props.user.current_team.name) + " ", 1),
                    (vue.openBlock(), vue.createBlock("svg", {
                      class: "ml-2 -mr-0.5 h-4 w-4",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor"
                    }, [
                      vue.createVNode("path", {
                        "fill-rule": "evenodd",
                        d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                        "clip-rule": "evenodd"
                      })
                    ]))
                  ])
                ])
              ];
            }
          }),
          content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-60"${_scopeId}>`);
              if (_ctx.$page.props.jetstream.hasTeamFeatures) {
                _push2(`<!--[--><div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Manage Team"))}</div>`);
                _push2(serverRenderer.ssrRenderComponent(_component_JetDropdownLink, {
                  href: _ctx.route("teams.show", _ctx.$page.props.user.current_team)
                }, {
                  default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Team Settings"))}`);
                    } else {
                      return [
                        vue.createTextVNode(vue.toDisplayString(_ctx.__("Team Settings")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                if (_ctx.$page.props.jetstream.canCreateTeams) {
                  _push2(serverRenderer.ssrRenderComponent(_component_JetDropdownLink, {
                    href: _ctx.route("teams.create")
                  }, {
                    default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Create New Team"))}`);
                      } else {
                        return [
                          vue.createTextVNode(vue.toDisplayString(_ctx.__("Create New Team")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="border-t border-gray-100"${_scopeId}></div><div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Switch Teams"))}</div><!--[-->`);
                serverRenderer.ssrRenderList(_ctx.$page.props.user.all_teams, (team) => {
                  _push2(`<form${_scopeId}>`);
                  _push2(serverRenderer.ssrRenderComponent(_component_JetDropdownLink, { has: "button" }, {
                    default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="flex items-center"${_scopeId2}>`);
                        if (team.id == _ctx.$page.props.user.current_team_id) {
                          _push3(`<svg class="w-5 h-5 mr-2 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId2}></path></svg>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<div${_scopeId2}>${serverRenderer.ssrInterpolate(team.name)}</div></div>`);
                      } else {
                        return [
                          vue.createVNode("div", { class: "flex items-center" }, [
                            team.id == _ctx.$page.props.user.current_team_id ? (vue.openBlock(), vue.createBlock("svg", {
                              key: 0,
                              class: "w-5 h-5 mr-2 text-green-400",
                              fill: "none",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              vue.createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                            ])) : vue.createCommentVNode("", true),
                            vue.createVNode("div", null, vue.toDisplayString(team.name), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</form>`);
                });
                _push2(`<!--]--><!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                vue.createVNode("div", { class: "w-60" }, [
                  _ctx.$page.props.jetstream.hasTeamFeatures ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                    vue.createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, vue.toDisplayString(_ctx.__("Manage Team")), 1),
                    vue.createVNode(_component_JetDropdownLink, {
                      href: _ctx.route("teams.show", _ctx.$page.props.user.current_team)
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(_ctx.__("Team Settings")), 1)
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    _ctx.$page.props.jetstream.canCreateTeams ? (vue.openBlock(), vue.createBlock(_component_JetDropdownLink, {
                      key: 0,
                      href: _ctx.route("teams.create")
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(_ctx.__("Create New Team")), 1)
                      ]),
                      _: 1
                    }, 8, ["href"])) : vue.createCommentVNode("", true),
                    vue.createVNode("div", { class: "border-t border-gray-100" }),
                    vue.createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, vue.toDisplayString(_ctx.__("Switch Teams")), 1),
                    (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.$page.props.user.all_teams, (team) => {
                      return vue.openBlock(), vue.createBlock("form", {
                        key: team.id,
                        onSubmit: vue.withModifiers(($event) => switchToTeam(team), ["prevent"])
                      }, [
                        vue.createVNode(_component_JetDropdownLink, { has: "button" }, {
                          default: vue.withCtx(() => [
                            vue.createVNode("div", { class: "flex items-center" }, [
                              team.id == _ctx.$page.props.user.current_team_id ? (vue.openBlock(), vue.createBlock("svg", {
                                key: 0,
                                class: "w-5 h-5 mr-2 text-green-400",
                                fill: "none",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                vue.createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                              ])) : vue.createCommentVNode("", true),
                              vue.createVNode("div", null, vue.toDisplayString(team.name), 1)
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ], 40, ["onSubmit"]);
                    }), 128))
                  ], 64)) : vue.createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative ml-3">`);
      _push(serverRenderer.ssrRenderComponent(_component_JetDropdown, {
        align: "right",
        width: "48"
      }, {
        trigger: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$page.props.jetstream.managesProfilePhotos) {
              _push2(`<button class="flex text-sm transition border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"${_scopeId}><img class="object-cover w-8 h-8 rounded-full"${serverRenderer.ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${serverRenderer.ssrRenderAttr("alt", _ctx.$page.props.user.name)}${_scopeId}></button>`);
            } else {
              _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.$page.props.user.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
            }
          } else {
            return [
              _ctx.$page.props.jetstream.managesProfilePhotos ? (vue.openBlock(), vue.createBlock("button", {
                key: 0,
                class: "flex text-sm transition border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"
              }, [
                vue.createVNode("img", {
                  class: "object-cover w-8 h-8 rounded-full",
                  src: _ctx.$page.props.user.profile_photo_url,
                  alt: _ctx.$page.props.user.name
                }, null, 8, ["src", "alt"])
              ])) : (vue.openBlock(), vue.createBlock("span", {
                key: 1,
                class: "inline-flex rounded-md"
              }, [
                vue.createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
                }, [
                  vue.createTextVNode(vue.toDisplayString(_ctx.$page.props.user.name) + " ", 1),
                  (vue.openBlock(), vue.createBlock("svg", {
                    class: "ml-2 -mr-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    vue.createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ])
              ]))
            ];
          }
        }),
        content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Manage Account"))}</div>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetDropdownLink, {
              href: _ctx.route("profile.show")
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Profile"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Profile")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (_ctx.$page.props.jetstream.hasApiFeatures) {
              _push2(serverRenderer.ssrRenderComponent(_component_JetDropdownLink, {
                href: _ctx.route("api-tokens.index")
              }, {
                default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${serverRenderer.ssrInterpolate(_ctx.__("API Tokens"))}`);
                  } else {
                    return [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("API Tokens")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border-t border-gray-100"${_scopeId}></div><form${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetDropdownLink, { has: "button" }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Logout"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Logout")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              vue.createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, vue.toDisplayString(_ctx.__("Manage Account")), 1),
              vue.createVNode(_component_JetDropdownLink, {
                href: _ctx.route("profile.show")
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Profile")), 1)
                ]),
                _: 1
              }, 8, ["href"]),
              _ctx.$page.props.jetstream.hasApiFeatures ? (vue.openBlock(), vue.createBlock(_component_JetDropdownLink, {
                key: 0,
                href: _ctx.route("api-tokens.index")
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("API Tokens")), 1)
                ]),
                _: 1
              }, 8, ["href"])) : vue.createCommentVNode("", true),
              vue.createVNode("div", { class: "border-t border-gray-100" }),
              vue.createVNode("form", {
                onSubmit: vue.withModifiers(logout, ["prevent"])
              }, [
                vue.createVNode(_component_JetDropdownLink, { has: "button" }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Logout")), 1)
                  ]),
                  _: 1
                })
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex items-center -mr-2 sm:hidden"><button class="inline-flex items-center justify-center p-2 text-gray-400 transition rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"><svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${serverRenderer.ssrRenderClass({ hidden: showingNavigationDropdown.value, "inline-flex": !showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${serverRenderer.ssrRenderClass({ hidden: !showingNavigationDropdown.value, "inline-flex": showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${serverRenderer.ssrRenderClass([{ block: showingNavigationDropdown.value, hidden: !showingNavigationDropdown.value }, "sm:hidden"])}"><div class="px-4 pt-2 pb-3 space-y-1">`);
      _push(serverRenderer.ssrRenderComponent(_component_JetResponsiveNavLink, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Dashboard"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Dashboard")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="pt-4 pb-1 border-t border-gray-200"><div class="flex items-center px-4">`);
      if (_ctx.$page.props.jetstream.managesProfilePhotos) {
        _push(`<div class="mr-3 shrink-0"><img class="object-cover w-10 h-10 rounded-full"${serverRenderer.ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${serverRenderer.ssrRenderAttr("alt", _ctx.$page.props.user.name)}></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><div class="text-base font-medium text-gray-800">${serverRenderer.ssrInterpolate(_ctx.$page.props.user.name)}</div><div class="text-sm font-medium text-gray-500">${serverRenderer.ssrInterpolate(_ctx.$page.props.user.email)}</div></div></div><div class="px-4 mt-3 space-y-1">`);
      _push(serverRenderer.ssrRenderComponent(_component_JetResponsiveNavLink, {
        href: _ctx.route("profile.show"),
        active: _ctx.route().current("profile.show")
      }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Profile"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Profile")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.$page.props.jetstream.hasApiFeatures) {
        _push(serverRenderer.ssrRenderComponent(_component_JetResponsiveNavLink, {
          href: _ctx.route("api-tokens.index"),
          active: _ctx.route().current("api-tokens.index")
        }, {
          default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(_ctx.__("API Tokens"))}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(_ctx.__("API Tokens")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<form method="POST">`);
      _push(serverRenderer.ssrRenderComponent(_component_JetResponsiveNavLink, { has: "button" }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Logout"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Logout")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
      if (_ctx.$page.props.jetstream.hasTeamFeatures) {
        _push(`<!--[--><div class="border-t border-gray-200"></div><div class="block px-4 py-2 text-xs text-gray-400">${serverRenderer.ssrInterpolate(_ctx.__("Manage Teams"))}</div>`);
        _push(serverRenderer.ssrRenderComponent(_component_JetResponsiveNavLink, {
          href: _ctx.route("teams.show", _ctx.$page.props.user.current_team),
          active: _ctx.route().current("teams.show")
        }, {
          default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Team Settings"))}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(_ctx.__("Team Settings")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (_ctx.$page.props.jetstream.canCreateTeams) {
          _push(serverRenderer.ssrRenderComponent(_component_JetResponsiveNavLink, {
            href: _ctx.route("teams.create"),
            active: _ctx.route().current("teams.create")
          }, {
            default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Create New Team"))}`);
              } else {
                return [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Create New Team")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="border-t border-gray-200"></div><div class="block px-4 py-2 text-xs text-gray-400">${serverRenderer.ssrInterpolate(_ctx.__("Switch Teams"))}</div><!--[-->`);
        serverRenderer.ssrRenderList(_ctx.$page.props.user.all_teams, (team) => {
          _push(`<form>`);
          _push(serverRenderer.ssrRenderComponent(_component_JetResponsiveNavLink, { has: "button" }, {
            default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center"${_scopeId}>`);
                if (team.id == _ctx.$page.props.user.current_team_id) {
                  _push2(`<svg class="w-5 h-5 mr-2 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div${_scopeId}>${serverRenderer.ssrInterpolate(team.name)}</div></div>`);
              } else {
                return [
                  vue.createVNode("div", { class: "flex items-center" }, [
                    team.id == _ctx.$page.props.user.current_team_id ? (vue.openBlock(), vue.createBlock("svg", {
                      key: 0,
                      class: "w-5 h-5 mr-2 text-green-400",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      vue.createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                    ])) : vue.createCommentVNode("", true),
                    vue.createVNode("div", null, vue.toDisplayString(team.name), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</form>`);
        });
        _push(`<!--]--><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></nav>`);
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white shadow"><div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Layouts/MainLayout.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const _sfc_main$H = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_MainLayout = _sfc_main$I;
  const _component_JetWelcome = __unplugin_components_1$2;
  _push(serverRenderer.ssrRenderComponent(_component_MainLayout, vue.mergeProps({
    title: _ctx.__("Dashboard")
  }, _attrs), {
    header: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Dashboard"))}</h2>`);
      } else {
        return [
          vue.createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, vue.toDisplayString(_ctx.__("Dashboard")), 1)
        ];
      }
    }),
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-xl sm:rounded-lg"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_JetWelcome, null, null, _parent2, _scopeId));
        _push2(`</div></div></div>`);
      } else {
        return [
          vue.createVNode("div", { class: "py-12" }, [
            vue.createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
              vue.createVNode("div", { class: "overflow-hidden bg-white shadow-xl sm:rounded-lg" }, [
                vue.createVNode(_component_JetWelcome)
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
var Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$6]]);
var __glob_7_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Dashboard
});
const _sfc_main$G = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_Link = vue.resolveComponent("Link");
  _push(serverRenderer.ssrRenderComponent(_component_Link, vue.mergeProps({
    href: _ctx.route("home")
  }, _attrs), {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-16 h-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z" fill="#6875F5"${_scopeId}></path><path d="M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z" fill="#6875F5"${_scopeId}></path></svg>`);
      } else {
        return [
          (vue.openBlock(), vue.createBlock("svg", {
            class: "w-16 h-16",
            viewBox: "0 0 48 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            vue.createVNode("path", {
              d: "M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",
              fill: "#6875F5"
            }),
            vue.createVNode("path", {
              d: "M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",
              fill: "#6875F5"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetAuthenticationCardLogo.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$F = {
  __ssrInlineRender: true,
  props: ["policy"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = vue.resolveComponent("Head");
      const _component_JetAuthenticationCard_logo = __unplugin_components_1;
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_Head, {
        title: _ctx.__("Privacy Policy")
      }, null, _parent));
      _push(`<div class="font-sans antialiased text-gray-900"><div class="pt-4 bg-gray-100"><div class="flex flex-col items-center min-h-screen pt-6 sm:pt-0"><div>`);
      _push(serverRenderer.ssrRenderComponent(_component_JetAuthenticationCard_logo, null, null, _parent));
      _push(`</div><div class="w-full p-6 mt-6 overflow-hidden prose bg-white shadow-md sm:max-w-2xl sm:rounded-lg">${props.policy}</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Pages/PrivacyPolicy.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
var __glob_7_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$F
});
const _sfc_main$E = {
  __ssrInlineRender: true,
  props: ["terms"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = vue.resolveComponent("Head");
      const _component_JetAuthenticationCard_logo = __unplugin_components_1;
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_Head, {
        title: _ctx.__("Terms of Service")
      }, null, _parent));
      _push(`<div class="font-sans antialiased text-gray-900"><div class="pt-4 bg-gray-100"><div class="flex flex-col items-center min-h-screen pt-6 sm:pt-0"><div>`);
      _push(serverRenderer.ssrRenderComponent(_component_JetAuthenticationCard_logo, null, null, _parent));
      _push(`</div><div class="w-full p-6 mt-6 overflow-hidden prose bg-white shadow-md sm:max-w-2xl sm:rounded-lg">${props.terms}</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Pages/TermsOfService.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var __glob_7_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$E
});
var Welcome_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$D = {
  __ssrInlineRender: true,
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String
  },
  setup(__props) {
    const props = __props;
    const { canLogin, canRegister, laravelVersion, phpVersion } = vue.toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = vue.resolveComponent("Head");
      const _component_Link = vue.resolveComponent("Link");
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_Head, { title: "Welcome" }, null, _parent));
      _push(`<div class="relative flex justify-center min-h-screen bg-gray-100 items-top dark:bg-gray-900 sm:items-center sm:pt-0" data-v-2568569a>`);
      if (vue.unref(canLogin)) {
        _push(`<div class="fixed top-0 right-0 hidden px-6 py-4 sm:block" data-v-2568569a>`);
        if (_ctx.$page.props.user) {
          _push(serverRenderer.ssrRenderComponent(_component_Link, {
            href: _ctx.route("dashboard"),
            class: "text-sm text-gray-700 underline"
          }, {
            default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Dashboard `);
              } else {
                return [
                  vue.createTextVNode(" Dashboard ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!--[-->`);
          _push(serverRenderer.ssrRenderComponent(_component_Link, {
            href: _ctx.route("login"),
            class: "text-sm text-gray-700 underline"
          }, {
            default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Log in `);
              } else {
                return [
                  vue.createTextVNode(" Log in ")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (vue.unref(canRegister)) {
            _push(serverRenderer.ssrRenderComponent(_component_Link, {
              href: _ctx.route("register"),
              class: "ml-4 text-sm text-gray-700 underline"
            }, {
              default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Register `);
                } else {
                  return [
                    vue.createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="max-w-6xl mx-auto sm:px-6 lg:px-8" data-v-2568569a><div class="flex justify-center pt-8 sm:justify-start sm:pt-0" data-v-2568569a><svg viewBox="0 0 651 192" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-auto h-16 text-gray-700 sm:h-20" data-v-2568569a><g clip-path="url(#clip0)" fill="#EF3B2D" data-v-2568569a><path d="M248.032 44.676h-16.466v100.23h47.394v-14.748h-30.928V44.676zM337.091 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.431 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162-.001 2.863-.479 5.584-1.432 8.161zM463.954 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.432 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162 0 2.863-.479 5.584-1.432 8.161zM650.772 44.676h-15.606v100.23h15.606V44.676zM365.013 144.906h15.607V93.538h26.776V78.182h-42.383v66.724zM542.133 78.182l-19.616 51.096-19.616-51.096h-15.808l25.617 66.724h19.614l25.617-66.724h-15.808zM591.98 76.466c-19.112 0-34.239 15.706-34.239 35.079 0 21.416 14.641 35.079 36.239 35.079 12.088 0 19.806-4.622 29.234-14.688l-10.544-8.158c-.006.008-7.958 10.449-19.832 10.449-13.802 0-19.612-11.127-19.612-16.884h51.777c2.72-22.043-11.772-40.877-33.023-40.877zm-18.713 29.28c.12-1.284 1.917-16.884 18.589-16.884 16.671 0 18.697 15.598 18.813 16.884h-37.402zM184.068 43.892c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002-35.648-20.524a2.971 2.971 0 00-2.964 0l-35.647 20.522-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v38.979l-29.706 17.103V24.493a3 3 0 00-.103-.776c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002L40.098 1.396a2.971 2.971 0 00-2.964 0L1.487 21.919l-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v122.09c0 1.063.568 2.044 1.489 2.575l71.293 41.045c.156.089.324.143.49.202.078.028.15.074.23.095a2.98 2.98 0 001.524 0c.069-.018.132-.059.2-.083.176-.061.354-.119.519-.214l71.293-41.045a2.971 2.971 0 001.489-2.575v-38.979l34.158-19.666a2.971 2.971 0 001.489-2.575V44.666a3.075 3.075 0 00-.106-.774zM74.255 143.167l-29.648-16.779 31.136-17.926.001-.001 34.164-19.669 29.674 17.084-21.772 12.428-43.555 24.863zm68.329-76.259v33.841l-12.475-7.182-17.231-9.92V49.806l12.475 7.182 17.231 9.92zm2.97-39.335l29.693 17.095-29.693 17.095-29.693-17.095 29.693-17.095zM54.06 114.089l-12.475 7.182V46.733l17.231-9.92 12.475-7.182v74.537l-17.231 9.921zM38.614 7.398l29.693 17.095-29.693 17.095L8.921 24.493 38.614 7.398zM5.938 29.632l12.475 7.182 17.231 9.92v79.676l.001.005-.001.006c0 .114.032.221.045.333.017.146.021.294.059.434l.002.007c.032.117.094.222.14.334.051.124.088.255.156.371a.036.036 0 00.004.009c.061.105.149.191.222.288.081.105.149.22.244.314l.008.01c.084.083.19.142.284.215.106.083.202.178.32.247l.013.005.011.008 34.139 19.321v34.175L5.939 144.867V29.632h-.001zm136.646 115.235l-65.352 37.625V148.31l48.399-27.628 16.953-9.677v33.862zm35.646-61.22l-29.706 17.102V66.908l17.231-9.92 12.475-7.182v33.841z" data-v-2568569a></path></g></svg></div><div class="mt-8 overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-lg" data-v-2568569a><div class="grid grid-cols-1 md:grid-cols-2" data-v-2568569a><div class="p-6" data-v-2568569a><div class="flex items-center" data-v-2568569a><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500" data-v-2568569a><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" data-v-2568569a></path></svg><div class="ml-4 text-lg font-semibold leading-7" data-v-2568569a><a href="https://laravel.com/docs" class="text-gray-900 underline dark:text-white" data-v-2568569a>${serverRenderer.ssrInterpolate(_ctx.__("Documentation"))}</a></div></div><div class="ml-12" data-v-2568569a><div class="mt-2 text-sm text-gray-600 dark:text-gray-400" data-v-2568569a>${serverRenderer.ssrInterpolate(_ctx.__("Laravel has wonderful, thorough documentation covering every aspect of the framework. Whether you are new to the framework or have previous experience with Laravel, we recommend reading all of the documentation from beginning to end."))}</div></div></div><div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l" data-v-2568569a><div class="flex items-center" data-v-2568569a><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500" data-v-2568569a><path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" data-v-2568569a></path><path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" data-v-2568569a></path></svg><div class="ml-4 text-lg font-semibold leading-7" data-v-2568569a><a href="https://laracasts.com" class="text-gray-900 underline dark:text-white" data-v-2568569a>${serverRenderer.ssrInterpolate(_ctx.__("Laracasts"))}</a></div></div><div class="ml-12" data-v-2568569a><div class="mt-2 text-sm text-gray-600 dark:text-gray-400" data-v-2568569a>${serverRenderer.ssrInterpolate(_ctx.__("Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process."))}</div></div></div><div class="p-6 border-t border-gray-200 dark:border-gray-700" data-v-2568569a><div class="flex items-center" data-v-2568569a><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500" data-v-2568569a><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" data-v-2568569a></path></svg><div class="ml-4 text-lg font-semibold leading-7" data-v-2568569a><a href="https://laravel-news.com/" class="text-gray-900 underline dark:text-white" data-v-2568569a>${serverRenderer.ssrInterpolate(_ctx.__("Laravel News"))}</a></div></div><div class="ml-12" data-v-2568569a><div class="mt-2 text-sm text-gray-600 dark:text-gray-400" data-v-2568569a>${serverRenderer.ssrInterpolate(_ctx.__("Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials."))}</div></div></div><div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l" data-v-2568569a><div class="flex items-center" data-v-2568569a><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500" data-v-2568569a><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-2568569a></path></svg><div class="ml-4 text-lg font-semibold leading-7 text-gray-900 dark:text-white" data-v-2568569a>${serverRenderer.ssrInterpolate(_ctx.__("Vibrant Ecosystem"))}</div></div><div class="ml-12" data-v-2568569a><div class="mt-2 text-sm text-gray-600 dark:text-gray-400" data-v-2568569a>${serverRenderer.ssrInterpolate(_ctx.__("Laravel's robust library of first-party tools and libraries, such as"))} <a href="https://forge.laravel.com" class="underline" data-v-2568569a>Forge</a>, <a href="https://vapor.laravel.com" class="underline" data-v-2568569a>Vapor</a>, <a href="https://nova.laravel.com" class="underline" data-v-2568569a>Nova</a>, and <a href="https://envoyer.io" class="underline" data-v-2568569a>Envoyer</a> ${serverRenderer.ssrInterpolate(_ctx.__("help you take your projects to the next level. Pair them with powerful open source libraries like"))} <a href="https://laravel.com/docs/billing" class="underline" data-v-2568569a>Cashier</a>, <a href="https://laravel.com/docs/dusk" class="underline" data-v-2568569a>Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="underline" data-v-2568569a>Echo</a>, <a href="https://laravel.com/docs/horizon" class="underline" data-v-2568569a>Horizon</a>, <a href="https://laravel.com/docs/sanctum" class="underline" data-v-2568569a>Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="underline" data-v-2568569a>Telescope</a> ${serverRenderer.ssrInterpolate(_ctx.__(", and more."))}</div></div></div></div></div><div class="flex justify-center mt-4 sm:items-center sm:justify-between" data-v-2568569a><div class="text-sm text-center text-gray-500 sm:text-left" data-v-2568569a><div class="flex items-center" data-v-2568569a><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 -mt-px text-gray-400" data-v-2568569a><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" data-v-2568569a></path></svg><a href="https://laravel.bigcartel.com" class="ml-1 underline" data-v-2568569a> Shop </a><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-5 h-5 ml-4 -mt-px text-gray-400" data-v-2568569a><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-2568569a></path></svg><a href="https://github.com/sponsors/taylorotwell" class="ml-1 underline" data-v-2568569a> Sponsor </a></div></div><div class="ml-4 text-sm text-center text-gray-500 sm:text-right sm:ml-0" data-v-2568569a> Laravel v${serverRenderer.ssrInterpolate(vue.unref(laravelVersion))} (PHP v${serverRenderer.ssrInterpolate(vue.unref(phpVersion))}) </div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
var Welcome = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-2568569a"]]);
var __glob_7_3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Welcome
});
const _sfc_main$C = {
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        type: props.type,
        class: "inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition bg-red-600 border border-transparent rounded-md hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 active:bg-red-600 disabled:opacity-25"
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetDangerButton.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const _sfc_main$B = {
  __ssrInlineRender: true,
  props: {
    show: {
      default: false
    },
    maxWidth: {
      default: "2xl"
    },
    closeable: {
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e2) => {
      if (e2.key === "Escape" && props.show) {
        close();
      }
    };
    const maxWidthClass = vue.computed(() => {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl"
      }[props.maxWidth];
    });
    vue.onMounted(() => document.addEventListener("keydown", closeOnEscape));
    vue.onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = null;
    });
    const { show } = vue.toRefs(props);
    vue.watch(show, (value) => {
      if (value) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          style: vue.unref(show) ? null : { display: "none" },
          class: "fixed inset-0 z-50 px-4 py-6 overflow-y-auto sm:px-0",
          "scroll-region": ""
        }, _attrs))}><div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          style: vue.unref(show) ? null : { display: "none" },
          class: "fixed inset-0 transition-all transform"
        }, _attrs))}><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          style: vue.unref(show) ? null : { display: "none" },
          class: ["mb-6 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl sm:w-full sm:mx-auto", vue.unref(maxWidthClass)]
        }, _attrs))}>`);
        if (vue.unref(show)) {
          serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetModal.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const _sfc_main$A = {
  __ssrInlineRender: true,
  props: {
    show: {
      default: false
    },
    maxWidth: {
      default: "2xl"
    },
    closeable: {
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const { show, maxWidth, closeable } = vue.toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JetModal = _sfc_main$B;
      _push(serverRenderer.ssrRenderComponent(_component_JetModal, vue.mergeProps({
        show: vue.unref(show),
        "max-width": vue.unref(maxWidth),
        closeable: vue.unref(closeable)
      }, _attrs), {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4"${_scopeId}><div class="sm:flex sm:items-start"${_scopeId}><div class="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full shrink-0 sm:mx-0 sm:h-10 sm:w-10"${_scopeId}><svg class="w-6 h-6 text-red-600" stroke="currentColor" fill="none" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"${_scopeId}></path></svg></div><div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"${_scopeId}><h3 class="text-lg"${_scopeId}>`);
            serverRenderer.ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
            _push2(`</h3><div class="mt-2"${_scopeId}>`);
            serverRenderer.ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div></div></div><div class="px-6 py-4 text-right bg-gray-100"${_scopeId}>`);
            serverRenderer.ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4" }, [
                vue.createVNode("div", { class: "sm:flex sm:items-start" }, [
                  vue.createVNode("div", { class: "flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full shrink-0 sm:mx-0 sm:h-10 sm:w-10" }, [
                    (vue.openBlock(), vue.createBlock("svg", {
                      class: "w-6 h-6 text-red-600",
                      stroke: "currentColor",
                      fill: "none",
                      viewBox: "0 0 24 24"
                    }, [
                      vue.createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      })
                    ]))
                  ]),
                  vue.createVNode("div", { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" }, [
                    vue.createVNode("h3", { class: "text-lg" }, [
                      vue.renderSlot(_ctx.$slots, "title")
                    ]),
                    vue.createVNode("div", { class: "mt-2" }, [
                      vue.renderSlot(_ctx.$slots, "content")
                    ])
                  ])
                ])
              ]),
              vue.createVNode("div", { class: "px-6 py-4 text-right bg-gray-100" }, [
                vue.renderSlot(_ctx.$slots, "footer")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetConfirmationModal.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const _sfc_main$z = {
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const { type } = vue.toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        type: vue.unref(type),
        class: "inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-gray-700 uppercase transition bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25"
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetSecondaryButton.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const _sfc_main$y = {
  __ssrInlineRender: true,
  props: {
    show: {
      default: false
    },
    maxWidth: {
      default: "2xl"
    },
    closeable: {
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const { show, maxWidth, closeable } = vue.toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JetModal = _sfc_main$B;
      _push(serverRenderer.ssrRenderComponent(_component_JetModal, vue.mergeProps({
        show: vue.unref(show),
        "max-width": vue.unref(maxWidth),
        closeable: vue.unref(closeable)
      }, _attrs), {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-6 py-4"${_scopeId}><div class="text-lg"${_scopeId}>`);
            serverRenderer.ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            serverRenderer.ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div><div class="px-6 py-4 text-right bg-gray-100"${_scopeId}>`);
            serverRenderer.ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "px-6 py-4" }, [
                vue.createVNode("div", { class: "text-lg" }, [
                  vue.renderSlot(_ctx.$slots, "title")
                ]),
                vue.createVNode("div", { class: "mt-4" }, [
                  vue.renderSlot(_ctx.$slots, "content")
                ])
              ]),
              vue.createVNode("div", { class: "px-6 py-4 text-right bg-gray-100" }, [
                vue.renderSlot(_ctx.$slots, "footer")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetDialogModal.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const _sfc_main$x = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "flex justify-between md:col-span-1" }, _attrs))}><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900">`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`</h3><p class="mt-1 text-sm text-gray-600">`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
  _push(`</p></div><div class="px-4 sm:px-0">`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "aside", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetSectionTitle.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$w = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_JetSectionTitle = __unplugin_components_0$1;
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "md:grid md:grid-cols-3 md:gap-6" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_JetSectionTitle, null, {
    title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        serverRenderer.ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          vue.renderSlot(_ctx.$slots, "title")
        ];
      }
    }),
    description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        serverRenderer.ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          vue.renderSlot(_ctx.$slots, "description")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<div class="mt-5 md:mt-0 md:col-span-2"><div class="px-4 py-5 bg-white shadow sm:p-6 sm:rounded-lg">`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetActionSection.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$v = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "hidden sm:block" }, _attrs))}><div class="py-8"><div class="border-t border-gray-200"></div></div></div>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetSectionBorder.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$u = {
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "submit"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        type: props.type,
        class: "inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25"
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetButton.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = {
  __ssrInlineRender: true,
  props: ["on"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        style: props.on ? null : { display: "none" },
        class: "text-sm text-gray-600"
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetActionMessage.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = {
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      default: false
    },
    value: {
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit }) {
    const props = __props;
    const proxyChecked = vue.computed({
      get: () => {
        return props.checked;
      },
      set: (val) => {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${serverRenderer.ssrRenderAttrs((_temp0 = vue.mergeProps({
        type: "checkbox",
        value: props.value,
        checked: Array.isArray(vue.unref(proxyChecked)) ? serverRenderer.ssrLooseContain(vue.unref(proxyChecked), props.value) : vue.unref(proxyChecked),
        class: "text-indigo-600 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      }, _attrs), vue.mergeProps(_temp0, serverRenderer.ssrGetDynamicModelProps(_temp0, vue.unref(proxyChecked)))))}>`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetCheckbox.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = {
  __ssrInlineRender: true,
  props: ["message"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        style: props.message ? null : { display: "none" }
      }, _attrs))}><p class="text-sm text-red-600">${serverRenderer.ssrInterpolate(props.message)}</p></div>`);
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetInputError.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = {
  __ssrInlineRender: true,
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const input = vue.ref();
    expose({ input });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
        value: props.modelValue,
        ref_key: "input",
        ref: input
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetInput.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = {
  __ssrInlineRender: true,
  props: ["value"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "block text-sm font-medium text-gray-700" }, _attrs))}>`);
      if (props.value) {
        _push(`<span>${serverRenderer.ssrInterpolate(props.value)}</span>`);
      } else {
        _push(`<span>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetLabel.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = {
  __ssrInlineRender: true,
  emits: ["submitted"],
  setup(__props, { emit }) {
    const slots = vue.useSlots();
    const hasActions = vue.computed(() => {
      return !!slots.actions;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JetSectionTitle = __unplugin_components_0$1;
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "md:grid md:grid-cols-3 md:gap-6" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_component_JetSectionTitle, null, {
        title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "title")
            ];
          }
        }),
        description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "description")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div class="mt-5 md:mt-0 md:col-span-2"><form><div class="${serverRenderer.ssrRenderClass([vue.unref(hasActions) ? "sm:rounded-tl-md sm:rounded-tr-md" : "sm:rounded-md", "px-4 py-5 bg-white shadow sm:p-6"])}"><div class="grid grid-cols-6 gap-6">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "form", {}, null, _push, _parent);
      _push(`</div></div>`);
      if (vue.unref(hasActions)) {
        _push(`<div class="flex items-center justify-end px-4 py-3 text-right shadow bg-gray-50 sm:px-6 sm:rounded-bl-md sm:rounded-br-md">`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetFormSection.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = {
  __ssrInlineRender: true,
  props: ["tokens", "availablePermissions", "defaultPermissions"],
  setup(__props) {
    const props = __props;
    const displayingToken = vue.ref(false);
    const managingPermissionsFor = vue.ref(null);
    const apiTokenBeingDeleted = vue.ref(null);
    const { tokens, availablePermissions } = vue.toRefs(props);
    const createApiTokenForm = inertiaVue3.useForm({
      name: "",
      permissions: props.defaultPermissions
    });
    const updateApiTokenForm = inertiaVue3.useForm({
      permissions: []
    });
    const deleteApiTokenForm = inertiaVue3.useForm();
    const manageApiTokenPermissions = (token) => {
      updateApiTokenForm.permissions = token.abilities;
      managingPermissionsFor.value = token;
    };
    const updateApiToken = () => {
      updateApiTokenForm.put(useRoutes("api-tokens.update", { token: managingPermissionsFor.value.id }), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => managingPermissionsFor.value = null
      });
    };
    const confirmApiTokenDeletion = (token) => {
      apiTokenBeingDeleted.value = token;
    };
    const deleteApiToken = () => {
      deleteApiTokenForm.delete(useRoutes("api-tokens.destroy", { token: apiTokenBeingDeleted.value.id }), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => apiTokenBeingDeleted.value = null
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JetFormSection = _sfc_main$o;
      const _component_JetLabel = _sfc_main$p;
      const _component_JetInput = _sfc_main$q;
      const _component_JetInput_error = _sfc_main$r;
      const _component_JetCheckbox = _sfc_main$s;
      const _component_JetActionMessage = _sfc_main$t;
      const _component_JetButton = _sfc_main$u;
      const _component_JetSectionBorder = __unplugin_components_3;
      const _component_JetActionSection = __unplugin_components_7;
      const _component_JetDialogModal = _sfc_main$y;
      const _component_JetSecondaryButton = _sfc_main$z;
      const _component_JetConfirmationModal = _sfc_main$A;
      const _component_JetDangerButton = _sfc_main$C;
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.ssrRenderComponent(_component_JetFormSection, null, {
        title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Create API Token"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Create API Token")), 1)
            ];
          }
        }),
        description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("API tokens allow third-party services to authenticate with our application on your behalf."))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("API tokens allow third-party services to authenticate with our application on your behalf.")), 1)
            ];
          }
        }),
        form: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "name",
              value: _ctx.__("Name")
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "name",
              type: "text",
              class: "block w-full mt-1",
              modelValue: vue.unref(createApiTokenForm).name,
              "onUpdate:modelValue": ($event) => vue.unref(createApiTokenForm).name = $event,
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput_error, {
              message: vue.unref(createApiTokenForm).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (vue.unref(availablePermissions).length > 0) {
              _push2(`<div class="col-span-6"${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
                for: "permissions",
                value: _ctx.__("Permissions")
              }, null, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-1 gap-4 mt-2 md:grid-cols-2"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(availablePermissions), (permission) => {
                _push2(`<div${_scopeId}><label class="flex items-center"${_scopeId}>`);
                _push2(serverRenderer.ssrRenderComponent(_component_JetCheckbox, {
                  value: permission,
                  checked: vue.unref(createApiTokenForm).permissions,
                  "onUpdate:checked": ($event) => vue.unref(createApiTokenForm).permissions = $event
                }, null, _parent2, _scopeId));
                _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(permission)}</span></label></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                vue.createVNode(_component_JetLabel, {
                  for: "name",
                  value: _ctx.__("Name")
                }, null, 8, ["value"]),
                vue.createVNode(_component_JetInput, {
                  id: "name",
                  type: "text",
                  class: "block w-full mt-1",
                  modelValue: vue.unref(createApiTokenForm).name,
                  "onUpdate:modelValue": ($event) => vue.unref(createApiTokenForm).name = $event,
                  autofocus: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                vue.createVNode(_component_JetInput_error, {
                  message: vue.unref(createApiTokenForm).errors.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              vue.unref(availablePermissions).length > 0 ? (vue.openBlock(), vue.createBlock("div", {
                key: 0,
                class: "col-span-6"
              }, [
                vue.createVNode(_component_JetLabel, {
                  for: "permissions",
                  value: _ctx.__("Permissions")
                }, null, 8, ["value"]),
                vue.createVNode("div", { class: "grid grid-cols-1 gap-4 mt-2 md:grid-cols-2" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(availablePermissions), (permission) => {
                    return vue.openBlock(), vue.createBlock("div", { key: permission }, [
                      vue.createVNode("label", { class: "flex items-center" }, [
                        vue.createVNode(_component_JetCheckbox, {
                          value: permission,
                          checked: vue.unref(createApiTokenForm).permissions,
                          "onUpdate:checked": ($event) => vue.unref(createApiTokenForm).permissions = $event
                        }, null, 8, ["value", "checked", "onUpdate:checked"]),
                        vue.createVNode("span", { class: "ml-2 text-sm text-gray-600" }, vue.toDisplayString(permission), 1)
                      ])
                    ]);
                  }), 128))
                ])
              ])) : vue.createCommentVNode("", true)
            ];
          }
        }),
        actions: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetActionMessage, {
              on: vue.unref(createApiTokenForm).recentlySuccessful,
              class: "mr-3"
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Created."))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Created.")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
              class: { "opacity-25": vue.unref(createApiTokenForm).processing },
              disabled: vue.unref(createApiTokenForm).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Create"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Create")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetActionMessage, {
                on: vue.unref(createApiTokenForm).recentlySuccessful,
                class: "mr-3"
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Created.")), 1)
                ]),
                _: 1
              }, 8, ["on"]),
              vue.createVNode(_component_JetButton, {
                class: { "opacity-25": vue.unref(createApiTokenForm).processing },
                disabled: vue.unref(createApiTokenForm).processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Create")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (vue.unref(tokens).length > 0) {
        _push(`<div>`);
        _push(serverRenderer.ssrRenderComponent(_component_JetSectionBorder, null, null, _parent));
        _push(`<div class="mt-10 sm:mt-0">`);
        _push(serverRenderer.ssrRenderComponent(_component_JetActionSection, null, {
          title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Manage API Tokens"))}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(_ctx.__("Manage API Tokens")), 1)
              ];
            }
          }),
          description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(_ctx.__("You may delete any of your existing tokens if they are no longer needed."))}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(_ctx.__("You may delete any of your existing tokens if they are no longer needed.")), 1)
              ];
            }
          }),
          content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(tokens), (token) => {
                _push2(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}>${serverRenderer.ssrInterpolate(token.name)}</div><div class="flex items-center"${_scopeId}>`);
                if (token.last_used_ago) {
                  _push2(`<div class="text-sm text-gray-400"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Last used"))} ${serverRenderer.ssrInterpolate(token.last_used_ago)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (vue.unref(availablePermissions).length > 0) {
                  _push2(`<button class="ml-6 text-sm text-gray-400 underline cursor-pointer"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Permissions"))}</button>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<button class="ml-6 text-sm text-red-500 cursor-pointer"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Delete"))}</button></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "space-y-6" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(tokens), (token) => {
                    return vue.openBlock(), vue.createBlock("div", {
                      class: "flex items-center justify-between",
                      key: token.id
                    }, [
                      vue.createVNode("div", null, vue.toDisplayString(token.name), 1),
                      vue.createVNode("div", { class: "flex items-center" }, [
                        token.last_used_ago ? (vue.openBlock(), vue.createBlock("div", {
                          key: 0,
                          class: "text-sm text-gray-400"
                        }, vue.toDisplayString(_ctx.__("Last used")) + " " + vue.toDisplayString(token.last_used_ago), 1)) : vue.createCommentVNode("", true),
                        vue.unref(availablePermissions).length > 0 ? (vue.openBlock(), vue.createBlock("button", {
                          key: 1,
                          class: "ml-6 text-sm text-gray-400 underline cursor-pointer",
                          onClick: ($event) => manageApiTokenPermissions(token)
                        }, vue.toDisplayString(_ctx.__("Permissions")), 9, ["onClick"])) : vue.createCommentVNode("", true),
                        vue.createVNode("button", {
                          class: "ml-6 text-sm text-red-500 cursor-pointer",
                          onClick: ($event) => confirmApiTokenDeletion(token)
                        }, vue.toDisplayString(_ctx.__("Delete")), 9, ["onClick"])
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_JetDialogModal, { show: displayingToken.value }, {
        title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("API Token"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("API Token")), 1)
            ];
          }
        }),
        content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Please copy your new API token. For your security, it won't be shown again."))}</div>`);
            if (_ctx.$page.props.jetstream.flash.token) {
              _push2(`<div class="px-4 py-2 mt-4 font-mono text-sm text-gray-500 bg-gray-100 rounded"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.$page.props.jetstream.flash.token)}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.createVNode("div", null, vue.toDisplayString(_ctx.__("Please copy your new API token. For your security, it won't be shown again.")), 1),
              _ctx.$page.props.jetstream.flash.token ? (vue.openBlock(), vue.createBlock("div", {
                key: 0,
                class: "px-4 py-2 mt-4 font-mono text-sm text-gray-500 bg-gray-100 rounded"
              }, vue.toDisplayString(_ctx.$page.props.jetstream.flash.token), 1)) : vue.createCommentVNode("", true)
            ];
          }
        }),
        footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, null, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Close"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Close")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetSecondaryButton, {
                onClick: ($event) => displayingToken.value = false
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Close")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_JetDialogModal, { show: managingPermissionsFor.value }, {
        title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("API Token Permissions"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("API Token Permissions")), 1)
            ];
          }
        }),
        content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 gap-4 md:grid-cols-2"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(availablePermissions), (permission) => {
              _push2(`<div${_scopeId}><label class="flex items-center"${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_JetCheckbox, {
                value: permission,
                checked: vue.unref(updateApiTokenForm).permissions,
                "onUpdate:checked": ($event) => vue.unref(updateApiTokenForm).permissions = $event
              }, null, _parent2, _scopeId));
              _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(permission)}</span></label></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(availablePermissions), (permission) => {
                  return vue.openBlock(), vue.createBlock("div", { key: permission }, [
                    vue.createVNode("label", { class: "flex items-center" }, [
                      vue.createVNode(_component_JetCheckbox, {
                        value: permission,
                        checked: vue.unref(updateApiTokenForm).permissions,
                        "onUpdate:checked": ($event) => vue.unref(updateApiTokenForm).permissions = $event
                      }, null, 8, ["value", "checked", "onUpdate:checked"]),
                      vue.createVNode("span", { class: "ml-2 text-sm text-gray-600" }, vue.toDisplayString(permission), 1)
                    ])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, null, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Cancel"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
              class: ["ml-2", { "opacity-25": vue.unref(updateApiTokenForm).processing }],
              disabled: vue.unref(updateApiTokenForm).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Save"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Save")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetSecondaryButton, {
                onClick: ($event) => managingPermissionsFor.value = null
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              vue.createVNode(_component_JetButton, {
                class: ["ml-2", { "opacity-25": vue.unref(updateApiTokenForm).processing }],
                onClick: updateApiToken,
                disabled: vue.unref(updateApiTokenForm).processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Save")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_JetConfirmationModal, { show: apiTokenBeingDeleted.value }, {
        title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Delete API Token"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete API Token")), 1)
            ];
          }
        }),
        content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Are you sure you would like to delete this API token?"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Are you sure you would like to delete this API token?")), 1)
            ];
          }
        }),
        footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, null, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Cancel"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetDangerButton, {
              class: ["ml-2", { "opacity-25": vue.unref(deleteApiTokenForm).processing }],
              disabled: vue.unref(deleteApiTokenForm).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Delete"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetSecondaryButton, {
                onClick: ($event) => apiTokenBeingDeleted.value = null
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              vue.createVNode(_component_JetDangerButton, {
                class: ["ml-2", { "opacity-25": vue.unref(deleteApiTokenForm).processing }],
                onClick: deleteApiToken,
                disabled: vue.unref(deleteApiTokenForm).processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Partials/Api/ApiTokenManager.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = {
  __ssrInlineRender: true,
  props: [
    "tokens",
    "availablePermissions",
    "defaultPermissions"
  ],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainLayout = _sfc_main$I;
      const _component_ApiTokenManager = _sfc_main$n;
      _push(serverRenderer.ssrRenderComponent(_component_MainLayout, vue.mergeProps({
        title: _ctx.__("API Tokens")
      }, _attrs), {
        header: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("API Tokens"))}</h2>`);
          } else {
            return [
              vue.createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, vue.toDisplayString(_ctx.__("API Tokens")), 1)
            ];
          }
        }),
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ApiTokenManager, {
              tokens: props.tokens,
              "available-permissions": props.availablePermissions,
              "default-permissions": props.defaultPermissions
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              vue.createVNode("div", null, [
                vue.createVNode("div", { class: "py-10 mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  vue.createVNode(_component_ApiTokenManager, {
                    tokens: props.tokens,
                    "available-permissions": props.availablePermissions,
                    "default-permissions": props.defaultPermissions
                  }, null, 8, ["tokens", "available-permissions", "default-permissions"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Pages/API/Index.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var __glob_7_4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$m
});
const _sfc_main$l = {
  __ssrInlineRender: true,
  setup(__props) {
    const errors = vue.computed(() => {
      return inertiaVue3.usePage().props.value.errors;
    });
    const hasErrors = vue.computed(() => {
      return Object.keys(errors.value).length > 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(hasErrors)) {
        _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><div class="font-medium text-red-600">${serverRenderer.ssrInterpolate(_ctx.__("Whoops! Something went wrong."))}</div><ul class="mt-3 text-sm text-red-600 list-disc list-inside"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(errors), (error, key) => {
          _push(`<li>${serverRenderer.ssrInterpolate(error)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetValidationErrors.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0" }, _attrs))}><div>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "logo", {}, null, _push, _parent);
  _push(`</div><div class="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetAuthenticationCard.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$j = {
  __ssrInlineRender: true,
  setup(__props) {
    const form = inertiaVue3.useForm({
      password: ""
    });
    const submit = () => {
      form.post(useRoutes("password.confirm"), {
        onStart: () => form.clearErrors(),
        onSuccess: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = vue.resolveComponent("Head");
      const _component_JetAuthenticationCard = __unplugin_components_0;
      const _component_JetAuthenticationCard_logo = __unplugin_components_1;
      const _component_JetValidationErrors = _sfc_main$l;
      const _component_JetLabel = _sfc_main$p;
      const _component_JetInput = _sfc_main$q;
      const _component_JetButton = _sfc_main$u;
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_Head, {
        title: _ctx.__("Secure Area")
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_JetAuthenticationCard, null, {
        logo: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetAuthenticationCard_logo, null, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetAuthenticationCard_logo)
            ];
          }
        }),
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("This is a secure area of the application. Please confirm your password before continuing."))}</div>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetValidationErrors, { class: "mb-4" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "password",
              type: "password",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).password,
              "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
              required: "",
              autocomplete: "current-password",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
              class: ["ml-4", { "opacity-25": vue.unref(form).processing }],
              disabled: vue.unref(form).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Confirm"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Confirm")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              vue.createVNode("div", { class: "mb-4 text-sm text-gray-600" }, vue.toDisplayString(_ctx.__("This is a secure area of the application. Please confirm your password before continuing.")), 1),
              vue.createVNode(_component_JetValidationErrors, { class: "mb-4" }),
              vue.createVNode("form", {
                onSubmit: vue.withModifiers(submit, ["prevent"])
              }, [
                vue.createVNode("div", null, [
                  vue.createVNode(_component_JetLabel, {
                    for: "password",
                    value: "Password"
                  }),
                  vue.createVNode(_component_JetInput, {
                    id: "password",
                    type: "password",
                    class: "block w-full mt-1",
                    modelValue: vue.unref(form).password,
                    "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "flex justify-end mt-4" }, [
                  vue.createVNode(_component_JetButton, {
                    class: ["ml-4", { "opacity-25": vue.unref(form).processing }],
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Confirm")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var __glob_7_5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$j
});
const _sfc_main$i = {
  __ssrInlineRender: true,
  props: {
    status: String
  },
  setup(__props) {
    const props = __props;
    const form = inertiaVue3.useForm({
      email: ""
    });
    const submit = () => {
      form.post(useRoutes("password.email"), {
        onStart: () => form.clearErrors(),
        onSuccess: () => form.reset("email")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = vue.resolveComponent("Head");
      const _component_JetAuthenticationCard = __unplugin_components_0;
      const _component_JetAuthenticationCard_logo = __unplugin_components_1;
      const _component_JetValidationErrors = _sfc_main$l;
      const _component_JetLabel = _sfc_main$p;
      const _component_JetInput = _sfc_main$q;
      const _component_JetButton = _sfc_main$u;
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_Head, {
        title: _ctx.__("Forgot Password")
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_JetAuthenticationCard, null, {
        logo: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetAuthenticationCard_logo, null, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetAuthenticationCard_logo)
            ];
          }
        }),
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."))}</div>`);
            if (props.status) {
              _push2(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId}>${serverRenderer.ssrInterpolate(props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(serverRenderer.ssrRenderComponent(_component_JetValidationErrors, { class: "mb-4" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "email",
              value: _ctx.__("Email")
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "email",
              type: "email",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).email,
              "onUpdate:modelValue": ($event) => vue.unref(form).email = $event,
              required: "",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
              class: { "opacity-25": vue.unref(form).processing },
              disabled: vue.unref(form).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Email Password Reset Link"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Email Password Reset Link")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              vue.createVNode("div", { class: "mb-4 text-sm text-gray-600" }, vue.toDisplayString(_ctx.__("Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.")), 1),
              props.status ? (vue.openBlock(), vue.createBlock("div", {
                key: 0,
                class: "mb-4 text-sm font-medium text-green-600"
              }, vue.toDisplayString(props.status), 1)) : vue.createCommentVNode("", true),
              vue.createVNode(_component_JetValidationErrors, { class: "mb-4" }),
              vue.createVNode("form", {
                onSubmit: vue.withModifiers(submit, ["prevent"])
              }, [
                vue.createVNode("div", null, [
                  vue.createVNode(_component_JetLabel, {
                    for: "email",
                    value: _ctx.__("Email")
                  }, null, 8, ["value"]),
                  vue.createVNode(_component_JetInput, {
                    id: "email",
                    type: "email",
                    class: "block w-full mt-1",
                    modelValue: vue.unref(form).email,
                    "onUpdate:modelValue": ($event) => vue.unref(form).email = $event,
                    required: "",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  vue.createVNode(_component_JetButton, {
                    class: { "opacity-25": vue.unref(form).processing },
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Email Password Reset Link")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var __glob_7_6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$i
});
const _sfc_main$h = {
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: String
  },
  setup(__props) {
    const props = __props;
    const form = inertiaVue3.useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.transform((data) => __spreadProps(__spreadValues({}, data), {
        remember: form.remember ? "on" : ""
      })).post(useRoutes("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = vue.resolveComponent("Head");
      const _component_JetAuthenticationCard = __unplugin_components_0;
      const _component_JetAuthenticationCard_logo = __unplugin_components_1;
      const _component_JetValidationErrors = _sfc_main$l;
      const _component_JetLabel = _sfc_main$p;
      const _component_JetInput = _sfc_main$q;
      const _component_JetCheckbox = _sfc_main$s;
      const _component_Link = vue.resolveComponent("Link");
      const _component_JetButton = _sfc_main$u;
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_Head, {
        title: _ctx.__("Login")
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_JetAuthenticationCard, null, {
        logo: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetAuthenticationCard_logo, null, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetAuthenticationCard_logo)
            ];
          }
        }),
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetValidationErrors, { class: "mb-4" }, null, _parent2, _scopeId));
            if (props.status) {
              _push2(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId}>${serverRenderer.ssrInterpolate(props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "email",
              value: _ctx.__("Email")
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "email",
              type: "email",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).email,
              "onUpdate:modelValue": ($event) => vue.unref(form).email = $event,
              required: "",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "password",
              value: _ctx.__("Password")
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "password",
              type: "password",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).password,
              "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="block mt-4"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetCheckbox, {
              name: "remember",
              checked: vue.unref(form).remember,
              "onUpdate:checked": ($event) => vue.unref(form).remember = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Remember me"))}</span></label></div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            if (props.canResetPassword) {
              _push2(serverRenderer.ssrRenderComponent(_component_Link, {
                href: _ctx.route("password.request"),
                class: "text-sm text-gray-600 underline hover:text-gray-900"
              }, {
                default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Forgot your password?"))}`);
                  } else {
                    return [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Forgot your password?")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
              class: ["ml-4", { "opacity-25": vue.unref(form).processing }],
              disabled: vue.unref(form).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Login"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Login")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              vue.createVNode(_component_JetValidationErrors, { class: "mb-4" }),
              props.status ? (vue.openBlock(), vue.createBlock("div", {
                key: 0,
                class: "mb-4 text-sm font-medium text-green-600"
              }, vue.toDisplayString(props.status), 1)) : vue.createCommentVNode("", true),
              vue.createVNode("form", {
                onSubmit: vue.withModifiers(submit, ["prevent"])
              }, [
                vue.createVNode("div", null, [
                  vue.createVNode(_component_JetLabel, {
                    for: "email",
                    value: _ctx.__("Email")
                  }, null, 8, ["value"]),
                  vue.createVNode(_component_JetInput, {
                    id: "email",
                    type: "email",
                    class: "block w-full mt-1",
                    modelValue: vue.unref(form).email,
                    "onUpdate:modelValue": ($event) => vue.unref(form).email = $event,
                    required: "",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "mt-4" }, [
                  vue.createVNode(_component_JetLabel, {
                    for: "password",
                    value: _ctx.__("Password")
                  }, null, 8, ["value"]),
                  vue.createVNode(_component_JetInput, {
                    id: "password",
                    type: "password",
                    class: "block w-full mt-1",
                    modelValue: vue.unref(form).password,
                    "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "block mt-4" }, [
                  vue.createVNode("label", { class: "flex items-center" }, [
                    vue.createVNode(_component_JetCheckbox, {
                      name: "remember",
                      checked: vue.unref(form).remember,
                      "onUpdate:checked": ($event) => vue.unref(form).remember = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    vue.createVNode("span", { class: "ml-2 text-sm text-gray-600" }, vue.toDisplayString(_ctx.__("Remember me")), 1)
                  ])
                ]),
                vue.createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  props.canResetPassword ? (vue.openBlock(), vue.createBlock(_component_Link, {
                    key: 0,
                    href: _ctx.route("password.request"),
                    class: "text-sm text-gray-600 underline hover:text-gray-900"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Forgot your password?")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : vue.createCommentVNode("", true),
                  vue.createVNode(_component_JetButton, {
                    class: ["ml-4", { "opacity-25": vue.unref(form).processing }],
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Login")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var __glob_7_7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$h
});
const _sfc_main$g = {
  __ssrInlineRender: true,
  setup(__props) {
    const form = inertiaVue3.useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      terms: false
    });
    const submit = () => {
      form.post(useRoutes("register"), {
        onStart: () => form.clearErrors(),
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = vue.resolveComponent("Head");
      const _component_JetAuthenticationCard = __unplugin_components_0;
      const _component_JetAuthenticationCard_logo = __unplugin_components_1;
      const _component_JetValidationErrors = _sfc_main$l;
      const _component_JetLabel = _sfc_main$p;
      const _component_JetInput = _sfc_main$q;
      const _component_JetCheckbox = _sfc_main$s;
      const _component_Link = vue.resolveComponent("Link");
      const _component_JetButton = _sfc_main$u;
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_Head, {
        title: _ctx.__("Register")
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_JetAuthenticationCard, null, {
        logo: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetAuthenticationCard_logo, null, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetAuthenticationCard_logo)
            ];
          }
        }),
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetValidationErrors, { class: "mb-4" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "name",
              value: _ctx.__("Name")
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "name",
              type: "text",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).name,
              "onUpdate:modelValue": ($event) => vue.unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "email",
              value: _ctx.__("Email")
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "email",
              type: "email",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).email,
              "onUpdate:modelValue": ($event) => vue.unref(form).email = $event,
              required: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "password",
              value: _ctx.__("Password")
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "password",
              type: "password",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).password,
              "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "password_confirmation",
              value: _ctx.__("Confirm Password")
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "password_confirmation",
              type: "password",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => vue.unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (_ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature) {
              _push2(`<div class="mt-4"${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, { for: "terms" }, {
                default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center"${_scopeId2}>`);
                    _push3(serverRenderer.ssrRenderComponent(_component_JetCheckbox, {
                      name: "terms",
                      id: "terms",
                      checked: vue.unref(form).terms,
                      "onUpdate:checked": ($event) => vue.unref(form).terms = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="ml-2"${_scopeId2}> I agree to the `);
                    _push3(serverRenderer.ssrRenderComponent(_component_Link, {
                      href: _ctx.route("terms.show"),
                      class: "text-sm text-gray-600 underline hover:text-gray-900"
                    }, {
                      default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${serverRenderer.ssrInterpolate(_ctx.__("Terms of Service"))}`);
                        } else {
                          return [
                            vue.createTextVNode(vue.toDisplayString(_ctx.__("Terms of Service")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(` and `);
                    _push3(serverRenderer.ssrRenderComponent(_component_Link, {
                      href: _ctx.route("policy.show"),
                      class: "text-sm text-gray-600 underline hover:text-gray-900"
                    }, {
                      default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${serverRenderer.ssrInterpolate(_ctx.__("Privacy Policy"))}`);
                        } else {
                          return [
                            vue.createTextVNode(vue.toDisplayString(_ctx.__("Privacy Policy")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      vue.createVNode("div", { class: "flex items-center" }, [
                        vue.createVNode(_component_JetCheckbox, {
                          name: "terms",
                          id: "terms",
                          checked: vue.unref(form).terms,
                          "onUpdate:checked": ($event) => vue.unref(form).terms = $event
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        vue.createVNode("div", { class: "ml-2" }, [
                          vue.createTextVNode(" I agree to the "),
                          vue.createVNode(_component_Link, {
                            href: _ctx.route("terms.show"),
                            class: "text-sm text-gray-600 underline hover:text-gray-900"
                          }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode(vue.toDisplayString(_ctx.__("Terms of Service")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          vue.createTextVNode(" and "),
                          vue.createVNode(_component_Link, {
                            href: _ctx.route("policy.show"),
                            class: "text-sm text-gray-600 underline hover:text-gray-900"
                          }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode(vue.toDisplayString(_ctx.__("Privacy Policy")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_Link, {
              href: _ctx.route("login"),
              class: "text-sm text-gray-600 underline hover:text-gray-900"
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Already registered?"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Already registered?")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
              class: ["ml-4", { "opacity-25": vue.unref(form).processing }],
              disabled: vue.unref(form).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Register"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Register")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              vue.createVNode(_component_JetValidationErrors, { class: "mb-4" }),
              vue.createVNode("form", {
                onSubmit: vue.withModifiers(submit, ["prevent"])
              }, [
                vue.createVNode("div", null, [
                  vue.createVNode(_component_JetLabel, {
                    for: "name",
                    value: _ctx.__("Name")
                  }, null, 8, ["value"]),
                  vue.createVNode(_component_JetInput, {
                    id: "name",
                    type: "text",
                    class: "block w-full mt-1",
                    modelValue: vue.unref(form).name,
                    "onUpdate:modelValue": ($event) => vue.unref(form).name = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "mt-4" }, [
                  vue.createVNode(_component_JetLabel, {
                    for: "email",
                    value: _ctx.__("Email")
                  }, null, 8, ["value"]),
                  vue.createVNode(_component_JetInput, {
                    id: "email",
                    type: "email",
                    class: "block w-full mt-1",
                    modelValue: vue.unref(form).email,
                    "onUpdate:modelValue": ($event) => vue.unref(form).email = $event,
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "mt-4" }, [
                  vue.createVNode(_component_JetLabel, {
                    for: "password",
                    value: _ctx.__("Password")
                  }, null, 8, ["value"]),
                  vue.createVNode(_component_JetInput, {
                    id: "password",
                    type: "password",
                    class: "block w-full mt-1",
                    modelValue: vue.unref(form).password,
                    "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "mt-4" }, [
                  vue.createVNode(_component_JetLabel, {
                    for: "password_confirmation",
                    value: _ctx.__("Confirm Password")
                  }, null, 8, ["value"]),
                  vue.createVNode(_component_JetInput, {
                    id: "password_confirmation",
                    type: "password",
                    class: "block w-full mt-1",
                    modelValue: vue.unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => vue.unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature ? (vue.openBlock(), vue.createBlock("div", {
                  key: 0,
                  class: "mt-4"
                }, [
                  vue.createVNode(_component_JetLabel, { for: "terms" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode("div", { class: "flex items-center" }, [
                        vue.createVNode(_component_JetCheckbox, {
                          name: "terms",
                          id: "terms",
                          checked: vue.unref(form).terms,
                          "onUpdate:checked": ($event) => vue.unref(form).terms = $event
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        vue.createVNode("div", { class: "ml-2" }, [
                          vue.createTextVNode(" I agree to the "),
                          vue.createVNode(_component_Link, {
                            href: _ctx.route("terms.show"),
                            class: "text-sm text-gray-600 underline hover:text-gray-900"
                          }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode(vue.toDisplayString(_ctx.__("Terms of Service")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          vue.createTextVNode(" and "),
                          vue.createVNode(_component_Link, {
                            href: _ctx.route("policy.show"),
                            class: "text-sm text-gray-600 underline hover:text-gray-900"
                          }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode(vue.toDisplayString(_ctx.__("Privacy Policy")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ])) : vue.createCommentVNode("", true),
                vue.createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  vue.createVNode(_component_Link, {
                    href: _ctx.route("login"),
                    class: "text-sm text-gray-600 underline hover:text-gray-900"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Already registered?")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  vue.createVNode(_component_JetButton, {
                    class: ["ml-4", { "opacity-25": vue.unref(form).processing }],
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Register")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var __glob_7_8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$g
});
const _sfc_main$f = {
  __ssrInlineRender: true,
  props: {
    email: String,
    token: String
  },
  setup(__props) {
    const props = __props;
    const form = inertiaVue3.useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(useRoutes("password.update"), {
        onStart: () => form.clearErrors(),
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = vue.resolveComponent("Head");
      const _component_JetAuthenticationCard = __unplugin_components_0;
      const _component_JetAuthenticationCard_logo = __unplugin_components_1;
      const _component_JetValidationErrors = _sfc_main$l;
      const _component_JetLabel = _sfc_main$p;
      const _component_JetInput = _sfc_main$q;
      const _component_JetButton = _sfc_main$u;
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_Head, {
        title: _ctx.__("Reset Password")
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_JetAuthenticationCard, null, {
        logo: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetAuthenticationCard_logo, null, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetAuthenticationCard_logo)
            ];
          }
        }),
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetValidationErrors, { class: "mb-4" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "email",
              value: _ctx.__("Email")
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "email",
              type: "email",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).email,
              "onUpdate:modelValue": ($event) => vue.unref(form).email = $event,
              required: "",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "password",
              value: _ctx.__("Password")
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "password",
              type: "password",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).password,
              "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "password_confirmation",
              value: _ctx.__("Confirm Password")
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "password_confirmation",
              type: "password",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => vue.unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
              class: { "opacity-25": vue.unref(form).processing },
              disabled: vue.unref(form).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Reset Password"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Reset Password")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              vue.createVNode(_component_JetValidationErrors, { class: "mb-4" }),
              vue.createVNode("form", {
                onSubmit: vue.withModifiers(submit, ["prevent"])
              }, [
                vue.createVNode("div", null, [
                  vue.createVNode(_component_JetLabel, {
                    for: "email",
                    value: _ctx.__("Email")
                  }, null, 8, ["value"]),
                  vue.createVNode(_component_JetInput, {
                    id: "email",
                    type: "email",
                    class: "block w-full mt-1",
                    modelValue: vue.unref(form).email,
                    "onUpdate:modelValue": ($event) => vue.unref(form).email = $event,
                    required: "",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "mt-4" }, [
                  vue.createVNode(_component_JetLabel, {
                    for: "password",
                    value: _ctx.__("Password")
                  }, null, 8, ["value"]),
                  vue.createVNode(_component_JetInput, {
                    id: "password",
                    type: "password",
                    class: "block w-full mt-1",
                    modelValue: vue.unref(form).password,
                    "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "mt-4" }, [
                  vue.createVNode(_component_JetLabel, {
                    for: "password_confirmation",
                    value: _ctx.__("Confirm Password")
                  }, null, 8, ["value"]),
                  vue.createVNode(_component_JetInput, {
                    id: "password_confirmation",
                    type: "password",
                    class: "block w-full mt-1",
                    modelValue: vue.unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => vue.unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  vue.createVNode(_component_JetButton, {
                    class: { "opacity-25": vue.unref(form).processing },
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Reset Password")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var __glob_7_9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$f
});
const _sfc_main$e = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const recovery = vue.ref(false);
    const recovery_code = vue.ref();
    const code = vue.ref();
    const form = inertiaVue3.useForm({
      code: "",
      recovery_code: ""
    });
    const toggleRecovery = () => {
      recovery.value ^= true;
      vue.nextTick(() => {
        if (recovery.value) {
          recovery_code.value.input.focus();
          form.code = "";
        } else {
          code.value.input.focus();
          form.recovery_code = "";
        }
      });
    };
    const submit = () => {
      form.post(useRoutes("two-factor.login"));
    };
    expose({ code, recovery_code });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = vue.resolveComponent("Head");
      const _component_JetAuthenticationCard = __unplugin_components_0;
      const _component_JetAuthenticationCard_logo = __unplugin_components_1;
      const _component_JetValidationErrors = _sfc_main$l;
      const _component_JetLabel = _sfc_main$p;
      const _component_JetInput = _sfc_main$q;
      const _component_JetButton = _sfc_main$u;
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_Head, {
        title: _ctx.__("Two-factor Confirmation")
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_JetAuthenticationCard, null, {
        logo: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetAuthenticationCard_logo, null, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetAuthenticationCard_logo)
            ];
          }
        }),
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}>`);
            if (!recovery.value) {
              _push2(`<!--[-->${serverRenderer.ssrInterpolate(_ctx.__("Please confirm access to your account by entering the authentication code provided by your authenticator application."))}<!--]-->`);
            } else {
              _push2(`<!--[-->${serverRenderer.ssrInterpolate(_ctx.__("Please confirm access to your account by entering one of your emergency recovery codes."))}<!--]-->`);
            }
            _push2(`</div>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetValidationErrors, { class: "mb-4" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}>`);
            if (!recovery.value) {
              _push2(`<div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
                for: "code",
                value: _ctx.__("Code")
              }, null, _parent2, _scopeId));
              _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
                ref_key: "code",
                ref: code,
                id: "code",
                type: "text",
                inputmode: "numeric",
                class: "block w-full mt-1",
                modelValue: vue.unref(form).code,
                "onUpdate:modelValue": ($event) => vue.unref(form).code = $event,
                autofocus: "",
                autocomplete: "one-time-code"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
                for: "recovery_code",
                value: _ctx.__("Recovery Code")
              }, null, _parent2, _scopeId));
              _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
                ref_key: "recovery_code",
                ref: recovery_code,
                id: "recovery_code",
                type: "text",
                class: "block w-full mt-1",
                modelValue: vue.unref(form).recovery_code,
                "onUpdate:modelValue": ($event) => vue.unref(form).recovery_code = $event,
                autocomplete: "one-time-code"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`<div class="flex items-center justify-end mt-4"${_scopeId}><button type="button" class="text-sm text-gray-600 underline cursor-pointer hover:text-gray-900"${_scopeId}>`);
            if (!recovery.value) {
              _push2(`<!--[-->${serverRenderer.ssrInterpolate(_ctx.__("Use a recovery code"))}<!--]-->`);
            } else {
              _push2(`<!--[-->${serverRenderer.ssrInterpolate(_ctx.__("Use an authentication code"))}<!--]-->`);
            }
            _push2(`</button>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
              class: ["ml-4", { "opacity-25": vue.unref(form).processing }],
              disabled: vue.unref(form).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Login"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Login")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              vue.createVNode("div", { class: "mb-4 text-sm text-gray-600" }, [
                !recovery.value ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Please confirm access to your account by entering the authentication code provided by your authenticator application.")), 1)
                ], 64)) : (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 1 }, [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Please confirm access to your account by entering one of your emergency recovery codes.")), 1)
                ], 64))
              ]),
              vue.createVNode(_component_JetValidationErrors, { class: "mb-4" }),
              vue.createVNode("form", {
                onSubmit: vue.withModifiers(submit, ["prevent"])
              }, [
                !recovery.value ? (vue.openBlock(), vue.createBlock("div", { key: 0 }, [
                  vue.createVNode(_component_JetLabel, {
                    for: "code",
                    value: _ctx.__("Code")
                  }, null, 8, ["value"]),
                  vue.createVNode(_component_JetInput, {
                    ref_key: "code",
                    ref: code,
                    id: "code",
                    type: "text",
                    inputmode: "numeric",
                    class: "block w-full mt-1",
                    modelValue: vue.unref(form).code,
                    "onUpdate:modelValue": ($event) => vue.unref(form).code = $event,
                    autofocus: "",
                    autocomplete: "one-time-code"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])) : (vue.openBlock(), vue.createBlock("div", { key: 1 }, [
                  vue.createVNode(_component_JetLabel, {
                    for: "recovery_code",
                    value: _ctx.__("Recovery Code")
                  }, null, 8, ["value"]),
                  vue.createVNode(_component_JetInput, {
                    ref_key: "recovery_code",
                    ref: recovery_code,
                    id: "recovery_code",
                    type: "text",
                    class: "block w-full mt-1",
                    modelValue: vue.unref(form).recovery_code,
                    "onUpdate:modelValue": ($event) => vue.unref(form).recovery_code = $event,
                    autocomplete: "one-time-code"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])),
                vue.createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  vue.createVNode("button", {
                    type: "button",
                    class: "text-sm text-gray-600 underline cursor-pointer hover:text-gray-900",
                    onClick: vue.withModifiers(toggleRecovery, ["prevent"])
                  }, [
                    !recovery.value ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Use a recovery code")), 1)
                    ], 64)) : (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 1 }, [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Use an authentication code")), 1)
                    ], 64))
                  ], 8, ["onClick"]),
                  vue.createVNode(_component_JetButton, {
                    class: ["ml-4", { "opacity-25": vue.unref(form).processing }],
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Login")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Pages/Auth/TwoFactorChallenge.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var __glob_7_10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$e
});
const _sfc_main$d = {
  __ssrInlineRender: true,
  props: { status: String },
  setup(__props) {
    const props = __props;
    const form = inertiaVue3.useForm();
    const submit = () => {
      form.post(useRoutes("verification.send"));
    };
    const verificationLinkSent = vue.computed(() => {
      return props.status === "verification-link-sent";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = vue.resolveComponent("Head");
      const _component_JetAuthenticationCard = __unplugin_components_0;
      const _component_JetAuthenticationCard_logo = __unplugin_components_1;
      const _component_JetButton = _sfc_main$u;
      const _component_Link = vue.resolveComponent("Link");
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_Head, {
        title: _ctx.__("Email Verification")
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_JetAuthenticationCard, null, {
        logo: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetAuthenticationCard_logo, null, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetAuthenticationCard_logo)
            ];
          }
        }),
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."))}</div>`);
            if (vue.unref(verificationLinkSent)) {
              _push2(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("A new verification link has been sent to the email address you provided during registration."))}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div class="flex items-center justify-between mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
              class: { "opacity-25": vue.unref(form).processing },
              disabled: vue.unref(form).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Resend Verification Email"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Resend Verification Email")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_Link, {
              href: _ctx.route("logout"),
              method: "post",
              has: "button",
              class: "text-sm text-gray-600 underline hover:text-gray-900"
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Log Out"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Log Out")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              vue.createVNode("div", { class: "mb-4 text-sm text-gray-600" }, vue.toDisplayString(_ctx.__("Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.")), 1),
              vue.unref(verificationLinkSent) ? (vue.openBlock(), vue.createBlock("div", {
                key: 0,
                class: "mb-4 text-sm font-medium text-green-600"
              }, vue.toDisplayString(_ctx.__("A new verification link has been sent to the email address you provided during registration.")), 1)) : vue.createCommentVNode("", true),
              vue.createVNode("form", {
                onSubmit: vue.withModifiers(submit, ["prevent"])
              }, [
                vue.createVNode("div", { class: "flex items-center justify-between mt-4" }, [
                  vue.createVNode(_component_JetButton, {
                    class: { "opacity-25": vue.unref(form).processing },
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Resend Verification Email")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"]),
                  vue.createVNode(_component_Link, {
                    href: _ctx.route("logout"),
                    method: "post",
                    has: "button",
                    class: "text-sm text-gray-600 underline hover:text-gray-900"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Log Out")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var __glob_7_11 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$d
});
const _sfc_main$c = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const confirmingUserDeletion = vue.ref(false);
    const password = vue.ref();
    const form = inertiaVue3.useForm({
      password: ""
    });
    const confirmUserDeletion = () => {
      confirmingUserDeletion.value = true;
      setTimeout(() => password.value.input.focus(), 250);
    };
    const deleteUser = () => {
      form.delete(useRoutes("current-user.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => password.value.input.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingUserDeletion.value = false;
      form.reset();
    };
    expose({ password });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JetActionSection = __unplugin_components_7;
      const _component_JetDangerButton = _sfc_main$C;
      const _component_JetDialogModal = _sfc_main$y;
      const _component_JetInput = _sfc_main$q;
      const _component_JetInput_error = _sfc_main$r;
      const _component_JetSecondaryButton = _sfc_main$z;
      _push(serverRenderer.ssrRenderComponent(_component_JetActionSection, _attrs, {
        title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Delete Account"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete Account")), 1)
            ];
          }
        }),
        description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Permanently delete your account."))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Permanently delete your account.")), 1)
            ];
          }
        }),
        content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-xl text-sm text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."))}</div><div class="mt-5"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetDangerButton, null, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Delete Account"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete Account")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetDialogModal, { show: confirmingUserDeletion.value }, {
              title: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Delete Account"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete Account")), 1)
                  ];
                }
              }),
              content: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."))} <div class="mt-4"${_scopeId2}>`);
                  _push3(serverRenderer.ssrRenderComponent(_component_JetInput, {
                    type: "password",
                    class: "block w-3/4 mt-1",
                    placeholder: _ctx.__("Password"),
                    ref_key: "password",
                    ref: password,
                    modelValue: vue.unref(form).password,
                    "onUpdate:modelValue": ($event) => vue.unref(form).password = $event
                  }, null, _parent3, _scopeId2));
                  _push3(serverRenderer.ssrRenderComponent(_component_JetInput_error, {
                    message: vue.unref(form).errors.password,
                    class: "mt-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.")) + " ", 1),
                    vue.createVNode("div", { class: "mt-4" }, [
                      vue.createVNode(_component_JetInput, {
                        type: "password",
                        class: "block w-3/4 mt-1",
                        placeholder: _ctx.__("Password"),
                        ref_key: "password",
                        ref: password,
                        modelValue: vue.unref(form).password,
                        "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
                        onKeyup: vue.withKeys(deleteUser, ["enter"])
                      }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onKeyup"]),
                      vue.createVNode(_component_JetInput_error, {
                        message: vue.unref(form).errors.password,
                        class: "mt-2"
                      }, null, 8, ["message"])
                    ])
                  ];
                }
              }),
              footer: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, null, {
                    default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${serverRenderer.ssrInterpolate(_ctx.__("Cancel"))}`);
                      } else {
                        return [
                          vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer.ssrRenderComponent(_component_JetDangerButton, {
                    class: ["ml-2", { "opacity-25": vue.unref(form).processing }],
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${serverRenderer.ssrInterpolate(_ctx.__("Delete Account"))}`);
                      } else {
                        return [
                          vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete Account")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_JetSecondaryButton, { onClick: closeModal }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_JetDangerButton, {
                      class: ["ml-2", { "opacity-25": vue.unref(form).processing }],
                      onClick: deleteUser,
                      disabled: vue.unref(form).processing
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete Account")), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, vue.toDisplayString(_ctx.__("Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.")), 1),
              vue.createVNode("div", { class: "mt-5" }, [
                vue.createVNode(_component_JetDangerButton, { onClick: confirmUserDeletion }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete Account")), 1)
                  ]),
                  _: 1
                })
              ]),
              vue.createVNode(_component_JetDialogModal, {
                show: confirmingUserDeletion.value,
                onClose: closeModal
              }, {
                title: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete Account")), 1)
                ]),
                content: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.")) + " ", 1),
                  vue.createVNode("div", { class: "mt-4" }, [
                    vue.createVNode(_component_JetInput, {
                      type: "password",
                      class: "block w-3/4 mt-1",
                      placeholder: _ctx.__("Password"),
                      ref_key: "password",
                      ref: password,
                      modelValue: vue.unref(form).password,
                      "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
                      onKeyup: vue.withKeys(deleteUser, ["enter"])
                    }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onKeyup"]),
                    vue.createVNode(_component_JetInput_error, {
                      message: vue.unref(form).errors.password,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ])
                ]),
                footer: vue.withCtx(() => [
                  vue.createVNode(_component_JetSecondaryButton, { onClick: closeModal }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_JetDangerButton, {
                    class: ["ml-2", { "opacity-25": vue.unref(form).processing }],
                    onClick: deleteUser,
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete Account")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["show"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Partials/Profile/DeleteUserForm.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __ssrInlineRender: true,
  props: ["sessions"],
  setup(__props, { expose }) {
    const props = __props;
    const confirmingLogout = vue.ref(false);
    const password = vue.ref();
    const form = inertiaVue3.useForm({
      password: ""
    });
    const confirmLogout = () => {
      confirmingLogout.value = true;
      setTimeout(() => password.value.input.focus(), 250);
    };
    const logoutOtherBrowserSessions = () => {
      form.delete(useRoutes("other-browser-sessions.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => password.value.input.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingLogout.value = false;
      form.reset();
    };
    expose({ password });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JetActionSection = __unplugin_components_7;
      const _component_JetButton = _sfc_main$u;
      const _component_JetActionMessage = _sfc_main$t;
      const _component_JetDialogModal = _sfc_main$y;
      const _component_JetInput = _sfc_main$q;
      const _component_JetInput_error = _sfc_main$r;
      const _component_JetSecondaryButton = _sfc_main$z;
      _push(serverRenderer.ssrRenderComponent(_component_JetActionSection, _attrs, {
        title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Browser Sessions"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Browser Sessions")), 1)
            ];
          }
        }),
        description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Manage and log out your active sessions on other browsers and devices."))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Manage and log out your active sessions on other browsers and devices.")), 1)
            ];
          }
        }),
        content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-xl text-sm text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password."))}</div>`);
            if (props.sessions.length > 0) {
              _push2(`<div class="mt-5 space-y-6"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(props.sessions, (session, i2) => {
                _push2(`<div class="flex items-center"${_scopeId}><div${_scopeId}>`);
                if (session.agent.is_desktop) {
                  _push2(`<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-gray-500"${_scopeId}><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"${_scopeId}></path></svg>`);
                } else {
                  _push2(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-gray-500"${_scopeId}><path d="M0 0h24v24H0z" stroke="none"${_scopeId}></path><rect x="7" y="4" width="10" height="16" rx="1"${_scopeId}></rect><path d="M11 5h2M12 17v.01"${_scopeId}></path></svg>`);
                }
                _push2(`</div><div class="ml-3"${_scopeId}><div class="text-sm text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(session.agent.platform)} - ${serverRenderer.ssrInterpolate(session.agent.browser)}</div><div${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>${serverRenderer.ssrInterpolate(session.ip_address)}, `);
                if (session.is_current_device) {
                  _push2(`<span class="font-semibold text-green-500"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("This device"))}</span>`);
                } else {
                  _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Last active"))} ${serverRenderer.ssrInterpolate(session.last_active)}</span>`);
                }
                _push2(`</div></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center mt-5"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetButton, null, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Log Out Other Browser Sessions"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Log Out Other Browser Sessions")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetActionMessage, {
              on: vue.unref(form).recentlySuccessful,
              class: "ml-3"
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Done."))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Done.")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetDialogModal, { show: confirmingLogout.value }, {
              title: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Log Out Other Browser Sessions"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Log Out Other Browser Sessions")), 1)
                  ];
                }
              }),
              content: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices."))} <div class="mt-4"${_scopeId2}>`);
                  _push3(serverRenderer.ssrRenderComponent(_component_JetInput, {
                    type: "password",
                    class: "block w-3/4 mt-1",
                    placeholder: "Password",
                    ref_key: "password",
                    ref: password,
                    modelValue: vue.unref(form).password,
                    "onUpdate:modelValue": ($event) => vue.unref(form).password = $event
                  }, null, _parent3, _scopeId2));
                  _push3(serverRenderer.ssrRenderComponent(_component_JetInput_error, {
                    message: vue.unref(form).errors.password,
                    class: "mt-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices.")) + " ", 1),
                    vue.createVNode("div", { class: "mt-4" }, [
                      vue.createVNode(_component_JetInput, {
                        type: "password",
                        class: "block w-3/4 mt-1",
                        placeholder: "Password",
                        ref_key: "password",
                        ref: password,
                        modelValue: vue.unref(form).password,
                        "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
                        onKeyup: vue.withKeys(logoutOtherBrowserSessions, ["enter"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                      vue.createVNode(_component_JetInput_error, {
                        message: vue.unref(form).errors.password,
                        class: "mt-2"
                      }, null, 8, ["message"])
                    ])
                  ];
                }
              }),
              footer: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, null, {
                    default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${serverRenderer.ssrInterpolate(_ctx.__("Cancel"))}`);
                      } else {
                        return [
                          vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer.ssrRenderComponent(_component_JetButton, {
                    class: ["ml-2", { "opacity-25": vue.unref(form).processing }],
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${serverRenderer.ssrInterpolate(_ctx.__("Log Out Other Browser Sessions"))}`);
                      } else {
                        return [
                          vue.createTextVNode(vue.toDisplayString(_ctx.__("Log Out Other Browser Sessions")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_JetSecondaryButton, { onClick: closeModal }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_JetButton, {
                      class: ["ml-2", { "opacity-25": vue.unref(form).processing }],
                      onClick: logoutOtherBrowserSessions,
                      disabled: vue.unref(form).processing
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(_ctx.__("Log Out Other Browser Sessions")), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, vue.toDisplayString(_ctx.__("If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.")), 1),
              props.sessions.length > 0 ? (vue.openBlock(), vue.createBlock("div", {
                key: 0,
                class: "mt-5 space-y-6"
              }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(props.sessions, (session, i2) => {
                  return vue.openBlock(), vue.createBlock("div", {
                    class: "flex items-center",
                    key: i2
                  }, [
                    vue.createVNode("div", null, [
                      session.agent.is_desktop ? (vue.openBlock(), vue.createBlock("svg", {
                        key: 0,
                        fill: "none",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        class: "w-8 h-8 text-gray-500"
                      }, [
                        vue.createVNode("path", { d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" })
                      ])) : (vue.openBlock(), vue.createBlock("svg", {
                        key: 1,
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        "stroke-width": "2",
                        stroke: "currentColor",
                        fill: "none",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        class: "w-8 h-8 text-gray-500"
                      }, [
                        vue.createVNode("path", {
                          d: "M0 0h24v24H0z",
                          stroke: "none"
                        }),
                        vue.createVNode("rect", {
                          x: "7",
                          y: "4",
                          width: "10",
                          height: "16",
                          rx: "1"
                        }),
                        vue.createVNode("path", { d: "M11 5h2M12 17v.01" })
                      ]))
                    ]),
                    vue.createVNode("div", { class: "ml-3" }, [
                      vue.createVNode("div", { class: "text-sm text-gray-600" }, vue.toDisplayString(session.agent.platform) + " - " + vue.toDisplayString(session.agent.browser), 1),
                      vue.createVNode("div", null, [
                        vue.createVNode("div", { class: "text-xs text-gray-500" }, [
                          vue.createTextVNode(vue.toDisplayString(session.ip_address) + ", ", 1),
                          session.is_current_device ? (vue.openBlock(), vue.createBlock("span", {
                            key: 0,
                            class: "font-semibold text-green-500"
                          }, vue.toDisplayString(_ctx.__("This device")), 1)) : (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(_ctx.__("Last active")) + " " + vue.toDisplayString(session.last_active), 1))
                        ])
                      ])
                    ])
                  ]);
                }), 128))
              ])) : vue.createCommentVNode("", true),
              vue.createVNode("div", { class: "flex items-center mt-5" }, [
                vue.createVNode(_component_JetButton, { onClick: confirmLogout }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Log Out Other Browser Sessions")), 1)
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_JetActionMessage, {
                  on: vue.unref(form).recentlySuccessful,
                  class: "ml-3"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Done.")), 1)
                  ]),
                  _: 1
                }, 8, ["on"])
              ]),
              vue.createVNode(_component_JetDialogModal, {
                show: confirmingLogout.value,
                onClose: closeModal
              }, {
                title: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Log Out Other Browser Sessions")), 1)
                ]),
                content: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices.")) + " ", 1),
                  vue.createVNode("div", { class: "mt-4" }, [
                    vue.createVNode(_component_JetInput, {
                      type: "password",
                      class: "block w-3/4 mt-1",
                      placeholder: "Password",
                      ref_key: "password",
                      ref: password,
                      modelValue: vue.unref(form).password,
                      "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
                      onKeyup: vue.withKeys(logoutOtherBrowserSessions, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                    vue.createVNode(_component_JetInput_error, {
                      message: vue.unref(form).errors.password,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ])
                ]),
                footer: vue.withCtx(() => [
                  vue.createVNode(_component_JetSecondaryButton, { onClick: closeModal }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_JetButton, {
                    class: ["ml-2", { "opacity-25": vue.unref(form).processing }],
                    onClick: logoutOtherBrowserSessions,
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Log Out Other Browser Sessions")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["show"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Partials/Profile/LogoutOtherBrowserSessionsForm.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __ssrInlineRender: true,
  props: {
    title: {
      default: "Confirm Password"
    },
    content: {
      default: "For your security, please confirm your password to continue."
    },
    button: {
      default: "Confirm"
    }
  },
  emits: ["confirmed"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const confirmingPassword = vue.ref(false);
    const password = vue.ref();
    const { title, content, button } = vue.toRefs(props);
    const form = inertiaVue3.useForm({
      password: "",
      error: ""
    });
    const confirmPassword = () => {
      form.processing = true;
      axios.post(useRoutes("password.confirm"), {
        password: form.password
      }).then(() => {
        form.processing = false;
        closeModal();
        vue.nextTick(() => emit("confirmed"));
      }).catch((error) => {
        form.processing = false;
        form.error = error.response.data.errors.password[0];
        password.value.input.focus();
      });
    };
    const closeModal = () => {
      confirmingPassword.value = false;
      form.password = "";
      form.error = "";
    };
    expose({ password });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JetDialogModal = _sfc_main$y;
      const _component_JetInput = _sfc_main$q;
      const _component_JetInput_error = _sfc_main$r;
      const _component_JetSecondaryButton = _sfc_main$z;
      const _component_JetButton = _sfc_main$u;
      _push(`<span${serverRenderer.ssrRenderAttrs(_attrs)}><span>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
      _push(serverRenderer.ssrRenderComponent(_component_JetDialogModal, { show: confirmingPassword.value }, {
        title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(vue.unref(title))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(vue.unref(title)), 1)
            ];
          }
        }),
        content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(vue.unref(content))} <div class="mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              type: "password",
              class: "block w-3/4 mt-1",
              placeholder: "Password",
              ref_key: "password",
              ref: password,
              modelValue: vue.unref(form).password,
              "onUpdate:modelValue": ($event) => vue.unref(form).password = $event
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput_error, {
              message: vue.unref(form).error,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(vue.unref(content)) + " ", 1),
              vue.createVNode("div", { class: "mt-4" }, [
                vue.createVNode(_component_JetInput, {
                  type: "password",
                  class: "block w-3/4 mt-1",
                  placeholder: "Password",
                  ref_key: "password",
                  ref: password,
                  modelValue: vue.unref(form).password,
                  "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
                  onKeyup: vue.withKeys(confirmPassword, ["enter"])
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                vue.createVNode(_component_JetInput_error, {
                  message: vue.unref(form).error,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, null, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Cancel"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
              class: ["ml-2", { "opacity-25": vue.unref(form).processing }],
              disabled: vue.unref(form).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(vue.unref(button))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(vue.unref(button)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetSecondaryButton, { onClick: closeModal }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                ]),
                _: 1
              }),
              vue.createVNode(_component_JetButton, {
                class: ["ml-2", { "opacity-25": vue.unref(form).processing }],
                onClick: confirmPassword,
                disabled: vue.unref(form).processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(vue.unref(button)), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Jetstream/JetConfirmsPassword.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __ssrInlineRender: true,
  setup(__props) {
    const enabling = vue.ref(false);
    const disabling = vue.ref(false);
    const qrCode = vue.ref(null);
    const recoveryCodes = vue.ref([]);
    const enableTwoFactorAuthentication = () => {
      enabling.value = true;
      inertia.Inertia.post("/user/two-factor-authentication", {}, {
        preserveScroll: true,
        onSuccess: () => Promise.all([showQrCode(), showRecoveryCodes()]),
        onFinish: () => enabling.value = false
      });
    };
    const showQrCode = () => {
      return axios.get("/user/two-factor-qr-code").then((response) => {
        qrCode.value = response.data.svg;
      });
    };
    const showRecoveryCodes = () => {
      return axios.get("/user/two-factor-recovery-codes").then((response) => {
        recoveryCodes.value = response.data;
      });
    };
    const regenerateRecoveryCodes = () => {
      axios.post("/user/two-factor-recovery-codes").then((response) => {
        showRecoveryCodes();
      });
    };
    const disableTwoFactorAuthentication = () => {
      disabling.value = true;
      inertia.Inertia.delete("/user/two-factor-authentication", {
        preserveScroll: true,
        onSuccess: () => disabling.value = false
      });
    };
    const twoFactorEnabled = vue.computed(() => !enabling.value && inertiaVue3.usePage().props.value.user.two_factor_enabled);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JetActionSection = __unplugin_components_7;
      const _component_JetConfirmsPassword = _sfc_main$a;
      const _component_JetButton = _sfc_main$u;
      const _component_JetSecondaryButton = _sfc_main$z;
      const _component_JetDangerButton = _sfc_main$C;
      _push(serverRenderer.ssrRenderComponent(_component_JetActionSection, _attrs, {
        title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Two Factor Authentication"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Two Factor Authentication")), 1)
            ];
          }
        }),
        description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Add additional security to your account using two factor authentication."))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Add additional security to your account using two factor authentication.")), 1)
            ];
          }
        }),
        content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (vue.unref(twoFactorEnabled)) {
              _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("You have enabled two factor authentication."))}</h3>`);
            } else {
              _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("You have not enabled two factor authentication."))}</h3>`);
            }
            _push2(`<div class="max-w-xl mt-3 text-sm text-gray-600"${_scopeId}><p${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application."))}</p></div>`);
            if (vue.unref(twoFactorEnabled)) {
              _push2(`<div${_scopeId}>`);
              if (qrCode.value) {
                _push2(`<div${_scopeId}><div class="max-w-xl mt-4 text-sm text-gray-600"${_scopeId}><p class="font-semibold"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application."))}</p></div><div class="mt-4"${_scopeId}>${qrCode.value}</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (recoveryCodes.value.length > 0) {
                _push2(`<div${_scopeId}><div class="max-w-xl mt-4 text-sm text-gray-600"${_scopeId}><p class="font-semibold"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost."))}</p></div><div class="grid max-w-xl gap-1 px-4 py-4 mt-4 font-mono text-sm bg-gray-100 rounded-lg"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(recoveryCodes.value, (code) => {
                  _push2(`<div${_scopeId}>${serverRenderer.ssrInterpolate(code)}</div>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-5"${_scopeId}>`);
            if (!vue.unref(twoFactorEnabled)) {
              _push2(`<div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_JetConfirmsPassword, null, {
                default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer.ssrRenderComponent(_component_JetButton, {
                      type: "button",
                      class: { "opacity-25": enabling.value },
                      disabled: enabling.value
                    }, {
                      default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${serverRenderer.ssrInterpolate(_ctx.__("Enable"))}`);
                        } else {
                          return [
                            vue.createTextVNode(vue.toDisplayString(_ctx.__("Enable")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vue.createVNode(_component_JetButton, {
                        type: "button",
                        class: { "opacity-25": enabling.value },
                        disabled: enabling.value
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(vue.toDisplayString(_ctx.__("Enable")), 1)
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_JetConfirmsPassword, null, {
                default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (recoveryCodes.value.length > 0) {
                      _push3(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, { class: "mr-3" }, {
                        default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${serverRenderer.ssrInterpolate(_ctx.__("Regenerate Recovery Codes"))}`);
                          } else {
                            return [
                              vue.createTextVNode(vue.toDisplayString(_ctx.__("Regenerate Recovery Codes")), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      recoveryCodes.value.length > 0 ? (vue.openBlock(), vue.createBlock(_component_JetSecondaryButton, {
                        key: 0,
                        class: "mr-3"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(vue.toDisplayString(_ctx.__("Regenerate Recovery Codes")), 1)
                        ]),
                        _: 1
                      })) : vue.createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(serverRenderer.ssrRenderComponent(_component_JetConfirmsPassword, null, {
                default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (recoveryCodes.value.length === 0) {
                      _push3(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, { class: "mr-3" }, {
                        default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${serverRenderer.ssrInterpolate(_ctx.__("Show Recovery Codes"))}`);
                          } else {
                            return [
                              vue.createTextVNode(vue.toDisplayString(_ctx.__("Show Recovery Codes")), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      recoveryCodes.value.length === 0 ? (vue.openBlock(), vue.createBlock(_component_JetSecondaryButton, {
                        key: 0,
                        class: "mr-3"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(vue.toDisplayString(_ctx.__("Show Recovery Codes")), 1)
                        ]),
                        _: 1
                      })) : vue.createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(serverRenderer.ssrRenderComponent(_component_JetConfirmsPassword, null, {
                default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer.ssrRenderComponent(_component_JetDangerButton, {
                      class: { "opacity-25": disabling.value },
                      disabled: disabling.value
                    }, {
                      default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${serverRenderer.ssrInterpolate(_ctx.__("Disable"))}`);
                        } else {
                          return [
                            vue.createTextVNode(vue.toDisplayString(_ctx.__("Disable")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vue.createVNode(_component_JetDangerButton, {
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(vue.toDisplayString(_ctx.__("Disable")), 1)
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              vue.unref(twoFactorEnabled) ? (vue.openBlock(), vue.createBlock("h3", {
                key: 0,
                class: "text-lg font-medium text-gray-900"
              }, vue.toDisplayString(_ctx.__("You have enabled two factor authentication.")), 1)) : (vue.openBlock(), vue.createBlock("h3", {
                key: 1,
                class: "text-lg font-medium text-gray-900"
              }, vue.toDisplayString(_ctx.__("You have not enabled two factor authentication.")), 1)),
              vue.createVNode("div", { class: "max-w-xl mt-3 text-sm text-gray-600" }, [
                vue.createVNode("p", null, vue.toDisplayString(_ctx.__("When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.")), 1)
              ]),
              vue.unref(twoFactorEnabled) ? (vue.openBlock(), vue.createBlock("div", { key: 2 }, [
                qrCode.value ? (vue.openBlock(), vue.createBlock("div", { key: 0 }, [
                  vue.createVNode("div", { class: "max-w-xl mt-4 text-sm text-gray-600" }, [
                    vue.createVNode("p", { class: "font-semibold" }, vue.toDisplayString(_ctx.__("Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application.")), 1)
                  ]),
                  vue.createVNode("div", {
                    class: "mt-4",
                    innerHTML: qrCode.value
                  }, null, 8, ["innerHTML"])
                ])) : vue.createCommentVNode("", true),
                recoveryCodes.value.length > 0 ? (vue.openBlock(), vue.createBlock("div", { key: 1 }, [
                  vue.createVNode("div", { class: "max-w-xl mt-4 text-sm text-gray-600" }, [
                    vue.createVNode("p", { class: "font-semibold" }, vue.toDisplayString(_ctx.__("Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.")), 1)
                  ]),
                  vue.createVNode("div", { class: "grid max-w-xl gap-1 px-4 py-4 mt-4 font-mono text-sm bg-gray-100 rounded-lg" }, [
                    (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(recoveryCodes.value, (code) => {
                      return vue.openBlock(), vue.createBlock("div", { key: code }, vue.toDisplayString(code), 1);
                    }), 128))
                  ])
                ])) : vue.createCommentVNode("", true)
              ])) : vue.createCommentVNode("", true),
              vue.createVNode("div", { class: "mt-5" }, [
                !vue.unref(twoFactorEnabled) ? (vue.openBlock(), vue.createBlock("div", { key: 0 }, [
                  vue.createVNode(_component_JetConfirmsPassword, { onConfirmed: enableTwoFactorAuthentication }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_JetButton, {
                        type: "button",
                        class: { "opacity-25": enabling.value },
                        disabled: enabling.value
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(vue.toDisplayString(_ctx.__("Enable")), 1)
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ]),
                    _: 1
                  })
                ])) : (vue.openBlock(), vue.createBlock("div", { key: 1 }, [
                  vue.createVNode(_component_JetConfirmsPassword, { onConfirmed: regenerateRecoveryCodes }, {
                    default: vue.withCtx(() => [
                      recoveryCodes.value.length > 0 ? (vue.openBlock(), vue.createBlock(_component_JetSecondaryButton, {
                        key: 0,
                        class: "mr-3"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(vue.toDisplayString(_ctx.__("Regenerate Recovery Codes")), 1)
                        ]),
                        _: 1
                      })) : vue.createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_JetConfirmsPassword, { onConfirmed: showRecoveryCodes }, {
                    default: vue.withCtx(() => [
                      recoveryCodes.value.length === 0 ? (vue.openBlock(), vue.createBlock(_component_JetSecondaryButton, {
                        key: 0,
                        class: "mr-3"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(vue.toDisplayString(_ctx.__("Show Recovery Codes")), 1)
                        ]),
                        _: 1
                      })) : vue.createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_JetConfirmsPassword, { onConfirmed: disableTwoFactorAuthentication }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_JetDangerButton, {
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(vue.toDisplayString(_ctx.__("Disable")), 1)
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ]),
                    _: 1
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Partials/Profile/TwoFactorAuthenticationForm.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const current_password = vue.ref();
    const password = vue.ref();
    const form = inertiaVue3.useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    expose({ password, current_password });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JetFormSection = _sfc_main$o;
      const _component_JetLabel = _sfc_main$p;
      const _component_JetInput = _sfc_main$q;
      const _component_JetInput_error = _sfc_main$r;
      const _component_JetActionMessage = _sfc_main$t;
      const _component_JetButton = _sfc_main$u;
      _push(serverRenderer.ssrRenderComponent(_component_JetFormSection, _attrs, {
        title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Update Password"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Update Password")), 1)
            ];
          }
        }),
        description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Ensure your account is using a long, random password to stay secure."))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Ensure your account is using a long, random password to stay secure.")), 1)
            ];
          }
        }),
        form: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "current_password",
              value: _ctx.__("Current Password")
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "current_password",
              type: "password",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).current_password,
              "onUpdate:modelValue": ($event) => vue.unref(form).current_password = $event,
              ref_key: "current_password",
              ref: current_password,
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput_error, {
              message: vue.unref(form).errors.current_password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "password",
              value: _ctx.__("New Password")
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "password",
              type: "password",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).password,
              "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
              ref_key: "password",
              ref: password,
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput_error, {
              message: vue.unref(form).errors.password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "password_confirmation",
              value: _ctx.__("Confirm Password")
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "password_confirmation",
              type: "password",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => vue.unref(form).password_confirmation = $event,
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput_error, {
              message: vue.unref(form).errors.password_confirmation,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                vue.createVNode(_component_JetLabel, {
                  for: "current_password",
                  value: _ctx.__("Current Password")
                }, null, 8, ["value"]),
                vue.createVNode(_component_JetInput, {
                  id: "current_password",
                  type: "password",
                  class: "block w-full mt-1",
                  modelValue: vue.unref(form).current_password,
                  "onUpdate:modelValue": ($event) => vue.unref(form).current_password = $event,
                  ref_key: "current_password",
                  ref: current_password,
                  autocomplete: "current-password"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                vue.createVNode(_component_JetInput_error, {
                  message: vue.unref(form).errors.current_password,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                vue.createVNode(_component_JetLabel, {
                  for: "password",
                  value: _ctx.__("New Password")
                }, null, 8, ["value"]),
                vue.createVNode(_component_JetInput, {
                  id: "password",
                  type: "password",
                  class: "block w-full mt-1",
                  modelValue: vue.unref(form).password,
                  "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
                  ref_key: "password",
                  ref: password,
                  autocomplete: "new-password"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                vue.createVNode(_component_JetInput_error, {
                  message: vue.unref(form).errors.password,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                vue.createVNode(_component_JetLabel, {
                  for: "password_confirmation",
                  value: _ctx.__("Confirm Password")
                }, null, 8, ["value"]),
                vue.createVNode(_component_JetInput, {
                  id: "password_confirmation",
                  type: "password",
                  class: "block w-full mt-1",
                  modelValue: vue.unref(form).password_confirmation,
                  "onUpdate:modelValue": ($event) => vue.unref(form).password_confirmation = $event,
                  autocomplete: "new-password"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                vue.createVNode(_component_JetInput_error, {
                  message: vue.unref(form).errors.password_confirmation,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        actions: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetActionMessage, {
              on: vue.unref(form).recentlySuccessful,
              class: "mr-3"
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Saved."))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Saved.")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
              class: { "opacity-25": vue.unref(form).processing },
              disabled: vue.unref(form).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Save"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Save")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetActionMessage, {
                on: vue.unref(form).recentlySuccessful,
                class: "mr-3"
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Saved.")), 1)
                ]),
                _: 1
              }, 8, ["on"]),
              vue.createVNode(_component_JetButton, {
                class: { "opacity-25": vue.unref(form).processing },
                disabled: vue.unref(form).processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Save")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Partials/Profile/UpdatePasswordForm.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __ssrInlineRender: true,
  props: ["user"],
  setup(__props, { expose }) {
    const props = __props;
    const photo = vue.ref(null);
    const form = inertiaVue3.useForm({
      _method: "PUT",
      name: props.user.name,
      email: props.user.email,
      photo: null
    });
    const photoPreview = vue.ref(null);
    const selectNewPhoto = () => {
      photo.value.click();
    };
    const updatePhotoPreview = () => {
      const image = photo.value.files[0];
      if (!image)
        return;
      const reader = new FileReader();
      reader.onload = (e2) => {
        photoPreview.value = e2.target.result;
      };
      reader.readAsDataURL(image);
    };
    const deletePhoto = () => {
      inertia.Inertia.delete(useRoutes("current-user-photo.destroy"), {
        preserveScroll: true,
        onSuccess: () => {
          photoPreview.value = null;
          clearPhotoFileInput();
        }
      });
    };
    const clearPhotoFileInput = () => {
      if (photo?.value) {
        photo.value = null;
      }
    };
    expose({ photo, photoPreview });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JetFormSection = _sfc_main$o;
      const _component_JetLabel = _sfc_main$p;
      const _component_JetSecondaryButton = _sfc_main$z;
      const _component_JetInput_error = _sfc_main$r;
      const _component_JetInput = _sfc_main$q;
      const _component_JetActionMessage = _sfc_main$t;
      const _component_JetButton = _sfc_main$u;
      _push(serverRenderer.ssrRenderComponent(_component_JetFormSection, _attrs, {
        title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Profile Information"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Profile Information")), 1)
            ];
          }
        }),
        description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Update your account's profile information and email address."))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Update your account's profile information and email address.")), 1)
            ];
          }
        }),
        form: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$page.props.jetstream.managesProfilePhotos) {
              _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}><input type="file" class="hidden"${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
                for: "photo",
                value: _ctx.__("Photo")
              }, null, _parent2, _scopeId));
              _push2(`<div class="mt-2" style="${serverRenderer.ssrRenderStyle(!photoPreview.value ? null : { display: "none" })}"${_scopeId}><img${serverRenderer.ssrRenderAttr("src", props.user.profile_photo_url)}${serverRenderer.ssrRenderAttr("alt", __props.user.name)} class="object-cover w-20 h-20 rounded-full"${_scopeId}></div><div class="mt-2" style="${serverRenderer.ssrRenderStyle(photoPreview.value ? null : { display: "none" })}"${_scopeId}><span class="block w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full" style="${serverRenderer.ssrRenderStyle("background-image: url('" + photoPreview.value + "');")}"${_scopeId}></span></div>`);
              _push2(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, {
                class: "mt-2 mr-2",
                type: "button"
              }, {
                default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Select A New Photo"))}`);
                  } else {
                    return [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Select A New Photo")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (props.user.profile_photo_path) {
                _push2(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, {
                  type: "button",
                  class: "mt-2"
                }, {
                  default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Remove Photo"))}`);
                    } else {
                      return [
                        vue.createTextVNode(vue.toDisplayString(_ctx.__("Remove Photo")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(serverRenderer.ssrRenderComponent(_component_JetInput_error, {
                message: vue.unref(form).errors.photo,
                class: "mt-2"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "name",
              value: _ctx.__("Name")
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "name",
              type: "text",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).name,
              "onUpdate:modelValue": ($event) => vue.unref(form).name = $event,
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput_error, {
              message: vue.unref(form).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "email",
              value: _ctx.__("Email")
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "email",
              type: "email",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).email,
              "onUpdate:modelValue": ($event) => vue.unref(form).email = $event
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput_error, {
              message: vue.unref(form).errors.email,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              _ctx.$page.props.jetstream.managesProfilePhotos ? (vue.openBlock(), vue.createBlock("div", {
                key: 0,
                class: "col-span-6 sm:col-span-4"
              }, [
                vue.createVNode("input", {
                  type: "file",
                  class: "hidden",
                  ref_key: "photo",
                  ref: photo,
                  onChange: updatePhotoPreview
                }, null, 544),
                vue.createVNode(_component_JetLabel, {
                  for: "photo",
                  value: _ctx.__("Photo")
                }, null, 8, ["value"]),
                vue.withDirectives(vue.createVNode("div", { class: "mt-2" }, [
                  vue.createVNode("img", {
                    src: props.user.profile_photo_url,
                    alt: __props.user.name,
                    class: "object-cover w-20 h-20 rounded-full"
                  }, null, 8, ["src", "alt"])
                ], 512), [
                  [vue.vShow, !photoPreview.value]
                ]),
                vue.withDirectives(vue.createVNode("div", { class: "mt-2" }, [
                  vue.createVNode("span", {
                    class: "block w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full",
                    style: "background-image: url('" + photoPreview.value + "');"
                  }, null, 4)
                ], 512), [
                  [vue.vShow, photoPreview.value]
                ]),
                vue.createVNode(_component_JetSecondaryButton, {
                  class: "mt-2 mr-2",
                  type: "button",
                  onClick: vue.withModifiers(selectNewPhoto, ["prevent"])
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Select A New Photo")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                props.user.profile_photo_path ? (vue.openBlock(), vue.createBlock(_component_JetSecondaryButton, {
                  key: 0,
                  type: "button",
                  class: "mt-2",
                  onClick: vue.withModifiers(deletePhoto, ["prevent"])
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Remove Photo")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])) : vue.createCommentVNode("", true),
                vue.createVNode(_component_JetInput_error, {
                  message: vue.unref(form).errors.photo,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])) : vue.createCommentVNode("", true),
              vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                vue.createVNode(_component_JetLabel, {
                  for: "name",
                  value: _ctx.__("Name")
                }, null, 8, ["value"]),
                vue.createVNode(_component_JetInput, {
                  id: "name",
                  type: "text",
                  class: "block w-full mt-1",
                  modelValue: vue.unref(form).name,
                  "onUpdate:modelValue": ($event) => vue.unref(form).name = $event,
                  autocomplete: "name"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                vue.createVNode(_component_JetInput_error, {
                  message: vue.unref(form).errors.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                vue.createVNode(_component_JetLabel, {
                  for: "email",
                  value: _ctx.__("Email")
                }, null, 8, ["value"]),
                vue.createVNode(_component_JetInput, {
                  id: "email",
                  type: "email",
                  class: "block w-full mt-1",
                  modelValue: vue.unref(form).email,
                  "onUpdate:modelValue": ($event) => vue.unref(form).email = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                vue.createVNode(_component_JetInput_error, {
                  message: vue.unref(form).errors.email,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        actions: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetActionMessage, {
              on: vue.unref(form).recentlySuccessful,
              class: "mr-3"
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Saved."))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Saved.")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
              class: { "opacity-25": vue.unref(form).processing },
              disabled: vue.unref(form).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Save"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Save")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetActionMessage, {
                on: vue.unref(form).recentlySuccessful,
                class: "mr-3"
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Saved.")), 1)
                ]),
                _: 1
              }, 8, ["on"]),
              vue.createVNode(_component_JetButton, {
                class: { "opacity-25": vue.unref(form).processing },
                disabled: vue.unref(form).processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Save")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Partials/Profile/UpdateProfileInformationForm.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __ssrInlineRender: true,
  props: ["sessions"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainLayout = _sfc_main$I;
      const _component_update_profile_information_form = _sfc_main$7;
      const _component_JetSectionBorder = __unplugin_components_3;
      const _component_update_password_form = _sfc_main$8;
      const _component_two_factor_authentication_form = _sfc_main$9;
      const _component_logout_other_browser_sessions_form = _sfc_main$b;
      const _component_delete_user_form = _sfc_main$c;
      _push(serverRenderer.ssrRenderComponent(_component_MainLayout, vue.mergeProps({
        title: _ctx.__("Profile")
      }, _attrs), {
        header: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Profile"))}</h2>`);
          } else {
            return [
              vue.createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, vue.toDisplayString(_ctx.__("Profile")), 1)
            ];
          }
        }),
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}>`);
            if (_ctx.$page.props.jetstream.canUpdateProfileInformation) {
              _push2(`<div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_update_profile_information_form, {
                user: _ctx.$page.props.user
              }, null, _parent2, _scopeId));
              _push2(serverRenderer.ssrRenderComponent(_component_JetSectionBorder, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.jetstream.canUpdatePassword) {
              _push2(`<div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_update_password_form, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
              _push2(serverRenderer.ssrRenderComponent(_component_JetSectionBorder, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.jetstream.canManageTwoFactorAuthentication) {
              _push2(`<div${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_two_factor_authentication_form, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
              _push2(serverRenderer.ssrRenderComponent(_component_JetSectionBorder, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(serverRenderer.ssrRenderComponent(_component_logout_other_browser_sessions_form, {
              sessions: props.sessions,
              class: "mt-10 sm:mt-0"
            }, null, _parent2, _scopeId));
            if (_ctx.$page.props.jetstream.hasAccountDeletionFeatures) {
              _push2(`<!--[-->`);
              _push2(serverRenderer.ssrRenderComponent(_component_JetSectionBorder, null, null, _parent2, _scopeId));
              _push2(serverRenderer.ssrRenderComponent(_component_delete_user_form, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              vue.createVNode("div", null, [
                vue.createVNode("div", { class: "py-10 mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  _ctx.$page.props.jetstream.canUpdateProfileInformation ? (vue.openBlock(), vue.createBlock("div", { key: 0 }, [
                    vue.createVNode(_component_update_profile_information_form, {
                      user: _ctx.$page.props.user
                    }, null, 8, ["user"]),
                    vue.createVNode(_component_JetSectionBorder)
                  ])) : vue.createCommentVNode("", true),
                  _ctx.$page.props.jetstream.canUpdatePassword ? (vue.openBlock(), vue.createBlock("div", { key: 1 }, [
                    vue.createVNode(_component_update_password_form, { class: "mt-10 sm:mt-0" }),
                    vue.createVNode(_component_JetSectionBorder)
                  ])) : vue.createCommentVNode("", true),
                  _ctx.$page.props.jetstream.canManageTwoFactorAuthentication ? (vue.openBlock(), vue.createBlock("div", { key: 2 }, [
                    vue.createVNode(_component_two_factor_authentication_form, { class: "mt-10 sm:mt-0" }),
                    vue.createVNode(_component_JetSectionBorder)
                  ])) : vue.createCommentVNode("", true),
                  vue.createVNode(_component_logout_other_browser_sessions_form, {
                    sessions: props.sessions,
                    class: "mt-10 sm:mt-0"
                  }, null, 8, ["sessions"]),
                  _ctx.$page.props.jetstream.hasAccountDeletionFeatures ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 3 }, [
                    vue.createVNode(_component_JetSectionBorder),
                    vue.createVNode(_component_delete_user_form, { class: "mt-10 sm:mt-0" })
                  ], 64)) : vue.createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Pages/Profile/Show.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var __glob_7_12 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$6
});
const _sfc_main$5 = {
  __ssrInlineRender: true,
  setup(__props) {
    const form = inertiaVue3.useForm({
      name: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JetFormSection = _sfc_main$o;
      const _component_JetLabel = _sfc_main$p;
      const _component_JetInput = _sfc_main$q;
      const _component_JetInput_error = _sfc_main$r;
      const _component_JetButton = _sfc_main$u;
      _push(serverRenderer.ssrRenderComponent(_component_JetFormSection, _attrs, {
        title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Team Details"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Team Details")), 1)
            ];
          }
        }),
        description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Create a new team to collaborate with others on projects."))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Create a new team to collaborate with others on projects.")), 1)
            ];
          }
        }),
        form: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, { value: "Team Owner" }, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center mt-2"${_scopeId}><img class="object-cover w-12 h-12 rounded-full"${serverRenderer.ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${serverRenderer.ssrRenderAttr("alt", _ctx.$page.props.user.name)}${_scopeId}><div class="ml-4 leading-tight"${_scopeId}><div${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.$page.props.user.name)}</div><div class="text-sm text-gray-700"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.$page.props.user.email)}</div></div></div></div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "name",
              value: "Team Name"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "name",
              type: "text",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).name,
              "onUpdate:modelValue": ($event) => vue.unref(form).name = $event,
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput_error, {
              message: vue.unref(form).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "col-span-6" }, [
                vue.createVNode(_component_JetLabel, { value: "Team Owner" }),
                vue.createVNode("div", { class: "flex items-center mt-2" }, [
                  vue.createVNode("img", {
                    class: "object-cover w-12 h-12 rounded-full",
                    src: _ctx.$page.props.user.profile_photo_url,
                    alt: _ctx.$page.props.user.name
                  }, null, 8, ["src", "alt"]),
                  vue.createVNode("div", { class: "ml-4 leading-tight" }, [
                    vue.createVNode("div", null, vue.toDisplayString(_ctx.$page.props.user.name), 1),
                    vue.createVNode("div", { class: "text-sm text-gray-700" }, vue.toDisplayString(_ctx.$page.props.user.email), 1)
                  ])
                ])
              ]),
              vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                vue.createVNode(_component_JetLabel, {
                  for: "name",
                  value: "Team Name"
                }),
                vue.createVNode(_component_JetInput, {
                  id: "name",
                  type: "text",
                  class: "block w-full mt-1",
                  modelValue: vue.unref(form).name,
                  "onUpdate:modelValue": ($event) => vue.unref(form).name = $event,
                  autofocus: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                vue.createVNode(_component_JetInput_error, {
                  message: vue.unref(form).errors.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        actions: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
              class: { "opacity-25": vue.unref(form).processing },
              disabled: vue.unref(form).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Create"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Create")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetButton, {
                class: { "opacity-25": vue.unref(form).processing },
                disabled: vue.unref(form).processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Create")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Partials/Teams/CreateTeamForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_MainLayout = _sfc_main$I;
  const _component_create_team_form = _sfc_main$5;
  _push(serverRenderer.ssrRenderComponent(_component_MainLayout, vue.mergeProps({
    title: _ctx.__("Create Team")
  }, _attrs), {
    header: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Create Team"))}</h2>`);
      } else {
        return [
          vue.createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, vue.toDisplayString(_ctx.__("Create Team")), 1)
        ];
      }
    }),
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_create_team_form, null, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          vue.createVNode("div", null, [
            vue.createVNode("div", { class: "py-10 mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
              vue.createVNode(_component_create_team_form)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Pages/Teams/Create.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var Create = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
var __glob_7_13 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Create
});
const _sfc_main$3 = {
  __ssrInlineRender: true,
  props: ["team"],
  setup(__props) {
    const props = __props;
    const confirmingTeamDeletion = vue.ref(false);
    const form = inertiaVue3.useForm();
    const confirmTeamDeletion = () => {
      confirmingTeamDeletion.value = true;
    };
    const deleteTeam = () => {
      form.delete(useRoutes("teams.destroy", { team: props.team.id }), {
        errorBag: "deleteTeam"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JetActionSection = __unplugin_components_7;
      const _component_JetDangerButton = _sfc_main$C;
      const _component_JetConfirmationModal = _sfc_main$A;
      const _component_JetSecondaryButton = _sfc_main$z;
      _push(serverRenderer.ssrRenderComponent(_component_JetActionSection, _attrs, {
        title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Delete Team"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete Team")), 1)
            ];
          }
        }),
        description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Permanently delete this team."))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Permanently delete this team.")), 1)
            ];
          }
        }),
        content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-xl text-sm text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain."))}</div><div class="mt-5"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetDangerButton, null, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Delete Team"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete Team")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetConfirmationModal, { show: confirmingTeamDeletion.value }, {
              title: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Delete Team"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete Team")), 1)
                  ];
                }
              }),
              content: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted."))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted.")), 1)
                  ];
                }
              }),
              footer: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, null, {
                    default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${serverRenderer.ssrInterpolate(_ctx.__("Cancel"))}`);
                      } else {
                        return [
                          vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer.ssrRenderComponent(_component_JetDangerButton, {
                    class: ["ml-2", { "opacity-25": vue.unref(form).processing }],
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${serverRenderer.ssrInterpolate(_ctx.__("Delete Team"))}`);
                      } else {
                        return [
                          vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete Team")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_JetSecondaryButton, {
                      onClick: ($event) => confirmingTeamDeletion.value = false
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    vue.createVNode(_component_JetDangerButton, {
                      class: ["ml-2", { "opacity-25": vue.unref(form).processing }],
                      onClick: deleteTeam,
                      disabled: vue.unref(form).processing
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete Team")), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, vue.toDisplayString(_ctx.__("Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain.")), 1),
              vue.createVNode("div", { class: "mt-5" }, [
                vue.createVNode(_component_JetDangerButton, { onClick: confirmTeamDeletion }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete Team")), 1)
                  ]),
                  _: 1
                })
              ]),
              vue.createVNode(_component_JetConfirmationModal, {
                show: confirmingTeamDeletion.value,
                onClose: ($event) => confirmingTeamDeletion.value = false
              }, {
                title: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete Team")), 1)
                ]),
                content: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted.")), 1)
                ]),
                footer: vue.withCtx(() => [
                  vue.createVNode(_component_JetSecondaryButton, {
                    onClick: ($event) => confirmingTeamDeletion.value = false
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  vue.createVNode(_component_JetDangerButton, {
                    class: ["ml-2", { "opacity-25": vue.unref(form).processing }],
                    onClick: deleteTeam,
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Delete Team")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["show", "onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Partials/Teams/DeleteTeamForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __ssrInlineRender: true,
  props: ["team", "availableRoles", "userPermissions"],
  setup(__props) {
    const props = __props;
    const { team, availableRoles, userPermissions } = vue.toRefs(props);
    const currentlyManagingRole = vue.ref(false);
    const managingRoleFor = vue.ref(null);
    const confirmingLeavingTeam = vue.ref(false);
    const teamMemberBeingRemoved = vue.ref(null);
    const addTeamMemberForm = inertiaVue3.useForm({
      email: "",
      role: null
    });
    const updateRoleForm = inertiaVue3.useForm({
      role: null
    });
    const leaveTeamForm = inertiaVue3.useForm();
    const removeTeamMemberForm = inertiaVue3.useForm();
    const cancelTeamInvitation = (invitation) => {
      inertia.Inertia.delete(useRoutes("team-invitations.destroy", invitation), {
        preserveScroll: true
      });
    };
    const manageRole = (teamMember) => {
      managingRoleFor.value = teamMember;
      updateRoleForm.role = teamMember.membership.role;
      currentlyManagingRole.value = true;
    };
    const updateRole = () => {
      updateRoleForm.put(useRoutes("team-members.update", [props.team.id, managingRoleFor.value]), {
        preserveScroll: true,
        onSuccess: () => currentlyManagingRole.value = false
      });
    };
    const confirmLeavingTeam = () => {
      confirmingLeavingTeam.value = true;
    };
    const leaveTeam = () => {
      leaveTeamForm.delete(useRoutes("team-members.destroy", [props.team.id, inertiaVue3.usePage().props.value.user]));
    };
    const confirmTeamMemberRemoval = (teamMember) => {
      teamMemberBeingRemoved.value = teamMember;
    };
    const removeTeamMember = () => {
      removeTeamMemberForm.delete(useRoutes("team-members.destroy", [props.team.id, teamMemberBeingRemoved.value]), {
        errorBag: "removeTeamMember",
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => teamMemberBeingRemoved.value = null
      });
    };
    const displayableRole = (role) => {
      return availableRoles.value.find((r2) => r2.key === role).name;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JetSectionBorder = __unplugin_components_3;
      const _component_JetFormSection = _sfc_main$o;
      const _component_JetLabel = _sfc_main$p;
      const _component_JetInput = _sfc_main$q;
      const _component_JetInput_error = _sfc_main$r;
      const _component_JetActionMessage = _sfc_main$t;
      const _component_JetButton = _sfc_main$u;
      const _component_JetActionSection = __unplugin_components_7;
      const _component_JetDialogModal = _sfc_main$y;
      const _component_JetSecondaryButton = _sfc_main$z;
      const _component_JetConfirmationModal = _sfc_main$A;
      const _component_JetDangerButton = _sfc_main$C;
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (vue.unref(userPermissions).canAddTeamMembers) {
        _push(`<div>`);
        _push(serverRenderer.ssrRenderComponent(_component_JetSectionBorder, null, null, _parent));
        _push(serverRenderer.ssrRenderComponent(_component_JetFormSection, null, {
          title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Add Team Member"))}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(_ctx.__("Add Team Member")), 1)
              ];
            }
          }),
          description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Add a new team member to your team, allowing them to collaborate with you."))}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(_ctx.__("Add a new team member to your team, allowing them to collaborate with you.")), 1)
              ];
            }
          }),
          form: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="col-span-6"${_scopeId}><div class="max-w-xl text-sm text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Please provide the email address of the person you would like to add to this team."))}</div></div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
                for: "email",
                value: "Email"
              }, null, _parent2, _scopeId));
              _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
                id: "email",
                type: "email",
                class: "block w-full mt-1",
                modelValue: vue.unref(addTeamMemberForm).email,
                "onUpdate:modelValue": ($event) => vue.unref(addTeamMemberForm).email = $event
              }, null, _parent2, _scopeId));
              _push2(serverRenderer.ssrRenderComponent(_component_JetInput_error, {
                message: vue.unref(addTeamMemberForm).errors.email,
                class: "mt-2"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (vue.unref(availableRoles).length > 0) {
                _push2(`<div class="col-span-6 lg:col-span-4"${_scopeId}>`);
                _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
                  for: "roles",
                  value: "Role"
                }, null, _parent2, _scopeId));
                _push2(serverRenderer.ssrRenderComponent(_component_JetInput_error, {
                  message: vue.unref(addTeamMemberForm).errors.role,
                  class: "mt-2"
                }, null, _parent2, _scopeId));
                _push2(`<div class="relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(vue.unref(availableRoles), (role, i2) => {
                  _push2(`<button type="button" class="${serverRenderer.ssrRenderClass([{
                    "border-t border-gray-200 rounded-t-none": i2 > 0,
                    "rounded-b-none": i2 != Object.keys(vue.unref(availableRoles)).length - 1
                  }, "relative inline-flex w-full px-4 py-3 rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"])}"${_scopeId}><div class="${serverRenderer.ssrRenderClass({ "opacity-50": vue.unref(addTeamMemberForm).role && vue.unref(addTeamMemberForm).role != role.key })}"${_scopeId}><div class="flex items-center"${_scopeId}><div class="${serverRenderer.ssrRenderClass([{ "font-semibold": vue.unref(addTeamMemberForm).role == role.key }, "text-sm text-gray-600"])}"${_scopeId}>${serverRenderer.ssrInterpolate(role.name)}</div>`);
                  if (vue.unref(addTeamMemberForm).role == role.key) {
                    _push2(`<svg class="w-5 h-5 ml-2 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><div class="mt-2 text-xs text-left text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(role.description)}</div></div></button>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                vue.createVNode("div", { class: "col-span-6" }, [
                  vue.createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, vue.toDisplayString(_ctx.__("Please provide the email address of the person you would like to add to this team.")), 1)
                ]),
                vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                  vue.createVNode(_component_JetLabel, {
                    for: "email",
                    value: "Email"
                  }),
                  vue.createVNode(_component_JetInput, {
                    id: "email",
                    type: "email",
                    class: "block w-full mt-1",
                    modelValue: vue.unref(addTeamMemberForm).email,
                    "onUpdate:modelValue": ($event) => vue.unref(addTeamMemberForm).email = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  vue.createVNode(_component_JetInput_error, {
                    message: vue.unref(addTeamMemberForm).errors.email,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                vue.unref(availableRoles).length > 0 ? (vue.openBlock(), vue.createBlock("div", {
                  key: 0,
                  class: "col-span-6 lg:col-span-4"
                }, [
                  vue.createVNode(_component_JetLabel, {
                    for: "roles",
                    value: "Role"
                  }),
                  vue.createVNode(_component_JetInput_error, {
                    message: vue.unref(addTeamMemberForm).errors.role,
                    class: "mt-2"
                  }, null, 8, ["message"]),
                  vue.createVNode("div", { class: "relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer" }, [
                    (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(availableRoles), (role, i2) => {
                      return vue.openBlock(), vue.createBlock("button", {
                        type: "button",
                        class: ["relative inline-flex w-full px-4 py-3 rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200", {
                          "border-t border-gray-200 rounded-t-none": i2 > 0,
                          "rounded-b-none": i2 != Object.keys(vue.unref(availableRoles)).length - 1
                        }],
                        onClick: ($event) => vue.unref(addTeamMemberForm).role = role.key,
                        key: role.key
                      }, [
                        vue.createVNode("div", {
                          class: { "opacity-50": vue.unref(addTeamMemberForm).role && vue.unref(addTeamMemberForm).role != role.key }
                        }, [
                          vue.createVNode("div", { class: "flex items-center" }, [
                            vue.createVNode("div", {
                              class: ["text-sm text-gray-600", { "font-semibold": vue.unref(addTeamMemberForm).role == role.key }]
                            }, vue.toDisplayString(role.name), 3),
                            vue.unref(addTeamMemberForm).role == role.key ? (vue.openBlock(), vue.createBlock("svg", {
                              key: 0,
                              class: "w-5 h-5 ml-2 text-green-400",
                              fill: "none",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              vue.createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                            ])) : vue.createCommentVNode("", true)
                          ]),
                          vue.createVNode("div", { class: "mt-2 text-xs text-left text-gray-600" }, vue.toDisplayString(role.description), 1)
                        ], 2)
                      ], 10, ["onClick"]);
                    }), 128))
                  ])
                ])) : vue.createCommentVNode("", true)
              ];
            }
          }),
          actions: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer.ssrRenderComponent(_component_JetActionMessage, {
                on: vue.unref(addTeamMemberForm).recentlySuccessful,
                class: "mr-3"
              }, {
                default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Added"))}. `);
                  } else {
                    return [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Added")) + ". ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
                class: { "opacity-25": vue.unref(addTeamMemberForm).processing },
                disabled: vue.unref(addTeamMemberForm).processing
              }, {
                default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Add"))}`);
                  } else {
                    return [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Add")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                vue.createVNode(_component_JetActionMessage, {
                  on: vue.unref(addTeamMemberForm).recentlySuccessful,
                  class: "mr-3"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Added")) + ". ", 1)
                  ]),
                  _: 1
                }, 8, ["on"]),
                vue.createVNode(_component_JetButton, {
                  class: { "opacity-25": vue.unref(addTeamMemberForm).processing },
                  disabled: vue.unref(addTeamMemberForm).processing
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Add")), 1)
                  ]),
                  _: 1
                }, 8, ["class", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(team).team_invitations.length > 0 && vue.unref(userPermissions).canAddTeamMembers) {
        _push(`<div>`);
        _push(serverRenderer.ssrRenderComponent(_component_JetSectionBorder, null, null, _parent));
        _push(serverRenderer.ssrRenderComponent(_component_JetActionSection, { class: "mt-10 sm:mt-0" }, {
          title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Pending Team Invitations"))}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(_ctx.__("Pending Team Invitations")), 1)
              ];
            }
          }),
          description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(_ctx.__("These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation."))}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(_ctx.__("These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation.")), 1)
              ];
            }
          }),
          content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(team).team_invitations, (invitation) => {
                _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(invitation.email)}</div><div class="flex items-center"${_scopeId}>`);
                if (vue.unref(userPermissions).canRemoveTeamMembers) {
                  _push2(`<button class="ml-6 text-sm text-red-500 cursor-pointer focus:outline-none"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Cancel"))}</button>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "space-y-6" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(team).team_invitations, (invitation) => {
                    return vue.openBlock(), vue.createBlock("div", {
                      class: "flex items-center justify-between",
                      key: invitation.id
                    }, [
                      vue.createVNode("div", { class: "text-gray-600" }, vue.toDisplayString(invitation.email), 1),
                      vue.createVNode("div", { class: "flex items-center" }, [
                        vue.unref(userPermissions).canRemoveTeamMembers ? (vue.openBlock(), vue.createBlock("button", {
                          key: 0,
                          class: "ml-6 text-sm text-red-500 cursor-pointer focus:outline-none",
                          onClick: ($event) => cancelTeamInvitation(invitation)
                        }, vue.toDisplayString(_ctx.__("Cancel")), 9, ["onClick"])) : vue.createCommentVNode("", true)
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(team).users.length > 0) {
        _push(`<div>`);
        _push(serverRenderer.ssrRenderComponent(_component_JetSectionBorder, null, null, _parent));
        _push(serverRenderer.ssrRenderComponent(_component_JetActionSection, { class: "mt-10 sm:mt-0" }, {
          title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Team Members"))}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(_ctx.__("Team Members")), 1)
              ];
            }
          }),
          description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(_ctx.__("All of the people that are part of this team."))}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(_ctx.__("All of the people that are part of this team.")), 1)
              ];
            }
          }),
          content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(team).users, (user) => {
                _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="flex items-center"${_scopeId}><img class="w-8 h-8 rounded-full"${serverRenderer.ssrRenderAttr("src", user.profile_photo_url)}${serverRenderer.ssrRenderAttr("alt", user.name)}${_scopeId}><div class="ml-4"${_scopeId}>${serverRenderer.ssrInterpolate(user.name)}</div></div><div class="flex items-center"${_scopeId}>`);
                if (vue.unref(userPermissions).canAddTeamMembers && vue.unref(availableRoles).length) {
                  _push2(`<button class="ml-2 text-sm text-gray-400 underline"${_scopeId}>${serverRenderer.ssrInterpolate(displayableRole(user.membership.role))}</button>`);
                } else if (vue.unref(availableRoles).length) {
                  _push2(`<div class="ml-2 text-sm text-gray-400"${_scopeId}>${serverRenderer.ssrInterpolate(displayableRole(user.membership.role))}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.$page.props.user.id === user.id) {
                  _push2(`<button class="ml-6 text-sm text-red-500 cursor-pointer"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Leave"))}</button>`);
                } else {
                  _push2(`<!---->`);
                }
                if (vue.unref(userPermissions).canRemoveTeamMembers) {
                  _push2(`<button class="ml-6 text-sm text-red-500 cursor-pointer"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Remove"))}</button>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "space-y-6" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(team).users, (user) => {
                    return vue.openBlock(), vue.createBlock("div", {
                      class: "flex items-center justify-between",
                      key: user.id
                    }, [
                      vue.createVNode("div", { class: "flex items-center" }, [
                        vue.createVNode("img", {
                          class: "w-8 h-8 rounded-full",
                          src: user.profile_photo_url,
                          alt: user.name
                        }, null, 8, ["src", "alt"]),
                        vue.createVNode("div", { class: "ml-4" }, vue.toDisplayString(user.name), 1)
                      ]),
                      vue.createVNode("div", { class: "flex items-center" }, [
                        vue.unref(userPermissions).canAddTeamMembers && vue.unref(availableRoles).length ? (vue.openBlock(), vue.createBlock("button", {
                          key: 0,
                          class: "ml-2 text-sm text-gray-400 underline",
                          onClick: ($event) => manageRole(user)
                        }, vue.toDisplayString(displayableRole(user.membership.role)), 9, ["onClick"])) : vue.unref(availableRoles).length ? (vue.openBlock(), vue.createBlock("div", {
                          key: 1,
                          class: "ml-2 text-sm text-gray-400"
                        }, vue.toDisplayString(displayableRole(user.membership.role)), 1)) : vue.createCommentVNode("", true),
                        _ctx.$page.props.user.id === user.id ? (vue.openBlock(), vue.createBlock("button", {
                          key: 2,
                          class: "ml-6 text-sm text-red-500 cursor-pointer",
                          onClick: confirmLeavingTeam
                        }, vue.toDisplayString(_ctx.__("Leave")), 1)) : vue.createCommentVNode("", true),
                        vue.unref(userPermissions).canRemoveTeamMembers ? (vue.openBlock(), vue.createBlock("button", {
                          key: 3,
                          class: "ml-6 text-sm text-red-500 cursor-pointer",
                          onClick: ($event) => confirmTeamMemberRemoval(user)
                        }, vue.toDisplayString(_ctx.__("Remove")), 9, ["onClick"])) : vue.createCommentVNode("", true)
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_JetDialogModal, { show: currentlyManagingRole.value }, {
        title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Manage Role"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Manage Role")), 1)
            ];
          }
        }),
        content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (managingRoleFor.value) {
              _push2(`<div${_scopeId}><div class="relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(availableRoles), (role, i2) => {
                _push2(`<button type="button" class="${serverRenderer.ssrRenderClass([{
                  "border-t border-gray-200 rounded-t-none": i2 > 0,
                  "rounded-b-none": i2 !== Object.keys(vue.unref(availableRoles)).length - 1
                }, "relative inline-flex w-full px-4 py-3 rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"])}"${_scopeId}><div class="${serverRenderer.ssrRenderClass({ "opacity-50": vue.unref(updateRoleForm).role && vue.unref(updateRoleForm).role !== role.key })}"${_scopeId}><div class="flex items-center"${_scopeId}><div class="${serverRenderer.ssrRenderClass([{ "font-semibold": vue.unref(updateRoleForm).role === role.key }, "text-sm text-gray-600"])}"${_scopeId}>${serverRenderer.ssrInterpolate(role.name)}</div>`);
                if (vue.unref(updateRoleForm).role === role.key) {
                  _push2(`<svg class="w-5 h-5 ml-2 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="mt-2 text-xs text-gray-600"${_scopeId}>${serverRenderer.ssrInterpolate(role.description)}</div></div></button>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              managingRoleFor.value ? (vue.openBlock(), vue.createBlock("div", { key: 0 }, [
                vue.createVNode("div", { class: "relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(availableRoles), (role, i2) => {
                    return vue.openBlock(), vue.createBlock("button", {
                      type: "button",
                      class: ["relative inline-flex w-full px-4 py-3 rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200", {
                        "border-t border-gray-200 rounded-t-none": i2 > 0,
                        "rounded-b-none": i2 !== Object.keys(vue.unref(availableRoles)).length - 1
                      }],
                      onClick: ($event) => vue.unref(updateRoleForm).role = role.key,
                      key: role.key
                    }, [
                      vue.createVNode("div", {
                        class: { "opacity-50": vue.unref(updateRoleForm).role && vue.unref(updateRoleForm).role !== role.key }
                      }, [
                        vue.createVNode("div", { class: "flex items-center" }, [
                          vue.createVNode("div", {
                            class: ["text-sm text-gray-600", { "font-semibold": vue.unref(updateRoleForm).role === role.key }]
                          }, vue.toDisplayString(role.name), 3),
                          vue.unref(updateRoleForm).role === role.key ? (vue.openBlock(), vue.createBlock("svg", {
                            key: 0,
                            class: "w-5 h-5 ml-2 text-green-400",
                            fill: "none",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            vue.createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                          ])) : vue.createCommentVNode("", true)
                        ]),
                        vue.createVNode("div", { class: "mt-2 text-xs text-gray-600" }, vue.toDisplayString(role.description), 1)
                      ], 2)
                    ], 10, ["onClick"]);
                  }), 128))
                ])
              ])) : vue.createCommentVNode("", true)
            ];
          }
        }),
        footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, null, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Cancel"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
              class: ["ml-2", { "opacity-25": vue.unref(updateRoleForm).processing }],
              disabled: vue.unref(updateRoleForm).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Save"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Save")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetSecondaryButton, {
                onClick: ($event) => currentlyManagingRole.value = false
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              vue.createVNode(_component_JetButton, {
                class: ["ml-2", { "opacity-25": vue.unref(updateRoleForm).processing }],
                onClick: updateRole,
                disabled: vue.unref(updateRoleForm).processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Save")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_JetConfirmationModal, { show: confirmingLeavingTeam.value }, {
        title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Leave Team"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Leave Team")), 1)
            ];
          }
        }),
        content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Are you sure you would like to leave this team?"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Are you sure you would like to leave this team?")), 1)
            ];
          }
        }),
        footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, null, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Cancel"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetDangerButton, {
              class: ["ml-2", { "opacity-25": vue.unref(leaveTeamForm).processing }],
              disabled: vue.unref(leaveTeamForm).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Leave"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Leave")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetSecondaryButton, {
                onClick: ($event) => confirmingLeavingTeam.value = false
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              vue.createVNode(_component_JetDangerButton, {
                class: ["ml-2", { "opacity-25": vue.unref(leaveTeamForm).processing }],
                onClick: leaveTeam,
                disabled: vue.unref(leaveTeamForm).processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Leave")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_JetConfirmationModal, { show: teamMemberBeingRemoved.value }, {
        title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Remove Team Member"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Remove Team Member")), 1)
            ];
          }
        }),
        content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Are you sure you would like to remove this person from the team?"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Are you sure you would like to remove this person from the team?")), 1)
            ];
          }
        }),
        footer: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_JetSecondaryButton, null, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Cancel"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetDangerButton, {
              class: ["ml-2", { "opacity-25": vue.unref(removeTeamMemberForm).processing }],
              disabled: vue.unref(removeTeamMemberForm).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Remove"))}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Remove")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_JetSecondaryButton, {
                onClick: ($event) => teamMemberBeingRemoved.value = null
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              vue.createVNode(_component_JetDangerButton, {
                class: ["ml-2", { "opacity-25": vue.unref(removeTeamMemberForm).processing }],
                onClick: removeTeamMember,
                disabled: vue.unref(removeTeamMemberForm).processing
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.__("Remove")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Partials/Teams/TeamMemberManager.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __ssrInlineRender: true,
  props: ["team", "permissions"],
  setup(__props) {
    const props = __props;
    const { team, permissions } = vue.toRefs(props);
    const form = inertiaVue3.useForm({
      name: props.team.name
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JetFormSection = _sfc_main$o;
      const _component_JetLabel = _sfc_main$p;
      const _component_JetInput = _sfc_main$q;
      const _component_JetInput_error = _sfc_main$r;
      const _component_JetActionMessage = _sfc_main$t;
      const _component_JetButton = _sfc_main$u;
      _push(serverRenderer.ssrRenderComponent(_component_JetFormSection, _attrs, vue.createSlots({
        title: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("Team Name"))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("Team Name")), 1)
            ];
          }
        }),
        description: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(_ctx.__("The team's name and owner information."))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(_ctx.__("The team's name and owner information.")), 1)
            ];
          }
        }),
        form: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              value: _ctx.__("Team Owner")
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center mt-2"${_scopeId}><img class="object-cover w-12 h-12 rounded-full"${serverRenderer.ssrRenderAttr("src", vue.unref(team).owner.profile_photo_url)}${serverRenderer.ssrRenderAttr("alt", vue.unref(team).owner.name)}${_scopeId}><div class="ml-4 leading-tight"${_scopeId}><div${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(team).owner.name)}</div><div class="text-sm text-gray-700"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(team).owner.email)}</div></div></div></div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_JetLabel, {
              for: "name",
              value: _ctx.__("Team Name")
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput, {
              id: "name",
              type: "text",
              class: "block w-full mt-1",
              modelValue: vue.unref(form).name,
              "onUpdate:modelValue": ($event) => vue.unref(form).name = $event,
              disabled: !vue.unref(permissions).canUpdateTeam
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_JetInput_error, {
              message: vue.unref(form).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "col-span-6" }, [
                vue.createVNode(_component_JetLabel, {
                  value: _ctx.__("Team Owner")
                }, null, 8, ["value"]),
                vue.createVNode("div", { class: "flex items-center mt-2" }, [
                  vue.createVNode("img", {
                    class: "object-cover w-12 h-12 rounded-full",
                    src: vue.unref(team).owner.profile_photo_url,
                    alt: vue.unref(team).owner.name
                  }, null, 8, ["src", "alt"]),
                  vue.createVNode("div", { class: "ml-4 leading-tight" }, [
                    vue.createVNode("div", null, vue.toDisplayString(vue.unref(team).owner.name), 1),
                    vue.createVNode("div", { class: "text-sm text-gray-700" }, vue.toDisplayString(vue.unref(team).owner.email), 1)
                  ])
                ])
              ]),
              vue.createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                vue.createVNode(_component_JetLabel, {
                  for: "name",
                  value: _ctx.__("Team Name")
                }, null, 8, ["value"]),
                vue.createVNode(_component_JetInput, {
                  id: "name",
                  type: "text",
                  class: "block w-full mt-1",
                  modelValue: vue.unref(form).name,
                  "onUpdate:modelValue": ($event) => vue.unref(form).name = $event,
                  disabled: !vue.unref(permissions).canUpdateTeam
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                vue.createVNode(_component_JetInput_error, {
                  message: vue.unref(form).errors.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        _: 2
      }, [
        vue.unref(permissions).canUpdateTeam ? {
          name: "actions",
          fn: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer.ssrRenderComponent(_component_JetActionMessage, {
                on: vue.unref(form).recentlySuccessful,
                class: "mr-3"
              }, {
                default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Saved."))}`);
                  } else {
                    return [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Saved.")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(serverRenderer.ssrRenderComponent(_component_JetButton, {
                class: { "opacity-25": vue.unref(form).processing },
                disabled: vue.unref(form).processing
              }, {
                default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${serverRenderer.ssrInterpolate(_ctx.__("Save"))}`);
                  } else {
                    return [
                      vue.createTextVNode(vue.toDisplayString(_ctx.__("Save")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                vue.createVNode(_component_JetActionMessage, {
                  on: vue.unref(form).recentlySuccessful,
                  class: "mr-3"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Saved.")), 1)
                  ]),
                  _: 1
                }, 8, ["on"]),
                vue.createVNode(_component_JetButton, {
                  class: { "opacity-25": vue.unref(form).processing },
                  disabled: vue.unref(form).processing
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(_ctx.__("Save")), 1)
                  ]),
                  _: 1
                }, 8, ["class", "disabled"])
              ];
            }
          })
        } : void 0
      ]), _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Components/Partials/Teams/UpdateTeamNameForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __ssrInlineRender: true,
  props: ["team", "availableRoles", "permissions"],
  setup(__props) {
    const props = __props;
    const { team, availableRoles, permissions } = vue.toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainLayout = _sfc_main$I;
      const _component_UpdateTeamNameForm = _sfc_main$1;
      const _component_TeamMemberManager = _sfc_main$2;
      const _component_JetSectionBorder = __unplugin_components_3;
      const _component_DeleteTeamForm = _sfc_main$3;
      _push(serverRenderer.ssrRenderComponent(_component_MainLayout, vue.mergeProps({
        title: _ctx.__("Team Settings")
      }, _attrs), {
        header: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.__("Team Settings"))}</h2>`);
          } else {
            return [
              vue.createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, vue.toDisplayString(_ctx.__("Team Settings")), 1)
            ];
          }
        }),
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_UpdateTeamNameForm, {
              team: vue.unref(team),
              permissions: vue.unref(permissions)
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_TeamMemberManager, {
              class: "mt-10 sm:mt-0",
              team: vue.unref(team),
              "available-roles": vue.unref(availableRoles),
              "user-permissions": vue.unref(permissions)
            }, null, _parent2, _scopeId));
            if (vue.unref(permissions).canDeleteTeam && !vue.unref(team).personal_team) {
              _push2(`<!--[-->`);
              _push2(serverRenderer.ssrRenderComponent(_component_JetSectionBorder, null, null, _parent2, _scopeId));
              _push2(serverRenderer.ssrRenderComponent(_component_DeleteTeamForm, {
                class: "mt-10 sm:mt-0",
                team: vue.unref(team)
              }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              vue.createVNode("div", null, [
                vue.createVNode("div", { class: "py-10 mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  vue.createVNode(_component_UpdateTeamNameForm, {
                    team: vue.unref(team),
                    permissions: vue.unref(permissions)
                  }, null, 8, ["team", "permissions"]),
                  vue.createVNode(_component_TeamMemberManager, {
                    class: "mt-10 sm:mt-0",
                    team: vue.unref(team),
                    "available-roles": vue.unref(availableRoles),
                    "user-permissions": vue.unref(permissions)
                  }, null, 8, ["team", "available-roles", "user-permissions"]),
                  vue.unref(permissions).canDeleteTeam && !vue.unref(team).personal_team ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                    vue.createVNode(_component_JetSectionBorder),
                    vue.createVNode(_component_DeleteTeamForm, {
                      class: "mt-10 sm:mt-0",
                      team: vue.unref(team)
                    }, null, 8, ["team"])
                  ], 64)) : vue.createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("resources/js/Pages/Teams/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var __glob_7_14 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
var core = {
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
const jetstreamssr = {
  install(app) {
    axios__default["default"].defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    axios__default["default"].defaults.withCredentials = true;
    Object.defineProperty(app.config.globalProperties, "emitter", { get: () => mitt__default["default"]() });
    Object.defineProperty(app.config.globalProperties, "dayjs", { get: () => dayjs__default["default"] });
    Object.defineProperty(app.config.globalProperties, "axios", { get: () => axios__default["default"] });
    Object.defineProperty(app.config.globalProperties, "_", { get: () => ___default["default"] });
    const store = vuex.createStore({
      modules: { core }
    });
    app.use(store);
    app.component("Head", inertiaVue3.Head);
    app.component("Link", inertiaVue3.Link);
  }
};
const pages = { "./Pages/Dashboard.vue": __glob_7_0, "./Pages/PrivacyPolicy.vue": __glob_7_1, "./Pages/TermsOfService.vue": __glob_7_2, "./Pages/Welcome.vue": __glob_7_3, "./Pages/API/Index.vue": __glob_7_4, "./Pages/Auth/ConfirmPassword.vue": __glob_7_5, "./Pages/Auth/ForgotPassword.vue": __glob_7_6, "./Pages/Auth/Login.vue": __glob_7_7, "./Pages/Auth/Register.vue": __glob_7_8, "./Pages/Auth/ResetPassword.vue": __glob_7_9, "./Pages/Auth/TwoFactorChallenge.vue": __glob_7_10, "./Pages/Auth/VerifyEmail.vue": __glob_7_11, "./Pages/Profile/Show.vue": __glob_7_12, "./Pages/Teams/Create.vue": __glob_7_13, "./Pages/Teams/Show.vue": __glob_7_14 };
createServer__default["default"]((page) => inertiaVue3.createInertiaApp({
  title: (title) => `${title} - ${process.env.VITE_APP_NAME}`,
  page,
  render: serverRenderer$1.renderToString,
  resolve: (name) => pages[`./Pages/${name}.vue`].default,
  setup({ app, props, plugin }) {
    const Ziggy2 = __spreadProps(__spreadValues({}, props.initialPage.props.ziggy), {
      location: new URL(props.initialPage.props.ziggy.url)
    });
    const Zora = __spreadValues({}, props.initialPage.props.zora);
    return vue.createSSRApp({
      render: () => vue.h(app, props)
    }).use(plugin).use(jetstreamssr).mixin({
      methods: {
        route: (name, params, absolute, config = Ziggy2) => er(name, params, absolute, config),
        __: (key, replace, config = Zora) => trans(key, replace, config),
        trans: (key, replace, config = Zora) => trans(key, replace, config)
      }
    });
  }
}));
