import React, { useState } from "react";

const cardStyle = {
    border: "solid rgb(199, 199, 199) 2px",
    display: "flex",
    overflow: "hidden",
    borderRadius: "5px",
};

const imgStyle = {
    borderRadius: "2px",
    maxHeight: "500px"
};

const Main = () => {
    return (
        <div className="row">
            <div className="col-4 text-center">
                <div className="card h-100" style={cardStyle}>
                    <img className="card-img-top" src="images/metronome.png" alt="Metronome" style={imgStyle} />
                    <div className="card-body">
                        <h5 className="card-title">Metronome</h5>
                        <p className="card-text">Modify BPM as needed</p>
                        <a href="#" className="btn btn-primary">Open</a>
                    </div>
                </div>
            </div>
            <div className="col-4 text-center">
                <div className="card h-100" style={cardStyle}>
                    <img className="card-img-top" src="images/drums.png" alt="Metronome" style={imgStyle} />
                    <div className="card-body">
                        <h5 className="card-title">Beat Creator</h5>
                        <p className="card-text">Create a basic drum loop</p>
                        <a href="#" className="btn btn-primary">Open</a>
                    </div>
                </div>
            </div>
            <div className="col-4 text-center">
                <div className="card h-100" style={cardStyle}>
                    <img className="card-img-top" src="images/note.png" alt="Metronome" style={imgStyle} />
                    <div className="card-body">
                        <h5 className="card-title">Note Finder</h5>
                        <p className="card-text">Find all notes in selected key</p>
                        <a href="#" className="btn btn-primary">Open</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;