import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import { render, screen} from '@testing-library/react'
import { useState } from "react";

import RatingPicker from './RatingPicker'

function Wrapper() {
  const [value, setValue] = useState<number | null>(null);
  return <RatingPicker value={value} onChange={setValue} />;
}


describe("RatingPicker", () => {

    test("It renders a group named 'Your rating'", ()=>{

        render(
        <RatingPicker value={40} onChange={()=>{}}/>,
    );

    expect(
        screen.getByRole("group", {name: "Your rating"}),
    ).toBeInTheDocument();
    })

    test("It renders five radio buttons", ()=>{
        render(
        <RatingPicker value={40} onChange={()=>{}}/>,
    );
   
    expect(screen.getAllByRole("radio").length).toBe(5)

    })

    test("With value={null}, none of them are checked", ()=>{
        render(
        <RatingPicker value={null} onChange={()=>{}}/>,
    );
   
    const radios = screen.getAllByRole("radio")
    radios.forEach((radio)=>{
        expect(radio).not.toBeChecked()
    })
    })

    test("With value={3}, '3 stars' is checked and '2 stars' is not", ()=>{
        render(
        <RatingPicker value={3} onChange={()=>{}}/>,
        );
   
    expect(screen.getByRole("radio", {name: "3 stars"})).toBeChecked()
    expect(screen.getByRole("radio", {name: "2 stars"})).not.toBeChecked()
    
    })

    test("Clicking '4 stars' calls onChange once, with 4", async ()=>{
        const user = userEvent.setup()
        const onChange = vi.fn()
        render(
        <RatingPicker value={null} onChange={onChange}/>,
        );

        await user.click(screen.getByRole("radio", {name: "4 stars"}))
   
        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith(4)
    })

    test("Clicking the radio that is already checked does not call onChange", async ()=>{
        const user = userEvent.setup()
        const onChange = vi.fn()
        render(
        <RatingPicker value={4} onChange={onChange}/>,
        );

        await user.click(screen.getByRole("radio", {name: "4 stars"}))
   
        expect(onChange).not.toHaveBeenCalled()
    })

    test("Clicking 3 star checks 3 star ", async ()=>{
        const user = userEvent.setup()
        render(<Wrapper />);

        await user.click(screen.getByRole("radio", {name: "3 stars"}))
   
        expect(screen.getByRole("radio",{name:"3 stars"})).toBeChecked()
    })
})




// Clicking the radio that is already checked either calls onChange or does not. Decide which it should do, and write the decision into the test name.
