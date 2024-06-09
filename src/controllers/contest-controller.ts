// TODO: APIのコントローラーを作成する
import { Attribute } from "../model/attribute";
import { idol } from "../model/idol";
import skillCards from "../skill-cards";
import { getAttributeRate } from "../utils/attribute-rate";

let remainingTurns = 8;
let currentTurn = 0;

const main = () => {
  console.log("コンテスト開始");
  //残りターン数が0になるまで繰り返す
  while (remainingTurns > 0) {
    currentTurn++;
    // このターンに動ける回数
    idol.remainingActions = 1;

    //残りのアクション数が0になるまで繰り返す
    while (idol.remainingActions > 0) {
      //TODO: カード選択のロジックを実装する
      const selectSkillCards = "アピールの基本";
      // このターンの属性はボーカル
      const attribute: Attribute = "vocal";
      const attributeRate = getAttributeRate(idol, attribute);

      skillCards[selectSkillCards](idol, attributeRate);
      console.log(`ターン${currentTurn}: ${selectSkillCards}を実行しました`);
      idol.remainingActions--;
    }

    idol.goodCondition = Math.max(idol.goodCondition - 1, 0);
    idol.goodImpression = Math.max(idol.goodImpression - 1, 0);
    idol.perfectCondition = Math.max(idol.perfectCondition - 1, 0);
    idol.healthDecreaseDown = Math.max(idol.healthDecreaseDown - 1, 0);
    idol.healthDecreaseUp = Math.max(idol.healthDecreaseUp - 1, 0);
    idol.energyIncreaseInvalid = Math.max(idol.energyIncreaseInvalid - 1, 0);
    remainingTurns--;

    console.log(`${currentTurn}ターン目, 残り${remainingTurns}ターン`, {
      スコア: idol.score,
      体力: idol.health,
      元気: idol.energy,
      好調: idol.goodCondition,
      集中: idol.concentration,
      好印象: idol.goodImpression,
      やる気: idol.motivation,
      絶好調: idol.perfectCondition,
      消費体力減少: idol.healthDecreaseDown,
      消費体力増加: idol.healthDecreaseUp,
      体力減少軽減: idol.healthDecreaseReduction,
      元気増加無効: idol.energyIncreaseInvalid,
    });
  }

  console.log("コンテスト終了", {
    score: idol.score,
    health: idol.health,
    energy: idol.energy,
  });
};

console.log("log");
main();
