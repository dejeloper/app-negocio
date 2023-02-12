import { FC } from 'react'
import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const AppLayout: FC<Props> = ({ children, title = "App de Negocios" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />

      <main style={{
        margin: '80px auto',
        maxWidth: '1440px',
        padding: '0 30px',
      }}>
        {children}
      </main>

      <footer>

      </footer>

    </>
  )
}
