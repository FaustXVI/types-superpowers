function format(zipcode, city) {
    return `${zipcode} ${city}`;
}

function validate(city: string, zipcode: string) {
    return !/[0-9]/.test(city)
        &&  /^[0-9]{5}$/.test(zipcode);
}

function toHtml(city, zipcode) {
    if (validate(city, zipcode)) {
        return `<p>${format(city, zipcode)}</p>`;
    }
    return "";
}

export {toHtml};
