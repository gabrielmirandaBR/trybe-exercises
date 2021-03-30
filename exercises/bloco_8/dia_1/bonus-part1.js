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

// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageDamage = () => {
  const minDamage = mage.intelligence;
  const maxDamage = minDamage * 2;
  const mana = mage.mana;
  const objMage = {
    spentMana: 0,
    damage: '0 --> Não possui mana suficiente'
  };

  if (mana > 15) {
    objMage.damage = Math.floor(Math.random() * (maxDamage - minDamage) + minDamage);
    objMage.spentMana = 15;
    return objMage;
  }

  return objMage;
}

console.log(mageDamage());