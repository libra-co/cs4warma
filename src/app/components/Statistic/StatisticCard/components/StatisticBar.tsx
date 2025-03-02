import React, { type FC, type ReactNode } from "react";
import { calGradingScale, calIndicatorPosition } from "./utils";

export interface StatisticBarProps {
  value: number;
  max: number;
  /**
   * Minimum value of the bar. Defaults to 0.
   */
  min?: number;
  label: ReactNode;
  valueLabel: ReactNode;
  gradingScaleConfig: Record<string, string>;
}

const StatisticBar: FC<StatisticBarProps> = (props) => {
  const { value, max, min = 0, label, valueLabel, gradingScaleConfig } = props;

  const indicatorPosition = calIndicatorPosition(value, max, min);
  const gradingScale = calGradingScale(gradingScaleConfig, indicatorPosition);

  return (
    <div className="text-black font-semibold">
      <div className="flex justify-between">
        <span>{label}</span>
        <span>{valueLabel}</span>
      </div>
      <div className="h-1 bg-gradient-to-r from-red-600 to-green-600 relative">
        <div
          className="w-[3px] h-3.5 absolute -top-[5px] bg-black"
          style={{ left: `${indicatorPosition}%` }}
        />
        <span
          className="absolute right-0 text-xs top-2"
          style={{ color: gradingScale?.color ?? "inherit" }}
        >
          {gradingScale?.text}
        </span>
      </div>
    </div>
  );
};

export default StatisticBar;
