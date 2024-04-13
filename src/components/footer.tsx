import Link from "next/link";

export default function Footer() {
  const tahun = new Date();

  return (
    <footer className="flex items-center justify-between gap-3 px-6 py-4 text-center text-sm text-white">
      <span className="text-muted-foreground">
        &copy; {tahun.getFullYear()} Sistem Informasi Perpustakaan - UNSRIT
      </span>
      <span className="flex items-center gap-2 text-muted-foreground">
        Created by
        <Link
          href="https://github.com/kereh"
          className="font-bold text-foreground underline underline-offset-4"
        >
          RK
        </Link>
      </span>
    </footer>
  );
}
