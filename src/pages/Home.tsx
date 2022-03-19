import React from 'react'

import { About, Contact, Projects } from '../components';

const Home = () => {
    const homeRef = React.useRef()
    // const workRef = React.useRef()
    const projectsRef = React.useRef()
    const contactRef = React.useRef<any>()

    const executeScroll = (ref: any) => ref.current.scrollIntoView()

    React.useEffect(() => {
        switch (window.location.hash){
            case "#home":
                executeScroll(homeRef);
                break;
            // case "#work":
                // executeScroll(workRef);
                break;
            case "#projects":
                executeScroll(projectsRef);
                break;
            case "#contact":
                executeScroll(contactRef);
                break;
            default:
        }
    }, [])

    return (
        <div className="page">
            <About scrollRef={homeRef} />
            <Projects scrollRef={projectsRef} />
            <Contact scrollRef={contactRef} />
        </div>
    )
}

export default Home;