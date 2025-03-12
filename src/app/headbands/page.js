export default function Headbands() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-start bg-customBg px-16 py-12 text-white">
      
      <header className="w-full max-w-5xl text-left py-12">
        <h1 className="text-5xl font-extrabold tracking-wide text-yellow-400">Premium Paintball Headbands</h1>
        <p className="text-lg mt-4 max-w-2xl leading-relaxed">
          Durable, stylish, and sweat-wicking headbands for every paintball player. Elevate your game with our premium selection.
        </p>
      </header>

      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        <div className="bg-black p-6 rounded-lg shadow-lg text-left border-l-2 border-yellow-400">
          <h2 className="text-3xl font-bold text-white">Why Our Headbands?</h2>
          <p className="text-gray-300 mt-4 text-lg">
            Designed for performance and comfort, our headbands wick sweat away, provide a secure fit, and add style to your game.
          </p>
        </div>

        <div className="bg-black p-6 rounded-lg shadow-lg text-left border-l-2 border-yellow-400">
          <h2 className="text-3xl font-bold text-white">Built for Players</h2>
          <p className="text-gray-300 mt-4 text-lg">
            Tested by professionals, our headbands stand up to the toughest matches, ensuring durability and reliability.
          </p>
        </div>
      </section>

      <section className="w-full max-w-5xl flex flex-col items-start py-10">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">Our Collection</h2>
        <p className="text-gray-300 text-lg mb-6 max-w-3xl">
          Explore our wide range of designs, from tactical and camo to bold, stylish prints. Find the perfect headband that matches your energy on the field.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {products.map((product) => (
            <div key={product.id} className="bg-black border-l-2 border-yellow-400 p-4 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="mt-3 text-lg font-bold text-white">{product.name}</h3>
              <p className="text-green-400 text-xl font-semibold">{product.price}</p>
              <p className="text-gray-300 text-sm mt-2">{product.description}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="mt-12 text-left">
        <h2 className="text-xl font-semibold text-yellow-400">Follow Us</h2>
        <div className="flex space-x-3 mt-3">
          <a 
            href="https://www.instagram.com/eightysix_headgear/" 
            className="text-yellow-500 text-lg hover:text-yellow-400"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a 
            href="https://www.facebook.com/EightySixHeadgear/" 
            className="text-yellow-500 text-lg hover:text-yellow-400"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </footer>
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
