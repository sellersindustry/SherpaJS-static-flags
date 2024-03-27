/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Mar 11 2024
 *   file: index.ts
 *   project: SherpaJS Static Flags
 *   purpose: Flag by Key
 *
 */


import { Response, Request } from "sherpa-core";
import { ContextSchema } from "../../sherpa.module";


export function GET(req:Request, context:ContextSchema) {
    let key = req.params.path.get("key") as string;
    if (context[key]) {
        return Response.text(context[key].toString());
    } else {
        return Response.new({ status: 404 });
    }
}


// Teach me your way, Lord, that I may rely on your faithfulness; give me an
// undivided heart, that I may fear your name.
// - Psalm 86:11
