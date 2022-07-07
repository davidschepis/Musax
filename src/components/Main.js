import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Metronome from "./Metronome";
import BeatCreator from "./BeatCreator";

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
    const [showMetroModal, setMetroModal] = useState(false);
    const [showDrumModal, setDrumModal] = useState(false);
    const [showNoteModal, setNoteModal] = useState(false);

    const showMetroModalButton = () => {
        setMetroModal(true);
    }

    const showDrumModalButton = () => {
        setDrumModal(true);
    }

    const showNoteModalButton = () => {
        setNoteModal(true);
    }

    const closeMetroModal = () => {
        setMetroModal(false);
    };

    const closeDrumModal = () => {
        setDrumModal(false);
    };

    const closeNoteModal = () => {
        setNoteModal(false);
    };

    return (
        <div className="row">
            <div className="col-4 text-center">
                <div className="card h-100 mainCard" style={cardStyle} onClick={() => showMetroModalButton()}>
                    <img className="card-img-top" src="images/metronome.png" alt="Metronome" style={imgStyle} />
                    <div className="card-body">
                        <h5 className="card-title">Metronome</h5>
                        <p className="card-text">Modify BPM as needed</p>
                    </div>
                </div>
            </div>
            <div className="col-4 text-center">
                <div className="card h-100 mainCard" style={cardStyle} onClick={() => showDrumModalButton()}>
                    <img className="card-img-top" src="images/drums.png" alt="Metronome" style={imgStyle} />
                    <div className="card-body">
                        <h5 className="card-title">Beat Creator</h5>
                        <p className="card-text">Create a basic drum loop</p>
                    </div>
                </div>
            </div>
            <div className="col-4 text-center">
                <div className="card h-100 mainCard" style={cardStyle} onClick={() => showNoteModalButton()}>
                    <img className="card-img-top" src="images/note.png" alt="Metronome" style={imgStyle} />
                    <div className="card-body">
                        <h5 className="card-title">Note Finder</h5>
                        <p className="card-text">Find all notes in selected key</p>
                    </div>
                </div>
            </div>
            <div onClick={closeMetroModal}>
                <Modal
                    size="lg"
                    show={showMetroModal}
                    className="modal"
                    tabIndex="-1"
                    role="dialog"
                    id="MetroModal"
                    onClick={e => e.stopPropagation()}
                >
                    <div className="modal-dialog modal-xl w-100" role="document">
                        <div className="modal-content">
                            <div className="text-center">
                                <h2 className="modal-title" id="modalTitle">
                                    Metronome
                                </h2>
                            </div>
                            <div className="modal-body text-center">
                                <Metronome></Metronome>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
            <div onClick={closeDrumModal}>
                <Modal
                    size="lg"
                    show={showDrumModal}
                    className="modal"
                    tabIndex="-1"
                    role="dialog"
                    id="DrumModal"
                    onClick={e => e.stopPropagation()}
                >
                    <div className="modal-dialog modal-xl w-100" role="document">
                        <div className="modal-content">
                            <div className="text-center">
                                <h2 className="modal-title" id="modalTitle">
                                    Beat Creator
                                </h2>
                            </div>
                            <div className="modal-body text-center">
                                <BeatCreator></BeatCreator>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
            <div onClick={closeNoteModal}>
                <Modal
                    size="lg"
                    show={showNoteModal}
                    className="modal"
                    tabIndex="-1"
                    role="dialog"
                    id="NoteModal"
                    onClick={e => e.stopPropagation()}
                >
                    <div className="modal-dialog modal-xl w-100" role="document">
                        <div className="modal-content">
                            <div className="text-center">
                                <h2 className="modal-title" id="modalTitle">
                                    Metronome
                                </h2>
                            </div>
                            <div className="modal-body text-center">
                                <Metronome></Metronome>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
};

export default Main;