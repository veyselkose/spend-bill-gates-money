import BasketItem from "@/components/BasketItem";
import { NumberFormat } from "@/lib";
import { useSelector } from "react-redux";

function Side() {
  const { basket } = useSelector((state) => state);
  return (
    <aside id="basket" className="lg:col-span-2 col-span-6 relative pb-10">
      <div className="flex flex-col gap-4 lg:sticky top-0">
        <h1 className="text-center font-bold text-3xl pt-10">Your Receipt</h1>
        {basket.map((item) => (
          <BasketItem item={item} key={item.id} />
        ))}
        <h1 className="flex">
          <span className="text-lg font-bold">Total</span>
          <span className="text-lg font-bold text-orange-500 ms-auto">
            {NumberFormat(basket.reduce((sum, item) => sum + item.price * item.count, 0))}
          </span>
        </h1>
      </div>
    </aside>
  );
}

export default Side;
