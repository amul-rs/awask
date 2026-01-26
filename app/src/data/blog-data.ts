import { IBlogDT } from "@/types/blog-d-t";
// custom blog images
import blog_speed from "@/assets/img/blog/custom/speed.png";
import blog_launch from "@/assets/img/blog/custom/launch.png";
import blog_integrations from "@/assets/img/blog/custom/integrations.png";
import blog_nextjs from "@/assets/img/blog/custom/nextjs.png";
import author_img from "@/assets/img/blog/custom/author.webp";
// blog modern 
import b_m_1 from "@/assets/img/inner-blog/blog-standard/blog-1.jpg";
import b_m_2 from "@/assets/img/inner-blog/blog-standard/blog-2.jpg";
import b_m_3 from "@/assets/img/inner-blog/blog-standard/blog-3.jpg";
import b_m_4 from "@/assets/img/inner-blog/blog-standard/blog-4.jpg";
import b_m_5 from "@/assets/img/inner-blog/blog-standard/blog-5.jpg";
import b_m_6 from "@/assets/img/inner-blog/blog-standard/blog-6.jpg";
import b_m_7 from "@/assets/img/inner-blog/blog-standard/blog-7.jpg";

// avatar
import avatar from "@/assets/img/inner-blog/blog-sidebar/avatar/avata-1.jpg";

// blog postbox img
import blog_post_1 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-1.jpg';
import blog_post_2 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-2.jpg';
import blog_post_3 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-3.jpg';
import blog_post_4 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-4.jpg';

// blog list images
import blog_list_1 from '@/assets/img/inner-blog/blog-right-sidebar/blog-1.jpg';
import blog_list_2 from '@/assets/img/inner-blog/blog-right-sidebar/blog-2.jpg';
import blog_list_3 from '@/assets/img/inner-blog/blog-right-sidebar/blog-3.jpg';
import blog_list_4 from '@/assets/img/inner-blog/blog-right-sidebar/blog-4.jpg';
import blog_list_5 from '@/assets/img/inner-blog/blog-right-sidebar/blog-5.jpg';



