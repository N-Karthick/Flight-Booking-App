import {
  OTP_REQUEST, OTP_SUCCESS, OTP_FAILURE,
  TRIP_REQUEST, TRIP_SUCCESS, TRIP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  SET_PASSENGER_COUNT,SET_TRIP_DETAILS

} from './actionTypes'

const initialState = {
  users: [],
  error: null,
  userTripDetails: [],
  SelectedTripDetails:[],
  loginDetails: [],
  userDetails: [],
  passengers: {
    adults: 1,
    children: 0,
    infants: 0,
  },
  loading: false,
  signinResponse: null,
};

const userTrip = (state = initialState, action) => {
  switch (action.type) {

    case OTP_REQUEST:
    case TRIP_REQUEST:
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
      return { ...state, loading: false, error: null };

    case OTP_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: null,
      };
    case TRIP_SUCCESS:
      return {
        ...state,
        userTripDetails: action.payload,
        error: null,
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        userDetails: action.payload,
        payload : 'signin sussessful',
        error: null,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        userLoginDetails: action.payload,
        error: null,
      }
    case SET_PASSENGER_COUNT:
      return {
        ...state,
        passengers: action.payload,
      } 
      case SET_TRIP_DETAILS:
      return {
        ...state,
        SelectedTripDetails: action.payload,
      }


    case OTP_FAILURE:
    case TRIP_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userTrip;
