import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Col, Modal, Alert } from 'react-bootstrap';
import FormCrearTipoMedicamento from './FormCrearTipoMedicamento';

function TipoMedicamento() {

    const [tipoMedicamentos, setTipoMedicamentos] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEliminar, setShowEliminar] = useState(false);
    const handleShowEliminar = () => setShowEliminar(true);
    const handleCloseEliminar = () => setShowEliminar(false);



    useEffect(() => {
        setTimeout(function () {
            fetch('../tipomedicamentos.json'
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            )
                .then(function (response) {
                    return response.json();
                })
                .then(function (tipomedicamentosResolve) {
                    let tipomedicamentos = tipomedicamentosResolve[0].datos;
                    if (tipomedicamentos) {
                        setTipoMedicamentos([...tipomedicamentos]);
                    }
                })
        }, 1000);


    }, []);

    return (
        <>
            <Container>
                <Col>
                    <div className="d-flex p-3 justify-content-end">
                        <Button onClick={handleShow} className="float-right" variant="warning">Crear</Button>
                    </div>
                    <div className="d-flex p-3 justify-content-center">

                        <Table responsive="sm" striped bordered hover variant="dark" size="sm">
                            <thead>
                                <tr>
                                    <th>#Codigo</th>
                                    <th>Nombre</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>
                            {
                                tipoMedicamentos.map(tipomedicamento => {
                                    return (
                                        <tbody key={tipomedicamento.id}>
                                            <tr>
                                                <td>{tipomedicamento.id}</td>
                                                <td>{tipomedicamento.nombre}</td>
                                                <td><Button value={tipomedicamento.id} variant="danger" onClick={handleShowEliminar}>Eliminar</Button></td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </Table>
                    </div>
                </Col>
                <Col>

                </Col>
            </Container>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Tipo Medicamento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormCrearTipoMedicamento />
                </Modal.Body>
            </Modal>

            <Modal show={showEliminar} onHide={handleCloseEliminar} animation={false}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Alert variant="danger">
                        <Alert.Heading>Eliminar Tipo de Medicamento?</Alert.Heading>
                        <p>
                            Estas seguro de Eliminar el Tipo de Medicamento?
                            Una vez eliminado no podras recuperarlo
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button variant="outline-danger">
                                Sí, eliminar
                            </Button>
                        </div>
                    </Alert>
                </Modal.Body>
            </Modal>
        </>



    )
}

export default TipoMedicamento
