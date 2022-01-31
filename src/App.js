import Alarm from "./Pages/Alarm";
import GlobalStyle from "./style/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./Pages/Footer";

function App() {
  return (
      <div className={"timerBlock"}>
          <GlobalStyle />
            <div className={"main"}>
                <Routes>
                    <Route path="/" element={<Alarm/>} />
                </Routes>
            </div>
          <Footer />
      </div>
  );
}

export default App;
