export default function MatchPredictionCard({
  winner,
  score,
}: {
  winner: string;
  score: string;
}) {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-3 p-8 bg-lightGray rounded-lg">
      <p className="text-darkerGray font-semibold text-xl select-none">
        Next Match Prediction
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex items-end">
          <p className="text-darkerGray font-medium text-sm select-none">
            WINNER:<span className="text-lg ml-2">{winner}</span>
          </p>
        </div>
        <div className="flex items-end">
          <p className="text-darkerGray font-medium text-sm select-none">
            SCORE:<span className="text-lg ml-2">{score}</span>
          </p>
        </div>
      </div>
      <p className="text-darkerGray font-regular text-sm select-none">
        Disclaimer: This prediction is solely based on statistics.
      </p>
    </div>
  );
}
