import React from 'react';

function GiphysIndexItem ({giphy}) {
  return (
    <img src={giphy.images.original.url} />
  );
}

export default GiphysIndexItem;
