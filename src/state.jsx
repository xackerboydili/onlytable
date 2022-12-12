import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";
import list from "./list";


class State extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           data: list,
           active: null,
           name:'',
           surname: '',
        }
    }
    render(){

        const onDelete = (name) => {
            let del = this.state.data.filter(val => val.name !== name)
            this.setState({
                data : del
            })
        }
        
        const onEdit = ({name, surname}, save) => {
            if(save){
                this.setState({active: null}) 
            }else{
                this.setState({
                    name: name,
                    surname: surname,
                    active: {name, surname}}
                    )
            } 
        }

        const onChange =(e)=>{
            this.setState({[e.target.name] : e.target.value})
        }

        return(
            <div>
             
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>surname</th>
                            <th>delete</th>
                            <th>edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.length ?
                            this.state.data.map(({name, surname}) => {
                                return(
                                    <tr key={name}>
                                    <td>{' '}
                                        
                                        {this.state.active?.name === name ? (<input onChange={onChange} value={this.state.name} name='name' type='text'></input>) : (name)} </td>
                                    <td>
                                        {this.state.active?.name === name ? (<input onChange={onChange} value={this.state.surname} name ='surname' type='text'></input>) : (surname)}</td>
                                    <td>
                                        <button onClick={() => onDelete(name)}>delete</button></td>
                                    <td>
                                        <button onClick={()=> onEdit({name, surname}, this.state.active?.name === name)}>
                                        {this.state.active?.name === name ? 'save' : 'edit'}
                                        </button></td>
                                </tr>
                            )
                        }) :
                        <tr>
                                <th colSpan={4}>No Data</th>
                            </tr>
                        }
                    </tbody>
                </table>


            </div>
        )
        
    }
}




export default State;
{/* <h1>name:{this.state.name}</h1>
<input onChange={onChange} type="text" name="" id="" />

<h1>name1:{this.state.name1}</h1>
<input onChange={onChangename1} type="text" name="" id="" />
<br /> <br />
 

<input onChange={onFilter} type="text" placeholder="filter" /> */}



{/* <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Delete</th>
            <th>Edit</th>
        </tr>
    </thead>
    <tbody>
        
        {
        this.state.data.length ?
        this.state.data.map(({name, surname}) => {
            return(
                <tr key={name}>
                    <td>{name}</td>
                    <td>{surname}</td>
                    <td><button onClick={()=> onDelete(name)}>delete</button></td>
                    <td><button>edit</button></td>
                </tr>
            )
        }) : 
        <tr>
            <th colSpan={4}>Nodata</th>
        </tr>
    }
    </tbody>
</table> */}