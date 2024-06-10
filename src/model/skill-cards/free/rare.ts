// やる気の基本カード
import { Attribute } from "../../../types/attribute";
import { Idol } from "../../idol";
import { decreaseHealth, increaseEnergy } from "../../../utils/calclate-health";
import { calculateScore } from "../../../utils/calclate-score";

export const 気合十分 = (idol: Idol, attributeRate: number) => {
  // ライフ-0, 元気+2, 消費体力減少2
  increaseEnergy(idol, 2);
  idol.buff.healthDecreaseDown += 2;
  return;
};

export const 気合十分plus = (idol: Idol, attributeRate: number) => {
  // ライフ-0, 元気+2, 消費体力減少3
  increaseEnergy(idol, 2);
  idol.buff.healthDecreaseDown += 3;
  return;
};
