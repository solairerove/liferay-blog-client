import {Component, OnInit, Input} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {User} from "../../model/user";
import {UserService} from "../../service/user.service";

@Component({
    selector: 'my-log-in-component',
    template: `
<header class="intro-header" style="background-image: url('https://goo.gl/uztZHl')">
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

<div *ngIf="user" [ngClass]="{hide: authenticated}">
    <article>
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-lg-offset-3">
                    <label style="font-size: xx-large">login: </label>
                </div>
                <div class="col-lg-4">
                    <input [(ngModel)]="user.login" placeholder="login" class="form-control input-lg"/>
                </div>
            </div>
        </div>
    </article>
    
    <br/>
    
    <article>
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-lg-offset-3">
                    <label style="font-size: xx-large">password:</label>
                </div>
                <div class="col-lg-4">
                    <textarea [(ngModel)]="user.password" placeholder="password" class="form-control input-lg"></textarea>
                </div>
            </div>
        </div>
    </article>

    <br/>

    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <ul class="pager">
                    <div class="col-lg-3 col-lg-offset-6 col-md-2 col-md-offset-8">
                        <li class="next">
                            <a (click)="authenticate()" style="cursor: hand;margin-right: 22%">Log in&rarr;</a>
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

<div [ngClass]="{hide: !authenticated}" style="margin-bottom: 20%">
    <div class="col-lg-8 col-lg-offset-3 col-md-10 col-md-offset-1">
        <div class="col-lg-4 col-lg-offset-2">
            <h1 style="margin-top: 10%">Authorization successful!</h1>
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
        UserService,
        HTTP_PROVIDERS
    ],
    directives: [ROUTER_DIRECTIVES]
})

export class LogInComponent implements OnInit {

    @Input() user:User;
    error:any;
    authenticated:boolean;
    token:string;

    constructor(private userService:UserService) {
        this.authenticated = false;
    }

    ngOnInit() {
        this.user = new User();
    }

    authenticate() {
        this.userService.authenticate(this.user)
            .subscribe(data => this.token = JSON.stringify(data));
        this.authenticated = true;
        console.log(this.token);
    }
}