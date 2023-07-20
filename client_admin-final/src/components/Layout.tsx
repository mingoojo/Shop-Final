import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAccessToken from '../hooks/useAccessToken';
import useCheckAccessToken from '../hooks/useCheckAccessToken';

import Header from './default/Header';
import Button from './ui/Button';

export default function Layout() {
  const navigate = useNavigate();
  const { accessToken, setAccessToken } = useAccessToken();
  useCheckAccessToken();

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
  }, [accessToken]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
