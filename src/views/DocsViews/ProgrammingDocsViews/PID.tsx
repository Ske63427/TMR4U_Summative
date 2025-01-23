import { useEffect } from 'react';
import mermaid from 'mermaid';

function PID(){
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    return (
        <div>
            <h1>PID Control</h1>
            <p>
                While math is inevitable when talking about PID, this documentation is designed to use as little math as
                possible, and instead focus on the practical and basic theoretical aspects of PID control. You can find
                more detailed information on the math behind PID in the <a href="#helpful-links">Helpful
                Links</a> section.
            </p>
            <h2>Use Cases</h2>
            <p>
                PID control, or Proportional-Integral-Derivative control, is a sophisticated & flexible control
                algorithm that is commonly used in scenarios where precise and efficient control of various mechanisms
                is needed. PID is able to account for a wide range of scenarios, including those where external factors
                may affect the system's behaviour. It can run until a certain condition is met, or run infinitely to
                maintain a certain state. Here are some scenarios where PID control may be used in FRC:
            </p>
            <ul>
                <li>Controlling the position of an arm or elevator mechanism</li>
                <li>Driving on a balancing mechanism until a certain angle is achieved</li>
                <li>Following a predefined path using a motion profile</li>
            </ul>
            <p>You'll notice that these scenarios are more advanced than those where <a href="bang-bang.md">Bang-Bang
                control</a> would be used.</p>
            <h2>Theory</h2>
            <div className="mermaid">
                {`flowchart LR
          s([Start]) --> ce[Calculate Error]
          ce --> p[Calculate P]
          ce --> i[Calculate I]
          i --> ic[Cap I]
          ce --> d[Calculate D]
          p --> |+| o[Calculate Output]
          ic --> |+| o
          d --> |+| o
          o --> so[Set Output]
          so --> s`}
            </div>
            <h3>Principle</h3>
            <p>
                For all equations, <code>e(t)</code> is the error at time <code>t</code>, <code>K_p</code> is the
                proportional gain, <code>K_i</code> is the integral gain, <code>K_d</code> is the derivative gain,
                and <code>t</code> is the time. The result of the PID control algorithm is the sum of the three
                components: <code>output = P(t) + I(t) + D(t)</code>
            </p>
            <h4>P (Proportional)</h4>
            <pre>
        <code>
          {`P(t) = K_p \cdot e(t)`}
        </code>
      </pre>
            <p>
                The proportional term is the most straightforward of the three components. It is simply the error
                multiplied by a constant gain. The proportional term is responsible for the immediate response of the
                system to changes in the error. A higher proportional gain will result in a faster response to changes
                in the error, but may also result in overshooting the target value.
            </p>
            <p>
                The proportional term is what provides most of the output in the PID controller. The integral and
                derivative terms are used to fine-tune the output, and allow the system to respond to changes more
                effectively, but the proportional term is what provides the bulk of the output.
            </p>
            <p>
                <strong>SIMPLIFIED:</strong> The proportional term directly scales the error to the output based on a
                constant. The relationship between the error and the P term output is linear. A higher constant will
                result in a more aggressive response to the error, but may also result in overshooting the target value.
            </p>
            <div>
                <h5>Graph</h5>
                <div className="vegalite">
          <pre>{`
          {
              "title": "Sample Proportional Output vs Error Graph",
              "data": {
                  "values": [
                      {"error": 0, "output": 0},
                      {"error": 10, "output": 5},
                      {"error": 20, "output": 10}
                  ]
              },
              "mark": "line",
              "encoding": {
                  "x": {"field": "error", "type": "quantitative", "title": "Error", "axis": {"labels": false}},
                  "y": {"field": "output", "type": "quantitative", "title": "Proportional Output", "axis": {"labels": false}}
              }
          }
          `}</pre>
                </div>
            </div>
            <div>
                <h4>I (Integral)</h4>
                <pre>
        <code>
          {`I(t) = K_i \\cdot \\int_0^t e(\\tau) d\\tau`}
        </code>
      </pre>
                <p>
                    The integral term is used to account for the accumulated error over time. It is the sum of the error
                    over time, multiplied by a constant gain. The integral term is responsible for correcting any
                    steady-state error that may be present in the system. A higher integral gain will result in a faster
                    correction of steady-state error, but may also result in overshooting the target value.
                </p>
                <p><strong>SIMPLIFIED:</strong> The integral term accumulates the error over time, which allows the
                    system to overcome any resistances that may be present.</p>
                <div>
                    <h5>Graph</h5>
                    <pre>{`
        {
            "title": "Sample Position vs. Time Graph",
            "data": {
                "values": [
                    {"legend": "Setpoint", "time": 0, "position": 4},
                    {"legend": "Setpoint", "time": 4, "position": 4},
                    {"legend": "System wo/ Integral", "time": 0, "position": 0},
                    {"legend": "System wo/ Integral", "time": 0.5, "position": 3.5},
                    {"legend": "System wo/ Integral", "time": 4, "position": 3.5},
                    {"legend": "System w/ Integral", "time": 0, "position": 0},
                    {"legend": "System w/ Integral", "time": 0.46, "position": 3.5},
                    {"legend": "System w/ Integral", "time": 0.9, "position": 4},
                    {"legend": "System w/ Integral", "time": 4, "position": 4}
                ]
            },
            "mark": {
                "type": "line",
                "interpolate": "monotone"
            },
            "encoding": {
                "x": {"field": "time", "type": "temporal", "title": "Time", "axis": {"labels": false}},
                "y": {"field": "position", "type": "quantitative", "title": "Position", "axis": {"labels": false}},
                "color": {"field": "legend", "type": "nominal", "title": "Legend"}
            }
        }
        `}</pre>
                    <p>
                        In this sample graph, we are assuming that there is resistance present in the system that is not
                        accounted for in the P term, and in the system with the integral term, it is well-tuned. As can
                        be seen, the system without the integral term is unable to reach the setpoint, and instead has a
                        steady-state error. The system with the integral term, however, is able to accumulate the error
                        over time, which allows it to overcome the resistance and reach the setpoint.
                    </p>
                </div>
                <div>
                    <h5>Example</h5>
                    <p>
                        Consider a PID controller with only a P term that is being used to drive a set distance. If we
                        encounter a slight uphill slope that was not accounted for in the P term, the output may not be
                        high enough to overcome the resistance. Now, if we were to add an I term, it would accumulate
                        the error over time, which slowly increases the output, allowing the system to overcome the
                        resistance.
                    </p>
                </div>
                <h5>Integral Windup</h5>
                <p>
                    Integral windup is a phenomenon that causes the integral term to build up an unexpectedly large
                    value. This can happen when the system does not respond quickly enough to correct a large error.
                    This results in the output of the PID controller being excessively high, which can cause the system
                    to go too fast, overshoot the target value, or similar.
                </p>
                <p>
                    There are multiple methods that can be used to mitigate the problem of integral windup.
                    However, <strong>the most common method we use in FRC is to cap the integral term at a specific
                    value</strong>, which we do not want it to exceed. This will prevent the integral term from building
                    up an excessively large value that we are not able to handle, however will limit its ability to
                    correct for large resistances.
                </p>
                <div>
                    <h5>Graph</h5>
                    <pre>{`
        {
            "title": "Sample Position vs. Time Graph",
            "data": {
                "values": [
                    {"legend": "Setpoint", "time": 0, "position": 4},
                    {"legend": "Setpoint", "time": 4, "position": 4},
                    {"legend": "Setpoint", "time": 4, "position": 2},
                    {"legend": "Setpoint", "time": 8, "position": 2},
                    {"legend": "System w/ Integral (Capped)", "time": 0, "position": 0},
                    {"legend": "System w/ Integral (Capped)", "time": 0.5, "position": 4},
                    {"legend": "System w/ Integral (Capped)", "time": 4, "position": 4},
                    {"legend": "System w/ Integral (Capped)", "time": 4.5, "position": 2},
                    {"legend": "System w/ Integral (Capped)", "time": 8, "position": 2},
                    {"legend": "System w/ Integral (Uncapped)", "time": 0, "position": 0},
                    {"legend": "System w/ Integral (Uncapped)", "time": 0.5, "position": 4.2},
                    {"legend": "System w/ Integral (Uncapped)", "time": 0.75, "position": 3.95},
                    {"legend": "System w/ Integral (Uncapped)", "time": 1, "position": 4},
                    {"legend": "System w/ Integral (Uncapped)", "time": 4, "position": 4},
                    {"legend": "System w/ Integral (Uncapped)", "time": 4.5, "position": 1.80},
                    {"legend": "System w/ Integral (Uncapped)", "time": 4.75, "position": 2.05},
                    {"legend": "System w/ Integral (Uncapped)", "time": 5, "position": 2},
                    {"legend": "System w/ Integral (Uncapped)", "time": 8, "position": 2}
                ]
            },
            "mark": {
                "type": "line",
                "interpolate": "monotone"
            },
            "encoding": {
                "x": {"field": "time", "type": "temporal", "title": "Time", "axis": {"labels": false}},
                "y": {"field": "position", "type": "quantitative", "title": "Position", "axis": {"labels": false}},
                "color": {"field": "legend", "type": "nominal", "title": "Legend"}
            }
        }
        `}</pre>
                    <p>
                        In this sample graph, we are assuming that there is little resistance present in the system that
                        is not accounted for in the P term, and the integral gain is on the high side. As can be seen,
                        the system with the uncapped integral term overshoots the setpoint. This is a result of integral
                        windup, and can be [mostly] mitigated by capping the integral term (or using other measures), as
                        shown in the capped variant, where there is little to no overshooting.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PID;
