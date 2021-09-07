import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Col } from 'react-bootstrap';

function TipoMedicamento() {

    const [tipomedicamentos, setTipomedicamentos] = useState([]);

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
                        setTipomedicamentos([...tipomedicamentos]);
                    }
                })
        }, 1000);


    }, []);

    return (
        <Container>
            <Col>
                <div className="d-flex p-3 justify-content-end">
                    <Button className="float-right" variant="warning">Crear</Button>
                </div>
            </Col>
            <Col>
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
                            tipomedicamentos.map(tipomedicamento => {
                                return (
                                    <tbody key={tipomedicamento.id}>
                                        <tr>
                                            <td>{tipomedicamento.id}</td>
                                            <td>{tipomedicamento.nombre}</td>
                                            <td><Button variant="danger">Eliminar</Button></td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </Table>
                </div>
            </Col>
        </Container>
    )
}

export default TipoMedicamento
