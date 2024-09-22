const Modal = ({ open, onClose, children }) => {
    if (!open) return null; // If not open, don't render the modal at all
  
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
        
        {/* Modal content */}
        <div className="relative z-10 bg-white p-4 rounded-md shadow-lg">
          <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  