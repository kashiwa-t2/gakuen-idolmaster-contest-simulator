// TODO: APIのコントローラーを作成する
import { Attribute } from "../model/attribute";
import { Idol, idol } from "../model/idol";
import skillCards from "../skill-cards";
import { getAttributeRate } from "../utils/attribute-rate";

let remainingTurns = 8;
let currentTurn = 0;

const main = () => {
  //残りターン数を変数に

  //残りターン数が0になるまで繰り返す
  while (remainingTurns > 0) {
    currentTurn++;
    // このターンに動ける回数
    let remainingActions = 1;

    //残りのアクション数が0になるまで繰り返す
    while (remainingActions > 0) {
      //TODO: カード選択のロジックを実装する
      const selectSkillCards = "アピールの基本";
      // このターンの属性はボーカル
      const attribute: Attribute = "vocal";
      const attributeRate = getAttributeRate(idol, attribute);

      const action = skillCards[selectSkillCards](
        idol,
        attributeRate,
        remainingActions
      );
      console.log(action);
      remainingActions--;
    }

    remainingTurns--;
  }

  console.log("コンテスト終了", {
    score: idol.score,
    health: idol.health,
    energy: idol.energy,
  });
};

main();
