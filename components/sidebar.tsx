import Image from "next/image";
import Link from "next/link";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";
import SidebarItem from "@/components/sidebar-item";

const Sidebar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot"></Image>
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" iconSrc="/learn.svg" href="/learn"></SidebarItem>
        <SidebarItem label="Leaderboard" iconSrc="/leaderboard.svg" href="/leaderboard"></SidebarItem>
        <SidebarItem label="Quests" iconSrc="/quests.svg" href="/quests"></SidebarItem>
        <SidebarItem label="Shop" iconSrc="/shop.svg" href="/shop"></SidebarItem>
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"></Loader>
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton></UserButton>
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Sidebar;
