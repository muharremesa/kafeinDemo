import React from 'react'
import axios from 'axios'

class UserLoginPage extends React.Component {

    state = {
        user: null,
        password: null,
        
    };
    onChange=event=> {
        const {name,value}=event.target;
        this.setState({
            [name]:value,
        })
    }
    onClick=event=>{
        event.preventDefault();
        const body={
            user:this.state.user,
            password:this.state.password
        };
        axios.post('/api/1.0/user', body).then(res => {
            if (res.status === 200) {
                alert('Kullanıcı başarılı bir şekilde kaydedildi.');
            } else {
                alert('Hata Oluştu');
            }
        });
    };
    /*onChangeKullanıcı = event => {
        this.setState({
            kullanıcı: event.target.value
        });
    };
    onChangeParola = event => {
        this.setState({
            parola: event.target.value
        });
    };
    onChangeParolaTekrar = event => {
        this.setState({
            parolatekrar: event.target.value
        });
    };
    onClickGiris = event => {
        console.log('denemnes');
        event.preventDefault();
        const body = {
            kullanıcı: this.state.kullanıcı,
            parola: this.state.parola,
        };
        console.log(body);
        axios.post('/api/1.0/users', body);
    };
    */
    render() {
        return (
            <form>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <h1>Login Ekranı</h1>
                            <label class="col-sm-2 col-form-label">Kullanıcı Adı</label>
                            <input name="user" onChange={this.onChange} />
                        </div>
                        <div className="col-sm-8">
                            <label class="col-sm-2 col-form-label">Parola</label>
                            <input name="password" type="password" onChange={this.onChangeParola} />
                        </div>
                        <div className="col-sm-8">
                            <button className="btn btn-primary"  onClick={this.onClick}> Giriş </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default UserLoginPage;