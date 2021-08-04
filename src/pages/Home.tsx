import React from 'react'

import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

const Home = () => {

    const history: any = useHistory();

    const onRedirect = (site: string) => {
        switch(site){
            case "github":
                return window.open("https://github.com/TSecretT", "_blank");
            case "linkedin":
                return window.open("https://www.linkedin.com/in/tsecret/", "_blank");
            case "email":
                return window.open("mailto:timichfull@gmail.com", "_blank");
            default:
        }
    }

    return (
        <div className="page">
            <span className="tsecret">Timur <strong>TSecret</strong> Sabet</span>
            <div className="links">
                <GithubOutlined style={{ color: "black", fontSize: 32, margin: 10, cursor: "pointer" }}
                    onClick={() => onRedirect("github")}
                />
                <LinkedinOutlined style={{ color: "black", fontSize: 32, margin: 10, cursor: "pointer" }}
                    onClick={() => onRedirect("linkedin")}
                />
                <MailOutlined style={{ color: "black", fontSize: 32, margin: 10, cursor: "pointer" }}
                    onClick={() => onRedirect("email")}
                />
            </div>

            <span className="bday-wishlist-button" onClick={() => history.replace('/wishlist')}>
                My wishlist
            </span>
        </div>
    )
}

export default Home;