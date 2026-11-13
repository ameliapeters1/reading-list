import "@testing-library/jest-dom/vitest";
import { render, screen} from '@testing-library/react'

import ProgressBar from './ProgressBar'



describe("ProgressBar", () => {

    test("renders a progress bar with the accessible name 'Reading Progress'", ()=>{

        render(
        <ProgressBar pagesRead={40} totalPages={100}/>,
    );

    expect(
        screen.getByRole("progressbar", {name: "Reading progress"}),
    ).toBeInTheDocument();

    })

    test("Given 150 pages read of 300, it shows 50% and the bar has aria-valuenow of 50.", () => {

        render(
        <ProgressBar pagesRead={150} totalPages={300}/>,
    );

    expect(
        screen.getByText("50%")
    ).toBeInTheDocument();

    expect(
        screen.getByRole("progressbar")
    ).toHaveValue(50)

    })

    test("Given 100 of 300, it shows 33%, so the percentage is rounded.", () => {

        render(
        <ProgressBar pagesRead={100} totalPages={300}/>,
    );

    expect(
        screen.getByText("33%")
    ).toBeInTheDocument();

    expect(
        screen.getByRole("progressbar")
    ).toHaveValue(33)

    })

    test("Given 0 of 300, it shows 0%.", () => {

        render(
        <ProgressBar pagesRead={0} totalPages={300}/>,
    );

    expect(
        screen.getByText("0%")
    ).toBeInTheDocument();

    expect(
        screen.getByRole("progressbar")
    ).toHaveValue(0)

    })

    test("Given 400 of 300, it shows 100% and not 133%, so the value is clamped.", () => {

        render(
        <ProgressBar pagesRead={400} totalPages={300}/>,
    );

    expect(
        screen.getByText("100%")
    ).toBeInTheDocument();

    expect(
        screen.getByRole("progressbar")
    ).toHaveValue(100)

    })

    test("Given a total of 0, it does not show NaN%, it shows 0%", () => {

        render(
        <ProgressBar pagesRead={400} totalPages={0}/>,
    );

    expect(
        screen.getByText("0%")
    ).toBeInTheDocument();

    expect(
        screen.getByRole("progressbar")
    ).toHaveValue(0)

    })
});