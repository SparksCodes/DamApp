export default function readData(tab: String): Promise<any[]>  {
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
  
    // Abrir la base de datos
    const request = indexedDB.open(page, 1);
  
    return new Promise((resolve, reject) => {
      request.onsuccess = function (event: any) {
        // Acceder a la base de datos
        const db = event.target.result;
  
        // Iniciar una transacción de solo lectura
        const transaction = db.transaction([tab], "readonly");
  
        // Acceder al almacén de objetos
        const objectStore = transaction.objectStore(tab);
  
        const data: any = [];
  
        // Abrir un cursor para recorrer los datos
        objectStore.openCursor().onsuccess = function (event: any) {
          const cursor = event.target.result;
          if (cursor) {
            // Agregar los datos al array
            data.push({ id: cursor.key, ...cursor.value });
            cursor.continue();
          } else {
            // Resuelve la promesa con los datos obtenidos
            resolve(data);
          }
        };
  
        transaction.onerror = function (event: any) {
          // Rechaza la promesa si hay un error en la transacción
          reject(event.target.error);
        };
      };
  
      request.onerror = function (event: any) {
        // Rechaza la promesa si hay un error al abrir la base de datos
        reject(event.target.error);
      };
    });
  }
  