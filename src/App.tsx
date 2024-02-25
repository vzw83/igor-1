import './App.css';
// import styled from 'styled-components';
import {Header as H} from "./site/Header";
// import {Body} from "./site/Body";
// import {Footer} from "./site/Footer";
import {MetodMap} from "./site/MetodMap";
import {MethodMapStudents} from "./site/MethodMapStudents";


const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

const students = [
    {
        name: 'Alice',
        age: 20,
        school: 'ABC University'
    },
    {
        name: 'Bob',
        age: 22,
        school: 'XYZ College'
    },
    {
        name: 'Charlie',
        age: 21,
        school: '123 Institute'
    },
    {
        name: 'Alice',
        age: 20,
        school: 'ABC University'
    },
    {
        name: 'Bob',
        age: 22,
        school: 'XYZ College'
    },
    {
        name: 'Charlie',
        age: 21,
        school: '123 Institute'
    },
    {
        name: 'Alice',
        age: 20,
        school: 'ABC University'
    },
    {
        name: 'Bob',
        age: 22,
        school: 'XYZ College'
    },
    {
        name: 'Charlie',
        age: 21,
        school: '123 Institute'
    },
    {
        name: 'Alice',
        age: 20,
        school: 'ABC University'
    },
    {
        name: 'Bob',
        age: 22,
        school: 'XYZ College'
    },
    {
        name: 'Charlie',
        age: 21,
        school: '123 Institute'
    },

];

function App() {
    return (
        <>
            <H title={"Header"}/>
            {/*<H title={"Render"}/>*/}
            {/*<Body titleForBody={"NewBody"}/>*/}

            <MetodMap arrayCars={topCars} task={"Метод Map"}/>
            <MethodMapStudents arrayStudents={students}/>
            {/*<Footer/>*/}
        </>

    );
}

export default App;
