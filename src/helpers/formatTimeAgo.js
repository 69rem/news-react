export const formatTimeAgo = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid date";

  const now = new Date();
  const secondsPast = (now.getTime() - date.getTime()) / 1000;

  if (secondsPast < 60) return `${Math.floor(secondsPast)}s ago`;
  if (secondsPast < 3600) return `${Math.floor(secondsPast / 60)}m ago`;
  if (secondsPast < 86400) return `${Math.floor(secondsPast / 3600)}h ago`;
  const days = Math.floor(secondsPast / 86400);
  return days === 1 ? `${days} day ago` : `${days} days ago`;
};
