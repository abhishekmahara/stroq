import logo from "/assets/stroqlogo2.png";

const Thirdheropage = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">

      {/* big bold motion wave */}
      <div className="absolute w-[1600px] h-[500px] bg-orange-600 blur-[180px] opacity-90 rotate-[18deg] top-[40%] -left-[20%]" />

      {/* secondary bright glow */}
      <div className="absolute w-[1000px] h-[1000px] bg-white blur-[220px] opacity-80 right-[10%] top-[10%]" />

      {/* highlight streak */}
      <div className="absolute w-[900px] h-[300px] bg-orange-600 blur-[120px] opacity-90 rotate-[12deg] top-[50%]" />

      {/* content */}
      <div className="relative flex flex-col items-center text-center px-6">

        <img
          src={logo}
          alt="Stroq logo"
          className="w-64 md:w-64 mb-6"
        />

        <p className="text-white text-sm md:text-lg max-w-md leading-relaxed font-bold">
          फिटनेस कोई लक्ष्य नहीं, एक जीवनशैली है।
        
        </p>

      </div>

    </section>
  );
};

export default Thirdheropage;