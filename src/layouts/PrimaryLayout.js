import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const PrimaryLayout = props => (
  <div>
    <Header />
    <main>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className={props.column}>{props.children}</div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
)

export default PrimaryLayout
