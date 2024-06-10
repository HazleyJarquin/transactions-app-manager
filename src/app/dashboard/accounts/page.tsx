"use client";

import { useAccounts } from "@/hooks/useAccounts";
import useAxiosInstance from "@/lib/axiosConfig";
import { fetchAccounts } from "@/services/getAccount.service";
import { Account } from "@/types/Account";
import { DataTable, NewCard } from "hazley-ui";
import React, { useEffect, useState } from "react";

export default function Accounts() {
  const { data: accounts, isLoading } = useAccounts();

  const columns = [
    {
      header: "Id",
      accessorKey: "id",
    },
    {
      header: "Account type",
      accessorKey: "type",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
  ];
  const data =
    accounts?.map((account) => {
      return {
        id: account?.id,
        type: account?.type,
        category: account?.category,
      };
    }) || [];
  return (
    <div>
      {isLoading ? (
        <div>Loading..</div>
      ) : (
        <DataTable
          columnToSearchData="type"
          columns={columns}
          data={data}
          inputPlaceHolder="Search type"
          nextButtonPaginationText="Next"
          noResultText="No found"
          previousButtonPaginationText="Previous"
          rowsSelectedText="rows selected"
        />
      )}

      {/* <NewCard /> */}
    </div>
  );
}
