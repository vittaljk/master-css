import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-stack-overflow",
    templateUrl: "./stack-overflow.component.html",
    styleUrls: ["./stack-overflow.component.scss"]
})

export class StackOverflowComponent implements OnInit {
    items = [
        {
            votes: 0,
            answers: 1,
            views: 7,
            question: 'Djano multiple-choice field of options in database',
            tags: ['python', 'django', 'database-design', 'model'],
            status: 'answered 56 secs ago Borut 206'
        },
        {
            votes: 0,
            answers: 1,
            views: 3,
            question: 'Djano multiple-choice field of options in database',
            tags: ['python', 'django', 'database-design', 'model'],
            status: 'answered 56 secs ago Borut 206'
        },
        {
            votes: 0,
            answers: 1,
            views: 3,
            question: 'Djano multiple-choice field of options in database',
            tags: ['python', 'django', 'database-design', 'model'],
            status: 'answered 56 secs ago Borut 206'
        },
        {
            votes: 0,
            answers: 1,
            views: 2,
            question: 'Djano multiple-choice field of options in database',
            tags: ['python', 'django', 'database-design', 'model'],
            status: 'answered 56 secs ago Borut 206'
        },
        {
            votes: 10,
            answers: 1,
            views: 7,
            question: 'Djano multiple-choice field of options in database',
            tags: ['python', 'django', 'database-design', 'model'],
            status: 'answered 56 secs ago Borut 206'
        },
        {
            votes: 0,
            answers: 3,
            views: 7,
            question: 'Djano multiple-choice field of options in database',
            tags: ['python', 'django', 'database-design', 'model'],
            status: 'answered 56 secs ago Borut 206'
        },
        {
            votes: 0,
            answers: 5,
            views: 7,
            question: 'Djano multiple-choice field of options in database',
            tags: ['python', 'django', 'database-design', 'model'],
            status: 'answered 56 secs ago Borut 206'
        },
        {
            votes: 20,
            answers: 1,
            views: 7,
            question: 'Djano multiple-choice field of options in database',
            tags: ['python', 'django', 'database-design', 'model'],
            status: 'answered 56 secs ago Borut 206'
        },
        {
            votes: 0,
            answers: 11,
            views: 7,
            question: 'Djano multiple-choice field of options in database',
            tags: ['python', 'django', 'database-design', 'model'],
            status: 'answered 56 secs ago Borut 206'
        },
        {
            votes: 100,
            answers: 1,
            views: 7,
            question: 'Djano multiple-choice field of options in database',
            tags: ['python', 'django', 'database-design', 'model'],
            status: 'answered 56 secs ago Borut 206'
        },
    ]
    constructor() {}

    ngOnInit() {}
}
