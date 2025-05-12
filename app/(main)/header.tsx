import actions from "@/actions";
import LinkLoader from "@/components/LinkLoader";
import NavLink from "@/components/nav-link";
import ThemeSwitch from "@/components/theme-switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import config from "@/lib/config";
import { cn } from "@/lib/utils";
import { AlignLeft, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const Header = () => {
  return (
    <header className="top-0 z-50 sticky flex items-center bg-medium/80 backdrop-blur-sm h-24">
      <div className="flex flex-1 justify-between md:justify-start items-center gap-6 px-4 md:px-24 py-2 md:py-6">
        <Sidebar />
        <Logo />
        <Nav className="hidden md:flex ml-auto" />
        <div className="hidden md:block h-8">
          <Separator orientation="vertical" />
        </div>
        <Suspense>
          <AuthBasedNav mini />
        </Suspense>
        <div className="hidden md:flex items-center gap-6">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <AlignLeft />
      </SheetTrigger>
      <SheetContent side="left" className="bg-soft p-4">
        <SheetTitle className="font-bold text-2xl">
          {config.brand.name}
        </SheetTitle>
        <div className="flex flex-col gap-4 h-full">
          <Nav className="flex-1" />
          <ThemeSwitch />
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Logo = () => {
  return (
    <Link href="/" className="font-bold text-2xl">
      {config.brand.name}
    </Link>
  );
};

const Nav = ({ className }: { className?: string }) => {
  return (
    <nav className={className}>
      <ul className="flex md:flex-row flex-col md:items-center gap-4">
        {config.nav.main.map((item) => (
          <li key={item.href}>
            <NavLink
              className="data-[active=true]:text-primary-medium"
              href={item.href}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const AuthBasedNav = async ({ mini }: { mini?: boolean }) => {
  const [, user] = await actions.auth.cachedProfile(null);

  if (!user) {
    return (
      <Link href="/login">
        <Button className="w-full md:w-auto">
          Login <LinkLoader />
        </Button>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          className={cn(
            "md:block flex items-center gap-2 bg-soft md:bg-transparent px-2 md:px-0 py-1 md:py-0 rounded-md w-full md:w-auto",
            mini && "px-0 py-0 bg-transparent",
          )}
        >
          <Avatar className="shadow-sm border size-12">
            <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          {!mini && (
            <div className="md:hidden font-medium text-sm">{user?.name}</div>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          <div className="font-medium">{user?.name}</div>
          <div className="text-muted-foreground text-sm">{user?.email}</div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={actions.auth.logout}>
          <LogOutIcon className="mr-2 w-4 h-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Header;
