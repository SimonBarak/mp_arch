import React from 'react';

const Dadaview = ({ data }) => {
    return (
        <code>
            <pre
                style={{
                    backgroundColor: "lightgray",
                }}
            >
                {JSON.stringify(data, null, 2)}
            </pre>
        </code>
    );
};

export default Dadaview;
