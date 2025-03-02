import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";

const ManagerCard = () => {
  return (
    <Card
      classNames={{
        base: "flex-1 border-2 border-[#3b6abb] shadow-md rounded-md min-w-[220px]",
        body: "flex flex-col items-center justify-center",
      }}
    >
      <CardBody>
        <Avatar
          classNames={{
            base: "justify-center mb-3",
          }}
          isBordered
          color="warning"
          src="/warma.gif"
          className="size-[128px]"
          
        />
        <div>
          <p className="text-2xl font-bold text-center text-[#2c2b7c]">
            Warmma
          </p>
          <p className="text-sm text-gray-500 text-center">Descriptions</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default ManagerCard;
