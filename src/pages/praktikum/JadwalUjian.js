import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { url } from "../../components/const";
import Pdfviewer from "../../components/Pdfviewer";

function JadwalUjian() {
  return (
    <React.Fragment>
      <Breadcrumb halaman="Jadwal Ujian" deskripsi=""></Breadcrumb>
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
            <h2 className="title_text mb-0">
              Jadwal Ujian Penjaminan Kualitas Mahasiswa - Laboratorium
            </h2>
          </div>

          <div className="row mb-20">
            <div
              className="col-md-8 mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p>
                Ujian Penjaminan Kualitas Mata Kuliah Praktikum dimulai pada
                Hari/Tanggal Senin, 23 Desember 2024.
                <ul>
                  <li>Mahasiswa wajib membawa kartu ujian</li>
                  <li>
                    Mahasiswa diwajibkan mengikuti pedoman berpakaian
                    Laboratorium :
                    <ol type="a">
                      <li>
                        Pria
                        <ol style={{ listStyleType: "circle" }}>
                          <li>Berpakaian rapi memakai kemeja putih polos;</li>
                          <li>
                            Menggunakan celana kain berwarna hitam bukan dari
                            bahan jeans/semi jeans;
                          </li>
                          <li>Rambut rapi dan tidak panjang;</li>
                        </ol>
                      </li>
                      <li>
                        {" "}
                        Wanita
                        <ol style={{ listStyleType: "circle" }}>
                          <li>
                            {" "}
                            Berpakaian rapi memakai kemeja tunik putih polos
                            (tidak transparan);
                          </li>
                          <li>
                            Memakai Jilbab Segitiga Hitam (bukan pasmina) dan
                            menutupi dada;
                          </li>
                          <li>
                            Menggunakan Rok Panjang berwarna hitam yang tidak
                            terbelah dan tidak span serta bukan dari bahan
                            jeans/semi jeans;
                          </li>
                          <li>
                            Memakai kaos kaki dengan tinggi minimal 10 cm
                            di atas mata kaki;
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                </ul>
              </p>
            </div>
            <div
              className="row col-md-8 mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Pdfviewer document="JADWAL UJIAN PRAKTIKUM - GANJIL 2024_2025 (1).pdf" />
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
export default JadwalUjian;
