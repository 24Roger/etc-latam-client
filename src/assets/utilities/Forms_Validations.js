class Form {
  /**
   * Validate Login
   * @param str
   * @returns boolean
   */
  static validEmail(str) {
    let regex =
    /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    // /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    return regex.test(str);
  }

  static validPassword(str) {
    let regex =
      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$.*/;
    return regex.test(str);
  }

 


  /**
   * Minimum length of string
   * @param str
   * @param length
   * @returns
   */
  static minLength(str, length) {
    let isInvalid = false;

    if (str.length < length) {
      isInvalid = true;
    }

    return isInvalid;
  }

  /**
   * Form Validator
   * @param  obj
   * @returns
   */
  static validator(obj) {
    let keys = Object.entries(obj);
    let results = [];
    let validations = null;

    keys.map((key) => {
      if ("isRequired" in key[1] && key[1].isRequired) {
        if (key[1].value.length === 0) {
          results.push({
            [key[0]]: [`Campo requerido.`],
          });
        } else {
          if ("isEmail" in key[1] && key[1].isEmail) {
            let isValidEmail = Form.validEmail(key[1].value);

            if (!isValidEmail) {
              results.push({
                [key[0]]: [`Debe ser un correo valido.`],
              });
            }
          }
          if ("isPassword" in key[1] && key[1].isPassword) {
            let isValidPassword = Form.validPassword(key[1].value);

            if (!isValidPassword) {
              results.push({
                [key[0]]: [
                  `Debe contener al menos una letra mayuscula, una minuscula, un numero y un caracter especial.`,
                  // `La ${key[0]} debe contener al menos una letra Mayuscula, una Minuscula, un Numero y un Caracter Especial.ejemplo: Aa3@#$%&*`,
                ],
              });
            }
          }

          
          if (
            "minLength" in key[1] &&
            Form.minLength(key[1].value, key[1].minLength)
          ) {
            results.push({
              [key[0]]: [
                `Debe tener al menos ${key[1].minLength} caracteres.`,
                // `La ${key[0]} debe tener al menos ${key[1].minLength} caracteres.`,
              ],
            });
          }
        }
      } 
      // else if ("isEmail" in key[1]) {
      //   let isValidEmail = Form.validEmail(key[1].value);

      //   if (!isValidEmail) {
      //     results.push({
      //       [key[0]]: [`The ${key[0]} must be valid email`],
      //     });
      //   }
      // } else if (
      //   "minLength" in key[1] &&
      //   Form.minLength(key[1].value, key[1].minLength)
      // ) {
      //   results.push({
      //     [key[0]]: [
      //       `The ${key[0]} must at least ${key[1].minLength} characters.`,
      //     ],
      //   });
      // }
      return results;
    });

    results = Object.assign({}, ...results.map((result) => result));

    if (Object.keys(results).length > 0) {
      validations = {
        errors: results,
      };
    } else {
      validations = null;
    }

    return validations;
  }
}

export default Form;
