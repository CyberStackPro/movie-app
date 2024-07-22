import React from "react";
import ProductCard, { Products } from "./ProductCard";

interface Props {
  products: Products[];
  selectedProducts: (product: Products) => void;
  pickedProducts: Products[];
}

const ProductList = ({ products, selectedProducts, pickedProducts }: Props) => {
  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4  gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          products={product}
          onSelectProduct={selectedProducts}
          pickedProducts={pickedProducts}
        />
      ))}
    </div>
  );
};

export default ProductList;
