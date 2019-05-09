function format(zipcode: string, city: string): string {
    return `${zipcode} ${city}`;
}

function validate(city: string, zipcode: string): boolean {
    return !/[0-9]/.test(city)
        && /^[0-9]{5}$/.test(zipcode);
}

function toHtml(city: string, zipcode: string): string {
    if (validate(city, zipcode)) {
        return `<p>${format(city, zipcode)}</p>`;
    }
    return "";
}

export {toHtml};