export const blog_home_five: IBlogDT[] = [
  {
    id: 1,
    img: blog_speed,
    title: "How to Make Your Website Faster (Google PageSpeed–Focused Guide)",
    date: '14. DEC. 2025',
    category: 'Performance',
    author: 'Amulraj S',
    authorImg: author_img,
    designation: 'Digital Marketing Expert',
    slug: 'make-your-website-faster',
    content: [
      { type: 'paragraph', text: 'Website speed is no longer optional. A slow website affects user experience, SEO rankings, and conversions. Google’s PageSpeed Insights is one of the most reliable tools to measure and improve performance.' },
      { type: 'paragraph', text: 'Here’s a practical guide to making your website faster using PageSpeed Insights and proven optimization techniques.' },
      { type: 'heading', text: 'Step 1: Test Your Website with Google PageSpeed Insights' },
      { type: 'paragraph', text: 'Start by testing your website on Google PageSpeed Insights. Focus on: Performance score (mobile first), Core Web Vitals, Opportunities & diagnostics. Mobile performance matters more than desktop.' },
      { type: 'heading', text: 'Step 2: Optimize Core Web Vitals' },
      { type: 'heading', text: 'Largest Contentful Paint (LCP)' },
      { type: 'list', items: ['Use optimized images (WebP)', 'Reduce server response time', 'Use a fast hosting provider'] },
      { type: 'heading', text: 'First Input Delay (FID)' },
      { type: 'list', items: ['Reduce heavy JavaScript', 'Defer unused scripts', 'Use modern JS frameworks efficiently'] },
      { type: 'heading', text: 'Cumulative Layout Shift (CLS)' },
      { type: 'list', items: ['Define image and video dimensions', 'Avoid dynamic content shifts', 'Load fonts properly'] },
      { type: 'heading', text: 'Step 3: Image Optimization (Biggest Speed Win)' },
      { type: 'list', items: ['Compress images without quality loss', 'Use modern formats (WebP / AVIF)', 'Lazy-load below-the-fold images', 'Serve responsive images'] },
      { type: 'heading', text: 'Step 4: Improve Code & Assets' },
      { type: 'list', items: ['Minify CSS, JS, and HTML', 'Remove unused CSS and scripts', 'Enable GZIP or Brotli compression', 'Combine files where possible'] },
      { type: 'heading', text: 'Step 5: Use Caching & CDN' },
      { type: 'list', items: ['Enable browser caching', 'Use server-side caching', 'Use a CDN for static assets', 'Reduce repeat network requests'] },
      { type: 'heading', text: 'Final Tip' },
      { type: 'paragraph', text: 'Speed optimization is ongoing, not one-time. Re-test your site after every major update. A fast website improves rankings, engagement, and trust.' },
    ]
  },
  {
    id: 2,
    img: blog_launch,
    title: "Website Launch Checklist: Don’t Go Live Without This",
    date: '28. DEC. 2025',
    category: 'Web Dev',
    author: 'Amulraj S',
    authorImg: author_img,
    designation: 'Digital Marketing Expert',
    slug: 'website-launch-checklist',
    content: [
      { type: 'paragraph', text: 'Launching a website without proper checks can lead to broken pages, SEO issues, and lost leads. This checklist helps ensure your website is ready for real users.' },
      { type: 'heading', text: 'Technical Checklist' },
      { type: 'list', items: ['Mobile responsiveness tested', 'Cross-browser testing completed', 'Page speed optimized', 'SSL certificate installed (HTTPS)', 'All links working (no 404s)'] },
      { type: 'heading', text: 'SEO Checklist' },
      { type: 'list', items: ['Title tags and meta descriptions added', 'Proper heading structure (H1–H6)', 'Image alt texts added', 'Sitemap generated and submitted', 'Robots.txt configured correctly'] },
      { type: 'heading', text: 'Content Checklist' },
      { type: 'list', items: ['Spelling and grammar checked', 'Clear CTAs on key pages', 'Contact details verified', 'Privacy Policy & Terms added'] },
      { type: 'heading', text: 'Tracking & Analytics' },
      { type: 'list', items: ['Google Analytics installed', 'Google Search Console set up', 'Conversion tracking configured', 'Form submissions tested'] },
      { type: 'heading', text: 'Security & Backup' },
      { type: 'list', items: ['Strong admin passwords', 'Backup system enabled', 'Security plugins / firewall set up', 'Spam protection added'] },
      { type: 'heading', text: 'Final Step' },
      { type: 'paragraph', text: 'Do a full test as a real user before launch. A smooth launch sets the foundation for growth.' },
    ]
  },
  {
    id: 3,
    img: blog_integrations,
    title: "Must-Have Free Integrations for Every Website",
    date: '05. JAN. 2026',
    category: 'Tools',
    author: 'Amulraj S',
    authorImg: author_img,
    designation: 'Digital Marketing Expert',
    slug: 'must-have-free-integrations',
    content: [
      { type: 'paragraph', text: 'A modern website is more than just design. The right integrations help track performance, improve SEO, and generate leads—without extra cost. Here are essential free tools every website should have.' },
      { type: 'heading', text: 'Google Analytics' },
      { type: 'paragraph', text: 'Tracks: Visitors and traffic sources, User behavior, Conversions and goals. Essential for understanding what’s working.' },
      { type: 'heading', text: 'Google Search Console' },
      { type: 'paragraph', text: 'Helps you: Monitor search performance, Fix indexing issues, Track keywords and impressions. Critical for SEO visibility.' },
      { type: 'heading', text: 'Google PageSpeed Insights' },
      { type: 'paragraph', text: 'Measures performance, Identifies speed issues, Tracks Core Web Vitals. Use it regularly.' },
      { type: 'heading', text: 'Google Tag Manager' },
      { type: 'paragraph', text: 'Manage tracking scripts easily, Add pixels without code changes, Keeps site lightweight.' },
      { type: 'heading', text: 'reCAPTCHA' },
      { type: 'paragraph', text: 'Prevents spam submissions, Protects contact forms, Improves site security.' },
      { type: 'heading', text: 'Email & Form Integration' },
      { type: 'paragraph', text: 'Connect forms to email, Auto-notify admins, Store leads securely.' },
      { type: 'heading', text: 'Bonus Tools' },
      { type: 'list', items: ['Bing Webmaster Tools', 'Cloudflare (free CDN & security)', 'Hotjar (basic heatmaps – free tier)'] },
      { type: 'heading', text: 'Final Thought' },
      { type: 'paragraph', text: 'These integrations create a strong foundation without increasing costs.' },
    ]
  },
  {
    id: 4,
    img: blog_nextjs,
    title: "Why Next.js Is the Best Choice for Modern Web Apps",
    date: '19. JAN. 2026',
    category: 'Framework',
    author: 'Amulraj S',
    authorImg: author_img,
    designation: 'Digital Marketing Expert',
    slug: 'why-nextjs-is-best-choice',
    content: [
      { type: 'paragraph', text: 'Choosing the right framework impacts performance, SEO, and scalability. Among modern frameworks, Next.js stands out for building fast, production-ready web applications.' },
      { type: 'heading', text: 'What Is Next.js?' },
      { type: 'paragraph', text: 'Next.js is a React-based framework that supports multiple rendering methods: Server-Side Rendering (SSR), Static Site Generation (SSG), Incremental Static Regeneration (ISR). This flexibility makes it ideal for modern apps.' },
      { type: 'heading', text: 'Why Next.js Is a Strong Choice' },
      { type: 'heading', text: 'Performance' },
      { type: 'list', items: ['Faster initial page loads', 'Optimized image handling', 'Automatic code splitting'] },
      { type: 'heading', text: 'SEO-Friendly' },
      { type: 'list', items: ['Server-rendered pages', 'Better indexing by search engines', 'Improved Core Web Vitals'] },
      { type: 'heading', text: 'Scalability' },
      { type: 'list', items: ['Suitable for small websites and large apps', 'API routes included', 'Easy integration with backend services'] },
      { type: 'heading', text: 'Rendering Options Explained' },
      { type: 'list', items: ['SSR: Dynamic content rendered on the server', 'SSG: Static pages generated at build time', 'ISR: Update pages without full rebuilds'] },
      { type: 'heading', text: 'When to Use Next.js' },
      { type: 'list', items: ['SEO-driven websites', 'SaaS applications', 'Dashboards and portals', 'High-performance marketing sites'] },
      { type: 'heading', text: 'Final Verdict' },
      { type: 'paragraph', text: 'Next.js offers the right balance of speed, SEO, and flexibility for modern web applications.' },
    ]
  }
];


