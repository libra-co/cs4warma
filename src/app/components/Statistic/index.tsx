import { Card, CardBody, CardHeader } from "@heroui/card";
import React from "react";
import StatisticCard from "./StatisticCard";

const Statistic = () => {
  return (
    <Card
      classNames={{
        base: "border-2 border-[#3b6abb] shadow-md rounded-md",
        header: "justify-center mb-6 text-4xl w-full pt-8 text-[#3b6abb]",
        body: "flex-row justify-around gap-4 flex-wrap",
      }}
    >
      <CardHeader>
        <span>🏆数据统计</span>
      </CardHeader>
      <CardBody>
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
      </CardBody>
    </Card>
  );
};

export default Statistic;
