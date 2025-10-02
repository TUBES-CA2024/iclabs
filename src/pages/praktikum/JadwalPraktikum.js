import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { url } from "../../components/const";
import Pdfviewer from "../../components/Pdfviewer";

function KegiatanAsisten() {
  return (
    <React.Fragment>
      <Breadcrumb halaman="Jadwal Praktikum" deskripsi=""></Breadcrumb>
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
              Informasi Kegiatan Perkuliahan dan Praktikum Semester Ganjil
              2024/2025
            </h2>
          </div>

          <div className="row mb-20">
            <div
              className="col-md-8 mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {/* <p>
                Assalamualaikum Warahmatullahi Wabarakatuh. Informasi Kegiatan
                Praktikum Semester Ganjil 2024/2025. Disampaikan kepada seluruh
                mahasiswa yang mengambil matakuliah sebagai berikut :
                <br />
                A. Prodi Teknik Informatika
                <ol>
                  <li>1303PPA104 Pengantar Teknologi Informasi</li>
                  <li>1303PPA105 Algoritma dan Pemrograman 1</li>
                  <li>1303PPA302 Struktur Data </li>
                  <li>1303PPA304 Basis Data II</li>
                  <li>1303KKA504 Microcontroller</li>
                  <li>1303KKA713 Pemrograman Mobile</li>
                </ol>
                B. Prodi Sistem Informasi
                <ol>
                  <li>1313KKB107 Algoritma Pemrograman </li>
                  <li>1313KKB109 Sistem dan Teknologi Informasi</li>
                  <li>1313KKB304 Jaringan Komputerk</li>
                  <li>1313KKB306 Pemrograman Web</li>
                  <li>1313KKB309 Basis Data II</li>
                  <li>1313KKB503 Sistem Operasi</li>
                  <li>1313PPB507 Aplikasi Akuntansi</li>
                </ol>
                bahwa Praktikum dimulai tanggal 7 Oktober 2024 secara onsite
                sesuai jadwal frekuensi kelas masing-masing. */}
              <p>
                {" "}
                Berikut <b>[UPDATE]</b> Jadwal Perkuliahan dan Praktikum di
                Laboratorium yang akan dimulai tanggal 23 September 2024.
                Pembagian nama-nama frekuensi dapat dilihat melalui :
                <a style={{fontWeight: "bold"}} target="_blank" href="https://bit.ly/kelas_praktikum24-25">
                  bit.ly/kelas_praktikum24-25
                </a>
              </p>
              
              <p>
                Jika ada mahasiswa yang belum tertera namanya pada kelas
                frekuensi atau jadwal bermasalah, harap segera menghubungi Staf
                Laboratorium (
                <a style={{fontWeight: "bold"}} target="_blank" href="https://wa.me/6285341864970">
                  +6285341864970 
                </a>)
                {" "}paling lambat tanggal 22 September 2024.
              </p>
              {/* Jika ada mahasiswa yang belum tertera namanya pada kelas
                frekuensi, harap segera menghubungi Staf Laboratorium
                (085341864970) paling lambat tanggal 4 Oktober 2024.
              </p> */}
            </div>
            <div
              className="row col-md-8 mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Pdfviewer document="JADWAL PRAKTIKUM GANJIL 2024_2025.pdf" />
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
export default KegiatanAsisten;
