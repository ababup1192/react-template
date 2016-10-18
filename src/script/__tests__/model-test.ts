import { List, Range, Map } from "immutable";
import { Post } from "../model";

describe("model", () => {
    it("should return new Post", () => {
        const expected = new Post("title", "content", List.of("tag1", "tag2", "tag3"));
        const actual = new Post("title", "content")
            .addTag("tag1").addTag("tag2").addTag("tag3");

        expect(expected.equals(actual)).toBeTruthy;
    });
});