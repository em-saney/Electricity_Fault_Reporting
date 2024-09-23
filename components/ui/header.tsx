
"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import oocf from "@/public/images/Frame 5.png";
import Image from "next/image";


import MobileMenu from "@/components/ui/mobile-menu";
import { usePathname } from "next/navigation";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  // const pathname = usePathname();
  // // const pathname = router.pathname
  // console.log(pathname);
  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  

  return (
    <header className="fixed  z-30 w-full ">
      <div className="mx-auto  ">
        <div className="relative flex h-14 items-center bg-white justify-between gap-3  bg- px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Image className="" src={oocf} width={0} height={40} alt="oocf" />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex ">
            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li className="py-2">
                <Link
                  className="text-sm font-medium text-zinc-500 hover:text-zinc-900 px-3 py-2"
                  href="/login"
                  
                >
                  Have an account?
                </Link>
              </li>
              <li className="py-2">
                <Link
                  className="btn-sm text-green-600 shadow"
                  href="/login"
                  
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
