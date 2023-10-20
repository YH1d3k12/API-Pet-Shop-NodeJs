class DataValidation {
    isItEmpty = (...data) => {

        data.forEach((data, index) => {
            if (data === null) {
                throw new TypeError(`Null, argument at index: ${index} is empty`)
            }
            else if (data === undefined) {
                throw new TypeError(`Undefined, argument at index: ${index} is undefined`)
            }
            else if (typeof data === "string" && data.trim() === "") {
                throw new TypeError(`Empty, argument at index: ${index} is a empty string`)
            }
        });

        return true;
    }


    isIdValid(...data) {
        data.forEach((data, index) => {
            if (isNaN(data)) {
                throw new TypeError(`Bad input, ${data} is not a valid id`)
            }
        });

        return true;
    }
}

module.exports = DataValidation;