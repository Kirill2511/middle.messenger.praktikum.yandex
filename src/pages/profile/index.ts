import { Profile } from './profile';
import { connect } from '../../utils/connect';

const withUser = connect((state) => ({ ...state.currentUser }));

export default withUser(Profile);
