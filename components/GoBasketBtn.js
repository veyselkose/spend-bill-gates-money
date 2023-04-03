import React from "react";

function GoBasketBtn() {
  return (
    <a
      className="fixed block lg:hidden z-10 shadow-md right-4 bottom-4 rounded-full bg-gradient-to-t from-orange-500 to-amber-500 active:from-orange-600 active:to-amber-600 text-white px-4 py-3"
      href="#basket"
    >
      Basket
    </a>
  );
}

export default GoBasketBtn;
