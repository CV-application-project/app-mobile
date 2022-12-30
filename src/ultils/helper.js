export const numberToTime = (number) => {

    const hours = divFunction(number , 3600);

    const minutes = divFunction(number - hours * 3600, 60);

    const second = number - hours * 3600 - minutes * 60;

    return `${hours > 9 ? "" : "0"}${hours} : ${minutes > 9  ? "" : "0"
        }${minutes} : ${second > 9 ? "" : "0"}${second}`;
};


export const divFunction = (a, b) =>{
    return Math.floor(a / b);
} 