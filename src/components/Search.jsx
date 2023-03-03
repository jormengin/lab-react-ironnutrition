import React, { useState } from 'react';

import { Card, Row, Col, Divider, Input, Button } from 'antd';

export default function Search({handleSearch}) {
  const handleChange = (e) => {
    handleSearch(e.target.value)
  }

  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      {/* <input onChange={e=>handleSearch(e.target.value)} type="text" /> */}
      <Input type="text" name="search" onChange={handleChange} />
    </>
  );
}