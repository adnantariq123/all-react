import React, { Component } from 'react'
import withCounter from './withCounter'
// and becuase we import withCounter(and it is an HOC pattern)  the child now has whatever props we attached to it

class HoverCounter extends Component {

    render() {
        const { count, DaIncreasing, txt } = this.props
        // notice how power this is! it could be a onClick or onHover
        return <h3 onMouseOver={DaIncreasing}>Hello {this.props.name} Hovered {count} times, {txt}</h3>
    }
}

// so instead of exporting the orignal component, we are exporting the HOC with the attached thing.
export default withCounter(HoverCounter)