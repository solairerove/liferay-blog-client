import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Router} from 'angular2/router';

import {Post} from '../../../app/model/post';
import {PostService} from '../../service/post.service';


@Component({
    selector: 'my-posts',
    template: `
<header class="intro-header" style="background-image: url('https://goo.gl/SN5vMC')">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div class="site-heading">
                    <h1>Clean Blog</h1>
                    <hr class="small">
                    <span class="subheading">Anything more than you need</span>
                </div>
            </div>
        </div>
    </div>
</header>

<div class="container" *ngFor="let post of posts">
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div class="post-preview">
                <a (click)="gotoDetail(post)" style="cursor: hand">
                    <h2 class="post-title">
                        {{post.title}}
                    </h2>
                    <h3 class="post-subtitle">
                        {{post.subtitle}}
                    </h3>
                </a>
                <p class="post-meta">Posted by <a href="#">{{post.author}}</a> on {{post.date}}</p>
            </div>
            <hr>
        </div>
    </div>
</div>
`,
    providers: [PostService, HTTP_PROVIDERS]
})

export class PostsComponent implements OnInit {
    posts:Post[];
    errorMessage:string;

    constructor(private router:Router,
                private postsService:PostService) {

    }

    ngOnInit() {
        this.getPosts();
    }

    getPosts() {
        this.postsService.getPosts()
            .subscribe(
                posts => this.posts = posts,
                error => this.errorMessage = <any> error
            );
    }

    gotoDetail(post:Post) {
        this.router.navigate(['PostDetail', {id: post.id}]);
    }
}
