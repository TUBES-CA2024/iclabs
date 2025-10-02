import React from 'react'
import shape_1 from '../images/shapes/shape_3.png'
import shape_2 from '../images/shapes/shape_4.png'
import shape_3 from '../images/shapes/shape_5.png'
import shape_4 from '../images/shapes/shape_5.png'

const Feature = (props) => {
    return (
        <div class="col-lg-3 col-md-3 col-sm-12">
            <div class="service_primary text-center" data-aos="fade-up" data-aos-delay="300">
                <div class="icon_wrap">
                    <div class={"item_icon " + props.warnaIkon}>
                        <i class={props.ikon}></i>
                    </div>
                    <span class="icon_deco icon_deco_1">
                        <img src={shape_1} alt="shape_not_found"/>
                    </span>
                    <span class="icon_deco icon_deco_2">
                        <img src={shape_2} alt="shape_not_found"/>
                    </span>
                    <span class="icon_deco icon_deco_3">
                        <img src={shape_3} alt="shape_not_found"/>
                    </span>
                    <span class="icon_deco icon_deco_4">
                        <img src={shape_4} alt="shape_not_found"/>
                    </span>
                </div>
                <h4 class="item_title text-white">
                    {props.nama}
                </h4>
            </div>
        </div>
    )
}

export default Feature
