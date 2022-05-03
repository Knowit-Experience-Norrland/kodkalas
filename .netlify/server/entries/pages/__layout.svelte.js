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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0cea40d0 = require("../../chunks/index-0cea40d0.js");
var Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-f38z04.svelte-f38z04{width:min(90rem, 100% - 6rem);margin-inline:auto;display:flex;justify-content:space-between;align-items:center;padding:1.5rem 3rem;background-color:hsl(0deg, 0%, 20%)}header.svelte-f38z04 .logoLink.svelte-f38z04{height:5rem}header.svelte-f38z04 .logoLink img.svelte-f38z04{aspect-ratio:217/80;height:100%}header.svelte-f38z04 ul.svelte-f38z04{list-style-type:none;display:flex;gap:1rem}header.svelte-f38z04 ul li a.svelte-f38z04{font-size:1.125rem;color:hsl(48deg, 100%, 51%)}",
  map: null
};
const Header = (0, import_index_0cea40d0.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="${"svelte-f38z04"}"><a class="${"logoLink svelte-f38z04"}" href="${"/"}"><img src="${"/logo.svg"}" alt="${"logo - back to start"}" class="${"svelte-f38z04"}"></a>
	<ul class="${"svelte-f38z04"}"><li><a href="${"/nav1"}" class="${"svelte-f38z04"}">Nav item 1</a></li>
		<li><a href="${"/nav2"}" class="${"svelte-f38z04"}">Nav item 2</a></li>
		<li><a href="${"/nav3"}" class="${"svelte-f38z04"}">Nav item 3</a></li></ul>
</header>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-57g6ct.svelte-57g6ct{width:min(90rem, 100% - 6rem);margin-inline:auto;background-color:hsl(0deg, 0%, 20%);display:flex;justify-content:space-between;align-items:center;padding:2rem 3rem}footer.svelte-57g6ct p.svelte-57g6ct{font-size:1.375rem;color:hsl(0deg, 0%, 93%)}footer.svelte-57g6ct a.svelte-57g6ct{font-size:1.125rem;color:hsl(48deg, 100%, 51%)}",
  map: null
};
const Footer = (0, import_index_0cea40d0.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-57g6ct"}"><p class="${"svelte-57g6ct"}">Pokemon.com</p>
	<a href="${"/contact-us"}" class="${"svelte-57g6ct"}">Contact us</a>
</footer>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");::-webkit-scrollbar{width:15px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb:hover{background:#555}p,body,h1,h2,h3,h4,h5{margin:0;padding:0;font-family:"Ubuntu", sans-serif}body{box-sizing:border-box;background-color:hsl(0deg, 0%, 0%)}img{max-width:100%}main{margin-inline:auto;width:min(96rem, 100%);background-color:hsl(0deg, 0%, 10%)}',
  map: null
};
const _layout = (0, import_index_0cea40d0.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_0cea40d0.v)(Header, "Header").$$render($$result, {}, {}, {})}
<main>${slots.default ? slots.default({}) : ``}</main>
${(0, import_index_0cea40d0.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
