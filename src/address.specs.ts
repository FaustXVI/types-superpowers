import {expect} from "chai";
import {toHtml} from "./address";

describe("An address", () => {
    const validCity = "Paris";
    const validZipCode = "75000";
    describe("to html", () => {
        it("should show address in a paragraph when valid", () => {
            expect(toHtml(validCity, validZipCode)).to
                .match(/<p>.*<\/p>/)
                .contains(validCity)
                .contains(validZipCode);
        });
        describe("should show an error message when address is invalid", () => {
            for (const invalidCity of [
                "Paris 13",
                "P4ris",
                null,
                {}
            ]) {

                it("because of city (" + invalidCity + ")", () => {
                    expect(toHtml(invalidCity, validZipCode)).to
                        .not.contains(invalidCity);
                });
            }
            for (const invalidZipCode of [
                "7501",
                "750190",
                "75O19",
                12345, //02134
            ]) {

                it("because of zipcode (" + invalidZipCode + ")", () => {
                    expect(toHtml(validCity, invalidZipCode)).to
                        .not.contains(invalidZipCode);
                });
            }
            it("because of both", () => {
                expect(toHtml("P4ris", "75O17")).to
                    .not.contains("P4ris")
                    .not.contains("75O17");
            });
        });
    });
});
