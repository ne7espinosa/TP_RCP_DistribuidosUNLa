import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';

function Tipomedicamento() {

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
        }, 2000);


    }, []);

    console.log(tipomedicamentos);
    return (
        <Container>
            <Col>
                <div className="d-flex p-3 justify-content-end">
                    <Button className="float-right" variant="warning">Ver ahora</Button>
                </div>
            </Col>
            <Col>
                <div className="d-flex p-3 justify-content-center">

                    <Table responsive="sm" striped bordered hover variant="dark" size="sm">
                        <thead>
                            <tr>
                                <th>#Codigo</th>
                                <th>Nombre Comercial</th>
                                <th>Nombre Genérico</th>
                                <th>Tipo Medicamento</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        {
                            tipomedicamentos.map(tipomedicamento => {
                                return (
                                    <tbody key={tipomedicamento.id}>
                                        <tr>
                                            <td>{tipomedicamento.codigo}</td>
                                            <td>{tipomedicamento.nomComercial}</td>
                                            <td>{tipomedicamento.nomDroga}</td>
                                            <td>{tipomedicamento.medicamento[0].nombre}</td>
                                            <td><Button variant="danger">Eliminar ahora</Button></td>
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

export default Tipomedicamento
