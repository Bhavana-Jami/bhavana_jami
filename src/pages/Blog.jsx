import { useState } from "react";
import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
import { Calendar, Tag, ChevronRight } from "lucide-react";
import BreadCrum from "../components/BreadCrum";
import Footer from "../components/Footer";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 13",
    excerpt:
      "Learn how to build modern web applications with Next.js 13 and its new app directory structure.",
    date: "2023-05-15",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt:
      "Dive deep into Tailwind CSS and learn how to create beautiful, responsive designs efficiently.",
    date: "2023-06-02",
    tags: ["CSS", "Tailwind", "Frontend"],
  },
  {
    id: 3,
    title: "The Power of TypeScript in React Applications",
    excerpt:
      "Explore how TypeScript can improve your React development experience and catch errors early.",
    date: "2023-06-20",
    tags: ["TypeScript", "React", "JavaScript"],
  },
  // Add more blog posts as needed
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen max-w-4xl mx-auto text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <BreadCrum levelOne="Blog" pathHome="/" />

      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-left  mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851] ">
          Some of my good posts
        </h2>
        <p className="text-gray-400 text-lg">
          I write on frontend development, life experiences, spirituality, and
          travel.
        </p>
      </div>

      {/* Blog Posts List */}
      <div className="mt-12 space-y-8">
        {filteredPosts.map((post) => (
          <Card
            key={post.id}
            className="p-6 bg-gray-900/50 backdrop-blur border-gray-800 hover:border-[#1CB5E0] transition-colors"
          >
            <h2 className="text-base font-semibold mb-2 text-[#1CB5E0]">
              {post.title}
            </h2>
            <p className="text-gray-300 mb-4 text-base">{post.excerpt}</p>
            <div className="flex items-center justify-start gap-3 text-sm text-gray-400">
              {/* <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  {post.tags.join(", ")}
                </span>
              </div> */}
              {post.date}
              <a
                href={`/`}
                className="flex items-center text-[#1CB5E0] hover:underline"
              >
                Read more
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </Card>
        ))}
      </div>

      {/* No Results Message */}
      {filteredPosts.length === 0 && (
        <div className="text-center text-gray-400 mt-12">
          No blog posts found matching your search.
        </div>
      )}
<Footer/>
    </div>
  );
}
