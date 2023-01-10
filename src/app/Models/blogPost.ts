import { PostComment } from "./comment";

export class BlogPost {
    constructor(
        public postId: number,
        public userName: string,
        public dateCreated: string,
        public dateEdited: string,
        public views: number,
        public blogTitle: string,
        public bodyText: string,
        public photo: string,
        public comments: PostComment[]
    ) { }

}