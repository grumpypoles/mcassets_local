'use client'

import { useFormStatus } from "react-dom";

function ModalButton({children, pendingText}) {
  const { pending } = useFormStatus();
  
    return (
      <button
      
        disabled={pending}
        className="place-self-end px-8 py-4 font-semibold rounded transition-all rounded-md bg-primary-700 text-primary-100 hover:bg-gray-500 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300" 
      >
        {pending ? pendingText: children}
        
      </button>
    );
}

export default ModalButton;

