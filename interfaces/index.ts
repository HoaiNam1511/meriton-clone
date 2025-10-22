export interface INavData {
  title: string;
  href: string;
  subtitle?: string;
  image?: string;
  children?: INavData[];
}

export interface ILinkItem {
  className?: string;
  href: string;
  children: React.ReactNode;
}
