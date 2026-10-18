
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  let toolCount = 0;
  const history: string[] = [];

  pi.on("tool_call", async (event, ctx) => {
    toolCount++;

    history.push(
      `Tool #${toolCount} used: ${event.toolName}`
    );

    ctx.ui.setWidget("tool-history", history);
  });
}
