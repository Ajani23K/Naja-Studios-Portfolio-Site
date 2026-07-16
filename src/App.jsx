import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import Home from "@/containers/home";
import Works from "@/containers/works";
import About from "@/containers/about";
import Services from "@/containers/services"
import Contact from "@/containers/contact"


const App = () => {
 
  return <div className="w-screen min-h-screen flex-1">
    {/*header*/}
    <Header />
  
    {/*home section*/}
    <Home />
    {/*works*/}
    <Works />
    {/*about*/}
    <About />
    {/*services*/}
    <Services />

    {/*contact*/}
    <Contact/>
    {/*footer*/}
  </div>
};

export default App;