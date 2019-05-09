class ZipCode {
    private readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    public toString(): string {
        return this.value;
    }
}

class City {
    private readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    public toString(): string {
        return this.value;
    }
}

function format(zipcode: ZipCode, city: City): string {
    return `${zipcode} ${city}`;
}

function validate(city: string, zipcode: string): boolean {
    return !/[0-9]/.test(city)
        && /^[0-9]{5}$/.test(zipcode);
}

function toHtml(city: string, zipcode: string): string {
    if (validate(city, zipcode)) {
        return `<p>${format(new ZipCode(city), new City(zipcode))}</p>`;
    }
    return "";
}

export {toHtml};
