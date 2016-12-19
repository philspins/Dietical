import alt from '../utils/Dispatcher';
import HeaderActions from '../actions/HeaderActions';

class HeaderStore {
    constructor() {
      this.bindActions(HeaderActions);
    }
}

export default alt.createStore(HeaderStore);
