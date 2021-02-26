describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    // allServers = {}
    // serverId is assigned when server is added 

    // line 19 should have one server at a time
    expect(Object.keys(allServers).length).toEqual(1);
    // line 19
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update server table with a new row including server name, earnings', function() {
    updateServerTable();

    let curRow = document.querySelectorAll('#serverTable tbody tr td');

    expect(curRow[0].innerText).toEqual("Alice");
    expect(curRow[1].innerText).toEqual("$0.00");
    
  });

  afterEach(function() {
    // teardown logic

    // resets Id count
    serverId = 0;
    // clears table
    serverTbody.innerHTML = '';
    allServers = {};
  });
});

