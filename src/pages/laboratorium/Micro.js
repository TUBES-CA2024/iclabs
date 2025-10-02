import React, {useEffect} from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { url } from "../../components/const";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TitleSarana from "../../components/TitleSarana";

function SaranaMicro() {
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
    micro: [
      require("../../images/laboratorium/micro/Micro (1).jpg"),
      require("../../images/laboratorium/micro/Micro (2).jpg"),
      require("../../images/laboratorium/micro/Micro (4).jpg"),
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
              <TitleSarana title="Laboratorium Microcontroler"></TitleSarana>
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
                        src={images.micro[0]}
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
                        src={images.micro[1]}
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
                        src={images.micro[2]}
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

              <p className="text-justify">
                Laboratorium Microcontroler adalah fasilitas yang menyediakan
                layanan praktikum bagi mahasiswa untuk mendukung kegiatan
                pembelajaran. Laboratorium ini dilengkapi dengan 25 set komputer
                yang dirancang untuk mendukung proses praktikum mahasiswa secara
                optimal. Dengan kapasitas maksimal 25 mahasiswa, laboratorium
                ini memastikan suasana belajar yang kondusif dan interaktif.
              </p>
              <p className="mt-3">
                Adapun Hardaware dan software yang di gunakan dalam kegiatan
                praktikum di Lab Microcontroler meliputi:
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
                    href="#hardware-micro"
                    role="button"
                    aria-expanded="false"
                    aria-controls="hardware-micro"
                  >
                    <i className="fal fa-plus"></i> Hardware
                  </a>
                  <ul class="collapse multi-collapse mt-3" id="hardware-micro">
                    <li> CPU [Intel Core i5-4460]</li>
                    <li> RAM DDR3 [8 GB]</li>
                    <li> HDD [1 GB]</li>
                    <li> Keyboard Votre</li>
                    <li> Mouse Logitech</li>
                    <li> Mousepad Fantech</li>
                    <li> Monitor LG 20” Inch</li>
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
                    href="#software-micro"
                    role="button"
                    aria-expanded="false"
                    aria-controls="software-micro"
                  >
                    <i className="fal fa-plus"></i> Software
                  </a>
                  <ul class="collapse multi-collapse mt-3" id="software-micro">
                    <li> Livewire</li>
                    <li> Arduino</li>
                    <li> Microsoft Office</li>
                    <li> Google Chrome</li>
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
                    href="#fasilitas-lain-micro"
                    role="button"
                    aria-expanded="false"
                    aria-controls="fasilitas-lain-micro"
                  >
                    <i className="fal fa-plus"></i> Fasilitas Lain
                  </a>
                  <ul
                    class="collapse multi-collapse mt-3"
                    id="fasilitas-lain-micro"
                  >
                    <li> 1 TV TCL 75” Inch</li>
                    <li> USB to HDMI</li>
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

export default SaranaMicro;
