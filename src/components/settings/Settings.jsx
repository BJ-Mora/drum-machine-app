import Bank from './Bank'
import Display from './Display'
import Power from './Power'
import Volume from './Volume'

function Settings({ powerSwitchHandler, powerOn, bankSwitchHandler, bank, showDisplayMessage, displayText, volume, setVolume }) {
 
    return(
        <div className='flex flex-col w-[40%] h-[100%] justify-center mr-[20px]'>
            <div className='flex flex-col justify-between items-center h-[92%]'>
                <Power powerSwitchHandler={powerSwitchHandler} powerOn={powerOn} />
                <Display displayText={displayText} />
                <Volume powerOn={powerOn} volume={volume} setVolume={setVolume} showDisplayMessage={showDisplayMessage} />
                <Bank powerOn={powerOn} bankSwitchHandler={bankSwitchHandler} bank={bank} />
            </div>
        </div>
    )
}

export default Settings