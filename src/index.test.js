import loadTranslation from "./index.js";
let languageGetter;

beforeEach(() => {
    window.sessionStorage.translate = {};
    languageGetter = jest.spyOn(window.navigator, 'language', 'get');
});

afterEach(() => {
    delete window.sessionStorage.translate;
});

describe("Traslation", function () {
    it("should be show default lang", () => {
        languageGetter.mockReturnValue('en-US');
        const input = {
            default: "en-US",
            languages: {
                "en-US": {
                    btnCancel: "cancel",
                },
                "it-IT": {
                    btnCancel: "annulla",
                },
            },
        };

        const result = { btnCancel: "cancel" };
        loadTranslation(input);
        expect(window.sessionStorage.translate).toBe(JSON.stringify(result));
    });
    it("should be show browser (IT) lang instead of default", () => {
        languageGetter.mockReturnValue('it-IT');
        const input = {
            default: "en-EN",
            languages: {
                "es-ES": {
                    btnCancel: "borrar",
                },
                "it-IT": {
                    btnCancel: "annulla",
                },
            },
        };

        const result = { btnCancel: "annulla" };
        loadTranslation(input);
        expect(window.sessionStorage.translate).toBe(JSON.stringify(result));
    });
    it("should be show default lang in case browser lang is not present", () => {
        languageGetter.mockReturnValue('es-ES');
        const input = {
            default: "en-EN",
            languages: {
                "en-EN": {
                    btnCancel: "cancel",
                },
                "it-IT": {
                    btnCancel: "annulla",
                },
            },
        };

        const result = { btnCancel: "cancel" };
        loadTranslation(input);
        expect(window.sessionStorage.translate).toBe(JSON.stringify(result));
    });
});
