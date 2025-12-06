import Head from 'next/head';
import { ReactNode } from 'react';

interface HelmetProps {
  children?: ReactNode;
}

export function Helmet({ children }: HelmetProps) {
  return <Head>{children}</Head>;
}

export default Helmet;
