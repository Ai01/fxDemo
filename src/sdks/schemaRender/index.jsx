import { useState } from 'react';

const SchemaRender = (props) => {
    const { schema, components } = props;
    return (
        <div>
            {schema.map((item) => {
                const { componentName, componentProps } = item;
                const RealComponent = components[componentName]
                return (
                    <div key={componentName}>
                        <RealComponent {...componentProps} />
                    </div>
                )
            })}
        </div>
    );
};

export default SchemaRender;