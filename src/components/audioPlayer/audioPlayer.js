import React, { useState, useEffect } from "react";
import './audioPlayer.css'

const useAudio = () => {
    const [audio] = useState(new Audio('/audio/dk_rap.mp3'));
    // const [audio] = useState(new Audio('/audio/air_horn.mp3'));
    const [playing, setPlaying] = useState(false);
    const [mute, setMute] = useState(false);

    const toggle = () => setPlaying(!playing);
    const toggleSound = () => setMute(!mute)
    const volumeUp = () => {
        if (audio.volume < 0.9) {
            audio.volume += 0.1
            setMute(false)
        }
    }
    const volumeDown = () => {
        if (audio.volume > 0.1) {
            audio.volume -= 0.1
        } else {
            setMute(true)
        }
    }


    useEffect(() => {
        playing ? audio.play() : audio.pause();
        mute ? audio.volume = 0 : audio.volume = 1
    },
        [playing, mute]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(true));
        console.log("in here")
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle, mute, toggleSound, volumeUp, volumeDown];
};

const Player = () => {
    const [playing, toggle, mute, toggleSound, volumeUp, volumeDown] = useAudio();

    return (
        <div>
            <i className="material-icons left buttonIcon" onClick={toggle}>{playing ? "pause" : "play_arrow"}</i>
            <i className="material-icons left buttonIcon" onClick={toggleSound}>{mute ? "volume_off" : "volume_up"}</i>
            <i className="material-icons left buttonIcon" onClick={volumeDown}>{"volume_mute"}</i>
            <i className="material-icons left buttonIcon" onClick={volumeUp}>{"volume_down"}</i>
        </div>
    );
};

export default Player;