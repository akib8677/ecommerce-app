
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-green-100 flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800">
            OneCommerce: Your eCommerce Solution Platform
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Come drive more sales and better profitability with us. Whether it's boosting conversion rate, marketing automation, or harnessing social proof, we have the answer you need.
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition">
              Explore All Solutions
            </button>
            <button className="bg-white text-green-500 px-6 py-2 border border-green-500 rounded-lg shadow hover:bg-green-50 transition">
              Contact Sales
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 relative flex justify-center md:justify-end">
          <img
            src="path/to/your/image.png"
            alt="Man with laptop"
            className="w-64 md:w-96"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:top-1/2 md:transform-none md:left-auto md:right-24 md:-translate-y-1/2">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2">
              <img
                src="path/to/avatar.jpg"
                alt="User avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-gray-700">Very much satisfied with my purchase!</p>
                <div className="flex items-center">
                  <span className="text-yellow-500">★★★★★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
