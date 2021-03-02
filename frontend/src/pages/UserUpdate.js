import React, { Component } from 'react'
import axios from 'axios'

export default class UserUpdate extends Component {
    state = {
        user: {},
        name: null,
        surname: null,
        displayName: null,
        email: null,
        id: null
    }

    componentDidMount() {
        axios.get('/api/1.0/user/' + this.props.match.params.id)
            .then(res => {
                const user = res.data;
                this.setState({ user });
                this.setState({
                    name: user.name,
                    surname: user.surname,
                    displayName: user.displayName,
                    email: user.email,
                    id: user.id
                });
            })
    }

    onClick = event => {
        event.preventDefault();
        const body = {
            name: this.state.name,
            surname: this.state.surname,
            displayName: this.state.displayName,
            email: this.state.email,
            id: this.state.id
        };
        axios.put('/api/1.0/user', body).then(res => {
            if (res.status === 200) {
                alert('İşleminiz başarılı');
            } else {
                alert('Hata Oluştu');
            }
        });
    };

    onChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="container">
                {this.state.user ? <div className="row">
                    <div className="col-lg-12">
                        <h1>Kullanıcı Güncelle</h1>
                        <label>Kullanıcı Adı</label>
                        <input name="name" onChange={this.onChange} value={this.state.name} />
                    </div>
                    <div className="col-lg-12">
                        <label>Kullanıcı Soyadı</label>
                        <input name="surname" onChange={this.onChange} value={this.state.surname} />
                    </div>
                    <div className="col-lg-12">
                        <label>Kullanıcı Takma Adı</label>
                        <input name="displayName" onChange={this.onChange} value={this.state.displayName} />
                    </div>
                    <div className="col-lg-12">
                        <label>Kullanıcı Email</label>
                        <input name="email" onChange={this.onChange} value={this.state.email} />
                    </div>
                    <div className="col-lg-12">
                        <button className="btn btn-primary" onClick={this.onClick}> Güncelle </button>
                    </div>
                </div>
                    : <h4> Kullanıcı Bulunamadı</h4>}
            </div>
        )
    }
}
