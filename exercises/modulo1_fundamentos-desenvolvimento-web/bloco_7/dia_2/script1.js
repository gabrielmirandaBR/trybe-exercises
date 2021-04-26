const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
  const name =  order['order']['delivery']['deliveryPerson'];
  const nameDelivery = order['name'];
  const tel = order['phoneNumber'];
  const street = order['address']['street'];
  const number = order['address']['number'];
  const apto = order['address']['apartment'];

  console.log(`Olá ${name}, entrega para: ${nameDelivery}, Telefone: ${tel}, ${street}, Nº: ${number}, AP: ${apto}.`);
};

customerInfo(order);

const orderModifier = (order) => {
  const name = order.name = 'Luiz Silva';
  const pizzaMuzzarela = order.order.pizza = 'muzzarela';
  const pizzaCalabresa = order.order.pizza = 'calabresa';
  const drink = order.order.drinks.coke.type;
  const paymentTotal = order.payment = 'R$ 50,00';

  console.log(`Olá ${name}, o total do seu pedido de ${pizzaMuzzarela}, ${pizzaCalabresa} e ${drink} é ${paymentTotal}.`)

}

orderModifier(order);
