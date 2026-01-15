import { useState } from 'react';

const A = (props) => {
  const { name } = props;
  return (
    <div>{name || 'a'}</div>
  );
};

export default A;