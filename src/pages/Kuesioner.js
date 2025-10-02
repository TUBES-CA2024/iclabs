import React from "react";
import Breadcrumb from "../components/Breadcrumb";

function Kuesioner() {
  const kusionerList = [
    {
      id: 1,
      topik: "Evaluasi Pembelajaran Praktikum Semester Ganjil TA. 2024/2025",
      targetResponden: "Mahasiswa(i)",
      link: "<a href='https://forms.gle/n3oSVpUgCM4tLC448' target='_blank'>Link</a>",
    },
  ];

  return (
    <React.Fragment>
      <Breadcrumb halaman="Penjaminan Mutu" deskripsi=""></Breadcrumb>
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
              Evaluasi dan Monitoring Penjaminan Mutu
            </h2>
            <h2 className="title_text mb-0">Laboratorium Terpadu FIKOM UMI</h2>
          </div>

          <div className="row mb-20">
            <div className="col-md-8 m-auto">
              <p
                className="mb-50 text-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Kepada Seluruh mahasiswa Fakultas Ilmu Komputer Universitas
                Muslim Indonesia di mohon untuk mengisi form kuesioner (online)
                Evaluasi dan Monitoring Laboratorium pada link dibawah ini :
              </p>
              <table
                class="table table-hover"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Topik Penilaian Evaluasi</th>
                    <th scope="col">Target Responden</th>
                    <th scope="col">Kuesioner</th>
                  </tr>
                </thead>
                <tbody>
                  {kusionerList.map((kuesioner, index) => (
                    <tr key={kuesioner.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{kuesioner.topik}</td>
                      <td>{kuesioner.targetResponden}</td>
                      <td
                        dangerouslySetInnerHTML={{
                          __html: kuesioner.link,
                        }}
                      />{" "}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Kuesioner;
