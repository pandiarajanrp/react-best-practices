import React from "react";
import {Table, Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";

const ViewModal = ({props, onClose, isOpen}) => {
    const closeModal = () => {
        onClose();
    }
    return (
        <Modal isOpen={isOpen} toggle={closeModal}>
            <ModalHeader toggle={closeModal}>View Movie</ModalHeader>
            <ModalBody>
                <Table>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>{props.title}</td>
                        </tr>
                        <tr>
                            <td>Director</td>
                            <td>{props.director}</td>
                        </tr>
                        <tr>
                            <td>Producer</td>
                            <td>{props.producer}</td>
                        </tr>
                        <tr>
                            <td>Release Date</td>
                            <td>{props.release_date}</td>
                        </tr>
                    </tbody>
                </Table>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={closeModal}>Close</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ViewModal;