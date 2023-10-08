import React from "react";
import BasicNav from '../components/navbar';
import './css/profile.css';

function Profile() {
    return(
        <div id="daBigOne">

            <BasicNav />
            
            {/* Profile front end provided by bootdey for free use */}
            {/* Code was still tweaked and edited by us of course */}

            <div class="container" id="bababooie">
                <div class="main-body">
                <h1> Your profile: </h1>
                    <div class="row gutters-sm">
                        <div class="col-md-4 mb-3">
                        <div class="cardEspesiale">
                            <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img src="https://i.ytimg.com/vi/8Scm09bwT_s/hqdefault.jpg" alt="Admin" class="rounded-circle" width="150" />
                                <div class="mt-3">
                                <h4>John Bobba</h4>
                                <p class="mb-1">Full time gamer</p>
                                <p class="text-muted font-size-sm">Cape flats</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Name</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                Kenneth
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Surname</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                Bababooie
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Email</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                baba12@booie.com
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Questions asked</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                123456789
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Achievements</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <img src="https://i.ytimg.com/vi/8Scm09bwT_s/hqdefault.jpg" alt="Admin" class="rounded-circle achievement" width="50" />
                                    <img src="https://i.ytimg.com/vi/8Scm09bwT_s/hqdefault.jpg" alt="Admin" class="rounded-circle achievement" width="50" />
                                    <img src="https://i.ytimg.com/vi/8Scm09bwT_s/hqdefault.jpg" alt="Admin" class="rounded-circle achievement" width="50" />
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-12">
                                <a class="btn btn-info " target="__blank" href="/profile">Edit</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Start of previous questions code */}
            <div class="content questions">
                <div class="container">
                <h1> Your Questions: </h1>
                    <div class="row">                     
                        <div class="col-lg-4">
                            <div class="text-center card-box">
                                <div class="member-card pt-2 pb-2">
                                    <div class="">
                                        <h3>Why does my wiewie itch??</h3>
                                        <p class="text-muted"> Like the title states, my weenor is eetchee and... </p>
                                    </div>
                                    <div class="mt-4">
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="mt-3">
                                                    <h4>7421</h4>
                                                    <p class="mb-0 text-muted">Score</p>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="mt-3">
                                                    <h4>14754</h4>
                                                    <p class="mb-0 text-muted">Replies</p>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="mt-3">
                                                    <h4>11525</h4>
                                                    <p class="mb-0 text-muted">Likes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="text-center card-box">
                                <div class="member-card pt-2 pb-2">
                                    <div class="">
                                        <h3>What did my dad just say?</h3>
                                        <p class="text-muted"> I had my earphones in couldnt hear him :( </p>
                                    </div>
                                    <div class="mt-4">
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="mt-3">
                                                    <h4>7421</h4>
                                                    <p class="mb-0 text-muted">Score</p>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="mt-3">
                                                    <h4>14754</h4>
                                                    <p class="mb-0 text-muted">Replies</p>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="mt-3">
                                                    <h4>11525</h4>
                                                    <p class="mb-0 text-muted">Likes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="text-center card-box">
                                <div class="member-card pt-2 pb-2">
                                    <div class="">
                                        <h3>What is deez?</h3>
                                        <p class="text-muted"> Hello fellow redditors, I have had many people ask... </p>
                                    </div>
                                    <div class="mt-4">
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="mt-3">
                                                    <h4>7421</h4>
                                                    <p class="mb-0 text-muted">Score</p>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="mt-3">
                                                    <h4>14754</h4>
                                                    <p class="mb-0 text-muted">Replies</p>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="mt-3">
                                                    <h4>11525</h4>
                                                    <p class="mb-0 text-muted">Likes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pages */}
                    <div class="row">
                        <div class="col-12">
                            <div class="text-right">
                                <ul class="pagination pagination-split mt-0 float-right pages">
                                    <li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span> <span class="sr-only">Previous</span></a></li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span> <span class="sr-only">Next</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile