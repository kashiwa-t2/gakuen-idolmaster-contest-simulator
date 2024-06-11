// カードの山札の管理をするクラス

import { SkillCard } from "../types/skill-cards";

export class Deck {
  private deck: SkillCard[];
  private discardPile: SkillCard[];

  constructor(cards: SkillCard[]) {
    this.deck = [...cards];
    this.shuffle(this.deck);
    this.discardPile = [];
  }

  // シャッフルを行う
  private shuffle(array: SkillCard[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // 山札から3枚カードを引く
  public drawCards(): SkillCard[] {
    const drawnCards = this.deck.splice(0, 3);

    if (this.deck.length == 0) {
      this.replenishDeck(drawnCards);
    }

    this.discardPile.push(...drawnCards);
    return drawnCards;
  }

  // 山札が0枚になった時、足りない枚数を捨て札からシャッフルして手持ちに追加し、山札を補充する
  private replenishDeck(drawnCards: SkillCard[]): void {
    const neededCards = 3 - drawnCards.length;
    this.shuffle(this.discardPile); // 捨て札をシャッフル
    drawnCards.push(...this.discardPile.splice(0, neededCards));
    this.deck.push(...this.discardPile);
    this.discardPile = [];
  }

  // 山札と捨て札の状態をログに出力する
  public displayDeckStatus(): void {
    console.log(`Deck: ${this.deck}`);
    console.log(`Discard Pile: ${this.discardPile}`);
  }
}
