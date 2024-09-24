import React from "react"

interface ContainerProps {
    styles: React.CSSProperties
}
export const Container = (props: ContainerProps) => {
    return (<div style={props.styles}>
        Text Here
    </div>)
}