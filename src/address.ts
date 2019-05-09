type ErrorMessage = string;

function isError<A>(value: A | ErrorMessage): value is ErrorMessage {
    return typeof value === "string";
}

function isOk<A>(value: A | ErrorMessage): value is A {
    return !isError(value);
}

function errors(...values: any | ErrorMessage): ErrorMessage {
    return values.filter(isError).join("\n");
}

class ZipCode {

    public static newZipCode(value: string): ZipCode | ErrorMessage {
        if (!/^[0-9]{5}$/.test(value)) {
            return "wrong zipcode value";
        }
        return new ZipCode(value);
    }

    private readonly value: string;

    private constructor(value: string) {
        this.value = value;
    }

    public toString(): string {
        return this.value;
    }
}

class City {
    public static newCity(value: string): City | ErrorMessage {
        if (/[0-9]/.test(value)) {
            return "Wrong city value";
        }
        return new City(value);
    }

    private readonly value: string;

    private constructor(value: string) {
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
    const checkedZipCode = ZipCode.newZipCode(zipcode);
    const checkedCity = City.newCity(city);
    if (isOk(checkedZipCode) && isOk(checkedCity)) {
        return `<p>${format(checkedZipCode, checkedCity)}</p>`;
    }
    return errors(checkedCity, checkedZipCode);
}

export {toHtml};
