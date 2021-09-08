import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Col, Modal, InputGroup, FormControl, Row } from 'react-bootstrap';
import FormCrearMedicamento from './FormCrearMedicamento';

function Medicamento() {

    const [medicamentos, setMedicamentos] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setTimeout(function () {
            fetch('../medicamentos.json'
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
                .then(function (medicamentosResolve) {
                    let medicamentos = medicamentosResolve[0].datos;
                    if (medicamentos) {
                        setMedicamentos([...medicamentos]);
                    }
                })
        }, 1000);


    }, []);

    return (
        <>
            <Container>
                <Col>
                    <div className="d-flex p-5 justify-content-center">
                        <InputGroup className="mb-3">
                            <Button variant="success" id="button-addon1">
                                Buscar
                            </Button>
                            <FormControl
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Button onClick={handleShow} className="mb-3 float-left" style={{ marginLeft: '100px' }} variant="warning">Crear</Button>
                    </div>
                    <Table responsive="sm" striped bordered hover variant="dark" size="sm">
                            <thead>
                                <tr>
                                    <th>#Codigo</th>
                                    <th>Nombre Comercial</th>
                                    <th>Nombre Genérico</th>
                                    <th>Tipo Medicamento</th>
                                </tr>
                            </thead>
                            {
                                medicamentos.map(medicamento => {
                                    return (
                                        <tbody key={medicamento.id}>
                                            <tr>
                                                <td>{medicamento.codigo}</td>
                                                <td>{medicamento.nomComercial}</td>
                                                <td>{medicamento.nomDroga}</td>
                                                <td>{medicamento.tipoMedicamento[0].nombre}</td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </Table>
                </Col>
            </Container>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Medicamento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormCrearMedicamento />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Medicamento
