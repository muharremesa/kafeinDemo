import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class StockLists extends Component {
    state = {
        stocks: []
    }
    componentDidMount() {
        axios.get('/api/1.0/stocks')
            .then(res => {
                const stocks = res.data;
                this.setState({ stocks });
            })
    }

    onDeleteClick = item => {
        axios.delete('/api/1.0/stock/' + item.id)
            .then(res => {
                if (res.status === 200) {
                    alert('Silme işlemi başarılı')
                    this.componentDidMount();
                }
            })
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.stocks ? this.state.stocks.map((item, index) => <div className="row col-lg-12 col-md-12 col-xs-12 tablo" key={index}>
                        <div className="col-lg-2 col-md-2"> İsim : {item.name}</div>
                        <div className="col-lg-2 col-md-2"> Kod : {item.code}</div>
                        <div className="col-lg-2 col-md-2"> Tarih : {item.date}</div>
                        <div className="col-lg-2 col-md-2"> Ücret : {item.price}</div>
                        <div className="col-lg-2 col-md-2"> <Link to={`stock/${item.id}`}><button className="btn btn-primary"> Güncelle </button> </Link></div>
                        <div className="col-lg-2 col-md-2"> <button className="btn btn-danger" onClick={() => {
                            this.onDeleteClick(item)
                        }}> Sil </button>  </div>
                    </div>) : <h4> Kayıt Bulunamadı</h4>

                    }
                </div>
            </div>
        )
    }
}
