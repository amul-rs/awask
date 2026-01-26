import React from "react";
import Image from "next/image";
import author_img from "@/assets/img/blog/custom/author.webp";
import banner from "@/assets/img/inner-blog/blog-sidebar/banner/banner.jpg";
import { Search } from "../svg";
import { blog_home_five } from "@/data/blog-data";
import Link from "next/link";

export default function BlogSidebar() {
  const rc_posts = [...blog_home_five].slice(0, 3);
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__widget mb-45">
        <div className="sidebar__author text-center">
          <div className="sidebar__author-thumb">
            <Image src={author_img} alt="author" style={{ height: "auto", borderRadius: '50%' }} />
          </div>
          <div className="sidebar__author-content">
            <h4 className="sidebar__author-title">Amulraj S</h4>
            <p>Digital Marketing & Technology Expert</p>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Category</h3>
        <div className="sidebar__widget-content">
          <ul>
            <li>
              <Link href="/blog-modern">Performance</Link>
            </li>
            <li>
              <Link href="/blog-modern">Web Development</Link>
            </li>
            <li>
              <Link href="/blog-modern">Automation & AI</Link>
            </li>
            <li>
              <Link href="/blog-modern">SEO Strategy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Recent Post</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {rc_posts.map((item) => (
              <div
                key={item.id}
                className="rc__post mb-30 d-flex align-items-center"
              >
                <div className="rc__post-thumb mr-20">
                  <Link href={`/blog-details/${item.id}`}>
                    <Image
                      src={item.img!}
                      alt="blog-img"
                      width={80}
                      height={80}
                      style={{ objectFit: "cover", borderRadius: '8px' }}
                    />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <div className="rc__meta d-flex align-items-center">
                    <span>{item.date}</span>
                  </div>
                  <h3 className="rc__post-title">
                    <Link href={`/blog-details/${item.slug}`}>{item.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Tags</h3>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            <a href="#">SEO</a>
            <a href="#">Next.js</a>
            <a href="#">Performance</a>
            <a href="#">Optimization</a>
            <a href="#">Digital</a>
          </div>
        </div>
      </div>
    </div>
  );
}
