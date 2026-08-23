function formatMonthYear(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function formatDateRange(startedAt: Date, endedAt?: Date | "Current"): string {
  const end = !endedAt || endedAt === "Current" ? "Current" : formatMonthYear(endedAt);
  return `${formatMonthYear(startedAt)} – ${end}`;
}
