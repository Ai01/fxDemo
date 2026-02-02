import { useState, useEffect } from 'react';
import { observer } from "mobx-react"
import { runExpression } from '../expression/runExpression';

const SchemaRender = observer((props) => {
    const { schema, components, store } = props;

    useEffect(() => {
        setTimeout(() => {
            store.setValue('a1', 5);
        }, 1000);
    }, []);

    return (
        <div>
            {schema.map((item) => {
                const { componentName, componentProps } = item;
                const RealComponent = components[componentName];

                // componentProps 的属性 如果是对象，并且类型为 expression， 那么要用 expression处理
                const processedProps = {};
                for (const key in componentProps) {
                    const value = componentProps[key];
                    if (typeof value === 'object' && value.type === 'expression') {
                        processedProps[key] = runExpression(value.expression, { getValue: store.getValue });
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
});

export default SchemaRender;