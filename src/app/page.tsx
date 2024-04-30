"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { isLogin } from "~/lib/user";
import Image from "next/image";
import Link from "next/link";
import HomeLayout from "~/components/layouts/home-layout";

export default function Page() {
  const { user } = useUser();
  const session = isLogin();
  const router = useRouter();
  const role = user?.publicMetadata.role;

  const navigate = () => {
    console.log(role);
  };

  return (
    <HomeLayout>
      <div className="flex h-[50vh] w-full items-center justify-center">
        <div className="text-center md:max-w-md">
          <div className="grid grid-cols-1 space-y-4">
            <div className="relative h-32 w-32 place-self-center">
              <Image
                src="/unsrit.png"
                alt="logo unsrit"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
              />
            </div>
            <h1 className="text-lg font-semibold">
              Sistem Informasi Perpustakaan
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Sistem Informasi Perpustakaan yang menyediakan fitur pencarian dan
              peminjaman buku secara praktis dan efisien.
            </p>
            <div>
              <Link
                href={
                  !session
                    ? "/auth/login"
                    : role === "admin"
                      ? "/dashboard/admin"
                      : "/dashboard/mahasiswa"
                }
              >
                <Button className="w-2/5" onClick={navigate}>
                  {!session ? "Login" : "Dashboard"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
