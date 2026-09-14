export default function TrustSection() {
  const stats = [
    { value: "20+", label: "Projects", subLabel: "Successfully designed and developed" },
    { value: "10+", label: "Businesses", subLabel: "Supported with digital solutions" },
    { value: "5+", label: "Industries", subLabel: "Experience across different domains" },
    { value: "100%", label: "Commitment", subLabel: "Focused on client satisfaction" },
  ];

  return (
    <section className="py-12 border-y border-border bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <span className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-foreground uppercase tracking-wider">
                {stat.label}
              </span>
              <span className="text-xs text-muted-foreground mt-1 hidden md:block">
                {stat.subLabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
