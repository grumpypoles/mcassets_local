const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e)=>{
    if(e.target.id === 'wrapper') onClose()
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
      <div className=" flex flex-col w-[1200px]">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className= " bg-primary-800 p-2 rounded text-black">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
