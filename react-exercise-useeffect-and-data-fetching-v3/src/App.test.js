import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import App from "./App";

global.fetch = jest.fn();

describe("App", () => {
    it("by default should request people data", async () => {
        global.fetch.mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce(people),
        });
        const { container } = render(<App />);
        screen.getByText("Loading...");
        await waitFor(() => screen.findByText("Luke Skywalker"), 6000);
        const requestUrl = global.fetch.mock.calls[0][0];
        expect(requestUrl).toBe("https://swapi.py4e.com/api/people");
        const select = container.querySelector("select");
        let text = select.options[select.selectedIndex].text;
        expect(text).toBe("People");
        expect(screen.getByText("Luke Skywalker")).toBeTruthy();
        expect(screen.getByText("male")).toBeTruthy();
        expect(screen.getByText("19BBY")).toBeTruthy();
        expect(screen.getByText("77")).toBeTruthy();
        expect(screen.getByText("172")).toBeTruthy();
        expect(screen.getByText("blue")).toBeTruthy();
    });

    it("should request planets data", async () => {
        global.fetch.mockResolvedValue({
            json: jest.fn().mockResolvedValue(planets),
        });
        const { container } = render(<App />);
        screen.getByText("Loading...");
        await waitFor(() => screen.findByText("Tatooine"));
        const select = container.querySelector("select");
        const value = screen.getByRole("option", {
            name: "Planets",
        }).value;
        fireEvent.change(select, { target: { value } });
        screen.getByText("Loading...");
        await waitFor(() => screen.findByText("Tatooine"));
        const requestUrl = global.fetch.mock.calls[1][0];
        expect(requestUrl).toBe("https://swapi.py4e.com/api/planets");
        let text = select.options[select.selectedIndex].text;
        expect(text).toBe("Planets");
        expect(screen.getByText("Tatooine")).toBeTruthy();
        expect(screen.getByText("23")).toBeTruthy();
        expect(screen.getByText("304")).toBeTruthy();
        expect(screen.getByText("desert")).toBeTruthy();
        expect(screen.getByText("1000")).toBeTruthy();
        expect(screen.getByText("arid")).toBeTruthy();
    });

    it("should request starships data", async () => {
        global.fetch.mockResolvedValue({
            json: jest.fn().mockResolvedValue(starships),
        });
        const { container } = render(<App />);
        screen.getByText("Loading...");
        await waitFor(() => screen.findAllByText("CR90 corvette"));
        const select = container.querySelector("select");
        const value = screen.getByRole("option", {
            name: "Starships",
        }).value;
        fireEvent.change(select, { target: { value } });
        screen.getByText("Loading...");
        await waitFor(() => screen.findAllByText("CR90 corvette"));
        const requestUrl = global.fetch.mock.calls[1][0];
        expect(requestUrl).toBe("https://swapi.py4e.com/api/starships");
        let text = select.options[select.selectedIndex].text;
        expect(text).toBe("Starships");
        expect(screen.getAllByText("CR90 corvette")).toBeTruthy();
        expect(
            screen.getByText("Corellian Engineering Corporation")
        ).toBeTruthy();
        expect(screen.getByText("30-165")).toBeTruthy();
        expect(screen.getByText("600")).toBeTruthy();
        expect(screen.getByText("3000000")).toBeTruthy();
        expect(screen.getAllByText("corvette")).toBeTruthy();
    });
});

const people = {
    count: 82,
    next: "https://swapi.dev/api/people/?page=2",
    previous: null,
    results: [
        {
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male",
            homeworld: "https://swapi.dev/api/planets/1/",
            films: [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/6/",
            ],
            species: [],
            vehicles: [
                "https://swapi.dev/api/vehicles/14/",
                "https://swapi.dev/api/vehicles/30/",
            ],
            starships: [
                "https://swapi.dev/api/starships/12/",
                "https://swapi.dev/api/starships/22/",
            ],
            created: "2014-12-09T13:50:51.644000Z",
            edited: "2014-12-20T21:17:56.891000Z",
            url: "https://swapi.dev/api/people/1/",
        },
        {
            name: "C-3PO",
            height: "167",
            mass: "75",
            hair_color: "n/a",
            skin_color: "gold",
            eye_color: "yellow",
            birth_year: "112BBY",
            gender: "n/a",
            homeworld: "https://swapi.dev/api/planets/1/",
            films: [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/4/",
                "https://swapi.dev/api/films/5/",
                "https://swapi.dev/api/films/6/",
            ],
            species: ["https://swapi.dev/api/species/2/"],
            vehicles: [],
            starships: [],
            created: "2014-12-10T15:10:51.357000Z",
            edited: "2014-12-20T21:17:50.309000Z",
            url: "https://swapi.dev/api/people/2/",
        },
        {
            name: "R2-D2",
            height: "96",
            mass: "32",
            hair_color: "n/a",
            skin_color: "white, blue",
            eye_color: "red",
            birth_year: "33BBY",
            gender: "n/a",
            homeworld: "https://swapi.dev/api/planets/8/",
            films: [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/4/",
                "https://swapi.dev/api/films/5/",
                "https://swapi.dev/api/films/6/",
            ],
            species: ["https://swapi.dev/api/species/2/"],
            vehicles: [],
            starships: [],
            created: "2014-12-10T15:11:50.376000Z",
            edited: "2014-12-20T21:17:50.311000Z",
            url: "https://swapi.dev/api/people/3/",
        },
    ],
};

