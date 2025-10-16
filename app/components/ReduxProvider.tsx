'use client';

import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { ReactNode } from 'react';

interface ReduxProviderProps {
  children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}