import * as React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

interface DeputadoType {
  id: number;
  nome: string;
  uf?: string;
  partido: string;
  photo: string;
  cargo: string;
  nomeCivil: string;
  email: string;
  dataNascimento: string;
  municipioNascimento: string;
  phone: string;
  endereco: string;
  situacao: string;
}

export default function DeputadoDetailsCard(props: DeputadoType) {
  const {
    cargo,
    nomeCivil,
    photo,
    email,
    dataNascimento,
    municipioNascimento,
    phone,
    endereco,
    situacao, // ta faltando isso
    partido,
  } = props;

  const Info = (key: string, value: string) => {
    return (
      <Box display="flex" flexDirection="row">
        <Typography
          variant={'$font-body-2'}
          color={'$tons-neutro-text'}
          component={'p'}
        >
          {key}:
        </Typography>
        <Typography marginLeft={1} variant={'$font-body-base'} component={'p'}>
          {value}
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      marginY={1}
      display="flex"
      flexDirection="column"
      width={384}
      justifyContent={'space-between'}
      paddingX={2}
      borderRadius={1}
      sx={{
        backgroundColor: "$tons-neutro-bg-secondary"
      }}
    >
      <Box display="flex" flexDirection="column" marginY={2}>
        <Box display="flex" justifyContent="center">
          <Avatar
            alt={'Foto deputador:' + ''}
            src={photo}
            style={{
              objectFit: 'contain',
              width: 130,
              height: 130,
              border: '4px solid #3F8BE9',
            }}
          />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            variant={'$font-body-base'}
            color={'$brand-color-primary'}
            component={'p'}
            marginY={2}
          >
            {cargo}
          </Typography>
          <Box display="flex">
            <Typography data-testid="name-info-detail" variant={'$font-title-5'} component={'h2'}>
              {nomeCivil}
            </Typography>
          </Box>
          <Stack
            direction="row"
            spacing={2}
            height={'100%'}
            alignItems="center"
          >
            <Box display="flex" flexDirection="row">
              <Typography
                variant={'$font-body-2'}
                color={'$tons-neutro-text'}
                component={'p'}
              >
                Partido:
              </Typography>
              <Typography variant={'$font-body-base'} component={'p'}>
                {partido}
              </Typography>
            </Box>
          </Stack>
          <Typography
            variant={'$font-body-base'}
            color={'$tons-neutro-text'}
            component={'p'}
          >
            TITULAR EM EXERCÍCIO 2019 - 2023 FAKEEEE
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box marginY={4}>
        <Stack
          direction="column"
          spacing={4}
          height={'100%'}
          alignItems="flex-star"
        >
          {Info('Nome Civil', nomeCivil)}
          {Info('Email', email)}
          {Info('Telefone', phone)}
          {Info('Endereço', endereco)}
          {Info('Nascimento', dataNascimento)}
          {Info('Naturalidade', municipioNascimento)}
        </Stack>
      </Box>
    </Box>
  );
}
