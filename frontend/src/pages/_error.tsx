import { NextPageContext } from 'next';
import SomethingWentWrongPage from 'pages/SomethingWentWrongPage';

type ErrorPageProps = {
  statusCode?: number;
};

function ErrorPage(_: ErrorPageProps) {
  return <SomethingWentWrongPage />;
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default ErrorPage;
