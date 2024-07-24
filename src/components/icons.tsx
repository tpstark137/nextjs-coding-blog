import {
  Rss,
  Bug,
  type Icon as LucidIcon,
  ArrowRight,
  Twitter,
  Linkedin,
} from "lucide-react";

export type Icon = typeof LucidIcon;

export const Icons = {
  logo: Bug,
  rss: Rss,
  ArrowRight: ArrowRight,
  twitter: Twitter,
  linkedin: Linkedin,
};
