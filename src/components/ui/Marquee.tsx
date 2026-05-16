interface MarqueeProps {
  items: string[];
  dark?: boolean;
  separator?: string;
}

export function Marquee({ items, dark = true, separator = "✦" }: MarqueeProps) {
  const doubled = [...items, ...items];
  const duration = dark ? "38s" : "42s";

  return (
    <div
      className={`overflow-hidden py-5 border-y ${
        dark
          ? "bg-ink border-white/5"
          : "bg-paper border-ink/10"
      }`}
    >
      <div
        className="flex whitespace-nowrap w-max"
        style={{ animation: `marquee-scroll ${duration} linear infinite` }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`text-xs font-medium tracking-[0.2em] uppercase mx-5 ${
                dark ? "text-text-black-sub" : "text-text-gray-sub"
              }`}
            >
              {item}
            </span>
            <span className="text-orange-accent text-xs">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
