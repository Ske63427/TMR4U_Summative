import { Link } from "react-router-dom";

function Programming(){
    const styles = {
        sidebar: {
            width: '250px',
            height: '100vh',
            position: 'fixed' as 'fixed',
            backgroundColor: '#f1f3f4',
            borderRight: '1px solid #e0e0e0',
            overflowY: 'auto' as 'auto',
            padding: '10px'
        },
        list: {
            listStyle: 'none',
            padding: '0'
        },
        listItem: {
            padding: '5px 0',
        },
        indent1: {
            paddingLeft: '10px'
        },
        indent2: {
            paddingLeft: '20px',
            cursor: 'pointer'
        }
    };

    return(
        <div style={{display: "flex", justifyContent: "space-between", margin: "20px 150px 10px 75px"}}>
            <div>
                <ul style={styles.list}>
                    <li style={{...styles.listItem, ...styles.indent1}}>Firmware</li>
                    <li style={{...styles.listItem, ...styles.indent2}}><Link style={{textDecoration: "none", color: "white"}} to={'/docs/programming/gyronavx'}>Gyro(NavX)</Link></li>
                    <li style={{...styles.listItem, ...styles.indent2}}><Link to={'/docs/programming/radio'}>Radio</Link></li>
                    <li style={{...styles.listItem, ...styles.indent1}}>Control Algorithms</li>
                    <li style={{...styles.listItem, ...styles.indent2}}><Link>Bang-Bang</Link></li>
                    <li style={{...styles.listItem, ...styles.indent2}}><Link>P.I.D</Link></li>
                    <li style={{...styles.listItem, ...styles.indent1}}>Generic Wrappers</li>
                    <li style={{...styles.listItem, ...styles.indent2}}><Link>Joystick</Link></li>
                    <li style={{...styles.listItem, ...styles.indent2}}><Link>Motor Controller</Link></li>
                </ul>
            </div>
            <hr style={{width: '10px', height: '500px', margin: '0 auto', marginLeft: '10px', color: "white"}}/>
            <div>
                <p style={{marginLeft: "25px"}}>
                    This team is responsible for designing and maintaining the software that runs on the robot. This can include
                    the robot's control system, autonomous routines, computer vision, and more. The programming team is also
                    generally responsible for updating and flashing any related firmware, such as on the RoboRIO, radio, and
                    motor controllers. The programming team works closely with both the electrical and design teams to ensure
                    the seamless integration of software with the robot's electrical components and mechanical structure. General
                    programming knowledge, and skills in Java, systems design, control algorithms, version control, and
                    troubleshooting are of great benefit.<br/>
                    Additional responsibilities may also include GitHub & Discord administration, documentation,
                    scouting software, data analysis, and more.
                </p>
            </div>
        </div>
    )
}

export default Programming