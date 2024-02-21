import {
	createExecutionContext,
	env,
	waitOnExecutionContext,
} from "cloudflare:test";
import { expect, it } from "vitest";
import worker from "../src/index";

// Required to get correctly typed `request` for 1st param of `worker.fetch()`
const IncomingRequest = Request<unknown, IncomingRequestCfProperties>;

it("dispatches fetch event", async () => {
	const request = new IncomingRequest("http://example.com");
	const ctx = createExecutionContext();
	const response = await worker.fetch(request, env, ctx);
	await waitOnExecutionContext(ctx);
	expect(await response.text()).toBe("👋");
});
