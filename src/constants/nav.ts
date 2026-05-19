export type NavLink = {
  title: string;
  href: string;
};

/** Main site sections — header + footer */
export const primaryNavLinks: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact Us", href: "/contact" },
];

/** Secondary pages — footer quick links only */
export const secondaryNavLinks: NavLink[] = [
  { title: "Testimonials", href: "/testimonials" },
  { title: "FAQ", href: "/faq" },
  { title: "Privacy", href: "/privacy" },
];

/** Primary header nav */
export const headerNavLinks = primaryNavLinks;

/** Footer quick links — primary order first, then secondary */
export const footerQuickLinks: NavLink[] = [...primaryNavLinks, ...secondaryNavLinks];
