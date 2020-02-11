import React, {Component} from 'react';
import {storeFave, getFaves, removeFave} from '../../../config/model';

const FavesContext = React.createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }

  async componentDidMount() {
    let faveIds = await getFaves();
    this.setState({
      faveIds,
    });
  }

  addFaveSession = async sessionId => {
    try {
      const newFaves = await storeFave(sessionId);
      this.setState({
        faveIds: newFaves,
      });
    } catch (e) {
      console.log(e);
    }
  };

  removeFaveSession = async sessionId => {
    try {
      const newFaves = await removeFave(sessionId);
      this.setState({
        faveIds: newFaves,
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          faveIds: this.state.faveIds,
          addFaveSession: this.addFaveSession,
          removeFaveSession: this.removeFaveSession,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
  // more code will go here!
}

export default FavesContext;
export {FavesProvider};
