import { act, render, screen } from '@testing-library/react';
import { pokeApi } from './services/apiService'
import userEvent from '@testing-library/user-event';
import App from './App';

const BASE_DATA = {
    order: 0, 
    sprites: {versions: {"generation-v": {"black-white": {"animated": {"front_default": '/dfgdg/dfgd'}}}}},
    types: [],
    height: 4,
    weight: 2,
    stats: [],
}
const BULBASAUR = {
    ...BASE_DATA, 
    name: 'bulbasaur', 
    url: 'url/to/bulbasaur', 
    order: 1,
}
const PIDGEOT = {
    ...BASE_DATA, 
    order: 2,
    name: 'pidgeot', 
    url: 'url/to/pidgeot', 
}
describe('App', () => {
    beforeEach(() => {
        jest.spyOn(pokeApi, 'getPokemons').mockImplementation(
            (offset) => {
                if(offset === "1"){
                    return Promise.resolve([PIDGEOT])
                }else{
                    return Promise.resolve([BULBASAUR])
                }
            },
        );
        jest.spyOn(pokeApi, 'getPokemon').mockImplementation(
            (_name) => {
                return Promise.resolve({...BULBASAUR, sprite: 'ss'})
            },
        );
    })
    test('renders pokemon list on load', async () => {
        render(<App />);

        expect(await screen.findByText(/bulbasaur/i)).toBeInTheDocument()

    });
    test('when user clicks on "load more", request for more pokemon gets made', async() => {
        render(<App />);

        expect(await screen.findByText(/bulbasaur/i)).toBeInTheDocument()

        act(() => {
            userEvent.click(screen.getByText(/load more/i))
        })

        expect(await screen.findByText(/pidgeot/i)).toBeInTheDocument()
    });
    test('when user clicks on a pokemon, they can see a detailed view', async() => {
        act(() => {
            render(<App />);
        })
        await screen.findByText(/bulbasaur/i);

        userEvent.click(screen.getByText(/bulbasaur/i))

        await act(async () => {
            expect(await screen.findByText(/height/i)).toBeInTheDocument()
        })

    });
})