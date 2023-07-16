import React from "react";
import type { AppProps } from 'next/app'
import axios from "axios";
import { SWRConfig } from 'swr';

import '@/styles/globals.css'
import '@/styles/variables.scss'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}
