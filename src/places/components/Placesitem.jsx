import React, { useState } from 'react'
import Card from '../../shared/components/UI_elements/Card'
import Button from '../../user/components/Form elements/Button'
import { Modal } from '../../shared/components/UI_elements/Modal'
import  Map  from '../../shared/components/UI_elements/Map'

export const Placesitem = (props) => {
  const [showMap,setshowMap]=useState(false)
  const [showConfirmModal,setShowConfirmModal] = useState(false);

  const openMapHandler = ()=>{
    setshowMap(true)
  }
  
  const closeMapHandler = ()=>{
    setshowMap(false)
  }

  const showDeleteWarningHandler=()=>{
    setShowConfirmModal(true);
  }
  
  const cancelDeleteWarningHandler=()=>{
    setShowConfirmModal(false);
  }

  
  const confirmDeleteHandler=()=>{
    console.log('Deleting place')
    setShowConfirmModal(false);
  }


  return (
    <>
    {console.log(props.address)}
    <Modal show = {showMap} onCancel={closeMapHandler} header = {props.address} contentClass = "place-item__modal-content"
    footerClass = "place-item__mpdal-actions"
    footer={<Button onClick={closeMapHandler}>CLOSE</Button>}>
      <div className='map-container'><h2><Map center={props.coordinates} zoom={16}/></h2></div>
    </Modal>
    <Modal header="Are you sure" footerClass="place-item__modal-actions"
    show={showConfirmModal}
    onCancel = {cancelDeleteWarningHandler}
    footer={
      <React.Fragment>
        <Button inverse onClick={cancelDeleteWarningHandler}>CANCEL</Button>
        <Button inverse onClick={confirmDeleteHandler}>DELETE</Button>
      </React.Fragment>
    }>
      <p>Do you want to proceed and delete this place ?</p>
    </Modal>
    <li className='place-item'>
        <Card className="place-item__content">
        <div className='place-item__image'>
        <img src={props.img} alt={props.title}/></div>
        <div className='place=item__info'>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>
        <div className='place-item__actions'>
            <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>
        </div>
        </Card>
    </li>
    </>
  )
}
