const demos = [
  {name:"Fashion Store",category:"Moda",image:"new-fashion.png",tag:"Popular",description:"Moda e acessórios"},
  {name:"Mega Store",category:"Eletrônicos",image:"home-mega-store.png",tag:"",description:"Eletrônicos e gadgets"},
  {name:"Delight Fashion",category:"Moda",image:"home3.png",tag:"Novo",description:"Moda feminina"},
  {name:"Sneaker Studio",category:"Esportes",image:"home-shoes-1.png",tag:"",description:"Tênis e streetwear"},
  {name:"Single Product",category:"Eletrônicos",image:"home-single-product.png",tag:"",description:"Um produto em destaque"},
  {name:"Grocery Shop",category:"Alimentos",image:"home-grocery.png",tag:"Novo",description:"Mercado e naturais"},
  {name:"Auto Parts",category:"Esportes",image:"home-auto-parts.png",tag:"",description:"Peças e acessórios"},
  {name:"Coffee House",category:"Alimentos",image:"home-coffee.png",tag:"",description:"Café e torrefação"},
  {name:"Everyday Style",category:"Moda",image:"home1.png",tag:"",description:"Moda para todo dia"},
  {name:"Modern Living",category:"Casa",image:"home2.png",tag:"",description:"Casa e decoração"},
  {name:"Active Wear",category:"Esportes",image:"home8.png",tag:"Popular",description:"Esporte e movimento"},
  {name:"Fresh Market",category:"Alimentos",image:"home10.png",tag:"",description:"Produtos frescos"},
  {name:"Nutri Life",category:"Alimentos",image:"home-nutrition.png",tag:"",description:"Bem-estar e nutrição"},
  {name:"Pizza Corner",category:"Alimentos",image:"home-pizza.png",tag:"",description:"Pizzaria e delivery"},
  {name:"Shoe Avenue",category:"Moda",image:"home-shoes-2.png",tag:"",description:"Calçados e bolsas"},
  {name:"Studio Edit",category:"Casa",image:"home17.png",tag:"Novo",description:"Design contemporâneo"}
];

const grid = document.querySelector("#demo-grid");
if (grid) {
  grid.innerHTML = demos.map((demo, index) => `
    <article class="demo-card overflow-hidden rounded-lg" data-category="${demo.category}">
      <div class="demo-thumb relative overflow-hidden"><img class="h-full w-full object-cover" src="./assets/image/${demo.image}" alt="Prévia da demo ${demo.name}" loading="lazy">${demo.tag ? `<span class="demo-badge absolute">${demo.tag}</span>` : ""}</div>
      <div class="demo-info"><h3>${demo.name}</h3><p>${demo.description}</p><a class="inline-flex items-center" href="#comprar" aria-label="Conheça a demo ${demo.name}">Ver demo <span>↗</span></a></div>
    </article>`).join("");
}

document.querySelectorAll(".filter-pill").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-pill.active")?.classList.remove("active");
    button.classList.add("active");
    const selected = button.dataset.filter;
    document.querySelectorAll(".demo-card").forEach((card) => {
      card.hidden = selected !== "Todos" && card.dataset.category !== selected;
    });
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});
mainNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Abrir menu");
}));
