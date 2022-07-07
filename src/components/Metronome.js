import React, { useState } from "react";
import { Howl, Howler } from 'howler';

const Metronome = () => {

    const [bpm, setbpm] = useState(0)

    let soundInterval = null

    const lowerbpm = () => {
        if (bpm === 0) {
            //do nothing
        }
        else {
            setbpm(bpm - 1)
        }
    };

    const raisebpm = () => {
        setbpm(bpm + 1)
    };

    const playSound = () => {
        let sound = new Howl({
            src: ['assets/hit.wav']
        });
        sound.play();
    }

    const setSound = () => {
        let seconds = calcSeconds()
        if (seconds === -1) {
            //do nothing
        }
        else {
            soundInterval = window.setInterval(playSound, seconds)
        }
    };

    const stopSound = () => {
        clearInterval(soundInterval)
    };

    const calcSeconds = () => {
        if (bpm <= 0) {
            return -1;
        }
        return 60000 / bpm
    };

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <h1>{bpm}</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="metroButton" onClick={() => lowerbpm()}>Lower</button>
                    </div>
                    <div className="col">
                        <button className="metroButton" onClick={() => setSound()}>Play</button>
                    </div>
                    <div className="col">
                        <button className="metroButton" onClick={() => stopSound()}>Stop</button>
                    </div>
                    <div className="col">
                        <button className="metroButton" onClick={() => raisebpm()}>Raise</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Metronome;