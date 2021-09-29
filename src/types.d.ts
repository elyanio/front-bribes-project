declare namespace Definitions {
    type Cards = {
        suit: string;
        value: number | string;
    }
    type List = { q: string, id?: number, result?: string }
    type NumberList = { q: number[], id?: number, result?: string }
    type Bribes = { bribes: number | string }
    type DeleteResult = {
        raw: any;
        affected?: number | null;
    }
}

declare namespace ApiNameSpace {
    export type Method = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
    export type FetchCreatorArgs = {
        path?: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        body?: any;
        method: Method;
    };
}