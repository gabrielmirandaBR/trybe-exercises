let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// 1.Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
console.log (`Bem-vinda, ${info.personagem}`);

// 2.Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim".
info['recorrente'] = 'Sim';

console.log (info);

// 3.Faça um for/in que mostre todas as chaves do objeto.
for (let data in info) {
  console.log (data);
}

// 4.Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for (let data in info) {
  console.log(info[data]);
}

// 5. Novo objeto
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim"
};


let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
};

for (let key in info) {
  if (info[key] === info.recorrente && info[key] === "Sim" && info2[key] === "Sim") {
    console.log("Ambos estão recorrentes");
  } else {
    console.log(`${info[key]} e ${info2[key]}`);
  }
}