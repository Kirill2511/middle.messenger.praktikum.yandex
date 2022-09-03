import { ChangeSettings } from './change-settings';
import { connect } from '../../../utils/connect';

const withUser = connect((state) => ({ ...state.currentUser }));

export default withUser(ChangeSettings);
