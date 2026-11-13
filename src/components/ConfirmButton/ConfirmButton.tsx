import { useState } from "react";

interface ConfirmButtonProps {
    label: string;
    onConfirm: () => void;
}


function ConfirmButton({label, onConfirm}: ConfirmButtonProps) {
    const [confirm, setConfirm] = useState(false);

    if (confirm) {
    return (<>
            <p>Are you sure?</p>
            <button
                type="button"
                onClick={() => {
                    onConfirm();
                    setConfirm(false);}}>
                    Confirm
            </button>
            <button
                type="button"
                onClick={() => setConfirm(false)}>
                Cancel
            </button>
        </>);

    }


    return(
        <button role="button" onClick={() => setConfirm(true)}>
            { label }
        </button>
    );
}

export default ConfirmButton