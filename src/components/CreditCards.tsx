
import { useState } from "react";
import "./CreditCard.css";

interface FormData {
  entidad: string;
  numero: string;
  pin: string;
  csv: string;
}

interface CreditCardsProps {
  onFormSubmit: (data: FormData) => void;
}

function CreditCards({ onFormSubmit }: CreditCardsProps) {


    const [formCard, setFormCard] = useState<FormData>({
      entidad: '',
      numero: '',
      pin: '',
      csv: '',
    });

  const [data, setData] = useState([]);


  const getDataForm = (event: any) => {
    const { name, value } = event.target;
    
    setFormCard({
      ...formCard,
      [name]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = { ...formCard };
 
    setData([...data, formData]);

    

    // const folderPath = path.join(__dirname, 'archivos_csv');
    // if (!fs.existsSync(folderPath)) {
    //   fs.mkdirSync(folderPath);
    // }

    // // Crear el archivo CSV
    // const csvData = `${formData.entidad},${formData.numero},${formData.pin},${formData.csv}\n`;

    // const filePath = path.join(folderPath, 'tarjetas.csv');
    // fs.appendFile(filePath, csvData, (err: any) => {
    //   if (err) {
    //     console.error('Error al guardar el archivo CSV:', err);
    //     return;
    //   }
    //   console.log('Datos guardados en el archivo CSV correctamente.');
    // });
    
    
    setFormCard({
      entidad: "",
      numero: "",
      pin: "",
      csv: "",
    });
    
    console.log(data);
  };

  return (
    <>
      <div className="caja">
        <h1>TARJETAS</h1>
        <div className="container__CardsData">
          <fieldset className="main__fieldset">
            <legend className="main__legend">
              Introduce Tarjeta de Crédito
            </legend>
            <div className="form_main">
              <form onSubmit={handleSubmit}>
                <div className="form_box">
                  <div className="form_ent">
                    <label>Entidad</label>
                    <input
                      type="text"
                      name="entidad"
                      value={formCard.entidad}
                      onChange={getDataForm}
                      placeholder="Introduce Nombre Entidad"
                    ></input>
                  </div>
                  <div className="form_num">
                    <label>Número</label>
                    <input
                      type="text"
                      name="numero"
                      value={formCard.numero}
                      onChange={getDataForm}
                      placeholder="Introduce Número"
                    ></input>
                  </div>
                  <div className="form_pin">
                    <label>PIN</label>
                    <input
                      type="text"
                      name="pin"
                      value={formCard.pin}
                      onChange={getDataForm}
                      placeholder="Introduce PIN"
                    ></input>
                  </div>
                  <div className="form_csv">
                    <label>CSV</label>
                    <input
                      type="text"
                      name="csv"
                      value={formCard.csv}
                      onChange={getDataForm}
                      placeholder="Introduce CSV"
                    ></input>
                  </div>
                  <button type="submit">Guardar</button>
                </div>
              </form>
            </div>
          </fieldset>

          <div className="card_draw"></div>
        </div>
      </div>
    </>
  );
}

export default CreditCards;
