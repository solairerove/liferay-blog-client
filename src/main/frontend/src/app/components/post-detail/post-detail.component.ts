import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams} from 'angular2/router';

import {Post} from '../../../app/model/post';
import {PostService} from '../../service/post.service';
import {CommentsComponent} from '../comments/comments.component';
import {CommentService} from "../../service/comment.service";


@Component({
    selector: 'my-post-detail',
    template: `<!-- Page Header -->
<!-- Set your background image for this header on the line below. -->
<header class="intro-header" style="background-image: url('https://cloud.githubusercontent.com/assets/9396988/16376418/c9c1430e-3c68-11e6-8932-eaa15ef7bf8c.jpg')">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div class="post-heading" *ngIf="post">
                    <h1>{{post.title}}</h1>
                    <h2 class="subheading">{{post.subtitle}}</h2>
                    <span class="meta">Posted by <a href="">{{post.author}}</a> on {{post.date}}</span>
                </div>
            </div>
        </div>
    </div>
</header>


<!-- Post Content -->
<article *ngIf="post">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div [innerHTML]="post.content"></div>
            </div>
        </div>
    </div>
</article>

<hr/>

<!-- Pager -->
<div class="container">
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <ul class="pager">
                <li class="next">
                    <a (click)="switchCommentShow()" style="cursor: hand">Show/Hide comments &rarr;</a>
                </li>
            </ul>
        </div>
    </div>
</div>


<!-- Comments -->
<div [ngClass]="{hide: !commentShow}" style="margin-top: 3em">
    <my-comments></my-comments>
</div>



`,
    directives: [
        CommentsComponent
    ],
    providers: [
        CommentService,
        PostService,
        HTTP_PROVIDERS
    ]
})

export class PostDetailComponent implements OnInit {
    post:Post;
    commentShow:boolean;

    constructor(private postService:PostService,
                private routeParams:RouteParams) {

    }

    switchCommentShow(){
        this.commentShow = !this.commentShow;
    }

    ngOnInit() {
        this.commentShow = false;
        let id = +this.routeParams.get('id');
        this.postService.getPost(id)
            .subscribe(post => this.post = post);
    }

    goBack() {
        window.history.back();
    }
}