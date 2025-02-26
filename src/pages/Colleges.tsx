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
    name: "Acharya Institute",
    image: "https://images.indianexpress.com/2023/11/acharya-institute-bengaluru.jpg",
    location: "Bangalore, Karnataka",
    courses: ["BSc", "BA", "B.Com", "BCA"],
    accreditation: "NAAC A++",
    ranking: "Top 20 in India",
    fees: "₹1L - ₹2.5L per year"
  },
  {
    name: "Shantha Group of Institutions",
    image: "https://theacademicinsights.com/wp-content/uploads/2024/03/ShanthaGroupofInstitutions.webp",
    location: "Karnataka",
    courses: ["BSc Nursing", "B.Com", "BCA"],
    accreditation: "NAAC A+",
    ranking: "Top 50 in Karnataka",
    fees: "₹80K - ₹2L per year"
  },
  {
    name: "Karnataka College Group of Institution",
    image: "https://content.jdmagicbox.com/v2/comp/bangalore/q4/080pxx80.xx80.110414105442.f6q4/catalogue/karnataka-college-group-of-institutions-yelahanka-bangalore-cbse-schools-ceour.jpg",
    location: "Bangalore, Karnataka",
    courses: ["MBA", "MCA", "BBA", "B.Com"],
    accreditation: "NAAC A",
    ranking: "Top 30 in Karnataka",
    fees: "₹1.2L - ₹2.8L per year"
  },
  {
    name: "KMTC Arts and Science College",
    image: "https://content.jdmagicbox.com/comp/malappuram/p9/9999px483.x483.181025171725.v2p9/catalogue/kmct-arts-and-science-college-athavanad-malappuram-colleges-v029k7ezwx.jpg",
    location: "Kerala",
    courses: ["BSc", "BA", "B.Com"],
    accreditation: "NAAC B+",
    ranking: "Top 100 in South India",
    fees: "₹60K - ₹1.8L per year"
  },
  {
    name: "Srinivas University",
    image: "https://srinivasuniversity.edu.in/physiotherapy/images/about/photo-1.jpg",
    location: "Mangalore, Karnataka",
    courses: ["BCA", "B.Com", "BSc IT"],
    accreditation: "NAAC A++",
    ranking: "Top 10 in India",
    fees: "₹1.5L - ₹3L per year"
  },
  {
    name: "IZEE Business School",
    image: "https://www.eduska.com/assets/user_photo/544a2a10e705f5c849ef03bdd9afb828.jpg",
    location: "Bangalore, Karnataka",
    courses: ["MBA", "BBA", "B.Com"],
    accreditation: "AICTE Approved",
    ranking: "Top 40 in Karnataka",
    fees: "₹1.5L - ₹3.5L per year"
  },
  {
    name: "Indira Gandhi Group of Institution",
    image: "https://iggis.org/wp-content/uploads/2024/03/418a2596-compressed.jpg",
    location: "Bangalore, Karnataka",
    courses: ["BSc Nursing", "BPT", "B.Com"],
    accreditation: "NAAC A",
    ranking: "Top 50 in Karnataka",
    fees: "₹1L - ₹2.2L per year"
  },
  {
    name: "R R Institute of Management",
    image: "https://rrinstitutions.com/img/gallery/gal3.jpg",
    location: "Bangalore, Karnataka",
    courses: ["MBA", "PGDM", "BBA"],
    accreditation: "NAAC A",
    ranking: "Top 25 in Karnataka",
    fees: "₹1.2L - ₹2.8L per year"
  },
  {
    name: "MVM Group of Institution",
    image: "https://assets.collegedunia.com/public/college_data/images/appImage/1642566411MVMGroupofInstitutions.jpg",
    location: "Bangalore, Karnataka",
    courses: ["BSc Nursing", "B.Com", "BCA"],
    accreditation: "NAAC B+",
    ranking: "Top 70 in Karnataka",
    fees: "₹90K - ₹2L per year"
  },
  // {
  //   name: "R R Institute of Technology",
  //   image: "https://rrinstitutions.com/img/gallery/gal3.jpg",
  //   location: "Bangalore, Karnataka",
  //   courses: ["B.Tech", "M.Tech", "MBA"],
  //   accreditation: "NAAC A",
  //   ranking: "Top 20 in Karnataka",
  //   fees: "₹1.5L - ₹3.2L per year"
  // },
  {
    name: "Harsha Institution",
    image: "https://i0.wp.com/managementstudies.harshainstitutions.com/wp-content/uploads/2023/04/envision.jpg?fit=700%2C467&ssl=1",
    location: "Bangalore, Karnataka",
    courses: ["BSc Nursing", "MSc Nursing"],
    accreditation: "NAAC A+",
    ranking: "Top 30 in Karnataka",
    fees: "₹1.2L - ₹2.5L per year"
  },
  // {
  //   name: "R R Institute of Advanced Studies",
  //   image: "https://example.com/rr-advanced.jpg",
  //   location: "Bangalore, Karnataka",
  //   courses: ["M.Tech", "MBA", "MCA"],
  //   accreditation: "NAAC A+",
  //   ranking: "Top 15 in Karnataka",
  //   fees: "₹1.8L - ₹3.5L per year"
  // },
  {
    name: "BGS Global Institute of Medical Sciences",
    image: "https://bgsgips.edu.in/wp-content/uploads/2024/07/New2-1024x444.jpg",
    location: "Bangalore, Karnataka",
    courses: ["BSc", "BA", "B.Com", "BCA"],
    accreditation: "NAAC A++",
    ranking: "Top 20 in India",
    fees: "₹1L - ₹2.5L per year"
  },
  {
    name: "Holy Mother School of Nursing",
    image: "https://www.joonsquare.com/usermanage/image/business/holy-family-college-of-nursing-idukki-14680/holy-family-college-of-nursing-idukki-holy-family-college-of-nursing-1.jpg",
    location: "Bangalore, Karnataka",
    courses: ["BSc", "BA", "B.Com", "BCA"],
    accreditation: "N/A",
    ranking: "Top 20 in India",
    fees: "₹1L - ₹2.5L per year"
  },
  {
    name: "Yeldo Mar Baselios College",
    image: "https://media.getmyuni.com/azure/college-image/big/yeldo-mar-baselios-college-ymbc-ernakulam.jpg",
    location: "Kerala",
    courses: ["BCom", "BBA", "BSc"],
    accreditation: "NAAC B+",
    ranking: "Top 100 in South India",
    fees: "₹75K - ₹2L per year"
  },
  {
    name: "KMCT Institute of Emerging Technology and Management",
    image: "https://www.kmct.org/images/institution/imageimage0a9e3dfe84d6b7746d9e0fae4954bcb98e77015e.jpg",
    location: "Kerala",
    courses: ["B.Tech", "M.Tech", "MBA"],
    accreditation: "AICTE Approved",
    ranking: "Top 50 in South India",
    fees: "₹1.2L - ₹2.8L per year"
  },
  {
    name: "Sapthagiri Institute of Medical Sciences and Research Centre",
    image: "https://collegestoria.co.in/wp-content/uploads/2024/01/3-1.jpg",
    location: "Bangalore, Karnataka",
    courses: ["MBBS", "BDS", "BSc Nursing"],
    accreditation: "MCI Approved",
    ranking: "Top 10 Medical Colleges in Karnataka",
    fees: "₹4L - ₹10L per year"
  },
  {
    name: "United International Group of Institution",
    image: "https://uidcblr.com/wp-content/uploads/2022/03/best-degree-college-in-bangalore.jpg",
    location: "Bangalore, Karnataka",
    courses: ["MBA", "BBA", "B.Com"],
    accreditation: "NAAC A",
    ranking: "Top 60 in Karnataka",
    fees: "₹1.2L - ₹3L per year"
  },
  {
    name: "JSS Academy of Higher Education & Research",
    image: "https://admin.galaxyeduworld.com/storage/college_page/5dd27820c4cee_1.jpg",
    location: "Mysore, Karnataka",
    courses: ["Pharmacy", "MBBS", "BDS"],
    accreditation: "NAAC A++",
    ranking: "Top 5 in India",
    fees: "₹2L - ₹6L per year"
  },
  {
    name: "Indiana Group of Institution",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Indian_Academy_Group_of_Institutions%2C_Hennur_Main_Road%2C_Bangalore%2C_Karnataka%2C_India_%282000%29.jpg",
    location: "Bangalore, Karnataka",
    courses: ["BBA", "MBA", "BSc Nursing"],
    accreditation: "NAAC A",
    ranking: "Top 40 in Karnataka",
    fees: "₹1L - ₹2.5L per year"
  },
  {
    name: "AJ Institute of Paramedical Sciences",
    image: "https://argroupofeducation.com/wp-content/uploads/elementor/thumbs/allied-qq4jri191wieuvja66zyri3z53ua1cf6v6wlfc6qf0.jpg",
    location: "Mangalore, Karnataka",
    courses: ["BPT", "BSc Nursing", "MPT"],
    accreditation: "NAAC A",
    ranking: "Top 20 in Karnataka",
    fees: "₹1.5L - ₹3L per year"
  },
  {
    name: "Federal College of Nursing",
    image: "https://www.studybscnursinginbangalore.com/upload/federalbanner.jpg",
    location: "Bangalore, Karnataka",
    courses: ["BSc Nursing", "MSc Nursing"],
    accreditation: "NAAC A",
    ranking: "Top 50 in Karnataka",
    fees: "₹1.2L - ₹2.5L per year"
  },
  {
    name: "T. John Group of Institution",
    image: "https://campusstellar.com/assets/upload/18d01de3b8df71040440885b5b5c110f.jpg",
    location: "Bangalore, Karnataka",
    courses: ["BTech", "MBA", "BCA"],
    accreditation: "NAAC A",
    ranking: "Top 30 in Karnataka",
    fees: "₹1.5L - ₹3.2L per year"
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