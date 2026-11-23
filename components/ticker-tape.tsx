const tickerItems = [
  { ticker: "$MOONCAT", change: "+18.4%", positive: true },
  { ticker: "$NOVA", change: "+9.2%", positive: true },
  { ticker: "$KITSU", change: "+34.1%", positive: true },
  { ticker: "$GLITCH", change: "-4.7%", positive: false },
  { ticker: "$ORB", change: "+2.8%", positive: true },
  { ticker: "$PLASMA", change: "-1.9%", positive: false },
  { ticker: "DATA ILUSTRATIF", change: "BUKAN LIVE", positive: true },
];

function TickerGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-7 pr-7"
      aria-hidden={hidden || undefined}
    >
      {tickerItems.map((item) => (
        <span
          key={item.ticker}
          className="flex shrink-0 items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.16em]"
        >
          <span className={item.positive ? "text-acid/80" : "text-rose-400/80"}>
            {item.ticker}
          </span>
          <span className={item.positive ? "text-white/30" : "text-rose-400/50"}>
            {item.change}
          </span>
          <span className="ml-4 size-1 rounded-full bg-white/10" />
        </span>
      ))}
    </div>
  );
}

export function TickerTape() {
  return (
    <section
      aria-label="Ticker token ilustratif"
      className="ticker relative overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-3.5"
    >
      <div className="mask-fade-x flex overflow-hidden">
        <div className="ticker-track">
          <TickerGroup />
          <TickerGroup hidden />
        </div>
      </div>
    </section>
  );
}
