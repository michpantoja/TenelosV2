import TournamentTable from "@/components/Tables/Tournament";
import React from "react";

export default function Tournament() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-xl text-darkerGray select-none text-center">
          Tournament Name
        </p>
        <p className="font-medium text-base text-gray select-none text-center">
          Tournament Date
        </p>
      </div>
      <TournamentTable />
    </div>
  );
}
