<template>
  <div>
            <NonLoggedNavBar></NonLoggedNavBar>
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
                                    <label for="exampleInputEmail1">Email </label>
                                    <input  type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Senha</label>
                                    <input  type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" />
                                </div>

                                <div className="col-md-12 text-center pt-2">
                                    <router-link to="Mainpage"> <button type="submit" className=" btn btn-block mybtn btn-secondary">Login</button></router-link>
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
</template>

<script>
import NonLoggedNavBar from "../../components/nonLoggedNavBar/nonloggednavbar";
export default {
  name: "Homepage",
  components: {
    NonLoggedNavBar,
  },
};
</script>

<style>
body{
    padding-bottom:4.2rem;
    background:rgba(0, 0, 0, 0.76);
    }
    a{
     text-decoration:none !important;
     }

      .myform{
    position: relative;
    display: -ms-flexbox;
    display: flex;
    padding: 1rem;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 1.1rem;
    outline: 0;
    max-width: 500px;
     }
     .tx-tfm{
     text-transform:uppercase;
     }
     .mybtn{
     border-radius:50px;

     }
    
     .login-or {
     position: relative;
     color: #aaa;
     margin-top: 10px;
     margin-bottom: 10px;
     padding-top: 10px;
     padding-bottom: 10px;
     }
     .span-or {
     display: block;
     position: absolute;
     left: 50%;
     top: -2px;
     margin-left: -25px;
     background-color: #fff;
     width: 50px;
     text-align: center;
     }
     .hr-or {
     height: 1px;
     margin-top: 0px !important;
     margin-bottom: 0px !important;
     }
     .google {
     color:#666;
     width:100%;
     height:40px;
     text-align:center;
     outline:none;
     border: 1px solid lightgrey;
     }
      form .error {
     color: #ff0000;
     }
     #second{display:none;}
</style>