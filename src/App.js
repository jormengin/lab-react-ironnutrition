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
const handleDelete =(food)=>{
  const clearedCourses = [...foodList].filter(elem=> !elem.name.includes(food))
  setFoodList(clearedCourses)
}
  return (
    <div>
      <Search handleSearch={handleSearch}/>
      <AddFoodForm handleAddFood={handleAddFood}/>
      <div className='food-container'>
      {foodList.filter(elem => elem.name.toLowerCase().includes(searchValue.toLowerCase())).map((elem, index) => (
        <FoodBox food={elem}  key={elem.name+index} handleDelete={handleDelete} />
      ))}
      </div>
    </div>
  );
}

export default App;
