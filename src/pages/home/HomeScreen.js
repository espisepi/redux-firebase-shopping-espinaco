import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { startLoadingProducts } from '../../redux/actions/cart-actions';

export default function HomeScreen () {

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(startLoadingProducts());
    },[]);

    const { products, cart, currentItem } = useSelector( state => state.cart );
    console.log(products);

    return <h1>HOLA HOME SCREEN</h1>
}