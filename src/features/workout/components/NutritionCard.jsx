import { useNutrition } from "../../../components/context/NutritionProvider";
import {
  Flame,
  Drumstick,
  Wheat,
  Droplets,
} from "lucide-react";

const NutritionCard = () => {
  const { nutrition, loading, error } = useNutrition();

  if (loading) {
    return (
      <div className="rounded-lg bg-white border border-black/5 p-10 text-center shadow-[0_10px_40px_rgba(0,0,0,0.04)]">

        <div className="w-14 h-14 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin mx-auto mb-6" />

        <h3 className="text-2xl font-semibold mb-2">
          Analyzing Nutrition
        </h3>

        <p className="text-[#6d675f]">
          Fetching food nutrition data...
        </p>

      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-[#111111] text-white p-10 text-center">

        <h3 className="text-2xl font-semibold text-red-400 mb-3">
          Failed to Load
        </h3>

        <p className="text-gray-400">
          {error}
        </p>

      </div>
    );
  }

  if (!nutrition) {
    return (
      <div className="rounded-lg border border-dashed border-black/10 bg-white p-12 text-center">

        <div className="w-20 h-20 rounded-[20px] bg-orange-50 flex items-center justify-center mx-auto mb-6">
          <Flame size={34} className="text-orange-600" />
        </div>

        <h3 className="text-3xl font-semibold mb-3">
          Search Any Food
        </h3>

        <p className="text-[#6d675f] max-w-md mx-auto leading-relaxed">
          Enter any food item like egg, rice, chicken, banana,
          oats, or milk to view detailed nutrition insights.
        </p>

      </div>
    );
  }

  const calories = Math.round(nutrition.calories?.value || 0);
  const protein = Math.round(nutrition.protein?.value || 0);
  const fat = Math.round(nutrition.fat?.value || 0);
  const carbs = Math.round(nutrition.carbs?.value || 0);

  return (
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">

      {/* LEFT PANEL */}
      <div className="rounded-lg bg-[#111111] text-white p-7 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">

        <p className="uppercase tracking-[0.22em] text-[11px] text-orange-500 font-semibold mb-5">
          Nutrition Overview
        </p>

        <h2 className="text-4xl md:text-5xl font-[650] tracking-[-0.04em] capitalize mb-10">
          {nutrition.name || "Food Item"}
        </h2>

        <div className="space-y-5">

          {/* CALORIES */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-[16px] bg-orange-500/15 flex items-center justify-center text-orange-500">
                <Flame size={22} />
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Calories
                </p>

                <h3 className="text-2xl font-semibold">
                  {calories}
                </h3>
              </div>

            </div>

            <p className="text-sm text-gray-500">
              kcal
            </p>

          </div>

          {/* PROTEIN */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-[16px] bg-red-500/15 flex items-center justify-center text-red-400">
                <Drumstick size={22} />
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Protein
                </p>

                <h3 className="text-2xl font-semibold">
                  {protein}g
                </h3>
              </div>

            </div>

            <p className="text-sm text-gray-500">
              High Value
            </p>

          </div>

          {/* CARBS */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400">
                <Wheat size={22} />
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Carbs
                </p>

                <h3 className="text-2xl font-semibold">
                  {carbs}g
                </h3>
              </div>

            </div>

            <p className="text-sm text-gray-500">
              Energy
            </p>

          </div>

          {/* FAT */}
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-lg bg-yellow-500/15 flex items-center justify-center text-yellow-400">
                <Droplets size={22} />
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Fat
                </p>

                <h3 className="text-2xl font-semibold">
                  {fat}g
                </h3>
              </div>

            </div>

            <p className="text-sm text-gray-500">
              Essential
            </p>

          </div>

        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="rounded-lg bg-white border border-black/5 p-7 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">

        <div className="flex items-center justify-between mb-8">

          <div>

            <p className="uppercase tracking-[0.2em] text-[11px] text-orange-600 font-semibold mb-3">
              Macro Distribution
            </p>

            <h3 className="text-3xl font-[650] tracking-tight">
              Nutrition Breakdown
            </h3>

          </div>

          <div className="w-16 h-16 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
            <Flame size={28} />
          </div>

        </div>

        {/* MACRO CARDS */}
        <div className="grid sm:grid-cols-2 gap-5 mb-8">

          <div className="rounded-lg bg-[#f8f7f4] border border-black/5 p-5">

            <p className="text-sm text-[#7b746c] mb-2">
              Protein
            </p>

            <h3 className="text-4xl font-semibold">
              {protein}g
            </h3>

          </div>

          <div className="rounded-lg bg-[#f8f7f4] border border-black/5 p-5">

            <p className="text-sm text-[#7b746c] mb-2">
              Carbs
            </p>

            <h3 className="text-4xl font-semibold">
              {carbs}g
            </h3>

          </div>

          <div className="rounded-lg bg-[#f8f7f4] border border-black/5 p-5">

            <p className="text-sm text-[#7b746c] mb-2">
              Fat
            </p>

            <h3 className="text-4xl font-semibold">
              {fat}g
            </h3>

          </div>

          <div className="rounded-lg bg-[#111111] text-white p-5">

            <p className="text-sm text-gray-400 mb-2">
              Calories
            </p>

            <h3 className="text-4xl font-semibold">
              {calories}
            </h3>

          </div>

        </div>

        {/* PROGRESS BARS */}
        <div className="space-y-6">

          {/* PROTEIN */}
          <div>

            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#5f5952]">
                Protein Ratio
              </p>

              <p className="text-sm font-medium">
                {protein}g
              </p>
            </div>

            <div className="w-full h-3 bg-red-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-500 rounded-full"
                style={{
                  width: `${Math.min(protein * 2, 100)}%`,
                }}
              />
            </div>
          </div>

          {/* CARBS */}
          <div>

            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#5f5952]">
                Carbohydrate Ratio
              </p>

              <p className="text-sm font-medium">
                {carbs}g
              </p>
            </div>

            <div className="w-full h-3 bg-blue-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{
                  width: `${Math.min(carbs, 100)}%`,
                }}
              />
            </div>
          </div>

          {/* FAT */}
          <div>

            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#5f5952]">
                Fat Ratio
              </p>

              <p className="text-sm font-medium">
                {fat}g
              </p>
            </div>

            <div className="w-full h-3 bg-yellow-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-500 rounded-full"
                style={{
                  width: `${Math.min(fat * 2, 100)}%`,
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NutritionCard;