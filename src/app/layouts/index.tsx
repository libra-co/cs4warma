import React from "react";
import { Navbar, NavbarItem, NavbarBrand, NavbarContent } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const Layout = () => {
  return (
    <Navbar
      className=""
      classNames={{
        base: "bg-[#2c2c7e] select-none",
        brand: "text-white",
      }}
    >
      <NavbarBrand>
        <span className="font-bold">沃先生的沃尔玛</span>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="light"
            className="text-white"
          >
            首页
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="light"
            className="text-white"
          >
            论坛
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="light"
            className="text-white"
          >
            服务器检测
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Layout;
