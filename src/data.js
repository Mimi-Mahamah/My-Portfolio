export const skills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "JSX",
    "SASS"
];

export const Clipboard = () => {
        const [copyText, setCopyText] = useState('');

        const handleCopyText = (e) => {
            setCopyText(e.target.value);
        }

        const copyToClipboard = () => {
            copy(copyText);
            alert(`You have copied "${copyText}"`);
        }
        return ( <
            >
            < input type = "text"
            value = "mimimahamah@gmail.com"
            id = "myInput" / > < Button onClick = { copyToClipboard } >
            Copy to Clipboard <
            /Button></ >

        )