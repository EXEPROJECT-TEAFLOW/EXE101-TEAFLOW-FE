import React from "react"
import "./App.css"
import { Header } from "./components/ui/header-2"
import { Component } from "@/components/ui/background-components";
import { AboutUs } from "./components/aboutus";
function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
 

  return (
     <div className="min-h-screen w-full bg-gradient-to-b from-[#F2F2F2] to-[#F8F8F2] text-[#202e44]">
      <Header />
      <Component />
      <AboutUs />
    </div>
  )
}

export default App
