import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';

function Medicamento() {

    const [medicamentos, setMedicamentos] = useState([]);

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
        }, 2000);


    }, []);

    console.log(medicamentos);
    return (
        <div className="d-flex p-5 justify-content-center">
            <Table striped bordered hover variant="dark" size="sm" responsive>
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
                    medicamentos.map(medicamento => {
                        return (
                            <tbody key={medicamento.id}>
                                <tr>
                                    <td>{medicamento.codigo}</td>
                                    <td>{medicamento.nomComercial}</td>
                                    <td>{medicamento.nomDroga}</td>
                                    <td>{medicamento.tipoMedicamento[0].nombre}</td>
                                    <td><Button variant="danger">Eliminar</Button></td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </Table>
        </div>
    )
}

export default Medicamento
