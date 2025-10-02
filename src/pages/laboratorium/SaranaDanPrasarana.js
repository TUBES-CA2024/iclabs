import React, { useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { url } from "../../components/const";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import TitleSarana from "../../components/TitleSarana";

function SaranaDanPrasarana() {
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
    iot: [
      require("../../images/laboratorium/iot/IoT (2).jpg"),
      require("../../images/laboratorium/iot/IoT (3).jpg"),
    ],
    startup: [
      require("../../images/laboratorium/startup/StartUp (1).jpg"),
      require("../../images/laboratorium/startup/StartUp (2).jpg"),
      require("../../images/laboratorium/startup/StartUp (3).jpg"),
      require("../../images/laboratorium/startup/StartUp (4).jpg"),
    ],
    cv: [
      require("../../images/laboratorium/cv/CV (2).jpg"),
      require("../../images/laboratorium/cv/CV (1).jpg"),
      // require("../../images/laboratorium/cv/3.JPG"),
    ],
    ds: [
      require("../../images/laboratorium/ds/DS (3).jpg"),
      require("../../images/laboratorium/ds/DS (4).jpg"),
    ],
    comnet: [
      require("../../images/laboratorium/comnet/1.JPG"),
      require("../../images/laboratorium/comnet/Comnet 3.png"),
      require("../../images/laboratorium/comnet/3.JPG"),
    ],
    mulmed: [
      require("../../images/laboratorium/mulmed/Mulmed (1).jpg"),
      require("../../images/laboratorium/mulmed/Mulmed (3).jpg"),
      require("../../images/laboratorium/mulmed/Mulmed (5).jpg"),
    ],
    micro: [
      require("../../images/laboratorium/micro/Micro (1).jpg"),
      require("../../images/laboratorium/micro/Micro (2).jpg"),
      require("../../images/laboratorium/micro/Micro (4).jpg"),
    ],
    riset2: [
      require("../../images/laboratorium/riset2/Riset 2(1).jpg"),
      require("../../images/laboratorium/riset2/Riset 2(3).jpg"),
      require("../../images/laboratorium/riset2/Riset 2(5).jpg"),
    ],
    riset1: [require("../../images/laboratorium/riset1/RIset1.png")],
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
            data-aos-delay="200"
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
                  // data-interval="2000"
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
            <div
              className="col-md-12 mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <TitleSarana title="Laboratorium IoT (Internet of Things)"></TitleSarana>
              <div className="col-md-12 mx-auto mt-5 mb-2">
                <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide"
                  data-ride="carousel"
                  // data-interval="2000"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={images.iot[0]}
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
                        src={images.iot[1]}
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
                Laboratorium IOT adalah fasilitas yang menyediakan layanan
                praktikum bagi mahasiswa untuk mendukung kegiatan pembelajaran.
                Laboratorium ini dilengkapi dengan 24 set komputer yang
                dirancang untuk mendukung proses praktikum mahasiswa secara
                optimal. Dengan kapasitas maksimal 24 mahasiswa, laboratorium
                ini memastikan suasana belajar yang kondusif dan interaktif.
              </p>

              <p className="mt-3">
                Adapun Hardaware dan software yang di gunakan dalam kegiatan
                praktikum di Lab IoT meliputi:
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
                    href="#hardware-iot"
                    role="button"
                    aria-expanded="false"
                    aria-controls="hardware-iot"
                  >
                    <i className="fal fa-plus"></i> Hardware
                  </a>
                  <ul class="collapse multi-collapse mt-3" id="hardware-iot">
                    <li> CPU [Intel Core i5-7100]</li>
                    <li> Ram DDR4 [8 GB] </li>
                    <li> HDD [1 TB]</li>
                    <li> Keyboard Logitech</li>
                    <li> Mouse Logitech</li>
                    <li> Mousepad Fantech</li>
                    <li> Monitor LG 22” Inch</li>
                    <li> VGA NVIDIA Geforce GT 1030</li>
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
                    href="#Software-iot"
                    role="button"
                    aria-expanded="false"
                    aria-controls="Software-iot"
                  >
                    <i className="fal fa-plus"></i> Software
                  </a>
                  <ul class="collapse multi-collapse mt-3" id="Software-iot">
                    <li> Apache Netbeans</li>
                    <li> Embarcadero Dev-Cpp / Dev C++</li>
                    <li> Visual Studio Code</li>
                    <li> Xampp</li>
                    <li> Git</li>
                    <li> Adobe After Effects</li>
                    <li> Adobe Illustrator</li>
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
                    href="#Fasilitas-lain-iot"
                    role="button"
                    aria-expanded="false"
                    aria-controls="Fasilitas-lain-iot"
                  >
                    <i className="fal fa-plus"></i> Fasilitas Lain
                  </a>
                  <ul
                    class="collapse multi-collapse mt-3"
                    id="Fasilitas-lain-iot"
                  >
                    <li> 2 TV TCL 75” Inch</li>
                    <li> Spliter HDMI</li>
                    <li> Kabel HDMI</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div
              className="col-md-12 mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <TitleSarana title="Laboratorium Computer Network"></TitleSarana>
              <div className="col-md-12 mx-auto mt-5 mb-2">
                <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={images.comnet[2]}
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
                        src={images.comnet[0]}
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
                        src={images.comnet[1]}
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
                Laboratorium Computer Network adalah fasilitas yang menyediakan
                layanan praktikum bagi mahasiswa untuk mendukung kegiatan
                pembelajaran. Laboratorium ini dilengkapi dengan 15 set komputer
                yang dirancang untuk mendukung proses praktikum mahasiswa secara
                optimal. Dengan kapasitas maksimal 24 mahasiswa, laboratorium
                ini memastikan suasana belajar yang kondusif dan interaktif
              </p>

              <p className="mt-3">
                Adapun Hardaware dan software yang di gunakan dalam kegiatan
                praktikum di Lab Computer Network meliputi:
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
                    href="#Hardware-comnet"
                    role="button"
                    aria-expanded="false"
                    aria-controls="Hardware-comnet"
                  >
                    <i className="fal fa-plus"></i> Hardware
                  </a>
                  <ul class="collapse multi-collapse mt-3" id="Hardware-comnet">
                    <li> CPU [Intel I7-10700k]</li>
                    <li> Ram DDR4 [16 GB]</li>
                    <li> SSD NVME [512 GB]</li>
                    <li> Keyboard Logitech</li>
                    <li> Mouse Logitech</li>
                    <li> Mousepad Fantech</li>
                    <li> Monitor AOC 27” Inch</li>
                    <li> VGA MSI GeForce GTX 1650</li>
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
                    href="#Software-comnet"
                    role="button"
                    aria-expanded="false"
                    aria-controls="Software-comnet"
                  >
                    <i className="fal fa-plus"></i> Software
                  </a>
                  <ul class="collapse multi-collapse mt-3" id="Software-comnet">
                    <li> Apache Netbeans</li>
                    <li> Embarcadero Dev-Cpp / Dev C++</li>
                    <li> Visual Studio Code</li>
                    <li> Xampp</li>
                    <li> Git</li>
                    <li> Adobe After Effects</li>
                    <li> Adobe Illustrator</li>
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
                    href="#Fasilitas-lain-comnet"
                    role="button"
                    aria-expanded="false"
                    aria-controls="Fasilitas-lain-comnet"
                  >
                    <i className="fal fa-plus"></i> Fasilitas Lain
                  </a>
                  <ul
                    class="collapse multi-collapse mt-3"
                    id="Fasilitas-lain-comnet"
                  >
                    <li> 1 TV TCL 75” Inch</li>
                    <li> Spliter HDMI</li>
                    <li> Kabel HDMI</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
              <TitleSarana title="Laboratorium Data Science"></TitleSarana>
              <div className="col-md-12 mx-auto mt-5 mb-2">
                <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={images.ds[0]}
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
                        src={images.ds[1]}
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
                Laboratorium Data Science adalah fasilitas yang menyediakan
                layanan praktikum bagi mahasiswa untuk mendukung kegiatan
                pembelajaran. Laboratorium ini dilengkapi dengan 25 set komputer
                yang dirancang untuk mendukung proses praktikum mahasiswa secara
                optimal. Dengan kapasitas maksimal 26 mahasiswa, laboratorium
                ini memastikan suasana belajar yang kondusif dan interaktif.
              </p>

              <p className="mt-3">
                Adapun Hardaware dan software yang di gunakan dalam kegiatan
                praktikum di Lab Data Science meliputi:
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
                    href="#Hardware-ds"
                    role="button"
                    aria-expanded="false"
                    aria-controls="Hardware-ds"
                  >
                    <i className="fal fa-plus"></i> Hardware
                  </a>
                  <ul class="collapse multi-collapse mt-3" id="Hardware-ds">
                    <li> CPU [Intel i7-12700f]</li>
                    <li> Ram DDR4 [16 GB]</li>
                    <li> SSD NVMe [512 GB]</li>
                    <li> Keyboard Logitech</li>
                    <li> Mouse Logitech</li>
                    <li> Mousepad Fantech</li>
                    <li> Monitor Mi 23.8” Inch</li>
                    <li> VGA MSI GeForce GTX 1650</li>
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
                    href="#software-ds"
                    role="button"
                    aria-expanded="false"
                    aria-controls="software-ds"
                  >
                    <i className="fal fa-plus"></i> Software
                  </a>
                  <ul class="collapse multi-collapse mt-3" id="software-ds">
                    <li> Apache Netbeans</li>
                    <li> Embarcadero Dev-Cpp / Dev C++</li>
                    <li> Visual Studio Code</li>
                    <li> Xampp</li>
                    <li> Git</li>
                    <li> Adobe After Effects</li>
                    <li> Adobe Illustrator</li>
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
                    href="#fasilitas-lain-ds"
                    role="button"
                    aria-expanded="false"
                    aria-controls="fasilitas-lain-ds"
                  >
                    <i className="fal fa-plus"></i> Fasilitas Lain
                  </a>
                  <ul
                    class="collapse multi-collapse mt-3"
                    id="fasilitas-lain-ds"
                  >
                    <li> 1 TV TCL 75” Inch</li>
                    <li> Spliter HDMI</li>
                    <li> Kabel HDMI</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div
              className="col-md-12 mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <TitleSarana title="Laboratorium Computer Vision"></TitleSarana>
              <div className="col-md-12 mx-auto mt-5 mb-2">
                <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={images.cv[0]}
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
                        src={images.cv[1]}
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
                        src={images.cv[0]}
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
                Laboratorium Computer Vision adalah fasilitas yang menyediakan
                layanan praktikum bagi mahasiswa untuk mendukung kegiatan
                pembelajaran. Laboratorium ini dilengkapi dengan 25 set komputer
                yang dirancang untuk mendukung proses praktikum mahasiswa secara
                optimal. Dengan kapasitas maksimal 26 mahasiswa, laboratorium
                ini memastikan suasana belajar yang kondusif dan interaktif.
              </p>
              <p className="mt-3">
                Adapun Hardaware dan software yang di gunakan dalam kegiatan
                praktikum di Lab Computer Vision meliputi:
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
                    href="#hardware-cv"
                    role="button"
                    aria-expanded="false"
                    aria-controls="hardware-cv"
                  >
                    <i className="fal fa-plus"></i> Hardaware
                  </a>
                  <ul class="collapse multi-collapse mt-3" id="hardware-cv">
                    <li> CPU [Intel i7-12700f]</li>
                    <li> Ram DDR4 [16 GB]</li>
                    <li> SSD M.2 NVMe [512 GB]</li>
                    <li> Keyboard Logitech</li>
                    <li> Mouse Logitech</li>
                    <li> Mousepad Fantech</li>
                    <li> Monitor Mi 23.8” Inch</li>
                    <li> VGA MSI GeForce GTX 1650</li>
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
                    href="#software-cv"
                    role="button"
                    aria-expanded="false"
                    aria-controls="software-cv"
                  >
                    <i className="fal fa-plus"></i> Software
                  </a>
                  <ul class="collapse multi-collapse mt-3" id="software-cv">
                    <li> Apache Netbeans</li>
                    <li> Embarcadero Dev-Cpp / Dev C++</li>
                    <li> Visual Studio Code</li>
                    <li> Xampp</li>
                    <li> Git</li>
                    <li> Adobe After Effects</li>
                    <li> Adobe Illustrator</li>
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
                    href="#fasilitas-lain-cv"
                    role="button"
                    aria-expanded="false"
                    aria-controls="fasilitas-lain-cv"
                  >
                    <i className="fal fa-plus"></i> Fasilitas Lain
                  </a>
                  <ul
                    class="collapse multi-collapse mt-3"
                    id="fasilitas-lain-cv"
                  >
                    <li> 1 TV TCL 75” Inch</li>
                    <li> Kabel HDMI</li>
                    <li> USB to HDMI</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div
              className="col-md-12 mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <TitleSarana title="Laboratorium Multimedia"></TitleSarana>
              <div className="col-md-12 mx-auto mt-5 mb-2">
                <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide"
                  data-ride="carousel"
                  // data-interval="2000"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={images.mulmed[0]}
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
                        src={images.mulmed[1]}
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
                        src={images.mulmed[2]}
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
                Laboratorium Multimedia adalah fasilitas yang menyediakan
                layanan praktikum bagi mahasiswa untuk mendukung kegiatan
                pembelajaran. Laboratorium ini dilengkapi dengan 30 set komputer
                yang dirancang untuk mendukung proses praktikum mahasiswa secara
                optimal. Dengan kapasitas maksimal 30 mahasiswa, laboratorium
                ini memastikan suasana belajar yang kondusif dan interaktif.
              </p>

              <p className="mt-3">
                Adapun Hardaware dan software yang di gunakan dalam kegiatan
                praktikum di Lab Multimedia meliputi:
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
                    href="#hardware-mulmed"
                    role="button"
                    aria-expanded="false"
                    aria-controls="hardware-mulmed"
                  >
                    <i className="fal fa-plus"></i> Hardware
                  </a>
                  <ul class="collapse multi-collapse mt-3" id="hardware-mulmed">
                    <li> CPU [Intel i7-12700f]</li>
                    <li> RAM DDR4 [16 GB]</li>
                    <li> SSD NVMe [512 GB]</li>
                    <li> Keyboard Votre</li>
                    <li> Mouse Logitech</li>
                    <li> Mousepad Fantech</li>
                    <li> Monitor Mi 23.8” Inch</li>
                    <li> VGA MSI GeForce GTX 1650</li>
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
                    href="#software-mulmed"
                    role="button"
                    aria-expanded="false"
                    aria-controls="software-mulmed"
                  >
                    <i className="fal fa-plus"></i> Software
                  </a>
                  <ul class="collapse multi-collapse mt-3" id="software-mulmed">
                    <li> Apache Netbeans</li>
                    <li> Embarcadero Dev-Cpp / Dev C++</li>
                    <li> Visual Studio Code</li>
                    <li> Xampp</li>
                    <li> Git</li>
                    <li> Adobe After Effects</li>
                    <li> Adobe Illustrator</li>
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
                    href="#fasilitas-lain-mulmed"
                    role="button"
                    aria-expanded="false"
                    aria-controls="fasilitas-lain-mulmed"
                  >
                    <i className="fal fa-plus"></i> Fasilitas Lain
                  </a>
                  <ul
                    class="collapse multi-collapse mt-3"
                    id="fasilitas-lain-mulmed"
                  >
                    <li> 2 TV TCL 75” Inch</li>
                    <li> Spliter HDMI</li>
                    <li> Kabel HDMI</li>
                  </ul>
                </li>
              </ol>
            </div>
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
                  // data-interval="2000"
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
            <div
              className="col-md-12 mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <TitleSarana title="Research Room 1"></TitleSarana>
              <div className="col-md-12 mx-auto mt-5 mb-2">
                <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide"
                  data-ride="carousel"
                  // data-interval="2000"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={images.riset1[0]}
                        class="d-block"
                        style={{ width: "100%", height: "650px" }}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={images.riset1[0]}
                        class="d-block"
                        style={{ width: "100%", height: "650px" }}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={images.riset1[0]}
                        class="d-block"
                        style={{ width: "100%", height: "650px" }}
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-justify">
                Research Room 1 adalah laboratorium yang memberikan pelayanan
                kepada dosen dan mahasiswa dalam melakukan proses kegiatan
                penelitian. Ruangan ini memiliki daya tampung maksimal 12 orang.
                dengan kategori Laboratorium Research.
              </p>
            </div>
            <div
              className="col-md-12 mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <TitleSarana title="Research Room 2"></TitleSarana>
              <div className="col-md-12 mx-auto mt-5 mb-2">
                <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide"
                  data-ride="carousel"
                  // data-interval="2000"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={images.riset2[0]}
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
                        src={images.riset2[1]}
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
                        src={images.riset2[2]}
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
                Research Room 2 adalah laboratorium yang memberikan pelayanan
                kepada dosen dan mahasiswa dalam melakukan proses kegiatan
                penelitian. Ruangan ini memiliki daya tampung maksimal 12 orang.
                dengan kategori Laboratorium Research.
              </p>
              <p className="mt-3">
                Adapun Hardaware yang digunakan didalam ruangan Research 2
                meliputi:
              </p>
              <div
                style={{
                  backgroundColor: "#F0F0F0",
                  borderRadius: "5px",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
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
                  href="#hardware-riset-dua"
                  role="button"
                  aria-expanded="false"
                  aria-controls="hardware-riset-dua"
                >
                  <i className="fal fa-plus"></i> Hardaware
                </a>
                <ul
                  class="collapse multi-collapse mt-3"
                  id="hardware-riset-dua"
                >
                  <li> 2 TV TCL 75” Inch</li>
                  <li> Spliter HDMI</li>
                  <li> Kabel HDMI</li>
                </ul>
              </div>
            </div>
            <div
              className="col-md-12 mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <TitleSarana title="Research Room 3"></TitleSarana>
              <div className="col-md-12 mx-auto mt-5 mb-2">
                <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={images.riset1[0]}
                        class="d-block"
                        style={{ width: "100%", height: "650px" }}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={images.riset1[0]}
                        class="d-block"
                        style={{ width: "100%", height: "650px" }}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={images.riset1[0]}
                        class="d-block"
                        style={{ width: "100%", height: "650px" }}
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-justify">
                Research Room 3 adalah laboratorium yang memberikan pelayanan
                kepada dosen dan mahasiswa dalam melakukan proses kegiatan
                penelitian. Ruangan ini memiliki daya tampung maksimal 12 orang.
                dengan kategori Laboratorium Research
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container" data-aos="fade-up" data-aos-delay="200">
        <hr className="m-0" />
      </div>
    </React.Fragment>
  );
}

export default SaranaDanPrasarana;
