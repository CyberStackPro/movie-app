import { BsHeart, BsStars } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Button from "./Button";
import { IconType } from "react-icons";

interface Rating {
  rate: number;
  count: number;
}

export interface Products {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  images: string[] | undefined;
  inStock: boolean;
  vendorId: number;
  rating: Rating;
}

interface Props {
  products: Products;
  onSelectProduct: (product: Products) => void;
  pickedProducts: Products[];
}

const ProductCard = ({ products, onSelectProduct, pickedProducts }: Props) => {
  const isSelected = pickedProducts.some((p) => p.id === products.id);

  const handleRatings = (rating: number) => {
    let output: JSX.Element[] = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        output.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === Math.floor(rating) + 1 && rating % 1 !== 0) {
        output.push(<FaStar key={i} className="text-yellow-500 half-star" />);
      } else {
        output.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return output;
  };

  return (
    <div className="rounded-md shadow-lg p-4 bg-white relative">
      <div className="relative bg-violet-100 rounded-lg">
        <img
          src={products.images?.[0]}
          alt={products.name}
          className="w-full h-48 rounded-md object-contain"
        />
        <div className="absolute top-2 right-2 z-10 cursor-pointer bg-white p-2 rounded-full shadow-lg">
          <BsHeart
            className="text-2xl text-red-500"
            onClick={() => console.log("Liked this product", products)}
          />
        </div>
      </div>
      <div className="flex flex-col my-4">
        <h2 className="text-2xl text-primary font-bold">{products.name}</h2>
        <p className="text-xl pt-2 text-gray-700">{products.description}</p>
        <div className="flex pt-2">{handleRatings(products.rating.rate)}</div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t mt-4">
        <p className="text-2xl font-bold text-primary">{products.price}$</p>
        <Button
          className={`px-4 py-2 rounded-md ${
            isSelected ? "bg-gray-500" : "bg-red-500"
          } text-white`}
          onClick={() => onSelectProduct(products)}
        >
          {isSelected ? "In Cart" : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
