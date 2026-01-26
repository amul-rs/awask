import React from "react";
import Link from "next/link";
import { IBlogDT } from "@/types/blog-d-t";

type IProps = {
  prevBlog?: IBlogDT;
  nextBlog?: IBlogDT;
}

export default function BlogDetailsNavigation({ prevBlog, nextBlog }: IProps) {
  return (
    <div className="blog-details-navigation-style mb-120">
      <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
        {prevBlog ? (
          <Link className="project-details-1-prev" href={`/blog-details/${prevBlog.slug || prevBlog.id}`}>
            <i className="fa-sharp fa-regular fa-arrow-left"></i>
            <span>Prev</span>
          </Link>
        ) : (
          <div className="project-details-1-prev-disabled"></div>
        )}

        <Link href="/blog">
          <span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17" cy="3" r="3" fill="#19191A" />
              <circle cx="3" cy="3" r="3" fill="#19191A" />
              <circle cx="3" cy="17" r="3" fill="#19191A" />
              <circle cx="17" cy="17" r="3" fill="#19191A" />
            </svg>
          </span>
        </Link>

        {nextBlog ? (
          <Link className="project-details-1-next" href={`/blog-details/${nextBlog.slug || nextBlog.id}`}>
            <span>Next</span>
            <i className="fa-sharp fa-regular fa-arrow-right"></i>
          </Link>
        ) : (
          <div className="project-details-1-next-disabled"></div>
        )}
      </div>
    </div>
  );
}
