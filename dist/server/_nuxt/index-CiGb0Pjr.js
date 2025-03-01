import { b as script, s as script$1, c as script$2, a as script$3, u as useMarvelStore, S as SERVER } from "./server-D9oM4SQx.js";
import { resolveComponent, withCtx, createVNode, toDisplayString, useSSRContext, defineComponent } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
const _sfc_main$1 = {
  components: {
    Skeleton: script$3,
    InputText: script$2,
    Button: script$1,
    Paginator: script
  },
  data() {
    return {
      characters: [],
      error: null,
      search: "",
      loading: false,
      page: 1,
      totalRecords: null
    };
  },
  methods: {
    async getApis() {
      SERVER.getApi().then((res) => {
      }).catch((err) => {
        console.log(err);
        this.error = err;
        throw err;
      });
    },
    async getCharacters() {
      this.loading = true;
      SERVER.getCharacters(this.search, this.page).then((res) => {
        this.marvelStore.characters = res.data.data.results;
        this.characters = res.data.data.results;
        this.totalRecords = res.data.data.total;
        this.loading = false;
      }).catch((err) => {
        console.log(err);
        this.error = err;
        throw err;
      });
    },
    onPageChange(event) {
      this.page = event.page + 1;
      this.getCharacters();
    }
  },
  async mounted() {
    await this.getCharacters();
    await this.getApis();
  },
  setup() {
    const marvelStore = useMarvelStore();
    return { marvelStore };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InputText = script$2;
  const _component_Button = script$1;
  const _component_Skeleton = script$3;
  const _component_router_link = resolveComponent("router-link");
  const _component_Paginator = script;
  _push(`<!--[--><div class="w-full bg-custom-gradient mx-auto p-6 text-white"><div class="md:container md:px-8 mx-auto flex flex-wrap"><div class="bg-red-700 w-fit p-2 rounded text-white">LOGO</div><div class="w-full bg-[#2C2E30] p-4 rounded mt-3 flex flex-nowrap items-center justify-between">`);
  _push(ssrRenderComponent(_component_InputText, {
    style: { "border-radius": ".25rem" },
    type: "text",
    modelValue: $data.search,
    "onUpdate:modelValue": ($event) => $data.search = $event,
    placeholder: "Search for characters",
    class: "w-full"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Button, {
    style: { "border-radius": ".25rem", "color": "white" },
    class: "ms-4 rounded-xl",
    variant: "secondary",
    label: "Search",
    icon: "pi pi-search",
    loading: $data.loading,
    onClick: ($event) => $options.getCharacters($data.search)
  }, null, _parent));
  _push(`</div></div></div><div class="w-full bg-[#2C2E30] p-6"><div class="md:container md:px-8 mx-auto flex flex-wrap"><div class="grid grid-cols-4 gap-8 my-8">`);
  if ($data.loading) {
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
    ssrRenderList($setup.marvelStore.characters, (item) => {
      _push(ssrRenderComponent(_component_router_link, {
        to: `/characters/${item.id}`,
        class: "col-span-4 md:col-span-2 lg:col-span-1 border rounded-lg border-gray-600 overflow-hidden p-2 flex content-between flex-wrap",
        onClick: ($event) => console.log(item)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", `${item.thumbnail.path}.${item.thumbnail.extension}`)} class="object-cover w-full rounded-lg" alt=""${_scopeId}><div class="my-4 text-white"${_scopeId}>${ssrInterpolate(item.name)}</div>`);
          } else {
            return [
              createVNode("img", {
                src: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                class: "object-cover w-full rounded-lg",
                alt: ""
              }, null, 8, ["src"]),
              createVNode("div", { class: "my-4 text-white" }, toDisplayString(item.name), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
    });
    _push(`<!--]-->`);
  }
  _push(`</div><div class="w-full flex justify-center">`);
  _push(ssrRenderComponent(_component_Paginator, {
    rows: 20,
    totalRecords: $data.totalRecords,
    class: "mx-auto",
    onPage: $options.onPageChange
  }, null, _parent));
  _push(`</div></div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Characters.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  name: "index"
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Characters = __nuxt_component_0;
  _push(ssrRenderComponent(_component_Characters, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-CiGb0Pjr.js.map
