/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Mar 11 2024
 *   file: index.ts
 *   project: SherpaJS Static Flags
 *   purpose: All Flags
 *
 */


import { Response, Request, Environment } from "sherpa-core";


export function GET(_:Request, env:Environment) {
    return Response(env.GetProperties());
}


// The Lord will rescue his servants; no one who takes refuge in him will be condemned.
// - Psalm 34:22
