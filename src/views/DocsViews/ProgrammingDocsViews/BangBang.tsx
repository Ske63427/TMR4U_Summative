import mermaid from 'mermaid';
import { useEffect } from 'react';

interface MermaidDiagramProps {
    chart: string;
}

function BangBang({ chart }: MermaidDiagramProps) {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, [chart]);

    return (
        <div>
            <h1>Bang-Bang Control</h1>
            <h2>Use Cases</h2>
            <p>
                Bang-Bang control is a simple but effective control algorithm when used in the right context. It is most
                suited for applications where the system's behaviour can be easily achieved by switching the system on
                or off based on certain conditions. Here are some scenarios where Bang-Bang control may be used in
                FRC:
            </p>
            <ul>
                <li>Spinning the intake motors while a game piece is detected</li>
                <li>Turning on the shooter motors when a game piece is detected in the shooter mechanism</li>
            </ul>
            <p>
                You'll notice that these use cases are all binary in nature, where the system's activation is based on
                whether a simple condition is met or not. Bang-Bang control will not be able to account for complex
                scenarios or where external factors may affect the system's behaviour. In those cases, more
                sophisticated control such as <a href="pid.md">PID</a> should be considered instead.
            </p>
            <h2>Theory</h2>
            <div className="mermaid">
                {/*{chart}*/}
                <p>flowchart using mermaid does not work</p>
            </div>
            <h3>Principle</h3>
            <p>
            Bang-Bang control is straightforward. You will continuously check if a condition is met or not. If the
                condition is met, you will switch the system to a certain state. If the condition is not met, you will
                switch the system to another state. Normally, this process will continue indefinitely, however, specific
                variants of Bang-Bang control may have additional conditions to stop the system, whether it be a
                sensor-based condition, a timeout, an interrupt, or something else.
            </p>
            <h3>Signals</h3>
            <h4>Input</h4>
            <p>
                The actual input to a Bang-Bang control algorithm should be a boolean value, however, it is common to use
                a sensor reading or a calculated value that can be converted to a boolean value based on a threshold.
                Examples of inputs can include a limit switch (triggered?), gyro reading (within threshold), a motor
                encoder reading (within threshold), etc.
            </p>
            <h4>Output</h4>
            <p>
                There are two possible output states for a Bang-Bang control algorithm. The actual states themselves will
                vary based on what you are controlling with the algorithm. Examples of outputs can include motors
                (predefined speeds, perhaps 50% and 0%), solenoids (extended and retracted), etc.
            </p>
            <h3>Tolerance</h3>
            <p>
                It is rare for exact values to ever be achieved in real-world systems, and as such, it is important to
                account for this in your algorithms. For Bang-Bang control, if you were to switch the system on and off
                based on an exact value you're looking to achieve, it would result in the system constantly switching on
                and off as it overshoots and undershoots the target value. To prevent this, a tolerance value is usually
                used to give the system more time to settle before trying to correct it again. Depending on how fast the
                error changes, and how fine the corrections need to be, the tolerance value may need to be adjusted, a
                more sophisticated condition used, or a different control algorithm altogether.
            </p>
            <h2>Sample Implementation</h2>
            <h3>Scenario</h3>
            <p>
                We have an intake mechanism with a sensor that detects if a game piece is present. We want to intake the
                game piece when it is detected, and stop intaking when it is no longer detected. We will be assuming a
                simplified intake sequence that only requires that a motor be turned on or off, although in a real-world
                scenario, you may need to consider movement of the intake mechanism, solenoids to control the game
                piece's position in the mechanism, etc.
            </p>
            <h3>Flowchart</h3>
            <div className="mermaid">
        {/*        {`graph LR*/}
        {/*s([Start]) --> c{Game Piece Detected?}*/}
        {/*  c ---> |True| ta[Set Intake Motors to INTAKE_SPEED]*/}
        {/*ta ---> c*/}
        {/*c ---> |False| tb["Set Intake Motors to 0 (Stop)"]*/}
        {/*tb ---> c`}*/}
                <p>flowchart using mermaid does not work</p>
            </div>
            <h3>Code</h3>
            <p>
                The sample code assumes that the periodic function is placed in a command, as this will allow it to run
                periodically without interfering with the event loop (rest of the code). This also allows for the
                command to be interrupted when needed, without a stop condition in the code. It is assumed that the
                sensor is a digital input with an open (<code>true</code>) and closed (<code>false</code>) state, and
                the intake motor's <code>.set()</code> method is used to set the motor
                speed. <code>INTAKE_SPEED</code> is assumed to be a constant predefined speed for the motor to intake
                the game piece.
            </p>
            <pre>
        <code>
          {`public void periodic() {
            if (sensor.get()) intakeMotor.set(INTAKE_SPEED);
            else intakeMotor.set(0);
          }`}
        </code>
      </pre>
            <h2>Helpful Links</h2>
            <ul>
                <li><a href="https://en.wikipedia.org/wiki/Bang%E2%80%93bang_control">Wikipedia</a></li>
            </ul>
        </div>
    );
}

export default BangBang;