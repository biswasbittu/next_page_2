
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
    <div className="container mx-auto flex flex-col md:flex-row justify-between px-6">
      <div className="mb-4 md:mb-0">
        <h1 className="text-2xl font-semibold">My Website</h1>
      </div>
      <div className="flex space-x-4 mb-4 md:mb-0">
        <a href="/" className="text-gray-300 hover:text-white transition">Home</a>
        <a href="/about" className="text-gray-300 hover:text-white transition">About</a>
        <a href="/services" className="text-gray-300 hover:text-white transition">Services</a>
        <a href="/contact" className="text-gray-300 hover:text-white transition">Contact</a>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-300 hover:text-white transition"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-gray-300 hover:text-white transition"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-gray-300 hover:text-white transition"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="text-gray-300 hover:text-white transition"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
    <div className="bg-gray-900 py-2">
      <div className="container mx-auto text-center text-gray-400">
        &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
      </div>
    </div>
  </footer>
  );
};

export default Footer;
