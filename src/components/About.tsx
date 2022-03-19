

const About = ({ scrollRef }: any) => {


    return (
        <div className="hero min-h-screen" ref={scrollRef}>
            <div className="hero-content text-center flex-col sm:flex-row">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold fade-in">Hello! </h1>
                    <p className="py-6 text-xl max-w-sm">I am <strong>Timur</strong>, a mechatronics systems and software engineer</p>
                </div>
                <div className="max-w-md">
                    <span className="text-[128px]" >👨🏻‍💻</span>
                </div>
            </div>
        </div>
    )
}

export default About