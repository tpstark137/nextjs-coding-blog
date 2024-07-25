type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    linkedin: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "CoderPaul-Blogs",
  description: "A Technical Blog platform",
  url: "https://coderpaul-blog.vercel.app/",
  ogImage: "https://coderpaul-blog.vercel.app/og",
  links: {
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
  },
};
