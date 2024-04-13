"use client";

import { MenuSquare } from "lucide-react";
import { Button } from "~/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import NavbarMobile from "~/components/navbars/navbar-mobile";
import Link from "next/link";

interface Props {
  role: string | undefined;
}

export default function NavbarMain({ role }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="fixed left-0 top-0 z-[100] w-full border-b bg-background">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="text-lg font-semibold">SIP</div>
          <div className="hidden items-center gap-3 md:flex">
            <Link href="/">
              <Button variant="link">Beranda</Button>
            </Link>
            <Link
              href={`/dashboard/${role == "admin" ? "admin" : "mahasiswa"}`}
            >
              <Button variant="link">Dashboard</Button>
            </Link>
            <Link href="/dashboard/buku">
              <Button variant="link">Buku</Button>
            </Link>
          </div>
        </div>
        <div className="hidden items-center gap-x-4 md:flex">
          <UserButton afterSignOutUrl="/" />
        </div>
        <div className="flex items-center gap-x-4 md:hidden">
          <UserButton afterSignOutUrl="/" />
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            <MenuSquare />
          </Button>
        </div>
      </div>
      {open && <NavbarMobile open={open} setOpen={setOpen} />}
    </nav>
  );
}
