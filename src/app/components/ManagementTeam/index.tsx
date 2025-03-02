import React from "react";
import ManagerCard from "./components/ManagerCard";
import SectionWrapper from "../SectionWrapper";

const ManagementTeam = () => {
  return (
    <SectionWrapper
      title="🏆 管理团队"
      classNames={{
        body: "flex flex-row gap-4 flex-wrap w-full justify-around",
      }}
    >
      <ManagerCard />
      <ManagerCard />
      <ManagerCard />
    </SectionWrapper>
  );
};

export default ManagementTeam;
