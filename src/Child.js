import React, { Component } from 'react'

export default class Child extends Component {
    componentWillUnmount() {
        console.log('So long! Its time for me to unmount u_u');
    }

    render() {
        return (
            <div className="mt-3">
                I'm a child component! Look at me!
            </div>
        )
    }
}
