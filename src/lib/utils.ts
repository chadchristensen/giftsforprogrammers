import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(input: string): string {
  if (!input)
    return '';

  // make lower case and trim
  let slug = input.toLowerCase().trim();

  // remove accents from charaters
  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  // replace invalid chars with spaces
  slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();

  // replace multiple spaces or hyphens with a single hyphen
  slug = slug.replace(/[\s-]+/g, '-');

  return slug;
}

export function formatDateToYYYYMMDD(date: string): string {
  const d = new Date(date),
    year = d.getFullYear(),
    month = ('0' + (d.getMonth() + 1)).slice(-2), // Months are zero indexed
    day = ('0' + d.getDate()).slice(-2); // Add leading zero if needed

  return `${year}-${month}-${day}`;
}

export function getIsUserAdmin(currentUserEmail: string | null | undefined) {
  return process.env.ADMIN_EMAIL_LIST?.split(",").some((email) => {
    return email === currentUserEmail;
  });
}