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


import { Response, Request, Environment } from "sherpa-core";


export function GET(req:Request, env:Environment) {
    let key   = req.params["key"];
    let props = env.GetProperties();
    if (key in props) {
        return Response(props[key]);
    } else {
        return Response("", { status: 404 });
    }
}


// Teach me your way, Lord, that I may rely on your faithfulness; give me an
// undivided heart, that I may fear your name.
// - Psalm 86:11
