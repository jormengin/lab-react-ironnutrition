import React, { useState } from 'react';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div>
     
      {foodList.map((elem, index) => (
        <FoodBox food={elem}  key={elem.name+index} />
      ))}
    </div>
  );
}

export default App;
