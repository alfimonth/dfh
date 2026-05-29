export function dfh(date: Date | string | number): string {
  const now = new Date();
  const then = new Date(date);
  const diff = (now.getTime() - then.getTime()) / 1000;
  const isFuture = diff < 0;
  const secondsDiff = Math.round(Math.abs(diff));

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(secondsDiff / interval.seconds);
    if (count >= 1) {
      const unit = `${interval.label}${count > 1 ? 's' : ''}`;
      return isFuture ? `in ${count} ${unit}` : `${count} ${unit} ago`;
    }
  }

  return 'just now';
}
