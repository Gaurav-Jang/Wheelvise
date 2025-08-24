import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Car, Shield, Zap, Users, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-car.jpg";
import { SOCIAL_LINKS } from "./constant/sociallinks";

const Home = () => {
  const features = [
    {
      icon: Car,
      title: "Smart Recommendations",
      description: "Get personalized vehicle suggestions based on your budget, needs, and lifestyle.",
    },
    {
      icon: Shield,
      title: "Trusted Reviews",
      description: "Access comprehensive reviews and maintenance insights for informed decisions.",
    },
    {
      icon: Zap,
      title: "Quick & Easy",
      description: "Find your perfect match in minutes with our intuitive recommendation engine.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Benefit from expert automotive knowledge and community insights.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury car on scenic road"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-automotive-dark/80 to-automotive-dark/40" />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Find the Best Vehicle that{" "}
              <span className="text-automotive-blue-light">Fits Your Budget</span>{" "}
              & Lifestyle
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Make smart vehicle decisions with our AI-powered recommendation engine. 
              Cars, bikes, SUVs - we help you choose wisely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-4">
                <Link to="/recommendations">
                  Get Recommendations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/blogs">
                  Read Our Blogs
                </Link>
              </Button>
            </div>

            {/* Instagram Icon */}
            <div className="flex items-center justify-center mt-6 space-x-2">
  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
    <Instagram className="h-6 w-6 text-pink-500 hover:text-pink-400" />
  </a>
  <span className="text-white font-medium">@revwithgaurav</span>
</div>

          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Wheelvise?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with automotive expertise to help you 
              make the best vehicle decision for your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Find Your Perfect Vehicle?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of smart buyers who have found their ideal vehicle with Wheelvise.
            </p>
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-4">
              <Link to="/recommendations">
                Start Your Search
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
