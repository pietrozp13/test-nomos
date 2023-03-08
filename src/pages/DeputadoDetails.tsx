import { useDeputado } from '@/hooks/useDeputado';
import { useParams } from 'react-router-dom';
import DeputadoDetailsCard from '@/components/DeputadoDetailsCard'
import Loader from '@/components/Loader'

import { Box } from '@mui/material';

interface Address {
  sala: string;
  andar: string;
  predio: string;
}

function DeputadoDetails() {
  const { id } = useParams();
  const { isLoading, error, data } = useDeputado(Number(id));

  const getEndereco = (data: Address) => {

    return `Gabinete ${data.sala} - andar ${data.andar} - predio ${data.predio}`
  }

  if (isLoading && !data) {
    return <Loader />;
  }

  const { nomeCivil, dataNascimento, municipioNascimento, ufNascimento, ultimoStatus} = data.dados;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems={'center'}
        height={'100%'}
        sx={{
          backgroundColor: "$tons-neutro-bg-primary"
        }}
      >
    <Box
      height={'252px'}
      width={'100%'}
      sx={{
        backgroundColor: "$brand-color-primary"
      }}
      />
      <Box sx={{ marginTop: "-126px" }}>
        <DeputadoDetailsCard
          id={Number(id)}
          nome={nomeCivil}
          cargo="Deputado federeal"
          nomeCivil={nomeCivil}
          partido={ultimoStatus.siglaPartido}
          email={ultimoStatus.email}
          phone={"(61) " + ultimoStatus.gabinete.telefone}
          photo={ultimoStatus.urlFoto}
          dataNascimento={dataNascimento}
          municipioNascimento={`${municipioNascimento} - ${ufNascimento}`}
          endereco={getEndereco(ultimoStatus.gabinete)}
          situacao={ultimoStatus.situacao}
          condicaoEleitoral={ultimoStatus.condicaoEleitoral}
          ultimaData={ultimoStatus.data}
        />
      </Box>
      </Box>
    </>
  );
}

export default DeputadoDetails;
