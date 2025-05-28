type ClassValue = string | number | boolean | undefined | null | { [key: string]: boolean | undefined | null }

export function cn(...inputs: ClassValue[]) {
  return inputs
    .map((input) => {
      if (typeof input === 'object' && input !== null) {
        return Object.entries(input)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ')
      }
      return input
    })
    .filter(Boolean)
    .join(' ')
} 