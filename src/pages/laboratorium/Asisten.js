import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Cardimage from "../../components/Cardimage";
import Abdillah from "../../images/asisten/Imran Abdillah.JPG";
import Adam from "../../images/asisten/Adam Adnan.jpg";
import Akbar from "../../images/asisten/Muhammad Akbar.png";
import Arya from "../../images/asisten/Muhammad Dani Arya Putra.jpg";
import Azmi from "../../images/asisten/Nurul Azmi.JPG";
import Furqon from "../../images/asisten/Furqon Fatahillah.jpg";
import Mala from "../../images/asisten/Nirmala.jpg";
import Nas from "../../images/asisten/Nasrullah.jpg";
import Naufal from "../../images/asisten/Naufal Abiyyu Supriadi.jpg";
import Nisa from "../../images/asisten/Annisa Pratama Putri.jpg";
import Rendi from "../../images/asisten/Ahmad Rendi.JPG";
import Syahrin from "../../images/asisten/As'syahrin Nanda.jpg";
import Athar from "../../images/asisten/Athar Fathana Rakasyah.jpg";
import Rizal from "../../images/asisten/rizal.jpg";
import Zara from "../../images/calon asisten/Annisa Uz Zahra Askar.jpg";
import Berlin from "../../images/calon asisten/Berlian Septiani.jpg";
import Dewi from "../../images/calon asisten/Dewi Ernita Rahma.png";
import Farid from "../../images/calon asisten/Farid Wadji Mufti.jpg";
import Julisa from "../../images/calon asisten/Julisa.jpg";
import Diba from "../../images/calon asisten/Maharani Safwa Andini.jpg";
import Mufli from "../../images/calon asisten/Mufli.JPG";
import Zaldi from "../../images/calon asisten/Zaldy.JPG";
import Alif from "../../images/calon asisten/Alif Maulana.jpg";
import Ama from "../../images/calon asisten/Rahma Puspitasari.jpg";
import Tazkira from "../../images/calon asisten/Tazkirah Amaliah.jpg";
import Wahyu from "../../images/calon asisten/Wahyu.png";

function Asisten() {
  const cardStyle = {
    width: "18rem",
    height: "430px",
  };
  return (
    <React.Fragment>
      <Breadcrumb halaman="Asisten Laboratorium" deksripsi=""></Breadcrumb>
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
              Koordinator Asisten Laboratorium
            </h2>
          </div>
          <div className="row mb-80">
            <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
              <Cardimage
                style={cardStyle}
                src={Adam}
                prodi="Teknik Informatika"
                name="Adam Adnan"
                jabatan="adamadnan.iclabs@umi.ac.id"
              ></Cardimage>
            </div>
          </div>
          <div
            className="section_title text-center mb-50"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="title_text mb-0">Asisten Laboratorium</h2>
          </div>
          <div className="row mb-80">
            <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
              <div className="row">
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Rendi}
                    prodi="Teknik Informatika"
                    name="Ahmad Rendi"
                    jabatan="ahmadrendi.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Nisa}
                    name="Annisa Pratama Putri"
                    prodi="Teknik Informatika"
                    jabatan="annisa.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Syahrin}
                    name="As'syahrin Nanda"
                    prodi="Teknik Informatika"
                    jabatan="assyahrinnanda.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Athar}
                    name="Athar Fathana Rakasyah"
                    prodi="Teknik Informatika"
                    jabatan="atharfathanarakasyah.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Furqon}
                    name="Furqon Fatahillah"
                    prodi="Sistem Informasi"
                    jabatan="furqonfatahillah.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Abdillah}
                    name="Imran Afdillah Dahlan"
                    prodi="Teknik Informatika"
                    jabatan="imranafdillah.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Akbar}
                    name="Muhammad Akbar"
                    prodi="Sistem Informasi"
                    jabatan="muhammadakbar.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Arya}
                    name="Muhammad Dani Arya Putra"
                    prodi="Sistem Informasi"
                    jabatan="muhdaniarya.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Nas}
                    prodi="Teknik Informatika"
                    name="Nasrullah"
                    jabatan="nasrullah.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Naufal}
                    name="Naufal Abiyyu Supriadi"
                    prodi="Teknik Informatika"
                    jabatan="naufalabiyyusupriadi.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Mala}
                    name="Nirmala"
                    prodi="Teknik Informatika"
                    jabatan="malaaaanir.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Azmi}
                    prodi="Teknik Informatika"
                    name="Nurul Azmi"
                    jabatan="nurulazmi.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section_title text-center mb-50"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="title_text mb-0">Calon Asisten Laboratorium</h2>
          </div>
          <div className="row mb-80">
            <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
              <div className="row ">
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Mufli}
                    prodi="Teknik Informatika"
                    name="Ahmad Mufli Ramadhan"
                    jabatan="ahmadmufliramadhan.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Berlin}
                    name="Berlian Septiani"
                    prodi="Teknik Informatika"
                    jabatan="berlianseptiani.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Dewi}
                    prodi="Teknik Informatika"
                    name="Dewi Ernita Rahma"
                    jabatan="dewiernitarahma.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Farid}
                    prodi="Teknik Informatika"
                    name="Farid Wajdi Mufti"
                    jabatan="faridwajdimufli.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Julisa}
                    name="Julisa"
                    prodi="Teknik Informatika"
                    jabatan="julisa.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Diba}
                    prodi="Teknik Informatika"
                    name="Maharani Safwa Andini"
                    jabatan="maharanisahwaandini.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Zaldi}
                    prodi="Teknik Informatika"
                    name="Muhammad Afrizaldi Attalah"
                    jabatan="muhafrizaldiattalah.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>

                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Alif}
                    name="Muhammad Alif Maulana. R"
                    prodi="Teknik Informatika"
                    jabatan="muhalifmaulanaar.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Ama}
                    prodi="Teknik Informatika"
                    name="Rahma Puspitasari"
                    jabatan="rahmapuspitasari.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Tazkira}
                    prodi="Teknik Informatika"
                    name="Tazkirah Amaliah"
                    jabatan="tazkirahamalia.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
                <div className="col-md-4">
                  <Cardimage
                    style={cardStyle}
                    src={Wahyu}
                    name="Wahyu Kadri Rahmat Suat"
                    prodi="Teknik Informatika"
                    jabatan="wahyukadrirahmatsuat.iclabs@umi.ac.id"
                  ></Cardimage>
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container" data-aos="fade-up" data-aos-delay="300">
        <hr className="m-0" />
      </div>
      {/*<section id="service_section" className="service_section sec_ptb_120 clearfix">
					<div className="container">

						<div className="section_title text-center mb-50" data-aos="fade-up" data-aos-delay="300">
							<h2 className="title_text mb-0">Asisten</h2>
						</div>

						<div className="row mb-80">
                            <Member nama="Furqaan Ismail" kemampuan="DevOps Developer"></Member>
                            <Member nama="Muh. Dhiya Ulhaq" kemampuan="Website Developer"></Member>
                            <Member nama="Andi Alfian Pratama Putra" kemampuan="Fullstack Developer"></Member>
                            <Member nama="Irwan Ardyansah" kemampuan="Flutter Developer"></Member>
                        </div>
					</div>
				</section>

                <div className="container" data-aos="fade-up" data-aos-delay="300">
					<hr className="m-0"/>
				</div> */}
    </React.Fragment>
  );
}

export default Asisten;
