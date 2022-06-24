import Animal from "./animal.mjs";
import chalk from "chalk";

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  
  info() {
    this.greet();
    console.log(chalk.red(`Nama saya adalah ${this.name}`));
    console.log("Saya adalah seekor " + chalk.blue(this.breed));
    console.log(`Saya berusia ${this.age} tahun`);
    const humanAge = this.getHumanAge();
    console.log(chalk.bgYellow(`Saya berusia ${humanAge} tahun dalam umur manusia`));
  }
  
  getHumanAge() {
    return this.age * 7;
  }
}

export default Dog;