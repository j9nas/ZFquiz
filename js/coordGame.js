//getting started with THREE
//starting a render with the grid
//adding an Object
//adding gimbal
//copying a controlpanel

//adding sliders for coordinates?
//adding changes to the scene?
//a robot 3pc kintematic?

function grid () {
  var renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color(0xEEEEEE));
  
  //var wide = window.innerWidth -600;
  //var high = window.innerHeight-200;
  renderer.setSize(window.innerWidth , window.innerHeight);
  
  var scene = new THREE.Scene();

//(fov,aspectratio,near,far)
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.x = 50;
  camera.position.y = 50;
  camera.position.z = 50;
  camera.lookAt(scene.position);

  var redMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
  var greenMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00});
  var blueMaterial = new THREE.MeshLambertMaterial({color: 0x0000ff});
  var blackMaterial = new THREE.LineBasicMaterial({color: 0x000000});

  var kosGroup = new THREE.Object3D();
  var kos = new THREE.Object3D();

  var dot = new THREE.Mesh(new THREE.SphereGeometry(1,10,10), blackMaterial);
  dot.position.x = 0;
  dot.position.y = 0;
  dot.position.z = 0;
  kosGroup.add(dot);

  var xAxis = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 10, 10),
  redMaterial);
  var xAxisPointer = new THREE.Mesh(new THREE.CylinderGeometry(1, 0.2, 2, 10),
  redMaterial);
  xAxis.position.x = 5;
  xAxis.rotation.z = .5 * Math.PI;
  xAxisPointer.rotation.z = .5 * Math.PI;
  xAxisPointer.position.x = 10;
  kosGroup.add(xAxisPointer);
  kosGroup.add(xAxis);

  var yAxis = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 10, 10),
  blueMaterial);
  var yAxisPointer = new THREE.Mesh(new THREE.CylinderGeometry(1, 0.2, 2, 10),
  blueMaterial);
  yAxis.position.z = 5;
  yAxis.rotation.x = .5 * Math.PI;
  yAxisPointer.rotation.x = -(.5 * Math.PI);
  yAxisPointer.position.z = 10;
  kosGroup.add(yAxisPointer);
  kosGroup.add(yAxis);

  var zAxis = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 10, 10),
  greenMaterial);
  var zAxisPointer = new THREE.Mesh(new THREE.CylinderGeometry(1, 0.2, 2, 10),
  greenMaterial);
  zAxis.position.y = 5;
  zAxisPointer.position.y = 10;
  zAxisPointer.rotation.x = Math.PI;
  kosGroup.add(zAxisPointer);
  kosGroup.add(zAxis);

  kos.add(kosGroup);
  kos.position.x = 0;
  kos.position.y = 0;
  kos.position.z = -2;
  scene.add(kos);

