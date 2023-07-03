import React from 'react/addons';
import { PropTypes, Component } from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';

import {greatPlaceStyle} from './my_great_place_style.js';

export default class MyGreatPlace extends Component {
    static propTypes = {
        text: PropTypes.string
    };
    
    static defaultProps = {};
    
    shouldComponentUpdate = shouldPureComponentUpdate;
    
    render() {
        return (
         <div style={greatPlaceStyle}>
            {this.props.text}
         </div>
        );
    }
    }