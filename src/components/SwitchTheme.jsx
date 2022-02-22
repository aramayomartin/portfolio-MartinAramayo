import React from 'react';
import { Button } from 'reactstrap';
import { BsSun, BsFillMoonFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';

// --- ACTIONS ---
import { changeTheme } from '../actions';
// --- TO EXPORT ---
export default function SwitchTheme() {
    // --- CONSTANTES ---
    const dispatch = useDispatch();
    const currentTheme = useSelector(s => s.currentTheme);

    // --- FUNCIONES ---
    function handleClick(e) {
        e.preventDefault();
        dispatch(changeTheme(currentTheme));
    }
    // --- TO RETURN ---
    return (
        <div>
            <Button color={currentTheme ? 'info' : 'warning'} onClick={handleClick}>
                {currentTheme ? <BsSun /> : <BsFillMoonFill />}
            </Button>
        </div >
    )
}