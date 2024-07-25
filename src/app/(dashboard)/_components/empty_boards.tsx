"use client";

import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useOrganization } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";

export const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    if (!organization) return;

    try {
      setLoading(true);
      const response = await axios.post("/api/createBoard", {
        data: { orgId: organization.id, title: "Untitled",autherName: organization.name },
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
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" height={110} width={110} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={loading} onClick={onClick} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};
