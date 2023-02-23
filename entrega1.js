function calcularRendimientoYCamiones() {
  // Pedir el cultivo al usuario
  var cultivo = prompt("Ingrese el cultivo a cosechar (maíz o soja):");
  // Verificar si el cultivo es válido
  if (cultivo.toLowerCase() !== "maíz" && cultivo.toLowerCase() !== "soja") {
      alert("Cultivo no válido");
      return;
  }

  // Pedir los datos de rendimiento según el cultivo
  var numMazorcas, numGranos, numPlantas, pesoGranos, factorEstrés, rendimiento;
  if (cultivo.toLowerCase() === "maíz") {
      numMazorcas = parseInt(prompt("Ingrese el número de mazorcas por hectárea:"));
      numGranos = parseInt(prompt("Ingrese el número de granos por mazorca:"));
      var granosHa = numMazorcas * numGranos;
      rendimiento = (granosHa * 300) / 1000000;
  } else if (cultivo.toLowerCase() === "soja") {
      numPlantas = parseInt(prompt("Ingrese el número de plantas por metro cuadrado:"));
      Granos= parseInt(prompt("Ingrese el número de granos por planta:"));
      pesoGranos = parseFloat(prompt("Ingrese el peso de 1000 granos (en gramos):"));
      //factorEstrés = parseFloat(prompt("Ingrese el factor de estrés en llenado (de 0 a 1):"));
      var GranosPormetro= numPlantas*Granos
      var rendimiento = GranosPormetro*pesoGranos*0.001;
      
  }

  // Pedir el número de hectáreas a cosechar
  var numHectareas = parseInt(prompt("Ingrese el número de hectáreas a cosechar:"));

  // Calcular el peso total de la cosecha y el número de camiones necesarios
  var pesoTotal = numHectareas * rendimiento ;
  var numCamiones = Math.ceil(pesoTotal / 32000);

  // Mostrar el resultado al usuario
  alert("El rendimiento es de " + rendimiento + " toneladas por hectárea. Para cosechar " + numHectareas + " hectáreas de " + cultivo + " con este rendimiento, se necesitan " + numCamiones + " camiones.");
}

calcularRendimientoYCamiones()