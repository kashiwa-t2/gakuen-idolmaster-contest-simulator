// やる気の基本カード

import { Attribute } from "../../model/attribute";
import { Idol } from "../../model/idol";

export const アピールの基本 = (
  idol: Idol,
  attributeRate: number,
  remainingActions: number
) => {
  // ライフ-4, パラメータ+9
  idol.energy = idol.energy - 4;
  if (idol.energy < 0) {
    idol.health = idol.health + idol.energy;
    idol.energy = 0;
  }

  idol.score += attributeRate * 9;
  return "アピールの基本が選択された";
};

export const アピールの基本plus = (
  idol: Idol,
  attributeRate: number,
  remainingActions: number
) => {
  // ライフ-3, パラメータ+14
  // idol.energyとidol.healthから合計で-3する。idol.energyから優先的に減らし、足りなければidol.healthから減らす
  idol.energy = idol.energy - 3;
  if (idol.energy < 0) {
    idol.health = idol.health + idol.energy;
    idol.energy = 0;
  }

  idol.score += attributeRate * 14;
  return "アピールの基本plusが選択された";
};
