import { Link } from 'react-router-dom';
import "./style.css";

function NavBar (){
    return (
        <div className="NavBar">
            <img src={('data:image/png;base64,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')} alt="logoEnfaseLabs" width="45" />       
            <div className="buttonContainer">

                <Link to="/"> Lista</Link>
                <Link to="/newquestion"> Nova Quest??o</Link>
                {/* <a href="/">
                    Lista
                </a>
                <a href="/createQuestion">
                    Nova Quest??o
                </a> */}
            </div>
        </div>
    );
}

export default NavBar;