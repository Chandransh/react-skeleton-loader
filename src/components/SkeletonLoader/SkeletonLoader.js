import React from "react";
import PropTypes from "prop-types";
import "./SkeletonLoader.css";

function SkeletonLoader({ customClassName, count, width, height, circle }) {
  let loaderItems = [];
  let style = {};
  const hasWidth = width !== null;
  const hasHeight = height !== null;
  let className = "skeleton-loader";

  if (customClassName) {
    className += " " + customClassName;
  }

  if (hasWidth) {
    style.width = width;
  }

  if (hasHeight) {
    style.height = height;
  }

  // Make circle based on either width or height
  if ((hasWidth || hasHeight) && circle) {
    // If both width and height are present, width is used
    const commonVal = width || height;

    style.width = commonVal;
    style.height = commonVal;
    style.borderRadius = "50%";
  }

  for (let i = 0; i < count; i++) {
    // Note: Since, we are not modifying our list, using index as key
    loaderItems.push(<div key={i} className={className} style={style} />);
  }

  return <React.Fragment>{loaderItems}</React.Fragment>;
}

SkeletonLoader.defaultProps = {
  count: 1,
  width: null,
  height: null,
  circle: false
};

SkeletonLoader.propTypes = {
  // `customClassName` can help in adding extra styles such as gradient and animation
  customClassName: PropTypes.string,
  // `count` can help in creating multiple skeleton lines
  count: PropTypes.number,
  // Any CSS units can be added for `width` 
  width: PropTypes.string,
  // Any CSS units can be added for `height`
  height: PropTypes.string,
  // To create circle or avatars, use `circle` prop. If using this, make sure to
  // provide either `width` or `height` prop. If both are present, width is used 
  circle: PropTypes.bool
};

export default SkeletonLoader;
