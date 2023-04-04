import Image from "next/image";
import { addToBasket, countToBasket, deleteToBasket } from "@/store/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { NumberFormat } from "@/lib";

function ProductItem({ product }) {
  const productCount = useSelector((state) => state.basket.find((item) => item.id === product.id));
  const total = useSelector((state) => state.total);
  const dispatch = useDispatch();
  return (
    <div className="bg-white border-2 rounded-md p-4 text-center">
      <Image
        width="300"
        height="300"
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain"
      />
      <h3 className="text-lg font-bold mt-4">{product.name}</h3>
      <p className="sm:text-lg font-bold mt-3 text-orange-500">{NumberFormat(product.price)}</p>
      <div className="grid sm:grid-cols-3 gap-2 mt-4">
        <button
          disabled={!(productCount?.count > 0)}
          className="bg-gradient-to-t from-red-500 to-rose-500 active:from-red-600 active:to-rose-600 select-none text-white rounded-md p-2 disabled:from-gray-300 disabled:to-slate-300"
          onClick={() => dispatch(deleteToBasket(product))}
        >
          Sell
        </button>
        <input
          className="bg-white border rounded-md p-2 w-full outline-orange-500 disabled:border-red-600 disabled:bg-red-100 text-center appearance-none"
          type="number"
          name="count"
          id="count"
          disabled={!(product.price <= total)}
          onChange={(e) => dispatch(countToBasket({ ...product, count: e.target.value }))}
          value={productCount?.count || 0}
        />
        <button
          disabled={!(product.price <= total)}
          className="transition-all bg-gradient-to-t from-orange-500 to-amber-500 text-white rounded-md p-2 select-none active:from-orange-600 active:to-amber-600  disabled:from-gray-300 disabled:to-slate-300"
          onClick={() => dispatch(addToBasket(product))}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
