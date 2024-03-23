import { useState } from "react";
import "./BankAccounts.css";

function BankAccounts() {
  const [formAccount, setFormAccount] = useState({
    banco: "",
    cuenta: "",
    usuario: "",
    contrasenya: "",
  });

  const getDataForm = (event: any) => {
    const { name, value } = event.target;
    setFormAccount({
      ...formAccount,
      [name]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setFormAccount({
      banco: "",
      cuenta: "",
      usuario: "",
      contrasenya: "",
    });

    console.log(formAccount);
  };

  return (
    <>
      <div className="caja">
        <h1>CUENTA BANCARIA</h1>
        <div className="container__AccountData">
          <fieldset className="main__fieldset">
            <legend className="main__legend">
              Introduce tu Cuenta Bancaria
            </legend>
            <div className="form_main">
              <form onSubmit={handleSubmit}>
                <div className="form_box">
                  <div className="form_ent">
                    <label>Entidad Bancaria</label>
                    <input
                      type="text"
                      name="bank"
                      value={formAccount.banco}
                      onChange={getDataForm}
                      placeholder="Introduce Nombre Entidad"
                    ></input>
                  </div>
                  <div className="form_num">
                    <label>Número de Cuenta</label>
                    <input
                      type="text"
                      name="numberAccount"
                      value={formAccount.cuenta}
                      onChange={getDataForm}
                      placeholder="Introduce Número"
                    ></input>
                  </div>
                  <div className="form_pin">
                    <label>Usuario</label>
                    <input
                      type="text"
                      name="userAccount"
                      value={formAccount.usuario}
                      onChange={getDataForm}
                      placeholder="Introduce Usuario"
                    ></input>
                  </div>
                  <div className="form_csv">
                    <label>Contraseña</label>
                    <input
                      type="text"
                      name="pswAccount"
                      value={formAccount.contrasenya}
                      onChange={getDataForm}
                      placeholder="Introduce Contraseña"
                    ></input>
                  </div>
                  <button type="submit">Guardar</button>
                </div>
              </form>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default BankAccounts;
