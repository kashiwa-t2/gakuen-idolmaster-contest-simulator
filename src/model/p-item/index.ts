import { PItem } from "../../types/p-item";
import { Attribute } from "../../types/attribute";
import { Idol } from "../idol";
import { みちくさ研究ノート, 夢にあふれた大荷物 } from "./start-turn";

export const startPItem = (
  pItems: PItem[],
  idol: Idol,
  attribute: Attribute,
  attributeRate: number,
  danceTurns: number,
  remainingTurns: number
) => {
  if (pItems.includes("夢にあふれた大荷物")) {
    夢にあふれた大荷物(idol, attribute, danceTurns);
  }
  if (pItems.includes("みちくさ研究ノート")) {
    みちくさ研究ノート(idol, remainingTurns, attributeRate);
  }
  if (pItems.includes("みちくさ研究ノートplus")) {
    みちくさ研究ノート(idol, remainingTurns, attributeRate);
  }
};
