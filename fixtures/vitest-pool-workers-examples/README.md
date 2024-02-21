# `@cloudflare/vitest-pool-workers` Examples

This directory contains example projects tested with `@cloudflare/vitest-pool-workers`. It aims to provide the building blocks for you to write tests for your own Workers.

| Directory                                                    | Description                                           |
| ------------------------------------------------------------ | ----------------------------------------------------- |
| [basics-unit-integration-self](basics-unit-integration-self) | Basic unit tests and integration tests using `SELF`   |
| [basics-integration-auxiliary](basics-integration-auxiliary) | Basic integration tests using an auxiliary worker[^1] |

[^1]: When using `SELF` for integration tests, your worker code runs in the same context as the test runner. This means you can use global mocks to control your worker, but also means your worker uses the same subtly different module resolution behaviour provided by Vite. Usually this isn't a problem, but if you'd like to run your worker in a fresh environment that's as close to production as possible, using an auxiliary worker may be a good idea. Note this prevents global mocks from controlling your worker, and requires you to build your worker ahead-of-time. This means your tests won't re-run automatically if you change your worker's source code.
