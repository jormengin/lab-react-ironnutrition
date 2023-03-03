import React, { useState } from 'react';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const handleAddFood = (newFoodData) => {
    const foodWithId = { ...newFoodData, _id: foods.length + 1 }
    setFoodList([...foodList, foodWithId]);
  }
  
  return (
    <div>
      <AddFoodForm handleAddFood={handleAddFood}/>
      {foodList.map((elem, index) => (
        <FoodBox food={elem}  key={elem.name+index} />
      ))}
    </div>
  );
}

export default App;
