/*
 * This import compiles, but at runtime the module isn't found/loaded.
 *
 * See the transpiled JS (npm run build)
 */
// import Async from "../types/crocks/Async";

// does not compile
import Async from "crocks/Async";

const a = Async.of("Hello World");

a.fork(
	() => console.log("Error!"),
	console.log
);
