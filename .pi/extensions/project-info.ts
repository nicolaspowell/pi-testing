import type {ExtensionAPI} from "@earendil-works/pi-coding-agent";
import {Type} from "@sinclair/typebox";
import { basename } from "node:path";

export default function (pi: ExtensionAPI) {
    pi.registerTool({
        name: "project_info",
        label: "Project Info",
        description: "Returns the current working directory of the active project. Use this tool when the user asks which project they are working in or requests their project path.",
        parameters: Type.Object({
            format: Type.Union([
                Type.Literal("name"),
                Type.Literal("path"),
            ]),
        }),

        async execute(_toolCallId, params, _signal, _onUpdate, ctx){
            const result = params.format === "name" ? basename(ctx.cwd):ctx.cwd;
            return{
                content: [
                    {
                        type: "text",
                        text: `Current project directory: ${result}`,
                    },
                ],
                details: undefined,
            };
        },
    });
}