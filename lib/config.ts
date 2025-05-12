interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  items?: NavItem[];
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const config = {
  brand: {
    name: "My Brand",
    description: "My Brand Description",
    url: "https://mybrand.com",
    logo: "https://mybrand.com/logo.png",
    icon: "https://mybrand.com/icon.png",
    color: "#000000",
    backgroundColor: "#FFFFFF",
  },

  auth: {
    tokenName: "auth-token",
    tokenExpiration: 30 * 24 * 60 * 60, // 30 days
    tokenPath: "/",
    tokenSecure: process.env.NODE_ENV === "production",
  },

  nav: {
    main: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Blogs",
        href: "/blogs",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ] as NavItem[],

    footer: {
      groups: [
        {
          label: "Product",
          items: [
            { label: "Features", href: "/features" },
            { label: "Pricing", href: "/pricing" },
            { label: "Documentation", href: "/docs" },
            { label: "Releases", href: "/releases" },
          ],
        },
        {
          label: "Company",
          items: [
            { label: "About", href: "/about" },
            { label: "Blogs", href: "/blogs" },
            { label: "Careers", href: "/careers" },
            { label: "Contact", href: "/contact" },
          ],
        },
        {
          label: "Resources",
          items: [
            { label: "Community", href: "/community" },
            { label: "Help Center", href: "/help" },
            { label: "Terms", href: "/terms" },
            { label: "Privacy", href: "/privacy" },
          ],
        },
      ] as NavGroup[],
      social: [
        { label: "Twitter", href: "https://twitter.com" },
        { label: "GitHub", href: "https://github.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
      ] as NavItem[],
      legal: [
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" },
      ] as NavItem[],
    },
  },
};

export default config;
