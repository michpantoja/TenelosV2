import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Last10HP from "@/components/Tables/Last10HP";
import LiveRatingsTable from "@/components/Tables/LiveRatings";

export default function LiveRatings() {
  return (
    <main className="w-full px-6 xl:px-32 pb-4 xl:pb-8 gap-6 flex flex-col items-center">
      <Banner />
      <div className="w-full flex gap-6">
        <div className="w-3/4 flex flex-col gap-4">
        <p className="font-semibold text-xl text-darkerGray select-none">Weekly Ratings</p>
        <LiveRatingsTable />
        </div>
        <div className="w-1/4 flex flex-col gap-4">
          <Last10HP />
          <Blog />
        </div>
      </div>
    </main>
  );
}