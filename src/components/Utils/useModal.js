import { useState } from 'react';

export const useModal = () => {
    const [open, setOpen]=useState(false)
    const handleOpen =()=>{
        setOpen(!open)
    }

    const handleClose = ()=>{
        setOpen(false)
    }
    return {
        open, handleOpen, handleClose
    }
};

