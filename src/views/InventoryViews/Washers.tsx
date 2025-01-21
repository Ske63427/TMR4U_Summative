function Washers(){
    return(
        <div>
            <div className="table-responsive" style={{marginLeft: "20px", marginRight: "20px"}}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Inner Diameter</th>
                        <th>Outer Diameter</th>
                        <th>Thickness</th>
                        <th>Quantity</th>
                        <th>Location</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                        <td>Column 1</td>
                        <td>Column 2</td>
                        <td>Column 1</td>
                        <td>Column 2</td>
                    </tr>
                    <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                        <td>Column 1</td>
                        <td>Column 2</td>
                        <td>Column 1</td>
                        <td>Column 2</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Washers;