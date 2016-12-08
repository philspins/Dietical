import alt from '../alt';

class NavbarActions {
  constructor() {
    this.generateActions(
    	'action'
    );
  }

  generateActions(actions){alt.generateActions(actions)}
}

export default alt.createActions(NavbarActions);
