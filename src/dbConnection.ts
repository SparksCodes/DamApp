
export default function connection(tab: String, data: any) {
  let page = "";

  switch (tab) {
    case "passwords":
      page = "Contraseñas";
      break;
    case "creditCard":
      page = "Tarjetas_Credito";
      break;
    case "bankAccount":
      page = "Cuenta_Bancaria";
      break;
    default:
      console.log("La opción no es válida");
  }

  // Abre o crea una base de datos en IndexedDB
  const request = indexedDB.open(`${page}`, 1);

  request.onsuccess = function (event: any) {
    // Accede a la base de datos
    const db = event.target.result;

    // Inicia una transacción
    const transaction = db.transaction([`${tab}`], "readwrite");

    // Accede al almacén de objetos
    const objectStore = transaction.objectStore(`${tab}`);

    // Define los datos que deseas almacenar
    const datos = data;

    // Agrega los datos al almacén de objetos
    const request = objectStore.add(datos);

    request.onsuccess = function () {
      console.log("Datos guardados correctamente en IndexedDB.");
    };

    request.onerror = function (event: any) {
      console.error(
        "Error al guardar los datos en IndexedDB:",
        event.target.error
      );
    };
  };

  request.onerror = function (event: any) {
    console.error(
      "Error al abrir la base de datos en IndexedDB:",
      event.target.error
    );
  };
}



