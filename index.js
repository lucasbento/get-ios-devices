const childProcess = require('child_process');

module.exports = () => {
  const devices = [];
  const { devices: deviceList } = JSON.parse(
    childProcess.execFileSync(
      'xcrun',
      ['simctl', 'list', '--json', 'devices'],
      { encoding: 'utf8' }
    )
  );

  const getIOSDevices = () =>
    Object.keys(deviceList)
      .filter(version => version.includes('iOS'))
      .forEach(parseDevices);

  const parseDevices = platform =>
    deviceList[platform].forEach(device =>
      parseIOSDevice({ platform, device })
    );

  const parseIOSDevice = ({ platform, device }) => {
    const version = platform.split(' ')[1];

    devices.push({
      ...device,
      availability: device.availability.replace(/[{()}]/g, ''),
      version
    });
  };

  getIOSDevices();

  return devices;
};
