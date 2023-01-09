import { postComment } from "./comment";

export class blogPost {
    constructor(
        public postId: number,
        public userName: string,
        public dateCreated: string,
        public dateEdited: string,
        public views: number,
        public blogTitle: string,
        public bodyText: string,
        public photo: URL,
        public comments: postComment[]
    ) { }

}