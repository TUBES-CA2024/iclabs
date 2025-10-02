import React,{useEffect} from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { url } from "../../components/const";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TitleSarana from "../../components/TitleSarana";

function SaranaRiset2() {
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
    riset2: [
        require("../../images/laboratorium/riset2/Riset 2(1).jpg"),
        require("../../images/laboratorium/riset2/Riset 2(3).jpg"),
        require("../../images/laboratorium/riset2/Riset 2(5).jpg"),
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
          </div>
        </div>
      </section>

      <div className="container" data-aos="fade-up" data-aos-delay="300">
        <hr className="m-0" />
      </div>
    </React.Fragment>
  );
}

export default SaranaRiset2;
