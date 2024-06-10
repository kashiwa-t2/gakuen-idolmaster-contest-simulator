import { Idol } from "../model/idol";

export const calculateScore = (
  idol: Idol,
  attributeRate: number,
  skillCardsScore: number
) => {
  const isGoodCondition = idol.buff.goodCondition > 0 ? 1 : 0;
  const isPerfectCondition = idol.buff.perfectCondition > 0 ? 1 : 0;
  const score =
    (skillCardsScore + idol.buff.concentration) *
    (1 +
      isGoodCondition * 0.5 +
      isPerfectCondition * idol.buff.goodCondition * 0.1);
  idol.score += score * attributeRate;
  return;
};

export const calclateScoreForMotivation = (
  idol: Idol,
  attributeRate: number,
  motivation: number,
  multiplier: number
) => {
  const score = motivation * multiplier;
  idol.score += score * attributeRate;
  return;
};

export const calclateScoreForEnergy = (
  idol: Idol,
  attributeRate: number,
  multiplier: number
) => {
  const score = idol.buff.energy * multiplier;
  idol.score += score * attributeRate;
  return;
};
