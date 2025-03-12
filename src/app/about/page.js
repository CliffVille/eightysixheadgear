import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-start bg-customBg px-16 py-12 text-white">
      
      <header className="w-full max-w-5xl text-left py-12">
        <h1 className="text-5xl font-extrabold tracking-wide text-yellow-400">About Us</h1>
        <p className="text-lg mt-4 max-w-2xl leading-relaxed">
          At EightysixGear, we are passionate about paintball and dedicated to providing high-quality headbands for every player. Our mission is to combine performance, durability, and style so you can dominate the field in comfort.
        </p>
      </header>

      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        <div className="bg-black p-6 rounded-lg shadow-lg text-left border-l-2 border-yellow-400">
          <h2 className="text-3xl font-bold text-white">Our Story</h2>
          <p className="text-gray-300 mt-4 text-lg">
            EightysixGear was founded by paintball enthusiasts who saw a need for better, sweat-wicking, and stylish headbands. From humble beginnings, we have grown into a trusted brand in the community.
          </p>
        </div>

        <div className="bg-black p-6 rounded-lg shadow-lg text-left border-l-2 border-yellow-400">
          <h2 className="text-3xl font-bold text-white">Why Choose Us?</h2>
          <p className="text-gray-300 mt-4 text-lg">
            Our headbands are designed for durability, comfort, and style. Made with premium materials, they provide maximum sweat absorption and stay securely in place during intense gameplay.
          </p>
        </div>
      </section>

      <section className="w-full max-w-6xl flex flex-col items-start py-10">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">Get in Touch</h2>
        <p className="text-gray-300 text-lg mb-6 max-w-3xl">
          Have questions or want to collaborate? Contact us using the form below or follow us on social media.
        </p>
        <div className="max-w-lg w-full bg-black p-6 rounded-lg shadow-lg">
          <form className="flex flex-col space-y-3">
            <label className="text-sm">
              Name:
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 rounded-md bg-gray-800 text-white focus:ring focus:ring-yellow-500 mt-1"
              />
            </label>
            
            <label className="text-sm">
              Email:
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded-md bg-gray-800 text-white focus:ring focus:ring-yellow-500 mt-1"
              />
            </label>
            
            <label className="text-sm">
              Message:
              <textarea
                rows="3"
                placeholder="Your Message"
                className="w-full p-2 rounded-md bg-gray-800 text-white focus:ring focus:ring-yellow-500 mt-1"
              />
            </label>
            
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black p-2 rounded-md font-bold hover:bg-yellow-400 transition"
            >
              Send Message
            </button>
          </form>
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
