import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProjectsPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/?g=artist');
  }, []);
  return <div></div>;
};

export default ProjectsPage;
