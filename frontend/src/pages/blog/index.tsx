import type { GetServerSideProps } from 'next';

export { default } from 'pages/Blog';

const redirectMap: Record<string, string> = {
  'biodegradable-golf-balls-materials': '/blog-biodegradable-golf-balls-materials',
  'biodegradable-vs-conventional-golf-balls': '/blog-biodegradable-vs-conventional',
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query.slug;

  if (typeof slug === 'string') {
    const destination = redirectMap[slug] ?? '/blog';
    return {
      redirect: {
        destination,
        permanent: true,
      },
    };
  }

  return { props: {} };
};
