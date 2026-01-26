"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// new client logos
import c_1 from "@/clients/drncc.png";
import c_2 from "@/clients/millard.png";
import c_3 from "@/clients/serlesbake.jpg";
import c_4 from "@/clients/tapus_media.jpg";
import c_5 from "@/clients/tkr.jpg";
import c_6 from "@/clients/aarcm.png";
import c_7 from "@/clients/creativezyme.jpg";


const brand_images = [c_1, c_2, c_3, c_4, c_5, c_6, c_7, c_1, c_2, c_3, c_4, c_5, c_6, c_7];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix">
      <Marquee
        speed={100}
        loop={0}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <div key={i} className="tp-brand-item" style={{ height: "100px", width: "250px", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src={b} alt="" style={{ maxHeight: "100%", width: "auto", objectFit: "contain" }} />
          </div>
        ))}
      </Marquee>
      {/* <Swiper
        {...slider_setting}
        modules={[Autoplay, FreeMode]}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="tp-brand-item">
              <Image src={b} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}
