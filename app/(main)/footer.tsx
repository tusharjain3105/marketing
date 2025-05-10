import CurrentYear from "@/components/current-year";
import NavLink from "@/components/nav-link";
import { Input } from "@/components/ui/input";
import config from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-medium border-t">
      <div className="px-4 md:px-24 py-12 container">
        <div className="gap-8 grid grid-cols-2 md:grid-cols-4">
          {config.nav.footer.groups.map((group) => (
            <div key={group.label} className="space-y-4">
              <h3 className="font-semibold text-foreground text-sm">
                {group.label}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      href={item.href}
                      className="font-medium text-foreground-secondary data-[active=true]:text-primary-medium hover:text-foreground text-sm transition-colors"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <SubscribeForm className="col-span-2 md:col-span-1" />
        </div>
      </div>
      <FooterStrip />
    </footer>
  );
};

const FooterStrip = () => (
  <div className="bg-strong p-2 md:px-24 md:py-4 border-t">
    <div className="flex md:flex-row flex-col justify-between items-center gap-4">
      <p className="text-foreground-secondary text-sm">
        © <CurrentYear /> {config.brand.name}. All rights reserved.
      </p>
      <div className="flex gap-4">
        {config.nav.footer.legal.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-foreground-secondary hover:text-foreground text-sm transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const SubscribeForm = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="font-semibold text-foreground text-sm">
        Subscribe to our newsletter
      </h3>
      <p className="text-foreground-secondary text-sm">
        Get the latest updates and news directly in your inbox.
      </p>
      <form className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-soft/50 px-3 py-2 border border-soft rounded-md focus:outline-none focus:ring-2 focus:ring-primary-soft text-sm"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary-medium text-foreground-inverted px-4 py-2 rounded-md font-medium text-sm transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Footer;
