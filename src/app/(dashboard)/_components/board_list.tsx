"use client";
import { EmptySearch } from "./empty_search";
import { EmptyBoards } from "./empty_boards";
import { EmptyFavorites } from "./empty_favorites";
import { BoardCard } from "./board-card";
import { NewBoardButton } from "./new_board_button";
import { useEffect, useState } from "react";
import axios from "axios";

interface Board {
  id: string;
  title: string;
  imageUrl?: string;
  authorId: string;
  authorName: string;
  createdAt: Date;
  organizationId: string;
}

interface BoardListProps {
  autherName: string;
  organizationId: string;
  query: {
    search?: string;
    favorites?: boolean;
  };
}

export const BoardList = ({ organizationId, autherName, query }: BoardListProps) => {
  const [boards, setBoards] = useState<Board[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        console.log("Fetching boards for organization:", organizationId);
        const response = await axios.post("/api/board", {
          data: {
            organizationId,
          },
        });

        if (Array.isArray(response.data)) {
          setBoards(response.data);
        } else if (Array.isArray(response.data[0])) {
          setBoards(response.data[0]);
        } else {
          console.warn("Unexpected data structure:", response.data);
          setError("Received unexpected data structure from API");
          setBoards([]);
        }
      } catch (error) {
        console.error("Error fetching boards:", error);
        setError("Failed to fetch boards. Please try again.");
        setBoards([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBoards();
  }, [organizationId, query]);


  if (isLoading) {
    return (
      <>
        <h2 className="text-3xl">
          {query.favorites ? "Favorite boards" : "Team boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewBoardButton orgId={organizationId} autherName={autherName} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(boards) || boards.length === 0) {
    if (query.search) {
      return <EmptySearch />;
    }
    if (query.favorites) {
      return <EmptyFavorites />;
    }
    return <EmptyBoards />;
  }

  return (
    <>
      <h2 className="text-3xl">
        {query.favorites ? "Favorite boards" : "Team boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
      <NewBoardButton orgId={organizationId} autherName={autherName} />
      {boards.map((board: Board) => (
          <BoardCard
            key={board.id}
            id={board.id}
            title={board.title}
            imageUrl={board.imageUrl || ""}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board.createdAt}
            orgId={board.organizationId}
            isFavorite={Boolean(query.favorites) || false}
          />
        ))}
      </div>
    </>
  );
};
