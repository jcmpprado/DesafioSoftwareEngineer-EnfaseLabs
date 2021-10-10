import './style.css';

function NewQuestion (){
    return(
        <div className="container">
            <p>Adicione aqui uma nova questão. </p>
            <form>
                <input
                    id="question"
                    // value={question}
                    type="text"
                    placeholder="Digite uma nova questão."
                />
                <input
                    id="A"
                    // value={a}
                    type="text"
                    placeholder="A"
                />
                <input
                    id="B"
                    // value={b}
                    type="text"
                    placeholder="B"
                />
                <input
                    id="C"
                    // value={c}
                    type="text"
                    placeholder="C"
                />
                <input
                    id="D"
                    // value={d}
                    type="text"
                    placeholder="D"
                />
                <div className="checkContainer">
                    <h5>Selecione a resposta correta.</h5>
                    <input
                    id="A"
                    // value={a}
                    type="checkbox"
                    />
                    A
                    <input
                    id="B"
                    // value={b}
                    type="checkbox"
                    />
                    B                    
                    <input
                    id="C"
                    // value={c}
                    type="checkbox"
                    />
                    C
                    <input
                    id="D"
                    // value={d}
                    type="checkbox"
                    />
                    D 
                </div>
                <button>Adicionar questão</button>

            </form>
        </div>
    )
}

export default NewQuestion;
