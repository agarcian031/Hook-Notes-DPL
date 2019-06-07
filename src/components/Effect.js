import React, {Fragment} from 'react'

const Effect = (props) => {

  const goBack = () => props.history.goBack()

  return (
  <Fragment>
  <div className="App">
    <header className="App-header">
      <h1>Test</h1>
      <button onClick={() => goBack()}>Go Back</button>
    </header>
  </div>
  </Fragment>
  )
}

export default Effect
