import React from "react";

export default function ServiceDetailPage({ params }) {
  const data = [
    {
      _id: 2,
      name: "App Development",
      ser_image: "https://picsum.photos/seed/appdev/400/300",
      description:
        "Custom mobile and web apps built for performance, scalability, and user experience.",
    },
    {
      _id: 3,
      name: "SEO Optimization",
      ser_image: "https://picsum.photos/seed/seo/400/300",
      description:
        "Boost your website’s visibility with our proven SEO strategies and keyword research.",
    },
    {
      _id: 4,
      name: "Digital Marketing",
      ser_image: "https://picsum.photos/seed/marketing/400/300",
      description:
        "Comprehensive marketing campaigns to grow your brand across social media and search engines.",
    },
    {
      _id: 5,
      name: "Graphic Design",
      ser_image: "https://picsum.photos/seed/graphic/400/300",
      description:
        "Creative visuals, logos, and brand assets designed to make your business stand out.",
    },
    {
      _id: 6,
      name: "Cloud Solutions",
      ser_image: "https://picsum.photos/seed/cloud/400/300",
      description:
        "Secure and scalable cloud architecture to power your digital transformation.",
    },
  ];
  const id = params.id;
  const singleData = data.find((d) => d._id == id);
  return (
    <div>
      <h1>ServiceDetailPage</h1>
      <p>ID : {id}</p>
      <p>{singleData.name}</p>
    </div>
  );
}
