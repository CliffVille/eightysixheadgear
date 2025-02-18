import React from 'react';

export default function Custom() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-start bg-background bg-cover bg-no-repeat px-16 py-12 text-white">
      
      <header className="w-full max-w-5xl text-left py-12">
        <h1 className="text-5xl font-extrabold tracking-wide text-yellow-400">Create Your Custom Headband</h1>
        <p className="text-lg mt-4 max-w-2xl leading-relaxed">
          Design a headband that represents your style and personality. Choose your colors, patterns, and personalize it with your name or team logo.
        </p>
      </header>

      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 pr-24 py-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left border-l-4 border-yellow-400">
          <h2 className="text-3xl font-bold text-white">Select Your Design</h2>
          <p className="text-gray-300 mt-4 text-lg">
            Pick from our exclusive patterns, solid colors, or create a fully custom design. Your perfect headband starts here.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left border-l-4 border-yellow-400">
          <h2 className="text-3xl font-bold text-white">Personalization Options</h2>
          <p className="text-gray-300 mt-4 text-lg">
            Add your name, team logo, or any custom text. Make your headband truly one of a kind.
          </p>
        </div>
      </section>

      <section className="w-full max-w-6xl flex flex-col items-start py-10">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">Pre-made Designs</h2>
        <p className="text-gray-300 text-lg mb-6 max-w-3xl">
          Explore our collection of high-quality, pre-made headbands featuring unique designs, crafted for ultimate performance and style.
        </p>
        <img src="/collage.webp" alt="Collage of Pre-made Headgear" className="rounded-lg shadow-lg w-full max-w-4xl" />
      </section>

      <div className="mt-12 w-full max-w-4xl text-left">
        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg text-xl transition-all shadow-lg">
          Start Customizing
        </button>
      </div>
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