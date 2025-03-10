const Skills: React.FC = () => {
  return (
    <section 
      id='skills' 
      className="py-20 bg-white text-center"
    >
      <h2 className="text-4xl font-bold text-black">Skills</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-200 bg-opacity-80 rounded-lg shadow">
          <img 
            src="https://img-c.udemycdn.com/course/750x422/4925142_c0ab.jpg" 
            alt="Front-End" 
            className="h-48 w-full object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">Front-End</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>
        <div className="p-6 bg-gray-200 bg-opacity-80 rounded-lg shadow">
          <img 
            src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feb8yj4gbkuthhiqw3obm.jpeg" 
            alt="Back-End" 
            className="h-48 w-full object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">Back-End</h3>
          <p>Node.js, Express, MongoDB</p>
        </div>
        <div className="p-6 bg-gray-200 bg-opacity-80 rounded-lg shadow">
          <img 
            src="https://media.licdn.com/dms/image/v2/D5612AQEn4MWBUPxgyw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1702030735205?e=2147483647&v=beta&t=kh5QbhCDJAxtYasiU_cFZiQwIG74o099nOJvN2c0OcI" 
            alt="DevOps" 
            className="h-48 w-full object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">DevOps</h3>
          <p>AWS, Docker, CI/CD</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;