/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderSlot, d as renderHead, m as maybeRenderHead, e as renderComponent } from '../astro_743b41ff.mjs';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import Carousel from 'react-multi-carousel';
import 'react';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- FONTS --><link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap" rel="stylesheet"><title>Astro Landing - ', "</title>", '</head><body class="font-[Rubik] bg-gradient-to-t from-[#0c0000] to-[#0c0000] h-screen"><main class=" mx-auto ">', '</main><script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"><\/script></body></html>'])), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/crist/Documents/movie/movie/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav class="w-full z-50 bg-transparent fixed border-gray-300 bg-opacity-20 backdrop-blur-lg "><div class=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"><a href="" class="flex items-center"><img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Logo"><span class="self-center text-2xl font-semibold whitespace-nowrap text-white">PlayWeb</span></a><div class="flex md:order-2"><button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg><span class="sr-only">Search</span></button><div class="relative hidden md:block"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg><span class="sr-only">Search icon</span></div><input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm  border  rounded-lg   bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search..."></div><button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button></div><div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search"><div class="relative mt-3 md:hidden"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg></div><input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm  border  rounded-lg   bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search..."></div><ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0   border-gray-700"><li class="my-1"><a href="#" class="block py-2 pl-3 pr-4  rounded   md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700" aria-current="page">Home</a></li><li class="my-1"><a href="#" class="block py-2 pl-3 pr-4  rounded   md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">About</a></li><li class="my-1"><a href="#" class="block py-2 pl-3 pr-4  rounded   md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Services</a></li></ul></div></div></nav>`;
}, "C:/Users/crist/Documents/movie/movie/src/components/Nav.astro", void 0);

const $$Astro$2 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 "><img src="../../public/OpH.jpeg" alt="" class="absolute top-0 left-0 w-full h-full object-cover"><div class="relative h-[calc(100vh-3rem)] gap-3 container grid content-center "><div class="m-4 gap-4 text-white"><span class="w-full lg:text-lg text-base font-light sm:text-sm">
Ⓜ️ Película - 3h 01min - 2023
</span><h1 class="w-full font-normal lg:text-6xl text-4xl text-white lg:leading-10   leading-9 pb-5 pt-5">
Oppenheimer
</h1><span class="w-full lg:text-lg text-base font-light sm:text-sm">
Película sobre el físico J. Robert Oppenheimer y su papel como desarrollador de la bomba atómica. Basada en el libro 'American Prometheus'
</span></div><div><a href="#" class="m-4 gap-4  lg:text-xl xl:text-xl  bg-blue-600 hover:bg-[#1834d3] text-white font-semibold hover:text-white py-2 px-4 border  border-transparent rounded focus:ring-white">Ver Película</a></div></div></section>`;
}, "C:/Users/crist/Documents/movie/movie/src/components/Hero.astro", void 0);

function Movie(props) {
  return /* @__PURE__ */ jsxs("div", { className: "box-border 2xl:w-96 2xl:h-[550px] xl:w-72 xl:h-96 lg:w-60 lg:h-96 md:w-72 md:h-96 sm:w-64 sm:h-96 w-72 h-96 mb-10 pb-8 px-3 py-3 backdrop-blur-sm bg-white/10  mx-auto rounded-2xl ", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: " rounded-2xl h-full  container",
        src: props.url,
        alt: "Barbie"
      }
    ),
    /* @__PURE__ */ jsx("h2", { className: "mx-4 p-1 text-white", children: props.name })
  ] });
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const movieData = [
  {
    id: 1,
    imageurl: "/public/Barbie.jpg",
    name: "Barbie",
  },
  {
    id: 2,
    imageurl: "/public/Blue.jpg",
    name: "Blue",
  },
  {
    id: 3,
    imageurl: "/public/Indiana_Jonesjpg.jpg",
    name: "Indiana Jones",
  },
  {
    id: 4,
    imageurl: "/public/megalodon.jpeg",
    name: "Megalodon 2",
  },
  {
    id: 5,
    imageurl: "/public/Mision.jpg",
    name: "Mision Imposible",
  },
  {
    id: 6,
    imageurl: "/public/Strays.jpg",
    name: "Perros",
  },
  {
    id: 7,
    imageurl: "/public/Ninja_Turtles.jpg",
    name: "Tortugas Ninja",
  },
  {
    id: 8,
    imageurl: "/public/Spider.jpg",
    name: "Spiderman",
  },
  {
    id: 9,
    imageurl: "/public/Oppengeimer.jpeg",
    name: "Oppenheimer",
  },
];

function App() {
  const movie = movieData.map((item) => /* @__PURE__ */ jsx(Movie, { name: item.name, url: item.imageurl }));
  return /* @__PURE__ */ jsxs("div", { className: "App", children: [
    /* @__PURE__ */ jsx("h1", { children: "React multi carousel" }),
    /* @__PURE__ */ jsx(
      Carousel,
      {
        additionalTransfrom: 0,
        arrows: true,
        autoPlay: true,
        autoPlaySpeed: 1500,
        centerMode: false,
        className: "",
        containerClass: "container-with-dots",
        dotListClass: "",
        draggable: true,
        focusOnSelect: false,
        infinite: true,
        itemClass: "",
        keyBoardControl: true,
        minimumTouchDrag: 100,
        pauseOnHover: true,
        renderArrowsWhenDisabled: false,
        renderButtonGroupOutside: false,
        renderDotsOutside: false,
        responsive,
        children: movie
      }
    )
  ] });
}

const $$Astro$1 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead()}<section><div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16"><h1 class="mb-4 text-2xl font-normal tracking-tight leading-none md:text-3xl lg:text-4xl text-white">Estrenos</h1></div></section>`;
}, "C:/Users/crist/Documents/movie/movie/src/components/Title.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Movie" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Nav", $$Nav, {})}${renderComponent($$result2, "Hero", $$Hero, {})}${renderComponent($$result2, "Title", $$Title, {})}${renderComponent($$result2, "App", App, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/crist/Documents/movie/movie/src/components/Carousel", "client:component-export": "default" })}` })}`;
}, "C:/Users/crist/Documents/movie/movie/src/pages/index.astro", void 0);

const $$file = "C:/Users/crist/Documents/movie/movie/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
