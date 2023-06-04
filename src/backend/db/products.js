import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "1d8c5c2a-6e3b-4952-9c51-7fb15a62c24f",
    brand: "boat",
    type: "wired",
    addedInYear: 2021,
    alt: "boAt Bassheads 242",
    productName: "boAt Bassheads 242",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684504768/TechGiz/product-1.jpg",
    description:
      "boAt Bassheads 242 in Ear Wired Earphones with Mic(Neon Green)",
    price: "1,800.00",
    oldPrice: "3000.00",
    inStock: true,
    discount: 18,
    rating: 3
  },
  {
    _id: "3b6e4209-8a7f-4e55-97ae-1df26d1b0ff8",
    brand: "boat",
    type: "Wired",
    addedInYear: 2022,
    alt: "boAt BassHeads 225",
    productName: "boAt BassHeads 225",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684504951/TechGiz/product-2.jpg",
    description:
      "Wired Earphone having 10mm Driver, Passive Noise Cancellation, Polished Metal Design, Hands-free communication",
    price: "699.00",
    oldPrice: "999.00",
    inStock: true,
    discount: 30,
    rating: 4.9
  },
  {
    _id: "d82961c7-ade4-4f10-915e-82dcfe6c8270",
    brand: "boat",
    type: "Wired",
    addedInYear: 2023,
    alt: "boAt BassHeads 103",
    productName: "boAt BassHeads 103",
    image:
      " https://res.cloudinary.com/dlykup1dh/image/upload/v1684505400/TechGiz/product-3.png",
    description:
      "In-Ear Wired Earphone with 10mm Driver, Lightweight Design, Super Extra Bass, Passive Noise Cancellation",
    price: "1,290.00",
    oldPrice: "499.00",
    inStock: true,
    discount: 60,
    rating: 4
  },
  {
    _id: uuid(),
    brand: "boat",
    type: "Wired",
    addedInYear: 2023,
    alt: "boAt BassHeads 103",
    productName: "boAt BassHeads 103",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684505618/TechGiz/product-4.png",
    description: "boAt BassHeads 900 On-Ear Wired Headphone with Mic",
    price: "2,999.00",
    oldPrice: "5,999.00",
    inStock: true,
    discount: 50,
    rating: 4.8
  },
  {
    _id: "8e5f3f2b-4a6e-4a9c-9dcd-6e95bfe1c9f5",
    brand: "boat",
    type: "Wireless",
    addedInYear: 2023,
    alt: "boAt Airdopes 161",
    productName: "boAt Airdopes 161",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684506112/TechGiz/product-5.png",
    description:
      "Wireless Earbuds with Massive Playback of upto 17 Hour, IPX5 Water & Sweat Resistance, IWP Technology, Type C Interface",
    price: "1,099.00",
    oldPrice: "2,490.00",
    inStock: true,
    discount: 56,
    rating: 4.9
  },

  {
    _id: "a8d4b06e-78b2-4eaf-8ea2-6e2bc5f10c5e",
    brand: "boat",
    type: "Wireless",
    addedInYear: 2023,
    alt: "Airdopes 131 DC Edition",
    productName: "Airdopes 131 DC Edition",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684506327/TechGiz/product-6.png",
    description: "13 mm Drivers, Type-C Carry Case, 12 hours Nonstop Music",
    price: "1,399.00",
    oldPrice: "2,990.00",
    inStock: false,
    discount: 53,
    rating: 5.0
  },

  {
    _id: "f3f82c13-0f14-4f96-af4e-14a718014567",
    brand: "boat",
    type: "Wireless",
    addedInYear: 2022,
    alt: "boAt Airdopes 181",
    productName: "boAt Airdopes 181",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684506503/TechGiz/product-7.png",
    description:
      "Wireless Earbuds with 10mm Driver, Type C Interface, BEAST™ Mode & Voice Assistant, ENx Technology",
    price: "1,499.00",
    oldPrice: "2,990.00",
    inStock: true,
    discount: 50,
    rating: 3.8
  },
  {
    _id: "4f9d3e17-96a5-4b8e-8954-5023c0ddfe0f",
    brand: "boat",
    type: "Wireless",
    addedInYear: 2022,
    alt: "boAt Airdopes 190",
    productName: "boAt Airdopes 190",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684506752/TechGiz/product-8.png",
    description:
      "Wireless Earbuds with 40 Hours of Playtime, Beast Mode, RGB Lights Featuring ENx™ tech",
    price: "1,999.00",
    oldPrice: "3,499.00",
    inStock: true,
    discount: 43,
    rating: 3.9
  },
  {
    _id: "e2bea1d1-16b4-4bc6-98dd-d0a251f86e9e",
    brand: "boat",
    type: "Neckbands",
    addedInYear: 2022,
    alt: "boAt Rockerz 255 Pro+",
    productName: "boAt Rockerz 255 Pro+",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684506752/TechGiz/product-9.png",
    description:
      "Bluetooth Earphone with 10mm drivers, Up to 40H Nonstop Playback, Type-C charging, ASAP Charge",
    price: "1,599.00",
    oldPrice: "3,990.00",
    inStock: true,
    discount: 60,
    rating: 4.5
  },
  {
    _id: "f8a04b79-bc44-4ae6-a0c9-6e97e56a929d",
    brand: "boat",
    type: "Neckbands",
    addedInYear: 2022,
    alt: "boAt Rockerz 245 V2",
    productName: "boAt Rockerz 245 V2",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684506752/TechGiz/product-10.png",
    description:
      "Wireless Bluetooth Earphone with 12mm Dynamic Audio Drivers, Up to 8 Hours of Uninterrupted Music, Fast Charging",
    price: "999.00",
    oldPrice: "2,990.00",
    inStock: true,
    discount: 67,
    rating: 4.8
  },
  {
    _id: "9d9df14f-156e-49c0-bf76-b3482a273b8f",
    brand: "boat",
    type: "Neckbands",
    addedInYear: 2023,
    alt: "boAt Rockerz 261",
    productName: "boAt Rockerz 261",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684506752/TechGiz/product-11.png",
    description:
      "Wireless Neckband Earphone with 11mm Premium Drivers, Uninterrupted music Upto 8 Hours, IPX7 Water Resistance",
    price: "1,199.00",
    oldPrice: "4,990.00",
    inStock: true,
    discount: 76,
    rating: 3.5
  },
  {
    _id: "d1e7f4f9-125d-4c5b-8e20-97e199fc6f69",
    brand: "boat",
    type: "Speakers",
    addedInYear: 2022,
    alt: "Stone 350",
    productName: "Stone 350",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684507770/TechGiz/product-12.png",
    description:
      "Wireless Speaker with 10W Stereo Sound, 12H Nonstop Playtime, Lightweight Design, BT, TF Card & AUX Compatible",
    price: "1599.00",
    oldPrice: "3490.00",
    inStock: true,
    discount: 54,
    rating: 3.8
  },
  {
    _id: "7a076c89-3c14-4b54-a00d-2b1a8e2d7ab0",
    brand: "JBL",
    type: "Wired",
    addedInYear: 2022,
    alt: "JBL Endurance Run 2 Wired",
    productName: "JBL Endurance Run 2 Wired",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684508230/TechGiz/product-13.png",
    description: "Waterproof Wired Sports In-Ear Headphones",
    price: "1799.00",
    oldPrice: "2000.00",
    inStock: true,
    discount: 30,
    rating: 3.8
  },
  {
    _id: "f1a79de4-5319-4f27-9bfc-28b9f6f3db7d",
    brand: "JBL",
    type: "Wired",
    addedInYear: 2022,
    alt: "JBL C50HI",
    productName: "JBL C50HI",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684508230/TechGiz/product-14.png",
    description: "Waterproof Wired Sports In-Ear Headphones",
    price: "499.00",
    oldPrice: "999.00",
    inStock: true,
    discount: 60,
    rating: 2.8
  },
  {
    _id: "8c4b0a6c-1b7a-4be9-8129-bb8e3f4e344d",
    brand: "JBL",
    type: "Noise Cancellation",
    addedInYear: 2023,
    alt: "JBL Tour One",
    productName: "JBL Tour One",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684508827/TechGiz/product-15.png",
    description: "Wireless over-ear noise cancelling headphones",
    price: "24,999.00",
    oldPrice: "26,999.00",
    inStock: true,
    discount: 7,
    rating: 4.8
  },
  {
    _id: "72c06f71-607a-4e3e-9344-4ed4c4b0b688",
    brand: "JBL",
    type: "Noise Cancellation",
    addedInYear: 2023,
    alt: "JBL Live 650BTNC",
    productName: "JBL Live 650BTNC",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684508827/TechGiz/product-16.png",
    description: "Wireless Over-Ear Noise-Cancelling Headphones",
    price: "10,999.00",
    oldPrice: "12,599.00",
    inStock: false,
    discount: 12,
    rating: 5
  },
  {
    _id: "3f45e5f1-892f-4a68-ba18-591b02de7c63",
    brand: "JBL",
    type: "Wireless",
    addedInYear: 2022,
    alt: "JBL Tune 125TWS",
    productName: "JBL Tune 125TWS",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684506752/TechGiz/product-17.png",
    description: "True wireless earbuds",
    price: "7499.00",
    oldPrice: "8499.00",
    inStock: false,
    discount: 11,
    rating: 3.5
  },
  {
    _id: "2d3a2d1a-95e6-4c5b-8c0a-60165b13d0eb",
    brand: "JBL",
    type: "Wireless",
    addedInYear: 2022,
    alt: "JBL Endurance Race TWS",
    productName: "JBL Endurance Race TWS",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684506752/TechGiz/product-18.png",
    description: "Waterproof true wireless active sport earbuds",
    price: "4,999.00",
    oldPrice: "7,999.00",
    inStock: true,
    discount: 37,
    rating: 4
  },
  {
    _id: "6d3be4f7-90fb-4ad5-83ef-20e5cc00a98e",
    brand: "JBL",
    type: "Speakers",
    addedInYear: 2022,
    alt: "JBL Go 3",
    productName: "JBL Go 3",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684506752/TechGiz/product-19.png",
    description:
      "Wireless Ultra Portable Bluetooth Speaker, Pro Sound, Vibrant Colors with Rugged Fabric Design, Waterproof, Type C (Without Mic, Teal), Standard",
    price: "2,999.00",
    oldPrice: "3,999.00",
    inStock: true,
    discount: 25,
    rating: 4.5
  },
  {
    _id: "a49bc7a7-062f-471e-9db4-ff6f0e8fb00e",
    brand: "sony",
    type: "Wireless",
    addedInYear: 2023,
    alt: "Sony Wh-Ch510",
    productName: "Sony Wh-Ch510",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684522240/TechGiz/product-21.jpg",
    description:
      "Sony WH-CH510 Bluetooth Wireless On Ear Headphones with Mic (Black)",
    price: "3,949.00",
    oldPrice: "4,990.00",
    inStock: false,
    discount: 21,
    rating: 3.5
  },

  {
    _id: "478e74e4-c25c-4fe5-9a2c-c831c29e24f7",
    brand: "sony",
    type: "Wired",
    addedInYear: 2022,
    alt: "Sony MDR-EX155AP",
    productName: "Sony MDR-EX155AP",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684522655/TechGiz/product-22.jpg",
    description: "Sony MDR-EX155AP in-Ear Wired Headphones with Mic (Black)",
    price: "1,099.00",
    oldPrice: "1,290.00",
    inStock: true,
    discount: 15,
    rating: 3
  },
  {
    _id: "3c94fe5e-ae51-47f6-96e4-36e313ed1841",
    brand: "sony",
    type: "Wired",
    addedInYear: 2023,
    alt: "Sony MDR-ZX110",
    productName: "Sony MDR-ZX110",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684522655/TechGiz/product-23.jpg",
    description:
      "Sony MDR-ZX110 Wired On-Ear Headphones with tangle free cable, 3.5mm Jack, Headset with Mic for phone calls and 1 Year Warranty - (Black)",
    price: "1,485.00",
    oldPrice: "",
    inStock: true,
    discount: 0,
    rating: 3
  },
  {
    _id: "9091705d-7c52-4e6f-8ff0-8ae9d0e14e76",
    brand: "sony",
    type: "Speakers",
    addedInYear: 2022,
    alt: "Sony XB13",
    productName: "Sony XB13",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684522655/TechGiz/product-24.jpg",
    description:
      " Sony XB13 Extra BASS Portable IP67 Waterproof/Dustproof Wireless Bluetooth Speaker (Light Blue) with Knox Gear Hard Shell Storage and Travel Case (Black) Bundle",
    price: "15,240.00",
    oldPrice: "21,779",
    inStock: true,
    discount: 30,
    rating: 4
  },
  {
    _id: "6f3e9c5b-1d33-40c9-94b9-df32d2b730f2",
    brand: "Marshall",
    type: "Speakers",
    addedInYear: 2022,
    alt: "Marshall Emberton",
    productName: "Marshall Emberton",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684522655/TechGiz/product-25.jpg",
    description:
      "Marshall Emberton 20 Watt Wireless Bluetooth Portable Speaker (Black and Brass)",
    price: "14,999.00",
    oldPrice: "17,499.00",
    inStock: true,
    discount: 14,
    rating: 4
  },
  {
    _id: "90a9e032-7422-4d26-8de9-43049e198bda",
    brand: "Mivi",
    type: "Wired",
    addedInYear: 2023,
    alt: "Mivi Rock and Roll E5",
    productName: "Mivi Rock and Roll E5",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684522655/TechGiz/product-26.jpg",
    description:
      "Mivi Rock and Roll E5 Wired In Ear Earphones with HD Sound and Extra Powerful Bass with Mic, Tangle Free & Extra Length Cable | Earphones for Mobile | Black",
    price: "299.00",
    oldPrice: "799.00",
    inStock: true,
    discount: 63,
    rating: 3.2
  },
  {
    _id: "7271c9f3-491f-4b7f-8090-65dbab38ceef",
    brand: "Mivi",
    type: "Wireless",
    addedInYear: 2022,
    alt: "Mivi DuoPods A650",
    productName: "Mivi DuoPods A650",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684522655/TechGiz/product-27.jpg",
    description:
      "Mivi DuoPods A650 New Launch True Wireless in Ear Earbuds with Quad Mic ENC, 13mm Rich Bass Drivers, 55Hrs Playtime, Low Latency, Fast Charging, Clear Audio Quality, Made in India (Midnight Blue)",
    price: "1,299.00",
    oldPrice: "2,999.00",
    inStock: true,
    discount: 57,
    rating: 2.8
  },
  {
    _id: "924ea0e7-cb36-4877-89e4-41f6c01174e0",
    brand: "Mivi",
    type: "Speakers",
    addedInYear: 2023,
    alt: "Mivi Roam 2 ",
    productName: "Mivi Roam 2 ",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684522655/TechGiz/product-29.jpg",
    description:
      "Mivi DuoPods A650 New Launch True Wireless in Ear Earbuds with Quad Mic ENC, 13mm Rich Bass Drivers, 55Hrs Playtime, Low Latency, Fast Charging, Clear Audio Quality, Made in India (Midnight Blue)",
    price: "1,299.00",
    oldPrice: "2,999.00",
    inStock: true,
    discount: 57,
    rating: 2.8
  }
];
