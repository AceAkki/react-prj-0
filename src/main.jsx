import { createRoot } from "react-dom/client"
//import { Fragment } from "react" can be done with just <>
// import Header from "./components/Header.jsx"
// import Footer from "./components/Footer.jsx"
// import Section from "./components/Section.jsx"
import App from "./App"

// createRoot(document.getElementById("head")).render(
//   <Header />
// )

// createRoot(document.getElementById("foot")).render (
//   <Footer />
// )

// createRoot(document.getElementById("root")).render (
//   <>
//     <Header />
//     <Section />
//     <Footer />

//   </>

// )

createRoot(document.getElementById("root")).render (
  <App />
)