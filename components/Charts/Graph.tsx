import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import DropdownButton from "../DropdownButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  //   zoomPlugin,
  Title,
  Tooltip,
  Legend
);

export default function Graph() {
  const handleRankTypeChange = () => {};
  const handleSurfaceChange = () => {};

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
            <p className="font-semibold text-xl text-darkerGray select-none">
              Charts
            </p>
            <div className="w-full flex flex-wrap gap-1 sm:gap-2.5">
              <DropdownButton
                options={[
                  { value: "ELO Ratings", label: "ELO Ratings" },
                  { value: "ELO Rankings", label: "ELO Rankings" },
                  { value: "ELO Ratings by Age", label: "ELO Ratings by Age" },
                  {
                    value: "ELO Rankings by Age",
                    label: "ELO Rankings by Age",
                  },
                ]}
                onChange={() => {
                  handleRankTypeChange;
                }}
              />
              <DropdownButton
                options={[
                  { value: "Overall", label: "Overall" },
                  { value: "Hard", label: "Hard" },
                  { value: "Clay", label: "Clay" },
                  { value: "Grass", label: "Grass" },
                ]}
                onChange={() => {
                  handleSurfaceChange;
                }}
              />
            </div>
          </div>
      insert graph here
    </div>
  );
}
