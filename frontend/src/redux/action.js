
import axios from 'axios';
import {
  OTP_REQUEST, OTP_SUCCESS, OTP_FAILURE,
  TRIP_REQUEST, TRIP_SUCCESS, TRIP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  SET_PASSENGER_COUNT,
  SET_TRIP_DETAILS,
  SIGNUP_SUCCESS, SIGNUP_REQUEST, SIGNUP_FAILURE
} from './actionTypes'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4004'
});

const otpRequest = () => ({ type: OTP_REQUEST });
const otpSuccess = (user) => ({ type: OTP_SUCCESS, payload: user });
const otpFailure = (error) => ({ type: OTP_FAILURE, payload: error });

const tripRequest = () => ({ type: TRIP_REQUEST });
const tripSuccess = (tripdetails) => ({ type: TRIP_SUCCESS, payload: tripdetails });
const tripFailure = (error) => ({ type: TRIP_FAILURE, payload: error });

const SigupSuccess = (userDetails) => ({ type: SIGNUP_SUCCESS, payload: userDetails });
const SigupFailure = (error) => ({ type: SIGNUP_FAILURE, payload: error.message });
const SigupRequest = () => ({ type: SIGNUP_REQUEST });

const loginSuccess = (loginDetails) => ({ type: LOGIN_SUCCESS, payload: loginDetails });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });
const loginRequest = () => ({ type: LOGIN_REQUEST });

export const setPassengerCount = (passengerCounts) => ({
  type: SET_PASSENGER_COUNT,
  payload: passengerCounts,
});

export const setTripDetails = (tripDetails) => ({
  type: SET_TRIP_DETAILS,
  payload: tripDetails,
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
      console.log("RES====>", response.data)
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};


export const getOtp = (credentials) => {
  return async (dispatch) => {
    dispatch(otpRequest());
    try {
      const response = await axiosInstance.post('/getOTP', credentials);
      dispatch(otpSuccess(response.data));
    } catch (error) {
      dispatch(otpFailure(error.message));
    }
  };
};

export const userSigninDetails = (userDetails) => {
  return async (dispatch) => {
    dispatch(SigupRequest());
    try {
      const response = await axiosInstance.post('/Signup', userDetails);
      // const { token, userId } = response.data;
      // localStorage.setItem('token', token);
      // localStorage.setItem('userId', userId);
      dispatch(SigupSuccess(response.data));
      dispatch({ type: SIGNUP_SUCCESS, payload: 'Sign-up successful!' });
    } catch (error) {
      dispatch(SigupFailure(error.message))
    }
  }
}

