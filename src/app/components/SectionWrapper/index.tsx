import { Card, CardBody, CardHeader } from "@heroui/card";
import type { CardSlots, SlotsToClasses } from "@heroui/react";
import React, { PropsWithChildren, ReactNode, type FC } from "react";
import { twMerge } from "tailwind-merge";

interface SectionWrapperProps {
  title?: ReactNode;
  classNames?: SlotsToClasses<CardSlots>;
}

const SectionWrapper: FC<PropsWithChildren<SectionWrapperProps>> = (props) => {
  const { title, classNames = {}, children } = props;
  const {
    base: baseClassName,
    header: headerClassName,
    body: bodyClassName,
    footer: footerClassName,
  } = classNames;
  return (
    <Card
      classNames={{
        base: twMerge(
          "border-2 border-[#3b6abb] shadow-md rounded-md text-[#2c2b7c]",
          baseClassName
        ),
        header: twMerge(
          "justify-center text-4xl w-full pt-8 pb-4",
          headerClassName
        ),
        body: twMerge("block", bodyClassName),
        footer: footerClassName,
      }}
    >
      <CardHeader>{title}</CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default SectionWrapper;
