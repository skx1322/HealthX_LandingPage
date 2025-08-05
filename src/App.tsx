import { RouterProvider } from "react-router";
import router from "./router/router";

function App() {
  return (
    <div className="font-main">
      <RouterProvider router={router} />

      {/* ✅ Floating WhatsApp Button */}
      <a
        href="https://wa.me/60162835562"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-12 h-12 sm:w-14 sm:h-14 hover:scale-110 transition-transform duration-300"
        />
      </a>
    </div>
  );
}

export default App;

