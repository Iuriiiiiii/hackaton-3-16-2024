#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";
import "$std/dotenv/load.ts";
import "lostjs/common/index.js";

//@ts-ignore: Fix lostjs issue
Array.prototype.split = undefined;

await dev(import.meta.url, "./main.ts", config);
