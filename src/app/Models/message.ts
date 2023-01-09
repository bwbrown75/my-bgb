export class Message {
    constructor(
        public messageId: number,
        public userName: string,
        public date: string,
        public bodyText: string
    ) { }
}