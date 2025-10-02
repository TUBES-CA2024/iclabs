import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo/logo_2.png"

function Sidebar() {
    return (
        <div className="sidebar-menu-wrapper">
            <div id="mobile_menu" className="mobile_menu">

                <div className="brand_logo mb-50 clearfix">
                    <Link to="/" className="brand_link">
                        <img src={logo} alt="logo_not_found" style={{height: '80px'}}/>
                    </Link>
                    <span className="close_btn"><i className="fal fa-times"></i></span>
                </div>

                <div className="mobile_menu_dropdown menu_list ul_li_block mp_balancing mb-50 clearfix">
                    <ul className="clearfix">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/visi-dan-misi">Visi & Misi</Link>
                        </li>

                        <li className="menu_item_has_child">
                            <a to="#">Praktikum</a>
                            <ul className="submenu">
                                <li><Link to="/praktikum/prosedur">Tata Tertib</Link></li>
                                <li><Link to="/praktikum/jadwal-praktikum">Jadwal Praktikum</Link></li>
                                 <li>
                                                      <Link to="/praktikum/JadwalUjian">
                                                        Jadwal Ujian
                                                      </Link>
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
                        <li>
                      <Link to="/kuesioner">Kuesioner</Link>
                    </li>
                        <li>
                            <Link to="/kontak">Kontak</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="overlay"></div>
        </div>
    )
}

export default Sidebar
