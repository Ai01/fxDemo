import { useState } from 'react';
import { runExpression } from '../expression/runExpression';
import SchemaStore from '../store';

const SchemaRender = (props) => {
    const { schema, components } = props;
    const store = new SchemaStore(schema);

    return (
        <div>
            {schema.map((item) => {
                const { componentName, componentProps } = item;
                const RealComponent = components[componentName]

                // componentProps 的属性 如果是对象，并且类型为 expression， 那么要用 expression处理
                const processedProps = {};
                for (const key in componentProps) {
                    const value = componentProps[key];
                    if (typeof value === 'object' && value.type === 'expression') {
                        processedProps[key] = runExpression(value.expression, {getValue: store.getValue});
                    } else {
                        processedProps[key] = value;
                    }
                }

                return (
                    <div key={componentName}>
                        <RealComponent {...processedProps} />
                    </div>
                )
            })}
        </div>
    );
};

export default SchemaRender;