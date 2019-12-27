import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

  render() {
    const { count, DaIncreasing } = this.props
    // notice how power this is! it could be a onClick or onHover
    return <button onClick={DaIncreasing}>{this.props.name} Clicked {count} times</button>
  }
}

// so instead of exporting the orignal component, we are exporting the HOC with the attached thing.
export default withCounter(ClickCounter, 5)