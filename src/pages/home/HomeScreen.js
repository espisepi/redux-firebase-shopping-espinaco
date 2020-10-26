import React from 'react';
import { useSelector } from 'react-redux';


export default function HomeScreen () {

    const { products, cart, currentItem } = useSelector( state => state.cart );
    console.log(products);

    return <h1>HOLA HOME SCREEN</h1>
}