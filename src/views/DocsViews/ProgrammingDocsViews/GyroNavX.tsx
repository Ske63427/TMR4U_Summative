function GyroNavX() {
    return (
        <div>
            <h1>Gyro (NavX2) Calibration & Firmware</h1>
            <p>This documentation is written for the KauaiLabs NavX2-MXP Gyro. If we end up using a different Gyro in
                the future, create a separate guide for it.</p>
            <h2>Mounting</h2>
            <p>Preferably, the Gyroscope should be mounted to the MXP port on the RoboRIO (this is the long port in the
                center of the RoboRIO, there is a connector on the back of the Gyroscope that fits this). However, in
                situations where the Gyroscope needs to be mounted elsewhere (which should be rare), mounting via SPI is
                then preferred (port on the top right of the RoboRIO, line of pins labeled <code>SPI</code> on the
                Gyroscope). If mounting via SPI is not possible, the last resort should be USB mounting (USB port on the
                RoboRIO, to the Mini USB port on the Gyroscope).</p>
            <h2>Calibration</h2>
            <p>The board almost always <strong>needs to be calibrated manually</strong>, otherwise the readings will be
                extremely inaccurate. This should be done anytime the Gyro is remounted, just in case. The calibration
                is done to ensure that the Gyroscope properly determines what mounting orientation it is in, so that the
                readings are proper and accurate. Theoretically if the mounting position is the same when moving the
                Gyroscope, a calibration isn't needed, but it's safer to do one anyhow.</p>
            <p><a href="https://pdocs.kauailabs.com/navx-mxp/installation/omnimount/">Full Calibration Guide</a></p>
            <p><strong>Ensure that the robot is not moved during the calibration sequence</strong></p>
            <ol>
                <li>Install the Gyroscope to the desired location. Ensure that one axis perpendicular to the ground
                    (cannot be diagonal or slanted).
                </li>
                <li>Power on the robot and wait until the Gyroscope is on</li>
                <li>Press and hold the <code>CAL</code> button on the Gyroscope for 5 seconds.</li>
                <li>Release the <code>CAL</code> button. The orange light should flash (or in our case turn on, either
                    is fine) for 1 second before turning off.
                </li>
                <li>Once the light has turned off, press the <code>RESET</code> button.</li>
                <li>The board is automatically calibrating, do not touch the robot or the board during this process. The
                    orange LED should be slowly flashing during this process. It may take anywhere between 2-20 seconds.
                    <ul>
                        <li>If the orange LED begins flashing quickly at any point, there is an error in calibration.
                            Either the Gyroscope is not mounted with one axis perpendicular to the ground, or the
                            Gyroscope was moved during calibration. Power cycle (may or may not be optional), then
                            reperform these steps to try again.
                        </li>
                    </ul>
                </li>
                <li>Calibration should be complete, values should be proper and calibration is no longer necessary until
                    moved.
                </li>
            </ol>
            <h2>Code</h2>
            <h3>Libraries</h3>
            <p>The Gyroscope needs a library to function, full installation instructions are available <a
                href="https://pdocs.kauailabs.com/navx-mxp/software/roborio-libraries/java">here</a>, this is a short
                overview of the Online Installation Method.</p>
            <ol>
                <li>Open the project in VSCode</li>
                <li>Open Command Palette (++ctrl+p++)</li>
                <li>Type in <code>&gt;WPILib: Manage Vendor Libraries</code>, and open that option</li>
                <li>Select the <code>Install new library (online)</code> option</li>
                <li>Enter the following link: <code>https://dev.studica.com/releases/20XX/NavX.json</code>
                    <ul>
                        <li>Ensure that you replace the year placeholder, <code>20XX</code>, with the current year</li>
                        <li>While the links from Studica usually follow this format, it may change. If the link is not
                            working, search the official pages for the NavX gyroscope to locate the correct link
                        </li>
                        <li>If it is early in the year, the updated version may not have been released yet. You will
                            need to remember to update this library when you migrate to the new season's WPILib version
                        </li>
                    </ul>
                </li>
                <li>Once the installation finishes, your library should be installed</li>
            </ol>
            <h3>Setup</h3>
            <p>Depending on the method of connection (MXP, SPI, USB), the initialization code may need to be adjusted.
                This section is presuming that you are using MXP, you will need to do additional research for other
                methods of connection.</p>
            <p>The following imports are needed (one for the Gyro library, other for the port):</p>
            <pre><code>import com.kauailabs.navx.frc.AHRS;
import edu.wpi.first.wpilibj.SPI;</code></pre>
            <p>Initialize the AHRS object (object used to obtain readings) by using the following line of code:</p>
            <pre><code>AHRS ahrs = new AHRS(SPI.Port.kMXP);</code></pre>
            <p>This object can then be used to obtain readings, using the methods shown below.</p>
            <h3>Method Reference</h3>
            <p>All of these need to be prefixed with the AHRS object. If the variable it is stored in is
                named <code>ahrs</code>, then it would be <code>ahrs.isConnected()</code> to
                call <code>isConnected()</code>, for example.</p>
            <p>This list does not include every possible reference. <a href="assets/ahrs_methods.png" target="_blank">This
                list</a> includes a few more, but not all. If you need all of them, use ++f12++ (View Definition) while
                your cursor is on the AHRS object initialization, which will open the Source file for it. You can look
                through all the methods there.</p>
            <ul>
                <li><strong>isConnected()</strong>: Boolean value of whether the Gyroscope is connected (and
                    subsequently whether readings can be obtained)
                </li>
                <li><strong>zeroYaw()</strong>: Set the current angle the robot is facing as the zero-point for YAW.
                    (when you face this angle, <code>getYaw()</code> will read 0)
                </li>
                <li><strong>getYaw()</strong> or <strong>getAngle()</strong>: Reading for YAW (rotation around the Z
                    axis, which is perpendicular to the earth) in degrees, from -180 to 180. If past 180, it will circle
                    back to -180, and vice-versa. Turning left should normally be decreasing.
                </li>
                <li><strong>getPitch()</strong>: Reading for pitch (rotation around the X axis [up/down]) in degrees,
                    from -180 to 180. If past 180, it will circle back to -180, and vice-versa. Down decreases, up
                    increases.
                </li>
                <li><strong>getCompassHeading()</strong>: Supposedly the reading for compass heading, from 0 to 360,
                    read using a mangnetometer. This reading <strong>did not work</strong> in our testing, it may be
                    interference, lack of calibration, wrong usage, or it just doesn't work.
                </li>
            </ul>
            <h2>Helpful Links</h2>
            <ul>
                <li><a
                    href="https://pdocs.kauailabs.com/navx-mxp/wp-content/uploads/2020/09/navx2-mxp_robotics_navigation_sensor_user_guide-8.pdf">Official
                    Documentation</a></li>
                <li><a
                    href="https://github.com/AgincourtSkunkworks/FRC2023/blob/6f7d880e63cb28bc8865d82d5a61863110628d22/src/main/java/frc/robot/subsystems/GyroSubsystem.java">Sample
                    Gyro Subsystem</a></li>
            </ul>
        </div>
    )
}

export default GyroNavX