import React from "react";
import Image from "next/image";
import overlay from "@/assets/img/inner-blog/blog-details/bg-shape/overly.png";
import breadcrumb_bg from "@/assets/img/blog/custom/breadcrumb.png";
import { IBlogDT } from "@/types/blog-d-t";

type IProps = {
  blog: IBlogDT;
}

export default function BlogDetailsBreadcrumb({ blog }: IProps) {
  return (
    <div className="blog-details-area">
      <div
        className="blog-details-bg blog-details-bg-height blog-details-overlay p-relative d-flex align-items-end pt-170 pb-170"
        style={{
          backgroundImage: `url(${breadcrumb_bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="blog-details-overlay-shape">
          <Image src={overlay} alt="overlay" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-11">
              <div className="blog-details-content z-index-5">
                <span className="blog-details-meta">
                  {blog.category} <i>. {blog.date}</i>
                </span>
                <h4 className="blog-details-title tp-char-animation">
                  {blog.title}
                </h4>
                <div className="blog-details-top-author d-flex align-items-center">
                  {blog.authorImg && (
                    <Image
                      src={blog.authorImg}
                      alt="avatar"
                      width={40}
                      height={40}
                      style={{ borderRadius: '50%', marginRight: '15px' }}
                    />
                  )}
                  <span>
                    {blog.author} / <i>5 min read</i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
