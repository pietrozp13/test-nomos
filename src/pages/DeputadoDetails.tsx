import { useDeputado } from '@/hooks/useDeputado';
import { useParams } from 'react-router-dom';
import DeputadoDetailsCard from '@/components/DeputadoDetailsCard'

import { Box } from '@mui/material';

interface Address {
  sala: string;
  andar: string;
  predio: string;
}

function DeputadoDetails() {
  const { id } = useParams();
  const { isLoading, error, data } = useDeputado(Number(id));

  if (isLoading && !data) {
    return <p>loading...</p>;
  }
  const getEndereco = (data: Address) => {

    return `Gabinete ${data.sala} - andar ${data.andar} - predio ${data.predio}`
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
      <DeputadoDetailsCard
        id={Number(id)}
        nome={data.dados.nomeCivil}
        cargo="Deputado federeal"
        nomeCivil={data.dados.nomeCivil}
        partido={data.dados.ultimoStatus.siglaPartido}
        email={data.dados.ultimoStatus.email}
        phone={"(61) " + data.dados.ultimoStatus.gabinete.telefone}
        photo={data.dados.ultimoStatus.urlFoto}
        dataNascimento={data.dados.dataNascimento}
        municipioNascimento={`${data.dados.municipioNascimento} - ${data.dados.ufNascimento}`}
        endereco={getEndereco(data.dados.ultimoStatus.gabinete)}
        situacao={data.dados.ultimoStatussituacao}
      />
    </Box>
  );
}

export default DeputadoDetails;
