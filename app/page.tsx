import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Last10HPTable from "@/components/Tables/Last10HP";
import LatestTournament from "@/components/Tables/LatestTournament";
import LiveRatingsTable from "@/components/Tables/LiveRatings";
import Top15ATTable from "@/components/Tables/Top15AT";

export default function LiveRatings() {
  return (
    <div className="w-full flex flex-col gap-6">
      <Banner />
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-4">
        <div className="w-full lg:w-3/4 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-xl text-darkerGray select-none">
              Weekly Ratings
            </p>
            <LiveRatingsTable />
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-xl text-darkerGray select-none">
              Latest Tournaments
            </p>
            <LatestTournament />
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
          <Last10HPTable />
          <Top15ATTable />
          <Blog />
        </div>
      </div>
    </div>
  );
}
