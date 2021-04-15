import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// this file is everytime before any of the tests
// is run.
Enzyme.configure({ adapter: new Adapter() });