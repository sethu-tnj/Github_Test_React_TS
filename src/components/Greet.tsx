type greetProps = {
    name: string,
    msgCount?: number,
    isLoggedin: boolean

}

export const Greet = (props: greetProps) =>{
    const {msgCount = 0} = props
    return(
        <div>
            {
               props.isLoggedin ? `Welcome to react with typescript.. ${props.name}!!!..You have ${msgCount} unread messages..`
               : `welcome guest`
            }
            <h2>Using git hub with commands..</h2>
        </div>
    )
}