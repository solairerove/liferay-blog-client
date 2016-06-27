import {Component, OnInit} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {RouteParams} from 'angular2/router';

import {CommentService} from "../../service/comment.service";
import {Comment} from "../../model/comment";


@Component({
    selector: 'my-comments',
    template: `
<article *ngFor="let comment of comments">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div>
                    <p>
                        <span style="font-weight: bold;">{{comment.author}}</span>
                        <br/>
                        {{comment.review}}
                        <br/>
                        <span style="font-style: italic;">{{comment.date}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</article>
`,
    providers: [
        CommentService, 
        HTTP_PROVIDERS
    ]
})

export class CommentsComponent implements OnInit {
    comments:Comment[];
    errorMessage:string;

    constructor(private commentService:CommentService,
                private routeParams:RouteParams) {

    }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.commentService.getPostComments(id)
            .subscribe(
                comments => this.comments = comments,
                error => this.errorMessage = <any> error
            );
    }

    goBack() {
        window.history.back();
    }
}