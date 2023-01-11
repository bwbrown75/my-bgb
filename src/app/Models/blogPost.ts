import { DatePipe } from "@angular/common";
import { PostComment } from "./comment";

export class BlogPost {
    constructor(
        public postId: number,
        public userName: string,
        public dateCreated: number,
        public dateEdited: number,
        public views: number,
        public blogTitle: string,
        public bodyText: string,
        public photo: string,
        public comments: PostComment[]
    ) { }

}