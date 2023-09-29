import { keyPad } from '../data/data';

const KeyPad = () => {

    const keyPress = (key) => {
        console.log(key)
    }

    return (
        <div className="key-pad">
            <div className="number-pad">
                {keyPad.map((key) => (
                    <button
                        id={key.id}
                        key={key.id}
                        onClick={() => keyPress(key.id)}
                    >{key.text}</button>
                ))}
            </div>
        </div>
    )
}

export default KeyPad;