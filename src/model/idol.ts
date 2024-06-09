export type Idol = {
  name: string;
  vocal: number;
  dance: number;
  visual: number;

  // コンテスト中に変動するステータス
  score: number;
  vocalScoreRate: number;
  danceScoreRate: number;
  visualScoreRate: number;

  remainingActions: number;

  health: number;
  maxHealth: number;
  energy: number;
  goodCondition: number;
  concentration: number;
  goodImpression: number;
  motivation: number;
  perfectCondition: number;
  healthDecreaseDown: number;
  healthDecreaseUp: number;
  healthDecreaseReduction: number;
  energyIncreaseInvalid: number;
};

export const idol: Idol = {
  name: "篠澤広-光景",
  vocal: 1000,
  dance: 1000,
  visual: 1000,
  health: 33,
  maxHealth: 33,

  // 以下はコンテスト中に変動するステータスなので、初期値は0

  // スコア
  score: 0,
  // vocalによるスコア倍率
  vocalScoreRate: 10,
  // danceによるスコア倍率
  danceScoreRate: 10,
  // visualによるスコア倍率
  visualScoreRate: 10,

  // このターンの行動数
  remainingActions: 0,

  // 元気
  energy: 0,
  // 好調
  goodCondition: 0,
  // 集中
  concentration: 0,
  // 好印象
  goodImpression: 0,
  // やる気
  motivation: 0,
  // 絶好調
  perfectCondition: 0,
  // 体力減少低下
  healthDecreaseDown: 0,
  // 体力減少上昇
  healthDecreaseUp: 0,
  // 消費体力削減 を　英語に
  healthDecreaseReduction: 0,
  // 元気増加無効
  energyIncreaseInvalid: 0,
};
