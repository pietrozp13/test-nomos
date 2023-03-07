import { useDeputados } from '@/hooks/useDeputados';
import { Box, Typography, Pagination, MenuItem } from '@mui/material';

import Select, { SelectChangeEvent } from '@mui/material/Select';

import DeputadoCard from '@/components/DeputadoCard';

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
  const page = useContextSelector(context, (v) => v[0].page);
  const quantPage = useContextSelector(context, (v) => v[0].quantPage);
  const setState = useContextSelector(context, (v) => v[1]);

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) =>
    setState((s: PageState) => ({ ...s, page: value }));
  const handleChangeQuantPage = (event: SelectChangeEvent) => {
    setState((s: PageState) => ({ ...s, quantPage: event.target.value }));
  };

  const { isLoading, data } = useDeputados(page, quantPage);

  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      height={'100%'}
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
        search
      </Box>
      {/* {JSON.stringify(data)} */}
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
      <Box>
        <Pagination
          count={10}
          color="primary"
          shape="rounded"
          page={page}
          onChange={handleChangePage}
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quantPage}
          label="Itens por página:"
          onChange={handleChangeQuantPage}
        >
          {QUANT_PER_PAGE_OPTIONS.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
}

export default DeputadosList;
