//imports

function Display({ displayText }) {
    return(
        <div id='display' className='h-[50px] w-[200px] border-4 border-[#e6e6e6] rounded-[4px]'>
            <div className='flex justify-center h-full w-full bg-[#F5FEFD] items-center'>
                <span className='font-[200]'>
                    {displayText}
                </span>
            </div>
        </div>
    )
}

export default Display