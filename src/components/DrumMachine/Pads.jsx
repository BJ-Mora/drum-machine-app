import Pad from './Pad'
import { useEffect, useRef } from 'react';
import { padBank1 } from '../../data/padBank1';
import { padBank2 } from '../../data/padBank2';


function Pads({ showDisplayMessage, powerOn, volume, bank }) {
    const currentPadBank = bank ? padBank1 : padBank2;
    const playingAudioRef = useRef([]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const pad = currentPadBank.find(p => p.key === e.key.toUpperCase());

            if (pad && powerOn) {
                const audio = document.getElementById(pad.key);
                if (audio) {
                    audio.volume = volume / 100; // Adjust volume based on the volume state
                    audio.currentTime = 0; // Reset the audio to the start
                    audio.play();
                    showDisplayMessage(pad.sound);

                    playingAudioRef.current.push(audio);
                    audio.addEventListener('ended', () => {
                        playingAudioRef.current = playingAudioRef.current.filter(a => a !== audio);
                    });
                }
            }        
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => {
                window.removeEventListener('keydown', handleKeyDown);
        }
    }, [powerOn, showDisplayMessage, volume, bank, currentPadBank]);

    useEffect(() => {
        if (!powerOn && playingAudioRef.current.length > 0) {
            playingAudioRef.current.forEach(audio => {
                audio.pause();
                audio.currentTime = 0; // Reset the audio to the start
            });
            playingAudioRef.current.splice(0); // Clear the array
        }
    }, [powerOn]);

    try {
        return(
            <div className='flex items-center w-[58%] ml-[15px]'>
                <div className='grid grid-cols-3 '>
                    {currentPadBank.map((pad) => (
                        <Pad
                            key={pad.key}
                            className='h-[100px] w-[100px] m-[10px] bg-[#F5FEFD] border-4 border-[#e6e6e6] rounded-[4px] flex flex-col justify-center items-center text-center'
                            soundId={pad.sound}
                            soundUrl={pad.url}
                            keyTrigger={pad.key}
                            keyCode={pad.key.charCodeAt(0)}
                            isOn={powerOn}
                            onPlaySound={showDisplayMessage}
                            volume={volume}
                            playingAudioRef={playingAudioRef}
                        />
                    ))}       
                </div>
            </div>
        )
    } catch (error) {
        console.error("Error rendering pads:", error);
        return <div>Error loading pads</div>;
    }
}

export default Pads