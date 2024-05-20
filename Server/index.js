const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const connectDB = require('./config/db');
const authenticateToken = require('./auth/jwt');
const app = express();
const PORT = process.env.PORT;
const bcrypt = require('bcrypt')
var otpCache = undefined;
const secretKey = 'qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM.,1234567890!@#$%^&*()'; 

app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

const TravellerBookingSchema = require('./schema/userTravellerBookingModel');
const NewUserDetails = require('./schema/userSinupSchema');
const generateOTP = require('./auth/otp');

// app.post('/tripdetails', async (req, res) => {
//     const { selectedFormOption, selectedToOption, selectedDate, passengersData } = req.body;
//     const newTrip = new TripBookingSchema({
//         from: selectedFormOption,
//         to: selectedToOption,
//         date: selectedDate,
//         passengers: passengersData
//     });
//     const result = await newTrip.save();
//     const storedResult = { 
//         _id: result._id,
//         __v: result.__v,
//         from: selectedFormOption,
//         to: selectedToOption,
//         date: selectedDate,
//         passengersData: passengersData
//     };
//     console.log("Trip details",storedResult)
//     res.status(201).json({ message: 'Trip details stored successfully', trip: storedResult });
// });

app.post('/getOTP', async (req, res) => {
    const { email } = req.body;
    try {
        const User = await NewUserDetails.findOne({ email: email });
        if (User) {
            console.log('User with this email already exists');
            res.json({message:'email is already exist.. Do Login'});
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
        res.json({message: 'email is already exist.. Do Login'});
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
        res.status(201).json({ message: 'User Register Successfully...', User: newUser })
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await NewUserDetails.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
  
      res.status(200).json({ message: 'Login successful', token,email });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.post('/TravellerDetails',authenticateToken,async (req,res) => {
    const {
        SelectedTripDetails: {
          selectedFormOption,
          selectedToOption,
          selectedDate,
          passengersData
        },
        PinAndStateDetails: {
          billingAddress,
          pinCode,
          state
        },
        companyName,
        registrationNo,
        email,
        mobile,
        travellerDetails:{
            adults,
            children,
            infants,
        }
      } = req.body;
    const newTrip = new TravellerBookingSchema({
        from: selectedFormOption,
        to: selectedToOption,
        date: selectedDate,
        passengers: passengersData,
        billingAddress: billingAddress,
        pinCode: pinCode,
        state: state,
        companyName: companyName,
        registrationNo:registrationNo,
        email:email,
        mobile: mobile,
        adults:adults,
        children:children,
        infants:infants
    });
    const result = await newTrip.save();
    console.log("Trip details",result)
    res.status(201).json({ message: 'Trip details stored successfully',result });

  })

connectDB()
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

