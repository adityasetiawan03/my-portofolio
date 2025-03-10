const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold">Portfolio</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <img src="https://whello.id/wp-content/uploads/2022/08/contoh-desain-website-zyro.png" 
               alt="Zyro Website Project" 
               className="h-48 w-full object-cover rounded" />
          <h3 className="mt-2 font-semibold">Project 1</h3>
          <p>Hostinger Website Builder adalah pembuat situs web yang kuat yang memungkinkan Anda membuat situs web atau toko online yang menakjubkan dengan cepat dan mudah.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <img src="https://naevaweb.com/userfiles/uploads/naevaweb-story.png" 
               alt="Naevweb Project" 
               className="h-48 w-full object-cover rounded" />
          <h3 className="mt-2 font-semibold">Project 2</h3>
          <p>Di project ini saya membuat sebuah website penyedia jasa pembuatan Website.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <img src="https://badoystudio.com/wp-content/uploads/2020/02/contoh-website-kampus-atau-universitas-.png" 
               alt="University Website Project" 
               className="h-48 w-full object-cover rounded" />
          <h3 className="mt-2 font-semibold">Project 3</h3>
          <p>Di project ini saya membuat website untuk kampus berisi tentang informasi kampus seperti jurusan, sejarah kampus, dll.</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


