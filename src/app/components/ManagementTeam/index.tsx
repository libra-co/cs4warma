import React from "react";
import ManagerCard from "./components/ManagerCard";
import SectionWrapper from "../SectionWrapper";

const ManagementTeam = () => {

  const managers = [
    {
      name: "WARMA",
      description: 'description warma'
    },
    {
      name: "libra",
      description: 'description libra'
    },
    {
      name: "kilo",
      description: 'description kilo'
    },
  ]

  return (
    <SectionWrapper
      title="🏆 管理团队"
      classNames={{
        body: "flex flex-row gap-4 flex-wrap w-full justify-around",
      }}
    >
      {
        managers.map(({ name, description }) =>
          <ManagerCard key={name} name={name} description={description} />
        )
      }
    </SectionWrapper>
  );
};

export default ManagementTeam;
