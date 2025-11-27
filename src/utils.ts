import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function for conditionally joining Tailwind CSS classes together
 * Combines clsx for conditional classes and twMerge for proper handling of Tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createSlug(title: string) {
    return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

export const hasSeenTour = (page: string) => {
    return localStorage.getItem(`tourSeen:${page}`) === "true";
  };
  
/**
 * Check if a value is a valid MongoDB ObjectId
 * This is a lightweight implementation without requiring mongoose
 */
export function isValidObjectId(value: any): boolean {
  if (!value) return false;
  
  // If it's a string, check if it matches the ObjectId pattern
  if (typeof value === 'string') {
    return /^[0-9a-fA-F]{24}$/.test(value);
  }
  
  // If it's an object with an _id property
  if (typeof value === 'object' && value !== null && value._id) {
    return isValidObjectId(value._id);
  }
  
  return false;
}
  
  export const markTourSeen = (page: string) => {
    localStorage.setItem(`tourSeen:${page}`, "true");
  };


