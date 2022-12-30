import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Image_modal({image,size}) {
  const [lgShow, setLgShow] = useState(true);
  const [smShow, setSmShow] = useState(true);
  const [show, setShow] = useState(true);

  return (
    <>
     {size=='256x256' && <Modal
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <img src={image} className='p-5' alt="" />
        </Modal.Body>
      </Modal>}

      {size=='512x512' && <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <img src={image} className='p-2' alt="" />
        </Modal.Body>
      </Modal>}

      {size=='1024x1024' && <Modal
        size='xl'
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <img src={image} className='p-2' alt="" />
        </Modal.Body>
      </Modal>}
    </>
  );
}

export default Image_modal 