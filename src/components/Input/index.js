import './styles.css'

function Input({handle}){

    return (

        <div className="container">
            <input placeholder="search" type="text" onKeyDown = {e => { if(e.key === 'Enter') handle(e) } }/>
        </div>

    )

}

export default Input;
