const TypedText = ({ text, className = "", delay = 0, stagger = 0.05 }) => {
    return (
        <span className={className} style={{ display: "inline-block" }}>
            {text}
        </span>
    );
};

export default TypedText;
