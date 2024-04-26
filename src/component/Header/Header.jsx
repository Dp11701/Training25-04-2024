import React from 'react';
import './Header.css'
import home_icon from '../../assets/home_icon.png'
import account_icon from '../../assets/account.png'
import cart_icon from '../../assets/cart.png'
import search_icon from '../../assets/search.png'
import location_item from '../../assets/location.png'


function Header(props) {
    return (
        <div className="main__header">
        <div className='header'>
            <div className='logo'>
                <img src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png" alt="" />
                <span>Tốt và nhanh</span>
            </div>
            <div className='container'>

                <div className='middle'>
                    <div className='search'>
                        <img src={search_icon} alt="" className='search__icon' />
                        <input type="text" className='search__input' placeholder='Bạn tìm gì hôm nay'/>
                        <button className='search__btn'>Tìm kiếm</button>
                        
                    </div>
                    <div className='header__user'>
                        <div className='home__page'>
                            <img src={ home_icon} alt="" className='home__icon'/>
                            <a rel="">Trang chủ</a>
                        </div>
                        <div className='user__account'>
                            <img src={ account_icon} alt="" className='account__icon'/>
                            <a rel="">Tài khoản</a>

                        </div>
                        <div className='cart'>
                            <img src={ cart_icon} alt="" className='cart__icon'/>
                        </div>
                    </div>
                </div>
        <div className='bottem'>
            
                <ul className='nav__list'>
                    <li className='nav__item'>Điện gia dụng</li>
                    <li className='nav__item'>Xe cộ</li>
                    <li className='nav__item'>Mẹ & bé</li>
                    <li className='nav__item'>Sách</li>
                    <li className='nav__item'>Thể Thao</li>
                    <li className='nav__item'>Khoẻ đẹp</li>
                    <li className='nav__item'>Nhà cửa</li>
                </ul>
            
            <div className='location'>
            <img src={ location_item} alt="" className='location__icon'/>
            <h4 className='title'>Giao đến</h4>
            <div className="address">Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</div>

            </div>
            
        </div>
                
            </div>
            

        </div>
        </div>
    );
}

export default Header;