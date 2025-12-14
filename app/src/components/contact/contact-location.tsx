import React from "react";
import Image from "next/image";
// images
import location_1 from "@/assets/img/inner-contact/contact/info-1.jpg";
import location_2 from "@/assets/img/inner-contact/contact/info-2.jpg";
import location_3 from "@/assets/img/inner-contact/contact/info-3.jpg";

// data
const location_data = [
  {
    id: 1,
    img: location_1,
    country: "United States",
    time: "9:00 am - 5:00 pm EST",
    location_title: "Awask Studio",
    address: "Awask Studio, <br /> New York, NY",
    phone: "+1 (870) 440-1519",
    email: "contact@awask.com",
  },
  {
    id: 2,
    img: location_2,
    country: "India",
    time: "9:00 am - 6:00 pm IST",
    location_title: "Awask Studio",
    address: "C2 Jeswanth Nagar Phase 2, <br /> Chennai, Migappir West, 600037",
    phone: "+91 7667602027",
    email: "contact@awask.com",
  },
];

const ContactLocation = () => {
  return (
    <div className="cn-contact-info-area">
      <div className="container container-1840">
        <div className="cn-contact-info-bg black-bg">
          {location_data.map((item) => (
            <div key={item.id} className="cn-contact-info-item">
              <div className="row">
                <div className="col-xl-7">
                  <div className="cn-contact-left d-flex flex-wrap align-items-center">
                    <div className="cn-contact-info-thumb">
                      <Image src={item.img} alt="image" style={{ height: "auto" }} />
                    </div>
                    <div className="cn-contact-left-info">
                      <h4 className="cn-contact-left-title">{item.country}</h4>
                      <span>
                        <i className="fa-regular fa-clock"></i>
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="cn-contact-right-wrap d-flex align-items-start justify-content-between">
                    <div className="cn-contact-right">
                      <div className="cn-contact-location">
                        <span className="cn-contact-location-title">
                          {item.location_title}
                        </span>
                        <a
                          href="https://www.google.com/maps"
                          target="_blank"
                          dangerouslySetInnerHTML={{ __html: item.address }}
                        ></a>
                      </div>
                      {/* <div className="cn-contact-map">
                        <a href="#">Google Maps</a>
                      </div> */}
                    </div>
                    <div className="cn-contact-right-info text-start text-md-end">
                      <a href={`tel:${item.phone.replace(/\s/g, '')}`}>{item.phone}</a> <br />
                      <a href={`mailto:${item.email}`}>{item.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
