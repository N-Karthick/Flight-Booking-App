const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT;
const bcrypt = require('bcrypt')
var otpCache = undefined;

app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

const TripBookingSchema = require('./schema/userBookingSchema');
const NewUserDetails = require('./schema/userSinupSchema');
const generateOTP = require('./auth/otp');
console.log("outside post");

app.post('/tripdetails', async (req, res) => {
    const { selectedFormOption, selectedToOption, selectedDate, passengersData } = req.body;
    const newTrip = new TripBookingSchema({
        from: selectedFormOption,
        to: selectedToOption,
        date: selectedDate,
        passengers: passengersData
    });
    const result = await newTrip.save();
    const storedResult = {
        _id: result._id,
        __v: result.__v,
        from: selectedFormOption,
        to: selectedToOption,
        date: selectedDate,
        passengersData: passengersData
    };
    res.status(201).json({ message: 'Trip details stored successfully', trip: storedResult });
});

app.post('/getOTP', async (req, res) => {
    const { email } = req.body;
    try {
        const User = await NewUserDetails.findOne({ email: email });
        if (User) {
            console.log('User with this email already exists');
            res.json('email is already exist.. Do Login');
        } else {
            const { otp, hashedOTP } = await generateOTP(email);
            otpCache = hashedOTP
            console.log("Generated OTP", otp)
            res.json({ message: 'OTP generated and sent to your email for verification.' });
        }
    } catch (error) {
        console.error('Error during OTP generation and sending:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/Signup', async (req, res) => {
    const { name, email, phone, password, otp } = req.body;

    const User = await NewUserDetails.findOne({ email: email });
    if (User) {
        console.log('User with this email already exists');
        res.json('email is already exist.. Do Login');
    }
    if (!name || !email || !phone) {
        res.json('Field is required.');
    }
    console.log("111", otp)
    console.log("222", otpCache)
    const otpMatch = await bcrypt.compare(otp, otpCache);
    if (!otpMatch) {
        console.log("Incorrect OTP. Please try again.")
         res.status(400).json({ error: 'Incorrect OTP. Please try again.' });
    } else {
        console.log("--------- OTP Verified----------")
    }
    if (!User && otpMatch) {
        const hashedPassword = await bcrypt.hash(password, 7);
        const newUser = new NewUserDetails({
            name: name,
            email: email,
            phone: phone,
            password: hashedPassword,
        })
        const result = await newUser.save();
        console.log("=============>", result)
        res.status(201).json({ message: 'New User Added Successfully...', User: newUser })
    }
})


connectDB()
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

