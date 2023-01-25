import Router from "next/router";
import FetchService, { EReqMethod } from "./Fetch.service";

class FetchError {
	private error;
	constructor(e: unknown) {
		this.error = e;
		this.print();
		this.doLogout();
	}

	private print() {
		console.log(this.error);
	}

	public async doLogout() {
		await FetchService.requestGenerator({
			method: EReqMethod.GET,
			externalApi: false,
			url: "/api/auth/logout",
		});
		Router.push("/auth");
	}
}

export default FetchError;
