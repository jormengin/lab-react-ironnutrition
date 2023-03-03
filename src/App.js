import React, { useState } from 'react';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchValue, setSearchValue] = useState('');

  const handleAddFood = (newFoodData) => {
    const foodWithId = { ...newFoodData, _id: foods.length + 1 }
    setFoodList([...foodList, foodWithId]);
  }
  const handleSearch=(searchValue)=>{
      setSearchValue(searchValue)
  }

  return (
    <div>
      <Search handleSearch={handleSearch}/>
      <AddFoodForm handleAddFood={handleAddFood}/>
      {foodList.filter(elem => elem.name.toLowerCase().includes(searchValue.toLowerCase())).map((elem, index) => (
        <FoodBox food={elem}  key={elem.name+index} />
      ))}
    </div>
  );
}

export default App;
