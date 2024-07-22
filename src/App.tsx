// import { useState } from "react";
// import NavBar from "./components/NavBar";
// import ProductList from "./components/ProductList";
// import {
//   categories,
//   products as initalProducts,
//   categories as initialCategories,
// } from "./data/e-commerceData";
// import { Products } from "./components/ProductCard";
// import Home from "./pages/Home";
// import styles from "./style";
// import FilterByCategory, { Category } from "./components/FilterByCategory";
// const App = () => {
//   const [selectedProducts, setSelectedProducts] = useState<Products[]>([]);
//   const [products, setProducts] = useState<Products[]>(initalProducts);
//   const [categories, setCategories] = useState<string[]>([]);

//   const handleSelectProduct = (product: Products) => {
//     setSelectedProducts((prevSelectedProducts) => {
//       if (prevSelectedProducts.find((p) => p.id === product.id)) {
//         // If the product is already selected, remove it from the list
//         return prevSelectedProducts.filter((p) => p.id !== product.id);
//       } else {
//         // Otherwise, add it to the list
//         return [...prevSelectedProducts, product];
//       }
//     });
//     // setSelectedProducts([...selectedProducts, product.id !== sele]);
//   };

//   const handleSelectedCategories = (category: string) => {
//     setCategories((prev) => {
//       if (prev.includes(category)) {
//         return prev.filter((c) => c !== category);
//       } else {
//         return [...prev, category];
//       }
//     });

//     // return product
//   };

//   const filteredProducts = categories.length
//     ? products.filter((p) => categories.includes(p.category))
//     : products;
//   return (
//     <div className="w-full overflow-hidden">
//       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//         <div className={`${styles.boxWidth}`}>
//           <NavBar selectedProducts={selectedProducts} />
//         </div>
//       </div>

//       <div className={` ${styles.flexStart}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Home />
//         </div>
//       </div>

//       {/* <FilterByCategory
//         filteredCategory={() => handleSelectedCategories}
//         category={categories}
//       /> */}
//       <div className="flex space-x-4">
//         {Array.from(new Set(products.map((p) => p.category))).map((c) => (
//           <label key={c} className="items-center flex">
//             <input
//               type="checkbox"
//               value={c}
//               // checked={categories.includes(c)}
//               onChange={() => handleSelectedCategories(c)}
//             />
//             {c}
//           </label>
//         ))}
//       </div>
//       {/* <div className="flex">
//         {products.map((p) => (
//           <button
//             onClick={() => handleSelectedCategories(p.category)}
//             className="btn btn-secondary m-2"
//           >
//             {p.category}
//           </button>
//         ))}
//       </div> */}

//       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//         <ProductList
//           // addNewProduct={() => setProducts([...products, newProduct])}
//           selectedProducts={handleSelectProduct}
//           products={filteredProducts}
//           pickedProducts={selectedProducts}
//         />
//       </div>
//     </div>
//   );
// };

// export default App;

import MoviesApp from "./Movies/MoviesApp";
import { Routes, Route, redirect, Navigate } from "react-router-dom";
import NavBar from "./Movies/NavBar";
import Customers from "./Movies/Customers";
import Rentals from "./Movies/Rentals";
import NotFound from "./Movies/NotFound";
import MovieForm from "./Movies/MovieForm";
import LoginForm from "./Movies/LoginForm";
import RegisterForms from "./Movies/RegisterForms";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<MoviesApp />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForms />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/movies/:id" element={<MovieForm />} />
        {/* <Route
          path="/movies/new"
          element={<NewMovie  />}
        /> */}
      </Routes>
    </div>
  );
};

export default App;
