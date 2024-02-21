import { env } from "cloudflare:test";
import { expect, it } from "vitest";

it("dispatches scheduled event", async () => {
	const result = await env.WORKER.scheduled({
		scheduledTime: new Date(1000),
		cron: "30 * * * *",
	});
	expect(result.outcome).toBe("ok");
});
