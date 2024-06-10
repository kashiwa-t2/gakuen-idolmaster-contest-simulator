import { Attribute } from "../../../types/attribute";
import { Idol } from "../../idol";
import { decreaseHealth, increaseEnergy } from "../../../utils/calclate-health";
import { calculateScore } from "../../../utils/calclate-score";

export const アピールの基本 = (idol: Idol, attributeRate: number) => {
  // ライフ-4, パラメータ+9
  decreaseHealth(idol, 4, false);
  calculateScore(idol, attributeRate, 9);
  return;
};

export const アピールの基本plus = (idol: Idol, attributeRate: number) => {
  // ライフ-3, パラメータ+14
  decreaseHealth(idol, 3, false);
  calculateScore(idol, attributeRate, 14);

  idol.score += attributeRate * 14;
  return;
};

export const ポーズの基本 = (idol: Idol, attributeRate: number) => {
  // ライフ-3, 元気+2、パラメータ+2
  decreaseHealth(idol, 2, false);
  increaseEnergy(idol, 2);
  calculateScore(idol, attributeRate, 2);
  return;
};

export const ポーズの基本plus = (idol: Idol, attributeRate: number) => {
  // ライフ-2, 元気+4、パラメータ+6
  decreaseHealth(idol, 2, false);
  increaseEnergy(idol, 4);
  calculateScore(idol, attributeRate, 6);
  return;
};

export const 表現の基本 = (idol: Idol, attributeRate: number) => {
  // ライフ-0, 元気+4
  increaseEnergy(idol, 4);
  return;
};

export const 表現の基本plus = (idol: Idol, attributeRate: number) => {
  // ライフ-0, 元気+6
  increaseEnergy(idol, 7);
  return;
};
