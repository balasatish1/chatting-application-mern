import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "emmathompson@gmail.com",
    fullName: "Emma Thompson",
    password: "bala765907",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "oliviamiller@gmail.com",
    fullName: "Olivia Miller",
    password: "bala765907",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "sophiadavis@gmail.com",
    fullName: "Sophia Davis",
    password: "bala765907",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "avawilson@gmail.com",
    fullName: "Ava Wilson",
    password: "bala765907",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "isabellabrown@gmail.com",
    fullName: "Isabella Brown",
    password: "bala765907",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "miajohnson@gmail.com",
    fullName: "Mia Johnson",
    password: "bala765907",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "charlottewilliams@gmail.com",
    fullName: "Charlotte Williams",
    password: "bala765907",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "ameliagarcia@gmail.com",
    fullName: "Amelia Garcia",
    password: "bala765907",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "jamesanderson@gmail.com",
    fullName: "James Anderson",
    password: "bala765907",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "williamclark@gmail.com",
    fullName: "William Clark",
    password: "bala765907",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "benjamintaylor@gmail.com",
    fullName: "Benjamin Taylor",
    password: "bala765907",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "lucasmoore@gmail.com",
    fullName: "Lucas Moore",
    password: "bala765907",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "henryjackson@gmail.com",
    fullName: "Henry Jackson",
    password: "bala765907",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "alexandermartin@gmail.com",
    fullName: "Alexander Martin",
    password: "bala765907",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "danielrodriguez@gmail.com",
    fullName: "Daniel Rodriguez",
    password: "bala765907",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
