"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

const NavLink = (
  props: ComponentProps<typeof Link> & {
    href: string;
    mode?: "exact" | "prefix";
  },
) => {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      data-active={
        props.mode === "prefix"
          ? pathname.startsWith(props.href)
          : props.href === pathname
      }
    />
  );
};
export default NavLink;
