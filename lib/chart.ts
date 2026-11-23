export type Point = { x: number; y: number };

function getPoints(
  values: number[],
  width: number,
  height: number,
  padding: number,
): Point[] {
  if (values.length < 2) return [];
  const min = Math.min(...values);
  const max = Math.max(...values);
  const spread = max - min || 1;
  const usableWidth = width - padding * 2;
  const usableHeight = height - padding * 2;

  return values.map((value, index) => ({
    x: padding + (index / (values.length - 1)) * usableWidth,
    y: padding + (1 - (value - min) / spread) * usableHeight,
  }));
}

function smoothLine(points: Point[]) {
  if (points.length === 0) return "";
  if (points.length === 1) {
    return `M ${points[0].x} ${points[0].y}`;
  }

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }

  return path;
}

export function buildChart(
  values: number[],
  width: number,
  height: number,
  padding = 4,
) {
  const points = getPoints(values, width, height, padding);
  const line = smoothLine(points);
  const last = points[points.length - 1] ?? { x: 0, y: height };
  const area =
    points.length > 0
      ? `${line} L ${last.x} ${height} L ${points[0].x} ${height} Z`
      : "";

  return { line, area, last, points };
}
