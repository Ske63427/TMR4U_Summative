import { Link, Outlet } from "react-router-dom";

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
                    <li style={{...styles.listItem, ...styles.indent2}}>
                        <Link
                            style={{textDecoration: "none", color: "white"}}
                            to={'/docs/programming/gyro-navx'}
                        >Gyro(NavX)</Link>
                    </li>
                    <li style={{...styles.listItem, ...styles.indent2}}>
                        <Link
                            style={{textDecoration: "none", color: "white"}}
                            to={'/docs/programming/radio'}
                        >Radio</Link>
                    </li>
                    <li style={{...styles.listItem, ...styles.indent1}}>Control Algorithms</li>
                    <li style={{...styles.listItem, ...styles.indent2}}>
                        <Link
                            style={{textDecoration: "none", color: "white"}}
                            to={'/docs/programming/bangbang'}
                        >Bang-Bang</Link>
                    </li>
                    <li style={{...styles.listItem, ...styles.indent2}}>
                        <Link
                            style={{textDecoration: "none", color: "white"}}
                            to={'/docs/programming/pid'}
                        >P.I.D</Link>
                    </li>
                    <li style={{...styles.listItem, ...styles.indent1}}>Generic Wrappers</li>
                    <li style={{...styles.listItem, ...styles.indent2}}>
                        <Link
                            style={{textDecoration: "none", color: "white"}}
                            to={'/docs/programming/joystick'}
                        >Joystick</Link>
                    </li>
                    <li style={{...styles.listItem, ...styles.indent2}}>
                        <Link
                            style={{textDecoration: "none", color: "white"}}
                            to={'/docs/programming/motor-controller'}
                        >Motor Controller</Link>
                    </li>
                </ul>
            </div>
            <hr style={{width: '10px', height: '500px', margin: '0 auto', marginLeft: '10px', color: "white"}}/>
            <div style={{marginLeft: "50px"}}>
                <Outlet/>
            </div>
        </div>
    )
}

export default Programming