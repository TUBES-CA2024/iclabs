import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Pdfviewer from "../../components/Pdfviewer";

function Pembayaran() {
  return (
    <React.Fragment>
      <Breadcrumb
        halaman="Informasi Pembayaran Praktikum"
        deskripsi=""
      ></Breadcrumb>
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
            <h2 className="title_text mb-0">Informasi Pembayaran Praktikum</h2>
          </div>

          <section id="feature_section" class="feature_section">
            <div class="container">
              <div class="feature_item">
                <div>
                  <div class="">
                    <div
                      class="child_feature_2 clearfix"
                      data-aos="fade-up"
                      data-aos-delay="300"
                      style={{ display: "flex" }}
                    >
                      <div
                        class="item_icon icon_purple"
                        style={{
                          width: "200px",
                          height: "75px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i class="icon-verified-avatar"></i>
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">Pembayaran </h3>
                        <p class="mb-0">
                          Pembayaran biaya laboratorium diwajibkan bagi
                          mahasiswa yang mengulang atau mengambil ulang mata
                          kuliah praktikum.
                        </p>
                      </div>

                      <div
                        style={{
                          width: "200px",
                          height: "75px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        class="item_icon icon_yellow"
                      >
                        <i class="icon-ring"></i>
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">Prosedur Pembayaran</h3>
                        <p class="mb-0">
                          Mahasiswa dapat melakukan pembayaran melalui Laboran
                          di lantai 2, dengan biaya sebesar:
                          <ul>
                            <li>Rp 55.000/Mata kuliah.</li>
                          </ul>
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        class="item_icon icon_purple"
                      >
                        <i
                          style={{
                            fontSize: "100px",
                          }}
                          class="icon-checked-box"
                        ></i>
                      </div>
                      <div class="item_content">
                        <h3 class="item_title">Bukti Pembayaran</h3>
                        <p class="mb-0">
                          Mahasiswa akan menerima bukti pembayaran setelah
                          transaksi selesai.{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="child_feature_2 clearfix"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  ></div>
                  <div
                    class="child_feature_2 clearfix"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  ></div>
                </div>
              </div>
            </div>
          </section>

          <div className="row col-md-8 mx-auto">
            <Pdfviewer document="DAFTAR TAGIHAN PEMBAYARAN PRAKTIKUM (MENGULANG).pdf" />
          </div>
        </div>
      </section>

      <div className="container" data-aos="fade-up" data-aos-delay="300">
        <hr className="m-0" />
      </div>
    </React.Fragment>
  );
}

export default Pembayaran;
