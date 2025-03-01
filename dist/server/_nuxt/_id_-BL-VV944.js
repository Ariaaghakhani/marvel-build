import { s as script, a as script$1, u as useMarvelStore, S as SERVER, b as script$2 } from "./server-D9oM4SQx.js";
import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "@primeuix/utils/dom";
import "@primeuix/styles/paginator";
import "@primeuix/utils/object";
import "@primeuix/utils/zindex";
import "@primeuix/utils";
import "@primeuix/utils/uuid";
import "@primeuix/styles/iconfield";
import "@primeuix/styles/inputtext";
import "@primeuix/utils/eventbus";
import "@primeuix/styles/virtualscroller";
import "@primeuix/styles/select";
import "@primeuix/styles/inputnumber";
import "@primeuix/styles/badge";
import "@primeuix/styled";
import "@primeuix/styles/ripple";
import "@primeuix/styles/button";
import "@primeuix/styles/skeleton";
import "pinia";
import "axios";
import "md5";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "defu";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "destr";
import "klona";
import "@primeuix/styles/base";
const _sfc_main = defineComponent({
  components: {
    Skeleton: script$1,
    Button: script
  },
  data() {
    return {
      id: this.$route.params.id,
      character: {},
      comics: {},
      loading: false,
      page: 1,
      totalComics: null
    };
  },
  mounted() {
    this.getCharacter();
  },
  methods: {
    async getCharacter() {
      this.loading = true;
      SERVER.getCharacter(Number(this.$route.params.id)).then((res) => {
        this.character = res.data.data.results[0];
        this.comics = this.character.comics.items;
        this.loading = false;
        this.totalComics = this.character.comics.available;
      }).catch((err) => {
        this.loading = false;
        console.log(err);
        throw err;
      });
    }
  },
  setup() {
    const marvelStore = useMarvelStore();
    return { marvelStore };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const _component_router_link = resolveComponent("router-link");
  const _component_Skeleton = script$1;
  const _component_Button = script;
  const _component_Paginator = script$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-custom-gradient mx-auto p-6 text-white" }, _attrs))}><div class="md:container md:px-8 mx-auto flex flex-wrap">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/",
    class: "bg-red-700 w-fit p-2 rounded text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`LOGO`);
      } else {
        return [
          createTextVNode("LOGO")
        ];
      }
    }),
    _: 1
  }, _parent));
  if (_ctx.loading) {
    _push(`<div class="w-full overflow-hidden py-4 rounded my-8 flex flex-wrap md:flex-nowrap items-center justify-start"><div class="hidden md:block rounded">`);
    _push(ssrRenderComponent(_component_Skeleton, {
      borderRadius: "0.25rem",
      class: "hidden md:block rounded",
      size: "15rem"
    }, null, _parent));
    _push(`</div><div class="block md:hidden rounded">`);
    _push(ssrRenderComponent(_component_Skeleton, {
      borderRadius: "0.25rem",
      class: "block md:hidden rounded",
      size: "11.25rem"
    }, null, _parent));
    _push(`</div><div class="flex flex-wrap md:ms-8 mt-8 md:mt-0 content-start w-fit"><div class="w-full">`);
    _push(ssrRenderComponent(_component_Skeleton, { width: "5rem" }, null, _parent));
    _push(`</div><div class="w-full mt-8">`);
    _push(ssrRenderComponent(_component_Skeleton, { width: "18rem" }, null, _parent));
    _push(`</div><div class="w-full mt-2">`);
    _push(ssrRenderComponent(_component_Skeleton, { width: "18rem" }, null, _parent));
    _push(`</div><div class="w-full mt-2">`);
    _push(ssrRenderComponent(_component_Skeleton, { width: "12rem" }, null, _parent));
    _push(`</div><div class="w-full flex mt-8">`);
    _push(ssrRenderComponent(_component_Skeleton, {
      height: "2rem",
      width: "8rem"
    }, null, _parent));
    _push(ssrRenderComponent(_component_Skeleton, {
      class: "ms-4",
      height: "2rem",
      width: "8rem"
    }, null, _parent));
    _push(`</div></div></div>`);
  } else {
    _push(`<div class="w-full py-4 rounded my-8 flex flex-wrap md:flex-nowrap items-center justify-between"><img${ssrRenderAttr("src", `${(_b = (_a = _ctx.character) == null ? void 0 : _a.thumbnail) == null ? void 0 : _b.path}.${(_d = (_c = _ctx.character) == null ? void 0 : _c.thumbnail) == null ? void 0 : _d.extension}`)} alt="" class="hidden md:block rounded" height="240" width="240"><img${ssrRenderAttr("src", `${(_f = (_e = _ctx.character) == null ? void 0 : _e.thumbnail) == null ? void 0 : _f.path}.${(_h = (_g = _ctx.character) == null ? void 0 : _g.thumbnail) == null ? void 0 : _h.extension}`)} alt="" class="block md:hidden rounded" height="180" width="180"><div class="w-full flex flex-wrap md:ms-8 mt-8 md:mt-0 content-start"><h1 class="text-3xl w-full">${ssrInterpolate((_i = _ctx.character) == null ? void 0 : _i.name)}</h1><h6 class="text-md my-8">${ssrInterpolate((_j = _ctx.character) == null ? void 0 : _j.description)}</h6><div class="flex mt-4 w-full">`);
    _push(ssrRenderComponent(_component_Button, {
      class: "me-4",
      icon: "pi pi-arrow-up-right",
      label: "Details",
      outlined: "",
      severity: "contrast",
      style: { "border-radius": ".5rem" }
    }, null, _parent));
    _push(ssrRenderComponent(_component_Button, {
      class: "me-4",
      icon: "pi pi-arrow-up-right",
      label: "Wiki",
      outlined: "",
      severity: "contrast",
      style: { "border-radius": ".5rem" }
    }, null, _parent));
    _push(ssrRenderComponent(_component_Button, {
      icon: "pi pi-arrow-up-right",
      label: "Comiclink",
      outlined: "",
      severity: "contrast",
      style: { "border-radius": ".5rem" }
    }, null, _parent));
    _push(`</div></div></div>`);
  }
  _push(`</div><div class="w-full bg-[#2C2E30] p-6"><div class="md:container md:px-8 mx-auto flex flex-wrap"><div class="grid grid-cols-4 gap-8 my-8">`);
  if (_ctx.loading) {
    _push(`<!--[-->`);
    ssrRenderList(20, (n) => {
      _push(`<div class="col-span-4 md:col-span-2 lg:col-span-1 overflow-hidden rounded-lg">`);
      _push(ssrRenderComponent(_component_Skeleton, {
        height: "20rem",
        width: "17rem"
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.comics, (item, index) => {
      _push(`<div class="col-span-4 md:col-span-2 lg:col-span-1 border rounded-lg border-gray-600 overflow-hidden p-2 flex content-between flex-wrap"><div class="my-4 text-white">${ssrInterpolate(item.name)}</div></div>`);
    });
    _push(`<!--]-->`);
  }
  _push(`</div><div class="w-full flex justify-center">`);
  if (_ctx.totalComics > 20) {
    _push(ssrRenderComponent(_component_Paginator, {
      modelValue: _ctx.page,
      "onUpdate:modelValue": ($event) => _ctx.page = $event,
      rows: 20,
      totalRecords: _ctx.totalComics,
      class: "mx-auto"
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/characters/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-BL-VV944.js.map
