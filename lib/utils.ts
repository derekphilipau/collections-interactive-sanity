import { LocalizedPortableTextBlock, LocalizedString } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTranslation(
  field: LocalizedString | LocalizedPortableTextBlock,
  language: string
) {
  if (field) {
    return field[language] || field.en;
  }
  return null;
}
