import { auth } from "@clerk/nextjs/server";
import { api } from "~/trpc/server";
import { AdminAkses } from "~/components/akses/admin-component";
import { columns as ColBuku } from "~/components/table/admin/col-buku";
import { columns as ColRak } from "~/components/table/admin/col-rak";
import { columns as ColPengunjung } from "~/components/table/admin/col-pengunjung";

import DashboardLayout from "~/components/layouts/dashboard-layout";
import DataTableBuku from "~/components/table/admin/table-buku";
import DataTableRak from "~/components/table/admin/table-rak";
import DataTablePengunjung from "~/components/table/admin/table-pengunjung";

export default async function Page() {
  // admin only
  const { sessionClaims } = auth();
  const role = sessionClaims?.metadata.role;
  if (role !== "admin" ?? role == undefined) {
    return <AdminAkses />;
  }
  // end admin only

  const buku = await api.buku.semua();
  const rak = await api.rak.semua();
  const pengunjung = await api.kunjungan.semua();

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-32 pt-14 md:gap-10 md:pt-16">
        <div className="flex w-full flex-col gap-6 md:flex-row">
          {/* buku */}
          <div className="w-full">
            <h1 className="text-2xl font-semibold">Buku</h1>
            <DataTableBuku columns={ColBuku} data={buku} />
          </div>
          {/* info buku */}
          <div className="w-full md:max-w-md">
            <h1 className="text-2xl font-semibold">Rak</h1>
            <DataTableRak columns={ColRak} data={rak} />
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-semibold">Pengunjung</h1>
          <DataTablePengunjung
            columns={ColPengunjung}
            data={pengunjung.kunjungan}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
