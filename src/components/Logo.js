import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

const Logo = () => {
    const [path, setPath] = useState("");
    const history = useHistory();
    let pathname = window.location.pathname;
    useEffect(() => {
        pathname = window.location.pathname;
        setPath(pathname)
    }, [window.location.pathname]);

    const savePrevPage = () => {
        if (location.pathname !== "/") {
          localStorage.setItem("prevPage", location.pathname)
        }
      }

    const redirectMe = () => {
        if (!path.match("/live-video-chat") &&
           !path.match("/searching-profile") &&
           !path.match("/audio-chat") &&
           !path.match("/video-chat")
           ) {
            // history.push("/")
           savePrevPage()
            window.location.replace("/");
        }
    }
    return (
        <a href="javascript:void(0)" onClick={redirectMe}>
            <img src="/assets/images/glitters.png" style={{ cursor: ( !path.match("/video-chat") && !path.match("/audio-chat") && !path.match("/live-video-chat") && !path.match("/searching-profile")) ? "pointer" : "default" }} alt="Glitters" />
        </a>
    )
}

export default Logo;