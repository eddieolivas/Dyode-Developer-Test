import React from "react"

import Header from "./header/header"
import Footer from "./footer/footer";
import classes from './layout.module.scss';

const Layout = ({ children }) => (
    <div className={classes.layout}>
      <Header />
        <main>
            {children}
        </main>
      <Footer />
    </div>
);

export default Layout;