function App() {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <h1>Dashboard</h1>
      
      <button onClick={() => console.log('click')}>Click me</button>
      
      <div>
        <input type="text" placeholder="Search..." />
      </div>
      
      <h2>Navigation</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      
      <div role="banner">
        <h2>Featured Content</h2>
      </div>
      
      <p style={{ color: '#ccc' }}>Low contrast text</p>
      
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </form>
      
      <div role="navigation">
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default App
