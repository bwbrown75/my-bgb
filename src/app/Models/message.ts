import { DatePipe } from "@angular/common";

export class Message {
    constructor(
        public messageId: number,
        public userTo: string,
        public userFrom: string,
        public date: DatePipe,
        public bodyText: string
    ) { }
}