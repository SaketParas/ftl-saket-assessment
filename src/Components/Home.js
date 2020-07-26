import React, { Component } from 'react';
import PostData from '../Data/Data.json';
import Carousal from './Carousal.js';
import BottomNav from './BottomNav.js';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filterData: []
        }
    }
    handleChange = (e) => {
        console.log(e);
        let Data = PostData[0].members.filter(myData => myData.id == e)

        this.setState({ filterData: Data[0] })
    }
    render() {
        console.log(this.state.filterData.activity_periods);
        console.log(PostData[0].members);
        var data = PostData[0].members
        return (
            <div>
                <Carousal />
                <div className="container mt-2">
                    <div class="card">
                        <h3 class="font-weight-bold text-center text-danger">Fetch User Details using JSON</h3>
                        <div class="card-body">
                            {data.map((postDetails, index) => {
                                return (
                                    <div class="card mb-1" onClick={() => this.handleChange(postDetails.id)}>
                                        <div class="card-body">
                                            <h4 type="" role="button" class="text-primary" data-toggle="modal" data-target="#staticBackdrop">
                                                {postDetails.real_name}
                                            </h4>
                                            <p>{postDetails.real_name} who belongs from  {postDetails.tz} and has all the details of
                                            all the time ranges during which they were active on that day.</p>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {this.state.filterData ?
                            <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="staticBackdropLabel">{this.state.filterData.real_name}</h5>

                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            {
                                                this.state.filterData.activity_periods ?
                                                    this.state.filterData.activity_periods.map(e => {
                                                        return (

                                                            <div class="card mb-1">
                                                                <div class="card-body">
                                                                    <div>Start Time : {e.start_time}</div>
                                                                    <div>End Time : {e.end_time}</div>
                                                                </div>
                                                            </div>


                                                        )
                                                    }) : null
                                            }
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div> : null}
                        <div>
                        </div>
                    </div>

                </div>

                <BottomNav />
            </div>
        )
    }
}

export default Home
