import React from 'react';
import useSetTitle from '../../hooks/useSetTitle';
import './AddService.css';

const AddService = () => {
  useSetTitle('Add Service');
  return (
    <div>
      <h1>Add Service</h1>
    </div>
  );
};

export default AddService;
