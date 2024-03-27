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


import { Response, Request } from "sherpa-core";
import { ContextSchema } from "../sherpa.module";


export function GET(_:Request, context:ContextSchema) {
    return Response.JSON(context);
}


// The Lord will rescue his servants; no one who takes refuge in him will be condemned.
// - Psalm 34:22
