"use client";

import Number from "../Number/Number";

const achievementsList = [
  {
    metric: "Projects",
    value: 20,
    postfix: "+",
  },

  {
    metric: "Collaborations",
    value: 7,
    postfix: "+",
  },
  {
    value: 3,
    metric: "Years Experience",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div id="achieve" className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between text-center">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                <Number n={achievement.value} />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
