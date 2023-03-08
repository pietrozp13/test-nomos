import React, { useState, ReactNode } from 'react';

import { createContext } from 'use-context-selector';
import { useDeputados } from '@/hooks/useDeputados';

interface ContextProps  {
  children: React.ReactNode
}

export const context = createContext({});

export const DeputadosStateProvider = (props: ContextProps) => {
  const [state, setState] = useState({
    page: 1,
    quantPage: 10 ,
    lastPage: 1,
    nameDeputado: '',
    partido: '',
    uf: '',
  })
  const { isLoading, data } = useDeputados(state.page, state.quantPage, state.nameDeputado, state.partido, state.uf);

  const getLastPage = () => {
    if (data?.links && data.links[3] && data.links[3].href) {
      const params = new Proxy(new URLSearchParams(data.links[3].href), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      return params.pagina;
    }
    // "&pagina=17"
    return 1;
  }

  return(
    <context.Provider value={[{...state, lastPage: getLastPage(), request: {isLoading, data}}, setState]}>
      {props.children}
    </context.Provider>
  )
}
