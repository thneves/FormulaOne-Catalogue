import configureStore from "redux-mock-store";
import {
	fetchDriversRequest,
	fetchDriversSuccess,
	fetchDriversFailure,
} from "../../redux/actions";

const mockStore = configureStore();
const store = mockStore({});

it("should fetch drivers ranking request", () => {
	store.dispatch(
		fetchDriversRequest({
			loading: true,
			drivers: {},
			error: "",
		})
	);
	expect(store.getActions()).toMatchSnapshot();
});

it("should fetch drivers ranking with success", () => {
	store.dispatch(
		fetchDriversSuccess({
			loading: false,
			drivers: {
        name: "test driver"
      },
			error: "",
		})
	);
	expect(store.getActions()).toMatchSnapshot();
});

it("should fetch drivers ranking with failure", () => {
	store.dispatch(
		fetchDriversFailure({
			loading: false,
			drivers: {},
			error: 'some error',
		})
	);
	expect(store.getActions()).toMatchSnapshot();
});
