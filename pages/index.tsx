import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import React, { useState } from "react";

function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Header />
    </div>
  );
}

export default Home;
