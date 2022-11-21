export function processCv(cv) {
    // console.log("Initial CV: \n" + cv)
    let formatedCv = [];

    let char // keep track of elements - for in
    let line = ""; // store line to be added to formated CV array
    for (char in cv) {
        // console.log(cv.length-1)
        if (cv[char] === '\n') { // detecting end of line
            if (line !== '\r' || char === cv.length-1) { 
                formatedCv = formatedCv.concat([line]) 
                // console.log("added...")
                // console.log(char)

                // console.log(cv.length - 1)
            }
            line = ""
            char += 1
            // console.log("found one")
        } else {
            line += cv[char]
        }
    }
    formatedCv.push(line)

    // console.log("Formated CV: \n" + formatedCv)
    return formatedCv;
}

export async function cvIsTooLong(cv, formatedCv) {
    return cv.length > 500
}