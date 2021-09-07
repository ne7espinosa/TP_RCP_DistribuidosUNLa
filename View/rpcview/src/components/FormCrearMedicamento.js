import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function FormCrearMedicamento({ onSubmit }) {

    const [medicamentos, setMedicamentos] = useState([]);
    const [nomDroga, setNombreGenerico] = React.useState("");
    const [nomComercial, setNombreComercial] = React.useState("");
    // const [tipoMedicamento, setTipoMedicamento] = React.useState("");
    const [codigo, setCodigo] = React.useState("");

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
                        setMedicamentos([...tipomedicamentos]);
                    }
                })
        }, 1000);


    }, []);

    const bodyModal = (
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Nombre Comercial</Form.Label>
                    <Form.Control
                        placeholder="Nombre Comercial"
                        value={nomComercial}
                        onChange={event => setNombreComercial(event.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Nombre Comercial</Form.Label>
                    <Form.Control
                        placeholder="Nombre Generico"
                        value={nomDroga}
                        onChange={event => setNombreGenerico(event.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Codigo</Form.Label>
                    <Form.Control
                        placeholder="Codigo"
                        value={codigo}
                        onChange={event => setCodigo(event.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tipo Medicamento</Form.Label>
                    <Form.Select aria-label="Tipo Medicamento">
                        {
                            medicamentos.length > 0 ?
                                medicamentos.map(medicamento => {
                                    return (
                                        <option value={medicamento.id}>{medicamento.nombre}</option>
                                    )
                                })
                                :
                                <option>No existen tipo medicamento</option>
                        }
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit" block style={{marginTop : '20px'}}>
                    Crear
                </Button>
            </Form>

        </div>
    );

    return (
        <>
            {bodyModal}
        </>
    );
};

