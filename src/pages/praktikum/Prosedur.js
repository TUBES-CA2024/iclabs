import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Pdfviewer from '../../components/Pdfviewer'

function Prosedur() {
    return (
        <React.Fragment>
            <Breadcrumb halaman="Tata Tertib Praktikum" deskripsi=""></Breadcrumb>
            <section id="service_section" className="service_section sec_ptb_120 clearfix">
                <div className="container">
                    <div className="section_title text-center mb-50" data-aos="fade-up" data-aos-delay="300">
                        <h2 className="title_text mb-0">Tata Tertib Praktikum</h2>
                    </div>
                    <div className="row col-md-8 mx-auto">
                    <Pdfviewer document='TATA TERTIB PELAKSANAAN PRAKTIKUM - NEW 2023.pdf'/>
                    </div>
                </div>
            </section>

            <div className="container" data-aos="fade-up" data-aos-delay="300">
                <hr className="m-0"/>
            </div>


        </React.Fragment>
    )
}

export default Prosedur
