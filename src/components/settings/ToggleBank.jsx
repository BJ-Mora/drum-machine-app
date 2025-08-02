// imports

function ToggleBank({ powerOn, onToggle }) {
    return (
        <div 
            id='bankSwitch'
            className='flex items-center px-[2px] mt-[5px] border-4 border-[#e6e6e6] rounded-[4px] h-[25px] w-[60px] bg-[#F5FEFD]'
        >
            <div 
                onClick={onToggle}
                className={`
                    h-[22px] w-[22px] bg-[#B43757] rounded-[3px] cursor-pointer transform transition-transform duration-300 
                    ${powerOn ? 'translate-x-[0px]' : 'translate-x-[34px]'}
                `}
            >
            </div>   
        </div>
    )
}

export default ToggleBank