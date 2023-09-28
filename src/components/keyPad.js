import { operators, numPad, actionsPad } from '../data/data';

const KeyPad = () => {
    return (
        <div className="key-pad">
            <div className="number-pad">
                {numPad.map((key) => (
                    <button
                        id={key.id}
                        key={key.id}
                        onClick={() => console.log(key.id)}
                    >{key.text}</button>
                )).reverse()}
            </div>
            <div className="action-pad">
                {actionsPad.map((key) => (
                    <button
                        id={key.id}
                        key={key.id}
                    >{key.text}</button>
                ))}
            </div>
            <div className="operator-pad">
                {operators.map((key) => (
                    <button key={key.id} id={key.id}>{key.text}</button>
                ))}
            </div>
        </div>
    )
}

export default KeyPad;