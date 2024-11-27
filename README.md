Jobs Website

first we run a command in folder 

create vite@latest (name of project)

after initializing you may forget below thing

C:\Users\SSProduction\Desktop\react-project>cd react-job

C:\Users\SSProduction\Desktop\react-project\react-job>code .

.......................
if you want to change port do it vite config
like this
server:{
    port:3000,
  } 
  ...........................

  npm install for node module
  ................
  npm run dev
  to run project
  .............
  using tailwind so deleted the app.css (no connection with each other maybe)
  .........................

  app.jsx is the main component 

these were shown as default 
<!-- 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App -->


  ....................

emty out the app.jsx and create new component with rafce
..............
get rid of css in index.css
...........
installing tailwind with vite (search vite react tailwind)
we have already create vite project so skip the first part 
use new console

add couple thing in tailwind config
 <!-- extend: {
      fontFamily: {
        sans: ['roboto' , 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      }
    }, -->
    but its project specific 

    

..........

used some tailwind

 <!-- <div className='text-5xl'>app</div> -->
 .......

 doing some jsx 
 you can only return one element like div can have too many thing inside it no problem 
 you can use parenthesis "()"

 you cant do this
   <!-- return (
  
      <div className='text-5xl'>app</div>
    
  <p>sdfaf</p>
  ) -->
  if you want it you can then wrap it in single div <div>
  but if you dont want an actual div there you can use fragmewnt <>
like this
  <!-- 
  <>
      <div className='text-5xl'>app</div>
    
  <p>sdfaf</p>
  </>
   -->

   you can write js above return
   trying dynamic name in jsx

   example:

   <!-- const App = () => {
  const name = 'John';
  return (
  <>
      <div className='text-5xl'>app</div>
    
  <p>hello {name}</p>
  </>
  ) 
} -->

using loop 
 <!-- <ul>
    {names.map((name)=>(
      <li>{name}</li>
    ))}
  </ul> -->
but you will see error
 <!-- Warning: Each child in a list should have a unique "key" prop. -->
 to remove it as you know its not object so we will pass another prop name index and provide key to li key={index} 
 remember if somethingf is dynamic used {}

 final code will look like this 
  <!-- <ul>
    {names.map((name,index)=>(
      <li key={index}>{name}</li>
    ))}
  </ul> -->
  you caqnt use if statement as it should be one line. like you can do it above return no issue
  so for this you can use ternary
  like this
   <!--
  const loggedin = true
    { loggedin ? <h1>hello member</h1> : 'please4 loggedin'} 
   -->
   you can usee this too && so if its logged in he will run the h1

   ...................

   inline style 
   its similar but different like in object 
   example
   <!-- <p style={{color:'red',fontSize:'40px'}}></p> -->

   you can put this stuff in variable too 
   like this 
   <!--
    const style = {
  color: 'blue',
  fontSize:'30px',
  backgroundColor: 'black'
}

 <ul style={style}> 
 
 -->

 this is the code when doing Jsx Crash course
<!--
 import React from 'react'

const App = () => {
  const name = 'John';
const x = 10;
const y = 20;
const names = ['brad', 'johnny', 'jim', 'ken']
const loggedin = true
const style = {
  color: 'blue',
  fontSize:'30px',
  backgroundColor: 'black'
}
  return (
  <>
      <div className='text-5xl'>app</div>
    
  <p>hello {name}</p>
  <p style={{color:'red',fontSize:'40px'}}>the sum of  {x} and {y} is {x + y}</p>
  <ul style={style}>
    {names.map((name,index)=>(
      <li key={index}>{name}</li>
    ))}
  </ul>
  { loggedin ? <h1>hello member</h1> : 'please4 loggedin'}
  </>
  )
}

export default App
  -->

creating components

navbar component:
bring image 
delete react svg
import it to the file the logo
....
Hero:
create it 
make the title and text dynamic by adding prop and in tag you can write like prop.title
then in app.jsx provide it like title="hello"
you can give title directly to the function also instead of props with this{} and then you dont have to use props. but direct title
you can also have default prop just give it in function like this title="defaulot text"
.....
homecard:
you can have wrapper component like this
<card/>
content
<card/>

so what we do in home card is that to get the bg dynamic and classes we create another component card and just take a prop children in that and then give classes to div in return and inside div called children prop then we useed card in homecard 
......
Browse Jpb:
get Json file which ahve data
create joblistings.jsx for jobslisting and then import jobs.json
now add one listing in loop using map method and add it inside removed rest of listing now change it with dynamic content
change a tag link to job id <a href={`/job/${job.id}`
now we will amke the list into a single component that we can then show fore every job
create new component JobListing.jsx





