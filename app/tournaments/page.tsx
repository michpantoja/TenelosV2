import TournamentsTable from "@/components/Tables/Tournaments";
import React from "react";

export default function Tournaments() {
  return (
    <div className="w-full flex gap-6">
      <div className="w-full flex flex-col gap-4">
        <p className="font-semibold text-xl text-darkerGray select-none">
          Tournaments
        </p>
        <TournamentsTable />
      </div>
    </div>
  );
}
