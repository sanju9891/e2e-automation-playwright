import { addDays, formatDate, subDays, subYears } from 'date-fns';

const basicDateFmt = 'yyyy-MM-dd';

export function currentDate(format = basicDateFmt) {
	return formatDate(Date.now(), format);
}

export function plusDays(days: number, format = basicDateFmt) {
	return formatDate(addDays(Date.now(), days), format);
}

export function minusDays(days: number, format = basicDateFmt) {
	return formatDate(subDays(Date.now(), days), format);
}

export function minusYears(years: number, format = basicDateFmt) {
	return formatDate(subYears(Date.now(), years), format);
}
