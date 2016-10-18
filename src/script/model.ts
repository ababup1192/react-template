import {Record, List} from "immutable";

const PostRecord = Record({ title: "", content: "", tags: List() });

export class Post extends PostRecord {
    title: string;
    content: string;
    tags: List<string>;

    constructor(title: string, content: string, tags?: List<string>) {
        super({ title: title, content: content, tags: tags ? tags : List() });
        if (tags) {
            this.set("tags", tags);
        }
    }

    addTag(tag: string): Post {
        return <Post>this.set("tags", this.tags.push(tag));
    }

    removeTag(tag: string): Post {
        return <Post>this.set("tags", this.tags.filter(t => t !== tag));
    }

    toString(): string {
        return this.toJS();
    }
}
