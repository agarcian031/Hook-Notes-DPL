import React, {Fragment, useEffect, useState} from 'react'

const Effect = (props) => {
  const [mounted, setMounted] = useState(true)

  const toggle = () => setMounted(!mounted)
  const goBack = () => props.history.goBack()

  // useEffect wants to return an array so you can pass in a second argument of on array
  // the array at the end is considered a dependency and will caused the mounted method to fire right away when the component renders. If it is passed in, useEffect with monitor the argument that is being passed in. 
  useEffect(() => {
    console.log('rendering mounted is', mounted)
  }, [mounted])

  return (
  <Fragment>
  <div className="App">
    <header className="App-header">
      <button onClick={toggle}>Show/Hide Effect</button>
      <button onClick={() => goBack()}>Go Back</button>

    </header>
  </div>
  </Fragment>
  )
}

export default Effect
