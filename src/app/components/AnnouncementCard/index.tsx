import React from "react";
import { Card, CardBody } from "@heroui/card";
import SectionWrapper from "../SectionWrapper";

const AnnouncementCard = () => {
  return (
    <SectionWrapper title="📢 沃尔玛公告">
      <Card radius="sm">
        <CardBody className="bg-[#eff4fe] text-center text-[#342aa2] py-4">
          🌟【欢迎来到「沃先生的沃尔玛」超市门口】🌟
        </CardBody>
      </Card>
    </SectionWrapper>
  );
};

export default AnnouncementCard;
