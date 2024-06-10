
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HomePage from "@/pages/Home";
import Link from "next/link";
import { Fragment } from "react";
import { FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { HiFire } from 'react-icons/hi';

export default async function Index() {
  return (
    <Fragment>
      <Header />
        <HomePage />
      <Footer/>
    </Fragment>
  );
}
