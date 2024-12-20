import Image from "next/image";

import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 px-4">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/hr.svg" alt="Croatian" width={32} height={40} className="mr-4 rounded-md" />
          Croatian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/es.svg" alt="Spanish" width={32} height={40} className="mr-4 rounded-md" />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/fr.svg" alt="Fresh" width={32} height={40} className="mr-4 rounded-md" />
          Fresh
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/It.svg" alt="Italian" width={32} height={40} className="mr-4 rounded-md" />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/jp.svg" alt="Japanese" width={32} height={40} className="mr-4 rounded-md" />
          Japanese
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
