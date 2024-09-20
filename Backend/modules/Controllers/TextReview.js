// require('dotenv').config();
// const { OpenAI } = require('openai');

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// async function revisarTexto(req, res) {
//   const texto = req.body.texto;  // Recibe el texto del usuario

//   try {
//     const respuesta = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: [
//         {
//           role: 'system',
//           content: 'You are an assistant that helps review and suggest improvements for philosophical essays.'
//         },
//         {
//           role: 'user',
//           content: `Revisa el siguiente texto de un ensayo filosófico. Primero, proporciona un análisis de la redacción y la coherencia del texto con respecto al problema filosófico seleccionado. Luego, ofrece sugerencias concretas para mejorar la redacción final del ensayo, teniendo en cuenta la claridad, la estructura y la pertinencia al tema:\n\n${texto}`
//         }
//       ],
//       max_tokens: 1500,  // Ajusta según la longitud del texto que esperas recibir
//       headers: {
//         'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` 
//       }
//     });

//     // Enviar la respuesta de la revisión al usuario
//     res.json({ revision: respuesta.choices[0].message.content.trim() });
//   } catch (error) {
//     console.error("Error revisando el texto:", error);
//     res.status(500).json({ error: "Error revisando el texto." });
//   }
// }

// module.exports = revisarTexto;

require('dotenv').config();

async function revisarTexto(req, res) {
  const texto = req.body.texto;  // Recibe el texto del usuario

  try {
    const response = await fetch('https://api.languagetool.org/v2/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        text: texto,  // El texto a revisar
        language: 'es',  // Cambia a 'en' para inglés si es necesario
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Procesar las sugerencias de la respuesta
    const correcciones = data.matches.map(match => ({
      mensaje: match.message,
      sugerencias: match.replacements.map(replacement => replacement.value),
      contexto: match.context.text
    }));

    // Enviar las correcciones al usuario
    res.json({ correcciones });
  } catch (error) {
    console.error("Error revisando el texto:", error);
    res.status(500).json({ error: "Error revisando el texto." });
  }
}

module.exports = revisarTexto;