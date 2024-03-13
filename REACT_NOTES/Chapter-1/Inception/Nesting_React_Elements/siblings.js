const parent = React.createElement("div", {id: child} , [
                React.createElement("h1", {id : child1}, "Hello World from inside child1 class"),
                React.createElement("h1", {id : child2}, "Hello World from inside child2 class"),
                React.createElement("h1", {id : child3}, "Hello World from inside child3 class")]);
            
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);