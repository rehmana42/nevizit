import React, { useState } from "react";
import AllFooter from "../HomePage/Footer/AllFooter";
import NavTourist from "../Tourist/NavTourist";

export default function AllHotels() {
  const [filterPriceRange, setFilterPriceRange] = useState("");
  const [filterAmenities, setFilterAmenities] = useState([]);
  const [filterRating, setFilterRating] = useState(0);
  const [filterRoomType, setFilterRoomType] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const hotels = [
    {
      name: "The Royal Palm",
      address: "Bandra West, Mumbai - 400050",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Spa", "Gym", "Free WiFi", "Swimming Pool", "Fine Dining"],
      specialty: "Rooftop Lounge with City Views",
      rating: 4.5,
      priceRange: "Expensive",
      location: "Bandra",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹14,000" },
        { type: "Luxury", pricePerNight: "₹30,000" },
      ],
    },
    {
      name: "Sea Pearl Inn",
      address: "Juhu, Mumbai - 400049",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Boutique Hotel",
      amenities: ["Swimming Pool", "Free WiFi", "Beachfront Access", "Gym"],
      specialty: "Beachfront Dining",
      rating: 4.3,
      priceRange: "Expensive",
      location: "Juhu",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹10,000" },
        { type: "Deluxe", pricePerNight: "₹22,000" },
      ],
    },
    {
      name: "The City Lights Hotel",
      address: "Andheri West, Mumbai - 400053",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Business Hotel",
      amenities: ["Business Center", "Free WiFi", "Gym", "Swimming Pool"],
      specialty: "Panoramic City Views",
      rating: 4.0,
      priceRange: "Moderate",
      location: "Andheri",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹7,500" },
        { type: "Standard", pricePerNight: "₹15,000" },
      ],
    },
    {
      name: "The Infinity Towers",
      address: "Goregaon West, Mumbai - 400104",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Spa", "Free WiFi", "Fine Dining", "Gym", "Swimming Pool"],
      specialty: "Infinity Pool Overlooking City",
      rating: 4.6,
      priceRange: "Expensive",
      location: "Goregaon",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹16,000" },
        { type: "Deluxe", pricePerNight: "₹28,000" },
      ],
    },
    {
      name: "Sunset Shores",
      address: "Versova, Mumbai - 400061",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Resort",
      amenities: ["Spa", "Swimming Pool", "Free WiFi", "Beachfront Access"],
      specialty: "Private Beach Access",
      rating: 4.4,
      priceRange: "Expensive",
      location: "Versova",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹18,000" },
        { type: "Deluxe", pricePerNight: "₹25,000" },
      ],
    },
    {
      name: "Budget Stay Mumbai",
      address: "Malad West, Mumbai - 400064",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Budget Hotel",
      amenities: ["Free WiFi", "Business Center"],
      specialty: "Affordable City Access",
      rating: 2.6,
      priceRange: "Cheap",
      location: "Malad",
      roomTypes: [{ type: "Normal", pricePerNight: "₹2,500" }],
    },
    {
      name: "Oasis Suites",
      address: "Santacruz West, Mumbai - 400054",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Business Hotel",
      amenities: ["Gym", "Free WiFi", "Business Center", "Swimming Pool"],
      specialty: "Quick Access to Airport",
      rating: 3.8,
      priceRange: "Moderate",
      location: "Santacruz",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹6,500" },
        { type: "Standard", pricePerNight: "₹12,000" },
      ],
    },
    {
      name: "The Elite Residency",
      address: "Powai, Mumbai - 400076",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Spa", "Swimming Pool", "Gym", "Fine Dining", "Free WiFi"],
      specialty: "Lake View Rooms",
      rating: 4.7,
      priceRange: "Expensive",
      location: "Powai",
      roomTypes: [
        { type: "Deluxe", pricePerNight: "₹20,000" },
        { type: "Luxury", pricePerNight: "₹35,000" },
      ],
    },
    {
      name: "Urban Budget Inn",
      address: "Kandivali West, Mumbai - 400067",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Budget Hotel",
      amenities: ["Free WiFi", "Business Center"],
      specialty: "Value for Money",
      rating: 2.8,
      priceRange: "Cheap",
      location: "Kandivali",
      roomTypes: [{ type: "Normal", pricePerNight: "₹3,000" }],
    },
    {
      name: "Vista Grand",
      address: "Dadar West, Mumbai - 400028",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Gym",
        "Free WiFi",
        "Business Center",
        "Fine Dining",
      ],
      specialty: "Panoramic Bay Views",
      rating: 4.2,
      priceRange: "Expensive",
      location: "Dadar",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹15,000" },
        { type: "Luxury", pricePerNight: "₹40,000" },
      ],
    },
    {
      name: "Cozy Comfort Hotel",
      address: "Borivali West, Mumbai - 400092",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Budget Hotel",
      amenities: ["Free WiFi", "Gym"],
      specialty: "Family Friendly Stay",
      rating: 2.7,
      priceRange: "Cheap",
      location: "Borivali",
      roomTypes: [{ type: "Normal", pricePerNight: "₹3,200" }],
    },

    {
      name: "The Orchid",
      address: "Santacruz East, Mumbai - 400055",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Gym",
        "Free WiFi",
        "Fine Dining",
        "Business Center",
        "Parking",
      ],
      specialty: "Rooftop Pool",
      rating: 4.5,
      priceRange: "Expensive",
      location: "Santacruz",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹18,000" },
        { type: "Luxury", pricePerNight: "₹35,000" },
      ],
    },
    {
      name: "Taj Lands End",
      address: "Bandra West, Mumbai - 400050",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Gym",
        "Spa",
        "Butler Service",
        "Fine Dining",
        "Free WiFi",
      ],
      specialty: "Sea Views",
      rating: 4.6,
      priceRange: "Expensive",
      location: "Bandra",
      roomTypes: [
        { type: "Deluxe", pricePerNight: "₹28,000" },
        { type: "Luxury", pricePerNight: "₹50,000" },
      ],
    },
    {
      name: "ITC Grand Central",
      address: "Parel, Mumbai - 400012",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Spa",
        "Swimming Pool",
        "Business Center",
        "Gym",
        "Fine Dining",
      ],
      specialty: "Heritage Architecture",
      rating: 4.4,
      priceRange: "Expensive",
      location: "Parel",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹19,000" },
        { type: "Luxury", pricePerNight: "₹38,000" },
      ],
    },
    {
      name: "The St. Regis",
      address: "Lower Parel, Mumbai - 400013",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Fine Dining",
        "Free WiFi",
        "Business Center",
        "Gym",
        "Spa",
      ],
      specialty: "City Skyline Views",
      rating: 4.7,
      priceRange: "Expensive",
      location: "Lower Parel",
      roomTypes: [
        { type: "Deluxe", pricePerNight: "₹27,000" },
        { type: "Luxury", pricePerNight: "₹45,000" },
      ],
    },
    {
      name: "Four Seasons",
      address: "Worli, Mumbai - 400018",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Spa",
        "Swimming Pool",
        "Business Center",
        "Fine Dining",
        "Butler Service",
        "Gym",
      ],
      specialty: "Ocean Views",
      rating: 4.6,
      priceRange: "Expensive",
      location: "Worli",
      roomTypes: [
        { type: "Deluxe", pricePerNight: "₹29,000" },
        { type: "Luxury", pricePerNight: "₹52,000" },
      ],
    },
    {
      name: "Trident Hotel",
      address: "Nariman Point, Mumbai - 400021",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Gym",
        "Fine Dining",
        "Business Center",
        "Free WiFi",
        "Parking",
      ],
      specialty: "Marine Drive Views",
      rating: 4.3,
      priceRange: "Expensive",
      location: "Nariman Point",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹20,000" },
        { type: "Luxury", pricePerNight: "₹42,000" },
      ],
    },
    {
      name: "The Oberoi",
      address: "Nariman Point, Mumbai - 400021",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Butler Service",
        "Fine Dining",
        "Business Center",
        "Spa",
        "Gym",
      ],
      specialty: "Exclusive Service",
      rating: 4.7,
      priceRange: "Expensive",
      location: "Nariman Point",
      roomTypes: [
        { type: "Deluxe", pricePerNight: "₹25,000" },
        { type: "Luxury", pricePerNight: "₹48,000" },
      ],
    },
    {
      name: "Sofitel Mumbai BKC",
      address: "Bandra Kurla Complex, Mumbai - 400051",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Business Center",
        "Gym",
        "Spa",
        "Butler Service",
        "Fine Dining",
      ],
      specialty: "French Elegance",
      rating: 4.5,
      priceRange: "Expensive",
      location: "BKC",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹16,000" },
        { type: "Luxury", pricePerNight: "₹39,000" },
      ],
    },
    {
      name: "Hotel Marine Plaza",
      address: "Marine Drive, Mumbai - 400020",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Business Center",
        "Swimming Pool",
        "Gym",
        "Fine Dining",
        "Parking",
      ],
      specialty: "Art Deco Style",
      rating: 4.4,
      priceRange: "Expensive",
      location: "Marine Drive",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹18,000" },
        { type: "Luxury", pricePerNight: "₹35,000" },
      ],
    },
    {
      name: "The Shalimar Hotel",
      address: "Kemps Corner, Mumbai - 400036",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Free WiFi",
        "Gym",
        "Fine Dining",
        "Parking",
        "Business Center",
      ],
      specialty: "Luxury Shopping Proximity",
      rating: 4.2,
      priceRange: "Expensive",
      location: "Kemps Corner",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹15,000" },
        { type: "Luxury", pricePerNight: "₹40,000" },
      ],
    },
    {
      name: "Fariyas Hotel",
      address: "Colaba, Mumbai - 400005",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Free WiFi",
        "Gym",
        "Business Center",
        "Parking",
        "Fine Dining",
      ],
      specialty: "Proximity to Gateway of India",
      rating: 4.3,
      priceRange: "Expensive",
      location: "Colaba",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹16,000" },
        { type: "Luxury", pricePerNight: "₹38,000" },
      ],
    },
    {
      name: "Grand Hyatt Mumbai",
      address: "Santacruz East, Mumbai - 400055",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Spa",
        "Swimming Pool",
        "Fine Dining",
        "Gym",
        "Butler Service",
        "Business Center",
      ],
      specialty: "Modern Luxury",
      rating: 4.5,
      priceRange: "Expensive",
      location: "Santacruz",
      roomTypes: [
        { type: "Deluxe", pricePerNight: "₹26,000" },
        { type: "Luxury", pricePerNight: "₹45,000" },
      ],
    },

    {
      name: "InterContinental Marine Drive",
      address: "Marine Drive, Mumbai - 400020",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Free WiFi",
        "Gym",
        "Business Center",
        "Fine Dining",
        "Parking",
      ],
      specialty: "Rooftop Bar with Ocean Views",
      rating: 4.5,
      priceRange: "Expensive",
      location: "Marine Drive",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹18,000" },
        { type: "Luxury", pricePerNight: "₹40,000" },
      ],
    },
    {
      name: "Hotel Diplomat",
      address: "Colaba, Mumbai - 400005",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Parking", "Business Center", "Fine Dining"],
      specialty: "Proximity to Gateway of India",
      rating: 4.3,
      priceRange: "Moderate",
      location: "Colaba",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹14,000" },
        { type: "Luxury", pricePerNight: "₹30,000" },
      ],
    },
    {
      name: "The Sahil Hotel",
      address: "Mumbai Central, Mumbai - 400008",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Gym",
        "Business Center",
        "Parking",
        "Fine Dining",
      ],
      specialty: "Close to Shopping District",
      rating: 3.8,
      priceRange: "Moderate",
      location: "Mumbai Central",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹12,000" },
        { type: "Deluxe", pricePerNight: "₹25,000" },
      ],
    },
    {
      name: "Krishna Palace Hotel",
      address: "Grant Road, Mumbai - 400007",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Parking",
        "Gym",
        "Business Center",
        "Fine Dining",
      ],
      specialty: "Central Location",
      rating: 3.7,
      priceRange: "Moderate",
      location: "Grant Road",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹13,000" },
        { type: "Deluxe", pricePerNight: "₹28,000" },
      ],
    },
    {
      name: "Residency Hotel",
      address: "Fort, Mumbai - 400001",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Gym",
        "Business Center",
        "Fine Dining",
        "Parking",
      ],
      specialty: "Heritage Building",
      rating: 4.0,
      priceRange: "Moderate",
      location: "Fort",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹12,000" },
        { type: "Deluxe", pricePerNight: "₹26,000" },
      ],
    },
    {
      name: "Hotel Suba Palace",
      address: "Colaba, Mumbai - 400005",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Business Center",
        "Gym",
        "Parking",
        "Fine Dining",
      ],
      specialty: "Close to Historic Monuments",
      rating: 3.6,
      priceRange: "Moderate",
      location: "Colaba",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹14,000" },
        { type: "Deluxe", pricePerNight: "₹27,000" },
      ],
    },
    {
      name: "Hotel Fortune",
      address: "Grant Road, Mumbai - 400007",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Parking",
        "Gym",
        "Business Center",
        "Fine Dining",
      ],
      specialty: "Close to Railway Station",
      rating: 3.4,
      priceRange: "Moderate",
      location: "Grant Road",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹11,000" },
        { type: "Deluxe", pricePerNight: "₹24,000" },
      ],
    },
    {
      name: "Hotel Supreme",
      address: "Colaba, Mumbai - 400005",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Gym",
        "Parking",
        "Business Center",
        "Fine Dining",
      ],
      specialty: "Budget Friendly",
      rating: 2.9,
      priceRange: "Cheap",
      location: "Colaba",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹8,000" },
        { type: "Standard", pricePerNight: "₹15,000" },
      ],
    },
    {
      name: "Hotel Grant",
      address: "Marine Lines, Mumbai - 400020",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Parking",
        "Gym",
        "Business Center",
        "Fine Dining",
      ],
      specialty: "Affordable Rates",
      rating: 2.7,
      priceRange: "Cheap",
      location: "Marine Lines",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹9,000" },
        { type: "Standard", pricePerNight: "₹16,000" },
      ],
    },

    {
      name: "Hotel Marine Plaza",
      address: "Marine Drive, Mumbai - 400020",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Free WiFi",
        "Gym",
        "Business Center",
        "Fine Dining",
        "Parking",
      ],
      specialty: "Panoramic Sea Views",
      rating: 4.4,
      priceRange: "Expensive",
      location: "Marine Drive",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹17,000" },
        { type: "Luxury", pricePerNight: "₹38,000" },
      ],
    },
    {
      name: "ITC Grand Central",
      address: "Parel, Mumbai - 400012",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Spa",
        "Swimming Pool",
        "Gym",
        "Free WiFi",
        "Butler Service",
        "Business Center",
        "Fine Dining",
      ],
      specialty: "Heritage Luxury",
      rating: 4.6,
      priceRange: "Expensive",
      location: "Parel",
      roomTypes: [
        { type: "Deluxe", pricePerNight: "₹27,000" },
        { type: "Luxury", pricePerNight: "₹45,000" },
      ],
    },
    {
      name: "Hotel Suncity Apollo",
      address: "Colaba, Mumbai - 400039",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Gym",
        "Parking",
        "Business Center",
        "Fine Dining",
      ],
      specialty: "Affordable Luxury",
      rating: 3.5,
      priceRange: "Moderate",
      location: "Colaba",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹13,000" },
        { type: "Deluxe", pricePerNight: "₹26,000" },
      ],
    },
    {
      name: "Shalimar Hotel",
      address: "Kemps Corner, Mumbai - 400026",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Business Center", "Fine Dining", "Gym", "Spa"],
      specialty: "Boutique Charm",
      rating: 4.0,
      priceRange: "Moderate",
      location: "Kemps Corner",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹12,000" },
        { type: "Deluxe", pricePerNight: "₹28,000" },
      ],
    },
    {
      name: "Hotel Balwas International",
      address: "Grant Road, Mumbai - 400007",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Parking", "Business Center", "Fine Dining"],
      specialty: "Budget-Friendly",
      rating: 2.8,
      priceRange: "Cheap",
      location: "Grant Road",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹9,000" },
        { type: "Standard", pricePerNight: "₹14,000" },
      ],
    },
    {
      name: "Hotel City Palace",
      address: "Fort, Mumbai - 400001",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Business Center", "Gym", "Fine Dining"],
      specialty: "Centrally Located Budget Stay",
      rating: 2.5,
      priceRange: "Cheap",
      location: "Fort",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹7,000" },
        { type: "Standard", pricePerNight: "₹12,000" },
      ],
    },

    {
      name: "Hotel Kumkum",
      address: "Grant Road, Mumbai - 400007",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Business Center", "Parking", "Fine Dining"],
      specialty: "Budget-Friendly Central Stay",
      rating: 2.6,
      priceRange: "Cheap",
      location: "Grant Road",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹6,500" },
        { type: "Standard", pricePerNight: "₹11,000" },
      ],
    },
    {
      name: "Hotel Oasis",
      address: "Fort, Mumbai - 400001",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Parking", "Business Center", "Fine Dining"],
      specialty: "Proximity to CST Station",
      rating: 2.8,
      priceRange: "Cheap",
      location: "Fort",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹7,500" },
        { type: "Standard", pricePerNight: "₹13,000" },
      ],
    },
    {
      name: "Sea Palace Hotel",
      address: "Colaba, Mumbai - 400005",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Business Center",
        "Parking",
        "Fine Dining",
        "Beachfront Access",
      ],
      specialty: "Bayfront Location",
      rating: 3.9,
      priceRange: "Moderate",
      location: "Colaba",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹12,000" },
        { type: "Deluxe", pricePerNight: "₹22,000" },
      ],
    },
    {
      name: "Hotel Manama",
      address: "Fort, Mumbai - 400001",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Parking", "Business Center", "Fine Dining"],
      specialty: "Close to Financial District",
      rating: 3.3,
      priceRange: "Moderate",
      location: "Fort",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹13,500" },
        { type: "Deluxe", pricePerNight: "₹23,000" },
      ],
    },
    {
      name: "Hotel Windsor",
      address: "Colaba, Mumbai - 400005",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Business Center", "Parking", "Fine Dining"],
      specialty: "Affordable Stay near Gateway of India",
      rating: 2.9,
      priceRange: "Cheap",
      location: "Colaba",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹8,500" },
        { type: "Standard", pricePerNight: "₹15,000" },
      ],
    },
    {
      name: "Chateau Windsor Hotel",
      address: "Churchgate, Mumbai - 400020",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Business Center",
        "Parking",
        "Fine Dining",
        "Gym",
      ],
      specialty: "Classic Hotel near Marine Drive",
      rating: 3.8,
      priceRange: "Moderate",
      location: "Churchgate",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹13,000" },
        { type: "Deluxe", pricePerNight: "₹24,000" },
      ],
    },
    {
      name: "Hotel New Bengal",
      address: "CST, Mumbai - 400001",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Parking", "Business Center", "Fine Dining"],
      specialty: "Budget-Friendly",
      rating: 2.5,
      priceRange: "Cheap",
      location: "CST",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹7,000" },
        { type: "Standard", pricePerNight: "₹10,000" },
      ],
    },

    {
      name: "Regal Heights",
      address: "Chembur, Mumbai - 400071",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Gym",
        "Free WiFi",
        "Business Center",
        "Parking",
        "Fine Dining",
      ],
      specialty: "City Views",
      rating: 4.4,
      priceRange: "Expensive",
      location: "Chembur",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹18,000" },
        { type: "Luxury", pricePerNight: "₹42,000" },
      ],
    },
    {
      name: "Hotel Royal Park",
      address: "Ghatkopar, Mumbai - 400086",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Gym",
        "Parking",
        "Business Center",
        "Fine Dining",
        "Spa",
      ],
      specialty: "Modern Comfort",
      rating: 4.3,
      priceRange: "Expensive",
      location: "Ghatkopar",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹16,000" },
        { type: "Luxury", pricePerNight: "₹38,000" },
      ],
    },
    {
      name: "Fern Residency",
      address: "Vikhroli, Mumbai - 400083",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Gym",
        "Swimming Pool",
        "Business Center",
        "Fine Dining",
      ],
      specialty: "Green Living",
      rating: 4.2,
      priceRange: "Expensive",
      location: "Vikhroli",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹14,000" },
        { type: "Luxury", pricePerNight: "₹40,000" },
      ],
    },
    {
      name: "The Cottage Hotel",
      address: "Chembur, Mumbai - 400071",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Parking",
        "Free WiFi",
        "Business Center",
        "Gym",
        "Fine Dining",
      ],
      specialty: "Charming Boutique",
      rating: 3.7,
      priceRange: "Moderate",
      location: "Chembur",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹13,500" },
        { type: "Deluxe", pricePerNight: "₹22,000" },
      ],
    },
    {
      name: "Hotel Jewel of Chembur",
      address: "Chembur, Mumbai - 400071",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Gym",
        "Parking",
        "Business Center",
        "Fine Dining",
        "Bar",
      ],
      specialty: "Contemporary Style",
      rating: 3.9,
      priceRange: "Moderate",
      location: "Chembur",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹14,000" },
        { type: "Deluxe", pricePerNight: "₹25,000" },
      ],
    },
    {
      name: "Hotel Yogi Broadway",
      address: "Kurla, Mumbai - 400070",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Parking",
        "Gym",
        "Business Center",
        "Fine Dining",
        "Swimming Pool",
      ],
      specialty: "Near BKC",
      rating: 4.0,
      priceRange: "Moderate",
      location: "Kurla",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹12,500" },
        { type: "Deluxe", pricePerNight: "₹28,000" },
      ],
    },
    {
      name: "The Beatle Hotel",
      address: "Powai, Mumbai - 400076",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Gym",
        "Business Center",
        "Fine Dining",
        "Parking",
        "Spa",
      ],
      specialty: "Powai Lake Views",
      rating: 4.3,
      priceRange: "Expensive",
      location: "Powai",
      roomTypes: [
        { type: "Deluxe", pricePerNight: "₹24,000" },
        { type: "Luxury", pricePerNight: "₹36,000" },
      ],
    },
    {
      name: "Rodas Ecotel",
      address: "Powai, Mumbai - 400076",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Parking",
        "Business Center",
        "Fine Dining",
        "Spa",
        "Gym",
      ],
      specialty: "Eco-Friendly Hotel",
      rating: 4.5,
      priceRange: "Expensive",
      location: "Powai",
      roomTypes: [
        { type: "Deluxe", pricePerNight: "₹26,000" },
        { type: "Luxury", pricePerNight: "₹40,000" },
      ],
    },
    {
      name: "Hotel Shree Residency",
      address: "Vikhroli, Mumbai - 400083",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Parking", "Business Center", "Fine Dining"],
      specialty: "Convenient for Commuters",
      rating: 3.5,
      priceRange: "Moderate",
      location: "Vikhroli",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹14,000" },
        { type: "Deluxe", pricePerNight: "₹23,000" },
      ],
    },
    {
      name: "Hotel Ashray International",
      address: "Sion, Mumbai - 400022",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Parking", "Business Center", "Fine Dining"],
      specialty: "Affordable Stay",
      rating: 2.8,
      priceRange: "Cheap",
      location: "Sion",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹7,500" },
        { type: "Standard", pricePerNight: "₹11,000" },
      ],
    },
    {
      name: "Hotel Onn Chembur",
      address: "Chembur, Mumbai - 400071",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Gym",
        "Business Center",
        "Parking",
        "Fine Dining",
      ],
      specialty: "Budget-Friendly",
      rating: 2.9,
      priceRange: "Cheap",
      location: "Chembur",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹6,000" },
        { type: "Standard", pricePerNight: "₹12,000" },
      ],
    },
    {
      name: "Hotel Diamond Palace",
      address: "Kurla, Mumbai - 400070",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Business Center", "Parking", "Fine Dining"],
      specialty: "Near Shopping Hub",
      rating: 2.5,
      priceRange: "Cheap",
      location: "Kurla",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹8,000" },
        { type: "Standard", pricePerNight: "₹15,000" },
      ],
    },
    {
      name: "Hotel Everest",
      address: "Govandi, Mumbai - 400088",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Parking", "Business Center", "Fine Dining"],
      specialty: "Economical",
      rating: 2.7,
      priceRange: "Cheap",
      location: "Govandi",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹9,000" },
        { type: "Standard", pricePerNight: "₹14,000" },
      ],
    },

    {
      name: "Hotel Rajhans",
      address: "Vidyavihar, Mumbai - 400086",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Business Center", "Parking", "Fine Dining"],
      specialty: "Budget-Friendly",
      rating: 2.9,
      priceRange: "Cheap",
      location: "Vidyavihar",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹8,500" },
        { type: "Standard", pricePerNight: "₹13,000" },
      ],
    },
    {
      name: "Hotel Galaxy Avenue",
      address: "Kurla, Mumbai - 400070",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Gym",
        "Parking",
        "Business Center",
        "Fine Dining",
      ],
      specialty: "Shopping District Proximity",
      rating: 3.6,
      priceRange: "Moderate",
      location: "Kurla",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹15,000" },
        { type: "Deluxe", pricePerNight: "₹22,000" },
      ],
    },
    {
      name: "Hotel Apex Residency",
      address: "Ghatkopar, Mumbai - 400086",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Business Center",
        "Parking",
        "Fine Dining",
        "Gym",
      ],
      specialty: "Commuter-Friendly Location",
      rating: 3.9,
      priceRange: "Moderate",
      location: "Ghatkopar",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹12,000" },
        { type: "Deluxe", pricePerNight: "₹25,000" },
      ],
    },
    {
      name: "Hotel Welcome Plaza",
      address: "Chembur, Mumbai - 400071",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Business Center",
        "Parking",
        "Fine Dining",
        "Spa",
      ],
      specialty: "Chembur Central",
      rating: 3.8,
      priceRange: "Moderate",
      location: "Chembur",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹14,000" },
        { type: "Deluxe", pricePerNight: "₹24,000" },
      ],
    },
    {
      name: "Hotel Leafio Marigold",
      address: "Saki Naka, Mumbai - 400072",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Parking",
        "Business Center",
        "Gym",
        "Fine Dining",
      ],
      specialty: "Transit Hub",
      rating: 3.4,
      priceRange: "Moderate",
      location: "Saki Naka",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹11,000" },
        { type: "Deluxe", pricePerNight: "₹21,000" },
      ],
    },
    {
      name: "Hotel Arma Residency",
      address: "Sakinaka, Mumbai - 400072",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Parking", "Business Center", "Fine Dining"],
      specialty: "Budget Traveler's Choice",
      rating: 2.6,
      priceRange: "Cheap",
      location: "Sakinaka",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹6,000" },
        { type: "Standard", pricePerNight: "₹10,000" },
      ],
    },
    {
      name: "Hotel Ajwa",
      address: "Kurla, Mumbai - 400070",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Business Center", "Parking", "Fine Dining"],
      specialty: "Affordable Comfort",
      rating: 2.5,
      priceRange: "Cheap",
      location: "Kurla",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹7,500" },
        { type: "Standard", pricePerNight: "₹14,000" },
      ],
    },
    {
      name: "Hotel Kohinoor Elite",
      address: "Vidyavihar, Mumbai - 400086",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Parking",
        "Business Center",
        "Fine Dining",
        "Gym",
        "Swimming Pool",
      ],
      specialty: "Family Friendly",
      rating: 4.0,
      priceRange: "Expensive",
      location: "Vidyavihar",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹15,000" },
        { type: "Luxury", pricePerNight: "₹35,000" },
      ],
    },

    {
      name: "Hotel Sandesh",
      address: "Ghatkopar, Mumbai - 400077",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Gym", "Parking", "Business Center"],
      specialty: "Convenient Location",
      rating: 3.5,
      priceRange: "Moderate",
      location: "Ghatkopar",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹14,000" },
        { type: "Deluxe", pricePerNight: "₹28,000" },
      ],
    },
    {
      name: "Hotel Grace Residency",
      address: "Chembur, Mumbai - 400071",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Parking",
        "Business Center",
        "Fine Dining",
        "Swimming Pool",
      ],
      specialty: "Family Friendly",
      rating: 3.7,
      priceRange: "Moderate",
      location: "Chembur",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹12,000" },
        { type: "Luxury", pricePerNight: "₹30,000" },
      ],
    },
    {
      name: "Hotel Silver Inn",
      address: "Sakinaka, Mumbai - 400072",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Business Center", "Parking", "Gym"],
      specialty: "Budget-Friendly",
      rating: 2.8,
      priceRange: "Cheap",
      location: "Sakinaka",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹9,000" },
        { type: "Standard", pricePerNight: "₹17,000" },
      ],
    },
    {
      name: "Hotel New Shree Krishna",
      address: "Vidyavihar, Mumbai - 400086",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Business Center", "Parking", "Fine Dining"],
      specialty: "Value for Money",
      rating: 2.6,
      priceRange: "Cheap",
      location: "Vidyavihar",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹5,500" },
        { type: "Standard", pricePerNight: "₹12,500" },
      ],
    },
    {
      name: "Hotel Crescent",
      address: "Kurla, Mumbai - 400070",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Gym", "Parking", "Fine Dining"],
      specialty: "Centrally Located",
      rating: 3.2,
      priceRange: "Moderate",
      location: "Kurla",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹15,000" },
        { type: "Deluxe", pricePerNight: "₹23,000" },
      ],
    },
    {
      name: "Hotel 5 Star",
      address: "Govandi, Mumbai - 400088",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Business Center", "Parking", "Swimming Pool"],
      specialty: "Luxury at Affordable Rates",
      rating: 4.1,
      priceRange: "Expensive",
      location: "Govandi",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹18,000" },
        { type: "Luxury", pricePerNight: "₹45,000" },
      ],
    },

    {
      name: "Hotel Green Park",
      address: "Chembur, Mumbai - 400071",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Gym", "Business Center", "Parking"],
      specialty: "Eco-Friendly",
      rating: 3.4,
      priceRange: "Moderate",
      location: "Chembur",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹13,000" },
        { type: "Deluxe", pricePerNight: "₹22,000" },
      ],
    },
    {
      name: "Hotel Flora",
      address: "Saki Naka, Mumbai - 400072",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Parking", "Business Center", "Fine Dining"],
      specialty: "Near Airport",
      rating: 3.5,
      priceRange: "Moderate",
      location: "Saki Naka",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹14,000" },
        { type: "Deluxe", pricePerNight: "₹21,000" },
      ],
    },
    {
      name: "Hotel Neelkanth",
      address: "Bandra, Mumbai - 400050",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Gym", "Business Center", "Fine Dining"],
      specialty: "Charming Atmosphere",
      rating: 3.8,
      priceRange: "Moderate",
      location: "Bandra",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹12,000" },
        { type: "Luxury", pricePerNight: "₹35,000" },
      ],
    },
    {
      name: "Hotel Sai Palace",
      address: "Ghatkopar, Mumbai - 400077",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Parking",
        "Business Center",
        "Gym",
        "Fine Dining",
      ],
      specialty: "Comfort and Convenience",
      rating: 3.6,
      priceRange: "Moderate",
      location: "Ghatkopar",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹15,000" },
        { type: "Deluxe", pricePerNight: "₹20,000" },
      ],
    },
    {
      name: "Hotel Dreamland",
      address: "Chembur, Mumbai - 400071",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Business Center", "Parking", "Fine Dining"],
      specialty: "Business-Friendly",
      rating: 4.3,
      priceRange: "Expensive",
      location: "Chembur",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹18,000" },
        { type: "Luxury", pricePerNight: "₹42,000" },
      ],
    },
    {
      name: "Hotel 7 Star",
      address: "Vidyavihar, Mumbai - 400086",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Gym", "Parking", "Business Center"],
      specialty: "Family and Leisure",
      rating: 4.1,
      priceRange: "Expensive",
      location: "Vidyavihar",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹16,000" },
        { type: "Luxury", pricePerNight: "₹38,000" },
      ],
    },

    {
      name: "Hotel Galaxy",
      address: "Sion, Mumbai - 400022",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Parking", "Business Center", "Swimming Pool"],
      specialty: "Modern Amenities",
      rating: 4.4,
      priceRange: "Expensive",
      location: "Sion",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹18,000" },
        { type: "Luxury", pricePerNight: "₹50,000" },
      ],
    },
    {
      name: "Hotel Landmark",
      address: "Bhandup, Mumbai - 400078",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Gym", "Business Center", "Fine Dining"],
      specialty: "Business Hub",
      rating: 4.0,
      priceRange: "Expensive",
      location: "Bhandup",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹20,000" },
        { type: "Luxury", pricePerNight: "₹45,000" },
      ],
    },
    {
      name: "Hotel Royal Castle",
      address: "Kurla, Mumbai - 400070",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Parking", "Business Center", "Swimming Pool"],
      specialty: "Elegant Decor",
      rating: 3.9,
      priceRange: "Moderate",
      location: "Kurla",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹15,500" },
        { type: "Deluxe", pricePerNight: "₹25,000" },
      ],
    },
    {
      name: "Hotel Comfort Inn",
      address: "Dadar, Mumbai - 400014",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Gym", "Business Center", "Parking"],
      specialty: "Cozy Atmosphere",
      rating: 3.3,
      priceRange: "Moderate",
      location: "Dadar",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹12,500" },
        { type: "Deluxe", pricePerNight: "₹21,000" },
      ],
    },
    {
      name: "Hotel Paradise",
      address: "Chembur, Mumbai - 400071",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Free WiFi",
        "Parking",
        "Business Center",
        "Fine Dining",
        "Swimming Pool",
      ],
      specialty: "Tranquil Environment",
      rating: 4.6,
      priceRange: "Expensive",
      location: "Chembur",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹16,000" },
        { type: "Luxury", pricePerNight: "₹48,000" },
      ],
    },

    {
      name: "The Oberoi",
      address: "Nariman Point, Mumbai - 400021",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Gym",
        "Free WiFi",
        "Fine Dining",
        "Spa",
        "Business Center",
      ],
      specialty: "Oceanfront Views",
      rating: 4.7,
      priceRange: "Expensive",
      location: "Nariman",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹20,000" },
        { type: "Luxury", pricePerNight: "₹55,000" },
      ],
    },
    {
      name: "Taj Mahal Palace",
      address: "Apollo Bunder, Colaba, Mumbai - 400001",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Gym",
        "Butler Service",
        "Fine Dining",
        "Free WiFi",
        "Business Center",
      ],
      specialty: "Heritage Property",
      rating: 4.8,
      priceRange: "Expensive",
      location: "Colaba",
      roomTypes: [
        { type: "Deluxe", pricePerNight: "₹25,000" },
        { type: "Luxury", pricePerNight: "₹65,000" },
      ],
    },
    {
      name: "ITC Grand Central",
      address: "Parel, Mumbai - 400012",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Gym",
        "Free WiFi",
        "Spa",
        "Business Center",
        "Fine Dining",
      ],
      specialty: "Panoramic City Views",
      rating: 4.6,
      priceRange: "Expensive",
      location: "Parel",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹19,000" },
        { type: "Luxury", pricePerNight: "₹50,000" },
      ],
    },
    {
      name: "Hotel Marine Plaza",
      address: "Marine Drive, Mumbai - 400020",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Free WiFi",
        "Business Center",
        "Fine Dining",
        "Parking",
      ],
      specialty: "Bayfront Property",
      rating: 4.3,
      priceRange: "Expensive",
      location: "Marine",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹18,000" },
        { type: "Luxury", pricePerNight: "₹42,000" },
      ],
    },
    {
      name: "Trident Hotel",
      address: "Nariman Point, Mumbai - 400021",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Gym",
        "Spa",
        "Swimming Pool",
        "Business Center",
        "Free WiFi",
      ],
      specialty: "Harbor Views",
      rating: 4.4,
      priceRange: "Expensive",
      location: "Nariman",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹19,500" },
        { type: "Luxury", pricePerNight: "₹43,000" },
      ],
    },
    {
      name: "Fariyas Hotel",
      address: "Colaba, Mumbai - 400005",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Gym", "Free WiFi", "Swimming Pool", "Spa", "Parking"],
      specialty: "Nearby Shopping District",
      rating: 4.2,
      priceRange: "Expensive",
      location: "Colaba",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹16,500" },
        { type: "Luxury", pricePerNight: "₹35,000" },
      ],
    },
    {
      name: "The Shalimar Hotel",
      address: "Kemps Corner, Mumbai - 400036",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Free WiFi", "Business Center", "Gym", "Parking"],
      specialty: "Central Location",
      rating: 4.3,
      priceRange: "Expensive",
      location: "Kemps",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹17,000" },
        { type: "Luxury", pricePerNight: "₹40,000" },
      ],
    },
    {
      name: "InterContinental Marine Drive",
      address: "Marine Drive, Mumbai - 400020",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: ["Swimming Pool", "Gym", "Spa", "Free WiFi", "Fine Dining"],
      specialty: "Roof-Top Pool with Sea Views",
      rating: 4.5,
      priceRange: "Expensive",
      location: "Marine",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹22,000" },
        { type: "Luxury", pricePerNight: "₹45,000" },
      ],
    },
    {
      name: "Four Seasons",
      address: "Worli, Mumbai - 400018",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Gym",
        "Spa",
        "Swimming Pool",
        "Business Center",
        "Free WiFi",
      ],
      specialty: "Rooftop Bar",
      rating: 4.6,
      priceRange: "Expensive",
      location: "Worli",
      roomTypes: [
        { type: "Deluxe", pricePerNight: "₹28,000" },
        { type: "Luxury", pricePerNight: "₹65,000" },
      ],
    },
    {
      name: "Grand Hyatt",
      address: "Santacruz East, Mumbai - 400055",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Gym",
        "Free WiFi",
        "Spa",
        "Business Center",
      ],
      specialty: "Urban Retreat",
      rating: 4.3,
      priceRange: "Expensive",
      location: "Santacruz",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹15,000" },
        { type: "Luxury", pricePerNight: "₹38,000" },
      ],
    },
    {
      name: "The Sahil Hotel",
      address: "Mumbai Central, Mumbai - 400008",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Mid-Range Hotel",
      amenities: ["Free WiFi", "Business Center", "Parking", "Gym"],
      specialty: "Proximity to Central Station",
      rating: 3.6,
      priceRange: "Moderate",
      location: "Central",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹12,000" },
        { type: "Deluxe", pricePerNight: "₹22,000" },
      ],
    },
    {
      name: "Hotel Diplomat",
      address: "Colaba, Mumbai - 400005",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Budget Hotel",
      amenities: ["Free WiFi", "Parking", "Room Service"],
      specialty: "Walking Distance to Gateway of India",
      rating: 2.8,
      priceRange: "Cheap",
      location: "Colaba",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹8,000" },
        { type: "Standard", pricePerNight: "₹14,000" },
      ],
    },
    {
      name: "Chateau Windsor Hotel",
      address: "Churchgate, Mumbai - 400020",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Budget Hotel",
      amenities: ["Free WiFi", "Room Service", "Parking"],
      specialty: "Close to Marine Drive",
      rating: 2.7,
      priceRange: "Cheap",
      location: "Churchgate",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹6,000" },
        { type: "Standard", pricePerNight: "₹12,000" },
      ],
    },
    {
      name: "Residency Hotel",
      address: "Fort, Mumbai - 400001",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Mid-Range Hotel",
      amenities: ["Free WiFi", "Parking", "Business Center"],
      specialty: "Nearby Bombay Stock Exchange",
      rating: 3.7,
      priceRange: "Moderate",
      location: "Fort",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹14,000" },
        { type: "Deluxe", pricePerNight: "₹21,000" },
      ],
    },

    {
      name: "The St. Regis Mumbai",
      address: "Lower Parel, Mumbai - 400013",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Spa",
        "Gym",
        "Butler Service",
        "Free WiFi",
        "Business Center",
      ],
      specialty: "Skyline Views",
      rating: 4.7,
      priceRange: "Expensive",
      location: "Parel",
      roomTypes: [
        { type: "Deluxe", pricePerNight: "₹25,000" },
        { type: "Luxury", pricePerNight: "₹70,000" },
      ],
    },
    {
      name: "The Gordon House Hotel",
      address: "Colaba, Mumbai - 400039",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Boutique Hotel",
      amenities: ["Free WiFi", "Fine Dining", "Parking", "Business Center"],
      specialty: "Themed Rooms",
      rating: 4.4,
      priceRange: "Expensive",
      location: "Colaba",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹15,500" },
        { type: "Luxury", pricePerNight: "₹36,000" },
      ],
    },
    {
      name: "Hotel Suba Palace",
      address: "Colaba, Mumbai - 400001",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Budget Hotel",
      amenities: ["Free WiFi", "Parking", "Room Service", "Business Center"],
      specialty: "Proximity to Gateway of India",
      rating: 2.9,
      priceRange: "Cheap",
      location: "Colaba",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹9,000" },
        { type: "Standard", pricePerNight: "₹15,000" },
      ],
    },
    {
      name: "Hotel Bawa Regency",
      address: "Dadar East, Mumbai - 400014",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Mid-Range Hotel",
      amenities: ["Free WiFi", "Parking", "Business Center", "Room Service"],
      specialty: "Budget-friendly Near Dadar Station",
      rating: 3.8,
      priceRange: "Moderate",
      location: "Dadar",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹12,500" },
        { type: "Deluxe", pricePerNight: "₹25,000" },
      ],
    },
    {
      name: "The Ambassador Hotel",
      address: "Churchgate, Mumbai - 400020",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Free WiFi",
        "Gym",
        "Business Center",
        "Fine Dining",
      ],
      specialty: "Prime Location Near Marine Drive",
      rating: 4.2,
      priceRange: "Expensive",
      location: "Churchgate",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹16,000" },
        { type: "Luxury", pricePerNight: "₹38,000" },
      ],
    },
    {
      name: "Sea Green Hotel",
      address: "Marine Drive, Mumbai - 400020",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Budget Hotel",
      amenities: ["Free WiFi", "Parking", "Room Service"],
      specialty: "Marine Drive Sea Views",
      rating: 2.5,
      priceRange: "Cheap",
      location: "Marine",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹7,000" },
        { type: "Standard", pricePerNight: "₹11,500" },
      ],
    },
    {
      name: "Hotel Godwin",
      address: "Colaba, Mumbai - 400039",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Budget Hotel",
      amenities: ["Free WiFi", "Room Service", "Parking"],
      specialty: "Walking Distance to Colaba Market",
      rating: 2.6,
      priceRange: "Cheap",
      location: "Colaba",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹8,500" },
        { type: "Standard", pricePerNight: "₹14,000" },
      ],
    },
    {
      name: "Hotel Krishna Palace",
      address: "Grant Road, Mumbai - 400007",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Mid-Range Hotel",
      amenities: ["Free WiFi", "Parking", "Gym", "Business Center"],
      specialty: "Close to Local Markets",
      rating: 3.5,
      priceRange: "Moderate",
      location: "Grant",
      roomTypes: [
        { type: "Standard", pricePerNight: "₹12,000" },
        { type: "Deluxe", pricePerNight: "₹23,000" },
      ],
    },
    {
      name: "Shangri-La Hotel",
      address: "Worli, Mumbai - 400018",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Luxury Hotel",
      amenities: [
        "Swimming Pool",
        "Spa",
        "Butler Service",
        "Business Center",
        "Free WiFi",
      ],
      specialty: "Bay Views and Rooftop Pool",
      rating: 4.5,
      priceRange: "Expensive",
      location: "Worli",
      roomTypes: [
        { type: "Deluxe", pricePerNight: "₹30,000" },
        { type: "Luxury", pricePerNight: "₹65,000" },
      ],
    },
    {
      name: "Regent Hotel",
      address: "Colaba, Mumbai - 400005",
      image:
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      type: "Budget Hotel",
      amenities: ["Free WiFi", "Room Service", "Parking"],
      specialty: "Close to Colaba Causeway",
      rating: 2.9,
      priceRange: "Cheap",
      location: "Colaba",
      roomTypes: [
        { type: "Normal", pricePerNight: "₹7,500" },
        { type: "Standard", pricePerNight: "₹13,000" },
      ],
    }

    // Additional hotel data here
  ];

  // Function to check if a hotel has the selected room type
  const hasRoomType = (hotel, roomType) => {
    return hotel.roomTypes.some((room) => room.type === roomType);
  };

  const filteredHotels = hotels.filter((hotel) => {
    const matchesPriceRange =
      filterPriceRange === "" || hotel.priceRange === filterPriceRange;
    const matchesRating = filterRating === 0 || hotel.rating >= filterRating;
    const matchesAmenities =
      filterAmenities.length === 0 ||
      filterAmenities.every((amenity) => hotel.amenities.includes(amenity));
    const matchesRoomType =
      filterRoomType === "" || hasRoomType(hotel, filterRoomType);

    return (
      matchesPriceRange && matchesRating && matchesAmenities && matchesRoomType
    );
  });

  const handleWishlistClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  return (
    <>
      <NavTourist />

      <div className="flex flex-col md:flex-row p-6 space-x-6">
        {/* Left Side: Hotel Information */}
        <div className="flex-1 space-y-6 overflow-y-auto h-[calc(100vh-100px)]">
          {filteredHotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row p-6 border border-gray-200"
            >
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-48 h-48 object-cover rounded-lg shadow-md"
                />
               
              </div>
              <div className="flex-1 md:ml-6">
                <h3 className="text-2xl font-semibold mb-2">{hotel.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{hotel.address}</p>
                <p className="text-md text-gray-700 mb-2">
                  <strong>Specialty:</strong> {hotel.specialty}
                </p>
                <p className="text-md text-gray-700 mb-2">
                  <strong>Rating:</strong> {hotel.rating} / 5
                </p>
                <p className="text-md text-gray-700 mb-4">
                  <strong>Price Range:</strong> {hotel.priceRange}
                </p>
                <p className="text-md text-gray-700 mb-4">
                  <strong>Amenities:</strong> {hotel.amenities.join(", ")}
                </p>
                <p className="text-md text-gray-700 mb-4">
                  <strong>Room Types:</strong>
                  {hotel.roomTypes.map((room) => (
                    <p key={room.type}>
                      {room.type}: {room.pricePerNight}
                    </p>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Sticky Filter Section */}
        <div className="w-full md:w-1/3 bg-white shadow-lg p-6 rounded-lg border border-gray-200 sticky top-20 self-start">
          <h2 className="text-2xl font-semibold mb-4">Filter Hotels</h2>

          {/* Price Range Filter */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Hotel Price Range</h3>
            <select
              className="w-full border rounded-lg p-2"
              value={filterPriceRange}
              onChange={(e) => setFilterPriceRange(e.target.value)}
            >
              <option value="">All</option>
              <option value="Expensive">Expensive</option>
              <option value="Moderate">Moderate</option>
              <option value="Cheap">Cheap</option>
            </select>
          </div>

          {/* Rating Filter */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Minimum Rating</h3>
            <input
              type="number"
              min="0"
              max="5"
              step="0.1"
              value={filterRating}
              onChange={(e) => setFilterRating(parseFloat(e.target.value))}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Room Type Filter */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Room Type</h3>
            <select
              className="w-full border rounded-lg p-2"
              value={filterRoomType}
              onChange={(e) => setFilterRoomType(e.target.value)}
            >
              <option value="">All</option>
              <option value="Normal">Normal</option>
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>

          {/* Amenities Filter */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Amenities</h3>
            <div className="grid grid-cols-1 gap-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setFilterAmenities(
                      e.target.checked
                        ? [...filterAmenities, "Spa"]
                        : filterAmenities.filter((a) => a !== "Spa")
                    )
                  }
                />
                <span>Spa</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setFilterAmenities(
                      e.target.checked
                        ? [...filterAmenities, "Swimming Pool"]
                        : filterAmenities.filter((a) => a !== "Swimming Pool")
                    )
                  }
                />
                <span>Swimming Pool</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setFilterAmenities(
                      e.target.checked
                        ? [...filterAmenities, "Gym"]
                        : filterAmenities.filter((a) => a !== "Gym")
                    )
                  }
                />
                <span>Gym</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setFilterAmenities(
                      e.target.checked
                        ? [...filterAmenities, "Fine Dining"]
                        : filterAmenities.filter((a) => a !== "Fine Dining")
                    )
                  }
                />
                <span>Fine Dining</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setFilterAmenities(
                      e.target.checked
                        ? [...filterAmenities, "Free WiFi"]
                        : filterAmenities.filter((a) => a !== "Free WiFi")
                    )
                  }
                />
                <span>Free WiFi</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setFilterAmenities(
                      e.target.checked
                        ? [...filterAmenities, "Business Center"]
                        : filterAmenities.filter((a) => a !== "Business Center")
                    )
                  }
                />
                <span>Business Center</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setFilterAmenities(
                      e.target.checked
                        ? [...filterAmenities, "Butler Service"]
                        : filterAmenities.filter((a) => a !== "Butler Service")
                    )
                  }
                />
                <span>Butler Service</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setFilterAmenities(
                      e.target.checked
                        ? [...filterAmenities, "Beachfront Access"]
                        : filterAmenities.filter(
                            (a) => a !== "Beachfront Access"
                          )
                    )
                  }
                />
                <span>Beachfront Access</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setFilterAmenities(
                      e.target.checked
                        ? [...filterAmenities, "Parking"]
                        : filterAmenities.filter((a) => a !== "Parking")
                    )
                  }
                />
                <span>Parking</span>
              </label>
            </div>
          </div>
        </div>
      </div>

     
      <AllFooter />
    </>
  );
}
