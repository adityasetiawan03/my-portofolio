const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-400 to-purple-500 text-white text-center">
      <h2 className="text-4xl font-bold">Contact</h2>
      <p className="mt-4">Feel free to reach out!</p>
      <div className="mt-6 text-lg">
        <p>Phone: 08108108108</p>
        <p>Email: adityasetiawan0307@gmail.com</p>
      </div>
      <form className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-black">
        <input type="text" placeholder="Your Name" className="border p-2 rounded w-full mb-4" />
        <input type="email" placeholder="Your Email" className="border p-2 rounded w-full mb-4" />
        <textarea placeholder="Your Message" className="border p-2 rounded w-full mb-4" rows={4} />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
