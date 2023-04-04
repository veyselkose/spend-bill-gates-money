import { addToBasket, countToBasket, deleteToBasket } from "@/store/basketSlice";
import { NumberFormat } from "@/lib";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

function BasketItem({ item }) {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.total);
  console.log(item.price <= total);
  return (
    <div className="flex bg-white items-center border px-4 flex-shrink-0 h-24 rounded-md" key={item.id}>
      <Image
        src={item.image}
        width={100}
        height={100}
        className="object-contain h-full w-12"
        alt="product image"
      />
      <div className="flex ms-5 w-[75px] h-9 lg:h-6 lg:w-14 flex-shrink-0">
        <button
          disabled={!(item.count > 0)}
          className="bg-gradient-to-t w-1/3 flex-shrink-0 from-red-500 to-rose-500 active:from-red-600 active:to-rose-600 select-none text-white rounded-s-md disabled:from-gray-300 disabled:to-slate-300"
          onClick={() => dispatch(deleteToBasket(item))}
        >
          -
        </button>
        <input
          className="bg-white border p-2 w-2/3 flex-shrink-0 outline-orange-500 disabled:border-red-600 disabled:bg-red-100 text-center appearance-none"
          type="number"
          name="count"
          id="count"
          disabled={!(item.price <= total)}
          onChange={(e) => dispatch(countToBasket({ ...item, count: e.target.value }))}
          value={item.count || 0}
        />
        <button
          disabled={!(item.price <= total)}
          className="transition-all w-1/3  flex-shrink-0 bg-gradient-to-t from-orange-500 to-amber-500 text-white rounded-e-md  select-none active:from-orange-600 active:to-amber-600  disabled:from-gray-300 disabled:to-slate-300"
          onClick={() => dispatch(addToBasket(item))}
        >
          +
        </button>
      </div>
      <div className="ms-auto flex flex-col">
        <h3 className="font-bold text-right">{item.name}</h3>
        <span className="font-bold ms-auto">{NumberFormat(item.count * item.price)}</span>
      </div>
    </div>
  );
}

export default BasketItem;
