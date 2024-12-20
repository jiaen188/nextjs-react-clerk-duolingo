import Link from "next/link";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
  activeCourse: {
    title: string;
    imageSrc: string;
  };
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
}

const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription
}: Props) => {
  return ( 
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href='/courses'>
        <Button variant="ghost" >
          <Image src={activeCourse.imageSrc} alt={activeCourse.title} className="rounded-md border" width={32} height={32}></Image>
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image src="/points.svg" alt="Points" width={28} height={28} className="mr-2"></Image>
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image src="/heart.svg" alt="Heart" width={22} height={22} className="mr-2"></Image>
          {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-2 " /> : hearts}
        </Button>
      </Link>
    </div>
   );
}
 
export default UserProgress;