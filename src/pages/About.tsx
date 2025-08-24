import { motion } from "framer-motion";
import { Car, Target, Users, Award, CheckCircle,Instagram  } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SOCIAL_LINKS } from "./constant/sociallinks"


const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to simplifying vehicle decisions for everyone, making the car-buying process transparent and stress-free.",
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Every feature we build is designed with our users in mind, ensuring a personalized experience that meets individual needs.",
    },
    {
      icon: Award,
      title: "Expert Knowledge",
      description: "Our team combines automotive expertise with cutting-edge technology to provide accurate, reliable recommendations.",
    },
  ];

  const achievements = [
    "10,000+ successful vehicle recommendations",
    "95% user satisfaction rate",
    "Partnerships with major automotive brands",
    "Featured in top automotive publications",
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6"
            >
              <Car className="h-8 w-8 text-primary-foreground" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Wheelvise
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're revolutionizing how people choose their vehicles by combining 
              data-driven insights with personalized recommendations to help you 
              make the smartest automotive decisions.
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                  Our Story
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="text-lg leading-relaxed mb-6">
                    Wheelvise was born from a simple observation: choosing the right vehicle 
                    shouldn't be overwhelming. Founded by automotive enthusiasts and tech experts, 
                    we recognized that traditional car-buying processes were often confusing, 
                    time-consuming, and didn't account for individual preferences and needs.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Our mission is to democratize automotive knowledge and make vehicle selection 
                    as simple as answering a few questions about your lifestyle, budget, and 
                    preferences. Whether you're a first-time buyer or a seasoned automotive 
                    enthusiast, Wheelvise provides the insights you need to make confident decisions.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Today, we're proud to serve thousands of users worldwide, helping them 
                    navigate the complex automotive landscape with confidence and ease. 
                    Our platform continues to evolve, incorporating the latest market data, 
                    user feedback, and technological advances to provide the most accurate 
                    and helpful recommendations possible.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
{/* Instagram Section */}
<div className="flex justify-center items-center space-x-4 mb-12 bg-pink-100/40 rounded-xl py-4 px-6 shadow-md backdrop-blur-sm">
  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
    <Instagram className="h-6 w-6 text-pink-500 hover:text-pink-400 transition-colors" />
    <span className="text-pink-500 font-semibold hover:text-pink-400 transition-colors">@revwithgaurav</span>
  </a>
</div>

          {/* Values Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do at Wheelvise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-6">
                        <value.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Our Impact
                </h2>
                <p className="text-xl text-muted-foreground">
                  Proud of what we've accomplished together with our community
                </p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>


          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-primary to-primary-hover rounded-lg p-12"
          >
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Join the Wheelvise Community
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Ready to make your next vehicle decision with confidence? 
              Let us help you find the perfect match for your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/recommendations"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get Started Today
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-primary-foreground font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;