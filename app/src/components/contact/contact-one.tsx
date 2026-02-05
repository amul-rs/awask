import React from "react";
import Image from "next/image";
import { ProjectShape, RightArrow } from "../svg";
import cta from '@/assets/img/home-03/cta/cta-1.png';

export default function ContactOne() {
  return (
    <div className="tp-cta-area pt-120 pb-120 z-index fix ">
      <div className="container">
        <div className="col-xl-12">
          <div className="tp-cta-title-box p-relative">
            <h4 className="tp-cta-title cta-text">
              Let&apos;s talk
              <span> about  it </span>
            </h4>
            <p className="tp_fade_bottom text-black">
              Planning to build, improve, or automate your digital systems?
              Let&apos;s collaborate and see how we can help you scale.
            </p>
            <div className="tp-cta-icon">
              <Image src={cta} alt="cta-img" />
            </div>
            <div className="tp-cta-btn-box">
              <div
                className="tp-btn-zikzak p-relative cursor-pointer"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).Calendly) {
                    (window as any).Calendly.initPopupWidget({
                      url: "https://calendly.com/awask-official/30min",
                    });
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <span className="zikzak-content">
                  Get <br /> In Touch
                  <RightArrow clr="#19191A" />
                </span>
                <ProjectShape />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
