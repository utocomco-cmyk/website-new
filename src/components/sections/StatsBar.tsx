export const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "3000+", label: "Product Models" },
  { value: "50,000+", label: "Enterprise Clients" },
  { value: "98.6%", label: "Satisfaction Rate" },
];

export function StatsBar() {
  return (
    <section className="py-8 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
