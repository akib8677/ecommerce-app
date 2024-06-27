"use client"
import Checkout from '@/components/pages/Checkout'
import withAuth from '@/hoc/withAuth';
import React from 'react'

const CheckoutPage = () => {
  return (
    <Checkout />
  )
}

export default withAuth(CheckoutPage);