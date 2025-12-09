import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Marketing Agency",
    title: "Digital Marketing Strategy",
    text: "We develop comprehensive digital marketing strategies that drive growth and maximize your ROI. From market research to campaign execution, we help your brand reach its full potential.",
    lists: [
      "Market Research & Analysis",
      "Brand Strategy Development",
      "Content Marketing",
      "Social Media Strategy",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Marketing Agency",
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
    id: 3,
    img: ser_img_3,
    subtitle: "Marketing Agency",
    title: "Social Media Management",
    text: "Build a strong social media presence that connects with your audience and drives engagement. We manage your social channels to grow your following and increase brand awareness.",
    lists: [
      "Social Media Strategy",
      "Content Planning & Creation",
      "Community Management",
      "Paid Social Advertising",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Marketing Agency",
    title: "Web Development",
    text: "Build powerful, responsive websites and web applications that deliver exceptional user experiences. From design to deployment, we create digital solutions that drive engagement and conversions.",
    lists: [
      "Custom Website Development",
      "Responsive Design & Mobile Optimization",
      "E-commerce Solutions",
      "Performance Optimization",
    ],
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
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
                          href="/service-details"
                        >
                          <span className="zikzak-content">
                            See <br /> Details
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
