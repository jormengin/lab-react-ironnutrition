import React, {useState} from 'react';
import { Divider, Input } from 'antd'

export default function AddFoodForm({handleAddFood}){
    const initialState = {
      name: '',
      image: '',
      calories: '',
      servings: ''
    }
    const [newFood, setNewFood] = useState(initialState);
  
    const handleChange = (e) => {
      setNewFood(prev => {
        return {
          ...prev,
          [e.target.name]: e.target.value
        }
      })
    }
  
    const handleSubmit = (e) => {
        console.log('im handle submit')
      e.preventDefault();
      handleAddFood(newFood);
      setNewFood(initialState);
    }
  
    return (
        <form onSubmit={handleSubmit}>
          <Divider>Add Food Entry</Divider>
          <label>Name</label>
          <Input name="name" value={newFood.name} type="text" onChange={handleChange} />
          <label>Image</label>
          <Input name="image" value={newFood.image} type="text" onChange={handleChange} />
          <label>Calories</label>
          <Input name="calories" value={newFood.calories} type="number" onChange={handleChange} />
          <label>Servings</label>
          <Input name="servings" value={newFood.servings} type="number" onChange={handleChange} />
          <button type="submit" onClick={handleSubmit}>Create</button>
        </form>
      );
  }