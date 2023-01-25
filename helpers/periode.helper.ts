export interface IPeriode {
	periode: string;
}
class PeriodeHelper {
	public getListPeriode(): IPeriode[] {
		const date = new Date();
		const th = date.getFullYear();
		const bl = date.getMonth();
		const aPeriode: IPeriode[] = [];
		for (let i = bl; i > bl - 12; i--) {
			const nBln = i <= 0 ? i + 12 : i;
			const sBln = nBln < 10 ? `0${nBln}` : `${nBln}`;
			const nTh = i <= 0 ? th - 1 : th;
			aPeriode.push({ periode: `${nTh}${sBln}` });
		}
		return aPeriode;
	}

	public currentPeriode(): number {
		const date = new Date();
		const th = date.getFullYear();
		const bl = date.getMonth();
		const blnString = bl < 10 ? `0${bl}` : bl;
		return bl === 1 ? Number(`${th - 1}12`) : Number(`${th}${blnString}`);
	}
}
export default new PeriodeHelper();
