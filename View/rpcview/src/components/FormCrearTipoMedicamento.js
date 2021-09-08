import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function FormCrearTipoMedicamento() {

    const [nombre, setNombre] = React.useState("");
    const handleSubmit = event => {
        event.preventDefault();
        alert(`Your state values: \n 
                codigo: ${nombre} \n 
                `);
    };

    const bodyModal = (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Nombre Tipo Medicamento</Form.Label>
                    <Form.Control
                        placeholder="Nombre Tipo Medicamento"
                        value={nombre}
                        onChange={event => setNombre(event.target.value)}
                    />
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

