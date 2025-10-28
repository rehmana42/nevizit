import React, { useState } from "react";
import facebookIcon from './Facebook.svg';
import instagramIcon from './Instagram.svg';
import twitterIcon from './Twitter.svg';
import linkedinIcon from './Linkedin.svg';

const faqs = [
  {
    question: "What is Navizit: The Smart City Guide?",
    answer: "Navizit is a web-based platform designed to help tourists and citizens explore Mumbai by providing information about tourist attractions, hotels, restaurants, hospitals, events, news, and emergency services."
  },
  {
    question: "Do I need to create an account to use Navizit?",
    answer: "Yes, you need to sign in to access the features. You can log in using your email, Google account, or OTP verification."
  },
  {
    question: "How does the emergency service work?",
    answer: "By allowing location access, Navizit provides the nearest hospital, police station, and fire brigade addresses in case of emergencies."
  },
  {
    question: "Can I use Navizit on my mobile phone?",
    answer: "Yes, Navizit is fully responsive and works on desktops, tablets, and smartphones."
  },
  {
    question: "How are the events shown on the platform?",
    answer: "Events are fetched using APIs like Meetup and Eventbrite, ensuring real-time updates about local activities, festivals, concerts, and more."
  },
  {
    question: "Can I give feedback on places I visit?",
    answer: "Yes, Navizit allows you to share your experience by providing feedback on tourist places, hotels, and restaurants."
  },
  {
    question: "Does Navizit show only tourist spots?",
    answer: "No. Apart from tourist spots, Navizit also provides information about hospitals, colleges, hotels, restaurants, events, trending news, and weather updates."
  },
  {
    question: "Will Navizit expand to other cities?",
    answer: "Yes, while it currently focuses on Mumbai, future versions will include other major Indian cities."
  },
  {
    question: "How are the nearby places suggested?",
    answer: "Navizit uses the Google Places API and geolocation services to show nearby tourist spots, hospitals, hotels, and emergency facilities based on your current location."
  },
  {
    question: "Is my personal information safe on Navizit?",
    answer: "Yes, your personal data is protected. Navizit only uses your location temporarily for showing nearby services and does not share it with third parties."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white py-8 mt-10 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto px-4">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-700">
            <button
              className="w-full flex justify-between items-center py-3 text-left font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="ml-2">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="text-gray-300 pb-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AllFooter() {
  return (
    <footer className="bg-gray-800 text-white pt-8">
      {/* FAQ Section */}
      <FAQSection />

      {/* Footer Main */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-8">
        {/* Logo or Website Name */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-4xl tracking-[5px] font-title font-semibold">NAVIZIT</h2>
          <div className="w-[180px] h-[1.2px] mx-auto mt-2 bg-white"></div>
        </div>

        {/* Links Section */}
        <div className="ml-14">
          <ul className="flex space-x-6">
            <li><a href="" className="hover:text-gray-400">Home</a></li>
            <li><a href="" className="hover:text-gray-400">About</a></li>
            <li><a href="" className="hover:text-gray-400">Services</a></li>
            <li><a href="" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-6 mr-16">
          <a href="https://www.facebook.com/profile.php?id=61566412442595" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="h-6 w-6 hover:opacity-75" />
          </a>
          <a href="https://www.instagram.com/navizitguide/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="h-6 w-6 hover:opacity-75" />
          </a>
          <a href="https://x.com/navizitguide/" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="h-6 w-6 hover:opacity-75" />
          </a>
          <a href="https://www.linkedin.com/in/navizit-guide-22129a330/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6 hover:opacity-75" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} NAVIZIT . All rights reserved.</p>
      </div>
    </footer>
  );
}