export const blog_modern: IBlogDT[] = [
  {
    id: 5,
    img: b_m_1,
    title: 'Our New Projects With <br> Local Community',
    date: '21. OCT. 2023',
    category: 'Marketing / Strategy',
    author: 'John Doe',
  },
  {
    id: 6,
    img: b_m_2,
    title: 'Future Business Ideas.',
    date: '01. FEB. 2022',
    category: 'Marketing / Strategy',
    author: 'John Doe',
  },
  {
    id: 7,
    img: b_m_3,
    title: 'Start Unique Experience.',
    date: '09. MAY. 2022',
    category: 'Branding / Creative',
    author: 'John Doe',
  },
  {
    id: 8,
    img: b_m_4,
    title: 'Is It Time To Rebrand?',
    date: '30. AUG. 2022',
    category: 'Marketing / Strategy',
    author: 'John Doe',
  },
  {
    id: 9,
    img: b_m_5,
    title: 'Setting up the creativity.',
    date: '11. JAN. 2022',
    category: 'Branding / Creative',
    author: 'John Doe',
  },
  {
    id: 10,
    img: b_m_6,
    title: 'Design to remember',
    date: '15. OCT. 2023',
    category: 'Marketing / Strategy',
    author: 'John Doe',
  },
  {
    id: 11,
    img: b_m_7,
    title: 'Endless Road Stories',
    date: '20. NOV. 2023',
    category: 'Branding / Strategy',
    author: 'John Doe',
  },

  {
    id: 12,
    img: b_m_2,
    title: 'Future Business Ideas.',
    date: '01. FEB. 2022',
    category: 'Marketing / Strategy',
    author: 'John Doe',
  },
  {
    id: 13,
    img: b_m_5,
    title: 'Start Unique Experience.',
    date: '09. MAY. 2022',
    category: 'Branding / Creative',
    author: 'John Doe',
  },
  {
    id: 14,
    img: b_m_4,
    title: 'Is It Time To Rebrand?',
    date: '30. AUG. 2022',
    category: 'Marketing / Strategy',
    author: 'John Doe',
  },
];


