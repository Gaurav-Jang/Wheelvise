import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import blogs from "../../public/blogs.json";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  content: string;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (id) {
      const found = blogs.find((b) => b.id === parseInt(id));
      setBlog(found || null);
    }
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="text-center p-8">
          <CardContent>
            <h1 className="text-2xl font-semibold text-foreground mb-4">
              Blog post not found
            </h1>
            <Button asChild>
              <Link to="/blogs">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blogs
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <div className="mb-6">
            <Button variant="ghost" asChild>
              <Link to="/blogs">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blogs
              </Link>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-lg overflow-hidden mb-8">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge className="mb-4">{blog.category}</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {blog.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {blog.description}
              </p>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b border-border pb-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {blog.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(blog.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {blog.readTime}
                </div>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div
                className="text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-card rounded-lg border border-border">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Ready to Find Your Perfect Vehicle?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Use our recommendation engine to discover vehicles that match your needs and budget.
                </p>
                <Button size="lg" asChild>
                  <Link to="/recommendations">
                    Get Recommendations
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
