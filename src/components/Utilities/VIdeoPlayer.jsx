'use client'
import { useState } from "react"
const { default: YouTube } = require("react-youtube")

const VideoPLayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const option = {
        height: '250',
        width: '300',
    }
    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button
                    onClick={handleVideoPlayer}
                    className="text-color-primary float-right bg-color-secondary px-3 mb-1" >X</button>
                <YouTube
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    onError={() => alert('video is broken, please try another!')}
                />
            </div>
        )
    }

    return isOpen ? <Player />
        :
        <button className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark" onClick={handleVideoPlayer}>
            Tonton Trailer
        </button>
}

export default VideoPLayer