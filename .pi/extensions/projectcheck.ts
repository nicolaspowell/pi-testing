import type {ExtensionAPI} from "@earendil-works/pi-coding-agent";

export default function(pi: ExtensionAPI) {
    pi.registerCommand("checkProject", {
        description: "Check the currect project directory",
        handler: async(name, ctx) => {
            ctx.ui.notify(
                ctx.cwd, "info"
            );
        },
    });
}