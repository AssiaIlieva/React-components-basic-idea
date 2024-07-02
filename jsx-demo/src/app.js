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

// Create component without JSX

function Main(props){
    return React.createElement(
        'main',
        {},
        React.createElement('h3', {}, props.title),
        React.createElement(
            'ul',
            {},
            React.createElement(
                'li',
                {},
                'The Matrix',
            ),
            React.createElement(
                'li',
                {},
                'Man of steel'
            )
        )
    )
};

// const siteContent = React.createElement(
//     'div',
//     {},
//     headingReactSectionElement,
//     React.createElement(
//         Main,
//         {title: 'Best movies'}
//     )
// )

const siteContentJSX = (
    <div>
        {headingReactSectionElement}
        <Main title="Best Movies" />
    </div>
)

// Render content
rootReactElement.render(siteContentJSX);
// npx babel --watch src --out-dir build --presets react-app/prod