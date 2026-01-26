import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-automation.png";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "01 — Growth Strategy",
    title: "Digital Marketing Strategy",
    text: "We develop comprehensive digital marketing strategies that drive growth and maximize your ROI. From market research to campaign execution, we help your brand reach its full potential.",
    lists: [
      "Market Research & Analysis",
      "Brand Strategy Development",
      "Content Marketing & Strategy",
      "Social Media Growth Management",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "02 — Digital Solutions",
    title: "Website & Web Development",
    text: "Fast, secure, and scalable websites and web applications built to support business growth. From simple websites to complex platforms, we focus on performance and long-term maintainability.",
    lists: [
      "Custom websites & CMS solutions",
      "Web applications & dashboards",
      "Speed & performance optimization",
      "SEO-ready architecture",
      "Secure and scalable builds",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "03 — Organic Reach",
    title: "SEO & Content Marketing",
    text: "Boost your online visibility and drive organic traffic with our proven SEO and content marketing solutions. We create content that ranks, converts, and engages your target audience.",
    lists: [
      "Search Engine Optimization",
      "Content Creation & Strategy",
      "Keyword Research & Optimization",
      "Link Building & Outreach",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "04 — Digital Solutions",
    title: "Automation & AI Solutions",
    text: "Reduce manual work and improve efficiency through automation and intelligent systems designed around your workflows.",
    lists: [
      "CRM implementation & customization",
      "Workflow automation",
      "Third-party integrations",
      "AI-powered chatbots",
      "Custom plugins & tools",
    ],
  },
];

export default function ServiceSix() {
  return (
    <div id="services-six" className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item, index) => (
          <div key={item.id} className={`sv-service-item project-panel-2 ${index % 2 === 0 ? 'item-odd' : 'item-even'}`}>
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href="#footer"
                        >
                          <span className="zikzak-content">
                            Know <br /> More
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
