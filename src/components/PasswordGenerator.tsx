import "./PasswordGenerator.css";
import { useState } from "react";

function PasswordGenerator() {
  // ---- Recoger Contraseña ---- //

  const [form, setForm] = useState({
    aplicacion: "",
    usuario: "",
    contrasenya: "",
  });

  const getDataForm = (event: any) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setForm({
      aplicacion: "",
      usuario: "",
      contrasenya: "",
    });
  };

  // ---- Generar Contraseña ---- //

  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

  const symbols = "!@#$%&*()-_+=?/~";

  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function generatePassword(
    length: any,
    includeSymbols: any,
    includeUpper: any
  ) {
    let allCharacters = lowerCaseLetters;

    if (includeSymbols) {
      allCharacters += symbols;
    }

    if (includeUpper) {
      allCharacters += upperCaseLetters;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }

    return password;
  }

  const [length, setLength] = useState(8);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [password, setPassword] = useState("");

  const handleLengthChange = (event: any) => {
    setLength(event.target.value);
  };

  const handleSymbolChange = (event: any) => {
    setIncludeSymbols(event.target.checked);
  };

  const handleUpperChange = (event: any) => {
    setIncludeUpper(event.target.checked);
  };

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(length, includeSymbols, includeUpper);
    setPassword(newPassword);
    console.log(newPassword);
  };

  const copyPassword = () => {
    const passwordElement = document.getElementById("passwordSpan");
    if (passwordElement) {
      const passwordToCopy = passwordElement.innerText;
      navigator.clipboard
        .writeText(passwordToCopy)
        .then(() => {
          console.log("Contraseña copiada al portapapeles: " + passwordToCopy);
        })
        .catch((err) => {
          console.error("Error al copiar la contraseña: ", err);
        });
    }
  };

  return (
    <>
      <div className="caja">
        <h1>CONTRASEÑAS</h1>
        <div className="container__data">
          <fieldset>
            <legend>Introduce tu contraseña</legend>
            <div className="form_main">
              <form onSubmit={handleSubmit}>
                <div className="form_box">
                  <div className="form_app">
                    <label>Aplicación</label>
                    <input
                      type="text"
                      name="aplicacion"
                      value={form.aplicacion}
                      onChange={getDataForm}
                      placeholder="Introduce Nombre de la App"
                    ></input>
                  </div>
                  <div className="form_user">
                    <label>Usuario</label>
                    <input
                      type="text"
                      name="usuario"
                      value={form.usuario}
                      onChange={getDataForm}
                      placeholder="Introduce Usuario"
                    ></input>
                  </div>
                  <div className="form_psw">
                    <label>Contraseña</label>
                    <input
                      type="text"
                      name="contrasenya"
                      value={form.contrasenya}
                      onChange={getDataForm}
                      placeholder="Introduce Contraseña"
                    ></input>
                  </div>
                  <button type="submit">Guardar</button>
                </div>
              </form>
            </div>
          </fieldset>

          <fieldset>
            <legend>Genera tu contraseña</legend>
            <div className="generator_main">
              <div className="generator_range">
                <label>Cantidad de caracteres</label>
                <input
                  type="number"
                  max={12}
                  value={length}
                  onChange={handleLengthChange}
                  id="amount_number"
                />
              </div>
              <div className="generator_checkbox">
                <div className="generator_symbols">
                  <label className="container">
                    Símbolos
                    <input type="checkbox" onChange={handleSymbolChange} />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="generator_upper">
                  <label className="container">
                    Mayúsculas
                    <input type="checkbox" onChange={handleUpperChange} />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <button onClick={handleGeneratePassword}>
                Genera una contraseña
              </button>
              <div className="generator_result">
                <span id="passwordSpan">{password}</span>
                <div className="copy" onClick={copyPassword}>
                  <svg viewBox="0 -960 960 960">
                    <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
                  </svg>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
