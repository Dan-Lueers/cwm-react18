import { useState } from 'react';
import Button from '../Button';

const Game = () => {
  const [game, setGame] = useState({ id: 1, player: { name: 'John' } });
  const [pizza, setPizza] = useState({
    name: 'Spicy Peperoni',
    toppings: ['mushrooms'],
  });
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 },
    ],
  });

  const handleClickEvent = () => {
    console.log('click event');
    setGame({ ...game, player: { ...game.player, name: 'Bob' } });
    setPizza({ ...pizza, toppings: [...pizza.toppings, 'Cheese'] });
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  };
  return (
    <>
      <Button color='primary' onClick={handleClickEvent}>
        Update Player Name & Pizza Toppings & Cart quantity
      </Button>
      <div>Player Name: {game.player.name}</div>
      <div>Pizza toppings: {pizza.toppings}</div>
      <div>Shopping Cart items:</div>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Game;
