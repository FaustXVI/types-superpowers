function format(zipcode, city) {
    return zipcode + " " + city;
}

function validate(city, zipcode) {
    return !/[0-9]/.test(city)
        && /^[0-9]{5}$/.test(zipcode);
}

function toHtml(city, zipcode) {
    let formattedAddress = "";
    if (validate(city, zipcode)) { // TODO add error message when invalid
        formattedAddress = format(city, zipcode);
    }
    return "<p>" + formattedAddress + "</p>";
}

export {toHtml};
