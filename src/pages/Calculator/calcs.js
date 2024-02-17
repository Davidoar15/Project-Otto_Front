export const calculateCooling = (m, h, type) => {

    let frigHr = 40.00;
    let btu = 0.01;

    if (m === null || h === null || type === "") {
        frigHr = 0;
        btu = 0;

        return { frigHr: frigHr, btu: btu }
    } else {  
        if (type === "poco") {
            frigHr = frigHr*m*h;
            btu = btu*(m*h)*12000;
        } else if (type === "medio") {
            frigHr = (frigHr+10.00)*m*h;
            btu = (btu+0.01)*(m*h)*12000;
        } else {
            frigHr = (frigHr+20.00)*m*h;
            btu = (btu+0.02)*(m*h)*12000;
        }

        return { frigHr: frigHr, btu: btu }
    }
};

export const calculateHeating = (m, h, type) => {

    let kcal = 30.00;

    if (m === null || h === null || type === "") {
        kcal = 0;

        return { kcal: kcal }
    } else {
        if (type === "poco") {
            kcal = kcal*m*h;
        } else if (type === "medio") {
            kcal = (kcal+10.00)*m*h;
        } else {
            kcal = (kcal+20.00)*m*h;
        }

        return { kcal: kcal }
    }
};