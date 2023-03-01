import React from 'react';
import "../assets/scrollCss.css";

function Scroll({ items }) {
return (
<div className="scroll-container">
    {items.map((item, index) => (
    <div className="scroll-item" key={index}>
        {item}
    </div>
    ))}
</div>
);
}

export default Scroll;
