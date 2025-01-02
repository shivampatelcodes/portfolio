/* eslint-disable no-unused-vars */
import { Suspense, lazy, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const About = lazy(() => import('../components/About'));
const Skills = lazy(() => import('../components/Skills'));
const Projects = lazy(() => import('../components/Projects'));

const LazyLoadComponent = () => {
  const [aboutLoaded, setAboutLoaded] = useState(false);
  const [skillsLoaded, setSkillsLoaded] = useState(false);
  const [projectsLoaded, setProjectsLoaded] = useState(false);

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    onChange: (inView) => inView && setAboutLoaded(true),
  });

  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    onChange: (inView) => inView && setSkillsLoaded(true),
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
    onChange: (inView) => inView && setProjectsLoaded(true),
  });

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {aboutLoaded && <div ref={aboutRef}><About /></div>}
        {skillsLoaded && <div ref={skillsRef}><Skills /></div>}
        {projectsLoaded && <div ref={projectsRef}><Projects /></div>}
      </Suspense>
    </div>
  );
};

export default LazyLoadComponent;
