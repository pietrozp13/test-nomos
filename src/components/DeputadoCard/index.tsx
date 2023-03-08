import * as React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import CallMadeIcon from '@mui/icons-material/CallMade';

import { useNavigate } from 'react-router-dom';

interface DeputadosCard {
  key: number
  id: number
  nome: string
  partido: string
  photo: string
  cargo: string
  uf: string
}

export default function DeputadoCard(props: DeputadosCard) {
  const navigate = useNavigate();
  const { id, nome, partido, photo, cargo, uf } = props;
  return (
    <Box
      marginY={1}
      display="flex"
      flexDirection="row"
      height={88}
      justifyContent={'space-between'}
      padding={2}
      borderRadius={1}
      sx={{
        backgroundColor: "$tons-neutro-bg-secondary"
      }}
    >
      <Box display="flex" flexDirection="row">
        <Box>
          <Avatar
            alt={'Foto deputador:' + ''}
            src={photo}
            style={{
              width: 56,
              height: 56,
              border: '1px solid #3F8BE9',
            }}
          />
        </Box>
        <Box display="flex" flexDirection="column" marginLeft={3}>
          <Box display="flex">
            <Typography data-testid="name-info" variant={'$font-title-5'} component={'h2'}>
              {nome}
            </Typography>
            <Typography
              variant={'$font-body-base'}
              color={'$brand-color-primary'}
              marginLeft={3}
              component={'p'}
            >
              {cargo}
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
            <Box display="flex" flexDirection="row">
              <Typography
                variant={'$font-body-2'}
                color={'$tons-neutro-text'}
                component={'p'}
              >
                UF:
              </Typography>
              <Typography variant={'$font-body-base'} component={'p'}>
                {uf}
              </Typography>
            </Box>
            <Chip
              label="Em exercício"
              variant="outlined"
              color="primary"
              size="small"
            />
          </Stack>
        </Box>
      </Box>
      <Box display='flex' alignContent="center" alignItems="center">
        <Button data-testid="detail-button" size='small' endIcon={<CallMadeIcon sx={{
          transform: "rotate(15deg)",
        }} />} variant="contained" onClick={() => navigate(`/deputado/${id}`)}>
          Detalhes
        </Button>
      </Box>
    </Box>
  );
}
