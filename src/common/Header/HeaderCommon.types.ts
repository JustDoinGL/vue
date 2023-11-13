import type { HeaderLinks } from '@/interface/links'

export type HeaderCommonProps = {
  theme: string;
  links: HeaderLinks[];
  toggleTheme: () => void;
}