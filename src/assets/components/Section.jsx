const Section = props => {

    let style = "bg-white h-auto " + props.className;
    return (
        <div className={style}>
            {props.children}
        </div>
    )
}
export default Section;