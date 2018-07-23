import React from 'react';
import PropTypes from 'prop-types';

import icons from './Icons';

export const Icon = props => (
    <svg 
        width={props.width ? props.width  :"22"}
        height={props.height ? props.height  :"22"}
        viewBox={icons[props.icon].viewBox}
    >
        {   
            icons[props.icon].path.map((el, i)=>
                <path d={el.path} fill={el.fill} key={i}></path>
            )
        }
    </svg>
  );
  
  Icon.propTypes = {
    icon: PropTypes.string.isRequired,
  };