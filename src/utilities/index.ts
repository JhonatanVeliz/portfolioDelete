export const generatorId = () => {
    const date : Date = new Date();
    const time : number = date.getTime();
    const random : number = Math.round( Math.random() * 10 );

    return `${time + 2 * random}`;
};