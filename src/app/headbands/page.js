import DownArrow from '../components/DownArrow';

export default function Headbands() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center bg-background bg-cover bg-no-repeat px-6 py-12 text-white">
      
      <div className="flex flex-col justify-center items-center text-center mb-44">
        <img src="/profile.png" alt="ceo" className="mx-auto w-64 mt-16" />
        <h1 className="text-6xl font-bold mt-16">Premium Paintball Headbands</h1>
        <p className="text-white text-2xl mt-16">
          Durable, stylish, and sweat-wicking headbands for every paintball player.
        </p>
        <DownArrow />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-24">
        {products.map((product) => (
          <div key={product.id} className="relative bg-black/50 p-4 rounded-lg text-center transition-transform transform hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
            <h3 className="mt-4 text-lg font-bold">{product.name}</h3>
            <p className="text-green-400 text-xl font-semibold">{product.price}</p>

            <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
              <p className="text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const products = [
  { id: 1, name: "Stealth Camo Headband", price: "$24.99", image: "/one.png", description: "Lightweight, breathable, and sweat-resistant." },
  { id: 2, name: "Tactical Black Headband", price: "$29.99", image: "/two.png", description: "Designed for maximum comfort during long matches." },
  { id: 3, name: "Urban Camo Headband", price: "$19.99", image: "/three.png", description: "Durable fabric with moisture-wicking technology." },
  { id: 4, name: "Desert Sniper Headband", price: "$22.99", image: "/four.png", description: "Perfect for blending into desert environments." },
  { id: 5, name: "Stealth Camo Headband", price: "$24.99", image: "/one.png", description: "Lightweight, breathable, and sweat-resistant." },
  { id: 6, name: "Tactical Black Headband", price: "$29.99", image: "/two.png", description: "Designed for maximum comfort during long matches." },
  { id: 7, name: "Urban Camo Headband", price: "$19.99", image: "/three.png", description: "Durable fabric with moisture-wicking technology." },
  { id: 8, name: "Desert Sniper Headband", price: "$22.99", image: "/four.png", description: "Perfect for blending into desert environments." }
];
