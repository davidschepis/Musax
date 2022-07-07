import { Howl, Howler } from 'howler';

const BeatCreator = () => {

    let snares = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const snareClick = (e) => {
        e.target.style.backgroundColor = "purple";
        snares[e.target.innerHTML - 1] = 1
    };

    const playBeat = async () => {
        for (let i = 0; i < snares.length; i++) {
            if (snares[i] === 1) {
                playSnare();
            }
            await delay(100)
        }
    };

    const delay = (ms) => {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    };

    const playSnare = () => {
        let sound = new Howl({
            src: ['assets/snare.wav']
        });
        sound.play();
    }

    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <h3>Snare</h3>
                </div>
                <div className="col-10">
                    <button onClick={(e) => snareClick(e)}>1</button>
                    <button onClick={(e) => snareClick(e)}>2</button>
                    <button onClick={(e) => snareClick(e)}>3</button>
                    <button onClick={(e) => snareClick(e)}>4</button>
                    <button onClick={(e) => snareClick(e)}>5</button>
                    <button onClick={(e) => snareClick(e)}>6</button>
                    <button onClick={(e) => snareClick(e)}>7</button>
                    <button onClick={(e) => snareClick(e)}>8</button>
                    <button onClick={(e) => snareClick(e)}>9</button>
                    <button onClick={(e) => snareClick(e)}>10</button>
                    <button onClick={(e) => snareClick(e)}>11</button>
                    <button onClick={(e) => snareClick(e)}>12</button>
                    <button onClick={(e) => snareClick(e)}>13</button>
                    <button onClick={(e) => snareClick(e)}>14</button>
                    <button onClick={(e) => snareClick(e)}>15</button>
                    <button onClick={(e) => snareClick(e)}>16</button>
                </div>
            </div>
            <div className="row">
                <button>Reset</button>
                <button onClick={() => playBeat()}>Play</button>
            </div>
        </div>
    )
};

export default BeatCreator;