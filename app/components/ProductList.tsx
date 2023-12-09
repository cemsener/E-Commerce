"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import type { ProductInt } from "../types/product";

// interface ProductsArray extends Array<ProductInt> {}
type ProductsArray = Array<ProductInt>;

const ProductList = () => {
  const [products, setProducts] = useState<ProductsArray>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="md:container">
      <h1 className="my-6 text-3xl font-bold text-slate-100">Product List</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
            category={product.category}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
