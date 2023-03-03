import React, { useState } from 'react';
import foods from './foods.json';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div>
      {foodList.map((food, index) => (
        <div key={index}>
          <p>{food.name}</p>
          <img src={food.image} alt={food.name} width= '200px' />
        </div>
      ))}
    </div>
  );
}

export default App;
