const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonial"
      className="py-20 bg-gradient-to-r from-gray-200 to-gray-400 text-center"
    >
      <h2 className="text-4xl font-bold text-gray-900">Testimonials</h2>
      <div className="mt-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col items-center">
          <img
            src="https://s3.ap-southeast-3.amazonaws.com/files.greatnusa.com/old-wp/2023/05/Contoh-profesionalisme.webp"
            alt="Client A"
            className="w-32 h-32 rounded-full mb-4"
          />
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-lg text-gray-700">
            Aditya is a fantastic developer! He delivered our project on time
            and exceeded our expectations
          </blockquote>
          <p className="mt-2 font-semibold text-gray-800">- Client A</p>
        </div>

        <div className="flex flex-col items-center mt-6">
          <img
            src="https://glints.com/id/lowongan/wp-content/uploads/2022/04/pexels-mentatdgt-937481.jpg"
            alt="Client B"
            className="w-32 h-32 rounded-full mb-4"
          />
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-lg text-gray-700">
            Working with Aditya was a great experience. His problem-solving
            skills are top-notch
          </blockquote>
          <p className="mt-2 font-semibold text-gray-800">- Client B</p>
        </div>

        <div className="flex flex-col items-center mt-6">
          <img
            src="https://img.pikbest.com/photo/20241111/captivating-smile-half-length-portrait-of-a-saudi-business-professional_11079509.jpg!w700wp"
            alt="Client C"
            className="w-32 h-32 rounded-full mb-4"
          />
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-lg text-gray-700">
            A highly skilled developer with a keen eye for detail. Highly
            recommend
          </blockquote>
          <p className="mt-2 font-semibold text-gray-800">- Client C</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
