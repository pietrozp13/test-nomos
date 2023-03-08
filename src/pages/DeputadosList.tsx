import { Box, Typography, Pagination, MenuItem, TextField, InputAdornment, Stack } from '@mui/material';

import Select, { SelectChangeEvent } from '@mui/material/Select';

import { SearchField } from '@/components/SearchInput'
import DeputadoCard from '@/components/DeputadoCard';
import Loader from '@/components/Loader'

import { useContextSelector } from 'use-context-selector';
import { context } from '@/contexts/useDeputados';

import { QUANT_PER_PAGE_OPTIONS } from '@/utils/constants';

interface PageState {
  page: number;
  quantPage: number;
}

interface DeputadosType {
  id: number;
  nome: string;
  siglaPartido: string;
  urlFoto: string;
  siglaUf: string;
}

function DeputadosList() {
  const {data, isLoading} = useContextSelector(context, (v) => v[0].request);
  const page = useContextSelector(context, (v) => v[0].page);
  const lastPage = useContextSelector(context, (v) => v[0].lastPage);
  const quantPage = useContextSelector(context, (v) => v[0].quantPage);
  const nameDeputado = useContextSelector(context, (v) => v[0].nameDeputado);
  const partido = useContextSelector(context, (v) => v[0].partido);
  const uf = useContextSelector(context, (v) => v[0].uf);
  const setState = useContextSelector(context, (v) => v[1]);

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    handleSetState('page', value)
  }

  const handleChangeTextState = (key: string, value: string) => {
    handleSetState(key, value)
  }

  const handleChangeQuantPage = (event: SelectChangeEvent) => {
    handleSetState('quantPage', event.target.value)
  };

  const handleSetState = (key: string, value: string | number) => {
    setState((s: PageState) => ({ ...s, [key]: value }));
  }

  if (isLoading && !data) {
    return <Loader />
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight={"100%"}
      paddingX={9}
      paddingY={7}
      sx={{
        backgroundColor: "$tons-neutro-bg-primary"
      }}
    >
      <Typography component={'h1'} variant={'$font-title-3'} marginBottom={1}>
        Deputados
      </Typography>
      <Typography
        component={'p'}
        variant={'$font-body-base'}
        color="$tons-neutro-text"
      >
        Veja abaixo a lista de deputados
      </Typography>
      <Box display="flex" marginTop={8} marginBottom={7}>
        <Stack spacing={3} direction={'row'}>
          <SearchField title={'Buscar por Deputado'} value={nameDeputado} formValueKey={"nameDeputado"} onChange={handleChangeTextState} />
          <SearchField title={'Partido'} value={partido} formValueKey={"partido"} onChange={handleChangeTextState} />
          <SearchField title={'UF'} value={uf} formValueKey={"uf"} onChange={handleChangeTextState} />
        </Stack>
      </Box>
      {data &&
        data.dados &&
        data?.dados?.map((deputado: DeputadosType) => {
          return (
            <DeputadoCard
              key={deputado.id}
              id={deputado.id}
              nome={deputado.nome}
              partido={deputado.siglaPartido}
              photo={deputado.urlFoto}
              cargo={'Deputado Federal'}
              uf={deputado.siglaUf}
            />
          );
        })}
      <Box display={'flex'} marginY={2} justifyContent="flex-end" alignItems={"center"}>
        <Pagination
          count={lastPage}
          color="primary"
          shape="rounded"
          page={page}
          onChange={handleChangePage}
        />
        <Typography
          component={'p'}
          variant={'$font-body-base'}
          color="$brand-color-secondary"
        >
          Itens por página:
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quantPage}
          sx={{
            marginLeft: 1,
            height: '36px'
          }}
          onChange={handleChangeQuantPage}
        >
          {QUANT_PER_PAGE_OPTIONS.map((item) => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
}

export default DeputadosList;
