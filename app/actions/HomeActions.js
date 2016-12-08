import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
    	'action'
    );
  }

  generateActions(actions){alt.generateActions(actions)}
}

export default alt.createActions(HomeActions);
