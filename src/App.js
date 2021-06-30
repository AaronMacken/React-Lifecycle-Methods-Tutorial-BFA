import React from 'react';
import axios from 'axios';
import './App.css';

import Child from './Child';

class App extends React.Component {
constructor(props) {
  super(props)

  this.state = {
     isChildShowing: false,
     todos: [],
     isLoading: false
  }
}

  // ----- Lifecycle Methods ----- //

  componentDidMount() {
    this.setState({ isLoading: true })

    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
          this.setState({ todos: response.data })
      })
      .catch(err => {
        console.log('error: ', err);
      })
      .finally(() => {
        this.setState({ isLoading: false })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isLoading !== prevState.isLoading) {
      console.log('loading changed');
    }
  }

  // ----- Handlers ----- // 

  toggleIsChildShowing = () => {
    this.setState((prevState) => ( { isChildShowing: !prevState.isChildShowing } ))
  }

  // ----- Renderers ----- //

  renderChild = () => {
    if (this.state.isChildShowing) {
      return <Child />
    }

    return null;
  }

  renderLoadingState = () => {
    if (this.state.isLoading) {
      return <p>Loading...</p>
    }

    return null;
  }

  renderTodos = () => {
    return this.state.todos.map(todo => {
        return (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.userId}</p>
          </div>
        )
    })
  }

  render() {
    console.log('Render method!');

    return (
      <div className="App">
        <header className="App-header">
          <h1>React Lifecycle Methods</h1>

          <button className="btn btn-light mt-3" onClick={this.toggleIsChildShowing}>Toggle Child</button>
          { this.renderChild() }

          { this.renderLoadingState() }

          { this.renderTodos() }
        </header>
      </div>
    );
  }
}

export default App;
