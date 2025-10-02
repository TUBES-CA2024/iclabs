import React, { useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { url } from "../../components/const";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TitleSarana from "../../components/TitleSarana";

function SaranaStartUp() {
  useEffect(() => {
    // Cek apakah halaman sudah di-refresh
    if (!sessionStorage.getItem("hasRefreshed")) {
      // Simpan tanda di sessionStorage bahwa halaman sudah di-refresh
      sessionStorage.setItem("hasRefreshed", "true");
      // Refresh halaman
      window.location.reload();
    }
  }, []);

  const images = {
    startup: [
      require("../../images/laboratorium/startup/StartUp (1).jpg"),
      require("../../images/laboratorium/startup/StartUp (2).jpg"),
      require("../../images/laboratorium/startup/StartUp (3).jpg"),
      require("../../images/laboratorium/startup/StartUp (4).jpg"),
    ],
  };

  return (
    <React.Fragment>
      <Breadcrumb halaman="Sarana Dan Prasarana Laboratorium"></Breadcrumb>
      <section
        id="service_section"
        className="service_section sec_ptb_120 clearfix"
      >
        <div className="container">
          <div
            className="section_title text-center mb-50"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="title_text mb-0">Sarana Dan Prasarana</h2>
          </div>

          <div className="row mb-80">
            <div
              className="col-md-12 mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <TitleSarana title="Laboratorium StartUp"></TitleSarana>
              <div className="col-md-12 mx-auto mt-5 mb-2">
                <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide"
                  data-ride="carousel"
                  data-interval="2000"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={images.startup[0]}
                        class="d-block"
                        style={{
                          width: "100%",
                          height: "530px",
                          objectFit: "cover",
                        }}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={images.startup[1]}
                        class="d-block"
                        style={{
                          width: "100%",
                          height: "530px",
                          objectFit: "cover",
                        }}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={images.startup[2]}
                        class="d-block"
                        style={{
                          width: "100%",
                          height: "530px",
                          objectFit: "cover",
                        }}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={images.startup[3]}
                        class="d-block"
                        style={{
                          width: "100%",
                          height: "530px",
                          objectFit: "cover",
                        }}
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-justify col-md-12 mt-3">
                Laboratorium Startup adalah fasilitas yang menyediakan layanan
                praktikum bagi mahasiswa untuk mendukung kegiatan pembelajaran.
                Laboratorium ini dilengkapi dengan 36 set komputer yang
                dirancang untuk mendukung proses praktikum mahasiswa secara
                optimal. Dengan kapasitas maksimal 36 mahasiswa, laboratorium
                ini memastikan suasana belajar yang kondusif dan interaktif
              </p>

              <p className="mt-3">
                Adapun Hardaware dan software yang di gunakan dalam kegiatan
                praktikum di Lab Starup meliputi:
              </p>
              <ol
                style={{
                  listStyle: "none",
                  backgroundColor: "#F0F0F0",
                  borderRadius: "5px",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <li style={{ width: "100%" }}>
                  <a
                    style={{
                      width: "100%",
                      color: "white",
                      backgroundColor: "#4770F5",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    class="btn"
                    data-toggle="collapse"
                    href="#Hardware"
                    role="button"
                    aria-controls="Hardware"
                    aria-expanded="false"
                  >
                    <i className="fal fa-plus"></i>
                    Hardware
                  </a>
                  <ul class="collapse multi-collapse mt-3" id="Hardware">
                    <li>CPU [Intel Core i7-9700F]</li>
                    <li>Ram DDR4 [16 GB]</li>
                    <li>SSD SATA [500 GB]</li>
                    <li>Keyboard Logitech</li>
                    <li> Mouse Logitech</li>
                    <li>Mousepad Fantech</li>
                    <li>Monitor LG 22" Inch</li>
                    <li>VGA MSI GeForce GTX 1650</li>
                  </ul>
                </li>
                <li>
                  <a
                    style={{
                      width: "100%",
                      color: "white",
                      backgroundColor: "#4770F5",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    class="btn"
                    data-toggle="collapse"
                    href="#Software"
                    role="button"
                    aria-expanded="false"
                    aria-controls="Software"
                  >
                    <i className="fal fa-plus"></i> Software
                  </a>
                  <ul class="collapse multi-collapse mt-3" id="Software">
                    <li>Apache Netbeans</li>
                    <li>Embarcadero Dev-Cpp / Dev C++</li>
                    <li>Visual Studio Code</li>
                    <li>Xampp</li>
                    <li>Git</li>
                    <li>Adobe After Effects</li>
                    <li>Adobe Illustrator</li>
                    <li> Adobe Photoshop</li>
                    <li> Adobe Premiere Pro</li>
                    <li> Postman</li>
                    <li> Android Studio</li>
                    <li> Emulator Android </li>
                    <li> Cisco Packet Tracer</li>
                    <li> VirtualBox</li>
                    <li> Geany</li>
                    <li> MySQL Workbench</li>
                    <li> Microsoft Office </li>
                    <li> Browser</li>
                  </ul>
                </li>
                <li>
                  <a
                    style={{
                      width: "100%",
                      color: "white",
                      backgroundColor: "#4770F5",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    class="btn"
                    data-toggle="collapse"
                    href="#Fasilitas-lain"
                    role="button"
                    aria-expanded="false"
                    aria-controls="Fasilitas-lain"
                  >
                    <i className="fal fa-plus"></i> Fasilitas Lain
                  </a>
                  <ul class="collapse multi-collapse mt-3" id="Fasilitas-lain">
                    <li> 3 TV TCL 75” Inch </li>
                    <li> 1 Buah Speaker Samsung </li>
                    <li> Spliter HDMI</li>
                    <li> Kabel HDMI</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <div className="container" data-aos="fade-up" data-aos-delay="300">
        <hr className="m-0" />
      </div>
    </React.Fragment>
  );
}

export default SaranaStartUp;
