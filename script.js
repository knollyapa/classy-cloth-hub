/* Update SHOP.whatsapp with your WhatsApp number in international format (Kenya: 2547...). */
const SHOP = {
  whatsapp: "254702091173",
  currency: "KES",
};

const products = [
  { name: "Cinnamon Mini", type: "skirts", description: "Corduroy · Warm & playful", image: "look-1.jpg", tag: "Easy favourite" },
  { name: "Blush Hour Top", type: "tops", description: "Soft pink · Sweet details", image: "look-2.jpg", tag: "New in" },
  { name: "Soft White Bodysuit", type: "tops", description: "Everyday essential · Cream", image: "look-3.jpg", tag: "The staple" },
  { name: "Rosy Mood Dress", type: "dresses", description: "Pretty pink · Going-out fit", image: "look-4.jpg", tag: "Feel-good fit" },
  { name: "Garden Party Mini", type: "dresses", description: "Colourful floral · Full of joy", image: "look-5.jpg", tag: "Customer fave" },
  { name: "Pink Pop Set", type: "skirts", description: "Pink & lilac · Main-character energy", image: "look-6.jpg", tag: "A little extra" },
  { name: "Blue Crush Dress", type: "dresses", description: "Bright blue · Made to stand out", image: "look-7.jpg", tag: "Bold & lovely" },
];

function whatsappUrl(message) {
  return `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-wa-link]").forEach((link) => {
  link.href = whatsappUrl("Hi Classy Cloth Hub! I'd like to ask about your collection and delivery around Nyanza.");
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const grid = document.querySelector("#product-grid");
function renderProducts(filter = "all") {
  grid.innerHTML = products
    .filter((product) => filter === "all" || product.type === filter)
    .map((product, index) => {
      const message = `Hi Classy Cloth Hub! I'm interested in the ${product.name}. Is it available? Please share the price, sizes and delivery options.`;
      return `<a class="product-card" href="${whatsappUrl(message)}" target="_blank" rel="noopener noreferrer" aria-label="Ask about ${product.name} on WhatsApp">
        <div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy"><span class="product-tag">${product.tag}</span><span class="quick-order"><span>Ask about this look</span><span>↗</span></span></div>
        <div class="product-meta"><div><h3>${product.name}</h3><p>${product.description}</p></div><span class="heart">✳</span></div>
        <div class="price-line"><b>Ask us for the price</b> &nbsp;·&nbsp; ${SHOP.currency}</div>
      </a>`;
    }).join("");
}
renderProducts();

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active")?.classList.remove("active");
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});
