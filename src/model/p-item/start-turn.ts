import { ReadableStreamDefaultController } from "stream/web";
import { Attribute } from "../../types/attribute";
import { idol, Idol } from "../idol";
import { calclateScoreForEnergy } from "../../utils/calclate-score";

export const 夢にあふれた大荷物 = (
  idol: Idol,
  attribute: Attribute,
  danceTurns: number
) => {
  if (attribute === "dance" && danceTurns === 1) {
    idol.remainingActions += 1;
  }
  return;
};

export const みちくさ研究ノート = (
  idol: Idol,
  remainingTurns: number,
  attributeRate: number
) => {
  if (remainingTurns < 2) {
    calclateScoreForEnergy(idol, attributeRate, 0.5);
  }
  return;
};

export const みちくさ研究ノートplus = (
  idol: Idol,
  remainingTurns: number,
  attributeRate: number
) => {
  if (remainingTurns < 2) {
    calclateScoreForEnergy(idol, attributeRate, 0.65);
  }
  return;
};
