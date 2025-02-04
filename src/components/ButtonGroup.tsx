import { useState } from "react";
import CurrencyModal from "./CurrencyModal";
import { useToast } from "@/components/ui/use-toast";

const ButtonGroup = () => {
  const [modalType, setModalType] = useState<"create" | "edit" | "delete" | null>(null);
  const { toast } = useToast();

  const handleModalSubmit = (data: { code: string; name: string; rate: string }) => {
    toast({
      title: "Success",
      description: `Currency ${modalType === "delete" ? "deleted" : modalType === "edit" ? "updated" : "created"} successfully`,
    });
    setModalType(null);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <button
          onClick={() => setModalType("create")}
          className="flex-1 bg-[#0F1729] text-white py-2 px-4 rounded-md shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Create Currency
        </button>
        <button
          onClick={() => setModalType("delete")}
          className="flex-1 bg-[#0F1729] text-white py-2 px-4 rounded-md shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Delete Currency
        </button>
      </div>
      <button
        onClick={() => setModalType("edit")}
        className="w-full bg-[#0F1729] text-white py-2 px-4 rounded-md shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        Edit Currency
      </button>
      {modalType && (
        <CurrencyModal
          type={modalType}
          isOpen={true}
          onClose={() => setModalType(null)}
          onSubmit={handleModalSubmit}
        />
      )}
    </div>
  );
};

export default ButtonGroup;