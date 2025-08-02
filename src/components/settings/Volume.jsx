//imports

function Volume({ powerOn, volume, setVolume, showDisplayMessage }) {
    const handleChange = (e) => {
        const newVolume = parseFloat(e.target.value)
        if (powerOn) {
            setVolume(newVolume)
            showDisplayMessage(`Volume: ${newVolume}`) 
        }
    }

    return(
        <div className='w-[205px]'>
            <input
                className='w-[205px] accent-[#B43757]'
                type='range'
                min='0'
                max='100'
                step='1'
                value={volume}
                onChange={handleChange}
            />
        </div>
    )
}

export default Volume