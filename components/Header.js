import { NumberFormat } from "@/utils";
import React from "react";
import { useSelector } from "react-redux";
function Header() {
  const total = useSelector((state) => state.total);
  return (
    <header className="sticky top-0 py-5 bg-gradient-to-t from-orange-500 to-amber-500 mb-4 rounded-b-md shadow-2xl">
      <h1 className="text-center text-3xl font-bold text-white">{NumberFormat(total)}</h1>
    </header>
  );
}

export default Header;
