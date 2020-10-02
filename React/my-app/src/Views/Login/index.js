import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLogin } from '../../Services/auth';
import Mainpage from '../Mainpage';
import HomeNavBar from '../PaginaInicial/Components/HomeNavBar';
import "./index.css"
function LoginPage() {
    const [email, SetEmail] = React.useState("");
    const [senha, SetSenha] = React.useState("");
    return (
        <div>
            <HomeNavBar></HomeNavBar>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-5 mx-auto py-5">
                        <div id="first">
                            <div className="myform form ">
                                <div className="logo mb-3">
                                    <div className="col-md-12 text-center">
                                        <h1>Login</h1>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email </label>
                                    <input onChange={(value) => { SetEmail(value.target.value) }} type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Senha</label>
                                    <input onChange={(value) => { SetSenha(value.target.value) }} type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" />
                                </div>

                                <div className="col-md-12 text-center ">
                                    <Link to={"/mainpage"}><div type="submit" className=" btn btn-block mybtn btn-secondary">Login</div></Link>
                                </div>

                                <div className="form-group py-5">
                                    <p className="text-center">Não possui uma conta? <a href="#" id="signup">Crie agora</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginPage;