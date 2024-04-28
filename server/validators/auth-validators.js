const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be of 3 characters" })
    .max(225, { message: "Name must not be more than 225 characters" }),
  password: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email must be of 3 characters" })
    .max(225, { message: "Email must not be more than 225 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be of 10 characters" })
    .max(20, { message: "Phone must not be more than 20 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be of 7 characters" })
    .max(1024, { message: "Password must not be more than 1024 characters" }),
});

module.exports = signupSchema;
