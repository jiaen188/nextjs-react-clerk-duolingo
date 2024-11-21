import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";

import { Menu } from "lucide-react";

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white"></Menu>
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side="left">
        <Sidebar></Sidebar>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
