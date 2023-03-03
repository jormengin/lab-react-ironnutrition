import React, { useState } from 'react';
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div>
      <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />
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
