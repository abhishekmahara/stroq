import { useState, useEffect } from "react";

const Splash = ({ onFinish }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(onFinish, 500);
    }, 1000); // show logo for 2 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-60 transition-opacity duration-500 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src="/assets/splash.jpg"
        alt="STROQ"
        className="fullscreen object-cover animate-pulse"
      />
    </div>
  );
};

export default Splash;