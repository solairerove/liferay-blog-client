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
<nav class="navbar navbar-default navbar-custom navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>

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
    </div>
</nav>

<router-outlet></router-outlet>

<my-posts></my-posts>

<hr>

<my-footer></my-footer>
`,
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
