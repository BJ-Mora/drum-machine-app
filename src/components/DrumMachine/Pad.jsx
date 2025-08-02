function Pad({ soundId, soundUrl, keyTrigger, isOn, onPlaySound, volume, playingAudioRef }) {
    const handleClick = () => {
        if (isOn) {
            const audio = document.getElementById(keyTrigger);
            if (audio) {
                audio.volume = volume / 100; // Adjust volume based on the volume state
                audio.play();
                onPlaySound(soundId);

                playingAudioRef.current.push(audio);
                audio.addEventListener('ended', () => {
                    playingAudioRef.current = playingAudioRef.current.filter(a => a !== audio);
                });
            }
        }
    }

    return (
        <div 
            className='drum-pad flex flex-col cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300'
            id={soundId} 
            onClick={handleClick}
            tabIndex="0"
        >
            <span className='text-[20px] font-[500]'>{keyTrigger}</span>
            <audio
                id={keyTrigger}
                className='clip'
                src={soundUrl}
            />
        </div>
    );
}

export default Pad;