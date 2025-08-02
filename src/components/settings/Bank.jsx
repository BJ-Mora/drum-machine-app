//import { useState } from "react"
import ToggleBank from "./TogglePower"

function Bank({ powerOn, bankSwitchHandler, bank }) {

    return(
        <div id='bank' className='flex flex-col items-center h-[70px] text-[20px] font-[500] red-text'>
            <span>Bank</span>
            <ToggleBank 
                powerOn={bank}
                onToggle={() => {
                    if (powerOn) {
                        bankSwitchHandler()
                    }
                }}
            />
        </div>
    )
}

export default Bank