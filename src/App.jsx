import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import Home from "@/containers/home";
import Works from "@/containers/works";
import About from "@/containers/about";


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

    {/*testimonial*/}

    {/*contact*/}

    {/*footer*/}
  </div>
};

export default App;