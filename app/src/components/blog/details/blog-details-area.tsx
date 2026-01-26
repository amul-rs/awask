import React from "react";
import Image from "next/image";
import BlogSidebar from "../blog-sidebar";
import { QuoteThree, Share, Tag } from "@/components/svg";
import BlogDetailsAuthor from "./blog-details-author";
import BlogDetailsNavigation from "./blog-details-navigation";
import BlogDetailsComments from "./blog-details-comments";
import BlogReplyForm from "@/components/form/blog-reply-form";
import { IBlogDT } from "@/types/blog-d-t";
import { blog_home_five } from "@/data/blog-data";

type IProps = {
  blog: IBlogDT;
}

export default function BlogDetailsArea({ blog }: IProps) {
  return (
    <section className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__wrapper">
              {blog.content ? (
                blog.content.map((block, index) => {
                  switch (block.type) {
                    case 'paragraph':
                      return (
                        <div key={index} className="blog-details-top-text mb-20">
                          <p>{block.text}</p>
                        </div>
                      );
                    case 'heading':
                      return (
                        <div key={index} className="blog-details-left-content mt-40 mb-20">
                          <h4 className="blog-details-left-title">{block.text}</h4>
                        </div>
                      );
                    case 'list':
                      return (
                        <div key={index} className="blog-details-left-content mb-30">
                          <ul className="blog-details-list" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                            {block.items?.map((item, i) => (
                              <li key={i} className="mb-10">{item}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    case 'quote':
                      return (
                        <div key={index} className="blog-details-blockquote">
                          <blockquote>
                            <span className="quote-icon">
                              <QuoteThree />
                            </span>
                            <p>{block.text}</p>
                            {block.author && <span className="blockquote-info">{block.author}</span>}
                          </blockquote>
                        </div>
                      );
                    default:
                      return null;
                  }
                })
              ) : (
                <div className="blog-details-top-text">
                  <p>{blog.desc || "No content available for this blog post."}</p>
                </div>
              )}

              <div className="blog-details-share-wrap mb-40 mt-50">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <div className="blog-details-tag">
                      <span>
                        <Tag />
                      </span>
                      <a href="#">{blog.category}</a>
                      <a href="#">Agency</a>
                      <a href="#">Digital</a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="blog-details-share text-start text-md-end">
                      <span>
                        <Share />
                      </span>
                      <a href="#">Share Post</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* blog details author */}
              <BlogDetailsAuthor blog={blog} />
              {/* blog details author */}

              {/* blog details navigation */}
              {(() => {
                const currentIndex = blog_home_five.findIndex((b) => b.id === blog.id);
                const prevBlog = currentIndex > 0 ? blog_home_five[currentIndex - 1] : undefined;
                const nextBlog = currentIndex < blog_home_five.length - 1 ? blog_home_five[currentIndex + 1] : undefined;
                return <BlogDetailsNavigation prevBlog={prevBlog} nextBlog={nextBlog} />;
              })()}
              {/* blog details navigation */}

              {/* related posts navigation removed for cleaner look if needed, but keeping for now per user request only mentioned comments/reply */}
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
