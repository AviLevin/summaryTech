<!-- ... other HTML ... -->

<!-- Load React. -->
<!-- Note: when deploying, replace "development.js" with "production.min.js". -->
<
script src = "https://unpkg.com/react@17/umd/react.development.js"
crossorigin > < /script> <
script src = "https://unpkg.com/react-dom@17/umd/react-dom.development.js"
crossorigin > < /script>

<!-- Load our React component. -->
<
script src = "like_button.js" > < /script>

<
/body>

===
===
=== === === =
// ... the starter code you pasted ...

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

===
===
=== === === = <
script src = "https://unpkg.com/react@17/umd/react.production.min.js"
crossorigin > < /script> <
script src = "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
crossorigin > < /script>

===
===
=== === ===
const e = React.createElement;

// Display a "Like" <button>
return e(
    'button', { onClick: () => this.setState({ liked: true }) },
    'Like'
);

// Display a "Like" <button>
return ( <
    button onClick = {
        () => this.setState({ liked: true })
    } >
    Like <
    /button>
); ===
===
=== === === =


// Quickly Try JSX
// The quickest way to try JSX in your project is to add this <script> tag to your page:

<
script src = "https://unpkg.com/babel-standalone@6/babel.min.js" > < /script>


// Run JSX Preprocessor
// Create a folder called src and run this terminal command:

npx babel--watch src--out - dir.--presets react - app / prod