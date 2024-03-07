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
import zoomPlugin from "chartjs-plugin-zoom";
import DropdownButton from "../DropdownButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  zoomPlugin,
  Title,
  Tooltip,
  Legend
);

export default function H2HGraph({ invert, filter, type, surface }: any) {
  const handleRankTypeChange = () => {};
  const handleSurfaceChange = () => {};
  const data = [
    {
      label: "ELO Ratings",
      data: [
        {
          x: "2020-01-01",
          y: 1000,
        },
        {
          x: "2020-02-01",
          y: 1100,
        },
        {
          x: "2020-03-01",
          y: 1200,
        },
        {
          x: "2020-04-01",
          y: 1300,
        },
        {
          x: "2020-05-01",
          y: 1400,
        },
        {
          x: "2020-06-01",
          y: 1500,
        },
        {
          x: "2020-07-01",
          y: 1600,
        },
        {
          x: "2020-08-01",
          y: 1700,
        },
        {
          x: "2020-09-01",
          y: 1800,
        },
        {
          x: "2020-10-01",
          y: 1900,
        },
        {
          x: "2020-11-01",
          y: 2000,
        },
        {
          x: "2020-12-01",
          y: 2100,
        },
      ],
      fill: false,
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgba(75, 192, 192, 0.2)",
    },
  ];

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
      <div className="bg-white">
        <Line
          data={{ datasets: data }}
          options={{
            // scales: {
            //   xAxes: {
            //     type: type,
            //     time: {
            //       unit: "year",
            //       tooltipFormat: "YYYY-MM-DD",
            //     },
            //   },
            //   yAxes: {
            //     position: "right",
            //     reverse: invert,
            //   },
            // },
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: false,
              },
              zoom: {
                zoom: {
                  drag: {
                    enabled: true,
                  },
                  wheel: {
                    enabled: true,
                  },
                },
              },
            },
            maintainAspectRatio: false,
          }}
          // data={{
          //   datasets: [],
          // }}
          height={"450px"}
        />
      </div>
    </div>
  );
}
