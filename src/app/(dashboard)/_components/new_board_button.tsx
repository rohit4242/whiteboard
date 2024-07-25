"use client";

import { toast } from "sonner";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { useState } from "react";
import axios from "axios";

interface NewBoardButtonProps {
  autherName: string;
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({
  orgId,
  disabled,
  autherName,
}: NewBoardButtonProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    if (!orgId) return;

    try {
      setLoading(true);
      const response = await axios.post("/api/createBoard", {
        data: { orgId, title: "Untitled", autherName },
      });
      router.push(`board/${response.data.id}`);
      toast.success("Board is Created");
    } catch (error: any) {
      toast.error("Failed to create board");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      disabled={loading || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        (loading || disabled) &&
          "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">New board</p>
    </button>
  );
};
