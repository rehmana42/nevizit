import React, { useState } from 'react';
import AllFooter from "../HomePage/Footer/AllFooter";
import NavTourist from "../Tourist/NavTourist";

export default function AllHospital() {
  const hospitals = [
    {
        name: "P. D. Hinduja Hospital & Medical Research Centre",
        address: "Mahim, Mumbai",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Anaesthesiology, Cardiology, Dermatology, Endocrinology, Gastroenterology, Bone Marrow Transplantation",
        icu: "Available",
        accreditation: "ISO-certified",
        description: "Provides a wide range of advanced medical specialties with emergency services and diagnostic labs."
  },
  
  {
        name: "Global Hospitals Group",
        address: "Parel, Mumbai",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Transplants, Cardiology, Oncology, Neurology",
        icu: "Available",
        accreditation: "NABH & JCI accredited",
        description: "Known for organ transplants and advanced care in multiple disciplines."
  },
  
  {
        name: "BSES Global Hospital",
        address: "Andheri West, Mumbai",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Surgery, Endocrinology, Cardiology, Orthopedics",
        icu: "Available",
        accreditation: "NABH certified",
        description: "Provides a range of healthcare services with a focus on surgical and cardiac treatments."
  },
  
  {
        name: "Matushree Hospital",
        address: "Kandivali West, Mumbai",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Surgery, Gynecology, Pediatrics, Internal Medicine",
        icu: "Available",
        accreditation: "NABH",
        description: "Focused on pediatric, gynecology, and general medical care."
  },
  
  {
        name: "Sugun Hospital",
        address: "Andheri East, Mumbai",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Surgery, Gynecology, Pediatrics, Internal Medicine",
        icu: "Available",
        accreditation: "N/A",
        description: "Offers a variety of general medical and surgical treatments."
  },
  
  {
        name: "Kokilaben Dhirubhai Ambani Hospital",
        address: "Andheri West, Mumbai",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Oncology, Cardiology, Neurology, Pediatric Surgery",
        icu: "Available",
        accreditation: "NABH, NABL, CAP-certified",
        description: "Specializes in oncology and pediatric surgery with international patient services."
  },
  
  {
        name: "Surana Sethia Hospital",
        address: "Chembur, Mumbai",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Cardiology, Oncology, Neurology, Urology, Nephrology",
        icu: "Available",
        accreditation: "NABH",
        description: "Multispecialty hospital providing comprehensive healthcare including oncology and cardiology."
  },
  
  {
        name: "Apex Hospitals",
        address: "Borivali West, Mumbai",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Orthopedics, Cardiology, Neurology, Gastroenterology",
        icu: "Available",
        accreditation: "NABH",
        description: "Offers a wide range of medical services with a focus on orthopedics and cardiology."
  },
  
 
  
  {
        name: "Riddhi Vinayak Critical Care & Cardiac Centre",
        address: "Malad West, Mumbai",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Cardiology, Critical Care",
        icu: "Available",
        accreditation: "NABH",
        description: "Specializes in cardiac care and critical treatment with dedicated ICU services."
  },
  
  {
        name: "Kokan Hospital",
        address: "Andheri East, Mumbai",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General and Multispecialty",
        icu: "Available",
        accreditation: "N/A",
        description: "Provides general and multispecialty healthcare services with emergency care."
  },
  
  {
        name: "Madhu Polyclinic & Nursing Home",
        address: "Bhandup West, Mumbai",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Medicine, Gynecology",
        icu: "Available",
        accreditation: "N/A",
        description: "Offers general medical and gynecology services with ICU availability."
  },
  
  {
        name: "Smt. S. R. Mehta & Sir K. P. Cardiac Institute",
        address: "King's Circle, Mumbai",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Cardiology",
        icu: "Available",
        accreditation: "N/A",
        description: "Dedicated to advanced cardiac care and surgery."
  },
  
  {
        name: "Parekh Eye Hospital",
        address: "Bandra West, Mumbai",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Ophthalmology",
        icu: "Not available",
        accreditation: "NABH",
        description: "Renowned for eye treatments including cataract surgeries."
  },
  
  {
        name: "Akshar Eye Clinic",
        address: "Kandivali West, Mumbai",
        image: "hhttps://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Ophthalmology",
        icu: "Not available",
        accreditation: "N/A",
        description: "Specializes in eye surgeries with state-of-the-art facilities."
  },
  
  {
        name: "Dr. Apte Maternity & Nursing Home",
        address: "Malad West, Mumbai",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Maternity, Nursing",
        icu: "Available",
        accreditation: "N/A",
        description: "Focused on maternity care with experienced doctors and support staff."
  },
  
  
  {
        name: "Mamta Maternity & Nursing Home",
        address: "Ghatkopar East, Mumbai",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Maternity, Nursing",
        icu: "Available",
        accreditation: "N/A",
        description: "Specializes in maternity care with experienced staff and well-equipped facilities."
  },
  
  {
        name: "Powai Poly Clinic & Hospital",
        address: "Powai, Mumbai",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Medicine, Surgery",
        icu: "Available",
        accreditation: "N/A",
        description: "Offers comprehensive medical services including general surgeries and diagnostic care."
  },
  
  {
        name: "Puranik Hospital",
        address: "Malad West, Mumbai",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Medicine, Maternity",
        icu: "Available",
        accreditation: "NABH",
        description: "Offers maternity and general medical care with modern facilities."
  },
 

  {
    name: "Khubchandani Hospital",
    address: "Gulmohar Road, Gulmohar Colony, Andheri West, Mumbai",
    image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
    type: "Private",
    speciality: "Multi-specialty",
    icu: "Available",
    accreditation: "NABH",
    description: "A multi-specialty hospital offering a wide range of treatments including ICU services."
  },
  {
    name: "Mahavir Medical Research Centre",
    address: "Pujya Shri Kanshiram Jain Smarak, Ahimsa Bhavan, Ahimsa Marg, Khar (West), Mumbai",
    image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
    type: "Private",
    speciality: "Research and General Medicine",
    icu: "Available",
    accreditation: "N/A",
    description: "Focuses on medical research as well as general medical care."
  },
  {
    name: "Mangala Nursing Home",
    address: "# 1, Symphony Appts., Azad Road, Gundavli, Andheri (East), Mumbai",
    image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
    type: "Private",
    speciality: "General Surgery",
    icu: "Not available",
    accreditation: "N/A",
    description: "A local nursing home providing general and minor surgical care."
  },
  {
    name: "Nandini Hospital",
    address: "S.V. Road, Above Uma Hotel, Pannalal Nagar, Borivali East, Mumbai",
    image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
    type: "Private",
    speciality: "Pediatrics",
    icu: "Not available",
    accreditation: "N/A",
    description: "A small hospital specializing in pediatric care."
  },
  {
    name: "Palkar Hospital",
    address: "No. 121, Goyal Shopping Arcade Opposite Station, Borivli West, Mumbai",
    image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
    type: "Private",
    speciality: "General Medicine and Surgery",
    icu: "Available",
    accreditation: "N/A",
    description: "A local hospital offering a variety of medical and surgical services."
  },
  {
    name: "Rachana Maternity Paediatric and Surgical Nursing Home",
    address: "A-3/4, Monarch Palace, Next To Saidev Hotel, J B Nagar, Andheri East, Mumbai",
    image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
    type: "Private",
    speciality: "Maternity and Pediatric Care",
    icu: "Not available",
    accreditation: "N/A",
    description: "Specializes in maternity and pediatric services."
  },
  {
    name: "Rohit Nursing Home",
    address: "Bldg.No.4, Block No.5-6, Shanti Nagar, S.V.Road, Dahisar (East), Mumbai",
    image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
    type: "Private",
    speciality: "General Medicine",
    icu: "Not available",
    accreditation: "N/A",
    description: "A private nursing home focused on general health care."
  },
  {
    name: "Sai Deep Nursing Home",
    address: "Christina Apartments, Near Kalina Police Chowky, Kalina Village Road, Kalina, Mumbai",
    image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
    type: "Private",
    speciality: "General Medicine and Minor Surgery",
    icu: "Not available",
    accreditation: "N/A",
    description: "Offers general medical and minor surgical services."
  },
//   eastern

    {
        name: "Shushrusha Hospital",
        address: "Vikhroli East, Mumbai - 400083",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Medicine, Pediatrics, Gynecology",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "Provides affordable healthcare with various specialties."
    },
    {
        name: "Raja Shree Shivray Hospital",
        address: "Mulund West, Mumbai - 400080",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Government",
        speciality: "General Surgery, Pediatrics, Internal Medicine",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "A hospital known for its commitment to providing essential healthcare services."
    },
    {
        name: "Aditi Hospital",
        address: "Mulund West, Mumbai - 400080",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Cardiology, Orthopedics, General Medicine",
        icu: "Available",
        accreditation: "NABH accredited",
        description: "Provides advanced healthcare services with a focus on patient care."
    },
    {
        name: "Surana Sethia Hospital",
        address: "Chembur, Mumbai - 400071",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Surgery, Cardiology, Urology",
        icu: "Available",
        accreditation: "NABH accredited",
        description: "Offers multi-specialty care with modern medical facilities."
    },
    {
        name: "Chintamani Hospital",
        address: "Chembur, Mumbai - 400071",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Medicine, Gynecology, Pediatrics",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "Provides a range of medical services with a patient-centered approach."
    },
    {
        name: "Shanthi Multispecialty Hospital",
        address: "Bhandup West, Mumbai - 400078",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Medicine, Orthopedics, Gynecology",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "Offers advanced healthcare services at affordable costs."
    },
    {
        name: "Ashirwad Heart Hospital",
        address: "Ghatkopar West, Mumbai - 400086",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Cardiology, General Medicine, Pediatrics",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "Specializes in cardiac care and other medical services."
    },
    {
        name: "Jeevan Jyot Hospital",
        address: "Chembur, Mumbai - 400071",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Medicine, Pediatrics, Gynecology",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "Provides essential medical services to the local community."
    },
    {
        name: "Raj Hospital",
        address: "Ghatkopar East, Mumbai - 400077",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Medicine, Orthopedics, Pediatrics",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "Known for offering various healthcare services, including emergency care."
    },
    {
        name: "Satyam Multispecialty Hospital",
        address: "Mulund West, Mumbai - 400080",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Medicine, Gynecology, Pediatrics",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "Offers a wide range of medical services to cater to the healthcare needs of the community."
    },
    {
        name: "Platinum Hospitals Mulund",
        address: "Mulund West, Mumbai - 400080",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Cardiology, Neurology, Orthopedics, General Surgery",
        icu: "Available",
        accreditation: "NABH accredited",
        description: "A super-specialty hospital with a focus on providing critical care and multi-specialty treatments."
    },
    {
        name: "Dr. Bhanushali Hospital and Center for Lung Surgery",
        address: "Mulund West, Mumbai - 400080",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Pulmonology, General Surgery",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "Specializes in advanced lung surgeries and general healthcare."
    },
    {
        name: "Rajawadi Hospital",
        address: "Ghatkopar East, Mumbai - 400077",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Government",
        speciality: "General Medicine, Surgery, Orthopedics, Gynecology",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "A large municipal hospital offering a wide range of medical services."
    },
    {
        name: "MT Agarwal Municipal General Hospital",
        address: "Mulund West, Mumbai - 400080",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Government",
        speciality: "General Medicine, Surgery, Gynecology",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "A government-run hospital providing essential healthcare services to the local population."
    },
    {
        name: "Disha Hospital",
        address: "Ghatkopar West, Mumbai - 400086",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Gynecology, Orthopedics, General Surgery",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "Offers various specialties with a patient-centered approach."
    },
    {
        name: "Pravara Hospital",
        address: "Vikhroli East, Mumbai - 400079",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Medicine, Pediatrics, Orthopedics",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "Provides multi-specialty care with a focus on affordability and accessibility."
    },
    {
        name: "Zenith Hospital",
        address: "Ghatkopar East, Mumbai - 400075",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Medicine, Pediatrics, Gynecology",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "A multi-specialty hospital with comprehensive healthcare services."
    },
    {
        name: "Sarvodaya Srishti Hospital",
        address: "Ghatkopar West, Mumbai - 400086",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Gynecology, Pediatrics, Orthopedics",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "Provides a wide range of medical treatments, including maternity and childcare services."
    },
    {
        name: "Vaishali Hospital",
        address: "Mulund West, Mumbai - 400080",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Gynecology, Pediatrics",
        icu: "Not available",
        accreditation: "Not NABH accredited",
        description: "A hospital known for its maternity and childcare services."
    },
    {
        name: "Tandon Hospital",
        address: "Chembur, Mumbai - 400071",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Medicine, Pediatrics, Orthopedics",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "A well-known hospital providing general healthcare services."
    },
    {
        name: "Carewell Hospital",
        address: "Kurla East, Mumbai - 400024",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Medicine, Pediatrics, Gynecology",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "Offers quality medical services, especially in general and pediatric care."
    },
    {
        name: "Seva Hospital",
        address: "Mulund East, Mumbai - 400081",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "General Medicine, Pediatrics, Gynecology",
        icu: "Available",
        accreditation: "Not NABH accredited",
        description: "Provides general medical services with a focus on affordability."
    },
    
        {
            name: "Godrej Memorial Hospital",
            address: "Pirojshanagar, Vikhroli East, Mumbai - 400079",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "General Medicine, Orthopedics, Pediatrics, Cardiology",
            icu: "Available",
            accreditation: "Not NABH accredited",
            description: "A multi-specialty hospital offering a range of healthcare services including cardiology and orthopedics."
        },
        {
            name: "Lotus Multispeciality Hospital",
            address: "Kurla West, Mumbai - 400070",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Gynecology, Pediatrics, Orthopedics, General Surgery",
            icu: "Available",
            accreditation: "Not NABH accredited",
            description: "Provides comprehensive healthcare services with specialties in gynecology and general surgery."
        },
        {
            name: "Central Hospital & Child Care Centre",
            address: "Kurla East, Mumbai - 400024",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Pediatrics, General Medicine",
            icu: "Not available",
            accreditation: "Not NABH accredited",
            description: "A hospital known for its pediatric care and general medical services."
        },
        {
            name: "Sai Hospital",
            address: "Chembur, Mumbai - 400071",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "General Medicine, Orthopedics, Gynecology",
            icu: "Available",
            accreditation: "Not NABH accredited",
            description: "A general hospital offering a range of medical services with a focus on orthopedics and gynecology."
        },
        {
            name: "Chandan Charitable Hospital",
            address: "Ghatkopar West, Mumbai - 400086",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "General Medicine, Gynecology, Pediatrics",
            icu: "Not available",
            accreditation: "Not NABH accredited",
            description: "A charitable hospital providing affordable healthcare services to the local community."
        },
        
          {
            name: "Hinduja Hospital",
            address: "Veer Savarkar Marg, Mahim, Mumbai",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Cardiology, Neurology, Orthopedics, Gastroenterology",
            icu: "Available",
            accreditation: "NABH",
            description: "A top multispecialty hospital offering advanced medical services, including cardiac and neurological care."
          },
          {
            name: "Breach Candy Hospital",
            address: "Bhulabhai Desai Road, Mumbai",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Cardiology, Oncology, Pediatrics, Orthopedics",
            icu: "Available",
            accreditation: "NABH",
            description: "One of Mumbai's premier hospitals, known for exceptional patient care and specialized services."
          },
          {
            name: "Holy Family Hospital",
            address: "Hill Road, Bandra West, Mumbai",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Cardiology, Gynecology, Pediatrics, Orthopedics",
            icu: "Available",
            accreditation: "NABH",
            description: "Provides comprehensive healthcare services with a focus on maternal and pediatric care."
          },
          {
            name: "S L Raheja Hospital",
            address: "Raheja Hospital Road, Mahim West, Mumbai",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Diabetology, Oncology, Cardiology, Urology",
            icu: "Available",
            accreditation: "NABH",
            description: "Specializes in advanced treatments for diabetes and oncology, offering holistic healthcare services."
          },
          {
            name: "PD Hinduja Hospital",
            address: "SVS Road, Mahim West, Mumbai",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Cardiology, Oncology, Neurology, Orthopedics",
            icu: "Available",
            accreditation: "NABH",
            description: "One of Mumbai's leading multispecialty hospitals known for its excellent cardiac and oncology departments."
          },
          {
            name: "Sir HN Reliance Foundation Hospital",
            address: "Charni Road, Mumbai",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Cardiology, Oncology, Nephrology, Orthopedics",
            icu: "Available",
            accreditation: "NABH",
            description: "A state-of-the-art hospital providing advanced treatments across multiple specialties."
          },
          {
            name: "Lilavati Hospital and Research Centre",
            address: "Bandra West, Mumbai",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Cardiology, Oncology, Neurology, Transplants",
            icu: "Available",
            accreditation: "NABH",
            description: "323-bed facility known for its cardiology and oncology departments and high-quality patient care."
          },
          {
            name: "Prince Aly Khan Hospital",
            address: "Mazgaon, Mumbai",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Oncology, Neurosurgery, Cardiology, Orthopedics",
            icu: "Available",
            accreditation: "NABH",
            description: "A renowned multispecialty hospital with specialized services in oncology and neurosurgery."
          },
          {
            name: "Bhatia Hospital",
            address: "Tardeo Road, Grant Road West, Mumbai",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Cardiology, Oncology, Neurology, Pediatrics",
            icu: "Available",
            accreditation: "NABH",
            description: "Offers advanced healthcare with a strong focus on cardiology, neurology, and pediatrics."
          },
          {
            name: "Tata Memorial Hospital",
            address: "Parel, Mumbai",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Government",
            speciality: "Oncology",
            icu: "Available",
            accreditation: "NABH",
            description: "A world-class hospital specializing in comprehensive cancer treatment and research."
          },
          {
            name: "Wockhardt Hospitals",
            address: "Mumbai Central, Mumbai",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Cardiology, Neurology, Transplants, Gastroenterology",
            icu: "Available",
            accreditation: "NABH",
            description: "Equipped with 100 ICU beds, offering advanced treatments and surgeries across various specialties."
          },
          {
            name: "Kohinoor Hospital",
            address: "Kurla West, Mumbai",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Cardiology, Orthopedics, Neurology, Gastroenterology",
            icu: "Available",
            accreditation: "NABH",
            description: "Known for its advanced cardiac and orthopedic care, with a focus on patient-centered treatments."
          },
          {
            name: "Jaslok Hospital & Research Centre",
            address: "15, Dr. Deshmukh Marg, Pedder Road, Mumbai - 400026",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Cardiology, Neurology, Oncology, Orthopedics",
            icu: "Available",
            accreditation: "NABH",
            description: "One of the leading multispecialty hospitals with advanced facilities."
          },
          {
            name: "Bombay Hospital & Medical Research Centre",
            address: "12, Marine Lines, Mumbai - 400020",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Cardiology, Oncology, Orthopedics, Neurology",
            icu: "Available",
            accreditation: "NABH",
            description: "Renowned hospital in the heart of Mumbai offering various healthcare services."
          },
          {
            name: "Hiranandani Hospital",
            address: "Hiranandani Gardens, Powai, Mumbai - 400076",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Neurology, Cardiology, Orthopedics, Urology",
            icu: "Available",
            accreditation: "NABH",
            description: "A hospital known for its state-of-the-art facilities and expert medical staff."
          },
          {
            name: "KEM Hospital",
            address: "Acharya Donde Marg, Parel, Mumbai - 400012",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Government",
            speciality: "General Medicine, Surgery, Cardiology, Oncology",
            icu: "Available",
            accreditation: "MCI",
            description: "One of Mumbai's largest public hospitals with extensive healthcare services."
          },
          {
            name: "S L Raheja Hospital",
            address: "Raheja Hospital Road, Mahim West, Mumbai - 400016",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Diabetes, Cardiology, Oncology, Gastroenterology",
            icu: "Available",
            accreditation: "NABH",
            description: "A multispeciality hospital with focus on diabetes care and other specialties."
          },
          {
            name: "Global Hospital Mumbai",
            address: "35, Dr. E Borges Road, Opp Shirodkar High School, Parel, Mumbai - 400012",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Liver Transplant, Hepatology, Oncology, Gastroenterology",
            icu: "Available",
            accreditation: "NABH",
            description: "Specializes in liver care and offers a wide range of super-specialty services."
          },
          {
            name: "Breach Candy Hospital",
            address: "60 A, Bhulabhai Desai Road, Mumbai - 400026",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Cardiology, Oncology, Orthopedics, Neurology",
            icu: "Available",
            accreditation: "NABH",
            description: "Known for its excellent patient care and modern medical facilities."
          },
          {
            name: "Saifee Hospital",
            address: "15/17, Maharshi Karve Marg, Charni Road, Mumbai - 400004",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Cardiology, Orthopedics, Neurology, Gastroenterology",
            icu: "Available",
            accreditation: "NABH",
            description: "A well-established hospital known for its multispecialty services."
          },
          {
            name: "Lilavati Hospital & Research Centre",
            address: "A-791, Bandra Reclamation, Bandra West, Mumbai - 400050",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Cardiology, Oncology, Neurology, Urology",
            icu: "Available",
            accreditation: "NABH",
            description: "Offers a range of medical services with a focus on patient care and research."
          },
          {
            name: "Tata Memorial Hospital",
            address: "Dr. E Borges Road, Parel, Mumbai - 400012",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Government",
            speciality: "Oncology, Radiology, Chemotherapy, Surgery",
            icu: "Available",
            accreditation: "NABH",
            description: "A premier cancer treatment hospital in India."
          },
          {
            name: "Holy Family Hospital",
            address: "St Andrew's Road, Bandra West, Mumbai - 400050",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Cardiology, Oncology, Gastroenterology, Neurology",
            icu: "Available",
            accreditation: "NABH",
            description: "Known for quality patient care and medical services in multiple specialties."
          },
          {
            name: "Nanavati Super Speciality Hospital",
            address: "S V Road, Vile Parle West, Mumbai - 400056",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Cardiology, Oncology, Neurology, Urology",
            icu: "Available",
            accreditation: "NABH",
            description: "One of the leading super-specialty hospitals with top-notch facilities."
          },
          {
            name: "Fortis Hospital Mulund",
            address: "Mulund Goregaon Link Road, Mulund West, Mumbai - 400078",
            image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
            type: "Private",
            speciality: "Cardiology, Neurology, Oncology, Orthopedics",
            icu: "Available",
            accreditation: "NABH",
            description: "A leading multispecialty hospital with advanced medical services."
        },

        {
          name: "Bhaktivedanta Hospital",
          address: "Bhaktivedanta Swami Marg, Mira Road, Mumbai - 401107",
          image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
          type: "Private",
          speciality: "Cardiology, Orthopedics, Neurology, Urology",
          icu: "Available",
          accreditation: "NABH",
          description: "A multispecialty hospital offering various healthcare services with a holistic approach."
        },
        {
          name: "Prince Aly Khan Hospital",
          address: "Agroad Road, Byculla, Mumbai - 400008",
          image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
          type: "Private",
          speciality: "Oncology, Cardiology, Neurology, Gastroenterology",
          icu: "Available",
          accreditation: "NABH",
          description: "Offers a range of medical services with a focus on oncology care."
        },
        {
          name: "Sushrut Hospital & Research Centre",
          address: "Vikhroli Parksite, Mumbai - 400079",
          image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
          type: "Private",
          speciality: "Cardiology, Neurology, Gastroenterology, Orthopedics",
          icu: "Available",
          accreditation: "NABH",
          description: "A multispecialty hospital offering a variety of medical services."
        },
        {
          name: "Cumballa Hill Hospital",
          address: "Kemps Corner, Mumbai - 400026",
          image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
          type: "Private",
          speciality: "Cardiology, Neurology, Orthopedics, Urology",
          icu: "Available",
          accreditation: "NABH",
          description: "A leading multispecialty hospital offering various healthcare services."
      },
      {
        name: "LTMG Hospital (Sion Hospital)",
        address: "Dr. Babasaheb Ambedkar Road, Sion West, Mumbai - 400022",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Government",
        speciality: "General Medicine, Cardiology, Neurology, Orthopedics",
        icu: "Available",
        accreditation: "MCI",
        description: "A large public hospital offering a range of services to the people of Mumbai."
      },
      {
        name: "Bhatia Hospital",
        address: "Tardeo Road, Grant Road West, Mumbai - 400007",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Cardiology, Neurology, Gastroenterology, Orthopedics",
        icu: "Available",
        accreditation: "NABH",
        description: "A multispecialty hospital providing excellent healthcare services."
      },
      {
        name: "SRCC Children's Hospital",
        address: "Haji Ali Park, Mahalaxmi, Mumbai - 400034",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Pediatrics, Cardiology, Neurology, Orthopedics",
        icu: "Available",
        accreditation: "NABH",
        description: "A leading hospital dedicated to pediatric care and specialized treatments."
      },
      {
        name: "Shushrusha Citizens' Cooperative Hospital",
        address: "C D Barfiwala Marg, Andheri West, Mumbai - 400058",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Cardiology, Neurology, Orthopedics, Urology",
        icu: "Available",
        accreditation: "NABH",
        description: "Offers a range of healthcare services to the local community."
      },
      {
        name: "Masina Hospital",
        address: "Sant Savata Mali Marg, Byculla East, Mumbai - 400027",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Psychiatry, Cardiology, Orthopedics, Neurology",
        icu: "Available",
        accreditation: "NABH",
        description: "A multispecialty hospital known for psychiatric care and other medical services."
      },
      {
        name: "Bombay City Eye Institute & Research Centre",
        address: "Marine Lines, Mumbai - 400020",
        image: "https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?t=st=1726506708~exp=1726510308~hmac=696799663b4e0b5883bb1951e44f0541ab47b421d06962ccd816675bfffbd753&w=740",
        type: "Private",
        speciality: "Ophthalmology",
        icu: "Not Available",
        accreditation: "NABH",
        description: "An eye care specialty hospital with state-of-the-art ophthalmic treatments."
      }
      
        
        
      
      ];
        
       const [filterType, setFilterType] = useState("");
  const [filterSpeciality, setFilterSpeciality] = useState("");
  const [filterICU, setFilterICU] = useState(false);

  // State for popup visibility
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle filtering logic
  const filteredHospitals = hospitals.filter(hospital => {
    const matchesType = filterType === "" || hospital.type === filterType;
    const matchesSpeciality = filterSpeciality === "" || hospital.speciality.includes(filterSpeciality);
    const matchesICU = !filterICU || hospital.icu === "Available";

    return matchesType && matchesSpeciality && matchesICU;
  });

  // Function to handle Wishlist button click
  const handleWishlistClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
     // Hide popup after 3 seconds
  };

  return (
    <>
      <NavTourist />

      <div className="flex flex-col md:flex-row p-6 space-x-6">
        {/* Left Side: Hospital Information */}
        <div className="flex-1 space-y-6 overflow-y-auto h-[calc(100vh-100px)]">
          {filteredHospitals.map((hospital, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row p-6 border border-gray-200">
              {/* Hospital Info */}
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-48 h-48 object-cover rounded-lg shadow-md"
                />
              
              </div>
              <div className="flex-1 md:ml-6">
                <h3 className="text-2xl font-semibold mb-2">{hospital.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{hospital.address}</p>
                <p className="text-md text-gray-700 mb-2"><strong>Type:</strong> {hospital.type}</p>
                <p className="text-md text-gray-700 mb-2"><strong>Speciality:</strong> {hospital.speciality}</p>
                <p className="text-md text-gray-700 mb-2"><strong>ICU Availability:</strong> {hospital.icu}</p>
                <p className="text-md text-gray-700 mb-2"><strong>Accreditation:</strong> {hospital.accreditation}</p>
                <p className="text-md text-gray-700 mb-4"><strong>Description:</strong> {hospital.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Sticky Filter Section */}
        <div className="w-full h-[540px] md:w-1/3 bg-white shadow-lg p-6 rounded-lg border border-gray-200 sticky top-20 self-start">
          <h2 className="text-2xl font-semibold mb-4">Filter Hospitals</h2>

          {/* Type Filter */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Type</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="type" className="mr-2" onChange={() => setFilterType("Government")} /> Government
              </label>
              <label className="flex items-center">
                <input type="radio" name="type" className="mr-2" onChange={() => setFilterType("Private")} /> Private
              </label>
              <label className="flex items-center">
                <input type="radio" name="type" value="" className="mr-2" onChange={() => setFilterType("")} /> All
              </label>
            </div>
          </div>

          {/* Speciality Filter */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Speciality</h3>
            <select className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterSpeciality}
              onChange={(e) => setFilterSpeciality(e.target.value)}>
              <option value="">All Specialities</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Gastroenterology">Gastroenterology</option>
              <option value="Oncology">Oncology</option>
              <option value="Nephrology">Nephrology</option>
              <option value="Pulmonology">Pulmonology</option>
              <option value="Gynecology">Gynecology</option>
              <option value="Urology">Urology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Ophthalmology">Ophthalmology</option>
              <option value="Endocrinology">Endocrinology</option>
              <option value="Rheumatology">Rheumatology</option>
              <option value="Psychiatry">Psychiatry</option>
              <option value="Plastic Surgery">Plastic Surgery</option>
              <option value="ENT">ENT (Ear, Nose, and Throat)</option>
              <option value="Radiology">Radiology</option>
              <option value="Anesthesiology">Anesthesiology</option>
              {/* Add more specialities here */}
            </select>
          </div>

          {/* ICU Availability Filter */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">ICU Availability</h3>
            <label className="flex items-center">
              <input type="checkbox" name="icu" className="mr-2" checked={filterICU}
                onChange={(e) => setFilterICU(e.target.checked)} /> Available
            </label>
          </div>
        </div>
      </div>

     
      <AllFooter />
    </>
  );
}







