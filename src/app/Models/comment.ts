import { DatePipe } from "@angular/common";

export class PostComment {
    constructor(
        public commentId: number,
        public userName: string,
        public date: DatePipe,
        public bodyText: string
    ) { }
}