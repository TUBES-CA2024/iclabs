import React from "react";
import Breadcrumb from "../components/Breadcrumb";

function Kontak() {
  return (
    <React.Fragment>
      <Breadcrumb halaman="Kontak Laboratorium"></Breadcrumb>
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
            <h2 className="title_text mb-0">Kontak</h2>
          </div>

          <div className="row mb-80 justify-content-lg-between justify-content-md-center justify-content-sm-center">
            <div className="col-lg-3 col-md-8 col-sm-10">
              <div
                className="contact_info ul_li_block"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="list_title">Alamat</h3>
                <ul className="clearfix">
                  <li>Fakultas Ilmu Komputer Universitas Muslim Indonesia</li>
                  <li>Jl. Urip Sumoharjo KM. 5</li>
                  <li>Makassar Sulawesi Selatan</li>
                  <li>90231 Indonesia</li>
                </ul>
              </div>

              <div
                className="contact_info ul_li_block"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3 className="list_title mt-3">Kontak</h3>
                <ul className="clearfix">
                  {/* <li>
                    <span>Whatsapp:</span>
                    <a
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=6285341864970&text=Halo Saya Ingin Bertanya Kak!"
                    >
                      +62 8534-1864-970
                    </a>
                  </li> */}
                  <li>
                    <span>Email:</span>fikom.iclabs@umi.ac.id
                  </li>
                  <li>
                    <span>Instagram:</span>
                    <a
                      href="https://www.instagram.com/labfikomumi?igsh=Nml3amdlMTAyMzRs"
                      target="_blank"
                    >
                      @labfikomumi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-8 col-md-8 col-sm-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.4496131135793!2d119.4489271!3d-5.1361294000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefd3165008369%3A0x7af75b8baf265f2b!2sFakultas%20Ilmu%20Komputer%20UMI!5e0!3m2!1sen!2sid!4v1725787939224!5m2!1sen!2sid"
                style={{
                  border: "0",
                  width: "100%",
                  height: "100%",
                  boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
                  borderRadius: "5px",
                }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* <div className="contact_form" data-aos="fade-up" data-aos-delay="500">
									<form action="#">
										<div className="row">
											<div className="col-lg-6">
												<div className="form_item">
													<input type="text" name="name" placeholder="Nama"/>
												</div>
											</div>

											<div className="col-lg-6">
												<div className="form_item">
													<input type="email" name="email" placeholder="Email"/>
												</div>
											</div>
										</div>
										<div className="form_item">
											<textarea name="comment" placeholder="Pesan"></textarea>
										</div>
										<button type="submit" className="btn bg_default_blue">Kirim</button>
									</form>
								</div> */}
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

export default Kontak;
