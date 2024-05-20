import axios from 'axios';
import {
  OTP_REQUEST, OTP_SUCCESS, OTP_FAILURE,
  LOGINRESPONSE_SUCCESS, LOGINRESPONSE_FAILURE,
  TRIP_REQUEST, TRIP_SUCCESS, TRIP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  SIGNUP_SUCCESS, SIGNUP_REQUEST, SIGNUP_FAILURE,
  TRAVELLERDETAILS_SUCCESS, TRAVELLERDETAILS_FAILURE,

  SET_PASSENGER_COUNT,
  SET_TRIP_DETAILS,

  SET_PINANDSTATE
} from './actionTypes'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4004'
});

const otpRequest = () => ({ type: OTP_REQUEST });
const otpSuccess = (user) => ({ type: OTP_SUCCESS, payload: user });

const tripRequest = () => ({ type: TRIP_REQUEST });
const tripSuccess = (tripdetails) => ({ type: TRIP_SUCCESS, payload: tripdetails });
const tripFailure = (error) => ({ type: TRIP_FAILURE, payload: error });

// const SigupSuccess = (userDetails) => ({ type: SIGNUP_SUCCESS, payload: userDetails });
// const SigupFailure = (error) => ({ type: SIGNUP_FAILURE, payload: error.message });
const SigupRequest = () => ({ type: SIGNUP_REQUEST });

const loginSuccess = (loginDetails) => ({ type: LOGIN_SUCCESS, payload: loginDetails });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });
const loginRequest = () => ({ type: LOGIN_REQUEST });



export const LoginResponseSuccess = (message) => ({
  type: LOGINRESPONSE_SUCCESS,
  payload: { message },
});

export const TravellerDetailsSuccess = (message) => ({
  type: TRAVELLERDETAILS_SUCCESS,
  payload: { message },
});

export const LoginResponseFailure = (error) => ({
  type: LOGINRESPONSE_FAILURE,
  payload: { error },
});

export const setPassengerCount = (passengerCounts) => ({
  type: SET_PASSENGER_COUNT,
  payload: passengerCounts,
});

export const setPinAndState = (PinAndStateDetails) => ({
  type: SET_PINANDSTATE,
  payload: PinAndStateDetails,
});

export const setTripDetails = (tripDetails) => ({
  type: SET_TRIP_DETAILS,
  payload: tripDetails,
});

export const SigupSuccess = (message) => ({
  type: SIGNUP_SUCCESS,
  payload: { message },
});

export const SigupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: { error },
});

export const TravellerDetailsFailure = (error) => ({
  type: TRAVELLERDETAILS_FAILURE,
  payload: { error },
});

export const userTripDetails = (credentials) => {
  return async (dispatch) => {
    dispatch(tripRequest());
    try {
      const response = await axiosInstance.post('/tripdetails', credentials);

      dispatch(tripSuccess(response.data));
      console.log("RES====>", response.data)
    } catch (error) {
      dispatch(tripFailure(error.message));
    }
  };
};

export const userLoginDetails = (credentials) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axiosInstance.post('/Login', credentials);
      dispatch(loginSuccess(response.data));
      const message = response.data.message;
      dispatch(LoginResponseSuccess(message));
      // console.log("RES====>", response.data)
      const { email, token } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
    } catch (error) {
      const errormessage = error.response.data.error;
      dispatch(LoginResponseFailure(errormessage));
      console.log('-----LoginResponseFailure---->', errormessage)
    }
  };
};




export const getOtp = (credentials) => {
  return async (dispatch) => {
    dispatch(otpRequest());
    try {
      const response = await axiosInstance.post('/getOTP', credentials);
      dispatch(otpSuccess(response.data));
      const message = response.data.message;
      console.log('Response from backend:', message);
      dispatch(SigupSuccess(message));
    } catch (error) {
      // dispatch(otpFailure(error.message));
      dispatch(SigupFailure(error.response.data.error));
      console.log('-----SigupResponseFailure---->', error.response.data.error)
    }
  };
};

export const userSigninDetails = (userDetails) => {
  return async (dispatch) => {
    dispatch(SigupRequest());
    try {
      const response = await axiosInstance.post('/Signup', userDetails);
      const message = response.data.message;
      console.log('Response from backend:', message);
      dispatch(SigupSuccess(message));
    } catch (error) {
      dispatch(SigupFailure(error.response.data.error));
      console.log('-----SigupResponseFailure---->', error.response.data.error)
    }
  }
}

export const travellerDetail = (travellerDetails) => {
  return async (dispatch) => {
    // dispatch();
    try {
      const  token = localStorage.getItem('token') 
      // localStorage.getItem('token', token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        },
      };
console.log('---------->travellerDetails',travellerDetails)
      const response = await axiosInstance.post('/TravellerDetails',travellerDetails,config);
      console.log('================>travellerDetails response ',response)
      const message = response.data.message;
      console.log('Response from backend:', message);
      dispatch(TravellerDetailsSuccess(message));
    } catch (error) {
      dispatch(TravellerDetailsFailure(error.response.data.error));
      console.log('-----TravellerDetailsFailure---->', error.response.data.error)
    }
  }
}
