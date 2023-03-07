import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import DeputadoDetailsCard from './index';

export default {
  title: 'Deputado Details Card',
  component: DeputadoDetailsCard,
} as ComponentMeta<typeof DeputadoDetailsCard>;

export const Main: ComponentStory<typeof DeputadoDetailsCard> = () => (
  <DeputadoDetailsCard
    key={1}
    id={1}
    nome={'Cleber'}
    partido={'PZP'}
    photo={''}
    cargo={'Deputado Federal'}
    uf={'SC'}
    nomeCivil={'Cleber da Silva'}
    email={"teste@teste.com.br"}
    phone={"(61) 9876-5432"}
    dataNascimento={"1998-10-15"}
    municipioNascimento={`São José - SC`}
    endereco={"Gabinete 123 - andar 1"}
    situacao={"Em Em exercício"}
  />
);
