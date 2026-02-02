import { useState } from 'react';

const A = (props) => {
  const { message, name } = props;
  return (
    <div>{`${name || 'a'} say ${message || ''}`}</div>
  );
};

export default A;