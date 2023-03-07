import React, { useState, ReactNode } from 'react';

import { createContext } from 'use-context-selector';

interface ContextProps  {
  children: React.ReactNode
}

export const context = createContext({});

export const DeputadosStateProvider = (props: ContextProps) => (
  <context.Provider value={useState({ page: 1, quantPage: 10 })}>
    {props.children}
  </context.Provider>
);
