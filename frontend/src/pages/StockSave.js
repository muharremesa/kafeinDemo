import React, { Component } from 'react'
import axios from 'axios'

export default class StockSave extends Component {

    state = {
        name: null,
        code: null,
        price: null
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
            code: this.state.code,
            price: this.state.price
        };
        console.log(body);
        axios.post('/api/1.0/stock', body);
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Hisse Senedi Kaydet</h1>
                        <label>Adı</label>
                        <input name="name" onChange={this.onChange} />
                    </div>
                    <div className="col-lg-12">
                        <label>Kod</label>
                        <input name="code" onChange={this.onChange} />
                    </div>
                    <div className="col-lg-12">
                        <label>Ücret</label>
                        <input name="price" type="number" onChange={this.onChange} />
                    </div>
                    <div className="col-lg-12">
                        <button className="btn btn-primary" onClick={this.onClick}> Ekle </button>
                    </div>
                </div>
            </div>
        )
    }
}
