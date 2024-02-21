import { defineWorkersPoolOptions } from "@cloudflare/vitest-pool-workers/config";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globalSetup: ["./global-setup.ts"],
		pool: "@cloudflare/vitest-pool-workers",
		poolOptions: {
			workers: defineWorkersPoolOptions({
				isolatedStorage: true,
				singleWorker: true,
				miniflare: {
					// Configuration for the test runner Worker
					compatibilityDate: "2024-01-01",
					compatibilityFlags: [
						"nodejs_compat",
						// Required to use `WORKER.scheduled()`. This is an experimental
						// compatibility flag, and cannot be enabled in production.
						"service_binding_extra_handlers",
					],
					serviceBindings: {
						WORKER: "worker",
					},

					workers: [
						// Configuration for the Worker under test
						{
							name: "worker",
							modules: true,
							scriptPath: "./dist/index.js", // Built by `global-setup.ts`
							compatibilityDate: "2024-01-01",
							compatibilityFlags: ["nodejs_compat"],
						},
					],
				},
			}),
		},
	},
});
