const parent = React.createElement("div", {id: child} , 
                React.createElement("h1", {id : childHeading}, "Hello World from inside child class"));
            
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);