import { blogPost } from "./blogPost";
import { postComment } from "./comment";
import { Message } from "./message";

export class Account {
    constructor(
        public userID: number,
        public userName: string,
        public userEmail: string,
        public password: string,
        public blogPosts: blogPost[],
        public messages: Message[],
        public comments: postComment[]
    ) { }
}