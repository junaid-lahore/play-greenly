import { forwardRef, useCallback, useEffect, useMemo, type ComponentProps } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';

type To = NextLinkProps['href'];

type LinkProps = Omit<ComponentProps<typeof NextLink>, 'href'> & {
  to: To;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function RouterLink(
  { to, ...rest },
  ref
) {
  return <NextLink href={to} ref={ref} {...rest} />;
});

export function useNavigate() {
  const router = useRouter();
  return useCallback(
    (
      destination: To,
      options?: {
        replace?: boolean;
      }
    ) => {
      if (options?.replace) {
        router.replace(destination);
      } else {
        router.push(destination);
      }
    },
    [router]
  );
}

export function Navigate({ to, replace }: { to: To; replace?: boolean }) {
  const router = useRouter();

  useEffect(() => {
    if (replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }, [router, to, replace]);

  return null;
}

export function useLocation() {
  const router = useRouter();
  const asPath = router.asPath ?? '';

  return useMemo(() => {
    const hashIndex = asPath.indexOf('#');
    const queryIndex = asPath.indexOf('?');

    const pathname =
      queryIndex === -1 ? (hashIndex === -1 ? asPath : asPath.slice(0, hashIndex)) : asPath.slice(0, queryIndex);

    let search = '';
    let hash = '';

    if (queryIndex !== -1) {
      const end = hashIndex !== -1 ? hashIndex : asPath.length;
      search = asPath.slice(queryIndex, end);
    }

    if (hashIndex !== -1) {
      hash = asPath.slice(hashIndex);
    }

    return {
      pathname,
      search,
      hash,
    };
  }, [asPath]);
}

export function useSearchParams(): [URLSearchParams, (nextInit?: URLSearchParams | string) => void] {
  const router = useRouter();

  const searchParams = useMemo(() => {
    if (typeof window === 'undefined') {
      return new URLSearchParams();
    }

    return new URLSearchParams(window.location.search);
  }, [router.asPath]);

  const setSearchParams = useCallback(
    (nextInit?: URLSearchParams | string) => {
      if (typeof window === 'undefined') {
        return;
      }

      const params = new URLSearchParams(
        typeof nextInit === 'string' ? nextInit : nextInit || new URLSearchParams(window.location.search)
      );

      const next = `${window.location.pathname}?${params.toString()}`;
      router.replace(next, undefined, { shallow: true });
    },
    [router]
  );

  return [searchParams, setSearchParams];
}
