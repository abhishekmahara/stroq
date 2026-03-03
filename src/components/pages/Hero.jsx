

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center">
     <div className="flex flex-col gap-4">
 <p>IT'S TIME TO GET</p>
     <h1 className="uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">Your<span className="text-blue-400 font-medium">best</span></h1>
     </div>
    
     <p className="text-sm md:text-base font-light ">
        WORKOUT PLANS, TAILORED TO YOUR <span className="text-blue-400 font-medium">GOALS</span>  AND PREFERENCES.
     </p>
     <button className="px-8 py-4 rounded-md bg-blue-500 text-white font-bold py-2 px-4 rounded blueShadow duration-200">Let's Begin</button>
    </div>
  )
}

export default Hero;
