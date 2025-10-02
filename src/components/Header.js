import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo/logo_2.png";

function Header() {
  const location = useLocation();

  return (
    <header
      id="header_section"
      className={
        location.pathname !== "/"
          ? "text-white header_section sticky_header d-flex align-items-center clearfix"
          : "header_section sticky_header d-flex align-items-center clearfix"
      }
    >
      <div className="container w-1520">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-12">
            <div className="brand_logo">
              <Link to="/" className="brand_link">
                <img
                  src={logo}
                  alt="logo_not_found"
                  style={{ height: "80px" }}
                />
                <img
                  src={logo}
                  alt="logo_not_found"
                  style={{ height: "80px" }}
                />
              </Link>
              <button type="button" className="menu_btn">
                <i className="fal fa-bars"></i>
              </button>
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <nav className="main_menu ul_li_center clearfix">
              <ul className="clearfix">
                <li className="menu_item_has_child">
                  <Link to="/">Home</Link>
                </li>
                <li className="menu_item_has_child">
                  <Link to="/visi-dan-misi">Visi & Misi</Link>
                </li>
                <li className="menu_item_has_child">
                  <a to="#">Praktikum</a>
                  <ul className="submenu">
                    <li>
                      <Link to="/praktikum/prosedur">
                        Tata Tertib Praktikum
                      </Link>
                    </li>
                    <li>
                      <Link to="/praktikum/jadwal-praktikum">
                        Jadwal Praktikum
                      </Link>
                    </li>
                    <li>
                      <Link to="/praktikum/JadwalUjian">Jadwal Ujian</Link>
                    </li>
                    <li>
                      <Link to="/praktikum/pembayaran">Pembayaran</Link>
                    </li>
                    <li>
                      <a href="https://iclabs.fikom.umi.ac.id/s/monitoring-praktikum/">
                        Monitoring
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu_item_has_child">
                  <a to="#">Laboratorium</a>
                  <ul className="submenu">
                    <li>
                      <Link to="/laboratorium/asisten">Asisten</Link>
                    </li>
                    <li>
                      <Link to="/laboratorium/sop">
                        Standard Operating Procedure (SOP)
                      </Link>
                    </li>
                    <li>
                      <Link to="/laboratorium/sarana-dan-prasarana">
                        Sarana dan Prasarana
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="menu_item_has_child">
                                    <Link to="/tentang-kami">Tentang Kami</Link>
                                </li> */}
                <li className="menu_item_has_child">
                  <Link to="/kuesioner">Kuesioner</Link>
                </li>
                <li className="menu_item_has_child">
                  <Link to="/kontak">Kontak</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
