import { Metadata } from "next";
import { blog_data } from "@/data/blog-data";
import BlogDetailsMain from "@/pages/blog/blog-details";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = [...blog_data].find((blog) => blog.slug === params.slug);
  return {
    title: blog ? `${blog.title} | Awask Blog` : "Blog Details | Awask",
    description: blog ? blog.content.find(c => c.type === 'paragraph')?.text?.substring(0, 160) : "Read the latest insights from Awask digital marketing experts.",
    openGraph: {
      title: blog?.title,
      description: blog ? blog.content.find(c => c.type === 'paragraph')?.text?.substring(0, 160) : "Digital marketing and technology insights.",
      images: [blog?.img?.src || ""],
    },
  };
}

export default function BlogDetailsPage({ params }: { params: { slug: string } }) {
  const blog = [...blog_data].find((blog) => blog.slug === params.slug);
  return blog ? (
    <BlogDetailsMain blog={blog} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with slug: {params.slug}
    </div>
  );
}
