import React from "react";
import Image from "next/image";
import Link from "next/link";

// service images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import s_4 from "@/assets/img/home-01/service/service-icon-4.png";
import s_5 from "@/assets/img/home-01/service/service-icon-5.png";
import s_6 from "@/assets/img/home-01/service/service-icon-6.png";

// service data
const service_data = [
  {
    id: 1,
    title: "DIGITAL MARKETING",
    desc: "Comprehensive digital marketing solutions that drive growth and maximize ROI. From strategy development to campaign execution, we help your brand reach its full potential online.",
    icon: s_1,
  },
  {
    id: 2,
    title: "SEO & CONTENT",
    desc: "Boost your online visibility with proven SEO strategies and engaging content that ranks, converts, and connects with your target audience. Drive organic traffic and build authority.",
    icon: s_2,
  },
  {
    id: 3,
    title: "SOCIAL MEDIA",
    desc: "Build a strong social media presence that engages your audience and drives results. We create compelling content and manage your channels to grow your following and brand awareness.",
    icon: s_3,
  },
  {
    id: 4,
    title: "WEB DEVELOPMENT",
    desc: "Build powerful, responsive websites and web applications that deliver exceptional user experiences. From design to deployment, we create digital solutions that drive engagement and conversions.",
    icon: s_4,
  },
  {
    id: 5,
    title: "CRM & BUSINESS AUTOMATION",
    desc: "Streamline operations with CRM setup, workflow automation, and system integrations tailored to your business processes.",
    icon: s_5,
  },
  {
    id: 6,
    title: "AI & CUSTOM SOFTWARE",
    desc: "Custom software, plugins, and AI-powered solutions designed to reduce manual work and improve efficiency.",
    icon: s_6,
  },
];

const ServiceOne = () => {
  return (
    <div id="services-one" className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-title-box p-relative">
              <span className="tp-section-subtitle  tp_fade_bottom p-relative">
                Our
              </span>
              <h4 className="tp-section-title tp_fade_bottom">
                Digital

                <br />
                <span>Solutions</span>
              </h4>
            </div>
            <div className="tp-service-left-btn tp-btn-bounce">
              <Link className="tp-btn-border" href="#services-six">
                <span className="tp-btn-border-wrap">
                  <span className="text-1">See All Services</span>
                  <span className="text-2">See All Services</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-right-wrap">
              {service_data.map((s, i) => (
                <div
                  key={s.id}
                  className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
                >
                  <div className="tp-service-icon" style={{ background: 'transparent' }}>
                    <Image src={s.icon} alt="icon" width={60} height={60} style={{ height: "auto", width: "60px", backgroundColor: 'transparent' }} />
                  </div>
                  <div className="tp-service-content">
                    <h4 className="tp-service-title-sm order-0">
                      <Link href="#services-six">{s.title}</Link>
                    </h4>
                    <p className="order-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
