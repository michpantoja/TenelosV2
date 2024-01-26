import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Last10HPTable from "@/components/Tables/Last10HP";
import LiveRatingsTable from "@/components/Tables/LiveRatings";

export default function LiveRatings() {
  return (
    <div className="w-full flex gap-6">
      <div className="w-full lg:w-3/4 flex flex-col gap-4">
        <p className="font-semibold text-xl text-darkerGray select-none">
          Weekly Ratings
        </p>
        <LiveRatingsTable />
      </div>
      <div className="w-1/4 hidden lg:flex flex-col gap-4">
        <Last10HPTable />
        <Blog />
      </div>
    </div>
  );
}
