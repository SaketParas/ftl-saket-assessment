import React, { Component } from 'react'

class BottomNav extends Component {
    render() {
        return (
            <div>
                <div className="navbar d-flex justify-content-around bg-light">
                    <div></div>
                    <div></div>
                    <div className="text-primary">Trending</div>
                    <div>For You</div>
                    <div>Cooking</div>
                    <div>Nature</div>
                    <div>Science</div>
                    <div>Travel</div>
                    <div>Climate</div>
                    <div>Music</div>
                    <div>People</div>
                    <div></div>
                    <div className="line"></div>
                    <div></div>
                    <button className="button font-weight-bold btn btn-outline-secondary">Explore</button>
                    <div></div>
                </div>
            <div className="d-flex justify-content-around footer text-black-50">
                <div></div>
                <div>About</div>
                <div>Terms and Conditions</div>
                <div>Privacy Policy</div>
                <div>Contact</div>
                <div></div>
                <div>
                    <img src="https://blog.skyprivate.com/wp-content/uploads/2018/10/facebook-twitter-instagram-png-3.png" className="socialIcon" />
                </div>
                <div>@2019 All rights reserved</div>
                <div></div>
            </div>
            </div>
        )
    }
}

export default BottomNav