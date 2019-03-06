(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Flow_atlas_", frames: [[0,0,650,505],[652,0,95,168]]}
];


// symbols:



(lib.angle6d = function() {
	this.initialize(ss["Flow_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.arrow5 = function() {
	this.initialize(ss["Flow_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.arrowy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.arrow5();
	this.instance.parent = this;
	this.instance.setTransform(84,-47.5,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-47.5,168,95);


(lib.anglg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.angle6d();
	this.instance.parent = this;
	this.instance.setTransform(-325,-252.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325,-252.5,650,505);


// stage content:
(lib.PNORM_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// copyright
	this.ID_COPYRIGHT = new cjs.Text("©1983-2005 Stephen F. Gordon", "12px 'Times New Roman'", "#00A8D2");
	this.ID_COPYRIGHT.name = "ID_COPYRIGHT";
	this.ID_COPYRIGHT.textAlign = "right";
	this.ID_COPYRIGHT.lineHeight = 15;
	this.ID_COPYRIGHT.lineWidth = 181;
	this.ID_COPYRIGHT.parent = this;
	this.ID_COPYRIGHT.setTransform(1184.7,875,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.ID_COPYRIGHT).wait(225));

	// Layer_23
	this.ID_NORMAL_EYE = new cjs.Text("Normal Eye", "bold 30px 'Arial'", "#33CCFF");
	this.ID_NORMAL_EYE.name = "ID_NORMAL_EYE";
	this.ID_NORMAL_EYE.lineHeight = 36;
	this.ID_NORMAL_EYE.lineWidth = 283;
	this.ID_NORMAL_EYE.parent = this;
	this.ID_NORMAL_EYE.setTransform(55.5,21,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.ID_NORMAL_EYE).wait(225));

	// Layer_2
	this.ID_TRABECULUM = new cjs.Text("Trabeculum", "italic bold 28px 'Times New Roman'", "#33CCCC");
	this.ID_TRABECULUM.name = "ID_TRABECULUM";
	this.ID_TRABECULUM.lineHeight = 33;
	this.ID_TRABECULUM.lineWidth = 230;
	this.ID_TRABECULUM.parent = this;
	this.ID_TRABECULUM.setTransform(71.75,88.85,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.ID_TRABECULUM).wait(225));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ehf2AMMIAA4XMC/tAAAIAAYXg");
	this.shape.setTransform(604.475,838.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(225));

	// Layer_10
	this.instance = new lib.arrowy();
	this.instance.parent = this;
	this.instance.setTransform(388.5,736.5,0.774,0.774,-11.93);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:650.9,y:690,alpha:1},30).to({x:991.4,y:631.5},64).to({scaleX:0.7735,scaleY:0.7735,rotation:-90.624,x:1048.4,y:559.5},11).to({scaleX:0.7724,scaleY:0.7724,rotation:-117.702,x:1025.9,y:462},11).to({scaleX:0.7714,scaleY:0.7714,rotation:-179.1499,x:938.9,y:408},11).to({x:476.9},64).to({scaleX:0.7708,scaleY:0.7708,rotation:-191.2161,x:176.9,y:454.5,alpha:0},26).to({_off:true},4).wait(4));

	// Layer_11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("A6yPiQgMgLgBgRQgBgQALgNQALgMAQgBICWgJQARgBAMALQANALABARQABAQgMAMQgKANgRABIiWAJIgCAAQgPAAgMgKgAyNPBQgMgLgBgRQgBgQALgNQALgMAQgBICWgJQARgBAMALQANALABARQABAQgMAMQgKANgRABIiWAJIgCAAQgPAAgMgKgApoOfQgMgLgBgRQgBgQALgNQALgMAQgBICWgJQARgBAMALQANALABARQABAQgMAMQgKANgRABIiWAJIgCAAQgPAAgMgKgAhDN+QgMgLgBgRQgBgQALgNQALgMAQgBICVgJQARgBAMALQANALABARQABAQgMAMQgKANgRABIiVAJIgCAAQgPAAgMgKgAHhNcQgMgLgBgRQgBgQALgNQALgMAQgBICWgJQARgBAMALQANALABARQABAQgMAMQgKANgRABIiWAJIgCAAQgPAAgMgKgAQGM6QgMgLgBgRQgBgQALgNQALgMAQgBICWgJQARgBAMALQANALABARQABAQgMAMQgKANgRABIiWAJIgCAAQgPAAgMgKgAYrMZQgMgLgBgRQgBgQALgNQALgMAQgBICWgJQARgBAMALQANALABARQABAQgMAMQgKANgRABIiWAJIgCAAQgPAAgMgKgEAhQAL3QgMgLgBgRQgBgQALgNQALgMAQgBICWgJQARgBAMALQANALABARQABAQgMAMQgKANgRABIiWAJIgCAAQgPAAgMgKgEAp1ALVQgMgLgBgRQgBgQALgNQALgMAQgBICWgJQARgBAMALQANALABARQABAQgMAMQgKANgRABIiWAJIgCAAQgPAAgMgKgEAybAK0QgNgLgBgQQgBgQAKgNQALgNARgBIApgDQAQgBANALQAMALABAQQACAQgLANQgLANgQABIgpADIgDAAQgPAAgLgKgEA0/AJLQgRgBgLgMQgLgMAAgQIAFiWQABgRAMgLQAMgMAQABQARABALAMQAMAMgBAQIgFCWQAAARgNALQgLALgPAAIgCAAgEA1SAAlQgRgBgLgMQgLgMAAgPIAFiWQABgRAMgLQAMgMAQABQARABALAMQAMAMgBAQIgFCWQAAAQgNALQgLALgPAAIgCAAgEA1lgIAQgQgBgMgMQgLgMABgQIAFiWQAAgRAMgLQANgMAQABQARABALAMQALAMAAAQIgFCWQgBARgMALQgMALgPAAIgCAAgEg1rgOPQgQAAgMgMQgMgLAAgRQAAgRAMgLQAMgMAQAAICWAAQARAAALAMQAMALAAARQAAARgMALQgLAMgRAAgEgtFgOQQgQAAgMgMQgMgLAAgRQAAgRAMgLQAMgMAQAAICWAAQARAAALAMQAMALAAARQAAARgMALQgLAMgRAAgEgkfgORQgQAAgMgMQgMgLAAgRQAAgRAMgLQAMgMAQAAICWAAQARAAALAMQAMALAAARQAAARgMALQgLAMgRAAgA75uSQgQAAgMgMQgMgLAAgRQAAgRAMgLQAMgMAQAAICWAAQARAAALAMQAMALAAARQAAARgMALQgLAMgRAAgAzTuTQgQAAgMgMQgMgLAAgRQAAgRAMgLQAMgMAQAAICWAAQARAAALAMQAMALAAARQAAARgMALQgLAMgRAAgAqtuUQgQAAgMgMQgMgLAAgRQAAgRAMgLQAMgMAQAAICWAAQARAAALAMQAMALAAARQAAARgMALQgLAMgRAAgAiHuVQgQAAgMgMQgMgLAAgRQAAgRAMgLQAMgMAQAAICVAAQARAAALAMQAMALAAARQAAARgMALQgLAMgRAAgAGeuWQgQAAgMgMQgMgLAAgRQAAgRAMgLQAMgMAQAAICWAAQARAAALAMQAMALAAARQAAARgMALQgLAMgRAAgAPEuXQgQAAgMgMQgMgLAAgRQAAgRAMgLQAMgMAQAAICWAAQARAAALAMQAMALAAARQAAARgMALQgLAMgRAAgAXquYQgQAAgMgMQgMgLAAgRQAAgRAMgLQAMgMAQAAICWAAQARAAALAMQAMALAAARQAAARgMALQgLAMgRAAgEAgQgOZQgQAAgMgMQgMgLAAgRQAAgRAMgLQAMgMAQAAICWAAQARAAALAMQAMALAAARQAAARgMALQgLAMgRAAgEAo2gOaQgQAAgMgMQgMgLAAgRQAAgRAMgLQAMgMAQAAICWAAQARAAALAMQAMALAAARQAAARgMALQgLAMgRAAgEAxcgObQgQAAgMgMQgMgLAAgRQAAgRAMgLQAMgMAQAAICWAAQARAAALAMQAMALAAARQAAARgMALQgLAMgRAAg");
	this.shape_1.setTransform(709.5263,549.8031);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF33").s().p("A4VPbIgCgCIhlAGQgRABgMgLQgMgLgCgRQAAgQALgNQALgMAQgBICWgJQARgBAMALIACACIA7gDQARgBAMALQANALAAARQABAQgLANQgLAMgQABIhsAGIgDAAQgPAAgLgKgAx0O0QgMgLgCgQQAAgRALgMQALgMAQgCICWgJQARAAAMALQAMALABAQQABARgLAMQgLAMgQABIiWAJIgCABQgPAAgMgLgApPOTQgMgLgCgQQAAgRALgMQALgMAQgCICWgJQARAAAMALQAMALABAQQABARgLAMQgLAMgQABIiWAJIgCABQgPAAgMgLgAgqNzQgMgLgCgQQAAgRALgMQALgMAQgCICVgJQARAAAMALQAMALABAQQABARgLAMQgLAMgQABIiVAJIgCABQgPAAgMgLgAH6NTQgMgLgCgQQAAgRALgMQALgMAQgCICWgJQARAAAMALQAMALABAQQABARgLAMQgLAMgQABIiWAJIgCABQgPAAgMgLgAQfMyQgMgLgCgQQAAgRALgMQALgMAQgCICWgJQARAAAMALQAMALABAQQABARgLAMQgLAMgQABIiWAJIgCABQgPAAgMgLgAZEMSQgMgLgCgQQAAgRALgMQALgMAQgCICWgJQARAAAMALQAMALABAQQABARgLAMQgLAMgQABIiWAJIgCABQgPAAgMgLgEAhpALyQgMgLgCgQQAAgRALgMQALgMAQgCICWgJQARAAAMALQAMALABAQQABARgLAMQgLAMgQABIiWAJIgCABQgPAAgMgLgEAqOALRQgMgLgBgQQgBgRALgMQALgMAQgCICWgJQARAAAMALQANALABAQQABARgLAMQgLAMgRABIiWAJIgCABQgPAAgMgLgEA0bAKCQgOgJgEgQQgDgQAIgOIBPiAQAJgOAQgEQAQgDAOAIQAPAJADAQQAEAQgJAOIhPCAQgIAOgQAEIgKABQgLAAgKgGgEA2/ACGQgQAAgMgMQgLgMAAgRIAFiVQABgQAMgMQAMgLARAAQAQABAMAMQALAMgBARIgFCVQAAAQgMAMQgMALgPAAIgCgBgEA3SgGfQgQAAgMgMQgLgMAAgRIAFiWQABgQAMgMQAMgLARAAQAQABAMAMQALAMgBARIgFCWQAAAQgMAMQgMAKgPAAIgCAAgEg3YgOIQgQAAgMgMQgLgLgBgRQABgRALgLQAMgMAQAAICWAAQARAAAMAMQALALAAARQAAARgLALQgMAMgRAAgEguygOJQgQAAgMgMQgLgLgBgRQABgRALgLQAMgMAQAAICWAAQARAAAMAMQALALAAARQAAARgLALQgMAMgRAAgEgmMgOKQgQAAgMgMQgLgLgBgRQABgRALgLQAMgMAQAAICWAAQARAAAMAMQALALAAARQAAARgLALQgMAMgRAAgA9muLQgQAAgMgMQgLgLgBgRQABgRALgLQAMgMAQAAICWAAQARAAAMAMQALALAAARQAAARgLALQgMAMgRAAgA1AuMQgQAAgMgMQgMgLAAgRQAAgRAMgLQAMgMAQAAICWAAQARAAAMAMQALALAAARQAAARgLALQgMAMgRAAgAsauNQgQAAgMgMQgLgLgBgRQABgRALgLQAMgMAQAAICWAAQARAAAMAMQALALAAARQAAARgLALQgMAMgRAAgAj0uOQgQAAgMgMQgLgLgBgRQABgRALgLQAMgMAQAAICWAAQARAAAMAMQALALAAARQAAARgLALQgMAMgRAAgAExuPQgQAAgMgMQgLgLgBgRQABgRALgLQAMgMAQAAICWAAQARAAAMAMQALALAAARQAAARgLALQgMAMgRAAgANXuQQgQAAgMgMQgLgLgBgRQABgRALgLQAMgMAQAAICWAAQARAAAMAMQALALAAARQAAARgLALQgMAMgRAAgAV9uRQgQAAgMgMQgLgLgBgRQABgRALgLQAMgMAQAAICWAAQARAAAMAMQALALAAARQAAARgLALQgMAMgRAAgAejuSQgQAAgMgMQgLgLgBgRQABgRALgLQAMgMAQAAICWAAQARAAAMAMQALALAAARQAAARgLALQgMAMgRAAgEAnJgOTQgQAAgMgMQgLgLgBgRQABgRALgLQAMgMAQAAICWAAQARAAAMAMQALALAAARQAAARgLALQgMAMgRAAgEAvvgOUQgQAAgMgMQgLgLgBgRQABgRALgLQAMgMAQAAICWAAQARAAAMAMQALALAAARQAAARgLALQgMAMgRAAg");
	this.shape_2.setTransform(697.3513,549.1031);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF33").s().p("A2MPZQgNgLgBgQQAAgRALgMQALgNAQgBICUgHQAQgBANALIADAEIAFgFQALgNAQgBICWgIQARAAAMALQANALAAAQQABARgLAMQgLANgQAAIiWAIQgRABgMgLIgEgEIgEAGQgLAMgRABIiTAHIgDABQgPAAgLgLgAqTOwQgNgLgBgQQAAgRALgMQALgNAQgBICWgIQARAAAMALQANALAAAQQABARgLAMQgLANgQAAIiWAIIgDABQgPAAgLgLgAhuOTQgNgLgBgQQAAgRALgMQALgNAQgBICVgIQARAAAMALQANALAAAQQABARgLAMQgLANgQAAIiVAIIgDABQgPAAgLgLgAG2N2QgNgLgBgQQAAgRALgMQALgNAQgBICWgIQARAAAMALQANALAAAQQABARgLAMQgLANgQAAIiWAIIgDABQgPAAgLgLgAPbNZQgNgLgBgQQAAgRALgMQALgNAQgBICWgIQARAAAMALQANALAAAQQABARgLAMQgLANgQAAIiWAIIgDABQgPAAgLgLgAYAM8QgNgLgBgQQAAgRALgMQALgNAQgBICWgIQARAAAMALQANALAAAQQABARgLAMQgLANgQAAIiWAIIgDABQgPAAgLgLgEAglAMfQgNgLgBgQQAAgRALgMQALgNAQgBICWgIQARAAAMALQANALAAAQQABARgLAMQgLANgQAAIiWAIIgDABQgPAAgLgLgEApKAMDQgNgLgBgRQAAgQALgNQALgMAQgBICWgIQARgBAMALQANALAAARQABAQgLANQgLAMgQABIiWAIIgDAAQgPAAgLgKgEA5WAGdQgMgMAAgRIAAiQQAAgRAMgLQALgMARAAQARAAALAMQAMALAAARIAACQQAAARgMAMQgLALgRAAQgRAAgLgLgEA5xgAKQgRAAgMgMQgLgMAAgQIABiWQAAgRAMgMQAMgLAQAAQARAAALAMQAMAMAAAQIgBCWQAAARgMALQgMAMgQAAIAAAAgEA5XgI8QgLgLgBgRIAAgeQABgRALgLQAMgMAQAAQARAAAMAMQALALAAARIAAAeQAAARgLALQgMAMgRAAQgQAAgMgMgEA52gMKIh8hUQgNgJgDgQQgDgQAJgOQAJgOAQgDQARgDANAJIB8BUQAOAKADAQQADAQgJAOQgJAOgRADIgHAAQgMAAgLgHgEg6ogONQgMgMAAgQQAAgRALgMQAMgLARgBICWgBQAQAAAMAMQAMAMAAAQQAAARgMALQgLAMgRAAIiWABIAAAAQgQAAgMgLgEgyCgOPQgMgMAAgQQAAgRALgMQAMgLARgBICWgBQAQAAAMAMQAMAMAAAQQAAARgMALQgLAMgRAAIiWABIAAAAQgQAAgMgLgEgpcgORQgMgMAAgQQAAgRALgMQAMgLARgBICWgBQAQAAAMAMQAMAMAAAQQAAARgMALQgLAMgRAAIiWABIAAAAQgQAAgMgLgEgg2gOTQgMgMAAgQQAAgRALgMQAMgLARgBICWgBQAQAAAMAMQAMAMAAAQQAAARgMALQgLAMgRAAIiWABIAAAAQgQAAgMgLgA30uKQgRAAgLgLQgMgMAAgRQAAgQAMgMQALgMARAAICWAAQARAAALAMQAMAMAAAQQAAARgMAMQgLALgRAAgAvquWQgMgMAAgQQAAgRALgMQAMgLARgBICWgBQAQAAAMAMQAMAMAAAQQAAARgMALQgLAMgRAAIiWABIAAAAQgQAAgMgLgAmouNQgRAAgLgLQgMgMAAgRQAAgQAMgMQALgMARAAICWAAQARAAALAMQAMAMAAAQQAAARgMAMQgLALgRAAgAB9uOQgRAAgLgLQgMgMAAgRQAAgQAMgMQALgMARAAICWAAQARAAALAMQAMAMAAAQQAAARgMAMQgLALgRAAgAKjuPQgRAAgLgLQgMgMAAgRQAAgQAMgMQALgMARAAICWAAQARAAALAMQAMAMAAAQQAAARgMAMQgLALgRAAgATJuQQgRAAgLgLQgMgMAAgRQAAgQAMgMQALgMARAAICWAAQARAAALAMQAMAMAAAQQAAARgMAMQgLALgRAAgAbvuRQgRAAgLgLQgMgMAAgRQAAgQAMgMQALgMARAAICWAAQARAAALAMQAMAMAAAQQAAARgMAMQgLALgRAAgEAkVgOSQgRAAgLgLQgMgMAAgRQAAgQAMgMQALgMARAAICWAAQARAAALAMQAMAMAAAQQAAARgMAMQgLALgRAAgEAs7gOTQgRAAgLgLQgMgMAAgRQAAgQAMgMQALgMARAAICWAAQARAAALAMQAMAMAAAQQAAARgMAMQgLALgRAAg");
	this.shape_3.setTransform(692.7511,548.203);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},2).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(6).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).wait(3));

	// Layer_12
	this.instance_1 = new lib.anglg2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(606.5,432.15,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(591,468,627,448.5);
// library properties:
lib.properties = {
	id: '0B15954D4C83D64684449CC30F5E358F',
	width: 1200,
	height: 900,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/Flow_atlas_.png", id:"Flow_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0B15954D4C83D64684449CC30F5E358F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;