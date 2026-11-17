export function calculateEarnings(rate: number, hours: number, days: number): number {
  return rate * hours * days;
}

export function formatEarnings(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function formatHour(h: number): string {
  const mod = h % 24;
  const hour12 = mod % 12 === 0 ? 12 : mod % 12;
  const ampm = mod < 12 ? " am" : " pm";
  return `${hour12}${ampm}`;
}

export function calculateWindow(hours: number): {
  startHour: number;
  endHour: number;
  rangeText: string;
} {
  if (hours >= 24) {
    return { startHour: 0, endHour: 24, rangeText: "All day" };
  }
  const startHour = Math.min(9, 24 - hours);
  const endHour = (startHour + hours) % 24;
  return {
    startHour,
    endHour,
    rangeText: `${formatHour(startHour)} to ${formatHour(startHour + hours)}`,
  };
}
