/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/animate.css";
import "./styles/aos.css";
import "./styles/app.css";
import "./styles/bootstrap.min.css";
import "./styles/magnific-popup.css";
import "./styles/owl.theme.default.min.css";
import "./styles/splitting.css";
import "./styles/style.css";
import "./styles/fontawesome-all.css";
import "./styles/icomoon.css";
import "./styles/swiper.css";
import "./styles/themify-icons.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Index from "./components/Index";
import VisiMisi from "./pages/VisiMisi";
import Kuesioner from "./pages/Kuesioner";
import Prosedur from "./pages/praktikum/Prosedur";
import JadwalPraktikum from "./pages/praktikum/JadwalPraktikum";
import Pembayaran from "./pages/praktikum/Pembayaran";
import Asisten from "./pages/laboratorium/Asisten";
import SaranaDanPrasarana from "./pages/laboratorium/SaranaDanPrasarana";
import TentangKami from "./pages/TentangKami";
import Kontak from "./pages/Kontak";
import Footer from "./components/Footer";
import SaranaIot from "./pages/laboratorium/Iot";
import SaranaStartUp from "./pages/laboratorium/Startup";
import SaranaMulmed from "./pages/laboratorium/Mulmed";
import SaranaComnet from "./pages/laboratorium/Comnet";
import SaranaDs from "./pages/laboratorium/Ds";
import SaranaCv from "./pages/laboratorium/Cv";
import SaranaMicro from "./pages/laboratorium/Micro";
import SaranaRiset2 from "./pages/laboratorium/Rs2";
import SaranaRiset1 from "./pages/laboratorium/Rs1";
import SaranaRiset3 from "./pages/laboratorium/Rs3";
import Sop from "./pages/laboratorium/Sop";
import JadwalUjian from "./pages/praktikum/JadwalUjian";
import AOS from "aos";
import "aos/dist/aos.css";

function Utama() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <React.Fragment>
      <div className="body_wrap">
        <div id="thetop"></div>
        <div id="backtotop">
          <a href="#" id="scroll">
            <i className="fal fa-arrow-up"></i>
            <i className="fal fa-arrow-up"></i>
          </a>
        </div>
        <Header></Header>
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/visi-dan-misi" component={VisiMisi} />
          <Route exact path="/praktikum/prosedur" component={Prosedur} />
          <Route
            exact
            path="/praktikum/jadwal-praktikum"
            component={JadwalPraktikum}
          />
          <Route exact path="/praktikum/pembayaran" component={Pembayaran} />
          <Route exact path="/laboratorium/asisten" component={Asisten} />
          <Route exact path="/laboratorium/sop" component={Sop} />
          <Route
            exact
            path="/laboratorium/sarana-dan-prasarana"
            component={SaranaDanPrasarana}
          />
          <Route exact path="/laboratorium/iot" component={SaranaIot} />
          <Route exact path="/laboratorium/startup" component={SaranaStartUp} />
          <Route
            exact
            path="/laboratorium/multimedia"
            component={SaranaMulmed}
          />
          <Route
            exact
            path="/laboratorium/computer-network"
            component={SaranaComnet}
          />
          <Route exact path="/laboratorium/data-science" component={SaranaDs} />
          <Route
            exact
            path="/laboratorium/computer-vision"
            component={SaranaCv}
          />
          <Route
            exact
            path="/laboratorium/microcontroller"
            component={SaranaMicro}
          />
          <Route
            exact
            path="/laboratorium/research-room2"
            component={SaranaRiset2}
          />
          <Route
            exact
            path="/laboratorium/research-room1"
            component={SaranaRiset1}
          />
          <Route
            exact
            path="/laboratorium/research-room3"
            component={SaranaRiset3}
          />
          <Route exact path="/tentang-kami" component={TentangKami} />
          <Route exact path="/kontak" component={Kontak} />
          <Route exact path="/praktikum/JadwalUjian" component={JadwalUjian} />
          <Route exact path="/kuesioner" component={Kuesioner} />
        </Switch>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Utama />
  </BrowserRouter>,
  document.getElementById("root")
);
