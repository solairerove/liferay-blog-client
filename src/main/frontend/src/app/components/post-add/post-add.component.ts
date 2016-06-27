import {Component, OnInit, Input} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {PostService} from "../../service/post.service";
import {Post} from "../../model/post";

@Component({
    selector: 'my-post-add-component',
    template: `<header class="intro-header" style="background-image: url('https://cloud.githubusercontent.com/assets/9396988/16376415/c6e6f840-3c68-11e6-9cf5-9ec32cfe7e2b.jpg')">
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

<div *ngIf="post" [ngClass]="{hide: postAdded}">
    <article>
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-lg-offset-3">
                    <label style="font-size: xx-large">author:</label>
                </div>
                <div class="col-lg-4">
                    <input [(ngModel)]="post.author" placeholder="author" class="form-control input-lg"/>
                </div>
            </div>
        </div>
    </article>
    <br/>
    <article>
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-lg-offset-3">
                    <label style="font-size: xx-large">title:</label>
                </div>
                <div class="col-lg-4">
                    <input [(ngModel)]="post.title" placeholder="title" class="form-control input-lg"/>
                </div>
            </div>
        </div>
    </article>
    <br/>
    <article>
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-lg-offset-3">
                    <label style="font-size: xx-large">subtitle: </label>
                </div>
                <div class="col-lg-4">
                    <input [(ngModel)]="post.subtitle" placeholder="subtitle" class="form-control input-lg"/>
                </div>
            </div>
        </div>
    </article>
    <br/>
    <article>
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-lg-offset-3">
                    <label style="font-size: xx-large">content:</label>
                </div>
                <div class="col-lg-4">
                    <textarea [(ngModel)]="post.content" placeholder="content" class="form-control input-lg"></textarea>
                </div>
            </div>
        </div>
    </article>

    <br/>
    <!-- Pager -->
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <ul class="pager">
                    <div class="col-lg-2 col-lg-offset-7 col-md-2 col-md-offset-8">
                        <li class="next">
                            <a (click)="save()" style="cursor: hand;margin-right: 22%">Save&rarr;</a>
                        </li>
                    </div>

                    <div class="col-lg-2 col-md-2">
                        <li class="next">
                            <a [routerLink]="['Posts']"  style="cursor: hand;margin-right: 22%">Posts&rarr;</a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</div>

<div [ngClass]="{hide: !postAdded}" style="margin-bottom: 20%">
    <div class="col-lg-8 col-lg-offset-3 col-md-10 col-md-offset-1">
        <div class="col-lg-4 col-lg-offset-2">
            <h1 style="margin-top: 10%">Post added!</h1>
        </div>
        <div class="col-lg-2">
            <ul class="pager">
                <li class="next">
                    <a  [routerLink]="['Posts']" style="cursor: hand;margin-right: 22%">Posts&rarr;</a>
                </li>
            </ul>
        </div>
    </div>
</div>
`,
    providers: [
        PostService,
        HTTP_PROVIDERS
    ],
    directives: [ROUTER_DIRECTIVES]
})

export class PostAddComponent implements OnInit {

    @Input() post:Post;
    error:any;
    postAdded:boolean;
    data:string;

    constructor(private postService:PostService) {
        this.postAdded = false;
    }

    ngOnInit() {
        this.post = new Post();
    }

    save() {
        this.postService.save(this.post)
            .subscribe(data => this.data = JSON.stringify(data));
        this.postAdded = true;
    }
}