import React from "react";

const mobileWords = [
  { text: "fitness", size: "text-4xl", top: "top-[10%]", left: "left-[8%]" },
  { text: "workout", size: "text-3xl", top: "top-[18%]", left: "left-[46%]" },
  { text: "nutrition", size: "text-4xl", top: "top-[34%]", left: "left-[10%]" },
  { text: "protein", size: "text-2xl", top: "top-[36%]", left: "left-[56%]" },
  { text: "muscle", size: "text-4xl", top: "top-[58%]", left: "left-[8%]" },
  { text: "planner", size: "text-2xl", top: "top-[56%]", left: "left-[52%]" },
  { text: "cardio", size: "text-3xl", top: "top-[76%]", left: "left-[16%]" },
  { text: "recovery", size: "text-2xl", top: "top-[78%]", left: "left-[52%]" },
];

const tabletWords = [
  { text: "fitness", size: "text-5xl", top: "top-[8%]", left: "left-[6%]" },
  { text: "workout", size: "text-4xl", top: "top-[16%]", left: "left-[28%]" },
  { text: "nutrition", size: "text-5xl", top: "top-[8%]", left: "left-[60%]" },
  { text: "protein", size: "text-3xl", top: "top-[20%]", left: "left-[80%]" },

  { text: "strength", size: "text-4xl", top: "top-[34%]", left: "left-[8%]" },
  { text: "planner", size: "text-3xl", top: "top-[34%]", left: "left-[40%]" },
  { text: "muscle", size: "text-5xl", top: "top-[34%]", left: "left-[62%]" },

  { text: "cardio", size: "text-4xl", top: "top-[56%]", left: "left-[10%]" },
  { text: "training", size: "text-4xl", top: "top-[56%]", left: "left-[38%]" },
  { text: "calories", size: "text-3xl", top: "top-[58%]", left: "left-[72%]" },

  { text: "recovery", size: "text-3xl", top: "top-[80%]", left: "left-[18%]" },
  { text: "meal plan", size: "text-3xl", top: "top-[78%]", left: "left-[54%]" },
];

const desktopWords = [
  { text: "fitness", size: "text-6xl", top: "top-[8%]", left: "left-[4%]" },
  { text: "workout", size: "text-5xl", top: "top-[16%]", left: "left-[22%]" },
  { text: "nutrition", size: "text-6xl", top: "top-[8%]", left: "left-[56%]" },
  { text: "protein", size: "text-4xl", top: "top-[18%]", left: "left-[82%]" },

  { text: "strength", size: "text-5xl", top: "top-[32%]", left: "left-[8%]" },
  { text: "planner", size: "text-4xl", top: "top-[30%]", left: "left-[38%]" },
  { text: "muscle", size: "text-6xl", top: "top-[30%]", left: "left-[64%]" },

  { text: "cardio", size: "text-4xl", top: "top-[50%]", left: "left-[10%]" },
  { text: "training", size: "text-5xl", top: "top-[50%]", left: "left-[34%]" },
  { text: "calories", size: "text-4xl", top: "top-[50%]", left: "left-[72%]" },

  { text: "recovery", size: "text-4xl", top: "top-[72%]", left: "left-[12%]" },
  { text: "meal plan", size: "text-4xl", top: "top-[70%]", left: "left-[40%]" },
  { text: "hydration", size: "text-3xl", top: "top-[72%]", left: "left-[68%]" },
  { text: "wellness", size: "text-3xl", top: "top-[72%]", left: "left-[84%]" },
];

const WordLayer = ({ words }) => (
  <>
    {words.map((word, index) => (
      <span
        key={index}
        className={`absolute ${word.top} ${word.left} ${word.size} font-extrabold text-black/12 tracking-[-0.03em] whitespace-nowrap select-none transition-all duration-300 hover:text-black/20`}
      >
        {word.text}
      </span>
    ))}
  </>
);

const StroqWordCloud = () => {
  return (
    <section className="relative w-full h-[46vh] sm:h-[44vh] md:h-[48vh] lg:h-[52vh] bg-white overflow-hidden">
      <div className="absolute inset-0 block sm:hidden">
        <WordLayer words={mobileWords} />
      </div>

      <div className="absolute inset-0 hidden sm:block md:hidden">
        <WordLayer words={tabletWords} />
      </div>

      <div className="absolute inset-0 hidden md:block">
        <WordLayer words={desktopWords} />
      </div>
    </section>
  );
};

export default StroqWordCloud;