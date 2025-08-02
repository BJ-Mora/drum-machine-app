import React, { useState, useRef } from 'react'
import Pads from './Pads'
import Settings from '../Settings/Settings'

function DrumMachine() {
    const [ powerOn, setPowerOn ] = useState(true)
    const [ bank, setBank ] = useState(true)
    const [ volume, setVolume ] = useState(50)
    const [ displayText, setDisplayText ] = useState("")
    const timeoutRef = useRef(null)

    const showDisplayMessage = (message) => {
        setDisplayText(message)
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => {
            setDisplayText("")
            timeoutRef.current = null
        }, 3000)
    }

    const powerSwitchHandler = () => {
        setPowerOn(prev => {
            const newPowerState = !prev
            if (newPowerState) {
                showDisplayMessage("Power On")
            } else {
                showDisplayMessage("Power Off")
            }
            return newPowerState
        });
    }

    const bankSwitchHandler = () => {
        setBank(prev => {
            const newBankState = !prev
            if (newBankState) {
                showDisplayMessage("Bank 1")
                console.log("Switched to Bank 1")
            } else {
                showDisplayMessage("Bank 2")
                console.log("Switched to Bank 2")
            }
            return newBankState
        })
    }

    return(
        <div id='drum-machine' className='drum-machine'>
            <Pads 
                showDisplayMessage={showDisplayMessage}
                powerOn={powerOn}
                volume={volume}
                bank={bank}
             />
            <Settings
                powerSwitchHandler={powerSwitchHandler}
                powerOn={powerOn}
                bankSwitchHandler={bankSwitchHandler}
                bank={bank}
                setVolume={setVolume}
                volume={volume}
                showDisplayMessage={showDisplayMessage}
                displayText={displayText}
            />
        </div>
    )
}

export default DrumMachine