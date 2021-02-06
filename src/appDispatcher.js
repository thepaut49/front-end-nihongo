import { Dispatcher } from "flux";
// singleton pattern, only one dispatcher in the application
const dispatcher = new Dispatcher();

export default dispatcher;
