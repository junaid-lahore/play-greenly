import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Component to handle redirects from old blog URLs to new slug-based URLs
export function BlogRedirect({ slug }: { slug: string }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/Blog?slug=${slug}`, { replace: true });
  }, [navigate, slug]);

  // Return a simple loading state while redirecting
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-gray to-brand-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-green mx-auto mb-4"></div>
        <p className="text-brand-black">Redirecting...</p>
      </div>
    </div>
  );
}

export default BlogRedirect;
