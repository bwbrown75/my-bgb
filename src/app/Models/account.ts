import { BlogPost } from "./blogPost";
import { PostComment } from "./comment";
import { Message } from "./message";

export class Account {
    constructor(
        public userID: number,
        public userName: string,
        public userEmail: string,
        public password: string,
        public blogPosts: BlogPost[],
        public messages: Message[],
        public comments: PostComment[]
    ) { }
}