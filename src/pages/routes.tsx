import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DeputadosList from './DeputadosList';
import DeputadoDetails from './DeputadoDetails';

import NotFound from './404'

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DeputadosList />} />
        <Route path="/deputados" element={<DeputadosList />} />
        <Route path="/deputado/:id" element={<DeputadoDetails />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
