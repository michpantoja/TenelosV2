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

export default function PlayerGraph({ invert, filter, type, surface }: any) {
  const handleRankTypeChange = () => {};
  const handleSurfaceChange = () => {};
  const data = [
    {
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
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-base text-[#FFFFFF] select-none px-4 py-2 bg-atp w-fit rounded-full">
          ATP Points
        </p>
        <div className="bg-white">
          <Line
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
                  display: false,
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
            data={{
              datasets: [
                {
                  data: data[0].data,
                  borderColor: "#444444",
                  backgroundColor: "#444444",
                  borderWidth: 2,
                  pointBorderWidth: 2,
                  pointRadius: 0,
                  pointHoverRadius: 5,
                },
              ],
            }}
            height={"450px"}
          />
        </div>
      </div>
      <hr className="text-darkGray"></hr>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-base text-[#FFFFFF] select-none px-4 py-2 bg-overall w-fit rounded-full">
          Overall ELO Ratings
        </p>
        <div className="bg-white">
          <Line
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
                  display: false,
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
            data={{
              datasets: [
                {
                  data: data[0].data,
                  borderColor: "#191919",
                  backgroundColor: "#191919",
                  borderWidth: 2,
                  pointBorderWidth: 2,
                  pointRadius: 0,
                  pointHoverRadius: 5,
                },
              ],
            }}
            height={"450px"}
          />
        </div>
      </div>
      <hr className="text-darkGray"></hr>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-base text-[#FFFFFF] select-none px-4 py-2 bg-hard w-fit rounded-full">
          Hard ELO Ratings
        </p>
        <div className="bg-white">
          <Line
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
                  display: false,
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
            data={{
              datasets: [
                {
                  data: data[0].data,
                  borderColor: "#006980",
                  backgroundColor: "#006980",
                  borderWidth: 2,
                  pointBorderWidth: 2,
                  pointRadius: 0,
                  pointHoverRadius: 5,
                },
              ],
            }}
            height={"450px"}
          />
        </div>
      </div>
      <hr className="text-darkGray"></hr>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-base text-[#FFFFFF] select-none px-4 py-2 bg-clay w-fit rounded-full">
          Clay ELO Ratings
        </p>
        <div className="bg-white">
          <Line
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
                  display: false,
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
            data={{
              datasets: [
                {
                  data: data[0].data,
                  borderColor: "#FF9B66",
                  backgroundColor: "#FF9B66",
                  borderWidth: 2,
                  pointBorderWidth: 2,
                  pointRadius: 0,
                  pointHoverRadius: 5,
                },
              ],
            }}
            height={"450px"}
          />
        </div>
      </div>
      <hr className="text-darkGray"></hr>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-base text-[#FFFFFF] select-none px-4 py-2 bg-grass w-fit rounded-full">
          Grass ELO Ratings
        </p>
        <div className="bg-white">
          <Line
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
                  display: false,
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
            data={{
              datasets: [
                {
                  data: data[0].data,
                  borderColor: "#028360",
                  backgroundColor: "#028360",
                  borderWidth: 2,
                  pointBorderWidth: 2,
                  pointRadius: 0,
                  pointHoverRadius: 5,
                },
              ],
            }}
            height={"450px"}
          />
        </div>
      </div>
    </div>
  );
}
