class ZipCode {
    private readonly value: string;

    constructor(value: string) {
        if (!/^[0-9]{5}$/.test(value)) {
            throw new Error("wrong zipcode value");
        }
        this.value = value;
    }

    public toString(): string {
        return this.value;
    }
}

class City {
    private readonly value: string;

    constructor(value: string) {
        if (/[0-9]/.test(value)) {
            throw new Error("Wrong city");
        }
        this.value = value;
    }

    public toString(): string {
        return this.value;
    }
}

function format(zipcode: ZipCode, city: City): string {
    return `${zipcode} ${city}`;
}

function todo(reason: string): never {
    throw new Error(`TODO : ${reason}`);
}

function toHtml(city: string, zipcode: string): string {
    try {
        return `<p>${format(new ZipCode(zipcode), new City(city))}</p>`;
    } catch (e) {
        return todo("give a nice error message");
    }
}

export {toHtml};
