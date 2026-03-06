export class Monster {
  constructor() {
    this.name = "Goblin";
    this.hp = 80;
    this.attackPower = 15;
  }

  attack(target) {
    const damage = Math.floor(Math.random() * this.attackPower) + 1;
    target.hp -= damage;
    return damage;
  }
}