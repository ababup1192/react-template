import {List, Map} from "immutable";

function double_list(list: List<number>): List<number> {
    return list.map((n: number) => n * 2).toList();
}

function sum_list(list: List<number>): number {
    return list.reduce((acc: number, n: number) => acc + n, 0);
}

function double_map(numMap: Map<string, number>): Map<string, number> {
    return numMap.map((v: number) => v * 2).toMap();
}

function sum_map(numMap: Map<string, number>): number {
    return numMap.reduce((acc: number, n: number) => acc + n, 0);
}

function sum_map_with_keyfilter(p: (k: string) => boolean, numMap: Map<string, number>): number {
    return sum_map(numMap.flip().filter(p).toMap().flip().toMap());
}

export {double_list, sum_list, double_map, sum_map_with_keyfilter}