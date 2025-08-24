import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md mx-auto px-4"
      >
        <Card>
          <CardContent className="p-12">
            <div className="mb-6">
              <div className="text-6xl font-bold text-primary mb-2">404</div>
              <Search className="h-12 w-12 text-muted-foreground mx-auto" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              Sorry, we couldn't find the page you're looking for. 
              It might have been moved or doesn't exist.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Return to Home
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link to="/recommendations">
                  Get Recommendations
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default NotFound;
