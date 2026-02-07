 import './css/stage.css';
import Rock from '../assets/images/rock.png'
import Paper from '../assets/images/paper.png'
import Scissors from '../assets/images/scissors.png'


function Stage() {


    return (
        <>
            <div className="main-stage">
                <div className="player-section enemy">
                    <div className='cards-container enemy'>
                        <div className='card flip-horizontal'>
                            <img src={Rock} alt='rock' /> 
                        </div>
                        <div className='card flip-horizontal'> 
                            <img src={Paper} alt='paper' />
                        </div>
                        <div className='card flip-horizontal'> 
                            <img src={Scissors} alt='scissors' />
                        </div>
                    </div>    
                </div>

                <div className='player-section'>
                    <div className='cards-container'>
                        <div className='card'> 
                            <img src={Rock} alt='rock' />
                        </div>
                        <div className='card'> 
                            <img src={Paper} alt='paper' />
                        </div>
                        <div className='card'> 
                            <img src={Scissors} alt='scissors' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stage;