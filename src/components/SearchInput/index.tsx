import { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

export const SearchField = ({ value, title, formValueKey, onChange }) => {
  const [text, setText] = useState(value)
  return (
    <TextField
      size="small"
      variant="outlined"
      value={text}
      placeholder={title}
      onChange={(event) => setText(event.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment
            sx={{
              cursor: 'pointer'
            }}
            position="end"
            onClick={() => {
              onChange(formValueKey, text)}}
          >
            <Search sx={{ fontSize: 24, color: '$tons-neutro-text' }} />
          </InputAdornment>
        )
      }}
    />
  )
}
