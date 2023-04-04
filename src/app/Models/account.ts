import { BlogPost } from "./blogPost";
import { PostComment } from "./comment";

export class Account {
    constructor(
        public userId: number,
        public userEmail: string,
) { }
}