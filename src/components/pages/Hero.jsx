import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center hero" >
      <div className="flex flex-col gap-8 items-center justify-center text-center py-20 px-6 sm:px-10 md:px-20 lg:px-32 bg-black rounded-xl">
        <div className="flex flex-col gap-4">
          <p className="uppercase">Ultimate Buddy for</p>
          <h1 className="uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
            Your<span className="text-orange-600 font-bold">Gym</span>
          </h1>
        </div>

        <p className="text-sm md:text-base font-light ">
          WORKOUT PLANS, TAILORED TO YOUR{" "}
          <span className="text-orange-600 font-medium">GOALS</span> AND
          PREFERENCES.
        </p>
        <div className=" flex flex-row gap-10 items-center justify-center">
          <Button text="Generate Plan" />
          <Button text="Track Workouts" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
