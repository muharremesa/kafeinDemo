import React from 'react'
import axios from 'axios'

class UserSingupPage extends React.Component {

    state = {
        name: null,
        surname: null,
        password: null,
        displayName: null,
        email: null,
        type: true
    };

    onChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    onClick = event => {
        event.preventDefault();
        const body = {
            name: this.state.name,
            surname: this.state.surname,
            displayName: this.state.displayName,
            email: this.state.email,
            password: this.state.password,
            type: this.state.type
        };
        axios.post('/api/1.0/user', body).then(res => {
            if (res.status === 200) {
                alert('Kullanıcı başarılı bir şekilde kaydedildi.');
            } else {
                alert('Hata Oluştu');
            }
        });
    };
    render() {
        return (
            <form>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Kullanıcı Kayıt</h1>
                            <label>Kullanıcı Adı</label>
                            <input name="name" onChange={this.onChange} />
                        </div>
                        <div className="col-lg-12">
                            <label>Kullanıcı Soyadı</label>
                            <input name="surname" onChange={this.onChange} />
                        </div>
                        <div className="col-lg-12">
                            <label>Kullanıcı Takma Adı</label>
                            <input name="displayName" onChange={this.onChange} />
                        </div>
                        <div className="col-lg-12">
                            <label>Kullanıcı Email</label>
                            <input name="email" onChange={this.onChange} />
                        </div>
                        <div className="col-lg-12">
                            <label>Parola</label>
                            <input name="password" type="password" onChange={this.onChange} />
                        </div>
                        <div className="col-lg-12">
                            <button className="btn btn-primary" onClick={this.onClick}> Oluştur </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default UserSingupPage;