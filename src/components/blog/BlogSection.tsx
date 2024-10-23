import { CalendarIcon, ChevronRightIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    date: "2024-03-15",
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies shaping the web development landscape.",
    link: "/blog/future-of-web-development"
  },
  {
    id: 2,
    date: "2024-02-28",
    title: "Mastering React Hooks",
    excerpt: "A deep dive into React Hooks and how they can simplify your component logic.",
    link: "/blog/mastering-react-hooks"
  },
  {
    id: 3,
    date: "2024-01-10",
    title: "Building Accessible Web Applications",
    excerpt: "Best practices and techniques for creating inclusive web experiences for all users.",
    link: "/blog/building-accessible-web-applications"
  },
  {
    id: 4,
    date: "2023-12-05",
    title: "The Rise of Jamstack",
    excerpt: "Understanding the Jamstack architecture and its benefits for modern web development.",
    link: "/blog/rise-of-jamstack"
  },
  {
    id: 5,
    date: "2023-11-20",
    title: "Optimizing Website Performance",
    excerpt: "Strategies and tools to improve your website's speed and user experience.",
    link: "/blog/optimizing-website-performance"
  }
]

export default function BlogSection() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
      {/* <div className="max-w-4xl mx-auto"> */}
        <div className="flex flex-col justify-start">
          {/* Vertical line */}
          {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" /> */}
          
          {blogPosts.map((post, index) => (
            <div key={post.id} className="mb-8 flex justify-between items-center w-full">
              <div className="w-3/12" />
              <div className="z-20">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">
                  <CalendarIcon className="w-4 h-4" />
                </div>
              </div>
              <Card className="w-7/12">
                <CardContent className="p-5">
                  <time className="text-sm text-muted-foreground mb-1 block">{post.date}</time>
                  <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href={post.link}>
                      Read More
                      <ChevronRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      {/* </div> */}
    </section>
  )
}