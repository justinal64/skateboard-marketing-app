"use client";

const products = [
  {
    id: 1,
    name: 'Street King 8.25"',
    category: "Deck",
    price: "$64.99",
    tag: "Best Seller",
    hoverBorder: "rgba(255,0,255,0.6)",
    hoverGlow: "0 8px 32px rgba(255,0,255,0.35)",
    tagBg: "rgba(255,0,255,0.15)",
    tagColor: "#FF00FF",
    boardGlow: "rgba(255,0,255,0.3)",
  },
  {
    id: 2,
    name: "Hollow Light Trucks",
    category: "Trucks",
    price: "$54.99",
    tag: "New",
    hoverBorder: "rgba(0,255,255,0.5)",
    hoverGlow: "0 8px 32px rgba(0,255,255,0.25)",
    tagBg: "rgba(0,255,255,0.12)",
    tagColor: "#00FFFF",
    boardGlow: "rgba(0,255,255,0.25)",
  },
  {
    id: 3,
    name: "Velocity 52mm Wheels",
    category: "Wheels",
    price: "$38.99",
    tag: "Pro Pick",
    hoverBorder: "rgba(0,255,255,0.5)",
    hoverGlow: "0 8px 32px rgba(0,255,255,0.25)",
    tagBg: "rgba(0,255,255,0.12)",
    tagColor: "#00FFFF",
    boardGlow: "rgba(0,255,255,0.25)",
  },
  {
    id: 4,
    name: 'Park Pro 8.0"',
    category: "Deck",
    price: "$59.99",
    tag: null,
    hoverBorder: "rgba(255,0,255,0.5)",
    hoverGlow: "0 8px 32px rgba(255,0,255,0.2)",
    tagBg: "",
    tagColor: "",
    boardGlow: "rgba(255,0,255,0.2)",
  },
];

export default function Products() {
  return (
    <section id="products" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div
              className="mb-3 inline-block rounded-xl border-2 px-4 py-1"
              style={{
                borderColor: "#FF00FF",
                backgroundColor: "rgba(255,0,255,0.08)",
                boxShadow: "0 0 10px rgba(255,0,255,0.2)",
              }}
            >
              <p
                className="text-sm font-black uppercase tracking-widest"
                style={{
                  color: "#FFCCFF",
                  textShadow: "0 0 8px rgba(255,0,255,0.7)",
                }}
              >
                Gear
              </p>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">
              Shop the Drop
            </h2>
          </div>
          <a
            href="#"
            className="hidden text-sm font-semibold uppercase tracking-widest underline-offset-4 transition-colors hover:underline md:block"
            style={{ color: "#00FFFF" }}
          >
            View all products
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: "#1A1A3A", borderColor: "#2A2A4A" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = product.hoverBorder;
                el.style.boxShadow = product.hoverGlow;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "#2A2A4A";
                el.style.boxShadow = "none";
              }}
            >
              {product.tag && (
                <span
                  className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
                  style={{
                    backgroundColor: product.tagBg,
                    color: product.tagColor,
                  }}
                >
                  {product.tag}
                </span>
              )}
              <div className="mb-6 flex h-32 items-center justify-center">
                <div
                  className="h-24 w-10 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(180deg, #2A2A4A 0%, #1A1A3A 100%)",
                    boxShadow: `0 4px 16px ${product.boardGlow}`,
                  }}
                />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-text-dim opacity-60">
                {product.category}
              </p>
              <h3 className="mt-1 text-lg font-bold text-foreground">
                {product.name}
              </h3>
              <div className="mt-4 flex items-center justify-between">
                <span
                  className="text-xl font-black"
                  style={{
                    color: "#FF00FF",
                    textShadow: "0 0 8px rgba(255,0,255,0.6)",
                  }}
                >
                  {product.price}
                </span>
                <button
                  className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200"
                  style={{
                    backgroundColor: "rgba(0,255,255,0.1)",
                    color: "#00FFFF",
                    border: "1px solid rgba(0,255,255,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.backgroundColor = "#00FFFF";
                    el.style.color = "#0D0D25";
                    el.style.boxShadow = "0 0 14px rgba(0,255,255,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.backgroundColor = "rgba(0,255,255,0.1)";
                    el.style.color = "#00FFFF";
                    el.style.boxShadow = "none";
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
