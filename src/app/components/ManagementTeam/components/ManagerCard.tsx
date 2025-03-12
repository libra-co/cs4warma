import React, { type FC } from "react";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";

interface ManagerCardProps {
  name: string
  description: string
}

const ManagerCard: FC<ManagerCardProps> = ({ name, description }) => {
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
            {name}
          </p>
          <p className="text-sm text-gray-500 text-center">{description}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default ManagerCard;
