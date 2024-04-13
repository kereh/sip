"use client";

import { ColumnDef } from "@tanstack/react-table";
import { RouterOutput } from "~/server/api/trpc";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { MoreHorizontal } from "lucide-react";

type Data = {
  id: string;
  nomor: string | null;
  nama: string;
  idRak: string;
  dipinjam: boolean;
  rak: { id: string; nama: string };
};

export const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "nomor",
    header: "No.",
    cell: ({ row }) => {
      const no = row.original.nomor;
      return <Badge>{no}</Badge>;
    },
  },
  {
    accessorKey: "rak.nama",
    header: "Rak",
    cell: ({ row }) => {
      const rak = row.original.rak.nama;
      return <Badge variant="secondary">{rak}</Badge>;
    },
  },
  {
    accessorKey: "nama",
    header: "Nama",
  },
  {
    accessorKey: "dipinjam",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.dipinjam;

      return (
        <Badge variant={`${!status ? "default" : "destructive"}`}>
          {!status ? "Tersedia" : "Dipinjam"}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Pinjam buku
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
