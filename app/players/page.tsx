import Banner from "@/components/Banner";
import News from "@/components/News";
import PlayersTable from "@/components/Tables/Players";
import Top15ATTable from "@/components/Tables/Top15AT";

export default function Players() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-3/4 flex flex-col gap-4">
        <p className="font-semibold text-xl text-darkerGray select-none">
          Players
        </p>
        <PlayersTable />
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <Top15ATTable />
        <News />
      </div>
    </div>
  );
}
