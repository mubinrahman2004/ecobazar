import Banner from "./Banner";
import Limit from "./Limit";
import ShopProduct from "./ShopProduct";

async function getProducts(limit = 20) {
  const random = Math.floor(Math.random() * 90) + 1; 
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${random}`, {
    cache: "no-store",
  });
  
  if (!res.ok) {
    try {
      const fallbackRes = await fetch(`${process.env.NEXTAUTH_URL}/api/products/generate?count=${limit}`, {
        cache: "no-store",
      });
      if (fallbackRes.ok) {
        return fallbackRes.json();
      }
    } catch (error) {
      console.error('Fallback API also failed:', error);
    }
    
    throw new Error('Failed to fetch products');
  }
  
  return res.json();
}

export default async function Home({ searchParams }) {
  const query = searchParams || {};
  const limit = parseInt(query.limit) || 20;
  
  let data;
  let error = null;

  try {
    data = await getProducts(limit);
  } catch (err) {
    error = err.message;
    data = {
      products: [],
      total: 0
    };
  }

  return (
    <main className="min-h-screen bg-gray-50 py-6 sm:py-8 lg:py-10">
      <Banner/>
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
   
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8 lg:mb-10">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
              All Products
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Showing {data.products?.length || 0} of {data.total || data.products?.length || 0} products
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 whitespace-nowrap">
              Show:
            </span>
            <Limit />
          </div>
        </div>

        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-yellow-800 text-sm">
              Using fallback data: {error}
            </p>
          </div>
        )}

        {!data.products && !error && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="text-gray-500 mt-4">Loading products...</p>
          </div>
        )}

        {data.products && data.products.length > 0 && (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
            {data.products.map((item) => (
              <ShopProduct key={item.id} product={item} />
            ))}
          </div>
        )}

        {data.products?.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </main>
  );
}