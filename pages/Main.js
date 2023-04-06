import Header from "@/components/Header";
import ProductItem from "@/components/ProductItem";
import products from "@/lib/productsList";

function Main() {
  return (
    <main className="lg:col-span-4 col-span-6">
      <Header />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </main>
  );
}

export default Main;
