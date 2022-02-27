import React from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function Main(props) {
    return (
        <div>
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список таблиц</b></h1>
                <Container>
                    <div style={{paddingTop: "3%"}}>
                        <Link to="/tables/appointments" className="my-link"><h1>Список записей к врачу</h1></Link>
                        <hr/>
                        <Link to="/tables/diseases" className="my-link"><h1>Список болезней</h1></Link>
                        <hr/>
                        <Link to="/tables/employees" className="my-link"><h1>Список сотрудников</h1></Link>
                        <hr/>
                        <Link to="/tables/medical-cards" className="my-link"><h1>Список медицинских карт</h1></Link>
                        <hr/>
                        <Link to="/tables/roles" className="my-link"><h1>Список ролей</h1></Link>
                        <hr/>
                        <Link to="/tables/users" className="my-link"><h1>Список пользователей</h1></Link>
                        <hr/>
                        <Link to="/tables/users-access" className="my-link"><h1>Список доступа пользователей</h1></Link>
                        <hr/>
                        <Link to="/tables/vaccines" className="my-link"><h1>Список вакцин</h1></Link>
                        <hr/>
                    </div>
                </Container>
            </Container>
        </div>
    );
}

export default Main;