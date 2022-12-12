import React from "react";
import FixedMenu from "./fixedMenu";
import Footer from "./footer";
import Header from "./header";
import PortnorSlider from "./portnorsslider";

const Layout = (props) => {
  return (
    <div className={props.className}>
      <Header />
      <main>
        <FixedMenu />
        {props.children}
        <PortnorSlider />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
