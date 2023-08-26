import React from 'react'
import {OrderFail} from './components/OrderFail'
import {OrderSuccess} from './components/OrderSuccess'
import { useLocation } from 'react-router-dom'
import { useTitle } from '../../hooks/useTitle'
export const OrderPage = () => {
    useTitle("Order Summary")
    //accessing the data from cartCheckout 
    const {state} = useLocation();
  return (
    <main>
      { state.status ? <OrderSuccess data = {state.data}/> : <OrderFail /> }
    </main>
  )
}


