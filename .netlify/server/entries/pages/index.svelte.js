var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0cea40d0 = require("../../chunks/index-0cea40d0.js");
const extractIdFromUrl = (url) => {
  const paths = url.split("/");
  return paths[paths.length - 2];
};
const initialSearchValue = {
  count: 0,
  next: null,
  previous: null,
  results: []
};
const subscriber_queue = [];
function writable(value, start = import_index_0cea40d0.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_0cea40d0.a)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_0cea40d0.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_0cea40d0.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const PokemonList = writable(initialSearchValue);
var Modal_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".opened.svelte-11zkg3b{position:fixed;top:0;bottom:0;left:0;right:0;width:100%;background-color:rgba(0, 0, 0, 0.5)}.opened.svelte-11zkg3b>:first-child{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);animation-name:toCenter;animation-duration:1s}",
  map: null
};
const Modal = (0, import_index_0cea40d0.c)(($$result, $$props, $$bindings, slots) => {
  let { opened } = $$props;
  if ($$props.opened === void 0 && $$bindings.opened && opened !== void 0)
    $$bindings.opened(opened);
  $$result.css.add(css$3);
  return `<div class="${(0, import_index_0cea40d0.e)((0, import_index_0cea40d0.b)(opened ? "opened" : "")) + " svelte-11zkg3b"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const Src = (0, import_index_0cea40d0.c)(($$result, $$props, $$bindings, slots) => {
  let { exclude = [] } = $$props;
  let child;
  (0, import_index_0cea40d0.d)();
  if ($$props.exclude === void 0 && $$bindings.exclude && exclude !== void 0)
    $$bindings.exclude(exclude);
  return `
<div${(0, import_index_0cea40d0.f)("this", child, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
var PokemonCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".pokemonCard.svelte-144ijde.svelte-144ijde{max-width:35rem;background-color:hsl(0deg, 0%, 20%);display:flex;flex-direction:column;align-items:center;gap:1rem;padding:1.5rem}.pokemonCard.svelte-144ijde h2.svelte-144ijde{font-weight:300;color:hsl(0deg, 0%, 93%)}",
  map: null
};
const PokemonCard = (0, import_index_0cea40d0.c)(($$result, $$props, $$bindings, slots) => {
  let { result } = $$props;
  let opened = false;
  if ($$props.result === void 0 && $$bindings.result && result !== void 0)
    $$bindings.result(result);
  $$result.css.add(css$2);
  return `${``}

${(0, import_index_0cea40d0.v)(Modal, "Modal").$$render($$result, { opened }, {}, {
    default: () => {
      return `${(0, import_index_0cea40d0.v)(Src, "ClickOutside").$$render($$result, {}, {}, {
        default: () => {
          return `<div${(0, import_index_0cea40d0.f)("id", extractIdFromUrl(result.url), 0)} class="${"pokemonCard svelte-144ijde"}" tabindex="${"0"}"><img${(0, import_index_0cea40d0.f)("src", result.imageUrl, 0)} alt="${"pokemon"}">
			<h2 class="${"svelte-144ijde"}">${(0, import_index_0cea40d0.e)(result.name)}</h2>

			${``}</div>`;
        }
      })}`;
    }
  })}`;
});
var Grid_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".grid.svelte-yrqa8z{display:grid;grid-template-columns:repeat(auto-fit, minmax(25rem, 1fr));gap:2rem}.grid.colSize-sm.svelte-yrqa8z{grid-template-columns:repeat(auto-fit, minmax(14rem, 1fr))}.grid.colSize-md.svelte-yrqa8z{grid-template-columns:repeat(auto-fit, minmax(18rem, 1fr))}.grid.colSize-lg.svelte-yrqa8z{grid-template-columns:repeat(auto-fit, minmax(25rem, 1fr))}",
  map: null
};
const Grid = (0, import_index_0cea40d0.c)(($$result, $$props, $$bindings, slots) => {
  let { colSize = "md" } = $$props;
  if ($$props.colSize === void 0 && $$bindings.colSize && colSize !== void 0)
    $$bindings.colSize(colSize);
  $$result.css.add(css$1);
  return `<div class="${"grid colSize-" + (0, import_index_0cea40d0.e)(colSize) + " svelte-yrqa8z"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".gridContainer.svelte-1pfmmwz{padding:3rem}",
  map: null
};
const Routes = (0, import_index_0cea40d0.c)(($$result, $$props, $$bindings, slots) => {
  let $PokemonList, $$unsubscribe_PokemonList;
  $$unsubscribe_PokemonList = (0, import_index_0cea40d0.g)(PokemonList, (value) => $PokemonList = value);
  $$result.css.add(css);
  $$unsubscribe_PokemonList();
  return `


<div class="${"gridContainer svelte-1pfmmwz"}">${(0, import_index_0cea40d0.v)(Grid, "Grid").$$render($$result, { colSize: "sm" }, {}, {
    default: () => {
      return `${(0, import_index_0cea40d0.h)($PokemonList.results, (result) => {
        return `${(0, import_index_0cea40d0.v)(PokemonCard, "PokemonCard").$$render($$result, { result }, {}, {})}`;
      })}`;
    }
  })}</div>


`;
});
