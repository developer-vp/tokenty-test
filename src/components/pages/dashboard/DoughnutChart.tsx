"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { cn } from "@/lib/utils";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({
  royaltyShare,
  className,
  chartWidth,
  textClassName,
}: {
  royaltyShare: number;
  className?: string;
  chartWidth: string;
  textClassName?: string;
}) => {
  const data = {
    datasets: [
      {
        label: "Royalty Shares",
        data: [100 - royaltyShare, royaltyShare],
        backgroundColor: ["#e2e2e2", "#fc6b1d"],
        borderWidth: 2,
        borderColor: ["#ffffff", "#ffffff"],
        hoverBorderColor: ["#ffffff", "#ffffff"],
        borderRadius: 15,
      },
    ],
  };
  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
    cutout: chartWidth, // Adjust this value to control thickness
  };
  return (
    <div
      className={cn(
        "relative flex h-20 w-20 items-center justify-center",
        className,
      )}
    >
      <Doughnut data={data} options={options} className="mb-2.5" />

      <h2
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold",
          textClassName,
        )}
      >
        {royaltyShare}%
      </h2>
    </div>
  );
};

export default DoughnutChart;
