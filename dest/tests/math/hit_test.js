(function() {
  describe("hit", function() {
    var e;

    e = void 0;
    beforeEach(function() {
      return e = re.e("hit");
    });
    it("should hit", function() {
      e.sizeX = 40;
      e.sizeY = 40;
      return expect(e.hit(20, 3, 40, 40)).to.be.ok();
    });
    it("should not hit", function() {
      return expect(e.hit(41, 0, 40, 40)).to.not.be.ok();
    });
    it("should hit object", function() {
      expect(e.hit({
        posX: 100,
        posY: 0,
        sizeX: 30,
        sizeY: 30
      })).to.not.be.ok();
      return expect(e.hit({
        x: 100,
        y: 0,
        w: 30,
        h: 30
      })).to.not.be.ok();
    });
    it("should hit object with reg", function() {
      e.sizeX = 6;
      e.sizeY = 6;
      e.regX = 3;
      e.regY = 3;
      return expect(e.hit({
        x: -3.1,
        y: -3.1,
        w: 6,
        h: 6,
        regX: 6,
        regY: 6
      })).to.not.be.ok();
    });
    it("should hit object with large reg", function() {
      e.posY = 130;
      e.sizeX = 950;
      e.sizeY = 470;
      e.regX = e.sizeX * .5;
      e.regY = e.sizeY * .5;
      return expect(e.hit({
        x: 200,
        y: 400,
        w: 40,
        h: 40,
        regX: 0,
        regY: 10
      })).to.not.be.ok();
    });
    return it("should hit object with op reg", function() {
      e.sizeX = 6;
      e.sizeY = 6;
      e.regX = 6;
      e.regY = 6;
      e.posX = -3.1;
      e.posY = -3.1;
      return expect(e.hit({
        x: 0,
        y: 0,
        w: 6,
        h: 6,
        regX: 3,
        regY: 3
      })).to.not.be.ok();
    });
  });

}).call(this);
