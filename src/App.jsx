import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import TechStack from './components/sections/TechStack';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import GithubContributions from './components/ui/GithubContributions';

function App() {
    return (
        <Layout>
            <div className="flex flex-col gap-0 w-full relative z-10">
                <Hero />
                <TechStack />
                <Education />
                <Experience />
                <Projects />
                <GithubContributions />
                <Contact />
            </div>
        </Layout>
    );
}

export default App;

