// src/pages/HomePage.jsx

// import React from 'react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import img from '../img/download.jpeg';
import imge from '../img/GURUKUL-FEATRE.jpg'
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import Button from '../components/ui/Button';
// import Link from 'next/link';
import  './Home.css'

const HomePage = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/course/public')
      .then(res => setCourses(res.data.slice(0, 6))) // Show only 6
      .catch(err => console.error("Failed to load courses"));
  }, []);
  return (
    <>
    <Navbar/>
    <div className="bg-costam bg-gradient-to-br from-orange-50 via-yellow-100 to-white pt-16">
      {/* Hero Section */}
      <section className="text-center py-14 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
          📖 Learn Sanatan Wisdom
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Let Sanatan Gyaan Light Your Path – Join the journey of eternal knowledge & values.
        </p>
        <Link to="/StudentCourses">
          <button className="bg-blue-400 mt-6 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-black font-medium rounded-xl shadow-lg">
            Browse Courses
          </button>
        </Link>
        <img
          src={imge}
          alt="Sanatan Learning"
          className="mx-auto mt-8 rounded-xl shadow-xl w-full max-w-3xl"
        />

      </section>

      {/* Why VedArambh Section */}
      <section className="bg-orange-50 py-12 px-4">
        <h2 className="text-3xl font-semibold text-orange-700 text-center mb-8">Why Choose VedArambh?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">🕉️ Authentic Teachings</h3>
            <p className="text-gray-600">Rooted in the Vedas, Upanishads, and Indian philosophy.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">📚 Easy to Access</h3>
            <p className="text-gray-600">Digital platform to reach every child, anywhere.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">🌼 Cultural Values</h3>
            <p className="text-gray-600">Character building with Dharmik & ethical foundations.</p>
          </div>
        </div>
      </section>

      {/* CTA Join Buttons */}
      <section className="bg-white py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">VedArambh: A Sanatan Initiative</h2>
        <p className="text-gray-600 mb-6 italic">Gyaan ki Pehli Seedi Sanatan ke Saath</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link to="/student">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">Join as Student</button>
          </Link>
          <Link to="/teacher/register">
            <button className="bg-green-600 text-white px-6 py-3 rounded-xl">Join as Teacher</button>
          </Link>
          <Link to="InstitutionRegisterr">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-xl">Join as Institution</button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-yellow-50 py-10 px-6 text-center">
        <h2 className="text-3xl text-orange-700 font-semibold mb-4">What is VedArambh?</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          VedArambh is a digital platform to educate students in the timeless knowledge of Sanatan Dharma.
          Designed for Playgroup to Class 10, we aim to connect students, teachers, and institutions with
          value-based learning and Indian cultural heritage.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-12 text-center px-4">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h2>
        <ul className="max-w-xl mx-auto text-left text-gray-700 list-disc list-inside space-y-2">
          <li>📘 Bring Sanatan Dharma teachings to classrooms</li>
          <li>👩‍🏫 Empower teachers to preserve Vedic knowledge</li>
          <li>🌍 Offer free and accessible education rooted in values</li>
        </ul>
      </section>
      <div>
        <div className="bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Sanatan Gyaan Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course._id} className="bg-white shadow-md p-4 rounded">
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{course.description.substring(0, 100)}...</p>
            <Link to={`/course/${course._id}`} className="text-blue-600 underline mt-3 inline-block">View</Link>
          </div>
        ))}
      </div>
    </div>
      </div>
      
    </div>





    <Footer/>


        <div className="min-h-screen bg-white">
      {/* <Header /> */}
      
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Ancient%20Indian%20temple%20courtyard%20with%20golden%20sunlight%20filtering%20through%20carved%20pillars%2C%20peaceful%20meditation%20space%20with%20lotus%20flowers%20and%20traditional%20architecture%2C%20serene%20spiritual%20atmosphere%20with%20warm%20orange%20and%20saffron%20colors%2C%20minimalist%20background%20perfect%20for%20text%20overlay&width=1920&height=1080&seq=hero001&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="w-full max-w-4xl">
            <div className="text-white">
              <div className="mb-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-2 leading-tight">
                  <span className="font-['Pacifico'] text-orange-400">VedArambh</span>
                </h1>
                <p className="text-xl md:text-2xl text-orange-300 font-medium mb-6">
                  A Sanatan Initiative
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-orange-100">
                "Gyaan ki Pehli Seedi Sanatan ke Saath"
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl leading-relaxed">
                Digital platform empowering children, youth, and adults with authentic Sanatan Dharma education from Playgroup to Class 10 and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="text-lg px-10 py-4">
                    <i className="ri-user-add-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                    Start Learning Journey
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-gray-900">
                    <i className="ri-book-open-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                    Explore Curriculum
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">VedArambh Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital learning ecosystem for authentic Sanatan Dharma education
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Traditional%20Indian%20guru%20teaching%20students%20in%20peaceful%20ashram%20setting%20with%20ancient%20knowledge%20books%20and%20scrolls%2C%20warm%20lighting%20with%20saffron%20and%20gold%20tones%2C%20educational%20spiritual%20environment%20with%20carved%20wooden%20details%20and%20students%20learning&width=800&height=600&seq=teaching001&orientation=landscape"
                alt="Traditional Teaching"
                className="rounded-lg shadow-lg object-cover object-top w-full h-96"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg flex-shrink-0">
                  <i className="ri-graduation-cap-line text-2xl text-orange-500"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Playgroup to Class 10 Curriculum</h3>
                  <p className="text-gray-600">Structured learning paths covering age-appropriate Sanatan Dharma education for all school levels.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg flex-shrink-0">
                  <i className="ri-book-open-line text-2xl text-orange-500"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complete Scripture Library</h3>
                  <p className="text-gray-600">Access to Vedas, Puranas, Mahabharat, Ramayan, Upanishads in Hindi, English, and Sanskrit.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg flex-shrink-0">
                  <i className="ri-translate-line text-2xl text-orange-500"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Trilingual Learning</h3>
                  <p className="text-gray-600">Complete platform support in Hindi, English, and Sanskrit for comprehensive understanding.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Learning Paths</h2>
            <p className="text-xl text-gray-600">Start your spiritual education journey with our most popular courses</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <img 
                src="https://readdy.ai/api/search-image?query=Bhagavad%20Gita%20manuscript%20with%20Sanskrit%20verses%20and%20golden%20decorative%20borders%2C%20ancient%20wisdom%20book%20with%20lotus%20motifs%20and%20traditional%20Indian%20art%2C%20warm%20golden%20lighting%20with%20spiritual%20atmosphere&width=400&height=250&seq=gita001&orientation=landscape"
                alt="Bhagavad Gita Course"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bhagavad Gita for All Ages</h3>
                <p className="text-gray-600 mb-4">Age-appropriate Gita wisdom from Class 1 to Class 10 with practical life applications.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-orange-500 font-medium">18 Chapters • Multi-level</span>
                  <Button size="sm">Start Learning</Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <img 
                src="https://readdy.ai/api/search-image?query=Vedic%20mathematics%20and%20astronomy%20ancient%20symbols%20and%20calculations%2C%20geometric%20patterns%20with%20Sanskrit%20numerals%2C%20golden%20parchment%20with%20traditional%20Indian%20mathematical%20concepts%20and%20celestial%20designs&width=400&height=250&seq=vedic001&orientation=landscape"
                alt="Vedic Mathematics"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vedic Mathematics</h3>
                <p className="text-gray-600 mb-4">Ancient mathematical techniques integrated with modern curriculum for Classes 3-10.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-orange-500 font-medium">12 Modules • Grade-wise</span>
                  <Button size="sm">Start Learning</Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <img 
                src="https://readdy.ai/api/search-image?query=Sanskrit%20calligraphy%20and%20ancient%20manuscripts%20with%20Devanagari%20script%2C%20traditional%20Indian%20writing%20materials%20and%20ink%2C%20golden%20illuminated%20letters%20with%20decorative%20borders%20and%20spiritual%20symbols&width=400&height=250&seq=sanskrit001&orientation=landscape"
                alt="Sanskrit Learning"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sanskrit Foundation</h3>
                <p className="text-gray-600 mb-4">Progressive Sanskrit learning from basic alphabets to advanced texts for all age groups.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-orange-500 font-medium">Progressive Levels</span>
                  <Button size="sm">Start Learning</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Learning Community</h2>
            <p className="text-xl text-gray-600">Students, teachers, and institutions trust VedArambh for authentic education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://readdy.ai/api/search-image?query=Young%20Indian%20girl%20student%20with%20bright%20smile%20holding%20books%20in%20traditional%20school%20setting%2C%20educational%20environment%20with%20warm%20lighting%20and%20simple%20background%20perfect%20for%20testimonial&width=80&height=80&seq=student001&orientation=squarish"
                  alt="Student"
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-semibold">Kavya Sharma</h4>
                  <p className="text-sm text-gray-500">Class 8 Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "VedArambh makes learning Sanskrit so easy! I can now read simple shlokas and understand their meanings. My favorite is learning about festivals."
              </p>
              <div className="flex text-yellow-400 mt-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20Indian%20woman%20teacher%20in%20traditional%20attire%20with%20peaceful%20expression%2C%20educational%20setting%20with%20warm%20lighting%20and%20simple%20background%20perfect%20for%20testimonial%20portrait&width=80&height=80&seq=teacher001&orientation=squarish"
                  alt="Teacher"
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-semibold">Dr. Meera Patel</h4>
                  <p className="text-sm text-gray-500">Sanskrit Teacher</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a registered teacher on VedArambh, I love how the platform maintains authenticity while making ancient wisdom accessible to modern students."
              </p>
              <div className="flex text-yellow-400 mt-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://readdy.ai/api/search-image?query=Indian%20parent%20with%20child%20in%20home%20learning%20environment%2C%20family%20educational%20setting%20with%20books%20and%20traditional%20elements%2C%20warm%20and%20supportive%20atmosphere&width=80&height=80&seq=parent001&orientation=squarish"
                  alt="Parent"
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-semibold">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-500">Parent</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "VedArambh is exactly what we needed - a platform that teaches our cultural values alongside modern education. My children love the interactive lessons."
              </p>
              <div className="flex text-yellow-400 mt-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-orange-500 mb-2">5,000+</div>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-orange-500 mb-2">150+</div>
              <p className="text-gray-600">Verified Teachers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
              <p className="text-gray-600">Educational Videos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-orange-500 mb-2">25+</div>
              <p className="text-gray-600">Scripture Texts</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Begin Your VedArambh Journey</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our mission to make Sanatan Dharma knowledge accessible to everyone - from young children to spiritual seekers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="px-10 py-4 text-lg">
                <i className="ri-user-add-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                Join as Student
              </Button>
            </Link>
            <Link href="/signup/teacher">
              <Button variant="outline" size="lg" className="px-10 py-4 text-lg border-white text-white hover:bg-white hover:text-gray-900">
                <i className="ri-graduation-cap-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                Register as Teacher
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>

    </>
  );
};

export default HomePage;
