import React from 'https://cdn.skypack.dev/react';

export default class ConversionRatio extends React.Component {
    render() {
        return (
            <div className='conversion-ratio'>
                <div className="input">1</div>
                <div className="arrow-1">→</div>
                <div className="arrow-2">←</div>
                <div className="output">1</div>
            </div>
        )
    }
}