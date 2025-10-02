import React from "react";

const Cardimage = (props) => {
  return (
    // <div className="col-lg-4 col-md-6 col-sm-12 mx-auto  mb-4">
    <div className="mb-4 mx-auto">
      <div
        className="card text-center mx-auto"
        style={props.style}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <img src={props.src} className="card-img-top" alt="shpae alt out" />
        <div className="card-body">
          <h6 className="card-title">{props.name}</h6>
          <p className="card-text mb-0">{props.prodi}</p>
          <p style={{ opacity: "0.5", fontSize: "12px" }} className="card-text">
            {props.jabatan}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cardimage;
