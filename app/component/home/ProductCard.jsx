import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { BsStarFill, BsStar } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";

const ProductCard = ({ product }) => {
    return (
        <>
            <div className="border rounded-xl overflow-hidden hover:border-purple-500 duration-300 cursor-pointer">
                <div className="relative group p-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-40 object-contain"
                    />
                    <button className="absolute top-3 right-3 bg-white shadow-md w-9 h-9 rounded-full flex items-center justify-center  opacity-0 group-hover:opacity-100 duration-300">
                        <FaRegHeart className="text-gray-700" size={18} />
                    </button>

                    <button className="absolute top-16 right-3 bg-white shadow-md w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                        <FiEye className="text-gray-700" size={18} />
                    </button>
                </div>
                <div className="p-4 flex justify-between">
                   <div>
                     <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
                    <p className="text-gray-900 font-semibold">${product.price}</p>
                    <div className="flex items-center gap-1 my-1">
                        <BsStarFill className="text-yellow-400" />
                        <BsStarFill className="text-yellow-400" />
                        <BsStarFill className="text-yellow-400" />
                        <BsStarFill className="text-yellow-400" />
                        <BsStar className="text-gray-300" />
                    </div>
                   </div>

                    <button className="bg-gray-300 hover:bg-green-500 transition cursor-pointer text-black mt-3 w-10 h-10 rounded-full flex items-center justify-center ">
                        <IoBagOutline size={22} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
