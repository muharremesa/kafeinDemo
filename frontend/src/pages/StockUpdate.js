import React, { Component } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';

export default class StockUpdate extends Component {
    state = {
        stock: {},
        name: null,
        code: null,
        price: null,
        id: null
    }

    componentDidMount() {
        axios.get('/api/1.0/stock/' + this.props.match.params.id)
            .then(res => {
                const stock = res.data;
                this.setState({ stock });
                this.setState({
                    name: stock.name,
                    code: stock.code,
                    price: stock.price,
                    id: stock.id
                });
            })
    }

    onClick = event => {
        event.preventDefault();
        const body = {
            name: this.state.name,
            code: this.state.code,
            price: this.state.price,
            id: this.state.id
        };
        axios.put('/api/1.0/stock', body).then(res => {
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
                {this.state.stock ? <div className="row">
                    <div className="col-lg-12">
                        <h1>Hisse Senedi Güncelle</h1>
                        <label>Hisse Adı</label>
                        <input name="name" onChange={this.onChange} value={this.state.name} />
                    </div>
                    <div className="col-lg-12">
                        <label>Hisse Kodu</label>
                        <input name="code" onChange={this.onChange} value={this.state.code} />
                    </div>
                    <div className="col-lg-12">
                        <label>Hisse Ücreti</label>
                        <input name="price" type="number" onChange={this.onChange} value={this.state.price} />
                    </div>
                    <div className="col-lg-12">
                        <button className="btn btn-primary" onClick={this.onClick}> Güncelle </button>
                    </div>
                </div> : <h4> Kullanıcı Bulunamadı</h4>}
            </div>
        )
    }
}
