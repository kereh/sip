import { api } from "~/trpc/server";
import { columns } from "~/components/table/table-col";
import DataTable from "~/components/table/table-buku";
import BukuLayout from "~/components/layouts/buku-layout";

export default async function Page() {
  const data = await api.buku.semua();

  return (
    <BukuLayout>
      <div className="leading-relaxed">
        <h1 className="text-xl font-semibold">Halaman Daftar Buku</h1>
        <p className="text-sm text-muted-foreground">
          Silahkan tuliskan di form pencarian buku yang anda ingin cari.
        </p>
      </div>
      <DataTable data={data} columns={columns} />
    </BukuLayout>
  );
}
