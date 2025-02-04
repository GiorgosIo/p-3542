import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type CurrencyModalProps = {
  type: "create" | "edit" | "delete";
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { code: string; name: string; rate: string }) => void;
};

const CurrencyModal = ({ type, isOpen, onClose, onSubmit }: CurrencyModalProps) => {
  const [currencyCode, setCurrencyCode] = useState("");
  const [currencyName, setCurrencyName] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");

  const handleSubmit = () => {
    onSubmit({
      code: currencyCode,
      name: currencyName,
      rate: exchangeRate,
    });
    onClose();
  };

  const titles = {
    create: "Add New Currency",
    edit: "Edit Currency",
    delete: "Delete Currency",
  };

  const descriptions = {
    create: "Add a new currency to the system.",
    edit: "Modify existing currency details.",
    delete: "Are you sure you want to delete this currency?",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{titles[type]}</DialogTitle>
          <DialogDescription>{descriptions[type]}</DialogDescription>
        </DialogHeader>
        {type !== "delete" && (
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="code"
                placeholder="Currency Code"
                value={currencyCode}
                onChange={(e) => setCurrencyCode(e.target.value)}
                className="col-span-4"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="name"
                placeholder="Currency Name"
                value={currencyName}
                onChange={(e) => setCurrencyName(e.target.value)}
                className="col-span-4"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="rate"
                placeholder="Exchange Rate"
                value={exchangeRate}
                onChange={(e) => setExchangeRate(e.target.value)}
                className="col-span-4"
              />
            </div>
          </div>
        )}
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            {type === "delete" ? "Delete" : type === "edit" ? "Save" : "Add"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CurrencyModal;