import React, { useState } from 'react';
import AllFooter from "../HomePage/Footer/AllFooter";
import NavTourist from "../Tourist/NavTourist";

export default function AllRestaurant() {


const restaurants = [
    {
        name: "Spice Garden",
        address: "Colaba Causeway, Mumbai - 400005",
        image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
        type: "Fine Dining",
        cuisine: "Indian",
        specialty: "Vegetarian",
        rating: 4.5,
        priceRange: "Expensive",
        location: "Colaba",
        description: "Traditional Indian food with a modern twist."
      },
      {
        name: "Sushi Hub",
        address: "Veer Nariman Road, Mumbai - 400020",
        image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
        type: "Casual Dining",
        cuisine: "Japanese",
        specialty: "Seafood",
        rating: 4.6,
        priceRange: "Expensive",
        location: "Churchgate",
        description: "Fresh sushi and sashimi served in a chic setting."
      },
      {
        name: "Taco Fiesta",
        address: "Mint Road, Mumbai - 400001",
        image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
        type: "Fast Casual",
        cuisine: "Mexican",
        specialty: "Vegetarian",
        rating: 4.2,
        priceRange: "Moderate",
        location: "Fort",
        description: "Authentic Mexican street food with a modern flair."
      },
      {
        name: "Burger Shack",
        address: "Marine Drive, Mumbai - 400021",
        image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
        type: "Fast Food",
        cuisine: "American",
        specialty: "Steakhouse",
        rating: 4.0,
        priceRange: "Cheap",
        location: "Marine Lines",
        description: "Juicy burgers made from premium cuts of meat."
      },
      {
        name: "Thai Delight",
        address: "Kala Ghoda, Mumbai - 400001",
        image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
        type: "Fine Dining",
        cuisine: "Thai",
        specialty: "Vegan",
        rating: 4.7,
        priceRange: "Expensive",
        location: "Kala Ghoda",
        description: "An elegant Thai restaurant offering vegan delicacies."
      },
      {
        name: "Bistro Francais",
        address: "Ballard Estate, Mumbai - 400038",
        image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
        type: "Cafe",
        cuisine: "French",
        specialty: "Seafood",
        rating: 4.3,
        priceRange: "Moderate",
        location: "Fort",
        description: "Cozy French bistro serving fresh seafood and pastries."
      },
      
        {
          name: "The Indian Kitchen",
          address: "Colaba, Mumbai - 400005",
          image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
          type: "Fine Dining",
          cuisine: "Indian",
          specialty: "Vegetarian",
          rating: 4.6,
          priceRange: "Expensive",
          location: "Colaba",
          description: "Traditional Indian cuisine in an upscale ambiance."
        },
        {
          name: "Chopsticks Paradise",
          address: "Marine Lines, Mumbai - 400020",
          image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
          type: "Casual Dining",
          cuisine: "Chinese",
          specialty: "Seafood",
          rating: 4.3,
          priceRange: "Moderate",
          location: "Marine Lines",
          description: "A cozy place offering traditional Chinese seafood dishes."
        },
        {
          name: "Little Italy",
          address: "Colaba, Mumbai - 400005",
          image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
          type: "Fine Dining",
          cuisine: "Italian",
          specialty: "Vegan",
          rating: 4.5,
          priceRange: "Expensive",
          location: "Colaba",
          description: "Authentic Italian dishes made with fresh vegan ingredients."
        },
        {
          name: "La Mexican Fiesta",
          address: "Churchgate, Mumbai - 400020",
          image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
          type: "Fast Casual",
          cuisine: "Mexican",
          specialty: "Vegetarian",
          rating: 4.2,
          priceRange: "Moderate",
          location: "Churchgate",
          description: "Casual Mexican food with a variety of vegetarian options."
        },
        {
          name: "Steak House Grill",
          address: "Marine Lines, Mumbai - 400020",
          image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
          type: "Fine Dining",
          cuisine: "American",
          specialty: "Steakhouse",
          rating: 4.7,
          priceRange: "Expensive",
          location: "Marine Lines",
          description: "Top-quality steaks grilled to perfection."
        },
        {
          name: "Sushi World",
          address: "Fort, Mumbai - 400001",
          image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
          type: "Casual Dining",
          cuisine: "Japanese",
          specialty: "Seafood",
          rating: 4.8,
          priceRange: "Expensive",
          location: "Fort",
          description: "An authentic Japanese sushi experience in the heart of Mumbai."
        },
        {
          name: "Vegan Haven",
          address: "Kala Ghoda, Mumbai - 400001",
          image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
          type: "Cafe",
          cuisine: "Indian",
          specialty: "Vegan",
          rating: 4.4,
          priceRange: "Moderate",
          location: "Kala Ghoda",
          description: "A trendy vegan cafe offering a variety of Indian and fusion dishes."
        },
        {
          name: "Thai Street Eats",
          address: "Colaba, Mumbai - 400005",
          image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
          type: "Fast Casual",
          cuisine: "Thai",
          specialty: "Vegetarian",
          rating: 4.1,
          priceRange: "Moderate",
          location: "Colaba",
          description: "Street-style Thai food with vegetarian-friendly options."
        },
        {
          name: "Le French Bakery",
          address: "Kala Ghoda, Mumbai - 400001",
          image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
          type: "Cafe",
          cuisine: "French",
          specialty: "Pastries",
          rating: 4.5,
          priceRange: "Moderate",
          location: "Kala Ghoda",
          description: "A charming cafe known for fresh French pastries and coffee."
        },
        {
          name: "Spicy Affair",
          address: "Fort, Mumbai - 400001",
          image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
          type: "Fine Dining",
          cuisine: "Indian",
          specialty: "Vegetarian",
          rating: 4.7,
          priceRange: "Expensive",
          location: "Fort",
          description: "An elegant restaurant offering flavorful Indian dishes."
        },
        {
          name: "Mexicana Express",
          address: "Churchgate, Mumbai - 400020",
          image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
          type: "Fast Food",
          cuisine: "Mexican",
          specialty: "Vegetarian",
          rating: 4.0,
          priceRange: "Cheap",
          location: "Churchgate",
          description: "Quick Mexican meals with fresh vegetarian ingredients."
        },
        {
          name: "Saffron Lounge",
          address: "Marine Lines, Mumbai - 400020",
          image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
          type: "Fine Dining",
          cuisine: "Indian",
          specialty: "Vegetarian",
          rating: 4.8,
          priceRange: "Expensive",
          location: "Marine Lines",
          description: "High-end Indian restaurant with an extensive vegetarian menu."
        },
        {
          name: "Zen Garden",
          address: "Fort, Mumbai - 400001",
          image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
          type: "Fine Dining",
          cuisine: "Chinese",
          specialty: "Vegan",
          rating: 4.5,
          priceRange: "Expensive",
          location: "Fort",
          description: "A luxurious vegan restaurant specializing in Chinese dishes."
        },
        {
            name: "Barbeque Nation",
            address: "Colaba, Mumbai - 400005",
            image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
            type: "Buffet",
            cuisine: "Indian",
            specialty: "Seafood",
            rating: 4.5,
            priceRange: "Moderate",
            location: "Colaba",
            description: "Popular for its live grill concept and wide variety of seafood."
          },
          {
            name: "The French Table",
            address: "Kala Ghoda, Mumbai - 400001",
            image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
            type: "Fine Dining",
            cuisine: "French",
            specialty: "Steakhouse",
            rating: 4.9,
            priceRange: "Expensive",
            location: "Kala Ghoda",
            description: "High-end French dining with premium steak offerings."
          },
          {
            name: "Biryani Factory",
            address: "Churchgate, Mumbai - 400020",
            image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
            type: "Casual Dining",
            cuisine: "Indian",
            specialty: "Seafood",
            rating: 4.1,
            priceRange: "Moderate",
            location: "Churchgate",
            description: "Authentic biryani with a variety of seafood options."
          },
          {
            name: "Tandoor Tales",
            address: "Marine Lines, Mumbai - 400020",
            image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
            type: "Casual Dining",
            cuisine: "Indian",
            specialty: "Steakhouse",
            rating: 4.3,
            priceRange: "Moderate",
            location: "Marine Lines",
            description: "Tandoori specialties with an emphasis on grilled meats."
          },
          {
            name: "Pizza Palace",
            address: "Colaba, Mumbai - 400005",
            image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
            type: "Fast Casual",
            cuisine: "Italian",
            specialty: "Vegan",
            rating: 4.4,
            priceRange: "Moderate",
            location: "Colaba",
            description: "Vegan-friendly pizzas made with fresh, organic ingredients."
          },
          
            {
              name: "The Kebab Factory",
              address: "Marine Lines, Mumbai - 400020",
              image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
              type: "Fine Dining",
              cuisine: "Indian",
              specialty: "Seafood",
              rating: 4.6,
              priceRange: "Expensive",
              location: "Marine Lines",
              description: "Specializes in a variety of kebabs and seafood dishes."
            },
            {
              name: "Dim Sum House",
              address: "Fort, Mumbai - 400001",
              image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
              type: "Casual Dining",
              cuisine: "Chinese",
              specialty: "Vegetarian",
              rating: 4.2,
              priceRange: "Moderate",
              location: "Fort",
              description: "Offers a wide range of delicious dim sums and Chinese dishes."
            },
            {
              name: "The Sushi Bar",
              address: "Churchgate, Mumbai - 400020",
              image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
              type: "Casual Dining",
              cuisine: "Japanese",
              specialty: "Seafood",
              rating: 4.4,
              priceRange: "Moderate",
              location: "Churchgate",
              description: "Renowned for its fresh sushi and sashimi."
            },
            {
              name: "Taco Town",
              address: "Colaba, Mumbai - 400005",
              image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
              type: "Fast Casual",
              cuisine: "Mexican",
              specialty: "Vegetarian",
              rating: 4.1,
              priceRange: "Cheap",
              location: "Colaba",
              description: "Offers quick and tasty Mexican tacos with plenty of vegetarian options."
            },
            {
              name: "The Pasta Bar",
              address: "Kala Ghoda, Mumbai - 400001",
              image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
              type: "Casual Dining",
              cuisine: "Italian",
              specialty: "Vegetarian",
              rating: 4.3,
              priceRange: "Moderate",
              location: "Kala Ghoda",
              description: "Casual Italian dining specializing in fresh pasta dishes."
            },
            {
              name: "Bistro Americano",
              address: "Marine Lines, Mumbai - 400020",
              image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
              type: "Casual Dining",
              cuisine: "American",
              specialty: "Steakhouse",
              rating: 4.0,
              priceRange: "Moderate",
              location: "Marine Lines",
              description: "A laid-back spot for hearty American steaks and burgers."
            },
            {
              name: "The Vegan Corner",
              address: "Fort, Mumbai - 400001",
              image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
              type: "Cafe",
              cuisine: "Indian",
              specialty: "Vegan",
              rating: 4.2,
              priceRange: "Moderate",
              location: "Fort",
              description: "A trendy cafe offering a variety of vegan Indian dishes."
            },
            {
              name: "The French Bistro",
              address: "Kala Ghoda, Mumbai - 400001",
              image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
              type: "Fine Dining",
              cuisine: "French",
              specialty: "Seafood",
              rating: 4.7,
              priceRange: "Expensive",
              location: "Kala Ghoda",
              description: "Upscale French dining with a focus on seafood."
            },
            {
              name: "The Vegan Cafe",
              address: "Colaba, Mumbai - 400005",
              image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
              type: "Cafe",
              cuisine: "Indian",
              specialty: "Vegan",
              rating: 4.3,
              priceRange: "Moderate",
              location: "Colaba",
              description: "A cozy cafe offering a wide range of vegan Indian options."
            },
            {
              name: "Tandoori Nights",
              address: "Churchgate, Mumbai - 400020",
              image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
              type: "Fine Dining",
              cuisine: "Indian",
              specialty: "Seafood",
              rating: 4.4,
              priceRange: "Expensive",
              location: "Churchgate",
              description: "Specializes in tandoori dishes with a variety of seafood options."
            },
            
                {
                  name: "The Pasta Place",
                  address: "Fort, Mumbai - 400001",
                  image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                  type: "Casual Dining",
                  cuisine: "Italian",
                  specialty: "Seafood",
                  rating: 4.3,
                  priceRange: "Moderate",
                  location: "Fort",
                  description: "Casual dining specializing in seafood pasta dishes."
                },
                {
                  name: "The Burger Joint",
                  address: "Kala Ghoda, Mumbai - 400001",
                  image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                  type: "Fast Casual",
                  cuisine: "American",
                  specialty: "Vegetarian",
                  rating: 4.0,
                  priceRange: "Cheap",
                  location: "Kala Ghoda",
                  description: "Quick, delicious burgers with a variety of vegetarian options."
                },
                {
                    name: "Pizzeria by the Bay",
                    address: "Marine Drive, Mumbai - 400021",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Takeaway",
                    cuisine: "Italian",
                    specialty: "Seafood",
                    rating: 4.3,
                    priceRange: "Expensive",
                    location: "Marine Drive",
                    description: "Delicious pizzas and pasta with a seaside view."
                },
                {
                    name: "The Bombay Canteen",
                    address: "Kamala Mills, Lower Parel, Mumbai - 400013",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Indian",
                    specialty: "Vegetarian",
                    rating: 4.5,
                    priceRange: "Moderate",
                    location: "Lower Parel",
                    description: "Innovative Indian cuisine with a modern twist."
                },
                {
                    name: "The Bagel Shop",
                    address: "Linking Road, Bandra, Mumbai - 400050",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Cafe",
                    cuisine: "American",
                    specialty: "Vegetarian",
                    rating: 4.2,
                    priceRange: "Moderate",
                    location: "Bandra",
                    description: "Cozy cafe offering a range of bagels and sandwiches."
                },
                {
                    name: "Bastian",
                    address: "Todi Mill, Lower Parel, Mumbai - 400013",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fine Dining",
                    cuisine: "Italian",
                    specialty: "Seafood",
                    rating: 4.6,
                    priceRange: "Expensive",
                    location: "Lower Parel",
                    description: "Upscale dining with a focus on seafood and Italian delicacies."
                },
                {
                    name: "Cafe Mondegar",
                    address: "Colaba, Mumbai - 400005",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Pub",
                    cuisine: "Indian",
                    specialty: "Seafood",
                    rating: 4.1,
                    priceRange: "Moderate",
                    location: "Colaba",
                    description: "A lively pub offering a mix of Indian cuisine and seafood with a vintage vibe."
                },
                {
                    name: "Yazdani Bakery",
                    address: "Fort, Mumbai - 400001",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Cafe",
                    cuisine: "Indian",
                    specialty: "Vegetarian",
                    rating: 4.4,
                    priceRange: "Cheap",
                    location: "Fort",
                    description: "Classic bakery with a variety of breads and pastries."
                },
                {
                    name: "Shao",
                    address: "Radisson Blu, Mumbai - 400020",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fine Dining",
                    cuisine: "Chinese",
                    specialty: "Seafood",
                    rating: 4.7,
                    priceRange: "Expensive",
                    location: "Bandra",
                    description: "Elegant restaurant specializing in authentic Chinese seafood dishes."
                },
                {
                    name: "Bistro 1",
                    address: "Juhu, Mumbai - 400049",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "French",
                    specialty: "Vegetarian",
                    rating: 4.0,
                    priceRange: "Moderate",
                    location: "Juhu",
                    description: "Charming bistro offering French cuisine in a relaxed setting."
                },
                {
                    name: "The Irish House",
                    address: "Bandra, Mumbai - 400050",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Pub",
                    cuisine: "American",
                    specialty: "Vegetarian",
                    rating: 4.3,
                    priceRange: "Moderate",
                    location: "Bandra",
                    description: "Lively pub offering a range of American comfort food and drinks."
                },
                {
                    name: "Prithvi Cafe",
                    address: "Juhu, Mumbai - 400049",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Cafe",
                    cuisine: "Indian",
                    specialty: "Vegetarian",
                    rating: 4.2,
                    priceRange: "Moderate",
                    location: "Juhu",
                    description: "Popular cafe known for its vibrant atmosphere and delicious vegetarian fare."
                },
                {
                    name: "Kofuku",
                    address: "Juhu, Mumbai - 400049",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Japanese",
                    specialty: "Seafood",
                    rating: 4.4,
                    priceRange: "Moderate",
                    location: "Juhu",
                    description: "Japanese restaurant offering a range of sushi and seafood dishes."
                },
                {
                    name: "Hakkasan",
                    address: "Bandra, Mumbai - 400050",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fine Dining",
                    cuisine: "Chinese",
                    specialty: "Seafood",
                    rating: 4.8,
                    priceRange: "Expensive",
                    location: "Bandra",
                    description: "High-end Chinese restaurant with a focus on luxurious dining experiences."
                },
                {
                    name: "Olive Bar & Kitchen",
                    address: "Bandra, Mumbai - 400050",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fine Dining",
                    cuisine: "Mediterranean",
                    specialty: "Vegetarian",
                    rating: 4.6,
                    priceRange: "Expensive",
                    location: "Bandra",
                    description: "Chic restaurant offering Mediterranean-inspired dishes with a focus on fresh ingredients."
                },
                {
                    name: "The Mumbai Canteen",
                    address: "Lower Parel, Mumbai - 400013",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Indian",
                    specialty: "Seafood",
                    rating: 4.5,
                    priceRange: "Moderate",
                    location: "Lower Parel",
                    description: "Creative Indian dishes served in a casual and vibrant setting."
                },
                {
                    name: "Chili's",
                    address: "Lower Parel, Mumbai - 400013",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Mexican",
                    specialty: "Vegetarian",
                    rating: 4.1,
                    priceRange: "Moderate",
                    location: "Lower Parel",
                    description: "Popular chain serving up hearty Mexican fare and cocktails."
                },
                {
                    name: "Pondicherry Cafe",
                    address: "Bandra, Mumbai - 400050",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Indian",
                    specialty: "Vegetarian",
                    rating: 4.3,
                    priceRange: "Moderate",
                    location: "Bandra",
                    description: "Indian cuisine with a Southern twist and a vibrant atmosphere."
                },
                {
                    name: "Mikusu",
                    address: "Juhu, Mumbai - 400049",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Japanese",
                    specialty: "Seafood",
                    rating: 4.2,
                    priceRange: "Moderate",
                    location: "Juhu",
                    description: "Casual spot known for its sushi and Japanese comfort food."
                },
                {
                    name: "The Bombay Brasserie",
                    address: "Bandra, Mumbai - 400050",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Indian",
                    specialty: "Seafood",
                    rating: 4.4,
                    priceRange: "Moderate",
                    location: "Bandra",
                    description: "A modern Indian restaurant offering an array of regional dishes."
                },
                {
                    name: "Bademiya",
                    address: "Colaba, Mumbai - 400005",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fast Food",
                    cuisine: "Indian",
                    specialty: "Vegetarian",
                    rating: 4.0,
                    priceRange: "Cheap",
                    location: "Colaba",
                    description: "Famous for its delicious street food and kebabs."
                },
                {
                    name: "Smoke House Deli",
                    address: "Bandra, Mumbai - 400050",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "American",
                    specialty: "Vegetarian",
                    rating: 4.2,
                    priceRange: "Moderate",
                    location: "Bandra",
                    description: "Quaint spot known for its deli sandwiches and comfort food."
                },
                {
                    name: "Siam Trading Co.",
                    address: "Juhu, Mumbai - 400049",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Thai",
                    specialty: "Seafood",
                    rating: 4.3,
                    priceRange: "Moderate",
                    location: "Juhu",
                    description: "Authentic Thai restaurant offering a range of flavorful seafood dishes."
                },
                {
                    name: "The Pizza Express",
                    address: "Bandra, Mumbai - 400050",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Italian",
                    specialty: "Vegetarian",
                    rating: 4.1,
                    priceRange: "Moderate",
                    location: "Bandra",
                    description: "Popular pizzeria known for its wide variety of pizzas and Italian dishes."
                },
                {
                    name: "Kailash Parbat",
                    address: "Colaba, Mumbai - 400005",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Indian",
                    specialty: "Vegetarian",
                    rating: 4.2,
                    priceRange: "Moderate",
                    location: "Colaba",
                    description: "Renowned for its North Indian vegetarian cuisine and street food."
                },
                {
                    name: "The Deli by the Greens",
                    address: "Bandra, Mumbai - 400050",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Cafe",
                    cuisine: "American",
                    specialty: "Vegetarian",
                    rating: 4.3,
                    priceRange: "Moderate",
                    location: "Bandra",
                    description: "Charming deli offering a variety of sandwiches, salads, and fresh juices."
                },
                {
                    name: "The Fatty Bao",
                    address: "Lower Parel, Mumbai - 400013",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Japanese",
                    specialty: "Vegetarian",
                    rating: 4.4,
                    priceRange: "Moderate",
                    location: "Lower Parel",
                    description: "Modern Japanese restaurant specializing in baos and other Asian delights."
                },
                {
                    name: "The Table",
                    address: "Colaba, Mumbai - 400005",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fine Dining",
                    cuisine: "European",
                    specialty: "Vegetarian",
                    rating: 4.7,
                    priceRange: "Expensive",
                    location: "Colaba",
                    description: "Elegant restaurant offering a range of European dishes with a focus on fresh ingredients."
                },
                {
                    name: "Café Coffee Day",
                    address: "Bandra, Mumbai - 400050",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Cafe",
                    cuisine: "American",
                    specialty: "Vegetarian",
                    rating: 4.0,
                    priceRange: "Cheap",
                    location: "Bandra",
                    description: "Popular cafe chain known for its coffee and light bites."
                },
                {
                    name: "Silver Beach Cafe",
                    address: "Juhu, Mumbai - 400049",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Italian",
                    specialty: "Vegetarian",
                    rating: 4.2,
                    priceRange: "Moderate",
                    location: "Juhu",
                    description: "Relaxed cafe with a seaside view serving Italian and continental dishes."
                },
                {
                    name: "Khyber",
                    address: "Fort, Mumbai - 400001",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fine Dining",
                    cuisine: "Indian",
                    specialty: "Seafood",
                    rating: 4.5,
                    priceRange: "Expensive",
                    location: "Fort",
                    description: "High-end restaurant offering a luxurious Indian dining experience."
                },
                {
                    name: "Floyd's",
                    address: "Bandra, Mumbai - 400050",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Pub",
                    cuisine: "American",
                    specialty: "Vegetarian",
                    rating: 4.3,
                    priceRange: "Moderate",
                    location: "Bandra",
                    description: "Chilled pub atmosphere with a variety of American comfort food."
                },
                {
                    name: "Seafood Delight",
                    address: "Marine Drive, Mumbai - 400021",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fine Dining",
                    cuisine: "Italian",
                    specialty: "Seafood",
                    rating: 4.7,
                    priceRange: "Expensive",
                    location: "Marine Drive",
                    description: "Elegant spot for seafood lovers with a chic ambiance and seaside view."
                  },
                  {
                    name: "Café Marquee",
                    address: "Lower Parel, Mumbai - 400013",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Cafe",
                    cuisine: "French",
                    specialty: "Vegetarian",
                    rating: 4.4,
                    priceRange: "Expensive",
                    location: "Lower Parel",
                    description: "Charming café serving delightful French vegetarian dishes in a cozy setting."
                  },
                  {
                    name: "Spice Junction",
                    address: "Worli, Mumbai - 400030",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Indian",
                    specialty: "Vegetarian",
                    rating: 3.7,
                    priceRange: "Moderate",
                    location: "Worli",
                    description: "Casual spot offering a wide range of delicious vegetarian Indian dishes."
                  },
                  {
                    name: "Noodles & More",
                    address: "Dadar, Mumbai - 400028",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fast Casual",
                    cuisine: "Chinese",
                    specialty: "Seafood",
                    rating: 4.3,
                    priceRange: "Expensive",
                    location: "Dadar",
                    description: "Quick and tasty seafood dishes with a focus on Chinese flavors."
                  },
                  {
                    name: "Taco Fiesta",
                    address: "Prabhadevi, Mumbai - 400025",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fast Food",
                    cuisine: "Mexican",
                    specialty: "Vegetarian",
                    rating: 2.8,
                    priceRange: "Cheap",
                    location: "Prabhadevi",
                    description: "Quick Mexican bites with a variety of vegetarian options."
                  },
                  {
                    name: "Sushi House",
                    address: "Lower Parel, Mumbai - 400013",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fine Dining",
                    cuisine: "Japanese",
                    specialty: "Seafood",
                    rating: 4.5,
                    priceRange: "Expensive",
                    location: "Lower Parel",
                    description: "Upscale restaurant offering authentic Japanese sushi and seafood."
                  },
                  {
                    name: "Burger Haven",
                    address: "Matunga, Mumbai - 400019",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fast Food",
                    cuisine: "American",
                    specialty: "Vegetarian",
                    rating: 2.6,
                    priceRange: "Cheap",
                    location: "Matunga",
                    description: "Popular spot for quick and affordable vegetarian burgers."
                  },
                  {
                    name: "The Buffet Table",
                    address: "Worli, Mumbai - 400030",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Buffet",
                    cuisine: "Indian",
                    specialty: "Steakhouse",
                    rating: 3.5,
                    priceRange: "Moderate",
                    location: "Worli",
                    description: "Diverse buffet offering a range of Indian dishes with a focus on steaks."
                  },
                  {
                    name: "Pasta Palace",
                    address: "Marine Drive, Mumbai - 400021",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Italian",
                    specialty: "Vegetarian",
                    rating: 4.3,
                    priceRange: "Expensive",
                    location: "Marine Drive",
                    description: "Casual dining spot known for its delectable Italian pasta dishes."
                  },
                  {
                    name: "The French Bistro",
                    address: "Lower Parel, Mumbai - 400013",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fine Dining",
                    cuisine: "French",
                    specialty: "Vegan",
                    rating: 4.6,
                    priceRange: "Expensive",
                    location: "Lower Parel",
                    description: "Luxurious French bistro with a focus on vegan cuisine and refined dishes."
                  },
                  {
                    name: "Dragon Wok",
                    address: "Prabhadevi, Mumbai - 400025",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fast Casual",
                    cuisine: "Chinese",
                    specialty: "Seafood",
                    rating: 3.8,
                    priceRange: "Moderate",
                    location: "Prabhadevi",
                    description: "Fast casual dining offering a variety of Chinese seafood dishes."
                  },
                  {
                    name: "The Vegan Corner",
                    address: "Matunga, Mumbai - 400019",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "American",
                    specialty: "Vegan",
                    rating: 3.4,
                    priceRange: "Moderate",
                    location: "Matunga",
                    description: "Casual spot specializing in vegan American dishes with a relaxed atmosphere."
                  },
                  {
                    name: "Fiesta Grill",
                    address: "Dadar, Mumbai - 400028",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Pub",
                    cuisine: "Mexican",
                    specialty: "Steakhouse",
                    rating: 4.2,
                    priceRange: "Expensive",
                    location: "Dadar",
                    description: "Lively pub offering a great mix of Mexican cuisine and steakhouse favorites."
                  },
                  {
                    name: "The Grill House",
                    address: "Marine Drive, Mumbai - 400021",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fine Dining",
                    cuisine: "American",
                    specialty: "Steakhouse",
                    rating: 4.8,
                    priceRange: "Expensive",
                    location: "Marine Drive",
                    description: "Sophisticated setting with a menu focused on premium steaks and American classics."
                  },
                  {
                    name: "Sushi Station",
                    address: "Worli, Mumbai - 400030",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Japanese",
                    specialty: "Seafood",
                    rating: 3.6,
                    priceRange: "Moderate",
                    location: "Worli",
                    description: "Casual restaurant offering a variety of Japanese seafood dishes."
                  },
                  {
                    name: "Chili’s Kitchen",
                    address: "Lower Parel, Mumbai - 400013",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fast Casual",
                    cuisine: "Mexican",
                    specialty: "Vegetarian",
                    rating: 3.3,
                    priceRange: "Moderate",
                    location: "Lower Parel",
                    description: "Quick and casual Mexican fare with a range of vegetarian options."
                  },
                  {
                    name: "Vegan Bites",
                    address: "Matunga, Mumbai - 400019",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Food Truck",
                    cuisine: "American",
                    specialty: "Vegan",
                    rating: 2.7,
                    priceRange: "Cheap",
                    location: "Matunga",
                    description: "Food truck offering delicious vegan American street food."
                  },
                  {
                    name: "The Pasta Place",
                    address: "Marine Drive, Mumbai - 400021",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Italian",
                    specialty: "Vegetarian",
                    rating: 4.4,
                    priceRange: "Expensive",
                    location: "Marine Drive",
                    description: "Relaxed dining with an extensive menu of vegetarian Italian pasta dishes."
                  },
                  {
                    name: "La Pizzeria",
                    address: "Dadar, Mumbai - 400028",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Italian",
                    specialty: "Seafood",
                    rating: 4.1,
                    priceRange: "Expensive",
                    location: "Dadar",
                    description: "Cozy Italian pizzeria specializing in seafood and traditional pizzas."
                  },
                  {
                    name: "Urban Grill",
                    address: "Worli, Mumbai - 400030",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fine Dining",
                    cuisine: "American",
                    specialty: "Steakhouse",
                    rating: 4.7,
                    priceRange: "Expensive",
                    location: "Worli",
                    description: "Upscale American steakhouse with a chic ambiance and premium cuts."
                  },
                  {
                    name: "Café Aroma",
                    address: "Prabhadevi, Mumbai - 400025",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Cafe",
                    cuisine: "French",
                    specialty: "Vegetarian",
                    rating: 4.2,
                    priceRange: "Expensive",
                    location: "Prabhadevi",
                    description: "Charming French café with a focus on fresh vegetarian dishes and pastries."
                  },
                  {
                    name: "The Mexican Grill",
                    address: "Lower Parel, Mumbai - 400013",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Mexican",
                    specialty: "Seafood",
                    rating: 3.9,
                    priceRange: "Moderate",
                    location: "Lower Parel",
                    description: "Casual dining with an emphasis on flavorful Mexican seafood dishes."
                  },
                  {
                    name: "Steakhouse Express",
                    address: "Marine Drive, Mumbai - 400021",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fast Casual",
                    cuisine: "American",
                    specialty: "Steakhouse",
                    rating: 3.4,
                    priceRange: "Moderate",
                    location: "Marine Drive",
                    description: "Quick and hearty American steakhouse fare with a casual vibe."
                  },
                  {
                    name: "Vegan Bistro",
                    address: "Dadar, Mumbai - 400028",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "American",
                    specialty: "Vegan",
                    rating: 3.5,
                    priceRange: "Moderate",
                    location: "Dadar",
                    description: "Casual dining with a focus on tasty vegan American cuisine."
                  },
                  {
                    name: "Pasta & More",
                    address: "Prabhadevi, Mumbai - 400025",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Italian",
                    specialty: "Seafood",
                    rating: 4.2,
                    priceRange: "Expensive",
                    location: "Prabhadevi",
                    description: "Cozy spot known for its excellent seafood pasta and Italian dishes."
                  },
                  {
                    name: "Chopsticks",
                    address: "Matunga, Mumbai - 400019",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fast Casual",
                    cuisine: "Chinese",
                    specialty: "Seafood",
                    rating: 3.6,
                    priceRange: "Moderate",
                    location: "Matunga",
                    description: "Fast casual dining with a focus on flavorful Chinese seafood dishes."
                  },
                  {
                    name: "The Vegan Café",
                    address: "Marine Drive, Mumbai - 400021",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Cafe",
                    cuisine: "American",
                    specialty: "Vegan",
                    rating: 4.3,
                    priceRange: "Expensive",
                    location: "Marine Drive",
                    description: "Stylish café offering a range of American vegan dishes in a comfortable setting."
                  },
                  {
                    name: "Fiesta Cantina",
                    address: "Dadar, Mumbai - 400028",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Pub",
                    cuisine: "Mexican",
                    specialty: "Vegetarian",
                    rating: 3.3,
                    priceRange: "Moderate",
                    location: "Dadar",
                    description: "Lively pub serving a variety of vegetarian Mexican dishes and cocktails."
                  },
                  {
                    name: "Vegan Delight",
                    address: "Lower Parel, Mumbai - 400013",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Indian",
                    specialty: "Vegan",
                    rating: 3.8,
                    priceRange: "Moderate",
                    location: "Lower Parel",
                    description: "Comfortable dining with a focus on flavorful Indian vegan dishes."
                  },
                  {
                    name: "Noodles & Rice",
                    address: "Prabhadevi, Mumbai - 400025",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Chinese",
                    specialty: "Vegetarian",
                    rating: 4.0,
                    priceRange: "Expensive",
                    location: "Prabhadevi",
                    description: "Casual dining with a variety of vegetarian Chinese noodle and rice dishes."
                  },
                  {
                    name: "The Gourmet Bistro",
                    address: "Worli, Mumbai - 400030",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fine Dining",
                    cuisine: "French",
                    specialty: "Seafood",
                    rating: 4.6,
                    priceRange: "Expensive",
                    location: "Worli",
                    description: "Elegant French bistro with an emphasis on exquisite seafood dishes."
                  },
                  {
                    name: "The Italian Feast",
                    address: "Matunga, Mumbai - 400019",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Casual Dining",
                    cuisine: "Italian",
                    specialty: "Seafood",
                    rating: 4.1,
                    priceRange: "Expensive",
                    location: "Matunga",
                    description: "Casual Italian eatery renowned for its seafood pasta and pizza."
                  },
                  {
                    name: "The Vegan Lounge",
                    address: "Lower Parel, Mumbai - 400013",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Cafe",
                    cuisine: "American",
                    specialty: "Vegan",
                    rating: 3.5,
                    priceRange: "Moderate",
                    location: "Lower Parel",
                    description: "Relaxed café offering a variety of vegan American comfort food."
                  },
                  {
                    name: "Gourmet Grill",
                    address: "Prabhadevi, Mumbai - 400025",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fine Dining",
                    cuisine: "American",
                    specialty: "Steakhouse",
                    rating: 4.8,
                    priceRange: "Expensive",
                    location: "Prabhadevi",
                    description: "Upscale American grill known for its premium steaks and gourmet burgers."
                  },
                  {
                    name: "Vegan Eats",
                    address: "Dadar, Mumbai - 400028",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fast Casual",
                    cuisine: "Indian",
                    specialty: "Vegan",
                    rating: 3.2,
                    priceRange: "Moderate",
                    location: "Dadar",
                    description: "Quick and casual dining with a focus on flavorful vegan Indian dishes."
                  },
                  {
                    name: "Taco Heaven",
                    address: "Marine Drive, Mumbai - 400021",
                    image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                    type: "Fast Casual",
                    cuisine: "Mexican",
                    specialty: "Seafood",
                    rating: 3.7,
                    priceRange: "Moderate",
                    location: "Marine Drive",
                    description: "Quick and casual spot for Mexican seafood tacos and more."
             },
             {
                name: "The Spice Room",
                address: "Ghatkopar, Mumbai - 400077",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Indian",
                specialty: "Seafood",
                rating: 4.5,
                priceRange: "Expensive",
                location: "Ghatkopar",
                description: "Authentic Indian seafood dishes with a cozy ambiance."
            },
            {
                name: "Bamboo House",
                address: "Kurla, Mumbai - 400070",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Casual",
                cuisine: "Chinese",
                specialty: "Vegetarian",
                rating: 3.6,
                priceRange: "Moderate",
                location: "Kurla",
                description: "Modern Chinese dishes with a focus on vegetarian options."
            },
            {
                name: "Bella Italia",
                address: "Chembur, Mumbai - 400089",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Italian",
                specialty: "Seafood",
                rating: 4.3,
                priceRange: "Expensive",
                location: "Chembur",
                description: "Classic Italian seafood dishes with a refined touch."
            },
            {
                name: "Tandoori Junction",
                address: "Bhandup, Mumbai - 400078",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Food",
                cuisine: "Indian",
                specialty: "Vegetarian",
                rating: 2.8,
                priceRange: "Cheap",
                location: "Bhandup",
                description: "Quick and affordable vegetarian Indian meals."
            },
            {
                name: "Mumbai Grill",
                address: "Mulund, Mumbai - 400080",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Pub",
                cuisine: "American",
                specialty: "Steakhouse",
                rating: 4.4,
                priceRange: "Expensive",
                location: "Mulund",
                description: "Steak and grill specialties with a lively pub atmosphere."
            },
            {
                name: "Sushi Delight",
                address: "Ghatkopar, Mumbai - 400077",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fine Dining",
                cuisine: "Japanese",
                specialty: "Seafood",
                rating: 4.7,
                priceRange: "Expensive",
                location: "Ghatkopar",
                description: "Premium sushi and Japanese seafood with elegant decor."
            },
            {
                name: "Café Mocha",
                address: "Kurla, Mumbai - 400070",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Cafe",
                cuisine: "Italian",
                specialty: "Vegetarian",
                rating: 3.5,
                priceRange: "Moderate",
                location: "Kurla",
                description: "Cozy cafe offering a variety of vegetarian Italian dishes."
            },
            {
                name: "Taste of Italy",
                address: "Chembur, Mumbai - 400089",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Italian",
                specialty: "Seafood",
                rating: 4.2,
                priceRange: "Expensive",
                location: "Chembur",
                description: "Savor traditional Italian seafood dishes with a homely feel."
            },
            {
                name: "The Great Indian Dhaba",
                address: "Bhandup, Mumbai - 400078",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Indian",
                specialty: "Vegetarian",
                rating: 3.4,
                priceRange: "Moderate",
                location: "Bhandup",
                description: "Traditional Indian vegetarian fare in a rustic setting."
            },
            {
                name: "Noodle House",
                address: "Mulund, Mumbai - 400080",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Casual",
                cuisine: "Chinese",
                specialty: "Vegetarian",
                rating: 3.7,
                priceRange: "Moderate",
                location: "Mulund",
                description: "Casual spot for quick and flavorful vegetarian Chinese noodles."
            },
            {
                name: "Saffron Bistro",
                address: "Ghatkopar, Mumbai - 400077",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fine Dining",
                cuisine: "Indian",
                specialty: "Seafood",
                rating: 4.6,
                priceRange: "Expensive",
                location: "Ghatkopar",
                description: "Luxurious dining experience with a focus on seafood delicacies."
            },
            {
                name: "The Mexican Grill",
                address: "Kurla, Mumbai - 400070",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Mexican",
                specialty: "Seafood",
                rating: 4.3,
                priceRange: "Expensive",
                location: "Kurla",
                description: "Authentic Mexican seafood dishes in a vibrant setting."
            },
            {
                name: "The Burger Joint",
                address: "Chembur, Mumbai - 400089",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Food",
                cuisine: "American",
                specialty: "Steakhouse",
                rating: 2.5,
                priceRange: "Cheap",
                location: "Chembur",
                description: "Quick and budget-friendly steakhouse burgers and sides."
            },
            {
                name: "Royal Thai",
                address: "Bhandup, Mumbai - 400078",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fine Dining",
                cuisine: "Thai",
                specialty: "Seafood",
                rating: 4.8,
                priceRange: "Expensive",
                location: "Bhandup",
                description: "Luxurious Thai seafood dining experience with exquisite decor."
            },
            {
                name: "Cheese Café",
                address: "Mulund, Mumbai - 400080",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Cafe",
                cuisine: "French",
                specialty: "Vegetarian",
                rating: 3.8,
                priceRange: "Moderate",
                location: "Mulund",
                description: "Charming café offering a selection of vegetarian French dishes."
            },
            {
                name: "The Taco Spot",
                address: "Ghatkopar, Mumbai - 400077",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Casual",
                cuisine: "Mexican",
                specialty: "Vegetarian",
                rating: 3.4,
                priceRange: "Moderate",
                location: "Ghatkopar",
                description: "Casual spot with tasty vegetarian Mexican tacos and sides."
            },
            {
                name: "The Pasta House",
                address: "Kurla, Mumbai - 400070",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Italian",
                specialty: "Vegetarian",
                rating: 4.0,
                priceRange: "Moderate",
                location: "Kurla",
                description: "Relaxed dining with a focus on vegetarian pasta dishes."
            },
            {
                name: "The Bombay Pub",
                address: "Chembur, Mumbai - 400089",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Pub",
                cuisine: "American",
                specialty: "Steakhouse",
                rating: 4.2,
                priceRange: "Expensive",
                location: "Chembur",
                description: "Lively pub atmosphere with premium steakhouse options."
            },
            {
                name: "Green Planet",
                address: "Bhandup, Mumbai - 400078",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Casual",
                cuisine: "Indian",
                specialty: "Vegan",
                rating: 3.6,
                priceRange: "Moderate",
                location: "Bhandup",
                description: "Fresh and flavorful vegan Indian dishes in a casual setting."
            },
            {
                name: "Fusion Bistro",
                address: "Mulund, Mumbai - 400080",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "French",
                specialty: "Seafood",
                rating: 4.4,
                priceRange: "Expensive",
                location: "Mulund",
                description: "French seafood fusion dishes with a contemporary vibe."
            },
            {
                name: "Bites and Brews",
                address: "Ghatkopar, Mumbai - 400077",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Pub",
                cuisine: "American",
                specialty: "Vegetarian",
                rating: 4.1,
                priceRange: "Expensive",
                location: "Ghatkopar",
                description: "Relaxed pub offering a variety of vegetarian American snacks and brews."
            },
            {
                name: "Café Noir",
                address: "Kurla, Mumbai - 400070",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Cafe",
                cuisine: "French",
                specialty: "Vegetarian",
                rating: 3.9,
                priceRange: "Moderate",
                location: "Kurla",
                description: "Charming French café with a focus on vegetarian options."
            },
            {
                name: "The Sizzling Wok",
                address: "Chembur, Mumbai - 400089",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Casual",
                cuisine: "Chinese",
                specialty: "Seafood",
                rating: 3.3,
                priceRange: "Moderate",
                location: "Chembur",
                description: "Quick and tasty seafood wok dishes with a vibrant ambiance."
            },
            {
                name: "Delight Diner",
                address: "Bhandup, Mumbai - 400078",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Food",
                cuisine: "Indian",
                specialty: "Vegetarian",
                rating: 2.7,
                priceRange: "Cheap",
                location: "Bhandup",
                description: "Affordable Indian vegetarian fast food with a quick service."
            },
            {
                name: "Sushi Haven",
                address: "Mulund, Mumbai - 400080",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fine Dining",
                cuisine: "Japanese",
                specialty: "Seafood",
                rating: 4.6,
                priceRange: "Expensive",
                location: "Mulund",
                description: "Elegant Japanese restaurant specializing in high-quality sushi and seafood."
            },
            {
                name: "Taco King",
                address: "Ghatkopar, Mumbai - 400077",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Casual",
                cuisine: "Mexican",
                specialty: "Vegetarian",
                rating: 3.3,
                priceRange: "Moderate",
                location: "Ghatkopar",
                description: "Casual dining with a variety of flavorful vegetarian Mexican tacos."
            },
            {
                name: "The Pasta Café",
                address: "Kurla, Mumbai - 400070",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Cafe",
                cuisine: "Italian",
                specialty: "Seafood",
                rating: 3.6,
                priceRange: "Moderate",
                location: "Kurla",
                description: "Cozy café offering seafood pasta dishes with a warm atmosphere."
            },
            {
                name: "Steakhouse Express",
                address: "Chembur, Mumbai - 400089",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Casual",
                cuisine: "American",
                specialty: "Steakhouse",
                rating: 3.5,
                priceRange: "Moderate",
                location: "Chembur",
                description: "Casual eatery offering a variety of steakhouse options and sides."
            },
            {
                name: "The Royal Café",
                address: "Bhandup, Mumbai - 400078",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Cafe",
                cuisine: "French",
                specialty: "Vegetarian",
                rating: 3.7,
                priceRange: "Moderate",
                location: "Bhandup",
                description: "Elegant café serving a range of vegetarian French dishes."
            },
            {
                name: "The Gourmet House",
                address: "Mulund, Mumbai - 400080",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fine Dining",
                cuisine: "Italian",
                specialty: "Seafood",
                rating: 4.7,
                priceRange: "Expensive",
                location: "Mulund",
                description: "Refined Italian dining experience with a focus on seafood dishes."
            },
            {
                name: "Quick Eats",
                address: "Ghatkopar, Mumbai - 400077",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Food",
                cuisine: "Indian",
                specialty: "Vegetarian",
                rating: 2.6,
                priceRange: "Cheap",
                location: "Ghatkopar",
                description: "Budget-friendly Indian vegetarian fast food with quick service."
            },
            {
                name: "Vegan Delight",
                address: "Kurla, Mumbai - 400070",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Casual",
                cuisine: "Indian",
                specialty: "Vegan",
                rating: 3.8,
                priceRange: "Moderate",
                location: "Kurla",
                description: "Casual eatery offering a variety of flavorful vegan Indian dishes."
            },
            {
                name: "The Grill Master",
                address: "Chembur, Mumbai - 400089",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "American",
                specialty: "Steakhouse",
                rating: 4.1,
                priceRange: "Expensive",
                location: "Chembur",
                description: "Premium American steakhouse with a variety of grilled options."
            },
            {
                name: "Brew and Chew",
                address: "Bhandup, Mumbai - 400078",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Pub",
                cuisine: "American",
                specialty: "Seafood",
                rating: 4.2,
                priceRange: "Expensive",
                location: "Bhandup",
                description: "Relaxing pub offering seafood delights and a variety of brews."
            },
            {
                name: "The Thai Kitchen",
                address: "Mulund, Mumbai - 400080",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Thai",
                specialty: "Seafood",
                rating: 4.3,
                priceRange: "Expensive",
                location: "Mulund",
                description: "Authentic Thai seafood dishes with a relaxed dining experience."
            },
            {
                name: "The Quick Bite",
                address: "Ghatkopar, Mumbai - 400077",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Food",
                cuisine: "Mexican",
                specialty: "Vegetarian",
                rating: 2.8,
                priceRange: "Cheap",
                location: "Ghatkopar",
                description: "Affordable and quick Mexican vegetarian options with a casual vibe."
            },
            {
                name: "The Gourmet House",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fine Dining",
                cuisine: "Indian",
                specialty: "Seafood",
                rating: 4.5,
                priceRange: "Expensive",
                location: "Kandivali",
                description: "Exquisite seafood dishes in a luxurious setting."
            },
            {
                name: "Urban Tadka",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Indian",
                specialty: "Vegetarian",
                rating: 3.7,
                priceRange: "Moderate",
                location: "Malad",
                description: "Cozy spot serving delicious vegetarian Indian fare."
            },
            {
                name: "Bella Italia",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Italian",
                specialty: "Seafood",
                rating: 3.5,
                priceRange: "Moderate",
                location: "Goregaon",
                description: "Classic Italian dishes with a seafood twist."
            },
            {
                name: "Spicy Dragon",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Casual",
                cuisine: "Chinese",
                specialty: "Seafood",
                rating: 3.4,
                priceRange: "Moderate",
                location: "Dahisar",
                description: "Quick and tasty seafood dishes with an authentic Chinese flair."
            },
            {
                name: "El Toro",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fine Dining",
                cuisine: "Mexican",
                specialty: "Seafood",
                rating: 4.4,
                priceRange: "Expensive",
                location: "Oshiwara",
                description: "Luxurious dining experience with the finest Mexican seafood."
            },
            {
                name: "Bistro Royale",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "French",
                specialty: "Vegetarian",
                rating: 3.8,
                priceRange: "Moderate",
                location: "Kandivali",
                description: "Charming bistro offering classic French vegetarian dishes."
            },
            {
                name: "Sushi Haven",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Casual",
                cuisine: "Japanese",
                specialty: "Seafood",
                rating: 3.6,
                priceRange: "Moderate",
                location: "Goregaon",
                description: "Fresh and delicious sushi with a variety of seafood options."
            },
            {
                name: "Meat & Treat",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Pub",
                cuisine: "American",
                specialty: "Steakhouse",
                rating: 4.6,
                priceRange: "Expensive",
                location: "Dahisar",
                description: "Top-notch steakhouse with a vibrant pub atmosphere."
            },
            {
                name: "Cafe Comfort",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Cafe",
                cuisine: "American",
                specialty: "Vegetarian",
                rating: 3.4,
                priceRange: "Moderate",
                location: "Malad",
                description: "Cozy cafe offering a range of American vegetarian dishes."
            },
            {
                name: "Foodie Truck",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Food Truck",
                cuisine: "Mexican",
                specialty: "Vegetarian",
                rating: 2.7,
                priceRange: "Cheap",
                location: "Oshiwara",
                description: "Affordable and tasty Mexican vegetarian food from a vibrant food truck."
            },
            {
                name: "The Thai Spot",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Casual",
                cuisine: "Thai",
                specialty: "Seafood",
                rating: 3.5,
                priceRange: "Moderate",
                location: "Kandivali",
                description: "Fresh Thai seafood dishes with a casual dining experience."
            },
            {
                name: "The Italian Bistro",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Italian",
                specialty: "Seafood",
                rating: 3.9,
                priceRange: "Moderate",
                location: "Malad",
                description: "Delicious Italian seafood in a relaxed dining setting."
            },
            {
                name: "Grill Masters",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "American",
                specialty: "Steakhouse",
                rating: 3.6,
                priceRange: "Moderate",
                location: "Goregaon",
                description: "Comfortable spot for juicy steaks and classic American grill fare."
            },
            {
                name: "Vegan Vibes",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Casual",
                cuisine: "Indian",
                specialty: "Vegan",
                rating: 2.9,
                priceRange: "Cheap",
                location: "Oshiwara",
                description: "Affordable vegan Indian dishes in a casual environment."
            },
            {
                name: "The Seafood Shack",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Seafood",
                specialty: "Seafood",
                rating: 4.0,
                priceRange: "Moderate",
                location: "Malad",
                description: "Relaxed setting with a variety of fresh seafood options."
            },
            {
                name: "The French Connection",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fine Dining",
                cuisine: "French",
                specialty: "Seafood",
                rating: 4.6,
                priceRange: "Expensive",
                location: "Kandivali",
                description: "Elegant dining with an array of exquisite French seafood dishes."
            },
            {
                name: "Quick Wok",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Food",
                cuisine: "Chinese",
                specialty: "Vegetarian",
                rating: 2.5,
                priceRange: "Cheap",
                location: "Goregaon",
                description: "Quick and affordable Chinese vegetarian options."
            },
            {
                name: "The Pasta Place",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Italian",
                specialty: "Seafood",
                rating: 3.3,
                priceRange: "Moderate",
                location: "Dahisar",
                description: "Casual spot for delightful pasta and seafood dishes."
            },
            {
                name: "Tandoor Twist",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Indian",
                specialty: "Vegetarian",
                rating: 3.6,
                priceRange: "Moderate",
                location: "Oshiwara",
                description: "Delicious Indian vegetarian dishes with a focus on tandoori flavors."
            },
            {
                name: "Deli Delight",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Cafe",
                cuisine: "American",
                specialty: "Vegetarian",
                rating: 3.8,
                priceRange: "Moderate",
                location: "Malad",
                description: "Cozy cafe with a range of American vegetarian options."
            },
            {
                name: "Steak Haven",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fine Dining",
                cuisine: "American",
                specialty: "Steakhouse",
                rating: 4.7,
                priceRange: "Expensive",
                location: "Kandivali",
                description: "Premium steakhouse with a focus on high-quality cuts and sides."
            },
            {
                name: "Noodle Nook",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Casual",
                cuisine: "Chinese",
                specialty: "Seafood",
                rating: 3.4,
                priceRange: "Moderate",
                location: "Goregaon",
                description: "Casual eatery specializing in seafood noodles and other Chinese favorites."
            },
            {
                name: "Mexican Fiesta",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Mexican",
                specialty: "Vegetarian",
                rating: 3.7,
                priceRange: "Moderate",
                location: "Malad",
                description: "Vibrant spot for tasty Mexican vegetarian dishes."
            },
            {
                name: "Bites & Brews",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Pub",
                cuisine: "American",
                specialty: "Steakhouse",
                rating: 4.3,
                priceRange: "Expensive",
                location: "Dahisar",
                description: "Relaxed pub offering hearty American steakhouse fare."
            },
            {
                name: "Veggie Haven",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Food Truck",
                cuisine: "Indian",
                specialty: "Vegetarian",
                rating: 2.6,
                priceRange: "Cheap",
                location: "Kandivali",
                description: "Affordable vegetarian Indian food from a convenient food truck."
            },
            {
                name: "Sushi Sensation",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Japanese",
                specialty: "Seafood",
                rating: 4.1,
                priceRange: "Moderate",
                location: "Dahisar",
                description: "Casual Japanese restaurant with a focus on fresh seafood."
            },
            {
                name: "The Tandoor House",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Indian",
                specialty: "Seafood",
                rating: 3.8,
                priceRange: "Moderate",
                location: "Oshiwara",
                description: "Delightful Indian seafood dishes with a focus on tandoori preparations."
            },
            {
                name: "Charming Cafe",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Cafe",
                cuisine: "French",
                specialty: "Vegetarian",
                rating: 3.9,
                priceRange: "Moderate",
                location: "Malad",
                description: "Quaint cafe serving French vegetarian delicacies."
            },
            {
                name: "The Grill House",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fine Dining",
                cuisine: "American",
                specialty: "Steakhouse",
                rating: 4.2,
                priceRange: "Expensive",
                location: "Goregaon",
                description: "Elegant setting offering premium American steaks and grills."
            },
            {
                name: "Mexican Munchies",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Food",
                cuisine: "Mexican",
                specialty: "Vegetarian",
                rating: 2.8,
                priceRange: "Cheap",
                location: "Oshiwara",
                description: "Quick and budget-friendly vegetarian Mexican options."
            },
            {
                name: "The Seafood Grill",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Seafood",
                specialty: "Seafood",
                rating: 4.3,
                priceRange: "Expensive",
                location: "Malad",
                description: "Gourmet seafood dishes in a relaxed, upscale atmosphere."
            },
            {
                name: "The Vegan Corner",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Cafe",
                cuisine: "Indian",
                specialty: "Vegan",
                rating: 3.2,
                priceRange: "Moderate",
                location: "Dahisar",
                description: "Cafe offering a variety of vegan Indian dishes."
            },
            {
                name: "Chopstick Express",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Food",
                cuisine: "Chinese",
                specialty: "Vegetarian",
                rating: 2.4,
                priceRange: "Cheap",
                location: "Kandivali",
                description: "Affordable vegetarian Chinese food with quick service."
            },
            {
                name: "Café Delights",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Cafe",
                cuisine: "American",
                specialty: "Vegetarian",
                rating: 3.7,
                priceRange: "Moderate",
                location: "Oshiwara",
                description: "Relaxed cafe with a variety of American vegetarian options."
            },
            {
                name: "Italian Delights",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fine Dining",
                cuisine: "Italian",
                specialty: "Seafood",
                rating: 4.8,
                priceRange: "Expensive",
                location: "Goregaon",
                description: "Luxurious dining with a focus on gourmet Italian seafood."
            },
            {
                name: "Steak & Fries",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Fast Casual",
                cuisine: "American",
                specialty: "Steakhouse",
                rating: 3.3,
                priceRange: "Moderate",
                location: "Dahisar",
                description: "Casual spot for steak and fries with a relaxed vibe."
            },
            {
                name: "Sushi Street",
                address: "Marine Drive, Mumbai - 400021",
                image: "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwhoTGrMdD7nfp548LoDuj0OI-jeliPqZGp0hwyUm8A=",
                type: "Casual Dining",
                cuisine: "Japanese",
                specialty: "Vegetarian",
                rating: 3.5,
                priceRange: "Moderate",
                location: "Oshiwara",
                description: "Japanese restaurant offering a variety of vegetarian sushi options."
            }

  ];
 
  const [filterType, setFilterType] = useState("");
  const [filterCuisine, setFilterCuisine] = useState("");
  const [filterPriceRange, setFilterPriceRange] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterSpecialty, setFilterSpecialty] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const [wishlist, setWishlist] = useState([]); // To track wishlist items
  const [showPopup, setShowPopup] = useState(false); // To show the success popup

  // Handle Wishlist Click
  const handleWishlistClick = (restaurant) => {
    // Check if the restaurant is already in the wishlist
    if (!wishlist.includes(restaurant)) {
      setWishlist([...wishlist, restaurant]); 
      setShowPopup(true);

      setTimeout(() => setShowPopup(false), 3000); // Show popup on successful addition
    }
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesType = filterType === "" || restaurant.type === filterType;
    const matchesCuisine = filterCuisine === "" || restaurant.cuisine.includes(filterCuisine);
    const matchesPriceRange = filterPriceRange === "" || restaurant.priceRange === filterPriceRange;
    const matchesLocation = filterLocation === "" || restaurant.location === filterLocation;
    const matchesSpecialty = filterSpecialty === "" || restaurant.specialty === filterSpecialty;
    
    // Show restaurants with a rating less than or equal to the selected rating
    const matchesRating = filterRating === 0 || restaurant.rating <= filterRating;

    const handleWishlistClick = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
      };

    return (
      matchesType &&
      matchesCuisine &&
      matchesPriceRange &&
      matchesLocation &&
      matchesSpecialty &&
      matchesRating
    );
  });

  return (
    <>
      <NavTourist />

      <div className="flex flex-col md:flex-row p-6 space-x-6">
        {/* Left Side: Restaurant Information */}
        <div className="flex-1 space-y-6 overflow-y-auto h-[100vh]">
          {filteredRestaurants.map((restaurant, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row p-6 border border-gray-200">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-48 h-48 object-cover rounded-lg shadow-md"
                />
               
              </div>
              <div className="flex-1 md:ml-6">
                <h3 className="text-2xl font-semibold mb-2">{restaurant.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{restaurant.address}</p>
                <p className="text-md text-gray-700 mb-2"><strong>Type:</strong> {restaurant.type}</p>
                <p className="text-md text-gray-700 mb-2"><strong>Cuisine:</strong> {restaurant.cuisine}</p>
                <p className="text-md text-gray-700 mb-2"><strong>Specialty:</strong> {restaurant.specialty}</p>
                <p className="text-md text-gray-700 mb-2"><strong>Rating:</strong> {restaurant.rating} ⭐</p>
                <p className="text-md text-gray-700 mb-2"><strong>Price Range:</strong> {restaurant.priceRange}</p>
                <p className="text-md text-gray-700 mb-4"><strong>Description:</strong> {restaurant.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Sticky Filter Section */}
        <div className="w-full h-[660px] md:w-1/3 bg-white shadow-lg p-6 rounded-lg border border-gray-200 sticky top-20 self-start">
          <h2 className="text-2xl font-semibold mb-4">Filter Restaurants</h2>

          {/* Type Filter */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Type</h3>
            <select
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Fine Dining">Fine Dining</option>
              <option value="Casual Dining">Casual Dining</option>
              <option value="Fast Casual">Fast Casual</option>
              <option value="Fast Food">Fast Food</option>
              <option value="Buffet">Buffet</option>
              <option value="Food Truck">Food Truck</option>
              <option value="Cafe">Cafe</option>
              <option value="Pub">Pub</option>
            </select>
          </div>

          {/* Location Filter */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <select
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
            >
              <option value="">All Areas</option>
              <option value="Marine Drive">Marine Drive</option>
              <option value="Lower Parel">Lower Parel</option>
              <option value="Colaba">Colaba</option>
              <option value="Worli">Worli</option>
              <option value="Dadar">Dadar</option>
              <option value="Matunga">Matunga</option>
              <option value="Prabhadevi">Prabhadevi</option>
              <option value="Bandra">Bandra</option>
              <option value="Andheri">Andheri</option>
              <option value="Borivali">Borivali</option>
              <option value="Malad">Malad</option>
              <option value="Kala Ghoda">Kala Ghoda</option>
              <option value="Ghatkopar">Ghatkopar</option>
              <option value="Kurla">Kurla</option>
              <option value="Chembur">Chembur</option>
              <option value="Bhandup">Bhandup</option>
              <option value="Mulund">Mulund</option>
              <option value="Kandivali">Kandivali</option>
              <option value="Dahisar">Dahisar</option>
              <option value="Goregaon">Goregaon</option>
            </select>
          </div>

          {/* Cuisine Filter */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Cuisine</h3>
            <select
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterCuisine}
              onChange={(e) => setFilterCuisine(e.target.value)}
            >
              <option value="">All Cuisines</option>
              <option value="Indian">Indian</option>
              <option value="Chinese">Chinese</option>
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
              <option value="Japanese">Japanese</option>
              <option value="French">French</option>
              <option value="American">American</option>
              <option value="Thai">Thai</option>
            </select>
          </div>

          {/* Specialty Filter */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Specialty</h3>
            <select
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterSpecialty}
              onChange={(e) => setFilterSpecialty(e.target.value)}
            >
              <option value="">All Specialties</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Seafood">Seafood</option>
              <option value="Steakhouse">Steakhouse</option>
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Price Range</h3>
            <select
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterPriceRange}
              onChange={(e) => setFilterPriceRange(e.target.value)}
            >
              <option value="">All Prices</option>
              <option value="Cheap">Cheap</option>
              <option value="Moderate">Moderate</option>
              <option value="Expensive">Expensive</option>
            </select>
          </div>

          {/* Rating Filter */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Rating</h3>
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={filterRating}
              onChange={(e) => setFilterRating(Number(e.target.value))}
              className="w-full"
            />
            <span>{filterRating}⭐ & below</span>
          </div>
        </div>
      </div>

      
     


      <AllFooter />
    </>
  );
};