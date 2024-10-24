import { CustomFlowbiteTheme } from "flowbite-react";

export const customTheme: CustomFlowbiteTheme["table"] = {
  root: {
    base: "w-full text-left text-sm text-white",
    shadow:
      "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md bg-black",
    wrapper: "relative",
  },
  body: {
    base: "group/body",
    cell: {
      base: "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg",
    },
  },
  head: {
    base: "group/head text-sm uppercase text-primary",
    cell: {
      base: "border-b border-primary px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg",
    },
  },
  row: {
    base: "group/row border-primary",
    hovered: "hover:bg-gray-600",
    striped: "odd:bg-black-800 even:bg-black-700",
  },
};
