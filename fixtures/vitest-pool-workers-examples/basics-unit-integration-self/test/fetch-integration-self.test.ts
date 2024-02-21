import { SELF } from "cloudflare:test";
import { expect, it } from "vitest";
import "../src/"; // Currently required to automatically rerun tests when `main` changes

it("dispatches fetch event", async () => {
	const response = await SELF.fetch("http://example.com");
	expect(await response.text()).toBe("👋");
});
