"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const SidebarItem = ({
  label,
  iconSrc,
  href
}: {
  label: string;
  iconSrc: string;
  href: string;
}) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button variant={active ? "sidebarOutline" : "sidebar"} className="justify-start h-[52px]" asChild>
      <Link href={href}>
        <Image src={iconSrc} height={32} width={32} alt={label} className="mr-5 "></Image>
        {label}
      </Link>
    </Button>
  );
}
 
export default SidebarItem;