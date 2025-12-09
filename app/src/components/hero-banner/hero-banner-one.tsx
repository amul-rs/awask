'use client';
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-animation";
import Ballpit from "@/components/reactbits/ballpits";

const HeroBannerOne = () => {
  useGSAP(() => {
  
    if(typeof window !== 'undefined'){
      setTimeout(() => {
        fadeAnimation();
      },100)
    }
  }, {});
  return (
    <div className="tp-hero-area tp-hero-ptb main-slider " style={{ paddingTop: '100px' }} >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            {/* Ballpit Background Section */}
            <div 
              style={{
                position: 'relative', 
                overflow: 'hidden', 
                minHeight: '600px', 
                width: '100%',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                borderRadius: '12px'
              }}
            >
              {/* Ballpit Animation */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1
              }}>
                <Ballpit
                  count={50}
                  gravity={0.1}
                  colors={[0x7042D6, 0xFEF25F]}
                  friction={1}
                  wallBounce={0.55}
                  followCursor={false}
                />
              </div>

              {/* Overlay Gradient for better text readability */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)',
                zIndex: 2,
                pointerEvents: 'none'
              }} />

              {/* Text Content Overlay */}
              <div style={{
                position: 'relative',
                zIndex: 3,
                padding: '80px 20px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div className="tp-hero-title-wrap p-relative" style={{ width: '100%', maxWidth: '1200px' }}>
                  <div className="tp-hero-shape-1">
                    {/* <Image
                      src="/assets/img/home-01/hero/hero-bg-shape-1-1.svg"
                      alt="shape"
                      width={790}
                      height={700}
                      style={{ height: "auto" }}
                    /> */}
                  </div>
                  <div className="tp-hero-title-box text-center p-relative">
                    <h1 className="tp-hero-title tp_fade_bottom" style={{ color: '#fff' }}>
                      <span className="p-relative">
                        Creative
                        <span className="tp-hero-subtitle d-none d-lg-block" style={{ color: 'rgba(255,255,255,0.8)' }}>
                          Welcome to <br /> Awask
                        </span>
                        {/* <span className="tp-hero-shape-2 d-none d-md-block">
                          <Image
                            src="/assets/img/home-01/hero/hero-shape-1-1.png"
                            alt="shape"
                            width={40}
                            height={40}
                          />
                        </span> */}
                      </span>
                      <br />
                      Marketing 
                      {/* <span className="tp-hero-title-img">
                        <Image
                          className="tp-zoom-img"
                          src="/assets/img/home-01/hero/hero-1-1.png"
                          alt="hero-img"
                          width={270}
                          height={160}
                          style={{ height: "auto" }}
                        />
                      </span> */}
                        Agency
                    </h1>
                  </div>
                </div>
                
                <div className="tp-hero-content tp_fade_bottom" style={{ marginTop: '30px', maxWidth: '800px' }}>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', lineHeight: '1.6' }}>
                    <span></span>
                    We&apos;re a full-service marketing agency helping brands grow through strategic campaigns, creative content, and data-driven insights. Partner with us to elevate your brand and reach your marketing goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerOne;
