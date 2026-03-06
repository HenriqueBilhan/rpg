import readline from "readline";
import { Player } from "./player.js";
import { Monster } from "./monster.js";

export class Game {
  constructor() {
    this.player = new Player("Herói");
    this.monster = new Monster();
  }

  start() {
    console.log("BATALHA INICIADA!");
    this.turn();
  }

  turn() {
    if (this.player.hp <= 0) {
      console.log("Você perdeu!");
      process.exit();
    }

    if (this.monster.hp <= 0) {
      console.log(" Você venceu!");
      process.exit();
    }

    console.log(`\n  ${this.player.name}: ${this.player.hp} HP`);
    console.log(` ${this.monster.name}: ${this.monster.hp} HP`);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("\nEscolha: (1) Atacar\n> ", (answer) => {
      if (answer === "1") {
        const damage = this.player.attack(this.monster);
        console.log(` Você causou ${damage} de dano!`);

        if (this.monster.hp > 0) {
          const monsterDamage = this.monster.attack(this.player);
          console.log(` O monstro causou ${monsterDamage} de dano!`);
        }
      }

      rl.close();
      this.turn();
    });
  }
}