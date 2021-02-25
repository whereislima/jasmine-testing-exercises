describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
  });
});


describe("Update tip amount to all servers", function() {
  beforeEach(function () {

  });
  it('should', function () {
    updateServerTable();
    expect().toEqual();
  });
  afterEach(function() {

  });
});