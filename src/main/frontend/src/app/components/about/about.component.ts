import {Component} from 'angular2/core';

@Component({
    selector: 'my-about',
    template: `
<header class="intro-header" style="background-image: url('https://goo.gl/uztZHl')">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div class="page-heading">
                    <h1>About Me</h1>
                    <hr class="small">
                    <span class="subheading">This is what I do.</span>
                </div>
            </div>
        </div>
    </div>
</header>

<div class="container">
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <p>
                Actually, why i do all this.
            </p>

            <p>
                With building-up and using more and more frameworks
                and other things, i forget what i did a day before.
            </p>

            <p>
                Therefore, all written here is only my reminder.
                Maybe for someone this will be interesting. Or not. I don't care at all from any side.
            </p>

            <p>
                If you have any evil ideas, contact with bottom buttons.
            </p>
        </div>
    </div>
</div>`
})

export class AboutComponent {

}
