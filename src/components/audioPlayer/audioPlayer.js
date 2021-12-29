import React, { useState, useEffect } from "react";
import './audioPlayer.css'
import { useSelector } from 'react-redux'

const useAudio = () => {
    const theme = useSelector(state => state.theme)
    const path = theme.path
    const [audio, setAudio] = useState(new Audio(`${path}audio.mp3`));
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
        if (playing ? audio.play() : null)
        // audio.play()
        if (mute ? audio.volume = 0 : null)
        // audio.addEventListener('ended', () => audio.play());
        setPlaying(true)
    },
        [audio]
    );

    useEffect(() => {
        audio.pause()
        setAudio(new Audio(`${path}audio.mp3`))
    },
        [path]
    );

    useEffect(() => {
        console.log(audio)
        playing ? audio.play() : audio.pause();
        mute ? audio.volume = 0 : audio.volume = 1
    },
        [playing, mute]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => audio.play());
        return () => {
            audio.removeEventListener('ended', () => setPlaying(true));
        };
    }, [audio]);

    return [playing, toggle, mute, toggleSound, volumeUp, volumeDown];
};

const Player = () => {
    const [playing, toggle, mute, toggleSound, volumeUp, volumeDown] = useAudio();
    const screenWidth = document.documentElement.clientWidth
    const screenHeight = document.documentElement.clientHeight
    const navHeight = screenHeight / 10;
    const titleWidth = screenWidth / 2
    const settingsWidth = screenWidth / 4
    const titleFontSize = Math.min(navHeight / 3, titleWidth / 1)
    const imageSize = titleFontSize + 20
    const paddingTopNav = navHeight / 5
    const navFontSize = settingsWidth / 15
    const iconSize = navFontSize / 2

    return (
        <div>
            <i className="material-icons left buttonIcon" style={{ width: `${iconSize}px`, height: `${iconSize}px` }} onClick={toggle}>{playing ? "pause" : "play_arrow"}</i>
            <i className="material-icons left buttonIcon"  style={{ width: `${iconSize}px`, height: `${iconSize}px` }}onClick={toggleSound}>{mute ? "volume_off" : "volume_up"}</i>
            <i className="material-icons left buttonIcon"  style={{ width: `${iconSize}px`, height: `${iconSize}px` }}onClick={volumeDown}>{"volume_mute"}</i>
            <i className="material-icons left buttonIcon"  style={{ width: `${iconSize}px`, height: `${iconSize}px` }}onClick={volumeUp}>{"volume_down"}</i>
        </div>
    );
};

export default Player;