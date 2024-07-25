"use client";

import { useEffect, useState } from "react";
import { getBoardByID } from "@/actions/getBoardByID";
import { InfoSkeleton, TabSeparator } from "./info";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Actions } from "@/components/actions";
import { Menu } from "lucide-react";
import axios from "axios";

interface TempProps {
  boardID: string;
  onOpen: (id: string, title: string) => void;
}

const Temp: React.FC<TempProps> = ({ boardID, onOpen }) => {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`/api/board/${boardID}`, {
          data: { boardID: boardID },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching board data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [boardID]);

  if (isLoading) return <InfoSkeleton />;
  if (!data) return null;

  return (
    <>
      <Hint label="Edit title" side="bottom" sideOffset={10}>
        <Button
          variant="board"
          className="text-base font-normal px-2"
          onClick={() => onOpen(data.id, data.title)}
        >
          {data.authorName}
        </Button>
      </Hint>
      <TabSeparator />
      <Actions id={data.id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Main menu" side="bottom" sideOffset={10}>
            <Button size="icon" variant="board">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </>
  );
};

export default Temp;