export const blog_classic: IBlogDT[] = [
  {
    id: 15,
    title: "Relax while learning design and Be Connected",
    date: '27 JULY, 2022',
    category: 'BRANDING',
    author: 'Mark Hopkins',
    avatar: avatar,
    blogHeroSlider: true,
  },
  {
    id: 16,
    title: "Relax while learning design and Be Connected",
    date: '15 JUN, 2023',
    category: 'DESIGN',
    author: 'John Vincent',
    avatar: avatar,
    blogHeroSlider: true,
  },
  {
    id: 17,
    img: blog_post_1,
    title: "Design To Remember",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '01 DEC, 2022',
    category: 'WORK',
    author: 'Mark Hopkins',
  },
  {
    id: 18,
    img: blog_post_2,
    title: "Desert Treasure Hunt",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '12 OCT, 2023',
    category: 'WORK',
    author: 'Mark Hopkins',
    video: true,
    videoId: 'rVHxkxJM3rY'
  },
  {
    id: 19,
    blogQuoteTwo: true,
    title: "MERGE DIFFERENT TO CREATE A PERFECT <br/> PLAYLIST FOR EACH.",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '01 DEC, 2022',
    category: 'WORK',
    author: 'Mark Hopkins',
  },
  {
    id: 20,
    imgSlider: true,
    images: [blog_post_1, blog_post_2, blog_post_3],
    title: "Future Business Ideas.",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '08 NOV, 2023',
    category: 'WORK',
    author: 'Mark Hopkins',
  },
  {
    id: 21,
    blogQuote: true,
    title: "SEM SMITH, CREATIVE DIRECTOR",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,uyam erat.!',
    date: '12 OCT, 2023',
    category: 'WORK',
    author: 'Mark Hopkins',
  },
  {
    id: 22,
    img: blog_post_4,
    title: "Simplistic photo setup",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '18 DEC, 2023',
    category: 'WORK',
    author: 'Mark Hopkins',
  },
];


export const blog_lists: IBlogDT[] = [
  {
    id: 23,
    img: blog_list_1,
    title: "Design To Remember",
    date: '01 DEC, 2023',
    category: 'Marketing',
    author: 'John Doe',
  },
  {
    id: 24,
    img: blog_list_2,
    title: "Simplistic photo setup",
    date: '09. MAY. 2023',
    category: 'Branding',
    author: 'John Doe',
  },
  {
    id: 25,
    img: blog_list_3,
    title: "Future Business Ideas.",
    date: '20. NOV. 2023',
    category: 'Branding',
    author: 'John Doe',
  },
  {
    id: 26,
    img: blog_list_4,
    title: "Is It Time To Rebrand?",
    date: '30. AUG. 2023',
    category: 'Branding',
    author: 'John Doe',
  },
  {
    id: 27,
    img: blog_list_5,
    title: "Desert Treasure Hunt",
    date: '09. MAY. 2023',
    category: 'Branding',
    author: 'John Doe',
  },
  {
    id: 28,
    img: blog_list_2,
    title: "Visualizing Your Brand",
    date: '12. JAN. 2023',
    category: 'Branding',
    author: 'John Doe',
  },
];

export const blog_data: IBlogDT[] = [
  ...blog_lists,
  ...blog_home_five,
  ...blog_modern,
  ...blog_classic,
]

