import React from 'react';
import { ListGroup, ListGroupItem, Row, Col, Button } from 'reactstrap';

function ShipmentsList(props) {
    return (
        <div>
            <ListGroup>
                <ListGroupItem>
                    <Row>
                        <Col sm="2"> id </Col>
                        <Col sm="3"> product </Col>
                        <Col sm="2"> quantity </Col>
                        <Col />
                    </Row>
                </ListGroupItem>
                {props.shipments.map(shipment => (
                    <ListGroupItem key={shipment.id}>
                        <Row>
                            <Col sm="2"> {shipment.id} </Col>
                            <Col sm="3"> {shipment.product} </Col>
                            <Col sm="2"> {shipment.quantity} </Col>
                            <Col sm="5">
                                {!shipment.isReceived ? (<Button color="info" size="sm" onClick={() => {
                                    alert("Not yet implemented");
                                }}> receive </Button>)
                                    : (<span> received </span>)}

                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
            {/* <pre>{JSON.stringify(props.shipments, null, 2)}</pre> */}
        </div>
    )
}

export default ShipmentsList;