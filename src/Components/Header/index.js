import './style.css'

function Header (){
    return (
        <div className="headerContainer">
            <img src={('data:image/png;base64,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')} alt="logoEnfase" width="30%"/>
            <p>Bem-vindo a plataforma de gerenciamento</p>            
        </div>
    );
}

export default Header;

