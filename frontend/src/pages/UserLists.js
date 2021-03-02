import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class UserLists extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        axios.get('/api/1.0/users')
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    }

    onDeleteClick = item => {
        axios.delete('/api/1.0/user/'+item.id)
            .then(res => {
                if(res.status===200){
                    alert('Silme işemeniz başarılı');
                    this.componentDidMount();
                }
            })
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.users ? this.state.users.map((item, index) => <div className="row col-lg-12 col-md-12 col-xs-12 tablo" key={index}>
                        <div className="col-lg-2 col-md-2"> Adı : {item.name}</div>
                        <div className="col-lg-2 col-md-2"> Soyadı : {item.surname}</div>
                        <div className="col-lg-2 col-md-2"> Kullanıcı Adı: {item.displayName}</div>
                        <div className="col-lg-2 col-md-2"> Email: {item.email}</div>
                        <div className="col-lg-2 col-md-2"> <Link to={`user/${item.id}`}><button className="btn btn-primary"> Güncelle </button> </Link></div>
                        <div className="col-lg-2 col-md-2"> <button className="btn btn-danger" onClick={() => {
                            this.onDeleteClick(item)
                        }}> Sil </button>  </div>
                    </div>) : <h4> Kayıt Bulunamadı</h4>}
                </div>
            </div>
        )
    }
}
