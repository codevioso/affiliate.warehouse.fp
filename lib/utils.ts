export type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[]
  | { [key: string]: boolean };

function toClassName(value: ClassValue): string {
  if (!value) return "";
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (typeof value === "boolean") return "";
  if (Array.isArray(value)) return value.map(toClassName).filter(Boolean).join(" ");
  return Object.entries(value)
    .filter(([, enabled]) => Boolean(enabled))
    .map(([key]) => key)
    .join(" ");
}

export function cn(...values: ClassValue[]) {
  return values.map(toClassName).filter(Boolean).join(" ");
}

