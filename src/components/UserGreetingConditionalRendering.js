import React, { Component } from 'react'

class UserGreetingConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true,
            selectedChoice: 'true'
        }
    }

    handleSelectedChoice = event => {
        var isTrueSet = (event.target.value === 'true')
        this.setState({
            isLoggedIn: isTrueSet,
            selectedChoice: isTrueSet
        })
    }

    render() {
        let select =
            <select value={this.state.selectedChoice} onChange={this.handleSelectedChoice}>
                <option value='true'>Logged in</option>
                <option value='false'>Logged out</option>
            </select>

        //using if/else
        // if(this.state.isLoggedIn) return <div>Hello Vasea</div>
        // else return <div>Hello User</div>

        //using element variable
        // let message
        // if(this.state.isLoggedIn) message = <div>Hello Vasea</div>
        // else message = <div>Hello User</div>
        // return <div>{message}</div>

        //using ternary operator
        // return this.state.isLoggedIn ? <div>Hello Vasea</div> : <div>Hello User</div>

        //using short circuit operator
        // return (
        let message= this.state.isLoggedIn && <div>Hello Vasea</div>
        // )
        return(
            <div>{select}{message}</div>
        )

    }
}

export default UserGreetingConditionalRendering
