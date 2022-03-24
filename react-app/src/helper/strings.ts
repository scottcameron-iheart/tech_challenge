export function camelCaseToTitle(str: string): string {
    let newStr = '';
    const strArr = str.split(/([A-Z])/g);
    for (let i = 0; i < strArr.length; i++) {
        const word = strArr[i];
        if (i === 0) {
            newStr += word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            if (word.toUpperCase() === word) {
                newStr += ' ' + word;
            } else {
                newStr += word;
            }
        }
    }

    return newStr
}