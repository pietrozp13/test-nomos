import { useQuery } from '@tanstack/react-query';

import { getDeputado } from '@/services/deputados';

export function useDeputado(deputadoId: number) {
  const { isLoading, isFetching, error, data } = useQuery({
    queryKey: [`deputadoData-${deputadoId}`, deputadoId],
    queryFn: () => getDeputado(deputadoId),
    staleTime: 3000,
  });

  return { isLoading, isFetching, error, data };
}
