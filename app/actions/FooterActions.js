import alt from '../alt';

class FooterActions {
  constructor() {
    this.generateActions(
      'action'
    );
  }

  generateActions(actions){alt.generateActions(actions)}
}

export default alt.createActions(FooterActions);
