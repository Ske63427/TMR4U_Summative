function Radio(){
    return (
        <div>
            <h1>Radio Firmware</h1>
            <h2>Downloading Radio Configuration Utility</h2>
            <div className="note">
                <p><strong>Note:</strong> If you have downloaded the FRC Game Tools package from NI, this tool should
                    already have been installed. You should not need to download it again unless it's missing.</p>
            </div>
            <p>The FRC Radio Configuration tool is needed to configure the radio. Please see the <a
                href="#helpful-links">documentation</a> for the up-to-date download link. After the tool is downloaded,
                unzip it, and use the EXE file to run the tool. Ensure that the tool is run as an Administrator (it
                should prompt you to do so if you don't) -- it will not work otherwise.</p>
            <h2>Configuring the Radio</h2>
            <div className="info">
                <p><strong>Info:</strong> This section is not yet completed</p>
            </div>
            <h2>Troubleshooting</h2>
            <h3>Radio is not turning on</h3>
            <p>Ensure that the POE (Power over Ethernet, a.k.a. the orange Ethernet cable) is connected to the bottom
                (the one next to the barrel power connector), and that the barrel power connector is connected to the
                VRM (Voltage Regulator Module). For additional details, please see the electrical documentation. &lt;!--
                TODO: Update with electrical link once created --&gt;</p>
            <h3>What network interface do I use?</h3>
            <p>If prompted for a network interface (if you choose the wrong one earlier, you can use the Tools → Network
                Interface menu to change it), ensure that you have <strong>Ethernet</strong> selected.
                If <strong>Ethernet</strong> is not available in the list, ensure that the radio is on, an Ethernet
                cable is plugged in, and the Ethernet adapter is working.</p>
            <p><strong>Do not select Local Area Connection, or anything other than Ethernet. They may seem to work, but
                they are <em>incorrect</em></strong></p>
            <h3>Load Firmware NPF Driver/Name Error</h3>
            <p>This happens when the configuration tool gets confused about which interface to use. The documentation
                provides this excerpt on it, however I'll go into more detail later:</p>
            <blockquote>
                <p>If you see an error about NPF name, try disabling all adapters other than the one being used to
                    program the radio. If only one adapter is found, the tool should attempt to use that one. See the
                    steps in Disabling Network Adapters for more info.</p>
            </blockquote>
            <p>As the documentation says, we'll need to disable all network adapters other than the one we're using. To
                do this, follow these steps:</p>
            <ol>
                <li>Press Windows + R to open the Run dialog</li>
                <li>Type in <code>control</code>, and press enter</li>
                <li>Select Network and Internet</li>
                <li>Select Network and Sharing Center</li>
                <li>Click <code>Change adapter settings</code> on the left panel</li>
                <li>For each adapter that is not "Ethernet" (or the one you're using, it may be under a different name):
                    <ol>
                        <li>Right-click the adapter</li>
                        <li>Select <code>Disable</code></li>
                    </ol>
                </li>
                <li>Ensure that every single adapter other than the one you're using is disabled. It doesn't matter if
                    it seems like it shouldn't affect anything, it will.
                </li>
                <li>Close and reopen the Radio Configuration Tool</li>
                <li>Try to Load Firmware again</li>
            </ol>
            <h3>Verification Issues</h3>
            <p>If you needed to disable your network adapters previously, you may need to re-enable them for
                verification to work. If during the verification process, an error occurs, try to re-enable your network
                adapters and try again. If this doesn't work, restart the program and try again -- it may take a couple
                of tries.</p>
            <h2>Helpful Links</h2>
            <ul>
                <li><a href="https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-3/radio-programming.html">Official
                    Documentation</a></li>
            </ul>
        </div>
    )
}

export default Radio;