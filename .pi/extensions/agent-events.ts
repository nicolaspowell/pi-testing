import type {ExtensionAPI} from "@earendil-works/pi-coding-agent";

export default function(pi: ExtensionAPI){
    pi.on("agent_end", async(_event, ctx) => {
        ctx.ui.notify("Huzz master has finished its task", "info");
    });
}