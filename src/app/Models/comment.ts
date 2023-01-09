export class postComment {
    constructor(
        public commentId: number,
        public userName: string,
        public date: string,
        public bodyText: string
    ) { }
}