import Link from "next/link";

const industries = [
  { title: "Defense", href: "/industries/defense" },
  { title: "Energy", href: "/industries/energy" },
  { title: "Environment", href: "/industries/medioAmbiente" },
  { title: "Governtment", href: "/industries/governtment" },
  { title: "Public Health", href: "/industries/publichealth" },
  { title: "Telecommunication", href: "/industries/telecommunication" },
  { title: "Transport", href: "/industries/transport" },
  { title: "Water", href: "/industries/water" },
];

export default function Industries() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8">Industries</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {industries.map((industry) => (
          <Link
            key={industry.title}
            href={industry.href}
            className="block bg-white shadow-lg hover:shadow-xl transition-shadow rounded-2xl p-6 border border-gray-200 hover:border-blue-500"
          >
            <div className="h-full flex items-center justify-center text-xl font-semibold text-gray-800 hover:text-blue-600 text-center">
              {industry.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
