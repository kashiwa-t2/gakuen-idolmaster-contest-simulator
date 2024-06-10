// TODO: APIのコントローラーを作成する
import { Attribute } from "../types/attribute";
import { idol } from "../model/idol";
import skillCards from "../model/skill-cards";
import { getAttributeRate } from "../utils/attribute-rate";
import { startPItem } from "../model/p-item";

let remainingTurns = 8;
let currentTurn = 0;

const main = () => {
  console.log("コンテスト開始");
  //残りターン数が0になるまで繰り返す
  while (remainingTurns > 0) {
    // PItemに影響するため、ターン開始時にターン計算を行う
    currentTurn++;
    remainingTurns--;

    // ターン開始時のPItemの効果を適用する
    startPItem(idol.pItems, idol, "vocal", 1, 1, remainingTurns);

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

    idol.buff.goodCondition = Math.max(idol.buff.goodCondition - 1, 0);
    idol.buff.goodImpression = Math.max(idol.buff.goodImpression - 1, 0);
    idol.buff.perfectCondition = Math.max(idol.buff.perfectCondition - 1, 0);
    idol.buff.healthDecreaseDown = Math.max(
      idol.buff.healthDecreaseDown - 1,
      0
    );
    idol.buff.healthDecreaseUp = Math.max(idol.buff.healthDecreaseUp - 1, 0);
    idol.buff.energyIncreaseInvalid = Math.max(
      idol.buff.energyIncreaseInvalid - 1,
      0
    );

    console.log(`${currentTurn}ターン目, 残り${remainingTurns}ターン`, {
      スコア: idol.score,
      体力: idol.health,
      元気: idol.buff.energy,
      好調: idol.buff.goodCondition,
      集中: idol.buff.concentration,
      好印象: idol.buff.goodImpression,
      やる気: idol.buff.motivation,
      絶好調: idol.buff.perfectCondition,
      消費体力減少: idol.buff.healthDecreaseDown,
      消費体力増加: idol.buff.healthDecreaseUp,
      体力減少軽減: idol.buff.healthDecreaseReduction,
      元気増加無効: idol.buff.energyIncreaseInvalid,
    });
  }

  console.log("コンテスト終了", {
    score: idol.score,
    health: idol.health,
    energy: idol.buff.energy,
  });
};

console.log("log");
main();
