"use client";

import { EmptyOrganization } from "./_components/empty_organization";
import { BoardList } from "./_components/board_list";
import { useOrganization } from "@clerk/nextjs";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: boolean;
  };
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrganization />
      ) : (
        <BoardList
          autherName={organization.name}
          organizationId={organization.id}
          query={searchParams}
        />
      )}
    </div>
  );
};

export default DashboardPage;
