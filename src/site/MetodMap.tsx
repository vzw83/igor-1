import React from 'react';

type MethodMapPropsType = {
    task: string
    // arrayCars: Array<CarType>
    arrayCars: CarType[]
}
type CarType = {
    manufacturer: string
    model:string
}


export const MetodMap = (props: MethodMapPropsType) => {

    return (
        <>
            <div>{props.task}</div>
            {props.arrayCars.map((c, index)=>{
                return <ul key={index}><li>{c.manufacturer} - {c.model}</li></ul>
            })}
        </>

    )
};

