import React, {Component} from 'react';
//import Radium from 'radium'; took code form the SubTileSeparator.react.js
// location: ..\ADP.RS.PlanHealth.UI\app\retirement\shared\containers\DashboardTile

class SubTileSeparator extends Component {

  render() {
    const style = {
      divider: {
        borderBottom: '1px solid #ccc',
        width: 'calc(100% - 100px)',
        margin: '15px auto'
      }
    };
    return (
      <div style={style.divider} />
    );
  }
}

//export default Radium(SubTileSeparator);
export default SubTileSeparator;