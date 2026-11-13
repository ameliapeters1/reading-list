import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import { render, screen} from '@testing-library/react'
import ConfirmButton from "./ConfirmButton";


describe("ConfirmButton", () => {

    test("It shows a button with the given label, and does not show 'Are you sure?'", ()=> {

    render(<ConfirmButton label={"hi"} onConfirm={() => {}}/>)

    expect(
        screen.getByRole("button", {name: "hi"}),
    ).toBeInTheDocument();

    expect(
        screen.queryByText("Are you sure?"),
    ).toBe(null)

    });

    test("Clicking the button shows 'Are you sure?'', 'Confirm' and 'Cancel'", async ()=> {
    const user = userEvent.setup()

    render(<ConfirmButton label={"hi"} onConfirm={() => {}}/>)   

    await user.click(screen.getByRole("button", {name: "hi"}))

    expect(
        screen.getByText("Are you sure?")
    ).toBeInTheDocument();

    expect(
        screen.getByRole("button", {name: "Confirm"}),
    ).toBeInTheDocument();
    
    expect(
        screen.getByRole("button", {name: "Cancel"}),
    ).toBeInTheDocument();

    expect(
        screen.queryByRole("button", {name: "hi"}),
    ).not.toBeInTheDocument();

    });

    test("Clicking 'Confirm' calls onConfirm exactly once and returns to the original button.", async ()=>{
        const user = userEvent.setup()
        const onConfirm = vi.fn()

        render(<ConfirmButton label={"hi"} onConfirm={onConfirm}/>)

        await user.click(screen.getByRole("button", {name: "hi"}))
   
        await user.click(screen.getByRole("button", {name: "Confirm"}))

        expect(onConfirm).toHaveBeenCalledTimes(1)

        expect(
            screen.getByRole("button", {name: "hi"})
        ).toBeInTheDocument();
    });

    test("Clicking 'Cancel' returns to the original button, and onConfirm was not called.", async ()=>{
        const user = userEvent.setup()
        const onConfirm = vi.fn()

        render(<ConfirmButton label={"hi"} onConfirm={onConfirm}/>)

        await user.click(screen.getByRole("button", {name: "hi"}))
   
        await user.click(screen.getByRole("button", {name: "Cancel"}))

        expect(onConfirm).not.toHaveBeenCalled()

        expect(
            screen.getByRole("button", {name: "hi"})
        ).toBeInTheDocument();
    });

    test("Clicking the first button alone does not call onConfirm.", async ()=>{
        const user = userEvent.setup()
        const onConfirm = vi.fn()

        render(<ConfirmButton label={"hi"} onConfirm={onConfirm}/>)

        await user.click(screen.getByRole("button", {name: "hi"}))

        expect(onConfirm).not.toHaveBeenCalled()

    });

})

