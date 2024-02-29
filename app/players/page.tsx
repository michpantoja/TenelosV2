import Banner from "@/components/Banner";
import News from "@/components/News";
import PlayersTable from "@/components/Tables/Players";

export default function Players() {
  return (
    <div className="w-full flex flex-col gap-6">
      <Banner />
      <div className="w-full flex flex-col gap-4">
        <p className="font-semibold text-xl text-darkerGray select-none">
          Players
        </p>
        <PlayersTable />
      </div>
    </div>
  );
}
