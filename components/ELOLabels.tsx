import { FaCaretUp, FaCaretDown } from "react-icons/fa6";

export function PositiveELO({ elo }: { elo: number }) {
  return (
    <div className="w-fit flex flex-col justify-center items-center">
      <FaCaretUp size={14} color="green" />
      <p className="text-xs font-medium text-green select-none">{elo}</p>
    </div>
  );
}

export function NegativeELO({ elo }: { elo: number }) {
  return (
    <div className="w-fit flex flex-col justify-center items-center">
      <p className="text-xs font-medium text-[#DB1131] select-none">{elo}</p>
      <FaCaretDown size={14} color="red" />
    </div>
  );
}
