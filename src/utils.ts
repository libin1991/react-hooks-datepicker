
interface Res {
    year: number;
    month: number;
    day: number;
}

export const getYearMonthDay = (value: number) => {
    const date = new Date(value);
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate()
    }    
}

export const isSameMonth = (a:Date,b:Date):boolean => {
    return a.getFullYear() === b.getFullYear() && a.getMonth() == b.getMonth()
} 

export const isSameDay = (a:Date,b:Date):boolean => {
    return a.getFullYear() === b.getFullYear() && a.getMonth() == b.getMonth() && a.getDate() == b.getDate()
}

export const getDateFromString = (str: string):Date => {
    let [year, month, day] = str.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}