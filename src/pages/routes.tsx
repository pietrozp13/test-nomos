import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '@/components/Header'

import DeputadosList from '@/pages/DeputadosList';
import DeputadoDetails from '@/pages/DeputadoDetails';

import NotFound from '@/pages/404'

const AllRoutes = () => {
  return (
    <BrowserRouter>
    <Header />
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
