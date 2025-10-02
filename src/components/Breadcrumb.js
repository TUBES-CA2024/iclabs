import React from 'react'
import shape_1 from '../images/shapes/shape_1.png'
import shape_2 from '../images/shapes/shape_2.png'

const Breadcrumb = (props) => {
    return (
        <section id="breadcrumb_section" class="breadcrumb_section bg_gradient_blue deco_wrap d-flex align-items-center text-white clearfix">
            <div class="container">
                <div class="breadcrumb_content text-center" data-aos="fade-up" data-aos-delay="100">
                    <h1 class="page_title">{props.halaman}</h1>
                    <p class="mb-0">
                        {props.deskripsi}
                    </p>
                </div>
            </div>

            <div class="deco_image spahe_1" data-aos="fade-down" data-aos-delay="300">
                <img src={shape_1} alt="spahe_not_found"/>
            </div>
            <div class="deco_image spahe_2" data-aos="fade-up" data-aos-delay="500">
                <img src={shape_2} alt="spahe_not_found"/>
            </div>
        </section>
    )
}

export default Breadcrumb
