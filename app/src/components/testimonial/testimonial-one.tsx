"use client";
import React from "react";
import { NextIcon, PrevIcon } from "../svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

const testimonial_data = [
  // {
  //   id: 1,
  //   desc: `"Awask transformed our digital presence completely. Their strategic approach to SEO and content marketing increased our organic traffic by 300% in just 6 months. The team's expertise and dedication to our success is unmatched."`,
  //   name: "Sarah Johnson",
  //   designation: "CEO, TechStart Inc.",
  // },
  // {
  //   id: 2,
  //   desc: `"Working with Awask has been a game-changer for our brand. Their social media campaigns generated incredible engagement and helped us reach new audiences we never thought possible. Their data-driven approach delivers real results."`,
  //   name: "Michael Chen",
  //   designation: "Marketing Director, BrandCo",
  // },
  // {
  //   id: 3,
  //   desc: `"The team at Awask understands marketing like no other agency. They don't just create campaigns, they build strategies that drive growth. Our ROI has increased significantly since partnering with them."`,
  //   name: "Emily Rodriguez",
  //   designation: "Founder, Growth Labs",
  // },
  {
    id: 4,
    desc: `"We are completely satisfied with the website development services provided by Awask. They delivered a high-quality, responsive site that perfectly captures our brand essence. The process was seamless and the results exceeded our expectations."`,
    name: "Serles Bake",
    designation: "Website Development",
  },
];

const slider_setting: SwiperOptions = {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  speed: 1000,
  breakpoints: {
    "1400": {
      slidesPerView: 1,
    },
    "1200": {
      slidesPerView: 1,
    },
    "992": {
      slidesPerView: 1,
    },
    "768": {
      slidesPerView: 1,
    },
    "576": {
      slidesPerView: 1,
    },
    "0": {
      slidesPerView: 1,
    },
  },
  navigation: {
    prevEl: ".tp-testimonial-prev",
    nextEl: ".tp-testimonial-next",
  },
};
const TestimonialOne = () => {
  return (
    <div className="tp-testimonial-area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-testimonial-slider-wrapper p-relative">
              <div className="tp-testimonial-arrow-box d-none d-lg-block">
                <button className="tp-testimonial-prev">
                  <span>
                    <PrevIcon />
                  </span>
                </button>
                <button className="tp-testimonial-next">
                  <span>
                    <NextIcon />
                  </span>
                </button>
              </div>
              <Swiper
                {...slider_setting}
                modules={[Navigation]}
                className="swiper-container tp-testimonial-slider-active fix"
              >
                {testimonial_data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="tp-testimonial-item text-center">
                      <p>{item.desc}</p>
                      <span>
                        <em>{item.name}</em> - {item.designation}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
