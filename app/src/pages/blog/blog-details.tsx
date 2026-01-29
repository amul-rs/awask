"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import FooterFive from "@/layouts/footers/footer-five";
import { IBlogDT } from "@/types/blog-d-t";
import BlogDetailsArea from "@/components/blog/details/blog-details-area";
import BlogDetailsBreadcrumb from "@/components/blog/details/blog-details-breadcrumb";
import BlogDetailsRelatedPosts from "@/components/blog/details/blog-details-related-posts";
// animation
import { charAnimation } from "@/utils/title-animation";

import { blog_data } from "@/data/blog-data";

// prop type
type IProps = {
  blog: IBlogDT;
};

const BlogDetailsMain = ({ blog }: IProps) => {
  const finalBlog = blog || blog_data[0];
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* blog details hero */}
            <BlogDetailsBreadcrumb blog={finalBlog} />
            {/* blog details hero */}

            {/* blog details area */}
            <BlogDetailsArea blog={finalBlog} />
            {/* blog details area */}

            {/* related posts */}
            <BlogDetailsRelatedPosts />
            {/* related posts */}
          </main>

          {/* footer area */}
          <FooterFive />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogDetailsMain;
