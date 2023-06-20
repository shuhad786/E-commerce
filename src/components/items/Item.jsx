import React, { useEffect, useState } from "react";
import { fetchByItem } from "../../redux/HomeSlice";
import {  useDispatch, useSelector } from "react-redux";

import React from 'react'

const dispatch = useDispatch();

const { items } = useSelector((state) => state.items)

function Item() {
  return (
    <div>
      
    </div>
  )
}

export default Item;
