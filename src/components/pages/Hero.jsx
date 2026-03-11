import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center hero">
      <div className="flex flex-col gap-8 items-center justify-center text-center py-20 px-10 sm:px-40 md:px-50 lg:px-64 bg-black/5 backdrop-blur-lg border border-black/10 rounded-xl shadow-xl ">
        
        <div className="flex flex-col gap-4">
          <p className="uppercase">Ultimate Gym Buddy</p>
          <h1 className="uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Stro<span className="text-orange-600 font-bold">Q</span>
          </h1>
        </div>

        <p className="text-sm md:text-base font-light uppercase">
            <span className="text-orange-600 font-medium">Generate</span> WORKOUT Plans
        </p>

        <div className="flex flex-row gap-10 items-center justify-center">
          <Button
            text="Generate Plan"
            onClick={() => navigate("/generator")}
          
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;