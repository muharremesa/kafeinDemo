import React from 'react'
import axios from 'axios'

class UserLoginPage extends React.Component {

    state = {
        kullanıcı: null,
        parola: null,
        parolatekrar: null
    };

    onChangeKullanıcı = event => {
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
    onClickGiris = event => {// Kanka bura çalışmıyor gibi
        console.log('denemnes');
        event.preventDefault();
        const body = {
            kullanıcı: this.state.kullanıcı,
            parola: this.state.parola,
            parolatekrar: this.state.parolatekrar,

        };
        console.log(body);
        axios.post('/api/1.0/users', body);
    };
    render() {
        return (
            <form>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Login Ekranı</h1>
                            <label>Kullanıcı Adı</label>
                            <input onChange={this.onChangeKullanıcı} />
                        </div>
                        <div className="col-lg-12">
                            <label>Parola</label>
                            <input type="password" onChange={this.onChangeParola} />
                        </div>
                        <div className="col-lg-12">
                            <button className="btn btn-primary" onClick={this.onClickGiris}> Giriş </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default UserLoginPage;