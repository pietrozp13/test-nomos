import { merge } from 'lodash';

import Input from './Input';
import Typography from './Typography';
import Button from './Button';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return merge(Input(theme), Typography(theme), Button(theme));
}
