// Get root HTML Element
const rootHtmlElement = document.getElementById('root');

// Initialize root react element

const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//  Create basic react element

const headingReactSectionElement = (
<header id="site-header" className="navigation">
    <h1>Hello JSX from React</h1>
    <h2>JSX is Awesome</h2>
    <p>lorem 10</p>
</header>
);

// Render content
rootReactElement.render(headingReactSectionElement);
// npx babel --watch src --out-dir build --presets react-app/prod