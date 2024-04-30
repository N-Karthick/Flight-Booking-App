
import { 
  OTP_REQUEST, OTP_SUCCESS , OTP_FAILURE ,
  TRIP_REQUEST, TRIP_SUCCESS , TRIP_FAILURE ,
  SET_PASSENGER_COUNT,

} from './actionTypes'

const initialState = {
  users: [],
  error: null,
  userTripDetails :[],
  passengers: {
    adults: 1,
    children: 0,
    infants: 0,
  },
  loading : false,
};

const userTrip = (state = initialState, action) => {
  switch (action.type) {
    case OTP_REQUEST:
      case TRIP_REQUEST:
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
          userTripDetails : action.payload,
          error : null,
        }
        case SET_PASSENGER_COUNT:
          return{
            ...state,
            passengers: action.payload,
          }
    case OTP_FAILURE:
      case TRIP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userTrip;
