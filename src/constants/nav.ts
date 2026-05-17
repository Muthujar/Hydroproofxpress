export type NavLink = {
  title: string;
  href: string;
};

/** Primary header nav — concise contractor-style IA */
export const headerNavLinks: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact Us", href: "/contact" },
];
