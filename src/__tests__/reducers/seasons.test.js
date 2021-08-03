import seasons from "../../redux/reducers/seasons";
import { initialState } from "../../redux/reducers/seasons";

describe("Seasons List Reducer", () => {
	it("should return the initial state", () => {
		expect(seasons(undefined, {})).toMatchSnapshot();
	});

	it("should handle Fetch Seasons Request", () => {
		expect(
			seasons(initialState, {
				type: "FETCH_SEASONS_REQUEST",
			})
		).toMatchSnapshot();
	});

	it("should handle Fetch Seasons Success", () => {
		expect(
			seasons(initialState, {
				type: "FETCH_SEASONS_SUCCESS",
			})
		).toMatchSnapshot();
	});

	it("should handle Fetch Seasons Failure", () => {
		expect(
			seasons(initialState, {
				type: "FETCH_SEASONS_FAILURE",
			})
		).toMatchSnapshot();
	});
});
