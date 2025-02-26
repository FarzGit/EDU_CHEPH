import React from 'react';
import { Building2, MapPin, GraduationCap, Trophy, Coins } from 'lucide-react';

interface College {
  name: string;
  image: string;
  location: string;
  courses: string[];
  accreditation: string;
  ranking: string;
  fees: string;
}

const colleges: College[] = [
  {
    name: "St. Xavier's College",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    location: "Mumbai, Maharashtra",
    courses: ["BBA", "BCA", "B.Com", "BSc IT"],
    accreditation: "NAAC A++",
    ranking: "Top 10 in India",
    fees: "₹1.5L - ₹3L per year"
  },
  {
    name: "Christ University",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    location: "Bangalore, Karnataka",
    courses: ["BA", "B.Com", "BBA", "BCA"],
    accreditation: "NAAC A+",
    ranking: "Top 15 in India",
    fees: "₹2L - ₹4L per year"
  },
  {
    name: "Loyola College",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    location: "Chennai, Tamil Nadu",
    courses: ["BSc", "BA", "B.Com", "BCA"],
    accreditation: "NAAC A++",
    ranking: "Top 20 in India",
    fees: "₹1L - ₹2.5L per year"
  }
];

const Colleges = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Partner Colleges</h1>
          <p className="text-xl text-gray-600">Discover top-rated institutions that match your aspirations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colleges.map((college, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${college.image})` }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{college.name}</h2>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{college.location}</span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Courses Offered:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.map((course, idx) => (
                      <span 
                        key={idx}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2" />
                    <span>Accreditation: {college.accreditation}</span>
                  </div>
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 mr-2" />
                    <span>Ranking: {college.ranking}</span>
                  </div>
                  <div className="flex items-center">
                    <Coins className="h-5 w-5 mr-2" />
                    <span>Fees: {college.fees}</span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colleges;