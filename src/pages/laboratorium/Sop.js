import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { url } from "../../components/const";

function KegiatanAsisten() {
  const sopList = [
    {
      id: 1,
      name: "Pemutakhiran Data Aset Laboratorium",
      responsible:
        "<a href='https://drive.google.com/file/d/1-WEUJ6yQvvZ4A0FURZTCDR3XC9c6ochw/view?usp=drive_link' target='_blank'>Lihat</a>",
    },
    {
      id: 2,
      name: "Penanganan Barang Rusak",
      responsible:
        "<a target='_blank' href='https://drive.google.com/file/d/1BO4S7AqoSYGZjpgjJL4Tn8G-QUraCdpx/view?usp=sharing'>Lihat</a>",
    },
    {
      id: 3,
      name: "Pengembalian Barang ke Fakultas",
      responsible:
        "<a target='_blank' href='https://drive.google.com/file/d/1-bWvQ9rR4xz0fbp-6BDxzXfyAcfLHzQC/view?usp=sharing'>Lihat</a>",
    },
    {
      id: 4,
      name: "Pemeliharaan Perangkat Laboratorium",
      responsible:
        "<a href='https://drive.google.com/file/d/1EKGCNNoVYK1vOWDmF4GPD1XtCzqJoU9Z/view?usp=sharing' target='_blank'>Lihat</a>",
    },
    {
      id: 5,
      name: "Pemutakhiran Modul Praktikum",
      responsible:
        "<a target='_blank' href='https://drive.google.com/file/d/1GGgJAKTsKZ61e9tcUElI_gALiqIqmjbQ/view?usp=sharing'>Lihat</a>",
    },
  ];

  return (
    <React.Fragment>
      <Breadcrumb
        halaman="Standard Operating Procedure (SOP)"
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
            <h2 className="title_text mb-0">
              Standard Operating Procedure (SOP)
            </h2>
          </div>

          <div className="row mb-20">
            <div
              className="row col-md-8 mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Nama Prosedur SOP</th>
                    <th scope="col">Dokumen</th>
                  </tr>
                </thead>
                <tbody>
                  {sopList.map((sop, index) => (
                    <tr key={sop.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{sop.name}</td>
                      <td
                        dangerouslySetInnerHTML={{ __html: sop.responsible }}
                      />{" "}
                    </tr>
                  ))}
                </tbody>
              </table>
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
