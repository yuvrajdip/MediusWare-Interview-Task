import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Problem2 = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);

    const [data, setData]= useState([]);
    const [data2, setData2]= useState([]);

    useEffect(()=>{
        fetch('https://contact.mediusware.com/api/contacts/')
        .then(res=>res.json())
        .then(data=>setData(data.results))
    },[]);

    useEffect(()=>{
        fetch('https://contact.mediusware.com/api/country-contacts/United%20States/')
        .then(res=>res.json())
        .then(data2=>setData2(data2.results))
    },[]);



    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button variant="primary" onClick={handleShow} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                    <button variant="primary" onClick={handleShow2} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>


                {/* Modal A */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            data.map(singleData=><>
                            <p>phone : {singleData.phone}</p>
                            <p>country : {singleData.country.name}</p>
                            <hr />
                            </>)
                        }
                        <Button variant="primary" onClick={handleClose}>
                            All Contacts
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            US Contacts
                        </Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
                
                
                {/* Modal B */}
                <Modal show={show2} onHide={handleClose2}>
                    <Modal.Header closeButton>
                        <Modal.Title>Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            data2.map(singleData=><>
                            <p>phone : {singleData.phone}</p>
                            <p>country : {singleData.country.name}</p>
                            <hr />
                            </>)
                        }
                        <Button variant="primary" onClick={handleClose2}>
                            All Contacts
                        </Button>
                        <Button variant="secondary" onClick={handleClose2}>
                            US Contacts
                        </Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Problem2;