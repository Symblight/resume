import React from 'react'
import PropTypes from 'prop-types'

import icons from './Icons'


export const Icon = ({
  width, height, icon, fill, className,
}, props) => (
  <svg
    width={width || '22'}
    height={height || '22'}
    viewBox={icons[icon].viewBox}
    className={className}
    {...props}
  >
    {
            icons[icon].path.map((el, i) => <path d={el.path} fill={fill || el.fill} key={i} />)
        }
  </svg>
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  className: PropTypes.string,
}
