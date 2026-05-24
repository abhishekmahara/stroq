import { useNutrition } from "../../../providers/nutritionContext";

import {
  Activity,
  Drumstick,
  Flame,
  Gauge,
  LoaderCircle,
  Search,
  Wheat,
} from "lucide-react";

const NutritionCard = () => {
  const { nutrition, loading, error } = useNutrition();

  if (loading) {
    return (
      <div className="rounded-xl border border-black/5 bg-[#fafafa] p-6 sm:p-8">
        <div className="min-h-[320px] flex items-center justify-center">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full border-[3px] border-black/10 border-t-[#fc5200] animate-spin mx-auto mb-6" />

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111] mb-3">
              Processing Nutrition
            </h2>

            <p className="text-[#666]">Building macro insights...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-[#fc5200]/15 bg-[#fff7f2] p-6 sm:p-8">
        <div className="min-h-[320px] flex items-center justify-center">
          <div className="text-center max-w-xl">
            <div className="w-14 h-14 rounded-xl bg-[#fc5200] flex items-center justify-center mx-auto mb-6">
              <Flame className="text-white" size={24} />
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold text-[#111] mb-3">
              Failed to Load
            </h2>

            <p className="text-[#666] leading-relaxed">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!nutrition) {
    return (
      <div className="rounded-xl border border-black/5 bg-white p-6 sm:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-stretch">
          <div className="rounded-xl bg-[#0f0f0f] text-white p-6 sm:p-8 min-h-[320px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#fc5200]/10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-[#fc5200] flex items-center justify-center mb-8">
                <Search size={24} />
              </div>

              <p className="text-gray-400 text-sm mb-3">
                Nutrition Overview
              </p>

              <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.06em] leading-[0.95] max-w-lg">
                Search a food to load macro data.
              </h2>
            </div>

            <p className="relative z-10 text-gray-400 leading-relaxed max-w-md mt-8">
              Enter foods like chicken breast, banana, rice, eggs, or oats to
              generate a clean Stroq nutrition breakdown.
            </p>
          </div>

          <div className="rounded-xl border border-black/5 bg-[#fafafa] p-6 sm:p-8 min-h-[320px] flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <LoaderCircle
                size={22}
                className="text-[#fc5200] animate-spin"
              />

              <p className="font-semibold text-[#111]">
                Waiting for nutrition data
              </p>
            </div>

            <div className="space-y-4">
              {[72, 92, 58].map((width, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-3 w-24 rounded-full bg-black/10" />
                    <div className="h-3 w-12 rounded-full bg-black/10" />
                  </div>

                  <div className="h-3 rounded-full bg-black/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#fc5200]/30"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const calories = Math.round(nutrition?.calories?.value || 0);
  const protein = Math.round(nutrition?.protein?.value || 0);
  const carbs = Math.round(nutrition?.carbs?.value || 0);
  const fat = Math.round(nutrition?.fat?.value || 0);
  const totalMacros = Math.max(protein + carbs + fat, 1);
  const proteinShare = Math.round((protein / totalMacros) * 100);
  const carbsShare = Math.round((carbs / totalMacros) * 100);
  const fatShare = Math.round((fat / totalMacros) * 100);

  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-[1.08fr_0.92fr] gap-4 lg:gap-5">
        <div className="grid gap-4 lg:gap-5">
          <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-5 sm:p-7 lg:p-8 relative overflow-hidden min-h-[360px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#fc5200]/10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-5 mb-8">
                <div>
                  <p className="text-gray-400 text-sm mb-3">
                    Nutrition Overview
                  </p>

                  <h1 className="text-[clamp(2.0rem,5vw,4.0rem)] font-semibold tracking-[-0.06em] text-white capitalize leading-[0.95] max-w-3xl">
                    {nutrition?.name || "Chicken"}
                  </h1>
                </div>

                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white shrink-0">
                  <Gauge size={20} />
                </div>
              </div>

              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-4">
                      Total Calories
                    </p>

                    <div className="flex items-end gap-3">
                      <h2 className="text-[clamp(4rem,8vw,5.2rem)] leading-none font-semibold tracking-[-0.07em] text-white">
                        {calories}
                      </h2>

                      <span className="text-gray-400 mb-3">kcal</span>
                    </div>
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-[#fc5200]/15 border border-[#fc5200]/20 flex items-center justify-center text-[#fc5200]">
                    <Flame size={22} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Protein",
                value: `${protein}g`,
                
              },
              {
                title: "Carbs",
                value: `${carbs}g`,
               
              },
              {
                title: "Fat",
                value: `${fat}g`,
                
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#0f0f0f] border border-white/10 rounded-xl p-5 min-h-[175px] flex flex-col justify-between"
              >
                <div className="flex items-start justify-between">
                

                  <div className="w-2 h-2 rounded-full bg-[#fc5200]" />
                </div>

                <div>
                  <h3 className="text-4xl font-semibold tracking-[-0.05em] text-white mb-2">
                    {item.value}
                  </h3>

                  <p className="text-gray-400 text-sm">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:gap-5">
          <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-5 sm:p-7 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#fc5200]/10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-gray-400 text-sm mb-3">Meal Status</p>

                  <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                    Balanced
                  </h3>
                </div>

                
              </div>

              

              <div className="grid grid-cols-3 gap-3 mt-8">
                {[
                  ["Protein", proteinShare],
                  ["Carbs", carbsShare],
                  ["Fat", fatShare],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
                  >
                    <p className="text-xl font-semibold text-white leading-none">
                      {value}%
                    </p>
                    <p className="text-xs text-gray-400 mt-2">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#fc5200] to-[#ff7a1a] rounded-xl p-6 sm:p-7 text-white relative overflow-hidden min-h-[245px]">
            <div className="absolute -top-14 -right-14 w-52 h-52 border border-white/10 rounded-full" />

            <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 blur-3xl rounded-full" />

            <div className="relative z-10 h-full flex flex-col justify-between gap-8">
              <div>
                <p className="text-white/75 text-sm mb-4">
                  Stroq Performance
                </p>

                <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[0.95] mb-5">
                  Fuel Better.
                  <br />
                  Train Harder.
                </h3>

                <p className="text-sm leading-relaxed text-white/85 max-w-sm">
                  Clean macro insights for athletes who want food decisions to
                  feel simple, fast, and performance-focused.
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionCard;
