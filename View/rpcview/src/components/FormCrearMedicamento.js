import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function FormCrearMedicamento() {

    const [medicamentos, setMedicamentos] = useState([]);
    const [nomDroga, setNombreGenerico] = React.useState("");
    const [nomComercial, setNombreComercial] = React.useState("");
    const [tipoMedicamento, setTipoMedicamento] = React.useState("");
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
        }, 0);


    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        alert(`Your state values: \n 
                codigo: ${codigo} \n 
                nom comercial: ${nomComercial} \n 
                nom generico: ${nomDroga} \n 
                tipo medicamento: ${tipoMedicamento} \n 
                `);
    };

    const bodyModal = (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Codigo</Form.Label>
                    <Form.Control
                        placeholder="Codigo"
                        value={codigo}
                        onChange={event => setCodigo(event.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nombre Comercial</Form.Label>
                    <Form.Control
                        placeholder="Nombre Comercial"
                        value={nomComercial}
                        onChange={event => setNombreComercial(event.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Nombre Generico</Form.Label>
                    <Form.Control
                        placeholder="Nombre Generico"
                        value={nomDroga}
                        onChange={event => setNombreGenerico(event.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tipo Medicamento</Form.Label>
                    <Form.Control
                        as="select"
                        value={tipoMedicamento}
                        onChange={event => setTipoMedicamento(event.target.value)}
                    >
                        <option>Elija un Tipo de Medicamento</option>
                        {
                            medicamentos.length > 0 ?
                                
                                medicamentos.map(medicamento => {
                                    return (
                                        <option key={medicamento.id} value={medicamento.id}>{medicamento.nombre}</option>
                                    )
                                })
                                :
                                <option>No existen tipo de medicamento</option>
                        }
                    </Form.Control>
                </Form.Group>
                <div>
                    <Button className="pull-right" variant="primary" type="submit" style={{ marginTop: '20px' }}>
                        Crear
                    </Button>
                </div>
            </Form>

        </div>
    );

    return (
        <>
            {bodyModal}
        </>
    );
};

