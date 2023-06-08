import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Gautam",
    lastName: "Pandey",
    email: "gautamshekhar078@gmail.com",
    password: "Gautam#123",
    address: [
      {
        _id: uuid(),
        name: "Gautam kumar",
        zipCode: "805128",
        street: "Road no 1 , Ashok nagar , kankarbagh",
        city: "Patna",
        district: "Patna",
        state: "Bihar",
        country: "India",
        phoneNumber: "7779843621"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  }
];
