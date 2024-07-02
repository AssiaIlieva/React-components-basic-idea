// Get root HTML Element
var rootHtmlElement = document.getElementById('root');

// Initialize root react element

var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//  Create basic react element

var headingReactSectionElement = React.createElement(
    "header",
    { id: "site-header", className: "navigation" },
    React.createElement(
        "h1",
        null,
        "Hello JSX from React"
    ),
    React.createElement(
        "h2",
        null,
        "JSX is Awesome"
    ),
    React.createElement(
        "p",
        null,
        "lorem 10"
    )
);

// Render content
rootReactElement.render(headingReactSectionElement);
// npx babel --watch src --out-dir build --presets react-app/prod