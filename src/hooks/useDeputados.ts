import { useQuery } from '@tanstack/react-query';

import { getDeputados } from '@/services/deputados';

export function useDeputados(page: number, quant: number, nameDeputado: string | null, partido: string | null, uf: string | null) {
  const { isLoading, isFetching, error, data } = useQuery({
    queryKey: [`deputadosData-${page}-${quant}-${nameDeputado}-${partido}-${uf}`, page, quant, nameDeputado, partido, uf],
    queryFn: () => getDeputados(page, quant, nameDeputado, partido, uf),
    staleTime: 3000,
  });

  return { isLoading, isFetching, error, data };
}
