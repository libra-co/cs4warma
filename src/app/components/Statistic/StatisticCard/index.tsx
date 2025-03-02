import { Avatar } from "@heroui/avatar";
import { Card, CardBody, CardHeader } from "@heroui/card";
import React from "react";
import StatisticBar, { StatisticBarProps } from "./components/StatisticBar";

const StatisticCard = () => {
  const gradConfig: Record<string, string> = {
    "0-50": "整挺好",
    "50-100": "很棒",
  };

  const cardsData: StatisticBarProps[] = [
    {
      label: "Rating Pro",
      value: 0.7,
      valueLabel: 50,
      max: 2,
      gradingScaleConfig: gradConfig,
    },
    {
      label: "K/D",
      value: 2.2,
      valueLabel: 50,
      max: 3,
      gradingScaleConfig: gradConfig,
    },
    {
      label: "ADR",
      value: 50,
      valueLabel: 50,
      max: 120,
      gradingScaleConfig: gradConfig,
    },
    {
      label: "RWS",
      value: 13,
      valueLabel: 13,
      max: 16,
      gradingScaleConfig: gradConfig,
    },
  ];

  return (
    <div className="flex flex-1 flex-col justify-center items-center gap-4 min-w-[220px] ">
      <Avatar src="/warma.gif" size="lg" className="flex-shrink-0" />
      <Card
        classNames={{
          base: "size-full",
          body: "flex flex-col gap-5 p-3 pb-8",
        }}
      >
        <CardHeader>
          <div className="size-full gap-1 flex justify-center items-center">
            <img src="/S.png" className="size-4" alt="Warma" />
            <span className="text-[#2c2b7c]">Warma</span>
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col gap-6">
            {cardsData.map((data, index) => {
              const { max, min, value, label, valueLabel, gradingScaleConfig } =
                data;
              return (
                <StatisticBar
                  key={`statistic-bar-${index}`}
                  max={max}
                  min={min}
                  value={value}
                  label={label}
                  valueLabel={valueLabel}
                  gradingScaleConfig={gradingScaleConfig}
                />
              );
            })}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default StatisticCard;
