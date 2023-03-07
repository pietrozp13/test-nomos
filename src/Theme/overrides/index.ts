import { merge } from 'lodash';

import Input from './Input';
import Typography from './Typography';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return merge(Input(theme), Typography(theme));
}
