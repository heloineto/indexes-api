import type { NextApiRequest, NextApiResponse } from 'next';

const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const years = [
	'2010',
	'2011',
	'2012',
	'2013',
	'2014',
	'2015',
	'2016',
	'2017',
	'2018',
	'2019',
	'2020',
	'2021',
	'2022',
	'2023',
	'2024',
	'2025',
	'2026',
	'2027',
	'2028',
	'2029',
	'2030',
];

const history: Record<string, number> = {};

const getRandom = (min: number, max: number) => {
	return Math.random() * (max - min) + min;
};

for (const year of years) {
	for (const month of months) {
		const key = `${month}/${year}`;

		history[key] = getRandom(0.001, 0.002);
	}
}

const indexes = {
	CDI: history,
	IPCA: history,
	SELIC: history,
	IGPM: history,
	IGPDI: history,
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json(indexes);
};

export default handler;
