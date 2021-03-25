import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Search } from './components/Search';

it("renders correctly", () => {
    const {queryByTestId, queryByPlaceholderText} = render(<Search/>)

    expect(queryByTestId("search-button")).toBeTruthy()
    expect(queryByPlaceholderText("Enter Keywords")).toBeTruthy()
})

describe("input value", () => {
    it("updates on change", () => {
        const {queryByPlaceholderText} = render(<Search />)

        const searchInput = queryByPlaceholderText("Enter Keywords");

        fireEvent.change(searchInput, {target: {value: "test"}})

        expect(searchInput.value).toBe("test")
    })
})

describe("search-button", () => {
    describe("with empty query", () => {
        it("does not trigger setjobs function", () => {
            const setJobs = jest.fn(); 

            const {queryByTestId} = render(<Search setJobs={setJobs}/>)
            fireEvent.click(queryByTestId("search-button"))
            expect(setJobs).not.toHaveBeenCalled()
        })
    })
    describe('with data inside query', () => {
        it("triggers setJobs function", () => {
            const setJobs = jest.fn(); 

            const {queryByTestId, queryByPlaceholderText } = render(<Search setJobs={setJobs}/>)
            const searchInput = queryByPlaceholderText('Enter Keywords');
            fireEvent.change(searchInput, {target: {value: "test"}})

            fireEvent.click(queryByTestId("search-button"))
            expect(setJobs).toHaveBeenCalled(); 
        })
        
    })
    
})