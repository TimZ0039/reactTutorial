import React, {Component} from 'react'

class App extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'https://docs.google.com/spreadsheets/u/2/d/e/2PACX-1vRwAqp96T9sYYq2-i7Tj0pvTf6XVHjDSMIKBdZHXiCGGdNC0ypEU9NbngS8mxea55JuCFuua1MUeOj5/pubhtml#'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }

  render() {
    const {data} = this.state

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })

    return <ul>{result}</ul>
  }
}

export default App
