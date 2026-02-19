import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import GithubContributions from './components/ui/GithubContributions';
import TechStack from './components/sections/TechStack';

function App() {
    return (
        <Layout>
            <div className="flex flex-col gap-0 md:gap-4 w-full">
                <Hero />
                <Experience />
                <Projects />
                <GithubContributions />
                <TechStack />
                <Contact />
            </div>
        </Layout>
    );
}

export default App;

