import React from 'react';

export default function RightSideBar({ openPanel = false, showModal, setShowModal, content }) {
  // const nodeRef = useRef(null)
  console.log("showModal", showModal);
  return (
    // <SlidingPanel
    //   type={'right'}
    //   isOpen={openPanel}
    //   size={30}>
    //   <h4>Panel content</h4>
    // </SlidingPanel>
    <div
      className={showModal ? "modal-dialog show" : "modal-dialog"}
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title" id="myModalLabel">
            Rigth Sidebar
          </h4>
        </div>

        <div className="modal-body">
          {/* <p>{content}</p> */}
        </div>
      </div>
    </div>
  )
}
