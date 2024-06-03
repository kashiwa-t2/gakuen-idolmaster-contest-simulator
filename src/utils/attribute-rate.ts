import { Attribute } from "../model/attribute";
import { Idol } from "../model/idol";

// attributeからcontsestのスコアの倍率をvocal, dance, visualで変更できるようにする
export const getAttributeRate = (idol: Idol, attribute: Attribute) => {
  if (attribute === "vocal") {
    return idol.vocalScoreRate;
  } else if (attribute === "dance") {
    return idol.danceScoreRate;
  } else if (attribute === "visual") {
    return idol.visualScoreRate;
  } else {
    throw new Error("不正な属性です");
  }
};
