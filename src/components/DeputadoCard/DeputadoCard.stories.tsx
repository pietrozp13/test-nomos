import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import DeputadoCard from './index';

export default {
  title: 'Deputado List Card',
  component: DeputadoCard,
} as ComponentMeta<typeof DeputadoCard>;

export const Main: ComponentStory<typeof DeputadoCard> = () => (
  <DeputadoCard
    key={1}
    id={1}
    nome={'Cleber'}
    partido={'PZP'}
    photo={''}
    cargo={'Deputado Federal'}
    uf={'SC'}
  />
);
