import './learnMore.css'
interface Props{
    color: string;
}

function LearnMoreButtonComponent({color}:Props) {
    return (
        <>
        <button className={`${color}`}>Learn More</button>
        </>
    )
}
export default LearnMoreButtonComponent