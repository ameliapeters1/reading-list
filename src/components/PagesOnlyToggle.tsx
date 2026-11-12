interface PagesOnlyToggleProps{
    checked: boolean
    onChange: (value: boolean) => void
}

function PagesOnlyToggle({checked, onChange}:PagesOnlyToggleProps){

    return(
        <>
            <label>Only books with a page count
            <input
            type="checkbox"
            checked={checked}
            onChange={(event)=>onChange(event.target.checked)}>
            </input>
            </label>

        </>
    )
}

export default PagesOnlyToggle