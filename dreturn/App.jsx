/* eslint-disable no-undef */
// D-return — App.jsx (default-export style entry)
const App = () => (
  <React.Fragment>
    <Nav/>
    <main>
      <Hero/>
      <Sources/>
      <Stats/>
      <Value/>
      <Form/>
    </main>
    <Footer/>
  </React.Fragment>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
