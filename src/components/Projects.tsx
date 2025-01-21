import Robot2024 from "../assets/img/2024Robot2(cropped).jpeg"
import Robot2023 from "../assets/img/2023Robot(cropped).jpeg"
import Robot2020 from "../assets/img/2020Robot(cropped).jpg"
// import Robot2019 from "https://cdn.bootstrapstudio.io/placeholders/1400x800.png"

function Projects(){
    return(
        <div>
            <h1 id="projectTitle" style={{marginTop: "12px", paddingLeft: "0px", marginLeft: "0px"}}>Our Robots</h1>
            <div className="container py-4 py-xl-5">
                <div className="row gy-4 row-cols-1 row-cols-md-2">
                    <div className="col">
                        <div className="d-flex flex-column flex-lg-row">
                            <div className="w-100">
                                <img className="rounded img-fluid d-block w-100 fit-cover"
                                     style={{height: "200px", paddingRight: "0px", marginRight: "2px"}}
                                     src={Robot2024}
                                     width="213"
                                     height="200"
                                     alt={"Crescendo Robot"}
                                />
                            </div>
                            <div className="py-4 py-lg-0 px-lg-4">
                                <h4>2024 - Crescendo</h4>
                                <p>hakuna your tatas ill get a better cropped image later this isn't the final project.
                                    Lorem Ipsum Dolor Sit Amet idk why changing the text fucks up the formatting</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column flex-lg-row">
                            <div className="w-100">
                                <img
                                    className="rounded img-fluid d-block w-100 fit-cover"
                                    style={{height: "200px"}}
                                    src={Robot2023}
                                    alt={"Charged Up Robot"}
                                />
                            </div>
                            <div className="py-4 py-lg-0 px-lg-4">
                                <h4>2023 - Charged Up</h4>
                                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget
                                    metus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column flex-lg-row">
                            <div className="w-100">
                                <img className="rounded img-fluid d-block w-100 fit-cover"
                                     style={{height: "200px"}}
                                     src={Robot2020}
                                     alt={"Infinite Recharge Robot"}
                                />
                            </div>
                            <div className="py-4 py-lg-0 px-lg-4">
                                <h4>2020 - Infinite Recharge</h4>
                                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget
                                    metus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column flex-lg-row">
                            <div className="w-100">
                                <img
                                    className="rounded img-fluid d-block w-100 fit-cover"
                                    style={{height: "200px"}}
                                    src={"https://cdn.bootstrapstudio.io/placeholders/1400x800.png"}
                                    alt={"Destination: Deep Space Robot"}
                                />
                            </div>
                            <div className="py-4 py-lg-0 px-lg-4">
                                <h4>2019 - Destination: Deep Space</h4>
                                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget
                                    metus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;