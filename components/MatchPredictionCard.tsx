import { MdSportsTennis } from "react-icons/md";

export default function MatchPredictionCard({
  winner,
  score,
}: {
  winner: string;
  score: string;
}) {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-3 p-8 bg-green/50 rounded-lg">
      <MdSportsTennis size={60} color="rgb(68 68 68)"/>
      <p className="text-darkerGray font-bold text-xl select-none uppercase">
        Next Match Prediction
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex items-end">
          <p className="text-darkerGray font-medium text-sm select-none">
            WINNER:<span className="text-lg font-semibold ml-2 underline">{winner}</span>
          </p>
        </div>
        <div className="flex items-end">
          <p className="text-darkerGray font-medium text-sm select-none">
            SCORE:<span className="text-lg font-semibold ml-2">{score}</span>
          </p>
        </div>
      </div>
      <p className="text-darkerGray font-regular text-xs select-none mt-4">
        Disclaimer: This prediction is solely based on statistics.
      </p>
    </div>
  );
}
