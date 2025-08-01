import Link from "next/link";

const productos = [
  { title: "Alquemy Now", href: "/products/AlquemyNow" },
  { title: "Alchemy Mob", href: "/products/AlchemyMob" },
  { title: "Alchemy Address Server", href: "/products/AlchemyAddressServer" },
  { title: "SphereSync", href: "/products/SphereSync" },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {productos.map((prod) => (
          <Link
            key={prod.title}
            href={prod.href}
            className="block bg-white shadow-lg hover:shadow-xl transition-shadow rounded-2xl p-6 border border-gray-200 hover:border-blue-500"
          >
            <div className="h-full flex items-center justify-center text-xl font-semibold text-gray-800 hover:text-blue-600 text-center">
              {prod.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
