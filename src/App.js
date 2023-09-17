import React, { useContext } from "react"
import Header from "./components/header/Header"
import Router from "./Router"
import MobileMenu from "./components/header/MobileMenu"
import { Context } from "./context/Context"
 

export default function App() {
  const { displayMobileMenu } = useContext(Context)
  return (
    <React.Fragment>
      {
        displayMobileMenu && <MobileMenu />
      }

      <Header />
      <Router />

    </React.Fragment>

  )
}