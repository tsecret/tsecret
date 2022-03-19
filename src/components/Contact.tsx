import React from 'react'
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'

const Contact = ({ scrollRef }: any) => {

    const iconStyle: any = { color: "white", fontSize: 32, marginRight: 8 }

    const onRedirect = (site: string) => {
        switch(site){
            case "github":
                return window.open("https://github.com/TSecretT", "_blank");
            case "linkedin":
                return window.open("https://www.linkedin.com/in/tsecret/", "_blank");
            case "email":
                return window.open("mailto:timur.sabet@gmail.com", "_blank");
            default:
        }
    }

    return (
        <div className="hero min-h-screen" ref={scrollRef}>
            <div className="hero-content text-center flex-col">
                <h1 className="text-5xl font-bold" >Contact me</h1>
                <div className="links">

                    <button className="btn btn-outline m-2" onClick={() => onRedirect("github")}>
                        <GithubOutlined style={iconStyle} />
                        Github
                    </button>
                    
                    <button className="btn btn-outline m-2" onClick={() => onRedirect("linkedin")}>
                        <LinkedinOutlined style={iconStyle} />
                        LinkedIn
                    </button>

                    <button className="btn btn-outline m-2" onClick={() => onRedirect("email")}>
                        <MailOutlined style={iconStyle} />    
                        Email
                    </button>
                </div>
                </div>
        </div>
    )
}

export default Contact