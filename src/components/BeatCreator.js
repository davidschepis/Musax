import { Howl, Howler } from 'howler';

const BeatCreator = () => {

    let snares = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let kicks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let hats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    let beatFlag = false;

    const snareClick = (e) => {
        if (snares[e.target.innerHTML - 1] === 0) {
            e.target.style.backgroundColor = "purple";
            snares[e.target.innerHTML - 1] = 1
        }
        else {
            e.target.style.backgroundColor = "white";
            snares[e.target.innerHTML - 1] = 0
        }
    };

    const kickClick = (e) => {
        if (kicks[e.target.innerHTML - 1] === 0) {
            e.target.style.backgroundColor = "purple";
            kicks[e.target.innerHTML - 1] = 1
        }
        else {
            e.target.style.backgroundColor = "white";
            kicks[e.target.innerHTML - 1] = 0
        }
    };

    const hatClick = (e) => {
        if (hats[e.target.innerHTML - 1] === 0) {
            e.target.style.backgroundColor = "purple";
            hats[e.target.innerHTML - 1] = 1
        }
        else {
            e.target.style.backgroundColor = "white";
            hats[e.target.innerHTML - 1] = 0
        }
    };

    const playBeat = async () => {
        beatFlag = true;
        for (let i = 0; i < snares.length; i++) {
            if (kicks[i] === 1) {
                playKick();
            }
            if (hats[i] === 1) {
                playHat();
            }
            if (snares[i] === 1) {
                playSnare();
            }
            await delay(150);
        }
        if (beatFlag) {
            playBeat()
        }
    };

    const delay = (ms) => {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    };

    const playSnare = () => {
        let sound = new Howl({
            src: ['assets/snare2.wav']
        });
        sound.play();
    };

    const playKick = () => {
        let sound = new Howl({
            src: ['assets/kick.wav']
        });
        sound.play();
    };

    const playHat = () => {
        let sound = new Howl({
            src: ['assets/hat.wav']
        });
        sound.play();
    };

    const stopBeat = async (e) => {
        beatFlag = false;
        e.target.innerHTML = "Stopping Next Measure...";
        await delay(150 * snares.length);
        e.target.innerHTML = "Stop";
    };

    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <h3>Hat</h3>
                </div>
                <div className="col-10">
                    <button onClick={(e) => hatClick(e)}>1</button>
                    <button onClick={(e) => hatClick(e)}>2</button>
                    <button onClick={(e) => hatClick(e)}>3</button>
                    <button onClick={(e) => hatClick(e)}>4</button>
                    <span>||</span>
                    <button onClick={(e) => hatClick(e)}>5</button>
                    <button onClick={(e) => hatClick(e)}>6</button>
                    <button onClick={(e) => hatClick(e)}>7</button>
                    <button onClick={(e) => hatClick(e)}>8</button>
                    <span>||</span>
                    <button onClick={(e) => hatClick(e)}>9</button>
                    <button onClick={(e) => hatClick(e)}>10</button>
                    <button onClick={(e) => hatClick(e)}>11</button>
                    <button onClick={(e) => hatClick(e)}>12</button>
                    <span>||</span>
                    <button onClick={(e) => hatClick(e)}>13</button>
                    <button onClick={(e) => hatClick(e)}>14</button>
                    <button onClick={(e) => hatClick(e)}>15</button>
                    <button onClick={(e) => hatClick(e)}>16</button>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <h3>Snare</h3>
                </div>
                <div className="col-10">
                    <button onClick={(e) => snareClick(e)}>1</button>
                    <button onClick={(e) => snareClick(e)}>2</button>
                    <button onClick={(e) => snareClick(e)}>3</button>
                    <button onClick={(e) => snareClick(e)}>4</button>
                    <span>||</span>
                    <button onClick={(e) => snareClick(e)}>5</button>
                    <button onClick={(e) => snareClick(e)}>6</button>
                    <button onClick={(e) => snareClick(e)}>7</button>
                    <button onClick={(e) => snareClick(e)}>8</button>
                    <span>||</span>
                    <button onClick={(e) => snareClick(e)}>9</button>
                    <button onClick={(e) => snareClick(e)}>10</button>
                    <button onClick={(e) => snareClick(e)}>11</button>
                    <button onClick={(e) => snareClick(e)}>12</button>
                    <span>||</span>
                    <button onClick={(e) => snareClick(e)}>13</button>
                    <button onClick={(e) => snareClick(e)}>14</button>
                    <button onClick={(e) => snareClick(e)}>15</button>
                    <button onClick={(e) => snareClick(e)}>16</button>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <h3>Kick</h3>
                </div>
                <div className="col-10">
                    <button onClick={(e) => kickClick(e)}>1</button>
                    <button onClick={(e) => kickClick(e)}>2</button>
                    <button onClick={(e) => kickClick(e)}>3</button>
                    <button onClick={(e) => kickClick(e)}>4</button>
                    <span>||</span>
                    <button onClick={(e) => kickClick(e)}>5</button>
                    <button onClick={(e) => kickClick(e)}>6</button>
                    <button onClick={(e) => kickClick(e)}>7</button>
                    <button onClick={(e) => kickClick(e)}>8</button>
                    <span>||</span>
                    <button onClick={(e) => kickClick(e)}>9</button>
                    <button onClick={(e) => kickClick(e)}>10</button>
                    <button onClick={(e) => kickClick(e)}>11</button>
                    <button onClick={(e) => kickClick(e)}>12</button>
                    <span>||</span>
                    <button onClick={(e) => kickClick(e)}>13</button>
                    <button onClick={(e) => kickClick(e)}>14</button>
                    <button onClick={(e) => kickClick(e)}>15</button>
                    <button onClick={(e) => kickClick(e)}>16</button>
                </div>
            </div>
            <div className="row">
                <button onClick={(e) => stopBeat(e)}>Stop</button>
                <button onClick={() => playBeat()}>Play</button>
            </div>
        </div>
    )
};

export default BeatCreator;