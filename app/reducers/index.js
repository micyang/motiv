import { combineReducers } from 'redux';
import { routerReducers} from 'react-router-redux';
import messages from './messages';
import auth from './auth';
import diet from './diet';
import profile from './profile';

export default combineReducers({
  messages,
  auth,
  profile,
  diet
});
