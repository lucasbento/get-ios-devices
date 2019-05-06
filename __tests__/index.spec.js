const childProcess = require('child_process');
const getIOSDevices = require('..');

const deviceList = JSON.stringify({
  devices: {
    'iOS 12.1': [
      {
        availability: '(available)',
        state: 'Booted',
        isAvailable: true,
        name: 'iPhone X',
        udid: 'FA43D7DC-91C7-4707-8208-485D94C1FD0C',
        availabilityError: ''
      }
    ]
  }
});

const parsedDeviceList = [
  {
    availability: 'available',
    state: 'Booted',
    isAvailable: true,
    name: 'iPhone X',
    udid: 'FA43D7DC-91C7-4707-8208-485D94C1FD0C',
    availabilityError: '',
    version: '12.1'
  }
];

const execFileSyncSpy = jest
  .spyOn(childProcess, 'execFileSync')
  .mockImplementation(() => deviceList);

afterEach(() => execFileSyncSpy.mockClear());

it('should get the ios devices', () => {
  const devices = getIOSDevices();

  expect(devices).toEqual(parsedDeviceList);
});
