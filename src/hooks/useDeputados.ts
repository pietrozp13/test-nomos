import { useQuery } from '@tanstack/react-query';

import { getDeputados } from '@/services/deputados';

export function useDeputados(page: number, quant: number) {
  const { isLoading, isFetching, error, data } = useQuery({
    queryKey: [`deputadosData-${page}-${quant}`, page, quant],
    queryFn: () => getDeputados(page, quant),
    staleTime: 3000,
  });

  return { isLoading, isFetching, error, data };
}
