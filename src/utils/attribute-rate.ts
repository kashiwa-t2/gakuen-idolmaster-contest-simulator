import { Attribute } from "../types/attribute";
import { Idol } from "../model/idol";

// attributeからcontsestのスコアの倍率をvocal, dance, visualで変更できるようにする
export const getAttributeRate = (idol: Idol, attribute: Attribute) => {
  if (attribute === "vocal") {
    return idol.scoreRate.vocal;
  } else if (attribute === "dance") {
    return idol.scoreRate.dance;
  } else if (attribute === "visual") {
    return idol.scoreRate.visual;
  } else {
    throw new Error("不正な属性です");
  }
};
