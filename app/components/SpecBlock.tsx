interface SpecItem {
  label: string;
  value: string;
}

interface SpecBlockProps {
  items: SpecItem[];
}

export default function SpecBlock({ items }: SpecBlockProps) {
  return (
    <div className="mt-8 md:mt-10 border-t border-border pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col gap-1">
            <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted">
              {item.label}
            </span>
            <span className="text-foreground leading-relaxed">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


