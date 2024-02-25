import React from 'react';

type MethodMapStudentsPropsType = {
    arrayStudents: arrayType[]
}
type arrayType = {
    name: string,
    age: number,
    school: string
}

export const MethodMapStudents = (props: MethodMapStudentsPropsType) => {

    return (
        <div>
            <h1>List Students</h1>

                <table style={{ border: "1px solid black" }}>
                    <thead>
                    <tr>
                        <th style={{ border: "1px solid black" }}>Neme </th>
                        <th style={{ border: "1px solid black" }}>age </th>
                        <th style={{ border: "1px solid black" }}>School </th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.arrayStudents.map((s, index) => {
                        return <tr key={index} style={{ border: "1px solid black" }}>
                            <td style={{ border: "1px solid black" }}> {s.name}</td>
                            <td style={{ border: "1px solid black" }}>{s.age} </td>
                            <td style={{ border: "1px solid black" }}>{s.school}</td>
                        </tr>
                    })}
                    </tbody>

                </table>


        </div>
    );
};

