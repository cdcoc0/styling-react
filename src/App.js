import React, {Component} from 'react';
import SassComponent from './SassComponent';
import CSSModule from './CSSModule';
import StyledComponents from './StyledComponents';


class App extends Component {
  render() {
    return(
      <div>
        <SassComponent />
        <CSSModule />
        <StyledComponents />
      </div>
    );
  }
}

export default App;
