const unique = (arr: any, filedCheck: string): Array<any> => {
    let res: any = [];

    for (const iterArr of arr) {
        let checkTmp = true;
        for (const iterRes of res) {
            if (iterRes[filedCheck] === iterArr[filedCheck]) checkTmp = false;
        }

        if (checkTmp) res.push(iterArr);
    }

    return res;
};

export default unique;
