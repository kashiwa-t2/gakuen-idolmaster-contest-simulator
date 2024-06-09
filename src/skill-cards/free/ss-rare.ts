import { Attribute } from "../../model/attribute";
import { Idol } from "../../model/idol";
import { decreaseHealth, increaseEnergy } from "../../utils/calclate-health";
import { calculateScore } from "../../utils/calclate-score";

export const 光のステージ = (idol: Idol, attributeRate: number) => {
  // ライフ-3, 消費体力削減1, スキルカード使用数追加+1,
  decreaseHealth(idol, 3, false);
  idol.healthDecreaseReduction += 1;
  return;
};
