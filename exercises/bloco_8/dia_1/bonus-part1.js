const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDamage = () => {
  const minDamage = 15;
  const maxDamage = dragon.strength;
  const rangeDamage = Math.floor(Math.random() * (maxDamage - minDamage) + minDamage);

  return rangeDamage;
}

//Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = () => {
  const minDamage = warrior.strength;
  const maxDamage = minDamage * (warrior.weaponDmg);
  const rangeDamage = Math.floor(Math.random() * (maxDamage - minDamage) + minDamage);

  return rangeDamage;
}

console.log(warriorDamage());