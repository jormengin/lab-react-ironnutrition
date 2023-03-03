import React from 'react'
import { Card, Row, Col, Divider, Input, Button } from "antd";


function FoodBox({food:{name,image,calories,servings}, handleDelete}) {
  const handleDeleteFood = () => {
    handleDelete(name)
  }
  return (
    <div>
       <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type="primary" onClick={handleDeleteFood} > Delete </Button>
      </Card>
    </Col> 
    </div>
  )
}

export default FoodBox