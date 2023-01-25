import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const token = await getToken({ req });
	console.log(token);
	res.send(JSON.stringify(token, null, 2));
}
