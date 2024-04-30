
import axios from 'axios';
import {
  OTP_REQUEST, OTP_SUCCESS, OTP_FAILURE,
  TRIP_REQUEST, TRIP_SUCCESS, TRIP_FAILURE,
  SET_PASSENGER_COUNT,
} from './actionTypes'

const otpRequest = () => ({ type: OTP_REQUEST });
const otpSuccess = (user) => ({ type: OTP_SUCCESS, payload: user });
const otpFailure = (error) => ({ type: OTP_FAILURE, payload: error });
const tripRequest = () => ({ type: TRIP_REQUEST });
const tripSuccess = (tripdetails) => ({ type: TRIP_SUCCESS, payload: tripdetails });
const tripFailure = (error) => ({ type: TRIP_FAILURE, payload: error });

export const setPassengerCount = (passengerCounts) => ({
  type: SET_PASSENGER_COUNT,
  payload: passengerCounts,
});

export const userTripDetails = (credentials) => {    
  return async (dispatch) => {
    dispatch(tripRequest());
    try {
      const response = await axios.post('http://localhost:4004/tripdetails', credentials);
      
      dispatch(tripSuccess(response.data));
    } catch (error) {
      dispatch(tripFailure(error.message));
    }
  };
};


export const getotp = (credentials) => {    
    return async (dispatch) => {
      dispatch(otpRequest());
      try {
        const response = await axios.post('http://localhost:4004/getotp', credentials);
        const { token, userId } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        dispatch(otpSuccess(response.data));
      } catch (error) {
        dispatch(otpFailure(error.message));
      }
    };
  };
