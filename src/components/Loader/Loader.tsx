import React from 'react';
import './Loader.scss';

export const Loader: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div className="Loader" data-cy="loader" {...props}>
    <div className="Loader__content" />
  </div>
);
