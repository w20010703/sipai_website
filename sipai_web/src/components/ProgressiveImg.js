import React, { lazy } from 'react';

const _progressive_img = ({ src, ...props }) => {
  return (
    <img
      {...{ ...props }}
    />
  );
};

const ProgressiveImg = lazy (({ src, ...props }) => _progressive_img())
export default ProgressiveImg;