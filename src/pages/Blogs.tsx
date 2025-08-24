import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

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
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blogs from public/blogs.json
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data: Blog[]) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  const categories = ["all", ...Array.from(new Set(blogs.map((blog) => blog.category)))];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredBlogs = filteredBlogs.filter((blog) => blog.featured);
  const regularBlogs = filteredBlogs.filter((blog) => !blog.featured);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground text-lg">Loading blogs...</p>
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
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Automotive Insights & Tips
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest automotive news, reviews, and expert advice 
              to make informed vehicle decisions.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Articles */}
          {featuredBlogs.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="relative">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-64 object-cover"
                        />
                        <Badge className="absolute top-4 left-4 bg-primary">
                          Featured
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge variant="outline">{blog.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(blog.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {blog.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {blog.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            By {blog.author}
                          </span>
                          <Button asChild size="sm">
                            <Link to={`/blogs/${blog.id}`}>
                              Read More
                              <ArrowRight className="h-3 w-3 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Articles */}
          {regularBlogs.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Latest Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="relative">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-xs">
                            {blog.category}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(blog.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {blog.readTime}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {blog.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">
                            By {blog.author}
                          </span>
                          <Button asChild size="sm" variant="outline">
                            <Link to={`/blogs/${blog.id}`}>
                              Read More
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredBlogs.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No articles found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or category filter
                </p>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
