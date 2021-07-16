import { Link } from "gatsby"
import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FooterMenusWidgets from "../components/FooterMenusWidgets"
import MenuModal from "../components/MenuModal"


import { /* DarkModeToggle, */ /* Footer,  */SignupForm } from "../customedComponents"
/* import { useDarkMode } from "../hooks" */

const backdropClasses = " backdrop"

export const LayoutFull = ({ children, bodyClass })  => {
/*   const [isDarkMode, setIsDarkMode] = useDarkMode() */
  const [backdropActive, setBackdropActive] = useState(false)

  const toggleBackdrop = (e, active) => {
    e.preventDefault()
    setBackdropActive(active)
  }


  return (
    <>

  <div
      id={"GatsbyBody"}
      className={
        bodyClass +
        " showing-menu-modal showing-modal bg-gray-100 dark:bg-gray-900" +
        (backdropActive ? backdropClasses : "")
      }
    >
      <Header toggleBackdrop={toggleBackdrop} />

      <MenuModal isActive={backdropActive} toggleBackdrop={toggleBackdrop} />
      <header className="bg-white dark:bg-transparent py-6">
        <div className="container text-center">
          <div className="relative">
            <Link to="/" className="inline-block">
              <img alt="Logo" src="/logo.svg" />
            </Link>

            <div className="absolute top-0 right-0">
{/*               <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} /> */}
            </div>
          </div>
        </div>
      </header>

      <main id="site-content" role="main">
        {children}
      </main>
      <div className="bg-white dark:bg-transparent border-t border-b border-transparent py-8 lg:py-16 mt-8">
        <div className="container">
          <SignupForm />
        </div>
      </div>
      <FooterMenusWidgets />

      <Footer />
    </div>


{/*     <div className="bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-transparent py-6">
        <div className="container text-center">
          <div className="relative">
            <Link to="/" className="inline-block">
              <img alt="Logo" src="/logo.svg" />
            </Link>

            <div className="absolute top-0 right-0">
              <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} />
            </div>
          </div>
        </div>
      </header>
      {children}
      <div className="bg-white dark:bg-transparent border-t border-b border-transparent py-8 lg:py-16 mt-8">
        <div className="container">
          <SignupForm />
        </div>
      </div>
      <Footer />
    </div> */}
    </>
  )
}



/* import React, { useState } from "react" */
/* import Header from "../components/Header"
import Footer from "../components/Footer" */

/* import FooterMenusWidgets from "../components/FooterMenusWidgets"
import MenuModal from "../components/MenuModal" */

/* const backdropClasses = " backdrop" */

/* const Layout = ({ children, bodyClass }) => {
  const [backdropActive, setBackdropActive] = useState(false)

  const toggleBackdrop = (e, active) => {
    e.preventDefault()
    setBackdropActive(active)
  }
 */
/*   return (
    <div
      id={"GatsbyBody"}
      className={
        bodyClass +
        " showing-menu-modal showing-modal" +
        (backdropActive ? backdropClasses : "")
      }
    >
      <Header toggleBackdrop={toggleBackdrop} />

      <MenuModal isActive={backdropActive} toggleBackdrop={toggleBackdrop} />

      <main id="site-content" role="main">
        {children}
      </main>

      <FooterMenusWidgets />

      <Footer />
    </div>
  )
} */

