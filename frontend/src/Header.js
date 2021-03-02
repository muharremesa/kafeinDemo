import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to='/' className="navbar-brand">Demo</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">Anasayfa</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className="nav-link">Giriş Ekranı</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/singup' className="nav-link">Kayıt ol</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/users' className="nav-link">Kullanıcı Listesi</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/stock' className="nav-link">Hisse Senedi Kaydet</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/stocks' className="nav-link">Hisse Senedi Listele</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
