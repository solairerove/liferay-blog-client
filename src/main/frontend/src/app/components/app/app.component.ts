import {Component} from 'angular2/core';
import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS
} from 'angular2/router';

import {PostService} from '../../service/post.service';
import {PostsComponent} from '../../components/posts/posts.component';
import {AboutComponent} from '../../components/about/about.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {PostDetailComponent} from '../../components/post-detail/post-detail.component';
import {PostAddComponent} from '../../components/post-add/post-add.component';
import {Constraints} from '../../constraints/constraints';
import {LogInComponent} from "../log-in/log-in.component";

@RouteConfig([
    {
        path: Constraints.POSTS_PATH,
        name: 'Posts',
        component: PostsComponent,
        useAsDefault: true
    },
    {
        path: Constraints.ABOUT_PATH,
        name: 'About',
        component: AboutComponent
    },
    {
        path: Constraints.POST_DETAIL_PATH,
        name: 'PostDetail',
        component: PostDetailComponent
    },
    {
        path: Constraints.ADD_POST_PATH,
        name: 'AddPost',
        component: PostAddComponent
    },
    {
        path: Constraints.LOG_IN_PATH,
        name: 'LogIn',
        component: LogInComponent
    },
    {
        path: Constraints.OTHER,
        redirectTo: ['Posts']
    }
])

@Component({
    selector: 'my-app',
    template: `
<!--<my-header></my-header>-->

<!-- Page Header -->
<!-- Set your background image for this header on the line below. -->
<!--<header class="intro-header" style="background-image: url('../../../resources/img/about-bg.jpg')">-->
<!--<div class="container">-->
<!--<div class="row">-->
<!--<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">-->
<!--<div class="site-heading">-->
<!--<h1>Clean Blog</h1>-->
<!--<hr class="small">-->
<!--<span class="subheading">Anything more than you need</span>-->
<!--</div>-->
<!--</div>-->
<!--</div>-->
<!--</div>-->
<!--</header>-->

<!-- Navigation -->
<nav class="navbar navbar-default navbar-custom navbar-fixed-top">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a [routerLink]="['LogIn']">Log in</a>
                </li>
                <li>
                    <a [routerLink]="['Posts']">Posts</a>
                </li>
                <li>
                    <a [routerLink]="['AddPost']">New post</a>
                </li>
                <li>
                    <a [routerLink]="['About']">About</a>
                </li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
</nav>

<router-outlet></router-outlet>

<!-- Posts component invoke -->
<my-posts></my-posts>

<hr>

<my-footer></my-footer>`,
    directives: [
        FooterComponent,
        ROUTER_DIRECTIVES
    ],
    providers: [
        ROUTER_PROVIDERS,
        PostService
    ]
})

export class AppComponent {

}
