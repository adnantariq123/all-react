import React, { Component } from 'react';

import Button from './VisualShared/ButtonsStyle';


class Visual extends Component {
    
    render() {
    
        const style = {
            withALL: {
                border: '1px solid #ccc',
                margin: '15px auto',
                height:'40px'
            },
            Small: {
              width: 'calc(100% - 90%)'
            },
            Medium: {
                width: 'calc(100% - 50%)'
            },
            Large: {
                width: 'calc(100% - 30%)'
            }

          };


        return ( 
            <React.Fragment>
                <button style={Object.assign({},Button.secondary, style.withALL, style.Medium )}>some button</button>
                
                
                <button style={Object.assign({},Button.base, style.withALL, style.Small )}>what button</button>
                
                
                <button style={Object.assign({},Button.primary, style.withALL, style.Large )}>big big button</button>                
            </React.Fragment> );
    }
}
 
export default Visual;