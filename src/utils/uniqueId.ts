let idCounter = 0

export const uniqueId = (prefix?: string): string => `${prefix}${++idCounter}`
