import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// format date to time ago
export const getTimeStamp = (createdAt: Date): string => {
  const now = new Date();
  const elapsed = now.getTime() - createdAt.getTime();
  const seconds = Math.floor(elapsed / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
};

// formatNumber M and K for views and upvotes and likes
export function formatNumber(num: number): string {
  let formattedNum: string = "";

  if (Math.abs(num) >= 1e6) {
    formattedNum = (num / 1e6).toFixed(2) + "M";
  } else if (Math.abs(num) >= 1e3) {
    formattedNum = (num / 1e3).toFixed(2) + "K";
  } else {
    formattedNum = num.toString();
  }

  return formattedNum;
}
