// const ButtonComponent = (props) => {
//     return (
//         <button>{props.label}</button>
//     )
// }

const ButtonComponent = ({label, customClass}) => {
    return (
        <button className={customClass} >{label}</button>
    )
}

export default ButtonComponent