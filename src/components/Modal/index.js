import React from 'react'
import { Backdrop, ModalWrapper, ModalTitle } from './style'

const Modal = ({
  children,
  active,
  onCloseModal,
  title
}) => {

  return(
    <>
      {active &&
        <>
          <Backdrop onClick={() => onCloseModal()}/>
          <ModalWrapper>
            {title &&
              <header>
                <ModalTitle>
                  {title}
                </ModalTitle>
              </header>
            }
            {children}
          </ModalWrapper>
        </>
      }
    </>
  )
}

export default Modal