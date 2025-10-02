import React,{useEffect} from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { url } from "../../components/const";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TitleSarana from "../../components/TitleSarana";

function SaranaRiset1() {
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
    riset1: [
        require("../../images/laboratorium/riset1/RIset1.png"),
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

      <div className="container" data-aos="fade-up" data-aos-delay="300">
        <hr className="m-0" />
      </div>
    </React.Fragment>
  );
}

export default SaranaRiset1;
