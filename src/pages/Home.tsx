import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Building, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Shape Your Future with CephalCare
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Your trusted partner in finding the perfect educational path
            </p>
            <Link
              to="/enroll"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CephalCare?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We make your college admission journey smooth, transparent, and successful.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Guaranteed Admission Assistance</h3>
                  <p className="text-gray-700">Worried about the complexities of college admissions? We ensure a smooth, hassle-free admission process with guaranteed assistance. Our expert team guides you through every step, making your dream college a reality.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No Hidden Charges</h3>
                  <p className="text-gray-700">We believe in honesty and transparency. Our services come with clear pricing, and there are no hidden fees or surprise costs. You'll always know exactly what you're paying for, ensuring a stress-free admission experience.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Direct College Tie-Ups</h3>
                  <p className="text-gray-700">We have strong partnerships with leading colleges and universities in Bangalore. This allows us to provide you with direct admission opportunities, saving you from unnecessary delays and complications.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Career Counseling</h3>
                  <p className="text-gray-700">Not sure which course or college is best for you? Our experienced counselors analyze your interests, strengths, and career goals to guide you toward the right academic path, ensuring long-term success.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg md:col-span-2">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fast & Simple Process</h3>
                  <p className="text-gray-700">From shortlisting colleges to completing paperwork and securing admission, we take care of the entire process. You just focus on your future while we make your admission journey smooth and stress-free.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Comprehensive support for your educational journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">College Selection</h3>
              <p className="text-gray-700 mb-4">We help you choose the right college based on your academic performance, interests, and career goals.</p>
              <Link to="/colleges" className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Career Counseling</h3>
              <p className="text-gray-700 mb-4">Our expert counselors provide personalized guidance to help you make informed decisions about your future.</p>
              <Link to="/about" className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Admission Assistance</h3>
              <p className="text-gray-700 mb-4">We handle the entire admission process, from application to enrollment, ensuring a hassle-free experience.</p>
              <Link to="/enroll" className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Colleges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Colleges</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We partner with top institutions to provide you with the best educational opportunities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Bangalore Institute of Technology",
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80",
                courses: "Engineering, Computer Science, IT"
              },
              {
                name: "Karnataka Medical College",
                image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
                courses: "Medicine, Pharmacy, Nursing"
              },
              {
                name: "Bangalore Business School",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                courses: "BBA, MBA, Commerce"
              }
            ].map((college, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={college.image} 
                    alt={college.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{college.name}</h3>
                  <p className="text-gray-700 mb-4">Courses: {college.courses}</p>
                  <Link to="/colleges" className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                    View details <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/colleges" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors inline-flex items-center">
              View All Colleges <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Future?</h2>
              <p className="text-xl text-blue-100">Enroll now and let us guide you to the right college for a successful career.</p>
            </div>
            <Link to="/enroll" className="px-8 py-4 bg-yellow-500 text-blue-900 text-lg font-bold rounded-md hover:bg-yellow-400 transition-colors">
              Enroll Today
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Hear from students who found their perfect college through CephalCare</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                college: "Bangalore Institute of Technology",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                testimonial: "CephalCare made my college admission process incredibly smooth. Their counselors helped me choose the right engineering program, and I couldn't be happier with my decision."
              },
              {
                name: "Rahul Patel",
                college: "Karnataka Medical College",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                testimonial: "I was confused about which medical college to choose, but CephalCare's expert guidance helped me secure admission to my dream college. Their transparent process and support were invaluable."
              },
              {
                name: "Ananya Reddy",
                college: "Bangalore Business School",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                testimonial: "Thanks to CephalCare, I found the perfect business program that aligned with my career goals. Their counselors understood my strengths and helped me make an informed decision."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.college}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;