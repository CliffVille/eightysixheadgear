import React from 'react';

export default function Sponsorship() {
  const sponsors = [
    {
      name: 'Athlete Brand',
      logo: '/logos/athlete-brand.png',
      link: 'https://www.athletebrand.com'
    },
    {
      name: 'Gear Up Co.',
      logo: '/logos/gear-up-co.png',
      link: 'https://www.gearupco.com'
    },
    {
      name: 'Peak Performance',
      logo: '/logos/peak-performance.png',
      link: 'https://www.peakperformance.com'
    }
  ];

  return (
    <div className="min-h-screen w-screen flex flex-col items-start bg-customBg px-16 py-12 text-white">
      <header className="w-full max-w-5xl text-left gap-8 py-12">
        <h1 className="text-5xl font-extrabold tracking-wide text-yellow-400">Sponsorship Opportunities</h1>
        <p className="text-lg mt-4 max-w-2xl leading-relaxed">
          Join forces with us to promote your brand through our high-quality, custom headgear. Let's build a lasting partnership and make an impact together!
        </p>
      </header>

      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        <div className="bg-black p-6 rounded-lg shadow-lg text-left border-l-2 border-yellow-400">
          <h2 className="text-3xl font-bold text-white">Why Partner with Us?</h2>
          <p className="text-gray-300 my-4 text-lg">
            Our brand represents quality, performance, and individuality. Partnering with us means aligning with a community of passionate athletes and creators.
          </p>
        </div>

        <div className="bg-black p-6 rounded-lg shadow-lg text-left border-l-2 border-yellow-400">
          <h2 className="text-3xl font-bold text-white">Benefits of Sponsorship</h2>
          <p className="text-gray-300 mt-4 text-lg">
            Gain brand exposure through our social media presence, event sponsorships, and product placements. Let your brand shine alongside ours!
          </p>
        </div>
      </section>

      <section className="w-full max-w-5xl flex flex-col items-start py-10">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">Our Sponsors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sponsors.map((sponsor) => (
            <a key={sponsor.name} href={sponsor.link} target="_blank" rel="noopener noreferrer" className="bg-black p-4 rounded-lg shadow-lg hover:bg-yellow-500 transition-all">
              <img src={sponsor.logo} alt={sponsor.name} className="w-full h-32 object-contain rounded-md" />
              <p className="text-lg text-white mt-2 text-center">{sponsor.name}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="w-full max-w-5xl flex flex-col items-start py-10">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">Become a Sponsor</h2>
        <p className="text-gray-300 text-lg mb-6 max-w-3xl">
          Fill out our sponsorship form to get in touch and explore partnership opportunities. Let’s collaborate and create something amazing.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg text-xl transition-all shadow-lg">
          Contact Us
        </button>
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
