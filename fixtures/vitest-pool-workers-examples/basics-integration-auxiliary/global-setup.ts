import childProcess from "node:child_process";

export default function () {
	childProcess.execSync("wrangler build", { cwd: __dirname });
}
