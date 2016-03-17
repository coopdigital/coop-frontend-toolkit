describe('Coop Toolkit wrapper', function() {
  it('works', function() {
    expect(true).to.be.true;
  });
  it('should initialise a Coop.Modules object', function() {
    expect(Coop.Modules).to.be.an('object');
  });

  it('should call the init method of any declared module', function() {
    Coop.Modules.fakeModule = {
      init: sinon.spy()
    };

    Coop.init();

    expect(Coop.Modules.fakeModule.init).to.have.been.called;
  });

  it('should trigger the render event', function() {
    var renderSpy = sinon.spy();

    $(document).on('render', renderSpy());

    Coop.init();

    expect(renderSpy).to.have.been.called;
  });
});
