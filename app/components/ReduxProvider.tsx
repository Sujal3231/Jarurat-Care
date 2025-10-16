"use client";

import React, { ReactNode, ReactElement } from "react";
import { store } from "../redux/store";
import { Provider } from "react-redux";

interface ReduxProviderProps {
  children: ReactNode;
}

export default function ReduxProvider({
  children,
}: ReduxProviderProps): ReactElement {
  return <Provider store={store}>{children}</Provider>;
}
