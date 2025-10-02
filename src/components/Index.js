import React, { useEffect } from "react";
import Cardimage from "./Cardimage";
import { Link } from "react-router-dom";
import Feature from "./Feature";
import { url } from "./const";
// import Information from './Information'
import Service from "./Service";
import logo from "../images/logo/logo_2.png";
import banner_1 from "../images/banner/01_agency/shape_1.png";
import banner_2 from "../images/banner/01_agency/shape_2.png";
import banner_3 from "../images/banner/01_agency/shape_3.png";
import banner_4 from "../images/banner/01_agency/shape_4.png";
import banner_5 from "../images/banner/01_agency/shape_5.png";
import banner_6 from "../images/banner/01_agency/shape_6.png";
import banner_7 from "../images/banner/01_agency/shape_7.png";
import shape_1 from "../images/shapes/shape_25.png";
import feature_1 from "../images/features/img_33.png";
import feature_2 from "../images/features/img_34.png";
import image_1 from "../images/meta/pak_eman.jpeg";
import image_2 from "../images/meta/pak_uceng.jpeg";
import image_3 from "../images/meta/ibu_herdianti.png";
import image_4 from "../images/meta/kak_fatimah.png";

function Index() {
  const cardStyle = {
    width: "18rem",
    height: "430px",
  };
  return (
    <React.Fragment>
      <section
        id="banner_section"
        className="banner_section agency_banner deco_wrap d-flex align-items-center clearfix"
      >
        <div className="container w-1520">
          <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
            <div className="col-lg-7 col-md-7 col-sm-8 order-last">
              <div className="banner_image scene">
                <div className="big_image">
                  <div className="layer" data-depth="0.1">
                    <div data-aos="fade-up" data-aos-delay="500">
                      <img
                        src={logo}
                        alt="image_not_found"
                        data-parallax='{"y" : 30}'
                      />
                    </div>
                  </div>
                </div>
                <div className="leaf_1">
                  <div className="layer" data-depth="0.2">
                    <div data-aos="fade-up" data-aos-delay="600">
                      <img
                        src={banner_6}
                        alt="Leaf_Image"
                        data-parallax='{"y" : 50}'
                      />
                    </div>
                  </div>
                </div>
                <div className="leaf_2">
                  <div className="layer" data-depth="0.2">
                    <div data-aos="fade-up" data-aos-delay="700">
                      <img
                        src={banner_7}
                        alt="Leaf_Image"
                        data-parallax='{"y" : 60}'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-sm-8">
              <div className="banner_content">
                <h1 className="title_text mb-30 text_effect_wrap clearfix">
                  <span
                    className="mb-50"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Kami Adalah ICLABS&nbsp;
                  </span>
                  <span
                    className="mb-50"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Belajar dan Belajar Adalah Prioritas Kami
                  </span>
                </h1>
                <p className="mb-50" data-aos="fade-up" data-aos-delay="200">
                  Laboratorium Komputer Terpadu, Fakultas Ilmu Komputer,
                  Universitas Muslim Indonesia.
                </p>
                <div
                  className="btns_group ul_li"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <ul className="clearfix">
                    {/* <li>
                                                <a href="https://recruitment.labfikom.com/" className="btn btn_border border_blue mb-2">Gabung Bersama Kami</a>
                                            </li> */}
                    <li>
                      {/* <a href="https://www.youtube.com/channel/UCrWS7b-_DSuAH-PmhUQrmVg">
                        <small className="btn btn-primary">Watch Video</small>
                      </a> */}
                      <a href="https://iclabs.fikom.umi.ac.id/s/registration/public/">
                        <small className="btn btn-primary">
                          Bergabung sekarang
                        </small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="deco_image bg_1"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <img src={banner_1} alt="spahe_not_found" />
        </div>
        <div
          className="deco_image bg_2"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img src={banner_2} alt="spahe_not_found" />
        </div>

        <div className="clouds_wrap scene_1">
          <div className="deco_image cloud_1">
            <div className="layer" data-depth="0.2">
              <div data-aos="fade-up" data-aos-delay="700">
                <img
                  src={banner_3}
                  alt="spahe_not_found"
                  data-parallax='{"y" : 80}'
                />
              </div>
            </div>
          </div>
          <div className="deco_image cloud_2">
            <div className="layer" data-depth="0.2">
              <div data-aos="fade-up" data-aos-delay="600">
                <img
                  src={banner_4}
                  alt="spahe_not_found"
                  data-parallax='{"y" : 50}'
                />
              </div>
            </div>
          </div>
          <div className="deco_image cloud_3">
            <div className="layer" data-depth="0.1">
              <div data-aos="fade-up" data-aos-delay="800">
                <img
                  src={banner_5}
                  alt="spahe_not_found"
                  data-parallax='{"y" : 90}'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="service_section"
        className="service_section sec_ptb_120 pt-0 deco_wrap clearfix"
      >
        <div className="container w-1520">
          <div className="section_title text-center mb-30 c_slide_in">
            <h3 className="sub_title mb-15">
              <span className="mb-50" data-aos="fade-up" data-aos-delay="200">
                Laboratorium
              </span>
            </h3>
            <h2 className="title_text mb-0">
              <span className="mb-50" data-aos="fade-up" data-aos-delay="200">
                Sarana dan Prasarana
              </span>
            </h2>
          </div>

          <div className="row" id="sarana_prasarana">
            <Service
              ikon="fal fa-window"
              warnaIkon="icon_blue"
              nama="Laboratorium Internet of Things"
              link="/laboratorium/iot"
              deskripsi=""
            ></Service>
            <Service
              ikon="fal fa-industry"
              warnaIkon="icon_orange"
              nama="Laboratorium Start Up"
              link="/laboratorium/startup"
              deskripsi=""
            ></Service>
            <Service
              ikon="fal fa-network-wired"
              warnaIkon="icon_red"
              nama="Laboratorium Multimedia"
              link="/laboratorium/multimedia"
              deskripsi=""
            ></Service>
            <Service
              ikon="fal fa-laptop-code"
              warnaIkon="icon_green"
              nama="Laboratorium Computer Network"
              link="/laboratorium/computer-network"
              deskripsi=""
            ></Service>
            <Service
              ikon="fal fa-database"
              warnaIkon="icon_green"
              nama="Laboratorium Data Science"
              link="/laboratorium/data-science"
              deskripsi=""
            ></Service>
            <Service
              ikon="fal fa-pen-nib"
              warnaIkon="icon_blue"
              nama="Laboratorium Computer Vision"
              link="/laboratorium/computer-vision"
              deskripsi=""
            ></Service>
            <Service
              ikon="fal fa-microchip"
              warnaIkon="icon_yellow"
              nama="Laboratorium Microcontroller"
              link="/laboratorium/microcontroller"
              deskripsi=""
            ></Service>
            <Service
              ikon="fal fa-search"
              warnaIkon="icon_purple"
              nama="Laboratorium Riset 1"
              link="/laboratorium/research-room1"
              deskripsi=""
            ></Service>
            <Service
              ikon="fal fa-search-plus"
              warnaIkon="icon_orange"
              nama="Laboratorium Riset 2"
              deskripsi=""
              link="/laboratorium/research-room2"
            ></Service>
            <Service
              ikon="fal fa-search-plus"
              warnaIkon="icon_yellow"
              nama="Laboratorium Riset 3"
              link="/laboratorium/research-room3"
              deskripsi=""
            ></Service>
          </div>
        </div>

        <div
          className="deco_image dot_image_1"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img src={shape_1} alt="image_not_found" data-parallax='{"y" : 90}' />
        </div>
      </section>
      {/* <div className="container" data-aos="fade-up" data-aos-delay="300">
                    <hr className="m-0"/>
                </div> */}
      <section
        id="feature_section"
        className="feature_section bg_gradient_blue sec_ptb_120 clearfix "
      >
        <div class="container w-1520">
          <div
            class="section_title text-center mb-30"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 class="title_text text-white mb-0 c_slide_in">
              Laboratorium Management
            </h2>
          </div>
          <div class="row mb-80 justify-content-between align-items-center">
            <Cardimage
              style={cardStyle}
              src={image_1}
              name="Ir. Abdul Rachman Manga', S.Kom., M.T., MTA., MCF"
              jabatan="Kepala Laboratorium Jaringan Dan Pemrograman"
            ></Cardimage>
            <Cardimage
              style={cardStyle}
              src={image_2}
              name="Ir. Huzain Azis, S.Kom., M.Cs. MTA"
              jabatan="Kepala Laboratorium Komputasi Dasar"
            ></Cardimage>
            <Cardimage
              style={cardStyle}
              src={image_3}
              name="Herdianti, S.Si., M.Eng., MTA."
              jabatan="Kepala Laboratorium Riset"
            ></Cardimage>
            <Cardimage
              style={cardStyle}
              src={image_4}
              name="Fatimah AR. Tuasamu, S.Kom., MTA, MOS"
              jabatan="Laboran"
            ></Cardimage>
          </div>
        </div>
      </section>
      <section
        id="feature_section"
        class="feature_section sec_ptb_120 deco_wrap clearfix"
      >
        <div class="container">
          <div class="feature_item">
            <div class="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
              <div class="col-lg-4 col-md-7 col-sm-9">
                <div class="feature_image_14 scene_1">
                  <div class="big_image">
                    <div class="layer" data-depth="0.2">
                      <div data-aos="fade-up" data-aos-delay="100">
                        <img
                          src={feature_1}
                          alt="image_not_found"
                          data-parallax='{"y" : 30}'
                        />
                      </div>
                    </div>
                  </div>
                  <div class="child_image">
                    <div class="layer" data-depth="0.5">
                      <div data-aos="fade-up" data-aos-delay="200">
                        <img
                          src={feature_2}
                          alt="image_not_found"
                          data-parallax='{"y" : 60}'
                        />
                      </div>
                    </div>
                  </div>
                  <div class="deco_image dot_image_1">
                    <div class="layer" data-depth="0.3">
                      <div data-aos="fade-up" data-aos-delay="300">
                        <img
                          src={shape_1}
                          alt="image_not_found"
                          data-parallax='{"y" : 70}'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-5 col-md-7 col-sm-9">
                <div class="section_title decrease_size ml--30 c_slide_in">
                  <h2
                    class="title_text mb-30 c_slide_in_wrap1"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Informasi Pembiayaan Praktikum
                  </h2>

                  <div
                    class="child_feature_2 clearfix"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div class="item_icon icon_purple">
                      <i class="icon-verified-avatar"></i>
                    </div>
                    <div class="item_content">
                      <h3 class="item_title">Pembayaran </h3>
                      <p class="mb-0">
                        Pembayaran biaya laboratorium diwajibkan bagi mahasiswa
                        yang mengulang atau mengambil ulang mata kuliah
                        praktikum.
                      </p>
                    </div>
                  </div>

                  <div
                    class="child_feature_2 clearfix"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div class="item_icon icon_yellow">
                      <i class="icon-ring"></i>
                    </div>
                    <div class="item_content">
                      <h3 class="item_title">Prosedur Pembayaran</h3>
                      <p class="mb-0">
                        Mahasiswa dapat melakukan pembayaran melalui Laboran di
                        lantai 2, dengan biaya sebesar:
                        <ul>
                          <li>Rp 55.000/Mata kuliah.</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div
                    class="child_feature_2 clearfix"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container" data-aos="fade-up" data-aos-delay="300">
        <hr className="m-0 mb-20 " />
      </div>

      {/* <section
        id="service_section"
        className="service_section sec_ptb_120 pt-0 deco_wrap clearfix"
      >
        <div className="container w-1520">
          ``{" "}
          <div className="section_title text-center mb-30 c_slide_in">
            <h3 className="sub_title mb-15">
              <span className="mb-50" data-aos="fade-up" data-aos-delay="200">
                Laboratorium
              </span>
            </h3>
            <h2 className="title_text mb-0">
              <span className="mb-50" data-aos="fade-up" data-aos-delay="200">
                Informasi
              </span>
            </h2>
          </div>
          <div className="row">
            <Information judul="Pembayaran Lab 2020" konten="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"></Information>
                            <Information judul="Pembayaran Lab 2021" konten="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"></Information>
                            <Information judul="Pembayaran Lab 2022" konten="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"></Information>
          </div>
        </div>

        <div
          className="deco_image dot_image_1"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img src={shape_1} alt="image_not_found" data-parallax='{"y" : 90}' />
        </div>
      </section> */}
    </React.Fragment>
  );
}

export default Index;
