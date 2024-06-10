"use client";

import { NewButton } from "hazley-ui";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/dashboard" },
  {
    name: "Accounts",
    href: "/dashboard/accounts",
  },
  { name: "Customers", href: "/dashboard/customers" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            // className={`${
            //   pathname === link.href ? "bg-sky-100 text-blue-600" : ""
            // } flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`}
          >
            <NewButton title={link.name} />
          </Link>
        );
      })}
    </>
  );
}
