import React from "react";
import Image from "next/image";
import { IBlogDT } from "@/types/blog-d-t";

type IProps = {
  blog: IBlogDT;
}

export default function BlogDetailsAuthor({ blog }: IProps) {
  return (
    <div className="blog-details-author d-flex mb-60">
      <div className="blog-details-author-img">
        {blog.authorImg && (
          <Image
            src={blog.authorImg}
            alt={blog.author}
            width={150}
            height={150}
            style={{ borderRadius: '50%' }}
          />
        )}
      </div>
      <div className="blog-details-author-content-wrap">
        <div className="blog-details-author-social text-end">
          <a href="https://www.facebook.com/awask.official" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.linkedin.com/company/awask/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/awask.official/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="blog-details-author-content">
          <h4 className="blog-details-author-title">{blog.author}</h4>
          <p>
            Passionate about driving business growth through innovation and digital strategy.
          </p>
        </div>
      </div>
    </div>
  );
}
