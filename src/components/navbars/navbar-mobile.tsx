import { Dispatch } from "react";
import { Button } from "~/components/ui/button";
import { XOctagon } from "lucide-react";

interface Props {
  open: boolean;
  setOpen: Dispatch<boolean>;
}

export default function NavbarMobile({ open, setOpen }: Props) {
  return (
    <div className="fixed right-0 top-0 flex h-screen w-full justify-end backdrop-blur">
      <div className="h-screen w-2/3 border-l bg-background px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">SIP</h1>
          <Button onClick={() => setOpen(!open)} variant="ghost" size="icon">
            <XOctagon />
          </Button>
        </div>
      </div>
    </div>
  );
}
