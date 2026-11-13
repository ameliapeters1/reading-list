
interface ProgressBarProps {
    pagesRead: number;
    totalPages: number;
}


function percentageCalculator(pagesRead: number, totalPages: number): number {
    if (totalPages <= 0) return 0;

    const percentage = Math.round(((pagesRead/totalPages) * 100))

    return percentage > 100 ? 100 : percentage;

}


function ProgressBar({pagesRead, totalPages}: ProgressBarProps) {

    const percentage = percentageCalculator(pagesRead, totalPages)


    return(
            <div 
                role="progressbar"
                aria-label="Reading progress" 
                aria-valuenow={percentage} 
                aria-valuemin={0} 
                aria-valuemax={100}>
                    <span>Reading progress</span>
                    <span>{ percentage }%</span>
            </div>
    )
}


export default ProgressBar