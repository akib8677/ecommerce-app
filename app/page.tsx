
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HomePage from "@/pages/Home";
import { Fragment } from "react";

export default async function Index() {
  return (
    <Fragment>
      <Header />
        <HomePage />
      <Footer/>
    </Fragment>
  );
}
