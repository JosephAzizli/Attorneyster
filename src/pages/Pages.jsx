import React from "react";

import Laws from "../components/laws/Laws";
import Parker from "../components/parker/Parker";
import Opinion from "../components/opinions/Opinion";
import Navbar from "../components/navbar/Navbar";

const Pages = () => {
  return (
    <>
      <Navbar />
      <>
        <Parker />
        <Laws />
        <Opinion />
      </>
    </>
  );
};

export default Pages;
