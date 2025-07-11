"use client";

import { Fragment } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ClaimsWalletMax } from "../views/ClaimsWalletMax";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <ClaimsWalletMax />
      <Footer />
    </Fragment>
  );
}
