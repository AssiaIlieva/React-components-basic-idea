/* eslint-disable react/prop-types */
export default function MovieListItem (props){
    return (
        // eslint-disable-next-line react/prop-types
        <li style={{color: 'Highlight'}}>
            <a href={props.url || '#'} target="_blank">
            {props.children}
            </a>
            </li>
    );
}