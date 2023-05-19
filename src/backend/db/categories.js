import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Wireless",
    img: "https://res.cloudinary.com/dlykup1dh/image/upload/v1684482803/TechGiz/wireless-category.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Speakers",
    img: "https://res.cloudinary.com/dlykup1dh/image/upload/v1684483506/TechGiz/speaker%20category.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Smart watch",
    img: "https://res.cloudinary.com/dlykup1dh/image/upload/v1684483649/TechGiz/smart-watch-category.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Noise Cancellation",
    img: "https://res.cloudinary.com/dlykup1dh/image/upload/v1684483286/TechGiz/wired-category.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Wired",
    img: "https://res.cloudinary.com/dlykup1dh/image/upload/v1684483286/TechGiz/wired-category.jpg"
  }
];
