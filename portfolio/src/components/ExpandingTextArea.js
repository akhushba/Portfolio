import React, { useState } from 'react';
import { TextField } from '@mui/material'

const ExpandingTextArea = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form  noValidate autoComplete="off">
      <TextField
        id="outlined-multiline-static"
        label="Message"
        multiline
        rows={4}
        variant="filled"
        value={value}
        onChange={handleChange}
        error = {!value}
        required
        helperText = 'Message is required'
        sx={{ display: 'flex' }}
      />
    </form>
  );
};

export default ExpandingTextArea;