//gimbal addition
  gimbalGroup = new THREE.Object3D();
  gimbal = new THREE.Object3D();

  var torusGeometry = new THREE.TorusGeometry(15.5, .1, 30, 60);
  [[redMaterial, 'z'],
   [greenMaterial, 'x'],
   [blueMaterial, 'y']].forEach(function (params) {
     var ring = new THREE.Mesh(torusGeometry, params[0]);
     ring.rotation[params[1]] = 0.5*Math.PI;
     gimbalGroup.add(ring);
   });

  var axisGeometry = new THREE.CylinderGeometry( .4, .4, 16, 32 );
  var axisTipGeometry = new THREE.CylinderGeometry( 0, .6, 3, 32 );
  [[redMaterial, 'z', 5, 'x'],
   [greenMaterial, 'y', 5, 'y'],
   [blueMaterial, 'x', -5, 'z']].forEach(function (params) {
     var axisTip = new THREE.Mesh(axisTipGeometry, params[0]);
     axisTip.position.y = 9;
     var axis = new THREE.Object3D();
     axis.add(new THREE.Mesh(axisGeometry, params[0]));
     axis.add(axisTip);
     axis.position[params[1]] = params[2];
     axis.rotation[params[3]] = 0.5*Math.PI;
     gimbalGroup.add(axis);
   });

  gimbalGroup.add(
    new THREE.Mesh(
      new THREE.SphereGeometry(1,32,32),
      new THREE.MeshLambertMaterial({color: 0x000000})
    ));

  gimbal.add(gimbalGroup);
  gimbalGroup.rotation.y = .5 * Math.PI;
  gimbal.position.z = -2;
  gimbalGroup.scale.multiplyScalar(0.8);





  var controls = {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    order: 'XYZ',
    'kos': true,
    reset: function () {
      controls['1'] = 0;
      controls['2'] = 0;
      controls['3'] = 0;
      controls['4'] = 0;
      controls['5'] = 0;
      controls['6'] = 0;
      for (var i in gui.__controllers) {
        gui.__controllers[i].updateDisplay();
      }
      rotate();
    }
  };

  var rotate = function () {
    var m = new THREE.Matrix4();
    for (var i = 1; i <= 3; i++) {
      var n = new THREE.Matrix4();
      var angle = controls[i] * Math.PI / 180;
      switch (controls.order.charAt(i-1)) {
        case "x": case "X": n.makeRotationX(angle); break;
        case "y": case "Y": n.makeRotationY(angle); break;
        case "z": case "Z": n.makeRotationZ(angle); break;
      };
      m.multiply(n);
    }
    kos.rotation.setFromRotationMatrix(m);
    gimbal.rotation.setFromRotationMatrix(m);
    render();
  };


//function setting up and variables needed!
  var moving = function () {
    kos.position.x = controls[4]
    kos.position.y = controls[5]
    kos.position.z = controls[6]
    render();
  };

  var gui = new dat.GUI();
  gui.add(controls, '1', -360, 360).step(5).onChange(rotate);
  gui.add(controls, '2', -360, 360).step(5).onChange(rotate);
  gui.add(controls, '3', -360, 360).step(5).onChange(rotate);

  gui.add(controls, '4', -50, 50).step(2).onChange(moving);
  gui.add(controls, '5', -50, 50).step(2).onChange(moving);
  gui.add(controls, '6', -50, 50).step(2).onChange(moving);

  gui.add(controls, 'order', ['XYZ', 'ZYZ']).onChange(controls.reset);
  gui.add(controls, 'reset');
  gui.add(controls, 'kos').onChange(function (newValue) {
    scene.remove(newValue ? gimbal : kos);
    scene.add(newValue ? kos : gimbal);
    render();
  });
  gui.close();

  var directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.castShadow = true;
  directionalLight.position.x = -20;
  directionalLight.position.y = 50;
  directionalLight.position.z = -20;
  directionalLight.intensity = 0.8;
  scene.add(directionalLight);  

  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.castShadow = true;
  spotLight.position.x = 30;
  spotLight.position.y = 30;
  spotLight.position.z = 40;
  spotLight.intensity = 0.9;
  scene.add(spotLight);  

  var blackBasicMaterial = new THREE.LineBasicMaterial({color: 0x000000});
  var redBasicMaterial = new THREE.LineBasicMaterial({color: 0xcc0000});
  

  //grid/mesh building
  var lineGeometry = new THREE.Geometry();
  lineGeometry.vertices.push(new THREE.Vector3(0,-100,-1000));
  lineGeometry.vertices.push(new THREE.Vector3(0,-100,2000));
  var line;
  for (var x = -600; x <= 200; x += 12.5) {
    line = new THREE.Line(lineGeometry, blackBasicMaterial);
    line.position.x = x;
    scene.add(line);
  }
  for (var z = -830; z <= 400; z += 12.5) {
    line = new THREE.Line(lineGeometry, blackBasicMaterial);
    line.rotation.y = .5*Math.PI;
    line.position.z = z;
    scene.add(line);
  }

  document.getElementById("output").appendChild(renderer.domElement);
  var render = function () {
    renderer.render(scene, camera);
  };

rotate(); //first initialization or else blackscreen
}

window.onload = grid;
