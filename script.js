// Esto agrega a la pantalla el valor de la calculadora que toquemos
function agregarALaPantalla(valor){
  // capturo el Id De pantalla , ya que es donde se van a mostrar los numeros
  document.getElementById('pantalla').value += valor
  console.log(document.getElementById('pantalla').value)
  
}

//Esta accion vacia la pantalla
function limpiarPantalla(){
  document.getElementById('pantalla').value = ''
}

//ESTA ACCION 
function calcular(){
  const valorPantalla = document.getElementById('pantalla').value
  const resultado = eval(valorPantalla);
  document.getElementById('pantalla').value = resultado
}


