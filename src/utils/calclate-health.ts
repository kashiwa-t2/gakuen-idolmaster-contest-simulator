import { Idol } from "../model/idol";

export const decreaseHealth = (
  idol: Idol,
  decreaseHealth: number,
  isHealthOnly: boolean
) => {
  if (idol.energyIncreaseInvalid > 0) {
    return;
  }
  const isHealthDecreaseDown = idol.healthDecreaseDown > 0 ? 1 : 0;
  const isHealthDecreaseUp = idol.healthDecreaseUp > 0 ? 1 : 0;

  decreaseHealth =
    Math.ceil(
      decreaseHealth * (1 + isHealthDecreaseUp) * (1 + isHealthDecreaseDown)
    ) - idol.healthDecreaseReduction;

  if (isHealthOnly) {
    // 体力を減少
    idol.health = idol.health - decreaseHealth;
  } else {
    // 元気から減少、元気が足りない場合は体力を減少
    idol.energy = idol.energy - decreaseHealth;
    if (idol.energy < 0) {
      idol.health = idol.health + idol.energy;
      idol.energy = 0;
    }
  }

  if (idol.health < 0) {
    throw new Error("アイドルの体力が0未満になりました");
  }

  return;
};

export const increaseEnergy = (idol: Idol, increaseEnergy: number) => {
  idol.energy += increaseEnergy + idol.motivation;
  return;
};
