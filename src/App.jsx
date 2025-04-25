
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { 
  MapPin, 
  Globe2, 
  Compass, 
  Map, 
  Satellite, 
  Code2, 
  Building2, 
  Trees, 
  Mountain, 
  Factory, 
  Train, 
  Shield,
  Mail,
  Phone,
  Menu
} from "lucide-react";

export default function App() {
  return (
    <>
      <div className="min-h-screen">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <img 
                  src="https://storage.googleapis.com/hostinger-horizons-assets-prod/83ba6b5c-ca72-4729-929a-90fc9dd847e4/c08b3f9fd58edf0eedcebb3dc72ae1b9.jpg"
                  alt="Arrow Mapping Sense Logo"
                  className="h-12 w-auto"
                />
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
                <a href="#industries" className="text-gray-600 hover:text-blue-600">Industries</a>
                <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
                <Button size="sm">Get Started</Button>
              </div>
              <div className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative hero-pattern min-h-[90vh] flex items-center pt-20">
          {/* Rest of the Hero Section remains exactly the same */}
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Precision in Every Pixel. <br />
                <span className="gradient-text">Power in Every Map.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Arrow Mapping Sense delivers cutting-edge geospatial solutions that help industries visualize, analyze, and build with confidence.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Let's Work Together
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Explore Our Services
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Rest of the sections remain exactly the same */}
        {/* About Section */}
        <section className="py-20 bg-white" id="about">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <Globe2 className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h2 className="text-4xl font-bold mb-6">Navigating the Future with Geospatial Intelligence</h2>
              <p className="text-lg text-gray-600 mb-6">
                Arrow Mapping Sense is a dynamic geospatial technology company, offering high-precision GIS, LiDAR, photogrammetry, and remote sensing services. Founded by experts with a deep passion for mapping science and spatial technology, we bring clarity to complex environments through data-driven insights.
              </p>
              <p className="text-lg text-gray-600">
                Whether it's infrastructure planning, urban development, or environmental monitoring—our goal is to deliver accurate, efficient, and scalable solutions tailored to your needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50" id="services">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="service-card"
                >
                  {service.icon}
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <ul className="space-y-2 text-gray-600">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white" id="industries">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Industries We Serve</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  {industry.icon}
                  <h3 className="text-lg font-semibold mt-4">{industry.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Arrow Mapping Sense?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  {feature.icon}
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Recent Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <img 
                    className="w-full h-64 object-cover"
                    alt={project.title}
                    src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50" id="contact">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Let's map your next big idea.</h2>
              <p className="text-xl text-gray-600 mb-12">
                Get in touch for custom GIS solutions that drive real-world impact.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Mail className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">arrowmappingsense@gmail.com</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Phone className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">+918778847530</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-600">India</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <img 
                  src="https://storage.googleapis.com/hostinger-horizons-assets-prod/83ba6b5c-ca72-4729-929a-90fc9dd847e4/c08b3f9fd58edf0eedcebb3dc72ae1b9.jpg"
                  alt="Arrow Mapping Sense Logo"
                  className="h-12 w-auto mb-4"
                />
                <p className="text-gray-400">
                  Precision in Every Pixel. Power in Every Map.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>GIS Mapping</li>
                  <li>LiDAR Processing</li>
                  <li>Photogrammetry</li>
                  <li>Remote Sensing</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Industries</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Smart Cities</li>
                  <li>Infrastructure</li>
                  <li>Forestry</li>
                  <li>Transportation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                  <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                  <a href="#" className="text-gray-400 hover:text-white">YouTube</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p>&copy; 2025 Arrow Mapping Sense. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
      <Toaster />
    </>
  );
}

// Rest of the constants (services, industries, features, projects) remain exactly the same
const services = [
  {
    icon: <Map className="w-12 h-12 text-blue-600 mb-4" />,
    title: "GIS Mapping & Spatial Analysis",
    features: [
      "Parcel mapping",
      "Utility mapping",
      "Land use/land cover analysis",
      "Customized spatial dashboards"
    ]
  },
  {
    icon: <Compass className="w-12 h-12 text-blue-600 mb-4" />,
    title: "LiDAR Processing",
    features: [
      "Point cloud classification",
      "Terrain and surface modeling",
      "Powerline and vegetation analysis",
      "Asset management"
    ]
  },
  {
    icon: <Globe2 className="w-12 h-12 text-blue-600 mb-4" />,
    title: "Photogrammetry",
    features: [
      "Aerial triangulation",
      "3D modeling and orthophotos",
      "Contour and elevation generation",
      "Drone data processing"
    ]
  },
  {
    icon: <Satellite className="w-12 h-12 text-blue-600 mb-4" />,
    title: "Remote Sensing & Image Analysis",
    features: [
      "Satellite image classification",
      "NDVI, NDWI, and change detection",
      "Environmental monitoring"
    ]
  },
  {
    icon: <Code2 className="w-12 h-12 text-blue-600 mb-4" />,
    title: "Web GIS & Application Development",
    features: [
      "Interactive maps and web apps",
      "Real-time dashboards",
      "Custom GIS portals"
    ]
  }
];

const industries = [
  {
    icon: <Building2 className="w-12 h-12 text-blue-600 mx-auto" />,
    name: "Smart Cities & Urban Planning"
  },
  {
    icon: <Factory className="w-12 h-12 text-blue-600 mx-auto" />,
    name: "Infrastructure & Utilities"
  },
  {
    icon: <Trees className="w-12 h-12 text-blue-600 mx-auto" />,
    name: "Forestry & Agriculture"
  },
  {
    icon: <Mountain className="w-12 h-12 text-blue-600 mx-auto" />,
    name: "Mining & Exploration"
  },
  {
    icon: <Train className="w-12 h-12 text-blue-600 mx-auto" />,
    name: "Transportation & Roads"
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-600 mx-auto" />,
    name: "Environmental Management"
  }
];

const features = [
  {
    icon: <Code2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    title: "Technology-Driven",
    description: "We use AI-integrated workflows, cloud processing, and high-end GIS tools."
  },
  {
    icon: <Compass className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    title: "Precision-Focused",
    description: "Every dataset we deliver meets the highest accuracy standards."
  },
  {
    icon: <Globe2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    title: "End-to-End Solutions",
    description: "From data acquisition to analysis and delivery."
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    title: "Client-First",
    description: "We prioritize timelines, budget, and performance—always."
  }
];

const projects = [
  {
    title: "Powerline Mapping for Grid Expansion",
    description: "Classified LiDAR data and built 3D asset models for a renewable energy company in India.",
    imageDescription: "Aerial view of power lines and infrastructure with LiDAR overlay"
  },
  {
    title: "Drone-based Photogrammetry for Road Survey",
    description: "Delivered orthomosaics and elevation data to assist with urban road expansion in Saudi Arabia.",
    imageDescription: "Drone captured aerial view of road infrastructure with photogrammetry analysis"
  }
];
