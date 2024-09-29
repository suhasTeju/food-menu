"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";
import clsx from "clsx";
import { SearchIcon } from "@/components/icons";
import { useState } from "react";
import { Switch } from "./ui/switch";
import { Snippet } from "@nextui-org/snippet";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100 ml-2",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  const [isVegChecked, setIsVegChecked] = useState(false);
  const [isNonVegChecked, setIsNonVegChecked] = useState(false);
  return (
    <NextUINavbar className="grid grid-cols-[4fr 2fr] py-4 px-[0px !important]" height="6rem" maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          {searchInput}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={30}
          viewBox="0 0 24 24"
          id="menu"
        >
          <path
            fill="#7fbde7"
            d="M7 10.75H3A1.752 1.752 0 011.25 9V5A1.752 1.752 0 013 3.25H7A1.752 1.752 0 018.75 5V9A1.752 1.752 0 017 10.75zm-4-6A.25.25 0 002.75 5V9A.25.25 0 003 9.25H7A.25.25 0 007.25 9V5A.25.25 0 007 4.75zM7 20.75H3A1.752 1.752 0 011.25 19V15A1.752 1.752 0 013 13.25H7A1.752 1.752 0 018.75 15v4A1.752 1.752 0 017 20.75zm-4-6a.25.25 0 00-.25.25v4a.25.25 0 00.25.25H7A.25.25 0 007.25 19V15A.25.25 0 007 14.75z"
          ></path>
          <path
            fill="#232323"
            d="M22 5.75H12a.75.75 0 010-1.5H22a.75.75 0 010 1.5zM17 9.75H12a.75.75 0 010-1.5h5a.75.75 0 010 1.5zM22 15.75H12a.75.75 0 010-1.5H22a.75.75 0 010 1.5zM20 9.75H19a.75.75 0 010-1.5h1a.75.75 0 010 1.5zM17 19.75H12a.75.75 0 010-1.5h5a.75.75 0 010 1.5zM20 19.75H19a.75.75 0 010-1.5h1a.75.75 0 010 1.5z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart ml-2"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>
      </NavbarContent>
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="start">
        <Switch isNonVeg={false} key="veg" checked={isVegChecked} setChecked={setIsVegChecked} />
        <Switch
          key="nonveg"
          isNonVeg
          checked={isNonVegChecked}
          setChecked={setIsNonVegChecked}
        />
      </NavbarContent>
    </NextUINavbar>
  );
};