const planets = {
    count: 60,
    next: "https://swapi.dev/api/planets/?page=2",
    previous: null,
    results: [
        {
            name: "Tatooine",
            rotation_period: "23",
            orbital_period: "304",
            diameter: "10465",
            climate: "arid",
            gravity: "1 standard",
            terrain: "desert",
            surface_water: "1",
            population: "200000",
            residents: [
                "https://swapi.dev/api/people/1/",
                "https://swapi.dev/api/people/2/",
                "https://swapi.dev/api/people/4/",
                "https://swapi.dev/api/people/6/",
                "https://swapi.dev/api/people/7/",
                "https://swapi.dev/api/people/8/",
                "https://swapi.dev/api/people/9/",
                "https://swapi.dev/api/people/11/",
                "https://swapi.dev/api/people/43/",
                "https://swapi.dev/api/people/62/",
            ],
            films: [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/4/",
                "https://swapi.dev/api/films/5/",
                "https://swapi.dev/api/films/6/",
            ],
            created: "2014-12-09T13:50:49.641000Z",
            edited: "2014-12-20T20:58:18.411000Z",
            url: "https://swapi.dev/api/planets/1/",
        },
        {
            name: "Alderaan",
            rotation_period: "24",
            orbital_period: "364",
            diameter: "12500",
            climate: "temperate",
            gravity: "1 standard",
            terrain: "grasslands, mountains",
            surface_water: "40",
            population: "2000000000",
            residents: [
                "https://swapi.dev/api/people/5/",
                "https://swapi.dev/api/people/68/",
                "https://swapi.dev/api/people/81/",
            ],
            films: [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/6/",
            ],
            created: "2014-12-10T11:35:48.479000Z",
            edited: "2014-12-20T20:58:18.420000Z",
            url: "https://swapi.dev/api/planets/2/",
        },
        {
            name: "Yavin IV",
            rotation_period: "24",
            orbital_period: "4818",
            diameter: "10200",
            climate: "temperate, tropical",
            gravity: "1 standard",
            terrain: "jungle, rainforests",
            surface_water: "8",
            population: "1000",
            residents: [],
            films: ["https://swapi.dev/api/films/1/"],
            created: "2014-12-10T11:37:19.144000Z",
            edited: "2014-12-20T20:58:18.421000Z",
            url: "https://swapi.dev/api/planets/3/",
        },
    ],
};

const starships = {
    count: 36,
    next: "https://swapi.dev/api/starships/?page=2",
    previous: null,
    results: [
        {
            name: "CR90 corvette",
            model: "CR90 corvette",
            manufacturer: "Corellian Engineering Corporation",
            cost_in_credits: "3500000",
            length: "150",
            max_atmosphering_speed: "950",
            crew: "30-165",
            passengers: "600",
            cargo_capacity: "3000000",
            consumables: "1 year",
            hyperdrive_rating: "2.0",
            MGLT: "60",
            starship_class: "corvette",
            pilots: [],
            films: [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/6/",
            ],
            created: "2014-12-10T14:20:33.369000Z",
            edited: "2014-12-20T21:23:49.867000Z",
            url: "https://swapi.dev/api/starships/2/",
        },
        {
            name: "Star Destroyer",
            model: "Imperial I-class Star Destroyer",
            manufacturer: "Kuat Drive Yards",
            cost_in_credits: "150000000",
            length: "1,600",
            max_atmosphering_speed: "975",
            crew: "47,060",
            passengers: "n/a",
            cargo_capacity: "36000000",
            consumables: "2 years",
            hyperdrive_rating: "2.0",
            MGLT: "60",
            starship_class: "Star Destroyer",
            pilots: [],
            films: [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
            ],
            created: "2014-12-10T15:08:19.848000Z",
            edited: "2014-12-20T21:23:49.870000Z",
            url: "https://swapi.dev/api/starships/3/",
        },
        {
            name: "Sentinel-class landing craft",
            model: "Sentinel-class landing craft",
            manufacturer: "Sienar Fleet Systems, Cyngus Spaceworks",
            cost_in_credits: "240000",
            length: "38",
            max_atmosphering_speed: "1000",
            crew: "5",
            passengers: "75",
            cargo_capacity: "180000",
            consumables: "1 month",
            hyperdrive_rating: "1.0",
            MGLT: "70",
            starship_class: "landing craft",
            pilots: [],
            films: ["https://swapi.dev/api/films/1/"],
            created: "2014-12-10T15:48:00.586000Z",
            edited: "2014-12-20T21:23:49.873000Z",
            url: "https://swapi.dev/api/starships/5/",
        },
    ],
};
