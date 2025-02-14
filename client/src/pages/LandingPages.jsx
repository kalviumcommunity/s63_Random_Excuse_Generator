import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6">
      {/* Heading */}
      <h1 className="text-6xl font-extrabold mb-6 animate-bounce">🎭 Random Excuse Generator 🎭</h1>
      <p className="text-lg text-center max-w-xl">
        Need a quick excuse? Whether it’s for work, school, or an awkward social event, we’ve got your back!
      </p>

      {/* Call-to-Action Button */}
      <button className="mt-6 bg-white text-purple-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 text-lg">
        Generate an Excuse
      </button>

      {/* Features Section */}
      <div className="mt-10 p-6 bg-white text-black rounded-lg shadow-xl max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">✨ Key Features ✨</h2>
        <ul className="list-none space-y-3 text-lg">
          <li>🔥 Choose from various excuse categories</li>
          <li>🎲 Get a random, hilarious excuse instantly</li>
          <li>🛠 Customize your own excuse</li>
          <li>💾 Save & Share your best excuses</li>
          <li>📅 Subscribe for a daily excuse</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm opacity-75">
        Made with ❤️ by The Excuse Masters | © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default LandingPage;
