import TogglePower from './TogglePower';


function Power({ powerOn, powerSwitchHandler }) {

    return(
        <div id='power' className='flex flex-col items-center h-[70px] text-[20px] font-[500] red-text'>
            <span>Power</span>
            <TogglePower 
                powerOn={powerOn}
                onToggle={() => {
                    powerSwitchHandler()
                }}
            />
        </div>
    )
}

export default Power

