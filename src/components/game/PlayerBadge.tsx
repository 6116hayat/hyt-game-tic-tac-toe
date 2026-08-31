interface PlayerBadgeProps {
  name: string;
  symbol: "X" | "O";
  isActive?: boolean;
  score?: number;
}

export function PlayerBadge({
  name,
  symbol,
  isActive = false,
  score = 0,
}: PlayerBadgeProps) {
  const colors = {
    X: "text-pink-400 border-pink-400/30 bg-pink-400/10",
    O: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    draw: "text-gray-400 border-gray-400/30 bg-gray-400/10",
  };

  const symbolDisplay = symbol === "X" ? "✕" : "◯";

  return (
    <div
      className={`
      flex flex-col items-center gap-1
      px-4 py-2
      border-2 rounded-xl
      transition-all duration-300
      ${colors[symbol]}
      ${isActive ? "border-opacity-100 shadow-glow-pink scale-105" : "border-opacity-30"}
    `}
    >
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold">{symbolDisplay}</span>
        <span className="font-medium">{name}</span>
      </div>
      {score !== undefined && (
        <span className="text-sm opacity-75">Score: {score}</span>
      )}
    </div>
  );
}
