import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main_container">
        <Main />
        <Nav />
      </div>
      <Footer />
    </div>
  );
}

export default App;
