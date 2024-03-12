
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require('./models/user'); //import path for userschema
const Product = require('./models/product');
const bcrypt = require("bcrypt");
const secretKey = "secret_key";
const jwt = require("jsonwebtoken")

// use middleware to parse JSON
app.use(express.json());

// check if the server is running
app.get(`/`,(req,res)=>{
    res.send("hello crud api");
});

// findAll
app.get(`/users`, verifyToken, async (req, res) => {
    try {
        const foundUsers = await User.find({});
        res.status(200).json({ message: "users fetched successfully!", users: foundUsers });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



// findOne
app.get(`/findOne/user`, verifyToken, async (req, res) => {
    try {
        const userId = req.user.userId; 
        if (!userId) { 
            return res.status(404).json({ message: 'please provide userId.' });
        };        
        const foundUser = await User.findOne({ _id: userId }).select('-password');         
        if (!foundUser) { 
            return res.status(404).json({ message: 'User not found' });
        };        
        res.status(200).json({ message: "user found:", data: foundUser });
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
});



// update:
app.put(`/update/user`, verifyToken, async (req, res) => {
    try {
    const userId = req.body._id;
    const userData = req.body; // Updated data
    if(!userId){
        return res.status(400).json("please provide userId")
    }
        const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// delete
app.delete(`/delete/user`,verifyToken,  async (req, res) => {
    const userId = req.body._id; // Getting userid from the request parameters

    try {
        const deletedUser = await User.findByIdAndDelete(userId); 
        if (!deletedUser) { 
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json("user Deleted."); 
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
});



// create a new user
app.post(`/register/users`, async (req,res)=>{
    try {
        const{name,email,password,contact,DOB}= req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({ message: "User already exist! please check." });
        };        
        // if(!name || !email|| !password || !contact|| !DOB){
        //     return res.status(400).json({message: "all fields are required!"})
        // };
        const errors = [];
        if (!name) {
            errors.push("name is required.")
        } else {
            const nameRegex = /^( ?[a-zA-Z]+ ?)+$/;
            if (!nameRegex.test(req.body.name)) {
                errors.push('please enter words only in name field.');
            };
        }
        if(!email){
            errors.push("email is required.")
        }else{
            const emailRegex = /^\s*[a-z0-9]+@[a-z]+\.[a-z]{2,3}\s*$/;
            if (!emailRegex.test(req.body.email)) {
                errors.push( 'please enter a valid email.' );
            };
        };
        if(!password){
            errors.push("password is required")
        }else{
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).{8,}$/;
            if (!passwordRegex.test(req.body.password)) {
                errors.push( 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long.' );
            };
        };
        if (!contact) {
            errors.push("contact is required.")
        } else {
            const contactRegex = /^\d{10}$/;
            if (!contactRegex.test(req.body.contact)) {
                errors.push( 'please enter a valid contact.' );
            }            
        };
        if (!DOB) {
            errors.push("DOB is required.");
        } else {
            const dateParts = DOB.split('-');
            if (dateParts.length !== 3 || dateParts[0].length !== 4 || dateParts[1].length !== 2 || dateParts[2].length !== 2) {
                errors.push('Invalid date of birth format. Date must be in yyyy-mm-dd format');
            } else {
                const year = parseInt(dateParts[0], 10);
                const month = parseInt(dateParts[1], 10);
                const day = parseInt(dateParts[2], 10);
                
                if (isNaN(year) || isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
                    errors.push('Invalid date of birth format. Date must be in yyyy-mm-dd format');
                } else if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
                    errors.push('Invalid date of birth format. Date must be in yyyy-mm-dd format');
                } else if (month === 2) {
                    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
                    if ((isLeapYear && day > 29) || (!isLeapYear && day > 28)) {
                        errors.push('Invalid date of birth format. Date must be in yyyy-mm-dd format');
                    }
                }
            }
        };
        if(errors.length>0){
            return res.status(400).json({message:errors.join(" ")});
        };
        const hashedPassword = await bcrypt.hash(password, 10); 
        const newUser = new User({
            name: name,
            password : hashedPassword,
            email : email,
            contact: contact,
            DOB : DOB,
        });
        await newUser.save(); 
        res.status(201).json(newUser); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message }); 
    }
});


// login:
app.post(`/login/user`, async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        console.log("data:", user);
        if (!user) {
            return res.status(400).json({ message: "User does not exist! please check." });
        }
        const isAuthenticated = await bcrypt.compare(password, user.password);
        if (!isAuthenticated) {
            return res.status(400).json({ message: "Invalid username or password." });
        } else {
            // Token generation:
            const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '120h' });
            // Save token 
            user.token = token; 
            await user.save();
      
            res.status(200).json({ message: "Logged in!", user });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// verify Token
function verifyToken(req, res, next) {
    let token = req.headers.authorization; 
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized! Token not provided." });
    }
    jwt.verify(token, secretKey, (error, decoded) => {
      console.log(token);
      if (error) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
      }
      req.user = decoded;
      console.log("verified userID: ", req.user);
      next();
    });
};


// Add product
app.post(`/products`, verifyToken, async (req, res) => {
    try {
        const userId = req.user.userId; 
        console.log("userId from token", userId);
        
        const { productname, quantity, price } = req.body;

        const product = new Product({
            productname,
            userId : userId,
            quantity,
            price
        });

        await product.save();

        // Update user's orderedProducts field
        const user = await User.findById(userId);
        console.log("user is:" , user)
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.orderedProducts.push(product._id);
        await user.save();

        res.status(201).json({ message: 'Product added successfully', product});
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// list products:
app.get(`/list/products`,verifyToken, async (req, res)=>{
    try {
        const orders = await Product.find({});   
        res.status(200).json({ message: 'List of all orders:', orders });
        if(!orders || orders.length=== 0){
            return res.status(404).json({message: 'no orders found.'})
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
});
 

// Find one product by ID
app.get(`/products/findOne`, verifyToken, async(req, res) => {
    try {
        const productId = req.body._id; 
        if (!productId) {
            return res.status(400).json({ message: 'Product ID is required' });
        }
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product found:', product });
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
});

// List products ordered by logged-in user
app.get(`/list/my-products`, verifyToken, async (req, res) => {
    try {
        const userId = req.user.userId; 
        console.log("userid at list products",userId);
        const products = await Product.find({ userId });
        if (!products || products.length === 0) {
            return res.status(404).json({ message: 'No products found for the current user' });
        }
        res.status(200).json({ message: 'List of products ordered by the current user:', products });
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
});




// connect to MongoDB and start the server
mongoose.connect("mongodb://localhost:27017/node_CRUD_DB2")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });
